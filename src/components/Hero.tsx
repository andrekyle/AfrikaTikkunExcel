import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users, Award } from "lucide-react";
import heroImage from "@/assets/excel-hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/10 py-20 lg:py-32">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Marketing headline removed */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Master{" "}
                <span className="bg-gradient-to-r from-excel-green to-excel-blue bg-clip-text text-transparent">Excel
                </span>{" "}
                From Zero to Hero
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">Learn Excel, VBA, AI integration, and advanced data analytics with our comprehensive courses. 
                From beginner basics to expert-level automation.
              </p>
            </div>

            <div className="flex flex-row gap-4 pt-4">
              <a 
                href="#courses" 
                className="px-4 py-2 text-sm bg-background text-excel-green border border-excel-green rounded-full font-medium hover:bg-excel-green hover:text-white transition-all shadow-sm flex items-center gap-1 group"
              >
                Courses
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="#features" 
                className="px-4 py-2 text-sm bg-background text-excel-blue border border-excel-blue rounded-full font-medium hover:bg-excel-blue hover:text-white transition-all shadow-sm flex items-center gap-1 group"
              >
                Features
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Excel Learning Platform"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-excel-green/20 to-transparent" />
            </div>
            
            {/* Floating promotional elements removed as requested */}
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-excel-green/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-excel-blue/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;