import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Code, Users, Award, Star, Palette } from "lucide-react";
import heroImage from "@/assets/hero-marketing.jpg";

const MentorshipHero = () => {
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
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Digital Mentorship Platform</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Master Your
                <span className="block bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                  Digital Skills
                </span>
                With Expert Mentors
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                Get personalized mentorship in web development, design, marketing, and more. 
                Learn from industry experts and accelerate your digital career journey.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Users, label: "Active Mentees", value: "2.5K+" },
                { icon: BookOpen, label: "Skills Covered", value: "25+" },
                { icon: Star, label: "Success Rate", value: "95%" }
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
                  const mentorshipForm = document.getElementById('mentorship-request');
                  mentorshipForm?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Mentorship
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

            {/* Skills Highlight */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Digital Skills Covered</div>
                  <div className="text-white/70 text-sm">Web Dev • Design • Marketing • SEO • More</div>
                </div>
                <div className="text-right flex items-center gap-2">
                  <div className="flex gap-1">
                    <Code className="w-6 h-6 text-accent" />
                    <Palette className="w-6 h-6 text-accent" />
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Digital Mentorship Dashboard" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-success rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Skill Growth</div>
                  <div className="text-accent font-bold">+300%</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Active Mentees</div>
                  <div className="text-primary font-bold">2,500+</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipHero;