import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload, Zap, Star, TrendingUp } from "lucide-react";

const BusinessSubmissionForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"premium" | "passcode">("premium");
  const [passcode, setPasscode] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate passcode if passcode method is selected
    if (paymentMethod === "passcode") {
      if (passcode !== "AADEBAYOaadebayo12") {
        toast({
          title: "Invalid Passcode",
          description: "Please enter the correct passcode or choose premium payment.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
    }
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Business Submitted Successfully!",
      description: paymentMethod === "passcode" 
        ? "Passcode verified! We'll start marketing your business across all social platforms within 24 hours."
        : "Payment processed! We'll start marketing your business across all social platforms within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Submit Your Business</h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll create powerful marketing campaigns across all major social platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <Card className="lg:col-span-2 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-primary" />
                  Business Information
                </CardTitle>
                <CardDescription>
                  Provide details about your business for targeted marketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input 
                        id="businessName" 
                        placeholder="Your Business Name" 
                        required 
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry *</Label>
                      <Select required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="retail">Retail & E-commerce</SelectItem>
                          <SelectItem value="food">Food & Restaurant</SelectItem>
                          <SelectItem value="tech">Technology</SelectItem>
                          <SelectItem value="health">Health & Wellness</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="website">Website URL</Label>
                      <Input 
                        id="website" 
                        placeholder="https://yourbusiness.com" 
                        type="url"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        placeholder="+234 800 000 0000" 
                        type="tel"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Business Description *</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your business, products/services, and target audience..."
                      required
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="goals">Marketing Goals</Label>
                    <Textarea 
                      id="goals" 
                      placeholder="What do you want to achieve? (e.g., increase brand awareness, drive sales, get more customers)"
                      className="mt-2"
                    />
                  </div>

                  {/* Payment Method Selection */}
                  <div className="space-y-4 p-6 bg-gradient-card rounded-lg border">
                    <Label className="text-base font-semibold">Choose Payment Method</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div 
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          paymentMethod === "premium" 
                            ? "border-primary bg-primary/5" 
                            : "border-muted hover:border-primary/50"
                        }`}
                        onClick={() => setPaymentMethod("premium")}
                      >
                        <div className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="premium" 
                            checked={paymentMethod === "premium"}
                            onChange={(e) => setPaymentMethod(e.target.value as "premium" | "passcode")}
                            className="text-primary"
                          />
                          <div>
                            <div className="font-semibold">Premium Payment</div>
                            <div className="text-sm text-muted-foreground">₦1,200 - Full marketing package</div>
                          </div>
                        </div>
                      </div>
                      
                      <div 
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          paymentMethod === "passcode" 
                            ? "border-primary bg-primary/5" 
                            : "border-muted hover:border-primary/50"
                        }`}
                        onClick={() => setPaymentMethod("passcode")}
                      >
                        <div className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="passcode" 
                            checked={paymentMethod === "passcode"}
                            onChange={(e) => setPaymentMethod(e.target.value as "premium" | "passcode")}
                            className="text-primary"
                          />
                          <div>
                            <div className="font-semibold">Access Passcode</div>
                            <div className="text-sm text-muted-foreground">Special access code</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {paymentMethod === "passcode" && (
                      <div className="mt-4">
                        <Label htmlFor="passcode">Enter Access Passcode *</Label>
                        <Input 
                          id="passcode" 
                          placeholder="Enter your special access passcode" 
                          type="password"
                          value={passcode}
                          onChange={(e) => setPasscode(e.target.value)}
                          required={paymentMethod === "passcode"}
                          className="mt-2"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Contact us for your access passcode: +2347067412852
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">Monthly Budget (Optional)</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">₦10,000 - ₦50,000</SelectItem>
                          <SelectItem value="medium">₦50,000 - ₦200,000</SelectItem>
                          <SelectItem value="large">₦200,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Launch Timeline</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="When to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediately</SelectItem>
                          <SelectItem value="week">Within a week</SelectItem>
                          <SelectItem value="month">Within a month</SelectItem>
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
                        Processing...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2" />
                        {paymentMethod === "premium" ? "Start Marketing Campaign - ₦1,200" : "Activate with Passcode"}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Benefits Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-primary text-white shadow-primary">
                <CardContent className="p-6">
                  <Star className="w-8 h-8 mb-4" />
                  <h3 className="font-bold text-xl mb-2">What You Get</h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>✓ Marketing on 10+ social platforms</li>
                    <li>✓ Professional content creation</li>
                    <li>✓ 24/7 performance monitoring</li>
                    <li>✓ Weekly analytics reports</li>
                    <li>✓ Dedicated support team</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-success text-white shadow-success">
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 mb-4" />
                  <h3 className="font-bold text-xl mb-2">Expected Results</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold">+250%</div>
                      <div className="text-sm opacity-90">ROI Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">1,500+</div>
                      <div className="text-sm opacity-90">New Customers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">95%</div>
                      <div className="text-sm opacity-90">Success Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">💰 Referral Bonus</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Earn ₦200 for every successful referral!
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => {
                      const referralSection = document.getElementById('referral-section');
                      referralSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Referral Link
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSubmissionForm;