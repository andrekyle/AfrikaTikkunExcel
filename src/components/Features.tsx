import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bot, 
  Code, 
  BarChart3, 
  Users, 
  Trophy, 
  Smartphone,
  Clock,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Learning",
    description: "Learn how to integrate ChatGPT, Copilot, and other AI tools directly into Excel workflows",
    gradient: "from-excel-blue to-accent"
  },
  {
    icon: Code,
    title: "VBA Programming",
    description: "Master Visual Basic for Applications to automate complex tasks and create powerful macros",
    gradient: "from-excel-green to-excel-green-light"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Advanced data analysis, statistical functions, and creating insightful business dashboards",
    gradient: "from-learning-orange to-excel-green"
  },
  {
    icon: Users,
    title: "Interactive Learning",
    description: "Hands-on exercises, real-world projects, and peer collaboration to reinforce your skills",
    gradient: "from-accent to-excel-blue"
  },
  {
    icon: Trophy,
    title: "Certification Ready",
    description: "Prepare for Microsoft Excel certifications with our comprehensive exam preparation modules",
    gradient: "from-success-green to-excel-green"
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Learn on any device - desktop, tablet, or mobile. Access your courses anywhere, anytime",
    gradient: "from-excel-green to-excel-blue"
  },
  {
    icon: Clock,
    title: "Self-Paced",
    description: "Learn at your own speed with lifetime access to all course materials and updates",
    gradient: "from-excel-blue to-learning-orange"
  },
  {
    icon: Shield,
    title: "Expert Support",
    description: "Get help from certified Excel experts and join our active community of learners",
    gradient: "from-learning-orange to-accent"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose{" "}
            <span className="bg-gradient-to-r from-excel-green to-excel-blue bg-clip-text text-transparent">ExcelMaster?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We don't just teach Excel basics. We prepare you for the future of spreadsheet work 
            with AI, automation, and advanced analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden border-2 hover:border-excel-green/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <CardHeader className="relative text-center pb-4">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="h-6 w-6 text-primary-foreground" strokeWidth={1} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>

                <CardContent className="relative text-center">
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;