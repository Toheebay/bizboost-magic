import MentorshipHero from "@/components/MentorshipHero";
import SkillsShowcase from "@/components/SkillsShowcase";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MentorshipRequestForm from "@/components/MentorshipRequestForm";
import BusinessListings from "@/components/BusinessListings";
import WeeklyTipsSection from "@/components/WeeklyTipsSection";
import ResourcesSection from "@/components/ResourcesSection";
import CommunitySection from "@/components/CommunitySection";
import ReferralSystem from "@/components/ReferralSystem";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MentorshipHero />
      <SkillsShowcase />
      <StatsSection />
      <TestimonialsSection />
      <MentorshipRequestForm />
      <BusinessListings />
      <WeeklyTipsSection />
      <ResourcesSection />
      <CommunitySection />
      <ReferralSystem />
      <Footer />
    </div>
  );
};

export default Index;
