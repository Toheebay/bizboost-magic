import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Share2, 
  Globe, 
  Zap, 
  DollarSign, 
  Clock,
  Star,
  Target,
  Award,
  Heart
} from "lucide-react";

const StatsSection = () => {
  const mainStats = [
    {
      icon: Users,
      label: "Active Businesses",
      value: "10,000+",
      change: "+250% this year",
      description: "Nigerian businesses trust our platform"
    },
    {
      icon: DollarSign,
      label: "Revenue Generated",
      value: "₦2.5B+",
      change: "+400% growth",
      description: "Total client revenue increase"
    },
    {
      icon: Share2,
      label: "Social Media Posts",
      value: "500K+",
      change: "+180% monthly",
      description: "AI-generated posts published"
    },
    {
      icon: TrendingUp,
      label: "Average ROI",
      value: "350%",
      change: "Industry leading",
      description: "Return on marketing investment"
    }
  ];

  const platformStats = [
    { platform: "WhatsApp", users: "2.0B", growth: "+25%", color: "bg-green-500" },
    { platform: "Facebook", users: "2.9B", growth: "+45%", color: "bg-blue-600" },
    { platform: "Instagram", users: "2.0B", growth: "+60%", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { platform: "LinkedIn", users: "900M", growth: "+55%", color: "bg-blue-700" },
    { platform: "TikTok", users: "1.0B", growth: "+80%", color: "bg-black" },
    { platform: "Twitter", users: "450M", growth: "+35%", color: "bg-blue-400" },
    { platform: "YouTube", users: "2.7B", growth: "+40%", color: "bg-red-600" },
    { platform: "Telegram", users: "700M", growth: "+30%", color: "bg-blue-500" }
  ];

  const achievementStats = [
    { icon: Star, value: "4.9", label: "Client Rating", suffix: "/5" },
    { icon: Clock, value: "24", label: "Hour Support", suffix: "/7" },
    { icon: Target, value: "95", label: "Success Rate", suffix: "%" },
    { icon: Award, value: "500", label: "Success Stories", suffix: "+" },
    { icon: Globe, value: "36", label: "Nigerian States", suffix: "" },
    { icon: Heart, value: "99", label: "Client Retention", suffix: "%" }
  ];

  const industryStats = [
    { industry: "Retail & Fashion", businesses: "2,500+", growth: "+280%" },
    { industry: "Food & Restaurant", businesses: "1,800+", growth: "+320%" },
    { industry: "Technology", businesses: "1,200+", growth: "+180%" },
    { industry: "Health & Wellness", businesses: "900+", growth: "+250%" },
    { industry: "Education", businesses: "750+", growth: "+200%" },
    { industry: "Real Estate", businesses: "650+", growth: "+150%" },
    { industry: "Professional Services", businesses: "800+", growth: "+220%" },
    { industry: "Entertainment", businesses: "400+", growth: "+300%" }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-primary text-white">
              Platform Performance
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Numbers That Speak Success</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See the real impact our AI-powered marketing platform is making for Nigerian businesses 
              across all industries and social media platforms.
            </p>
          </div>

          {/* Main Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {mainStats.map((stat, index) => (
              <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="font-semibold mb-2">{stat.label}</div>
                  <Badge className="mb-2 bg-green-100 text-green-700 hover:bg-green-100">
                    {stat.change}
                  </Badge>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Platform Reach */}
          <Card className="mb-16 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Global Platform Reach</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {platformStats.map((platform, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-gradient-card">
                    <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${platform.color}`}></div>
                    <div className="font-bold text-lg">{platform.users}</div>
                    <div className="text-sm text-muted-foreground mb-1">{platform.platform}</div>
                    <Badge variant="secondary" className="text-xs">
                      {platform.growth} engagement
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievement Stats */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16">
            {achievementStats.map((stat, index) => (
              <Card key={index} className="shadow-card text-center">
                <CardContent className="p-4">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">
                    {stat.value}
                    <span className="text-lg text-muted-foreground">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Industry Breakdown */}
          <Card className="mb-16 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Success Across Industries</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {industryStats.map((industry, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gradient-card border border-border hover:border-primary transition-colors">
                    <div className="font-semibold mb-2 text-sm">{industry.industry}</div>
                    <div className="text-2xl font-bold text-primary mb-1">{industry.businesses}</div>
                    <div className="text-xs text-muted-foreground mb-2">Active Businesses</div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">
                      {industry.growth} growth
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-card bg-gradient-primary text-white">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">&lt; 60 sec</div>
                <div className="font-semibold mb-2">Setup Time</div>
                <p className="text-white/80 text-sm">
                  Start your marketing campaigns in under one minute with our AI-powered setup.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-success text-white">
              <CardContent className="p-8 text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">10x</div>
                <div className="font-semibold mb-2">Faster Results</div>
                <p className="text-white/80 text-sm">
                  Achieve results 10x faster than traditional marketing methods with AI automation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-hero text-white">
              <CardContent className="p-8 text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">5:1</div>
                <div className="font-semibold mb-2">ROI Ratio</div>
                <p className="text-white/80 text-sm">
                  Average return of ₦5 for every ₦1 invested in our marketing platform.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Real-time Counter Effect */}
          <Card className="bg-gradient-hero text-white shadow-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">Live Platform Activity</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">2,847</div>
                  <div className="text-white/80 text-sm">Posts Today</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">156</div>
                  <div className="text-white/80 text-sm">New Businesses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">₦1.2M</div>
                  <div className="text-white/80 text-sm">Revenue Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">98.5%</div>
                  <div className="text-white/80 text-sm">Uptime Status</div>
                </div>
              </div>
              <p className="text-white/60 text-xs mt-4">
                * Updated in real-time from our platform analytics
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;