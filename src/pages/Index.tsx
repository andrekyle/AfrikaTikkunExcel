import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DataFlowJourney from "@/components/DataFlowJourney";
import LearningPaths from "@/components/LearningPaths";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <DataFlowJourney />
      <LearningPaths />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
