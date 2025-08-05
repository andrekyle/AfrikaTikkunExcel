import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Database, Zap, Target, CheckCircle, AlertTriangle, Bot, Sparkles, Filter, RefreshCw, FileText, TrendingUp } from 'lucide-react';
import CopyableContent from './CopyableContent';

interface PowerQueryAILessonProps {
  onContinue?: () => void;
}

const PowerQueryAILesson: React.FC<PowerQueryAILessonProps> = ({ onContinue }) => {
  const sampleData = {
    customerData: `CustomerID,FirstName,LastName,Email,Phone,City,State
C001,John,Smith,john.smith@email.com,555-0101,New York,NY
C002,Sarah,Johnson,sarah.j@email.com,555-0102,Los Angeles,CA
C003,Mike,Davis,mike.davis@email.com,555-0103,Chicago,IL
C004,Lisa,Wilson,lisa.w@email.com,555-0104,Houston,TX
C005,Tom,Brown,tom.brown@email.com,555-0105,Phoenix,AZ`,

    salesData: `Date,Product,Region,Salesperson,Amount,Category
2024-01-15,Laptop Pro,North,John Smith,1299.99,Electronics
2024-01-16,Office Chair,South,Sarah Johnson,299.50,Furniture
2024-01-17,Wireless Mouse,East,Mike Davis,49.99,Electronics
2024-01-18,Standing Desk,West,Lisa Wilson,599.00,Furniture
2024-01-19,Tablet,North,John Smith,399.99,Electronics`
  };

  const mCodeExamples = {
    columnFromExamples: `let
    Source = Excel.CurrentWorkbook(){[Name="Table1"]}[Content],
    #"Added Custom" = Table.AddColumn(Source, "First Name", 
        each Text.BeforeDelimiter([Email], "@"), type text),
    #"Added Domain" = Table.AddColumn(#"Added Custom", "Domain", 
        each Text.AfterDelimiter([Email], "@"), type text)
in
    #"Added Domain"`,

    fuzzyMatching: `let
    Source1 = Excel.CurrentWorkbook(){[Name="Customers"]}[Content],
    Source2 = Excel.CurrentWorkbook(){[Name="Orders"]}[Content],
    #"Merged Queries" = Table.FuzzyNestedJoin(
        Source1, {"Company Name"}, 
        Source2, {"Customer Company"}, 
        "Orders", JoinKind.LeftOuter,
        [IgnoreCase = true, Threshold = 0.8])
in
    #"Merged Queries"`,

    anomalyDetection: `let
    Source = Excel.CurrentWorkbook(){[Name="SalesData"]}[Content],
    #"Added Mean" = Table.AddColumn(Source, "Mean Amount", 
        each List.Average(Table.Column(Source, "Amount"))),
    #"Added Anomaly Flag" = Table.AddColumn(#"Added Mean", "Is Anomaly", 
        each if Number.Abs([Amount] - [Mean Amount]) > 
             (2 * List.StandardDeviation(Table.Column(Source, "Amount"))) 
             then "Yes" else "No")
in
    #"Added Anomaly Flag"`
  };

  const powerQueryFeatures = [
    {
      name: "Column from Examples",
      description: "AI learns patterns from your examples to create new columns",
      icon: <Sparkles className="h-5 w-5 text-purple-500" />,
      useCase: "Extract names from emails, format dates, clean text"
    },
    {
      name: "Fuzzy Matching",
      description: "AI-powered approximate matching for data merging",
      icon: <Target className="h-5 w-5 text-green-500" />,
      useCase: "Match similar company names, addresses, products"
    },
    {
      name: "Text Analytics",
      description: "Extract insights from text data using AI",
      icon: <FileText className="h-5 w-5 text-orange-500" />,
      useCase: "Sentiment analysis, keyword extraction, classification"
    },
    {
      name: "Anomaly Detection",
      description: "Automatically identify outliers and unusual patterns",
      icon: <TrendingUp className="h-5 w-5 text-red-500" />,
      useCase: "Detect fraud, quality issues, data errors"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500">
            <Database className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Power Query AI Features</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Master AI-powered data transformation using Power Query's intelligent features for automated data cleaning and insights
        </p>
        <div className="flex justify-center gap-2">
          <Badge variant="secondary">Power Query</Badge>
          <Badge variant="secondary">AI Transformation</Badge>
          <Badge variant="secondary">Data Cleaning</Badge>
        </div>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Use Column from Examples for AI-powered data extraction</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Implement fuzzy matching for approximate data merging</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Apply text analytics and anomaly detection</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Build intelligent data transformation workflows</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* AI Features Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            AI-Powered Features in Power Query
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {powerQueryFeatures.map((feature, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  {feature.icon}
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-700 mb-2">{feature.name}</h4>
                    <p className="text-gray-700 mb-2">{feature.description}</p>
                    <div className="bg-blue-50 p-2 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Use Case:</strong> {feature.useCase}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project 1: Column from Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            Project 1: Smart Data Extraction
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold">Sample Customer Data</h3>
            <CopyableContent
              content={sampleData.customerData}
              label="Customer Data CSV"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {sampleData.customerData}
              </pre>
            </CopyableContent>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Steps to Use Column from Examples</h3>
            <div className="bg-blue-50 p-4 rounded-md">
              <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
                <li>Load data into Power Query Editor</li>
                <li>Go to Add Column → Column from Examples</li>
                <li>Type examples of what you want to extract</li>
                <li>AI detects pattern and suggests formula</li>
                <li>Review preview and click OK to apply</li>
              </ol>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Generated M Code</h3>
            <CopyableContent
              content={mCodeExamples.columnFromExamples}
              label="Column from Examples M Code"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {mCodeExamples.columnFromExamples}
              </pre>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Project 2: Fuzzy Matching */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Project 2: Smart Data Merging
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold">Fuzzy Matching Setup</h3>
            <div className="bg-green-50 p-4 rounded-md">
              <ol className="list-decimal list-inside space-y-2 text-sm text-green-800">
                <li>Load both tables into Power Query</li>
                <li>Select primary table → Home → Merge Queries</li>
                <li>Choose secondary table and matching columns</li>
                <li>Enable "Fuzzy matching options"</li>
                <li>Set similarity threshold (0.8 = 80% match)</li>
                <li>Configure options like "Ignore case"</li>
              </ol>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Fuzzy Matching M Code</h3>
            <CopyableContent
              content={mCodeExamples.fuzzyMatching}
              label="Fuzzy Matching M Code"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {mCodeExamples.fuzzyMatching}
              </pre>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Project 3: Anomaly Detection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Project 3: Anomaly Detection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold">Sales Data for Analysis</h3>
            <CopyableContent
              content={sampleData.salesData}
              label="Sales Data CSV"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {sampleData.salesData}
              </pre>
            </CopyableContent>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Anomaly Detection M Code</h3>
            <CopyableContent
              content={mCodeExamples.anomalyDetection}
              label="Anomaly Detection M Code"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {mCodeExamples.anomalyDetection}
              </pre>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Best Practices & Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-700">✅ Do's</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Provide diverse examples for AI learning</li>
                <li>• Test fuzzy matching with small datasets first</li>
                <li>• Use appropriate similarity thresholds</li>
                <li>• Document your transformations</li>
                <li>• Monitor query performance</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-red-700">❌ Don'ts</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Set fuzzy matching threshold too low</li>
                <li>• Ignore data quality before processing</li>
                <li>• Over-rely on AI without validation</li>
                <li>• Forget to handle null values</li>
                <li>• Skip performance optimization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Common Issues & Solutions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="bg-red-50 p-3 rounded-md">
              <p className="text-sm text-red-800">
                <strong>❌ Issue:</strong> Column from Examples not detecting pattern
              </p>
              <p className="text-sm text-green-800 mt-1">
                <strong>✅ Solution:</strong> Provide more diverse examples with consistent formatting
              </p>
            </div>
            <div className="bg-red-50 p-3 rounded-md">
              <p className="text-sm text-red-800">
                <strong>❌ Issue:</strong> Fuzzy matching taking too long
              </p>
              <p className="text-sm text-green-800 mt-1">
                <strong>✅ Solution:</strong> Increase threshold, filter data first, use Table.Buffer()
              </p>
            </div>
            <div className="bg-red-50 p-3 rounded-md">
              <p className="text-sm text-red-800">
                <strong>❌ Issue:</strong> AI functions not available
              </p>
              <p className="text-sm text-green-800 mt-1">
                <strong>✅ Solution:</strong> Update Excel or use alternative M functions
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="font-semibold text-blue-700">🎯 Master These Skills:</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-4">
              <li>• Use AI to extract patterns from sample data</li>
              <li>• Implement fuzzy matching for data integration</li>
              <li>• Apply statistical methods for anomaly detection</li>
              <li>• Optimize M code for performance</li>
              <li>• Combine multiple AI features for comprehensive analysis</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Next Steps:</strong> Practice with your own datasets and explore advanced M functions. 
              Power Query AI features can dramatically reduce manual data preparation time.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      <div className="flex justify-center pt-6">
        <Button onClick={onContinue} className="flex items-center gap-2">
          Continue to Next Lesson
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PowerQueryAILesson;
