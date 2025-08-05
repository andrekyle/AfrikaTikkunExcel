import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Copy, Table } from "lucide-react";

const AIToolsOverviewExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus({ ...copyStatus, [key]: true });
      setTimeout(() => {
        setCopyStatus({ ...copyStatus, [key]: false });
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const sampleSalesData = `Month,Region,Product,Sales(ZAR),Target(ZAR),Units_Sold,Customer_Count,Avg_Deal_Size,Notes
January,Western Cape,Office 365,450000,420000,180,45,10000,Strong start to year
February,Western Cape,Office 365,475000,420000,190,48,9896,Valentine's promo success
March,Western Cape,Office 365,432000,420000,162,41,10439,Load shedding impact
April,Western Cape,Office 365,489000,420000,195,52,9404,Recovery month
January,Gauteng,Office 365,520000,500000,208,52,10000,New Sandton office opened
February,Gauteng,Office 365,545000,500000,218,55,9909,Strong corporate sales
March,Gauteng,Office 365,563000,500000,225,58,9707,Promotional campaign at Vodacom
April,Gauteng,Office 365,578000,500000,231,61,9508,Momentum building
January,KwaZulu-Natal,Office 365,380000,400000,152,38,10000,Below target start
February,KwaZulu-Natal,Office 365,412000,400000,165,42,9952,Improvement trend
March,KwaZulu-Natal,Office 365,445000,400000,178,46,9891,Durban Tech Expo boost
April,KwaZulu-Natal,Office 365,467000,400000,187,49,9679,Sustained growth
January,Eastern Cape,Office 365,240000,250000,96,24,10000,Challenging market
February,Eastern Cape,Office 365,263000,250000,105,27,9630,New partnership with Rhodes University
March,Eastern Cape,Office 365,271000,250000,108,29,9593,Gradual improvement
April,Eastern Cape,Office 365,285000,250000,114,31,9649,Target exceeded`;

  const employeeDataTable = `Employee_ID,Name,Department,Years_Experience,Performance_Rating,Potential_Score,Salary_ZAR,Training_Hours,Projects_Completed,Last_Promotion
E001,Thabo Nkosi,Sales,8,4.2,High,850000,32,12,2022-03-15
E002,Lerato Molefe,Engineering,5,3.8,Medium,720000,45,8,2023-01-20
E003,Dlamini Zuma,Marketing,7,4.5,High,780000,28,15,2021-11-10
E004,Nomsa Tshabalala,Customer Service,3,3.5,Medium,480000,40,6,2024-02-05
E005,Siyabonga Ndlovu,Product Development,6,4.7,High,920000,52,18,2022-08-12
E006,Precious Mkhize,Sales,4,3.9,Medium,650000,35,9,2023-06-18
E007,Mandla Khumalo,Engineering,10,4.8,High,1200000,38,22,2021-05-30
E008,Thandi Dube,Human Resources,6,4.0,Medium,690000,42,11,2022-12-01
E009,Pieter van der Merwe,Finance,9,4.3,High,980000,30,14,2021-09-25
E010,Fatima Ismail,Marketing,2,3.6,Medium,520000,48,4,2024-01-10
E011,Johannes de Villiers,Engineering,7,4.4,High,890000,41,16,2022-04-22
E012,Andile Modise,Sales,5,4.1,Medium,710000,36,10,2023-03-08
E013,Zanele Mthembu,Data Science,4,4.6,High,950000,55,13,2023-09-14
E014,Ravi Patel,IT Support,6,3.7,Medium,580000,44,7,2022-10-03
E015,Nomfundo Cele,Operations,8,4.1,High,820000,33,17,2021-12-20`;

  const marketTrendData = `Date,Market,Sentiment_Score,Trading_Volume,Price_Change_Percent,Opening_Price,Closing_Price,Market_Cap_Billion,Volatility_Index
2025-01-05,JSE All Share,0.78,12500000,2.3,75420,77154,15200,0.15
2025-01-12,JSE All Share,0.65,10800000,1.7,77154,78465,15450,0.18
2025-01-19,JSE All Share,0.42,13200000,-0.8,78465,77838,15320,0.22
2025-01-26,JSE All Share,0.53,11500000,0.5,77838,78227,15380,0.19
2025-02-02,JSE All Share,0.81,14300000,2.9,78227,80494,15820,0.14
2025-02-09,JSE All Share,0.75,12900000,2.1,80494,82184,16140,0.16
2025-02-16,JSE All Share,0.69,11800000,1.4,82184,83334,16370,0.17
2025-01-05,JSE Top 40,0.62,18700000,1.5,68250,69274,12800,0.16
2025-01-12,JSE Top 40,0.71,17200000,1.9,69274,70590,13100,0.19
2025-01-19,JSE Top 40,0.45,19500000,-0.3,70590,70378,13050,0.23
2025-01-26,JSE Top 40,0.38,16800000,-1.2,70378,69533,12890,0.25
2025-02-02,JSE Top 40,0.67,20100000,1.8,69533,70785,13140,0.18
2025-02-09,JSE Top 40,0.72,19300000,2.0,70785,72201,13400,0.15
2025-02-16,JSE Top 40,0.68,18500000,1.3,72201,73140,13570,0.17`;

  const customerDataTable = `Customer_ID,Company_Name,Industry,Annual_Revenue_ZAR,Employee_Count,Region,Contract_Value,Renewal_Date,Satisfaction_Score,Churn_Risk
C001,Absa Bank,Financial Services,45000000000,55000,Gauteng,2500000,2025-06-30,4.2,Low
C002,MTN Group,Telecommunications,165000000000,18000,Gauteng,3800000,2025-09-15,4.5,Low
C003,Shoprite Holdings,Retail,180000000000,147000,Western Cape,1800000,2025-04-20,3.8,Medium
C004,Sasol Limited,Energy,320000000000,28000,Gauteng,4200000,2025-12-31,4.1,Low
C005,Standard Bank,Financial Services,52000000000,48000,Gauteng,2900000,2025-08-10,4.3,Low
C006,Vodacom Group,Telecommunications,98000000000,6500,Gauteng,3200000,2025-11-05,4.0,Medium
C007,Naspers Limited,Media,850000000000,25000,Western Cape,5500000,2025-07-22,4.4,Low
C008,FirstRand Bank,Financial Services,48000000000,45000,Gauteng,2700000,2025-05-18,3.9,Medium
C009,Anglo American,Mining,420000000000,95000,Gauteng,6200000,2025-10-12,4.2,Low
C010,Discovery Limited,Insurance,28000000000,15000,Gauteng,1900000,2025-03-28,4.1,Medium
C011,Capitec Bank,Financial Services,15000000000,14000,Western Cape,1500000,2025-08-30,4.6,Low
C012,Pick n Pay,Retail,95000000000,52000,Western Cape,1200000,2025-06-15,3.7,High`;

  const productPerformanceData = `Product_ID,Product_Name,Category,Launch_Date,Units_Sold_YTD,Revenue_ZAR_YTD,Cost_Per_Unit,Profit_Margin,Customer_Rating,Market_Share_Percent
P001,Excel Pro Suite,Software,2023-01-15,15420,46260000,2500,0.35,4.3,12.5
P002,PowerBI Analytics,Analytics,2022-08-20,8750,87500000,8000,0.42,4.5,8.2
P003,Office 365 Business,Productivity,2021-03-10,32500,162500000,4500,0.38,4.2,25.8
P004,Teams Premium,Communication,2023-06-01,12800,64000000,4200,0.40,4.4,15.3
P005,SharePoint Advanced,Collaboration,2022-11-12,6200,49600000,6800,0.45,4.1,6.7
P006,Azure AI Services,Cloud AI,2024-01-08,4850,97000000,18000,0.48,4.6,4.2
P007,Dynamics 365,CRM,2021-09-25,7300,146000000,16500,0.44,4.2,9.8
P008,Power Platform,Low-Code,2023-04-18,9600,76800000,7200,0.41,4.3,11.4
P009,Copilot Enterprise,AI Assistant,2024-02-14,3200,96000000,25000,0.52,4.7,2.1
P010,Viva Suite,Employee Experience,2023-10-05,5800,34800000,5500,0.39,4.0,7.6`;

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">AI Tools Overview</CardTitle>
          <CardDescription >Explore AI capabilities in modern Excel and how they can transform
            your data analysis workflows
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm space-y-2">
            <p>Microsoft Excel has evolved to incorporate powerful AI capabilities that can help you 
              analyze data more efficiently, discover insights that might otherwise be missed, and 
              automate repetitive tasks. This lesson explores the landscape of AI tools available 
              in modern Excel and demonstrates how they can be applied to real-world scenarios.
            </p>
          </div>

          <div className="space-y-4 mt-4">
            <h3 className="text-md font-medium">Key AI Features in Excel</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-blue-50 dark:bg-blue-900/20">
                  <CardTitle className="text-sm">Ideas & Insights</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <p>Automatically detects patterns, trends, and outliers in your data. Provides instant visualizations and statistical insights.</p>
                  <p className="text-green-600 dark:text-green-400 font-medium">Best for: Quick data exploration and pattern discovery</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-purple-50 dark:bg-purple-900/20">
                  <CardTitle className="text-sm">Copilot in Excel</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <p>AI-powered assistant that helps with formula creation, data analysis, and chart generation using natural language.</p>
                  <p className="text-green-600 dark:text-green-400 font-medium">Best for: Natural language data queries and automation</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-indigo-50 dark:bg-indigo-900/20">
                  <CardTitle className="text-sm">Python in Excel</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <p>Integrate Python libraries for advanced analytics, machine learning, and data science directly in Excel cells.</p>
                  <p className="text-green-600 dark:text-green-400 font-medium">Best for: Advanced analytics and machine learning</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-green-50 dark:bg-green-900/20">
                  <CardTitle className="text-sm">Data Types & Smart Data</CardTitle>
                </CardHeader>
                <CardContent className="p-3 text-xs space-y-2">
                  <p>Excel can now recognize and convert text into rich data types (stocks, geography, etc.)
                    that provide additional AI-powered information. For example, type a company name, convert 
                    it to a stock data type, and extract real-time market cap, price history, and more.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-amber-50 dark:bg-amber-900/20">
                  <CardTitle className="text-sm">Formula Suggestions</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <p>Excel's AI can now suggest formulas based on your data patterns and what you're trying to 
                    accomplish. It can detect when you're manually calculating VAT amounts or currency conversions from Rand to 
                    other currencies and recommend formulas to automate those tasks, making formula creation more accessible for South African users.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-rose-50 dark:bg-rose-900/20">
                  <CardTitle className="text-sm">Natural Language Queries</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <p>Excel now supports natural language queries in some versions, allowing you to ask questions 
                    about your data in plain English or Afrikaans. For example, "What were the total sales in Gauteng 
                    last quarter?" or "Show me revenue by province" and get immediate answers without creating formulas.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-orange-50 dark:bg-orange-900/20">
                  <CardTitle className="text-sm">Flash Fill</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <p>Automatically detects patterns in your data entry and fills remaining cells based on examples you provide.</p>
                  <p className="text-green-600 dark:text-green-400 font-medium">Best for: Data cleaning and transformation tasks</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-teal-50 dark:bg-teal-900/20">
                  <CardTitle className="text-sm">AI-Powered Forecasting</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <p>Uses machine learning algorithms to predict future trends and values based on historical data patterns.</p>
                  <p className="text-green-600 dark:text-green-400 font-medium">Best for: Sales forecasting and trend prediction</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-pink-50 dark:bg-pink-900/20">
                  <CardTitle className="text-sm">Power Query AI</CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-2">
                  <p>Intelligent data transformation suggestions and automated data cleaning with AI-powered recommendations.</p>
                  <p className="text-green-600 dark:text-green-400 font-medium">Best for: Complex data preparation and ETL processes</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sample Data Tables */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Sample Data Tables for Practice</CardTitle>
          <CardDescription >Copy these datasets into Excel to practice with AI features. Each table is designed to showcase different AI capabilities and provide comprehensive hands-on experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Table className="h-4 w-4" /> Regional Sales Performance Data
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs"
                onClick={() => handleCopy(sampleSalesData, "salesData")}
              >
                {copyStatus.salesData ? (
                  <>
                    <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-3 w-3" /> Copy
                  </>
                )}
              </Button>
            </div>
            <div className="bg-muted p-2 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap">
                {sampleSalesData}
              </pre>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Table className="h-4 w-4" /> Employee Performance Data
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs"
                onClick={() => handleCopy(employeeDataTable, "employeeData")}
              >
                {copyStatus.employeeData ? (
                  <>
                    <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-3 w-3" /> Copy
                  </>
                )}
              </Button>
            </div>
            <div className="bg-muted p-2 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap">
                {employeeDataTable}
              </pre>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Table className="h-4 w-4" /> Market Sentiment Analysis Data
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs"
                onClick={() => handleCopy(marketTrendData, "marketData")}
              >
                {copyStatus.marketData ? (
                  <>
                    <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-3 w-3" /> Copy
                  </>
                )}
              </Button>
            </div>
            <div className="bg-muted p-2 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap">
                {marketTrendData}
              </pre>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Table className="h-4 w-4" /> Customer Analytics Data
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs"
                onClick={() => handleCopy(customerDataTable, "customerData")}
              >
                {copyStatus.customerData ? (
                  <>
                    <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-3 w-3" /> Copy
                  </>
                )}
              </Button>
            </div>
            <div className="bg-muted p-2 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap">
                {customerDataTable}
              </pre>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Table className="h-4 w-4" /> Product Performance Data
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs"
                onClick={() => handleCopy(productPerformanceData, "productData")}
              >
                {copyStatus.productData ? (
                  <>
                    <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-3 w-3" /> Copy
                  </>
                )}
              </Button>
            </div>
            <div className="bg-muted p-2 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap">
                {productPerformanceData}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Exercise */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Hands-on Exercise: AI-Powered Data Insights</CardTitle>
          <CardDescription >Learn how to leverage Excel's AI capabilities to automatically analyze data and generate insights
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm space-y-2">
            <p>In this exercise, you'll work with the provided datasets to explore how Excel's AI features can help you uncover insights without manual analysis.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-md font-medium">Exercise Instructions</h3>
            
            <div className="space-y-3 text-xs">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md space-y-2">
                <p className="font-medium">Step 1: Set Up Your Data</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Create a new Excel workbook with five separate worksheets named "Sales Data", "Employee Data", "Market Data", "Customer Data", and "Product Performance"</li>
                  <li>Copy each of the five sample datasets provided above into the corresponding worksheet</li>
                  <li>Select all data in each worksheet and format as a Table (Ctrl+T or Insert &gt; Table)</li>
                  <li>Name each table appropriately (e.g., "SalesTable", "EmployeeTable", "MarketTable", "CustomerTable", "ProductTable")</li>
                </ol>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-md space-y-2">
                <p className="font-medium">Step 2: Generate AI Insights for South African Sales Data</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Select your Sales Data table</li>
                  <li>Navigate to the "Home" tab and click on "Ideas" or "Analyze Data" (button location varies by Excel version)</li>
                  <li>Review the AI-generated charts, trend analysis, and outliers that Excel identifies</li>
                  <li>Select one of the insights that shows provincial performance comparison and add it to your worksheet</li>
                </ol>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-md space-y-2">
                <p className="font-medium">Step 3: Create Smart Data Types</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>In a new worksheet, create a column with 5-7 South African company names (e.g., MTN, Sasol, Shoprite, Standard Bank, Vodacom)</li>
                  <li>Select these cells and navigate to "Data" &gt; "Stocks" (or Data Types gallery)</li>
                  <li>Once converted to data types, use the field selector to extract data points like Market Cap, CEO, JSE listing date</li>
                  <li>Practice creating formulas that reference these data fields</li>
                </ol>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md space-y-2">
                <p className="font-medium">Step 4: Use Formula Suggestions</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>In your Employee Data worksheet, create a new column called "Performance Index"</li>
                  <li>Type a formula for the first employee that multiplies Years Experience by Performance Rating</li>
                  <li>For remaining employees, start typing "=" and observe Excel's AI suggestions based on your pattern</li>
                  <li>Use these suggestions to complete formulas for all employees</li>
                </ol>
              </div>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-md space-y-2">
                <p className="font-medium">Step 5: Customer and Product Analytics with AI</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>In your Customer Data worksheet, use Excel's "Ideas" feature to identify high-value customers and churn risks</li>
                  <li>Create a calculated column for "Customer Lifetime Value" using AI-suggested formulas</li>
                  <li>In your Product Performance worksheet, use AI insights to identify top-performing products and market opportunities</li>
                  <li>Create a pivot table from Product data and let Excel suggest the most relevant fields and calculations</li>
                  <li>Use Excel's forecasting tools to predict next quarter's product performance based on current trends</li>
                </ol>
              </div>
              
              <div className="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-md space-y-2">
                <p className="font-medium">Step 6: Create an AI-Powered Dashboard</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Create a new worksheet named "AI Dashboard"</li>
                  <li>Use Excel's recommended charts feature (Insert &gt; Recommended Charts) for each of the five datasets</li>
                  <li>Add at least one AI-generated insight from each dataset (Sales, Employee, Market, Customer, Product) to the dashboard</li>
                  <li>Create a comprehensive business overview combining customer analytics with product performance metrics</li>
                  <li>Use Excel's AI-powered forecasting feature to predict next quarter's sales and product performance</li>
                  <li>Add a title and executive summary that highlights the key insights discovered by Excel's AI tools across all business areas</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900/20 p-3 rounded-md space-y-2 text-xs">
              <p className="font-medium">Bonus Challenge: Natural Language Query</p>
              <p>If your version of Excel supports natural language queries:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Select your Market Data table</li>
                <li>Use the "Ask a question about your data" feature (or Q&A button)</li>
                <li>Try natural language queries like "What's the average sentiment score for the JSE All Share?" or "Compare JSE Top 40 and All Share performance"</li>
                <li>Add your favorite insight from these queries to your dashboard</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIToolsOverviewExercise;
