import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, Check, ArrowRight, Play, Brain, Sparkles, Zap, Target, Database, TrendingUp } from "lucide-react";
import CopyableContent from "@/components/CopyableContent";

interface AIInExcelOverviewLessonProps {
  onContinue?: () => void;
}

const AIInExcelOverviewLesson: React.FC<AIInExcelOverviewLessonProps> = ({ onContinue }) => {
  const [copied, setCopied] = useState<{[key: string]: boolean}>({});

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopied(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const aiFeatures = [
    {
      name: "Ideas (Insights)",
      description: "Automatically suggests charts, pivot tables, and data insights",
      icon: <Brain className="h-5 w-5" />,
      availability: "Excel 365, Excel Online"
    },
    {
      name: "Flash Fill",
      description: "Intelligently detects patterns and fills data automatically",
      icon: <Zap className="h-5 w-5" />,
      availability: "Excel 2013+"
    },
    {
      name: "Smart Lookup",
      description: "Provides contextual information from the web",
      icon: <Target className="h-5 w-5" />,
      availability: "Excel 365, Excel 2016+"
    },
    {
      name: "Data Types",
      description: "Rich data types with automatic data enrichment",
      icon: <Database className="h-5 w-5" />,
      availability: "Excel 365"
    },
    {
      name: "Analyze Data",
      description: "Natural language queries for data analysis",
      icon: <TrendingUp className="h-5 w-5" />,
      availability: "Excel 365, Excel Online"
    },
    {
      name: "Power Query AI",
      description: "AI-powered data transformation and cleaning",
      icon: <Sparkles className="h-5 w-5" />,
      availability: "Excel 365, Power BI"
    }
  ];

  const sampleData = {
    sales: `Product	Region	Sales	Date
Laptop	North	15000	2024-01-15
Tablet	South	8500	2024-01-16
Phone	East	12000	2024-01-17
Laptop	West	18000	2024-01-18
Tablet	North	9500	2024-01-19
Phone	South	11000	2024-01-20
Laptop	East	16500	2024-01-21
Tablet	West	7800	2024-01-22
Phone	North	13500	2024-01-23
Laptop	South	17200	2024-01-24`,
    
    employees: `Employee	Department	Salary	Performance	Years
John Smith	Sales	65000	Excellent	5
Sarah Johnson	Marketing	58000	Good	3
Mike Davis	IT	72000	Excellent	7
Lisa Brown	HR	55000	Good	4
Tom Wilson	Sales	61000	Very Good	6
Emma Taylor	Marketing	52000	Good	2
David Lee	IT	68000	Excellent	4
Anna White	HR	59000	Very Good	8
Chris Green	Sales	63000	Good	3
Maria Garcia	Marketing	56000	Excellent	5`,

    inventory: `Item	Category	Stock	Reorder Level	Supplier
Office Chair	Furniture	45	20	ABC Supplies
Desk Lamp	Electronics	78	15	Tech Solutions
Notebook	Stationery	234	50	Paper Plus
Monitor	Electronics	23	10	Tech Solutions
Filing Cabinet	Furniture	12	5	ABC Supplies
Printer Paper	Stationery	156	100	Paper Plus
Wireless Mouse	Electronics	67	25	Tech Solutions
Bookshelf	Furniture	8	3	ABC Supplies
Pens (Box)	Stationery	89	30	Paper Plus
Keyboard	Electronics	34	20	Tech Solutions`
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Brain className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">AI in Excel Overview</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Understand AI capabilities and integration options in Excel. Explore built-in AI features and learn how to leverage artificial intelligence for data analysis and automation.
        </p>
        <div className="flex justify-center gap-2">
          <Badge variant="secondary">AI Features</Badge>
          <Badge variant="secondary">Data Intelligence</Badge>
          <Badge variant="secondary">Automation</Badge>
        </div>
      </div>

      {/* AI Capabilities Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            Built-in AI Features in Excel
          </CardTitle>
          <CardDescription>
            Excel includes several AI-powered features that can automatically analyze data, suggest insights, and automate repetitive tasks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="text-blue-600 mt-1">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {feature.availability}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Project 1: Sales Data Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            Hands-on Project 1: Sales Data Analysis with AI
          </CardTitle>
          <CardDescription>
            Use Excel's AI features to analyze sales data and generate insights automatically.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h3 className="font-semibold">Step 1: Create Sales Data Table</h3>
            <p className="text-sm text-gray-600">
              Copy the following sales data into Excel and format it as a table (Ctrl+T):
            </p>
            <CopyableContent
              content={sampleData.sales}
              label="Sales Data"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {sampleData.sales}
              </pre>
            </CopyableContent>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 2: Use Ideas Feature</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>Select any cell in your data table</li>
              <li>Go to <strong>Home</strong> tab → <strong>Ideas</strong> button</li>
              <li>Excel will automatically analyze your data and suggest:</li>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Charts showing sales by region</li>
                <li>Pivot tables for product analysis</li>
                <li>Trend analysis over time</li>
                <li>Top performers identification</li>
              </ul>
            </ol>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 3: Try Analyze Data</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>Click on <strong>Analyze Data</strong> in the Home tab</li>
              <li>Ask natural language questions like:</li>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>"Which region has the highest sales?"</li>
                <li>"Show me sales trends by product"</li>
                <li>"What's the average sales per region?"</li>
                <li>"Which product performs best in each region?"</li>
              </ul>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Project 2: Employee Data with Flash Fill */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Hands-on Project 2: Employee Data with Flash Fill
          </CardTitle>
          <CardDescription>
            Demonstrate Excel's Flash Fill AI feature for data pattern recognition and automation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h3 className="font-semibold">Step 1: Create Employee Data</h3>
            <p className="text-sm text-gray-600">
              Copy this employee data into Excel:
            </p>
            <CopyableContent
              content={sampleData.employees}
              label="Employee Data"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {sampleData.employees}
              </pre>
            </CopyableContent>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 2: Use Flash Fill for Email Generation</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>Add a new column header "Email"</li>
              <li>In the first cell, type: <code>john.smith@company.com</code></li>
              <li>In the second cell, type: <code>sarah.johnson@company.com</code></li>
              <li>Select both cells and press <strong>Ctrl+E</strong> (Flash Fill)</li>
              <li>Excel will automatically generate emails for all employees</li>
            </ol>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 3: Create Performance Categories</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>Add a new column "Performance Level"</li>
              <li>Type "High" for Excellent performance</li>
              <li>Type "Medium" for Very Good performance</li>
              <li>Use Flash Fill to categorize remaining employees</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Project 3: Inventory Management with Data Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Hands-on Project 3: Smart Inventory Management
          </CardTitle>
          <CardDescription>
            Use Excel's Data Types and Smart Lookup features for enhanced inventory analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h3 className="font-semibold">Step 1: Create Inventory Table</h3>
            <p className="text-sm text-gray-600">
              Copy this inventory data and format as a table:
            </p>
            <CopyableContent
              content={sampleData.inventory}
              label="Inventory Data"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {sampleData.inventory}
              </pre>
            </CopyableContent>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 2: Add Smart Formulas</h3>
            <p className="text-sm text-gray-600">
              Add these AI-enhanced formulas to analyze your inventory:
            </p>
            <div className="space-y-3">
              <CopyableContent
                content='=IF(Stock<=Reorder_Level, "REORDER NEEDED", "OK")'
                label="Reorder Status Formula"
              >
                <code className="bg-gray-50 p-2 rounded text-sm font-mono block">
                  =IF(Stock&lt;=Reorder_Level, "REORDER NEEDED", "OK")
                </code>
              </CopyableContent>
              <CopyableContent
                content='=COUNTIFS(Category, "Electronics", Stock, "<20")'
                label="Low Stock Electronics Count"
              >
                <code className="bg-gray-50 p-2 rounded text-sm font-mono block">
                  =COUNTIFS(Category, "Electronics", Stock, "&lt;20")
                </code>
              </CopyableContent>
              <CopyableContent
                content='=SUMIFS(Stock, Supplier, "Tech Solutions")'
                label="Total Stock by Supplier"
              >
                <code className="bg-gray-50 p-2 rounded text-sm font-mono block">
                  =SUMIFS(Stock, Supplier, "Tech Solutions")
                </code>
              </CopyableContent>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 3: Use Smart Lookup</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>Right-click on any item name (e.g., "Office Chair")</li>
              <li>Select <strong>Smart Lookup</strong> from the context menu</li>
              <li>Review additional information and insights from the web</li>
              <li>Use this data to make informed purchasing decisions</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* AI Integration Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            AI Integration Best Practices
          </CardTitle>
          <CardDescription>
            Guidelines for effectively using AI features in Excel for maximum productivity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-green-700">✅ Do's</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Clean and structure your data before using AI features</li>
                <li>• Use descriptive column headers for better AI recognition</li>
                <li>• Experiment with natural language queries in Analyze Data</li>
                <li>• Validate AI suggestions before implementing them</li>
                <li>• Combine AI features with traditional Excel functions</li>
                <li>• Keep data tables properly formatted</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-red-700">❌ Don'ts</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Don't rely solely on AI without understanding the logic</li>
                <li>• Avoid using AI on poorly structured data</li>
                <li>• Don't ignore data privacy considerations</li>
                <li>• Avoid overcomplicating simple tasks with AI</li>
                <li>• Don't skip data validation after AI processing</li>
                <li>• Avoid using AI features on sensitive data without review</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle>🎯 Key Takeaways</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold">AI Capabilities</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Ideas feature provides automatic insights</li>
                <li>• Flash Fill recognizes and extends patterns</li>
                <li>• Analyze Data accepts natural language queries</li>
                <li>• Smart Lookup enriches data with web information</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Practical Applications</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Automated data analysis and visualization</li>
                <li>• Pattern recognition for data entry</li>
                <li>• Intelligent data cleaning and formatting</li>
                <li>• Enhanced decision-making with AI insights</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps Button */}
      <div className="flex justify-end mt-8">
        <Button variant="default" className="gap-2" onClick={onContinue}>
          <span>Continue to Next Lesson</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AIInExcelOverviewLesson;
