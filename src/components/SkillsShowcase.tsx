import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Palette, TrendingUp, Zap, BookOpen, Monitor, Smartphone, Users } from "lucide-react";

const SkillsShowcase = () => {
  const skills = [
    { name: "HTML/CSS", learners: "1.2K", growth: "+45%", color: "bg-orange-500", level: "Beginner" },
    { name: "JavaScript", learners: "950", growth: "+60%", color: "bg-yellow-500", level: "Intermediate" },
    { name: "React", learners: "680", growth: "+80%", color: "bg-blue-500", level: "Advanced" },
    { name: "UI/UX Design", learners: "800", growth: "+55%", color: "bg-purple-500", level: "Beginner" },
    { name: "Digital Marketing", learners: "720", growth: "+40%", color: "bg-green-500", level: "Beginner" },
    { name: "SEO", learners: "590", growth: "+35%", color: "bg-red-500", level: "Intermediate" },
    { name: "Canva Design", learners: "1.1K", growth: "+70%", color: "bg-pink-500", level: "Beginner" },
    { name: "WordPress", learners: "450", growth: "+30%", color: "bg-indigo-500", level: "Intermediate" },
  ];

  const results = [
    { icon: Users, label: "Active Learners", value: "2.5K+", change: "+250%" },
    { icon: BookOpen, label: "Skills Mastered", value: "850+", change: "+180%" },
    { icon: TrendingUp, label: "Job Placements", value: "320+", change: "+320%" },
    { icon: Monitor, label: "Success Rate", value: "94%", change: "+15%" },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Master Digital Skills</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Learn from industry experts across various digital disciplines. 
              From web development to design and marketing - we have the right mentor for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Popular Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <Card key={skill.name} className="shadow-card hover:shadow-primary transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}
                        </Badge>
                      </div>
                      <div className="font-semibold mb-1">{skill.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        {skill.learners} learners • {skill.growth} growth
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="mt-6 bg-gradient-primary text-white shadow-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6" />
                    <h4 className="font-bold text-lg">Personalized Learning</h4>
                  </div>
                  <p className="text-sm opacity-90">
                    Our mentors create personalized learning paths that adapt to your pace and goals, 
                    ensuring you master skills 3x faster than self-learning.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mentorship Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-glow bg-gradient-card p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">1-on-1 Mentorship</h3>
                  <p className="text-muted-foreground mb-6">
                    Get direct access to industry professionals who will guide your learning journey
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-card">
                      <Code className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold">Web Dev</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg shadow-card">
                      <Palette className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold">Design</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg shadow-card">
                      <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold">Marketing</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg shadow-card">
                      <Smartphone className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold">Mobile</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <Card className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-success rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Active Sessions</div>
                    <div className="text-accent font-bold">147 Live</div>
                  </div>
                </div>
              </Card>
              
              <Card className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Skill Progress</div>
                    <div className="text-primary font-bold">+85%</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-center mb-8">Average Mentee Results</h3>
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
                  <Users className="w-5 h-5 text-primary" />
                  1-on-1 Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Direct mentorship with industry experts who provide personalized guidance and feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Learning Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access to curated tutorials, ebooks, and practice projects to accelerate your learning.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Career Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Portfolio reviews, interview preparation, and job placement assistance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              variant="marketing" 
              size="lg"
              onClick={() => {
                const mentorshipForm = document.getElementById('mentorship-request');
                mentorshipForm?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request Mentorship - Start Learning
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Personalized mentorship • Progress tracking • Career support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;