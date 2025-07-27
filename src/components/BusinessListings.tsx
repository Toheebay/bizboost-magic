import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { BarChart3, Clock, Eye, Search, Star, TrendingUp } from "lucide-react";

const BusinessListings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterIndustry, setFilterIndustry] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  
  const itemsPerPage = 9;

  // Mock data for business listings
  const businesses = [
    {
      id: 1,
      name: "Lagos Fashion Hub",
      industry: "Retail",
      description: "Premium fashion retailer specializing in African-inspired contemporary wear",
      status: "Active",
      joinDate: "2024-01-15",
      reach: "125K",
      engagement: "8.5%",
      revenue: "+250%",
      platforms: ["Facebook", "Instagram", "TikTok", "WhatsApp"],
      rating: 4.9
    },
    {
      id: 2,
      name: "TechSmart Solutions",
      industry: "Technology",
      description: "IT consulting and software development for small businesses",
      status: "Active",
      joinDate: "2024-01-20",
      reach: "89K",
      engagement: "12.3%",
      revenue: "+180%",
      platforms: ["LinkedIn", "Twitter", "YouTube", "WhatsApp"],
      rating: 4.8
    },
    {
      id: 3,
      name: "Healthy Bites Restaurant",
      industry: "Food",
      description: "Organic and healthy meal delivery service across Lagos",
      status: "Active",
      joinDate: "2024-01-10",
      reach: "156K",
      engagement: "15.7%",
      revenue: "+320%",
      platforms: ["Instagram", "Facebook", "WhatsApp", "TikTok"],
      rating: 4.7
    },
    {
      id: 4,
      name: "GreenLeaf Academy",
      industry: "Education",
      description: "Online learning platform for professional skill development",
      status: "Active",
      joinDate: "2024-01-25",
      reach: "78K",
      engagement: "9.2%",
      revenue: "+150%",
      platforms: ["LinkedIn", "YouTube", "Facebook", "WhatsApp"],
      rating: 4.6
    },
    {
      id: 5,
      name: "FitLife Gym",
      industry: "Health",
      description: "Modern fitness center with personal training services",
      status: "Active",
      joinDate: "2024-01-18",
      reach: "92K",
      engagement: "11.8%",
      revenue: "+200%",
      platforms: ["Instagram", "TikTok", "Facebook", "YouTube"],
      rating: 4.8
    },
    {
      id: 6,
      name: "Digital Marketing Pro",
      industry: "Marketing",
      description: "Full-service digital marketing agency for SMEs",
      status: "Active",
      joinDate: "2024-01-12",
      reach: "134K",
      engagement: "13.5%",
      revenue: "+280%",
      platforms: ["LinkedIn", "Twitter", "Facebook", "Instagram"],
      rating: 4.9
    },
    // Add more mock businesses to demonstrate pagination
    ...Array.from({ length: 20 }, (_, i) => ({
      id: i + 7,
      name: `Business ${i + 7}`,
      industry: ["Technology", "Retail", "Food", "Education", "Health"][i % 5],
      description: `Description for business ${i + 7}`,
      status: "Active",
      joinDate: "2024-01-" + (10 + (i % 20)).toString().padStart(2, '0'),
      reach: (50 + Math.random() * 100).toFixed(0) + "K",
      engagement: (5 + Math.random() * 15).toFixed(1) + "%",
      revenue: "+" + (100 + Math.random() * 200).toFixed(0) + "%",
      platforms: ["Facebook", "Instagram", "LinkedIn", "Twitter"].slice(0, 2 + Math.floor(Math.random() * 3)),
      rating: (4.0 + Math.random() * 1).toFixed(1)
    }))
  ];

  // Filter and sort businesses
  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = filterIndustry === "all" || business.industry.toLowerCase() === filterIndustry.toLowerCase();
    return matchesSearch && matchesIndustry;
  });

  const sortedBusinesses = [...filteredBusinesses].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return parseFloat(b.rating.toString()) - parseFloat(a.rating.toString());
      case "reach":
        return parseInt(b.reach.replace('K', '')) - parseInt(a.reach.replace('K', ''));
      case "recent":
      default:
        return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedBusinesses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBusinesses = sortedBusinesses.slice(startIndex, endIndex);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 hover:bg-green-100";
      case "Pending":
        return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
      case "Paused":
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Success Stories</h2>
            <p className="text-muted-foreground text-lg">
              See how businesses like yours are achieving amazing results with our marketing platform
            </p>
          </div>

          {/* Filters and Search */}
          <Card className="mb-8 shadow-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input 
                      placeholder="Search businesses..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:w-auto md:flex md:gap-4">
                  <Select value={filterIndustry} onValueChange={setFilterIndustry}>
                    <SelectTrigger className="md:w-40">
                      <SelectValue placeholder="Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="food">Food & Restaurant</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="health">Health & Wellness</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="md:w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="name">Name A-Z</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="reach">Most Reach</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentBusinesses.map((business) => (
              <Card key={business.id} className="shadow-card hover:shadow-primary transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {business.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {business.industry}
                        </Badge>
                        <Badge className={getStatusColor(business.status)}>
                          {business.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{business.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {business.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Eye className="w-3 h-3 text-primary" />
                      </div>
                      <div className="text-sm font-bold">{business.reach}</div>
                      <div className="text-xs text-muted-foreground">Reach</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <BarChart3 className="w-3 h-3 text-accent" />
                      </div>
                      <div className="text-sm font-bold">{business.engagement}</div>
                      <div className="text-xs text-muted-foreground">Engagement</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                      </div>
                      <div className="text-sm font-bold">{business.revenue}</div>
                      <div className="text-xs text-muted-foreground">Revenue</div>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Active on:</div>
                    <div className="flex flex-wrap gap-1">
                      {business.platforms.map((platform) => (
                        <Badge key={platform} variant="outline" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Join Date */}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    Joined {new Date(business.joinDate).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                    if (pageNum > totalPages) return null;
                    
                    return (
                      <PaginationItem key={pageNum}>
                        <PaginationLink
                          onClick={() => setCurrentPage(pageNum)}
                          isActive={currentPage === pageNum}
                          className="cursor-pointer"
                        >
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

          {/* No Results */}
          {filteredBusinesses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">No businesses found matching your criteria</div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setFilterIndustry("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <Card className="mt-12 bg-gradient-hero text-white shadow-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Join These Success Stories?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Start your marketing campaign today and see similar results for your business. 
                Join thousands of successful businesses already using our platform.
              </p>
              <Button variant="hero" size="lg">
                Start Your Success Story - ₦1,200
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BusinessListings;