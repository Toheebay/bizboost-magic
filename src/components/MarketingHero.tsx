import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart3, Share2, Trophy, Users } from "lucide-react";
import heroImage from "@/assets/hero-marketing.jpg";

const MarketingHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-glow/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white border border-white/20">
                <Trophy className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Premium Marketing Platform</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Boost Your
                <span className="block bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                  Business
                </span>
                Across All Social Media
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                Market your business on all major social platforms with our AI-powered system. 
                Get guaranteed results, track performance, and earn with our referral program.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Users, label: "Active Users", value: "10K+" },
                { icon: Share2, label: "Campaigns", value: "50K+" },
                { icon: BarChart3, label: "Success Rate", value: "95%" }
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="text-center">
                  <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-white/70">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="marketing" 
                size="lg" 
                className="group"
                onClick={() => {
                  const businessForm = document.getElementById('business-submission');
                  businessForm?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Marketing Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => {
                  const testimonials = document.getElementById('testimonials');
                  testimonials?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Success Stories
              </Button>
            </div>

            {/* Pricing Highlight */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Complete Marketing Package</div>
                  <div className="text-white/70 text-sm">All platforms • Analytics • 24/7 Support</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-accent">₦1,200</div>
                  <div className="text-white/70 text-sm">One-time payment</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Marketing Success Dashboard" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-success rounded-full flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">ROI Increase</div>
                  <div className="text-accent font-bold">+250%</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">New Customers</div>
                  <div className="text-primary font-bold">+1,500</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingHero;