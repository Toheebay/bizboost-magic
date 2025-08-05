import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
  Heart,
  ChevronDown,
  Calendar,
  MapPin,
  Shield
} from "lucide-react";
import { useState } from "react";

const StatsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
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
          <Card className="bg-gradient-hero text-white shadow-glow mb-16">
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

          {/* Expandable Content */}
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <div className="text-center mb-8">
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="lg" className="group">
                  {isExpanded ? "Show Less" : "Read More Detailed Analytics"}
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent className="space-y-12">
              {/* Geographical Performance */}
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-center mb-8">Performance by Nigerian States</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { state: "Lagos", businesses: "3,200+", growth: "+280%", revenue: "₦850M" },
                      { state: "Abuja", businesses: "1,800+", growth: "+320%", revenue: "₦520M" },
                      { state: "Rivers", businesses: "1,200+", growth: "+200%", revenue: "₦380M" },
                      { state: "Kano", businesses: "900+", growth: "+250%", revenue: "₦290M" },
                      { state: "Oyo", businesses: "800+", growth: "+180%", revenue: "₦240M" },
                      { state: "Delta", businesses: "650+", growth: "+220%", revenue: "₦180M" }
                    ].map((location, index) => (
                      <div key={index} className="p-6 rounded-lg bg-gradient-card border border-border">
                        <div className="flex items-center gap-3 mb-4">
                          <MapPin className="w-5 h-5 text-primary" />
                          <h4 className="font-bold">{location.state}</h4>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Active Businesses:</span>
                            <span className="font-bold">{location.businesses}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Growth Rate:</span>
                            <span className="font-bold text-green-600">{location.growth}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Revenue:</span>
                            <span className="font-bold text-primary">{location.revenue}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Monthly Performance Trends */}
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-center mb-8">Monthly Performance Trends (2024)</h3>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        Revenue Growth by Month
                      </h4>
                      <div className="space-y-3">
                        {[
                          { month: "January", revenue: "₦280M", growth: "+45%" },
                          { month: "February", revenue: "₦350M", growth: "+65%" },
                          { month: "March", revenue: "₦420M", growth: "+78%" },
                          { month: "April", revenue: "₦580M", growth: "+95%" },
                          { month: "May", revenue: "₦720M", growth: "+120%" },
                          { month: "June", revenue: "₦850M", growth: "+140%" }
                        ].map((data, index) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-card">
                            <span className="font-medium">{data.month}</span>
                            <div className="text-right">
                              <div className="font-bold text-primary">{data.revenue}</div>
                              <div className="text-xs text-green-600">{data.growth}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        New Business Acquisitions
                      </h4>
                      <div className="space-y-3">
                        {[
                          { month: "January", businesses: "850", percentage: "12%" },
                          { month: "February", businesses: "1,200", percentage: "15%" },
                          { month: "March", businesses: "1,450", percentage: "18%" },
                          { month: "April", businesses: "1,800", percentage: "22%" },
                          { month: "May", businesses: "2,200", percentage: "25%" },
                          { month: "June", businesses: "2,500", percentage: "28%" }
                        ].map((data, index) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-card">
                            <span className="font-medium">{data.month}</span>
                            <div className="text-right">
                              <div className="font-bold text-primary">{data.businesses}</div>
                              <div className="text-xs text-blue-600">{data.percentage} market share</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security & Reliability Stats */}
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-center mb-8">Platform Security & Reliability</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-6 rounded-lg bg-gradient-card">
                      <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-green-600 mb-2">99.98%</div>
                      <div className="font-semibold mb-2">Uptime</div>
                      <div className="text-xs text-muted-foreground">Last 12 months</div>
                    </div>
                    <div className="text-center p-6 rounded-lg bg-gradient-card">
                      <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-blue-600 mb-2">ISO 27001</div>
                      <div className="font-semibold mb-2">Certified</div>
                      <div className="text-xs text-muted-foreground">Security standard</div>
                    </div>
                    <div className="text-center p-6 rounded-lg bg-gradient-card">
                      <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-purple-600 mb-2">&lt; 200ms</div>
                      <div className="font-semibold mb-2">Response Time</div>
                      <div className="text-xs text-muted-foreground">Average API response</div>
                    </div>
                    <div className="text-center p-6 rounded-lg bg-gradient-card">
                      <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                      <div className="font-semibold mb-2">Monitoring</div>
                      <div className="text-xs text-muted-foreground">Real-time alerts</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-hero text-white rounded-lg">
                    <h4 className="text-lg font-bold mb-4 text-center">Enterprise-Grade Infrastructure</h4>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-bold mb-2">256-bit</div>
                        <div className="text-white/80 text-sm">SSL Encryption</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold mb-2">GDPR</div>
                        <div className="text-white/80 text-sm">Compliant</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold mb-2">Multi-Cloud</div>
                        <div className="text-white/80 text-sm">Architecture</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;