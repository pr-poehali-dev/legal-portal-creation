import LegalHero from "@/components/LegalHero";
import LegalServices from "@/components/LegalServices";
import LegalTestimonials from "@/components/LegalTestimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <LegalHero />
      <LegalServices />
      <LegalTestimonials />
    </div>
  );
};

export default Index;
