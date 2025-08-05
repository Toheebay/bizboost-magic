import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Eye, Share2, TrendingUp, ArrowRight } from "lucide-react";
import { useState } from "react";
import WhatsAppMarketingArticle from "./blog/WhatsAppMarketingArticle";
import AIContentCreationArticle from "./blog/AIContentCreationArticle";

const BlogSection = () => {
  const [currentView, setCurrentView] = useState<'list' | 'whatsapp' | 'ai-content'>('list');
  const featuredPost = {
    id: 1,
    title: "The Complete Guide to Social Media Marketing for Nigerian Businesses in 2024",
    excerpt: "Discover the latest trends, strategies, and tools that successful Nigerian businesses are using to dominate social media and increase their revenue by over 300%.",
    image: "/placeholder.svg",
    author: "Marketing Team",
    authorImage: "/placeholder.svg",
    publishDate: "2024-03-15",
    readTime: "12 min read",
    views: "15.2K",
    category: "Strategy",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "5 WhatsApp Marketing Strategies That Generated ₦50M in Sales",
      excerpt: "Learn how top Nigerian businesses are using WhatsApp Business API to convert leads into paying customers at scale.",
      image: "/placeholder.svg",
      author: "Sarah Johnson",
      authorImage: "/placeholder.svg",
      publishDate: "2024-03-12",
      readTime: "8 min read",
      views: "12.8K",
      category: "WhatsApp Marketing"
    },
    {
      id: 3,
      title: "AI Content Creation: How to Generate Viral Posts in Minutes",
      excerpt: "Master the art of AI-powered content creation and discover the prompts that generate the most engaging social media posts.",
      image: "/placeholder.svg",
      author: "Michael Chen",
      authorImage: "/placeholder.svg",
      publishDate: "2024-03-10",
      readTime: "6 min read",
      views: "9.5K",
      category: "AI Marketing"
    },
    {
      id: 4,
      title: "Instagram Stories vs. Reels: Which Drives More Sales?",
      excerpt: "Data-driven analysis of 1000+ Nigerian businesses reveals which Instagram format converts best for different industries.",
      image: "/placeholder.svg",
      author: "Grace Adebola",
      authorImage: "/placeholder.svg",
      publishDate: "2024-03-08",
      readTime: "10 min read",
      views: "8.2K",
      category: "Instagram"
    },
    {
      id: 5,
      title: "LinkedIn for B2B Success: From 0 to 1000 Leads in 90 Days",
      excerpt: "Step-by-step guide on how Nigerian B2B companies are using LinkedIn to generate qualified leads and close deals faster.",
      image: "/placeholder.svg",
      author: "David Okafor",
      authorImage: "/placeholder.svg",
      publishDate: "2024-03-05",
      readTime: "15 min read",
      views: "11.3K",
      category: "LinkedIn"
    },
    {
      id: 6,
      title: "TikTok for Business: Why Nigerian Brands Can't Ignore It",
      excerpt: "Explore how businesses are leveraging TikTok's algorithm to reach millions of Nigerian youth and drive unprecedented growth.",
      image: "/placeholder.svg",
      author: "Kemi Williams",
      authorImage: "/placeholder.svg",
      publishDate: "2024-03-03",
      readTime: "7 min read",
      views: "13.7K",
      category: "TikTok"
    },
    {
      id: 7,
      title: "Facebook Ads vs. Organic: ROI Analysis for Nigerian SMEs",
      excerpt: "Comprehensive cost-benefit analysis comparing paid advertising with organic reach strategies for small and medium enterprises.",
      image: "/placeholder.svg",
      author: "Ahmed Hassan",
      authorImage: "/placeholder.svg",
      publishDate: "2024-03-01",
      readTime: "11 min read",
      views: "7.9K",
      category: "Facebook"
    }
  ];

  const categories = [
    { name: "All Posts", count: 50 },
    { name: "Strategy", count: 12 },
    { name: "WhatsApp Marketing", count: 8 },
    { name: "AI Marketing", count: 6 },
    { name: "Instagram", count: 10 },
    { name: "LinkedIn", count: 7 },
    { name: "TikTok", count: 4 },
    { name: "Facebook", count: 3 }
  ];

  if (currentView === 'whatsapp') {
    return <WhatsAppMarketingArticle onBack={() => setCurrentView('list')} />;
  }

  if (currentView === 'ai-content') {
    return <AIContentCreationArticle onBack={() => setCurrentView('list')} />;
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-primary text-white">
              Marketing Insights & Tips
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Latest Marketing Insights</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay ahead of the competition with our expert insights, case studies, and actionable 
              marketing strategies specifically designed for Nigerian businesses.
            </p>
          </div>

          {/* Featured Article */}
          <Card className="mb-12 shadow-glow overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-primary text-white">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={featuredPost.authorImage} />
                    <AvatarFallback>MT</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">{featuredPost.author}</div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredPost.views}
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-fit group"
                  onClick={() => setCurrentView('whatsapp')}
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent cursor-pointer transition-colors">
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {blogPosts.map((post) => (
                  <Card 
                    key={post.id} 
                    className="shadow-card hover:shadow-primary transition-all duration-300 group cursor-pointer"
                    onClick={() => {
                      if (post.id === 2) setCurrentView('whatsapp');
                      else if (post.id === 3) setCurrentView('ai-content');
                    }}
                  >
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge variant="secondary" className="absolute top-3 left-3">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={post.authorImage} />
                          <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{post.author}</div>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.publishDate).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Eye className="w-3 h-3" />
                          {post.views} views
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs">
                          <Share2 className="w-3 h-3 mr-1" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-16 bg-gradient-hero text-white shadow-glow">
            <CardContent className="p-8 text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Get Weekly Marketing Insights</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Join 10,000+ Nigerian business owners who receive our weekly newsletter packed with 
                actionable marketing tips, case studies, and exclusive strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-primary placeholder:text-muted-foreground"
                />
                <Button variant="hero" className="whitespace-nowrap">
                  Subscribe Free
                </Button>
              </div>
              <p className="text-xs text-white/60 mt-3">
                No spam. Unsubscribe anytime. Your data is protected.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;