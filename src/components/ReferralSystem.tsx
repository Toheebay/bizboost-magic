import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Copy, Gift, Users, Share, TrendingUp, Award } from "lucide-react";
import referralImage from "@/assets/referral-network.jpg";

const ReferralSystem = () => {
  const [referralCode] = useState("BIZBOOST" + Math.random().toString(36).substr(2, 6).toUpperCase());
  const [referralLink] = useState(`https://bizboost.com/ref/${referralCode}`);
  const [earnings] = useState(2400); // Mock earnings
  const [referrals] = useState(12); // Mock referral count
  const { toast } = useToast();

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: `${type} Copied!`,
        description: "Share this with your friends to earn rewards.",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  const shareOnSocial = (platform: string) => {
    const message = "🚀 Boost your business across all social media platforms! Get guaranteed results with BizBoost Marketing. Use my referral link:";
    const url = referralLink;
    
    let shareUrl = "";
    
    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(message + " " + url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <section id="referral-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Earn with Referrals</h2>
            <p className="text-muted-foreground text-lg">
              Share BizBoost with friends and earn ₦200 for every successful referral
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Referral Info */}
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-primary text-white shadow-primary">
                  <CardContent className="p-6 text-center">
                    <Gift className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">₦{earnings.toLocaleString()}</div>
                    <div className="text-sm opacity-90">Total Earnings</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-success text-white shadow-success">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{referrals}</div>
                    <div className="text-sm opacity-90">Successful Referrals</div>
                  </CardContent>
                </Card>
              </div>

              {/* Referral Links */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share className="w-5 h-5 text-primary" />
                    Your Referral Information
                  </CardTitle>
                  <CardDescription>
                    Share these links to start earning
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Referral Code</label>
                    <div className="flex gap-2">
                      <Input value={referralCode} readOnly className="font-mono" />
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => copyToClipboard(referralCode, "Referral Code")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Referral Link</label>
                    <div className="flex gap-2">
                      <Input value={referralLink} readOnly className="font-mono text-sm" />
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => copyToClipboard(referralLink, "Referral Link")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Sharing */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Share on Social Media</CardTitle>
                  <CardDescription>
                    Quick share buttons for popular platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Button 
                      variant="outline" 
                      className="bg-green-50 hover:bg-green-100 border-green-200"
                      onClick={() => shareOnSocial("whatsapp")}
                    >
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      className="bg-blue-50 hover:bg-blue-100 border-blue-200"
                      onClick={() => shareOnSocial("twitter")}
                    >
                      Twitter
                    </Button>
                    <Button 
                      variant="outline" 
                      className="bg-blue-50 hover:bg-blue-100 border-blue-200"
                      onClick={() => shareOnSocial("facebook")}
                    >
                      Facebook
                    </Button>
                    <Button 
                      variant="outline" 
                      className="bg-blue-50 hover:bg-blue-100 border-blue-200"
                      onClick={() => shareOnSocial("linkedin")}
                    >
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Bonus Tiers */}
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    Bonus Tiers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                      <div>
                        <div className="font-medium">Bronze Level</div>
                        <div className="text-sm text-muted-foreground">1-5 referrals</div>
                      </div>
                      <Badge variant="secondary">₦200 each</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                      <div>
                        <div className="font-medium">Silver Level</div>
                        <div className="text-sm text-muted-foreground">6-15 referrals</div>
                      </div>
                      <Badge className="bg-gradient-primary text-white">₦300 each</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                      <div>
                        <div className="font-medium">Gold Level</div>
                        <div className="text-sm text-muted-foreground">16+ referrals</div>
                      </div>
                      <Badge className="bg-gradient-success text-white">₦500 each</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Referral Image & Benefits */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={referralImage} 
                  alt="Referral Network" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    How Referrals Work
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <div className="font-medium">Share Your Link</div>
                        <div className="text-sm text-muted-foreground">Send your referral link to friends and businesses</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <div className="font-medium">They Sign Up</div>
                        <div className="text-sm text-muted-foreground">Your referral completes payment for marketing service</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <div className="font-medium">You Earn Money</div>
                        <div className="text-sm text-muted-foreground">Get paid instantly to your bank account</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSystem;