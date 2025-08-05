import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Copy, 
  FileSpreadsheet, 
  Brain, 
  PieChart,
  LineChart,
  BarChart4,
  Mail,
  Bot,
  Lightbulb
} from "lucide-react";

const AIPoweredReportingExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  // Sample data for AI-powered reporting in CSV format
  const salesPerformanceData = `Department,Category,Q1_Sales,Q2_Sales,Q3_Sales,Q4_Sales,YOY_Growth,Target_Achievement,Manager
Marketing,Digital Ads,125000,142000,138000,165000,12.4%,97%,Emma Chen
Marketing,Social Media,95000,102000,118000,124000,15.8%,105%,Marcus Trent
Sales,Enterprise,320000,358000,385000,420000,8.2%,102%,Olivia Patel
Sales,Small Business,180000,172000,190000,205000,5.6%,92%,Raj Kumar
IT,Infrastructure,210000,215000,225000,240000,7.1%,98%,David Wilson
IT,Software Dev,280000,295000,315000,340000,14.2%,112%,Sarah Johnson
Finance,Accounting,90000,92000,95000,98000,2.3%,94%,Michael Lee
Finance,Investment,150000,172000,168000,185000,9.8%,101%,Lisa Morris
Operations,Logistics,175000,185000,192000,205000,6.7%,99%,Carlos Rodriguez
Operations,Production,230000,245000,255000,275000,8.3%,103%,Priya Sharma`;

  const kpiData = `Metric,Current,Target,PreviousPeriod,Status,Trend,Priority
Revenue Growth,8.7%,10.0%,7.2%,Caution,Improving,High
Profit Margin,23.5%,25.0%,22.8%,Caution,Improving,High
Customer Satisfaction,92.3%,90.0%,88.5%,Success,Improving,Medium
Employee Engagement,85.6%,88.0%,84.2%,Caution,Improving,Medium
Market Share,28.4%,30.0%,27.9%,Caution,Improving,High
New Customers,245,275,220,Caution,Improving,Medium
Churn Rate,3.2%,3.0%,3.6%,Caution,Improving,High
Average Order Value,1250,1200,1180,Success,Improving,Medium
Website Conversion,4.8%,5.0%,4.2%,Caution,Improving,Medium
Support Response Time,2.3,2.0,2.8,Caution,Improving,Low`;

  const aiReportTemplateCode = `=LET(
  data, A2:J12,
  metrics, FILTER(data, data[Status]="Caution"),
  topIssues, FILTER(metrics, metrics[Priority]="High"),
  
  // AI-Generated Executive Summary
  summary, "Based on the latest KPI data, we have 7 metrics in 'Caution' status. 
  The top 3 priority items requiring attention are Revenue Growth (8.7% vs 10.0% target), 
  Profit Margin (23.5% vs 25.0% target), and Market Share (28.4% vs 30.0% target). 
  However, all metrics show an improving trend compared to the previous period.",
  
  // Combine with visualization references
  TEXTJOIN(CHAR(10), TRUE, summary, 
    "See charts in cells M1:P15 for trend visualization and automated recommendations.")
)

// Intelligent threshold calculation
=LET(
  metric, D5,
  history, SHEET2!D5:D36,
  stdev, STDEV.P(history),
  mean, AVERAGE(history),
  lowerBound, mean - 2*stdev,
  upperBound, mean + 2*stdev,
  
  IF(metric {'<'} lowerBound, "Alert: Significant negative deviation",
    IF(metric >upperBound, "Alert: Significant positive deviation",
      "Within expected range"))
)`;

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus({ ...copyStatus, [key]: true });
      setTimeout(() => {
        setCopyStatus({ ...copyStatus, [key]: false });
      }, 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart4 className="h-5 w-5 text-indigo-600" />
            AI-Powered Reporting
          </CardTitle>
          <CardDescription>
            Generate intelligent reports and summaries using Excel's AI capabilities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Introduction */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Introduction</h3>
            <p className="text-sm">AI-powered reporting transforms the way organizations present and understand their data. By leveraging
              artificial intelligence within Excel, you can automatically generate insightful narratives, identify key
              patterns, and create dynamic dashboards that adapt to changing data conditions.
            </p>
            <p className="text-sm">Modern Excel's AI capabilities can analyze your datasets to extract meaningful insights, suggest
              visualizations, and even write data stories that explain trends and anomalies in natural language.
              These tools dramatically reduce the time spent on report creation while improving data comprehension
              across all levels of the organization.
            </p>
          </div>

          {/* Sample Data Sets */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Sample Data Sets</h3>
            <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="h-4 w-4 text-green-600" />
                  <h4 className="text-sm font-medium">Departmental Performance Dataset</h4>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 text-xs"
                  onClick={() => handleCopy(salesPerformanceData, "salesPerformance")}
                >
                  {copyStatus["salesPerformance"] ? (
                    <>
                      <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-1 h-3 w-3" /> Copy Data
                    </>
                  )}
                </Button>
              </div>
              <div className="space-y-1 text-xs">
                <p>This dataset contains departmental sales performance with the following columns:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Department and Category: Organizational segments</li>
                  <li>Quarterly Sales: Q1 through Q4 performance figures</li>
                  <li>YOY Growth: Year-over-year growth percentage</li>
                  <li>Target Achievement: Performance against targets as percentage</li>
                  <li>Manager: Department or category manager</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="h-4 w-4 text-green-600" />
                  <h4 className="text-sm font-medium">KPI Monitoring Dataset</h4>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 text-xs"
                  onClick={() => handleCopy(kpiData, "kpiData")}
                >
                  {copyStatus["kpiData"] ? (
                    <>
                      <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-1 h-3 w-3" /> Copy Data
                    </>
                  )}
                </Button>
              </div>
              <div className="space-y-1 text-xs">
                <p>This dataset contains key performance indicators with context:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Metric: The KPI being measured</li>
                  <li>Current/Target/PreviousPeriod: Performance values</li>
                  <li>Status: Success, Caution, or Warning indicators</li>
                  <li>Trend: Improving, Stable, or Declining direction</li>
                  <li>Priority: Business importance level (High, Medium, Low)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hands-on Exercise */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Hands-on Exercise: Building an AI-Enhanced Dashboard</h3>
            <p className="text-sm">In this exercise, you'll create an intelligent reporting system that automatically analyzes data,
              generates insights, and presents them in a visually compelling dashboard. You'll leverage Excel's
              built-in AI capabilities to automate commentary generation and highlight critical information.
            </p>
            
            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 1: Data Preparation</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li><strong>Create your Excel workbook:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Open Excel and create a new blank workbook</li>
                      <li>Rename "Sheet1" to "Dashboard" by right-clicking the tab</li>
                      <li>Add a new sheet by clicking the + tab and name it "Data"</li>
                    </ul>
                  </li>
                  <li><strong>Import the departmental performance data:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Select the "Data" sheet and click cell A1</li>
                      <li>Click the "Copy Data" button above and copy the Departmental Performance data</li>
                      <li>Paste the data into cell A1 (Right-click) </li>
                      <li>Excel will automatically separate the CSV data into columns</li>
                      <li>If columns aren't properly separated, select the data and use Data </li>
                    </ul>
                  </li>
                  <li><strong>Import the KPI data:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>In the "Data" sheet, click cell A15 (leaving space between datasets)</li>
                      <li>Copy the KPI Monitoring data using the second "Copy Data" button</li>
                      <li>Paste the data into cell A15</li>
                      <li>Again, ensure the columns are properly separated</li>
                    </ul>
                  </li>
                  <li><strong>Format as Excel Tables:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Select cells A1 through the last cell of your first dataset</li>
                      <li>Press Ctrl+T/Cmd+T or go to Insert </li>
                      <li>Check "My table has headers" and click OK</li>
                      <li>In the Table Design tab, rename the table to "PerformanceData" in the Table Name field</li>
                      <li>Repeat these steps for the KPI data, naming that table "KPIData"</li>
                    </ul>
                  </li>
                  <li><strong>Create filtered KPI table:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>In cell A30, type the heading "Critical KPIs"</li>
                      <li>In cell A31, enter this formula: <code>=FILTER(KPIData, (KPIData[Status]="Caution" OR KPIData[Status]="Warning"))</code></li>
                      <li>If your version doesn't support FILTER, use a PivotTable instead</li>
                      <li>Format this result as a table and name it "CriticalKPIs"</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 2: Leverage Excel's Ideas Feature</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li><strong>Accessing Excel's AI insights:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Go to your "Data" sheet and click anywhere within the KPIData table</li>
                      <li>In Excel 365, click the "Insert" tab, then look for "Ideas" button (may be labeled as "Analyze Data" or "Ask Excel" in newer versions)</li>
                      <li>If using Excel 2019 or newer versions, look for the lightning bolt icon in the Home tab</li>
                      <li>Alternatively, use the keyboard shortcut Alt+F8 and then type "Ideas"</li>
                    </ul>
                  </li>
                  <li><strong>Working with AI-generated insights:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>A sidebar will appear on the right with automatically generated charts and insights</li>
                      <li>Scroll through the suggestions to review different visualizations</li>
                      <li>For each useful visualization, click the "Add to sheet" button that appears below it</li>
                      <li>When prompted for a location, choose your Dashboard sheet</li>
                      <li>Alternatively, click the pin icon to save insights for later use</li>
                    </ul>
                  </li>
                  <li><strong>Creating specific KPI visualizations:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>In the Ideas pane, look for or request a chart showing "KPI Performance vs Targets"</li>
                      <li>If not automatically suggested, use the search/ask field with a query like "Show me a comparison of current values vs targets"</li>
                      <li>Look for visualization showing metrics grouped by status (Success, Caution, Warning)</li>
                      <li>Find or request a trend analysis comparing current values to previous period</li>
                      <li>Add all relevant visualizations to your Dashboard sheet</li>
                    </ul>
                  </li>
                  <li><strong>Customizing the visualizations:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Once charts are added to your Dashboard, select each and use the Chart Design tab</li>
                      <li>Change colors to match status indicators (green for Success, yellow for Caution, red for Warning)</li>
                      <li>Resize and position charts to create a logical flow of information</li>
                      <li>Add chart titles that automatically reference key statistics (e.g., "KPI Status Distribution: 70% On Target")</li>
                    </ul>
                  </li>
                  <li><strong>Apply the same process to Performance data:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Return to the Data sheet and click within the PerformanceData table</li>
                      <li>Launch Ideas/Analyze Data feature again</li>
                      <li>Look for insights showing department performance comparisons, YOY growth patterns, and target achievement</li>
                      <li>Add these visualizations to a new section of your Dashboard</li>
                      <li>Try asking specific questions like "Show me top performing departments" or "Which categories are below target?"</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 3: Create AI-Generated Commentary</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li><strong>Set up your executive summary section:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Go to your Dashboard sheet</li>
                      <li>Create a header titled "Executive Summary" in cell A1</li>
                      <li>Merge cells A2:J4 to create a large text area for your summary</li>
                      <li>Apply formatting: increase font size slightly, and use a light background color</li>
                      <li>Add a border to make this section visually distinct</li>
                    </ul>
                  </li>
                  <li><strong>Implement the AI report template:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Click the merged cell A2:J4</li>
                      <li>Click the "Copy Formulas" button to copy the AI template code
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-2 h-6 text-xs"
                          onClick={() => handleCopy(aiReportTemplateCode, "aiTemplate")}
                        >
                          {copyStatus["aiTemplate"] ? (
                            <>
                              <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="mr-1 h-3 w-3" /> Copy Formulas
                            </>
                          )}
                        </Button>
                      </li>
                      <li>Paste the formula into the formula bar (not directly into the cell)</li>
                      <li>Adjust table references if needed to match your exact table names</li>
                      <li>Press Enter to execute the formula and generate the summary</li>
                    </ul>
                  </li>
                  <li><strong>Create smart threshold detection:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>In cell A6, add a header "Anomaly Alerts"</li>
                      <li>In cells A7:A16, create a list of your key metrics from the KPI table</li>
                      <li>In column B, next to each metric, enter the smart threshold formula from the template</li>
                      <li>Adjust the formula to reference the specific metric cell</li>
                      <li>The formula uses statistical analysis (mean ± 2σ) to detect unusual values</li>
                    </ul>
                  </li>
                  <li><strong>Add conditional formatting for alerts:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Select the cells containing your threshold formulas</li>
                      <li>Go to Home </li>
                      <li>Choose "Use a formula to determine which cells to format"</li>
                      <li>For positive alerts: <code>=ISNUMBER(SEARCH("positive",B7))</code>
                  with green fill</li>
                      <li>For negative alerts: <code>=ISNUMBER(SEARCH("negative",B7))</code>
                  with red fill</li>
                    </ul>
                  </li>
                  <li><strong>Create dynamic recommendations:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>In cell A18, add a header "AI Recommendations"</li>
                      <li>In cell A19, create a recommendation formula based on performance:</li>
                      <li><code>=IF(COUNTIFS(KPIData[Status],"Warning"){'>'}2,"HIGH PRIORITY: Address the " & COUNTIFS(KPIData[Status],"Warning") & " warning indicators immediately, focusing on " & TEXTJOIN(", ", TRUE, FILTER(KPIData[Metric], KPIData[Status]="Warning")),"Focus on improving the caution metrics to reach target thresholds.")</code></li>
                      <li>Add 2-3 more recommendations using similar IF or SWITCH formulas</li>
                      <li>Make recommendations actionable and specific to the data patterns</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 4: Design an Intelligent KPI Dashboard</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li><strong>Organize your dashboard layout:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Clear any charts added below your Executive Summary section</li>
                      <li>In cell A25, add a header "KPI Status Overview"</li>
                      <li>Leave space below (rows 26-40) for your KPI visualization</li>
                      <li>In cell A41, add a header "Department Performance"</li>
                      <li>Leave space below (rows 42-60) for department charts</li>
                      <li>In cell A61, add a header "Trend Analysis & Forecasts"</li>
                      <li>Add section dividers using borders or background colors</li>
                    </ul>
                  </li>
                  <li><strong>Create an interactive KPI status table:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>In the KPI Status section (row 26), create a table with these columns:</li>
                      <li>Metric | Current | Target | % of Target | Status | Trend</li>
                      <li>Use this formula to pull data from your KPI table: <code>=FILTER(KPIData, KPIData[Priority]="High")</code></li>
                      <li>Add a calculated column for "% of Target": <code>=[@Current]/[@Target]</code></li>
                      <li>Format as a table and apply a professional color theme</li>
                    </ul>
                  </li>
                  <li><strong>Implement intelligent visual indicators:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Select the "% of Target" column in your table</li>
                      <li>Go to Home </li>
                      <li>Choose a gradient data bar that shows progress toward targets</li>
                      <li>For the Status column, use Home </li>
                      <li>Choose the traffic light icons (3 symbols) and customize ranges:</li>
                      <li>Green: </li>
                      <li>For the Trend column, use arrow icons (up=improving, sideways=stable, down=declining)</li>
                    </ul>
                  </li>
                  <li><strong>Create dynamic chart titles:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>For any charts you've added from Ideas/Analyze Data, select the chart</li>
                      <li>Click on the chart title and edit it in the formula bar</li>
                      <li>Enter a formula like: <code>="Department Performance - " & COUNTA(PerformanceData[Department]) & " Departments (" & TEXT(AVERAGE(PerformanceData[YOY_Growth]), "0.0%") & " Avg Growth)"</code></li>
                      <li>The title will now automatically update when data changes</li>
                      <li>Add similar dynamic titles to other charts</li>
                    </ul>
                  </li>
                  <li><strong>Create a KPI scorecard with RAG status:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>In a section of your dashboard, create a compact scorecard</li>
                      <li>For each critical KPI, show a colored indicator (Red/Amber/Green) based on status</li>
                      <li>Use shapes or cell background colors with this formula:</li>
                      <li><code>=IF([@Current]/[@Target]{'>='} 1,"Green",IF([@Current]/[@Target]{'>='} 0.9,"Amber","Red"))</code></li>
                      <li>Add small sparklines next to each KPI to show trends (Insert {'>'} Charts {'>'} Sparklines)</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 5: Implement Advanced AI Features</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li><strong>Build an automated anomaly detection system:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Create a new sheet named "Anomaly Detection"</li>
                      <li>In column A, create a list of all metrics from your KPI table</li>
                      <li>In column B, enter each metric's current value</li>
                      <li>In column C, create a historical range reference (use your KPI data or create sample data)</li>
                      <li>In column D, calculate the standard deviation: <code>=STDEV.P(C2:C13)</code></li>
                      <li>In column E, calculate the mean: <code>=AVERAGE(C2:C13)</code></li>
                      <li>In column F, calculate z-score: <code>=(B2-E2)/D2</code> (how many standard deviations from mean)</li>
                      <li>In column G, add this formula: <code>=IF(ABS(F2){'>'}2,"ANOMALY DETECTED","Normal Range")</code></li>
                      <li>Apply conditional formatting to highlight anomalies in red</li>
                    </ul>
                  </li>
                  <li><strong>Create intelligent forecast projections:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Go back to your Dashboard sheet in the Trend Analysis section</li>
                      <li>Create a table with months/quarters for the next year</li>
                      <li>For each key metric, add a forecast formula:</li>
                      <li>Basic forecast: <code>=FORECAST.ETS(future_date, known_values, dates, [seasonality], [data_completion], [aggregation])</code></li>
                      <li>Example: <code>=FORECAST.ETS(TODAY()+90, PerformanceData[Q1_Sales], dates_array, 4)</code></li>
                      <li>For confidence intervals: <code>=FORECAST.ETS.CONFINT()</code>
                  with similar parameters</li>
                      <li>Create a line chart showing historical data + forecast with confidence bands</li>
                    </ul>
                  </li>
                  <li><strong>Add forecast reliability indicators:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Below your forecast chart, add a "Forecast Reliability" section</li>
                      <li>Calculate the Mean Absolute Percentage Error (MAPE) of past forecasts</li>
                      <li>Formula: <code>=AVERAGE(ABS((actual_values-forecast_values)/actual_values))</code></li>
                      <li>Add a reliability indicator: <code>=IF(MAPE{'>='} 0.1,"High Reliability",IF(MAPE{'>='} 0.2,"Moderate Reliability","Low Reliability"))</code></li>
                      <li>Format with appropriate color coding (green for high, yellow for moderate, red for low)</li>
                    </ul>
                  </li>
                  <li><strong>Create an automated email alert template:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Create a new sheet called "Email Alert"</li>
                      <li>Design an email template with placeholders for dynamic data</li>
                      <li>Include a subject line: <code>="KPI Alert - " & COUNTIFS(KPIData[Status],"Warning") & " critical metrics require attention"</code></li>
                      <li>Add body text that pulls in your executive summary</li>
                      <li>Include a section that lists all metrics in warning status</li>
                      <li>Add recommendations from your AI formulas</li>
                      <li>Format the email template professionally with company branding</li>
                    </ul>
                  </li>
                  <li><strong>Set up automated distribution (optional):</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>If you have Power Automate available, create a flow that:</li>
                      <li>Monitors your Excel file for warning status changes</li>
                      <li>Triggers an email when specific conditions are met</li>
                      <li>Uses your email template to format the message</li>
                      <li>Sends to appropriate stakeholders based on the affected departments</li>
                      <li>Includes a link to your dashboard file</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
              <h3 className="text-sm font-medium">Key Tips for Success</h3>
              <ul className="list-disc pl-5 text-xs space-y-1">
                <li><strong>Focus on automation:</strong>
                  Set up your dashboard to minimize manual updates</li>
                <li><strong>Balance depth and clarity:</strong>
                  Provide detailed insights but maintain readability</li>
                <li><strong>Use progressive disclosure:</strong>
                  Show high-level metrics first with ability to drill down</li>
                <li><strong>Test with different data:</strong>
                  Ensure your formulas and AI insights work with changing inputs</li>
                <li><strong>Incorporate feedback mechanisms:</strong>
                  Add ways for users to rate the usefulness of insights</li>
              </ul>
            </div>
          </div>

          {/* AI Reporting Tools */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">AI Reporting Tools in Excel</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Tool 1 */}
              <div className="border rounded-md overflow-hidden">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-indigo-600" />
                    <h4 className="text-sm font-medium">Smart Narratives</h4>
                  </div>
                  <p className="text-xs mt-1">Automated data storytelling</p>
                </div>
                <div className="p-3 space-y-2">
                  <p className="text-xs">Automatically generates written descriptions of your data, explaining trends, outliers, and key insights in natural language.</p>
                </div>
              </div>

              {/* Tool 2 */}
              <div className="border rounded-md overflow-hidden">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3">
                  <div className="flex items-center gap-2">
                    <Bot className="h-4 w-4 text-purple-600" />
                    <h4 className="text-sm font-medium">Ask Excel</h4>
                  </div>
                  <p className="text-xs mt-1">Natural language queries</p>
                </div>
                <div className="p-3 space-y-2">
                  <p className="text-xs">Type questions about your data in plain English and get instant answers, charts, and insights without writing formulas.</p>
                </div>
              </div>

              {/* Tool 3 */}
              <div className="border rounded-md overflow-hidden">
                <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-cyan-600" />
                    <h4 className="text-sm font-medium">Insight Distribution</h4>
                  </div>
                  <p className="text-xs mt-1">Automated report sharing</p>
                </div>
                <div className="p-3 space-y-2">
                  <p className="text-xs">Schedule and distribute personalized reports with Power Automate integration, sending targeted insights to stakeholders.</p>
                </div>
              </div>

              {/* Tool 4 */}
              <div className="border rounded-md overflow-hidden">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3">
                  <div className="flex items-center gap-2">
                    <LineChart className="h-4 w-4 text-emerald-600" />
                    <h4 className="text-sm font-medium">Anomaly Detection</h4>
                  </div>
                  <p className="text-xs mt-1">Automatic pattern recognition</p>
                </div>
                <div className="p-3 space-y-2">
                  <p className="text-xs">Identifies unusual patterns and outliers in your data automatically, focusing attention on areas that need investigation.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIPoweredReportingExercise;
