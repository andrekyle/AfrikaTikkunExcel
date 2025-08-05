import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Bot, Zap, ArrowRight, Target, Brain, Database, TrendingUp } from 'lucide-react';
import CopyableContent from './CopyableContent';

interface AutomatedReportingLessonProps {
  onContinue?: () => void;
}

const AutomatedReportingLesson: React.FC<AutomatedReportingLessonProps> = ({ onContinue }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <FileText className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Lesson 5: Automated Reporting</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Generate intelligent reports with AI insights and automated data analysis
        </p>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Technical Skills</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Master automated data refresh and report generation</li>
                <li>• Create intelligent summary tables with dynamic insights</li>
                <li>• Build AI-powered trend analysis and recommendations</li>
                <li>• Implement automated email reporting systems</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Business Applications</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Executive dashboard automation</li>
                <li>• Performance monitoring reports</li>
                <li>• Financial variance analysis</li>
                <li>• Operational KPI tracking</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-blue-600" />
            Hands-on Project: AI-Powered Reporting System
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Project Overview</h4>
            <p className="text-blue-800">
              Build a comprehensive automated reporting system that generates intelligent insights, 
              identifies trends, provides recommendations, and automatically distributes reports to stakeholders.
            </p>
          </div>

          {/* Project 1: Executive Performance Dashboard */}
          <div className="pl-4">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Project 1: Executive Performance Dashboard
            </h4>
            <p className="text-gray-700 mb-4">Create an automated executive dashboard with AI-generated insights and performance analysis.</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-green-900 mb-2">📋 Step-by-Step Instructions:</h5>
              <div className="space-y-4 text-sm text-green-800">
                <div>
                  <h6 className="font-semibold mb-2">🔧 Phase 1: Excel Setup (5 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Open Excel</strong> and create a new workbook</li>
                    <li><strong>Save as:</strong> "Executive_Performance_Dashboard.xlsx"</li>
                    <li><strong>Create 4 worksheets:</strong> Rename sheets to "Raw_Data", "KPI_Engine", "Dashboard", "AI_Insights"</li>
                    <li><strong>Set up data validation:</strong> Go to Raw_Data sheet and prepare for data import</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📊 Phase 2: Data Import (3 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Copy sample data:</strong> Click the copy button below to get the performance data</li>
                    <li><strong>Paste in Raw_Data:</strong> Start from cell A1 and paste the complete dataset</li>
                    <li><strong>Format as Table:</strong> Select all data → Insert → Table → Check "My table has headers"</li>
                    <li><strong>Name the table:</strong> Table Tools → Design → Table Name: "PerformanceData"</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">⚙️ Phase 3: KPI Engine Setup (10 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to KPI_Engine sheet</strong> and create headers: A1="Metric", B1="Formula", C1="Result"</li>
                    <li><strong>Copy AI formulas:</strong> Use the formulas provided below for automated calculations</li>
                    <li><strong>Create named ranges:</strong> Formulas → Name Manager → Create ranges for key metrics</li>
                    <li><strong>Test calculations:</strong> Verify all formulas return correct values</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📈 Phase 4: Dashboard Creation (15 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Dashboard layout:</strong> Create title "Executive Performance Dashboard" in A1</li>
                    <li><strong>Add current date:</strong> B1 = TODAY() with proper formatting</li>
                    <li><strong>Insert charts:</strong> Revenue vs Target (Bar), Department Performance (Pie), Trends (Line)</li>
                    <li><strong>Add KPI cards:</strong> Create summary boxes showing key metrics from KPI_Engine</li>
                    <li><strong>Apply conditional formatting:</strong> Highlight performance issues with colors</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">🤖 Phase 5: AI Insights Integration (8 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to AI_Insights sheet</strong> and implement the AI commentary formulas</li>
                    <li><strong>Create alert system:</strong> Set up automated alerts for critical performance issues</li>
                    <li><strong>Link to dashboard:</strong> Reference AI insights in your dashboard for dynamic commentary</li>
                    <li><strong>Test AI features:</strong> Change data values to see AI insights update automatically</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">✅ Phase 6: Testing & Validation (5 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Data validation:</strong> Test with different data scenarios</li>
                    <li><strong>Formula verification:</strong> Ensure all calculations are accurate</li>
                    <li><strong>Visual check:</strong> Confirm charts and formatting display correctly</li>
                    <li><strong>Performance test:</strong> Verify dashboard updates when data changes</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-medium text-gray-800">📊 Sample Performance Data</h5>
              <CopyableContent
                label="Executive Performance Data"
                content={`Month	Department	Revenue	Target_Revenue	Expenses	Target_Expenses	Headcount	Customer_Satisfaction	Projects_Completed	Budget_Variance
2024-01	Sales	R 2,450,000	R 2,200,000	R 450,000	R 400,000	45	4.2	8	-12.5%
2024-01	Marketing	R 850,000	R 800,000	R 320,000	R 350,000	25	4.1	12	8.6%
2024-01	Operations	R 1,200,000	R 1,100,000	R 280,000	R 300,000	35	4.3	6	6.7%
2024-01	Finance	R 450,000	R 400,000	R 180,000	R 200,000	15	4.0	4	10.0%
2024-01	HR	R 320,000	R 300,000	R 150,000	R 160,000	12	4.4	7	6.3%
2024-02	Sales	R 2,680,000	R 2,300,000	R 470,000	R 420,000	47	4.3	10	-11.9%
2024-02	Marketing	R 920,000	R 850,000	R 340,000	R 360,000	26	4.2	14	5.6%
2024-02	Operations	R 1,350,000	R 1,200,000	R 295,000	R 310,000	36	4.4	8	4.8%
2024-02	Finance	R 480,000	R 420,000	R 185,000	R 205,000	15	4.1	5	9.8%
2024-02	HR	R 340,000	R 320,000	R 155,000	R 165,000	13	4.5	8	6.1%
2024-03	Sales	R 2,890,000	R 2,400,000	R 485,000	R 440,000	48	4.4	12	-10.2%
2024-03	Marketing	R 980,000	R 900,000	R 355,000	R 370,000	27	4.3	16	4.1%
2024-03	Operations	R 1,480,000	R 1,300,000	R 310,000	R 320,000	37	4.5	9	3.1%
2024-03	Finance	R 520,000	R 450,000	R 190,000	R 210,000	16	4.2	6	9.5%
2024-03	HR	R 365,000	R 340,000	R 160,000	R 170,000	14	4.6	9	5.9%`}
              >
                <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-2 px-3 font-semibold text-gray-700">Month</th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-700">Department</th>
                        <th className="text-right py-2 px-3 font-semibold text-gray-700">Revenue</th>
                        <th className="text-right py-2 px-3 font-semibold text-gray-700">Target Revenue</th>
                        <th className="text-right py-2 px-3 font-semibold text-gray-700">Expenses</th>
                        <th className="text-center py-2 px-3 font-semibold text-gray-700">Satisfaction</th>
                        <th className="text-center py-2 px-3 font-semibold text-gray-700">Projects</th>
                        <th className="text-center py-2 px-3 font-semibold text-gray-700">Budget Variance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-2 px-3">2024-01</td>
                        <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Sales</span></td>
                        <td className="py-2 px-3 text-right font-medium">R 2,450,000</td>
                        <td className="py-2 px-3 text-right">R 2,200,000</td>
                        <td className="py-2 px-3 text-right">R 450,000</td>
                        <td className="py-2 px-3 text-center">4.2</td>
                        <td className="py-2 px-3 text-center">8</td>
                        <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">-12.5%</span></td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-2 px-3">2024-02</td>
                        <td className="py-2 px-3"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Marketing</span></td>
                        <td className="py-2 px-3 text-right font-medium">R 920,000</td>
                        <td className="py-2 px-3 text-right">R 850,000</td>
                        <td className="py-2 px-3 text-right">R 340,000</td>
                        <td className="py-2 px-3 text-center">4.2</td>
                        <td className="py-2 px-3 text-center">14</td>
                        <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">5.6%</span></td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-2 px-3">2024-03</td>
                        <td className="py-2 px-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Operations</span></td>
                        <td className="py-2 px-3 text-right font-medium">R 1,480,000</td>
                        <td className="py-2 px-3 text-right">R 1,300,000</td>
                        <td className="py-2 px-3 text-right">R 310,000</td>
                        <td className="py-2 px-3 text-center">4.5</td>
                        <td className="py-2 px-3 text-center">9</td>
                        <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">3.1%</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CopyableContent>
              <h5 className="font-medium text-gray-800">🤖 AI-Powered KPI Calculations</h5>
              <CopyableContent
                label="Automated KPI Formulas"
                content={`// Revenue Performance Analysis
Revenue_Variance: =((Actual_Revenue-Target_Revenue)/Target_Revenue)*100
Performance_Status: =IF(Revenue_Variance>10%,"Exceeding",IF(Revenue_Variance>0%,"Meeting","Below"))

// Expense Efficiency Metrics
Expense_Ratio: =Expenses/Revenue
Expense_Variance: =((Actual_Expenses-Target_Expenses)/Target_Expenses)*100
Cost_Control: =IF(Expense_Variance<0%,"Under Budget","Over Budget")

// Productivity Indicators
Revenue_Per_Employee: =Revenue/Headcount
Projects_Per_Employee: =Projects_Completed/Headcount
Efficiency_Score: =(Revenue_Per_Employee*0.6)+(Projects_Per_Employee*0.4)

// AI Commentary Generation
Performance_Summary: ="Department "&Department&" achieved "&TEXT(Revenue_Variance,"0.0%")&" revenue variance"
Insight_Text: =IF(Revenue_Variance>Expense_Variance,"Strong profitability focus","Cost management needed")

// Executive Alerts
Alert_Level: =IF(Revenue_Variance<-10%,"Critical",IF(Revenue_Variance<0%,"Warning","Normal"))
Action_Required: =IF(Alert_Level="Critical","Immediate Review",IF(Alert_Level="Warning","Monitor Closely","Continue"))`}
              >
                <div className="bg-gray-50 p-2 rounded">
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap">{`// Revenue Performance Analysis
Revenue_Variance: =((Actual_Revenue-Target_Revenue)/Target_Revenue)*100
Performance_Status: =IF(Revenue_Variance>10%,"Exceeding",IF(Revenue_Variance>0%,"Meeting","Below"))

// Expense Efficiency Metrics
Expense_Ratio: =Expenses/Revenue
Cost_Control: =IF(Expense_Variance<0%,"Under Budget","Over Budget")

// AI Commentary Generation
Performance_Summary: ="Department "&Department&" achieved "&TEXT(Revenue_Variance,"0.0%")&" variance"
Insight_Text: =IF(Revenue_Variance>Expense_Variance,"Strong profitability","Cost management needed")`}</pre>
                </div>
              </CopyableContent>
            </div>
          </div>

          {/* Project 2: Financial Variance Analysis */}
          <div className="pl-4 mt-8">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Database className="h-5 w-5 text-green-600" />
              Project 2: Automated Financial Variance Analysis
            </h4>
            <p className="text-gray-700 mb-4">Build an intelligent system that automatically analyzes budget variances and generates actionable insights.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-blue-900 mb-2">📋 Step-by-Step Instructions:</h5>
              <div className="space-y-4 text-sm text-blue-800">
                <div>
                  <h6 className="font-semibold mb-2">🔧 Phase 1: Financial Workbook Setup (4 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Create new workbook:</strong> "Financial_Variance_Analysis.xlsx"</li>
                    <li><strong>Create 5 worksheets:</strong> "Budget_Data", "Variance_Engine", "Risk_Analysis", "Executive_Report", "Alerts"</li>
                    <li><strong>Set up data structure:</strong> Prepare Budget_Data sheet for financial data import</li>
                    <li><strong>Configure formatting:</strong> Set up currency formatting for South African Rand (R)</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">💰 Phase 2: Import Financial Data (3 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Copy budget data:</strong> Use the copy button below to get the financial variance data</li>
                    <li><strong>Paste in Budget_Data:</strong> Start from A1 and paste the complete financial dataset</li>
                    <li><strong>Format as Table:</strong> Select data → Insert → Table → Name it "BudgetAnalysis"</li>
                    <li><strong>Verify data types:</strong> Ensure amounts are formatted as currency and percentages correctly</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">⚙️ Phase 3: Variance Engine Creation (12 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Variance_Engine sheet</strong> and set up calculation headers</li>
                    <li><strong>Implement variance formulas:</strong> Copy the intelligent variance analysis formulas below</li>
                    <li><strong>Create classification logic:</strong> Set up automated variance categorization (Favorable/Unfavorable)</li>
                    <li><strong>Build risk assessment:</strong> Implement risk level calculations based on variance thresholds</li>
                    <li><strong>Add trend analysis:</strong> Create formulas to identify patterns and anomalies</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">🚨 Phase 4: Risk Analysis System (8 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Risk_Analysis sheet</strong> and create risk matrix</li>
                    <li><strong>Set up risk thresholds:</strong> Low (&lt;5%), Medium (5-15%), High (&gt;15%)</li>
                    <li><strong>Implement alert triggers:</strong> Create automated alerts for high-risk variances</li>
                    <li><strong>Build priority ranking:</strong> Rank accounts by risk level and variance impact</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📊 Phase 5: Executive Reporting (10 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Create executive summary:</strong> Build high-level variance dashboard</li>
                    <li><strong>Add variance charts:</strong> Create visual representations of budget vs actual</li>
                    <li><strong>Implement AI insights:</strong> Use the AI commentary formulas for automated explanations</li>
                    <li><strong>Create action items:</strong> Generate automated recommendations based on variance analysis</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">✅ Phase 6: Testing & Validation (5 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Test variance calculations:</strong> Verify all formulas calculate correctly</li>
                    <li><strong>Validate risk classifications:</strong> Ensure risk levels are assigned properly</li>
                    <li><strong>Check alert system:</strong> Test that high-risk variances trigger alerts</li>
                    <li><strong>Review executive report:</strong> Confirm all insights and recommendations are accurate</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-medium text-gray-800">💰 Budget Analysis Data</h5>
              <CopyableContent
                label="Financial Variance Data"
                content={`Account_Code	Account_Name	Budget_YTD	Actual_YTD	Variance_Amount	Variance_Percent	Category	Risk_Level
4000	Revenue_Sales	R 8,500,000	R 9,200,000	R 700,000	8.2%	Revenue	Low
4100	Revenue_Services	R 2,400,000	R 2,150,000	-R 250,000	-10.4%	Revenue	Medium
5000	Cost_of_Sales	R 3,400,000	R 3,680,000	-R 280,000	-8.2%	COGS	Medium
6000	Salaries_Wages	R 4,200,000	R 4,350,000	-R 150,000	-3.6%	OpEx	Low
6100	Employee_Benefits	R 840,000	R 920,000	-R 80,000	-9.5%	OpEx	Medium
6300	Marketing_Advertising	R 720,000	R 850,000	-R 130,000	-18.1%	OpEx	High
6400	Travel_Entertainment	R 240,000	R 180,000	R 60,000	25.0%	OpEx	Low
6500	Professional_Services	R 360,000	R 420,000	-R 60,000	-16.7%	OpEx	High
6600	Technology_Software	R 480,000	R 520,000	-R 40,000	-8.3%	OpEx	Medium
7000	Depreciation	R 600,000	R 600,000	R 0	0.0%	Non-Cash	Low
8000	Interest_Expense	R 120,000	R 110,000	R 10,000	8.3%	Financial	Low`}
              >
                <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-2 px-3 font-semibold text-gray-700">Account Code</th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-700">Account Name</th>
                        <th className="text-right py-2 px-3 font-semibold text-gray-700">Budget YTD</th>
                        <th className="text-right py-2 px-3 font-semibold text-gray-700">Actual YTD</th>
                        <th className="text-right py-2 px-3 font-semibold text-gray-700">Variance</th>
                        <th className="text-center py-2 px-3 font-semibold text-gray-700">Variance %</th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-700">Category</th>
                        <th className="text-center py-2 px-3 font-semibold text-gray-700">Risk Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-2 px-3 font-mono text-blue-600">4000</td>
                        <td className="py-2 px-3">Revenue Sales</td>
                        <td className="py-2 px-3 text-right font-medium">R 8,500,000</td>
                        <td className="py-2 px-3 text-right font-medium">R 9,200,000</td>
                        <td className="py-2 px-3 text-right text-green-600 font-medium">R 700,000</td>
                        <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">8.2%</span></td>
                        <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Revenue</span></td>
                        <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Low</span></td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-2 px-3 font-mono text-blue-600">6300</td>
                        <td className="py-2 px-3">Marketing Advertising</td>
                        <td className="py-2 px-3 text-right font-medium">R 720,000</td>
                        <td className="py-2 px-3 text-right font-medium">R 850,000</td>
                        <td className="py-2 px-3 text-right text-red-600 font-medium">-R 130,000</td>
                        <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">-18.1%</span></td>
                        <td className="py-2 px-3"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">OpEx</span></td>
                        <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">High</span></td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-2 px-3 font-mono text-blue-600">6500</td>
                        <td className="py-2 px-3">Professional Services</td>
                        <td className="py-2 px-3 text-right font-medium">R 360,000</td>
                        <td className="py-2 px-3 text-right font-medium">R 420,000</td>
                        <td className="py-2 px-3 text-right text-red-600 font-medium">-R 60,000</td>
                        <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">-16.7%</span></td>
                        <td className="py-2 px-3"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">OpEx</span></td>
                        <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">High</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CopyableContent>

              <h5 className="font-medium text-gray-800">📊 Intelligent Variance Analysis</h5>
              <CopyableContent
                label="Variance Analysis Formulas"
                content={`// Automated Variance Classification
Variance_Category: =IF(ABS(Variance_Percent)>15%,"Significant",IF(ABS(Variance_Percent)>5%,"Moderate","Minor"))
Impact_Level: =IF(ABS(Variance_Amount)>500000,"High Impact",IF(ABS(Variance_Amount)>100000,"Medium Impact","Low Impact"))

// AI-Generated Explanations
Variance_Explanation: =IF(Variance_Percent>0,"Favorable - "&Account_Name&" exceeded budget by "&TEXT(ABS(Variance_Percent),"0.0%"),"Unfavorable - "&Account_Name&" over budget by "&TEXT(ABS(Variance_Percent),"0.0%"))

// Risk Assessment Logic
Risk_Score: =IF(Category="Revenue",ABS(Variance_Percent)*1.5,ABS(Variance_Percent)*1.0)
Priority_Action: =IF(Risk_Score>20,"Immediate Action",IF(Risk_Score>10,"Review Required","Monitor"))

// Automated Report Generation
Executive_Summary: ="Total variance of "&TEXT(SUM(Variance_Amount),"R #,##0")&" with "&COUNTIF(Risk_Level,"High")&" high-risk items requiring attention"
Key_Insights: =IF(SUM(Revenue_Variances)>0,"Revenue performance strong","Revenue below expectations")&". "&IF(SUM(Expense_Variances)<0,"Cost control needed","Expenses well managed")`}
              >
                <div className="bg-gray-50 p-2 rounded">
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap">{`// Automated Variance Classification
Variance_Category: =IF(ABS(Variance_Percent)>15%,"Significant",IF(ABS(Variance_Percent)>5%,"Moderate","Minor"))

// AI-Generated Explanations
Variance_Explanation: =IF(Variance_Percent>0,"Favorable - "&Account_Name&" exceeded budget","Unfavorable - "&Account_Name&" over budget")

// Risk Assessment Logic
Risk_Score: =IF(Category="Revenue",ABS(Variance_Percent)*1.5,ABS(Variance_Percent)*1.0)
Priority_Action: =IF(Risk_Score>20,"Immediate Action",IF(Risk_Score>10,"Review Required","Monitor")`}</pre>
                </div>
              </CopyableContent>
            </div>
          </div>

          {/* Project 3: Automated Report Distribution */}
          <div className="pl-4 mt-8">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-purple-600" />
              Project 3: Automated Report Distribution System
            </h4>
            <p className="text-gray-700 mb-4">Create an automated system that generates and distributes personalized reports to different stakeholders.</p>
            
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-purple-900 mb-2">📋 Step-by-Step Instructions:</h5>
              <div className="space-y-4 text-sm text-purple-800">
                <div>
                  <h6 className="font-semibold mb-2">🔧 Phase 1: Distribution System Setup (6 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Create new workbook:</strong> "Automated_Report_Distribution.xlsx"</li>
                    <li><strong>Create 6 worksheets:</strong> "Master_Data", "Report_Templates", "Stakeholder_Config", "Email_Automation", "Schedule_Manager", "Audit_Log"</li>
                    <li><strong>Set up master data:</strong> Import performance and financial data from previous projects</li>
                    <li><strong>Configure stakeholder list:</strong> Create list of report recipients with roles and preferences</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📝 Phase 2: Report Template Creation (10 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Report_Templates sheet</strong> and create different report layouts</li>
                    <li><strong>Executive Summary template:</strong> High-level KPIs and critical alerts only</li>
                    <li><strong>Department Manager template:</strong> Detailed department-specific metrics and trends</li>
                    <li><strong>Financial Controller template:</strong> Comprehensive budget variance analysis</li>
                    <li><strong>Board Report template:</strong> Strategic insights and key performance indicators</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">⚙️ Phase 3: Dynamic Content Engine (12 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Implement role-based content:</strong> Use the stakeholder customization formulas below</li>
                    <li><strong>Create dynamic filtering:</strong> Set up formulas that show relevant data per stakeholder</li>
                    <li><strong>Build AI commentary:</strong> Generate personalized insights based on stakeholder role</li>
                    <li><strong>Add conditional formatting:</strong> Highlight critical issues based on stakeholder priorities</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📧 Phase 4: Email Automation Setup (15 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Email_Automation sheet</strong> and set up VBA email functions</li>
                    <li><strong>Configure Outlook integration:</strong> Set up automated email sending via VBA</li>
                    <li><strong>Create email templates:</strong> Design professional email formats with embedded reports</li>
                    <li><strong>Implement attachment logic:</strong> Automatically attach relevant reports based on recipient</li>
                    <li><strong>Set up email scheduling:</strong> Configure when different reports should be sent</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📅 Phase 5: Scheduling & Triggers (8 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Schedule_Manager sheet</strong> and create scheduling matrix</li>
                    <li><strong>Set up daily reports:</strong> Configure automatic daily performance summaries</li>
                    <li><strong>Create weekly reports:</strong> Set up comprehensive weekly analysis reports</li>
                    <li><strong>Implement alert triggers:</strong> Set up immediate notifications for critical issues</li>
                    <li><strong>Add holiday handling:</strong> Configure system to skip reports on holidays</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">✅ Phase 6: Testing & Deployment (7 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Test report generation:</strong> Verify all templates generate correctly</li>
                    <li><strong>Test email automation:</strong> Send test emails to verify delivery and formatting</li>
                    <li><strong>Validate scheduling:</strong> Confirm reports are triggered at correct times</li>
                    <li><strong>Create audit log:</strong> Set up tracking for all report distributions</li>
                    <li><strong>Document system:</strong> Create user guide for maintaining the automation</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-medium text-gray-800">📧 Report Automation Setup</h5>
              <CopyableContent
                label="Report Distribution Logic"
                content={`// Stakeholder Report Customization
CEO_Report: =IF(Alert_Level="Critical","URGENT: "&Performance_Summary,"Status: "&Performance_Summary)
CFO_Report: ="Financial Summary: "&TEXT(Total_Revenue,"R #,##0")&" revenue, "&TEXT(Total_Variance,"R #,##0")&" variance"
Dept_Manager_Report: ="Department Performance: "&Department&" - "&Performance_Status&" with "&TEXT(Revenue_Variance,"0.0%")&" variance"

// Automated Email Triggers
Send_Alert: =IF(OR(Alert_Level="Critical",ABS(Variance_Percent)>15%),"Send Immediate","Include in Weekly")
Report_Frequency: =IF(Risk_Level="High","Daily",IF(Risk_Level="Medium","Weekly","Monthly"))

// Dynamic Report Content
Executive_Dashboard_Text: ="Company achieved "&TEXT(Total_Revenue_Variance,"0.0%")&" revenue variance. "&COUNT_High_Risk&" departments require attention."
Trend_Analysis: =IF(Current_Month>Previous_Month,"Improving trend","Declining trend")&" with "&TEXT(Growth_Rate,"0.0%")&" month-over-month change"

// Report Scheduling
Next_Report_Date: =IF(WEEKDAY(TODAY())=6,TODAY()+3,TODAY()+1)
Report_Recipients: =IF(Alert_Level="Critical","CEO;CFO;Department_Head","Department_Head")`}
              >
                <div className="bg-gray-50 p-2 rounded">
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap">{`// Stakeholder Report Customization
CEO_Report: =IF(Alert_Level="Critical","URGENT: "&Performance_Summary,"Status: "&Performance_Summary)
CFO_Report: ="Financial Summary: "&TEXT(Total_Revenue,"R #,##0")&" revenue"

// Automated Email Triggers
Send_Alert: =IF(OR(Alert_Level="Critical",ABS(Variance_Percent)>15%),"Send Immediate","Weekly")
Report_Frequency: =IF(Risk_Level="High","Daily",IF(Risk_Level="Medium","Weekly","Monthly"))`}</pre>
                </div>
              </CopyableContent>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              Key Takeaways
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Technical Mastery</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✅ Automated data refresh and report generation</li>
                  <li>✅ AI-powered insights and commentary generation</li>
                  <li>✅ Dynamic variance analysis and risk assessment</li>
                  <li>✅ Intelligent report distribution systems</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Business Impact</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>🎯 Real-time performance monitoring</li>
                  <li>📊 Automated executive reporting</li>
                  <li>💰 Proactive variance management</li>
                  <li>📈 Data-driven decision making</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          {onContinue && (
            <div className="flex justify-center pt-6">
              <Button 
                onClick={onContinue}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2"
              >
                Continue to Next Lesson
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AutomatedReportingLesson;
