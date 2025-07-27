import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { createHmac } from "node:crypto";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Twitter API credentials
const TWITTER_API_KEY = Deno.env.get("TWITTER_CONSUMER_KEY")?.trim();
const TWITTER_API_SECRET = Deno.env.get("TWITTER_CONSUMER_SECRET")?.trim();
const TWITTER_ACCESS_TOKEN = Deno.env.get("TWITTER_ACCESS_TOKEN")?.trim();
const TWITTER_ACCESS_TOKEN_SECRET = Deno.env.get("TWITTER_ACCESS_SECRET")?.trim();

// Facebook API credentials
const FACEBOOK_ACCESS_TOKEN = Deno.env.get("FACEBOOK_ACCESS_TOKEN")?.trim();

// WhatsApp API credentials
const WHATSAPP_ACCESS_TOKEN = Deno.env.get("WHATSAPP_ACCESS_TOKEN")?.trim();

function validateTwitterCredentials() {
  if (!TWITTER_API_KEY || !TWITTER_API_SECRET || !TWITTER_ACCESS_TOKEN || !TWITTER_ACCESS_TOKEN_SECRET) {
    throw new Error("Missing Twitter API credentials");
  }
}

function generateOAuthSignature(
  method: string,
  url: string,
  params: Record<string, string>,
  consumerSecret: string,
  tokenSecret: string
): string {
  const signatureBaseString = `${method}&${encodeURIComponent(url)}&${encodeURIComponent(
    Object.entries(params)
      .sort()
      .map(([k, v]) => `${k}=${v}`)
      .join("&")
  )}`;
  
  const signingKey = `${encodeURIComponent(consumerSecret)}&${encodeURIComponent(tokenSecret)}`;
  const hmacSha1 = createHmac("sha1", signingKey);
  const signature = hmacSha1.update(signatureBaseString).digest("base64");
  
  return signature;
}

function generateTwitterOAuthHeader(method: string, url: string): string {
  const oauthParams = {
    oauth_consumer_key: TWITTER_API_KEY!,
    oauth_nonce: Math.random().toString(36).substring(2),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: TWITTER_ACCESS_TOKEN!,
    oauth_version: "1.0",
  };

  const signature = generateOAuthSignature(
    method,
    url,
    oauthParams,
    TWITTER_API_SECRET!,
    TWITTER_ACCESS_TOKEN_SECRET!
  );

  const signedOAuthParams = {
    ...oauthParams,
    oauth_signature: signature,
  };

  const entries = Object.entries(signedOAuthParams).sort((a, b) => a[0].localeCompare(b[0]));

  return "OAuth " + entries
    .map(([k, v]) => `${encodeURIComponent(k)}="${encodeURIComponent(v)}"`)
    .join(", ");
}

async function postToTwitter(text: string, mediaUrls?: string[]): Promise<any> {
  validateTwitterCredentials();
  
  let mediaIds = [];
  
  // Upload media if provided
  if (mediaUrls && mediaUrls.length > 0) {
    for (const mediaUrl of mediaUrls) {
      try {
        // Download media first
        const mediaResponse = await fetch(mediaUrl);
        const mediaBuffer = await mediaResponse.arrayBuffer();
        const mediaType = mediaResponse.headers.get('content-type') || 'image/jpeg';
        
        // Upload media to Twitter
        const uploadUrl = "https://upload.twitter.com/1.1/media/upload.json";
        const uploadMethod = "POST";
        const uploadOauthHeader = generateTwitterOAuthHeader(uploadMethod, uploadUrl);
        
        const formData = new FormData();
        formData.append('media', new Blob([mediaBuffer], { type: mediaType }));
        
        const uploadResponse = await fetch(uploadUrl, {
          method: uploadMethod,
          headers: {
            Authorization: uploadOauthHeader,
          },
          body: formData,
        });
        
        const uploadResult = await uploadResponse.json();
        if (uploadResult.media_id_string) {
          mediaIds.push(uploadResult.media_id_string);
        }
      } catch (error) {
        console.error('Error uploading media to Twitter:', error);
      }
    }
  }
  
  const url = "https://api.x.com/2/tweets";
  const method = "POST";
  const oauthHeader = generateTwitterOAuthHeader(method, url);

  const tweetData: any = { text };
  if (mediaIds.length > 0) {
    tweetData.media = { media_ids: mediaIds };
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      Authorization: oauthHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tweetData),
  });

  const responseText = await response.text();
  
  if (!response.ok) {
    throw new Error(`Twitter API error: ${response.status} - ${responseText}`);
  }

  return JSON.parse(responseText);
}

async function postToFacebook(message: string, mediaUrls?: string[]): Promise<any> {
  if (!FACEBOOK_ACCESS_TOKEN) {
    throw new Error("Missing Facebook access token");
  }

  // If media is provided, use the photo/video endpoint
  if (mediaUrls && mediaUrls.length > 0) {
    const mediaUrl = mediaUrls[0]; // Facebook allows one media per post via this method
    const mediaResponse = await fetch(mediaUrl);
    const contentType = mediaResponse.headers.get('content-type') || '';
    
    let endpoint = '';
    let mediaField = '';
    
    if (contentType.startsWith('video/')) {
      endpoint = 'https://graph.facebook.com/me/videos';
      mediaField = 'source';
    } else {
      endpoint = 'https://graph.facebook.com/me/photos';
      mediaField = 'url';
    }
    
    const postData: any = {
      message,
      access_token: FACEBOOK_ACCESS_TOKEN,
    };
    
    if (contentType.startsWith('video/')) {
      // For videos, we need to upload the file
      const videoBuffer = await mediaResponse.arrayBuffer();
      const formData = new FormData();
      formData.append('source', new Blob([videoBuffer], { type: contentType }));
      formData.append('description', message);
      formData.append('access_token', FACEBOOK_ACCESS_TOKEN);
      
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });
      
      const responseText = await response.text();
      
      if (!response.ok) {
        throw new Error(`Facebook API error: ${response.status} - ${responseText}`);
      }
      
      return JSON.parse(responseText);
    } else {
      // For images, we can use URL
      postData[mediaField] = mediaUrl;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      
      const responseText = await response.text();
      
      if (!response.ok) {
        throw new Error(`Facebook API error: ${response.status} - ${responseText}`);
      }
      
      return JSON.parse(responseText);
    }
  }

  // Text-only post
  const url = `https://graph.facebook.com/me/feed`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      access_token: FACEBOOK_ACCESS_TOKEN,
    }),
  });

  const responseText = await response.text();
  
  if (!response.ok) {
    throw new Error(`Facebook API error: ${response.status} - ${responseText}`);
  }

  return JSON.parse(responseText);
}

async function postToWhatsApp(message: string, phoneNumber: string, mediaUrls?: string[]): Promise<any> {
  if (!WHATSAPP_ACCESS_TOKEN) {
    throw new Error("Missing WhatsApp access token");
  }

  const url = `https://graph.facebook.com/v17.0/me/messages`;
  
  // Send media if provided
  if (mediaUrls && mediaUrls.length > 0) {
    const mediaUrl = mediaUrls[0]; // WhatsApp supports one media per message
    const mediaResponse = await fetch(mediaUrl);
    const contentType = mediaResponse.headers.get('content-type') || '';
    
    let messageType = 'image';
    if (contentType.startsWith('video/')) {
      messageType = 'video';
    }
    
    const messageData = {
      messaging_product: 'whatsapp',
      to: phoneNumber,
      type: messageType,
      [messageType]: {
        link: mediaUrl,
        caption: message
      }
    };
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    });

    const responseText = await response.text();
    
    if (!response.ok) {
      throw new Error(`WhatsApp API error: ${response.status} - ${responseText}`);
    }

    return JSON.parse(responseText);
  }
  
  // Text-only message
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: phoneNumber,
      type: 'text',
      text: {
        body: message
      }
    }),
  });

  const responseText = await response.text();
  
  if (!response.ok) {
    throw new Error(`WhatsApp API error: ${response.status} - ${responseText}`);
  }

  return JSON.parse(responseText);
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { platform, content, businessName, phoneNumber, mediaUrls } = await req.json();
    
    if (!platform || !content || !businessName) {
      throw new Error("Missing required fields: platform, content, businessName");
    }

    const message = `🚀 Exciting news! ${businessName} just joined our marketing platform! ${content}`;
    
    let result;
    
    switch (platform.toLowerCase()) {
      case 'twitter':
        result = await postToTwitter(message, mediaUrls);
        break;
      case 'facebook':
        result = await postToFacebook(message, mediaUrls);
        break;
      case 'whatsapp':
        if (!phoneNumber) {
          throw new Error("Phone number is required for WhatsApp messaging");
        }
        result = await postToWhatsApp(message, phoneNumber, mediaUrls);
        break;
      default:
        throw new Error(`Unsupported platform: ${platform}`);
    }

    return new Response(JSON.stringify({ 
      success: true, 
      platform,
      result,
      message: `Successfully posted to ${platform}` 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in post-to-social function:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});