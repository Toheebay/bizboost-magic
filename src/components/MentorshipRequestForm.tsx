import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Users, Zap, Star, BookOpen, Code, Palette, TrendingUp, CheckCircle } from "lucide-react";

const MentorshipRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const skillInterest = formData.get("skillInterest") as string;
    const level = formData.get("level") as string;
    const email = formData.get("email") as string;
    
    // Simulate form submission
    setTimeout(() => {
      setShowConfirmation(true);
      toast({
        title: "Mentorship Request Submitted!",
        description: "We'll match you with the perfect mentor and get back to you within 24 hours.",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="mentorship-request" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Request Mentorship</h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll match you with the perfect mentor for your learning journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <Card className="lg:col-span-2 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Mentorship Request
                </CardTitle>
                <CardDescription>
                  Tell us about your learning goals and we'll find the right mentor
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!showConfirmation ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                         <Input 
                           id="name" 
                           name="name"
                           placeholder="Your Full Name" 
                           required 
                           className="mt-2"
                         />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          name="email"
                          placeholder="your@email.com" 
                          type="email"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="skillInterest">Skill Interest *</Label>
                        <Select name="skillInterest" required>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select skill to learn" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">Web Development (HTML, CSS, JS)</SelectItem>
                            <SelectItem value="react">React Development</SelectItem>
                            <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                            <SelectItem value="canva-design">Canva Design</SelectItem>
                            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                            <SelectItem value="seo">SEO & Content Marketing</SelectItem>
                            <SelectItem value="wordpress">WordPress Development</SelectItem>
                            <SelectItem value="mobile-dev">Mobile Development</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                       <div>
                         <Label htmlFor="level">Current Level *</Label>
                         <Select name="level" required>
                           <SelectTrigger className="mt-2">
                             <SelectValue placeholder="Select your level" />
                           </SelectTrigger>
                           <SelectContent>
                             <SelectItem value="beginner">Beginner - Just starting out</SelectItem>
                             <SelectItem value="intermediate">Intermediate - Have some knowledge</SelectItem>
                             <SelectItem value="advanced">Advanced - Looking to specialize</SelectItem>
                           </SelectContent>
                         </Select>
                       </div>
                     </div>

                     <div>
                       <Label htmlFor="goals">Learning Goals *</Label>
                       <Textarea 
                         id="goals" 
                         name="goals"
                         placeholder="What do you want to achieve? (e.g., build a portfolio website, start freelancing, get a job in tech)"
                         required
                         className="mt-2 min-h-[100px]"
                       />
                     </div>

                     <div>
                       <Label htmlFor="message">Additional Message</Label>
                       <Textarea 
                         id="message" 
                         name="message"
                         placeholder="Tell us more about your background, availability, or specific questions..."
                         className="mt-2"
                       />
                     </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="availability">Preferred Schedule</Label>
                        <Select name="availability">
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="When can you learn?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekdays">Weekdays</SelectItem>
                            <SelectItem value="weekends">Weekends</SelectItem>
                            <SelectItem value="evenings">Evenings</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="duration">Learning Duration</Label>
                        <Select name="duration">
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="How long?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-month">1 Month</SelectItem>
                            <SelectItem value="3-months">3 Months</SelectItem>
                            <SelectItem value="6-months">6 Months</SelectItem>
                            <SelectItem value="ongoing">Ongoing Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      variant="marketing" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Finding Your Perfect Mentor...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5 mr-2" />
                          Submit Mentorship Request
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Request Submitted Successfully!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for your interest in our mentorship program. We'll review your request and match you with the perfect mentor based on your goals and preferences.
                    </p>
                    <div className="bg-gradient-card p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">What's Next?</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>✓ We'll contact you within 24 hours</li>
                        <li>✓ Mentor matching based on your goals</li>
                        <li>✓ Schedule your first session</li>
                        <li>✓ Start your learning journey</li>
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Benefits Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-primary text-white shadow-primary">
                <CardContent className="p-6">
                  <Star className="w-8 h-8 mb-4" />
                  <h3 className="font-bold text-xl mb-2">What You Get</h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• 1-on-1 mentorship sessions</li>
                    <li>• Personalized learning path</li>
                    <li>• Industry expert guidance</li>
                    <li>• Portfolio development</li>
                    <li>• Career support & networking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <BookOpen className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-3">Learning Resources</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gradient-card rounded-lg">
                      <Code className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Video Tutorials</div>
                        <div className="text-xs text-muted-foreground">Step-by-step guides</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-card rounded-lg">
                      <Palette className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Practice Projects</div>
                        <div className="text-xs text-muted-foreground">Real-world experience</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-card rounded-lg">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Progress Tracking</div>
                        <div className="text-xs text-muted-foreground">Monitor your growth</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-success text-white shadow-success">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">94%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                  <div className="text-xs opacity-75 mt-1">
                    Of our mentees achieve their learning goals
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

export default MentorshipRequestForm;