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

async function postToTwitter(text: string): Promise<any> {
  validateTwitterCredentials();
  
  const url = "https://api.x.com/2/tweets";
  const method = "POST";
  const oauthHeader = generateTwitterOAuthHeader(method, url);

  const response = await fetch(url, {
    method: method,
    headers: {
      Authorization: oauthHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  const responseText = await response.text();
  
  if (!response.ok) {
    throw new Error(`Twitter API error: ${response.status} - ${responseText}`);
  }

  return JSON.parse(responseText);
}

async function postToFacebook(message: string): Promise<any> {
  if (!FACEBOOK_ACCESS_TOKEN) {
    throw new Error("Missing Facebook access token");
  }

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

async function postToWhatsApp(message: string, phoneNumber: string): Promise<any> {
  if (!WHATSAPP_ACCESS_TOKEN) {
    throw new Error("Missing WhatsApp access token");
  }

  const url = `https://graph.facebook.com/v17.0/me/messages`;
  
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
    const { platform, content, businessName, phoneNumber } = await req.json();
    
    if (!platform || !content || !businessName) {
      throw new Error("Missing required fields: platform, content, businessName");
    }

    const message = `🚀 Exciting news! ${businessName} just joined our marketing platform! ${content}`;
    
    let result;
    
    switch (platform.toLowerCase()) {
      case 'twitter':
        result = await postToTwitter(message);
        break;
      case 'facebook':
        result = await postToFacebook(message);
        break;
      case 'whatsapp':
        if (!phoneNumber) {
          throw new Error("Phone number is required for WhatsApp messaging");
        }
        result = await postToWhatsApp(message, phoneNumber);
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