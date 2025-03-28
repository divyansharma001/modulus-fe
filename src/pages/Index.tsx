
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { CompaniesSection } from "@/components/companies-section";
import { QuestionCategories } from "@/components/question-categories";
import { PeerFinder } from "@/components/peer-finder";
import { MentorshipSection } from "@/components/mentorship-section";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <CompaniesSection />
        <QuestionCategories />
        <PeerFinder />
        <MentorshipSection />
        <Testimonials />
        <Pricing />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
