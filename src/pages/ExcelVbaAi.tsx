import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { Progress } from '@/components/ui/progress';
import CourseResourcesPanel from '@/components/CourseResourcesPanel';

// Define valid topic IDs as a union type
type TopicId = 'vba-fundamentals' | 'ai-excel-integration' | 'vba-ai-automation' | 'intelligent-dashboards' | 'advanced-projects' | 'process-optimization';

// Type guard to check if a string is a valid topic ID
const isTopicId = (id: string): id is TopicId => {
  return [
    'vba-fundamentals',
    'ai-excel-integration',
    'vba-ai-automation',
    'intelligent-dashboards',
    'advanced-projects',
    'process-optimization'
  ].includes(id);
};
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCode } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  Clock, 
  Download, 
  Play, 
  BookOpen, 
  Code2, 
  Brain, 
  Zap,
  Trophy,
  XCircle,
  Bot,
  Sparkles,
  Lightbulb,
  ArrowLeft
} from "lucide-react";
import VBAEnvironmentSetupLesson from "@/components/VBAEnvironmentSetupLesson";
import VBAVariablesDataTypesLesson from "@/components/VBAVariablesDataTypesLesson";
import VBAControlStructuresLesson from "@/components/VBAControlStructuresLesson";
import VBAExcelObjectsLesson from "@/components/VBAExcelObjectsLesson";
import VBAErrorHandlingDebuggingLesson from "@/components/VBAErrorHandlingDebuggingLesson";
import VBAUserFormsLesson from "@/components/VBAUserFormsLesson";
import AIInExcelOverviewLesson from "@/components/AIInExcelOverviewLesson";
import ChatGPTExcelFormulasLesson from "@/components/ChatGPTExcelFormulasLesson";
import APIIntegrationVBALesson from "@/components/APIIntegrationVBALesson";
import PowerQueryAILesson from "@/components/PowerQueryAILesson";
import PythonInExcelLesson from "@/components/PythonInExcelLesson";
import NaturalLanguageProcessingLesson from "@/components/NaturalLanguageProcessingLesson";
import ComputerVisionExcelLesson from "@/components/ComputerVisionExcelLesson";
import PredictiveAnalyticsLesson from "@/components/PredictiveAnalyticsLesson";
import VBAFileSystemOperationsLesson from '@/components/VBAFileSystemOperationsLesson';
import VBADatabaseConnectivityLesson from '@/components/VBADatabaseConnectivityLesson';
import VBACustomFunctionsAddinsLesson from '@/components/VBACustomFunctionsAddinsLesson';
import VBAAdvancedTechniquesLesson from '@/components/VBAAdvancedTechniquesLesson';
import VBAAIArchitectureLesson from '@/components/VBAAIArchitectureLesson';
import VBAAPICallsLesson from '@/components/VBAAPICallsLesson';
import VBAJSONHandlingLesson from '@/components/VBAJSONHandlingLesson';
import SmartDashboardDesignLesson from '@/components/SmartDashboardDesignLesson';
import SmartDashboardProjects from '@/components/SmartDashboardProjects';
import PredictiveVisualizationsLesson from '@/components/PredictiveVisualizationsLesson';
import InteractiveAIControlsLesson from '@/components/InteractiveAIControlsLesson';
import AutomatedReportingLesson from '@/components/AutomatedReportingLesson';
import PerformanceMonitoringLesson from '@/components/PerformanceMonitoringLesson';
import AutomatedContentGenerationLesson from '../components/AutomatedContentGenerationLesson';
import IntelligentDataProcessingLesson from '../components/IntelligentDataProcessingLesson';
import APIIntegrationForAILesson from '@/components/APIIntegrationForAILesson';
import SmartNotificationsLesson from '../components/SmartNotificationsLesson';
import ProcessOptimizationLesson from '../components/ProcessOptimizationLesson';
import VbaAiAutomationLesson from '@/components/VbaAiAutomationLesson';
import VbaAiArchitectureLesson from '@/components/VBAAIArchitectureLesson';
import VbaApiCallsLesson from '@/components/VBAAPICallsLesson';
import VbaJsonHandlingLesson from '@/components/VBAJSONHandlingLesson';


const vbaAiTopics = [
  {
    id: 'vba-fundamentals',
    title: 'VBA Programming Foundations',
    description: 'Master VBA programming from basics to advanced automation',
    icon: FileCode,
    duration: '2 weeks',
    lessons: 10,
    completed: false,
    color: 'from-learning-orange to-excel-green',
    comingSoon: false
  },

  {
    id: 'ai-excel-integration',
    title: 'AI-Powered Excel Solutions',
    description: 'Integrate ChatGPT, Python, and AI tools with Excel',
    icon: Brain,
    duration: '2 weeks',
    lessons: 8,
    completed: false,
    color: 'from-excel-blue to-accent',
    comingSoon: true
  },
  {
    id: "vba-ai-automation",
    title: "VBA + AI Automation",
    icon: Bot,
    duration: "2 weeks",
    lessons: 9,
    description: "Combine VBA with AI APIs for intelligent automation",
    completed: false,
    color: "from-success-green to-excel-green-light"
  },
  {
    id: "intelligent-dashboards",
    title: "AI-Enhanced Dashboards",
    icon: Sparkles,
    duration: "1.5 weeks", 
    lessons: 6,
    description: "Build smart dashboards with predictive analytics",
    completed: false,
    color: "from-excel-green to-excel-blue"
  },
  {
    id: "advanced-projects",
    title: "Real-World AI Projects",
    icon: Lightbulb,
    duration: "2 weeks",
    lessons: 7,
    description: "Complete end-to-end projects combining all technologies",
    completed: false,
    color: "from-learning-orange to-accent"
  }
];

const topicContent = {
  "vba-fundamentals": {
    lessons: [
      { title: "VBA Environment Setup", content: "Configure VBA editor, security settings, and developer tools", exercise: "Set up your VBA development environment" },
      { title: "Variables and Data Types", content: "Master VBA variables, arrays, and object manipulation", exercise: "Create a dynamic data processor" },
      { title: "Control Structures & Logic", content: "Loops, conditionals, and decision-making in VBA", exercise: "Build an intelligent data validator" },
      { title: "Working with Excel Objects", content: "Manipulate workbooks, worksheets, ranges, and charts", exercise: "Create a multi-sheet report generator" },
      { title: "Error Handling & Debugging", content: "Professional error handling and debugging techniques", exercise: "Build robust error-handling systems" },
      { title: "User Forms & Interfaces", content: "Create custom dialog boxes and user interfaces", exercise: "Design an advanced data entry system" },
      { title: "File System Operations", content: "Read, write, and manipulate files and folders", exercise: "Build a file processing automation" },
      { title: "Database Connectivity", content: "Connect VBA to databases and external data sources", exercise: "Create a data synchronization tool" },
      { title: "Custom Functions & Add-ins", content: "Build reusable functions and Excel add-ins", exercise: "Develop a custom Excel add-in" },

    ],
    quiz: [
      { question: "What is the difference between Dim and Public variables in VBA?", answer: "Dim creates local variables, Public creates global variables accessible across modules" },
      { question: "How do you handle runtime errors in VBA?", answer: "Use On Error Resume Next, On Error GoTo, or structured error handling with Try-Catch patterns" },
      { question: "What is the best practice for working with large datasets in VBA?", answer: "Use arrays, disable screen updating, and work with ranges efficiently to improve performance" }
    ]
  },
  "ai-excel-integration": {
    lessons: [
      { title: "AI in Excel Overview", content: "Understand AI capabilities and integration options in Excel", exercise: "Explore built-in AI features in Excel" },
      { title: "ChatGPT for Excel Formulas", content: "Use ChatGPT to generate and explain complex formulas", exercise: "Generate advanced formulas using AI assistance" },
      { title: "Python in Excel", content: "Leverage Python libraries for data analysis and ML", exercise: "Build a machine learning model in Excel" },
      { title: "Power Platform AI Integration", content: "Connect Excel with AI Builder and cognitive services", exercise: "Create an AI-powered form recognizer" },
      { title: "API Integration for AI", content: "Connect Excel to OpenAI, Azure AI, and other AI services", exercise: "Build a sentiment analysis tool" },
      { title: "Natural Language Processing", content: "Process and analyze text data using AI", exercise: "Create an automated text classification system" },
      { title: "Computer Vision in Excel", content: "Integrate image recognition and OCR capabilities", exercise: "Build an image analysis dashboard" },
      { title: "Predictive Analytics", content: "Implement forecasting and prediction models", exercise: "Create a sales prediction system" }
    ],
    quiz: [
      { question: "What is Python in Excel and how does it work?", answer: "A feature that allows running Python code directly in Excel cells, leveraging Python libraries for advanced analytics" },
      { question: "How can ChatGPT help with Excel tasks?", answer: "Generate formulas, explain existing formulas, create VBA code, and provide data analysis insights" },
      { question: "What are the benefits of integrating AI with Excel?", answer: "Automated insights, predictive analytics, natural language processing, and enhanced data analysis capabilities" }
    ]
  },
  "vba-ai-automation": {
    lessons: [
      { title: "VBA + AI Architecture", content: "Design patterns for combining VBA with AI services", exercise: "Design an AI-powered Excel architecture" },
      { title: "API Calls from VBA", content: "Make HTTP requests to AI APIs using VBA", exercise: "Connect VBA to OpenAI API" },
      { title: "JSON Handling in VBA", content: "Parse and create JSON data for AI service communication", exercise: "Build a JSON processor in VBA" },
      { title: "API Integration for AI", content: "Connect Excel to OpenAI, Azure AI, and other AI services. Learn how to authenticate, make API requests, and process responses. Implement rate limiting, error handling, and best practices for production use.", exercise: "Build a sentiment analysis tool using the OpenAI API" },
      { title: "Automated Content Generation", content: "Use AI to generate reports, summaries, and content", exercise: "Create an AI report generator" },
      { title: "Intelligent Data Processing", content: "AI-powered data cleaning and transformation", exercise: "Build an AI data cleaning tool" },
      { title: "Smart Notifications", content: "AI-driven alerts and recommendations", exercise: "Create an intelligent monitoring system" },
      { title: "Process Optimization", content: "Use AI to optimize workflows and business processes", exercise: "Build a process optimization tool" },
      { title: "Voice Integration", content: "Add voice commands and speech-to-text capabilities", exercise: "Build a voice-controlled Excel interface" },
      { title: "Workflow Automation", content: "Create intelligent workflows with AI decision making", exercise: "Design an AI-powered workflow engine" }
    ],
    quiz: [
      { question: "How do you make API calls from VBA?", answer: "Use XMLHTTP object or WinHTTP library to send HTTP requests to external APIs" },
      { question: "What is the best way to handle AI API responses in VBA?", answer: "Parse JSON responses using JSON libraries or custom parsing functions" },
      { question: "How can you optimize performance when calling AI APIs from VBA?", answer: "Use asynchronous calls, batch requests, cache results, and implement proper error handling" }
    ]
  },
  "intelligent-dashboards": {
    lessons: [
      { title: "Smart Dashboard Design", content: "Principles for creating AI-enhanced dashboards", exercise: "Design an intelligent KPI dashboard" },
      { title: "Real-time AI Insights", content: "Display live AI-generated insights and predictions", exercise: "Build a real-time analytics dashboard" },
      { title: "Predictive Visualizations", content: "Create charts that show forecasts and trends", exercise: "Develop predictive chart components" },
      { title: "Interactive AI Controls", content: "Add AI-powered filters and dynamic controls", exercise: "Create smart dashboard controls" },
      { title: "Automated Reporting", content: "Generate intelligent reports with AI insights", exercise: "Build an AI-powered reporting system" },
      { title: "Performance Monitoring", content: "AI-driven performance tracking and alerting", exercise: "Create a smart monitoring dashboard" }
    ],
    quiz: [
      { question: "What makes a dashboard 'intelligent'?", answer: "AI-powered insights, predictive analytics, automated recommendations, and adaptive user interfaces" },
      { question: "How can AI enhance data visualization?", answer: "Through automated insight generation, smart recommendations, predictive modeling, and natural language explanations" },
      { question: "What are key considerations for real-time AI dashboards?", answer: "Performance optimization, data freshness, API rate limits, and user experience responsiveness" }
    ]
  },
  "advanced-projects": {
    lessons: [
      { title: "Project Planning", content: "Plan and architect complex Excel + VBA + AI projects", exercise: "Design a comprehensive project architecture" },
      { title: "Financial AI Assistant", content: "Build an AI-powered financial analysis tool", exercise: "Create a complete financial AI assistant" },
      { title: "Smart Inventory System", content: "Develop an intelligent inventory management system", exercise: "Build an AI inventory optimization tool" },
      { title: "Customer Analytics Platform", content: "Create a customer behavior analysis system", exercise: "Develop a customer insights platform" },
      { title: "Sales Forecasting Engine", content: "Build an advanced sales prediction system", exercise: "Create a comprehensive sales forecasting tool" },
      { title: "Quality Assurance Automation", content: "Develop AI-powered quality control systems", exercise: "Build an automated QA system" },
      { title: "Project Deployment", content: "Deploy and maintain Excel + VBA + AI solutions", exercise: "Deploy a complete AI-integrated solution" }
    ],
    quiz: [
      { question: "What are the key phases of an Excel + VBA + AI project?", answer: "Planning, architecture design, development, testing, deployment, and maintenance" },
      { question: "How do you ensure reliability in AI-integrated Excel solutions?", answer: "Implement proper error handling, fallback mechanisms, testing procedures, and monitoring systems" },
      { question: "What are best practices for deploying Excel + AI solutions?", answer: "Version control, documentation, user training, security considerations, and maintenance planning" }
    ]
  }
};

interface ExcelVbaAiProps {
  selectedTopic: TopicId | string;
  onTopicSelect: (topicId: TopicId) => void;
  completedLessons: Set<string>;
  setCompletedLessons: (lessons: Set<string>) => void;
}

// Key for localStorage
const STORAGE_KEY = 'excelVbaAiProgress';

const ExcelVbaAi: React.FC<ExcelVbaAiProps> = ({
  selectedTopic: propSelectedTopic,
  onTopicSelect: propOnTopicSelect,
  completedLessons: propCompletedLessons,
  setCompletedLessons: propSetCompletedLessons
}) => {
  // Use URL parameters for topic and lesson if not provided as props
  const params = useParams<{ 
    topic?: string;
    lesson?: string;
  }>();
  
  // Get topic from URL or params
  const urlTopic = isTopicId(params?.topic || '') ? params.topic : 'vba-fundamentals';
  const urlLesson = params?.lesson;
  const navigate = useNavigate();
  
  // Use props if provided, otherwise use URL state
  const selectedTopic = propSelectedTopic || urlTopic || "vba-fundamentals";
  
  // Initialize completed lessons from localStorage if not provided via props
  const [localCompletedLessons, setLocalCompletedLessons] = useState<Set<string>>(() => {
    if (propCompletedLessons) return propCompletedLessons;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set<string>();
    } catch (error) {
      console.error('Failed to load progress from localStorage', error);
      return new Set<string>();
    }
  });
  
  // Use prop-based state if provided, otherwise use local state
  const completedLessons = propCompletedLessons || localCompletedLessons;
  
  // Handle topic selection
  const onTopicSelect = useCallback((topicId: TopicId) => {
    if (propOnTopicSelect) {
      propOnTopicSelect(topicId);
    } else {
      // If no prop handler, update URL
      navigate(`/excel-vba-ai/${topicId}`);
    }
  }, [navigate, propOnTopicSelect]);
  
  // Update completed lessons in both state and localStorage
  const setCompletedLessons = useCallback((lessons: Set<string>) => {
    if (propSetCompletedLessons) {
      propSetCompletedLessons(lessons);
    } else {
      // Update local state
      setLocalCompletedLessons(lessons);
      // Persist to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(lessons)));
      } catch (error) {
        console.error('Failed to save progress to localStorage', error);
      }
    }
  }, [propSetCompletedLessons]);
  
  // Load lesson from URL on component mount or when params change
  useEffect(() => {
    if (urlTopic && urlLesson) {
      const lessonIndex = parseInt(urlLesson, 10);
      const validId = isTopicId(urlTopic) ? urlTopic : 'vba-fundamentals';
      const topic = topicContent[validId];
      
      if (topic && !isNaN(lessonIndex) && lessonIndex >= 0 && lessonIndex < topic.lessons.length) {
        setSelectedLesson({
          topicId: validId,
          lessonIndex
        });
        // Mark as viewed but not necessarily completed
        const lessonId = `${validId}-${lessonIndex}`;
        if (!completedLessons.has(lessonId)) {
          // Optional: You might want to mark as viewed but not completed
          // setCompletedLessons(new Set([...completedLessons, lessonId]));
        }
        // Scroll to top when loading a lesson
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        console.error(`Invalid lesson index: ${urlLesson} for topic: ${urlTopic}`);
        // If invalid lesson, navigate to just the topic
        navigate(`/excel-vba-ai/${validId}`);
      }
    } else if (urlTopic) {
      // If only topic is in URL, clear selected lesson
      setSelectedLesson(null);
    }
  }, [urlTopic, urlLesson, navigate, completedLessons]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<{topicId: string, lessonIndex: number} | null>(null);

  const toggleLessonComplete = (topicId: string, lessonIndex: number) => {
    const lessonId = `${topicId}-${lessonIndex}`;
    const newCompleted = new Set(completedLessons);
    if (newCompleted.has(lessonId)) {
      newCompleted.delete(lessonId);
    } else {
      newCompleted.add(lessonId);
    }
    setCompletedLessons(newCompleted);
  };

  const openLesson = (topicId: string, lessonIndex: number) => {
    try {
      // Validate topic ID
      const validId = isTopicId(topicId) ? topicId : 'vba-fundamentals';
      const topic = topicContent[validId];
      
      // Validate lesson index
      if (!topic || !topic.lessons || lessonIndex < 0 || lessonIndex >= topic.lessons.length) {
        console.error(`Invalid lesson: ${topicId} - ${lessonIndex}`);
        return;
      }
      
      // Create the new lesson object for comparison
      const newLesson = { topicId: validId, lessonIndex };
      
      // Check if we're already on this lesson
      const isSameLesson = selectedLesson?.topicId === validId && 
                         selectedLesson?.lessonIndex === lessonIndex;
      
      // Update URL with lesson (replace: true to prevent adding to history)
      navigate(`/excel-vba-ai/${validId}/lessons/${lessonIndex}`, { replace: isSameLesson });
      
      // Only update state if it's actually a different lesson
      if (!isSameLesson) {
        // Update selected lesson
        setSelectedLesson(newLesson);
        
        // Scroll to top of lesson content
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error opening lesson:', error);
    }
  };
  
  // Function to go back to the topic view
  const goBackToTopic = () => {
    navigate(`/excel-vba-ai/${selectedTopic}`);
    setSelectedLesson(null);
  };

  const goToNextLesson = useCallback(() => {
    try {
      if (!selectedLesson) return;
      
      const validId = isTopicId(selectedLesson.topicId) ? selectedLesson.topicId : 'vba-fundamentals';
      const currentTopic = topicContent[validId];
      if (!currentTopic?.lessons) {
        console.error('Invalid topic or lessons not found');
        return;
      }
      
      const nextLessonIndex = selectedLesson.lessonIndex + 1;
      
      // Mark current lesson as completed
      const lessonId = `${selectedLesson.topicId}-${selectedLesson.lessonIndex}`;
      const newCompleted = new Set(completedLessons);
      newCompleted.add(lessonId);
      setCompletedLessons(newCompleted);
      
      // Check if there's a next lesson in the current topic
      if (nextLessonIndex < currentTopic.lessons.length) {
        const nextLessonId = `${validId}-${nextLessonIndex}`;
        // Navigate to next lesson
        navigate(`/excel-vba-ai/${validId}/lessons/${nextLessonIndex}`, { replace: true });
      } else {
        // Go back to topic view if this was the last lesson
        navigate(`/excel-vba-ai/${validId}`);
      }
    } catch (error) {
      console.error('Error in goToNextLesson:', error);
      // Show error to user
      alert('Failed to navigate to next lesson. Please try again.');
    }
  }, [selectedLesson, completedLessons, setCompletedLessons, navigate]);

  // Ensure selectedTopic is valid, fallback to first topic if not
  const validTopic = isTopicId(selectedTopic) ? selectedTopic : 'vba-fundamentals';
  
  // Safely get the current topic with proper type
  const currentTopic = useMemo(() => {
    return topicContent[validTopic];
  }, [validTopic]);
  
  // Handle case when selectedLesson references a non-existent topic
  useEffect(() => {
    if (selectedLesson && !isTopicId(selectedLesson.topicId)) {
      console.error('Invalid topic in selectedLesson, resetting...');
      setSelectedLesson(null);
    }
  }, [selectedLesson]);
  
  // Type guard to ensure topic exists
  if (!currentTopic) {
    console.error('Invalid topic selected, falling back to vba-fundamentals');
    return (
      <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg">
        <p>Unable to load the requested content. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-bold">Excel VBA & AI</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-muted-foreground">
              Progress: {completedLessons.size}/{Object.values(topicContent).reduce((acc, topic) => acc + topic.lessons.length, 0)}
            </div>
            <Progress 
              value={(completedLessons.size / Object.values(topicContent).reduce((acc, topic) => acc + topic.lessons.length, 0)) * 100} 
              className="w-24" 
            />
          </div>
        </div>
      </header>

      <div className="container pt-6">
        <CourseResourcesPanel courseId="excel-vba-ai" />
      </div>

      {/* Hero Section */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold">The Future of{" "}
            <span className="bg-gradient-to-r from-excel-green via-excel-blue to-learning-orange bg-clip-text text-transparent">
              Excel Automation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Master the powerful combination of Excel's flexibility, VBA's automation capabilities, 
            and AI's intelligence to create revolutionary spreadsheet solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Badge variant="secondary" className="px-4 py-2">
              <Code2 className="h-4 w-4 mr-2" />
              VBA Programming
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Brain className="h-4 w-4 mr-2" />
              Artificial Intelligence
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              Automation
            </Badge>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-32">
              <CardHeader>
                <CardTitle className="text-lg">Course Topics</CardTitle>
                <CardDescription>8 weeks • 30 lessons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {vbaAiTopics.map((topic) => {
                  const IconComponent = topic.icon;
                  const isSelected = selectedTopic === topic.id;
                  const topicLessons = topicContent[topic.id as keyof typeof topicContent]?.lessons || [];
                  const completedCount = topicLessons.filter((_, idx) => 
                    completedLessons.has(`${topic.id}-${idx}`)
                  ).length;
                  
                  return (
                    <button
                      key={topic.id}
                      onClick={() => onTopicSelect(topic.id as TopicId)}
                      className={`w-full p-3 rounded-lg text-left transition-all hover:scale-[1.02] ${
                        isSelected 
                          ? 'bg-gradient-to-r ' + topic.color + ' text-primary-foreground shadow-lg' 
                          : 'bg-muted/50 hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-5 w-5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{topic.title}</div>
                          <div className={`text-xs ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                            {completedCount}/{topicLessons.length} lessons
                          </div>
                        </div>
                        {completedCount === topicLessons.length && topicLessons.length > 0 && (
                          <Trophy className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Progress Bar */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">Course Progress</h3>
                    <p className="text-sm text-muted-foreground">
                      {completedLessons.size} of {Object.values(topicContent).reduce((acc, topic) => acc + topic.lessons.length, 0)} lessons completed
                    </p>
                  </div>
                  <Button onClick={() => setShowQuiz(!showQuiz)} variant={showQuiz ? 'outline' : 'default'}>
                    {showQuiz ? 'Back to Lessons' : 'Take Quiz'}
                  </Button>
                </div>
                <div className="mt-4">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-excel-green to-excel-blue transition-all duration-500"
                      style={{
                        width: `${(completedLessons.size / Object.values(topicContent).reduce((acc, topic) => acc + topic.lessons.length, 0)) * 100}%`
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Topic Content */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {(() => {
                      const topic = vbaAiTopics.find(t => t.id === selectedTopic);
                      const IconComponent = topic?.icon || Code2;
                      return (
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${topic?.color || 'from-learning-orange to-excel-green'}`}>
                          <IconComponent className="h-6 w-6 text-primary-foreground" />
                        </div>
                      );
                    })()}
                    <div>
                      <CardTitle className="text-xl">
                        {vbaAiTopics.find(t => t.id === selectedTopic)?.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {vbaAiTopics.find(t => t.id === selectedTopic)?.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">
                      {vbaAiTopics.find(t => t.id === selectedTopic)?.duration}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {currentTopic?.lessons.length} lessons
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Content Tabs */}
            <Tabs defaultValue="lessons" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="lessons" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Lessons
                </TabsTrigger>
                <TabsTrigger value="quiz" className="flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Knowledge Check
                </TabsTrigger>
                <TabsTrigger value="resources" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Resources
                </TabsTrigger>
              </TabsList>

              <TabsContent value="lessons" className="space-y-4">
                {selectedLesson ? (
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={goBackToTopic}
                      className="mb-2"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to lessons
                    </Button>
                    
                    {/* Lesson Content Components */}
                    {selectedLesson.topicId === "vba-fundamentals" && selectedLesson.lessonIndex === 0 && (
                      <VBAEnvironmentSetupLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-fundamentals" && selectedLesson.lessonIndex === 1 && (
                      <VBAVariablesDataTypesLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-fundamentals" && selectedLesson.lessonIndex === 2 && (
                      <VBAControlStructuresLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-fundamentals" && selectedLesson.lessonIndex === 3 && (
                      <VBAExcelObjectsLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-fundamentals" && selectedLesson.lessonIndex === 4 && (
                      <VBAErrorHandlingDebuggingLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-fundamentals" && selectedLesson.lessonIndex === 5 && (
                      <VBAUserFormsLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-fundamentals" && selectedLesson.lessonIndex === 6 && (
                      <VBAFileSystemOperationsLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-fundamentals" && selectedLesson.lessonIndex === 7 && (
                      <VBADatabaseConnectivityLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-fundamentals" && selectedLesson.lessonIndex === 8 && (
                      <VBACustomFunctionsAddinsLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-fundamentals" && selectedLesson.lessonIndex === 9 && (
                      <VBAAdvancedTechniquesLesson onContinue={goToNextLesson} />
                    )}
                    {/* AI Excel Integration Lessons */}
                    {selectedLesson.topicId === "ai-excel-integration" && selectedLesson.lessonIndex === 0 && (
                      <AIInExcelOverviewLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "ai-excel-integration" && selectedLesson.lessonIndex === 1 && (
                      <ChatGPTExcelFormulasLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "ai-excel-integration" && selectedLesson.lessonIndex === 2 && (
                      <APIIntegrationVBALesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "ai-excel-integration" && selectedLesson.lessonIndex === 3 && (
                      <PowerQueryAILesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "ai-excel-integration" && selectedLesson.lessonIndex === 4 && (
                      <PythonInExcelLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "ai-excel-integration" && selectedLesson.lessonIndex === 5 && (
                      <NaturalLanguageProcessingLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "ai-excel-integration" && selectedLesson.lessonIndex === 6 && (
                      <ComputerVisionExcelLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "ai-excel-integration" && selectedLesson.lessonIndex === 7 && (
                      <PredictiveAnalyticsLesson onContinue={goToNextLesson} />
                    )}
                    {/* VBA AI Automation Lessons */}
                    {selectedLesson.topicId === "vba-ai-automation" && selectedLesson.lessonIndex === 0 && (
                      <VBAAIArchitectureLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-ai-automation" && selectedLesson.lessonIndex === 1 && (
                      <VBAAPICallsLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-ai-automation" && selectedLesson.lessonIndex === 2 && (
                      <VBAJSONHandlingLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-ai-automation" && selectedLesson.lessonIndex === 3 && (
                      <APIIntegrationForAILesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-ai-automation" && selectedLesson.lessonIndex === 4 && (
                      <AutomatedContentGenerationLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-ai-automation" && selectedLesson.lessonIndex === 5 && (
                      <IntelligentDataProcessingLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-ai-automation" && selectedLesson.lessonIndex === 6 && (
                      <SmartNotificationsLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-ai-automation" && selectedLesson.lessonIndex === 6 && (
                      <ProcessOptimizationLesson onContinue={goToNextLesson} />
                    )}
                    {/* Intelligent Dashboards Lessons */}
                    {selectedLesson.topicId === "intelligent-dashboards" && selectedLesson.lessonIndex === 0 && (
                      <SmartDashboardDesignLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "intelligent-dashboards" && selectedLesson.lessonIndex === 1 && (
                      <SmartDashboardProjects onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "intelligent-dashboards" && selectedLesson.lessonIndex === 2 && (
                      <PredictiveVisualizationsLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "intelligent-dashboards" && selectedLesson.lessonIndex === 3 && (
                      <InteractiveAIControlsLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "intelligent-dashboards" && selectedLesson.lessonIndex === 4 && (
                      <AutomatedReportingLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "intelligent-dashboards" && selectedLesson.lessonIndex === 5 && (
                      <PerformanceMonitoringLesson onContinue={goToNextLesson} />
                    )}
                    {/* VBA + AI Automation Lessons */}
                    {selectedLesson.topicId === "vba-ai-automation" && selectedLesson.lessonIndex === 0 && (
                      <VbaAiAutomationLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-ai-automation" && selectedLesson.lessonIndex === 1 && (
                      <VbaAiArchitectureLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-ai-automation" && selectedLesson.lessonIndex === 2 && (
                      <VbaApiCallsLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-ai-automation" && selectedLesson.lessonIndex === 3 && (
                      <VbaJsonHandlingLesson onContinue={goToNextLesson} />
                    )}
                    {selectedLesson.topicId === "vba-ai-automation" && selectedLesson.lessonIndex === 7 && (
                      <ProcessOptimizationLesson onContinue={goToNextLesson} />
                    )}
                    
                    {/* Add more conditionals for other lesson components as they are created */}
                    {!(selectedLesson.topicId === "vba-fundamentals" && (selectedLesson.lessonIndex === 0 || selectedLesson.lessonIndex === 1 || selectedLesson.lessonIndex === 2 || selectedLesson.lessonIndex === 3 || selectedLesson.lessonIndex === 4 || selectedLesson.lessonIndex === 5 || selectedLesson.lessonIndex === 6 || selectedLesson.lessonIndex === 7 || selectedLesson.lessonIndex === 8 || selectedLesson.lessonIndex === 9)) && 
                     !(selectedLesson.topicId === "ai-excel-integration" && (selectedLesson.lessonIndex === 0 || selectedLesson.lessonIndex === 1 || selectedLesson.lessonIndex === 2 || selectedLesson.lessonIndex === 3 || selectedLesson.lessonIndex === 4 || selectedLesson.lessonIndex === 5 || selectedLesson.lessonIndex === 6 || selectedLesson.lessonIndex === 7)) && 
                     !(selectedLesson.topicId === "vba-ai-automation" && (selectedLesson.lessonIndex === 0 || selectedLesson.lessonIndex === 1 || selectedLesson.lessonIndex === 2 || selectedLesson.lessonIndex === 3 || selectedLesson.lessonIndex === 4 || selectedLesson.lessonIndex === 5 || selectedLesson.lessonIndex === 6 || selectedLesson.lessonIndex === 7)) && 
                     !(selectedLesson.topicId === "intelligent-dashboards" && (selectedLesson.lessonIndex === 0 || selectedLesson.lessonIndex === 1 || selectedLesson.lessonIndex === 2 || selectedLesson.lessonIndex === 3 || selectedLesson.lessonIndex === 4 || selectedLesson.lessonIndex === 5)) && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Lesson Content Coming Soon</CardTitle>
                          <CardDescription>This lesson is under development</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="mb-4 rounded-full bg-muted p-3">
                              <FileCode className="h-10 w-10 text-muted-foreground" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold">Content Under Development</h3>
                            <p className="mb-4 text-muted-foreground">We're working on creating this lesson content. Check back soon!
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ) : (
                  // Lesson list
                  <>
                    {currentTopic?.lessons.map((lesson, index) => {
                      const lessonId = `${selectedTopic}-${index}`;
                      const isCompleted = completedLessons.has(lessonId);
                      
                      return (
                        <Card key={index} className={`transition-all hover:shadow-md ${isCompleted ? 'bg-success-green/5 border-success-green/20' : ''}`}>
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <Badge variant="outline" className="text-xs">Lesson {index + 1}
                                  </Badge>
                                  <h3 className="font-semibold">{lesson.title}</h3>
                                </div>
                                <p className="text-muted-foreground">{lesson.content}</p>
                              </div>
                              <Button
                                variant={isCompleted ? "secondary" : "outline"}
                                size="sm"
                                onClick={() => openLesson(selectedTopic, index)}
                              >
                                <>
                                  <Play className="h-4 w-4 mr-2" />
                                  {isCompleted ? "Review" : "Start"}
                                </>
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center">
                              <div className="bg-muted/50 p-4 rounded-lg flex-1">
                                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                                  <Lightbulb className="h-4 w-4" />
                                  Hands-on Project
                                </h4>
                                <p className="text-sm text-muted-foreground">{lesson.exercise}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="ml-2"
                                onClick={() => toggleLessonComplete(selectedTopic, index)}
                              >
                                {isCompleted ? (
                                  <CheckCircle className="h-5 w-5 text-success-green" />
                                ) : (
                                  <XCircle className="h-5 w-5 text-muted-foreground/50" />
                                )}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </>
                )}
              </TabsContent>

              <TabsContent value="quiz" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5" />
                      Knowledge Assessment
                    </CardTitle>
                    <CardDescription>Test your understanding of {vbaAiTopics.find(t => t.id === selectedTopic)?.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {currentTopic?.quiz.map((q, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">Question {index + 1}</h4>
                        <p className="text-muted-foreground mb-3">{q.question}</p>
                        <details className="group">
                          <summary className="cursor-pointer text-sm text-excel-blue hover:text-excel-blue/80">Show Answer
                          </summary>
                          <div className="mt-2 p-3 bg-success-green/10 border border-success-green/20 rounded text-sm">
                            {q.answer}
                          </div>
                        </details>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileCode className="h-5 w-5" />
                        Code Libraries & Templates
                      </CardTitle>
                      <CardDescription>Download VBA code libraries and AI integration templates</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        VBA + AI Integration Library.xlsm
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        OpenAI API VBA Module.bas
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        Smart Dashboard Templates.xlsx
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        AI Automation Examples.xlsm
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        AI Tools & APIs
                      </CardTitle>
                      <CardDescription>External AI services and integration guides</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Bot className="h-4 w-4 mr-2" />
                        OpenAI API Setup Guide
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Brain className="h-4 w-4 mr-2" />
                        Azure Cognitive Services
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Sparkles className="h-4 w-4 mr-2" />
                        Power Platform AI Builder
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Code2 className="h-4 w-4 mr-2" />
                        Python in Excel Guide
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the main component as default
export default ExcelVbaAi;