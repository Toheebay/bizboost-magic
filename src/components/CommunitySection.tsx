import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Trophy, 
  Star, 
  Zap,
  Heart,
  BookOpen,
  Play,
  ArrowRight,
  Clock
} from "lucide-react";

const CommunitySection = () => {
  const communityStats = [
    { icon: Users, value: "25K+", label: "Active Members" },
    { icon: MessageCircle, value: "500+", label: "Daily Discussions" },
    { icon: BookOpen, value: "200+", label: "Free Resources" },
    { icon: Trophy, value: "1K+", label: "Success Stories" }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "AI Marketing Masterclass: Nigerian Edition",
      date: "2024-03-20",
      time: "7:00 PM WAT",
      speaker: "Sarah Johnson",
      speakerTitle: "AI Marketing Expert",
      attendees: 847,
      type: "Webinar",
      featured: true
    },
    {
      id: 2,
      title: "WhatsApp Business API Workshop",
      date: "2024-03-22",
      time: "6:00 PM WAT",
      speaker: "Michael Chen",
      speakerTitle: "WhatsApp Specialist",
      attendees: 623,
      type: "Workshop"
    },
    {
      id: 3,
      title: "Social Media ROI Q&A Session",
      date: "2024-03-25",
      time: "8:00 PM WAT",
      speaker: "Grace Adebola",
      speakerTitle: "Marketing Analyst",
      attendees: 421,
      type: "Q&A"
    }
  ];

  const successSpotlight = [
    {
      name: "Adebayo Fashion",
      industry: "Retail",
      achievement: "250% Revenue Growth",
      quote: "The community support was incredible during our scaling phase!",
      avatar: "/placeholder.svg",
      verified: true
    },
    {
      name: "TechStart Lagos",
      industry: "Technology",
      achievement: "500 New B2B Leads",
      quote: "Weekly workshops helped us master LinkedIn marketing perfectly.",
      avatar: "/placeholder.svg",
      verified: true
    },
    {
      name: "Healthy Meals Co",
      industry: "Food",
      achievement: "1M+ Social Reach",
      quote: "Community feedback improved our content strategy dramatically.",
      avatar: "/placeholder.svg",
      verified: true
    }
  ];

  const resources = [
    {
      title: "Nigerian Social Media Trends 2024",
      type: "Report",
      downloads: "5.2K",
      category: "Research"
    },
    {
      title: "WhatsApp Marketing Templates",
      type: "Templates",
      downloads: "8.7K",
      category: "Tools"
    },
    {
      title: "AI Content Creation Prompts",
      type: "Guide",
      downloads: "12.3K",
      category: "AI"
    },
    {
      title: "ROI Calculator Spreadsheet",
      type: "Tool",
      downloads: "6.8K",
      category: "Analytics"
    }
  ];

  const discussions = [
    {
      title: "Best time to post on Instagram for Nigerian audience?",
      author: "Sarah M.",
      replies: 23,
      likes: 47,
      time: "2 hours ago",
      category: "Instagram"
    },
    {
      title: "WhatsApp automation tools - which ones work best?",
      author: "Michael O.",
      replies: 18,
      likes: 35,
      time: "4 hours ago",
      category: "WhatsApp"
    },
    {
      title: "LinkedIn content that converts for Nigerian B2B",
      author: "Grace A.",
      replies: 31,
      likes: 62,
      time: "6 hours ago",
      category: "LinkedIn"
    },
    {
      title: "TikTok algorithm changes - what's working now?",
      author: "David K.",
      replies: 15,
      likes: 28,
      time: "8 hours ago",
      category: "TikTok"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-primary text-white">
              Join Our Community
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Connect, Learn & Grow Together</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join Nigeria's largest community of business owners, marketers, and entrepreneurs. 
              Share experiences, get expert advice, and accelerate your business growth.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, index) => (
              <Card key={index} className="shadow-card text-center hover:shadow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Upcoming Events */}
            <div className="lg:col-span-2">
              <Card className="shadow-card h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className={`p-4 rounded-lg border ${event.featured ? 'bg-gradient-primary text-white border-primary' : 'bg-gradient-card border-border'} hover:border-primary transition-colors`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={event.featured ? "secondary" : "outline"} className="text-xs">
                              {event.type}
                            </Badge>
                            {event.featured && (
                              <Badge className="text-xs bg-accent text-white">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <h4 className={`font-semibold ${event.featured ? 'text-white' : ''}`}>
                            {event.title}
                          </h4>
                        </div>
                        <Button variant={event.featured ? "secondary" : "outline"} size="sm">
                          Register
                        </Button>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className={`flex items-center gap-2 ${event.featured ? 'text-white/80' : 'text-muted-foreground'}`}>
                          <Calendar className="w-4 h-4" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className={`flex items-center gap-2 ${event.featured ? 'text-white/80' : 'text-muted-foreground'}`}>
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                        <div className={`flex items-center gap-2 ${event.featured ? 'text-white/80' : 'text-muted-foreground'}`}>
                          <Users className="w-4 h-4" />
                          {event.attendees} registered
                        </div>
                        <div className={`flex items-center gap-2 ${event.featured ? 'text-white/80' : 'text-muted-foreground'}`}>
                          <Play className="w-4 h-4" />
                          {event.speaker}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full">
                    View All Events
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Success Spotlight */}
            <div>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    Success Spotlight
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {successSpotlight.map((success, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gradient-card border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={success.avatar} />
                          <AvatarFallback>{success.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm">{success.name}</span>
                            {success.verified && (
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            )}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {success.industry}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="text-sm font-medium text-primary mb-2">
                        {success.achievement}
                      </div>
                      <p className="text-xs text-muted-foreground italic">
                        "{success.quote}"
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Free Resources */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Free Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {resources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-card border border-border hover:border-primary transition-colors cursor-pointer">
                    <div className="flex-1">
                      <div className="font-medium text-sm mb-1">{resource.title}</div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {resource.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground mb-1">
                        {resource.downloads} downloads
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Browse All Resources
                </Button>
              </CardContent>
            </Card>

            {/* Active Discussions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Active Discussions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {discussions.map((discussion, index) => (
                  <div key={index} className="p-3 rounded-lg bg-gradient-card border border-border hover:border-primary transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm line-clamp-2 flex-1 pr-2">
                        {discussion.title}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {discussion.category}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span>by {discussion.author}</span>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {discussion.replies}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {discussion.likes}
                        </div>
                      </div>
                      <span>{discussion.time}</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Join the Discussion
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Community CTA */}
          <Card className="bg-gradient-hero text-white shadow-glow">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-8 h-8" />
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Get instant access to exclusive resources, expert advice, and connect with 25,000+ 
                successful Nigerian business owners who are scaling their companies with smart marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Join Community - Free
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  View Sample Content
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold">Free</div>
                  <div className="text-xs text-white/70">Forever</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs text-white/70">Access</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-xs text-white/70">Support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;