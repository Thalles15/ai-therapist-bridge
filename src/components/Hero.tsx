import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToForm = () => {
    const form = document.getElementById("lead-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Revolucione sua Clínica com IA
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Automatize agendamentos, anamnese e gestão financeira da sua clínica com inteligência artificial
        </p>
        <Button 
          size="lg" 
          onClick={scrollToForm}
          className="animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          Comece Agora <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};