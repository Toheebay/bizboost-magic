import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Eye, Heart, MessageCircle, Share2, TrendingUp, Users, Zap } from "lucide-react";
import socialMediaImage from "@/assets/social-media-success.jpg";

const SocialMediaShowcase = () => {
  const platforms = [
    { name: "Facebook", users: "2.9B", engagement: "+45%", color: "bg-blue-600" },
    { name: "Instagram", users: "2.0B", engagement: "+60%", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { name: "Twitter", users: "450M", engagement: "+35%", color: "bg-blue-400" },
    { name: "LinkedIn", users: "900M", engagement: "+55%", color: "bg-blue-700" },
    { name: "TikTok", users: "1.0B", engagement: "+80%", color: "bg-black" },
    { name: "YouTube", users: "2.7B", engagement: "+40%", color: "bg-red-600" },
    { name: "WhatsApp", users: "2.0B", engagement: "+25%", color: "bg-green-500" },
    { name: "Telegram", users: "700M", engagement: "+30%", color: "bg-blue-500" },
  ];

  const results = [
    { icon: Eye, label: "Total Reach", value: "2.5M+", change: "+250%" },
    { icon: Heart, label: "Engagement", value: "150K+", change: "+180%" },
    { icon: Users, label: "New Followers", value: "50K+", change: "+320%" },
    { icon: TrendingUp, label: "Conversion Rate", value: "12.5%", change: "+95%" },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Marketing Across All Platforms</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We automatically create and distribute your marketing content across all major social media platforms, 
              ensuring maximum reach and engagement for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Platform Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Supported Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform) => (
                  <Card key={platform.name} className="shadow-card hover:shadow-primary transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
                        <Badge variant="secondary" className="text-xs">
                          {platform.users}
                        </Badge>
                      </div>
                      <div className="font-semibold mb-1">{platform.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        {platform.engagement} engagement
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="mt-6 bg-gradient-primary text-white shadow-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6" />
                    <h4 className="font-bold text-lg">AI-Powered Content</h4>
                  </div>
                  <p className="text-sm opacity-90">
                    Our AI creates platform-specific content that performs 3x better than generic posts, 
                    automatically optimized for each platform's algorithm.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Visual Display */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={socialMediaImage} 
                  alt="Social Media Marketing Results" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating Metric Cards */}
              <Card className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-success rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Live Campaigns</div>
                    <div className="text-accent font-bold">847 Active</div>
                  </div>
                </div>
              </Card>
              
              <Card className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Share2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Posts Today</div>
                    <div className="text-primary font-bold">2,340</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-center mb-8">Average Client Results</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map(({ icon: Icon, label, value, change }) => (
                <div key={label} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{label}</div>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    {change}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Features List */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="shadow-card hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Content Creation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI-generated posts, images, and videos tailored to your business and optimized for each platform.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Analytics & Reporting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real-time performance tracking with detailed insights and weekly reports delivered to your inbox.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  24/7 Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Set-and-forget marketing that runs automatically, posting at optimal times for maximum engagement.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="marketing" size="lg">
              Start Marketing on All Platforms - ₦1,200
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              One-time payment • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaShowcase;