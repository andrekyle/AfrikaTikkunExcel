import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  TrendingUp, 
  Zap, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Lock
} from "lucide-react";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth0 } from "@auth0/auth0-react";

const learningPaths = [
  {
    level: "Beginner",
    title: "Excel Fundamentals",
    description: "Master the basics of Excel from formulas to formatting",
    duration: "4 weeks",
    students: "25K+",
    badge: "Most Popular",
    badgeColor: "bg-success-green",
    icon: BookOpen,
    features: [
      "Basic formulas & functions",
      "Data entry & formatting", 
      "Charts & graphs",
      "Pivot tables basics"
    ],
    color: "from-success-green to-excel-green-light"
  },
  {
    level: "Intermediate", 
    title: "Advanced Excel",
    description: "Dive deep into advanced functions and data analysis",
    duration: "6 weeks",
    students: "18K+",
    badge: "Recommended",
    badgeColor: "bg-excel-blue",
    icon: TrendingUp,
    features: [
      "Advanced formulas (INDEX, MATCH)",
      "Data validation & protection",
      "Advanced pivot tables",
      "Power Query basics"
    ],
    color: "from-excel-blue to-accent"
  },
  {
    level: "Advanced",
    title: "Excel + VBA + AI",
    description: "Automation, AI integration, and expert-level skills for data transformation.",
    duration: "8 weeks", 
    students: "12K+",
    badge: "Pro Level",
    badgeColor: "bg-learning-orange",
    icon: Zap,
    features: [
      "VBA programming & macros",
      "AI integration with Excel",
      "Advanced data analytics",
      "Dashboard creation"
    ],
    color: "from-learning-orange to-excel-green"
  }
];

const LearningPaths = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Choose Your{" "}
            <span className="bg-gradient-to-r from-excel-green to-excel-blue bg-clip-text text-transparent">Learning Path
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Start where you are, advance at your own pace. Each path is carefully designed 
            to build your Excel expertise step by step.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {learningPaths.map((path, index) => {
            const IconComponent = path.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden border-2 hover:border-excel-green/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <ProtectedRoute
                  fallback={<></>}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                </ProtectedRoute>
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${path.color} shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-primary-foreground" strokeWidth={1} />
                    </div>
                    {path.badge && (
                      <Badge variant="outline" className={`${path.badgeColor} text-primary-foreground font-medium`}>
                        {path.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-1">{path.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {path.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative">


                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {path.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-excel-green flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {path.level === "Beginner" ? (
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-excel-green group-hover:text-primary-foreground group-hover:border-excel-green transition-all relative z-10"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (isAuthenticated) {
                          navigate('/excel-fundamentals');
                        } else {
                          loginWithRedirect();
                        }
                      }}
                    >
                      {isAuthenticated ? (
                        <>Signed in <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" /></>
                      ) : (
                        <><Lock className="w-4 h-4 mr-2" strokeWidth={1} />Login</>
                      )}
                    </Button>
                  ) : path.level === "Advanced" ? (
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-excel-green group-hover:text-primary-foreground group-hover:border-excel-green transition-all relative z-10"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (isAuthenticated) {
                          navigate('/excel-vba-ai');
                        } else {
                          loginWithRedirect();
                        }
                      }}
                    >
                      {isAuthenticated ? (
                        <>Signed in <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" /></>
                      ) : (
                        <><Lock className="w-4 h-4 mr-2" strokeWidth={1} />Login</>
                      )}
                    </Button>
                  ) : path.level === "Intermediate" ? (
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-excel-green group-hover:text-primary-foreground group-hover:border-excel-green transition-all relative z-10"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (isAuthenticated) {
                          navigate('/advanced-excel');
                        } else {
                          loginWithRedirect();
                        }
                      }}
                    >
                      {isAuthenticated ? (
                        <>Signed in <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" /></>
                      ) : (
                        <><Lock className="w-4 h-4 mr-2" strokeWidth={1} />Login</>
                      )}
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-excel-green group-hover:text-primary-foreground group-hover:border-excel-green transition-all relative z-10"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (!isAuthenticated) {
                          loginWithRedirect();
                        }
                      }}
                    >
                      {isAuthenticated ? (
                        <>Signed in <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" /></>
                      ) : (
                        <><Lock className="w-4 h-4 mr-2" strokeWidth={1} />Login</>
                      )}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
