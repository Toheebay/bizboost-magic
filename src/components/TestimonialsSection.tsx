import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star, TrendingUp, Users } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Adebayo Johnson",
      role: "CEO, Lagos Fashion Hub",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Our revenue increased by 250% in just 3 months! The AI-powered marketing campaigns reached exactly the right audience across all platforms.",
      metrics: { followers: "+15K", sales: "+250%", reach: "2.3M" },
      platform: "Instagram & Facebook"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Owner, Healthy Bites Restaurant",
      image: "/placeholder.svg", 
      rating: 5,
      quote: "Amazing results! Our WhatsApp orders tripled and social media engagement is through the roof. Best marketing investment we've made.",
      metrics: { orders: "+320%", engagement: "+180%", reviews: "4.9★" },
      platform: "WhatsApp & TikTok"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Founder, TechSmart Solutions",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Professional service that delivers results. Our LinkedIn leads increased by 400% and we closed more B2B deals than ever.",
      metrics: { leads: "+400%", conversion: "+150%", revenue: "+180%" },
      platform: "LinkedIn & Twitter"
    },
    {
      id: 4,
      name: "Kemi Adebola",
      role: "Director, GreenLeaf Academy",
      image: "/placeholder.svg",
      rating: 5,
      quote: "The automated content creation saved us 20 hours per week while increasing our student enrollment by 200%. Incredible value!",
      metrics: { enrollment: "+200%", time: "-20hrs", satisfaction: "98%" },
      platform: "YouTube & Facebook"
    },
    {
      id: 5,
      name: "David Okafor",
      role: "Owner, FitLife Gym",
      image: "/placeholder.svg",
      rating: 5,
      quote: "From 50 to 500 members in 4 months! The social media campaigns brought in new clients every day. Absolutely transformed our business.",
      metrics: { members: "+450", bookings: "+300%", retention: "95%" },
      platform: "Instagram & TikTok"
    },
    {
      id: 6,
      name: "Grace Emeka",
      role: "Founder, Beauty Glow Spa",
      image: "/placeholder.svg",
      rating: 5,
      quote: "The ROI is incredible! Every naira spent on marketing returned 5x. Our appointment bookings are now fully automated through social media.",
      metrics: { roi: "500%", bookings: "+280%", reviews: "500+" },
      platform: "Instagram & Facebook"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-primary text-white">
              Real Results from Real Businesses
            </Badge>
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it. See how businesses across Nigeria are transforming 
              their growth with our AI-powered marketing platform.
            </p>
          </div>

          {/* Featured Testimonial */}
          <Card className="mb-12 bg-gradient-hero text-white shadow-glow overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Quote className="w-12 h-12 text-accent mb-4" />
                  <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                    "This platform completely transformed our business. We went from struggling to get customers 
                    to having a waiting list. The AI creates content that converts better than anything we tried before."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16 border-2 border-white/20">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-lg">Adebayo Johnson</div>
                      <div className="text-white/80">CEO, Lagos Fashion Hub</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">250%</div>
                    <div className="text-sm text-white/80">Revenue Growth</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">15K+</div>
                    <div className="text-sm text-white/80">New Followers</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Star className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">2.3M</div>
                    <div className="text-sm text-white/80">Total Reach</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.slice(1).map((testimonial) => (
              <Card key={testimonial.id} className="shadow-card hover:shadow-primary transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gradient-subtle rounded-lg">
                    {Object.entries(testimonial.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <Badge variant="outline" className="text-xs mt-1">
                        {testimonial.platform}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">250%</div>
              <div className="text-muted-foreground">Avg. ROI Increase</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;