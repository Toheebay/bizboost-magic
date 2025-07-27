import MarketingHero from "@/components/MarketingHero";
import SocialMediaShowcase from "@/components/SocialMediaShowcase";
import BusinessSubmissionForm from "@/components/BusinessSubmissionForm";
import ReferralSystem from "@/components/ReferralSystem";
import BusinessListings from "@/components/BusinessListings";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MarketingHero />
      <SocialMediaShowcase />
      <BusinessSubmissionForm />
      <BusinessListings />
      <ReferralSystem />
      <Footer />
    </div>
  );
};

export default Index;
