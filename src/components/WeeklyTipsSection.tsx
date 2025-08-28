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
    title: "The Complete Guide to Starting Your Freelancing Journey in 2024",
    excerpt: "From choosing your niche to landing your first client - everything you need to know about building a successful freelancing career in the digital age.",
    image: "/placeholder.svg",
    author: "Digital Mentors Team",
    authorImage: "/placeholder.svg",
    publishDate: "2024-03-15",
    readTime: "12 min read",
    views: "15.2K",
    category: "Career Guide",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "How to Start Freelancing: From Beginner to Professional",
      excerpt: "Learn the essential steps to build a successful freelancing career, including portfolio building, client acquisition, and pricing strategies.",
      image: "/placeholder.svg",
      author: "Sarah Johnson",
      authorImage: "/placeholder.svg",
      publishDate: "2024-03-12",
      readTime: "8 min read",
      views: "12.8K",
      category: "Freelancing"
    },
    {
      id: 3,
      title: "Mastering HTML & CSS: Your First Step into Web Development",
      excerpt: "Complete beginner's guide to HTML and CSS with practical examples and projects that you can build to showcase your skills.",
      image: "/placeholder.svg",
      author: "Michael Chen",
      authorImage: "/placeholder.svg",
      publishDate: "2024-03-10",
      readTime: "6 min read",
      views: "9.5K",
      category: "Web Development"
    },
    {
      id: 4,
      title: "UI/UX Design Principles Every Beginner Should Know",
      excerpt: "Discover the fundamental design principles that will help you create beautiful and user-friendly interfaces from day one.",
      image: "/placeholder.svg",
      author: "Grace Adebola",
      authorImage: "/placeholder.svg",
      publishDate: "2024-03-08",
      readTime: "10 min read",
      views: "8.2K",
      category: "Design"
    },
    {
      id: 5,
      title: "Digital Marketing Basics: Growing Your Online Presence",
      excerpt: "Step-by-step guide on building your personal brand and marketing yourself effectively in the digital space.",
      image: "/placeholder.svg",
      author: "David Okafor",
      authorImage: "/placeholder.svg",
      publishDate: "2024-03-05",
      readTime: "15 min read",
      views: "11.3K",
      category: "Digital Marketing"
    },
    {
      id: 6,
      title: "Building Your First Portfolio: Showcase Your Skills",
      excerpt: "Learn how to create a compelling portfolio that attracts clients and employers, even as a complete beginner.",
      image: "/placeholder.svg",
      author: "Kemi Williams",
      authorImage: "/placeholder.svg",
      publishDate: "2024-03-03",
      readTime: "7 min read",
      views: "13.7K",
      category: "Portfolio"
    },
    {
      id: 7,
      title: "Learning to Code: Choosing Your Programming Path",
      excerpt: "Comprehensive guide to help you choose the right programming language and learning path based on your career goals.",
      image: "/placeholder.svg",
      author: "Ahmed Hassan",
      authorImage: "/placeholder.svg",
      publishDate: "2024-03-01",
      readTime: "11 min read",
      views: "7.9K",
      category: "Programming"
    }
  ];

  const categories = [
    { name: "All Posts", count: 50 },
    { name: "Career Guide", count: 12 },
    { name: "Freelancing", count: 8 },
    { name: "Web Development", count: 15 },
    { name: "Design", count: 10 },
    { name: "Digital Marketing", count: 7 },
    { name: "Portfolio", count: 6 },
    { name: "Programming", count: 9 }
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
              Weekly Tips & Guides
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Weekly Tips & Learning Guides</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with our weekly tips, tutorials, and guides to help you master digital skills 
              and build a successful career in tech, design, and digital marketing.
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
                  Read Full Guide
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
              <h3 className="text-2xl font-bold mb-4">Get Weekly Learning Tips</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Join 5,000+ learners who receive our weekly newsletter packed with 
                actionable learning tips, skill guides, and career development strategies.
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