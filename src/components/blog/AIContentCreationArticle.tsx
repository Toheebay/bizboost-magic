import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Eye, Share2, ArrowLeft, Sparkles, Brain, Zap, Target, Instagram, Linkedin, Facebook, Twitter, Copy } from "lucide-react";
import aiContentImage from "@/assets/ai-content-creation.jpg";

interface AIContentCreationArticleProps {
  onBack: () => void;
}

const AIContentCreationArticle = ({ onBack }: AIContentCreationArticleProps) => {
  const promptExamples = [
    {
      platform: "Instagram",
      icon: Instagram,
      color: "text-pink-600",
      bgColor: "bg-pink-100 dark:bg-pink-900",
      prompt: "Create an engaging Instagram post about [your product/service]. Include emojis, trending hashtags, and a call-to-action that encourages saves and shares. Focus on visual storytelling and lifestyle benefits.",
      result: "✨ Transform your morning routine with our premium coffee blend! ☕\n\n🌅 Wake up to the rich, aromatic taste that coffee lovers dream about\n💫 Hand-selected beans from Nigerian highlands\n🔥 Roasted to perfection for that perfect cup every time\n\nTag a coffee lover who needs this! ☕👇\n\n#NigerianCoffee #MorningRitual #CoffeeLovers #PremiumBlend #WakeUpAndSmell #LocallySourced #CoffeeTime #MorningMotivation"
    },
    {
      platform: "LinkedIn", 
      icon: Linkedin,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900",
      prompt: "Write a professional LinkedIn post about [your industry insight]. Include data points, professional experiences, and end with a question to encourage engagement. Keep it informative yet conversational.",
      result: "🚀 The Nigerian tech ecosystem has grown by 47% in 2024 - here's what I've learned building in this space:\n\n📊 Key observations from our journey:\n• Local talent retention improved by 35%\n• Remote collaboration tools adoption at 89%\n• Cross-border partnerships increased 2.3x\n\n💡 The biggest shift? Nigerian businesses are no longer just adapting global solutions - we're creating innovations that solve uniquely African challenges.\n\nWhat trends are you seeing in your industry? Share your insights below 👇\n\n#NigerianTech #Innovation #BusinessGrowth #TechEcosystem"
    }
  ];

  const contentIdeas = [
    {
      type: "Viral Hook Formulas",
      examples: [
        "🚨 This [time period] mistake cost me ₦[amount]...",
        "✋ Stop doing [common practice] if you want to [desired outcome]",
        "🤯 I tested [number] [strategies] for [duration]. Here's what worked:",
        "📱 [Platform] doesn't want you to know this [secret/strategy]..."
      ]
    },
    {
      type: "Engagement Patterns",
      examples: [
        "Question + Numbered list + Call to action",
        "Bold statement + Story + Lesson learned",
        "Controversial opinion + Supporting data + Discussion starter",
        "Before/After + Process explanation + Results"
      ]
    }
  ];

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
            AI Marketing
          </Badge>
          
          <h1 className="text-4xl font-bold leading-tight">
            AI Content Creation: How to Generate Viral Posts in Minutes
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Master the art of AI-powered content creation and discover the prompts that generate the most engaging social media posts. Learn platform-specific strategies for Instagram, LinkedIn, Facebook, and Twitter.
          </p>

          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-semibold">Michael Chen</div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  March 10, 2024
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  6 min read
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  9.5K views
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="h-64 lg:h-96 rounded-lg overflow-hidden">
          <img 
            src={aiContentImage} 
            alt="AI Content Creation" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200">Game-Changing Insight</h3>
              </div>
              <p className="text-purple-700 dark:text-purple-300">
                AI-generated content that follows proven viral formulas can increase engagement by 340% and reach by 280% compared to traditional content creation methods.
              </p>
            </CardContent>
          </Card>

          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-primary" />
              Platform-Specific AI Prompts That Convert
            </h2>
            
            <div className="space-y-8">
              {promptExamples.map((example, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className={`${example.bgColor} p-6`}>
                    <div className="flex items-center gap-3">
                      <example.icon className={`w-8 h-8 ${example.color}`} />
                      <CardTitle className="text-2xl">{example.platform} Strategy</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">AI Prompt Template:</h4>
                      <div className="bg-accent/50 p-4 rounded-lg font-mono text-sm">
                        {example.prompt}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-green-600">Generated Result:</h4>
                      <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border-l-4 border-green-500">
                        <pre className="whitespace-pre-wrap text-sm">{example.result}</pre>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-fit">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Prompt
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Viral Content Formulas
            </h2>

            <div className="grid lg:grid-cols-2 gap-6">
              {contentIdeas.map((category, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category.type}</h3>
                  <div className="space-y-3">
                    {category.examples.map((example, i) => (
                      <div key={i} className="p-3 bg-accent/50 rounded-lg">
                        <code className="text-sm">{example}</code>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Advanced AI Content Strategies</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Instagram Reels</h4>
                <p className="text-sm text-muted-foreground">Trending audio + Visual storytelling + Strong hooks</p>
              </Card>
              
              <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">LinkedIn Articles</h4>
                <p className="text-sm text-muted-foreground">Industry insights + Personal stories + Professional tips</p>
              </Card>
              
              <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Twitter className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Twitter Threads</h4>
                <p className="text-sm text-muted-foreground">Numbered insights + Quick tips + Engaging conclusions</p>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950/30 dark:to-red-950/30">
              <h3 className="text-xl font-semibold mb-4">🔥 Pro Tip: The 3-2-1 Formula</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-orange-600 mb-2">3 Value Points</h4>
                  <p className="text-sm text-muted-foreground">Share three actionable insights or tips</p>
                </div>
                <div>
                  <h4 className="font-medium text-red-600 mb-2">2 Examples</h4>
                  <p className="text-sm text-muted-foreground">Provide real-world examples or case studies</p>
                </div>
                <div>
                  <h4 className="font-medium text-pink-600 mb-2">1 Call-to-Action</h4>
                  <p className="text-sm text-muted-foreground">End with a clear, compelling action request</p>
                </div>
              </div>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">AI Tools & Platforms</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Recommended AI Tools</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="font-medium">ChatGPT</span>
                    <Badge variant="secondary">Content Writing</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="font-medium">Claude</span>
                    <Badge variant="secondary">Long-form Content</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="font-medium">Jasper</span>
                    <Badge variant="secondary">Marketing Copy</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="font-medium">Copy.ai</span>
                    <Badge variant="secondary">Social Media</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Content Planning</h3>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Weekly Content Calendar</h4>
                    <p className="text-sm text-muted-foreground">Plan 7 days of content in 30 minutes using AI-generated ideas and templates.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Batch Creation</h4>
                    <p className="text-sm text-muted-foreground">Generate 20+ posts per session using proven prompts and formulas.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Performance Tracking</h4>
                    <p className="text-sm text-muted-foreground">Monitor which AI-generated content performs best and optimize accordingly.</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Start Creating Viral Content Today</h3>
            <p className="text-muted-foreground mb-6">
              Access our complete library of AI prompts, templates, and strategies used by top Nigerian creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Download Prompt Library
              </Button>
              <Button variant="outline" size="lg">
                Join AI Creator Community
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
              Published by Michael Chen • March 10, 2024
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default AIContentCreationArticle;