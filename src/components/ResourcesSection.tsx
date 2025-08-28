import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  BookOpen, 
  Play, 
  FileText, 
  Code, 
  Palette,
  TrendingUp,
  Download,
  Eye,
  ChevronDown,
  Star,
  Clock,
  Users
} from "lucide-react";
import { useState } from "react";

const ResourcesSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Resources", count: 150 },
    { id: "html-css", name: "HTML & CSS", count: 25 },
    { id: "javascript", name: "JavaScript", count: 30 },
    { id: "design", name: "Design", count: 20 },
    { id: "marketing", name: "Marketing", count: 15 },
    { id: "seo", name: "SEO", count: 12 },
    { id: "canva", name: "Canva", count: 18 },
    { id: "wordpress", name: "WordPress", count: 14 }
  ];

  const featuredResources = [
    {
      id: 1,
      title: "Complete HTML & CSS Beginner Guide",
      type: "Video Series",
      duration: "4.5 hours",
      level: "Beginner",
      category: "html-css",
      views: "12.5K",
      rating: 4.9,
      thumbnail: "/placeholder.svg",
      description: "Learn the fundamentals of web development with hands-on projects"
    },
    {
      id: 2,
      title: "JavaScript for Absolute Beginners",
      type: "eBook + Videos",
      duration: "6 hours",
      level: "Beginner",
      category: "javascript",
      views: "8.7K",
      rating: 4.8,
      thumbnail: "/placeholder.svg",
      description: "Master JavaScript basics with practical examples and exercises"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      type: "Interactive Course",
      duration: "3 hours",
      level: "Intermediate",
      category: "design",
      views: "15.3K",
      rating: 4.9,
      thumbnail: "/placeholder.svg",
      description: "Learn design thinking and create beautiful user interfaces"
    },
    {
      id: 4,
      title: "Canva Mastery: From Zero to Pro",
      type: "Video Course",
      duration: "2.5 hours",
      level: "Beginner",
      category: "canva",
      views: "22.1K",
      rating: 4.7,
      thumbnail: "/placeholder.svg",
      description: "Create stunning graphics and designs with Canva"
    }
  ];

  const resourceLibrary = [
    {
      category: "Web Development",
      icon: Code,
      color: "bg-blue-500",
      resources: [
        { name: "HTML Basics Cheat Sheet", type: "PDF", downloads: "5.2K" },
        { name: "CSS Grid Complete Guide", type: "Video", duration: "45 min" },
        { name: "JavaScript ES6 Features", type: "Tutorial", lessons: "12" },
        { name: "React Hooks Explained", type: "Video", duration: "1.2 hrs" }
      ]
    },
    {
      category: "Design",
      icon: Palette,
      color: "bg-purple-500",
      resources: [
        { name: "Color Theory for Designers", type: "eBook", pages: "85" },
        { name: "Typography Guidelines", type: "PDF", downloads: "3.1K" },
        { name: "Figma UI Kit Collection", type: "Resource", files: "50+" },
        { name: "Logo Design Workshop", type: "Video", duration: "2 hrs" }
      ]
    },
    {
      category: "Digital Marketing",
      icon: TrendingUp,
      color: "bg-green-500",
      resources: [
        { name: "SEO Optimization Guide", type: "Guide", chapters: "8" },
        { name: "Social Media Strategy", type: "Template", downloads: "2.8K" },
        { name: "Content Marketing Plan", type: "Worksheet", pages: "15" },
        { name: "Google Analytics Setup", type: "Video", duration: "30 min" }
      ]
    }
  ];

  const tutorialSeries = [
    {
      title: "Web Development Bootcamp",
      episodes: 24,
      totalHours: "18 hours",
      enrolled: "1.2K",
      level: "Beginner to Intermediate",
      topics: ["HTML", "CSS", "JavaScript", "React", "Projects"]
    },
    {
      title: "Design Fundamentals",
      episodes: 16,
      totalHours: "12 hours", 
      enrolled: "850",
      level: "Beginner",
      topics: ["Design Theory", "Figma", "Prototyping", "UI/UX"]
    },
    {
      title: "Digital Marketing Mastery",
      episodes: 20,
      totalHours: "15 hours",
      enrolled: "650",
      level: "All Levels",
      topics: ["SEO", "Content", "Social Media", "Analytics"]
    }
  ];

  const filteredResources = selectedCategory === "all" 
    ? featuredResources 
    : featuredResources.filter(resource => resource.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700 hover:bg-green-100";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
      case "Advanced":
        return "bg-red-100 text-red-700 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-primary text-white">
              Learning Resources
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Beginner-Friendly Learning Materials</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Access our curated collection of videos, ebooks, tutorials, and interactive courses. 
              All categorized by skill level to help you learn at your own pace.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="text-xs"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Featured Resources */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="shadow-card hover:shadow-primary transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <img 
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={getLevelColor(resource.level)}>
                      {resource.level}
                    </Badge>
                    <Badge variant="secondary">
                      {resource.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {resource.duration}
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-lg">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {resource.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {resource.rating}
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resource Library */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {resourceLibrary.map((section, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${section.color} rounded-lg flex items-center justify-center`}>
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {section.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="flex items-center justify-between p-3 rounded-lg bg-gradient-card border border-border hover:border-primary transition-colors cursor-pointer">
                      <div>
                        <div className="font-medium text-sm">{resource.name}</div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {resource.type}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {resource.downloads || resource.duration || resource.lessons || resource.pages || resource.files}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tutorial Series */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Complete Learning Series</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {tutorialSeries.map((series, index) => (
                <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{series.title}</h4>
                      <Badge className={getLevelColor(series.level)}>
                        {series.level}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Episodes:</span>
                        <span className="font-medium">{series.episodes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Duration:</span>
                        <span className="font-medium">{series.totalHours}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Enrolled:</span>
                        <span className="font-medium">{series.enrolled}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="text-xs text-muted-foreground mb-2">Topics Covered:</div>
                      <div className="flex flex-wrap gap-1">
                        {series.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Start Series
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expandable Content */}
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <div className="text-center mb-8">
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="lg" className="group">
                  {isExpanded ? "Show Less" : "Browse All Resources"}
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent className="space-y-12">
              {/* Additional Resource Categories */}
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-center mb-8">Specialized Resources</h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { name: "Project Templates", count: "45+", icon: FileText, desc: "Starter templates for practice" },
                      { name: "Code Snippets", count: "200+", icon: Code, desc: "Reusable code examples" },
                      { name: "Design Assets", count: "150+", icon: Palette, desc: "Icons, fonts, and graphics" },
                      { name: "Career Guides", count: "25+", icon: TrendingUp, desc: "Job search and interview tips" }
                    ].map((item, index) => (
                      <div key={index} className="text-center p-6 rounded-lg bg-gradient-card border border-border">
                        <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                        <div className="text-2xl font-bold mb-2">{item.count}</div>
                        <div className="font-semibold mb-2">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Learning Paths */}
              <Card className="bg-gradient-hero text-white shadow-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-center mb-8">Structured Learning Paths</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { path: "Frontend Developer", duration: "6 months", modules: 12, projects: 5 },
                      { path: "UI/UX Designer", duration: "4 months", modules: 10, projects: 8 },
                      { path: "Digital Marketer", duration: "3 months", modules: 8, projects: 6 }
                    ].map((path, index) => (
                      <div key={index} className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                        <h4 className="text-lg font-bold mb-4">{path.path}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span>{path.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Modules:</span>
                            <span>{path.modules}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Projects:</span>
                            <span>{path.projects}</span>
                          </div>
                        </div>
                        <Button variant="hero" size="sm" className="w-full mt-4">
                          Start Path
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>

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
              Get Personalized Learning Plan
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Work with a mentor to create your custom learning journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;