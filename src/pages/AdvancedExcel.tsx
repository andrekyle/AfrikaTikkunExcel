import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import CourseResourcesPanel from "@/components/CourseResourcesPanel";
import { 
  CheckCircle, 
  Clock, 
  Download, 
  Play, 
  BookOpen, 
  Code2, 
  Brain, 
  BarChart3, 
  Layout,
  ArrowLeft,
  Trophy,
  Zap,
  Database,
  Bot
} from "lucide-react";
import { Link } from "react-router-dom";
import VBAHandsOnMacroExercise from "@/components/VBAHandsOnMacroExercise";
import VBADataValidationExercise from "@/components/VBADataValidationExercise";
import VBAMultiSheetProcessorExercise from "@/components/VBAMultiSheetProcessorExercise";
import VBAReportGeneratorExercise from "@/components/VBAReportGeneratorExercise";
import VBAAdvancedFunctionsExercise from "@/components/VBAAdvancedFunctionsExercise";
import VBAErrorHandlingExercise from "@/components/VBAErrorHandlingExercise";
import VBAUserFormsExercise from "@/components/VBAUserFormsExercise";
import VBADeploymentSecurityExercise from "@/components/VBADeploymentSecurityExercise";
import AIToolsOverviewExercise from "@/components/AIToolsOverviewExercise";
import ChatGPTForExcelExercise from "@/components/ChatGPTForExcelExercise";
import PythonInExcelExercise from "@/components/PythonInExcelExercise";
import PowerPlatformIntegrationExercise from "@/components/PowerPlatformIntegrationExercise";
import DataAnalysisWithAIExercise from "@/components/DataAnalysisWithAIExercise";
import AIPoweredReportingExercise from "@/components/AIPoweredReportingExercise";
import PowerQueryMasteryExercise from "@/components/PowerQueryMasteryExercise";
import PowerPivotDAXExercise from "@/components/PowerPivotDAXExercise";
import StatisticalAnalysisExercise from "@/components/StatisticalAnalysisExercise";
import TimeSeriesAnalysisExercise from "@/components/TimeSeriesAnalysisExercise";
import AdvancedChartingExercise from "@/components/AdvancedChartingExercise";
import WhatIfAnalysisExercise from "@/components/WhatIfAnalysisExercise";
import SolverOptimizationExercise from "@/components/SolverOptimizationExercise";
import DashboardDesignExercise from "@/components/DashboardDesignExercise";
import InteractiveControlsExercise from "@/components/InteractiveControlsExercise";
import DynamicChartsExercise from "@/components/DynamicChartsExercise";
import PerformanceScorecardExercise from "@/components/PerformanceScorecardExercise";
import RealTimeDataExercise from "@/components/RealTimeDataExercise";
import PerformanceOptimizationExercise from "@/components/PerformanceOptimizationExercise";
import WorkflowAutomationExercise from "@/components/WorkflowAutomationExercise";
import DatabaseAPIIntegrationExercise from "@/components/DatabaseAPIIntegrationExercise";

const advancedTopics = [
  {
    id: "vba-macros",
    title: "VBA Programming & Macros",
    icon: Code2,
    duration: "2 weeks",
    lessons: 8,
    description: "Master VBA programming to automate Excel tasks",
    completed: false,
    color: "from-learning-orange to-excel-green"
  },
  {
    id: "ai-integration", 
    title: "AI Integration in Excel",
    icon: Brain,
    duration: "1.5 weeks",
    lessons: 6,
    description: "Leverage AI tools and ChatGPT with Excel",
    completed: false,
    color: "from-excel-blue to-accent"
  },
  {
    id: "advanced-analytics",
    title: "Advanced Data Analytics", 
    icon: BarChart3,
    duration: "2 weeks",
    lessons: 7,
    description: "Power Query, Power Pivot, and statistical analysis",
    completed: false,
    color: "from-success-green to-excel-green-light"
  },
  {
    id: "dashboard-creation",
    title: "Interactive Dashboards",
    icon: Layout,
    duration: "1.5 weeks", 
    lessons: 5,
    description: "Build dynamic dashboards and KPI tracking",
    completed: false,
    color: "from-excel-green to-excel-blue"
  },
  {
    id: "automation-optimization",
    title: "Automation & Optimization",
    icon: Zap,
    duration: "1 week",
    lessons: 4,
    description: "Optimize performance and automate workflows",
    completed: false,
    color: "from-learning-orange to-accent"
  }
];

const topicContent = {
  "vba-macros": {
    lessons: [
      { title: "Introduction to VBA Environment", content: "Learn the VBA editor, object model, and basic syntax", exercise: "Record and modify your first macro" },
      { title: "Variables and Data Types", content: "Master VBA variables, arrays, and data manipulation", exercise: "Create a data validation macro" },
      { title: "Control Structures", content: "If statements, loops, and decision making in VBA", exercise: "Build a dynamic report generator" },
      { title: "Working with Objects", content: "Manipulate worksheets, ranges, and Excel objects", exercise: "Create a multi-sheet data processor" },
      { title: "Error Handling", content: "Debug code and handle errors gracefully", exercise: "Build robust error-handling routines" },
      { title: "User Forms", content: "Create custom dialog boxes and user interfaces", exercise: "Design a data entry form" },
      {
  title: "Advanced Functions",
  content: "Create custom VBA functions for recruiting workflows, such as candidate scoring, recruiter assignment, and follow-up alerts.",
  exercise: "Write a function called AssignRecruiter that takes a candidate’s specialty (e.g., 'Engineering', 'Sales') and returns the recruiter assigned to that specialty. Also, create a CandidateScore function that calculates a weighted score from technical, communication, and culture interview scores."
},
      { title: "Deployment & Security", content: "Distribute macros safely and manage security", exercise: "Package a complete VBA solution" }
    ],
    quiz: [
      // VBA Editor Basics
      { question: "What keyboard shortcut opens the VBA editor in Excel?", answer: "Alt + F11" },
      { question: "What is the main window in the VBA editor where code is written?", answer: "Code Window" },
      
      // Recording Macros
      { question: "What is the purpose of using relative references when recording a macro?", answer: "To make the macro work relative to the active cell, not fixed cell addresses" },
      { question: "How can you view the code of a recorded macro?", answer: "Open the VBA editor and expand the module containing the macro" },
      
      // VBA Syntax
      { question: "What is the correct way to declare a variable in VBA?", answer: "Dim variableName As DataType" },
      { question: "What statement must appear at the beginning of a VBA Sub procedure?", answer: "Sub procedureName()" },
      
      // Variables & Data Types
      { question: "Which data type would be most appropriate for storing a candidate's hourly wage?", answer: "Currency" },
      { question: "How do you declare an array that can hold information for 10 job applicants?", answer: "Dim applicants(1 To 10) As String" },
      
      // Control Structures
      { question: "Which loop would be most appropriate when you need to process all candidates in a worksheet range?", answer: "For Each loop" },
      { question: "How would you create a decision structure that assigns different recruiters based on job department?", answer: "Select Case statement" },
      
      // User Forms
      { question: "What control would you use to allow users to select from a list of departments when adding a new candidate?", answer: "ComboBox" },
      { question: "How do you make a user form appear in your VBA application?", answer: "UserFormName.Show" },
      
      // Advanced Functions
      { question: "When creating a custom function like CandidateScore, what keyword must be used instead of Sub?", answer: "Function" },
      { question: "How do you make a custom VBA function available for use in worksheet cells?", answer: "Create it as a Public Function in a standard module" },
      
      // Deployment & Security
      { question: "What file extension is used for an Excel add-in that contains VBA code?", answer: ".xlam" },
      { question: "What is the recommended security setting when distributing macros to a recruiting team?", answer: "Disable all macros except digitally signed macros" }
    ]
  },
  "ai-integration": {
    lessons: [
      { title: "AI Tools Overview", content: "Explore AI capabilities in modern Excel", exercise: "Set up AI-powered data insights" },
      { title: "ChatGPT for Excel", content: "Use ChatGPT to generate formulas and solve problems", exercise: "Create complex formulas with AI assistance" },
      { title: "Python in Excel", content: "Leverage Python for advanced analytics", exercise: "Build ML models in Excel" },
      { title: "Power Platform Integration", content: "Connect Excel with Power Automate and AI Builder", exercise: "Create an automated AI workflow" },
      { title: "Data Analysis with AI", content: "Use AI for pattern recognition and insights", exercise: "Implement predictive analytics" },
      { title: "AI-Powered Reporting", content: "Generate intelligent reports and summaries", exercise: "Build an AI-enhanced dashboard" }
    ],
    quiz: [
      // AI Tools Overview
      { question: "Which Excel feature enables Python integration?", answer: "Python in Excel (Preview)" },
      { question: "How can ChatGPT help with Excel formulas?", answer: "Generate complex formulas and explain existing ones" },
      { question: "What is Power Platform?", answer: "Microsoft's low-code platform for automation and AI" },
      { question: "What is Copilot in Excel?", answer: "Microsoft's AI assistant that can analyze data, create formulas, and generate insights" },
      { question: "Which Excel AI feature can automatically suggest data transformations?", answer: "Ideas/Analyze Data feature" },
      { question: "What are the primary benefits of integrating AI with Excel?", answer: "Time savings, handling complex data, better insights, error reduction, and automation" },
      
      // ChatGPT for Excel
      { question: "What Excel task can ChatGPT help with that's difficult to do manually?", answer: "Creating complex nested formulas like INDEX/MATCH combinations or multi-condition arrays" },
      { question: "How can ChatGPT improve data cleaning in Excel?", answer: "By generating regex patterns and formulas to standardize inconsistent data formats" },
      { question: "What information should you provide to ChatGPT when asking for Excel formula help?", answer: "Sample data, desired outcome, column headers, and any constraints or business rules" },
      { question: "How can ChatGPT help debug Excel formulas?", answer: "By explaining formula logic step by step and identifying common errors" },
      { question: "What's a recommended workflow for using ChatGPT with Excel VBA?", answer: "Explain the task, share relevant code snippets, ask for specific functions, then test and refine the generated code" },
      
      // Python in Excel
      { question: "What data science libraries can you access through Python in Excel?", answer: "Pandas, NumPy, Matplotlib, scikit-learn, and TensorFlow" },
      { question: "How do you share Python in Excel workbooks with colleagues?", answer: "Recipients need Excel for Microsoft 365 (Beta Channel) and Python for Excel installed" },
      { question: "What function allows you to bring Python calculation results back into Excel cells?", answer: "PY.EVAL()" },
      { question: "What's the primary advantage of using Python in Excel over traditional Excel functions?", answer: "Access to advanced data science capabilities and machine learning algorithms" },
      { question: "How do you reference Excel ranges in Python code within Excel?", answer: "Using the px.DataFrame() function to convert Excel ranges to pandas DataFrames" },
      
      // Power Platform Integration
      { question: "How can Power Automate enhance Excel's AI capabilities?", answer: "By automating data flows between Excel and AI services and triggering AI processes based on events" },
      { question: "What type of AI models can be created using AI Builder and integrated with Excel?", answer: "Text classification, object detection, form processing, and sentiment analysis models" },
      { question: "How can Power BI's AI features complement Excel analysis?", answer: "By providing advanced visualizations, anomaly detection, and trend analysis on Excel data" },
      { question: "What's the benefit of using Power Automate with Excel rather than Excel's built-in automation?", answer: "Connecting to hundreds of external services and systems beyond Excel's native capabilities" },
      
      // Data Analysis with AI
      { question: "How can AI help identify outliers in Excel datasets?", answer: "By using machine learning algorithms to detect anomalies based on patterns rather than fixed rules" },
      { question: "What Excel AI feature can automatically generate charts based on your data?", answer: "Recommended Charts with Smart Visualization" },
      { question: "How can AI improve forecasting in Excel?", answer: "By incorporating multiple variables and identifying complex patterns that traditional forecasting might miss" },
      { question: "What technique allows Excel to use AI for clustering similar data points?", answer: "K-means clustering through Python integration or Power BI" },
      
      // AI-Powered Reporting
      { question: "How can AI help generate natural language summaries of Excel data?", answer: "Using language models to create narrative descriptions of key trends and insights" },
      { question: "What AI technology enables automatic translation of Excel reports into multiple languages?", answer: "Machine translation APIs like Microsoft Translator or GPT models" },
      { question: "How can AI enhance Excel dashboards beyond traditional visuals?", answer: "By providing predictive elements, natural language insights, and adaptive visualizations" }
    ]
  },
  "advanced-analytics": {
    lessons: [
      { title: "Power Query Mastery", content: "Advanced data transformation and connection", exercise: "Build complex data transformation pipelines" },
      { title: "Power Pivot & DAX", content: "Create data models and advanced calculations", exercise: "Design a comprehensive data model" },
      { title: "Statistical Analysis", content: "Regression, correlation, and hypothesis testing", exercise: "Perform statistical analysis on real data" },
      { title: "Time Series Analysis", content: "Forecast trends and analyze temporal data", exercise: "Create forecasting models" },
      { title: "Advanced Charting", content: "Custom visualizations and interactive charts", exercise: "Build advanced visualization dashboard" },
      { title: "What-If Analysis", content: "Scenario planning and sensitivity analysis", exercise: "Create Monte Carlo simulations" },
      { title: "Solver & Optimization", content: "Linear programming and optimization problems", exercise: "Solve complex optimization scenarios" }
    ],
    quiz: [
      // Power Query Mastery
      { question: "What is DAX?", answer: "Data Analysis Expressions - formula language for Power Pivot" },
      { question: "Which tool is best for data transformation?", answer: "Power Query" },
      { question: "What is the M language in Excel?", answer: "The formula language that powers Power Query transformations" },
      { question: "What is the primary advantage of using Power Query over Excel formulas for data cleaning?", answer: "Power Query creates repeatable data transformation steps that automatically update when source data changes" },
      { question: "How do you combine multiple tables in Power Query?", answer: "Using Merge (like SQL joins) or Append (to stack tables vertically)" },
      { question: "What Power Query feature helps you extract data from unstructured sources like reports or web pages?", answer: "Web scraping or parsing HTML tables" },
      
      // Power Pivot & DAX
      { question: "What is the difference between CALCULATE and CALCULATETABLE functions in DAX?", answer: "CALCULATE modifies filter context for a scalar value while CALCULATETABLE does the same for a table return value" },
      { question: "What are DAX filter contexts?", answer: "Row context (current row evaluation) and filter context (data visible due to applied filters)" },
      { question: "What is a calculated column in Power Pivot?", answer: "A column that uses a DAX formula to compute values that are stored in the data model" },
      { question: "What is a measure in Power Pivot?", answer: "A DAX calculation that is evaluated at query time based on current filter context" },
      { question: "How do you create a relationship between tables in Power Pivot?", answer: "Using the Diagram View to connect primary and foreign keys between tables" },
      { question: "What function would you use to create a year-to-date calculation in DAX?", answer: "TOTALYTD" },
      
      // Statistical Analysis
      { question: "What Excel function is used for calculating correlation between two data sets?", answer: "CORREL or PEARSON" },
      { question: "What does Monte Carlo simulation help with?", answer: "Risk analysis and scenario modeling" },
      { question: "Which Excel add-in provides advanced statistical analysis features?", answer: "Data Analysis ToolPak" },
      { question: "What is the function to perform a t-test in Excel?", answer: "T.TEST" },
      { question: "How do you determine if a correlation is statistically significant in Excel?", answer: "Using the T.DIST or T.TEST functions to calculate p-value" },
      
      // Time Series Analysis
      { question: "What Excel function is used for exponential smoothing forecasts?", answer: "FORECAST.ETS" },
      { question: "What is the best method for decomposing a time series into trend, seasonal, and residual components?", answer: "Using the Decomposition feature in the Data Analysis ToolPak or Power Query's decomposition transformations" },
      { question: "How do you detect seasonality in time series data using Excel?", answer: "Using autocorrelation with the CORREL function or visualizing with seasonal subseries plots" },
      
      // Advanced Charting
      { question: "What chart type would you use to show distribution of data points?", answer: "Histogram or Box and Whisker plot" },
      { question: "How can you create a dynamic chart that shows multiple metrics selected by the user?", answer: "Using a combination of OFFSET, INDEX, and named ranges linked to form controls" },
      { question: "What is the benefit of using combo charts in Excel?", answer: "Displaying different data types together (e.g., columns for values, line for trend)" },
      
      // What-If Analysis
      { question: "What Excel feature allows you to test multiple input values and see how they affect a formula?", answer: "Data Table (What-If Analysis)" },
      { question: "How would you find the optimal price point to maximize revenue?", answer: "Using Goal Seek to find the price where price × demand equals maximum revenue" },
      
      // Solver & Optimization
      { question: "What type of problems can Excel Solver handle?", answer: "Linear programming, integer programming, and nonlinear optimization problems" },
      { question: "What are the three components needed to set up a Solver optimization problem?", answer: "Objective cell (to maximize, minimize, or set to a value), variable cells (to adjust), and constraints (limitations)" }
    ]
  },
  "dashboard-creation": {
    lessons: [
      { title: "Dashboard Design Principles", content: "Best practices for effective dashboard design", exercise: "Design a KPI dashboard wireframe" },
      { title: "Interactive Controls", content: "Slicers, timelines, and form controls", exercise: "Build interactive filtering system" },
      { title: "Dynamic Charts", content: "Charts that update based on user selections", exercise: "Create dynamic chart dashboard" },
      { title: "Conditional Formatting", content: "Advanced formatting rules and data bars", exercise: "Build a performance scorecard" },
      { title: "Real-time Data", content: "Connect to live data sources", exercise: "Create a real-time monitoring dashboard" }
    ],
    quiz: [
      { question: "What makes a dashboard effective?", answer: "Clear KPIs, intuitive design, and relevant data" },
      { question: "Which control is best for date filtering?", answer: "Timeline slicer" },
      { question: "How do you create dynamic chart ranges?", answer: "Use OFFSET, INDEX, or Table references" },
      
      // Dashboard Design Principles
      { question: "What is the 5-second rule for dashboard design?", answer: "Users should be able to understand the main insights within 5 seconds of viewing" },
      { question: "What is the recommended maximum number of KPIs on an executive dashboard?", answer: "5-7 KPIs" },
      { question: "Which chart type is best for comparing values across different categories?", answer: "Bar chart" },
      { question: "What is the purpose of a dashboard wireframe?", answer: "To plan the layout and content before building the actual dashboard" },
      { question: "What color should be used for negative variance indicators in financial dashboards?", answer: "Red" },
      
      // Interactive Controls
      { question: "What Excel feature allows users to filter data across multiple charts simultaneously?", answer: "Slicers" },
      { question: "Which control type would you use to create a dropdown menu in a dashboard?", answer: "Form control: Combo Box or ActiveX Combo Box" },
      { question: "How can you make a slicer affect multiple PivotTables?", answer: "Connect it to multiple PivotTables through Slicer Connections" },
      { question: "What feature allows you to filter a dashboard by multiple date ranges?", answer: "Timeline slicer with CTRL+Click for multiple selections" },
      { question: "How do you create a toggle switch in an Excel dashboard?", answer: "Using a checkbox form control linked to a cell" },
      
      // Dynamic Charts
      { question: "What formula is commonly used to create a dynamic named range that expands with data?", answer: "=OFFSET(Sheet1!$A$1,0,0,COUNTA(Sheet1!$A:$A),1)" },
      { question: "How can you make a chart display different data series based on user selection?", answer: "Use INDIRECT function with dropdown selection to change source range" },
      { question: "What is the benefit of using Tables instead of ranges for dashboard source data?", answer: "Tables automatically expand when new data is added and provide structured references" },
      { question: "How can you create a dynamic chart title that changes with user selections?", answer: "Link the chart title to a cell that uses a formula referencing the selection" },
      { question: "What function can create dynamic labels that show both category and value?", answer: "CONCATENATE or & operator (e.g., =A1&\": \"&B1)" },
      
      // Data Visualization
      { question: "What is data-ink ratio in dashboard design?", answer: "The proportion of ink used for actual data versus decorative elements" },
      { question: "When should you use a gauge chart in a dashboard?", answer: "To show progress toward a specific target or goal" },
      { question: "What visualization is best for showing part-to-whole relationships?", answer: "Pie chart or treemap" },
      { question: "How can you highlight important data points in a large dataset visualization?", answer: "Use conditional formatting or data bars to provide visual cues" },
      { question: "What chart type is best for showing trends over time?", answer: "Line chart" },
      
      // Advanced Dashboard Techniques
      { question: "What Excel feature can simulate a button click when a cell value changes?", answer: "Worksheet_Change event in VBA" },
      { question: "How can you create cascading filters in a dashboard?", answer: "Use dependent data validation lists" },
      { question: "What technique allows a dashboard to display details when clicking on a summary item?", answer: "Hyperlinks to detail sheets or GETPIVOTDATA function" },
      { question: "How can you optimize a dashboard that contains large datasets?", answer: "Use PowerPivot, reduce volatile functions, and limit conditional formatting ranges" },
      { question: "What is a sparkline in Excel dashboards?", answer: "A small chart in a single cell that shows data trends in a compact format" }
    ]
  },
  "automation-optimization": {
    lessons: [
      { title: "Performance Optimization", content: "Speed up calculations and file performance", exercise: "Optimize a slow workbook" },
      { title: "Workflow Automation", content: "Automate repetitive tasks and processes", exercise: "Create an automated reporting system" },
      { title: "Integration with Other Tools", content: "Connect Excel with databases and APIs", exercise: "Build data integration pipeline" },
      { title: "Best Practices", content: "Professional Excel development standards", exercise: "Refactor existing workbook following best practices" }
    ],
    quiz: [
      { question: "What slows down Excel calculations?", answer: "Volatile functions, circular references, and complex formulas" },
      { question: "How can you automate Excel tasks?", answer: "VBA macros, Power Automate, or scheduled scripts" },
      { question: "What's the best way to connect Excel to a database?", answer: "Power Query or ODBC connections" },
      
      // Database Integration Questions
      { question: "What VBA library is commonly used to connect to databases?", answer: "ADO (ActiveX Data Objects)" },
      { question: "Which object in ADO is used to execute SQL queries?", answer: "Command object" },
      { question: "What's the main advantage of using Power Query over VBA for database connections?", answer: "Built-in ETL capabilities and no coding required" },
      { question: "What SQL statement is used to retrieve data from a database?", answer: "SELECT" },
      { question: "What connection string parameter specifies the database server name?", answer: "Data Source or Server" },
      { question: "What Excel object is used to store external data connections?", answer: "Workbook Connections" },
      
      // API Integration Questions
      { question: "What VBA object is commonly used to make HTTP requests to APIs?", answer: "MSXML2.XMLHTTP or WinHttpRequest" },
      { question: "What format do most modern web APIs return data in?", answer: "JSON" },
      { question: "What HTTP method is typically used to retrieve data from an API?", answer: "GET" },
      { question: "What VBA library can parse JSON responses from APIs?", answer: "VBA-JSON or native JSON parsing in Office 365" },
      { question: "What header is often required for authentication with APIs?", answer: "Authorization" },
      { question: "What Excel feature allows you to refresh web data connections automatically?", answer: "Data Connection Properties with automatic refresh intervals" },
      
      // Advanced Database Integration
      { question: "What is a parameterized query and why is it important for database security?", answer: "A query where parameters are supplied separately from SQL, preventing SQL injection attacks" },
      { question: "Which Excel data connection type provides the most control over SQL queries?", answer: "ODBC (Open Database Connectivity)" },
      { question: "What Power Query function is used to execute custom SQL queries?", answer: "Sql.Database()" },
      { question: "What is the primary advantage of using stored procedures with Excel?", answer: "Better performance, security, and centralized business logic" },
      { question: "How can you handle transactional data operations in VBA?", answer: "Using BEGIN TRANSACTION, COMMIT, and ROLLBACK commands" },
      
      // Advanced API Integration
      { question: "What is OAuth and how does it relate to API connections from Excel?", answer: "An authentication protocol that allows secure API access without sharing credentials" },
      { question: "How can you handle paginated API responses in Excel?", answer: "Using loops with cursor/pagination parameters to fetch all pages" },
      { question: "What is the advantage of using Power Automate over VBA for API connections?", answer: "Built-in connectors, no code required, and cloud-based execution" },
      { question: "What technique allows Excel to receive real-time data updates from external sources?", answer: "WebSocket connections or polling with timed auto-refresh" },
      
      // Integration Security
      { question: "What is the most secure way to store API keys or database credentials in an Excel solution?", answer: "In encrypted external files or environment variables, never hardcoded in VBA modules" }
    ]
  }
};

const AdvancedExcel = () => {
  // Fixed useState hooks - using destructured useState import
  const [selectedTopic, setSelectedTopic] = useState("vba-macros");
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [showQuiz, setShowQuiz] = useState(false);

  const currentTopic = topicContent[selectedTopic as keyof typeof topicContent];
  const progress = (completedLessons.size / Object.values(topicContent).reduce((acc, topic) => acc + topic.lessons.length, 0)) * 100;

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Header */}
      <div className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-learning-orange to-excel-green">
                    <Zap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  Advanced Excel + VBA + AI
                </h1>
                <p className="text-muted-foreground">Master advanced Excel, VBA programming, and AI integration</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Course Progress</div>
              <div className="flex items-center gap-2">
                <Progress value={progress} className="w-32" />
                <span className="text-sm font-medium">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-6">
        <CourseResourcesPanel courseId="advanced-excel" />
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
                {advancedTopics.map((topic) => {
                  const IconComponent = topic.icon;
                  const isSelected = selectedTopic === topic.id;
                  const topicLessons = topicContent[topic.id as keyof typeof topicContent]?.lessons || [];
                  const completedCount = topicLessons.filter((_, idx) => 
                    completedLessons.has(`${topic.id}-${idx}`)
                  ).length;
                  
                  return (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic.id)}
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
                        {completedCount === topicLessons.length && (
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
            {/* Topic Header */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {(() => {
                      const topic = advancedTopics.find(t => t.id === selectedTopic);
                      const IconComponent = topic?.icon || Code2;
                      return (
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${topic?.color || 'from-learning-orange to-excel-green'}`}>
                          <IconComponent className="h-6 w-6 text-primary-foreground" />
                        </div>
                      );
                    })()}
                    <div>
                      <CardTitle className="text-xl">
                        {advancedTopics.find(t => t.id === selectedTopic)?.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {advancedTopics.find(t => t.id === selectedTopic)?.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">
                      {advancedTopics.find(t => t.id === selectedTopic)?.duration}
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
                            variant={isCompleted ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleLessonComplete(selectedTopic, index)}
                            className={isCompleted ? "bg-success-green hover:bg-success-green/90" : ""}
                          >
                            {isCompleted ? (
                              <>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Completed
                              </>
                            ) : (
                              <>
                                <Play className="h-4 w-4 mr-2" />
                                Start
                              </>
                            )}
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                            <Code2 className="h-4 w-4" />
                            Hands-on Exercise
                          </h4>
                          {lesson.title === "Introduction to VBA Environment" ? (
                              <VBAHandsOnMacroExercise />
                            ) : lesson.title === "Variables and Data Types" ? (
                              <VBADataValidationExercise />
                            ) : lesson.title === "Control Structures" ? (
                              <VBAReportGeneratorExercise />
                            ) : lesson.title === "Working with Objects" ? (
                              <VBAMultiSheetProcessorExercise />
                            ) : lesson.title === "Advanced Functions" ? (
                              <VBAAdvancedFunctionsExercise />
                            ) : lesson.title === "Error Handling" ? (
                              <VBAErrorHandlingExercise />
                            ) : lesson.title === "User Forms" ? (
                              <VBAUserFormsExercise />
                            ) : lesson.title === "Deployment & Security" ? (
                              <VBADeploymentSecurityExercise />
                            ) : lesson.title === "AI Tools Overview" ? (
                              <AIToolsOverviewExercise />
                            ) : lesson.title === "ChatGPT for Excel" ? (
                              <ChatGPTForExcelExercise />
                            ) : lesson.title === "Python in Excel" ? (
                              <PythonInExcelExercise />
                            ) : lesson.title === "Power Platform Integration" ? (
                              <PowerPlatformIntegrationExercise />
                            ) : lesson.title === "Data Analysis with AI" ? (
                              <DataAnalysisWithAIExercise />
                            ) : lesson.title === "AI-Powered Reporting" ? (
                              <AIPoweredReportingExercise />
                            ) : lesson.title === "Power Query Mastery" ? (
                              <PowerQueryMasteryExercise />
                            ) : lesson.title === "Power Pivot & DAX" ? (
                              <PowerPivotDAXExercise />
                            ) : lesson.title === "Statistical Analysis" ? (
                              <StatisticalAnalysisExercise />
                            ) : lesson.title === "Time Series Analysis" ? (
                              <TimeSeriesAnalysisExercise />
                            ) : lesson.title === "Advanced Charting" ? (
                              <AdvancedChartingExercise />
                            ) : lesson.title === "What-If Analysis" ? (
                              <WhatIfAnalysisExercise />
                            ) : lesson.title === "Solver & Optimization" ? (
                              <SolverOptimizationExercise />
                            ) : lesson.title === "Dashboard Design Principles" ? (
                              <DashboardDesignExercise />
                            ) : lesson.title === "Interactive Controls" ? (
                              <InteractiveControlsExercise />
                            ) : lesson.title === "Dynamic Charts" ? (
                              <DynamicChartsExercise />
                            ) : lesson.title === "Conditional Formatting" ? (
                              <PerformanceScorecardExercise />
                            ) : lesson.title === "Real-time Data" ? (
                              <RealTimeDataExercise />
                            ) : lesson.title === "Performance Optimization" ? (
                              <PerformanceOptimizationExercise />
                            ) : lesson.title === "Workflow Automation" ? (
                              <WorkflowAutomationExercise />
                            ) : lesson.title === "Integration with Other Tools" ? (
                              <DatabaseAPIIntegrationExercise />
                            ) : (
                              lesson.exercise && (
                                <p className="text-sm text-muted-foreground">{lesson.exercise}</p>
                              )
                            )}
                          </div>
                        </CardContent>
                      </Card>
                  );
                })}
              </TabsContent>

              <TabsContent value="quiz" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5" />
                      Knowledge Check
                    </CardTitle>
                    <CardDescription>Test your understanding of {advancedTopics.find(t => t.id === selectedTopic)?.title}
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
                        <Download className="h-5 w-5" />
                        Practice Files
                      </CardTitle>
                      <CardDescription>Download practice workbooks for hands-on learning</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button asChild variant="outline" className="w-full justify-start">
                        <a href="/solutions/VBA_Practice_Workbook.xlsm" download>
                          <Download className="h-4 w-4 mr-2" />
                          VBA Practice Workbook.xlsm
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <a href="/solutions/AI_Integration_Examples.xlsx" download>
                          <Download className="h-4 w-4 mr-2" />
                          AI Integration Examples.xlsx
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <a href="/solutions/Analytics_Sample_Data.xlsx" download>
                          <Download className="h-4 w-4 mr-2" />
                          Analytics Sample Data.xlsx
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <a href="/solutions/Dashboard_Templates.xlsx" download>
                          <Download className="h-4 w-4 mr-2" />
                          Dashboard Templates.xlsx
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <a href="/solutions/database-api/SalesAnalytics_Setup.sql" download>
                          <Database className="h-4 w-4 mr-2" />
                          Database Integration SQL Script
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <a href="/solutions/database-api/DatabaseAPI_Connection.bas" download>
                          <Code2 className="h-4 w-4 mr-2" />
                          VBA Database & API Modules
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Bot className="h-5 w-5" />
                        AI Tools & References
                      </CardTitle>
                      <CardDescription>External tools and resources for advanced Excel</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button asChild variant="outline" className="w-full justify-start">
                        <a href="/resources/ChatGPT_Excel_Prompts.md" download>
                          <Brain className="h-4 w-4 mr-2" />
                          ChatGPT Excel Prompts
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <a href="/resources/Power_Platform_Resources.md" download>
                          <Database className="h-4 w-4 mr-2" />
                          Power Platform Resources
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <a href="/resources/VBA_Code_Library.md" download>
                          <Code2 className="h-4 w-4 mr-2" />
                          VBA Code Library
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <a href="/resources/Analytics_Cheat_Sheet.md" download>
                          <BarChart3 className="h-4 w-4 mr-2" />
                          Analytics Cheat Sheet
                        </a>
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

export default AdvancedExcel;