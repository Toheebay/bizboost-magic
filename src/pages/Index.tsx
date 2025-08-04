import MarketingHero from "@/components/MarketingHero";
import SocialMediaShowcase from "@/components/SocialMediaShowcase";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BusinessSubmissionForm from "@/components/BusinessSubmissionForm";
import BusinessListings from "@/components/BusinessListings";
import BlogSection from "@/components/BlogSection";
import NewsSection from "@/components/NewsSection";
import CommunitySection from "@/components/CommunitySection";
import ReferralSystem from "@/components/ReferralSystem";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MarketingHero />
      <SocialMediaShowcase />
      <StatsSection />
      <TestimonialsSection />
      <BusinessSubmissionForm />
      <BusinessListings />
      <BlogSection />
      <NewsSection />
      <CommunitySection />
      <ReferralSystem />
      <Footer />
    </div>
  );
};

export default Index;
