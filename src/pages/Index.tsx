import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;