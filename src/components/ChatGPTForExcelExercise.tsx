import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Copy, Table, MessageSquare, Code2 } from "lucide-react";

const ChatGPTForExcelExercise: React.FC = () => {
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

  const salesReportData = `Branch,Category,Q1 Sales (ZAR),Q2 Sales (ZAR),Q3 Sales (ZAR),Q4 Sales (ZAR),YTD Growth %
Sandton,Electronics,1250000,1320000,1180000,1420000,8.5
Durban,Electronics,980000,1050000,920000,1150000,7.2
Cape Town,Electronics,1120000,1180000,1100000,1280000,9.1
Pretoria,Electronics,860000,910000,840000,980000,6.4
Bloemfontein,Electronics,540000,580000,520000,620000,5.8
Sandton,Appliances,950000,980000,920000,1050000,5.2
Durban,Appliances,720000,750000,680000,790000,4.7
Cape Town,Appliances,820000,860000,790000,910000,6.3
Pretoria,Appliances,650000,690000,630000,720000,5.5
Bloemfontein,Appliances,410000,440000,400000,460000,4.9
Sandton,Furniture,880000,920000,850000,980000,6.1
Durban,Furniture,650000,690000,630000,720000,5.8
Cape Town,Furniture,750000,790000,720000,840000,7.2
Pretoria,Furniture,580000,620000,560000,650000,5.3
Bloemfontein,Furniture,360000,390000,340000,410000,4.7`;

  const employeePerformanceData = `Employee ID,Name,Department,Base Salary (ZAR),Commission Rate,Sales Target (ZAR),Sales Achieved (ZAR),Leave Days Taken,Performance Score
E001,Sipho Naidoo,Sales,480000,0.05,5000000,5200000,12,4.2
E002,Amahle van Wyk,Sales,450000,0.045,4500000,4700000,15,3.9
E003,Mandla Botha,Sales,500000,0.055,5500000,5100000,8,4.1
E004,Thandi Dlamini,Marketing,420000,0,0,0,18,3.8
E005,Johan Meyer,Finance,550000,0,0,0,10,4.3
E006,Nomsa Tshabalala,Sales,460000,0.048,4800000,5300000,14,4.5
E007,Pieter du Toit,IT,580000,0,0,0,7,4.4
E008,Lerato Molefe,HR,410000,0,0,0,16,3.7
E009,Andile Mbeki,Sales,470000,0.05,5000000,4800000,11,3.8
E010,Fatima Ismail,Finance,540000,0,0,0,9,4.2`;

  const inventoryTrackingData = `Product Code,Description,Category,Cost Price (ZAR),Selling Price (ZAR),VAT Rate,Stock Level,Reorder Level,Supplier,Lead Time (Days)
P001,Samsung Smart TV 55",Electronics,8500,12999,0.15,45,20,Makro Electronics,14
P002,LG Refrigerator 360L,Appliances,6200,9499,0.15,32,15,Hirsch's,10
P003,Sony PlayStation 5,Electronics,7800,11999,0.15,18,25,Digital Planet,21
P004,Defy Washing Machine 10kg,Appliances,5100,7999,0.15,27,12,Tafelberg Furnishers,7
P005,Hisense Air Conditioner,Appliances,4300,6799,0.15,15,10,Game Stores,14
P006,Dell Laptop Inspiron,Electronics,9200,13999,0.15,22,15,Incredible Connection,14
P007,Sealy Queen Mattress,Furniture,3800,5999,0.15,8,5,Lewis Stores,14
P008,Samsung Galaxy S23,Electronics,12500,18999,0.15,36,20,Vodacom,7
P009,Panasonic Microwave,Appliances,1200,1899,0.15,41,20,Shoprite,10
P010,Wooden Dining Table Set,Furniture,5500,8499,0.15,12,8,@home,21`;

  const promptExamples = [
    {
      title: "Calculate Total Compensation",
      prompt: "I need an Excel formula to calculate total compensation for employees who receive commission on sales. The formula should add base salary to commission earnings, where commission earnings are calculated as (Sales Achieved - Sales Target) * Commission Rate, but only if Sales Achieved exceeds Sales Target. Otherwise, commission should be zero. Create the formula for the 'Total Compensation' column using data in columns D, E, F, and G.",
      formula: "=D2+(IF(G2 >F2,(G2-F2)*E2,0))"
    },
    {
      title: "Stock Value with VAT",
      prompt: "Create an Excel formula that calculates the total stock value including VAT for my inventory. I need to multiply the selling price by the current stock level, and then add VAT. The VAT rate is in column F, the selling price is in column E, and the stock level is in column G.",
      formula: "=E2*G2*(1+F2)"
    },
    {
      title: "Dynamic KPI Dashboard Formula",
      prompt: "I'm creating a KPI dashboard for sales performance across different branches and categories in South Africa. I need a formula that can calculate the percentage difference between Q4 and Q1 sales. Q1 sales are in column C and Q4 sales are in column F. The formula should display the result as a percentage with a plus sign for positive growth.",
      formula: "=IF((F2-C2)/C2 > 0,\"+\"&TEXT((F2-C2)/C2,\"0.0%\"),TEXT((F2-C2)/C2,\"0.0%\"))"
    },
    {
      title: "Leave Days Allocation",
      prompt: "I need a formula for my South African HR department that calculates remaining leave days. Each employee starts with 24 annual leave days. The formula should subtract the 'Leave Days Taken' in column H from 24, but if an employee's performance score (column I) is above 4.0, they get 3 bonus leave days. If they've used all their standard days, they can still use bonus days.",
      formula: "=MAX(0,24-H2)+IF(I2 > 4,3,0)"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">ChatGPT for Excel</CardTitle>
          <CardDescription >Learn how to leverage ChatGPT to generate complex Excel formulas and solve spreadsheet challenges
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm space-y-2">
            <p>ChatGPT has revolutionized how we work with Excel by making complex formulas, automation, and data analysis accessible to users of all skill levels.
              This lesson explores how to effectively prompt ChatGPT to generate Excel formulas, troubleshoot errors, and optimize spreadsheets
              for various South African business contexts.
            </p>
          </div>

          <div className="space-y-4 mt-4">
            <h3 className="text-md font-medium">Key Benefits of Using ChatGPT with Excel</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-blue-50 dark:bg-blue-900/20">
                  <CardTitle className="text-sm">Formula Generation</CardTitle>
                </CardHeader>
                <CardContent className="p-3 text-xs space-y-2">
                  <p>ChatGPT can create complex formulas tailored to your specific needs, from basic calculations to advanced
                    functions like XLOOKUP, nested IFs, and array formulas. Simply describe what you want to achieve in natural language,
                    and ChatGPT will generate the appropriate formula with proper syntax.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-green-50 dark:bg-green-900/20">
                  <CardTitle className="text-sm">Error Troubleshooting</CardTitle>
                </CardHeader>
                <CardContent className="p-3 text-xs space-y-2">
                  <p>When encountering Excel errors like #VALUE!, #NAME?, or #REF!, you can paste the problematic formula and context to ChatGPT
                    for diagnosis and correction. It can identify common mistakes in South African contexts like incorrect VAT calculations 
                    or currency formatting issues.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-purple-50 dark:bg-purple-900/20">
                  <CardTitle className="text-sm">Workflow Optimization</CardTitle>
                </CardHeader>
                <CardContent className="p-3 text-xs space-y-2">
                  <p>Beyond formulas, ChatGPT can suggest how to restructure spreadsheets for better performance, automate repetitive tasks with macros,
                    and design cleaner dashboards. It can provide tailored suggestions for South African business processes like tax calculations or
                    BEE compliance tracking.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-amber-50 dark:bg-amber-900/20">
                  <CardTitle className="text-sm">Learning Acceleration</CardTitle>
                </CardHeader>
                <CardContent className="p-3 text-xs space-y-2">
                  <p>ChatGPT doesn't just give you formulas—it explains how they work. This accelerates your Excel learning curve by providing context,
                    alternative approaches, and best practices tailored to South African business environments and reporting requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Effective Prompting Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Effective Prompting Strategies</CardTitle>
          <CardDescription >Learn how to craft precise prompts that get you the best Excel solutions from ChatGPT
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4 text-xs">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md space-y-2">
              <p className="font-medium">1. Be Specific About Your Data Structure</p>
              <p>Always mention column names, data types, and any special considerations (e.g., "Column B contains dates in DD/MM/YYYY format" or "Sales figures are in ZAR with no decimal places").</p>
              <div className="bg-slate-50 dark:bg-slate-900/20 p-2 rounded-md">
                <p className="italic">❌ "Create a formula to calculate total with VAT."</p>
                <p className="italic mt-2">✅ "Create a formula to calculate total with VAT where item prices are in column B, quantities in column C, and South African VAT rate (15%) should be applied to the total."</p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-md space-y-2">
              <p className="font-medium">2. Provide Context and Business Rules</p>
              <p>Explain the business logic or rules that should be implemented in your formula, especially for South African contexts like tax brackets or industry-specific calculations.</p>
              <div className="bg-slate-50 dark:bg-slate-900/20 p-2 rounded-md">
                <p className="italic">❌ "Create a formula for employee bonuses."</p>
                <p className="italic mt-2">✅ "Create a formula for our Johannesburg office's bonus calculation where employees receive 5% of their base salary (column D) if they exceed sales targets (column F) by at least 10%, or 2% otherwise. Employees with performance ratings (column I) below 3.0 are not eligible."</p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-md space-y-2">
              <p className="font-medium">3. Request Explanations and Alternatives</p>
              <p>Ask ChatGPT to explain how the formula works and provide alternative approaches for different scenarios or Excel versions.</p>
              <div className="bg-slate-50 dark:bg-slate-900/20 p-2 rounded-md">
                <p className="italic">❌ "Give me a VLOOKUP formula."</p>
                <p className="italic mt-2">✅ "I need a formula to look up product prices from a price list. Please provide both a VLOOKUP and an XLOOKUP solution, explain the differences, and recommend which would work better for our South African product catalog where product codes sometimes contain both letters and numbers."</p>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md space-y-2">
              <p className="font-medium">4. Mention Constraints and Edge Cases</p>
              <p>Describe any limitations or special cases your formula needs to handle.</p>
              <div className="bg-slate-50 dark:bg-slate-900/20 p-2 rounded-md">
                <p className="italic">❌ "Create a formula to calculate delivery time."</p>
                <p className="italic mt-2">✅ "Create a formula to calculate estimated delivery dates for our Cape Town warehouse that adds business days to the order date (column B). It should account for South African public holidays, exclude weekends, and add extra days during December peak season (15 Dec - 15 Jan)."</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sample Data Tables */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Sample Data Tables</CardTitle>
          <CardDescription >Copy these sample datasets to use in the hands-on exercise
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Table className="h-4 w-4" /> South African Sales Report Data
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs"
                onClick={() => handleCopy(salesReportData, "salesReport")}
              >
                {copyStatus.salesReport ? (
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
                {salesReportData}
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
                onClick={() => handleCopy(employeePerformanceData, "employeeData")}
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
                {employeePerformanceData}
              </pre>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Table className="h-4 w-4" /> Inventory Tracking Data
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs"
                onClick={() => handleCopy(inventoryTrackingData, "inventoryData")}
              >
                {copyStatus.inventoryData ? (
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
                {inventoryTrackingData}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example Prompts and Results */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Example Prompts and Formulas</CardTitle>
          <CardDescription >Real-world examples of how to prompt ChatGPT for Excel solutions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-xs">
            <p>Below are examples of effective prompts and the resulting Excel formulas. Study these to understand how to structure your own prompts for complex Excel tasks.</p>
          </div>

          <div className="space-y-4">
            {promptExamples.map((example, index) => (
              <div key={index} className="border rounded-md overflow-hidden">
                <div className="bg-slate-50 dark:bg-slate-900/20 p-3">
                  <h3 className="text-sm font-medium mb-1">{example.title}</h3>
                  <div className="flex items-start gap-2">
                    <MessageSquare className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                    <p className="text-xs">{example.prompt}</p>
                  </div>
                </div>
                <div className="p-3 bg-muted border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code2 className="h-4 w-4 text-green-600" />
                      <span className="text-xs font-medium">Formula Result:</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-6 text-xs"
                      onClick={() => handleCopy(example.formula, `formula-${index}`)}
                    >
                      {copyStatus[`formula-${index}`] ? (
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
                  <div className="mt-2 p-2 bg-slate-100 dark:bg-slate-900/40 rounded font-mono text-xs">
                    {example.formula}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Exercise */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Hands-on Exercise: Creating Complex Formulas with AI Assistance</CardTitle>
          <CardDescription >Learn to solve real South African business problems by crafting effective ChatGPT prompts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm space-y-2">
            <p>In this exercise, you'll practice using ChatGPT to generate Excel formulas for common South African business scenarios. You'll learn how to craft effective prompts and implement the resulting solutions.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-md font-medium">Exercise Instructions</h3>
            
            <div className="space-y-3 text-xs">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md space-y-2">
                <p className="font-medium">Step 1: Set Up Your Data</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Create a new Excel workbook with three separate worksheets named "Sales Report", "Employee Performance", and "Inventory"</li>
                  <li>Copy each of the three sample datasets provided above into the corresponding worksheet</li>
                  <li>Format each dataset as a table (Ctrl+T or Insert &gt; Table) with headers</li>
                </ol>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-md space-y-2">
                <p className="font-medium">Step 2: Create a Branch Performance Analysis</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>In the Sales Report worksheet, create a new column called "Total Annual Sales"</li>
                  <li>Using ChatGPT, craft a prompt asking for a formula to sum Q1-Q4 sales for each row</li>
                  <li>Implement the formula ChatGPT provides and verify it works correctly</li>
                  <li>Now craft another prompt asking for a formula to calculate what percentage of total sales each branch contributes in their category</li>
                  <li>Create a "% of Category" column and implement the formula from ChatGPT</li>
                </ol>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-md space-y-2">
                <p className="font-medium">Step 3: Create an Employee Compensation Calculator</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>In the Employee Performance worksheet, create two new columns: "Commission" and "Total Compensation"</li>
                  <li>Craft a prompt for ChatGPT explaining the South African commission structure:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Employees only earn commission if they exceed their sales target</li>
                      <li>Commission is calculated as (Sales Achieved - Sales Target) × Commission Rate</li>
                      <li>Employees with performance scores below 3.5 receive only 50% of their calculated commission</li>
                    </ul>
                  </li>
                  <li>Implement the commission formula from ChatGPT</li>
                  <li>Create another prompt asking for a formula to calculate total compensation (base salary + commission)</li>
                  <li>Implement this formula and format both columns as South African currency (R)</li>
                </ol>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md space-y-2">
                <p className="font-medium">Step 4: Build an Inventory Management System</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>In the Inventory worksheet, create three new columns: "Stock Value", "Reorder Status", and "Days Until Reorder"</li>
                  <li>For "Stock Value", ask ChatGPT for a formula to calculate the total value including VAT for each product (Cost Price × Stock Level × (1 + VAT Rate))</li>
                  <li>For "Reorder Status", request a formula that displays:
                    <ul className="list-disc pl-5 mt-1">
                      <li>"URGENT" if stock is 25% or less of reorder level</li>
                      <li>"Order Soon" if stock is between 26% and 75% of reorder level</li>
                      <li>"Adequate" if stock is between 76% and 125% of reorder level</li>
                      <li>"Overstocked" if stock is more than 125% of reorder level</li>
                    </ul>
                  </li>
                  <li>For "Days Until Reorder", ask ChatGPT to create a formula that estimates when you'll need to reorder based on:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Assumption: 5% of current stock is sold each day</li>
                      <li>Calculate how many days until stock reaches reorder level</li>
                      <li>Consider lead time (days) from supplier</li>
                      <li>If already at or below reorder level, formula should return "Order Now"</li>
                    </ul>
                  </li>
                </ol>
              </div>
              
              <div className="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-md space-y-2">
                <p className="font-medium">Step 5: Create a South African Business Dashboard</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Create a new worksheet called "Dashboard"</li>
                  <li>Ask ChatGPT to help you create formulas for these KPIs:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Total stock value across all products (with proper South African currency formatting)</li>
                      <li>Average performance score across all employees</li>
                      <li>Total projected commission payout</li>
                      <li>Top-performing branch based on annual sales</li>
                      <li>Products that need immediate reordering</li>
                    </ul>
                  </li>
                  <li>For each KPI, craft a detailed prompt explaining what data you're working with and what you want to achieve</li>
                  <li>Implement the formulas provided by ChatGPT on your Dashboard</li>
                  <li>Use conditional formatting (ask ChatGPT for help) to highlight critical values</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900/20 p-3 rounded-md space-y-2 text-xs">
              <p className="font-medium">Bonus Challenge: LAMBDA Functions</p>
              <p>Ask ChatGPT to help you create a custom LAMBDA function that:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Calculates the price of a product in a different currency based on current exchange rates</li>
                <li>Parameters: price in ZAR, target currency code (USD, EUR, GBP), and optional discount percentage</li>
                <li>Uses these exchange rates: 1 ZAR = 0.055 USD, 0.050 EUR, or 0.042 GBP</li>
                <li>Applies any discount after the currency conversion</li>
                <li>Returns the result formatted with the appropriate currency symbol</li>
              </ol>
              <p className="mt-2">Implement this LAMBDA function and create a Currency Converter tool in your Dashboard.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatGPTForExcelExercise;
