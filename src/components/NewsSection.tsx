import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  TrendingUp, 
  Zap, 
  Globe, 
  Smartphone,
  BarChart3,
  Users,
  ArrowRight,
  Eye
} from "lucide-react";

const NewsSection = () => {
  const breakingNews = {
    title: "Major WhatsApp Business API Update Boosts Nigerian SME Reach by 300%",
    excerpt: "New features allowing multimedia campaigns and automated responses are revolutionizing how Nigerian businesses connect with customers.",
    image: "/placeholder.svg",
    publishTime: "2 hours ago",
    category: "Platform Update",
    views: "15.2K",
    trending: true
  };

  const marketingNews = [
    {
      id: 1,
      title: "TikTok Introduces New Business Tools for African Markets",
      excerpt: "Enhanced analytics and advertising options specifically designed for Nigerian and African businesses.",
      image: "/placeholder.svg",
      publishTime: "5 hours ago",
      category: "TikTok",
      views: "8.7K",
      impact: "High"
    },
    {
      id: 2,
      title: "Instagram Reels Algorithm Changes Favor Local Nigerian Content",
      excerpt: "Recent updates are giving priority to local creators and businesses, creating new opportunities.",
      image: "/placeholder.svg",
      publishTime: "8 hours ago",
      category: "Instagram",
      views: "12.3K",
      impact: "Medium"
    },
    {
      id: 3,
      title: "LinkedIn Launches Nigeria-Specific B2B Marketing Features",
      excerpt: "New targeting options and local payment methods making B2B marketing more accessible.",
      image: "/placeholder.svg",
      publishTime: "1 day ago",
      category: "LinkedIn",
      views: "6.9K",
      impact: "High"
    },
    {
      id: 4,
      title: "Facebook Ads Cost Drop 40% for Nigerian Small Businesses",
      excerpt: "Meta's new SME support initiative is making social media advertising more affordable.",
      image: "/placeholder.svg",
      publishTime: "1 day ago",
      category: "Facebook",
      views: "9.8K",
      impact: "Very High"
    }
  ];

  const industryUpdates = [
    {
      title: "Nigerian E-commerce Sales Hit ₦2.5 Trillion in Q1 2024",
      category: "Industry Report",
      publishTime: "3 hours ago",
      source: "Nigeria Commerce Board"
    },
    {
      title: "AI Marketing Tools Adoption Grows 450% Among Nigerian SMEs",
      category: "Technology",
      publishTime: "6 hours ago",
      source: "Tech Nigeria"
    },
    {
      title: "Social Media Spending by Nigerian Businesses Up 300%",
      category: "Market Research",
      publishTime: "12 hours ago",
      source: "Marketing Insights NG"
    },
    {
      title: "WhatsApp Business Now Used by 85% of Nigerian Retailers",
      category: "Platform Stats",
      publishTime: "1 day ago",
      source: "Digital Commerce Nigeria"
    }
  ];

  const platformUpdates = [
    {
      platform: "WhatsApp",
      update: "New multi-device support for Business API",
      impact: "Streamlines customer service operations",
      color: "bg-green-500"
    },
    {
      platform: "Instagram",
      update: "Shopping tags now available in Reels",
      impact: "Direct product sales from video content",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      platform: "TikTok",
      update: "Creator Fund expanded to Nigeria",
      impact: "Monetization opportunities for businesses",
      color: "bg-black"
    },
    {
      platform: "Facebook",
      update: "Enhanced local business discovery",
      impact: "Better visibility for Nigerian businesses",
      color: "bg-blue-600"
    }
  ];

  const marketTrends = [
    {
      trend: "Video Content Dominance",
      growth: "+450%",
      description: "Video posts getting 450% more engagement than text",
      icon: Smartphone
    },
    {
      trend: "AI-Generated Content",
      growth: "+320%",
      description: "Businesses using AI content see 320% better ROI",
      icon: Zap
    },
    {
      trend: "WhatsApp Commerce",
      growth: "+280%",
      description: "Direct sales through WhatsApp growing rapidly",
      icon: BarChart3
    },
    {
      trend: "Local Influencer Marketing",
      growth: "+200%",
      description: "Micro-influencers delivering better conversion rates",
      icon: Users
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Very High":
        return "bg-red-100 text-red-700 hover:bg-red-100";
      case "High":
        return "bg-orange-100 text-orange-700 hover:bg-orange-100";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-primary text-white">
              Latest Updates & Trends
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Marketing News & Industry Updates</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay ahead of the curve with the latest social media platform updates, marketing trends, 
              and industry insights specifically relevant to Nigerian businesses.
            </p>
          </div>

          {/* Breaking News */}
          <Card className="mb-12 shadow-glow overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={breakingNews.image}
                  alt={breakingNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Badge className="bg-red-500 text-white animate-pulse">
                    Breaking
                  </Badge>
                  {breakingNews.trending && (
                    <Badge className="bg-gradient-primary text-white">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {breakingNews.category}
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  {breakingNews.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {breakingNews.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {breakingNews.publishTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {breakingNews.views} views
                    </div>
                  </div>
                </div>

                <Button className="w-fit group">
                  Read Full Story
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Marketing News */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Platform & Marketing Updates</h3>
              <div className="space-y-6">
                {marketingNews.map((news) => (
                  <Card key={news.id} className="shadow-card hover:shadow-primary transition-all duration-300 group cursor-pointer">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative h-48 md:h-auto">
                        <img 
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className={`absolute top-3 left-3 ${getImpactColor(news.impact)}`}>
                          {news.impact} Impact
                        </Badge>
                      </div>
                      <CardContent className="md:col-span-2 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="secondary">
                            {news.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Eye className="w-3 h-3" />
                            {news.views}
                          </div>
                        </div>
                        <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                          {news.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {news.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {news.publishTime}
                          </div>
                          <Button variant="ghost" size="sm">
                            Read More
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Industry Updates Sidebar */}
            <div>
              <h3 className="text-xl font-bold mb-6">Industry Headlines</h3>
              <Card className="shadow-card mb-6">
                <CardContent className="p-6 space-y-4">
                  {industryUpdates.map((update, index) => (
                    <div key={index} className="p-3 rounded-lg bg-gradient-card border border-border hover:border-primary transition-colors cursor-pointer">
                      <h4 className="font-medium text-sm mb-2 line-clamp-2">
                        {update.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {update.category}
                        </Badge>
                        <span>{update.publishTime}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Source: {update.source}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Platform Updates */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Platform Updates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {platformUpdates.map((update, index) => (
                    <div key={index} className="p-3 rounded-lg bg-gradient-card border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-3 h-3 rounded-full ${update.color}`}></div>
                        <span className="font-medium text-sm">{update.platform}</span>
                      </div>
                      <h4 className="font-medium text-sm mb-1">
                        {update.update}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {update.impact}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Market Trends */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Current Market Trends</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketTrends.map((trend, index) => (
                <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <trend.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{trend.growth}</div>
                    <h4 className="font-semibold mb-2">{trend.trend}</h4>
                    <p className="text-xs text-muted-foreground">{trend.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <Card className="bg-gradient-hero text-white shadow-glow">
            <CardContent className="p-8 text-center">
              <Globe className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Never Miss Important Updates</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Get the latest platform updates, marketing trends, and industry insights delivered 
                to your inbox every week. Stay ahead of your competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-primary placeholder:text-muted-foreground"
                />
                <Button variant="hero" className="whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6 max-w-sm mx-auto text-center">
                <div>
                  <div className="text-lg font-bold">Weekly</div>
                  <div className="text-xs text-white/70">Updates</div>
                </div>
                <div>
                  <div className="text-lg font-bold">Expert</div>
                  <div className="text-xs text-white/70">Analysis</div>
                </div>
                <div>
                  <div className="text-lg font-bold">Free</div>
                  <div className="text-xs text-white/70">Forever</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;