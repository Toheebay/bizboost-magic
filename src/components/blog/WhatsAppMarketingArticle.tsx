import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Eye, Share2, ArrowLeft, MessageCircle, Users, TrendingUp, Zap, Target } from "lucide-react";
import whatsappMarketingImage from "@/assets/whatsapp-marketing.jpg";

interface WhatsAppMarketingArticleProps {
  onBack: () => void;
}

const WhatsAppMarketingArticle = ({ onBack }: WhatsAppMarketingArticleProps) => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-6 hover:bg-accent"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Articles
      </Button>

      <article className="space-y-8">
        <header className="space-y-6">
          <Badge variant="secondary" className="w-fit">
            WhatsApp Marketing
          </Badge>
          
          <h1 className="text-4xl font-bold leading-tight">
            5 WhatsApp Marketing Strategies That Generated ₦50M in Sales
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Learn how top Nigerian businesses are using WhatsApp Business API to convert leads into paying customers at scale. These proven strategies have generated over ₦50 million in documented sales.
          </p>

          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  March 12, 2024
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  8 min read
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  12.8K views
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="h-64 lg:h-96 rounded-lg overflow-hidden">
          <img 
            src={whatsappMarketingImage} 
            alt="WhatsApp Marketing Success" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-green-800 dark:text-green-200">Key Insight</h3>
              </div>
              <p className="text-green-700 dark:text-green-300">
                WhatsApp has over 90 million active users in Nigeria, making it the most effective direct marketing channel for reaching customers where they already spend their time.
              </p>
            </CardContent>
          </Card>

          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-primary" />
              Strategy #1: Automated Welcome Sequences
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">The Setup</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Create a compelling welcome message that introduces your brand</li>
                  <li>• Set up automated responses for common inquiries</li>
                  <li>• Include a special offer for new contacts</li>
                  <li>• Add quick reply buttons for easy navigation</li>
                </ul>
              </div>
              <Card className="p-4 bg-accent/50">
                <h4 className="font-semibold mb-2">Results from Lagos Fashion Store:</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Response Rate:</span>
                    <span className="font-bold text-green-600">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversion to Sale:</span>
                    <span className="font-bold text-green-600">23%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue Generated:</span>
                    <span className="font-bold text-green-600">₦8.2M</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 p-6">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Sample Welcome Message:</h4>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                <p className="text-sm font-medium mb-2">👋 Hi there! Welcome to [Your Business Name]</p>
                <p className="text-sm mb-3">We're excited to help you find exactly what you're looking for! Here's what we can do for you:</p>
                <div className="space-y-1 text-sm">
                  <div className="bg-green-100 dark:bg-green-900 px-3 py-1 rounded">🛍️ Browse Products</div>
                  <div className="bg-green-100 dark:bg-green-900 px-3 py-1 rounded">💬 Chat with Expert</div>
                  <div className="bg-green-100 dark:bg-green-900 px-3 py-1 rounded">🎁 Get 10% Off</div>
                </div>
              </div>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Strategy #2: Community Building & Broadcast Lists
            </h2>
            
            <p className="text-lg mb-6">
              Creating exclusive WhatsApp communities and broadcast lists allows you to nurture relationships and drive repeat sales through targeted messaging.
            </p>

            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">VIP Customer Groups</h4>
                <p className="text-sm text-muted-foreground">Exclusive access to new products and special offers</p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Product Updates</h4>
                <p className="text-sm text-muted-foreground">Weekly broadcasts about new arrivals and restocks</p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Flash Sales</h4>
                <p className="text-sm text-muted-foreground">Time-sensitive offers that create urgency</p>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Strategy #3: Personalized Product Recommendations
            </h2>
            
            <p className="text-lg mb-6">
              Use customer data and purchase history to send highly targeted product recommendations that feel personal and relevant.
            </p>

            <Card className="p-6 mb-6">
              <h4 className="font-semibold mb-4">Implementation Framework:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-3 text-blue-600">Data Collection</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Track customer preferences</li>
                    <li>• Monitor purchase patterns</li>
                    <li>• Note browsing behavior</li>
                    <li>• Record feedback and reviews</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-3 text-green-600">Personalization</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Segment customers by interests</li>
                    <li>• Create targeted product catalogs</li>
                    <li>• Send birthday/anniversary offers</li>
                    <li>• Recommend complementary items</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Strategies #4 & #5: Advanced Techniques</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Strategy #4: Interactive Catalogs</h3>
                <p className="text-muted-foreground mb-4">
                  Create rich, interactive product catalogs with high-quality images, detailed descriptions, and instant ordering capabilities.
                </p>
                <div className="bg-accent/50 p-4 rounded-lg">
                  <div className="font-semibold text-sm">Success Metric:</div>
                  <div className="text-2xl font-bold text-green-600">₦15.3M</div>
                  <div className="text-sm text-muted-foreground">in catalog-driven sales</div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Strategy #5: Customer Service Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  Provide exceptional customer service through quick responses, problem resolution, and proactive follow-ups.
                </p>
                <div className="bg-accent/50 p-4 rounded-lg">
                  <div className="font-semibold text-sm">Customer Satisfaction:</div>
                  <div className="text-2xl font-bold text-blue-600">96%</div>
                  <div className="text-sm text-muted-foreground">positive feedback rating</div>
                </div>
              </Card>
            </div>
          </section>

          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Implement These Strategies?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of Nigerian businesses already using these WhatsApp marketing strategies to grow their revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get WhatsApp Business Setup
              </Button>
              <Button variant="outline" size="lg">
                Download Strategy Guide
              </Button>
            </div>
          </Card>
        </div>

        <footer className="pt-8 border-t space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Published by Sarah Johnson • March 12, 2024
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default WhatsAppMarketingArticle;