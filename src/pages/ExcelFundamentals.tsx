import * as React from 'react';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { PieChart, Pie, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, ReferenceLine, Label, AreaChart, Area, ComposedChart, ScatterChart, Scatter } from 'recharts';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ConditionalFormattingExercise from "@/components/ConditionalFormattingExercise";
import PerformanceScorecardExercise from "@/components/PerformanceScorecardExercise";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Calculator,
  BarChart3,
  Table,
  Copy,
  Filter,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const fundamentalsTopics = [
  {
    id: "basics",
    title: "Excel Basics",
    description: "Getting started with Excel interface and navigation",
    duration: "30 min",
    icon: BookOpen,
    completed: false,
    lessons: [
      "Understanding the Excel interface",
      "Working with workbooks and worksheets",
      "Basic navigation and shortcuts",
      "Saving and opening files"
    ]
  },
  {
    id: "data-entry",
    title: "Data Entry & Formatting",
    description: "Learn how to enter and format data effectively",
    duration: "45 min",
    icon: Table,
    completed: false,
    lessons: [
      "Entering text, numbers, and dates",
      "Cell formatting (fonts, colors, borders)",
      "Number formatting and custom formats",
      "Conditional Formatting",
      "Using AutoFill and Flash Fill"
    ]
  },
  {
    id: "formulas",
    title: "Basic Formulas",
    description: "Master fundamental Excel formulas and functions",
    duration: "60 min",
    icon: Calculator,
    completed: false,
    lessons: [
      "Understanding formulas and functions",
      "SUM, AVERAGE, COUNT functions",
      "Cell references (relative vs absolute)",
      "Basic arithmetic operations"
    ]
  },
  {
    id: "charts",
    title: "Charts & Visualization",
    description: "Create compelling charts and graphs",
    duration: "40 min",
    icon: BarChart3,
    completed: false,
    lessons: [
      "Creating basic charts (Column, Line, Pie)",
      "Chart formatting and customization",
      "Adding chart elements",
      "Chart best practices"
    ]
  },
  {
    id: "data-management",
    title: "Data Management",
    description: "Organize and manage your data efficiently",
    duration: "50 min",
    icon: Filter,
    completed: false,
    lessons: [
      "Sorting data",
      "Filtering and advanced filters",
      "Data validation",
      "Find and replace"
    ]
  }
];

const ExcelFundamentals = () => {
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [currentTopic, setCurrentTopic] = useState(fundamentalsTopics[0]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  
  const progress = (completedTopics.length / fundamentalsTopics.length) * 100;

  // Utility function for copying data with proper error handling
  const copyToClipboard = async (data: string) => {
    try {
      await await copyToClipboard(data);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      // Fallback for older browsers or when clipboard API fails
      const textArea = document.createElement('textarea');
      textArea.value = data;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (fallbackError) {
        console.error('Fallback copy failed:', fallbackError);
      }
      document.body.removeChild(textArea);
    }
  };

  const markTopicComplete = (topicId: string) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics([...completedTopics, topicId]);
    }
  };
  
  const handleAnswerSelect = (questionNumber: number, option: string) => {
    if (!quizSubmitted) {
      setSelectedAnswers(prev => ({
        ...prev,
        [questionNumber]: option
      }));
    }
  };
  
  // Track total questions for the current quiz
  const [totalQuestions, setTotalQuestions] = useState<number>(10); // Default to 10 (for basics)

  // Simplified quiz submission function
  const submitQuiz = () => {
    // Hard-coded correct answers by topic
    const correctAnswers = {
      basics: {
        1: "C", 2: "B", 3: "A", 4: "B", 5: "C", 6: "B", 7: "D", 8: "A", 9: "C", 10: "C"
      },
      "data-entry": {
        1: "B", 2: "A", 3: "D", 4: "C", 5: "B", 6: "C", 7: "A", 8: "D", 9: "B", 10: "C", 11: "A", 12: "B", 13: "D", 14: "C", 15: "B", 16: "C", 17: "B", 18: "A", 19: "D", 20: "D"
      },
      formulas: {
        1: "A", 2: "C", 3: "A", 4: "B", 5: "A", 6: "C", 7: "B", 8: "A", 9: "C", 10: "A", 11: "B", 12: "C", 13: "B", 14: "D", 15: "A"
      },
      charts: {
        1: "C", 2: "A", 3: "B", 4: "B", 5: "B", 6: "B", 7: "C", 8: "B", 9: "C", 10: "D"
      },
      "data-management": {
        1: "A", 2: "D", 3: "B", 4: "C", 5: "A", 6: "D", 7: "C", 8: "B", 9: "A", 10: "C", 11: "D", 12: "B", 13: "A", 14: "C", 15: "D"
      }
    };
    
    // Get current topic's correct answers
    const topicAnswers = correctAnswers[currentTopic.id as keyof typeof correctAnswers];
    const questionsCount = Object.keys(topicAnswers).length;
    
    // Update total questions state
    setTotalQuestions(questionsCount);
    
    // Calculate score
    let score = 0;
    Object.entries(selectedAnswers).forEach(([qNum, answer]) => {
      const questionNumber = parseInt(qNum);
      if (topicAnswers[questionNumber as keyof typeof topicAnswers] === answer) {
        score++;
      }
    });
    
    // Update state
    setQuizScore(score);
    setQuizSubmitted(true);
    
    // Check if passed (70% is passing)
    const passingScore = Math.ceil(questionsCount * 0.7);
    if (score >= passingScore) {
      markTopicComplete(currentTopic.id);
    }
  };
  
  const resetQuiz = () => {
    console.log('resetQuiz called - resetting state');
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
    console.log('Quiz state should now be reset');
  };

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
            <h1 className="text-xl font-bold">Excel Fundamentals</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-muted-foreground">Progress: {completedTopics.length}/{fundamentalsTopics.length}
            </div>
            <Progress value={progress} className="w-24" />
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Topic Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-excel-green" />
                  Course Content
                </CardTitle>
                <CardDescription >Complete all topics to master Excel fundamentals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {fundamentalsTopics.map((topic, index) => {
                  const IconComponent = topic.icon;
                  const isCompleted = completedTopics.includes(topic.id);
                  const isCurrent = currentTopic.id === topic.id;
                  
                  return (
                    <div
                      key={topic.id}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                        isCurrent 
                          ? 'border-excel-green bg-excel-green/10' 
                          : 'border-border hover:border-excel-green/50'
                      }`}
                      onClick={async () => {
                        setCurrentTopic(topic);
                        resetQuiz(); // Reset the quiz state when switching topics
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-md ${
                          isCompleted 
                            ? 'bg-success-green/20' 
                            : isCurrent 
                              ? 'bg-excel-green/20' 
                              : 'bg-muted'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="h-4 w-4 text-success-green" />
                          ) : (
                            <IconComponent className={`h-4 w-4 ${
                              isCurrent ? 'text-excel-green' : 'text-muted-foreground'
                            }`} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm">{topic.title}</div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {topic.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Topic Header */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-excel-green to-excel-blue">
                      <currentTopic.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{currentTopic.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {currentTopic.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-auto">
                      {currentTopic.duration}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>

              {/* Topic Content */}
              <Tabs defaultValue="content" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="practice">Practice</TabsTrigger>
                  <TabsTrigger value="quiz">Quiz</TabsTrigger>
                </TabsList>

                <TabsContent value="content" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle >What You'll Learn</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {currentTopic.lessons.map((lesson, index) => (
                          <li key={index} className="flex items-center gap-3">
  <div className="w-6 h-6 rounded-full bg-excel-green/20 flex items-center justify-center text-sm font-medium text-excel-green">
    {index + 1}
  </div>
  <span>{lesson}</span>

                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Detailed Content Based on Current Topic */}
                  {currentTopic.id === "basics" && (
                    <Card>
                      <CardHeader>
                        <CardTitle >Excel Interface Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Key Components:</h4>
                          <ul className="space-y-2 text-sm">
                            <li><strong >Ribbon:</strong>
                  Contains all Excel commands organized in tabs</li>
                            <li><strong >Name Box:</strong>
                  Shows the active cell address</li>
                            <li><strong >Formula Bar:</strong>
                  Displays and edits cell content</li>
                            <li><strong >Worksheet Area:</strong>
                  The grid of cells where you work</li>
                            <li><strong >Sheet Tabs:</strong>
                  Switch between different worksheets</li>
                          </ul>
                        </div>
                        
                        <div className="bg-excel-green/10 p-4 rounded-lg border border-excel-green/20">
                          <h4 className="font-semibold mb-2 text-excel-green">💡 Pro Tip:</h4>
                          <p className="text-sm">Use Ctrl+Home to quickly return to cell A1 from anywhere in your worksheet!</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {currentTopic.id === "data-entry" && (
                    <div className="space-y-6">
                      {/* Lesson 4 Theory Card */}
                      <Card>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <Badge variant="outline" className="bg-muted/50 text-xs">Lesson 4</Badge>
                                <Badge variant="default" className="text-xs bg-green-500 text-white">New</Badge>
                              </div>
                              <CardTitle >Conditional Formatting</CardTitle>
                            </div>
                          </div>
                          <CardDescription >Advanced formatting rules and data bars</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ConditionalFormattingExercise />
                        </CardContent>
                      </Card>
                      
                      {/* Hands-on Exercise Card */}
                      <Card className="border-2 border-excel-green/30">
                        <CardHeader className="bg-excel-green/5">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-excel-green/20 rounded-md">
                              <Play className="h-5 w-5 text-excel-green" />
                            </div>
                            <CardTitle >Hands-on Exercise</CardTitle>
                          </div>
                          <CardDescription >Build a performance scorecard</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <PerformanceScorecardExercise />
                        </CardContent>
                      </Card>
                    </div>
                  )}
                  
                  {currentTopic.id === "formulas" && (
                    <Card>
                      <CardHeader>
                        <CardTitle >Essential Formulas</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-6">
                          {/* Mathematical Functions */}
                          <div>
                            <h3 className="text-lg font-semibold text-excel-green mb-3 border-b pb-1">Mathematical Functions</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">SUM Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=SUM(A1:A10)</code>
                                <p className="text-sm mt-2">Adds all numbers in the range A1 to A10</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">AVERAGE Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=AVERAGE(B1:B10)</code>
                                <p className="text-sm mt-2">Calculates the average of numbers in range</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">MAX Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=MAX(G1:G10)</code>
                                <p className="text-sm mt-2">Returns the largest value in a range of cells</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">MIN Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=MIN(H1:H10)</code>
                                <p className="text-sm mt-2">Returns the smallest value in a range of cells</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">ROUND Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=ROUND(A1,2)</code>
                                <p className="text-sm mt-2">Rounds a number to a specified number of digits</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">ABS Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=ABS(A1)</code>
                                <p className="text-sm mt-2">Returns the absolute value of a number</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">CEILING Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=CEILING(A1,5)</code>
                                <p className="text-sm mt-2">Rounds a number up to the nearest multiple</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">SUMPRODUCT Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=SUMPRODUCT(A1:A10,B1:B10)</code>
                                <p className="text-sm mt-2">Multiplies corresponding values and returns the sum</p>
                              </div>
                            </div>
                          </div>

                          {/* Statistical Functions */}
                          <div>
                            <h3 className="text-lg font-semibold text-excel-green mb-3 border-b pb-1">Statistical Functions</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">COUNT Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=COUNT(C1:C10)</code>
                                <p className="text-sm mt-2">Counts the number of cells containing numbers</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">COUNTA Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=COUNTA(D1:D10)</code>
                                <p className="text-sm mt-2">Counts the number of non-empty cells</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">COUNTIF Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=COUNTIF(C1:C10,"Approved")</code>
                                <p className="text-sm mt-2">Counts cells that meet a specific condition</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">RANK Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=RANK(A1,A1:A20,0)</code>
                                <p className="text-sm mt-2">Returns the rank of a number within a list of numbers</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">AVERAGEIF Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=AVERAGEIF(A1:A10,"{'>'}50",B1:B10)</code>
                                <p className="text-sm mt-2">Returns the average of values that meet a condition</p>
                              </div>
                            </div>
                          </div>

                          {/* Logical Functions */}
                          <div>
                            <h3 className="text-lg font-semibold text-excel-green mb-3 border-b pb-1">Logical Functions</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">IF Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=IF(E1 {'>'} 100,"High","Low")</code>
                                <p className="text-sm mt-2">Tests a condition and returns different values based on the result</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg border border-excel-green">
                                <h4 className="font-semibold mb-2 flex items-center">IFS Function
                                  <Badge className="ml-2 bg-excel-green/20 text-excel-green text-xs">New</Badge>
                                </h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=IFS(A1 {'>'} 90,"A",A1 {'>'} 80,"B",A1 {'>'} 70,"C",TRUE,"F")</code>
                                <p className="text-sm mt-2">Tests multiple conditions and returns a value for the first TRUE result</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">AND Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=AND(A1 {'>'} 10,A1{'<'}20)</code>
                                <p className="text-sm mt-2">Returns TRUE if all conditions are met</p>
                              </div>
                          
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">OR Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=OR(A1 {'>'} 20,A1{'<'}5)</code>
                                <p className="text-sm mt-2">Returns TRUE if any condition is met</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">NOT Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=NOT(A1=10)</code>
                                <p className="text-sm mt-2">Reverses the logical value of its argument</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">IFERROR Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=IFERROR(A1/B1,"Cannot divide by zero")</code>
                                <p className="text-sm mt-2">Traps errors and displays an alternative result</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">ISBLANK Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=ISBLANK(A1)</code>
                                <p className="text-sm mt-2">Returns TRUE if the cell is empty</p>
                              </div>
                            </div>
                          </div>

                          {/* Lookup & Reference Functions */}
                          <div>
                            <h3 className="text-lg font-semibold text-excel-green mb-3 border-b pb-1">Lookup & Reference Functions</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">VLOOKUP Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=VLOOKUP(F1,A1:C10,2,FALSE)</code>
                                <p className="text-sm mt-2">Searches for a value in the first column and returns a value from the same row</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">HLOOKUP Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=HLOOKUP(A1,B1:D5,2,FALSE)</code>
                                <p className="text-sm mt-2">Searches for a value in the top row and returns a value from the specified row</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">INDEX/MATCH Functions</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=INDEX(B1:D10,MATCH(A1,A1:A10,0),2)</code>
                                <p className="text-sm mt-2">Powerful alternative to VLOOKUP for two-way lookups</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">INDIRECT Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=INDIRECT("A"&B1)</code>
                                <p className="text-sm mt-2">Creates a reference from a text string</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">OFFSET Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=OFFSET(A1,2,3,1,1)</code>
                                <p className="text-sm mt-2">Returns a reference to a range offset from a starting point</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg border border-excel-green">
                                <h4 className="font-semibold mb-2 flex items-center">XLOOKUP Function
                                  <Badge className="ml-2 bg-excel-green/20 text-excel-green text-xs">New</Badge>
                                </h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=XLOOKUP(A1,B1:B10,C1:C10,"Not Found",0,1)</code>
                                <p className="text-sm mt-2">Modern replacement for VLOOKUP with more flexibility and features</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg border border-excel-green">
                                <h4 className="font-semibold mb-2 flex items-center">XMATCH Function
                                  <Badge className="ml-2 bg-excel-green/20 text-excel-green text-xs">New</Badge>
                                </h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=XMATCH("Apple",A1:A20,0,1)</code>
                                <p className="text-sm mt-2">Enhanced version of MATCH with more search options</p>
                              </div>
                            </div>
                          </div>

                          {/* Text Functions */}
                          <div>
                            <h3 className="text-lg font-semibold text-excel-green mb-3 border-b pb-1">Text Functions</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">CONCATENATE Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=CONCATENATE(A1," ",B1)</code>
                                <p className="text-sm mt-2">Joins multiple text values into one text value</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">LEFT Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=LEFT(A1,5)</code>
                                <p className="text-sm mt-2">Extracts characters from the start of a text string</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">RIGHT Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=RIGHT(A1,4)</code>
                                <p className="text-sm mt-2">Extracts characters from the end of a text string</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">MID Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=MID(A1,3,5)</code>
                                <p className="text-sm mt-2">Extracts characters from the middle of a text string</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">PROPER Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=PROPER(A1)</code>
                                <p className="text-sm mt-2">Capitalizes the first letter in each word</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">UPPER Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=UPPER(A1)</code>
                                <p className="text-sm mt-2">Converts text to uppercase</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">LOWER Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=LOWER(A1)</code>
                                <p className="text-sm mt-2">Converts text to lowercase</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg border border-excel-green">
                                <h4 className="font-semibold mb-2 flex items-center">TEXTJOIN Function
                                  <Badge className="ml-2 bg-excel-green/20 text-excel-green text-xs">New</Badge>
                                </h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=TEXTJOIN(", ",TRUE,A1:A10)</code>
                                <p className="text-sm mt-2">Combines text with a specified delimiter</p>
                              </div>
                            </div>
                          </div>

                          {/* Date & Time Functions */}
                          <div>
                            <h3 className="text-lg font-semibold text-excel-green mb-3 border-b pb-1">Date & Time Functions</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">TODAY Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=TODAY()</code>
                                <p className="text-sm mt-2">Returns the current date</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">NOW Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=NOW()</code>
                                <p className="text-sm mt-2">Returns the current date and time</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">NETWORKDAYS Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=NETWORKDAYS(A1,B1)</code>
                                <p className="text-sm mt-2">Returns the number of working days between two dates</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">EOMONTH Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=EOMONTH(A1,1)</code>
                                <p className="text-sm mt-2">Returns the last day of the month a specified number of months away</p>
                              </div>

                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">WEEKDAY Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=WEEKDAY(A1,1)</code>
                                <p className="text-sm mt-2">Returns the day of the week as a number (1-7)</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Dynamic Array Functions */}
                          <div>
                            <h3 className="text-lg font-semibold text-excel-green mb-3 border-b pb-1">Dynamic Array Functions</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-muted/50 p-4 rounded-lg border border-excel-green">
                                <h4 className="font-semibold mb-2 flex items-center">FILTER Function
                                  <Badge className="ml-2 bg-excel-green/20 text-excel-green text-xs">New</Badge>
                                </h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=FILTER(A1:C10,B1:B10 {'>'} 100,"No results")</code>
                                <p className="text-sm mt-2">Returns values that meet specific criteria</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg border border-excel-green">
                                <h4 className="font-semibold mb-2 flex items-center">UNIQUE Function
                                  <Badge className="ml-2 bg-excel-green/20 text-excel-green text-xs">New</Badge>
                                </h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=UNIQUE(A1:A20)</code>
                                <p className="text-sm mt-2">Returns a list of unique values from a range</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg border border-excel-green">
                                <h4 className="font-semibold mb-2 flex items-center">SORT Function
                                  <Badge className="ml-2 bg-excel-green/20 text-excel-green text-xs">New</Badge>
                                </h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=SORT(A1:C10,2,1)</code>
                                <p className="text-sm mt-2">Sorts the contents of a range or array</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg border border-excel-green">
                                <h4 className="font-semibold mb-2 flex items-center">SEQUENCE Function
                                  <Badge className="ml-2 bg-excel-green/20 text-excel-green text-xs">New</Badge>
                                </h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=SEQUENCE(10,1,1,1)</code>
                                <p className="text-sm mt-2">Generates a list of sequential numbers</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg border border-excel-green">
                                <h4 className="font-semibold mb-2 flex items-center">RANDARRAY Function
                                  <Badge className="ml-2 bg-excel-green/20 text-excel-green text-xs">New</Badge>
                                </h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=RANDARRAY(5,3,1,100,TRUE)</code>
                                <p className="text-sm mt-2">Returns an array of random numbers between specified values</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg border border-excel-green">
                                <h4 className="font-semibold mb-2 flex items-center">TRANSPOSE Function
                                  <Badge className="ml-2 bg-excel-green/20 text-excel-green text-xs">New</Badge>
                                </h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=TRANSPOSE(A1:C5)</code>
                                <p className="text-sm mt-2">Converts vertical range to horizontal and vice versa</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Financial Functions */}
                          <div>
                            <h3 className="text-lg font-semibold text-excel-green mb-3 border-b pb-1">Financial Functions</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">PMT Function</h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=PMT(0.05/12,60,10000)</code>
                                <p className="text-sm mt-2">Calculates the payment for a loan based on constant payments and interest rate</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg border border-excel-green">
                                <h4 className="font-semibold mb-2 flex items-center">STOCKHISTORY Function
                                  <Badge className="ml-2 bg-excel-green/20 text-excel-green text-xs">New</Badge>
                                </h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=STOCKHISTORY("MSFT",TODAY()-365,TODAY())</code>
                                <p className="text-sm mt-2">Retrieves historical stock data for specified securities</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Advanced Functions */}
                          <div>
                            <h3 className="text-lg font-semibold text-excel-green mb-3 border-b pb-1">Advanced Functions</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-muted/50 p-4 rounded-lg border border-excel-green">
                                <h4 className="font-semibold mb-2 flex items-center">LET Function
                                  <Badge className="ml-2 bg-excel-green/20 text-excel-green text-xs">New</Badge>
                                </h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=LET(x,A1,y,A2,x+y)</code>
                                <p className="text-sm mt-2">Assigns names to calculation results for clarity and performance</p>
                              </div>
                              
                              <div className="bg-muted/50 p-4 rounded-lg border border-excel-green">
                                <h4 className="font-semibold mb-2 flex items-center">LAMBDA Function
                                  <Badge className="ml-2 bg-excel-green/20 text-excel-green text-xs">New</Badge>
                                </h4>
                                <code className="bg-background px-2 py-1 rounded text-sm">=LAMBDA(x,y,x*y)(A1,A2)</code>
                                <p className="text-sm mt-2">Creates custom reusable functions in Excel formulas</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="practice" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle >Practice Exercises</CardTitle>
                      <CardDescription >Complete these hands-on exercises to reinforce your learning
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {currentTopic.id === "data-entry" && (
                        <>
                          {/* Exercise 1: Employee Data Formatting */}
                          <div className="bg-excel-blue/5 p-6 rounded-lg border border-excel-blue/20 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <h4 className="text-lg font-semibold text-excel-blue mb-4 pb-2 border-b border-excel-blue/20">Exercise 1: Employee Data Formatting</h4>
                            
                            <div className="bg-white p-5 rounded-lg border border-gray-200 mb-5 shadow-inner">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <div>
                                  <h5 className="text-base font-semibold text-gray-800">Employee Information</h5>
                                  <p className="text-sm text-gray-600">Copy and paste this data into Excel</p>
                                </div>
                                <div className="mt-2 sm:mt-0">
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="bg-white hover:bg-gray-50 border-gray-300 text-gray-700"
                                    onClick={async () => {
                                      const tableData = [
                                        ['Employee ID', 'First Name', 'Last Name', 'Department', 'Start Date', 'Salary (R)'],
                                        ['EMP001', 'John', 'Smith', 'Marketing', '15/01/2022', '42000'],
                                        ['EMP002', 'Sarah', 'Johnson', 'IT', '03/08/2021', '58000'],
                                        ['EMP003', 'Michael', 'Brown', 'Finance', '22/03/2023', '51000'],
                                        ['EMP004', 'Emily', 'Davis', 'HR', '07/11/2022', '45000'],
                                        ['EMP005', 'David', 'Wilson', 'Sales', '30/06/2021', '47500']
                                      ];
                                      const text = tableData.map(row => row.join('\t')).join('\n');
                                      try {
                                        await navigator.clipboard.writeText(text);
                                        const button = document.getElementById('copy-data-btn');
                                        if (button) {
                                          const originalText = button.textContent;
                                          button.textContent = 'Copied!';
                                          button.className = 'h-8 px-3 text-xs bg-green-100 text-green-800 border-green-200 hover:bg-green-100';
                                          setTimeout(() => {
                                            button.textContent = originalText;
                                            button.className = 'h-8 px-3 text-xs';
                                          }, 2000);
                                        }
                                      } catch (err) {
                                        console.error('Failed to copy:', err);
                                      }
                                    }}
                                  >
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m3 3l3 3" />
                                    </svg>
                                    Copy Data
                                  </Button>
                                </div>
                              </div>

                              </div>
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="py-3 px-4 text-left font-semibold text-gray-700">Employee ID</th>
                                    <th className="py-3 px-4 text-left font-semibold text-gray-700">First Name</th>
                                    <th className="py-3 px-4 text-left font-semibold text-gray-700">Last Name</th>
                                    <th className="py-2 px-3 text-left">Department</th>
                                    <th className="py-3 px-4 text-left font-semibold text-gray-700">Start Date</th>
                                    <th className="py-3 px-4 text-left font-semibold text-gray-700">Salary (R)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">EMP001</td>
                                    <td className="py-2 px-3">John</td>
                                    <td className="py-2 px-3">Smith</td>
                                    <td className="py-2 px-3">Marketing</td>
                                    <td className="py-2 px-3 whitespace-nowrap">15-Jan-2022</td>
                                    <td className="py-2 px-3 font-mono">R42,000</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">EMP002</td>
                                    <td className="py-2 px-3">Sarah</td>
                                    <td className="py-2 px-3">Johnson</td>
                                    <td className="py-2 px-3">IT</td>
                                    <td className="py-2 px-3 whitespace-nowrap">03-Aug-2021</td>
                                    <td className="py-2 px-3 font-mono">R58,000</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">EMP003</td>
                                    <td className="py-2 px-3">Michael</td>
                                    <td className="py-2 px-3">Brown</td>
                                    <td className="py-2 px-3">Finance</td>
                                    <td className="py-2 px-3 whitespace-nowrap">22-Mar-2023</td>
                                    <td className="py-2 px-3 font-mono">R51,000</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">EMP004</td>
                                    <td className="py-2 px-3">Emily</td>
                                    <td className="py-2 px-3">Davis</td>
                                    <td className="py-2 px-3">HR</td>
                                    <td className="py-2 px-3 whitespace-nowrap">07-Nov-2022</td>
                                    <td className="py-2 px-3 font-mono">R45,000</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">EMP005</td>
                                    <td className="py-2 px-3">David</td>
                                    <td className="py-2 px-3">Wilson</td>
                                    <td className="py-2 px-3">Sales</td>
                                    <td className="py-2 px-3 whitespace-nowrap">30-Jun-2021</td>
                                    <td className="py-2 px-3 font-mono">R47,500</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="mt-8">
                              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                <h5 className="font-semibold text-blue-800 mb-2 flex items-center">
                                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                  </svg>
                                  Instructions
                                </h5>
                                <ol className="list-decimal ml-6 space-y-3 text-sm text-gray-700">
                                  <li className="flex items-start">
                                    <span className="mr-2">1.</span>
                                    <span>Create a new Excel workbook and enter the employee data above</span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="mr-2">2.</span>
                                    <span>Format the Salary column as Currency with no decimal places</span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="mr-2">3.</span>
                                    <span>Format the Start Date column as a proper date (dd-mmm-yyyy format)</span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="mr-2">4.</span>
                                    <span>Use Conditional Formatting to highlight employees with salaries above R50,000 in light green</span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="mr-2">5.</span>
                                    <span>Create a drop-down filter for the Department column</span>
                                  </li>
                                  <li className="flex items-start">
                                    <span className="mr-2">6.</span>
                                    <span>Use Flash Fill to create a new column combining First and Last Name (e.g., "Smith, John")</span>
                                  </li>
                                </ol>
                              </div>
                            </div>

                            {/* Solution Section */}
                            <div className="mt-8 pt-5 border-t border-gray-200">
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <h5 className="text-base font-semibold text-gray-800">Solution Guide</h5>
                                  <p className="text-sm text-gray-600">Expected results and step-by-step instructions</p>
                                </div>
                              </div>
                              
                              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
                                  <h6 className="font-semibold text-blue-800 mb-2 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    Expected Results
                                  </h6>
                                </div>
                                <div className="overflow-x-auto">
                                  <table className="min-w-full text-sm border-collapse">
                                    <thead>
                                      <tr className="bg-gray-50">
                                        <th className="py-2 px-3 border text-left">Employee ID</th>
                                        <th className="py-2 px-3 border text-left">First Name</th>
                                        <th className="py-2 px-3 border text-left">Last Name</th>
                                        <th className="py-2 px-3 border text-left">Full Name</th>
                                        <th className="py-2 px-3 border text-left">Department</th>
                                        <th className="py-2 px-3 border text-left">Start Date</th>
                                        <th className="py-2 px-3 border text-left">Salary (R)</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="py-2 px-3 border">EMP001</td>
                                        <td className="py-2 px-3 border">John</td>
                                        <td className="py-2 px-3 border">Smith</td>
                                        <td className="py-2 px-3 border">Smith, John</td>
                                        <td className="py-2 px-3 border">Marketing</td>
                                        <td className="py-2 px-3 border">15-Jan-2022</td>
                                        <td className="py-2 px-3 border font-mono">R42,000</td>
                                      </tr>
                                      <tr className="bg-green-50">
                                        <td className="py-2 px-3 border">EMP002</td>
                                        <td className="py-2 px-3 border">Sarah</td>
                                        <td className="py-2 px-3 border">Johnson</td>
                                        <td className="py-2 px-3 border">Johnson, Sarah</td>
                                        <td className="py-2 px-3 border">IT</td>
                                        <td className="py-2 px-3 border">03-Aug-2021</td>
                                        <td className="py-2 px-3 border font-mono text-green-700 font-medium">R58,000</td>
                                      </tr>
                                      <tr className="bg-green-50">
                                        <td className="py-2 px-3 border">EMP003</td>
                                        <td className="py-2 px-3 border">Michael</td>
                                        <td className="py-2 px-3 border">Brown</td>
                                        <td className="py-2 px-3 border">Brown, Michael</td>
                                        <td className="py-2 px-3 border">Finance</td>
                                        <td className="py-2 px-3 border">22-Mar-2023</td>
                                        <td className="py-2 px-3 border font-mono text-green-700 font-medium">R51,000</td>
                                      </tr>
                                      <tr>
                                        <td className="py-2 px-3 border">EMP004</td>
                                        <td className="py-2 px-3 border">Emily</td>
                                        <td className="py-2 px-3 border">Davis</td>
                                        <td className="py-2 px-3 border">Davis, Emily</td>
                                        <td className="py-2 px-3 border">HR</td>
                                        <td className="py-2 px-3 border">07-Nov-2022</td>
                                        <td className="py-2 px-3 border font-mono">R45,000</td>
                                      </tr>
                                      <tr>
                                        <td className="py-2 px-3 border">EMP005</td>
                                        <td className="py-2 px-3 border">David</td>
                                        <td className="py-2 px-3 border">Wilson</td>
                                        <td className="py-2 px-3 border">Wilson, David</td>
                                        <td className="py-2 px-3 border">Sales</td>
                                        <td className="py-2 px-3 border">30-Jun-2021</td>
                                        <td className="py-2 px-3 border font-mono">R47,500</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="mt-3 text-xs text-gray-500 flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                  </svg>
                                  Note: Green rows indicate salaries above R50,000 with conditional formatting applied
                                </div>
                              </div>
                              
                              <div className="space-y-4 text-sm">
                                {/* Step 1 */}
                                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                  <h6 className="font-semibold text-base mb-3 text-gray-800 flex items-center">
                                    <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-2">1</span>
                                    Format Salary as Currency
                                  </h6>
                                  <div className="space-y-2">
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Select column F (Salary)</span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Press <kbd className="bg-gray-100 border border-gray-300 px-1 py-0.5 text-xs rounded">Ctrl+1</kbd> to open Format Cells</span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Choose <span className="font-mono bg-gray-50 px-1 py-0.5 rounded">Currency</span> with 0 decimal places</span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Set Symbol to <span className="font-mono bg-gray-50 px-1 py-0.5 rounded">R</span> (South African Rand)</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                  <h6 className="font-semibold text-base mb-3 text-gray-800 flex items-center">
                                    <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-2">2</span>
                                    Format Start Date
                                  </h6>
                                  <div className="space-y-2">
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Select column E (Start Date)</span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Press <kbd className="bg-gray-100 border border-gray-300 px-1 py-0.5 text-xs rounded">Ctrl+1</kbd></span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Select <span className="font-mono bg-gray-50 px-1 py-0.5 rounded">Date</span> category</span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Choose <span className="font-mono bg-gray-50 px-1 py-0.5 rounded">14-Mar-2012</span> format or create a custom format: <span className="font-mono bg-gray-50 px-1 py-0.5 rounded">dd-mmm-yyyy</span></span>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                  <h6 className="font-semibold text-base mb-3 text-gray-800 flex items-center">
                                    <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-2">3</span>
                                    Conditional Formatting for High Salaries
                                  </h6>
                                  <div className="space-y-2">
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Select cells F2:F6 (salary values)</span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Go to <span className="font-medium">Home → Conditional Formatting → Highlight Cells Rules → Greater Than</span></span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Enter <span className="font-mono bg-gray-50 px-1 py-0.5 rounded">50000</span></span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Choose <span className="font-medium">Green Fill with Dark Green Text</span> or create a custom format</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 4 */}
                                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                  <h6 className="font-semibold text-base mb-3 text-gray-800 flex items-center">
                                    <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-2">4</span>
                                    Create Department Drop-down
                                  </h6>
                                  <div className="space-y-2">
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Select cell D1 (Department header)</span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Go to <span className="font-medium">Data → Data Validation</span></span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Under <span className="font-medium">Allow</span>, select <span className="font-mono bg-gray-50 px-1 py-0.5 rounded">List</span></span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>In <span className="font-medium">Source</span>, type: <span className="font-mono bg-gray-50 px-1 py-0.5 rounded">Marketing,IT,Finance,HR,Sales</span></span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Click <span className="font-medium">OK</span></span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Copy the validation down to cells D2:D6</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 5 */}
                                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                  <h6 className="font-semibold text-base mb-3 text-gray-800 flex items-center">
                                    <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-2">5</span>
                                    Use Flash Fill for Full Name
                                  </h6>
                                  <div className="space-y-2">
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Insert a new column after Last Name (Column D)</span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Name the column header <span className="font-mono">Full Name</span></span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>In cell D2, type: <span className="font-mono">Smith, John</span> (manually combine the names)</span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Press <kbd>Enter</kbd> then <kbd>Ctrl+E</kbd> to use Flash Fill</span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Alternatively, go to <span className="font-medium">Data → Flash Fill</span></span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Press <kbd>Enter</kbd> then <kbd>Ctrl+E</kbd> to use Flash Fill</span>
                                    </div>
                                    <div className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>Alternatively, go to <span className="font-medium">Data → Flash Fill</span></span>
                                    </div>
                                  </div>
                                </div>

                                {/* Pro Tips */}
                                <div className="bg-blue-100/50 p-3 rounded-lg border border-blue-200 mt-4">
                                  <p className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 16v-4"></path>
                                      <path d="M12 8h.01"></path>
                                    </svg>
                                    Pro Tips:
                                  </p>
                                  <ul className="list-disc pl-5 space-y-1 text-blue-800">
                                    <li>Use <kbd>Ctrl+Shift+4</kbd> to quickly apply currency format</li>
                                    <li>For the date format, you can also right-click → Format Cells → Custom</li>
                                    <li>To update the department list later, go to Data Validation and modify the source</li>
                                    <li>Flash Fill (Ctrl+E) works with various patterns - try different formats!</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                      

                          {/* Exercise 2: Data Cleanup */}
                          <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                            <h4 className="font-semibold mb-3">Exercise 2: Customer Data Cleanup</h4>
                            
                            <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium">Customer Information (Needs Cleanup)</h5>
                                <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                  const tableData = [
                                    ['Customer Name', 'Email Address', 'Phone Number', 'Purchase Date', 'Amount'],
                                    ['JANE ROBERTS', 'j.roberts@email.com', '555-123-4567', '2023-04-15', 'R1 240.50'],
                                    ['michael parker', 'mparker@email.net', '(555) 987-6543', '2023-05-22', 'R895.75'],
                                    ['Thomas WILSON', 't.wilson@company.org', '555.333.2222', '2023-03-08', 'R2 150.00'],
                                    ['anna SMITH', 'asmith@webmail.com', '555 444 9999', '2023-06-17', 'R750.25'],
                                    ['ROBERT johnson', 'r.johnson@mail.co', '555-777-8888', '2023-02-28', 'R1 875.60']
                                  ].map(row => row.join('\t')).join('\n');
                                  await copyToClipboard(tableData);
                                }}>
                                  <Copy className="h-4 w-4 mr-1" />
                                  <span className="text-xs">Copy Data</span>
                                </Button>
                              </div>
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="py-2 px-3 text-left">Customer Name</th>
                                    <th className="py-2 px-3 text-left">Email Address</th>
                                    <th className="py-2 px-3 text-left">Phone Number</th>
                                    <th className="py-2 px-3 text-left">Purchase Date</th>
                                    <th className="py-2 px-3 text-left">Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">JANE ROBERTS</td>
                                    <td className="py-2 px-3">j.roberts@email.com</td>
                                    <td className="py-2 px-3">555-123-4567</td>
                                    <td className="py-2 px-3">2023-04-15</td>
                                    <td className="py-2 px-3">R1 240.50</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">michael parker</td>
                                    <td className="py-2 px-3">mparker@email.net</td>
                                    <td className="py-2 px-3">(555) 987-6543</td>
                                    <td className="py-2 px-3">2023-05-22</td>
                                    <td className="py-2 px-3">R895.75</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Thomas WILSON</td>
                                    <td className="py-2 px-3">t.wilson@company.org</td>
                                    <td className="py-2 px-3">555.333.2222</td>
                                    <td className="py-2 px-3">2023-03-08</td>
                                    <td className="py-2 px-3">R2 150.00</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">anna SMITH</td>
                                    <td className="py-2 px-3">asmith@webmail.com</td>
                                    <td className="py-2 px-3">555 444 9999</td>
                                    <td className="py-2 px-3">2023-06-17</td>
                                    <td className="py-2 px-3">R750.25</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">ROBERT johnson</td>
                                    <td className="py-2 px-3">r.johnson@mail.co</td>
                                    <td className="py-2 px-3">555-777-8888</td>
                                    <td className="py-2 px-3">2023-02-28</td>
                                    <td className="py-2 px-3">R1 875.60</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="space-y-3">
                              <p className="text-sm font-medium">Instructions:</p>
                              <ol className="list-decimal ml-5 space-y-2 text-sm">
                                <li>Create a new Excel workbook and enter the customer data above</li>
                                <li>Standardize all customer names to proper case (e.g., "Jane Roberts" instead of "JANE ROBERTS")</li>
                                <li>Format all phone numbers to a consistent format (e.g., 555-123-4567)</li>
                                <li>Convert the Purchase Date column to a standard date format (dd/mm/yyyy)</li>
                                <li>Remove the Rand (R) currency symbol from the Amount column and format it as South African Currency</li>
                                <li>Create a new column called "Purchase Quarter" that shows Q1, Q2, Q3, or Q4 based on the purchase date</li>
                              </ol>
                              <p className="text-sm mt-2 italic">Hint: Use the PROPER() function for names and the QUARTER() function for determining the quarter</p>
                            </div>

                            {/* Solution Section */}
                            <div className="mt-6 border-t pt-4">
                              <h5 className="font-medium text-sm mb-3 flex items-center gap-2 text-excel-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                Solution Guide
                              </h5>

                              {/* Expected Results Table */}
                              <div className="mb-8 bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                  </svg>
                                  <h6 className="font-semibold text-gray-800">Expected Results After Cleanup</h6>
                                </div>
                                <div className="overflow-x-auto">
                                  <table className="min-w-full text-sm border-collapse">
                                    <thead>
                                      <tr className="bg-gray-50">
                                        <th className="py-2 px-3 border text-left">Customer Name</th>
                                        <th className="py-2 px-3 border text-left">Email Address</th>
                                        <th className="py-2 px-3 border text-left">Phone Number</th>
                                        <th className="py-2 px-3 border text-left">Purchase Date</th>
                                        <th className="py-2 px-3 border text-left">Amount</th>
                                        <th className="py-2 px-3 border text-left">Purchase Quarter</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="py-2 px-3 border">Jane Roberts</td>
                                        <td className="py-2 px-3 border">j.roberts@email.com</td>
                                        <td className="py-2 px-3 border">555-123-4567</td>
                                        <td className="py-2 px-3 border">15/04/2023</td>
                                        <td className="py-2 px-3 border font-mono">R 1,240.50</td>
                                        <td className="py-2 px-3 border text-center">Q2</td>
                                      </tr>
                                      <tr>
                                        <td className="py-2 px-3 border">Michael Parker</td>
                                        <td className="py-2 px-3 border">mparker@email.net</td>
                                        <td className="py-2 px-3 border">555-987-6543</td>
                                        <td className="py-2 px-3 border">22/05/2023</td>
                                        <td className="py-2 px-3 border font-mono">R 895.75</td>
                                        <td className="py-2 px-3 border text-center">Q2</td>
                                      </tr>
                                      <tr>
                                        <td className="py-2 px-3 border">Thomas Wilson</td>
                                        <td className="py-2 px-3 border">t.wilson@company.org</td>
                                        <td className="py-2 px-3 border">555-333-2222</td>
                                        <td className="py-2 px-3 border">08/03/2023</td>
                                        <td className="py-2 px-3 border font-mono">R 2,150.00</td>
                                        <td className="py-2 px-3 border text-center">Q1</td>
                                      </tr>
                                      <tr>
                                        <td className="py-2 px-3 border">Anna Smith</td>
                                        <td className="py-2 px-3 border">asmith@webmail.com</td>
                                        <td className="py-2 px-3 border">555-444-9999</td>
                                        <td className="py-2 px-3 border">17/06/2023</td>
                                        <td className="py-2 px-3 border font-mono">R 750.25</td>
                                        <td className="py-2 px-3 border text-center">Q2</td>
                                      </tr>
                                      <tr>
                                        <td className="py-2 px-3 border">Robert Johnson</td>
                                        <td className="py-2 px-3 border">r.johnson@mail.co</td>
                                        <td className="py-2 px-3 border">555-777-8888</td>
                                        <td className="py-2 px-3 border">28/02/2023</td>
                                        <td className="py-2 px-3 border font-mono">R 1,875.60</td>
                                        <td className="py-2 px-3 border text-center">Q1</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              
                              <div className="space-y-5">
                                {/* Step 1 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">1</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Standardize Customer Names</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Insert a new column after Customer Name (Column B)</span>
                                        </div>
                                        <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <span className="text-blue-500 mt-1">=</span>
                                          <code className="font-mono text-sm bg-white px-2 py-1 rounded border">=PROPER(A2)</code>
                                          <span className="text-xs text-gray-500 mt-1">// Proper case formatting</span>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Double-click the fill handle to copy the formula down</span>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Copy the column → Right-click → Paste Special → Values</span>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Delete the original column</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">2</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Format Phone Numbers</h4>
                                      <div className="space-y-3 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Select the Phone Number column</span>
                                        </div>
                                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                          <div className="flex items-center gap-2 text-sm font-mono">
                                            <span className="text-blue-600">Press</span>
                                            <kbd className="px-2 py-1 bg-white border border-gray-200 rounded shadow-sm text-sm">Ctrl</kbd>
                                            <span className="text-blue-600">+</span>
                                            <kbd className="px-2 py-1 bg-white border border-gray-200 rounded shadow-sm text-sm">1</kbd>
                                            <span className="text-gray-500 ml-1">to open Format Cells</span>
                                          </div>
                                          <div className="mt-2 text-sm text-gray-600">
                                            Go to <span className="font-medium">Custom</span> and enter:
                                            <div className="bg-white p-2 mt-1 rounded border font-mono text-sm">000-000-0000</div>
                                          </div>
                                        </div>
                                        <div className="mt-2">
                                          <p className="text-sm font-medium text-gray-700 mb-1">Clean up using Find & Replace:</p>
                                          <div className="grid grid-cols-2 gap-2 text-sm">
                                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                                              <span className="text-gray-500">Find:</span>
                                              <code className="bg-white px-2 py-0.5 rounded border">(</code>
                                              <span className="text-gray-500">→</span>
                                              <span className="text-green-600">(empty)</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                                              <span className="text-gray-500">Find:</span>
                                              <code className="bg-white px-2 py-0.5 rounded border">)</code>
                                              <span className="text-gray-500">→</span>
                                              <span className="text-green-600">(empty)</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                                              <span className="text-gray-500">Find:</span>
                                              <code className="bg-white px-2 py-0.5 rounded border"> </code>
                                              <span className="text-gray-500">→</span>
                                              <span className="text-green-600">(empty)</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                                              <span className="text-gray-500">Find:</span>
                                              <code className="bg-white px-2 py-0.5 rounded border">.</code>
                                              <span className="text-gray-500">→</span>
                                              <span className="text-green-600">(empty)</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">3</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Format Purchase Dates</h4>
                                      <div className="space-y-3 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Select the Purchase Date column</span>
                                        </div>
                                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                          <div className="flex items-center gap-2 text-sm font-mono">
                                            <span className="text-blue-600">Press</span>
                                            <kbd className="px-2 py-1 bg-white border border-gray-200 rounded shadow-sm text-sm">Ctrl</kbd>
                                            <span className="text-blue-600">+</span>
                                            <kbd className="px-2 py-1 bg-white border border-gray-200 rounded shadow-sm text-sm">1</kbd>
                                            <span className="text-gray-500 ml-1">to open Format Cells</span>
                                          </div>
                                          <div className="mt-3 space-y-2">
                                            <div className="flex items-center gap-2 text-sm">
                                              <span className="text-gray-600">1. Select</span>
                                              <span className="font-medium bg-blue-50 px-2 py-0.5 rounded">Date</span>
                                              <span className="text-gray-500">category</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                              <span className="text-gray-600">2. Choose format:</span>
                                              <code className="bg-white px-2 py-0.5 rounded border text-sm">14/03/2012</code>
                                              <span className="text-gray-500">or create custom:</span>
                                              <code className="bg-white px-2 py-0.5 rounded border text-sm">dd/mm/yyyy</code>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="text-sm text-gray-600 bg-yellow-50 p-2 rounded border-l-4 border-yellow-400">
                                          <div className="flex items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mt-0.5 text-yellow-600 flex-shrink-0">
                                              <circle cx="12" cy="12" r="10"></circle>
                                              <line x1="12" y1="16" x2="12" y2="12"></line>
                                              <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                            </svg>
                                            <span>Ensure your dates are recognized correctly. If you see ######, double-click the column border to auto-fit the width.</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 4 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">4</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Clean Up Amount Column</h4>
                                      <div className="space-y-3 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Select the Amount column</span>
                                        </div>
                                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                          <div className="flex items-center gap-2 text-sm font-mono">
                                            <span className="text-blue-600">Press</span>
                                            <kbd className="px-2 py-1 bg-white border border-gray-200 rounded shadow-sm text-sm">Ctrl</kbd>
                                            <span className="text-blue-600">+</span>
                                            <kbd className="px-2 py-1 bg-white border border-gray-200 rounded shadow-sm text-sm">H</kbd>
                                            <span className="text-gray-500 ml-1">to open Find & Replace</span>
                                          </div>
                                          <div className="mt-3 space-y-2">
                                            <div className="flex items-center gap-2 text-sm bg-white p-2 rounded border">
                                              <span className="text-gray-600">Find what:</span>
                                              <code className="bg-gray-50 px-2 py-0.5 rounded border">R</code>
                                              <span className="text-gray-500 mx-2">→</span>
                                              <span className="text-gray-600">Replace with:</span>
                                              <code className="bg-gray-50 px-2 py-0.5 rounded border italic text-gray-500">(leave empty)</code>
                                              <button className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded hover:bg-blue-200">
                                                Replace All
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                          <p className="text-sm font-medium text-gray-700 mb-2">Format as Currency:</p>
                                          <div className="grid grid-cols-2 gap-3 text-sm">
                                            <div className="space-y-1">
                                              <div className="flex items-center gap-2">
                                                <span className="text-gray-600">1. Select column</span>
                                              </div>
                                              <div className="flex items-center gap-2">
                                                <span className="text-blue-600">Press</span>
                                                <kbd className="px-2 py-0.5 bg-white border border-gray-200 rounded shadow-sm text-xs">Ctrl</kbd>
                                                <span className="text-blue-600">+</span>
                                                <kbd className="px-2 py-0.5 bg-white border border-gray-200 rounded shadow-sm text-xs">1</kbd>
                                              </div>
                                            </div>
                                            <div className="space-y-1">
                                              <div className="flex items-center gap-2">
                                                <span className="text-gray-600">2. Choose</span>
                                                <span className="font-medium">Currency</span>
                                              </div>
                                              <div className="flex items-center gap-2">
                                                <span className="text-gray-600">Symbol:</span>
                                                <span className="font-mono bg-white px-2 py-0.5 rounded border text-xs">R</span>
                                                <span className="text-gray-500 text-xs">(South African Rand)</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 5 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">5</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Add Purchase Quarter Column</h4>
                                      <div className="space-y-3 text-gray-700">
                                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                              <p className="text-sm font-medium text-gray-700">Method 1: Using ROUNDUP</p>
                                              <div className="bg-white p-2 rounded border font-mono text-sm overflow-x-auto">
                                                ="Q"&ROUNDUP(MONTH(D2)/3,0)
                                              </div>
                                              <p className="text-xs text-gray-500">This divides the month by 3 and rounds up</p>
                                            </div>
                                            <div className="space-y-2">
                                              <p className="text-sm font-medium text-gray-700">Method 2: Using Nested IFs</p>
                                              <div className="bg-white p-2 rounded border font-mono text-sm overflow-x-auto">
                                                =IF(MONTH(D2){'<='}3,"Q1",IF(MONTH(D2){'<='}6,"Q2",IF(MONTH(D2){'<='}9,"Q3","Q4")))
                                              </div>
                                              <p className="text-xs text-gray-500">More readable but longer formula</p>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        <div className="space-y-2">
                                          <p className="text-sm font-medium text-gray-700">Steps:</p>
                                          <ol className="list-decimal pl-5 space-y-1 text-sm">
                                            <li>Right-click on column E header and select <span className="font-medium">Insert</span></li>
                                            <li>Name the new column <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded">Purchase Quarter</span></li>
                                            <li>Enter either formula in cell F2</li>
                                            <li>Double-click the fill handle (small square at bottom-right of cell) to copy down</li>
                                          </ol>
                                        </div>
                                        
                                        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                                          <div className="flex items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0">
                                              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                              <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                            <div>
                                              <p className="text-sm font-medium text-green-800">Quick Tip</p>
                                              <p className="text-xs text-green-700">The ROUNDUP method is more concise, but the nested IF method might be easier to understand for beginners. Both will give you the same result!</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Pro Tips */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100 mt-6">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-blue-100 p-1.5 rounded-lg">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 16v-4"></path>
                                        <path d="M12 8h.01"></path>
                                      </svg>
                                    </div>
                                    <h4 className="font-semibold text-blue-900">Excel Pro Tips</h4>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <div>
                                          <span className="font-medium">Quick Selection</span>
                                          <div className="flex flex-wrap gap-1.5 mt-1">
                                            <kbd className="px-2 py-1 bg-white border border-gray-200 rounded shadow-sm text-xs flex items-center gap-0.5">
                                              <span className="text-xs">Ctrl</span>+<span>Space</span>
                                            </kbd>
                                            <span className="text-xs text-gray-500 self-center">Select entire column</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <div>
                                          <span className="font-medium">Data Navigation</span>
                                          <div className="flex flex-wrap gap-1.5 mt-1">
                                            <kbd className="px-2 py-1 bg-white border border-gray-200 rounded shadow-sm text-xs flex items-center gap-0.5">
                                              <span className="text-xs">Ctrl</span>+<span>Shift</span>+<span>↓</span>
                                            </kbd>
                                            <span className="text-xs text-gray-500 self-center">Select to end of data</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="space-y-3">
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <div>
                                          <span className="font-medium">Quick Edit</span>
                                          <div className="flex flex-wrap gap-1.5 mt-1">
                                            <kbd className="px-2 py-1 bg-white border border-gray-200 rounded shadow-sm text-xs">F2</kbd>
                                            <span className="text-xs text-gray-500 self-center">Edit active cell</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <div>
                                          <span className="font-medium">Freeze Panes</span>
                                          <div className="text-xs text-gray-600 mt-1">
                                            View → Freeze Panes → Freeze Top Row
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-4 pt-3 border-t border-blue-100">
                                    <p className="text-xs text-blue-700 flex items-center gap-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                        <path d="M12 8v4"></path>
                                        <path d="M12 16h.01"></path>
                                      </svg>
                                      Remember: These keyboard shortcuts work in most spreadsheet applications, not just Excel!
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        

                        {/* Exercise 3: Product Inventory Dashboard */}
                        <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                          <h4 className="font-semibold mb-3">Exercise 3: Product Inventory Dashboard</h4>
                          
                          <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="text-sm font-medium">Product Inventory</h5>
                              <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                const tableData = [
                                  ['Product ID', 'Product Name', 'Category', 'Stock Level', 'Reorder Point', 'Last Updated', 'Price', 'Status'],
                                  ['P1001', 'Wireless Mouse', 'Peripherals', '45', '20', '01/07/2023', '299.99', 'In Stock'],
                                  ['P1002', 'USB-C Cable 1m', 'Cables', '12', '15', '05/07/2023', '79.99', 'Low Stock'],
                                  ['P1003', 'Ergonomic Keyboard', 'Peripherals', '28', '15', '28/06/2023', '799.50', 'In Stock'],
                                  ['P1004', 'External SSD 500GB', 'Storage', '0', '5', '10/07/2023', '1299.00', 'Out of Stock'],
                                  ['P1005', 'Wireless Headphones', 'Audio', '32', '10', '15/07/2023', '699.00', 'In Stock'],
                                  ['P1006', 'HDMI Adapter', 'Cables', '8', '12', '12/07/2023', '149.50', 'Low Stock']
                                ].map(row => row.join('\t')).join('\n');
                                await copyToClipboard(tableData);
                              }}>
                                <Copy className="h-4 w-4 mr-1" />
                                <span className="text-xs">Copy Data</span>
                              </Button>
                            </div>
                            
                            {/* Solution Section */}
                            <div className="mt-8 border-t pt-6">
                              <div className="flex items-center gap-3 mb-6">
                                <div className="bg-excel-blue/10 p-2 rounded-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-excel-blue">
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-lg text-gray-800">Solution Guide: Inventory Dashboard</h5>
                                  <p className="text-sm text-gray-600">Create a comprehensive inventory management dashboard</p>
                                </div>
                              </div>

                              {/* Expected Results Table */}
                              <div className="mb-8 bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                  </svg>
                                  <h6 className="font-semibold text-gray-800">Expected Dashboard Elements</h6>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {/* Inventory Summary */}
                                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h4 className="font-medium text-gray-700 mb-3">Inventory Summary</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                      <div className="bg-blue-50 p-3 rounded">
                                        <p className="text-xs text-gray-500">Total Products</p>
                                        <p className="text-2xl font-semibold">6</p>
                                      </div>
                                      <div className="bg-green-50 p-3 rounded">
                                        <p className="text-xs text-gray-500">In Stock</p>
                                        <p className="text-2xl font-semibold">4</p>
                                      </div>
                                      <div className="bg-yellow-50 p-3 rounded">
                                        <p className="text-xs text-gray-500">Low Stock</p>
                                        <p className="text-2xl font-semibold">2</p>
                                      </div>
                                      <div className="bg-red-50 p-3 rounded">
                                        <p className="text-xs text-gray-500">Out of Stock</p>
                                        <p className="text-2xl font-semibold">1</p>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Category Breakdown */}
                                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h4 className="font-medium text-gray-700 mb-3">Stock by Category</h4>
                                    <div className="space-y-2">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm">Peripherals</span>
                                        <span className="text-sm font-medium">2 items</span>
                                      </div>
                                      <div className="h-2 bg-gray-200 rounded-full">
                                        <div className="h-2 bg-blue-500 rounded-full" style={{width: '33%'}}></div>
                                      </div>
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm">Cables</span>
                                        <span className="text-sm font-medium">2 items</span>
                                      </div>
                                      <div className="h-2 bg-gray-200 rounded-full">
                                        <div className="h-2 bg-green-500 rounded-full" style={{width: '33%'}}></div>
                                      </div>
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm">Storage</span>
                                        <span className="text-sm font-medium">1 item</span>
                                      </div>
                                      <div className="h-2 bg-gray-200 rounded-full">
                                        <div className="h-2 bg-yellow-500 rounded-full" style={{width: '16.5%'}}></div>
                                      </div>
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm">Audio</span>
                                        <span className="text-sm font-medium">1 item</span>
                                      </div>
                                      <div className="h-2 bg-gray-200 rounded-full">
                                        <div className="h-2 bg-purple-500 rounded-full" style={{width: '16.5%'}}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Low Stock Alert */}
                                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                  <div className="flex">
                                    <div className="flex-shrink-0">
                                      <svg className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                    <div className="ml-3">
                                      <p className="text-sm text-yellow-700">
                                        <span className="font-medium">Action Required:</span> 3 products need attention (2 low stock, 1 out of stock)
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Step-by-Step Instructions */}
                              <div className="space-y-5">
                                {/* Step 1 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">1</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Add Inventory Status Formula</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>In cell H2, enter the formula to determine stock status:</span>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 overflow-x-auto">
                                          <code className="text-sm font-mono">
                                            =IF(D2=0, "Out of Stock", IF(D2{'<='}C2, "Low Stock", "In Stock"))
                                          </code>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Double-click the fill handle to copy down to all rows</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Step 2 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">2</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Create Summary Statistics</h4>
                                      <div className="space-y-3">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div className="space-y-2">
                                            <p className="text-sm font-medium">Total Inventory Value:</p>
                                            <div className="bg-gray-50 p-2 rounded border font-mono text-sm">
                                              =SUMPRODUCT(D2:D7, G2:G7)
                                            </div>
                                          </div>
                                          <div className="space-y-2">
                                            <p className="text-sm font-medium">Items Needing Reorder:</p>
                                            <div className="bg-gray-50 p-2 rounded border font-mono text-sm">
                                              =COUNTIF(H2:H7, "Low Stock") + COUNTIF(H2:H7, "Out of Stock")
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Step 3 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">3</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Add Conditional Formatting</h4>
                                      <div className="space-y-3">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <div>
                                            <p>Highlight Low/Out of Stock items:</p>
                                            <div className="text-xs text-gray-500 mt-1">
                                              Home → Conditional Formatting → New Rule → "Format only cells that contain"
                                            </div>
                                          </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                              <span className="text-sm">Cell Value = "Low Stock"</span>
                                            </div>
                                            <div className="text-xs text-gray-500 ml-5">Yellow fill, dark yellow text</div>
                                          </div>
                                          <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                              <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                              <span className="text-sm">Cell Value = "Out of Stock"</span>
                                            </div>
                                            <div className="text-xs text-gray-500 ml-5">Red fill with light red text</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Pro Tips */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100 mt-6">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-blue-100 p-1.5 rounded-lg">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 16v-4"></path>
                                        <path d="M12 8h.01"></path>
                                      </svg>
                                    </div>
                                    <h4 className="font-semibold text-blue-900">Dashboard Pro Tips</h4>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <div>
                                          <span className="font-medium">Quick Analysis</span>
                                          <div className="text-sm text-gray-600 mt-1">
                                            Select your data and press <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded shadow-sm text-xs">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded shadow-sm text-xs">Q</kbd> for quick formatting options
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <div>
                                          <span className="font-medium">Sparklines</span>
                                          <div className="text-sm text-gray-600 mt-1">
                                            Insert → Sparklines to add mini charts showing stock trends
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="space-y-3">
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <div>
                                          <span className="font-medium">Data Validation</span>
                                          <div className="text-sm text-gray-600 mt-1">
                                            Use Data Validation to create drop-downs for the Status column
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <div>
                                          <span className="font-medium">Pivot Tables</span>
                                          <div className="text-sm text-gray-600 mt-1">
                                            Create a PivotTable to analyze inventory by category
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Step-by-Step Instructions */}
                              <div className="space-y-5">
                                {/* Step 1 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">1</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Set Up Basic Formatting</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Select the entire worksheet (Ctrl+A) and set the font to Arial 10pt</span>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Set column widths: Column A (15), B-G (12)</span>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Merge cells A1:G1 and add title: "Quarterly Financial Report - 2023" (Bold, 14pt, Center Aligned)</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Step 2 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">2</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Calculate Variances</h4>
                                      <div className="space-y-3">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <div>
                                            <p>In cell D3 (Q1 Variance for Marketing), enter the formula:</p>
                                            <div className="bg-gray-50 p-2 rounded border font-mono text-sm mt-1">
                                              =C3-B3
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <div>
                                            <p>In cell G3 (Q2 Variance for Marketing), enter the formula:</p>
                                            <div className="bg-gray-50 p-2 rounded border font-mono text-sm mt-1">
                                              =F3-E3
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Copy these formulas down for all departments</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Step 3 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">3</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Calculate Totals</h4>
                                      <div className="space-y-2">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>In cell B8 (Q1 Budget Total), enter: <span className="font-mono bg-gray-100 px-1 rounded">=SUM(B3:B7)</span></span>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Copy this formula across to column G for all other totals</span>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>In cell A8, type "Total" and make it bold</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Step 4 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">4</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Apply Number Formatting</h4>
                                      <div className="space-y-3">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <div>
                                            <p>For Budget and Actual columns (B,C,E,F):</p>
                                            <div className="bg-gray-50 p-2 rounded border font-mono text-sm mt-1">
                                              Format Cells → Number → Currency → Symbol: R, Decimal places: 0, Negative numbers: -R1,234
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <div>
                                            <p>For Variance columns (D,G):</p>
                                            <div className="bg-gray-50 p-2 rounded border font-mono text-sm mt-1">
                                              Format Cells → Number → Custom → Type: <span className="text-blue-600">+R#,##0;[Red](R#,##0);-</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Pro Tips */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100 mt-6">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-blue-100 p-1.5 rounded-lg">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 16v-4"></path>
                                        <path d="M12 8h.01"></path>
                                      </svg>
                                    </div>
                                    <h4 className="font-semibold text-blue-900">Financial Report Pro Tips</h4>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <div>
                                          <span className="font-medium">Quick Formatting</span>
                                          <div className="text-sm text-gray-600 mt-1">
                                            Use <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded shadow-sm text-xs">Ctrl+1</kbd> to quickly open Format Cells
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <div>
                                          <span className="font-medium">Conditional Formatting</span>
                                          <div className="text-sm text-gray-600 mt-1">
                                            Highlight cells where variance {'>'} 10% of budget
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="space-y-3">
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <div>
                                          <span className="font-medium">Sparklines</span>
                                          <div className="text-sm text-gray-600 mt-1">
                                            Add mini charts to show budget vs. actual trends
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <div>
                                          <span className="font-medium">Freeze Panes</span>
                                          <div className="text-sm text-gray-600 mt-1">
                                            Freeze the header row for easier scrolling
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <table className="min-w-full text-sm">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="py-2 px-3 text-left">Product ID</th>
                                  <th className="py-2 px-3 text-left">Product Name</th>
                                  <th className="py-2 px-3 text-left">Category</th>
                                  <th className="py-2 px-3 text-left">Stock Level</th>
                                  <th className="py-2 px-3 text-left">Reorder Point</th>
                                  <th className="py-2 px-3 text-left">Last Updated</th>
                                  <th className="py-2 px-3 text-left">Price</th>
                                  <th className="py-2 px-3 text-left">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P1001</td>
                                  <td className="py-2 px-3">Wireless Mouse</td>
                                  <td className="py-2 px-3">Peripherals</td>
                                  <td className="py-2 px-3">45</td>
                                  <td className="py-2 px-3">20</td>
                                  <td className="py-2 px-3">01/07/2023</td>
                                  <td className="py-2 px-3">R299.99</td>
                                  <td className="py-2 px-3">In Stock</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P1002</td>
                                  <td className="py-2 px-3">USB-C Cable 1m</td>
                                  <td className="py-2 px-3">Cables</td>
                                  <td className="py-2 px-3">12</td>
                                  <td className="py-2 px-3">15</td>
                                  <td className="py-2 px-3">05/07/2023</td>
                                  <td className="py-2 px-3">R79.99</td>
                                  <td className="py-2 px-3">Low Stock</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P1003</td>
                                  <td className="py-2 px-3">Ergonomic Keyboard</td>
                                  <td className="py-2 px-3">Peripherals</td>
                                  <td className="py-2 px-3">28</td>
                                  <td className="py-2 px-3">15</td>
                                  <td className="py-2 px-3">28/06/2023</td>
                                  <td className="py-2 px-3">R799.50</td>
                                  <td className="py-2 px-3">In Stock</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P1004</td>
                                  <td className="py-2 px-3">External SSD 500GB</td>
                                  <td className="py-2 px-3">Storage</td>
                                  <td className="py-2 px-3">0</td>
                                  <td className="py-2 px-3">5</td>
                                  <td className="py-2 px-3">10/07/2023</td>
                                  <td className="py-2 px-3">R1 299.00</td>
                                  <td className="py-2 px-3">Out of Stock</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P1005</td>
                                  <td className="py-2 px-3">Wireless Headphones</td>
                                  <td className="py-2 px-3">Audio</td>
                                  <td className="py-2 px-3">32</td>
                                  <td className="py-2 px-3">10</td>
                                  <td className="py-2 px-3">15/07/2023</td>
                                  <td className="py-2 px-3">R699.00</td>
                                  <td className="py-2 px-3">In Stock</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P1006</td>
                                  <td className="py-2 px-3">HDMI Adapter</td>
                                  <td className="py-2 px-3">Cables</td>
                                  <td className="py-2 px-3">8</td>
                                  <td className="py-2 px-3">12</td>
                                  <td className="py-2 px-3">12/07/2023</td>
                                  <td className="py-2 px-3">R149.50</td>
                                  <td className="py-2 px-3">Low Stock</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          
                          <div className="space-y-3">
                            <p className="text-sm font-medium">Instructions:</p>
                            <ol className="list-decimal ml-5 space-y-2 text-sm">
                              <li>Create a new Excel workbook and enter the product inventory data above</li>
                              <li>Format the data as a proper Excel Table (using Insert {'>'} Table)</li>
                              <li>Apply conditional formatting to the Stock Level column:
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Red fill for values below the Reorder Point</li>
                                  <li>Yellow fill for values equal to the Reorder Point</li>
                                  <li>Green fill for values above the Reorder Point</li>
                                </ul>
                              </li>
                              <li>Create custom number formats:
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Format Product ID as text</li>
                                  <li>Format Price with the South African Rand (R) currency symbol and 2 decimal places</li>
                                  <li>Format Last Updated as dd-mmm-yy (South African date format)</li>
                                </ul>
                              </li>
                              <li>Create a status column that uses the IF function to automatically display:
                                <ul className="list-disc ml-5 mt-1">
                                  <li>"Out of Stock" when Stock Level is 0</li>
                                  <li>"Low Stock" when Stock Level is below Reorder Point</li>
                                  <li>"In Stock" otherwise</li>
                                </ul>
                              </li>
                              <li>Add cell comments to the Status column header explaining the status rules</li>
                            </ol>
                            <p className="text-sm mt-2 italic">Hint: Use the formula =IF(D2=0,"Out of Stock",IF(D2{'<'}E2,"Low Stock","In Stock")) for the Status column</p>
                          </div>
                        </div>

                        {/* Exercise 4: Custom Number Formatting */}
                        <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                          <h4 className="font-semibold mb-3">Exercise 4: Financial Report Formatting</h4>
                          
                          <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="text-sm font-medium">Quarterly Financial Data</h5>
                              <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                const tableData = [
                                  ['Department', 'Q1 Budget', 'Q1 Actual', 'Q1 Variance', 'Q2 Budget', 'Q2 Actual', 'Q2 Variance'],
                                  ['Marketing', '250000', '275500', '', '300000', '298000', ''],
                                  ['Sales', '450000', '425000', '', '475000', '510000', ''],
                                  ['IT', '320000', '315000', '', '340000', '352000', ''],
                                  ['HR', '175000', '172500', '', '185000', '180000', ''],
                                  ['Finance', '210000', '209000', '', '220000', '215000', ''],
                                  ['Total', '', '', '', '', '', '']
                                ].map(row => row.join('\t')).join('\n');
                                await copyToClipboard(tableData);
                              }}>
                                <Copy className="h-4 w-4 mr-1" />
                                <span className="text-xs">Copy Data</span>
                              </Button>
                            </div>
                            <table className="min-w-full text-sm">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="py-2 px-3 text-left">Department</th>
                                  <th className="py-2 px-3 text-left">Q1 Budget</th>
                                  <th className="py-2 px-3 text-left">Q1 Actual</th>
                                  <th className="py-2 px-3 text-left">Q1 Variance</th>
                                  <th className="py-2 px-3 text-left">Q2 Budget</th>
                                  <th className="py-2 px-3 text-left">Q2 Actual</th>
                                  <th className="py-2 px-3 text-left">Q2 Variance</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Marketing</td>
                                  <td className="py-2 px-3">250000</td>
                                  <td className="py-2 px-3">275500</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3">300000</td>
                                  <td className="py-2 px-3">298000</td>
                                  <td className="py-2 px-3"></td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Sales</td>
                                  <td className="py-2 px-3">450000</td>
                                  <td className="py-2 px-3">425000</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3">475000</td>
                                  <td className="py-2 px-3">510000</td>
                                  <td className="py-2 px-3"></td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">IT</td>
                                  <td className="py-2 px-3">320000</td>
                                  <td className="py-2 px-3">315000</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3">340000</td>
                                  <td className="py-2 px-3">352000</td>
                                  <td className="py-2 px-3"></td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">HR</td>
                                  <td className="py-2 px-3">175000</td>
                                  <td className="py-2 px-3">172500</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3">185000</td>
                                  <td className="py-2 px-3">180000</td>
                                  <td className="py-2 px-3"></td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Finance</td>
                                  <td className="py-2 px-3">210000</td>
                                  <td className="py-2 px-3">209000</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3">220000</td>
                                  <td className="py-2 px-3">215000</td>
                                  <td className="py-2 px-3"></td>
                                </tr>
                                <tr className="border-t font-medium">
                                  <td className="py-2 px-3">Total</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          
                          <div className="space-y-3">
                            <p className="text-sm font-medium">Instructions:</p>
                            <ol className="list-decimal ml-5 space-y-2 text-sm">
                              <li>Create a new Excel workbook and enter the financial data above</li>
                              <li>Calculate the variance for each department (Actual - Budget) in the empty Variance columns</li>
                              <li>Calculate row and column totals using SUM functions</li>
                              <li>Apply specialized number formatting:
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Format all monetary values as South African Rand with thousands separator and no decimal places</li>
                                  <li>Format variance values to show positive numbers with a plus sign (e.g., +25,500) and negative numbers in red with parentheses (e.g., (25,000))</li>
                                </ul>
                              </li>
                              <li>Use cell borders and shading to create a professional-looking report</li>
                              <li>Create a header row with proper alignment and bold formatting</li>
                              <li>Merge cells for a title at the top of the worksheet</li>
                            </ol>
                            
                            {/* Solution Section */}
                            <div className="mt-8 border-t pt-6">
                              <div className="flex items-center gap-3 mb-6">
                                <div className="bg-excel-blue/10 p-2 rounded-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-excel-blue">
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-lg text-gray-800">Solution: Formatted Financial Report</h5>
                                  <p className="text-sm text-gray-600">Here's how your final report should look after formatting</p>
                                </div>
                              </div>

                              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm overflow-x-auto">
                                <div className="text-center font-bold text-lg mb-4">Quarterly Financial Report - 2023</div>
                                <table className="min-w-full text-sm">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="py-2 px-3 text-left font-semibold">Department</th>
                                      <th className="py-2 px-3 text-right font-semibold">Q1 Budget</th>
                                      <th className="py-2 px-3 text-right font-semibold">Q1 Actual</th>
                                      <th className="py-2 px-3 text-right font-semibold">Q1 Variance</th>
                                      <th className="py-2 px-3 text-right font-semibold">Q2 Budget</th>
                                      <th className="py-2 px-3 text-right font-semibold">Q2 Actual</th>
                                      <th className="py-2 px-3 text-right font-semibold">Q2 Variance</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-t">
                                      <td className="py-2 px-3 font-medium">Marketing</td>
                                      <td className="py-2 px-3 text-right">R250,000</td>
                                      <td className="py-2 px-3 text-right">R275,500</td>
                                      <td className="py-2 px-3 text-right text-green-600">+R25,500</td>
                                      <td className="py-2 px-3 text-right">R300,000</td>
                                      <td className="py-2 px-3 text-right">R298,000</td>
                                      <td className="py-2 px-3 text-right text-red-600">(R2,000)</td>
                                    </tr>
                                    <tr className="border-t">
                                      <td className="py-2 px-3 font-medium">Sales</td>
                                      <td className="py-2 px-3 text-right">R450,000</td>
                                      <td className="py-2 px-3 text-right">R425,000</td>
                                      <td className="py-2 px-3 text-right text-red-600">(R25,000)</td>
                                      <td className="py-2 px-3 text-right">R475,000</td>
                                      <td className="py-2 px-3 text-right">R510,000</td>
                                      <td className="py-2 px-3 text-right text-green-600">+R35,000</td>
                                    </tr>
                                    <tr className="border-t">
                                      <td className="py-2 px-3 font-medium">IT</td>
                                      <td className="py-2 px-3 text-right">R320,000</td>
                                      <td className="py-2 px-3 text-right">R315,000</td>
                                      <td className="py-2 px-3 text-right text-red-600">(R5,000)</td>
                                      <td className="py-2 px-3 text-right">R340,000</td>
                                      <td className="py-2 px-3 text-right">R352,000</td>
                                      <td className="py-2 px-3 text-right text-green-600">+R12,000</td>
                                    </tr>
                                    <tr className="border-t">
                                      <td className="py-2 px-3 font-medium">HR</td>
                                      <td className="py-2 px-3 text-right">R175,000</td>
                                      <td className="py-2 px-3 text-right">R172,500</td>
                                      <td className="py-2 px-3 text-right text-red-600">(R2,500)</td>
                                      <td className="py-2 px-3 text-right">R185,000</td>
                                      <td className="py-2 px-3 text-right">R180,000</td>
                                      <td className="py-2 px-3 text-right text-red-600">(R5,000)</td>
                                    </tr>
                                    <tr className="border-t">
                                      <td className="py-2 px-3 font-medium">Finance</td>
                                      <td className="py-2 px-3 text-right">R210,000</td>
                                      <td className="py-2 px-3 text-right">R209,000</td>
                                      <td className="py-2 px-3 text-right text-red-600">(R1,000)</td>
                                      <td className="py-2 px-3 text-right">R220,000</td>
                                      <td className="py-2 px-3 text-right">R215,000</td>
                                      <td className="py-2 px-3 text-right text-red-600">(R5,000)</td>
                                    </tr>
                                    <tr className="border-t bg-gray-50 font-semibold">
                                      <td className="py-2 px-3">Total</td>
                                      <td className="py-2 px-3 text-right">R1,405,000</td>
                                      <td className="py-2 px-3 text-right">R1,397,000</td>
                                      <td className="py-2 px-3 text-right text-red-600">(R8,000)</td>
                                      <td className="py-2 px-3 text-right">R1,520,000</td>
                                      <td className="py-2 px-3 text-right">R1,555,000</td>
                                      <td className="py-2 px-3 text-right text-green-600">+R35,000</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              
                              <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <h6 className="font-semibold text-blue-800 mb-2">Key Formatting Applied:</h6>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                  <li>All monetary values formatted as South African Rand with thousands separator</li>
                                  <li>Positive variances shown in green with a plus sign</li>
                                  <li>Negative variances shown in red with parentheses</li>
                                  <li>Column headers with background color and bold text</li>
                                  <li>Alternating row colors for better readability</li>
                                  <li>Right-aligned numeric columns</li>
                                </ul>
                              </div>
                            </div>
                            <p className="text-sm mt-2 italic">Hint: Use custom number formats like R#,##0;(R#,##0) for showing negative numbers in parentheses</p>
                          </div>
                        </div>

                        {/* Exercise 5: Data Validation */}
                        <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                          <h4 className="font-semibold mb-3">Exercise 5: Expense Claim Form</h4>
                          
                          <div className="bg-white p-4 rounded border border-gray-200 mb-4">
                            <p className="text-sm">Create an expense claim form in Excel with the following elements:</p>
                            <ul className="list-disc ml-5 space-y-1 text-sm mt-2">
                              <li>Employee details section (Name, Department, Employee ID)</li>
                              <li>Expense entry table with columns for:
                                <ul className="list-disc ml-5">
                                  <li>Date (must be within current month)</li>
                                  <li>Expense Type (dropdown with options: Travel, Meals, Accommodation, Office Supplies, Other)</li>
                                  <li>Description (text field)</li>
                                  <li>Amount (must be positive number)</li>
                                  <li>Receipt Attached (Yes/No dropdown)</li>
                                </ul>
                              </li>
                              <li>Totals section showing sum of all expenses</li>
                              <li>Approval section with manager name and approval status</li>
                            </ul>
                          </div>
                          
                          <div className="space-y-3">
                            <p className="text-sm font-medium">Instructions:</p>
                            <ol className="list-decimal ml-5 space-y-2 text-sm">
                              <li>Create a new Excel workbook and design the expense claim form based on the requirements above</li>
                              <li>Apply appropriate formatting to make the form professional and user-friendly</li>
                              <li>Implement data validation:
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Use Data Validation to create dropdown lists for Expense Type and Receipt Attached fields</li>
                                  <li>Restrict Date field to accept only dates from the current month</li>
                                  <li>Set Amount field to accept only positive numbers</li>
                                  <li>Add validation messages to guide users</li>
                                </ul>
                              </li>
                              <li>Use formulas to calculate the total expenses automatically</li>
                              <li>Implement conditional formatting to highlight:
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Expenses over R1,000 in yellow</li>
                                  <li>Missing receipts in red</li>
                                </ul>
                              </li>
                              <li>Create a printable area with proper page setup</li>
                            </ol>
                            <p className="text-sm mt-2 italic">Hint: Use Data Validation features under the Data tab to create dropdowns and set validation rules</p>
                            
                            {/* Solution Section */}
                            <div className="mt-6 border-t pt-4">
                              <h5 className="font-medium text-sm mb-3 flex items-center gap-2 text-excel-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                Solution Guide
                              </h5>

                              {/* Expected Results Table */}
                              <div className="mb-8 bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                  </svg>
                                  <h6 className="font-semibold text-gray-800">Expense Claim Form Solution</h6>
                                </div>
                                
                                <div className="space-y-6">
                                  <div className="overflow-x-auto">
                                    <div className="font-medium text-sm mb-2">Employee Details Section:</div>
                                    <table className="min-w-full text-sm border-collapse">
                                      <tbody>
                                        <tr className="border-t">
                                          <td className="py-2 px-3 border bg-gray-50 font-medium w-32">Employee Name:</td>
                                          <td className="py-2 px-3 border">John Smith</td>
                                          <td className="py-2 px-3 border bg-gray-50 font-medium w-32">Department:</td>
                                          <td className="py-2 px-3 border">Finance</td>
                                        </tr>
                                        <tr>
                                          <td className="py-2 px-3 border bg-gray-50 font-medium">Employee ID:</td>
                                          <td className="py-2 px-3 border">EMP-2023-045</td>
                                          <td className="py-2 px-3 border bg-gray-50 font-medium">Date:</td>
                                          <td className="py-2 px-3 border">03-Aug-2023</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  
                                  <div className="overflow-x-auto">
                                    <div className="font-medium text-sm mb-2">Expense Entries:</div>
                                    <table className="min-w-full text-sm border-collapse">
                                      <thead>
                                        <tr className="bg-gray-50">
                                          <th className="py-2 px-3 border text-left">Date</th>
                                          <th className="py-2 px-3 border text-left">Expense Type</th>
                                          <th className="py-2 px-3 border text-left">Description</th>
                                          <th className="py-2 px-3 border text-right">Amount (R)</th>
                                          <th className="py-2 px-3 border text-center">Receipt</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="hover:bg-gray-50">
                                          <td className="py-2 px-3 border">01-Aug-2023</td>
                                          <td className="py-2 px-3 border">Travel</td>
                                          <td className="py-2 px-3 border">Taxi to client meeting</td>
                                          <td className="py-2 px-3 border text-right font-mono">350.00</td>
                                          <td className="py-2 px-3 border text-center">Yes</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 bg-yellow-50">
                                          <td className="py-2 px-3 border">02-Aug-2023</td>
                                          <td className="py-2 px-3 border">Meals</td>
                                          <td className="py-2 px-3 border">Client lunch meeting</td>
                                          <td className="py-2 px-3 border text-right font-mono">1,250.00</td>
                                          <td className="py-2 px-3 border text-center">Yes</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 bg-red-50">
                                          <td className="py-2 px-3 border">03-Aug-2023</td>
                                          <td className="py-2 px-3 border">Office Supplies</td>
                                          <td className="py-2 px-3 border">Printer paper and toner</td>
                                          <td className="py-2 px-3 border text-right font-mono">475.00</td>
                                          <td className="py-2 px-3 border text-center">No</td>
                                        </tr>
                                        <tr className="border-t-2 border-gray-400">
                                          <td colSpan={3} className="py-2 px-3 border text-right font-medium">Total Expenses:</td>
                                          <td className="py-2 px-3 border text-right font-mono font-bold">2,075.00</td>
                                          <td className="py-2 px-3 border"></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  
                                  <div className="overflow-x-auto">
                                    <div className="font-medium text-sm mb-2">Approval Section:</div>
                                    <table className="min-w-full text-sm border-collapse">
                                      <tbody>
                                        <tr>
                                          <td className="py-2 px-3 border bg-gray-50 font-medium w-32">Manager Name:</td>
                                          <td className="py-2 px-3 border">Sarah Johnson</td>
                                          <td className="py-2 px-3 border bg-gray-50 font-medium w-32">Approval Status:</td>
                                          <td className="py-2 px-3 border font-medium text-green-600">Approved</td>
                                        </tr>
                                        <tr>
                                          <td className="py-2 px-3 border bg-gray-50 font-medium">Approval Date:</td>
                                          <td className="py-2 px-3 border">04-Aug-2023</td>
                                          <td className="py-2 px-3 border bg-gray-50 font-medium">Comments:</td>
                                          <td className="py-2 px-3 border">Please submit missing receipt</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-5">
                                {/* Step 1 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">1</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Set Up Data Validation</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Create a named range for Expense Types:</span>
                                        </div>
                                        <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <div className="font-mono text-sm bg-white p-2 rounded border">
                                            <div>1. Go to Formulas &gt; Name Manager &gt; New</div>
                                            <div>2. Name: <span className="font-bold">ExpenseTypes</span></div>
                                            <div>3. Refers to: <span className="text-blue-600">={"{"}"Travel","Meals","Accommodation","Office Supplies","Other"{"}"}</span></div>
                                          </div>
                                        </div>
                                        <div className="flex gap-2 items-start mt-2">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>For Date column (Column A):</span>
                                        </div>
                                        <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <div className="font-mono text-sm bg-white p-2 rounded border">
                                            <div>1. Select date cells &gt; Data &gt; Data Validation</div>
                                            <div>2. Allow: <span className="text-blue-600">Date</span></div>
                                            <div>3. Data: <span className="text-blue-600">between</span></div>
                                            <div>4. Start date: <span className="text-blue-600">=EOMONTH(TODAY(),-1)+1</span></div>
                                            <div>5. End date: <span className="text-blue-600">=EOMONTH(TODAY(),0)</span></div>
                                            <div>6. Input message: <span className="text-blue-600">"Must be a date in current month"</span></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">2</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Apply Conditional Formatting</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Highlight expenses over R1,000:</span>
                                        </div>
                                        <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <div className="font-mono text-sm bg-white p-2 rounded border">
                                            <div>1. Select amount column &gt; Home &gt; Conditional Formatting &gt; New Rule</div>
                                            <div>2. Rule Type: <span className="text-blue-600">Format only cells that contain</span></div>
                                            <div>3. Format only cells with: <span className="text-blue-600">Cell Value &gt; 1000</span></div>
                                            <div>4. Format: <span className="text-blue-600">Fill with light yellow</span></div>
                                          </div>
                                        </div>
                                        <div className="flex gap-2 items-start mt-2">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Highlight missing receipts:</span>
                                        </div>
                                        <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <div className="font-mono text-sm bg-white p-2 rounded border">
                                            <div>1. Select receipt column &gt; Home &gt; Conditional Formatting &gt; New Rule</div>
                                            <div>2. Rule Type: <span className="text-blue-600">Format only cells that contain</span></div>
                                            <div>3. Format only cells with: <span className="text-blue-600">Cell Value = "No"</span></div>
                                            <div>4. Format: <span className="text-blue-600">Text color red</span></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">3</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Set Up Totals and Print Area</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Add total formula:</span>
                                        </div>
                                        <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <span className="text-blue-500 mt-1">=</span>
                                          <code className="font-mono text-sm bg-white px-2 py-1 rounded border">=SUM(D2:D20)</code>
                                          <span className="text-xs text-gray-500 mt-1">// Adjust range as needed</span>
                                        </div>
                                        <div className="flex gap-2 items-start mt-2">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Set print area:</span>
                                        </div>
                                        <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <div className="font-mono text-sm bg-white p-2 rounded border">
                                            <div>1. Select the range to print (A1:F25)</div>
                                            <div>2. Go to Page Layout &gt; Print Area &gt; Set Print Area</div>
                                            <div>3. Adjust margins and scaling in Page Layout view</div>
                                            <div>4. Add headers/footers as needed</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Exercise 6: Text and Data Manipulation */}
                        <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                          <h4 className="font-semibold mb-3">Exercise 6: Contact Directory Standardization</h4>
                          
                          <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="text-sm font-medium">Contact Information (Needs Standardization)</h5>
                              <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                const tableData = [
                                  ['Name', 'Email', 'Phone', 'Address', 'Postal Code', 'Position', 'Start Date'],
                                  ['DR. JAMES WILSON', 'jwilson@company.co.za', '27-82-555-1234', '15 Main Road, Sandton', '2196', 'CHIEF MEDICAL OFFICER', '2020/01/15'],
                                  ['miss sarah connor', 'sconnor@company.co.za', '+27 83 555 9876', 'apartment 25, 100 oak avenue, rosebank', '2132', 'head of security', '2018/06/22'],
                                  ['MR ROBERT brown', 'r.brown@company.co.za', '27835554321', '5 First Street Midrand', '1685', 'project manager', '2021/03/10'],
                                  ['Prof. ELIZABETH Taylor', 'e.taylor@company.co.za', '(083) 555-6789', '32b Cedar Road, Fourways', '2191', 'Research Director', '2019/11/05'],
                                  ['ms. jennifer ADAMS', 'jadams@company.co.za', '084 555 2345', 'unit 7, lakeside complex, kyalami', '1684', 'HR specialist', '2022/02/28']
                                ].map(row => row.join('\t')).join('\n');
                                await copyToClipboard(tableData);
                              }}>
                                <Copy className="h-4 w-4 mr-1" />
                                <span className="text-xs">Copy Data</span>
                              </Button>
                            </div>
                            <table className="min-w-full text-sm">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="py-2 px-3 text-left">Name</th>
                                  <th className="py-2 px-3 text-left">Email</th>
                                  <th className="py-2 px-3 text-left">Phone</th>
                                  <th className="py-2 px-3 text-left">Address</th>
                                  <th className="py-2 px-3 text-left">Postal Code</th>
                                  <th className="py-2 px-3 text-left">Position</th>
                                  <th className="py-2 px-3 text-left">Start Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="py-2 px-3">DR. JAMES WILSON</td>
                                  <td className="py-2 px-3">jwilson@company.co.za</td>
                                  <td className="py-2 px-3">27-82-555-1234</td>
                                  <td className="py-2 px-3">15 Main Road, Sandton</td>
                                  <td className="py-2 px-3">2196</td>
                                  <td className="py-2 px-3">CHIEF MEDICAL OFFICER</td>
                                  <td className="py-2 px-3">2020/01/15</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">miss sarah connor</td>
                                  <td className="py-2 px-3">sconnor@company.co.za</td>
                                  <td className="py-2 px-3">+27 83 555 9876</td>
                                  <td className="py-2 px-3">apartment 25, 100 oak avenue, rosebank</td>
                                  <td className="py-2 px-3">2132</td>
                                  <td className="py-2 px-3">head of security</td>
                                  <td className="py-2 px-3">2018/06/22</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">MR ROBERT brown</td>
                                  <td className="py-2 px-3">r.brown@company.co.za</td>
                                  <td className="py-2 px-3">27835554321</td>
                                  <td className="py-2 px-3">5 First Street Midrand</td>
                                  <td className="py-2 px-3">1685</td>
                                  <td className="py-2 px-3">project manager</td>
                                  <td className="py-2 px-3">2021/03/10</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Prof. ELIZABETH Taylor</td>
                                  <td className="py-2 px-3">e.taylor@company.co.za</td>
                                  <td className="py-2 px-3">(083) 555-6789</td>
                                  <td className="py-2 px-3">32b Cedar Road, Fourways</td>
                                  <td className="py-2 px-3">2191</td>
                                  <td className="py-2 px-3">Research Director</td>
                                  <td className="py-2 px-3">2019/11/05</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">ms. jennifer ADAMS</td>
                                  <td className="py-2 px-3">jadams@company.co.za</td>
                                  <td className="py-2 px-3">084 555 2345</td>
                                  <td className="py-2 px-3">unit 7, lakeside complex, kyalami</td>
                                  <td className="py-2 px-3">1684</td>
                                  <td className="py-2 px-3">HR specialist</td>
                                  <td className="py-2 px-3">2022/02/28</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          
                          <div className="space-y-3">
                            <p className="text-sm font-medium">Instructions:</p>
                            <ol className="list-decimal ml-5 space-y-2 text-sm">
                              <li>Create a new Excel workbook and enter the contact data above</li>
                              <li>Standardize the data using text functions and formatting:
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Format all names with proper capitalization (e.g., "Dr. James Wilson")</li>
                                  <li>Extract titles (Dr., Mr., Ms., Prof., etc.) into a separate column</li>
                                  <li>Format all addresses with proper capitalization</li>
                                  <li>Standardize phone numbers to the format: +27 XX XXX XXXX</li>
                                  <li>Format positions with proper capitalization</li>
                                  <li>Convert all dates to dd-mmm-yyyy format (e.g., 15-Jan-2020)</li>
                                </ul>
                              </li>
                              <li>Create a formula to extract the first and last names into separate columns</li>
                              <li>Add a new column showing the length of service in years and months (compared to today)</li>
                              <li>Format postal codes as text with leading zeros preserved</li>
                              <li>Create a dropdown filter for all columns</li>
                            </ol>
                            <p className="text-sm mt-2 italic">Hint: Use text functions like PROPER(), LEFT(), RIGHT(), MID(), and FIND() to manipulate text data</p>
                            
                            {/* Solution Section */}
                            <div className="mt-6 border-t pt-4">
                              <h5 className="font-medium text-sm mb-3 flex items-center gap-2 text-excel-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                Solution Guide
                              </h5>

                              {/* Expected Results Table */}
                              <div className="mb-8 bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                  </svg>
                                  <h6 className="font-semibold text-gray-800">Expected Results After Standardization</h6>
                                </div>
                                <div className="overflow-x-auto">
                                  <table className="min-w-full text-sm border-collapse">
                                    <thead>
                                      <tr className="bg-gray-50">
                                        <th className="py-2 px-3 border text-left">Title</th>
                                        <th className="py-2 px-3 border text-left">First Name</th>
                                        <th className="py-2 px-3 border text-left">Last Name</th>
                                        <th className="py-2 px-3 border text-left">Email</th>
                                        <th className="py-2 px-3 border text-left">Phone</th>
                                        <th className="py-2 px-3 border text-left">Position</th>
                                        <th className="py-2 px-3 border text-left">Start Date</th>
                                        <th className="py-2 px-3 border text-left">Service</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-3 border">Dr.</td>
                                        <td className="py-2 px-3 border">James</td>
                                        <td className="py-2 px-3 border">Wilson</td>
                                        <td className="py-2 px-3 border">jwilson@company.co.za</td>
                                        <td className="py-2 px-3 border font-mono">+27 82 555 1234</td>
                                        <td className="py-2 px-3 border">Chief Medical Officer</td>
                                        <td className="py-2 px-3 border">15-Jan-2020</td>
                                        <td className="py-2 px-3 border text-center">5y 6m</td>
                                      </tr>
                                      <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-3 border">Ms.</td>
                                        <td className="py-2 px-3 border">Sarah</td>
                                        <td className="py-2 px-3 border">Connor</td>
                                        <td className="py-2 px-3 border">sconnor@company.co.za</td>
                                        <td className="py-2 px-3 border font-mono">+27 83 555 9876</td>
                                        <td className="py-2 px-3 border">Head of Security</td>
                                        <td className="py-2 px-3 border">22-Jun-2018</td>
                                        <td className="py-2 px-3 border text-center">7y 1m</td>
                                      </tr>
                                      <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-3 border">Mr.</td>
                                        <td className="py-2 px-3 border">Robert</td>
                                        <td className="py-2 px-3 border">Brown</td>
                                        <td className="py-2 px-3 border">r.brown@company.co.za</td>
                                        <td className="py-2 px-3 border font-mono">+27 83 555 4321</td>
                                        <td className="py-2 px-3 border">Project Manager</td>
                                        <td className="py-2 px-3 border">10-Mar-2021</td>
                                        <td className="py-2 px-3 border text-center">4y 4m</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              
                              <div className="space-y-5">
                                {/* Step 1 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">1</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Extract and Standardize Titles</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Insert a new column for Title (Column B)</span>
                                        </div>
                                        <div className="w-full">
                                          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 overflow-x-auto">
                                            <pre className="m-0 p-0">
                                              <code className="font-mono text-sm bg-white p-2 rounded border block whitespace-pre overflow-x-auto">
{`=IF(ISNUMBER(SEARCH("dr",LOWER(A2))),"Dr.",
  IF(ISNUMBER(SEARCH("mr",LOWER(LEFT(A2,3)))),"Mr.",
  IF(ISNUMBER(SEARCH("ms",LOWER(LEFT(A2,3)))),"Ms.",
  IF(ISNUMBER(SEARCH("prof",LOWER(LEFT(A2,5)))),"Prof.",""))))`}
                                              </code>
                                            </pre>
                                          </div>
                                        </div>
                                        <div className="text-xs text-gray-500 ml-6">This formula checks for common title prefixes and extracts them</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">2</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Extract First and Last Names</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Insert two new columns after Name (Columns C & D)</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                          <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border border-blue-100">
                                            <span className="text-blue-500 mt-1">=</span>
                                            <code className="font-mono text-sm bg-white px-2 py-1 rounded border">=TRIM(RIGHT(SUBSTITUTE(TRIM(SUBSTITUTE(A2,B2,""))," ",REPT(" ",100)),100))</code>
                                            <span className="text-xs text-gray-500 mt-1">// First Name</span>
                                          </div>
                                          <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border border-blue-100">
                                            <span className="text-blue-500 mt-1">=</span>
                                            <code className="font-mono text-sm bg-white px-2 py-1 rounded border">=TRIM(LEFT(SUBSTITUTE(TRIM(SUBSTITUTE(A2,B2,""))," ",REPT(" ",100)),100))</code>
                                            <span className="text-xs text-gray-500 mt-1">// Last Name</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">3</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Standardize Phone Numbers</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Create a new column for Standardized Phone (Column E)</span>
                                        </div>
                                        <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <span className="text-blue-500 mt-1">=</span>
                                          <code className="font-mono text-sm bg-white px-2 py-1 rounded border">=TEXT(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(D2,"(",""),")",""),"-","")," ",""),"+",""),"27",""),"0##########"),"+27 "&"## ### ####")</code>
                                        </div>
                                        <div className="text-xs text-gray-500 ml-6">This formula removes all non-numeric characters and reformats to +27 XX XXX XXXX</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 4 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">4</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Calculate Service Length</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Insert a new column after Start Date (Column I)</span>
                                        </div>
                                        <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <span className="text-blue-500 mt-1">=</span>
                                          <code className="font-mono text-sm bg-white px-2 py-1 rounded border">=DATEDIF(H2,TODAY(),"y")&"y "&DATEDIF(H2,TODAY(),"ym")&"m"</code>
                                        </div>
                                        <div className="text-xs text-gray-500 ml-6">This calculates years and months of service from Start Date to today</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 5 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">5</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Final Formatting</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Format Postal Codes as text with leading zeros:</span>
                                        </div>
                                        <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <span className="text-blue-500 mt-1">=</span>
                                          <code className="font-mono text-sm bg-white px-2 py-1 rounded border">=TEXT(G2,"0000")</code>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Apply proper case to Position column: <code className="bg-gray-100 px-1 rounded text-xs">=PROPER(F2)</code></span>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Select all headers and apply Data &gt; Filter to make columns filterable</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Exercise 7: Conditional Formatting */}
                        <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                          <h4 className="font-semibold mb-3">Exercise 7: Sales Performance Dashboard</h4>
                          
                          <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="text-sm font-medium">Monthly Sales Data</h5>
                              <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                const tableData = [
                                  ['Sales Rep', 'Region', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Target', 'Commission Rate'],
                                  ['John Smith', 'North', '45200', '52300', '48900', '56700', '61200', '57800', '50000', '8%'],
                                  ['Emily Brown', 'South', '38700', '42500', '51200', '49800', '55400', '59200', '45000', '7%'],
                                  ['David Williams', 'East', '59800', '55400', '52300', '48900', '45600', '42100', '55000', '9%'],
                                  ['Sarah Johnson', 'West', '42300', '45800', '49200', '52700', '56300', '60100', '50000', '8%'],
                                  ['Michael Lee', 'Central', '35200', '39500', '43800', '47200', '51600', '54900', '40000', '6%'],
                                  ['Lisa Taylor', 'North', '47500', '49800', '52100', '53400', '56900', '59700', '50000', '8%'],
                                  ['Robert Chen', 'South', '51200', '48700', '45300', '42800', '39500', '37200', '45000', '7%'],
                                  ['Jennifer Park', 'East', '43800', '47200', '51600', '54900', '58300', '62700', '55000', '9%']
                                ].map(row => row.join('\t')).join('\n');
                                await copyToClipboard(tableData);
                              }}>
                                <Copy className="h-4 w-4 mr-1" />
                                <span className="text-xs">Copy Data</span>
                              </Button>
                            </div>
                            <table className="min-w-full text-sm">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="py-2 px-3 text-left">Sales Rep</th>
                                  <th className="py-2 px-3 text-left">Region</th>
                                  <th className="py-2 px-3 text-left">Jan</th>
                                  <th className="py-2 px-3 text-left">Feb</th>
                                  <th className="py-2 px-3 text-left">Mar</th>
                                  <th className="py-2 px-3 text-left">Apr</th>
                                  <th className="py-2 px-3 text-left">May</th>
                                  <th className="py-2 px-3 text-left">Jun</th>
                                  <th className="py-2 px-3 text-left">Target</th>
                                  <th className="py-2 px-3 text-left">Commission Rate</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="py-2 px-3">John Smith</td>
                                  <td className="py-2 px-3">North</td>
                                  <td className="py-2 px-3">45200</td>
                                  <td className="py-2 px-3">52300</td>
                                  <td className="py-2 px-3">48900</td>
                                  <td className="py-2 px-3">56700</td>
                                  <td className="py-2 px-3">61200</td>
                                  <td className="py-2 px-3">57800</td>
                                  <td className="py-2 px-3">50000</td>
                                  <td className="py-2 px-3">8%</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Emily Brown</td>
                                  <td className="py-2 px-3">South</td>
                                  <td className="py-2 px-3">38700</td>
                                  <td className="py-2 px-3">42500</td>
                                  <td className="py-2 px-3">51200</td>
                                  <td className="py-2 px-3">49800</td>
                                  <td className="py-2 px-3">55400</td>
                                  <td className="py-2 px-3">59200</td>
                                  <td className="py-2 px-3">45000</td>
                                  <td className="py-2 px-3">7%</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">David Williams</td>
                                  <td className="py-2 px-3">East</td>
                                  <td className="py-2 px-3">59800</td>
                                  <td className="py-2 px-3">55400</td>
                                  <td className="py-2 px-3">52300</td>
                                  <td className="py-2 px-3">48900</td>
                                  <td className="py-2 px-3">45600</td>
                                  <td className="py-2 px-3">42100</td>
                                  <td className="py-2 px-3">55000</td>
                                  <td className="py-2 px-3">9%</td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="text-xs text-gray-500 mt-2">(Table truncated for display)</p>
                          </div>
                          
                          <div className="space-y-3">
                            <p className="text-sm font-medium">Instructions:</p>
                            <ol className="list-decimal ml-5 space-y-2 text-sm">
                              <li>Create a new Excel workbook and enter the sales data above</li>
                              <li>Add columns for:
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Total Sales (sum of all months)</li>
                                  <li>Average Monthly Sales</li>
                                  <li>% of Target (Total Sales divided by Target)</li>
                                  <li>Commission Amount (Total Sales multiplied by Commission Rate)</li>
                                  <li>Trend (Calculate month-over-month change - increasing, decreasing, or stable)</li>
                                </ul>
                              </li>
                              <li>Apply advanced conditional formatting:
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Use color scales to show month-by-month sales performance</li>
                                  <li>Use icon sets (arrows) to indicate sales trend</li>
                                  <li>Apply data bars to visually compare total sales across representatives</li>
                                  <li>Create a rule to highlight any monthly sales below R40,000 in red</li>
                                  <li>Format % of Target using color scales (red to green)</li>
                                </ul>
                              </li>
                              <li>Format all monetary values consistently as South African Rand</li>
                              <li>Create a column for performance rating based on % of Target:
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Below 90%: "Needs Improvement"</li>
                                  <li>90-100%: "Meeting Expectations"</li>
                                  <li>Above 100%: "Exceeding Expectations"</li>
                                </ul>
                              </li>
                              <li>Add freeze panes to keep headers visible when scrolling</li>
                            </ol>
                            <p className="text-sm mt-2 italic">Hint: Use conditional formatting options in the Home tab and explore the various formatting rules available</p>
                            
                            {/* Solution Section */}
                            <div className="mt-6 border-t pt-4">
                              <h5 className="font-medium text-sm mb-3 flex items-center gap-2 text-excel-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                Solution Guide
                              </h5>

                              {/* Expected Results Table */}
                              <div className="mb-8 bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                  </svg>
                                  <h6 className="font-semibold text-gray-800">Sales Performance Dashboard Solution</h6>
                                </div>
                                
                                <div className="overflow-x-auto">
                                  <table className="min-w-full text-sm border-collapse">
                                    <thead>
                                      <tr className="bg-gray-50">
                                        <th className="py-2 px-3 border text-left">Sales Rep</th>
                                        <th className="py-2 px-3 border text-left">Region</th>
                                        <th className="py-2 px-3 border text-center">Jan</th>
                                        <th className="py-2 px-3 border text-center">Jun</th>
                                        <th className="py-2 px-3 border text-right">Total</th>
                                        <th className="py-2 px-3 border text-right">Avg/Month</th>
                                        <th className="py-2 px-3 border text-right">% of Target</th>
                                        <th className="py-2 px-3 border text-right">Commission</th>
                                        <th className="py-2 px-3 border text-center">Trend</th>
                                        <th className="py-2 px-3 border text-center">Performance</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="border-t hover:bg-gray-50">
                                        <td className="py-2 px-3 border font-medium">John Smith</td>
                                        <td className="py-2 px-3 border">North</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 45,200</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 57,800</td>
                                        <td className="py-2 px-3 border text-right font-mono font-bold">R 322,100</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 53,683</td>
                                        <td className="py-2 px-3 border text-right font-mono text-green-600">128.8%</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 25,768</td>
                                        <td className="py-2 px-3 border text-center">
                                          <span className="inline-flex items-center text-green-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                              <polyline points="16 7 22 7 22 13"></polyline>
                                            </svg>
                                          </span>
                                        </td>
                                        <td className="py-2 px-3 border text-center">
                                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Exceeding
                                          </span>
                                        </td>
                                      </tr>
                                      <tr className="border-t hover:bg-gray-50">
                                        <td className="py-2 px-3 border font-medium">Emily Brown</td>
                                        <td className="py-2 px-3 border">South</td>
                                        <td className="py-2 px-3 border text-right font-mono bg-red-50">R 38,700</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 59,200</td>
                                        <td className="py-2 px-3 border text-right font-mono font-bold">R 296,900</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 49,483</td>
                                        <td className="py-2 px-3 border text-right font-mono text-green-600">132.0%</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 20,783</td>
                                        <td className="py-2 px-3 border text-center">
                                          <span className="inline-flex items-center text-green-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                              <polyline points="16 7 22 7 22 13"></polyline>
                                            </svg>
                                          </span>
                                        </td>
                                        <td className="py-2 px-3 border text-center">
                                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Exceeding
                                          </span>
                                        </td>
                                      </tr>
                                      <tr className="border-t hover:bg-gray-50">
                                        <td className="py-2 px-3 border font-medium">David Williams</td>
                                        <td className="py-2 px-3 border">East</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 59,800</td>
                                        <td className="py-2 px-3 border text-right font-mono bg-red-50">R 42,100</td>
                                        <td className="py-2 px-3 border text-right font-mono font-bold">R 304,100</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 50,683</td>
                                        <td className="py-2 px-3 border text-right font-mono text-yellow-600">92.4%</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 27,369</td>
                                        <td className="py-2 px-3 border text-center">
                                          <span className="inline-flex items-center text-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                              <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                                              <polyline points="16 17 22 17 22 11"></polyline>
                                            </svg>
                                          </span>
                                        </td>
                                        <td className="py-2 px-3 border text-center">
                                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            Meeting
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tfoot>
                                      <tr className="bg-gray-50 font-medium">
                                        <td colSpan={4} className="py-2 px-3 border text-right">Averages:</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 307,700</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 51,283</td>
                                        <td className="py-2 px-3 border text-right font-mono">117.7%</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 24,640</td>
                                        <td className="py-2 px-3 border"></td>
                                        <td className="py-2 px-3 border"></td>
                                      </tr>
                                    </tfoot>
                                  </table>
                                </div>
                                
                                <div className="mt-4 text-xs text-gray-500">
                                  <p>Color Legend:</p>
                                  <ul className="list-disc ml-5 mt-1 space-y-1">
                                    <li>Red cells: Monthly sales below R40,000</li>
                                    <li>Green %: Exceeding target (100%+)</li>
                                    <li>Yellow %: Meeting target (90-100%)</li>
                                    <li>Red %: Below target (&lt;90%)</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="space-y-5">
                                {/* Step 1 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">1</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Add Calculated Columns</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Total Sales (K2):</span>
                                        </div>
                                        <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <span className="text-blue-500 mt-1">=</span>
                                          <code className="font-mono text-sm bg-white px-2 py-1 rounded border">=SUM(C2:H2)</code>
                                        </div>
                                        <div className="flex gap-2 items-start mt-2">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Average Monthly (L2):</span>
                                        </div>
                                        <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <span className="text-blue-500 mt-1">=</span>
                                          <code className="font-mono text-sm bg-white px-2 py-1 rounded border">=AVERAGE(C2:H2)</code>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">2</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Add Performance Metrics</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>% of Target (M2):</span>
                                        </div>
                                        <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <span className="text-blue-500 mt-1">=</span>
                                          <code className="font-mono text-sm bg-white px-2 py-1 rounded border">=K2/I2</code>
                                        </div>
                                        <div className="flex gap-2 items-start mt-2">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>Commission (N2):</span>
                                        </div>
                                        <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <span className="text-blue-500 mt-1">=</span>
                                          <code className="font-mono text-sm bg-white px-2 py-1 rounded border">=K2*VALUE(LEFT(J2,LEN(J2)-1))/100</code>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">3</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Conditional Formatting</h4>
                                      <div className="space-y-2 text-gray-700">
                                        <div className="flex gap-2 items-start">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>For monthly sales below R40,000:</span>
                                        </div>
                                        <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <div className="font-mono text-sm bg-white p-2 rounded border">
                                            <div>1. Select range C2:H9</div>
                                            <div>2. Home &gt; Conditional Formatting &gt; New Rule</div>
                                            <div>3. Format only cells with: <span className="text-blue-600">Cell Value &lt; 40000</span></div>
                                            <div>4. Format: <span className="text-blue-600">Fill light red</span></div>
                                          </div>
                                        </div>
                                        <div className="flex gap-2 items-start mt-2">
                                          <span className="text-blue-500 mt-1">•</span>
                                          <span>For % of Target color scale:</span>
                                        </div>
                                        <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                                          <div className="font-mono text-sm bg-white p-2 rounded border">
                                            <div>1. Select column M</div>
                                            <div>2. Home &gt; Conditional Formatting &gt; Color Scales</div>
                                            <div>3. Choose <span className="text-blue-600">Red-Yellow-Green</span> scale</div>
                                            <div>4. Manage Rules &gt; Edit Rule &gt; Set Min/Max to 0.8 and 1.2</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Exercise 8: Excel Tables and Structured References */}
                        <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                          <h4 className="font-semibold mb-3">Exercise 8: Product Pricing Analysis</h4>
                          
                          <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="text-sm font-medium">Product Pricing Data</h5>
                              <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                const tableData = [
                                  ['Product ID', 'Product Name', 'Category', 'Cost Price', 'Markup %', 'Selling Price', 'Competitor Price', 'Sales Units', 'Stock Level'],
                                  ['P-001', 'Premium Notebook', 'Stationery', '45.50', '120', '', '115.00', '320', '150'],
                                  ['P-002', 'Wireless Mouse', 'Electronics', '180.00', '100', '', '375.00', '85', '42'],
                                  ['P-003', 'USB Drive 32GB', 'Electronics', '75.50', '80', '', '145.00', '210', '95'],
                                  ['P-004', 'Office Chair', 'Furniture', '850.00', '75', '', '1450.00', '28', '15'],
                                  ['P-005', 'Desk Lamp', 'Furniture', '165.00', '110', '', '320.00', '56', '24'],
                                  ['P-006', 'Printer Paper', 'Stationery', '65.00', '60', '', '120.00', '430', '215'],
                                  ['P-007', 'Whiteboard Markers', 'Stationery', '28.50', '150', '', '65.00', '175', '80'],
                                  ['P-008', 'Monitor Stand', 'Electronics', '220.00', '90', '', '435.00', '42', '18'],
                                  ['P-009', 'Filing Cabinet', 'Furniture', '750.00', '65', '', '1350.00', '15', '8'],
                                  ['P-010', 'Desk Organizer', 'Stationery', '95.00', '85', '', '185.00', '110', '45']
                                ].map(row => row.join('\t')).join('\n');
                                await copyToClipboard(tableData);
                              }}>
                                <Copy className="h-4 w-4 mr-1" />
                                <span className="text-xs">Copy Data</span>
                              </Button>
                            </div>
                            <table className="min-w-full text-sm">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="py-2 px-3 text-left">Product ID</th>
                                  <th className="py-2 px-3 text-left">Product Name</th>
                                  <th className="py-2 px-3 text-left">Category</th>
                                  <th className="py-2 px-3 text-left">Cost Price</th>
                                  <th className="py-2 px-3 text-left">Markup %</th>
                                  <th className="py-2 px-3 text-left">Selling Price</th>
                                  <th className="py-2 px-3 text-left">Competitor Price</th>
                                  <th className="py-2 px-3 text-left">Sales Units</th>
                                  <th className="py-2 px-3 text-left">Stock Level</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P-001</td>
                                  <td className="py-2 px-3">Premium Notebook</td>
                                  <td className="py-2 px-3">Stationery</td>
                                  <td className="py-2 px-3">45.50</td>
                                  <td className="py-2 px-3">120</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3">115.00</td>
                                  <td className="py-2 px-3">320</td>
                                  <td className="py-2 px-3">150</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P-002</td>
                                  <td className="py-2 px-3">Wireless Mouse</td>
                                  <td className="py-2 px-3">Electronics</td>
                                  <td className="py-2 px-3">180.00</td>
                                  <td className="py-2 px-3">100</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3">375.00</td>
                                  <td className="py-2 px-3">85</td>
                                  <td className="py-2 px-3">42</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P-003</td>
                                  <td className="py-2 px-3">USB Drive 32GB</td>
                                  <td className="py-2 px-3">Electronics</td>
                                  <td className="py-2 px-3">75.50</td>
                                  <td className="py-2 px-3">80</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3">145.00</td>
                                  <td className="py-2 px-3">210</td>
                                  <td className="py-2 px-3">95</td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="text-xs text-gray-500 mt-2">(Table truncated for display)</p>
                          </div>
                          
                          <div className="space-y-3">
                            <p className="text-sm font-medium">Instructions:</p>
                            <ol className="list-decimal ml-5 space-y-2 text-sm">
                              <li>Create a new Excel workbook and enter the product data above</li>
                              <li>Format the data as an Excel Table (Insert {'>'} Table)</li>
                              <li>Calculate the Selling Price using the formula: Cost Price + (Cost Price × Markup %)</li>
                              <li>Add calculated columns to the table for:
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Price Difference (Your Selling Price - Competitor Price)</li>
                                  <li>Price Variance % (Price Difference / Competitor Price)</li>
                                  <li>Revenue (Selling Price × Sales Units)</li>
                                  <li>Profit (Revenue - (Cost Price × Sales Units))</li>
                                  <li>Inventory Value (Cost Price × Stock Level)</li>
                                  <li>Days of Inventory (Stock Level / Average Daily Sales, assuming 30 days in a month)</li>
                                </ul>
                              </li>
                              <li>Use structured references in all formulas (e.g., [@[Cost Price]] instead of cell references)</li>
                              <li>Create a summary section that uses table references to calculate:
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Total Revenue by Category (using SUMIF or SUBTOTAL)</li>
                                  <li>Average Markup % by Category</li>
                                  <li>Count of products by Category</li>
                                  <li>Total Inventory Value</li>
                                </ul>
                              </li>
                              <li>Format all monetary values as South African Rand</li>
                              <li>Apply table styles and conditional formatting to highlight important insights</li>
                              <li>Add slicers to filter the table data by Category</li>
                            </ol>
                            <p className="text-sm mt-2 italic">Hint: After creating an Excel Table, use structured references like [Product Name] or [@[Markup %]] in your formulas for cleaner calculations that automatically adjust when the table changes</p>
                            
                            {/* Solution Section */}
                            <div className="mt-6 border-t pt-4">
                              <h5 className="font-medium text-sm mb-3 flex items-center gap-2 text-excel-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                Solution Guide
                              </h5>

                              {/* Expected Results Table */}
                              <div className="mb-8 bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                  </svg>
                                  <h6 className="font-semibold text-gray-800">Product Pricing Analysis Solution</h6>
                                </div>
                                
                                <div className="overflow-x-auto">
                                  <table className="min-w-full text-sm border-collapse">
                                    <thead>
                                      <tr className="bg-gray-50">
                                        <th className="py-2 px-3 border text-left">Product ID</th>
                                        <th className="py-2 px-3 border text-left">Product Name</th>
                                        <th className="py-2 px-3 border text-left">Category</th>
                                        <th className="py-2 px-3 border text-right">Cost Price</th>
                                        <th className="py-2 px-3 border text-right">Markup %</th>
                                        <th className="py-2 px-3 border text-right">Selling Price</th>
                                        <th className="py-2 px-3 border text-right">Competitor Price</th>
                                        <th className="py-2 px-3 border text-right">Price Diff</th>
                                        <th className="py-2 px-3 border text-right">Variance %</th>
                                        <th className="py-2 px-3 border text-right">Revenue</th>
                                        <th className="py-2 px-3 border text-right">Profit</th>
                                        <th className="py-2 px-3 border text-right">Inv. Value</th>
                                        <th className="py-2 px-3 border text-right">Days Inv.</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="border-t hover:bg-gray-50">
                                        <td className="py-2 px-3 border">P-001</td>
                                        <td className="py-2 px-3 border font-medium">Premium Notebook</td>
                                        <td className="py-2 px-3 border">Stationery</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 45.50</td>
                                        <td className="py-2 px-3 border text-right font-mono">120%</td>
                                        <td className="py-2 px-3 border text-right font-mono bg-green-50">R 100.10</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 115.00</td>
                                        <td className="py-2 px-3 border text-right font-mono text-red-600">-R 14.90</td>
                                        <td className="py-2 px-3 border text-right font-mono text-red-600">-13.0%</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 32,032</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 17,472</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 6,825</td>
                                        <td className="py-2 px-3 border text-right font-mono">14.1</td>
                                      </tr>
                                      <tr className="border-t hover:bg-gray-50">
                                        <td className="py-2 px-3 border">P-002</td>
                                        <td className="py-2 px-3 border font-medium">Wireless Mouse</td>
                                        <td className="py-2 px-3 border">Electronics</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 180.00</td>
                                        <td className="py-2 px-3 border text-right font-mono">100%</td>
                                        <td className="py-2 px-3 border text-right font-mono bg-green-50">R 360.00</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 375.00</td>
                                        <td className="py-2 px-3 border text-right font-mono text-red-600">-R 15.00</td>
                                        <td className="py-2 px-3 border text-right font-mono text-red-600">-4.0%</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 30,600</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 15,300</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 7,560</td>
                                        <td className="py-2 px-3 border text-right font-mono">17.7</td>
                                      </tr>
                                      <tr className="border-t hover:bg-gray-50">
                                        <td className="py-2 px-3 border">P-003</td>
                                        <td className="py-2 px-3 border font-medium">USB Drive 32GB</td>
                                        <td className="py-2 px-3 border">Electronics</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 75.50</td>
                                        <td className="py-2 px-3 border text-right font-mono">80%</td>
                                        <td className="py-2 px-3 border text-right font-mono bg-green-50">R 135.90</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 145.00</td>
                                        <td className="py-2 px-3 border text-right font-mono text-red-600">-R 9.10</td>
                                        <td className="py-2 px-3 border text-right font-mono text-red-600">-6.3%</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 28,539</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 12,684</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 7,173</td>
                                        <td className="py-2 px-3 border text-right font-mono">10.2</td>
                                      </tr>
                                    </tbody>
                                    <tfoot className="bg-gray-50 font-medium">
                                      <tr>
                                        <td colSpan={3} className="py-2 px-3 border text-right">Category Summary:</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 300.50</td>
                                        <td className="py-2 px-3 border text-right font-mono">100%</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 596.00</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 635.00</td>
                                        <td className="py-2 px-3 border text-right font-mono">-R 39.00</td>
                                        <td className="py-2 px-3 border text-right font-mono">-6.1%</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 91,171</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 45,456</td>
                                        <td className="py-2 px-3 border text-right font-mono">R 21,558</td>
                                        <td className="py-2 px-3 border text-right font-mono">13.8</td>
                                      </tr>
                                    </tfoot>
                                  </table>
                                </div>
                                
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h6 className="font-medium text-sm mb-3">Category Summary</h6>
                                    <table className="w-full text-sm">
                                      <thead>
                                        <tr className="bg-gray-50">
                                          <th className="py-1 px-2 text-left">Category</th>
                                          <th className="py-1 px-2 text-right">Products</th>
                                          <th className="py-1 px-2 text-right">Avg Markup</th>
                                          <th className="py-1 px-2 text-right">Total Revenue</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="border-t">
                                          <td className="py-1 px-2">Electronics</td>
                                          <td className="py-1 px-2 text-right font-mono">3</td>
                                          <td className="py-1 px-2 text-right font-mono">93.3%</td>
                                          <td className="py-1 px-2 text-right font-mono">R 145,539</td>
                                        </tr>
                                        <tr className="border-t">
                                          <td className="py-1 px-2">Furniture</td>
                                          <td className="py-1 px-2 text-right font-mono">2</td>
                                          <td className="py-1 px-2 text-right font-mono">83.3%</td>
                                          <td className="py-1 px-2 text-right font-mono">R 35,280</td>
                                        </tr>
                                        <tr className="border-t">
                                          <td className="py-1 px-2">Stationery</td>
                                          <td className="py-1 px-2 text-right font-mono">4</td>
                                          <td className="py-1 px-2 text-right font-mono">103.8%</td>
                                          <td className="py-1 px-2 text-right font-mono">R 78,925</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  
                                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h6 className="font-medium text-sm mb-3">Key Metrics</h6>
                                    <div className="space-y-2">
                                      <div className="flex justify-between">
                                        <span>Total Inventory Value:</span>
                                        <span className="font-mono">R 45,875</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>Average Markup:</span>
                                        <span className="font-mono">92.7%</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>Total Revenue:</span>
                                        <span className="font-mono">R 259,744</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>Total Profit:</span>
                                        <span className="font-mono text-green-600">R 124,569</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>Avg Days Inventory:</span>
                                        <span className="font-mono">15.2 days</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-5">
                                {/* Step 1 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">1</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Set Up the Table</h4>
                                      <ol className="list-decimal ml-5 space-y-1 text-sm text-gray-700">
                                        <li>Select the data range (A1:I11) and press <kbd>Ctrl + T</kbd> to create a table</li>
                                        <li>Name the table "ProductPricing" in the Table Design tab</li>
                                        <li>Apply a table style of your choice</li>
                                      </ol>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Step 2 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">2</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Add Calculated Columns</h4>
                                      <p className="text-sm text-gray-700 mb-2">Insert these formulas in the respective columns:</p>
                                      <div className="bg-gray-50 p-3 rounded-lg overflow-x-auto">
                                        <pre className="text-xs font-mono">
{`Selling Price:     =[@[Cost Price]] * (1 + [@[Markup %]]/100)
Price Difference:  =[@[Selling Price]] - [@[Competitor Price]]
Variance %:        =[@[Price Difference]] / [@[Competitor Price]]
Revenue:           =[@[Selling Price]] * [@[Sales Units]]
Profit:            =([@[Selling Price]] - [@[Cost Price]]) * [@[Sales Units]]
Inventory Value:   =[@[Cost Price]] * [@[Stock Level]]
Days of Inventory: =[@[Stock Level]] / ([@[Sales Units]]/30)`}
                                        </pre>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Step 3 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">3</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Create Summary Section</h4>
                                      <p className="text-sm text-gray-700 mb-2">Add these formulas in your summary section:</p>
                                      <div className="bg-gray-50 p-3 rounded-lg overflow-x-auto">
                                        <pre className="text-xs font-mono">
{`Total Revenue by Category:  =SUMIFS(ProductPricing[Revenue], ProductPricing[Category], "Electronics")
Average Markup by Category:  =AVERAGEIFS(ProductPricing[Markup %], ProductPricing[Category], "Electronics")
Count of Products:           =COUNTIFS(ProductPricing[Category], "Electronics")
Total Inventory Value:       =SUM(ProductPricing[Inventory Value])`}
                                        </pre>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Step 4 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">4</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Add Slicers</h4>
                                      <ol className="list-decimal ml-5 space-y-1 text-sm text-gray-700">
                                        <li>Click anywhere in your table</li>
                                        <li>Go to Insert {'>'} Slicer</li>
                                        <li>Select "Category" and click OK</li>
                                        <li>Use the slicer to filter your table by category</li>
                                      </ol>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Step 5 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <span className="text-sm font-medium">5</span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900 mb-2">Apply Conditional Formatting</h4>
                                      <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                                        <li>Highlight cells in Variance % column with color scale (red-yellow-green)</li>
                                        <li>Add data bars to Revenue and Profit columns</li>
                                        <li>Highlight low inventory items (Days of Inventory {'<'} 10) in red</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </>  
                      )}
                      
                      {currentTopic.id === "formulas" && (
                        <>
                          {/* Exercise 1: Basic Calculations */}
                          <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                            <h4 className="font-semibold mb-3">Exercise 1: Sales Summary Calculations</h4>
                            
                            <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium">Quarterly Sales Data</h5>
                                <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                  const tableData = [
                                    ['Product', 'Q1 Sales', 'Q2 Sales', 'Q3 Sales', 'Q4 Sales', 'Annual Total', 'Average'],
                                    ['Laptops', 'R245 800', 'R278 500', 'R312 750', 'R356 200', '', ''],
                                    ['Tablets', 'R186 400', 'R196 300', 'R210 500', 'R243 800', '', ''],
                                    ['Smartphones', 'R325 600', 'R348 200', 'R362 500', 'R401 750', '', ''],
                                    ['Accessories', 'R89 200', 'R98 600', 'R112 300', 'R126 500', '', ''],
                                    ['Quarterly Total', '', '', '', '', '', '']
                                  ].map(row => row.join('\t')).join('\n');
                                  await copyToClipboard(tableData);
                                }}>
                                  <Copy className="h-4 w-4 mr-1" />
                                  <span className="text-xs">Copy Data</span>
                                </Button>
                              </div>
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="py-2 px-3 text-left">Product</th>
                                    <th className="py-2 px-3 text-left">Q1 Sales</th>
                                    <th className="py-2 px-3 text-left">Q2 Sales</th>
                                    <th className="py-2 px-3 text-left">Q3 Sales</th>
                                    <th className="py-2 px-3 text-left">Q4 Sales</th>
                                    <th className="py-2 px-3 text-left">Annual Total</th>
                                    <th className="py-2 px-3 text-left">Average</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Laptops</td>
                                    <td className="py-2 px-3">R245 800</td>
                                    <td className="py-2 px-3">R278 500</td>
                                    <td className="py-2 px-3">R312 750</td>
                                    <td className="py-2 px-3">R356 200</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Tablets</td>
                                    <td className="py-2 px-3">R186 400</td>
                                    <td className="py-2 px-3">R196 300</td>
                                    <td className="py-2 px-3">R210 500</td>
                                    <td className="py-2 px-3">R243 800</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Smartphones</td>
                                    <td className="py-2 px-3">R325 600</td>
                                    <td className="py-2 px-3">R348 200</td>
                                    <td className="py-2 px-3">R362 500</td>
                                    <td className="py-2 px-3">R401 750</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Accessories</td>
                                    <td className="py-2 px-3">R89 200</td>
                                    <td className="py-2 px-3">R98 600</td>
                                    <td className="py-2 px-3">R112 300</td>
                                    <td className="py-2 px-3">R126 500</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t font-medium">
                                    <td className="py-2 px-3">Quarterly Total</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="space-y-3">
                              <p className="text-sm font-medium">Instructions:</p>
                              <ol className="list-decimal ml-5 space-y-2 text-sm">
                                <li>Create a new Excel workbook and enter the sales data above</li>
                                <li>Use formulas to calculate the Annual Total for each product (sum of all quarters)</li>
                                <li>Use formulas to calculate the Average quarterly sales for each product</li>
                                <li>Calculate the Quarterly Totals for each quarter (sum of all products)</li>
                                <li>Format all monetary values as South African Rand with thousands separator</li>
                              </ol>
                              <p className="text-sm mt-2 italic">Hint: Use the formula: (Actual-Planned)/Planned to calculate % Variance</p>
                            
                            <div className="mt-6 bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                              <h5 className="font-semibold text-excel-blue mb-4">Solution Example</h5>
                              <div className="bg-white p-4 rounded border border-gray-200 overflow-x-auto">
                                <table className="min-w-full text-sm">
                                  <thead>
                                    <tr className="bg-gray-50">
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Product</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Q1 Sales</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Q2 Sales</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Q3 Sales</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Q4 Sales</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Annual Total</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Average</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Laptops</td>
                                      <td className="py-2 px-3">R245 800</td>
                                      <td className="py-2 px-3">R278 500</td>
                                      <td className="py-2 px-3">R312 750</td>
                                      <td className="py-2 px-3">R356 200</td>
                                      <td className="py-2 px-3 font-medium">R1 193 250</td>
                                      <td className="py-2 px-3">R298 313</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Tablets</td>
                                      <td className="py-2 px-3">R186 400</td>
                                      <td className="py-2 px-3">R196 300</td>
                                      <td className="py-2 px-3">R210 500</td>
                                      <td className="py-2 px-3">R243 800</td>
                                      <td className="py-2 px-3 font-medium">R837 000</td>
                                      <td className="py-2 px-3">R209 250</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Smartphones</td>
                                      <td className="py-2 px-3">R325 600</td>
                                      <td className="py-2 px-3">R348 200</td>
                                      <td className="py-2 px-3">R362 500</td>
                                      <td className="py-2 px-3">R401 750</td>
                                      <td className="py-2 px-3 font-medium">R1 438 050</td>
                                      <td className="py-2 px-3">R359 513</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Accessories</td>
                                      <td className="py-2 px-3">R89 200</td>
                                      <td className="py-2 px-3">R98 600</td>
                                      <td className="py-2 px-3">R112 300</td>
                                      <td className="py-2 px-3">R126 500</td>
                                      <td className="py-2 px-3 font-medium">R426 600</td>
                                      <td className="py-2 px-3">R106 650</td>
                                    </tr>
                                    <tr className="border-t font-medium bg-gray-50">
                                      <td className="py-2 px-3">Quarterly Total</td>
                                      <td className="py-2 px-3">R847 000</td>
                                      <td className="py-2 px-3">R921 600</td>
                                      <td className="py-2 px-3">R998 050</td>
                                      <td className="py-2 px-3">R1 128 250</td>
                                      <td className="py-2 px-3 font-bold">R3 894 900</td>
                                      <td className="py-2 px-3 font-medium">R973 725</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="mt-4 space-y-2">
                                <p className="text-sm font-medium text-gray-800">Formulas Used:</p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                  <pre className="text-xs font-mono text-gray-700 space-y-1">
                                    <div>Annual Total: <span className="text-excel-blue font-medium">=SUM(B2:E2)</span></div>
                                    <div>Average: <span className="text-excel-blue font-medium">=AVERAGE(B2:E2)</span></div>
                                    <div>Quarterly Total: <span className="text-excel-blue font-medium">=SUM(B2:B5)</span></div>
                                    <div>Grand Total Average: <span className="text-excel-blue font-medium">=AVERAGE(F2:F5)</span></div>
                                  </pre>
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>

                          {/* Exercise 2: Relative vs Absolute References */}
                          <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20 mt-6">
                            <h4 className="font-semibold mb-3">Exercise 2: Commission Calculator</h4>
                            
                            <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium">Sales Representative Data</h5>
                                <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                  const tableData = [
                                    ['Sales Rep', 'Region', 'Jan Sales', 'Feb Sales', 'Mar Sales', 'Commission Rate', 'Total Commission'],
                                    ['Linda Smith', 'Cape Town', 'R85 600', 'R92 300', 'R78 900', '8%', ''],
                                    ['John Dube', 'Johannesburg', 'R102 400', 'R98 750', 'R115 200', '9%', ''],
                                    ['Thabo Nkosi', 'Durban', 'R76 500', 'R82 400', 'R79 600', '8%', ''],
                                    ['Sarah Molefe', 'Pretoria', 'R94 200', 'R89 600', 'R98 300', '9%', ''],
                                    ['Michael Adams', 'Port Elizabeth', 'R65 800', 'R72 400', 'R68 900', '7%', '']
                                  ].map(row => row.join('\t')).join('\n');
                                  await copyToClipboard(tableData);
                                }}>
                                  <Copy className="h-4 w-4 mr-1" />
                                  <span className="text-xs">Copy Data</span>
                                </Button>
                              </div>
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="py-2 px-3 text-left">Sales Rep</th>
                                    <th className="py-2 px-3 text-left">Region</th>
                                    <th className="py-2 px-3 text-left">Jan Sales</th>
                                    <th className="py-2 px-3 text-left">Feb Sales</th>
                                    <th className="py-2 px-3 text-left">Mar Sales</th>
                                    <th className="py-2 px-3 text-left">Commission Rate</th>
                                    <th className="py-2 px-3 text-left">Total Commission</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Linda Smith</td>
                                    <td className="py-2 px-3">Cape Town</td>
                                    <td className="py-2 px-3">R85 600</td>
                                    <td className="py-2 px-3">R92 300</td>
                                    <td className="py-2 px-3">R78 900</td>
                                    <td className="py-2 px-3">8%</td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">John Dube</td>
                                    <td className="py-2 px-3">Johannesburg</td>
                                    <td className="py-2 px-3">R102 400</td>
                                    <td className="py-2 px-3">R98 750</td>
                                    <td className="py-2 px-3">R115 200</td>
                                    <td className="py-2 px-3">9%</td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Thabo Nkosi</td>
                                    <td className="py-2 px-3">Durban</td>
                                    <td className="py-2 px-3">R76 500</td>
                                    <td className="py-2 px-3">R82 400</td>
                                    <td className="py-2 px-3">R79 600</td>
                                    <td className="py-2 px-3">8%</td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Sarah Molefe</td>
                                    <td className="py-2 px-3">Pretoria</td>
                                    <td className="py-2 px-3">R94 200</td>
                                    <td className="py-2 px-3">R89 600</td>
                                    <td className="py-2 px-3">R98 300</td>
                                    <td className="py-2 px-3">9%</td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Michael Adams</td>
                                    <td className="py-2 px-3">Port Elizabeth</td>
                                    <td className="py-2 px-3">R65 800</td>
                                    <td className="py-2 px-3">R72 400</td>
                                    <td className="py-2 px-3">R68 900</td>
                                    <td className="py-2 px-3">7%</td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="space-y-3">
                              <p className="text-sm font-medium">Instructions:</p>
                              <ol className="list-decimal ml-5 space-y-2 text-sm">
                                <li>Create a new Excel workbook and enter the sales rep data above</li>
                                <li>Calculate the total quarterly sales for each representative (sum of Jan-Mar)</li>
                                <li>Calculate the Total Commission by multiplying the total quarterly sales by the Commission Rate</li>
                                <li>Use absolute cell references ($) for the Commission Rate when creating your formula</li>
                                <li>Format the Total Commission column as South African Rand with thousands separator</li>
                                <li>Create a formula that you can copy down to calculate commissions for all sales reps</li>
                              </ol>
                              <p className="text-sm mt-2 italic">Hint: For commission calculation, if your total sales are in cell G2 and commission rate is in F2, use =G2*{'$'}F2 to create a formula you can copy down</p>
                            </div>

                            {/* Solutions Table */}
                            <div className="mt-6 bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                              <h5 className="font-semibold text-excel-blue mb-4">Solution Example</h5>
                              <div className="bg-white p-4 rounded border border-gray-200 overflow-x-auto">
                                <table className="min-w-full text-sm">
                                  <thead>
                                    <tr className="bg-gray-50">
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Sales Representative</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Region</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">January Sales</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">February Sales</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">March Sales</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Commission Rate</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Total Commission</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Lerato Mokoena</td>
                                      <td className="py-2 px-3">Cape Town</td>
                                      <td className="py-2 px-3">R85 200</td>
                                      <td className="py-2 px-3">R94 300</td>
                                      <td className="py-2 px-3">R102 100</td>
                                      <td className="py-2 px-3">8%</td>
                                      <td className="py-2 px-3 font-medium">R22 528</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Sipho Dlamini</td>
                                      <td className="py-2 px-3">Johannesburg</td>
                                      <td className="py-2 px-3">R102 400</td>
                                      <td className="py-2 px-3">R98 750</td>
                                      <td className="py-2 px-3">R115 200</td>
                                      <td className="py-2 px-3">9%</td>
                                      <td className="py-2 px-3 font-medium">R28 471.50</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Thabo Nkosi</td>
                                      <td className="py-2 px-3">Durban</td>
                                      <td className="py-2 px-3">R76 500</td>
                                      <td className="py-2 px-3">R82 400</td>
                                      <td className="py-2 px-3">R79 600</td>
                                      <td className="py-2 px-3">8%</td>
                                      <td className="py-2 px-3 font-medium">R19 080</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Sarah Molefe</td>
                                      <td className="py-2 px-3">Pretoria</td>
                                      <td className="py-2 px-3">R94 200</td>
                                      <td className="py-2 px-3">R89 600</td>
                                      <td className="py-2 px-3">R98 300</td>
                                      <td className="py-2 px-3">9%</td>
                                      <td className="py-2 px-3 font-medium">R25 389</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Michael Adams</td>
                                      <td className="py-2 px-3">Port Elizabeth</td>
                                      <td className="py-2 px-3">R65 800</td>
                                      <td className="py-2 px-3">R72 400</td>
                                      <td className="py-2 px-3">R68 900</td>
                                      <td className="py-2 px-3">7%</td>
                                      <td className="py-2 px-3 font-medium">R14 497</td>
                                    </tr>
                                    <tr className="border-t font-medium bg-gray-50">
                                      <td className="py-2 px-3">Totals</td>
                                      <td className="py-2 px-3"></td>
                                      <td className="py-2 px-3">R425 100</td>
                                      <td className="py-2 px-3">R437 450</td>
                                      <td className="py-2 px-3">R465 100</td>
                                      <td className="py-2 px-3"></td>
                                      <td className="py-2 px-3 font-bold">R109 965.50</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="mt-4 space-y-2">
                                <p className="text-sm font-medium text-gray-800">Formulas Used:</p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                  <pre className="text-xs font-mono text-gray-700 space-y-1">
                                    <div>Total Quarterly Sales: <span className="text-excel-blue font-medium">=SUM(C2:E2)</span></div>
                                    <div>Total Commission: <span className="text-excel-blue font-medium">=F2*G2</span> (with absolute reference for column G: <span className="text-excel-blue font-medium">=F2*$G$2</span> when copying down)</div>
                                    <div>Grand Total: <span className="text-excel-blue font-medium">=SUM(G2:G6)</span></div>
                                  </pre>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Exercise 3: Functions and Conditions */}
                          <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20 mt-6">
                            <h4 className="font-semibold mb-3">Exercise 3: Product Performance Analysis</h4>
                            
                            <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium">Product Performance Data</h5>
                                <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                  const tableData = [
                                    ['Product', 'Category', 'Units Sold', 'Target', 'Price', 'Cost', 'Revenue', 'Profit', 'Performance'],
                                    ['Wireless Mouse', 'Accessories', '124', '100', 'R299.99', 'R150.00', '', '', ''],
                                    ['External SSD', 'Storage', '86', '120', 'R1 299.00', 'R850.00', '', '', ''],
                                    ['Bluetooth Headphones', 'Audio', '215', '180', 'R799.50', 'R450.00', '', '', ''],
                                    ['Laptop Bag', 'Accessories', '73', '90', 'R459.95', 'R220.00', '', '', ''],
                                    ['Wireless Keyboard', 'Accessories', '142', '130', 'R599.00', 'R320.00', '', '', ''],
                                    ['USB-C Hub', 'Accessories', '167', '150', 'R429.00', 'R185.00', '', '', ''],
                                    ['Monitor 24"', 'Displays', '92', '85', 'R2 899.00', 'R1 750.00', '', '', '']
                                  ].map(row => row.join('\t')).join('\n');
                                  await copyToClipboard(tableData);
                                }}>
                                  <Copy className="h-4 w-4 mr-1" />
                                  <span className="text-xs">Copy Data</span>
                                </Button>
                              </div>
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="py-2 px-3 text-left">Product</th>
                                    <th className="py-2 px-3 text-left">Category</th>
                                    <th className="py-2 px-3 text-left">Units Sold</th>
                                    <th className="py-2 px-3 text-left">Target</th>
                                    <th className="py-2 px-3 text-left">Price</th>
                                    <th className="py-2 px-3 text-left">Cost</th>
                                    <th className="py-2 px-3 text-left">Revenue</th>
                                    <th className="py-2 px-3 text-left">Profit</th>
                                    <th className="py-2 px-3 text-left">Performance</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Wireless Mouse</td>
                                    <td className="py-2 px-3">Accessories</td>
                                    <td className="py-2 px-3">124</td>
                                    <td className="py-2 px-3">100</td>
                                    <td className="py-2 px-3">R299.99</td>
                                    <td className="py-2 px-3">R150.00</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">External SSD</td>
                                    <td className="py-2 px-3">Storage</td>
                                    <td className="py-2 px-3">86</td>
                                    <td className="py-2 px-3">120</td>
                                    <td className="py-2 px-3">R1 299.00</td>
                                    <td className="py-2 px-3">R850.00</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Bluetooth Headphones</td>
                                    <td className="py-2 px-3">Audio</td>
                                    <td className="py-2 px-3">215</td>
                                    <td className="py-2 px-3">180</td>
                                    <td className="py-2 px-3">R799.50</td>
                                    <td className="py-2 px-3">R450.00</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Laptop Bag</td>
                                    <td className="py-2 px-3">Accessories</td>
                                    <td className="py-2 px-3">73</td>
                                    <td className="py-2 px-3">90</td>
                                    <td className="py-2 px-3">R459.95</td>
                                    <td className="py-2 px-3">R220.00</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Wireless Keyboard</td>
                                    <td className="py-2 px-3">Accessories</td>
                                    <td className="py-2 px-3">142</td>
                                    <td className="py-2 px-3">130</td>
                                    <td className="py-2 px-3">R599.00</td>
                                    <td className="py-2 px-3">R320.00</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">USB-C Hub</td>
                                    <td className="py-2 px-3">Accessories</td>
                                    <td className="py-2 px-3">167</td>
                                    <td className="py-2 px-3">150</td>
                                    <td className="py-2 px-3">R429.00</td>
                                    <td className="py-2 px-3">R185.00</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Monitor 24"</td>
                                    <td className="py-2 px-3">Displays</td>
                                    <td className="py-2 px-3">92</td>
                                    <td className="py-2 px-3">85</td>
                                    <td className="py-2 px-3">R2 899.00</td>
                                    <td className="py-2 px-3">R1 750.00</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="space-y-3">
                              <p className="text-sm font-medium">Instructions:</p>
                              <ol className="list-decimal ml-5 space-y-2 text-sm">
                                <li>Create a new Excel workbook and enter the product data above</li>
                                <li>Calculate Revenue for each product (Units Sold × Price)</li>
                                <li>Calculate Profit for each product (Revenue − (Units Sold × Cost))</li>
                                <li>Use the IF function to populate the Performance column:
                                  <ul className="list-disc ml-5 mt-1">
                                    <li>"Exceeded Target" if Units Sold {'>'} Target</li>
                                    <li>"Met Target" if Units Sold = Target</li>
                                    <li>"Below Target" if Units Sold {'<'} Target</li>
                                  </ul>
                                </li>
                                <li>Add summary calculations at the bottom:
                                  <ul className="list-disc ml-5 mt-1">
                                    <li>Total Revenue (use SUM)</li>
                                    <li>Average Profit (use AVERAGE)</li>
                                    <li>Number of products exceeding target (use COUNTIF)</li>
                                  </ul>
                                </li>
                                <li>Format all monetary values as South African Rand with thousands separator</li>
                              </ol>
                              <p className="text-sm mt-2 italic">Hint: For the Performance column, use =IF(C2 {'>'} D2, "Exceeded Target", IF(C2=D2, "Met Target", "Below Target"))</p>
                            </div>

                            {/* Solutions Table */}
                            <div className="mt-6">
                              <h5 className="font-semibold text-excel-blue mb-3">Solution Example</h5>
                              <div className="rounded border border-gray-200 overflow-x-auto">
                                <table className="min-w-full text-sm">
                                  <thead>
                                    <tr className="bg-gray-50">
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Product</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Category</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Units Sold</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Target</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Price</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Cost</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Revenue</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Profit</th>
                                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Performance</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Wireless Mouse</td>
                                      <td className="py-2 px-3">Accessories</td>
                                      <td className="py-2 px-3">124</td>
                                      <td className="py-2 px-3">100</td>
                                      <td className="py-2 px-3">R299.99</td>
                                      <td className="py-2 px-3">R150.00</td>
                                      <td className="py-2 px-3 font-medium">R37,198.76</td>
                                      <td className="py-2 px-3 font-medium">R18,598.76</td>
                                      <td className="py-2 px-3 font-medium text-green-600">Exceeded Target</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">External SSD</td>
                                      <td className="py-2 px-3">Storage</td>
                                      <td className="py-2 px-3">86</td>
                                      <td className="py-2 px-3">120</td>
                                      <td className="py-2 px-3">R1,299.00</td>
                                      <td className="py-2 px-3">R850.00</td>
                                      <td className="py-2 px-3 font-medium">R111,714.00</td>
                                      <td className="py-2 px-3 font-medium">R38,614.00</td>
                                      <td className="py-2 px-3 font-medium text-red-600">Below Target</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Bluetooth Headphones</td>
                                      <td className="py-2 px-3">Audio</td>
                                      <td className="py-2 px-3">215</td>
                                      <td className="py-2 px-3">180</td>
                                      <td className="py-2 px-3">R799.50</td>
                                      <td className="py-2 px-3">R450.00</td>
                                      <td className="py-2 px-3 font-medium">R171,892.50</td>
                                      <td className="py-2 px-3 font-medium">R75,142.50</td>
                                      <td className="py-2 px-3 font-medium text-green-600">Exceeded Target</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Laptop Bag</td>
                                      <td className="py-2 px-3">Accessories</td>
                                      <td className="py-2 px-3">73</td>
                                      <td className="py-2 px-3">90</td>
                                      <td className="py-2 px-3">R459.95</td>
                                      <td className="py-2 px-3">R220.00</td>
                                      <td className="py-2 px-3 font-medium">R33,576.35</td>
                                      <td className="py-2 px-3 font-medium">R17,516.35</td>
                                      <td className="py-2 px-3 font-medium text-red-600">Below Target</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Wireless Keyboard</td>
                                      <td className="py-2 px-3">Accessories</td>
                                      <td className="py-2 px-3">142</td>
                                      <td className="py-2 px-3">130</td>
                                      <td className="py-2 px-3">R599.00</td>
                                      <td className="py-2 px-3">R320.00</td>
                                      <td className="py-2 px-3 font-medium">R85,058.00</td>
                                      <td className="py-2 px-3 font-medium">R39,618.00</td>
                                      <td className="py-2 px-3 font-medium text-green-600">Exceeded Target</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">USB-C Hub</td>
                                      <td className="py-2 px-3">Accessories</td>
                                      <td className="py-2 px-3">167</td>
                                      <td className="py-2 px-3">150</td>
                                      <td className="py-2 px-3">R429.00</td>
                                      <td className="py-2 px-3">R185.00</td>
                                      <td className="py-2 px-3 font-medium">R71,643.00</td>
                                      <td className="py-2 px-3 font-medium">R40,748.00</td>
                                      <td className="py-2 px-3 font-medium text-green-600">Exceeded Target</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                      <td className="py-2 px-3">Monitor 24"</td>
                                      <td className="py-2 px-3">Displays</td>
                                      <td className="py-2 px-3">92</td>
                                      <td className="py-2 px-3">85</td>
                                      <td className="py-2 px-3">R2,899.00</td>
                                      <td className="py-2 px-3">R1,750.00</td>
                                      <td className="py-2 px-3 font-medium">R266,708.00</td>
                                      <td className="py-2 px-3 font-medium">R105,708.00</td>
                                      <td className="py-2 px-3 font-medium text-green-600">Exceeded Target</td>
                                    </tr>
                                    <tr className="border-t font-medium bg-gray-50">
                                      <td className="py-2 px-3 font-bold">Summary</td>
                                      <td className="py-2 px-3"></td>
                                      <td className="py-2 px-3 font-bold">899</td>
                                      <td className="py-2 px-3">855</td>
                                      <td className="py-2 px-3"></td>
                                      <td className="py-2 px-3"></td>
                                      <td className="py-2 px-3 font-bold">R777,600.61</td>
                                      <td className="py-2 px-3 font-bold">R335,945.61</td>
                                      <td className="py-2 px-3 font-bold">5/7 Exceeded</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="mt-4 space-y-4 bg-white p-4 rounded-b border-x border-b border-gray-200">
                                <div>
                                  <p className="text-sm font-medium text-gray-800 mb-2">Key Formulas Used:</p>
                                  <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                    <pre className="text-xs font-mono text-gray-700 space-y-1">
                                      <div>Revenue: <span className="text-excel-blue font-medium">=C2*E2</span> (Units Sold × Price)</div>
                                      <div>Profit: <span className="text-excel-blue font-medium">=G2-(C2*F2)</span> or <span className="text-excel-blue font-medium">=C2*(E2-F2)</span></div>
                                      <div>Performance: <span className="text-excel-blue font-medium">=IF(C2{'>'}D2,"Exceeded Target",IF(C2=D2,"Met Target","Below Target"))</span></div>
                                      <div>Total Revenue: <span className="text-excel-blue font-medium">=SUM(G2:G8)</span></div>
                                      <div>Average Profit: <span className="text-excel-blue font-medium">=AVERAGE(H2:H8)</span></div>
                                      <div>Products Exceeding Target: <span className="text-excel-blue font-medium">=COUNTIF(I2:I8,"Exceeded Target")</span></div>
                                    </pre>
                                  </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                    <p className="text-sm font-medium text-gray-800 mb-2">Performance Summary:</p>
                                    <ul className="text-xs space-y-1">
                                      <li>• <span className="font-medium">Best Performer:</span> Monitor 24" (R266,708 Revenue)</li>
                                      <li>• <span className="font-medium">Highest Profit:</span> Monitor 24" (R105,708)</li>
                                      <li>• <span className="font-medium">Best Margin:</span> USB-C Hub (57%)</li>
                                      <li>• <span className="font-medium">Target Achievement:</span> 5/7 products exceeded targets</li>
                                    </ul>
                                  </div>
                                  
                                  <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                    <p className="text-sm font-medium text-gray-800 mb-2">Recommendations:</p>
                                    <ul className="text-xs space-y-1">
                                      <li>• Increase inventory for high-performing products</li>
                                      <li>• Review pricing strategy for External SSD (below target)</li>
                                      <li>• Consider bundle deals for Laptop Bags with other accessories</li>
                                      <li>• Monitor profit margins across all categories</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Exercise 4: Advanced Text Formatting */}
                          <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20 mt-6">
                            <h4 className="font-semibold mb-3">Exercise 4: Advanced Text Formatting</h4>
                            
                            <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium">Product Description Formatting</h5>
                                <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                  const tableData = [
                                    ['Product Code', 'Product Name', 'Description', 'Features', 'Publish Date'],
                                    ['LP-2022-001', 'Ultrabook Pro X', 'POWERFUL LAPTOP WITH 14" DISPLAY AND INTEL CORE i7 PROCESSOR', 'Backlit keyboard, Fingerprint scanner, USB-C ports, 16GB RAM', '15/01/2023'],
                                    ['PH-2022-002', 'MobiPhone 12', 'new smartphone with 6.2" amoled display and 48mp camera system', 'Face recognition, Dual SIM, Waterproof, Fast charging', '28/02/2023'],
                                    ['TB-2022-003', 'SlateTab Air', 'lightweight tablet with 10.2" retina display and 256GB STORAGE', 'Touch screen, Apple Pencil support, 10hr battery life', '12/03/2023'],
                                    ['HP-2022-004', 'audiophile pro', 'premium wireless headphones with NOISE CANCELLATION', 'Bluetooth 5.0, 30hr battery, Foldable design, Voice assistant', '05/04/2023'],
                                    ['SW-2022-005', 'fitband ultra', 'advanced fitness tracker with heart rate monitoring and gps', 'Water resistant, Sleep tracking, Smartphone notifications', '18/05/2023'],
                                    ['TV-2022-006', 'CinemaView 55"', 'SMART 4K TV WITH DOLBY VISION AND VOICE CONTROL', 'HDR10+, 120Hz refresh rate, Built-in streaming apps', '22/06/2023'],
                                    ['GM-2022-007', 'GameStation X', 'next-gen gaming console with 1TB SSD and 4k gaming', '8K support, Backward compatibility, Digital edition', '10/07/2023']
                                  ].map(row => row.join('\t')).join('\n');
                                  await copyToClipboard(tableData);
                                }}>
                                  <Copy className="h-4 w-4 mr-1" />
                                  <span className="text-xs">Copy Data</span>
                                </Button>
                              </div>
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="py-2 px-3 text-left">Product Code</th>
                                    <th className="py-2 px-3 text-left">Product Name</th>
                                    <th className="py-2 px-3 text-left">Description</th>
                                    <th className="py-2 px-3 text-left">Features</th>
                                    <th className="py-2 px-3 text-left">Publish Date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">LP-2022-001</td>
                                    <td className="py-2 px-3">Ultrabook Pro X</td>
                                    <td className="py-2 px-3">POWERFUL LAPTOP WITH 14" DISPLAY AND INTEL CORE i7 PROCESSOR</td>
                                    <td className="py-2 px-3">Backlit keyboard, Fingerprint scanner, USB-C ports, 16GB RAM</td>
                                    <td className="py-2 px-3">15/01/2023</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">PH-2022-002</td>
                                    <td className="py-2 px-3">MobiPhone 12</td>
                                    <td className="py-2 px-3">new smartphone with 6.2" amoled display and 48mp camera system</td>
                                    <td className="py-2 px-3">Face recognition, Dual SIM, Waterproof, Fast charging</td>
                                    <td className="py-2 px-3">28/02/2023</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">TB-2022-003</td>
                                    <td className="py-2 px-3">SlateTab Air</td>
                                    <td className="py-2 px-3">lightweight tablet with 10.2" retina display and 256GB STORAGE</td>
                                    <td className="py-2 px-3">Touch screen, Apple Pencil support, 10hr battery life</td>
                                    <td className="py-2 px-3">12/03/2023</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="space-y-3">
                              <p className="text-sm font-medium">Instructions:</p>
                              <ol className="list-decimal ml-5 space-y-2 text-sm">
                                <li>Create a new Excel workbook and enter the product data</li>
                                <li>Apply text formatting to standardize the data:</li>
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Use PROPER() function to correctly capitalize product names</li>
                                  <li>Use UPPER() for product codes</li>
                                  <li>Use LOWER() followed by PROPER() to fix inconsistent description capitalization</li>
                                </ul>
                                <li>Split the Features column into separate cells using Text to Columns</li>
                                <li>Format the Publish Date column as a proper date (DD-MMM-YYYY format)</li>
                                <li>Create a custom format to display product codes with color coding by type</li>
                                <li>Use text wrapping to ensure all description text is visible</li>
                                <li>Create a custom number format to add leading zeros to any numeric product codes</li>
                              </ol>
                              <p className="text-sm mt-2 italic">Hint: For text formatting, use the formula bar to apply text functions rather than manually editing each cell</p>
                            </div>

                            {/* Solutions Table */}
                            <div className="mt-6">
                              <h5 className="font-semibold text-excel-blue mb-3">Solution Example</h5>
                              <div className="rounded border border-gray-200 overflow-x-auto">
                                <table className="min-w-full text-sm">
                                  <thead>
                                    <tr className="bg-gray-50">
                                      <th className="py-2 px-3 text-left font-medium">Cell</th>
                                      <th className="py-2 px-3 text-left font-medium">Formula</th>
                                      <th className="py-2 px-3 text-left font-medium">Result</th>
                                      <th className="py-2 px-3 text-left font-medium">Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">B2</td>
                                      <td className="py-2 px-3 font-mono text-xs">=PROPER(A2)</td>
                                      <td className="py-2 px-3">Lp-2022-001</td>
                                      <td className="py-2 px-3">Capitalize first letter</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">C2</td>
                                      <td className="py-2 px-3 font-mono text-xs">=PROPER(LOWER(B2))</td>
                                      <td className="py-2 px-3">Ultrabook Pro X</td>
                                      <td className="py-2 px-3">Standardize product name</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">D2</td>
                                      <td className="py-2 px-3 font-mono text-xs">=PROPER(LOWER(C2))</td>
                                      <td className="py-2 px-3">Powerful laptop with 14" display and intel core i7 processor</td>
                                      <td className="py-2 px-3">Standardize description</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">E2</td>
                                      <td className="py-2 px-3 font-mono text-xs">=TEXTJOIN(", ", TRUE, TRIM(MID(SUBSTITUTE(D2,",",REPT(" ",100)),(ROW(1:10)-1)*100+1,100)))</td>
                                      <td className="py-2 px-3">Backlit keyboard, Fingerprint scanner, USB-C ports, 16GB RAM</td>
                                      <td className="py-2 px-3">Clean up features list</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">F2</td>
                                      <td className="py-2 px-3 font-mono text-xs">=TEXT(E2,"DD-MMM-YYYY")</td>
                                      <td className="py-2 px-3">15-Jan-2023</td>
                                      <td className="py-2 px-3">Format date</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 bg-yellow-50">
                                      <td className="py-2 px-3 font-mono text-xs">A2</td>
                                      <td className="py-2 px-3 font-mono text-xs">Custom Format: [Color10]@</td>
                                      <td className="py-2 px-3 text-blue-600">LP-2022-001</td>
                                      <td className="py-2 px-3">Color code by product type</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              
                              <div className="mt-6 space-y-6">
                                <div className="bg-white p-4 rounded border border-gray-200">
                                  <p className="text-sm font-medium text-gray-800 mb-3">Formatted Table Example:</p>
                                  <div className="overflow-x-auto">
                                    <table className="min-w-full text-xs border-collapse">
                                      <colgroup>
                                        <col className="w-24" />
                                        <col className="w-32" />
                                        <col className="w-64" />
                                        <col className="w-48" />
                                        <col className="w-24" />
                                      </colgroup>
                                      <thead>
                                        <tr className="bg-gray-50">
                                          <th className="border p-2 text-left font-medium">Product Code</th>
                                          <th className="border p-2 text-left font-medium">Product Name</th>
                                          <th className="border p-2 text-left font-medium">Description</th>
                                          <th className="border p-2 text-left font-medium">Features</th>
                                          <th className="border p-2 text-left font-medium">Publish Date</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border p-2 text-blue-600 font-mono text-xs">LP-2022-001</td>
                                          <td className="border p-2">Ultrabook Pro X</td>
                                          <td className="border p-2 text-justify">Powerful laptop with 14" display and Intel Core i7 processor, perfect for professionals and creatives who demand high performance and portability.</td>
                                          <td className="border p-2">
                                            <div className="space-y-1">
                                              <div className="bg-blue-50 px-2 py-1 rounded">Backlit keyboard</div>
                                              <div className="bg-blue-50 px-2 py-1 rounded">Fingerprint scanner</div>
                                              <div className="bg-blue-50 px-2 py-1 rounded">USB-C ports</div>
                                              <div className="bg-blue-50 px-2 py-1 rounded">16GB RAM</div>
                                            </div>
                                          </td>
                                          <td className="border p-2 text-center">15-Jan-2023</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border p-2 text-purple-600 font-mono text-xs">PH-2022-002</td>
                                          <td className="border p-2">Mobiphone 12</td>
                                          <td className="border p-2 text-justify">New smartphone with 6.2" AMOLED display and 48MP camera system, delivering stunning photos and smooth performance.</td>
                                          <td className="border p-2">
                                            <div className="space-y-1">
                                              <div className="bg-purple-50 px-2 py-1 rounded">Face recognition</div>
                                              <div className="bg-purple-50 px-2 py-1 rounded">Dual SIM</div>
                                              <div className="bg-purple-50 px-2 py-1 rounded">Waterproof</div>
                                              <div className="bg-purple-50 px-2 py-1 rounded">Fast charging</div>
                                            </div>
                                          </td>
                                          <td className="border p-2 text-center">28-Feb-2023</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                          <td className="border p-2 text-green-600 font-mono text-xs">TB-2022-003</td>
                                          <td className="border p-2">SlateTab Air</td>
                                          <td className="border p-2 text-justify">Lightweight tablet with 10.2" Retina display and 256GB storage, perfect for on-the-go productivity and entertainment.</td>
                                          <td className="border p-2">
                                            <div className="space-y-1">
                                              <div className="bg-green-50 px-2 py-1 rounded">Touch screen</div>
                                              <div className="bg-green-50 px-2 py-1 rounded">Apple Pencil support</div>
                                              <div className="bg-green-50 px-2 py-1 rounded">10hr battery life</div>
                                            </div>
                                          </td>
                                          <td className="border p-2 text-center">12-Mar-2023</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="mt-3 grid grid-cols-2 gap-4 text-xs">
                                    <div className="space-y-1">
                                      <p className="font-medium">Color Coding:</p>
                                      <div className="flex items-center space-x-2">
                                        <span className="w-3 h-3 inline-block bg-blue-100 border border-blue-300"></span>
                                        <span>Laptops</span>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <span className="w-3 h-3 inline-block bg-purple-100 border border-purple-300"></span>
                                        <span>Phones</span>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <span className="w-3 h-3 inline-block bg-green-100 border border-green-300"></span>
                                        <span>Tablets</span>
                                      </div>
                                    </div>
                                    <div className="space-y-1">
                                      <p className="font-medium">Formatting Applied:</p>
                                      <div className="flex items-center space-x-1">
                                        <Check className="h-3 w-3 text-green-500" />
                                        <span>Text Wrapping</span>
                                      </div>
                                      <div className="flex items-center space-x-1">
                                        <Check className="h-3 w-3 text-green-500" />
                                        <span>Date Formatting</span>
                                      </div>
                                      <div className="flex items-center space-x-1">
                                        <Check className="h-3 w-3 text-green-500" />
                                        <span>Proper Capitalization</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="space-y-4">
                                  <div className="bg-blue-50 p-4 rounded border border-blue-100">
                                    <p className="text-sm font-medium text-blue-800 mb-2">Complete Step-by-Step Guide:</p>
                                    <ol className="list-decimal ml-5 space-y-3 text-sm">
                                      <li className="space-y-2">
                                        <p><span className="font-medium">Prepare Your Data:</span> Enter the raw data in columns A to E</p>
                                        <div className="bg-white p-2 rounded border text-xs font-mono overflow-x-auto">
                                          A1: Product Code | B1: Product Name | C1: Description | D1: Features | E1: Publish Date
                                        </div>
                                      </li>
                                      <li className="space-y-2">
                                        <p><span className="font-medium">Format Product Codes (Column A):</span></p>
                                        <div className="space-y-1 ml-4">
                                          <p>• Insert new column: <span className="font-mono text-xs bg-white p-1 rounded border">=UPPER(A2)</span></p>
                                          <p>• Apply custom format: <span className="font-mono text-xs bg-white p-1 rounded border">[Color10]@</span> (for electronics)</p>
                                          <p>• For numeric codes: <span className="font-mono text-xs bg-white p-1 rounded border">TEXT(A2,"00000")</span></p>
                                        </div>
                                      </li>
                                      <li className="space-y-2">
                                        <p><span className="font-medium">Standardize Product Names (Column B):</span></p>
                                        <div className="space-y-1 ml-4">
                                          <p>• Insert new column: <span className="font-mono text-xs bg-white p-1 rounded border">=PROPER(TRIM(B2))</span></p>
                                          <p>• Handle special cases with: <span className="font-mono text-xs bg-white p-1 rounded border">=SUBSTITUTE(PROPER(TRIM(B2)),"Iphone","iPhone")</span></p>
                                        </div>
                                      </li>
                                      <li className="space-y-2">
                                        <p><span className="font-medium">Clean Descriptions (Column C):</span></p>
                                        <div className="space-y-1 ml-4">
                                          <p>• Insert new column: <span className="font-mono text-xs bg-white p-1 rounded border">=PROPER(LOWER(TRIM(C2)))</span></p>
                                          <p>• Fix common issues: <span className="font-mono text-xs bg-white p-1 rounded border">=SUBSTITUTE(PROPER(LOWER(TRIM(C2))),"I7","i7")</span></p>
                                        </div>
                                      </li>
                                      <li className="space-y-2">
                                        <p><span className="font-medium">Split Features (Column D):</span></p>
                                        <div className="space-y-1 ml-4">
                                          <p>1. Select column D</p>
                                          <p>2. Go to <span className="font-medium">Data</span> tab → <span className="font-medium">Text to Columns</span></p>
                                          <p>3. Choose <span className="font-medium">Delimited</span> → <span className="font-medium">Next</span></p>
                                          <p>4. Check <span className="font-medium">Comma</span> as delimiter → <span className="font-medium">Finish</span></p>
                                        </div>
                                      </li>
                                      <li className="space-y-2">
                                        <p><span className="font-medium">Format Dates (Column E):</span></p>
                                        <div className="space-y-1 ml-4">
                                          <p>• Select the date column</p>
                                          <p>• Press <span className="font-mono text-xs bg-white p-1 rounded border">Ctrl+1</span> (or Cmd+1 on Mac)</p>
                                          <p>• Choose <span className="font-medium">Custom</span> and enter: <span className="font-mono text-xs bg-white p-1 rounded border">DD-MMM-YYYY</span></p>
                                        </div>
                                      </li>
                                      <li className="space-y-2">
                                        <p><span className="font-medium">Apply Text Wrapping:</span></p>
                                        <div className="space-y-1 ml-4">
                                          <p>• Select columns with long text (B, C, D)</p>
                                          <p>• Go to <span className="font-medium">Home</span> tab → <span className="font-medium">Alignment</span> group</p>
                                          <p>• Click <span className="font-medium">Wrap Text</span></p>
                                          <p>• Adjust row height: <span className="font-medium">Format</span> → <span className="font-medium">Row Height</span> → Set to <span className="font-medium">AutoFit</span></p>
                                        </div>
                                      </li>
                                    </ol>
                                  </div>
                                </div>

                                <div>
                                  <p className="text-sm font-medium text-gray-800 mb-2">Step-by-Step Instructions:</p>
                                  <ol className="list-decimal ml-5 space-y-2 text-sm">
                                    <li>Create a new column next to each original column for the formatted data</li>
                                    <li>Apply these formulas in the new columns:
                                      <ul className="list-disc ml-5 mt-1 space-y-1">
                                        <li><span className="font-mono text-xs bg-gray-100 p-1 rounded">=UPPER(A2)</span> - For product codes</li>
                                        <li><span className="font-mono text-xs bg-gray-100 p-1 rounded">=PROPER(TRIM(B2))</span> - For product names</li>
                                        <li><span className="font-mono text-xs bg-gray-100 p-1 rounded">=LOWER(C2)</span> followed by <span className="font-mono text-xs bg-gray-100 p-1 rounded">=PROPER(D2)</span> - For descriptions</li>
                                        <li><span className="font-mono text-xs bg-gray-100 p-1 rounded">=TEXTJOIN(", ", TRUE, TRIM(...))</span> - To clean up features</li>
                                      </ul>
                                    </li>
                                    <li>For date formatting:
                                      <ul className="list-disc ml-5 mt-1 space-y-1">
                                        <li>Select the date column</li>
                                        <li>Press <span className="font-mono text-xs bg-gray-100 p-1 rounded">Ctrl+1</span> (or Cmd+1 on Mac)</li>
                                        <li>Choose <span className="font-medium">Custom</span> and enter: <span className="font-mono text-xs bg-gray-100 p-1 rounded">DD-MMM-YYYY</span></li>
                                      </ul>
                                    </li>
                                    <li>For text wrapping:
                                      <ul className="list-disc ml-5 mt-1 space-y-1">
                                        <li>Select the columns with long text</li>
                                        <li>Go to <span className="font-medium">Home</span> tab → <span className="font-medium">Alignment</span> group</li>
                                        <li>Check <span className="font-medium">Wrap Text</span></li>
                                      </ul>
                                    </li>
                                  </ol>
                                </div>
                                
                                <div className="bg-blue-50 p-4 rounded border border-blue-100">
                                  <p className="text-sm font-medium text-blue-800 mb-2">Pro Tips:</p>
                                  <ul className="list-disc ml-5 space-y-1 text-sm text-blue-700">
                                    <li>Use <span className="font-mono text-xs bg-blue-100 p-1 rounded">TRIM()</span> to remove extra spaces before applying text functions</li>
                                    <li>Combine <span className="font-mono text-xs bg-blue-100 p-1 rounded">SUBSTITUTE()</span> with other text functions for complex cleaning</li>
                                    <li>Create a custom number format with color coding: <span className="font-mono text-xs bg-blue-100 p-1 rounded">[Color10]@</span></li>
                                    <li>Use <span className="font-mono text-xs bg-blue-100 p-1 rounded">TEXT()</span> function for custom date and number formatting</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Exercise 5: Custom Number Formatting */}
                          <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20 mt-6">
                            <h4 className="font-semibold mb-3">Exercise 5: Custom Number Formatting</h4>
                            
                            <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium">International Sales Data</h5>
                                <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                  const tableData = [
                                    ['Country', 'Product', 'Units Sold', 'Unit Price', 'Total Revenue', 'Sales Tax %', 'Currency Symbol', 'Phone Code'],
                                    ['United States', 'Laptop Pro', '358', '1299.99', '', '7.25', 'R', '+1'],
                                    ['United Kingdom', 'Laptop Pro', '275', '999.99', '', '20', 'R', '+44'],
                                    ['Japan', 'Laptop Pro', '412', '155000', '', '10', 'R', '+81'],
                                    ['Germany', 'Laptop Pro', '331', '1199.99', '', '19', 'R', '+49'],
                                    ['Australia', 'Laptop Pro', '189', '1899.99', '', '10', 'R', '+61'],
                                    ['South Africa', 'Laptop Pro', '203', '21999.99', '', '15', 'R', '+27'],
                                    ['Brazil', 'Laptop Pro', '245', '7150', '', '17', 'R', '+55'],
                                    ['India', 'Laptop Pro', '532', '95999', '', '18', 'R', '+91'],
                                    ['Canada', 'Laptop Pro', '276', '1599.99', '', '13', 'R', '+1']
                                  ].map(row => row.join('\t')).join('\n');
                                  await copyToClipboard(tableData);
                                }}>
                                  <Copy className="h-4 w-4 mr-1" />
                                  <span className="text-xs">Copy Data</span>
                                </Button>
                              </div>
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="py-2 px-3 text-left">Country</th>
                                    <th className="py-2 px-3 text-left">Product</th>
                                    <th className="py-2 px-3 text-left">Units Sold</th>
                                    <th className="py-2 px-3 text-left">Unit Price</th>
                                    <th className="py-2 px-3 text-left">Total Revenue</th>
                                    <th className="py-2 px-3 text-left">Sales Tax %</th>
                                    <th className="py-2 px-3 text-left">Currency Symbol</th>
                                    <th className="py-2 px-3 text-left">Phone Code</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">United States</td>
                                    <td className="py-2 px-3">Laptop Pro</td>
                                    <td className="py-2 px-3">358</td>
                                    <td className="py-2 px-3">1299.99</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3">7.25</td>
                                    <td className="py-2 px-3">R</td>
                                    <td className="py-2 px-3">+1</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">United Kingdom</td>
                                    <td className="py-2 px-3">Laptop Pro</td>
                                    <td className="py-2 px-3">275</td>
                                    <td className="py-2 px-3">999.99</td>
                                    <td className="py-2 px-3"></td>
                                    <td className="py-2 px-3">20</td>
                                    <td className="py-2 px-3">£</td>
                                    <td className="py-2 px-3">+44</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="space-y-3">
                              <p className="text-sm font-medium">Instructions:</p>
                              <ol className="list-decimal ml-5 space-y-2 text-sm">
                                <li>Create a new Excel workbook and enter the international sales data</li>
                                <li>Calculate Total Revenue (Units Sold × Unit Price)</li>
                                <li>Create custom number formats for each country's currency:</li>
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Format Unit Price with appropriate currency symbols</li>
                                  <li>Use thousand separators appropriate for each country</li>
                                  <li>Show decimal places appropriate to each currency</li>
                                </ul>
                                <li>Format the Sales Tax percentage column with percentage symbol and one decimal place</li>
                                <li>Create a custom format for phone codes that includes parentheses</li>
                                <li>Format the country names to appear in bold blue text</li>
                                <li>Create a custom format to show negative revenue values in red with parentheses</li>
                                <li>Create a separate summary with subtotals for each country using accounting format</li>
                              </ol>
                              <p className="text-sm mt-2 italic">Hint: To create a custom number format, press Ctrl+1, select Number tab, then choose Custom and enter your format code</p>
                            </div>

                            {/* Solutions Table */}
                            <div className="mt-6">
                              <h5 className="font-semibold text-excel-blue mb-3">Solution Example</h5>
                              
                              {/* Formulas Table */}
                              <div className="rounded border border-gray-200 overflow-x-auto mb-6">
                                <table className="min-w-full text-sm">
                                  <thead>
                                    <tr className="bg-gray-50">
                                      <th className="py-2 px-3 text-left font-medium">Cell</th>
                                      <th className="py-2 px-3 text-left font-medium">Custom Format</th>
                                      <th className="py-2 px-3 text-left font-medium">Example</th>
                                      <th className="py-2 px-3 text-left font-medium">Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">D2</td>
                                      <td className="py-2 px-3 font-mono text-xs">[Blue]"$"#,##0.00_);[Red]("$"#,##0.00)</td>
                                      <td className="py-2 px-3">$1,299.99</td>
                                      <td className="py-2 px-3">US Dollars with 2 decimal places, negatives in red</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">E2</td>
                                      <td className="py-2 px-3 font-mono text-xs">=D2*C2</td>
                                      <td className="py-2 px-3">465,396.42</td>
                                      <td className="py-2 px-3">Calculate Total Revenue (Units × Price)</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">F2</td>
                                      <td className="py-2 px-3 font-mono text-xs">0.0%</td>
                                      <td className="py-2 px-3">7.3%</td>
                                      <td className="py-2 px-3">Percentage with 1 decimal place</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">H2</td>
                                      <td className="py-2 px-3 font-mono text-xs">+"("###") "###-####</td>
                                      <td className="py-2 px-3">+(1) 555-1234</td>
                                      <td className="py-2 px-3">Phone number format with country code</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50 bg-yellow-50">
                                      <td className="py-2 px-3 font-mono text-xs">A2</td>
                                      <td className="py-2 px-3 font-mono text-xs">[Blue][Bold]@</td>
                                      <td className="py-2 px-3 text-blue-600 font-bold">United States</td>
                                      <td className="py-2 px-3">Bold blue country names</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              
                              {/* Formatted Table Example */}
                              <div className="bg-white p-4 rounded border border-gray-200 mb-6">
                                <p className="text-sm font-medium text-gray-800 mb-3">Formatted Table Example:</p>
                                <div className="overflow-x-auto">
                                  <table className="min-w-full text-xs border-collapse">
                                    <colgroup>
                                      <col className="w-32" />
                                      <col className="w-24" />
                                      <col className="w-24" />
                                      <col className="w-24" />
                                      <col className="w-24" />
                                      <col className="w-20" />
                                      <col className="w-20" />
                                      <col className="w-24" />
                                    </colgroup>
                                    <thead>
                                      <tr className="bg-gray-50">
                                        <th className="border p-2 text-left font-medium">Country</th>
                                        <th className="border p-2 text-left font-medium">Product</th>
                                        <th className="border p-2 text-left font-medium">Units Sold</th>
                                        <th className="border p-2 text-left font-medium">Unit Price</th>
                                        <th className="border p-2 text-left font-medium">Total Revenue</th>
                                        <th className="border p-2 text-left font-medium">Tax %</th>
                                        <th className="border p-2 text-left font-medium">Currency</th>
                                        <th className="border p-2 text-left font-medium">Phone Code</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="hover:bg-gray-50">
                                        <td className="border p-2 text-blue-600 font-bold">United States</td>
                                        <td className="border p-2">Laptop Pro</td>
                                        <td className="border p-2 text-right">358</td>
                                        <td className="border p-2 text-right">$1,299.99</td>
                                        <td className="border p-2 text-right">$465,396.42</td>
                                        <td className="border p-2 text-right">7.3%</td>
                                        <td className="border p-2 text-center">USD</td>
                                        <td className="border p-2">+(1) 555-1234</td>
                                      </tr>
                                      <tr className="hover:bg-gray-50">
                                        <td className="border p-2 text-blue-600 font-bold">United Kingdom</td>
                                        <td className="border p-2">Laptop Pro</td>
                                        <td className="border p-2 text-right">275</td>
                                        <td className="border p-2 text-right">£999.99</td>
                                        <td className="border p-2 text-right">£274,997.25</td>
                                        <td className="border p-2 text-right">20.0%</td>
                                        <td className="border p-2 text-center">GBP</td>
                                        <td className="border p-2">+(44) 20-1234</td>
                                      </tr>
                                      <tr className="hover:bg-gray-50">
                                        <td className="border p-2 text-blue-600 font-bold">Japan</td>
                                        <td className="border p-2">Laptop Pro</td>
                                        <td className="border p-2 text-right">412</td>
                                        <td className="border p-2 text-right">¥155,000</td>
                                        <td className="border p-2 text-right">¥63,860,000</td>
                                        <td className="border p-2 text-right">10.0%</td>
                                        <td className="border p-2 text-center">JPY</td>
                                        <td className="border p-2">+(81) 3-1234</td>
                                      </tr>
                                    </tbody>
                                    <tfoot className="bg-gray-50 font-medium">
                                      <tr>
                                        <td colSpan={4} className="border p-2 text-right">Subtotal:</td>
                                        <td className="border p-2 text-right">$465,396.42</td>
                                        <td colSpan={3} className="border p-2"></td>
                                      </tr>
                                    </tfoot>
                                  </table>
                                </div>
                              </div>
                              
                              {/* Step-by-Step Instructions */}
                              <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded border border-blue-100">
                                  <p className="text-sm font-medium text-blue-800 mb-2">Step-by-Step Instructions:</p>
                                  <ol className="list-decimal ml-5 space-y-3 text-sm">
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Calculate Total Revenue:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>• In cell E2, enter: <span className="font-mono text-xs bg-white p-1 rounded border">=C2*D2</span></p>
                                        <p>• Copy down for all rows</p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Apply Currency Formatting:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>• Select column D (Unit Price)</p>
                                        <p>• Press <span className="font-mono text-xs bg-white p-1 rounded border">Ctrl+1</span> (or Cmd+1 on Mac)</p>
                                        <p>• Select <span className="font-medium">Custom</span> and enter: <span className="font-mono text-xs bg-white p-1 rounded border">[Blue]"$"#,##0.00_);[Red]("$"#,##0.00)</span></p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Format Percentage:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>• Select column F (Sales Tax %)</p>
                                        <p>• Press <span className="font-mono text-xs bg-white p-1 rounded border">Ctrl+Shift+%</span> or set to <span className="font-mono text-xs bg-white p-1 rounded border">0.0%</span> format</p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Create Custom Phone Format:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>• Select column H (Phone Code)</p>
                                        <p>• Go to <span className="font-medium">Format Cells</span> → <span className="font-medium">Custom</span></p>
                                        <p>• Enter: <span className="font-mono text-xs bg-white p-1 rounded border">+("##") ###-####</span></p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Create Subtotals:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Sort data by Country</p>
                                        <p>2. Select any cell in the data range</p>
                                        <p>3. Go to <span className="font-medium">Data</span> tab → <span className="font-medium">Subtotal</span></p>
                                        <p>4. Set options: <span className="font-mono text-xs bg-white p-1 rounded border">At each change in: Country</span>, <span className="font-mono text-xs bg-white p-1 rounded border">Use function: Sum</span>, <span className="font-mono text-xs bg-white p-1 rounded border">Add subtotal to: Total Revenue</span></p>
                                      </div>
                                    </li>
                                  </ol>
                                </div>
                                
                                <div className="bg-yellow-50 p-4 rounded border border-yellow-100">
                                  <p className="text-sm font-medium text-yellow-800 mb-2">Pro Tips:</p>
                                  <ul className="list-disc ml-5 space-y-1 text-sm text-yellow-700">
                                    <li>Use <span className="font-mono text-xs bg-yellow-100 p-1 rounded">ALT + =</span> to quickly add SUM formulas</li>
                                    <li>Create custom number format shortcuts in Excel Options for frequently used formats</li>
                                    <li>Use <span className="font-mono text-xs bg-yellow-100 p-1 rounded">Format Painter</span> to quickly copy number formats between cells</li>
                                    <li>For international formats, consider using the <span className="font-mono text-xs bg-yellow-100 p-1 rounded">TEXT()</span> function with locale-specific format codes</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Exercise 6: Conditional Formatting Master Class */}
                          <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20 mt-6">
                            <h4 className="font-semibold mb-3">Exercise 6: Conditional Formatting Master Class</h4>
                            
                            <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium">Monthly Performance Metrics</h5>
                                <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                  const tableData = [
                                    ['Department', 'Employee', 'January', 'February', 'March', 'April', 'May', 'June', 'Target', 'Status'],
                                    ['Sales', 'John Smith', '125,632', '131,456', '142,887', '138,990', '152,300', '161,775', '140,000', ''],
                                    ['Sales', 'Sarah Johnson', '115,890', '122,450', '135,678', '127,890', '138,900', '142,780', '130,000', ''],
                                    ['Marketing', 'David Lee', '89,500', '92,670', '87,900', '94,300', '97,800', '89,600', '95,000', ''],
                                    ['Marketing', 'Lisa Wong', '78,900', '83,400', '81,200', '88,900', '92,600', '95,300', '85,000', ''],
                                    ['IT', 'Michael Brown', '64,300', '67,800', '71,200', '72,500', '68,900', '74,200', '70,000', ''],
                                    ['IT', 'Jessica Taylor', '61,200', '58,900', '62,700', '65,300', '67,800', '69,400', '65,000', ''],
                                    ['Finance', 'Robert Chen', '112,300', '118,600', '121,800', '125,400', '128,700', '132,500', '120,000', ''],
                                    ['Finance', 'Olivia Green', '108,700', '111,500', '115,300', '118,900', '121,500', '125,800', '115,000', ''],
                                    ['HR', 'Thomas Wilson', '52,800', '54,300', '53,900', '57,600', '59,400', '61,200', '58,000', ''],
                                    ['HR', 'Amanda Miller', '49,500', '51,200', '52,800', '54,600', '56,700', '58,500', '55,000', '']
                                  ].map(row => row.join('\t')).join('\n');
                                  await copyToClipboard(tableData);
                                }}>
                                  <Copy className="h-4 w-4 mr-1" />
                                  <span className="text-xs">Copy Data</span>
                                </Button>
                              </div>
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="py-2 px-3 text-left">Department</th>
                                    <th className="py-2 px-3 text-left">Employee</th>
                                    <th className="py-2 px-3 text-left">January</th>
                                    <th className="py-2 px-3 text-left">February</th>
                                    <th className="py-2 px-3 text-left">March</th>
                                    <th className="py-2 px-3 text-left">April</th>
                                    <th className="py-2 px-3 text-left">May</th>
                                    <th className="py-2 px-3 text-left">June</th>
                                    <th className="py-2 px-3 text-left">Target</th>
                                    <th className="py-2 px-3 text-left">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Sales</td>
                                    <td className="py-2 px-3">John Smith</td>
                                    <td className="py-2 px-3">125,632</td>
                                    <td className="py-2 px-3">131,456</td>
                                    <td className="py-2 px-3">142,887</td>
                                    <td className="py-2 px-3">138,990</td>
                                    <td className="py-2 px-3">152,300</td>
                                    <td className="py-2 px-3">161,775</td>
                                    <td className="py-2 px-3">140,000</td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">Sales</td>
                                    <td className="py-2 px-3">Sarah Johnson</td>
                                    <td className="py-2 px-3">115,890</td>
                                    <td className="py-2 px-3">122,450</td>
                                    <td className="py-2 px-3">135,678</td>
                                    <td className="py-2 px-3">127,890</td>
                                    <td className="py-2 px-3">138,900</td>
                                    <td className="py-2 px-3">142,780</td>
                                    <td className="py-2 px-3">130,000</td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="space-y-3">
                              <p className="text-sm font-medium">Instructions:</p>
                              <ol className="list-decimal ml-5 space-y-2 text-sm">
                                <li>Create a new Excel workbook and enter the performance metrics data</li>
                                <li>Apply conditional formatting using multiple techniques:</li>
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Color scales to highlight monthly performance trends (green-yellow-red)</li>
                                  <li>Data bars to visualize performance across departments</li>
                                  <li>Icon sets to indicate performance levels (3 arrows for above/at/below target)</li>
                                  <li>Custom formula rule to highlight cells above target in green</li>
                                  <li>Top/Bottom rules to highlight top 10% and bottom 10% performers</li>
                                </ul>
                                <li>Create a formula to calculate the Status column:</li>
                                <ul className="list-disc ml-5 mt-1">
                                  <li>"Exceeded" if June performance is at least 10% above target</li>
                                  <li>"Met" if June performance is between target and 10% above target</li>
                                  <li>"Below" if June performance is below target</li>
                                </ul>
                                <li>Apply conditional formatting to the Status column (green for Exceeded, yellow for Met, red for Below)</li>
                                <li>Create a heatmap using conditional formatting for the entire data range</li>
                                <li>Use conditional formatting to highlight cells with values higher than the previous month</li>
                                <li>Create a dashboard summary using conditional formatting to show departmental performance</li>
                              </ol>
                              <p className="text-sm mt-2 italic">Hint: Access conditional formatting from the Home tab in Excel, or right-click and select 'Conditional Formatting' from the context menu</p>
                            </div>

                            {/* Solutions Table */}
                            <div className="mt-6">
                              <h5 className="font-semibold text-excel-blue mb-3">Solution Example</h5>
                              
                              {/* Conditional Formatting Rules Table */}
                              <div className="rounded border border-gray-200 overflow-x-auto mb-6">
                                <table className="min-w-full text-sm">
                                  <thead>
                                    <tr className="bg-gray-50">
                                      <th className="py-2 px-3 text-left font-medium">Range</th>
                                      <th className="py-2 px-3 text-left font-medium">Rule Type</th>
                                      <th className="py-2 px-3 text-left font-medium">Format</th>
                                      <th className="py-2 px-3 text-left font-medium">Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">C2:H11</td>
                                      <td className="py-2 px-3">Color Scale</td>
                                      <td className="py-2 px-3">Green-Yellow-Red</td>
                                      <td className="py-2 px-3">Heatmap of monthly performance</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">C2:H11</td>
                                      <td className="py-2 px-3">Data Bars</td>
                                      <td className="py-2 px-3">Gradient Fill (Blue)</td>
                                      <td className="py-2 px-3">Visualize performance magnitude</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">C2:H11</td>
                                      <td className="py-2 px-3">Icon Set</td>
                                      <td className="py-2 px-3">3 Arrows (Colored)</td>
                                      <td className="py-2 px-3">Quick performance indicators</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">J2:J11</td>
                                      <td className="py-2 px-3">Custom Formula</td>
                                      <td className="py-2 px-3">=H2{'>'}I2</td>
                                      <td className="py-2 px-3">Highlight cells where June {'>'} Target</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-mono text-xs">K2:K11</td>
                                      <td className="py-2 px-3">3-Color Scale</td>
                                      <td className="py-2 px-3">Red-Yellow-Green</td>
                                      <td className="py-2 px-3">Status indicator (Below/Met/Exceeded)</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              {/* Status Formula */}
                              <div className="bg-blue-50 p-4 rounded border border-blue-100 mb-6">
                                <p className="text-sm font-medium text-blue-800 mb-2">Status Formula:</p>
                                <div className="bg-white p-3 rounded border border-blue-200">
                                  <code className="text-sm font-mono">
                                    =IF(H2{'>'}=I2*1.1,"Exceeded",IF(H2{'>'}=I2,"Met","Below"))
                                  </code>
                                </div>
                                <p className="text-xs text-gray-600 mt-2">Enter this formula in cell K2 and copy down</p>
                              </div>

                              {/* Formatted Table Example */}
                              <div className="bg-white p-4 rounded border border-gray-200 mb-6">
                                <p className="text-sm font-medium text-gray-800 mb-3">Formatted Table Example:</p>
                                <div className="overflow-x-auto">
                                  <table className="min-w-full text-xs border-collapse">
                                    <colgroup>
                                      <col className="w-24" />
                                      <col className="w-24" />
                                      <col className="w-20" />
                                      <col className="w-20" />
                                      <col className="w-20" />
                                      <col className="w-20" />
                                      <col className="w-20" />
                                      <col className="w-20" />
                                      <col className="w-20" />
                                      <col className="w-20" />
                                    </colgroup>
                                    <thead>
                                      <tr className="bg-gray-50">
                                        <th className="border p-2 text-left font-medium">Department</th>
                                        <th className="border p-2 text-left font-medium">Employee</th>
                                        <th className="border p-2 text-center">Jan</th>
                                        <th className="border p-2 text-center">Feb</th>
                                        <th className="border p-2 text-center">Mar</th>
                                        <th className="border p-2 text-center">Apr</th>
                                        <th className="border p-2 text-center">May</th>
                                        <th className="border p-2 text-center">Jun</th>
                                        <th className="border p-2 text-center">Target</th>
                                        <th className="border p-2 text-center">Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="hover:bg-gray-50">
                                        <td className="border p-2">Sales</td>
                                        <td className="border p-2">John Smith</td>
                                        <td className="border p-2 text-right bg-red-100">125,632</td>
                                        <td className="border p-2 text-right bg-yellow-100">131,456</td>
                                        <td className="border p-2 text-right bg-green-100">142,887</td>
                                        <td className="border p-2 text-right bg-green-100">138,990</td>
                                        <td className="border p-2 text-right bg-green-100">152,300</td>
                                        <td className="border p-2 text-right bg-green-100 font-bold">161,775</td>
                                        <td className="border p-2 text-right">140,000</td>
                                        <td className="border p-2 text-center bg-green-100 font-medium">Exceeded</td>
                                      </tr>
                                      <tr className="hover:bg-gray-50">
                                        <td className="border p-2">Sales</td>
                                        <td className="border p-2">Sarah Johnson</td>
                                        <td className="border p-2 text-right bg-red-100">115,890</td>
                                        <td className="border p-2 text-right bg-yellow-100">122,450</td>
                                        <td className="border p-2 text-right bg-green-100">135,678</td>
                                        <td className="border p-2 text-right bg-yellow-100">127,890</td>
                                        <td className="border p-2 text-right bg-green-100">138,900</td>
                                        <td className="border p-2 text-right bg-green-100 font-bold">142,780</td>
                                        <td className="border p-2 text-right">130,000</td>
                                        <td className="border p-2 text-center bg-green-100 font-medium">Exceeded</td>
                                      </tr>
                                      <tr className="hover:bg-gray-50">
                                        <td className="border p-2">Marketing</td>
                                        <td className="border p-2">David Lee</td>
                                        <td className="border p-2 text-right bg-red-100">89,500</td>
                                        <td className="border p-2 text-right bg-yellow-100">92,670</td>
                                        <td className="border p-2 text-right bg-red-100">87,900</td>
                                        <td className="border p-2 text-right bg-yellow-100">94,300</td>
                                        <td className="border p-2 text-right bg-yellow-100">97,800</td>
                                        <td className="border p-2 text-right bg-red-100 font-bold">89,600</td>
                                        <td className="border p-2 text-right">95,000</td>
                                        <td className="border p-2 text-center bg-red-100 font-medium">Below</td>
                                      </tr>
                                    </tbody>
                                    <tfoot className="bg-gray-50 font-medium">
                                      <tr>
                                        <td colSpan={2} className="border p-2 text-right">Department Avg:</td>
                                        <td className="border p-2 text-right">110,230</td>
                                        <td className="border p-2 text-right">115,619</td>
                                        <td className="border p-2 text-right">122,183</td>
                                        <td className="border p-2 text-right">120,393</td>
                                        <td className="border p-2 text-right">129,667</td>
                                        <td className="border p-2 text-right">131,718</td>
                                        <td className="border p-2 text-right">121,667</td>
                                        <td className="border p-2"></td>
                                      </tr>
                                    </tfoot>
                                  </table>
                                </div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  <div className="flex items-center">
                                    <div className="w-3 h-3 bg-red-100 border border-red-300 mr-1"></div>
                                    <span className="text-xs">Below Target</span>
                                  </div>
                                  <div className="flex items-center ml-2">
                                    <div className="w-3 h-3 bg-yellow-100 border border-yellow-300 mr-1"></div>
                                    <span className="text-xs">Near Target</span>
                                  </div>
                                  <div className="flex items-center ml-2">
                                    <div className="w-3 h-3 bg-green-100 border border-green-300 mr-1"></div>
                                    <span className="text-xs">Above Target</span>
                                  </div>
                                </div>
                              </div>

                              {/* Step-by-Step Instructions */}
                              <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded border border-blue-100">
                                  <p className="text-sm font-medium text-blue-800 mb-2">Step-by-Step Instructions:</p>
                                  <ol className="list-decimal ml-5 space-y-3 text-sm">
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Apply Color Scale:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Select range C2:H11</p>
                                        <p>2. Go to <span className="font-medium">Home</span> → <span className="font-medium">Conditional Formatting</span> → <span className="font-medium">Color Scales</span></p>
                                        <p>3. Choose <span className="font-mono text-xs bg-white p-1 rounded border">Green-Yellow-Red</span> color scale</p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Add Data Bars:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Select range C2:H11</p>
                                        <p>2. Go to <span className="font-medium">Home</span> → <span className="font-medium">Conditional Formatting</span> → <span className="font-medium">Data Bars</span></p>
                                        <p>3. Choose <span className="font-mono text-xs bg-white p-1 rounded border">Gradient Fill</span> or <span className="font-mono text-xs bg-white p-1 rounded border">Solid Fill</span></p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Create Status Formula:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. In cell K2, enter: <span className="font-mono text-xs bg-white p-1 rounded border">=IF(H2{'>'}=I2*1.1,"Exceeded",IF(H2{'>'}=I2,"Met","Below"))</span></p>
                                        <p>2. Copy down for all employees</p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Format Status Column:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Select range K2:K11</p>
                                        <p>2. Go to <span className="font-medium">Home</span> → <span className="font-medium">Conditional Formatting</span> → <span className="font-medium">New Rule</span></p>
                                        <p>3. Choose <span className="font-mono text-xs bg-white p-1 rounded border">Format only cells that contain</span></p>
                                        <p>4. Set rule: <span className="font-mono text-xs bg-white p-1 rounded border">Cell Value</span> <span className="font-mono text-xs bg-white p-1 rounded border">equal to</span> <span className="font-mono text-xs bg-white p-1 rounded border">"Exceeded"</span></p>
                                        <p>5. Set format to green fill with dark green text</p>
                                        <p>6. Repeat for "Met" (yellow) and "Below" (red)</p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Highlight Top/Bottom Performers:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Select range C2:H11</p>
                                        <p>2. Go to <span className="font-medium">Home</span> → <span className="font-medium">Conditional Formatting</span> → <span className="font-medium">Top/Bottom Rules</span></p>
                                        <p>3. Choose <span className="font-mono text-xs bg-white p-1 rounded border">Top 10%</span> and set format</p>
                                        <p>4. Repeat for <span className="font-mono text-xs bg-white p-1 rounded border">Bottom 10%</span> with different format</p>
                                      </div>
                                    </li>
                                  </ol>
                                </div>
                                
                                <div className="bg-yellow-50 p-4 rounded border border-yellow-100">
                                  <p className="text-sm font-medium text-yellow-800 mb-2">Pro Tips:</p>
                                  <ul className="list-disc ml-5 space-y-1 text-sm text-yellow-700">
                                    <li>Use <span className="font-mono text-xs bg-yellow-100 p-1 rounded">ALT + O + D</span> to quickly open the Conditional Formatting Rules Manager</li>
                                    <li>Create a dashboard with <span className="font-mono text-xs bg-yellow-100 p-1 rounded">Sparklines</span> to show trends for each employee</li>
                                    <li>Use <span className="font-mono text-xs bg-yellow-100 p-1 rounded">Formulas</span> in conditional formatting for more complex rules</li>
                                    <li>Combine multiple rules and use <span className="font-mono text-xs bg-yellow-100 p-1 rounded">Stop If True</span> to control rule priority</li>
                                    <li>Create a <span className="font-mono text-xs bg-yellow-100 p-1 rounded">heat map</span> using <span className="font-mono text-xs bg-yellow-100 p-1 rounded">=CELL("color",A1)=1</span> for interactive filtering</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Exercise 7: Data Validation and Protection */}
                          <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20 mt-6">
                            <h4 className="font-semibold mb-3">Exercise 7: Data Validation and Protection</h4>
                            
                            <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium">Expense Report Template</h5>
                                <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                  const tableData = [
                                    ['Employee Name', '', '', 'Department', '', 'Month', ''],
                                    ['', '', '', '', '', '', ''],
                                    ['Date', 'Expense Category', 'Description', 'Amount', 'Payment Method', 'Receipt Attached', 'Approved'],
                                    ['', '', '', '', '', '', ''],
                                    ['', '', '', '', '', '', ''],
                                    ['', '', '', '', '', '', ''],
                                    ['', '', '', '', '', '', ''],
                                    ['', '', '', '', '', '', ''],
                                    ['', '', '', '', '', '', ''],
                                    ['', '', '', '', '', '', ''],
                                    ['', '', '', '', '', '', ''],
                                    ['', '', '', 'Total:', '', '', ''],
                                    ['', '', '', '', '', '', '']
                                  ].map(row => row.join('\t')).join('\n');
                                  await copyToClipboard(tableData);
                                }}>
                                  <Copy className="h-4 w-4 mr-1" />
                                  <span className="text-xs">Copy Template</span>
                                </Button>
                              </div>
                              <div className="p-4 border border-gray-200 rounded bg-gray-50">
                                <p className="text-sm font-medium mb-2">Expense Categories:</p>
                                <ul className="list-disc ml-5 text-xs space-y-1">
                                  <li>Travel</li>
                                  <li>Meals</li>
                                  <li>Accommodation</li>
                                  <li>Office Supplies</li>
                                  <li>Software/Subscriptions</li>
                                  <li>Client Entertainment</li>
                                  <li>Training/Conferences</li>
                                  <li>Other</li>
                                </ul>
                                <p className="text-sm font-medium mt-3 mb-2">Payment Methods:</p>
                                <ul className="list-disc ml-5 text-xs space-y-1">
                                  <li>Corporate Card</li>
                                  <li>Personal Card</li>
                                  <li>Cash</li>
                                  <li>Bank Transfer</li>
                                </ul>
                                <p className="text-sm font-medium mt-3 mb-2">Departments:</p>
                                <ul className="list-disc ml-5 text-xs space-y-1">
                                  <li>Sales</li>
                                  <li>Marketing</li>
                                  <li>Finance</li>
                                  <li>IT</li>
                                  <li>HR</li>
                                  <li>Operations</li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <p className="text-sm font-medium">Instructions:</p>
                              <ol className="list-decimal ml-5 space-y-2 text-sm">
                                <li>Create a new Excel workbook and set up the expense report template</li>
                                <li>Implement data validation for each column:</li>
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Date column: Set validation to only accept dates within the current month</li>
                                  <li>Expense Category: Create a dropdown list with the categories provided</li>
                                  <li>Amount: Set validation to only accept positive numbers less than 5,000</li>
                                  <li>Payment Method: Create a dropdown with the methods provided</li>
                                  <li>Receipt Attached: Create a checkbox or Yes/No dropdown</li>
                                  <li>Department: Create a dropdown with departments provided</li>
                                </ul>
                                <li>Add custom validation messages for each validation rule</li>
                                <li>Protect the worksheet with the following settings:</li>
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Allow users to edit only the input cells</li>
                                  <li>Lock formula cells and headers</li>
                                  <li>Add password protection to the sheet structure</li>
                                </ul>
                                <li>Create formulas to automatically calculate the total expenses</li>
                                <li>Add conditional formatting to highlight amounts over 1,000 in red</li>
                                <li>Create a data entry form using Form Controls (Developer tab)</li>
                                <li>Add cell comments with instructions for each input field</li>
                              </ol>
                              <p className="text-sm mt-2 italic">Hint: To add data validation, select the cells and use Data {'>'} Data Validation from the ribbon</p>
                            </div>

                            {/* Solutions Table */}
                            <div className="mt-6">
                              <h5 className="font-semibold text-excel-blue mb-3">Solution Example</h5>
                              
                              {/* Data Validation Rules Table */}
                              <div className="rounded border border-gray-200 overflow-x-auto mb-6">
                                <table className="min-w-full text-sm">
                                  <thead>
                                    <tr className="bg-gray-50">
                                      <th className="py-2 px-3 text-left font-medium">Column</th>
                                      <th className="py-2 px-3 text-left font-medium">Validation Type</th>
                                      <th className="py-2 px-3 text-left font-medium">Settings</th>
                                      <th className="py-2 px-3 text-left font-medium">Input Message</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-medium">Date</td>
                                      <td className="py-2 px-3">Date</td>
                                      <td className="py-2 px-3 font-mono text-xs">between =EOMONTH(TODAY(),-1)+1 and =EOMONTH(TODAY(),0)</td>
                                      <td className="py-2 px-3 text-xs">Please enter a date within the current month</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-medium">Expense Category</td>
                                      <td className="py-2 px-3">List</td>
                                      <td className="py-2 px-3 font-mono text-xs">Source: =$M$3:$M$10</td>
                                      <td className="py-2 px-3 text-xs">Select an expense category from the dropdown</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-medium">Amount</td>
                                      <td className="py-2 px-3">Decimal</td>
                                      <td className="py-2 px-3 font-mono text-xs">between 0.01 and 5000</td>
                                      <td className="py-2 px-3 text-xs">Amount must be between $0.01 and $5,000</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-medium">Payment Method</td>
                                      <td className="py-2 px-3">List</td>
                                      <td className="py-2 px-3 font-mono text-xs">Source: =$O$3:$O$6</td>
                                      <td className="py-2 px-3 text-xs">Select payment method from the dropdown</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-medium">Receipt Attached</td>
                                      <td className="py-2 px-3">List</td>
                                      <td className="py-2 px-3 font-mono text-xs">Source: ={"{"}"Yes","No"{"}"}</td>
                                      <td className="py-2 px-3 text-xs">Select Yes if receipt is attached</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                      <td className="py-2 px-3 font-medium">Department</td>
                                      <td className="py-2 px-3">List</td>
                                      <td className="py-2 px-3 font-mono text-xs">Source: =$Q$3:$Q$8</td>
                                      <td className="py-2 px-3 text-xs">Select your department from the list</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              {/* Protection Settings */}
                              <div className="bg-blue-50 p-4 rounded border border-blue-100 mb-6">
                                <p className="text-sm font-medium text-blue-800 mb-2">Worksheet Protection Settings:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <p className="font-medium text-sm mb-1">Allowed Actions (Checked):</p>
                                    <ul className="list-disc ml-5 text-sm space-y-1">
                                      <li>Select unlocked cells</li>
                                      <li>Format cells</li>
                                      <li>Format columns</li>
                                      <li>Insert rows</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <p className="font-medium text-sm mb-1">Restricted Actions (Unchecked):</p>
                                    <ul className="list-disc ml-5 text-sm space-y-1">
                                      <li>Select locked cells</li>
                                      <li>Delete rows/columns</li>
                                      <li>Sort/Filter</li>
                                      <li>Change column width/row height</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="mt-3">
                                  <p className="font-mono text-xs bg-white p-2 rounded border">Password to unprotect: <span className="text-gray-500">[YourSecurePassword]</span></p>
                                </div>
                              </div>

                              {/* Formatted Table Example */}
                              <div className="bg-white p-4 rounded border border-gray-200 mb-6">
                                <p className="text-sm font-medium text-gray-800 mb-3">Formatted Expense Report Example:</p>
                                <div className="overflow-x-auto">
                                  <table className="min-w-full text-xs border-collapse">
                                    <colgroup>
                                      <col className="w-20" />
                                      <col className="w-28" />
                                      <col className="w-32" />
                                      <col className="w-20" />
                                      <col className="w-24" />
                                      <col className="w-20" />
                                      <col className="w-20" />
                                    </colgroup>
                                    <thead>
                                      <tr className="bg-gray-50">
                                        <th className="border p-2 text-left font-medium">Date</th>
                                        <th className="border p-2 text-left font-medium">Expense Category</th>
                                        <th className="border p-2 text-left font-medium">Description</th>
                                        <th className="border p-2 text-right font-medium">Amount</th>
                                        <th className="border p-2 text-left font-medium">Payment Method</th>
                                        <th className="border p-2 text-center font-medium">Receipt</th>
                                        <th className="border p-2 text-center font-medium">Approved</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="hover:bg-gray-50">
                                        <td className="border p-2">01/08/2025</td>
                                        <td className="border p-2">Travel</td>
                                        <td className="border p-2">Flight to Cape Town</td>
                                        <td className="border p-2 text-right">3,250.00</td>
                                        <td className="border p-2">Corporate Card</td>
                                        <td className="border p-2 text-center">✓</td>
                                        <td className="border p-2 text-center">✓</td>
                                      </tr>
                                      <tr className="hover:bg-gray-50">
                                        <td className="border p-2">02/08/2025</td>
                                        <td className="border p-2">Meals</td>
                                        <td className="border p-2">Client dinner</td>
                                        <td className="border p-2 text-right">1,250.00</td>
                                        <td className="border p-2">Personal Card</td>
                                        <td className="border p-2 text-center">✓</td>
                                        <td className="border p-2 text-center">✓</td>
                                      </tr>
                                      <tr className="hover:bg-gray-50 bg-red-50">
                                        <td className="border p-2">03/08/2025</td>
                                        <td className="border p-2">Accommodation</td>
                                        <td className="border p-2">Hotel stay</td>
                                        <td className="border p-2 text-right font-bold text-red-600">5,500.00</td>
                                        <td className="border p-2">Corporate Card</td>
                                        <td className="border p-2 text-center">✓</td>
                                        <td className="border p-2 text-center text-red-600">!</td>
                                      </tr>
                                    </tbody>
                                    <tfoot className="bg-gray-50 font-medium">
                                      <tr>
                                        <td colSpan={3} className="border p-2 text-right">Total:</td>
                                        <td className="border p-2 text-right">10,000.00</td>
                                        <td colSpan={3} className="border p-2"></td>
                                      </tr>
                                    </tfoot>
                                  </table>
                                </div>
                                <div className="mt-3 flex flex-wrap gap-4">
                                  <div className="flex items-center">
                                    <div className="w-3 h-3 bg-red-100 border border-red-300 mr-1"></div>
                                    <span className="text-xs">Amount exceeds limit</span>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="w-3 h-3 bg-yellow-100 border border-yellow-300 mr-1"></div>
                                    <span className="text-xs">Requires approval</span>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-100 border border-green-300 mr-1"></div>
                                    <span className="text-xs">Approved</span>
                                  </div>
                                </div>
                              </div>

                              {/* Step-by-Step Instructions */}
                              <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded border border-blue-100">
                                  <p className="text-sm font-medium text-blue-800 mb-2">Step-by-Step Instructions:</p>
                                  <ol className="list-decimal ml-5 space-y-3 text-sm">
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Set Up Data Validation:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Select column A (Date)</p>
                                        <p>2. Go to <span className="font-medium">Data</span> → <span className="font-medium">Data Validation</span></p>
                                        <p>3. Set <span className="font-mono text-xs bg-white p-1 rounded border">Allow: Date</span> and enter date range formulas</p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Create Dropdown Lists:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Select column B (Expense Category)</p>
                                        <p>2. Go to <span className="font-medium">Data Validation</span> → <span className="font-medium">List</span></p>
                                        <p>3. Enter <span className="font-mono text-xs bg-white p-1 rounded border">=$M$3:$M$10</span> in the Source field</p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Protect the Worksheet:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Select all cells (Ctrl+A) and unlock them (Ctrl+1 → Protection → Uncheck Locked)</p>
                                        <p>2. Select only the input cells and lock them (Ctrl+1 → Protection → Check Locked)</p>
                                        <p>3. Go to <span className="font-medium">Review</span> → <span className="font-medium">Protect Sheet</span></p>
                                        <p>4. Set a password and select allowed actions</p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Add Conditional Formatting:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Select column D (Amount)</p>
                                        <p>2. Go to <span className="font-medium">Home</span> → <span className="font-medium">Conditional Formatting</span> → <span className="font-medium">New Rule</span></p>
                                        <p>3. Use formula: <span className="font-mono text-xs bg-white p-1 rounded border">=D2{'>'}1000</span> with red fill</p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Create a Data Entry Form:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Enable Developer tab (File → Options → Customize Ribbon → Check Developer)</p>
                                        <p>2. Go to <span className="font-medium">Developer</span> → <span className="font-medium">Insert</span> → <span className="font-medium">Form Controls</span></p>
                                        <p>3. Add form fields and link them to cells</p>
                                      </div>
                                    </li>
                                  </ol>
                                </div>
                                
                                <div className="bg-yellow-50 p-4 rounded border border-yellow-100">
                                  <p className="text-sm font-medium text-yellow-800 mb-2">Pro Tips:</p>
                                  <ul className="list-disc ml-5 space-y-1 text-sm text-yellow-700">
                                    <li>Use <span className="font-mono text-xs bg-yellow-100 p-1 rounded">Data Validation</span> → <span className="font-mono text-xs bg-yellow-100 p-1 rounded">Input Message</span> to provide guidance for each field</li>
                                    <li>Create a <span className="font-mono text-xs bg-yellow-100 p-1 rounded">Custom Error Alert</span> for invalid entries</li>
                                    <li>Use <span className="font-mono text-xs bg-yellow-100 p-1 rounded">INDIRECT</span> for dependent dropdowns (e.g., subcategories)</li>
                                    <li>Add <span className="font-mono text-xs bg-yellow-100 p-1 rounded">Data Validation</span> → <span className="font-mono text-xs bg-yellow-100 p-1 rounded">Custom</span> with formula <span className="font-mono text-xs bg-yellow-100 p-1 rounded">=COUNTIF($A$2:$A$100,A2)=1</span> to prevent duplicate entries</li>
                                    <li>Protect workbook structure to prevent sheet deletion/insertion</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Exercise 8: Complex Table Design */}
                          <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20 mt-6">
                            <h4 className="font-semibold mb-3">Exercise 8: Complex Table Design</h4>
                            
                            <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium">Quarterly Sales Report</h5>
                                <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                  const templateData = [
                                    ['Region', 'Category', 'Q1 (ZAR)', 'Q2 (ZAR)', 'Q3 (ZAR)', 'Q4 (ZAR)', 'YTD Total (ZAR)', 'YoY Growth'],
                                    ['Gauteng', 'Electronics', '2452500', '2678900', '2894500', '3103000', '', '12.5%'],
                                    ['', 'Furniture', '1897500', '1923000', '1956000', '2102500', '', '8.2%'],
                                    ['', 'Office Supplies', '945200', '942800', '948500', '952300', '', '5.7%'],
                                    ['', 'Region Total', '', '', '', '', '', '9.8%'],
                                    ['Western Cape', 'Electronics', '2325000', '2452000', '2587500', '2753000', '', '10.2%'],
                                    ['', 'Furniture', '1783000', '1814500', '1892000', '1956000', '', '6.8%'],
                                    ['', 'Office Supplies', '841200', '839800', '842100', '845750', '', '-2.3%'],
                                    ['', 'Region Total', '', '', '', '', '', '7.6%'],
                                    ['KwaZulu-Natal', 'Electronics', '2256000', '2382000', '2458000', '2624000', '', '11.8%'],
                                    ['', 'Furniture', '1856000', '1879000', '1914000', '1987000', '', '7.9%'],
                                    ['', 'Office Supplies', '839800', '841200', '843500', '847800', '', '3.2%'],
                                    ['', 'Region Total', '', '', '', '', '', '8.7%'],
                                    ['Eastern Cape', 'Electronics', '1423000', '1567000', '1682000', '1856000', '', '13.1%'],
                                    ['', 'Furniture', '912000', '935000', '968000', '1042000', '', '9.2%'],
                                    ['', 'Office Supplies', '746700', '745200', '748900', '752700', '', '4.8%'],
                                    ['', 'Region Total', '', '', '', '', '', '10.5%'],
                                    ['Grand Total', '', '', '', '', '', '', '9.8%']
                                  ];
                                  
                                  // Convert to tab-separated values
                                  const tsv = templateData.map(row => row.join('\t')).join('\n');
                                  await copyToClipboard(tsv);
                                }}>
                                  <Copy className="h-4 w-4 mr-1" />
                                  <span className="text-xs">Copy Instructions</span>
                                </Button>
                              </div>
                              <div className="p-4 border border-gray-200 rounded">
                                <p className="text-sm">In this exercise, you'll create a professional quarterly sales report with advanced table formatting, including:</p>
                                <ul className="list-disc ml-5 text-xs space-y-1 mt-2">
                                  <li>Region sections (North, South, East, West)</li>
                                  <li>Product categories (Electronics, Furniture, Office Supplies, etc.)</li>
                                  <li>Quarterly data (Q1-Q4 2023)</li>
                                  <li>YTD totals and growth percentages</li>
                                  <li>Visual indicators for performance metrics</li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <p className="text-sm font-medium">Instructions:</p>
                              <ol className="list-decimal ml-5 space-y-2 text-sm">
                                <li>Create a new Excel workbook for a quarterly sales report</li>
                                <li>Design a professional table with the following features:</li>
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Multi-level headers with regions and product categories</li>
                                  <li>Merged cells for category groupings</li>
                                  <li>Quarterly columns (Q1-Q4) and YTD summary</li>
                                  <li>Consistent color scheme and font formatting</li>
                                  <li>Alternating row colors for readability</li>
                                </ul>
                                <li>Format the table as an official Excel Table (Insert {'>'} Table)</li>
                                <li>Add custom table styles with:</li>
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Header row with bold white text on dark background</li>
                                  <li>First column emphasized</li>
                                  <li>Banded rows for readability</li>
                                  <li>Total row with different formatting</li>
                                </ul>
                                <li>Insert subtotal rows for each region and product category</li>
                                <li>Create a separate totals section with summary calculations</li>
                                <li>Apply cell borders strategically to improve visual organization</li>
                                <li>Add appropriate number formats for currency and percentage values</li>
                              </ol>
                              <p className="text-sm mt-2 italic">Hint: Use 'Format as Table' and Table Design tools to quickly apply professional formatting</p>
                            </div>

                            {/* Solutions Table */}
                            <div className="mt-6">
                              <h5 className="font-semibold text-excel-blue mb-3">Solution Example</h5>
                              
                              {/* Table Structure and Formatting */}
                              <div className="bg-blue-50 p-4 rounded border border-blue-100 mb-6">
                                <p className="text-sm font-medium text-blue-800 mb-2">Table Structure and Formatting:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <p className="font-medium text-sm mb-1">Table Elements:</p>
                                    <ul className="list-disc ml-5 text-sm space-y-1">
                                      <li>Table Style: Medium 9 (or custom style with blue accents)</li>
                                      <li>Header Row: Bold white text on dark blue background</li>
                                      <li>First Column: Bold text for better readability</li>
                                      <li>Banded Rows: Light gray alternating rows</li>
                                      <li>Total Row: Darker background with bold text</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <p className="font-medium text-sm mb-1">Number Formatting:</p>
                                    <ul className="list-disc ml-5 text-sm space-y-1">
                                      <li>Sales: <span className="font-mono text-xs">#,##0_);(#,##0)</span></li>
                                      <li>Percentages: <span className="font-mono text-xs">0.0%;-0.0%;-</span></li>
                                      <li>Currency: <span className="font-mono text-xs">$#,##0_);($#,##0)</span></li>
                                      <li>Growth: <span className="font-mono text-xs">+0.0%;-0.0%;-</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              {/* Formatted Table Example */}
                              <div className="bg-white p-4 rounded border border-gray-200 mb-6">
                                <p className="text-sm font-medium text-gray-800 mb-3">Quarterly Sales Report Example:</p>
                                <div className="overflow-x-auto">
                                  <table className="min-w-full text-xs border-collapse">
                                    <colgroup>
                                      <col className="w-32" />
                                      <col className="w-20" />
                                      <col className="w-20" />
                                      <col className="w-20" />
                                      <col className="w-20" />
                                      <col className="w-20" />
                                      <col className="w-24" />
                                      <col className="w-24" />
                                    </colgroup>
                                    <thead>
                                      <tr className="bg-blue-800 text-white">
                                        <th colSpan={2} className="border p-2 text-left">Region / Category</th>
                                        <th colSpan={4} className="border p-2 text-center">2024 Quarterly Sales (ZAR)</th>
                                        <th colSpan={2} className="border p-2 text-center">YTD Performance</th>
                                      </tr>
                                      <tr className="bg-blue-700 text-white">
                                        <th className="border p-2 text-left">Region</th>
                                        <th className="border p-2 text-left">Category</th>
                                        <th className="border p-2 text-right">Q1 (ZAR)</th>
                                        <th className="border p-2 text-right">Q2 (ZAR)</th>
                                        <th className="border p-2 text-right">Q3 (ZAR)</th>
                                        <th className="border p-2 text-right">Q4 (ZAR)</th>
                                        <th className="border p-2 text-right">Total (ZAR)</th>
                                        <th className="border p-2 text-right">YoY Growth</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {/* North Region */}
                                      <tr className="bg-blue-50 font-semibold">
                                        <td className="border p-2" rowSpan={4}>Gauteng</td>
                                        <td className="border p-2">Electronics</td>
                                        <td className="border p-2 text-right">R 2,569,500</td>
                                        <td className="border p-2 text-right">R 2,812,845</td>
                                        <td className="border p-2 text-right">R 2,894,500</td>
                                        <td className="border p-2 text-right">R 3,103,000</td>
                                        <td className="border p-2 text-right font-medium">R 11,126,400</td>
                                        <td className="border p-2 text-right text-green-600">+12.5%</td>
                                      </tr>
                                      <tr className="hover:bg-gray-50">
                                        <td className="border p-2">Furniture</td>
                                        <td className="border p-2 text-right">R 2,052,900</td>
                                        <td className="border p-2 text-right">R 2,085,500</td>
                                        <td className="border p-2 text-right">R 1,956,000</td>
                                        <td className="border p-2 text-right">R 2,102,500</td>
                                        <td className="border p-2 text-right font-medium">R 7,879,000</td>
                                        <td className="border p-2 text-right text-green-600">+8.2%</td>
                                      </tr>
                                      <tr className="hover:bg-gray-50">
                                        <td className="border p-2">Office Supplies</td>
                                        <td className="border p-2 text-right">R 998,500</td>
                                        <td className="border p-2 text-right">R 985,200</td>
                                        <td className="border p-2 text-right">R 948,500</td>
                                        <td className="border p-2 text-right">R 952,300</td>
                                        <td className="border p-2 text-right font-medium">R 3,788,800</td>
                                        <td className="border p-2 text-right text-green-600">+5.7%</td>
                                      </tr>
                                      <tr className="bg-gray-100 font-semibold">
                                        <td className="border p-2">Region Total</td>
                                        <td className="border p-2 text-right">R 5,292,700</td>
                                        <td className="border p-2 text-right">R 5,544,700</td>
                                        <td className="border p-2 text-right">R 5,799,000</td>
                                        <td className="border p-2 text-right">R 6,157,800</td>
                                        <td className="border p-2 text-right bg-blue-100">R 22,794,200</td>
                                        <td className="border p-2 text-right text-green-600 font-medium">+9.8%</td>
                                      </tr>
                                      
                                      {/* East Region */}
                                      <tr className="bg-blue-50 font-semibold">
                                        <td className="border p-2" rowSpan={4}>Western Cape</td>
                                        <td className="border p-2">Electronics</td>
                                        <td className="border p-2 text-right">R 2,541,000</td>
                                        <td className="border p-2 text-right">R 2,673,200</td>
                                        <td className="border p-2 text-right">R 2,587,500</td>
                                        <td className="border p-2 text-right">R 2,753,000</td>
                                        <td className="border p-2 text-right font-medium">R 10,117,500</td>
                                        <td className="border p-2 text-right text-green-600">+10.2%</td>
                                      </tr>
                                      <tr className="hover:bg-gray-50">
                                        <td className="border p-2">Furniture</td>
                                        <td className="border p-2 text-right">R 12,008,000</td>
                                        <td className="border p-2 text-right">R 12,753,700</td>
                                        <td className="border p-2 text-right">R 10,929,900</td>
                                        <td className="border p-2 text-right">R 11,336,545</td>
                                        <td className="border p-2 text-right font-medium">R 7,445,500</td>
                                        <td className="border p-2 text-right text-green-600">+6.8%</td>
                                      </tr>
                                      <tr className="hover:bg-gray-50">
                                        <td className="border p-2">Office Supplies</td>
                                        <td className="border p-2 text-right">R 821,900</td>
                                        <td className="border p-2 text-right">R 820,300</td>
                                        <td className="border p-2 text-right">R 842,100</td>
                                        <td className="border p-2 text-right">R 845,750</td>
                                        <td className="border p-2 text-right font-medium">R 3,368,850</td>
                                        <td className="border p-2 text-right text-red-600">-2.3%</td>
                                      </tr>
                                      <tr className="bg-gray-100 font-semibold">
                                        <td className="border p-2">Region Total</td>
                                        <td className="border p-2 text-right">R 4,949,200</td>
                                        <td className="border p-2 text-right">R 5,106,300</td>
                                        <td className="border p-2 text-right">R 5,321,600</td>
                                        <td className="border p-2 text-right">R 5,554,750</td>
                                        <td className="border p-2 text-right bg-blue-100">R 20,931,850</td>
                                        <td className="border p-2 text-right text-green-600 font-medium">+7.6%</td>
                                      </tr>
                                    </tbody>
                                    <tfoot className="bg-blue-800 text-white font-semibold">
                                      <tr>
                                        <td className="border p-2 font-semibold">Grand Total</td>
                                        <td className="border p-2 text-right font-semibold">R 10,241,900</td>
                                        <td className="border p-2 text-right font-semibold">R 10,651,000</td>
                                        <td className="border p-2 text-right font-semibold">R 11,120,600</td>
                                        <td className="border p-2 text-right font-semibold">R 11,712,550</td>
                                        <td className="border p-2 text-right font-semibold bg-blue-200">R 48,027,145</td>
                                        <td className="border p-2 text-right font-semibold text-green-600">+9.8%</td>
                                      </tr>
                                    </tfoot>
                                  </table>
                                </div>
                                <div className="mt-3 flex flex-wrap gap-4 text-xs">
                                  <div className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-100 border border-blue-300 mr-1"></div>
                                    <span>Region Headers</span>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-50 border border-blue-200 mr-1"></div>
                                    <span>Category Rows</span>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="w-3 h-3 bg-gray-100 border border-gray-300 mr-1"></div>
                                    <span>Region Totals</span>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-100 border border-green-300 mr-1"></div>
                                    <span>Positive Growth</span>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="w-3 h-3 bg-red-100 border border-red-300 mr-1"></div>
                                    <span>Negative Growth</span>
                                  </div>
                                </div>
                              </div>

                              {/* Step-by-Step Instructions */}
                              <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded border border-blue-100">
                                  <p className="text-sm font-medium text-blue-800 mb-2">Step-by-Step Instructions:</p>
                                  <ol className="list-decimal ml-5 space-y-3 text-sm">
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Set Up Table Structure:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Enter headers: Region, Category, Q1, Q2, Q3, Q4, YTD Total, YoY Growth</p>
                                        <p>2. Merge cells for multi-level headers as shown in the example</p>
                                        <p>3. Select the data range and press <span className="font-mono text-xs bg-white p-1 rounded border">Ctrl+T</span> to create a table</p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Apply Table Style:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Go to <span className="font-medium">Table Design</span> tab</p>
                                        <p>2. Select <span className="font-medium">Medium 9</span> style (or create custom style)</p>
                                        <p>3. Check: Header Row, First Column, Banded Rows, and Total Row</p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Add Formulas:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. YTD Total: <span className="font-mono text-xs bg-white p-1 rounded border">=SUM(Table1[@[Q1]:[Q4]])</span></p>
                                        <p>2. YoY Growth: <span className="font-mono text-xs bg-white p-1 rounded border">=(SUM(Table1[@[Q1]:[Q4]])/SUM(Table1[@[Q1]:[Q4]])-1)</span></p>
                                        <p>3. Region Totals: Use <span className="font-mono text-xs bg-white p-1 rounded border">SUBTOTAL(9,...)</span> for filtered data</p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Apply Conditional Formatting:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Select growth column → <span className="font-medium">Conditional Formatting</span> → <span className="font-medium">Icon Sets</span></p>
                                        <p>2. Add data bars to quarterly sales columns</p>
                                        <p>3. Highlight top/bottom performers with color scales</p>
                                      </div>
                                    </li>
                                    <li className="space-y-2">
                                      <p><span className="font-medium">Final Touches:</span></p>
                                      <div className="space-y-1 ml-4">
                                        <p>1. Adjust column widths for optimal display</p>
                                        <p>2. Freeze panes for horizontal and vertical scrolling</p>
                                        <p>3. Add a descriptive title and date stamp</p>
                                        <p>4. Set print area and add page headers/footers</p>
                                      </div>
                                    </li>
                                  </ol>
                                </div>
                                
                                <div className="bg-yellow-50 p-4 rounded border border-yellow-100">
                                  <p className="text-sm font-medium text-yellow-800 mb-2">Pro Tips:</p>
                                  <ul className="list-disc ml-5 space-y-1 text-sm text-yellow-700">
                                    <li>Use <span className="font-mono text-xs bg-yellow-100 p-1 rounded">Table Slicers</span> for interactive filtering by region or category</li>
                                    <li>Create <span className="font-mono text-xs bg-yellow-100 p-1 rounded">PivotTables</span> for dynamic analysis of the same data</li>
                                    <li>Add <span className="font-mono text-xs bg-yellow-100 p-1 rounded">Sparklines</span> to show trends in quarterly performance</li>
                                    <li>Use <span className="font-mono text-xs bg-yellow-100 p-1 rounded">Camera Tool</span> (from Quick Access Toolbar) to create dynamic snapshots</li>
                                    <li>Protect the sheet to prevent accidental changes to formulas and structure</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-excel-blue/5 p-6 rounded-lg border border-excel-blue/20 shadow-sm hover:shadow-md transition-shadow duration-200 mt-6">
                            <h4 className="text-lg font-semibold text-excel-blue mb-4 pb-2 border-b border-excel-blue/20">Exercise 9: Form Controls and Dynamic Formatting</h4>
                            
                            <div className="bg-white p-5 rounded-lg border border-gray-200 mb-5 shadow-inner">
                              <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                                <h5 className="font-semibold text-blue-800 mb-2 flex items-center">
                                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                  </svg>
                                  Objective
                                </h5>
                                <p className="text-sm text-gray-700 pl-6">
                                  Create an interactive sales dashboard with form controls and dynamic formatting to analyze regional sales performance. 
                                  The dashboard should allow users to filter data by region, product, and time period, with visual indicators for performance against targets.
                                </p>
                              </div>
                                
                                <div className="space-y-6">
                                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                    <h6 className="font-semibold text-base mb-3 text-gray-800 flex items-center">
                                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-2">1</span>
                                      Prepare the Data
                                    </h6>
                                    <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                                      <li>Copy the sales data template below into a new Excel worksheet named "Data"</li>
                                      <li>Convert the data into an Excel Table (Ctrl+T)</li>
                                      <li>Name the table "SalesData" in the Table Design tab</li>
                                    </ol>
                                  </div>

                                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                    <h6 className="font-semibold text-base mb-3 text-gray-800 flex items-center">
                                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-2">2</span>
                                      Set Up the Dashboard
                                    </h6>
                                    <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                                      <li>Insert a new worksheet and name it "Dashboard"</li>
                                      <li>Enable the Developer tab (File → Options → Customize Ribbon → Check 'Developer')</li>
                                    </ol>
                                  </div>

                                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                    <div className="flex items-start justify-between">
                                      <h6 className="font-semibold text-base mb-3 text-gray-800 flex items-center">
                                        <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-2">3</span>
                                        Create Form Controls
                                      </h6>
                                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Developer tab → Insert → Form Controls</span>
                                    </div>
                                    <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                                      <li>For Region Dropdown:
                                        <ul className="list-disc pl-5 mt-1 space-y-1">
                                          <li>Insert a Combo Box (Form Control)</li>
                                          <li>Right-click → Format Control → Set Input range to your regions list</li>
                                          <li>Set Cell link to a cell (e.g., $A$1)</li>
                                        </ul>
                                      </li>
                                      <li>For Product Dropdown:
                                        <ul className="list-disc pl-5 mt-1 space-y-1">
                                          <li>Insert another Combo Box</li>
                                          <li>Link it to your products list</li>
                                          <li>Set Cell link to another cell (e.g., $B$1)</li>
                                        </ul>
                                      </li>
                                      <li>For Time Period:
                                        <ul className="list-disc pl-5 mt-1 space-y-1">
                                          <li>Insert Option Buttons (Group Box first, then add buttons inside)</li>
                                          <li>Right-click → Format Control → Set Cell link to a cell (e.g., $C$1)</li>
                                          <li>Set values: 1 for Quarterly, 2 for Yearly</li>
                                        </ul>
                                      </li>
                                      <li>For Sales Target:
                                        <ul className="list-disc pl-5 mt-1 space-y-1">
                                          <li>Go to Developer tab → Insert → Scroll Bar (Form Control)</li>
                                          <li>Click and drag to draw the scroll bar on your worksheet</li>
                                          <li>Right-click the scroll bar and select 'Format Control'</li>
                                          <li>In the Control tab, set:
                                            <ul className="list-[circle] pl-5 mt-1 space-y-1">
                                              <li>Current value: 5,000,000 (this will be the starting value)</li>
                                              <li>Minimum value: 1,000,000</li>
                                              <li>Maximum value: 10,000,000</li>
                                              <li>Incremental change: 100,000 (how much it moves with arrows)</li>
                                              <li>Page change: 1,000,000 (how much it moves when you click the bar)</li>
                                            </ul>
                                          </li>
                                          <li>In the 'Cell link' box, enter: $D$1 (this cell will store the scroll bar's value)</li>
                                          <li>Click 'OK' to apply the settings</li>
                                          <li>Test the scroll bar by clicking the arrows or dragging the slider</li>
                                        </ul>
                                      </li>
                                    </ol>
                                  </div>

                                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                    <h6 className="font-semibold text-base mb-3 text-gray-800 flex items-center">
                                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-2">4</span>
                                      Set Up Named Ranges
                                    </h6>
                                    <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                                      <li>Go to Formulas → Name Manager → New</li>
                                      <li>Create these names:
                                        <ul className="list-disc pl-5 mt-1 space-y-1">
                                          <li>SelectedRegion: =INDEX(Data!$A$2:$A$100, Dashboard!$A$1)</li>
                                          <li>SelectedProduct: =INDEX(Data!$B$2:$B$100, Dashboard!$B$1)</li>
                                          <li>IsQuarterly: =Dashboard!$C$1=1</li>
                                          <li>SalesTarget: =Dashboard!$D$1</li>
                                        </ul>
                                      </li>
                                    </ol>
                                  </div>

                                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                    <h6 className="font-semibold text-base mb-3 text-gray-800 flex items-center">
                                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-2">5</span>
                                      Create the Dashboard
                                    </h6>
                                    <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                                      <li>Create a summary table with these headers: Region, Product, Q1, Q2, Q3, Q4, Total, % of Target</li>
                                      <li>Use these formulas:
                                        <ul className="list-disc pl-5 mt-1 space-y-1">
                                          <li>For Q1: =SUMIFS(Data!Q1, Data!Region, $A3, Data!Product, $B3)</li>
                                          <li>For Total: =SUM(C3:F3)</li>
                                          <li>For % of Target: =G3/SalesTarget</li>
                                        </ul>
                                      </li>
                                    </ol>
                                  </div>

                                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                    <h6 className="font-semibold text-base mb-3 text-gray-800 flex items-center">
                                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-2">6</span>
                                      Add Conditional Formatting
                                    </h6>
                                    <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                                      <li>Select the % of Target column</li>
                                      <li>Home → Conditional Formatting → New Rule</li>
                                      <li>Use these rules:
                                        <ul className="list-disc pl-5 mt-1 space-y-1">
                                          <li>≥110%: Green fill</li>
                                          <li>Between 90% and 110%: Yellow fill</li>
                                          <li>&lt;90%: Red fill</li>
                                        </ul>
                                      </li>
                                    </ol>
                                  </div>

                                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                    <h6 className="font-semibold text-base mb-3 text-gray-800 flex items-center">
                                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-2">7</span>
                                      Add Charts (Optional)
                                    </h6>
                                    <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                                      <li>Insert a PivotChart showing sales by region</li>
                                      <li>Add a line chart showing quarterly trends</li>
                                      <li>Link charts to your form controls using Slicers</li>
                                    </ol>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-8 pt-5 border-t border-gray-200">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                  <div>
                                    <h5 className="text-base font-semibold text-gray-800">Sales Data Template</h5>
                                    <p className="text-sm text-gray-600">Copy and paste this data into Excel</p>
                                  </div>
                                  <div className="mt-2 sm:mt-0">
                                    <Button 
                                      variant="outline" 
                                      size="sm" 
                                      className="bg-white hover:bg-gray-50 border-gray-300 text-gray-700"
                                      onClick={async () => {
                                        const tableData = [
                                          ['Region', 'Product', 'Q1', 'Q2', 'Q3', 'Q4'],
                                          ['Western Cape', 'Laptops', 'R1,234,567', 'R1,345,678', 'R1,456,789', 'R1,567,890'],
                                          ['Western Cape', 'Phones', 'R987,654', 'R876,543', 'R765,432', 'R654,321'],
                                          ['Gauteng', 'Laptops', 'R2,345,678', 'R2,456,789', 'R2,567,890', 'R2,678,901'],
                                          ['Gauteng', 'Phones', 'R1,876,543', 'R1,765,432', 'R1,654,321', 'R1,543,210'],
                                          ['KwaZulu-Natal', 'Laptops', 'R1,123,456', 'R1,234,567', 'R1,345,678', 'R1,456,789'],
                                          ['KwaZulu-Natal', 'Phones', 'R765,432', 'R876,543', 'R987,654', 'R1,098,765']
                                        ];
                                        const text = tableData.map(row => row.join('\t')).join('\n');
                                        try {
                                          await navigator.clipboard.writeText(text);
                                          // Show success message
                                          const button = document.getElementById('copy-template-btn');
                                          if (button) {
                                            const originalText = button.textContent;
                                            button.textContent = 'Copied!';
                                            button.className = 'h-8 px-3 text-xs bg-green-100 text-green-800 border-green-200 hover:bg-green-100';
                                            setTimeout(() => {
                                              button.textContent = originalText;
                                              button.className = 'h-8 px-3 text-xs';
                                            }, 2000);
                                          }
                                        } catch (err) {
                                          console.error('Failed to copy:', err);
                                        }
                                      }}
                                    >
                                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                      </svg>
                                      Copy Template
                                    </Button>
                                  </div>
                                </div>
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium">Sales Performance Dashboard</h5>
                                <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                  const templateData = [
                                    ['Region', 'Product', 'Q1', 'Q2', 'Q3', 'Q4', 'Total'],
                                    ['Gauteng', 'Laptops', 'R 1,250,000', 'R 1,450,000', 'R 1,320,000', 'R 1,680,000', ''],
                                    ['', 'Phones', 'R 980,000', 'R 1,120,000', 'R 1,050,000', 'R 1,350,000', ''],
                                    ['Western Cape', 'Laptops', 'R 1,100,000', 'R 1,250,000', 'R 1,180,000', 'R 1,520,000', ''],
                                    ['', 'Phones', 'R 850,000', 'R 980,000', 'R 920,000', 'R 1,180,000', ''],
                                    ['KZN', 'Laptops', 'R 1,350,000', 'R 1,520,000', 'R 1,450,000', 'R 1,820,000', ''],
                                    ['', 'Phones', 'R 1,050,000', 'R 1,180,000', 'R 1,120,000', 'R 1,420,000', ''],
                                    ['Eastern Cape', 'Laptops', 'R 980,000', 'R 1,120,000', 'R 1,050,000', 'R 1,350,000', ''],
                                    ['', 'Phones', 'R 750,000', 'R 850,000', 'R 820,000', 'R 1,050,000', '']
                                  ];
                                  
                                  const tsv = templateData.map(row => row.join('\t')).join('\n');
                                  await copyToClipboard(tsv);
                                }}>
                                  <Copy className="h-4 w-4 mr-1" />
                                  <span className="text-xs">Copy Template</span>
                                </Button>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Dashboard Controls Example */}
                                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                                  <h6 className="font-medium text-sm mb-3 text-gray-700">Dashboard Controls</h6>
                                  <div className="space-y-4">
                                    <div>
                                      <label className="block text-xs font-medium text-gray-700 mb-1">Region</label>
                                      <select className="w-full p-2 border rounded text-sm">
                                        <option>All Regions</option>
                                        <option>Gauteng</option>
                                        <option>Western Cape</option>
                                        <option>KZN</option>
                                        <option>Eastern Cape</option>
                                      </select>
                                    </div>
                                    <div>
                                      <label className="block text-xs font-medium text-gray-700 mb-1">Product</label>
                                      <select className="w-full p-2 border rounded text-sm">
                                        <option>All Products</option>
                                        <option>Laptops</option>
                                        <option>Phones</option>
                                      </select>
                                    </div>
                                    <div>
                                      <label className="block text-xs font-medium text-gray-700 mb-1">Time Period</label>
                                      <div className="flex space-x-2">
                                        <label className="inline-flex items-center">
                                          <input type="radio" name="period" className="h-4 w-4 text-blue-600" defaultChecked />
                                          <span className="ml-2 text-sm">Quarterly</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                          <input type="radio" name="period" className="h-4 w-4 text-blue-600" />
                                          <span className="ml-2 text-sm">Yearly</span>
                                        </label>
                                      </div>
                                    </div>
                                    <div>
                                      <label className="block text-xs font-medium text-gray-700 mb-1">
                                        Sales Target: <span className="font-normal">R 5,000,000</span>
                                      </label>
                                      <input type="range" min="1000000" max="10000000" step="500000" 
                                        defaultValue="5000000" 
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                                    </div>
                                  </div>
                                </div>

                                {/* Dynamic Formatting Example */}
                                <div>
                                  <h6 className="font-medium text-sm mb-3 text-gray-700">Dynamic Formatting Rules</h6>
                                  <div className="space-y-3">
                                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Above Target</span>
                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Green Fill</span>
                                      </div>
                                      <p className="text-xs text-gray-600 mt-1">Sales ≥ 110% of target</p>
                                    </div>
                                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Near Target</span>
                                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Amber Fill</span>
                                      </div>
                                      <p className="text-xs text-gray-600 mt-1">90% ≤ Sales {'<'} 110% of target</p>
                                    </div>
                                    <div className="p-3 bg-red-50 border border-red-200 rounded">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Below Target</span>
                                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Red Fill</span>
                                      </div>
                                      <p className="text-xs text-gray-600 mt-1">Sales {'<'} 90% of target</p>
                                    </div>
                                    <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Top Performer</span>
                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Blue Border</span>
                                      </div>
                                      <p className="text-xs text-gray-600 mt-1">Top 2 performing regions</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Step-by-Step Instructions */}
                              <div className="mt-6">
                                <h6 className="font-medium text-sm mb-2 text-gray-800">Instructions:</h6>
                                <ol className="list-decimal pl-5 space-y-2 text-sm">
                                  <li>Insert Form Controls from Developer Tab (Enable Developer tab first if not visible)</li>
                                  <li>Add Combo Boxes for Region and Product selection</li>
                                  <li>Insert Option Buttons for Time Period selection</li>
                                  <li>Add a Scroll Bar for Target adjustment</li>
                                  <li>Create Named Ranges for all dynamic elements</li>
                                  <li>Use OFFSET and MATCH functions for dynamic data retrieval</li>
                                  <li>Apply Conditional Formatting based on the rules shown</li>
                                  <li>Create a Dashboard Summary section with key metrics</li>
                                </ol>

                                <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
                                  <p className="text-sm font-medium text-yellow-800">Formulas Used:</p>
                                  <div className="mt-1 space-y-1">
                                    <p className="text-xs font-mono bg-gray-100 p-1 rounded">=OFFSET(A1, MATCH(SelectedRegion, RegionList, 0)-1, MATCH(SelectedProduct, ProductList, 0))</p>
                                    <p className="text-xs font-mono bg-gray-100 p-1 rounded">=IF(Sales{'>'}=Target*1.1, "Above", IF(Sales{'>'}=Target*0.9, "On Track", "Below"))</p>
                                    <p className="text-xs font-mono bg-gray-100 p-1 rounded">=RANK(AVG(Q1:Q4), SalesRange, 0) {'>'} 2</p>
                                  </div>
                                </div>
                              </div>

                              {/* Pro Tips */}
                              <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-100">
                                <h6 className="font-medium text-sm mb-2 text-blue-800">Pro Tips:</h6>
                                <ul className="list-disc ml-5 space-y-1 text-sm text-blue-700">
                                  <li>Group related form controls using Group Boxes for better organization</li>
                                  <li>Use Data Validation with INDIRECT for dependent dropdowns (e.g., filter products by region)</li>
                                  <li>Add Slicers for visual filtering (Excel 2013+)</li>
                                  <li>Use Camera Tool to create dynamic snapshots of key metrics</li>
                                  <li>Protect the worksheet but allow selection of unlocked cells for better user experience</li>
                                  <li>Add a Reset button using VBA to clear all filters with one click</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Exercise 10: Master Data Import and Cleaning */}
                          <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20 mt-6">
                            <h4 className="font-semibold mb-3">Exercise 10: Master Data Import and Cleaning</h4>
                            
                            <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium">Raw Customer Data Import</h5>
                                <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                  const tableData = [
                                    ['ID', 'CUSTOMER NAME', 'email', 'phone number', 'purchase date', 'PRODUCT', 'quantity', 'price', 'total', 'payment method', 'discount code', 'notes'],
                                    ['1001', 'john smith', 'johnsmith@email.com', '555-123-4567', '1/15/2023', 'laptop pro 13"', '1', 'R1,299.99', '', 'CREDIT', '10OFFNEW', 'first time customer'],
                                    ['1002', 'SARAH JONES', 'sarahjones@email.com', '5551234568', '02-21-2023', 'wireless headphones', '2', 'R89.95', '', 'debit', '', ''],
                                    ['1003', 'Bob Wilson', 'bob.wilson@email.com', '(555)123-4569', '3/10/23', 'external SSD 1TB', '1', 'R149.99', '', 'PayPal', 'SPRING15', ''],
                                    ['1004', 'maria garcia', 'maria_g@email.com', '555.123.4570', '04/05/2023', 'Smartphone Case', '3', 'R24.99', '', 'credit', '', 'wanted blue color'],
                                    ['1005', 'DAVID LEE', 'davidlee@email.com', '5551234571', '2023-05-12', 'wireless MOUSE', '1', 'R45.50', '', 'GIFT CARD', 'MEMBER20', ''],
                                    ['1006', 'jennifer brown', 'jen.brown@email.com', '555-123-4572', '06/18/23', 'monitor 24"', '2', 'R249.95', '', 'credit', '', 'business purchase'],
                                    ['1007', 'MICHAEL TAYLOR', 'michaelt@email.com', '555 123 4573', '7-22-2023', 'laptop CHARGER', '1', 'R59.99', '', 'debit', '', ''],
                                    ['1008', 'lisa zhang', 'lisa.z@email.com', '(555) 123-4574', '08/04/2023', 'tablet pro 10.2"', '1', 'R399.00', '', 'PayPal', 'SUMMER10', ''],
                                    ['1009', 'james wilson', 'jwilson@email.com', '555.123.4575', '9/16/23', 'Bluetooth SPEAKER', '2', 'R79.99', '', 'CREDIT', '', 'warranty extended'],
                                    ['1010', 'EMMA JOHNSON', 'emma.j@email.com', '555-123-4576', '10-30-2023', 'smart WATCH', '1', 'R199.95', '', 'gift card', 'FALL25', '']
                                  ].map(row => row.join('\t')).join('\n');
                                  await copyToClipboard(tableData);
                                }}>
                                  <Copy className="h-4 w-4 mr-1" />
                                  <span className="text-xs">Copy Raw Data</span>
                                </Button>
                              </div>
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="py-2 px-3 text-left">ID</th>
                                    <th className="py-2 px-3 text-left">CUSTOMER NAME</th>
                                    <th className="py-2 px-3 text-left">email</th>
                                    <th className="py-2 px-3 text-left">phone number</th>
                                    <th className="py-2 px-3 text-left">purchase date</th>
                                    <th className="py-2 px-3 text-left">PRODUCT</th>
                                    <th className="py-2 px-3 text-left">quantity</th>
                                    <th className="py-2 px-3 text-left">price</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">1001</td>
                                    <td className="py-2 px-3">john smith</td>
                                    <td className="py-2 px-3">johnsmith@email.com</td>
                                    <td className="py-2 px-3">555-123-4567</td>
                                    <td className="py-2 px-3">1/15/2023</td>
                                    <td className="py-2 px-3">laptop pro 13"</td>
                                    <td className="py-2 px-3">1</td>
                                    <td className="py-2 px-3">R1,299.99</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50 transition-colors">
                                    <td className="py-2 px-3">1002</td>
                                    <td className="py-2 px-3">SARAH JONES</td>
                                    <td className="py-2 px-3">sarahjones@email.com</td>
                                    <td className="py-2 px-3">5551234568</td>
                                    <td className="py-2 px-3">02-21-2023</td>
                                    <td className="py-2 px-3">wireless headphones</td>
                                    <td className="py-2 px-3">2</td>
                                    <td className="py-2 px-3">R89.95</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="space-y-3">
                              <p className="text-sm font-medium">Instructions:</p>
                              <ol className="list-decimal ml-5 space-y-2 text-sm">
                                <li>Create a new Excel workbook and import the raw customer data</li>
                                <li>Clean and standardize the data using various techniques:</li>
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Use PROPER() to standardize customer names</li>
                                  <li>Use Text to Columns to split full names into first and last name</li>
                                  <li>Use LOWER() for email addresses</li>
                                  <li>Create a custom function to standardize phone number formats</li>
                                  <li>Use Text functions to extract area codes from phone numbers</li>
                                </ul>
                                <li>Standardize date formats and extract month/quarter information</li>
                                <li>Clean product names using a combination of:</li>
                                <ul className="list-disc ml-5 mt-1">
                                  <li>PROPER() function</li>
                                  <li>Find and replace for common issues</li>
                                  <li>Flash Fill for pattern recognition</li>
                                  <li>Extracting product categories using text functions</li>
                                </ul>
                                <li>Calculate missing totals (quantity × price)</li>
                                <li>Standardize payment methods using data validation</li>
                                <li>Create a data cleaning dashboard that shows:</li>
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Before and after comparisons</li>
                                  <li>Data quality metrics</li>
                                  <li>Common data issues identified</li>
                                  <li>Cleaning operations performed</li>
                                </ul>
                              </ol>
                              <p className="text-sm mt-2 italic">Hint: Use Power Query (Get & Transform Data) for advanced data cleaning operations</p>
                            </div>

                            {/* Solutions Table */}
                            <div className="mt-6">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium">Expected Solution</h5>
                              </div>
                              <div className="bg-white p-4 rounded border border-green-200 overflow-x-auto">
                                <table className="min-w-full text-sm">
                                  <thead>
                                    <tr className="bg-green-50">
                                      <th className="py-2 px-3 text-left">Task</th>
                                      <th className="py-2 px-3 text-left">Solution Steps</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-t">
                                      <td className="py-2 px-3">Import Data</td>
                                      <td className="py-2 px-3">
                                        <ol className="list-decimal ml-5 space-y-1">
                                          <li>Copy the raw data from the exercise section</li>
                                          <li>Paste into a new Excel sheet using Paste Special &gt; Text</li>
                                          <li>Use Text to Columns with Tab as delimiter</li>
                                        </ol>
                                      </td>
                                    </tr>
                                    <tr className="border-t">
                                      <td className="py-2 px-3">Data Cleaning</td>
                                      <td className="py-2 px-3">
                                        <ol className="list-decimal ml-5 space-y-1">
                                          <li>Standardize date formats using Text to Columns &gt; Date: YMD</li>
                                          <li>Capitalize customer names using =PROPER() function</li>
                                          <li>Standardize phone numbers using =SUBSTITUTE() and =MID() functions</li>
                                          <li>Remove special characters from product names</li>
                                          <li>Calculate totals using =QUANTITY*PRICE</li>
                                        </ol>
                                      </td>
                                    </tr>
                                    <tr className="border-t">
                                      <td className="py-2 px-3">Data Validation</td>
                                      <td className="py-2 px-3">
                                        <ol className="list-decimal ml-5 space-y-1">
                                          <li>Add Data Validation for email format using =ISNUMBER(FIND("@", A1))</li>
                                          <li>Create dropdown lists for payment methods and discount codes</li>
                                          <li>Set minimum values for quantity and price</li>
                                        </ol>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>

                            {/* Sample Output Table */}
                            <div className="mt-8">
                              <h5 className="text-sm font-medium mb-3">Sample Output After Cleaning</h5>
                              <div className="bg-white p-4 rounded border border-blue-100 overflow-x-auto">
                                <table className="min-w-full text-xs border-collapse">
                                  <thead>
                                    <tr className="bg-blue-50">
                                      <th className="p-2 border text-left">Order Date</th>
                                      <th className="p-2 border text-left">Customer Name</th>
                                      <th className="p-2 border text-left">Email</th>
                                      <th className="p-2 border text-left">Phone (SA)</th>
                                      <th className="p-2 border text-left">Product</th>
                                      <th className="p-2 border text-right">Quantity</th>
                                      <th className="p-2 border text-right">Price</th>
                                      <th className="p-2 border text-right">Total</th>
                                      <th className="p-2 border text-left">Payment Method</th>
                                      <th className="p-2 border text-left">Discount Code</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="p-2 border">2025-01-15</td>
                                      <td className="p-2 border">John Smith</td>
                                      <td className="p-2 border">john.smith@email.com</td>
                                      <td className="p-2 border">+27 11 123 4567</td>
                                      <td className="p-2 border">Laptop</td>
                                      <td className="p-2 border text-right">2</td>
                                      <td className="p-2 border text-right whitespace-nowrap">R 15,999.00</td>
                                      <td className="p-2 border text-right font-medium whitespace-nowrap">R 31,998.00</td>
                                      <td className="p-2 border">Credit Card</td>
                                      <td className="p-2 border">SUMMER10</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="p-2 border">2025-01-16</td>
                                      <td className="p-2 border">Sarah Johnson</td>
                                      <td className="p-2 border">sarahj@email.com</td>
                                      <td className="p-2 border">+27 21 987 6543</td>
                                      <td className="p-2 border">Wireless Mouse</td>
                                      <td className="p-2 border text-right">5</td>
                                      <td className="p-2 border text-right whitespace-nowrap">R 849.99</td>
                                      <td className="p-2 border text-right font-medium whitespace-nowrap">R 4,249.95</td>
                                      <td className="p-2 border">PayPal</td>
                                      <td className="p-2 border">WELCOME15</td>
                                    </tr>
                                    <tr>
                                      <td className="p-2 border">2025-01-17</td>
                                      <td className="p-2 border">Michael Brown</td>
                                      <td className="p-2 border">michael.b@email.com</td>
                                      <td className="p-2 border">+27 31 456 7890</td>
                                      <td className="p-2 border">Keyboard</td>
                                      <td className="p-2 border text-right">3</td>
                                      <td className="p-2 border text-right whitespace-nowrap">R 1,299.99</td>
                                      <td className="p-2 border text-right font-medium whitespace-nowrap">R 3,899.97</td>
                                      <td className="p-2 border">Bank Transfer</td>
                                      <td className="p-2 border">-</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p className="text-xs text-gray-500 mt-2">
                                  Note: All monetary values are in South African Rand (ZAR). This is a sample of the expected output format. Your actual data will vary based on the raw input.
                                </p>
                              </div>
                            </div>

                          </div>
                        </>
                      )}

                      {currentTopic.id === "basics" && (
                        /* Exercise for Basics: Sales Data Analysis */
                        <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                          <h4 className="font-semibold mb-3">Exercise 1: Sales Data Analysis</h4>
                          
                          <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="text-sm font-medium">Monthly Sales Data</h5>
                              <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                                const tableData = [
                                  ['Product', 'Jan', 'Feb', 'Mar', 'Total'],
                                  ['Laptop', '45,000', '52,000', '48,000', ''],
                                  ['Smartphone', '38,000', '41,000', '45,000', ''],
                                  ['Tablet', '22,000', '25,000', '28,000', ''],
                                  ['Monthly Total', '', '', '', '']
                                ].map(row => row.join('\t')).join('\n');
                                await copyToClipboard(tableData);
                              }}>
                                <Copy className="h-4 w-4 mr-1" />
                                <span className="text-xs">Copy Data</span>
                              </Button>
                            </div>
                            <table className="min-w-full text-sm">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="py-2 px-3 text-left">Product</th>
                                  <th className="py-2 px-3 text-left">Jan</th>
                                  <th className="py-2 px-3 text-left">Feb</th>
                                  <th className="py-2 px-3 text-left">Mar</th>
                                  <th className="py-2 px-3 text-left">Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Laptop</td>
                                  <td className="py-2 px-3">45,000</td>
                                  <td className="py-2 px-3">52,000</td>
                                  <td className="py-2 px-3">48,000</td>
                                  <td className="py-2 px-3">?</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Smartphone</td>
                                  <td className="py-2 px-3">38,000</td>
                                  <td className="py-2 px-3">41,000</td>
                                  <td className="py-2 px-3">45,000</td>
                                  <td className="py-2 px-3">?</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Tablet</td>
                                  <td className="py-2 px-3">22,000</td>
                                  <td className="py-2 px-3">25,000</td>
                                  <td className="py-2 px-3">28,000</td>
                                  <td className="py-2 px-3">?</td>
                                </tr>
                                <tr className="border-t bg-gray-50">
                                  <td className="py-2 px-3 font-medium">Monthly Total</td>
                                  <td className="py-2 px-3">?</td>
                                  <td className="py-2 px-3">?</td>
                                  <td className="py-2 px-3">?</td>
                                  <td className="py-2 px-3">?</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          
                          <div className="space-y-3">
                            <p className="text-sm font-medium">Instructions:</p>
                            <ol className="list-decimal ml-5 space-y-2 text-sm">
                              <li>Create a new Excel workbook and enter the data above</li>
                              <li>Use SUM formulas to calculate the total sales for each product (row totals)</li>
                              <li>Use SUM formulas to calculate total sales for each month (column totals)</li>
                              <li>Format all sales figures as currency (Rand)</li>
                              <li>Add conditional formatting to highlight the highest monthly sales in green</li>
                            </ol>
                            <p className="text-sm mt-2 italic">Hint: For the conditional formatting, use the "Top 1" rule type</p>
                          </div>

                          {/* Solution Table */}
                          <div className="mt-6">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="text-sm font-medium">Expected Solution</h5>
                            </div>
                            <div className="bg-white p-4 rounded border border-green-200 overflow-x-auto">
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-green-50">
                                    <th className="py-2 px-3 text-left">Product</th>
                                    <th className="py-2 px-3 text-right">Jan</th>
                                    <th className="py-2 px-3 text-right">Feb</th>
                                    <th className="py-2 px-3 text-right">Mar</th>
                                    <th className="py-2 px-3 text-right">Total</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-t">
                                    <td className="py-2 px-3">Laptop</td>
                                    <td className="py-2 px-3 text-right">R 45,000</td>
                                    <td className="py-2 px-3 text-right bg-green-100 font-medium">R 52,000</td>
                                    <td className="py-2 px-3 text-right">R 48,000</td>
                                    <td className="py-2 px-3 text-right font-medium">R 145,000</td>
                                  </tr>
                                  <tr className="border-t">
                                    <td className="py-2 px-3">Smartphone</td>
                                    <td className="py-2 px-3 text-right">R 38,000</td>
                                    <td className="py-2 px-3 text-right">R 41,000</td>
                                    <td className="py-2 px-3 text-right bg-green-100 font-medium">R 45,000</td>
                                    <td className="py-2 px-3 text-right font-medium">R 124,000</td>
                                  </tr>
                                  <tr className="border-t">
                                    <td className="py-2 px-3">Tablet</td>
                                    <td className="py-2 px-3 text-right">R 22,000</td>
                                    <td className="py-2 px-3 text-right">R 25,000</td>
                                    <td className="py-2 px-3 text-right">R 28,000</td>
                                    <td className="py-2 px-3 text-right font-medium">R 75,000</td>
                                  </tr>
                                  <tr className="border-t bg-gray-50">
                                    <td className="py-2 px-3 font-medium">Monthly Total</td>
                                    <td className="py-2 px-3 text-right font-medium">R 105,000</td>
                                    <td className="py-2 px-3 text-right font-medium">R 118,000</td>
                                    <td className="py-2 px-3 text-right font-medium">R 121,000</td>
                                    <td className="py-2 px-3 text-right font-bold">R 344,000</td>
                                  </tr>
                                </tbody>
                              </table>
                              <p className="text-xs text-gray-500 mt-2">
                                <span className="inline-flex items-center">
                                  <span className="w-3 h-3 rounded-full bg-green-100 border border-green-300 mr-1"></span>
                                  Highest monthly sales for each product
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}



                      {/* Exercise 2 for Basics: Student Grades Calculator */}
                      {currentTopic.id === "basics" && (
                        <div className="bg-excel-green/10 p-6 rounded-lg border border-excel-green/20">
                          <h4 className="font-semibold mb-3">Exercise 2: Student Grades Calculator</h4>
                        
                        <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Student Test Scores</h5>
                            <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                              const tableData = [
                                ['Student', 'Test 1 (25%)', 'Test 2 (25%)', 'Final (50%)', 'Average', 'Grade'],
                                ['Thabo', '78', '82', '75', '', ''],
                                ['Lerato', '85', '90', '88', '', ''],
                                ['Sipho', '65', '72', '70', '', ''],
                                ['Nomsa', '92', '88', '95', '', ''],
                                ['Class Average', '', '', '', '', '']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-4 w-4 mr-1" />
                              <span className="text-xs">Copy Data</span>
                            </Button>
                          </div>
                          <table className="min-w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="py-2 px-3 text-left">Student</th>
                                <th className="py-2 px-3 text-left">Test 1 (25%)</th>
                                <th className="py-2 px-3 text-left">Test 2 (25%)</th>
                                <th className="py-2 px-3 text-left">Final (50%)</th>
                                <th className="py-2 px-3 text-left">Average</th>
                                <th className="py-2 px-3 text-left">Grade</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="py-2 px-3">Thabo</td>
                                <td className="py-2 px-3">78</td>
                                <td className="py-2 px-3">82</td>
                                <td className="py-2 px-3">75</td>
                                <td className="py-2 px-3">?</td>
                                <td className="py-2 px-3">?</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Lerato</td>
                                <td className="py-2 px-3">85</td>
                                <td className="py-2 px-3">90</td>
                                <td className="py-2 px-3">88</td>
                                <td className="py-2 px-3">?</td>
                                <td className="py-2 px-3">?</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Sipho</td>
                                <td className="py-2 px-3">65</td>
                                <td className="py-2 px-3">72</td>
                                <td className="py-2 px-3">70</td>
                                <td className="py-2 px-3">?</td>
                                <td className="py-2 px-3">?</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Nomsa</td>
                                <td className="py-2 px-3">92</td>
                                <td className="py-2 px-3">88</td>
                                <td className="py-2 px-3">95</td>
                                <td className="py-2 px-3">?</td>
                                <td className="py-2 px-3">?</td>
                              </tr>
                              <tr className="border-t bg-gray-50">
                                <td className="py-2 px-3 font-medium">Class Average</td>
                                <td className="py-2 px-3">?</td>
                                <td className="py-2 px-3">?</td>
                                <td className="py-2 px-3">?</td>
                                <td className="py-2 px-3">?</td>
                                <td className="py-2 px-3"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="bg-white p-4 rounded border border-gray-200 mb-4">
                          <h5 className="text-sm font-medium mb-2">Grading Scale</h5>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                            <div>90-100: A</div>
                            <div>80-89: B</div>
                            <div>70-79: C</div>
                            <div>60-69: D</div>
                            <div >Below 60: F</div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h3 className="text-sm font-semibold text-gray-800 mb-3">Instructions:</h3>
                            <ol className="list-decimal ml-5 space-y-3 text-sm text-gray-700">
                              <li>Create a new worksheet and enter the student data</li>
                              
                              <li>
                                Calculate the weighted average for each student:
                                <div className="mt-2 bg-blue-50 p-3 rounded-md border border-blue-100">
                                  <p className="font-mono text-xs text-blue-800 font-medium">
                                    Weighted Average = (Test1 × 0.25) + (Test2 × 0.25) + (Final × 0.5)
                                  </p>
                                  <p className="text-xs text-blue-600 mt-2 italic">
                                    <span className="font-medium">Example (Thabo):</span> (78×0.25) + (82×0.25) + (75×0.5) = 19.5 + 20.5 + 37.5 = <span className="font-bold">77.5</span>
                                  </p>
                                </div>
                              </li>
                              
                              <li>
                                Assign letter grades based on the weighted average:
                                <div className="mt-2 grid grid-cols-2 gap-1 text-xs bg-gray-50 p-2 rounded">
                                  <div className="flex items-center">
                                    <span className="w-12 font-medium">90-100%</span>
                                    <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 rounded">A</span>
                                  </div>
                                  <div className="flex items-center">
                                    <span className="w-12 font-medium">80-89%</span>
                                    <span className="ml-2 px-2 py-0.5 bg-green-50 text-green-700 rounded">B</span>
                                  </div>
                                  <div className="flex items-center">
                                    <span className="w-12 font-medium">70-79%</span>
                                    <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded">C</span>
                                  </div>
                                  <div className="flex items-center">
                                    <span className="w-12 font-medium">60-69%</span>
                                    <span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-800 rounded">D</span>
                                  </div>
                                  <div className="flex items-center">
                                    <span className="w-12 font-medium">Below 60%</span>
                                    <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-800 rounded">F</span>
                                  </div>
                                </div>
                              </li>
                              
                              <li>Calculate the class average for each test and the overall average using the AVERAGE function</li>
                              
                              <li>Apply conditional formatting to the grades column</li>
                            </ol>
                          </div>
                          
                          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <div className="flex items-start">
                              <div className="flex-shrink-0 mt-0.5">
                                <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="ml-3">
                                <h4 className="text-sm font-medium text-blue-800">Quick Tip</h4>
                                <div className="mt-1 text-sm text-blue-700">
                                  <p>Use this formula for the grade calculation:</p>
                                  <div className="mt-1 px-3 py-2 bg-white rounded border border-blue-200 text-xs font-mono text-blue-800 font-medium">
                                    =IF(average{'>'}=90,"A",IF(average{'>'}=80,"B",IF(average{'>'}=70,"C",IF(average{'>'}=60,"D","F"))))
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Solution Table */}
                        <div className="mt-6">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Expected Solution</h5>
                          </div>
                          <div className="bg-white p-4 rounded border border-green-200 overflow-x-auto">
                            <table className="min-w-full text-sm">
                              <thead>
                                <tr className="bg-green-50">
                                  <th className="py-2 px-3 text-left">Student</th>
                                  <th className="py-2 px-3 text-right">Test 1 (25%)</th>
                                  <th className="py-2 px-3 text-right">Test 2 (25%)</th>
                                  <th className="py-2 px-3 text-right">Final (50%)</th>
                                  <th className="py-2 px-3 text-right">Average</th>
                                  <th className="py-2 px-3 text-center">Grade</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Thabo</td>
                                  <td className="py-2 px-3 text-right">78</td>
                                  <td className="py-2 px-3 text-right">82</td>
                                  <td className="py-2 px-3 text-right">75</td>
                                  <td className="py-2 px-3 text-right font-medium">77.5</td>
                                  <td className="py-2 px-3 text-center font-medium bg-yellow-100">C</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Lerato</td>
                                  <td className="py-2 px-3 text-right">85</td>
                                  <td className="py-2 px-3 text-right">90</td>
                                  <td className="py-2 px-3 text-right">88</td>
                                  <td className="py-2 px-3 text-right font-medium">87.8</td>
                                  <td className="py-2 px-3 text-center font-medium bg-green-100">B</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Sipho</td>
                                  <td className="py-2 px-3 text-right">65</td>
                                  <td className="py-2 px-3 text-right">72</td>
                                  <td className="py-2 px-3 text-right">70</td>
                                  <td className="py-2 px-3 text-right font-medium">69.8</td>
                                  <td className="py-2 px-3 text-center font-medium bg-orange-100">D</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Nomsa</td>
                                  <td className="py-2 px-3 text-right">92</td>
                                  <td className="py-2 px-3 text-right">88</td>
                                  <td className="py-2 px-3 text-right">95</td>
                                  <td className="py-2 px-3 text-right font-medium">92.5</td>
                                  <td className="py-2 px-3 text-center font-medium bg-green-200">A</td>
                                </tr>
                                <tr className="border-t bg-gray-50">
                                  <td className="py-2 px-3 font-medium">Class Average</td>
                                  <td className="py-2 px-3 text-right font-medium">80.0</td>
                                  <td className="py-2 px-3 text-right font-medium">83.0</td>
                                  <td className="py-2 px-3 text-right font-medium">82.0</td>
                                  <td className="py-2 px-3 text-right font-bold">81.9</td>
                                  <td className="py-2 px-3 text-center font-bold">B</td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-4 text-xs">
                              <div className="flex items-center">
                                <span className="w-3 h-3 rounded-full bg-green-200 border border-green-300 mr-1"></span>
                                A (90-100)
                              </div>
                              <div className="flex items-center">
                                <span className="w-3 h-3 rounded-full bg-green-100 border border-green-200 mr-1"></span>
                                B (80-89)
                              </div>
                              <div className="flex items-center">
                                <span className="w-3 h-3 rounded-full bg-yellow-100 border border-yellow-200 mr-1"></span>
                                C (70-79)
                              </div>
                              <div className="flex items-center">
                                <span className="w-3 h-3 rounded-full bg-orange-100 border border-orange-200 mr-1"></span>
                                D (60-69)
                              </div>
                              <div className="flex items-center">
                                <span className="w-3 h-3 rounded-full bg-red-100 border border-red-200 mr-1"></span>
                                F (Below 60)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )}

                      {/* Exercise 3 for Basics: Budget Tracker */}
                      {currentTopic.id === "basics" && (
                        <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                          <h4 className="font-semibold text-lg mb-4">Exercise 3: Budget Tracker</h4>
                        
                          <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
                            <div className="flex items-center justify-between mb-3">
                              <h5 className="text-sm font-medium text-gray-700">Monthly Budget Data</h5>
                              <Button variant="outline" size="sm" className="h-8 px-3 text-xs" onClick={async () => {
                                const tableData = [
                                  ['Category', 'Planned', 'Actual', 'Difference', '% Variance', 'Status'],
                                  ['Rent', '12,000', '12,000', '', '', ''],
                                  ['Utilities', '3,500', '4,200', '', '', ''],
                                  ['Groceries', '5,000', '5,750', '', '', ''],
                                  ['Transportation', '2,000', '1,650', '', '', ''],
                                  ['Entertainment', '2,500', '3,100', '', '', ''],
                                  ['Total', '', '', '', '', '']
                                ].map(row => row.join('\t')).join('\n');
                                await copyToClipboard(tableData);
                              }}>
                                <Copy className="h-3.5 w-3.5 mr-1.5" />
                                <span>Copy Data</span>
                              </Button>
                            </div>
                            
                            <div className="overflow-x-auto">
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="py-2 px-3 text-left font-medium text-gray-700">Category</th>
                                    <th className="py-2 px-3 text-right font-medium text-gray-700">Planned</th>
                                    <th className="py-2 px-3 text-right font-medium text-gray-700">Actual</th>
                                    <th className="py-2 px-3 text-right font-medium text-gray-700">Difference</th>
                                    <th className="py-2 px-3 text-right font-medium text-gray-700">% Variance</th>
                                    <th className="py-2 px-3 text-center font-medium text-gray-700">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-t hover:bg-gray-50">
                                    <td className="py-2 px-3">Rent</td>
                                    <td className="py-2 px-3 text-right">12,000</td>
                                    <td className="py-2 px-3 text-right">12,000</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-center">?</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50">
                                    <td className="py-2 px-3">Utilities</td>
                                    <td className="py-2 px-3 text-right">3,500</td>
                                    <td className="py-2 px-3 text-right">4,200</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-center">?</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50">
                                    <td className="py-2 px-3">Groceries</td>
                                    <td className="py-2 px-3 text-right">5,000</td>
                                    <td className="py-2 px-3 text-right">5,750</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-center">?</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50">
                                    <td className="py-2 px-3">Transportation</td>
                                    <td className="py-2 px-3 text-right">2,000</td>
                                    <td className="py-2 px-3 text-right">1,650</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-center">?</td>
                                  </tr>
                                  <tr className="border-t hover:bg-gray-50">
                                    <td className="py-2 px-3">Entertainment</td>
                                    <td className="py-2 px-3 text-right">2,500</td>
                                    <td className="py-2 px-3 text-right">3,100</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-center">?</td>
                                  </tr>
                                  <tr className="border-t bg-gray-50 font-medium">
                                    <td className="py-2 px-3">Total</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-right">?</td>
                                    <td className="py-2 px-3 text-center"></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600">
                              <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-green-100 border border-green-300 mr-1.5"></span>
                                Under Budget (Positive Difference)
                              </div>
                              <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-red-100 border border-red-300 mr-1.5"></span>
                                Over Budget (Negative Difference)
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <h3 className="text-sm font-semibold text-gray-800 mb-3">Instructions:</h3>
                              <ol className="list-decimal ml-5 space-y-3 text-sm text-gray-700">
                                <li>Create a new worksheet and enter the budget data</li>
                                
                                <li>
                                  Calculate the difference for each category:
                                  <div className="mt-2 bg-blue-50 p-3 rounded-md border border-blue-100">
                                    <p className="font-mono text-xs text-blue-800 font-medium">
                                      Difference = Actual - Planned
                                    </p>
                                    <p className="text-xs text-blue-600 mt-2 italic">
                                      <span className="font-medium">Example (Utilities):</span> 4,200 - 3,500 = <span className="font-bold">-700</span> (Over Budget)
                                    </p>
                                  </div>
                                </li>
                                
                                <li>
                                  Calculate the percentage variance:
                                  <div className="mt-2 bg-blue-50 p-3 rounded-md border border-blue-100">
                                    <p className="font-mono text-xs text-blue-800 font-medium">
                                      % Variance = (Difference / Planned) * 100
                                    </p>
                                    <p className="text-xs text-blue-600 mt-2 italic">
                                      <span className="font-medium">Example (Utilities):</span> (-700 / 3,500) * 100 = <span className="font-bold">-20%</span>
                                    </p>
                                  </div>
                                </li>
                                
                                <li>
                                  Use an IF function for the Status column:
                                  <div className="mt-2 bg-blue-50 p-3 rounded-md border border-blue-100">
                                    <p className="font-mono text-xs text-blue-800 font-medium">
                                      =IF(Difference{'>'}=0, "Under Budget", "Over Budget")
                                    </p>
                                  </div>
                                </li>
                                
                                <li>Add conditional formatting to highlight over/under budget items</li>
                                <li>Add data bars to visually represent the variance percentages</li>
                              </ol>
                              <p className="text-sm mt-4 italic text-gray-600">
                                Hint: For percentage variance, format the cells with percentage format
                              </p>
                            </div>
                            
                            {/* Solution Table */}
                            <div className="mt-8">
                              <div className="flex items-center justify-between mb-3">
                                <h5 className="text-sm font-medium text-gray-700">Expected Solution</h5>
                              </div>
                              <div className="bg-white p-4 rounded-lg border border-green-200">
                                <div className="overflow-x-auto">
                                  <table className="min-w-full text-sm">
                                    <thead>
                                      <tr className="bg-green-50">
                                        <th className="py-2 px-3 text-left font-medium text-gray-700">Category</th>
                                        <th className="py-2 px-3 text-right font-medium text-gray-700">Planned</th>
                                        <th className="py-2 px-3 text-right font-medium text-gray-700">Actual</th>
                                        <th className="py-2 px-3 text-right font-medium text-gray-700">Difference</th>
                                        <th className="py-2 px-3 text-right font-medium text-gray-700">% Variance</th>
                                        <th className="py-2 px-3 text-center font-medium text-gray-700">Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="border-t">
                                        <td className="py-2 px-3">Rent</td>
                                        <td className="py-2 px-3 text-right">12,000</td>
                                        <td className="py-2 px-3 text-right">12,000</td>
                                        <td className="py-2 px-3 text-right">0</td>
                                        <td className="py-2 px-3 text-right">0.0%</td>
                                        <td className="py-2 px-3 text-center bg-green-50">On Budget</td>
                                      </tr>
                                      <tr className="border-t">
                                        <td className="py-2 px-3">Utilities</td>
                                        <td className="py-2 px-3 text-right">3,500</td>
                                        <td className="py-2 px-3 text-right">4,200</td>
                                        <td className="py-2 px-3 text-right text-red-600">-700</td>
                                        <td className="py-2 px-3 text-right text-red-600">-20.0%</td>
                                        <td className="py-2 px-3 text-center bg-red-50 text-red-700">Over Budget</td>
                                      </tr>
                                      <tr className="border-t">
                                        <td className="py-2 px-3">Groceries</td>
                                        <td className="py-2 px-3 text-right">5,000</td>
                                        <td className="py-2 px-3 text-right">5,750</td>
                                        <td className="py-2 px-3 text-right text-red-600">-750</td>
                                        <td className="py-2 px-3 text-right text-red-600">-15.0%</td>
                                        <td className="py-2 px-3 text-center bg-red-50 text-red-700">Over Budget</td>
                                      </tr>
                                      <tr className="border-t">
                                        <td className="py-2 px-3">Transportation</td>
                                        <td className="py-2 px-3 text-right">2,000</td>
                                        <td className="py-2 px-3 text-right">1,650</td>
                                        <td className="py-2 px-3 text-right text-green-600">350</td>
                                        <td className="py-2 px-3 text-right text-green-600">17.5%</td>
                                        <td className="py-2 px-3 text-center bg-green-50 text-green-700">Under Budget</td>
                                      </tr>
                                      <tr className="border-t">
                                        <td className="py-2 px-3">Entertainment</td>
                                        <td className="py-2 px-3 text-right">2,500</td>
                                        <td className="py-2 px-3 text-right">3,100</td>
                                        <td className="py-2 px-3 text-right text-red-600">-600</td>
                                        <td className="py-2 px-3 text-right text-red-600">-24.0%</td>
                                        <td className="py-2 px-3 text-center bg-red-50 text-red-700">Over Budget</td>
                                      </tr>
                                      <tr className="border-t bg-gray-50 font-medium">
                                        <td className="py-2 px-3">Total</td>
                                        <td className="py-2 px-3 text-right">25,000</td>
                                        <td className="py-2 px-3 text-right">26,700</td>
                                        <td className="py-2 px-3 text-right text-red-600">-1,700</td>
                                        <td className="py-2 px-3 text-right text-red-600">-6.8%</td>
                                        <td className="py-2 px-3 text-center"></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                
                                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600">
                                  <div className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-green-100 border border-green-300 mr-1.5"></span>
                                    Under Budget (Positive Difference)
                                  </div>
                                  <div className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-red-100 border border-red-300 mr-1.5"></span>
                                    Over Budget (Negative Difference)
                                  </div>
                                </div>
                                
                                <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-100">
                                  <h4 className="text-xs font-medium text-blue-800 mb-2">Key Formulas:</h4>
                                  <ul className="space-y-1 text-xs">
                                    <li className="flex">
                                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-blue-200 text-blue-700">=C2-B2</span>
                                      <span className="ml-2 text-gray-700">Difference (Actual - Planned)</span>
                                    </li>
                                    <li className="flex">
                                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-blue-200 text-blue-700">=D2/B2</span>
                                      <span className="ml-2 text-gray-700">% Variance (Format as percentage)</span>
                                    </li>
                                    <li className="flex">
                                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-blue-200 text-blue-700">=IF(D2{'>'}=0,"Under Budget","Over Budget")</span>
                                      <span className="ml-2 text-gray-700">Status</span>
                                    </li>
                                    <li className="flex">
                                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-blue-200 text-blue-700">=SUM(B2:B6)</span>
                                      <span className="ml-2 text-gray-700">Total Planned</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      )}

                      {/* Exercise 4 for Basics: Inventory Management */}
                      {currentTopic.id === "basics" && (
                      <div className="bg-excel-green/10 p-6 rounded-lg border border-excel-green/20">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Exercise 4: Inventory Management</h4>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6 shadow-sm">
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="text-sm font-medium text-gray-700">Inventory Data</h5>
                            <Button variant="outline" size="sm" className="h-8 px-3" onClick={async () => {
                              const tableData = [
                                ['Item ID', 'Item Name', 'Category', 'Quantity', 'Unit Price', 'Total Value', 'Reorder?'],
                                ['A001', 'Printer Paper', 'Office', '45', '65.00', '', ''],
                                ['B023', 'Laptop Stand', 'Electronics', '12', '350.00', '', ''],
                                ['A052', 'Stapler', 'Office', '8', '45.00', '', ''],
                                ['C107', 'USB Mouse', 'Electronics', '22', '175.00', '', ''],
                                ['D015', 'Whiteboard', 'Office', '5', '1,200.00', '', '']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-3.5 w-3.5 mr-1.5" />
                              <span className="text-xs">Copy Data</span>
                            </Button>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="py-2 px-3 text-left font-medium text-gray-700">Item ID</th>
                                  <th className="py-2 px-3 text-left font-medium text-gray-700">Item Name</th>
                                  <th className="py-2 px-3 text-left font-medium text-gray-700">Category</th>
                                  <th className="py-2 px-3 text-right font-medium text-gray-700">Quantity</th>
                                  <th className="py-2 px-3 text-right font-medium text-gray-700">Unit Price</th>
                                  <th className="py-2 px-3 text-right font-medium text-gray-700">Total Value</th>
                                  <th className="py-2 px-3 text-center font-medium text-gray-700">Reorder?</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t hover:bg-gray-50">
                                  <td className="py-2 px-3">A001</td>
                                  <td className="py-2 px-3">Printer Paper</td>
                                  <td className="py-2 px-3">Office</td>
                                  <td className="py-2 px-3 text-right">45</td>
                                  <td className="py-2 px-3 text-right">65.00</td>
                                  <td className="py-2 px-3 text-right">?</td>
                                  <td className="py-2 px-3 text-center">?</td>
                                </tr>
                                <tr className="border-t hover:bg-gray-50">
                                  <td className="py-2 px-3">B023</td>
                                  <td className="py-2 px-3">Laptop Stand</td>
                                  <td className="py-2 px-3">Electronics</td>
                                  <td className="py-2 px-3 text-right">12</td>
                                  <td className="py-2 px-3 text-right">350.00</td>
                                  <td className="py-2 px-3 text-right">?</td>
                                  <td className="py-2 px-3 text-center">?</td>
                                </tr>
                                <tr className="border-t hover:bg-gray-50">
                                  <td className="py-2 px-3">A052</td>
                                  <td className="py-2 px-3">Stapler</td>
                                  <td className="py-2 px-3">Office</td>
                                  <td className="py-2 px-3 text-right">8</td>
                                  <td className="py-2 px-3 text-right">45.00</td>
                                  <td className="py-2 px-3 text-right">?</td>
                                  <td className="py-2 px-3 text-center">?</td>
                                </tr>
                                <tr className="border-t hover:bg-gray-50">
                                  <td className="py-2 px-3">C107</td>
                                  <td className="py-2 px-3">USB Mouse</td>
                                  <td className="py-2 px-3">Electronics</td>
                                  <td className="py-2 px-3 text-right">22</td>
                                  <td className="py-2 px-3 text-right">175.00</td>
                                  <td className="py-2 px-3 text-right">?</td>
                                  <td className="py-2 px-3 text-center">?</td>
                                </tr>
                                <tr className="border-t hover:bg-gray-50">
                                  <td className="py-2 px-3">D015</td>
                                  <td className="py-2 px-3">Whiteboard</td>
                                  <td className="py-2 px-3">Office</td>
                                  <td className="py-2 px-3 text-right">5</td>
                                  <td className="py-2 px-3 text-right">1,200.00</td>
                                  <td className="py-2 px-3 text-right">?</td>
                                  <td className="py-2 px-3 text-center">?</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6 shadow-sm">
                          <h5 className="text-sm font-medium text-gray-700 mb-3">Reorder Points</h5>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-3 rounded border border-blue-100">
                              <div className="text-sm font-medium text-blue-800">Office Items</div>
                              <div className="text-2xl font-bold text-blue-600">10 units</div>
                              <p className="text-xs text-blue-600 mt-1">Reorder when quantity is at or below this level</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded border border-purple-100">
                              <div className="text-sm font-medium text-purple-800">Electronics</div>
                              <div className="text-2xl font-bold text-purple-600">15 units</div>
                              <p className="text-xs text-purple-600 mt-1">Reorder when quantity is at or below this level</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-5 rounded-lg border border-gray-200 mb-6 shadow-sm">
                          <h5 className="text-sm font-medium text-gray-700 mb-3">Step-by-Step Instructions:</h5>
                          
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <h6 className="font-semibold text-sm">1. Set Up Reorder Points Table</h6>
                              <div className="bg-blue-50 p-3 rounded-md border border-blue-100 text-sm">
                                <p>Create this table in cells I1:J3:</p>
                                <table className="mt-2 w-full border-collapse">
                                  <thead>
                                    <tr className="bg-blue-100">
                                      <th className="border border-blue-200 p-1 text-left">Category</th>
                                      <th className="border border-blue-200 p-1 text-left">Reorder Point</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="border border-blue-200 p-1">Office</td>
                                      <td className="border border-blue-200 p-1">10</td>
                                    </tr>
                                    <tr>
                                      <td className="border border-blue-200 p-1">Electronics</td>
                                      <td className="border border-blue-200 p-1">15</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p className="mt-2 text-xs text-blue-700">Name this range: Select I1:J3 → go to Formulas → Define Name → Enter "ReorderTable"</p>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <h6 className="font-semibold text-sm">2. Calculate Total Value</h6>
                              <div className="bg-green-50 p-3 rounded-md border border-green-100">
                                <p className="font-mono text-sm text-green-800">=D2*E2</p>
                                <p className="text-xs text-green-700 mt-1">• Enter in cell F2, then drag down</p>
                                <p className="text-xs text-green-700">• Format as Currency (Ctrl+Shift+$)</p>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <h6 className="font-semibold text-sm">3. Set Up Reorder Status</h6>
                              <div className="bg-purple-50 p-3 rounded-md border border-purple-100">
                                <p className="font-mono text-sm text-purple-800">=IF(D2{'<'}=VLOOKUP(C2,ReorderTable,2,FALSE),"Yes","No")</p>
                                <p className="text-xs text-purple-700 mt-1">• Enter in cell G2, then drag down</p>
                                <p className="text-xs text-purple-700">• This checks if quantity is at or below the reorder point</p>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <h6 className="font-semibold text-sm">4. Add Conditional Formatting</h6>
                              <ol className="list-decimal pl-5 text-sm space-y-1">
                                <li>Select cells D2:D7 (Quantity column)</li>
                                <li>Go to Home → Conditional Formatting → New Rule</li>
                                <li>Select "Use a formula to determine which cells to format"</li>
                                <li>Enter: <code className="bg-gray-100 px-1 rounded">=D2{'<'}=VLOOKUP(C2,ReorderTable,2,FALSE)</code></li>
                                <li>Click Format → Fill → Choose light red → OK</li>
                              </ol>
                            </div>

                            <div className="space-y-2">
                              <h6 className="font-semibold text-sm">5. Create Summary (Optional)</h6>
                              <div className="bg-amber-50 p-3 rounded-md border border-amber-100">
                                <p className="text-sm font-medium">Category Summary:</p>
                                <p className="text-xs mt-1">Use <code className="bg-amber-100 px-1 rounded">=SUMIF(C2:C6,"Office",F2:F6)</code> to sum by category</p>
                              </div>
                            </div>

                            <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                              <h6 className="text-xs font-semibold text-gray-700 mb-1">💡 Quick Tips:</h6>
                              <ul className="text-xs text-gray-600 space-y-1">
                                <li>• Press F4 to toggle between reference types ($D$2 → D$2 → $D2 → D2)</li>
                                <li>• Use Alt + = to quickly sum a column</li>
                                <li>• Ctrl + Shift + L toggles filters on/off</li>
                                <li>• Double-click the fill handle to copy formulas down</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        {/* Solution Table */}
                        <div className="mt-8">
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="text-sm font-medium text-gray-700">Expected Solution</h5>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
                            <div className="overflow-x-auto">
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-green-50">
                                    <th className="py-2 px-3 text-left font-medium text-gray-700">Item ID</th>
                                    <th className="py-2 px-3 text-left font-medium text-gray-700">Item Name</th>
                                    <th className="py-2 px-3 text-left font-medium text-gray-700">Category</th>
                                    <th className="py-2 px-3 text-right font-medium text-gray-700">Quantity</th>
                                    <th className="py-2 px-3 text-right font-medium text-gray-700">Unit Price</th>
                                    <th className="py-2 px-3 text-right font-medium text-gray-700">Total Value</th>
                                    <th className="py-2 px-3 text-center font-medium text-gray-700">Reorder?</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-t">
                                    <td className="py-2 px-3">A052</td>
                                    <td className="py-2 px-3">Stapler</td>
                                    <td className="py-2 px-3">Office</td>
                                    <td className="py-2 px-3 text-right">8</td>
                                    <td className="py-2 px-3 text-right">45.00</td>
                                    <td className="py-2 px-3 text-right">360.00</td>
                                    <td className="py-2 px-3 text-center bg-red-50 text-red-700">Yes</td>
                                  </tr>
                                  <tr className="border-t">
                                    <td className="py-2 px-3">A001</td>
                                    <td className="py-2 px-3">Printer Paper</td>
                                    <td className="py-2 px-3">Office</td>
                                    <td className="py-2 px-3 text-right">45</td>
                                    <td className="py-2 px-3 text-right">65.00</td>
                                    <td className="py-2 px-3 text-right">2,925.00</td>
                                    <td className="py-2 px-3 text-center bg-green-50 text-green-700">No</td>
                                  </tr>
                                  <tr className="border-t">
                                    <td className="py-2 px-3">D015</td>
                                    <td className="py-2 px-3">Whiteboard</td>
                                    <td className="py-2 px-3">Office</td>
                                    <td className="py-2 px-3 text-right">5</td>
                                    <td className="py-2 px-3 text-right">1,200.00</td>
                                    <td className="py-2 px-3 text-right">6,000.00</td>
                                    <td className="py-2 px-3 text-center bg-red-50 text-red-700">Yes</td>
                                  </tr>
                                  <tr className="border-t">
                                    <td className="py-2 px-3">B023</td>
                                    <td className="py-2 px-3">Laptop Stand</td>
                                    <td className="py-2 px-3">Electronics</td>
                                    <td className="py-2 px-3 text-right">12</td>
                                    <td className="py-2 px-3 text-right">350.00</td>
                                    <td className="py-2 px-3 text-right">4,200.00</td>
                                    <td className="py-2 px-3 text-center bg-red-50 text-red-700">Yes</td>
                                  </tr>
                                  <tr className="border-t">
                                    <td className="py-2 px-3">C107</td>
                                    <td className="py-2 px-3">USB Mouse</td>
                                    <td className="py-2 px-3">Electronics</td>
                                    <td className="py-2 px-3 text-right">22</td>
                                    <td className="py-2 px-3 text-right">175.00</td>
                                    <td className="py-2 px-3 text-right">3,850.00</td>
                                    <td className="py-2 px-3 text-center bg-green-50 text-green-700">No</td>
                                  </tr>
                                  <tr className="border-t bg-gray-50 font-medium">
                                    <td className="py-2 px-3" colSpan={5}>Total Inventory Value</td>
                                    <td className="py-2 px-3 text-right">17,335.00</td>
                                    <td className="py-2 px-3"></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <h6 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Summary by Category</h6>
                                <table className="w-full text-sm">
                                  <thead>
                                    <tr className="border-b">
                                      <th className="py-2 px-2 text-left">Category</th>
                                      <th className="py-2 px-2 text-right">Total Value</th>
                                      <th className="py-2 px-2 text-right">% of Total</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-b">
                                      <td className="py-2 px-2">Electronics</td>
                                      <td className="py-2 px-2 text-right">8,050.00</td>
                                      <td className="py-2 px-2 text-right">46.4%</td>
                                    </tr>
                                    <tr>
                                      <td className="py-2 px-2">Office</td>
                                      <td className="py-2 px-2 text-right">9,285.00</td>
                                      <td className="py-2 px-2 text-right">53.6%</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              
                              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 overflow-hidden">
                                <h6 className="text-xs font-medium text-blue-800 mb-3">Key Formulas</h6>
                                <ul className="space-y-3 text-xs">
                                  <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                                    <div className="font-mono bg-white px-2 py-1 rounded border border-blue-200 text-blue-700 whitespace-nowrap overflow-x-auto max-w-full">
                                      =D2*E2
                                    </div>
                                    <span className="text-gray-700 flex-shrink-0">Total Value (Quantity × Price)</span>
                                  </li>
                                  <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                                    <div className="font-mono bg-white px-2 py-1 rounded border border-blue-200 text-blue-700 whitespace-nowrap overflow-x-auto max-w-full">
                                      =IF(D2&lt;=VLOOKUP(C2,ReorderTable,2,FALSE),"Yes","No")
                                    </div>
                                    <span className="text-gray-700 flex-shrink-0">Reorder Status</span>
                                  </li>
                                  <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                                    <div className="font-mono bg-white px-2 py-1 rounded border border-blue-200 text-blue-700 whitespace-nowrap overflow-x-auto max-w-full">
                                      =SUMIF(C2:C6,"Office",F2:F6)
                                    </div>
                                    <span className="text-gray-700 flex-shrink-0">Sum by Category</span>
                                  </li>
                                  <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                                    <div className="font-mono bg-white px-2 py-1 rounded border border-blue-200 text-blue-700 whitespace-nowrap overflow-x-auto max-w-full">
                                      =F2/SUM(F$2:F$6)
                                    </div>
                                    <span className="text-gray-700 flex-shrink-0">Percentage of Total</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-100">
                              <h6 className="text-xs font-medium text-yellow-800 mb-2">Sorting Instructions</h6>
                              <ol className="list-decimal ml-4 space-y-1 text-xs text-yellow-700">
                                <li>Select all data (including headers)</li>
                                <li>Go to Data tab → Sort</li>
                                <li>Add Level 1: Sort by Category (A to Z)</li>
                                <li>Add Level 2: Sort by Item Name (A to Z)</li>
                                <li>Click OK to apply sorting</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                      )}

                      {/* Exercise for Charts Topic: Sales Performance Visualization */}
                      {currentTopic.id === "charts" && (
                      <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                        <h4 className="font-semibold mb-3">Exercise 1: Sales Performance Visualization</h4>
                        
                        <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Sales Data by Region</h5>
                            <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                              const tableData = [
                                ['Region', 'Product', 'Quarter', 'Sales', 'Units'],
                                ['North', 'Laptop', 'Q1', '120,000', '48'],
                                ['North', 'Smartphone', 'Q1', '85,000', '85'],
                                ['South', 'Laptop', 'Q1', '95,000', '38'],
                                ['South', 'Smartphone', 'Q1', '63,000', '63'],
                                ['North', 'Laptop', 'Q2', '135,000', '54'],
                                ['South', 'Smartphone', 'Q2', '78,000', '78']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-4 w-4 mr-1" />
                              <span className="text-xs">Copy Data</span>
                            </Button>
                          </div>
                          <table className="min-w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="py-2 px-3 text-left">Region</th>
                                <th className="py-2 px-3 text-left">Product</th>
                                <th className="py-2 px-3 text-left">Quarter</th>
                                <th className="py-2 px-3 text-left">Sales</th>
                                <th className="py-2 px-3 text-left">Units</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="py-2 px-3">North</td>
                                <td className="py-2 px-3">Laptop</td>
                                <td className="py-2 px-3">Q1</td>
                                <td className="py-2 px-3">120,000</td>
                                <td className="py-2 px-3">48</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">North</td>
                                <td className="py-2 px-3">Smartphone</td>
                                <td className="py-2 px-3">Q1</td>
                                <td className="py-2 px-3">85,000</td>
                                <td className="py-2 px-3">85</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">South</td>
                                <td className="py-2 px-3">Laptop</td>
                                <td className="py-2 px-3">Q1</td>
                                <td className="py-2 px-3">95,000</td>
                                <td className="py-2 px-3">38</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">South</td>
                                <td className="py-2 px-3">Smartphone</td>
                                <td className="py-2 px-3">Q1</td>
                                <td className="py-2 px-3">63,000</td>
                                <td className="py-2 px-3">63</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">North</td>
                                <td className="py-2 px-3">Laptop</td>
                                <td className="py-2 px-3">Q2</td>
                                <td className="py-2 px-3">135,000</td>
                                <td className="py-2 px-3">54</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">South</td>
                                <td className="py-2 px-3">Smartphone</td>
                                <td className="py-2 px-3">Q2</td>
                                <td className="py-2 px-3">78,000</td>
                                <td className="py-2 px-3">78</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="bg-white p-4 rounded border border-gray-200 mb-4">
                          <h5 className="text-sm font-medium mb-2">Required Dashboard Elements</h5>
                          <div className="space-y-2 text-sm">
                            <div>1. Pivot table showing total sales by Region and Product</div>
                            <div>2. Pivot table showing quarterly sales trends</div>
                            <div>3. Chart showing sales distribution by region</div>
                            <div>4. Chart showing sales distribution by product</div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium mb-2">Instructions:</p>
                            <ol className="list-decimal ml-5 space-y-2 text-sm">
                              <li>Create a new workbook with the sales data</li>
                              <li>Create a pivot table that summarizes sales by Region and Product</li>
                              <li>Create another pivot table showing Quarter as columns and Region as rows with Sales values</li>
                              <li>Create a pie chart showing sales distribution by region</li>
                              <li>Create a bar chart comparing product sales</li>
                              <li>Organize all these elements on a separate sheet called "Dashboard"</li>
                              <li>Add COUNTIF and SUMIF formulas to show total products and total sales at the top of the dashboard</li>
                            </ol>
                            <p className="text-sm mt-2 italic">Hint: Use consistent colors in your charts and add appropriate titles</p>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <details>
                              <summary style={{ listStyle: 'none' }} className="font-medium text-blue-700 cursor-pointer flex items-center">
                                <span>📊 Step-by-Step Guide with Solutions</span>
                              </summary>
                              <div className="mt-3 text-sm text-gray-700 space-y-4">
                                <div>
                                  <h5 className="font-medium mb-2">1. Pivot Table: Sales by Region and Product</h5>
                                  <p className="mb-2">Create a pivot table with:</p>
                                  <ul className="list-disc ml-5 space-y-1">
                                    <li><strong>Rows:</strong> Region, Product</li>
                                    <li><strong>Values:</strong> Sum of Sales, Sum of Units</li>
                                    <li><strong>Format:</strong> Table with banded rows</li>
                                  </ul>
                                  <div className="bg-white p-3 rounded border mt-2 text-xs overflow-x-auto">
                                    <table className="min-w-full border">
                                      <thead>
                                        <tr className="bg-gray-50">
                                          <th className="p-2 border text-left">Region</th>
                                          <th className="p-2 border text-left">Product</th>
                                          <th className="p-2 border text-right">Sum of Sales</th>
                                          <th className="p-2 border text-right">Sum of Units</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr><td className="p-2 border" rowSpan={2}>North</td><td className="p-2 border">Laptop</td><td className="p-2 border text-right">R255,000</td><td className="p-2 border text-right">102</td></tr>
                                        <tr><td className="p-2 border">Smartphone</td><td className="p-2 border text-right">R85,000</td><td className="p-2 border text-right">85</td></tr>
                                        <tr><td className="p-2 border" rowSpan={2}>South</td><td className="p-2 border">Laptop</td><td className="p-2 border text-right">R95,000</td><td className="p-2 border text-right">38</td></tr>
                                        <tr><td className="p-2 border">Smartphone</td><td className="p-2 border text-right">R141,000</td><td className="p-2 border text-right">141</td></tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="font-medium mb-2">2. Pivot Table: Quarterly Sales by Region</h5>
                                  <p className="mb-2">Create a pivot table with:</p>
                                  <ul className="list-disc ml-5 space-y-1">
                                    <li><strong>Columns:</strong> Quarter</li>
                                    <li><strong>Rows:</strong> Region</li>
                                    <li><strong>Values:</strong> Sum of Sales</li>
                                  </ul>
                                </div>

                                <div>
                                  <h5 className="font-medium mb-2">3. Charts</h5>
                                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="border p-4 rounded-lg bg-white shadow-sm">
                                      <p className="text-center font-medium text-sm mb-3">Pie Chart: Sales by Region</p>
                                      <div className="h-64">
                                        <ResponsiveContainer width="100%" height="100%">
                                          <PieChart>
                                            <Pie
                                              data={[
                                                { name: 'North', value: 58, color: '#3b82f6' },
                                                { name: 'South', value: 42, color: '#60a5fa' },
                                              ]}
                                              cx="50%"
                                              cy="50%"
                                              labelLine={false}
                                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                              outerRadius={80}
                                              fill="#8884d8"
                                              dataKey="value"
                                            >
                                              {[
                                                { name: 'North', value: 58, color: '#3b82f6' },
                                                { name: 'South', value: 42, color: '#60a5fa' },
                                              ].map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                              ))}
                                            </Pie>
                                            <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                                            <Legend />
                                          </PieChart>
                                        </ResponsiveContainer>
                                      </div>
                                    </div>
                                    <div className="border p-4 rounded-lg bg-white shadow-sm">
                                      <p className="text-center font-medium text-sm mb-3">Bar Chart: Product Sales</p>
                                      <div className="h-64">
                                        <ResponsiveContainer width="100%" height="100%">
                                          <BarChart
                                            data={[
                                              { name: 'Laptop', sales: 255000, units: 140 },
                                              { name: 'Smartphone', sales: 226000, units: 226 },
                                            ]}
                                            margin={{
                                              top: 5,
                                              right: 30,
                                              left: 20,
                                              bottom: 5,
                                            }}
                                          >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis yAxisId="left" orientation="left" stroke="#3b82f6" />
                                            <YAxis yAxisId="right" orientation="right" stroke="#60a5fa" />
                                            <Tooltip 
                                              formatter={(value, name) => {
                                                if (name === 'sales') return [`R${value.toLocaleString()}`, 'Sales (R)'];
                                                return [value, 'Units'];
                                              }}
                                            />
                                            <Legend />
                                            <Bar yAxisId="left" dataKey="sales" name="Sales (R)" fill="#3b82f6" />
                                            <Bar yAxisId="right" dataKey="units" name="Units" fill="#60a5fa" />
                                          </BarChart>
                                        </ResponsiveContainer>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="bg-white p-3 rounded border">
                                  <h5 className="font-medium mb-2">Dashboard Formulas</h5>
                                  <table className="w-full text-sm border">
                                    <thead>
                                      <tr className="bg-gray-50">
                                        <th className="p-2 border text-left">Metric</th>
                                        <th className="p-2 border text-left">Formula</th>
                                        <th className="p-2 border text-left">Result</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="p-2 border">Total Sales</td>
                                        <td className="p-2 border font-mono">=SUM(D2:D7)</td>
                                        <td className="p-2 border">R576,000</td>
                                      </tr>
                                      <tr>
                                        <td className="p-2 border">Total Products Sold</td>
                                        <td className="p-2 border font-mono">=SUM(E2:E7)</td>
                                        <td className="p-2 border">366</td>
                                      </tr>
                                      <tr>
                                        <td className="p-2 border">Average Sale Value</td>
                                        <td className="p-2 border font-mono">=AVERAGE(D2:D7)</td>
                                        <td className="p-2 border">R96,000</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>

                                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                  <h5 className="font-medium text-yellow-800 mb-2">Pro Tips</h5>
                                  <ul className="list-disc ml-5 space-y-1 text-sm text-yellow-700">
                                    <li>Use the same color scheme across all charts for consistency</li>
                                    <li>Add data labels to your pie chart for better readability</li>
                                    <li>Use number formatting for currency (Ctrl+1)</li>
                                    <li>Create a title for each chart that clearly explains what it shows</li>
                                    <li>Consider adding slicers for interactive filtering</li>
                                  </ul>
                                </div>
                              </div>
                            </details>
                          </div>
                        </div>
                      </div>
                      )}

                      {/* Exercise for Data Management Topic: Advanced Filtering and Sorting */}
                      {currentTopic.id === "data-management" && (
                      <div className="bg-excel-green/10 p-6 rounded-lg border border-excel-green/20">
                        <h4 className="font-semibold mb-3">Exercise 1: Advanced Filtering and Sorting</h4>
                        
                        <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Exploring the Excel Interface</h5>
                            <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                              const tableData = [
                                ['Employee', 'Department', 'Location', 'Start Date', 'Salary'],
                                ['John Smith', 'Marketing', 'Johannesburg', '15/01/2023', 'R35,000'],
                                ['Maria Nkosi', 'Finance', 'Cape Town', '03/04/2022', 'R42,500'],
                                ['David Lee', 'IT', 'Durban', '22/06/2023', 'R48,000'],
                                ['Thandi Zulu', 'HR', 'Pretoria', '10/11/2022', 'R38,750'],
                                ['Robert Chen', 'Operations', 'Johannesburg', '05/09/2021', 'R52,000']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-4 w-4 mr-1" />
                              <span className="text-xs">Copy Data</span>
                            </Button>
                          </div>
                          <table className="min-w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="py-2 px-3 text-left">Employee</th>
                                <th className="py-2 px-3 text-left">Department</th>
                                <th className="py-2 px-3 text-left">Location</th>
                                <th className="py-2 px-3 text-left">Start Date</th>
                                <th className="py-2 px-3 text-left">Salary</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="py-2 px-3">John Smith</td>
                                <td className="py-2 px-3">Marketing</td>
                                <td className="py-2 px-3">Johannesburg</td>
                                <td className="py-2 px-3">15/01/2023</td>
                                <td className="py-2 px-3">R35,000</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Maria Nkosi</td>
                                <td className="py-2 px-3">Finance</td>
                                <td className="py-2 px-3">Cape Town</td>
                                <td className="py-2 px-3">03/04/2022</td>
                                <td className="py-2 px-3">R42,500</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">David Lee</td>
                                <td className="py-2 px-3">IT</td>
                                <td className="py-2 px-3">Durban</td>
                                <td className="py-2 px-3">22/06/2023</td>
                                <td className="py-2 px-3">R48,000</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Thandi Zulu</td>
                                <td className="py-2 px-3">HR</td>
                                <td className="py-2 px-3">Pretoria</td>
                                <td className="py-2 px-3">10/11/2022</td>
                                <td className="py-2 px-3">R38,750</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Robert Chen</td>
                                <td className="py-2 px-3">Operations</td>
                                <td className="py-2 px-3">Johannesburg</td>
                                <td className="py-2 px-3">05/09/2021</td>
                                <td className="py-2 px-3">R52,000</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="space-y-3">
                          <p className="text-sm font-medium">Instructions:</p>
                          <ol className="list-decimal ml-5 space-y-2 text-sm">
                            <li>Create a new workbook with the employee data</li>
                            <li>Convert the data into an Excel Table (Ctrl+T) and apply a table style</li>
                            <li>Create custom filters to show employees with salaries above R40,000 from Johannesburg</li>
                            <li>Apply advanced filters to extract only Finance and IT employees to a separate area</li>
                            <li>Create data validation with custom error messages for the Department field</li>
                            <li>Add conditional formatting to highlight the top 2 highest salaries</li>
                            <li>Use the Remove Duplicates feature to practice data cleanup</li>
                          </ol>
                          <p className="text-sm mt-2 italic">Hint: For advanced filters, set up criteria and copy ranges in separate areas of your worksheet</p>
                        </div>
                      </div>
                      )}

                      {/* Exercise 2 for Data Management Topic: Data Validation and Protection */}
                      {currentTopic.id === "data-management" && (
                      <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                        <h4 className="font-semibold mb-3">Exercise 2: Data Validation and Protection</h4>
                        
                        <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Quarterly Sales Data</h5>
                            <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                              const tableData = [
                                ['Q1 Data', '', '', '', ''],
                                ['Product', 'January', 'February', 'March', 'Total'],
                                ['Laptops', '120,000', '145,000', '135,000', ''],
                                ['Tablets', '85,000', '92,000', '105,000', ''],
                                ['Phones', '175,000', '182,000', '195,000', ''],
                                ['Accessories', '45,000', '48,000', '52,000', ''],
                                ['Monthly Total', '', '', '', '']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-4 w-4 mr-1" />
                              <span className="text-xs">Copy Q1 Data</span>
                            </Button>
                          </div>
                          <table className="min-w-full text-sm mb-4">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="py-2 px-3 text-left" colSpan={5}>Q1 Data</th>
                              </tr>
                              <tr className="bg-gray-50">
                                <th className="py-2 px-3 text-left">Product</th>
                                <th className="py-2 px-3 text-left">January</th>
                                <th className="py-2 px-3 text-left">February</th>
                                <th className="py-2 px-3 text-left">March</th>
                                <th className="py-2 px-3 text-left">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="py-2 px-3">Laptops</td>
                                <td className="py-2 px-3">120,000</td>
                                <td className="py-2 px-3">145,000</td>
                                <td className="py-2 px-3">135,000</td>
                                <td className="py-2 px-3">?</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Tablets</td>
                                <td className="py-2 px-3">85,000</td>
                                <td className="py-2 px-3">92,000</td>
                                <td className="py-2 px-3">105,000</td>
                                <td className="py-2 px-3">?</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Phones</td>
                                <td className="py-2 px-3">175,000</td>
                                <td className="py-2 px-3">182,000</td>
                                <td className="py-2 px-3">195,000</td>
                                <td className="py-2 px-3">?</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Accessories</td>
                                <td className="py-2 px-3">45,000</td>
                                <td className="py-2 px-3">48,000</td>
                                <td className="py-2 px-3">52,000</td>
                                <td className="py-2 px-3">?</td>
                              </tr>
                              <tr className="border-t bg-gray-50">
                                <td className="py-2 px-3 font-medium">Monthly Total</td>
                                <td className="py-2 px-3">?</td>
                                <td className="py-2 px-3">?</td>
                                <td className="py-2 px-3">?</td>
                                <td className="py-2 px-3">?</td>
                              </tr>
                            </tbody>
                          </table>

                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Similar data for Q2, Q3, Q4</h5>
                            <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                              const tableData = [
                                ['Q2 Data', '', '', '', ''],
                                ['Product', 'April', 'May', 'June', 'Total'],
                                ['Laptops', '130,000', '142,000', '152,000', ''],
                                ['Tablets', '95,000', '105,000', '110,000', ''],
                                ['Phones', '185,000', '190,000', '205,000', ''],
                                ['Accessories', '50,000', '55,000', '60,000', ''],
                                ['Monthly Total', '', '', '', '']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-4 w-4 mr-1" />
                              <span className="text-xs">Copy Q2 Data</span>
                            </Button>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <p className="text-sm font-medium">Instructions:</p>
                          <ol className="list-decimal ml-5 space-y-2 text-sm">
                            <li>Create a new workbook with the quarterly sales data</li>
                            <li>Create data validation for product entries with a custom dropdown list</li>
                            <li>Add custom error messages and input messages to guide data entry</li>
                            <li>Implement cell protection to prevent editing of formula cells</li>
                            <li>Create a separate worksheet with data entry form using data validation</li>
                            <li>Set up validation rules to prevent duplicate entries</li>
                            <li>Add a validation rule to ensure numeric entries are positive</li>
                            <li>Create a custom validation rule using a formula that ensures monthly totals don't exceed a budget limit</li>
                          </ol>
                          <p className="text-sm mt-2 italic">Hint: For custom validation formulas, use the Custom option in the Data Validation dialog with a formula that returns TRUE or FALSE</p>
                        </div>
                      </div>
                      )}

                      {/* Exercise 2 for Charts Topic: Dashboard Creation */}
                      {currentTopic.id === "charts" && (<>
                      <div className="bg-excel-green/10 p-6 rounded-lg border border-excel-green/20">
                        <h4 className="font-semibold mb-3">Exercise 2: Dashboard Creation</h4>
                        
                        <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Regional Sales Performance</h5>
                            <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                              const tableData = [
                                ['Region', 'Product', 'Q1', 'Q2', 'Q3', 'Q4', 'Total'],
                                ['North', 'Laptops', '125000', '140000', '130000', '155000', ''],
                                ['North', 'Tablets', '75000', '85000', '90000', '95000', ''],
                                ['South', 'Laptops', '110000', '115000', '125000', '140000', ''],
                                ['South', 'Tablets', '65000', '70000', '80000', '85000', ''],
                                ['East', 'Laptops', '95000', '105000', '115000', '130000', ''],
                                ['East', 'Tablets', '55000', '60000', '70000', '75000', ''],
                                ['West', 'Laptops', '105000', '110000', '120000', '135000', ''],
                                ['West', 'Tablets', '60000', '65000', '75000', '80000', '']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-4 w-4 mr-1" />
                              <span className="text-xs">Copy Data</span>
                            </Button>
                          </div>
                          <table className="min-w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="py-2 px-3 text-left">Region</th>
                                <th className="py-2 px-3 text-left">Product</th>
                                <th className="py-2 px-3 text-left">Q1</th>
                                <th className="py-2 px-3 text-left">Q2</th>
                                <th className="py-2 px-3 text-left">Q3</th>
                                <th className="py-2 px-3 text-left">Q4</th>
                                <th className="py-2 px-3 text-left">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="py-2 px-3">North</td>
                                <td className="py-2 px-3">Laptops</td>
                                <td className="py-2 px-3">125,000</td>
                                <td className="py-2 px-3">140,000</td>
                                <td className="py-2 px-3">130,000</td>
                                <td className="py-2 px-3">155,000</td>
                                <td className="py-2 px-3">?</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">North</td>
                                <td className="py-2 px-3">Tablets</td>
                                <td className="py-2 px-3">75,000</td>
                                <td className="py-2 px-3">85,000</td>
                                <td className="py-2 px-3">90,000</td>
                                <td className="py-2 px-3">95,000</td>
                                <td className="py-2 px-3">?</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="space-y-3">
                          <p className="text-sm font-medium">Instructions:</p>
                          <ol className="list-decimal ml-5 space-y-2 text-sm">
                            <li>Create a new workbook with the regional sales data</li>
                            <li>Design a comprehensive dashboard with multiple chart types:</li>
                            <ul className="list-disc ml-5 mt-1">
                              <li>Create a column chart comparing regional performance</li>
                              <li>Create a pie chart showing product distribution</li>
                              <li>Add a line chart showing quarterly trends</li>
                              <li>Create a combo chart with columns and a line</li>
                            </ul>
                            <li>Add interactive elements:</li>
                            <ul className="list-disc ml-5 mt-1">
                              <li>Create slicers or dropdown filters to filter the data</li>
                              <li>Add form controls to toggle between different views</li>
                              <li>Use conditional formatting in the data table</li>
                            </ul>
                            <li>Format all charts consistently with a professional color scheme</li>
                            <li>Add appropriate titles, legends, and data labels</li>
                            <li>Create a summary section with key metrics and insights</li>
                          </ol>
                          <p className="text-sm mt-2 italic">Hint: For an effective dashboard, keep all charts on a single worksheet and ensure they update dynamically when filters are changed</p>
                        </div>

                        {/* Step-by-Step Instructions */}
                        <details className="mt-6 group">
                          <summary 
                            className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100 cursor-pointer list-none"
                            style={{ listStyle: 'none' }}
                          >
                            <span className="text-sm font-medium text-blue-700">📋 Step-by-Step Instructions</span>
                            <svg 
                              className="w-4 h-4 text-blue-500 transform transition-transform duration-200 group-open:rotate-180" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <div className="mt-2 p-4 bg-white rounded-b-lg border-t-0 border border-blue-100 space-y-4">
                            <div className="space-y-2">
                              <h6 className="font-medium text-sm">1. Prepare Your Data</h6>
                              <ol className="list-decimal ml-5 text-sm space-y-1">
                                <li>Create a new worksheet named "Data"</li>
                                <li>Enter the regional sales data with columns: Region, Product, Q1, Q2, Q3, Q4</li>
                                <li>Format the data as a table (Ctrl+T) and name it "SalesData"</li>
                                <li>Add a Total column with the formula: <code className="bg-gray-100 px-1 rounded">=SUM(Table1[@[Q1]:[Q4]])</code></li>
                              </ol>
                            </div>

                            <div className="space-y-2">
                              <h6 className="font-medium text-sm">2. Create Summary Calculations</h6>
                              <ol className="list-decimal ml-5 text-sm space-y-1">
                                <li>Create a new worksheet named "Dashboard"</li>
                                <li>In cell B2, calculate total sales: <code className="bg-gray-100 px-1 rounded">=SUM(SalesData[Total])</code></li>
                                <li>In cell B3, calculate laptop sales: <code className="bg-gray-100 px-1 rounded">=SUMIFS(SalesData[Total],SalesData[Product],"Laptops")</code></li>
                                <li>In cell B4, calculate tablet sales: <code className="bg-gray-100 px-1 rounded">=SUMIFS(SalesData[Total],SalesData[Product],"Tablets")</code></li>
                                <li>In cell B5, find top region: <code className="bg-gray-100 px-1 rounded">=INDEX(SalesData[Region],MATCH(MAX(SalesData[Total]),SalesData[Total],0))</code></li>
                              </ol>
                            </div>

                            <div className="space-y-2">
                              <h6 className="font-medium text-sm">3. Create Quarterly Trend Chart</h6>
                              <ol className="list-decimal ml-5 text-sm space-y-1">
                                <li>Select Insert {'>'} Recommended Charts {'>'} Clustered Column</li>
                                <li>Right-click chart {'>'} Select Data {'>'} Add Series</li>
                                <li>For Laptops series, use: <code className="bg-gray-100 px-1 rounded">=SERIES("Laptops",Dashboard!$C$1:$F$1,SUMIFS(SalesData[Q1:Q4],SalesData[Product],"Laptops"),1)</code></li>
                                <li>For Tablets series, use: <code className="bg-gray-100 px-1 rounded">=SERIES("Tablets",Dashboard!$C$1:$F$1,SUMIFS(SalesData[Q1:Q4],SalesData[Product],"Tablets"),2)</code></li>
                                <li>Format with your preferred color scheme</li>
                              </ol>
                            </div>

                            <div className="space-y-2">
                              <h6 className="font-medium text-sm">4. Create Regional Performance Chart</h6>
                              <ol className="list-decimal ml-5 text-sm space-y-1">
                                <li>Create a PivotTable from SalesData</li>
                                <li>Add Region to Rows and Sum of Total to Values</li>
                                <li>Insert {'>'} PivotChart {'>'} Doughnut</li>
                                <li>Right-click chart {'>'} Format Data Series {'>'} Set Doughnut Hole Size to 60%</li>
                                <li>Add Data Labels with percentage and category name</li>
                              </ol>
                            </div>

                            <div className="space-y-2">
                              <h6 className="font-medium text-sm">5. Create the Data Table</h6>
                              <ol className="list-decimal ml-5 text-sm space-y-1">
                                <li>Copy your SalesData table to the Dashboard sheet</li>
                                <li>Use conditional formatting {'>'} Color Scales for visual heatmap</li>
                                <li>Add a Total row (Table Design {'>'} Total Row)</li>
                                <li>Format numbers as currency (Ctrl+Shift+$)</li>
                              </ol>
                            </div>

                            <div className="space-y-2">
                              <h6 className="font-medium text-sm">6. Add Interactive Elements</h6>
                              <ol className="list-decimal ml-5 text-sm space-y-1">
                                <li>Insert {'>'} Slicer (for Region and Product)</li>
                                <li>Right-click slicer {'>'} Report Connections {'>'} Connect to all PivotTables</li>
                                <li>Add form controls (Developer {'>'} Insert {'>'} Combo Box)</li>
                                <li>Link combobox to cell and use INDIRECT for dynamic ranges</li>
                              </ol>
                            </div>

                            <div className="space-y-2">
                              <h6 className="font-medium text-sm">7. Final Touches</h6>
                              <ol className="list-decimal ml-5 text-sm space-y-1">
                                <li>Group related elements (Alt+drag to select, Ctrl+G)</li>
                                <li>Add a title and format with your company colors</li>
                                <li>Freeze panes for scrolling (View {'>'} Freeze Panes)</li>
                                <li>Protect the worksheet (Review {'>'} Protect Sheet) - allow only specific cells to be edited</li>
                                <li>Set print area (Page Layout {'>'} Print Area)</li>
                              </ol>
                            </div>

                            <div className="p-3 bg-blue-100 rounded-md">
                              <p className="text-xs font-medium text-blue-800">Pro Tips:</p>
                              <ul className="text-xs text-blue-700 mt-1 space-y-1">
                                <li>• Use named ranges for dynamic chart ranges</li>
                                <li>• Create a theme with your company colors for consistency</li>
                                <li>• Use Camera tool for floating elements (Add to QAT: Options {'>'} Quick Access Toolbar {'>'} All Commands {'>'} Camera)</li>
                                <li>• Add sparklines for mini-charts (Insert {'>'} Sparklines)</li>
                              </ul>
                            </div>
                          </div>
                        </details>

                        {/* Dashboard Solution */}
                        <div className="mt-8">
                          <div className="flex items-center justify-between mb-4">
                            <h5 className="text-sm font-medium">Dashboard Solution</h5>
                          </div>
                          
                          {/* Dashboard Header */}
                          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                              <h3 className="text-lg font-semibold text-gray-800">Regional Sales Dashboard</h3>
                              <div className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</div>
                            </div>
                            
                            {/* KPI Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <div className="text-sm text-blue-600 font-medium">Total Sales</div>
                                <div className="text-2xl font-bold text-gray-800">R1,840,000</div>
                                <div className="text-xs text-green-600">↑ 12.5% vs LY</div>
                              </div>
                              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                <div className="text-sm text-green-600 font-medium">Laptops</div>
                                <div className="text-2xl font-bold text-gray-800">R1,050,000</div>
                                <div className="text-xs text-green-600">↑ 8.2% vs LY</div>
                              </div>
                              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                <div className="text-sm text-purple-600 font-medium">Tablets</div>
                                <div className="text-2xl font-bold text-gray-800">R790,000</div>
                                <div className="text-xs text-green-600">↑ 15.8% vs LY</div>
                              </div>
                              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                                <div className="text-sm text-amber-600 font-medium">Top Region</div>
                                <div className="text-2xl font-bold text-gray-800">North</div>
                                <div className="text-xs text-green-600">R550,000</div>
                              </div>
                            </div>
                            
                            {/* Charts Row */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                              {/* Quarterly Sales Trend */}
                              <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <h4 className="text-sm font-medium mb-4">Quarterly Sales Trend</h4>
                                <div className="h-64">
                                  <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                      data={[
                                        { name: 'Q1', Laptops: 435000, Tablets: 255000 },
                                        { name: 'Q2', Laptops: 472000, Tablets: 300000 },
                                        { name: 'Q3', Laptops: 490000, Tablets: 315000 },
                                        { name: 'Q4', Laptops: 560000, Tablets: 335000 }
                                      ]}
                                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                    >
                                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                      <XAxis dataKey="name" />
                                      <YAxis />
                                      <Tooltip 
                                        formatter={(value, name) => [`R${value.toLocaleString()}`, name]}
                                        labelFormatter={(label) => `Quarter: ${label}`}
                                      />
                                      <Legend />
                                      <Bar dataKey="Laptops" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                      <Bar dataKey="Tablets" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                  </ResponsiveContainer>
                                </div>
                              </div>
                              
                              {/* Regional Performance */}
                              <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <h4 className="text-sm font-medium mb-4">Regional Performance</h4>
                                <div className="h-64">
                                  <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                      <Pie
                                        data={[
                                          { name: 'North', value: 550000, color: '#3b82f6' },
                                          { name: 'South', value: 490000, color: '#60a5fa' },
                                          { name: 'East', value: 405000, color: '#93c5fd' },
                                          { name: 'West', value: 395000, color: '#bfdbfe' }
                                        ]}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                      >
                                        {[
                                          { name: 'North', value: 550000, color: '#3b82f6' },
                                          { name: 'South', value: 490000, color: '#60a5fa' },
                                          { name: 'East', value: 405000, color: '#93c5fd' },
                                          { name: 'West', value: 395000, color: '#bfdbfe' }
                                        ].map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                      </Pie>
                                      <Tooltip 
                                        formatter={(value) => [`R${value.toLocaleString()}`, 'Sales']}
                                      />
                                      <Legend />
                                    </PieChart>
                                  </ResponsiveContainer>
                                </div>
                              </div>
                            </div>
                            
                            {/* Data Table */}
                            <div className="overflow-x-auto mb-6">
                              <h4 className="text-sm font-medium mb-2">Detailed Sales Data</h4>
                              <table className="min-w-full text-sm border rounded-lg overflow-hidden">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="py-2 px-4 text-left">Region</th>
                                    <th className="py-2 px-4 text-left">Product</th>
                                    <th className="py-2 px-4 text-right">Q1</th>
                                    <th className="py-2 px-4 text-right">Q2</th>
                                    <th className="py-2 px-4 text-right">Q3</th>
                                    <th className="py-2 px-4 text-right">Q4</th>
                                    <th className="py-2 px-4 text-right font-medium">Total</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                  {[
                                    { region: 'North', product: 'Laptops', q1: 125000, q2: 140000, q3: 130000, q4: 155000 },
                                    { region: 'North', product: 'Tablets', q1: 75000, q2: 85000, q3: 90000, q4: 95000 },
                                    { region: 'South', product: 'Laptops', q1: 110000, q2: 115000, q3: 125000, q4: 140000 },
                                    { region: 'South', product: 'Tablets', q1: 65000, q2: 70000, q3: 80000, q4: 85000 },
                                    { region: 'East', product: 'Laptops', q1: 95000, q2: 105000, q3: 115000, q4: 130000 },
                                    { region: 'East', product: 'Tablets', q1: 55000, q2: 60000, q3: 70000, q4: 75000 },
                                    { region: 'West', product: 'Laptops', q1: 105000, q2: 110000, q3: 120000, q4: 135000 },
                                    { region: 'West', product: 'Tablets', q1: 60000, q2: 65000, q3: 75000, q4: 80000 }
                                  ].map((row, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                      <td className="py-2 px-4">{row.region}</td>
                                      <td className="py-2 px-4">{row.product}</td>
                                      <td className="py-2 px-4 text-right">R{row.q1.toLocaleString()}</td>
                                      <td className="py-2 px-4 text-right">R{row.q2.toLocaleString()}</td>
                                      <td className="py-2 px-4 text-right">R{row.q3.toLocaleString()}</td>
                                      <td className="py-2 px-4 text-right">R{row.q4.toLocaleString()}</td>
                                      <td className="py-2 px-4 text-right font-medium">
                                        R{(row.q1 + row.q2 + row.q3 + row.q4).toLocaleString()}
                                      </td>
                                    </tr>
                                  ))}
                                  <tr className="bg-gray-50 font-medium">
                                    <td colSpan={2} className="py-2 px-4 text-right">Grand Total:</td>
                                    <td className="py-2 px-4 text-right">R740,000</td>
                                    <td className="py-2 px-4 text-right">R840,000</td>
                                    <td className="py-2 px-4 text-right">R905,000</td>
                                    <td className="py-2 px-4 text-right">R1,050,000</td>
                                    <td className="py-2 px-4 text-right">R3,535,000</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <h4 className="text-sm font-medium mb-2">Key Insights</h4>
                                <ul className="text-xs space-y-1.5 text-gray-700">
                                  <li>• Q4 was the strongest quarter with R1.05M in sales (+15.7% vs Q3)</li>
                                  <li>• North region leads with R550K in total sales (29.9% of total)</li>
                                  <li>• Laptops account for 57.1% of total revenue</li>
                                  <li>• Tablet sales grew 31.4% year-over-year</li>
                                </ul>
                              </div>
                              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                <h4 className="text-sm font-medium mb-2">Recommendations</h4>
                                <ul className="text-xs space-y-1.5 text-gray-700">
                                  <li>• Increase marketing budget for Q4 to maximize holiday sales</li>
                                  <li>• Expand laptop inventory in North region to meet high demand</li>
                                  <li>• Consider bundle deals for tablets to boost average order value</li>
                                  <li>• Analyze East region for growth opportunities</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-excel-green/10 p-6 rounded-lg border border-excel-green/20 mt-6">
                        <h4 className="font-semibold mb-3">Exercise 3: Sales Trends Analysis</h4>
                        
                        <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Monthly Sales Data (2024)</h5>
                            <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                              const tableData = [
                                ['Month', 'Product A', 'Product B', 'Product C', 'Product D', 'Online Sales', 'Retail Sales'],
                                ['January', '45000', '32000', '18000', '22000', '60000', '57000'],
                                ['February', '48000', '35000', '19500', '24000', '65000', '61500'],
                                ['March', '52000', '38000', '22000', '26500', '72000', '66500'],
                                ['April', '56000', '42000', '24000', '28000', '78000', '72000'],
                                ['May', '61000', '45000', '27500', '31000', '85000', '79500'],
                                ['June', '65000', '48000', '31000', '34500', '92000', '86500'],
                                ['July', '68000', '51000', '33500', '36000', '98000', '90500'],
                                ['August', '64000', '47000', '30000', '33500', '92500', '82000'],
                                ['September', '59000', '44000', '28000', '32000', '86000', '77000'],
                                ['October', '54000', '40000', '25500', '29500', '80000', '69000'],
                                ['November', '58000', '43000', '29000', '33000', '88000', '75000'],
                                ['December', '72000', '56000', '36000', '39000', '110000', '93000']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-4 w-4 mr-1" />
                              <span className="text-xs">Copy Data</span>
                            </Button>
                          </div>
                          <table className="min-w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="py-2 px-3 text-left">Month</th>
                                <th className="py-2 px-3 text-left">Product A</th>
                                <th className="py-2 px-3 text-left">Product B</th>
                                <th className="py-2 px-3 text-left">Product C</th>
                                <th className="py-2 px-3 text-left">Product D</th>
                                <th className="py-2 px-3 text-left">Online Sales</th>
                                <th className="py-2 px-3 text-left">Retail Sales</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="py-2 px-3">January</td>
                                <td className="py-2 px-3">45,000</td>
                                <td className="py-2 px-3">32,000</td>
                                <td className="py-2 px-3">18,000</td>
                                <td className="py-2 px-3">22,000</td>
                                <td className="py-2 px-3">60,000</td>
                                <td className="py-2 px-3">57,000</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">February</td>
                                <td className="py-2 px-3">48,000</td>
                                <td className="py-2 px-3">35,000</td>
                                <td className="py-2 px-3">19,500</td>
                                <td className="py-2 px-3">24,000</td>
                                <td className="py-2 px-3">65,000</td>
                                <td className="py-2 px-3">61,500</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">March</td>
                                <td className="py-2 px-3">52,000</td>
                                <td className="py-2 px-3">38,000</td>
                                <td className="py-2 px-3">22,000</td>
                                <td className="py-2 px-3">26,500</td>
                                <td className="py-2 px-3">72,000</td>
                                <td className="py-2 px-3">66,500</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <p className="text-sm font-medium text-blue-800 mb-3">📊 Chart Creation Instructions</p>
                            
                            <div className="space-y-4">
                              <div className="bg-white p-3 rounded border border-blue-200">
                                <h5 className="font-medium text-blue-700 mb-2">1. Line Chart: Product Sales Trends</h5>
                                <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                                  <li>Select the data range (A1:E13) including headers</li>
                                  <li>Go to <span className="font-mono bg-blue-100 px-1.5 py-0.5 rounded">Insert</span> → <span className="font-mono bg-blue-100 px-1.5 py-0.5 rounded">Line Chart</span> → <span className="font-mono bg-blue-100 px-1.5 py-0.5 rounded">2-D Line</span></li>
                                  <li>Right-click on each line → <span className="font-mono bg-blue-100 px-1.5 py-0.5 rounded">Format Data Series</span>:
                                    <ul className="list-disc pl-5 mt-1 space-y-0.5">
                                      <li>Set line colors:
                                        <ul className="list-[circle] pl-5 mt-1 space-y-0.5">
                                          <li>Product A: <span className="font-mono bg-blue-100 px-1.5 py-0.5 rounded" style={{ backgroundColor: '#3b82f6', color: 'white' }}>#3b82f6</span> (Blue)</li>
                                          <li>Product B: <span className="font-mono bg-purple-100 px-1.5 py-0.5 rounded" style={{ backgroundColor: '#8b5cf6', color: 'white' }}>#8b5cf6</span> (Purple)</li>
                                          <li>Product C: <span className="font-mono bg-green-100 px-1.5 py-0.5 rounded" style={{ backgroundColor: '#10b981', color: 'white' }}>#10b981</span> (Green)</li>
                                          <li>Product D: <span className="font-mono bg-yellow-100 px-1.5 py-0.5 rounded" style={{ backgroundColor: '#f59e0b', color: 'white' }}>#f59e0b</span> (Amber)</li>
                                        </ul>
                                      </li>
                                      <li>Set line width to <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">2.25pt</span></li>
                                      <li>Add circular data markers with radius <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">4pt</span></li>
                                      <li>Set active dot radius to <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">6pt</span></li>
                                    </ul>
                                  </li>
                                  <li>Add a trendline to Product A:
                                    <ul className="list-disc pl-5 mt-1 space-y-0.5">
                                      <li>Right-click on Product A line → <span className="font-mono bg-blue-100 px-1.5 py-0.5 rounded">Add Trendline</span></li>
                                      <li>Choose <span className="font-mono bg-blue-100 px-1.5 py-0.5 rounded">Linear</span> type</li>
                                      <li>Check <span className="font-mono bg-blue-100 px-1.5 py-0.5 rounded">Display Equation</span> and <span className="font-mono bg-blue-100 px-1.5 py-0.5 rounded">R-squared value</span></li>
                                    </ul>
                                  </li>
                                </ol>
                              </div>

                              <div className="bg-white p-3 rounded border border-green-200">
                                <h5 className="font-medium text-green-700 mb-2">2. Stacked Area Chart: Product Contribution</h5>
                                <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                                  <li>Select the data range (A1:E13) including headers</li>
                                  <li>Go to <span className="font-mono bg-green-100 px-1.5 py-0.5 rounded">Insert</span> → <span className="font-mono bg-green-100 px-1.5 py-0.5 rounded">Area Chart</span> → <span className="font-mono bg-green-100 px-1.5 py-0.5 rounded">Stacked Area</span></li>
                                  <li>Right-click on the chart → <span className="font-mono bg-green-100 px-1.5 py-0.5 rounded">Select Data</span> → <span className="font-mono bg-green-100 px-1.5 py-0.5 rounded">Switch Row/Column</span> if needed</li>
                                  <li>Format the area series:
                                    <ul className="list-disc pl-5 mt-1 space-y-1">
                                      <li>Set fill colors with 70% transparency:
                                        <ul className="list-[circle] pl-5 mt-1 space-y-0.5">
                                          <li>Product A: <span className="font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(59, 130, 246, 0.7)', color: 'white' }}>rgba(59, 130, 246, 0.7)</span> (Blue)</li>
                                          <li>Product B: <span className="font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(139, 92, 246, 0.7)', color: 'white' }}>rgba(139, 92, 246, 0.7)</span> (Purple)</li>
                                          <li>Product C: <span className="font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(16, 185, 129, 0.7)', color: 'white' }}>rgba(16, 185, 129, 0.7)</span> (Green)</li>
                                          <li>Product D: <span className="font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(245, 158, 11, 0.7)', color: 'white' }}>rgba(245, 158, 11, 0.7)</span> (Amber)</li>
                                        </ul>
                                      </li>
                                      <li>Add subtle borders (1pt) in solid colors matching the fill but at 100% opacity</li>
                                      <li>Set border width to <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">1pt</span></li>
                                    </ul>
                                  </li>
                                </ol>
                              </div>

                              <div className="bg-white p-3 rounded border border-purple-200">
                                <h5 className="font-medium text-purple-700 mb-2">3. Dual-Axis Chart: Sales Channels</h5>
                                <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                                  <li>Select the data range (A1:A13, F1:G13) including headers</li>
                                  <li>Go to <span className="font-mono bg-purple-100 px-1.5 py-0.5 rounded">Insert</span> → <span className="font-mono bg-purple-100 px-1.5 py-0.5 rounded">Combo Chart</span> → <span className="font-mono bg-purple-100 px-1.5 py-0.5 rounded">Clustered Column - Line on Secondary Axis</span></li>
                                  <li>Set colors for the dual-axis chart:
                                    <ul className="list-disc pl-5 mt-1 space-y-0.5">
                                      <li>Online Sales (Columns): <span className="font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: '#3b82f6', color: 'white' }}>#3b82f6</span> (Blue)</li>
                                      <li>Retail Sales (Columns): <span className="font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: '#8b5cf6', color: 'white' }}>#8b5cf6</span> (Purple)</li>
                                      <li>Percentage Line (Secondary Axis): <span className="font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: '#10b981', color: 'white' }}>#10b981</span> (Green)</li>
                                    </ul>
                                  </li>
                                  <li>Format the secondary axis (right side):
                                    <ul className="list-disc pl-5 mt-1 space-y-0.5">
                                      <li>Right-click on the axis → <span className="font-mono bg-purple-100 px-1.5 py-0.5 rounded">Format Axis</span></li>
                                      <li>Set bounds to 0-1.0 (or 0-100%)</li>
                                      <li>Change number format to <span className="font-mono bg-purple-100 px-1.5 py-0.5 rounded">Percentage</span> with 0 decimal places</li>
                                    </ul>
                                  </li>
                                  <li>Add a secondary data series for the percentage split:
                                    <ul className="list-disc pl-5 mt-1 space-y-0.5">
                                      <li>Right-click on the chart → <span className="font-mono bg-purple-100 px-1.5 py-0.5 rounded">Select Data</span></li>
                                      <li>Add a new series with values as Online/(Online+Retail)</li>
                                      <li>Change this series to use the secondary axis</li>
                                    </ul>
                                  </li>
                                </ol>
                              </div>

                              <div className="bg-amber-50 p-3 rounded border border-amber-200">
                                <h5 className="font-medium text-amber-700 mb-2">🎨 Final Touches</h5>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                  <li>Add descriptive chart titles and axis labels</li>
                                  <li>Use the following color scheme consistently:
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                      <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: '#3b82f6' }}></div>
                                        <span className="text-xs">Product A / Online Sales</span>
                                      </div>
                                      <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: '#8b5cf6' }}></div>
                                        <span className="text-xs">Product B / Retail Sales</span>
                                      </div>
                                      <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: '#10b981' }}></div>
                                        <span className="text-xs">Product C / Percentage</span>
                                      </div>
                                      <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: '#f59e0b' }}></div>
                                        <span className="text-xs">Product D</span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>Add data labels to key data points</li>
                                  <li>Insert text boxes to highlight key insights</li>
                                  <li>Use consistent formatting across all charts</li>
                                </ul>
                              </div>
                            </div>
                            
                            <p className="text-xs mt-3 text-gray-500 italic">💡 Pro Tip: Use the <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">Alt</span> key while moving/resizing charts to snap to grid for perfect alignment!</p>
                          </div>
                        </div>

                        {/* Solution Section */}
                        <details className="mt-6 group">
                          <summary 
                            className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100 cursor-pointer list-none"
                            style={{ listStyle: 'none' }}
                          >
                            <span className="text-sm font-medium text-blue-700">📊 Solution & Analysis</span>
                            <svg 
                              className="w-4 h-4 text-blue-500 transform transition-transform duration-200 group-open:rotate-180" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <div className="mt-2 p-4 bg-white rounded-b-lg border-t-0 border border-blue-100 space-y-6">
                            {/* KPI Summary */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                <div className="text-xs text-blue-600 font-medium">Total Sales (2024)</div>
                                <div className="text-xl font-bold text-gray-800">R5,280,000</div>
                                <div className="text-xs text-green-600">↑ 8.7% vs 2023</div>
                              </div>
                              <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                                <div className="text-xs text-green-600 font-medium">Top Product</div>
                                <div className="text-xl font-bold text-gray-800">Product A</div>
                                <div className="text-xs text-gray-600">R682,000 (29.1%)</div>
                              </div>
                              <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                <div className="text-xs text-purple-600 font-medium">Online Share</div>
                                <div className="text-xl font-bold text-gray-800">54.2%</div>
                                <div className="text-xs text-green-600">↑ 3.1% YoY</div>
                              </div>
                              <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                                <div className="text-xs text-amber-600 font-medium">Best Month</div>
                                <div className="text-xl font-bold text-gray-800">December</div>
                                <div className="text-xs text-gray-600">R203,000 (15.2% ↑ avg)</div>
                              </div>
                            </div>

                            {/* Line Chart - Product Trends */}
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <h5 className="text-sm font-medium mb-3">1. Product Sales Trends</h5>
                              <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                  <LineChart
                                    data={[
                                      { month: 'Jan', 'Product A': 45, 'Product B': 32, 'Product C': 18, 'Product D': 22 },
                                      { month: 'Feb', 'Product A': 48, 'Product B': 35, 'Product C': 19.5, 'Product D': 24 },
                                      { month: 'Mar', 'Product A': 52, 'Product B': 38, 'Product C': 22, 'Product D': 26.5 },
                                      { month: 'Apr', 'Product A': 56, 'Product B': 42, 'Product C': 24, 'Product D': 28 },
                                      { month: 'May', 'Product A': 61, 'Product B': 45, 'Product C': 27.5, 'Product D': 31 },
                                      { month: 'Jun', 'Product A': 65, 'Product B': 48, 'Product C': 31, 'Product D': 34.5 },
                                      { month: 'Jul', 'Product A': 68, 'Product B': 51, 'Product C': 33.5, 'Product D': 36 },
                                      { month: 'Aug', 'Product A': 64, 'Product B': 47, 'Product C': 30, 'Product D': 33.5 },
                                      { month: 'Sep', 'Product A': 59, 'Product B': 44, 'Product C': 28, 'Product D': 32 },
                                      { month: 'Oct', 'Product A': 54, 'Product B': 40, 'Product C': 25.5, 'Product D': 29.5 },
                                      { month: 'Nov', 'Product A': 58, 'Product B': 43, 'Product C': 29, 'Product D': 33 },
                                      { month: 'Dec', 'Product A': 72, 'Product B': 56, 'Product C': 36, 'Product D': 39 },
                                    ]}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                  >
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="month" />
                                    <YAxis label={{ value: 'Sales (R 000)', angle: -90, position: 'insideLeft' }} />
                                    <Tooltip 
                                      formatter={(value, name) => [`R${(Number(value) * 1000).toLocaleString()}`, name]}
                                      labelFormatter={(label) => `Month: ${label}`}
                                    />
                                    <Legend />
                                    <Line type="monotone" dataKey="Product A" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                    <Line type="monotone" dataKey="Product B" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                    <Line type="monotone" dataKey="Product C" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                    <Line type="monotone" dataKey="Product D" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                    <ReferenceLine x="Jun" label="Peak Season" stroke="#ef4444" strokeDasharray="3 3">
                                      <Label value="Peak Season" position="insideTopRight" fill="#ef4444" />
                                    </ReferenceLine>
                                  </LineChart>
                                </ResponsiveContainer>
                              </div>
                              <p className="text-xs text-gray-600 mt-2">Figure 1: Monthly sales trends show Product A consistently outperforming others with a strong Q4 peak.</p>
                            </div>

                            {/* Stacked Area Chart */}
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <h5 className="text-sm font-medium mb-3">2. Product Contribution to Total Sales</h5>
                              <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                  <AreaChart
                                    data={[
                                      { month: 'Jan', 'Product A': 45, 'Product B': 32, 'Product C': 18, 'Product D': 22 },
                                      { month: 'Feb', 'Product A': 48, 'Product B': 35, 'Product C': 19.5, 'Product D': 24 },
                                      { month: 'Mar', 'Product A': 52, 'Product B': 38, 'Product C': 22, 'Product D': 26.5 },
                                      { month: 'Apr', 'Product A': 56, 'Product B': 42, 'Product C': 24, 'Product D': 28 },
                                      { month: 'May', 'Product A': 61, 'Product B': 45, 'Product C': 27.5, 'Product D': 31 },
                                      { month: 'Jun', 'Product A': 65, 'Product B': 48, 'Product C': 31, 'Product D': 34.5 },
                                      { month: 'Jul', 'Product A': 68, 'Product B': 51, 'Product C': 33.5, 'Product D': 36 },
                                      { month: 'Aug', 'Product A': 64, 'Product B': 47, 'Product C': 30, 'Product D': 33.5 },
                                      { month: 'Sep', 'Product A': 59, 'Product B': 44, 'Product C': 28, 'Product D': 32 },
                                      { month: 'Oct', 'Product A': 54, 'Product B': 40, 'Product C': 25.5, 'Product D': 29.5 },
                                      { month: 'Nov', 'Product A': 58, 'Product B': 43, 'Product C': 29, 'Product D': 33 },
                                      { month: 'Dec', 'Product A': 72, 'Product B': 56, 'Product C': 36, 'Product D': 39 },
                                    ]}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                    stackOffset="expand"
                                  >
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="month" />
                                    <YAxis tickFormatter={(value) => `${value * 100}%`} />
                                    <Tooltip 
                                      formatter={(value, name) => [`${(Number(value) * 100).toFixed(1)}%`, name]}
                                      labelFormatter={(label) => `Month: ${label}`}
                                    />
                                    <Legend />
                                    <Area type="monotone" dataKey="Product A" stackId="1" stroke="#3b82f6" fill="#93c5fd" fillOpacity={0.8} />
                                    <Area type="monotone" dataKey="Product B" stackId="1" stroke="#8b5cf6" fill="#c4b5fd" fillOpacity={0.8} />
                                    <Area type="monotone" dataKey="Product C" stackId="1" stroke="#10b981" fill="#6ee7b7" fillOpacity={0.8} />
                                    <Area type="monotone" dataKey="Product D" stackId="1" stroke="#f59e0b" fill="#fcd34d" fillOpacity={0.8} />
                                  </AreaChart>
                                </ResponsiveContainer>
                              </div>
                              <p className="text-xs text-gray-600 mt-2">Figure 2: Stacked area chart showing the relative contribution of each product to total monthly sales.</p>
                            </div>

                            {/* Dual Axis Chart */}
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <h5 className="text-sm font-medium mb-3">3. Online vs Retail Sales Comparison</h5>
                              <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                  <ComposedChart
                                    data={[
                                      { month: 'Jan', online: 60, retail: 57, share: 51.3 },
                                      { month: 'Feb', online: 65, retail: 61.5, share: 51.4 },
                                      { month: 'Mar', online: 72, retail: 66.5, share: 52 },
                                      { month: 'Apr', online: 78, retail: 72, share: 52 },
                                      { month: 'May', online: 85, retail: 79.5, share: 51.7 },
                                      { month: 'Jun', online: 92, retail: 86.5, share: 51.5 },
                                      { month: 'Jul', online: 98, retail: 90.5, share: 52 },
                                      { month: 'Aug', online: 92.5, retail: 82, share: 53 },
                                      { month: 'Sep', online: 86, retail: 77, share: 52.8 },
                                      { month: 'Oct', online: 80, retail: 69, share: 53.7 },
                                      { month: 'Nov', online: 88, retail: 75, share: 54 },
                                      { month: 'Dec', online: 110, retail: 93, share: 54.2 },
                                    ]}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                  >
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="month" />
                                    <YAxis yAxisId="left" label={{ value: 'Sales (R 000)', angle: -90, position: 'insideLeft' }} />
                                    <YAxis yAxisId="right" orientation="right" label={{ value: 'Online %', angle: 90, position: 'insideRight' }} domain={[40, 60]} tickFormatter={(value) => `${value}%`} />
                                    <Tooltip 
                                      formatter={(value, name) => {
                                        if (name === 'Online %') return [`${value}%`, name];
                                        return [`R${(Number(value) * 1000).toLocaleString()}`, name];
                                      }}
                                      labelFormatter={(label) => `Month: ${label}`}
                                    />
                                    <Legend />
                                    <Bar yAxisId="left" dataKey="online" name="Online Sales" fill="#3b82f6" barSize={20} />
                                    <Bar yAxisId="left" dataKey="retail" name="Retail Sales" fill="#94a3b8" barSize={20} />
                                    <Line yAxisId="right" type="monotone" dataKey="share" name="Online %" stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                                  </ComposedChart>
                                </ResponsiveContainer>
                              </div>
                              <p className="text-xs text-gray-600 mt-2">Figure 3: Dual-axis chart comparing online and retail sales with online sales percentage trend.</p>
                            </div>

                            {/* Key Insights */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <h4 className="text-sm font-medium mb-2">Key Insights</h4>
                                <ul className="text-xs space-y-1.5 text-gray-700">
                                  <li>• <span className="font-medium">Seasonal Peaks:</span> December shows highest sales across all products (R203K, 15.2% above monthly average)</li>
                                  <li>• <span className="font-medium">Product Performance:</span> Product A consistently leads with 29.1% of total sales, showing 12.3% growth YoY</li>
                                  <li>• <span className="font-medium">Channel Shift:</span> Online sales grew to 54.2% of total (up 3.1% YoY), with strongest growth in Q4</li>
                                  <li>• <span className="font-medium">Growth Patterns:</span> Products A & D show strongest growth (12.3% and 10.8% YoY respectively)</li>
                                </ul>
                              </div>
                              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                <h4 className="text-sm font-medium mb-2">Recommendations</h4>
                                <ul className="text-xs space-y-1.5 text-gray-700">
                                  <li>• <span className="font-medium">Q4 Preparation:</span> Increase inventory for Product A by 15% for holiday season</li>
                                  <li>• <span className="font-medium">Marketing Focus:</span> Target online channels during Q4, especially for Product D bundles</li>
                                  <li>• <span className="font-medium">Product Development:</span> Analyze Product C's underperformance (only 17.5% of sales)</li>
                                  <li>• <span className="font-medium">Pricing Strategy:</span> Consider promotional pricing for Product B to boost its market share</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </details>
                      </div>

                      <div className="bg-excel-green/10 p-6 rounded-lg border border-excel-green/20 mt-6">
                        <h4 className="font-semibold mb-3">Exercise 4: Financial Performance Analysis</h4>
                        
                        <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Quarterly Financial Data</h5>
                            <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                              const tableData = [
                                ['Quarter', 'Revenue', 'Expenses', 'Profit', 'Profit Margin', 'Cash Flow', 'Assets', 'Liabilities', 'Equity'],
                                ['2022-Q1', '850000', '680000', '170000', '20%', '145000', '3200000', '1450000', '1750000'],
                                ['2022-Q2', '920000', '710000', '210000', '23%', '190000', '3350000', '1420000', '1930000'],
                                ['2022-Q3', '880000', '695000', '185000', '21%', '160000', '3480000', '1510000', '1970000'],
                                ['2022-Q4', '950000', '735000', '215000', '23%', '195000', '3620000', '1580000', '2040000'],
                                ['2023-Q1', '920000', '720000', '200000', '22%', '175000', '3750000', '1640000', '2110000'],
                                ['2023-Q2', '980000', '760000', '220000', '22%', '200000', '3890000', '1680000', '2210000'],
                                ['2023-Q3', '1020000', '790000', '230000', '23%', '210000', '4050000', '1740000', '2310000'],
                                ['2023-Q4', '1100000', '830000', '270000', '25%', '250000', '4280000', '1820000', '2460000'],
                                ['2024-Q1', '1050000', '810000', '240000', '23%', '220000', '4420000', '1860000', '2560000'],
                                ['2024-Q2', '1120000', '850000', '270000', '24%', '245000', '4580000', '1890000', '2690000']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-4 w-4 mr-1" />
                              <span className="text-xs">Copy Data</span>
                            </Button>
                          </div>
                          <table className="min-w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="py-2 px-3 text-left">Quarter</th>
                                <th className="py-2 px-3 text-left">Revenue</th>
                                <th className="py-2 px-3 text-left">Expenses</th>
                                <th className="py-2 px-3 text-left">Profit</th>
                                <th className="py-2 px-3 text-left">Profit Margin</th>
                                <th className="py-2 px-3 text-left">Cash Flow</th>
                                <th className="py-2 px-3 text-left">Assets</th>
                                <th className="py-2 px-3 text-left">Liabilities</th>
                                <th className="py-2 px-3 text-left">Equity</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="py-2 px-3">2022-Q1</td>
                                <td className="py-2 px-3">850,000</td>
                                <td className="py-2 px-3">680,000</td>
                                <td className="py-2 px-3">170,000</td>
                                <td className="py-2 px-3">20%</td>
                                <td className="py-2 px-3">145,000</td>
                                <td className="py-2 px-3">3,200,000</td>
                                <td className="py-2 px-3">1,450,000</td>
                                <td className="py-2 px-3">1,750,000</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">2022-Q2</td>
                                <td className="py-2 px-3">920,000</td>
                                <td className="py-2 px-3">710,000</td>
                                <td className="py-2 px-3">210,000</td>
                                <td className="py-2 px-3">23%</td>
                                <td className="py-2 px-3">190,000</td>
                                <td className="py-2 px-3">3,350,000</td>
                                <td className="py-2 px-3">1,420,000</td>
                                <td className="py-2 px-3">1,930,000</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="space-y-3">
                          <p className="text-sm font-medium">Instructions:</p>
                          <ol className="list-decimal ml-5 space-y-2 text-sm">
                            <li>Create a new workbook with the quarterly financial data</li>
                            <li>Create a candlestick chart to visualize financial performance:</li>
                            <ul className="list-disc ml-5 mt-1">
                              <li>Create a stock chart showing Revenue, Expenses, and Profit</li>
                              <li>Add a secondary axis showing Profit Margin as a line</li>
                              <li>Format the axes with appropriate scales and labels</li>
                            </ul>
                            <li>Create a waterfall chart showing financial flow:</li>
                            <ul className="list-disc ml-5 mt-1">
                              <li>Show how Revenue flows to Expenses and then to Profit</li>
                              <li>Use appropriate colors to indicate increases and decreases</li>
                              <li>Add data labels for key values</li>
                            </ul>
                            <li>Create a financial balance chart:</li>
                            <ul className="list-disc ml-5 mt-1">
                              <li>Create a stacked column chart showing Assets, Liabilities, and Equity</li>
                              <li>Format to highlight the relationship between these values</li>
                              <li>Add data labels showing percentages</li>
                            </ul>
                            <li>Create a dynamic chart with dropdown selection:</li>
                            <ul className="list-disc ml-5 mt-1">
                              <li>Add a dropdown to switch between different financial metrics</li>
                              <li>Make the chart update automatically when selection changes</li>
                              <li>Include appropriate titles that update with selection</li>
                            </ul>
                            <li>Add trend indicators and financial performance metrics</li>
                          </ol>
                          <p className="text-sm mt-2 italic">Hint: For financial analysis, consider adding conditional formatting to the data table to highlight key performance indicators</p>
                        </div>

                        <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                          <h4 className="font-semibold mb-4 text-blue-800">Solution Guide</h4>
                          
                          <div className="mb-6">
                            <h5 className="font-medium text-blue-700 mb-3">Complete Financial Data Table</h5>
                            <div className="bg-white p-4 rounded border border-gray-200 overflow-x-auto">
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="py-2 px-3 text-left border-b">Quarter</th>
                                    <th className="py-2 px-3 text-right border-b">Revenue (ZAR)</th>
                                    <th className="py-2 px-3 text-right border-b">Expenses (ZAR)</th>
                                    <th className="py-2 px-3 text-right border-b">Profit (ZAR)</th>
                                    <th className="py-2 px-3 text-center border-b">Profit Margin</th>
                                    <th className="py-2 px-3 text-right border-b">Cash Flow (ZAR)</th>
                                    <th className="py-2 px-3 text-right border-b">Assets (ZAR)</th>
                                    <th className="py-2 px-3 text-right border-b">Liabilities (ZAR)</th>
                                    <th className="py-2 px-3 text-right border-b">Equity (ZAR)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    ['2022-Q1', 850000, 680000, 170000, '20%', 145000, 3200000, 1450000, 1750000],
                                    ['2022-Q2', 920000, 710000, 210000, '23%', 190000, 3350000, 1420000, 1930000],
                                    ['2022-Q3', 880000, 695000, 185000, '21%', 160000, 3480000, 1510000, 1970000],
                                    ['2022-Q4', 950000, 735000, 215000, '23%', 195000, 3620000, 1580000, 2040000],
                                    ['2023-Q1', 920000, 720000, 200000, '22%', 175000, 3750000, 1640000, 2110000],
                                    ['2023-Q2', 980000, 760000, 220000, '22%', 200000, 3890000, 1680000, 2210000],
                                    ['2023-Q3', 1020000, 790000, 230000, '23%', 210000, 4050000, 1740000, 2310000],
                                    ['2023-Q4', 1100000, 830000, 270000, '25%', 250000, 4280000, 1820000, 2460000],
                                    ['2024-Q1', 1050000, 810000, 240000, '23%', 220000, 4420000, 1860000, 2560000],
                                    ['2024-Q2', 1120000, 850000, 270000, '24%', 245000, 4580000, 1890000, 2690000]
                                  ].map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                      <td className="py-2 px-3 border-b">{row[0]}</td>
                                      <td className="py-2 px-3 text-right border-b">R{row[1].toLocaleString('en-ZA')}</td>
                                      <td className="py-2 px-3 text-right border-b">R{row[2].toLocaleString('en-ZA')}</td>
                                      <td className="py-2 px-3 text-right border-b font-medium">R{row[3].toLocaleString('en-ZA')}</td>
                                      <td className="py-2 px-3 text-center border-b">{row[4]}</td>
                                      <td className="py-2 px-3 text-right border-b">R{row[5].toLocaleString('en-ZA')}</td>
                                      <td className="py-2 px-3 text-right border-b">R{row[6].toLocaleString('en-ZA')}</td>
                                      <td className="py-2 px-3 text-right border-b">R{row[7].toLocaleString('en-ZA')}</td>
                                      <td className="py-2 px-3 text-right border-b font-medium">R{row[8].toLocaleString('en-ZA')}</td>
                                    </tr>
                                  ))}
                                </tbody>
                                <tfoot>
                                  <tr className="bg-gray-100">
                                    <td className="py-2 px-3 font-medium">Averages</td>
                                    <td className="py-2 px-3 text-right font-medium">R958 000</td>
                                    <td className="py-2 px-3 text-right font-medium">R758 000</td>
                                    <td className="py-2 px-3 text-right font-medium">R221 000</td>
                                    <td className="py-2 px-3 text-center font-medium">22.6%</td>
                                    <td className="py-2 px-3 text-right font-medium">R199 000</td>
                                    <td className="py-2 px-3 text-right font-medium">R3 870 000</td>
                                    <td className="py-2 px-3 text-right font-medium">R1 663 000</td>
                                    <td className="py-2 px-3 text-right font-medium">R2 207 000</td>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">Table 1: Complete quarterly financial data (in ZAR) with calculated averages</p>
                          </div>

                          <div className="mt-8">
                            <h5 className="font-medium text-blue-700 mb-4">Financial Performance Charts</h5>
                            
                            {/* Revenue and Expenses Trend */}
                            <div className="mb-8 p-4 bg-white rounded-lg border border-gray-200">
                              <h6 className="text-sm font-medium mb-3">Quarterly Revenue & Expenses Trend</h6>
                              <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                  <ComposedChart
                                    data={[
                                      { quarter: '2022-Q1', revenue: 850000, expenses: 680000, profit: 170000 },
                                      { quarter: '2022-Q2', revenue: 920000, expenses: 710000, profit: 210000 },
                                      { quarter: '2022-Q3', revenue: 880000, expenses: 695000, profit: 185000 },
                                      { quarter: '2022-Q4', revenue: 950000, expenses: 735000, profit: 215000 },
                                      { quarter: '2023-Q1', revenue: 920000, expenses: 720000, profit: 200000 },
                                      { quarter: '2023-Q2', revenue: 980000, expenses: 760000, profit: 220000 },
                                      { quarter: '2023-Q3', revenue: 1020000, expenses: 790000, profit: 230000 },
                                      { quarter: '2023-Q4', revenue: 1100000, expenses: 830000, profit: 270000 },
                                      { quarter: '2024-Q1', revenue: 1050000, expenses: 810000, profit: 240000 },
                                      { quarter: '2024-Q2', revenue: 1120000, expenses: 850000, profit: 270000 },
                                    ]}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                  >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis dataKey="quarter" />
                                    <YAxis 
                                      tickFormatter={(value) => `R${(value / 1000).toLocaleString('en-ZA')}K`}
                                      width={80}
                                    />
                                    <Tooltip 
                                      formatter={(value, name) => [`R${value.toLocaleString('en-ZA')}`, name]}
                                      labelFormatter={(label) => `Quarter: ${label}`}
                                    />
                                    <Legend />
                                    <Line 
                                      type="monotone" 
                                      dataKey="revenue" 
                                      name="Revenue" 
                                      stroke="#4CAF50" 
                                      strokeWidth={2} 
                                      dot={{ r: 4 }}
                                      activeDot={{ r: 6 }}
                                    />
                                    <Line 
                                      type="monotone" 
                                      dataKey="expenses" 
                                      name="Expenses" 
                                      stroke="#F44336" 
                                      strokeWidth={2}
                                      dot={{ r: 4 }}
                                      activeDot={{ r: 6 }}
                                    />
                                    <Line 
                                      type="monotone" 
                                      dataKey="profit" 
                                      name="Profit" 
                                      stroke="#2196F3" 
                                      strokeWidth={2}
                                      dot={{ r: 4 }}
                                      activeDot={{ r: 6 }}
                                    />
                                  </ComposedChart>
                                </ResponsiveContainer>
                              </div>
                            </div>

                            {/* Profit Margin Bar Chart */}
                            <div className="mb-8 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                              <h6 className="text-sm font-medium mb-3 text-gray-800">Profit Margin by Quarter</h6>
                              <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                  <BarChart
                                    data={[
                                      { quarter: '2022-Q1', margin: 20, trend: 'up' },
                                      { quarter: '2022-Q2', margin: 23, trend: 'up' },
                                      { quarter: '2022-Q3', margin: 21, trend: 'down' },
                                      { quarter: '2022-Q4', margin: 23, trend: 'up' },
                                      { quarter: '2023-Q1', margin: 22, trend: 'down' },
                                      { quarter: '2023-Q2', margin: 22, trend: 'neutral' },
                                      { quarter: '2023-Q3', margin: 23, trend: 'up' },
                                      { quarter: '2023-Q4', margin: 25, trend: 'up' },
                                      { quarter: '2024-Q1', margin: 23, trend: 'down' },
                                      { quarter: '2024-Q2', margin: 24, trend: 'up' },
                                    ]}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                    barCategoryGap={10}
                                  >
                                    <defs>
                                      <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#A7F3D0" />
                                        <stop offset="100%" stopColor="#6EE7B7" />
                                      </linearGradient>
                                      <linearGradient id="colorMedium" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#BFDBFE" />
                                        <stop offset="100%" stopColor="#93C5FD" />
                                      </linearGradient>
                                      <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#FECACA" />
                                        <stop offset="100%" stopColor="#FCA5A5" />
                                      </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis 
                                      dataKey="quarter" 
                                      tick={{ fill: '#4B5563', fontSize: 12 }}
                                    />
                                    <YAxis 
                                      tickFormatter={(value) => `${value}%`}
                                      domain={[0, 30]}
                                      width={40}
                                      tick={{ fill: '#4B5563', fontSize: 12 }}
                                    />
                                    <Tooltip 
                                      formatter={(value) => [`${value}%`, 'Profit Margin']}
                                      labelFormatter={(label) => `Quarter: ${label}`}
                                      contentStyle={{
                                        background: 'rgba(255, 255, 255, 0.96)',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '6px',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                      }}
                                    />
                                    <Bar 
                                      dataKey="margin" 
                                      name="Profit Margin"
                                      radius={[4, 4, 0, 0]}
                                    >
                                      {[
                                        { quarter: '2022-Q1', margin: 20, trend: 'up' },
                                        { quarter: '2022-Q2', margin: 23, trend: 'up' },
                                        { quarter: '2022-Q3', margin: 21, trend: 'down' },
                                        { quarter: '2022-Q4', margin: 23, trend: 'up' },
                                        { quarter: '2023-Q1', margin: 22, trend: 'down' },
                                        { quarter: '2023-Q2', margin: 22, trend: 'neutral' },
                                        { quarter: '2023-Q3', margin: 23, trend: 'up' },
                                        { quarter: '2023-Q4', margin: 25, trend: 'up' },
                                        { quarter: '2024-Q1', margin: 23, trend: 'down' },
                                        { quarter: '2024-Q2', margin: 24, trend: 'up' },
                                      ].map((entry, index) => (
                                        <Cell 
                                          key={`cell-${index}`} 
                                          fill={
                                            entry.margin >= 23 ? 'url(#colorHigh)' : 
                                            entry.margin >= 21 ? 'url(#colorMedium)' : 'url(#colorLow)'
                                          }
                                          stroke={
                                            entry.margin >= 23 ? '#34D399' : 
                                            entry.margin >= 21 ? '#60A5FA' : '#F87171'
                                          }
                                          strokeWidth={1}
                                        />
                                      ))}
                                    </Bar>
                                    <ReferenceLine 
                                      y={22.6} 
                                      stroke="#6B7280" 
                                      strokeDasharray="3 3"
                                      strokeWidth={1.5}
                                    >
                                      <Label 
                                        value="Avg: 22.6%" 
                                        position="right" 
                                        fill="#4B5563" 
                                        fontSize={12}
                                        fontWeight={500}
                                      />
                                    </ReferenceLine>
                                  </BarChart>
                                </ResponsiveContainer>
                              </div>
                            </div>

                            {/* Assets vs Liabilities Area Chart */}
                            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                              <h6 className="text-sm font-medium mb-3 text-gray-800">Assets vs Liabilities</h6>
                              <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                  <AreaChart
                                    data={[
                                      { quarter: '2022-Q1', assets: 3200000, liabilities: 1450000 },
                                      { quarter: '2022-Q2', assets: 3350000, liabilities: 1420000 },
                                      { quarter: '2022-Q3', assets: 3480000, liabilities: 1510000 },
                                      { quarter: '2022-Q4', assets: 3620000, liabilities: 1580000 },
                                      { quarter: '2023-Q1', assets: 3750000, liabilities: 1640000 },
                                      { quarter: '2023-Q2', assets: 3890000, liabilities: 1680000 },
                                      { quarter: '2023-Q3', assets: 4050000, liabilities: 1740000 },
                                      { quarter: '2023-Q4', assets: 4280000, liabilities: 1820000 },
                                      { quarter: '2024-Q1', assets: 4420000, liabilities: 1860000 },
                                      { quarter: '2024-Q2', assets: 4580000, liabilities: 1890000 },
                                    ]}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                  >
                                    <defs>
                                      <linearGradient id="colorAssets" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#A7F3D0" stopOpacity={0.9}/>
                                        <stop offset="100%" stopColor="#6EE7B7" stopOpacity={0.3}/>
                                      </linearGradient>
                                      <linearGradient id="colorLiabilities" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#FECACA" stopOpacity={0.9}/>
                                        <stop offset="100%" stopColor="#FCA5A5" stopOpacity={0.3}/>
                                      </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis dataKey="quarter" />
                                    <YAxis 
                                      tickFormatter={(value) => `R${(value / 1000000).toFixed(1)}M`}
                                      width={80}
                                    />
                                    <Tooltip 
                                      formatter={(value, name) => [`R${Number(value).toLocaleString('en-ZA')}`, name]}
                                      labelFormatter={(label) => `Quarter: ${label}`}
                                    />
                                    <Legend />
                                    <Area 
                                      type="monotone" 
                                      dataKey="assets" 
                                      name="Total Assets" 
                                      stroke="#34D399" 
                                      strokeWidth={2}
                                      fillOpacity={0.8} 
                                      fill="url(#colorAssets)" 
                                      dot={{ fill: '#34D399', stroke: '#fff', strokeWidth: 2, r: 4 }}
                                      activeDot={{ fill: '#34D399', stroke: '#fff', strokeWidth: 2, r: 6 }}
                                    />
                                    <Area 
                                      type="monotone" 
                                      dataKey="liabilities" 
                                      name="Total Liabilities" 
                                      stroke="#F87171" 
                                      strokeWidth={2}
                                      fillOpacity={0.8} 
                                      fill="url(#colorLiabilities)" 
                                      dot={{ fill: '#F87171', stroke: '#fff', strokeWidth: 2, r: 4 }}
                                      activeDot={{ fill: '#F87171', stroke: '#fff', strokeWidth: 2, r: 6 }}
                                    />
                                  </AreaChart>
                                </ResponsiveContainer>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h5 className="font-medium text-blue-700 mb-2">1. Setting Up the Data</h5>
                              <ul className="list-disc ml-5 space-y-1 text-sm">
                                <li>Copy the provided data into a new Excel workbook (Sheet1)</li>
                                <li>Format the data as a table (Ctrl+T) and name it "FinancialData"</li>
                                <li>Ensure all monetary values are properly formatted as Currency</li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-blue-700 mb-2">2. Creating the Candlestick Chart</h5>
                              <ol className="list-decimal ml-5 space-y-1 text-sm">
                                <li>Select the Quarter, Revenue, Expenses, and Profit columns</li>
                                <li>Go to Insert → Charts → Stock → Open-High-Low-Close</li>
                                <li>Right-click on the chart → Select Data → Switch Row/Column if needed</li>
                                <li>Right-click on Profit series → Change Series Chart Type → Line</li>
                                <li>Right-click on Profit series → Format Data Series → Secondary Axis</li>
                                <li>Add axis titles and format the chart</li>
                              </ol>
                            </div>

                            <div>
                              <h5 className="font-medium text-blue-700 mb-2">3. Creating the Waterfall Chart</h5>
                              <ol className="list-decimal ml-5 space-y-1 text-sm">
                                <li>Insert a new column for the running total</li>
                                <li>Select the Quarter, Revenue, Expenses, and Profit columns</li>
                                <li>Go to Insert → Waterfall Chart</li>
                                <li>Right-click on the first and last columns → Set as Total</li>
                                <li>Format colors: green for increases, red for decreases</li>
                                <li>Add data labels and format the chart</li>
                              </ol>
                            </div>

                            <div>
                              <h5 className="font-medium text-blue-700 mb-2">4. Creating the Balance Chart</h5>
                              <ol className="list-decimal ml-5 space-y-1 text-sm">
                                <li>Select the Quarter, Assets, Liabilities, and Equity columns</li>
                                <li>Go to Insert → Stacked Column Chart</li>
                                <li>Right-click on the chart → Select Data → Switch Row/Column</li>
                                <li>Add data labels showing values</li>
                                <li>Format the chart with appropriate colors</li>
                              </ol>
                            </div>

                            <div>
                              <h5 className="font-medium text-blue-700 mb-2">5. Creating a Dynamic Chart</h5>
                              <ol className="list-decimal ml-5 space-y-1 text-sm">
                                <li>Create a named range for the metrics: Revenue, Expenses, Profit, etc.</li>
                                <li>Insert → Form Controls → Combo Box (Form Control)</li>
                                <li>Link it to the list of metrics</li>
                                <li>Create a dynamic range using INDEX and MATCH functions</li>
                                <li>Create a line chart using the dynamic range</li>
                              </ol>
                              <div className="mt-2 p-3 bg-white rounded border text-xs font-mono">
                                <p>Dynamic range formula example:</p>
                                <p className="text-blue-600">=OFFSET(FinancialData[#Headers],1,MATCH(metric_cell,FinancialData[#Headers],0)-1,COUNTA(FinancialData[Quarter]),1)</p>
                              </div>
                            </div>

                            <div>
                              <h5 className="font-medium text-blue-700 mb-2">6. Adding Trend Indicators</h5>
                              <ul className="list-disc ml-5 space-y-1 text-sm">
                                <li>Use the FORECAST.ETS function to predict future values</li>
                                <li>Add trendlines to charts (right-click on series → Add Trendline)</li>
                                <li>Use conditional formatting to highlight key metrics</li>
                                <li>Add sparklines for quick trend visualization</li>
                              </ul>
                            </div>

                            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
                              <h5 className="font-medium text-yellow-800">Pro Tips:</h5>
                              <ul className="list-disc ml-5 mt-1 space-y-1 text-sm text-yellow-700">
                                <li>Use named ranges to make your formulas more readable</li>
                                <li>Create a dashboard with all charts on one sheet</li>
                                <li>Add slicers for interactive filtering</li>
                                <li>Use data validation for the dropdown menu</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>



                      <div className="bg-excel-green/10 p-6 rounded-lg border border-excel-green/20 mt-6">
                        <h4 className="font-semibold mb-3">Exercise 5: Geographic Data Visualization</h4>
                        
                        <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Regional Sales & Performance Data</h5>
                            <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                              const tableData = [
                                ['Region', 'Country', 'Sales Volume', 'Revenue', 'Growth Rate', 'Market Penetration', 'Customer Satisfaction', 'Profit'],
                                ['North America', 'United States', '12500', '2250000', '8.5%', '72%', '4.2', '675000'],
                                ['North America', 'Canada', '3200', '576000', '7.2%', '68%', '4.4', '201600'],
                                ['North America', 'Mexico', '2800', '504000', '9.1%', '58%', '3.9', '151200'],
                                ['Europe', 'United Kingdom', '5600', '1008000', '6.8%', '75%', '4.3', '352800'],
                                ['Europe', 'Germany', '6200', '1116000', '5.9%', '78%', '4.5', '390600'],
                                ['Europe', 'France', '4900', '882000', '5.2%', '72%', '4.1', '308700'],
                                ['Europe', 'Italy', '3800', '684000', '4.5%', '65%', '3.8', '205200'],
                                ['Europe', 'Spain', '3200', '576000', '5.0%', '62%', '3.9', '172800'],
                                ['Asia Pacific', 'China', '9800', '1764000', '12.5%', '45%', '3.7', '617400'],
                                ['Asia Pacific', 'Japan', '4200', '756000', '6.8%', '58%', '4.4', '264600'],
                                ['Asia Pacific', 'Australia', '2600', '468000', '7.5%', '70%', '4.2', '163800'],
                                ['Asia Pacific', 'India', '5800', '1044000', '14.2%', '32%', '3.5', '313200'],
                                ['South America', 'Brazil', '3500', '630000', '9.8%', '42%', '3.6', '189000'],
                                ['South America', 'Argentina', '1800', '324000', '7.5%', '38%', '3.4', '97200'],
                                ['Africa', 'South Africa', '2100', '378000', '11.5%', '35%', '3.8', '113400'],
                                ['Africa', 'Egypt', '1500', '270000', '13.2%', '28%', '3.5', '81000']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-4 w-4 mr-1" />
                              <span className="text-xs">Copy Data</span>
                            </Button>
                          </div>
                          <table className="min-w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="py-2 px-3 text-left">Region</th>
                                <th className="py-2 px-3 text-left">Country</th>
                                <th className="py-2 px-3 text-left">Sales Volume</th>
                                <th className="py-2 px-3 text-left">Revenue</th>
                                <th className="py-2 px-3 text-left">Growth Rate</th>
                                <th className="py-2 px-3 text-left">Market Penetration</th>
                                <th className="py-2 px-3 text-left">Customer Satisfaction</th>
                                <th className="py-2 px-3 text-left">Profit</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="py-2 px-3">North America</td>
                                <td className="py-2 px-3">United States</td>
                                <td className="py-2 px-3">12,500</td>
                                <td className="py-2 px-3">2,250,000</td>
                                <td className="py-2 px-3">8.5%</td>
                                <td className="py-2 px-3">72%</td>
                                <td className="py-2 px-3">4.2</td>
                                <td className="py-2 px-3">675,000</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">North America</td>
                                <td className="py-2 px-3">Canada</td>
                                <td className="py-2 px-3">3,200</td>
                                <td className="py-2 px-3">576,000</td>
                                <td className="py-2 px-3">7.2%</td>
                                <td className="py-2 px-3">68%</td>
                                <td className="py-2 px-3">4.4</td>
                                <td className="py-2 px-3">201,600</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                                <td className="py-2 px-3">...</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="space-y-3">
                          <p className="text-sm font-medium">Instructions:</p>
                          <ol className="list-decimal ml-5 space-y-2 text-sm">
                            <li>Create a new workbook with the regional sales data</li>
                            <li>Create a map chart to visualize geographic performance:</li>
                            <ul className="list-disc ml-5 mt-1">
                              <li>Use the geography data to create a filled map chart</li>
                              <li>Color-code countries by revenue or sales volume</li>
                              <li>Add data labels showing key metrics for each country</li>
                              <li>Format the map with an appropriate color gradient</li>
                            </ul>
                            <li>Create a hierarchical treemap chart:</li>
                            <ul className="list-disc ml-5 mt-1">
                              <li>Organize data by Region → Country</li>
                              <li>Size rectangles by Revenue</li>
                              <li>Color-code by Growth Rate</li>
                              <li>Add data labels for countries and values</li>
                            </ul>
                            <li>Create a geographic performance dashboard:</li>
                            <ul className="list-disc ml-5 mt-1">
                              <li>Combine the map chart with supporting charts (bar charts, gauges, etc.)</li>
                              <li>Add slicers to filter by region, growth rate range, or market penetration</li>
                              <li>Create calculated fields to show performance against targets</li>
                              <li>Include KPI cards or indicators for key metrics</li>
                            </ul>
                            <li>Create a scatter map for multi-dimensional analysis:</li>
                            <ul className="list-disc ml-5 mt-1">
                              <li>Plot points on the map representing countries</li>
                              <li>Size points by Sales Volume</li>
                              <li>Use color to represent Customer Satisfaction</li>
                              <li>Add tooltips showing additional metrics when hovering</li>
                            </ul>
                            <li>Format your visualizations professionally and add descriptive titles and legends</li>
                          </ol>
                          <p className="text-sm mt-2 italic">Hint: For best results with geographic data, ensure country names match Excel's recognized geography data format</p>
                        </div>

                        {/* Sample Visualizations */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-medium mb-2">Revenue by Country (Map)</h5>
                            <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
                              <ResponsiveContainer width="100%" height="100%">
                                <ComposedChart
                                  layout="vertical"
                                  data={[
                                    { name: 'United States', value: 2250000 },
                                    { name: 'Germany', value: 1116000 },
                                    { name: 'United Kingdom', value: 1008000 },
                                    { name: 'China', value: 1764000 },
                                    { name: 'Japan', value: 756000 },
                                  ]}
                                >
                                  <CartesianGrid stroke="#f5f5f5" />
                                  <XAxis type="number" />
                                  <YAxis dataKey="name" type="category" scale="band" />
                                  <Tooltip formatter={(value) => [`R${value.toLocaleString()}`, 'Revenue']} />
                                  <Bar dataKey="value" barSize={20} fill="#4f46e5" />
                                </ComposedChart>
                              </ResponsiveContainer>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Figure 1: Revenue distribution by country</p>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-medium mb-2">Market Penetration vs. Growth</h5>
                            <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
                              <ResponsiveContainer width="100%" height="100%">
                                <ScatterChart>
                                  <CartesianGrid />
                                  <XAxis type="number" dataKey="penetration" name="Market Penetration" unit="%" />
                                  <YAxis type="number" dataKey="growth" name="Growth Rate" unit="%" />
                                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                  <Scatter name="Countries" data={[
                                    { penetration: 72, growth: 8.5, size: 12500 },
                                    { penetration: 68, growth: 7.2, size: 3200 },
                                    { penetration: 75, growth: 6.8, size: 5600 },
                                    { penetration: 78, growth: 5.9, size: 6200 },
                                    { penetration: 45, growth: 12.5, size: 9800 },
                                  ]} fill="#4f46e5">
                                    {[
                                      { penetration: 72, growth: 8.5, size: 12500 },
                                      { penetration: 68, growth: 7.2, size: 3200 },
                                      { penetration: 75, growth: 6.8, size: 5600 },
                                      { penetration: 78, growth: 5.9, size: 6200 },
                                      { penetration: 45, growth: 12.5, size: 9800 },
                                    ].map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={
                                        entry.growth > 10 ? '#10b981' : 
                                        entry.growth > 7 ? '#3b82f6' : 
                                        entry.growth > 5 ? '#f59e0b' : '#ef4444'
                                      } />
                                    ))}
                                  </Scatter>
                                </ScatterChart>
                              </ResponsiveContainer>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Figure 2: Market penetration vs. growth rate analysis</p>
                          </div>
                        </div>

                        {/* Solution */}
                        <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-blue-800 mb-3">Solution Guide</h5>
                          
                          <div className="space-y-4">
                            <div>
                              <h6 className="font-medium text-blue-700 mb-2">1. Creating a Map Chart</h6>
                              <ol className="list-decimal ml-5 space-y-1 text-sm">
                                <li>Select your data (including headers)</li>
                                <li>Go to <span className="font-mono bg-white px-1 rounded border">Insert</span> → <span className="font-mono bg-white px-1 rounded border">Maps</span> → <span className="font-mono bg-white px-1 rounded border">Filled Map</span></li>
                                <li>Right-click on the map and select <span className="font-mono bg-white px-1 rounded border">Format Data Series</span></li>
                                <li>Under <span className="font-mono bg-white px-1 rounded border">Series Options</span>, select <span className="font-mono bg-white px-1 rounded border">Color</span> and choose a color scale</li>
                                <li>Add data labels showing country names and revenue</li>
                              </ol>
                            </div>

                            <div>
                              <h6 className="font-medium text-blue-700 mb-2">2. Creating a Treemap Chart</h6>
                              <ol className="list-decimal ml-5 space-y-1 text-sm">
                                <li>Select your data (Region, Country, Revenue, Growth Rate)</li>
                                <li>Go to <span className="font-mono bg-white px-1 rounded border">Insert</span> → <span className="font-mono bg-white px-1 rounded border">Hierarchy Chart</span> → <span className="font-mono bg-white px-1 rounded border">Treemap</span></li>
                                <li>Right-click on the chart and select <span className="font-mono bg-white px-1 rounded border">Format Data Series</span></li>
                                <li>Under <span className="font-mono bg-white px-1 rounded border">Series Options</span>, set:
                                  <ul className="list-disc ml-5 mt-1">
                                    <li>Size by: Revenue</li>
                                    <li>Color by: Growth Rate</li>
                                  </ul>
                                </li>
                              </ol>
                            </div>

                            <div>
                              <h6 className="font-medium text-blue-700 mb-2">3. Creating a Dashboard</h6>
                              <ol className="list-decimal ml-5 space-y-1 text-sm">
                                <li>Insert a new worksheet and name it "Dashboard"</li>
                                <li>Copy and paste your map and treemap charts</li>
                                <li>Add slicers for filtering:
                                  <ul className="list-disc ml-5 mt-1">
                                    <li>Select your data table</li>
                                    <li>Go to <span className="font-mono bg-white px-1 rounded border">Insert</span> → <span className="font-mono bg-white px-1 rounded border">Slicer</span></li>
                                    <li>Add slicers for Region and Market Penetration ranges</li>
                                  </ul>
                                </li>
                                <li>Add KPI cards using formulas:
                                  <pre className="bg-white p-2 rounded mt-2 text-xs overflow-x-auto">
                                    {`Total Revenue: =SUM(Table1[Revenue])
Average Growth: =AVERAGE(Table1[Growth Rate])
Top Market: =INDEX(Table1[Country], MATCH(MAX(Table1[Market Penetration]), Table1[Market Penetration], 0))`}
                                  </pre>
                                </li>
                              </ol>
                            </div>

                            <div>
                              <h6 className="font-medium text-blue-700 mb-2">4. Creating a Scatter Map</h6>
                              <ol className="list-decimal ml-5 space-y-1 text-sm">
                                <li>Create a bubble chart with the following data:
                                  <ul className="list-disc ml-5 mt-1">
                                    <li>X-axis: Customer Satisfaction</li>
                                    <li>Y-axis: Profit Margin</li>
                                    <li>Size: Sales Volume</li>
                                    <li>Color: Region</li>
                                  </ul>
                                </li>
                                <li>Overlay this on your map chart by:
                                  <ul className="list-disc ml-5 mt-1">
                                    <li>Copy the bubble chart</li>
                                    <li>Paste it onto the map chart</li>
                                    <li>Format the bubble chart to be transparent with only markers visible</li>
                                  </ul>
                                </li>
                              </ol>
                            </div>

                            <div className="p-3 bg-blue-100 rounded border border-blue-200">
                              <h6 className="font-medium text-blue-800 mb-1">Pro Tips:</h6>
                              <ul className="list-disc ml-5 text-sm text-blue-700 space-y-1">
                                <li>Use <span className="font-mono bg-white px-1 rounded border">Data Validation</span> to create dropdowns for interactive filtering</li>
                                <li>Add <span className="font-mono bg-white px-1 rounded border">Sparklines</span> to show trends for each region</li>
                                <li>Use <span className="font-mono bg-white px-1 rounded border">Conditional Formatting</span> to highlight top/bottom performers</li>
                                <li>Create dynamic titles using formulas like: <span className="font-mono bg-white px-1 rounded border">="Sales Overview - "&TEXT(TODAY(),"mmmm yyyy")</span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

</>)}

                      {/* Exercise 11 for Formulas Topic: Advanced Excel Functions */}
                      {currentTopic.id === "formulas" && (
                      <div className="bg-excel-green/10 p-6 rounded-lg border border-excel-green/20">
                        <h4 className="font-semibold mb-3">Exercise 11: Advanced Formula Techniques</h4>
                        
                        <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Product Inventory Data</h5>
                            <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                              const tableData = [
                                ['Product ID', 'Product Name', 'Category', 'Stock Level', 'Unit Price', 'Supplier', 'Last Ordered', 'Reorder Level'],
                                ['P-1001', 'Office Chair', 'Furniture', '24', 'R1,200.00', 'Office World', '12/03/2023', '10'],
                                ['P-1002', 'Desk Lamp', 'Accessories', '36', 'R350.00', 'LightCo', '05/04/2023', '15'],
                                ['P-1003', 'Notebook (A4)', 'Stationery', '150', 'R45.00', 'PaperPlus', '20/02/2023', '50'],
                                ['P-1004', 'Laser Printer', 'Electronics', '8', 'R3,500.00', 'TechSource', '15/01/2023', '5'],
                                ['P-1005', 'Ballpoint Pens (Box)', 'Stationery', '72', 'R65.00', 'PaperPlus', '20/02/2023', '30'],
                                ['P-1006', 'Desk Organizer', 'Accessories', '18', 'R280.00', 'Office World', '12/03/2023', '10'],
                                ['P-1007', 'Wireless Mouse', 'Electronics', '42', 'R450.00', 'TechSource', '15/01/2023', '20'],
                                ['P-1008', 'Standing Desk', 'Furniture', '6', 'R4,500.00', 'ErgoCorp', '10/05/2023', '3'],
                                ['P-1009', 'Printer Paper (Ream)', 'Stationery', '95', 'R85.00', 'PaperPlus', '20/02/2023', '40'],
                                ['P-1010', 'Desk Calendar', 'Stationery', '28', 'R120.00', 'TimeKeep', '02/01/2023', '15']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-4 w-4 mr-1" />
                              <span className="text-xs">Copy Data</span>
                            </Button>
                          </div>
                          <div className="overflow-x-auto max-h-80">
                            <table className="min-w-full text-sm">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="py-2 px-3 text-left">Product ID</th>
                                  <th className="py-2 px-3 text-left">Product Name</th>
                                  <th className="py-2 px-3 text-left">Category</th>
                                  <th className="py-2 px-3 text-left">Stock Level</th>
                                  <th className="py-2 px-3 text-left">Unit Price</th>
                                  <th className="py-2 px-3 text-left">Supplier</th>
                                  <th className="py-2 px-3 text-left">Last Ordered</th>
                                  <th className="py-2 px-3 text-left">Reorder Level</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P-1001</td>
                                  <td className="py-2 px-3">Office Chair</td>
                                  <td className="py-2 px-3">Furniture</td>
                                  <td className="py-2 px-3">24</td>
                                  <td className="py-2 px-3">R1,200.00</td>
                                  <td className="py-2 px-3">Office World</td>
                                  <td className="py-2 px-3">12/03/2023</td>
                                  <td className="py-2 px-3">10</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P-1002</td>
                                  <td className="py-2 px-3">Desk Lamp</td>
                                  <td className="py-2 px-3">Accessories</td>
                                  <td className="py-2 px-3">36</td>
                                  <td className="py-2 px-3">R350.00</td>
                                  <td className="py-2 px-3">LightCo</td>
                                  <td className="py-2 px-3">05/04/2023</td>
                                  <td className="py-2 px-3">15</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P-1003</td>
                                  <td className="py-2 px-3">Notebook (A4)</td>
                                  <td className="py-2 px-3">Stationery</td>
                                  <td className="py-2 px-3">150</td>
                                  <td className="py-2 px-3">R45.00</td>
                                  <td className="py-2 px-3">PaperPlus</td>
                                  <td className="py-2 px-3">20/02/2023</td>
                                  <td className="py-2 px-3">50</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P-1004</td>
                                  <td className="py-2 px-3">Laser Printer</td>
                                  <td className="py-2 px-3">Electronics</td>
                                  <td className="py-2 px-3">8</td>
                                  <td className="py-2 px-3">R3,500.00</td>
                                  <td className="py-2 px-3">TechSource</td>
                                  <td className="py-2 px-3">15/01/2023</td>
                                  <td className="py-2 px-3">5</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P-1005</td>
                                  <td className="py-2 px-3">Ballpoint Pens (Box)</td>
                                  <td className="py-2 px-3">Stationery</td>
                                  <td className="py-2 px-3">72</td>
                                  <td className="py-2 px-3">R65.00</td>
                                  <td className="py-2 px-3">PaperPlus</td>
                                  <td className="py-2 px-3">20/02/2023</td>
                                  <td className="py-2 px-3">30</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">P-1006</td>
                                  <td className="py-2 px-3">Desk Organizer</td>
                                  <td className="py-2 px-3">Accessories</td>
                                  <td className="py-2 px-3">18</td>
                                  <td className="py-2 px-3">R280.00</td>
                                  <td className="py-2 px-3">Office World</td>
                                  <td className="py-2 px-3">12/03/2023</td>
                                  <td className="py-2 px-3">10</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="mt-2 text-xs text-muted-foreground">Table shows 6 of 10 products (scrollable in Excel)</p>
                        </div>
                        
                        <div className="space-y-3">
                          <p className="text-sm font-medium">Instructions:</p>
                          <ol className="list-decimal ml-5 space-y-2 text-sm">
                            <li>Create a new workbook with the inventory data</li>
                            <li>Create the following formulas:</li>
                            <ul className="list-disc ml-5 mt-1">
                              <li>Use VLOOKUP to find supplier details based on Product ID</li>
                              <li>Create an IF function to highlight products below reorder level</li>
                              <li>Use COUNTIF to count items per category</li>
                              <li>Create a SUMIF formula to calculate total value by category</li>
                              <li>Use nested IF statements to create a priority reorder list</li>
                            </ul>
                            <li>Create a CONCATENATE formula to combine product name and category</li>
                            <li>Use the TODAY() function with DATEDIF to calculate days since last order</li>
                            <li>Create a dynamic named range for your inventory data</li>
                            <li>Use array formulas (CTRL+SHIFT+ENTER) to analyze multiple criteria</li>
                            <li>Implement data validation with custom formula rules</li>
                          </ol>
                          <p className="text-sm mt-2 italic">Hint: For complex nested functions, build them step by step to ensure each part works correctly</p>
                        </div>

                        {/* Solutions Table */}
                        <div className="mt-6">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Expected Solution</h5>
                          </div>
                          <div className="bg-white p-4 rounded border border-green-200 overflow-x-auto">
                            <table className="min-w-full text-sm">
                              <thead>
                                <tr className="bg-green-50">
                                  <th className="py-2 px-3 text-left">Task</th>
                                  <th className="py-2 px-3 text-left">Formula Example</th>
                                  <th className="py-2 px-3 text-left">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="py-2 px-3 font-medium">VLOOKUP</td>
                                  <td className="py-2 px-3 font-mono">=VLOOKUP(A2,Inventory!A:H,6,FALSE)</td>
                                  <td className="py-2 px-3">Finds supplier for a given Product ID</td>
                                </tr>
                                <tr className="border-t bg-gray-50">
                                  <td className="py-2 px-3 font-medium">IF + Comparison</td>
                                  <td className="py-2 px-3 font-mono">=IF(D2&lt;E2,"Reorder","Stock OK")</td>
                                  <td className="py-2 px-3">Highlights items below reorder level</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3 font-medium">COUNTIF</td>
                                  <td className="py-2 px-3 font-mono">=COUNTIF(C2:C11,"Stationery")</td>
                                  <td className="py-2 px-3">Counts items in Stationery category</td>
                                </tr>
                                <tr className="border-t bg-gray-50">
                                  <td className="py-2 px-3 font-medium">SUMIF</td>
                                  <td className="py-2 px-3 font-mono">=SUMIF(C2:C11,"Electronics",D2:D11*E2:E11)</td>
                                  <td className="py-2 px-3">Total value of Electronics inventory</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3 font-medium">Nested IF</td>
                                  <td className="py-2 px-3 font-mono">="=IF(D2{'<'}E2,\"Urgent\",IF(D2{'<'}E2*1.5,\"Monitor\",\"OK\"))"</td>
                                  <td className="py-2 px-3">Priority reorder status</td>
                                </tr>
                                <tr className="border-t bg-gray-50">
                                  <td className="py-2 px-3 font-medium">CONCATENATE</td>
                                  <td className="py-2 px-3 font-mono">=B2&" ("&C2&")"</td>
                                  <td className="py-2 px-3">Combines product name and category</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3 font-medium">DATEDIF</td>
                                  <td className="py-2 px-3 font-mono">=DATEDIF(G2,TODAY(),"d")</td>
                                  <td className="py-2 px-3">Days since last order</td>
                                </tr>
                                <tr className="border-t bg-gray-50">
                                  <td className="py-2 px-3 font-medium">Array Formula</td>
                                  <td className="py-2 px-3 font-mono">{`{=MAX(IF(C2:C11="Furniture",D2:D11*E2:E11))}`}</td>
                                  <td className="py-2 px-3">Max value in Furniture category (CTRL+SHIFT+ENTER)</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Sample Output Table */}
                        <div className="mt-8">
                          <h5 className="text-sm font-medium mb-3">Sample Output</h5>
                          <div className="bg-white p-4 rounded border border-blue-100 overflow-x-auto">
                            <table className="min-w-full text-xs border-collapse">
                              <thead>
                                <tr className="bg-blue-50">
                                  <th className="p-2 border text-left">Product ID</th>
                                  <th className="p-2 border text-left">Product</th>
                                  <th className="p-2 border text-left">Category</th>
                                  <th className="p-2 border text-right">In Stock</th>
                                  <th className="p-2 border text-right">Reorder</th>
                                  <th className="p-2 border text-left">Status</th>
                                  <th className="p-2 border text-right">Inventory Value</th>
                                  <th className="p-2 border text-right">Days Since Order</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="p-2 border">P-1004</td>
                                  <td className="p-2 border">Laser Printer</td>
                                  <td className="p-2 border">Electronics</td>
                                  <td className="p-2 border text-right">8</td>
                                  <td className="p-2 border text-right">5</td>
                                  <td className="p-2 border text-red-600 font-medium">Reorder</td>
                                  <td className="p-2 border text-right">R 28,000.00</td>
                                  <td className="p-2 border text-right">201</td>
                                </tr>
                                <tr className="bg-gray-50">
                                  <td className="p-2 border">P-1008</td>
                                  <td className="p-2 border">Standing Desk</td>
                                  <td className="p-2 border">Furniture</td>
                                  <td className="p-2 border text-right">6</td>
                                  <td className="p-2 border text-right">3</td>
                                  <td className="p-2 border text-orange-500 font-medium">Monitor</td>
                                  <td className="p-2 border text-right">R 27,000.00</td>
                                  <td className="p-2 border text-right">115</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">P-1001</td>
                                  <td className="p-2 border">Office Chair</td>
                                  <td className="p-2 border">Furniture</td>
                                  <td className="p-2 border text-right">24</td>
                                  <td className="p-2 border text-right">10</td>
                                  <td className="p-2 border text-green-600 font-medium">Stock OK</td>
                                  <td className="p-2 border text-right">R 28,800.00</td>
                                  <td className="p-2 border text-right">144</td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="text-xs text-gray-500 mt-2">
                              Note: This is a sample of the expected output format after applying the formulas.
                            </p>
                          </div>
                        </div>
                      </div>
                      )}

                      {/* Exercise 12 for Formulas Topic: Financial Functions */}
                      {currentTopic.id === "formulas" && (
                      <div className="bg-excel-green/10 p-6 rounded-lg border border-excel-green/20">
                        <h4 className="font-semibold mb-3">Exercise 12: Financial Functions</h4>
                        
                        <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Financial Calculations Data</h5>
                            <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                              const tableData = [
                                ['Loan Calculations', '', '', ''],
                                ['Loan Amount', 'R350,000', '', ''],
                                ['Interest Rate (Annual)', '8.5%', '', ''],
                                ['Loan Term (Years)', '15', '', ''],
                                ['', '', '', ''],
                                ['Investment Calculations', '', '', ''],
                                ['Initial Investment', 'R50,000', '', ''],
                                ['Monthly Contribution', 'R2,500', '', ''],
                                ['Annual Interest Rate', '7.2%', '', ''],
                                ['Investment Period (Years)', '10', '', ''],
                                ['', '', '', ''],
                                ['Depreciation Calculations', '', '', ''],
                                ['Asset Cost', 'R120,000', '', ''],
                                ['Salvage Value', 'R15,000', '', ''],
                                ['Useful Life (Years)', '5', '', '']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-4 w-4 mr-1" />
                              <span className="text-xs">Copy Data</span>
                            </Button>
                          </div>
                          
                          <div className="mb-6">
                            <h6 className="text-xs font-medium text-gray-500 mb-1">Input Data Table</h6>
                            <table className="min-w-full text-xs border">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="p-2 border text-left">Category</th>
                                  <th className="p-2 border text-left">Parameter</th>
                                  <th className="p-2 border text-left">Value</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="p-2 border font-medium bg-gray-50" rowSpan={4}>Loan</td>
                                  <td className="p-2 border">Amount</td>
                                  <td className="p-2 border">R 350,000.00</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Annual Rate</td>
                                  <td className="p-2 border">8.50%</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Term (Years)</td>
                                  <td className="p-2 border">15</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Payment Frequency</td>
                                  <td className="p-2 border">Monthly</td>
                                </tr>
                                
                                <tr>
                                  <td className="p-2 border font-medium bg-gray-50" rowSpan={4}>Investment</td>
                                  <td className="p-2 border">Initial Amount</td>
                                  <td className="p-2 border">R 50,000.00</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Monthly Contribution</td>
                                  <td className="p-2 border">R 2,500.00</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Annual Rate</td>
                                  <td className="p-2 border">7.20%</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Term (Years)</td>
                                  <td className="p-2 border">10</td>
                                </tr>
                                
                                <tr>
                                  <td className="p-2 border font-medium bg-gray-50" rowSpan={3}>Depreciation</td>
                                  <td className="p-2 border">Asset Cost</td>
                                  <td className="p-2 border">R 120,000.00</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Salvage Value</td>
                                  <td className="p-2 border">R 15,000.00</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Useful Life (Years)</td>
                                  <td className="p-2 border">5</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <table className="min-w-full text-sm">
                            <tbody>
                              <tr>
                                <td className="py-2 px-3 font-medium bg-gray-50" colSpan={2}>Loan Calculations</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Loan Amount</td>
                                <td className="py-2 px-3">R350,000</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Interest Rate (Annual)</td>
                                <td className="py-2 px-3">8.5%</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Loan Term (Years)</td>
                                <td className="py-2 px-3">15</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-3 font-medium bg-gray-50" colSpan={2}>Investment Calculations</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Initial Investment</td>
                                <td className="py-2 px-3">R50,000</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Monthly Contribution</td>
                                <td className="py-2 px-3">R2,500</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">Annual Interest Rate</td>
                                <td className="py-2 px-3">7.2%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <p className="text-sm font-medium mb-2">Instructions:</p>
                            <ol className="list-decimal ml-5 space-y-2 text-sm">
                              <li>Create a new workbook with the financial data above</li>
                              <li>Use the PMT function to calculate the monthly payment for the loan</li>
                              <li>Calculate the total amount paid over the life of the loan</li>
                              <li>Create an amortization schedule for the first year showing principal and interest payments</li>
                              <li>Use the FV function to calculate the future value of the investment</li>
                              <li>Use the NPER function to determine how long it will take to reach a savings goal</li>
                              <li>Calculate the effective annual interest rate using the EFFECT function</li>
                              <li>Use the SLN, DB, and DDB functions to compare different depreciation methods</li>
                              <li>Create a data table to show how different interest rates affect loan payments</li>
                            </ol>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <details>
                              <summary style={{ listStyle: 'none' }} className="font-medium text-blue-700 cursor-pointer flex items-center">
                                <span>ℹ️ What do these instructions mean?</span>
                              </summary>
                              <div className="mt-3 text-sm text-gray-700 space-y-3">
                                <p>This exercise will help you understand important financial calculations:</p>
                                
                                <div className="ml-4 space-y-2">
                                  <p><strong>1. Monthly Loan Payment (PMT)</strong><br/>
                                  Calculate how much you'll pay each month on the R350,000 loan at 8.5% interest over 15 years.</p>
                                  
                                  <p><strong>2. Total Loan Cost</strong><br/>
                                  Find out the total amount you'll pay back by multiplying the monthly payment by the number of payments (15 years × 12 months).</p>
                                  
                                  <p><strong>3. First-Year Payment Breakdown</strong><br/>
                                  Create a table showing each month's payment for the first year, including how much goes toward the loan principal and how much is interest.</p>
                                  
                                  <p><strong>4. Investment Growth (FV)</strong><br/>
                                  Calculate how much your R50,000 investment will be worth in 10 years with R2,500 monthly additions at 7.2% annual interest.</p>
                                  
                                  <p><strong>5. Savings Goal Timeline (NPER)</strong><br/>
                                  Determine how many years it will take to save R1,000,000 with your current savings plan.</p>
                                  
                                  <p><strong>6. Effective Interest Rate (EFFECT)</strong><br/>
                                  Calculate the actual annual interest rate, accounting for how often interest is compounded.</p>
                                  
                                  <p><strong>7. Depreciation Methods</strong><br/>
                                  Compare three ways to calculate how a R120,000 asset loses value over 5 years:
                                  <ul className="list-disc ml-6 mt-1 space-y-1">
                                    <li>SLN: Same amount each year</li>
                                    <li>DB: More in early years, less later</li>
                                    <li>DDB: Even more in early years</li>
                                  </ul>
                                  </p>
                                  
                                  <p><strong>8. Interest Rate Impact</strong><br/>
                                  Create a table showing how different interest rates would change your monthly loan payments.</p>
                                </div>
                                
                                <p className="text-sm mt-3 font-medium">💡 <span className="font-normal">Remember: Press F1 in Excel for help with any function, or type "=" followed by the function name (like "=PMT(") and Excel will guide you through the required information.</span></p>
                              </div>
                            </details>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded border border-gray-200 mt-6">
                          <h5 className="font-medium text-excel-green mb-3">Solutions Table</h5>
                          <div className="overflow-x-auto">
                            <table className="min-w-full text-sm border-collapse">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="p-2 border text-left">Calculation</th>
                                  <th className="p-2 border text-left">Formula</th>
                                  <th className="p-2 border text-left">Expected Result</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="p-2 border font-medium bg-gray-50" colSpan={3}>Loan Calculations</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Monthly Payment (PMT)</td>
                                  <td className="p-2 border font-mono">=PMT(B4/12,B5*12,-B2)</td>
                                  <td className="p-2 border">R 3,449.16</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Total Payment (PMT * NPER)</td>
                                  <td className="p-2 border font-mono">=B8*B5*12</td>
                                  <td className="p-2 border">R 620,848.80</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border font-medium bg-gray-50" colSpan={3}>Investment Calculations</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Future Value (FV)</td>
                                  <td className="p-2 border font-mono">=FV(B12/12,B14*12,-B11,-B10)</td>
                                  <td className="p-2 border">R 535,842.17</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Months to Reach R1,000,000 (NPER)</td>
                                  <td className="p-2 border font-mono">=NPER(B12/12,-B11,-B10,1000000,0)/12</td>
                                  <td className="p-2 border">19.8 years</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border font-medium bg-gray-50" colSpan={3}>Depreciation Calculations</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Straight-Line (SLN)</td>
                                  <td className="p-2 border font-mono">=SLN(B17,B18,B19)</td>
                                  <td className="p-2 border">R 21,000.00/year</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Declining Balance (DB)</td>
                                  <td className="p-2 border font-mono">=DB(B17,B18,B19,1)</td>
                                  <td className="p-2 border">R 55,080.00 (Year 1)</td>
                                </tr>
                                <tr>
                                  <td className="p-2 border">Double-Declining (DDB)</td>
                                  <td className="p-2 border font-mono">=DDB(B17,B18,B19,1)</td>
                                  <td className="p-2 border">R 48,000.00 (Year 1)</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">
                            Note: For the amortization schedule and data table, please refer to the exercise instructions.
                            The above table shows key calculations using the provided financial data.
                          </p>
                        </div>
                      </div>
                      )}
                      
                      {/* Exercise for Basics Topic: File Management */}
                      {currentTopic.id === "basics" && (
                      <div className="bg-excel-blue/10 p-6 rounded-lg border border-excel-blue/20">
                        <h4 className="font-semibold mb-3">Exercise 5: Budget Management & Formulas</h4>
                        
                        <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Advanced Budget & Forecast Template</h5>
                            <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                              const tableData = [
                                ['ADVANCED BUDGET PLANNER', '', '', '', '', '', 'FORECAST PARAMETERS', '', ''],
                                ['Category', 'Budget', 'Actual', 'Variance', 'Last Month', '6-Month Avg', 'Parameter', 'Value', 'Notes'],
                                ['INCOME', '', '', '', '', '', 'Inflation Rate', '6.5%', 'Annual inflation'],
                                ['Salary', '25000', '25000', '=C3-B3', '25000', '24500', 'Income Growth', '5.0%', 'Annual increase'],
                                ['Side Business', '5000', '6200', '=C4-B4', '4800', '5100', 'Expense Growth', '3.5%', 'Annual increase'],
                                ['Investments', '1500', '1650', '=C5-B5', '1600', '1550', 'ROI', '8.0%', 'Annual return'],
                                ['Other Income', '1000', '800', '=C6-B6', '900', '950', 'Emergency Fund', '30000', 'Target amount'],
                                ['TOTAL INCOME', '=SUM(B3:B6)', '=SUM(C3:C6)', '=C7-B7', '=SUM(E3:E6)', '=AVERAGE(F3:F6)', 'Savings Goal', '15%', 'Of income'],
                                ['', '', '', '', '', '', 'Loan Rate', '9.5%', 'APR'],
                                ['FIXED EXPENSES', '', '', '', '', '', 'Loan Term', '5', 'Years'],
                                ['Housing', '8500', '8500', '=C10-B10', '8500', '8450', 'Tax Rate', '25%', 'Effective rate'],
                                ['Utilities', '2200', '2450', '=C11-B11', '2300', '2250', '', '', ''],
                                ['Insurance', '1500', '1500', '=C12-B12', '1500', '1500', 'FINANCIAL METRICS', '', ''],
                                ['Loan Payments', '3200', '3200', '=C13-B13', '3200', '3200', 'Debt-to-Income', '=B13/B7', '=TEXT(C13/C7,"0.0%")'],
                                ['Subscriptions', '450', '450', '=C14-B14', '450', '440', 'Savings Rate', '=(B7-SUM(B10:B20))/B7', '=TEXT((C7-SUM(C10:C20))/C7,"0.0%")'],
                                ['TOTAL FIXED', '=SUM(B10:B14)', '=SUM(C10:C14)', '=C15-B15', '=SUM(E10:E14)', '=AVERAGE(F10:F14)', 'Emergency Fund', '=B7*3', 'Months of expenses'],
                                ['', '', '', '', '', '', 'Net Worth', '=C7-C15-C20', 'Current month'],
                                ['VARIABLE EXPENSES', '', '', '', '', '', 'FORECAST NEXT 6 MONTHS', '', ''],
                                ['Groceries', '3500', '3750', '=C18-B18', '3600', '3550', 'Income', '=C7*(1+$H$4/12)^6', 'With growth'],
                                ['Transportation', '1800', '1650', '=C19-B19', '1720', '1780', 'Expenses', '=C15*(1+$H$5/12)^6', 'With inflation'],
                                ['Dining Out', '1200', '1500', '=C20-B20', '1300', '1250', 'Savings', '=H18-H19', 'Projected'],
                                ['Entertainment', '2000', '2300', '=C21-B21', '2100', '2050', 'Savings Rate', '=H20/H18', '=TEXT(H20/H18,"0.0%")'],
                                ['Shopping', '1800', '2100', '=C22-B22', '1950', '1850', 'ROI (6mo)', '=C7*($H$6/2)', '6-month return'],
                                ['Other', '1500', '1700', '=C23-B23', '1600', '1550', 'Loan Balance', '=PV($H$9/12,$H$10*12,-$B$13)', 'Current value'],
                                ['TOTAL VARIABLE', '=SUM(B18:B23)', '=SUM(C18:C23)', '=C24-B24', '=SUM(E18:E23)', '=AVERAGE(F18:F23)', 'Months to Goal', '=NPER($H$6/12,-H20,0,$H$8)/12', 'Years to target']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-4 w-4 mr-1" />
                              <span className="text-xs">Copy Data</span>
                            </Button>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="py-2 px-3 text-left" colSpan={6}>Budget vs Actual (Current Month)</th>
                                  <th className="py-2 px-3 text-left" colSpan={3}>Financial Forecast & Analysis</th>
                                </tr>
                                <tr className="bg-gray-50">
                                  <th className="py-2 px-3 text-left">Category</th>
                                  <th className="py-2 px-3 text-right">Budget</th>
                                  <th className="py-2 px-3 text-right">Actual</th>
                                  <th className="py-2 px-3 text-right">Variance</th>
                                  <th className="py-2 px-3 text-right">Last Month</th>
                                  <th className="py-2 px-3 text-right">6-Month Avg</th>
                                  <th className="py-2 px-3 text-left">Metric</th>
                                  <th className="py-2 px-3 text-right">Value</th>
                                  <th className="py-2 px-3 text-left">Notes</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t bg-gray-50">
                                  <td className="py-2 px-3 font-medium">INCOME</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3 font-medium">FORECAST PARAMETERS</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Salary</td>
                                  <td className="py-2 px-3 text-right">R25,000.00</td>
                                  <td className="py-2 px-3 text-right">R25,000.00</td>
                                  <td className="py-2 px-3 text-right text-green-600">R0.00</td>
                                  <td className="py-2 px-3 text-right">R25,000.00</td>
                                  <td className="py-2 px-3 text-right">R24,500.00</td>
                                  <td className="py-2 px-3">Inflation Rate</td>
                                  <td className="py-2 px-3 text-right">6.5%</td>
                                  <td className="py-2 px-3 text-xs">Annual inflation</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Side Business</td>
                                  <td className="py-2 px-3 text-right">R5,000.00</td>
                                  <td className="py-2 px-3 text-right">R6,200.00</td>
                                  <td className="py-2 px-3 text-right text-green-600">R1,200.00</td>
                                  <td className="py-2 px-3 text-right">R4,800.00</td>
                                  <td className="py-2 px-3 text-right">R5,100.00</td>
                                  <td className="py-2 px-3">Income Growth</td>
                                  <td className="py-2 px-3 text-right">5.0%</td>
                                  <td className="py-2 px-3 text-xs">Annual increase</td>
                                </tr>
                                <tr className="border-t bg-gray-50">
                                  <td className="py-2 px-3 font-medium">TOTAL INCOME</td>
                                  <td className="py-2 px-3 text-right font-medium">R32,000.00</td>
                                  <td className="py-2 px-3 text-right font-medium">R33,400.00</td>
                                  <td className="py-2 px-3 text-right font-medium text-green-600">R1,400.00</td>
                                  <td className="py-2 px-3 text-right">R31,700.00</td>
                                  <td className="py-2 px-3 text-right">R32,000.00</td>
                                  <td className="py-2 px-3 font-medium">FINANCIAL METRICS</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">FIXED EXPENSES</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3">Debt-to-Income</td>
                                  <td className="py-2 px-3 text-right">9.6%</td>
                                  <td className="py-2 px-3 text-xs">=3,200/33,400</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Housing</td>
                                  <td className="py-2 px-3 text-right">R8,500.00</td>
                                  <td className="py-2 px-3 text-right">R8,500.00</td>
                                  <td className="py-2 px-3 text-right">R0.00</td>
                                  <td className="py-2 px-3 text-right">R8,500.00</td>
                                  <td className="py-2 px-3 text-right">R8,450.00</td>
                                  <td className="py-2 px-3">Savings Rate</td>
                                  <td className="py-2 px-3 text-right">14.2%</td>
                                  <td className="py-2 px-3 text-xs">Of income</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">Loan Payments</td>
                                  <td className="py-2 px-3 text-right">R3,200.00</td>
                                  <td className="py-2 px-3 text-right">R3,200.00</td>
                                  <td className="py-2 px-3 text-right">R0.00</td>
                                  <td className="py-2 px-3 text-right">R3,200.00</td>
                                  <td className="py-2 px-3 text-right">R3,200.00</td>
                                  <td className="py-2 px-3 font-medium">FORECAST (6 MONTHS)</td>
                                  <td className="py-2 px-3"></td>
                                  <td className="py-2 px-3"></td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 px-3">TOTAL FIXED</td>
                                  <td className="py-2 px-3 text-right font-medium">R16,150.00</td>
                                  <td className="py-2 px-3 text-right font-medium">R16,150.00</td>
                                  <td className="py-2 px-3 text-right">R0.00</td>
                                  <td className="py-2 px-3 text-right">R16,050.00</td>
                                  <td className="py-2 px-3 text-right">R15,900.00</td>
                                  <td className="py-2 px-3">Projected Income</td>
                                  <td className="py-2 px-3 text-right font-medium">R34,250.00</td>
                                  <td className="py-2 px-3 text-xs">With growth</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="mt-2 text-xs text-muted-foreground">Table shows partial data; full template includes all budget categories and advanced metrics when copied</p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h5 className="text-sm font-medium text-gray-700">Step-by-Step Instructions:</h5>
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <h6 className="font-semibold text-sm">1. Create and Set Up Your Budget</h6>
                                  <ol className="list-decimal pl-5 text-sm space-y-1">
                                    <li>Click "Copy Data" button above</li>
                                    <li>Open Excel and paste into cell A1</li>
                                    <li>Select columns B:D and format as Currency (Ctrl+Shift+$)</li>
                                    <li>Set column widths (A: 25, B:D: 15)</li>
                                  </ol>
                                </div>

                                <div className="space-y-2">
                                  <h6 className="font-semibold text-sm">2. Apply Formatting</h6>
                                  <ol className="list-decimal pl-5 text-sm space-y-1">
                                    <li>Select row 1 (title row)</li>
                                    <li>Click Home → Merge & Center, format as Heading 1</li>
                                    <li>Select headers (row 2), format as Table Header</li>
                                    <li>Add borders to all cells with data (Ctrl+1 → Border tab)</li>
                                  </ol>
                                </div>

                                <div className="space-y-2">
                                  <h6 className="font-semibold text-sm">3. Saving Your File</h6>
                                  <div className="bg-blue-50 p-3 rounded-md border border-blue-100 text-sm">
                                    <p className="font-medium text-blue-800">Save As Different Formats:</p>
                                    <ul className="list-disc pl-5 mt-1 space-y-1">
                                      <li><span className="font-medium">.xlsx</span> (Modern Excel format)</li>
                                      <li><span className="font-medium">.xls</span> (Excel 97-2003)</li>
                                      <li><span className="font-medium">.csv</span> (Comma-separated values)</li>
                                      <li><span className="font-medium">.pdf</span> (Portable Document Format)</li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="bg-yellow-50 p-3 rounded-md border border-yellow-100">
                                  <h6 className="text-xs font-semibold text-yellow-800 mb-1">💡 Pro Tips:</h6>
                                  <ul className="text-xs text-yellow-700 space-y-1">
                                    <li>• Use <kbd className="bg-white border rounded px-1 py-0.5">F12</kbd> for quick Save As</li>
                                    <li>• Press <kbd className="bg-white border rounded px-1 py-0.5">Ctrl+S</kbd> frequently to save</li>
                                    <li>• Check <span className="font-medium">File → Info</span> for file properties</li>
                                    <li>• Use <span className="font-medium">File → Share</span> to collaborate</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Solutions Table */}
                          <div className="mt-6">
                            <h5 className="text-sm font-medium text-gray-700 mb-3">Completed Solution Reference:</h5>
                            <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
                              <table className="min-w-full text-sm">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="py-2 px-3 text-left">Category</th>
                                    <th className="py-2 px-3 text-right">Budget</th>
                                    <th className="py-2 px-3 text-right">Actual</th>
                                    <th className="py-2 px-3 text-right">Variance</th>
                                    <th className="py-2 px-3 text-right">Formula</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y">
                                  <tr>
                                    <td className="py-2 px-3 font-medium">TOTAL INCOME</td>
                                    <td className="py-2 px-3 text-right">R32,500.00</td>
                                    <td className="py-2 px-3 text-right">R33,400.00</td>
                                    <td className="py-2 px-3 text-right text-green-600">R900.00</td>
                                    <td className="py-2 px-3 text-xs">=SUM(C3:C6)</td>
                                  </tr>
                                  <tr>
                                    <td className="py-2 px-3 font-medium">TOTAL FIXED</td>
                                    <td className="py-2 px-3 text-right">R16,150.00</td>
                                    <td className="py-2 px-3 text-right">R16,150.00</td>
                                    <td className="py-2 px-3 text-right">R0.00</td>
                                    <td className="py-2 px-3 text-xs">=SUM(C10:C14)</td>
                                  </tr>
                                  <tr>
                                    <td className="py-2 px-3 font-medium">TOTAL VARIABLE</td>
                                    <td className="py-2 px-3 text-right">R11,800.00</td>
                                    <td className="py-2 px-3 text-right">R13,000.00</td>
                                    <td className="py-2 px-3 text-right text-red-600">(R1,200.00)</td>
                                    <td className="py-2 px-3 text-xs">=SUM(C18:C23)</td>
                                  </tr>
                                  <tr className="border-t-2 border-gray-200">
                                    <td className="py-2 px-3 font-semibold">TOTAL EXPENSES</td>
                                    <td className="py-2 px-3 text-right font-semibold">R27,950.00</td>
                                    <td className="py-2 px-3 text-right font-semibold">R29,150.00</td>
                                    <td className="py-2 px-3 text-right font-semibold text-red-600">(R1,200.00)</td>
                                    <td className="py-2 px-3 text-xs">=C15+C24</td>
                                  </tr>
                                  <tr className="border-t-2 border-gray-300">
                                    <td className="py-2 px-3 font-bold">NET INCOME</td>
                                    <td className="py-2 px-3 text-right font-bold">R4,550.00</td>
                                    <td className="py-2 px-3 text-right font-bold">R4,250.00</td>
                                    <td className="py-2 px-3 text-right font-bold text-red-600">(R300.00)</td>
                                    <td className="py-2 px-3 text-xs">=C7-C25</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                                <h6 className="text-xs font-semibold text-blue-800 mb-2">Key Financial Metrics:</h6>
                                <ul className="text-xs space-y-1">
                                  <li>• <span className="font-medium">Savings Rate:</span> 14.2% (Goal: 15%)</li>
                                  <li>• <span className="font-medium">Debt-to-Income:</span> 9.6% (Good: {'<'}15%)</li>
                                  <li>• <span className="font-medium">Housing Ratio:</span> 25.4% (Ideal: ≤30%)</li>
                                  <li>• <span className="font-medium">6-Month Emergency Fund:</span> R100,200.00</li>
                                </ul>
                              </div>
                              <div className="bg-green-50 p-3 rounded-md border border-green-100">
                                <h6 className="text-xs font-semibold text-green-800 mb-2">Budget Performance:</h6>
                                <ul className="text-xs space-y-1">
                                  <li>• <span className="font-medium">Total Income Variance:</span> +R900.00 (2.8%)</li>
                                  <li>• <span className="font-medium">Fixed Expenses:</span> On Budget (0% variance)</li>
                                  <li>• <span className="font-medium">Variable Expenses:</span> -R1,200.00 (-10.2%)</li>
                                  <li>• <span className="font-medium">Projected Savings (6mo):</span> R25,500.00</li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="mt-4 bg-purple-50 p-3 rounded-md border border-purple-100">
                              <h6 className="text-xs font-semibold text-purple-800 mb-1">Advanced Formulas Used:</h6>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                                <div>
                                  <p className="font-medium">Forecast Formula:</p>
                                  <code className="block bg-white p-1 rounded border text-xs mt-1">=FORECAST.ETS(C7, B3:B23, A3:A23, 1, 1)</code>
                                </div>
                                <div>
                                  <p className="font-medium">Savings Rate:</p>
                                  <code className="block bg-white p-1 rounded border text-xs mt-1">=(C7-SUM(C10:C24))/C7</code>
                                </div>
                                <div>
                                  <p className="font-medium">Months to Goal:</p>
                                  <code className="block bg-white p-1 rounded border text-xs mt-1">=NPER(H6/12,-H20,0,H8)/12</code>
                                </div>
                                <div>
                                  <p className="font-medium">Debt Service Ratio:</p>
                                  <code className="block bg-white p-1 rounded border text-xs mt-1">=C13/C7</code>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="text-sm font-medium text-gray-700">Expected Results</h5>
                              <span className="text-xs text-gray-500">Your formulas should match these results</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm overflow-x-auto">
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-green-50">
                                    <th className="py-2 px-3 text-left font-medium">Formula Location</th>
                                    <th className="py-2 px-3 text-left font-medium">Formula</th>
                                    <th className="py-2 px-3 text-left font-medium">Expected Result</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-t">
                                    <td className="py-2 px-3">D3 (Salary Difference)</td>
                                    <td className="py-2 px-3 font-mono text-blue-600">=C3-B3</td>
                                    <td className="py-2 px-3">R0.00</td>
                                  </tr>
                                  <tr className="border-t">
                                    <td className="py-2 px-3">D4 (Side Business Diff)</td>
                                    <td className="py-2 px-3 font-mono text-blue-600">=C4-B4</td>
                                    <td className="py-2 px-3">R1,200.00</td>
                                  </tr>
                                  <tr className="border-t">
                                    <td className="py-2 px-3">B6 (Total Income Budget)</td>
                                    <td className="py-2 px-3 font-mono text-blue-600">=SUM(B3:B5)</td>
                                    <td className="py-2 px-3">R31,000.00</td>
                                  </tr>
                                  <tr className="border-t">
                                    <td className="py-2 px-3">D18 (Net Income Diff)</td>
                                    <td className="py-2 px-3 font-mono text-blue-600">=C18-B18</td>
                                    <td className="py-2 px-3">R1,000.00</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <p className="mt-2 text-xs text-gray-500">Note: Green cells indicate positive variance, red indicates negative</p>
                          </div>
                        </div>
                      </div>
                      )}

                      {/* Exercise 3 for Basics Topic: Excel Keyboard Shortcuts */}
                      {currentTopic.id === "basics" && (
                      <div className="bg-excel-green/10 p-6 rounded-lg border border-excel-green/20">
                        <h4 className="font-semibold mb-3">Exercise 6: Excel Keyboard Shortcuts</h4>
                        
                        <div className="bg-white p-4 rounded border border-gray-200 mb-4 overflow-x-auto">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">Keyboard Shortcuts Practice Dataset</h5>
                            <Button variant="outline" size="sm" className="h-8 px-2" onClick={async () => {
                              const tableData = [
                                ['Sales Data for Shortcut Practice', '', '', '', '', ''],
                                ['Region', 'Product', 'Q1', 'Q2', 'Q3', 'Q4'],
                                ['North', 'Laptops', '145000', '132000', '156000', '178000'],
                                ['North', 'Phones', '98000', '112000', '126000', '135000'],
                                ['North', 'Accessories', '45000', '48000', '52000', '61000'],
                                ['South', 'Laptops', '132000', '128000', '142000', '155000'],
                                ['South', 'Phones', '105000', '118000', '124000', '132000'],
                                ['South', 'Accessories', '38000', '42000', '45000', '51000'],
                                ['East', 'Laptops', '122000', '125000', '135000', '148000'],
                                ['East', 'Phones', '88000', '95000', '102000', '118000'],
                                ['East', 'Accessories', '35000', '37000', '42000', '48000'],
                                ['West', 'Laptops', '138000', '142000', '152000', '168000'],
                                ['West', 'Phones', '112000', '122000', '128000', '142000'],
                                ['West', 'Accessories', '42000', '46000', '49000', '55000']
                              ].map(row => row.join('\t')).join('\n');
                              await copyToClipboard(tableData);
                            }}>
                              <Copy className="h-4 w-4 mr-1" />
                              <span className="text-xs">Copy Data</span>
                            </Button>
                          </div>
                          <table className="min-w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="py-2 px-3 text-left" colSpan={6}>Sales Data for Shortcut Practice</th>
                              </tr>
                              <tr className="bg-gray-50">
                                <th className="py-2 px-3 text-left">Region</th>
                                <th className="py-2 px-3 text-left">Product</th>
                                <th className="py-2 px-3 text-left">Q1</th>
                                <th className="py-2 px-3 text-left">Q2</th>
                                <th className="py-2 px-3 text-left">Q3</th>
                                <th className="py-2 px-3 text-left">Q4</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="py-2 px-3">North</td>
                                <td className="py-2 px-3">Laptops</td>
                                <td className="py-2 px-3">145,000</td>
                                <td className="py-2 px-3">132,000</td>
                                <td className="py-2 px-3">156,000</td>
                                <td className="py-2 px-3">178,000</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">North</td>
                                <td className="py-2 px-3">Phones</td>
                                <td className="py-2 px-3">98,000</td>
                                <td className="py-2 px-3">112,000</td>
                                <td className="py-2 px-3">126,000</td>
                                <td className="py-2 px-3">135,000</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">North</td>
                                <td className="py-2 px-3">Accessories</td>
                                <td className="py-2 px-3">45,000</td>
                                <td className="py-2 px-3">48,000</td>
                                <td className="py-2 px-3">52,000</td>
                                <td className="py-2 px-3">61,000</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">South</td>
                                <td className="py-2 px-3">Laptops</td>
                                <td className="py-2 px-3">132,000</td>
                                <td className="py-2 px-3">128,000</td>
                                <td className="py-2 px-3">142,000</td>
                                <td className="py-2 px-3">155,000</td>
                              </tr>
                              <tr className="border-t">
                                <td className="py-2 px-3">South</td>
                                <td className="py-2 px-3">Phones</td>
                                <td className="py-2 px-3">105,000</td>
                                <td className="py-2 px-3">118,000</td>
                                <td className="py-2 px-3">124,000</td>
                                <td className="py-2 px-3">132,000</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="mt-2 text-xs text-muted-foreground">Table shows first 5 rows of data (14 rows total when copied)</p>
                        </div>
                        
                        <div className="space-y-3">
                          <p className="text-sm font-medium">Instructions:</p>
                          <ol className="list-decimal ml-5 space-y-2 text-sm">
                            <li>Open a new Excel workbook and paste the sales data</li>
                            <li>Practice these essential keyboard shortcuts on the data:</li>
                            <ul className="list-disc ml-5 space-y-1 text-sm">
                              <li>Ctrl+S: Save your workbook</li>
                              <li>Ctrl+A: Select all data</li>
                              <li>Ctrl+C, Ctrl+V, Ctrl+X: Copy, Paste, Cut cells</li>
                              <li>Ctrl+Z, Ctrl+Y: Undo, Redo actions</li>
                              <li>Ctrl+B, Ctrl+I, Ctrl+U: Format header row as Bold, Italic, or Underlined</li>
                              <li>Ctrl+1: Open Format cells dialog to format numbers as currency</li>
                              <li>Ctrl+Arrow Keys: Navigate quickly between regions of data</li>
                              <li>Ctrl+Home, Ctrl+End: Jump to beginning/end of data</li>
                              <li>F2: Edit a cell, then use Home, End, arrows to navigate within cell</li>
                              <li>Alt+=: Insert AutoSum in cells below Q1-Q4 columns</li>
                              <li>Ctrl+Shift+L: Toggle filters on the header row</li>
                              <li>Ctrl+PageDown, Ctrl+PageUp: Move between worksheets</li>
                              <li>Use Ctrl+Shift+Arrow keys to select entire ranges of data</li>
                              <li>Create a cheat sheet in Excel with your favorite keyboard shortcuts</li>
                            </ul>
                            <li className="mt-2">
                              <p className="text-sm italic">Hint: Press Alt key to see keyboard accelerator keys for ribbon commands</p>
                            </li>
                          </ol>
                        </div>

                        {/* Solutions Table for Keyboard Shortcuts */}
                        <div className="mt-6">
                          <h5 className="text-sm font-medium text-gray-700 mb-3">Keyboard Shortcuts Reference Table:</h5>
                          <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
                            <table className="min-w-full text-sm">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="py-2 px-3 text-left">Shortcut</th>
                                  <th className="py-2 px-3 text-left">Action</th>
                                  <th className="py-2 px-3 text-left">Expected Result</th>
                                  <th className="py-2 px-3 text-left">Pro Tip</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y">
                                <tr>
                                  <td className="py-2 px-3 font-mono">Ctrl+S</td>
                                  <td className="py-2 px-3">Save workbook</td>
                                  <td className="py-2 px-3">Saves with .xlsx extension</td>
                                  <td className="py-2 px-3 text-xs text-gray-600">Use F12 for Save As</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-3 font-mono">Ctrl+Arrow Keys</td>
                                  <td className="py-2 px-3">Navigate data regions</td>
                                  <td className="py-2 px-3">Jumps to edge of data</td>
                                  <td className="py-2 px-3 text-xs text-gray-600">Add Shift to select</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-3 font-mono">Alt+=</td>
                                  <td className="py-2 px-3">AutoSum</td>
                                  <td className="py-2 px-3">Adds SUM formula above</td>
                                  <td className="py-2 px-3 text-xs text-gray-600">Works with filtered data</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-3 font-mono">Ctrl+Shift+L</td>
                                  <td className="py-2 px-3">Toggle Filters</td>
                                  <td className="py-2 px-3">Adds/removes filter dropdowns</td>
                                  <td className="py-2 px-3 text-xs text-gray-600">Alt+↓ to open filter menu</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-3 font-mono">Ctrl+1</td>
                                  <td className="py-2 px-3">Format Cells</td>
                                  <td className="py-2 px-3">Opens formatting dialog</td>
                                  <td className="py-2 px-3 text-xs text-gray-600">Ctrl+Shift+$ for currency</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-yellow-50 p-3 rounded-md border border-yellow-100">
                              <h6 className="text-xs font-semibold text-yellow-800 mb-2">Data Navigation Shortcuts:</h6>
                              <ul className="text-xs space-y-1">
                                <li>• <span className="font-mono">Home</span> - Move to column A</li>
                                <li>• <span className="font-mono">Ctrl+Home</span> - Go to A1</li>
                                <li>• <span className="font-mono">Ctrl+End</span> - Last used cell</li>
                                <li>• <span className="font-mono">Ctrl+[</span> - Trace precedents</li>
                              </ul>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                              <h6 className="text-xs font-semibold text-blue-800 mb-2">Formatting Shortcuts:</h6>
                              <ul className="text-xs space-y-1">
                                <li>• <span className="font-mono">Ctrl+B/I/U</span> - Bold/Italic/Underline</li>
                                <li>• <span className="font-mono">Ctrl+5</span> - Strikethrough</li>
                                <li>• <span className="font-mono">Alt+H+H</span> - Fill color</li>
                                <li>• <span className="font-mono">Ctrl+Shift+~</span> - General format</li>
                              </ul>
                            </div>
                          </div>

                          <div className="mt-4 bg-purple-50 p-3 rounded-md border border-purple-100">
                            <h6 className="text-xs font-semibold text-purple-800 mb-2">Advanced Shortcuts:</h6>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                              <div>
                                <p className="font-medium">Data Manipulation:</p>
                                <ul className="mt-1 space-y-1">
                                  <li>• <span className="font-mono">Alt+E+S+V</span> - Paste values</li>
                                  <li>• <span className="font-mono">Ctrl+Enter</span> - Fill selected cells</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-medium">Formula Helpers:</p>
                                <ul className="mt-1 space-y-1">
                                  <li>• <span className="font-mono">F4</span> - Toggle references</li>
                                  <li>• <span className="font-mono">F9</span> - Calculate selection</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-medium">Navigation:</p>
                                <ul className="mt-1 space-y-1">
                                  <li>• <span className="font-mono">Ctrl+[</span> - Go to precedent</li>
                                  <li>• <span className="font-mono">Ctrl+Page Up/Down</span> - Switch sheets</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="quiz" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle >Knowledge Check</CardTitle>
                      <CardDescription >Test your understanding of {currentTopic.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {currentTopic.id === "basics" && (
                          <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-3">Question 1:</h4>
                          <p className="text-sm mb-3">Which of the following is NOT a component of the Excel interface?</p>
                          <div className="space-y-2">
                            <Button 
                              variant={selectedAnswers[1] === "A" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "A" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(1, "A")}
 >A. Ribbon
                            </Button>
                            <Button 
                              variant={selectedAnswers[1] === "B" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "B" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(1, "B")}
 >B. Formula Bar
                            </Button>
                            <Button 
                              variant={selectedAnswers[1] === "C" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                              onClick={() => handleAnswerSelect(1, "C")}
 >C. Query Editor
                            </Button>
                            <Button 
                              variant={selectedAnswers[1] === "D" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "D" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(1, "D")}
 >D. Status Bar
                            </Button>
                          </div>
                          {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-3">Question 2:</h4>
                          <p className="text-sm mb-3">What does the Name Box in Excel display by default?</p>
                          <div className="space-y-2">
                            <Button 
                              variant={selectedAnswers[2] === "A" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "A" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(2, "A")}
 >A. The name of the worksheet
                            </Button>
                            <Button 
                              variant={selectedAnswers[2] === "B" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                              onClick={() => handleAnswerSelect(2, "B")}
 >B. The cell reference of the active cell
                            </Button>
                            <Button 
                              variant={selectedAnswers[2] === "C" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "C" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(2, "C")}
 >C. The name of the workbook
                            </Button>
                            <Button 
                              variant={selectedAnswers[2] === "D" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "D" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(2, "D")}
 >D. The formula in the active cell
                            </Button>
                          </div>
                          {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-3">Question 3:</h4>
                          <p className="text-sm mb-3">Which keyboard shortcut is used to navigate to the beginning of a worksheet?</p>
                          <div className="space-y-2">
                            <Button 
                              variant={selectedAnswers[3] === "A" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                              onClick={() => handleAnswerSelect(3, "A")}
 >A. Ctrl+Home
                            </Button>
                            <Button 
                              variant={selectedAnswers[3] === "B" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "B" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(3, "B")}
 >B. Ctrl+End
                            </Button>
                            <Button 
                              variant={selectedAnswers[3] === "C" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "C" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(3, "C")}
 >C. Alt+Home
                            </Button>
                            <Button 
                              variant={selectedAnswers[3] === "D" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "D" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(3, "D")}
 >D. Shift+Home
                            </Button>
                          </div>
                          {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-3">Question 4:</h4>
                          <p className="text-sm mb-3">How can you move a worksheet within a workbook?</p>
                          <div className="space-y-2">
                            <Button 
                              variant={selectedAnswers[4] === "A" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "A" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(4, "A")}
 >A. Cut and paste the worksheet
                            </Button>
                            <Button 
                              variant={selectedAnswers[4] === "B" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                              onClick={() => handleAnswerSelect(4, "B")}
 >B. Drag and drop the worksheet tab
                            </Button>
                            <Button 
                              variant={selectedAnswers[4] === "C" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "C" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(4, "C")}
 >C. Use the Move command in the File menu
                            </Button>
                            <Button 
                              variant={selectedAnswers[4] === "D" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "D" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(4, "D")}
 >D. Press Alt+M to access the move function
                            </Button>
                          </div>
                          {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-3">Question 5:</h4>
                          <p className="text-sm mb-3">Which view option allows you to see where pages will break when printing?</p>
                          <div className="space-y-2">
                            <Button 
                              variant={selectedAnswers[5] === "A" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "A" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(5, "A")}
 >A. Normal view
                            </Button>
                            <Button 
                              variant={selectedAnswers[5] === "B" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "B" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(5, "B")}
 >B. Page Layout view
                            </Button>
                            <Button 
                              variant={selectedAnswers[5] === "C" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                              onClick={() => handleAnswerSelect(5, "C")}
 >C. Page Break Preview
                            </Button>
                            <Button 
                              variant={selectedAnswers[5] === "D" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "D" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(5, "D")}
 >D. Print Preview
                            </Button>
                          </div>
                          {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-3">Question 6:</h4>
                          <p className="text-sm mb-3">Which feature allows you to keep headers visible while scrolling through a large dataset?</p>
                          <div className="space-y-2">
                            <Button 
                              variant={selectedAnswers[6] === "A" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "A" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(6, "A")}
 >A. Split Panes
                            </Button>
                            <Button 
                              variant={selectedAnswers[6] === "B" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                              onClick={() => handleAnswerSelect(6, "B")}
 >B. Freeze Panes
                            </Button>
                            <Button 
                              variant={selectedAnswers[6] === "C" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "C" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(6, "C")}
 >C. Lock Headers
                            </Button>
                            <Button 
                              variant={selectedAnswers[6] === "D" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "D" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(6, "D")}
 >D. Pin Columns
                            </Button>
                          </div>
                          {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-3">Question 7:</h4>
                          <p className="text-sm mb-3">What file format preserves all Excel features including formulas, macros, and formatting?</p>
                          <div className="space-y-2">
                            <Button 
                              variant={selectedAnswers[7] === "A" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "A" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(7, "A")}
 >A. .csv
                            </Button>
                            <Button 
                              variant={selectedAnswers[7] === "B" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "B" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(7, "B")}
 >B. .pdf
                            </Button>
                            <Button 
                              variant={selectedAnswers[7] === "C" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "C" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(7, "C")}
 >C. .xlsx
                            </Button>
                            <Button 
                              variant={selectedAnswers[7] === "D" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && "D" === "D" ? "border-green-500" : ""}`}
                              onClick={() => handleAnswerSelect(7, "D")}
 >D. .xlsm
                            </Button>
                          </div>
                          {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: D</p>}
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-3">Question 8:</h4>
                          <p className="text-sm mb-3">Which keyboard shortcut would you use to insert the AutoSum function?</p>
                          <div className="space-y-2">
                            <Button 
                              variant={selectedAnswers[8] === "A" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                              onClick={() => handleAnswerSelect(8, "A")}
 >A. Alt+=
                            </Button>
                            <Button 
                              variant={selectedAnswers[8] === "B" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "B" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(8, "B")}
 >B. Ctrl+S
                            </Button>
                            <Button 
                              variant={selectedAnswers[8] === "C" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "C" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(8, "C")}
 >C. Ctrl+Shift+S
                            </Button>
                            <Button 
                              variant={selectedAnswers[8] === "D" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "D" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(8, "D")}
 >D. F4
                            </Button>
                          </div>
                          {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-3">Question 9:</h4>
                          <p className="text-sm mb-3">What is the maximum number of columns in an Excel worksheet?</p>
                          <div className="space-y-2">
                            <Button 
                              variant={selectedAnswers[9] === "A" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "A" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(9, "A")}
 >A. 256
                            </Button>
                            <Button 
                              variant={selectedAnswers[9] === "B" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "B" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(9, "B")}
 >B. 1,024
                            </Button>
                            <Button 
                              variant={selectedAnswers[9] === "C" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                              onClick={() => handleAnswerSelect(9, "C")}
 >C. 16,384
                            </Button>
                            <Button 
                              variant={selectedAnswers[9] === "D" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "D" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(9, "D")}
 >D. 65,536
                            </Button>
                          </div>
                          {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-3">Question 10:</h4>
                          <p className="text-sm mb-3">Which keyboard shortcut toggles filter options for a selected range?</p>
                          <div className="space-y-2">
                            <Button 
                              variant={selectedAnswers[10] === "A" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "A" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(10, "A")}
 >A. Ctrl+F
                            </Button>
                            <Button 
                              variant={selectedAnswers[10] === "B" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "B" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(10, "B")}
 >B. Alt+F
                            </Button>
                            <Button 
                              variant={selectedAnswers[10] === "C" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                              onClick={() => handleAnswerSelect(10, "C")}
 >C. Ctrl+Shift+L
                            </Button>
                            <Button 
                              variant={selectedAnswers[10] === "D" ? "secondary" : "outline"} 
                              className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "D" ? "border-red-500" : ""}`}
                              onClick={() => handleAnswerSelect(10, "D")}
 >D. Shift+F10
                            </Button>
                          </div>
                          {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                        </div>
                          </div>
                        )}

                        {/* Data Entry Topic Quiz */}
                        {currentTopic.id === "data-entry" && (
                          <>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 1:</h4>
                              <p className="text-sm mb-3">Which feature helps you quickly fill in patterns of data?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[1] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "A")}
 >A. Format Painter
                                </Button>
                                <Button 
                                  variant={selectedAnswers[1] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "B")}
 >B. AutoFill
                                </Button>
                                <Button 
                                  variant={selectedAnswers[1] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "C")}
 >C. Data Validation
                                </Button>
                                <Button 
                                  variant={selectedAnswers[1] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "D")}
 >D. Auto-Format
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 2:</h4>
                              <p className="text-sm mb-3">Which keyboard shortcut can you use to quickly insert today's date?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[2] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "A")}
 >A. Ctrl+;
                                </Button>
                                <Button 
                                  variant={selectedAnswers[2] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "B")}
 >B. Alt+D
                                </Button>
                                <Button 
                                  variant={selectedAnswers[2] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "C")}
 >C. Shift+T
                                </Button>
                                <Button 
                                  variant={selectedAnswers[2] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "D")}
 >D. Ctrl+D
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 3:</h4>
                              <p className="text-sm mb-3">What feature would you use to ensure users can only enter values from a predefined list?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[3] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(3, "A")}
 >A. Cell Protection
                                </Button>
                                <Button 
                                  variant={selectedAnswers[3] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(3, "B")}
 >B. Cell Formatting
                                </Button>
                                <Button 
                                  variant={selectedAnswers[3] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(3, "C")}
 >C. Conditional Formatting
                                </Button>
                                <Button 
                                  variant={selectedAnswers[3] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "D" === "D" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(3, "D")}
 >D. Data Validation
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: D</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 4:</h4>
                              <p className="text-sm mb-3">Which of these is NOT a built-in number format in Excel?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[4] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(4, "A")}
 >A. Percentage
                                </Button>
                                <Button 
                                  variant={selectedAnswers[4] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(4, "B")}
 >B. Currency
                                </Button>
                                <Button 
                                  variant={selectedAnswers[4] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(4, "C")}
 >C. Temperature
                                </Button>
                                <Button 
                                  variant={selectedAnswers[4] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(4, "D")}
 >D. Scientific
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 5:</h4>
                              <p className="text-sm mb-3">Which feature automatically completes data entry based on patterns it detects?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[5] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(5, "A")}
 >A. AutoCorrect
                                </Button>
                                <Button 
                                  variant={selectedAnswers[5] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(5, "B")}
 >B. Flash Fill
                                </Button>
                                <Button 
                                  variant={selectedAnswers[5] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(5, "C")}
 >C. Smart Lookup
                                </Button>
                                <Button 
                                  variant={selectedAnswers[5] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(5, "D")}
 >D. AutoFormat
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 6:</h4>
                              <p className="text-sm mb-3">Which of these is a way to highlight cells that meet specific criteria?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[6] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(6, "A")}
 >A. Format Painter
                                </Button>
                                <Button 
                                  variant={selectedAnswers[6] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(6, "B")}
 >B. Cell Styles
                                </Button>
                                <Button 
                                  variant={selectedAnswers[6] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(6, "C")}
 >C. Conditional Formatting
                                </Button>
                                <Button 
                                  variant={selectedAnswers[6] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(6, "D")}
 >D. Data Filters
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 7:</h4>
                              <p className="text-sm mb-3">Which tool allows you to copy formatting from one cell to another?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[7] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(7, "A")}
 >A. Format Painter
                                </Button>
                                <Button 
                                  variant={selectedAnswers[7] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(7, "B")}
 >B. Cell Styles
                                </Button>
                                <Button 
                                  variant={selectedAnswers[7] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(7, "C")}
 >C. Format Copier
                                </Button>
                                <Button 
                                  variant={selectedAnswers[7] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(7, "D")}
 >D. Style Brush
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 8:</h4>
                              <p className="text-sm mb-3">Which keyboard shortcut can you use to select an entire column?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[8] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(8, "A")}
 >A. Alt + Space
                                </Button>
                                <Button 
                                  variant={selectedAnswers[8] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(8, "B")}
 >B. Shift + Space
                                </Button>
                                <Button 
                                  variant={selectedAnswers[8] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(8, "C")}
 >C. Ctrl + Space
                                </Button>
                                <Button 
                                  variant={selectedAnswers[8] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "D" === "D" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(8, "D")}
 >D. Ctrl + Shift + Down
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: D</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 9:</h4>
                              <p className="text-sm mb-3">What is the best way to apply the same formatting to multiple worksheets simultaneously?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[9] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(9, "A")}
 >A. Use Format Painter on each worksheet
                                </Button>
                                <Button 
                                  variant={selectedAnswers[9] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(9, "B")}
 >B. Group the worksheets first
                                </Button>
                                <Button 
                                  variant={selectedAnswers[9] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(9, "C")}
 >C. Create a macro
                                </Button>
                                <Button 
                                  variant={selectedAnswers[9] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(9, "D")}
 >D. Use templates
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 10:</h4>
                              <p className="text-sm mb-3">Which of these is NOT a valid text alignment option in Excel?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[10] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(10, "A")}
 >A. Top
                                </Button>
                                <Button 
                                  variant={selectedAnswers[10] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(10, "B")}
 >B. Justify
                                </Button>
                                <Button 
                                  variant={selectedAnswers[10] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(10, "C")}
 >C. Paragraph
                                </Button>
                                <Button 
                                  variant={selectedAnswers[10] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(10, "D")}
 >D. Center
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 11:</h4>
                              <p className="text-sm mb-3">Which keyboard shortcut creates a new line within the same cell?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[11] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(11, "A")}
 >A. Alt + Enter
                                </Button>
                                <Button 
                                  variant={selectedAnswers[11] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[11] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(11, "B")}
 >B. Ctrl + Enter
                                </Button>
                                <Button 
                                  variant={selectedAnswers[11] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[11] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(11, "C")}
 >C. Shift + Enter
                                </Button>
                                <Button 
                                  variant={selectedAnswers[11] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[11] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(11, "D")}
 >D. Tab + Enter
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 12:</h4>
                              <p className="text-sm mb-3">What is the name of the Excel feature that helps detect and prevent errors in your formulas?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[12] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[12] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(12, "A")}
 >A. Error Tracker
                                </Button>
                                <Button 
                                  variant={selectedAnswers[12] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(12, "B")}
 >B. Formula Auditing
                                </Button>
                                <Button 
                                  variant={selectedAnswers[12] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[12] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(12, "C")}
 >C. Error Checking
                                </Button>
                                <Button 
                                  variant={selectedAnswers[12] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[12] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(12, "D")}
 >D. Formula Validation
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 13:</h4>
                              <p className="text-sm mb-3">Which feature allows you to split text from one cell into multiple columns?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[13] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[13] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(13, "A")}
 >A. Text Splitter
                                </Button>
                                <Button 
                                  variant={selectedAnswers[13] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[13] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(13, "B")}
 >B. Text Parser
                                </Button>
                                <Button 
                                  variant={selectedAnswers[13] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[13] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(13, "C")}
 >C. Data Distributor
                                </Button>
                                <Button 
                                  variant={selectedAnswers[13] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "D" === "D" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(13, "D")}
 >D. Text to Columns
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: D</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 14:</h4>
                              <p className="text-sm mb-3">Which shortcut can you use to apply the currency format to selected cells?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[14] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[14] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(14, "A")}
 >A. Ctrl + $
                                </Button>
                                <Button 
                                  variant={selectedAnswers[14] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[14] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(14, "B")}
 >B. Alt + $
                                </Button>
                                <Button 
                                  variant={selectedAnswers[14] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(14, "C")}
 >C. Ctrl + Shift + $
                                </Button>
                                <Button 
                                  variant={selectedAnswers[14] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[14] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(14, "D")}
 >D. Shift + $
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 15:</h4>
                              <p className="text-sm mb-3">Which Excel feature helps you to visually emphasize duplicate values in a range of cells?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[15] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[15] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(15, "A")}
 >A. Data Validation
                                </Button>
                                <Button 
                                  variant={selectedAnswers[15] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(15, "B")}
 >B. Conditional Formatting
                                </Button>
                                <Button 
                                  variant={selectedAnswers[15] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[15] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(15, "C")}
 >C. Remove Duplicates
                                </Button>
                                <Button 
                                  variant={selectedAnswers[15] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[15] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(15, "D")}
 >D. Find and Replace
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 16:</h4>
                              <p className="text-sm mb-3">Which conditional formatting feature adds horizontal bars inside cells to visually represent their values?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[16] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[16] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(16, "A")}
 >A. Color Scales
                                </Button>
                                <Button 
                                  variant={selectedAnswers[16] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[16] === "C" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(16, "B")}
 >B. Icon Sets
                                </Button>
                                <Button 
                                  variant={selectedAnswers[16] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(16, "C")}
 >C. Data Bars
                                </Button>
                                <Button 
                                  variant={selectedAnswers[16] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[16] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(16, "D")}
 >D. Cell Highlights
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 17:</h4>
                              <p className="text-sm mb-3">Which of these conditional formatting options would best show performance against targets using traffic light indicators?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[17] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[17] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(17, "A")}
 >A. Data Bars
                                </Button>
                                <Button 
                                  variant={selectedAnswers[17] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(17, "B")}
 >B. Icon Sets
                                </Button>
                                <Button 
                                  variant={selectedAnswers[17] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[17] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(17, "C")}
 >C. Color Scales
                                </Button>
                                <Button 
                                  variant={selectedAnswers[17] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[17] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(17, "D")}
 >D. Cell Borders
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 18:</h4>
                              <p className="text-sm mb-3">When using a formula to create a custom conditional formatting rule, what must the formula result in?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[18] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(18, "A")}
 >A. TRUE/FALSE
                                </Button>
                                <Button 
                                  variant={selectedAnswers[18] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[18] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(18, "B")}
 >B. A number between 0 and 1
                                </Button>
                                <Button 
                                  variant={selectedAnswers[18] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[18] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(18, "C")}
 >C. A color value
                                </Button>
                                <Button 
                                  variant={selectedAnswers[18] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[18] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(18, "D")}
 >D. A cell reference
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 19:</h4>
                              <p className="text-sm mb-3">What happens when you apply multiple conditional formatting rules to the same cell?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[19] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[19] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(19, "A")}
 >A. Only the first rule is applied
                                </Button>
                                <Button 
                                  variant={selectedAnswers[19] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[19] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(19, "B")}
 >B. The cell turns black to indicate an error
                                </Button>
                                <Button 
                                  variant={selectedAnswers[19] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[19] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(19, "C")}
 >C. Rules are randomly applied
                                </Button>
                                <Button 
                                  variant={selectedAnswers[19] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "D" === "D" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(19, "D")}
 >D. Rules are applied based on priority order
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: D</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 20:</h4>
                              <p className="text-sm mb-3">Which of the following is NOT a built-in conditional formatting option in Excel?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[20] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[20] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(20, "A")}
 >A. Top 10 Items
                                </Button>
                                <Button 
                                  variant={selectedAnswers[20] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[20] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(20, "B")}
 >B. Greater Than
                                </Button>
                                <Button 
                                  variant={selectedAnswers[20] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[20] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(20, "C")}
 >C. Duplicate Values
                                </Button>
                                <Button 
                                  variant={selectedAnswers[20] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "D" === "D" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(20, "D")}
 >D. Balanced Distribution
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: D</p>}
                            </div>
                          </>
                        )}

                        {/* Formulas Topic Quiz */}
                        {currentTopic.id === "formulas" && (
                          <>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 1:</h4>
                              <p className="text-sm mb-3">Which of these is the correct way to start a formula in Excel?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[1] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "A")}
 >A. =
                                </Button>
                                <Button 
                                  variant={selectedAnswers[1] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "B")}
 >B. +
                                </Button>
                                <Button 
                                  variant={selectedAnswers[1] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "C")}
                                >
                                  C. {'→'}
                                </Button>
                                <Button 
                                  variant={selectedAnswers[1] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "D")}
 >D. $
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 2:</h4>
                              <p className="text-sm mb-3">What does the function AVERAGE do in Excel?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[2] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "A")}
 >A. Finds the most common value
                                </Button>
                                <Button 
                                  variant={selectedAnswers[2] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "B")}
 >B. Finds the median value
                                </Button>
                                <Button 
                                  variant={selectedAnswers[2] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "C")}
 >C. Calculates the arithmetic mean
                                </Button>
                                <Button 
                                  variant={selectedAnswers[2] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "D")}
 >D. Counts how many values are above average
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 3:</h4>
                              <p className="text-sm mb-3">What does the dollar sign ($) do in a formula like =$A$1+B2?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[3] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(3, "A")}
 >A. Creates an absolute cell reference
                                </Button>
                                <Button 
                                  variant={selectedAnswers[3] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(3, "B")}
 >B. Formats the cell as currency
                                </Button>
                                <Button 
                                  variant={selectedAnswers[3] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(3, "C")}
 >C. Makes the formula calculate faster
                                </Button>
                                <Button 
                                  variant={selectedAnswers[3] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(3, "D")}
 >D. References a named range
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 4:</h4>
                              <p className="text-sm mb-3">Which function would you use to find a value in a table and return a corresponding value from the same row but a different column?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[4] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(4, "A")}
 >A. FIND
                                </Button>
                                <Button 
                                  variant={selectedAnswers[4] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(4, "B")}
 >B. VLOOKUP
                                </Button>
                                <Button 
                                  variant={selectedAnswers[4] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(4, "C")}
 >C. MATCH
                                </Button>
                                <Button 
                                  variant={selectedAnswers[4] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(4, "D")}
 >D. TRANSPOSE
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 5:</h4>
                              <p className="text-sm mb-3">What is the result of the formula =IF(A1&gt;10,"High","Low") if A1 contains 15?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[5] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(5, "A")}
 >A. "High"
                                </Button>
                                <Button 
                                  variant={selectedAnswers[5] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(5, "B")}
 >B. "Low"
                                </Button>
                                <Button 
                                  variant={selectedAnswers[5] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(5, "C")}
 >C. 15
                                </Button>
                                <Button 
                                  variant={selectedAnswers[5] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(5, "D")}
 >D. TRUE
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 6:</h4>
                              <p className="text-sm mb-3">Which of these functions would count only the cells that meet a specific condition?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[6] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(6, "A")}
 >A. COUNT
                                </Button>
                                <Button 
                                  variant={selectedAnswers[6] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(6, "B")}
 >B. SUM
                                </Button>
                                <Button 
                                  variant={selectedAnswers[6] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(6, "C")}
 >C. COUNTIF
                                </Button>
                                <Button 
                                  variant={selectedAnswers[6] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(6, "D")}
 >D. COUNTA
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 7:</h4>
                              <p className="text-sm mb-3">Which function combines text from multiple cells into one cell?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[7] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(7, "A")}
 >A. COMBINE
                                </Button>
                                <Button 
                                  variant={selectedAnswers[7] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(7, "B")}
 >B. CONCATENATE
                                </Button>
                                <Button 
                                  variant={selectedAnswers[7] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(7, "C")}
 >C. CONNECT
                                </Button>
                                <Button 
                                  variant={selectedAnswers[7] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(7, "D")}
 >D. TEXTMERGE
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 8:</h4>
                              <p className="text-sm mb-3">What is the purpose of the MAX function in Excel?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[8] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(8, "A")}
 >A. Returns the largest value in a range
                                </Button>
                                <Button 
                                  variant={selectedAnswers[8] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(8, "B")}
 >B. Calculates the maximum possible value
                                </Button>
                                <Button 
                                  variant={selectedAnswers[8] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(8, "C")}
 >C. Returns the most frequently occurring value
                                </Button>
                                <Button 
                                  variant={selectedAnswers[8] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(8, "D")}
 >D. Maximizes the width of a column
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 9:</h4>
                              <p className="text-sm mb-3">Which Excel function would you use to round 45.678 to the nearest whole number?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[9] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(9, "A")}
 >A. INT
                                </Button>
                                <Button 
                                  variant={selectedAnswers[9] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(9, "B")}
 >B. TRUNC
                                </Button>
                                <Button 
                                  variant={selectedAnswers[9] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(9, "C")}
 >C. ROUND
                                </Button>
                                <Button 
                                  variant={selectedAnswers[9] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(9, "D")}
 >D. CEILING
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 10:</h4>
                              <p className="text-sm mb-3">What is the result of the formula =TODAY()?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[10] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(10, "A")}
 >A. The current date
                                </Button>
                                <Button 
                                  variant={selectedAnswers[10] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(10, "B")}
 >B. The current time
                                </Button>
                                <Button 
                                  variant={selectedAnswers[10] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(10, "C")}
 >C. Both date and time
                                </Button>
                                <Button 
                                  variant={selectedAnswers[10] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(10, "D")}
 >D. The day of the week
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 11:</h4>
                              <p className="text-sm mb-3">Which function would you use to join text with a specific delimiter?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[11] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[11] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(11, "A")}
 >A. CONCATENATE
                                </Button>
                                <Button 
                                  variant={selectedAnswers[11] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(11, "B")}
 >B. TEXTJOIN
                                </Button>
                                <Button 
                                  variant={selectedAnswers[11] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[11] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(11, "C")}
 >C. COMBINE
                                </Button>
                                <Button 
                                  variant={selectedAnswers[11] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[11] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(11, "D")}
 >D. JOINTEXT
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 12:</h4>
                              <p className="text-sm mb-3">What does the SUMIF function do?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[12] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[12] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(12, "A")}
 >A. Sums all values in a range
                                </Button>
                                <Button 
                                  variant={selectedAnswers[12] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[12] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(12, "B")}
 >B. Sums the result of multiple IF statements
                                </Button>
                                <Button 
                                  variant={selectedAnswers[12] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(12, "C")}
 >C. Adds numbers that meet a specified condition
                                </Button>
                                <Button 
                                  variant={selectedAnswers[12] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[12] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(12, "D")}
 >D. Returns TRUE if the sum is greater than a value
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 13:</h4>
                              <p className="text-sm mb-3">Which function would help identify the position of a value in a range?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[13] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[13] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(13, "A")}
 >A. INDEX
                                </Button>
                                <Button 
                                  variant={selectedAnswers[13] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(13, "B")}
 >B. MATCH
                                </Button>
                                <Button 
                                  variant={selectedAnswers[13] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[13] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(13, "C")}
 >C. LOOKUP
                                </Button>
                                <Button 
                                  variant={selectedAnswers[13] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[13] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(13, "D")}
 >D. FIND
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 14:</h4>
                              <p className="text-sm mb-3">Which of these is NOT a logical function in Excel?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[14] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[14] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(14, "A")}
 >A. IF
                                </Button>
                                <Button 
                                  variant={selectedAnswers[14] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[14] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(14, "B")}
 >B. AND
                                </Button>
                                <Button 
                                  variant={selectedAnswers[14] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[14] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(14, "C")}
 >C. OR
                                </Button>
                                <Button 
                                  variant={selectedAnswers[14] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "D" === "D" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(14, "D")}
 >D. RELATE
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: D</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 15:</h4>
                              <p className="text-sm mb-3">What function would you use to return a value if an error occurs in a formula?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[15] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(15, "A")}
 >A. IFERROR
                                </Button>
                                <Button 
                                  variant={selectedAnswers[15] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[15] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(15, "B")}
 >B. ERRORIF
                                </Button>
                                <Button 
                                  variant={selectedAnswers[15] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[15] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(15, "C")}
 >C. TRYFORMULA
                                </Button>
                                <Button 
                                  variant={selectedAnswers[15] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[15] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(15, "D")}
 >D. ERRORHANDLER
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>
                          </>
                        )}

                        {/* Charts Topic Quiz */}
                        {currentTopic.id === "charts" && (
                          <>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 1:</h4>
                              <p className="text-sm mb-3">Which chart type is best for showing trends over time?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[1] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "A")}
 >A. Pie chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[1] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "B")}
 >B. Radar chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[1] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "C" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "C")}
 >C. Line chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[1] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "D")}
 >D. Doughnut chart
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 2:</h4>
                              <p className="text-sm mb-3">What chart type best shows parts of a whole?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[2] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "A")}
 >A. Pie or doughnut chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[2] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "B")}
 >B. Scatter chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[2] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "C")}
 >C. Histogram
                                </Button>
                                <Button 
                                  variant={selectedAnswers[2] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "D")}
 >D. Area chart
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 3:</h4>
                              <p className="text-sm mb-3">Which chart element displays the values on the vertical axis?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[3] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(3, "A")}
 >A. Data labels
                                </Button>
                                <Button 
                                  variant={selectedAnswers[3] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(3, "B")}
 >B. Value axis (Y-axis)
                                </Button>
                                <Button 
                                  variant={selectedAnswers[3] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(3, "C")}
 >C. Legend
                                </Button>
                                <Button 
                                  variant={selectedAnswers[3] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(3, "D")}
 >D. Plot area
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 4:</h4>
                              <p className="text-sm mb-3">Which chart type is best for comparing values across categories using horizontal bars?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[4] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(4, "A")}
 >A. Column chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[4] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(4, "B")}
 >B. Bar chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[4] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(4, "C")}
 >C. Line chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[4] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(4, "D")}
 >D. Pie chart
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 5:</h4>
                              <p className="text-sm mb-3">What is the purpose of a secondary axis in an Excel chart?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[5] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(5, "A")}
 >A. To display a second title for the chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[5] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(5, "B")}
 >B. To plot data series with different value ranges on the same chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[5] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(5, "C")}
 >C. To create a 3D effect in the chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[5] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(5, "D")}
 >D. To add a second legend to the chart
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 6:</h4>
                              <p className="text-sm mb-3">Which chart type would be most appropriate to show the distribution of data points across ranges?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[6] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(6, "A")}
 >A. Pie chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[6] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(6, "B")}
 >B. Histogram
                                </Button>
                                <Button 
                                  variant={selectedAnswers[6] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(6, "C")}
 >C. Line chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[6] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(6, "D")}
 >D. Scatter chart
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 7:</h4>
                              <p className="text-sm mb-3">What does a trendline in a chart help you visualize?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[7] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(7, "A")}
 >A. The exact data points in the chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[7] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(7, "B")}
 >B. The minimum and maximum values
                                </Button>
                                <Button 
                                  variant={selectedAnswers[7] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(7, "C")}
 >C. The general direction of data over time
                                </Button>
                                <Button 
                                  variant={selectedAnswers[7] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(7, "D")}
 >D. The data labels for each point
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 8:</h4>
                              <p className="text-sm mb-3">Which chart type is best for showing the relationship between two variables?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[8] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(8, "A")}
 >A. Pie chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[8] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(8, "B")}
 >B. Scatter plot
                                </Button>
                                <Button 
                                  variant={selectedAnswers[8] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(8, "C")}
 >C. Area chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[8] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(8, "D")}
 >D. Doughnut chart
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 9:</h4>
                              <p className="text-sm mb-3">What is the purpose of data labels in a chart?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[9] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(9, "A")}
 >A. To add a title to the chart
                                </Button>
                                <Button 
                                  variant={selectedAnswers[9] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(9, "B")}
 >B. To change the chart type
                                </Button>
                                <Button 
                                  variant={selectedAnswers[9] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(9, "C")}
 >C. To show exact values on data points
                                </Button>
                                <Button 
                                  variant={selectedAnswers[9] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(9, "D")}
 >D. To adjust the axis scale
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 10:</h4>
                              <p className="text-sm mb-3">Which of the following is NOT a standard chart type in Excel?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[10] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(10, "A")}
 >A. Waterfall
                                </Button>
                                <Button 
                                  variant={selectedAnswers[10] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(10, "B")}
 >B. Funnel
                                </Button>
                                <Button 
                                  variant={selectedAnswers[10] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(10, "C")}
 >C. Radar
                                </Button>
                                <Button 
                                  variant={selectedAnswers[10] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "D" === "D" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(10, "D")}
 >D. Pyramid
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: D</p>}
                            </div>
                          </>
                        )}

                        {/* Data Management Topic Quiz */}
                        {currentTopic.id === "data-management" && (
                          <>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 1:</h4>
                              <p className="text-sm mb-3">Which keyboard shortcut can you use to quickly add filters to a data range?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[1] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "A")}
 >A. Ctrl+Shift+L
                                </Button>
                                <Button 
                                  variant={selectedAnswers[1] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "B")}
 >B. Ctrl+F
                                </Button>
                                <Button 
                                  variant={selectedAnswers[1] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "C")}
 >C. Alt+F1
                                </Button>
                                <Button 
                                  variant={selectedAnswers[1] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[1] === "D" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(1, "D")}
 >D. F7
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>

                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 2:</h4>
                              <p className="text-sm mb-3">Which feature helps you ensure only certain values can be entered in cells?</p>
                              <div className="space-y-2">
                                <Button 
                                  variant={selectedAnswers[2] === "A" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "A" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "A")}
 >A. Formulas
                                </Button>
                                <Button 
                                  variant={selectedAnswers[2] === "B" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "B" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "B")}
 >B. Cell protection
                                </Button>
                                <Button 
                                  variant={selectedAnswers[2] === "C" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && selectedAnswers[2] === "C" ? "border-red-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "C")}
 >C. Format cells
                                </Button>
                                <Button 
                                  variant={selectedAnswers[2] === "D" ? "secondary" : "outline"} 
                                  className={`justify-start w-full ${quizSubmitted && "D" === "D" ? "border-green-500" : ""}`}
                                  onClick={() => handleAnswerSelect(2, "D")}
 >D. Data validation
                                </Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: D</p>}
                            </div>

                            {/* Data Management Questions 3–15 */}
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 3:</h4>
                              <p className="text-sm mb-3">Which Excel feature helps you remove duplicate rows from a dataset?</p>
                              <div className="space-y-2">
                                <Button variant={selectedAnswers[3] === "A" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "A" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(3, "A")}>A. Data Validation</Button>
                                <Button variant={selectedAnswers[3] === "B" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`} onClick={() => handleAnswerSelect(3, "B")}>B. Remove Duplicates</Button>
                                <Button variant={selectedAnswers[3] === "C" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "C" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(3, "C")}>C. Sort</Button>
                                <Button variant={selectedAnswers[3] === "D" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[3] === "D" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(3, "D")}>D. Flash Fill</Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 4:</h4>
                              <p className="text-sm mb-3">What tool allows you to quickly find and replace values in a worksheet?</p>
                              <div className="space-y-2">
                                <Button variant={selectedAnswers[4] === "A" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "A" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(4, "A")}>A. Find & Replace</Button>
                                <Button variant={selectedAnswers[4] === "B" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "B" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(4, "B")}>B. Data Validation</Button>
                                <Button variant={selectedAnswers[4] === "C" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`} onClick={() => handleAnswerSelect(4, "C")}>C. Find & Select</Button>
                                <Button variant={selectedAnswers[4] === "D" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[4] === "D" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(4, "D")}>D. Filter</Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 5:</h4>
                              <p className="text-sm mb-3">Which feature allows you to restrict data entry to a predefined list of values?</p>
                              <div className="space-y-2">
                                <Button variant={selectedAnswers[5] === "A" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`} onClick={() => handleAnswerSelect(5, "A")}>A. Data Validation</Button>
                                <Button variant={selectedAnswers[5] === "B" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "B" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(5, "B")}>B. Conditional Formatting</Button>
                                <Button variant={selectedAnswers[5] === "C" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "C" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(5, "C")}>C. Flash Fill</Button>
                                <Button variant={selectedAnswers[5] === "D" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[5] === "D" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(5, "D")}>D. Remove Duplicates</Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 6:</h4>
                              <p className="text-sm mb-3">What is the purpose of the Filter feature in Excel?</p>
                              <div className="space-y-2">
                                <Button variant={selectedAnswers[6] === "A" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "A" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(6, "A")}>A. To find duplicate values</Button>
                                <Button variant={selectedAnswers[6] === "B" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "B" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(6, "B")}>B. To restrict data entry</Button>
                                <Button variant={selectedAnswers[6] === "C" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[6] === "C" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(6, "C")}>C. To sort data alphabetically</Button>
                                <Button variant={selectedAnswers[6] === "D" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && "D" === "D" ? "border-green-500" : ""}`} onClick={() => handleAnswerSelect(6, "D")}>D. To display only rows that meet certain criteria</Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: D</p>}
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 7:</h4>
                              <p className="text-sm mb-3">Which command would you use to quickly fill a series of values?</p>
                              <div className="space-y-2">
                                <Button variant={selectedAnswers[7] === "A" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "A" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(7, "A")}>A. Data Validation</Button>
                                <Button variant={selectedAnswers[7] === "B" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "B" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(7, "B")}>B. Remove Duplicates</Button>
                                <Button variant={selectedAnswers[7] === "C" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`} onClick={() => handleAnswerSelect(7, "C")}>C. Flash Fill</Button>
                                <Button variant={selectedAnswers[7] === "D" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[7] === "D" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(7, "D")}>D. Sort</Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 8:</h4>
                              <p className="text-sm mb-3">What is the main benefit of using an Excel Table?</p>
                              <div className="space-y-2">
                                <Button variant={selectedAnswers[8] === "A" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`} onClick={() => handleAnswerSelect(8, "A")}>A. Automatic range expansion and easier formula application</Button>
                                <Button variant={selectedAnswers[8] === "B" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "B" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(8, "B")}>B. It removes all formatting</Button>
                                <Button variant={selectedAnswers[8] === "C" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "C" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(8, "C")}>C. It restricts data entry</Button>
                                <Button variant={selectedAnswers[8] === "D" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[8] === "D" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(8, "D")}>D. It disables sorting</Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 9:</h4>
                              <p className="text-sm mb-3">Which feature allows you to set up rules that change cell formatting based on values?</p>
                              <div className="space-y-2">
                                <Button variant={selectedAnswers[9] === "A" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`} onClick={() => handleAnswerSelect(9, "A")}>A. Conditional Formatting</Button>
                                <Button variant={selectedAnswers[9] === "B" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "B" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(9, "B")}>B. Flash Fill</Button>
                                <Button variant={selectedAnswers[9] === "C" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "C" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(9, "C")}>C. Data Validation</Button>
                                <Button variant={selectedAnswers[9] === "D" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[9] === "D" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(9, "D")}>D. Remove Duplicates</Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 10:</h4>
                              <p className="text-sm mb-3">Which menu would you use to access the Sort feature?</p>
                              <div className="space-y-2">
                                <Button variant={selectedAnswers[10] === "A" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "A" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(10, "A")}>A. Data</Button>
                                <Button variant={selectedAnswers[10] === "B" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`} onClick={() => handleAnswerSelect(10, "B")}>B. Home</Button>
                                <Button variant={selectedAnswers[10] === "C" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "C" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(10, "C")}>C. Insert</Button>
                                <Button variant={selectedAnswers[10] === "D" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[10] === "D" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(10, "D")}>D. Review</Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 11:</h4>
                              <p className="text-sm mb-3">Which feature allows you to combine data from multiple ranges into one?</p>
                              <div className="space-y-2">
                                <Button variant={selectedAnswers[11] === "A" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[11] === "A" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(11, "A")}>A. Flash Fill</Button>
                                <Button variant={selectedAnswers[11] === "B" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[11] === "B" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(11, "B")}>B. Remove Duplicates</Button>
                                <Button variant={selectedAnswers[11] === "C" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[11] === "C" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(11, "C")}>C. Consolidate</Button>
                                <Button variant={selectedAnswers[11] === "D" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && "D" === "D" ? "border-green-500" : ""}`} onClick={() => handleAnswerSelect(11, "D")}>D. Consolidate</Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: D</p>}
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 12:</h4>
                              <p className="text-sm mb-3">What is the shortcut to open the Find dialog in Excel?</p>
                              <div className="space-y-2">
                                <Button variant={selectedAnswers[12] === "A" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[12] === "A" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(12, "A")}>A. Ctrl+H</Button>
                                <Button variant={selectedAnswers[12] === "B" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && "B" === "B" ? "border-green-500" : ""}`} onClick={() => handleAnswerSelect(12, "B")}>B. Ctrl+F</Button>
                                <Button variant={selectedAnswers[12] === "C" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[12] === "C" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(12, "C")}>C. Ctrl+G</Button>
                                <Button variant={selectedAnswers[12] === "D" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[12] === "D" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(12, "D")}>D. Ctrl+Shift+L</Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: B</p>}
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 13:</h4>
                              <p className="text-sm mb-3">Which feature allows you to create drop-down lists in cells?</p>
                              <div className="space-y-2">
                                <Button variant={selectedAnswers[13] === "A" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && "A" === "A" ? "border-green-500" : ""}`} onClick={() => handleAnswerSelect(13, "A")}>A. Data Validation</Button>
                                <Button variant={selectedAnswers[13] === "B" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[13] === "B" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(13, "B")}>B. Remove Duplicates</Button>
                                <Button variant={selectedAnswers[13] === "C" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[13] === "C" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(13, "C")}>C. Flash Fill</Button>
                                <Button variant={selectedAnswers[13] === "D" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[13] === "D" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(13, "D")}>D. Filter</Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: A</p>}
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 14:</h4>
                              <p className="text-sm mb-3">What is the benefit of using Flash Fill in Excel?</p>
                              <div className="space-y-2">
                                <Button variant={selectedAnswers[14] === "A" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[14] === "A" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(14, "A")}>A. It sorts data automatically</Button>
                                <Button variant={selectedAnswers[14] === "B" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[14] === "B" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(14, "B")}>B. It removes duplicates</Button>
                                <Button variant={selectedAnswers[14] === "C" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && "C" === "C" ? "border-green-500" : ""}`} onClick={() => handleAnswerSelect(14, "C")}>C. It automatically fills values based on a pattern</Button>
                                <Button variant={selectedAnswers[14] === "D" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[14] === "D" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(14, "D")}>D. It formats cells</Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: C</p>}
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium mb-3">Question 15:</h4>
                              <p className="text-sm mb-3">Which tool allows you to summarize and analyze large datasets in Excel?</p>
                              <div className="space-y-2">
                                <Button variant={selectedAnswers[15] === "A" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[15] === "A" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(15, "A")}>A. Flash Fill</Button>
                                <Button variant={selectedAnswers[15] === "B" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[15] === "B" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(15, "B")}>B. Remove Duplicates</Button>
                                <Button variant={selectedAnswers[15] === "C" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && selectedAnswers[15] === "C" ? "border-red-500" : ""}`} onClick={() => handleAnswerSelect(15, "C")}>C. Filter</Button>
                                <Button variant={selectedAnswers[15] === "D" ? "secondary" : "outline"} className={`justify-start w-full ${quizSubmitted && "D" === "D" ? "border-green-500" : ""}`} onClick={() => handleAnswerSelect(15, "D")}>D. PivotTable</Button>
                              </div>
                              {quizSubmitted && <p className="text-xs text-muted-foreground mt-2">Correct answer: D</p>}
                            </div>

                          </>
                        )}

                        {quizSubmitted && quizScore !== null && (
                          <div className="bg-muted p-6 rounded-lg border text-center">
                            <h3 className="text-xl font-semibold mb-2">Your Score</h3>
                            <div className="text-4xl font-bold mb-4" data-testid="quiz-score">
                              {quizScore} / {totalQuestions}
                            </div>
                            <p className="mb-4">
                              {quizScore >= Math.ceil(totalQuestions * 0.7) ? "Congratulations! You passed the quiz." : 
                               `You need ${Math.ceil(totalQuestions * 0.7)} correct answers to pass. Try again!`}
                            </p>
                            <Button 
                              variant="outline"
                              onClick={resetQuiz}
                              className="mr-2">Try Again
                            </Button>
                            {quizScore! >= 7 && (
                              <Button 
                                variant="excel" 
                                onClick={() => markTopicComplete(currentTopic.id)}
                                disabled={completedTopics.includes(currentTopic.id)}
                              >
                                {completedTopics.includes(currentTopic.id) ? "Completed" : "Mark as Complete"}
                              </Button>
                            )}
                          </div>
                        )}
                        
                        {!quizSubmitted && (
                          <div className="mt-4">
                            <Button 
                              onClick={() => submitQuiz()}
                              variant="excel">Submit Quiz
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );

};

export default ExcelFundamentals;