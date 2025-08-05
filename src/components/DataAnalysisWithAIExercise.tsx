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
  BarChart4,
  TrendingUp,
  Lightbulb,
  LineChart 
} from "lucide-react";

const DataAnalysisWithAIExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  // Sample data for predictive analytics in CSV format
  const salesDataCSV = `Month,Year,Region,Category,Revenue,MarketingSpend,Customers,CompetitorPromo
Jan,2023,Western Region,Electronics,1250000,185000,2150,No
Feb,2023,Western Region,Electronics,1320000,195000,2280,No
Mar,2023,Western Region,Electronics,1180000,175000,2050,Yes
Apr,2023,Western Region,Electronics,1430000,210000,2390,No
May,2023,Western Region,Electronics,1510000,225000,2460,No
Jun,2023,Western Region,Electronics,1280000,190000,2180,Yes
Jul,2023,Western Region,Electronics,1350000,200000,2320,No
Aug,2023,Western Region,Electronics,1490000,220000,2410,No
Sep,2023,Western Region,Electronics,1570000,235000,2520,No
Oct,2023,Western Region,Electronics,1620000,245000,2580,No
Nov,2023,Western Region,Electronics,1780000,265000,2670,No
Dec,2023,Western Region,Electronics,2150000,320000,2950,No
Jan,2023,Eastern Region,Electronics,1520000,225000,2620,No
Feb,2023,Eastern Region,Electronics,1610000,240000,2750,No
Mar,2023,Eastern Region,Electronics,1450000,215000,2520,Yes
Apr,2023,Eastern Region,Electronics,1680000,250000,2830,No
May,2023,Eastern Region,Electronics,1750000,265000,2920,No
Jun,2023,Eastern Region,Electronics,1590000,235000,2690,No
Jul,2023,Eastern Region,Electronics,1660000,245000,2790,No
Aug,2023,Eastern Region,Electronics,1820000,270000,2950,No
Sep,2023,Eastern Region,Electronics,1890000,285000,3050,No
Oct,2023,Eastern Region,Electronics,1950000,295000,3120,No
Nov,2023,Eastern Region,Electronics,2120000,315000,3250,No
Dec,2023,Eastern Region,Electronics,2480000,370000,3580,No`;

  const customerDataCSV = `CustomerID,Age,Income,TravelDistance,ShoppingFrequency,LoyaltyPoints,BasketValue,PreviousPurchases,RespondsToPromotions,HasMobileApp,LastVisitDays
CU2501,34,45000,8.2,Weekly,2150,780,27,Yes,Yes,3
CU2502,42,55000,12.5,Monthly,1350,1240,18,No,Yes,15
CU2503,29,38000,2.3,Weekly,1850,540,22,Yes,Yes,5
CU2504,51,72000,15.7,Monthly,2250,1550,12,No,Yes,21
CU2505,25,33000,1.2,Weekly,950,320,14,Yes,No,2
CU2506,38,49000,5.8,Bi-weekly,1450,650,19,Yes,Yes,7
CU2507,47,65000,18.5,Monthly,1950,1180,16,No,No,24
CU2508,31,41000,4.5,Weekly,1750,620,23,Yes,Yes,4
CU2509,55,78000,20.3,Monthly,2450,1650,11,No,Yes,29
CU2510,27,36000,2.8,Weekly,1250,490,17,Yes,Yes,1
CU2511,44,59000,14.2,Bi-weekly,1850,950,21,No,Yes,11
CU2512,33,43000,5.1,Weekly,1650,580,24,Yes,No,6
CU2513,49,68000,17.9,Monthly,2050,1320,13,Yes,Yes,18
CU2514,36,47000,7.2,Bi-weekly,1550,720,20,Yes,Yes,8
CU2515,52,74000,19.8,Monthly,2350,1480,15,No,No,26
CU2516,28,37000,3.5,Weekly,1350,510,18,Yes,Yes,3
CU2517,45,61000,16.4,Monthly,1950,1150,17,No,Yes,19
CU2518,32,42000,4.9,Weekly,1550,590,22,Yes,No,5
CU2519,50,70000,18.7,Monthly,2150,1390,14,Yes,Yes,23
CU2520,30,40000,3.2,Weekly,1450,530,19,Yes,Yes,2`;

  const forecastingModelCSV = `# Excel Forecasting Model Formula
=FORECAST.ETS(A2,C2:C25,A2:A25)

# Advanced Forecasting Model with Seasonality
=FORECAST.ETS(A2,C2:C25,A2:A25,1,1)

# Multiple Regression Formula
=LINEST(G2:G25,C2:F25,TRUE,TRUE)`;

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
            <Brain className="h-5 w-5 text-purple-600" />
            Data Analysis with AI
          </CardTitle>
          <CardDescription>
            Use AI for pattern recognition, insights discovery, and predictive analytics in Excel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Introduction */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Introduction</h3>
            <p className="text-sm">
              Excel's AI capabilities allow you to uncover hidden patterns in your data, generate predictive 
              models, and automate complex analytical tasks. By leveraging machine learning algorithms through 
              Excel's interface, you can transform your spreadsheets from passive data stores into intelligent 
              decision-making tools.
            </p>
            <p className="text-sm">
              These AI tools can be particularly valuable for analyzing regional sales patterns, predicting
              customer behavior based on local market conditions, and identifying economic trends across different
              regions. This allows businesses to adapt their strategies for unique market dynamics in
              various geographic locations.
            </p>
          </div>

          {/* Sample Data Sets */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Sample Data Sets</h3>
            <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="h-4 w-4 text-green-600" />
                  <h4 className="text-sm font-medium">Retail Sales Dataset</h4>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 text-xs"
                  onClick={() => handleCopy(salesDataCSV, "salesData")}
                >
                  {copyStatus["salesData"] ? (
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
                <p>This dataset contains two years of retail sales data with the following columns:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Month and Year: Time period of the sales data</li>
                  <li>Region: Geographic area where sales occurred</li>
                  <li>Category: Product category (Electronics, Clothing, etc.)</li>
                  <li>Revenue: Total sales amount</li>
                  <li>Marketing Spend: Marketing budget allocated for that month</li>
                  <li>Customers: Number of unique customers</li>
                  <li>Competitor Promo: Whether a major competitor ran promotions (Yes/No)</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="h-4 w-4 text-green-600" />
                  <h4 className="text-sm font-medium">Customer Behavior Dataset</h4>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 text-xs"
                  onClick={() => handleCopy(customerDataCSV, "customerData")}
                >
                  {copyStatus["customerData"] ? (
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
                <p>This dataset contains customer behavior metrics for predictive modeling:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>CustomerID: Unique identifier for each customer</li>
                  <li>Age and Income: Demographic information</li>
                  <li>TravelDistance: Distance to store in kilometers</li>
                  <li>ShoppingFrequency: How often they shop</li>
                  <li>LoyaltyPoints: Points accumulated in loyalty program</li>
                  <li>BasketValue: Average purchase amount in ZAR</li>
                  <li>PreviousPurchases: Number of previous transactions</li>
                  <li>RespondsToPromotions: Whether they typically respond to promotions</li>
                  <li>HasMobileApp: Whether they use the store's mobile app</li>
                  <li>LastVisitDays: Days since their last visit</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hands-on Exercise */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Hands-on Exercise: AI-Powered Sales Forecasting</h3>
            <p className="text-sm">
              In this exercise, you'll create an AI-powered sales forecasting model in Excel that can predict future 
              retail sales based on historical patterns and external factors. You'll use Excel's built-in AI 
              capabilities along with some advanced formulas.
            </p>
            
            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 1: Preparing Your Data for AI Analysis</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li><strong>Set up your Excel workbook:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Open Excel and create a new blank workbook</li>
                      <li>Right-click on Sheet1 tab and rename it to "Sales Data"</li>
                      <li>Click the + tab at the bottom to create a new sheet and name it "Customer Data"</li>
                      <li>Create a third sheet named "Analysis & Forecasts"</li>
                    </ul>
                  </li>
                  <li><strong>Import the Retail Sales Dataset:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Select the "Sales Data" sheet</li>
                      <li>Click cell A1</li>
                      <li>Click the "Copy Data" button above to copy the Retail Sales Dataset</li>
                      <li>Paste the data into cell A1 (Right-click {'>'} Paste or Ctrl+V/Cmd+V)</li>
                      <li>If the CSV data doesn't separate into columns properly, use Data {'>'} Text to Columns with comma as delimiter</li>
                      <li>Verify all columns are properly populated and headers are visible</li>
                    </ul>
                  </li>
                  <li><strong>Import the Customer Behavior Dataset:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Select the "Customer Data" sheet</li>
                      <li>Click cell A1</li>
                      <li>Click the second "Copy Data" button to copy the Customer Behavior Dataset</li>
                      <li>Paste the data into cell A1 (Right-click {'>'} Paste or Ctrl+V/Cmd+V) </li>
                      <li>Again, use Text to Columns if needed to separate the data properly</li>
                    </ul>
                  </li>
                  <li><strong>Format as Excel Tables for improved analysis:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>In the "Sales Data" sheet, select all data including headers (Ctrl+A/Cmd+A)</li>
                      <li>Click Insert {'>'} Table, or press Ctrl+T/Cmd+T</li>
                      <li>Check "My table has headers" and click OK</li>
                      <li>In the Table Design tab that appears, rename the table to "SalesData" in the Table Name field</li>
                      <li>Repeat the same process for the Customer Data sheet, naming that table "CustomerData"</li>
                    </ul>
                  </li>
                  <li><strong>Create calculated columns for deeper insights:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>In the Sales Data table, add a new column header called "ROI" next to the last column</li>
                      <li>In the first data row of that column, enter the formula: <code>=[@Revenue]/[@MarketingSpend]</code></li>
                      <li>Format this column as Percentage with 1 decimal place</li>
                      <li>Add another column header called "AvgRevPerCustomer"</li>
                      <li>Enter the formula: <code>=[@Revenue]/[@Customers]</code></li>
                      <li>Format as Currency with 0 decimal places</li>
                      <li>Add a column called "MonthNumber" with formula: <code>{`=MONTH(DATE([@Year],MATCH([@Month],{"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"},0),1))`}</code></li>
                      <li>Format as Number with 0 decimal places</li>
                    </ul>
                  </li>
                  <li><strong>Create a PivotTable analysis:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Click anywhere in your Sales Data table</li>
                      <li>Go to Insert {'>'} PivotTable</li>
                      <li>Choose to place the PivotTable in your "Analysis & Forecasts" sheet, starting at cell A1</li>
                      <li>In the PivotTable Fields pane, drag:
                        <ul>
                          <li>"Region" to the Rows area</li>
                          <li>"Month" to the Columns area</li>
                          <li>"Revenue" to the Values area</li>
                        </ul>
                      </li>
                      <li>Click on any value in the PivotTable and select the Design tab</li>
                      <li>Click on "Report Layout" and select "Show in Tabular Form"</li>
                      <li>Go to PivotTable Analyze {'>'} Options {'>'} Totals & Filters and enable "Grand Totals for Rows"</li>
                    </ul>
                  </li>
                  <li><strong>Create trend visualizations:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>In the "Analysis & Forecasts" sheet, click cell A15</li>
                      <li>Insert a blank PivotChart (Insert {'>'} PivotChart {'>'} PivotChart)</li>
                      <li>Choose your SalesData table as the data source</li>
                      <li>Configure the PivotChart fields:
                        <ul>
                          <li>Drag "Month" to Axis (Categories)</li>
                          <li>Drag "Region" to Legend (Series)</li>
                          <li>Drag "Revenue" to Values</li>
                        </ul>
                      </li>
                      <li>Change the chart type to Line with Markers (Chart Design {'>'} Change Chart Type)</li>
                      <li>Add a descriptive title: "Revenue Trends by Region"</li>
                      <li>Format the y-axis to show currency values in thousands for better readability</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 2: Pattern Recognition with Excel's Ideas Feature</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li><strong>Accessing Excel's AI insights:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Go to your "Sales Data" sheet</li>
                      <li>Click anywhere within your formatted sales data table</li>
                      <li>In Excel 365, click the "Insert" tab in the ribbon</li>
                      <li>Look for the "Ideas" button (may be labeled as "Analyze Data" or "Ask Excel" in newer versions)</li>
                      <li>If you can't find it, check under the "Smart Lookup" or "Recommended Charts" options</li>
                      <li>In some Excel versions, it might be available as a lightning bolt icon in the Home tab</li>
                    </ul>
                  </li>
                  <li><strong>Exploring the automatic insights:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>A sidebar will appear on the right side with AI-generated insights</li>
                      <li>Excel will automatically analyze your data and present patterns it discovers</li>
                      <li>Scroll through all the suggestions to review the different insights</li>
                      <li>Each insight will typically include a visualization and explanatory text</li>
                      <li>Click on any insight to see it in more detail</li>
                    </ul>
                  </li>
                  <li><strong>Identifying specific pattern types:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Look for seasonal patterns in your sales data (monthly or quarterly trends)</li>
                      <li>Pay attention to visualizations showing correlations between marketing spend and revenue</li>
                      <li>Find insights about how competitor promotions affect your sales (filter data where CompetitorPromo = "Yes")</li>
                      <li>Compare performance between Western Region and Eastern Region</li>
                      <li>Note any outliers or anomalies that the AI has identified</li>
                    </ul>
                  </li>
                  <li><strong>Asking specific questions:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Use the search/ask field in the Ideas pane with natural language questions</li>
                      <li>Try queries like "What's the relationship between marketing spend and revenue?"</li>
                      <li>Ask "Which month has the highest sales?" or "Compare sales between regions"</li>
                      <li>Request "Show me trends over time" or "Find factors that impact sales"</li>
                      <li>The AI will respond with relevant visualizations and insights</li>
                    </ul>
                  </li>
                  <li><strong>Saving valuable insights to your workbook:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>When you find an especially useful insight, click on it</li>
                      <li>Look for the "Add to sheet" or "Pin" button below the visualization</li>
                      <li>Choose to add it to your "Analysis & Forecasts" sheet</li>
                      <li>Position multiple insights to create a comprehensive dashboard</li>
                      <li>Add your own descriptive titles above each saved insight</li>
                      <li>Consider grouping related insights together (regional analysis, seasonal patterns, etc.)</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 3: Implementing Predictive Analytics</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li><strong>Prepare a dedicated forecast worksheet:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Click the + tab at the bottom to create a new worksheet</li>
                      <li>Right-click on the new sheet tab and select "Rename"</li>
                      <li>Name it "Forecast"</li>
                      <li>Click cell A1 and type "Sales Forecasting Models" as a header</li>
                      <li>Format this as a title (Home tab {'>'} Title style)</li>
                    </ul>
                  </li>
                  <li><strong>Use Excel's built-in Forecast Sheet feature:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Go to the "Sales Data" sheet and sort your data by date if not already sorted</li>
                      <li>Select two columns: a time column (containing dates - create a proper date column if needed by combining Month and Year) and the Revenue column</li>
                      <li>Go to the Data tab in the ribbon</li>
                      <li>Look for "Forecast Sheet" button in the Forecast group (if not visible, check under "Data Analysis")</li>
                      <li>In the Create Forecast Worksheet dialog that appears:</li>
                      <li>Verify your date/time range and values range are correctly selected</li>
                      <li>Set the "Forecast End" date to 6 months after your last data point</li>
                      <li>Check the box for "Seasonality Detection" (or manually set it to 12 for monthly data)</li>
                      <li>Check the box for "Include forecast statistics" to see confidence intervals</li>
                      <li>Choose "Line chart" as the visualization</li>
                      <li>Click "Create" to generate the forecast sheet</li>
                    </ul>
                  </li>
                  <li><strong>Analyze the forecast results:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Excel will create a new sheet with both a chart and the forecast data</li>
                      <li>The chart shows historical data (solid line) and forecast data (dashed line)</li>
                      <li>Notice the confidence intervals (shaded area around the forecast line)</li>
                      <li>Examine the forecast values in the table below the chart</li>
                      <li>Look for the Lower and Upper Confidence Bound columns to understand prediction range</li>
                      <li>Review the statistics below the forecast table (e.g., MASE, SMAPE values for accuracy)</li>
                    </ul>
                  </li>
                  <li><strong>Implement advanced forecasting models manually:</strong>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-2 h-6 text-xs"
                      onClick={() => handleCopy(forecastingModelCSV, "forecastModel")}
                    >
                      {copyStatus["forecastModel"] ? (
                        <>
                          <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-1 h-3 w-3" /> Copy Formulas
                        </>
                      )}
                    </Button>
                    <ul className="list-disc pl-5 my-1 mt-2">
                      <li>Return to your "Forecast" sheet and go to cell A10</li>
                      <li>Type "Custom Forecasting Models" and format as a heading</li>
                      <li>Create a layout with these columns: Date, Actual Revenue, Basic Forecast, Seasonal Forecast</li>
                      <li>Copy your historical dates and revenue data into the first two columns</li>
                      <li>Add 6 more rows for future dates (keeping the same monthly pattern)</li>
                      <li>In the Basic Forecast column next to your last actual data point, paste the first formula from the copied formulas</li>
                      <li>In the Seasonal Forecast column, paste the second formula with seasonality parameter</li>
                      <li>If needed, modify the cell references in the formulas to match your data ranges</li>
                      <li>Copy the formulas down to fill all future date rows</li>
                    </ul>
                  </li>
                  <li><strong>Create a multiple regression model (advanced):</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>In a new section of your Forecast sheet (e.g., starting at row 40)</li>
                      <li>Type "Multiple Regression Analysis" and format as a heading</li>
                      <li>Copy your source data including Revenue, MarketingSpend, Customers, and CompetitorPromo columns</li>
                      <li>For CompetitorPromo, convert "Yes" to 1 and "No" to 0</li>
                      <li>Click in a blank cell where you want the regression output</li>
                      <li>Paste the LINEST formula you copied earlier</li>
                      <li>This is an array formula, so press Ctrl+Shift+Enter to execute it (Cmd+Shift+Enter on Mac)</li>
                      <li>The result will be a matrix of regression coefficients</li>
                      <li>Use these coefficients to create a prediction formula: Predicted Revenue = b0 + b1*MarketingSpend + b2*Customers + b3*CompetitorPromo</li>
                    </ul>
                  </li>
                  <li><strong>Visualize and compare forecast models:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Select all your data including Date, Actual Revenue, and both forecast models</li>
                      <li>Go to Insert {'>'} Charts {'>'} Line Chart</li>
                      <li>Choose a suitable line chart style (recommend "Line with Markers")</li>
                      <li>Add a descriptive chart title: "Revenue Forecasts: Model Comparison"</li>
                      <li>Add appropriate axis titles</li>
                      <li>Format the Actual Revenue series with a solid line</li>
                      <li>Format the forecast series with dashed lines of different colors</li>
                      <li>Add a legend and position it clearly</li>
                      <li>Consider adding data labels to the final forecasted values</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 4: AI-Powered Customer Segmentation</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li><strong>Prepare the customer data:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Right-click on the sheet tabs and create a new worksheet named "Customer Segments"</li>
                      <li>Click on the "Customer Data" sheet tab to return to that sheet</li>
                      <li>Select all customer data by clicking cell A1 and pressing Ctrl+A (or Cmd+A on Mac)</li>
                      <li>Copy the selected data (Ctrl+C or Cmd+C)</li>
                      <li>Go to the "Customer Segments" sheet and paste the data starting at cell A1</li>
                      <li>Format the data as a table by selecting all data and pressing Ctrl+T (or Cmd+T)</li>
                      <li>Check "My table has headers" and click OK</li>
                      <li>In the Table Design tab, name this table "CustomerSegmentation"</li>
                    </ul>
                  </li>
                  <li><strong>Normalize the customer data for analysis:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Create a new section for normalized data starting at column N</li>
                      <li>Add headers: "NormAge", "NormIncome", "NormDistance", "NormLoyalty", "NormBasket", "NormPurchases"</li>
                      <li>Use the STANDARDIZE function to normalize each column:</li>
                      <li>For NormAge (cell N2), enter: <code>=STANDARDIZE([@Age],AVERAGE(CustomerSegmentation[Age]),STDEV.P(CustomerSegmentation[Age]))</code></li>
                      <li>Create similar formulas for each numerical column you want to use for segmentation</li>
                      <li>Copy these formulas down for all customer rows</li>
                    </ul>
                  </li>
                  <li><strong>Perform customer segmentation using Excel's tools:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>If you have Excel 365 or Excel 2019 with Analysis ToolPak:</li>
                      <li>Go to Data tab {'>'} Data Analysis (if not visible, enable it via Excel Options {'>'} Add-ins {'>'} Analysis ToolPak)</li>
                      <li>Select "K-Means Clustering" (if available) and click OK</li>
                      <li>Select your normalized data range as input</li>
                      <li>Set K (number of clusters) to 3 or 4</li>
                      <li>Specify output range (e.g., starting at cell U1)</li>
                      <li>Click OK to run the analysis</li>
                    </ul>
                  </li>
                  <li><strong>Alternative: Manual clustering approach:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>If K-Means isn't available in your version of Excel:</li>
                      <li>Create a new column called "ValueScore" combining key metrics:</li>
                      <li>Formula: <code>=[@NormLoyalty]*0.3 + [@NormBasket]*0.3 + [@NormPurchases]*0.4</code> (adjust weights as needed)</li>
                      <li>Create a "FrequencyScore" column using distance and visit frequency</li>
                      <li>Create a "Segment" column with formula using nested IFs:</li>
                      <li><code>=IF(AND([@ValueScore]{'>'}0.5, [@FrequencyScore]{'>'}0.5), "High-Value Frequent", IF([@ValueScore]{'>'}0.5, "High-Value Infrequent", IF([@FrequencyScore]{'>'}0.5, "Low-Value Frequent", "Low-Value Infrequent")))</code></li>
                    </ul>
                  </li>
                  <li><strong>Analyze and visualize the customer segments:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Create a PivotTable to analyze your segments (Insert {'>'} PivotTable)</li>
                      <li>Place Segment field in Rows area</li>
                      <li>Add Average of Income, Average of BasketValue, Count of CustomerID to Values area</li>
                      <li>Format the PivotTable with clear labels and number formatting</li>
                      <li>Create a chart to visualize segments (Insert {'>'} Charts {'>'} Recommended Charts)</li>
                      <li>Select a clustered column chart showing key metrics by segment</li>
                      <li>Add titles, legends, and appropriate formatting</li>
                    </ul>
                  </li>
                  <li><strong>Create segment profiles and marketing strategies:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Next to your visualizations, create a table with segment profiles</li>
                      <li>For each segment, list key characteristics (age range, typical income, shopping habits)</li>
                      <li>Add a column for "Recommended Marketing Strategy" with specific approaches for each segment</li>
                      <li>For high-value customers: loyalty program enhancements, exclusive offers</li>
                      <li>For frequent shoppers: convenient subscription options, mobile app promotions</li>
                      <li>For infrequent shoppers: re-engagement campaigns, special incentives</li>
                      <li>Format this table with appropriate headers, borders, and cell styles</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 5: Building a Prediction Dashboard</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li><strong>Create and structure your dashboard:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Right-click on sheet tabs area and insert a new worksheet</li>
                      <li>Name it "Dashboard" and position it as the first sheet for easy access</li>
                      <li>Set up a header section at the top (rows 1-3) with a title: "AI-Powered Sales & Customer Analysis Dashboard"</li>
                      <li>Divide your dashboard into 4 quadrants with clear borders:</li>
                      <li>Top-left: Key performance metrics and filters</li>
                      <li>Top-right: Sales forecasting and trends</li>
                      <li>Bottom-left: Customer segment analysis</li>
                      <li>Bottom-right: What-If analysis and scenario planning</li>
                    </ul>
                  </li>
                  <li><strong>Create interactive filters and controls:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Go to cell B3 in your filter section and type "Region:"</li>
                      <li>In cell C3, create a drop-down list:</li>
                      <li>Select the cell and go to Data {'>'} Data Validation</li>
                      <li>Under Allow, select "List"</li>
                      <li>In the Source field, enter: <code>="All Regions","Western Region","Eastern Region"</code></li>
                      <li>Click OK to create the drop-down</li>
                      <li>Similarly create a "Category:" dropdown in cells E3:F3</li>
                      <li>Create a date range selector using two cells labeled "From:" and "To:"</li>
                      <li>Format these cells as dates and set default values</li>
                    </ul>
                  </li>
                  <li><strong>Build key metrics display:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>In the top-left section, create cells for key metrics:</li>
                      <li>"Total Revenue (Actual)" with a formula that uses SUMIFS to respect your filters</li>
                      <li>"Forecasted Revenue" showing the sum of upcoming forecasted values</li>
                      <li>"YoY Growth Rate" calculated from historical data</li>
                      <li>"Customer Count by Segment" showing distribution across segments</li>
                      <li>Format these cells with large bold numbers, currency format, and descriptive labels</li>
                      <li>Add visual indicators like up/down arrows based on trend direction</li>
                    </ul>
                  </li>
                  <li><strong>Create the forecast visualization section:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Go to your Forecast sheet and copy your forecast chart</li>
                      <li>Paste it into the top-right quadrant of your Dashboard</li>
                      <li>Resize and format the chart appropriately</li>
                      <li>Add a dynamic chart title that updates based on selected filters</li>
                      <li>Format the chart to clearly distinguish between historical and forecasted values</li>
                      <li>Add data labels to the most recent actual point and final forecast point</li>
                      <li>Include confidence intervals as a shaded area around forecast line</li>
                    </ul>
                  </li>
                  <li><strong>Integrate customer segment analysis:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Copy your segment analysis chart from the Customer Segments sheet</li>
                      <li>Paste it into the bottom-left quadrant of the Dashboard</li>
                      <li>Next to the chart, add a summary table showing:</li>
                      <li>Number of customers in each segment</li>
                      <li>Average purchase value by segment</li>
                      <li>Loyalty score averages</li>
                      <li>Forecast growth potential (add a qualitative rating: High/Medium/Low)</li>
                      <li>Format this section with appropriate headers and cell styles</li>
                    </ul>
                  </li>
                  <li><strong>Build a What-If Analysis section:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>In the bottom-right quadrant, create a What-If section</li>
                      <li>Label cell A30 as "Marketing Spend Scenario Analysis"</li>
                      <li>Create input cells for users to adjust parameters:</li>
                      <li>"Marketing Budget Change (%)" with a default of 0%</li>
                      <li>"Expected Market Growth (%)" with a realistic default value</li>
                      <li>"Competitor Promotion Intensity (1-5)" with a default of 3</li>
                      <li>Below these inputs, create a Data Table (Data {'>'} What-If Analysis {'>'} Data Table)</li>
                      <li>Set up a table showing various marketing budget changes (-20% to +50%)</li>
                      <li>For each scenario, show the projected revenue, ROI, and customer growth</li>
                      <li>Use your regression model coefficients to calculate these projections</li>
                    </ul>
                  </li>
                  <li><strong>Add advanced conditional formatting:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Select your forecast data table in the dashboard</li>
                      <li>Go to Home {'>'} Conditional Formatting {'>'} Color Scales</li>
                      <li>Apply a green-to-red color scale for revenue values</li>
                      <li>Add data bars to visually represent values in your segment table</li>
                      <li>Create a custom conditional formatting rule for values below target:</li>
                      <li>Select your forecast values and go to Home {'>'} Conditional Formatting {'>'} New Rule</li>
                      <li>Choose "Use a formula to determine which cells to format"</li>
                      <li>Enter a formula comparing the value to a target cell</li>
                      <li>Select a bold red font and light red fill for below-target values</li>
                      <li>Similarly highlight months with expected competitor promotions</li>
                    </ul>
                  </li>
                  <li><strong>Connect dashboard elements and create interactivity:</strong>
                    <ul className="list-disc pl-5 my-1">
                      <li>Link your dropdown filters to all dashboard elements using INDIRECT or INDEX/MATCH formulas</li>
                      <li>Create named ranges for important data sets to simplify formulas</li>
                      <li>Add form controls (Developer tab {'>'} Insert {'>'} Form Control) for more interactive elements</li>
                      <li>Create a "Refresh Dashboard" button and assign a macro to update all calculations</li>
                      <li>Add documentation with a small "About" section explaining the dashboard's data sources and methodology</li>
                      <li>Test all interactive elements to ensure they update all connected visualizations correctly</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
              <h3 className="text-sm font-medium">Key Tips for Success</h3>
              <ul className="list-disc pl-5 text-xs space-y-1">
                <li><strong>Data quality:</strong> Clean your data thoroughly before analysis (remove duplicates, handle missing values)</li>
                <li><strong>Time series:</strong> Ensure dates are properly formatted and in chronological order</li>
                <li><strong>Domain knowledge:</strong> Incorporate South African retail calendars and holidays</li>
                <li><strong>Validation:</strong> Always compare AI predictions against actual results</li>
                <li><strong>Interpretation:</strong> Don't just trust the AI - understand what drives the predictions</li>
                <li><strong>Iteration:</strong> Refine your models as new data becomes available</li>
              </ul>
            </div>
          </div>

          {/* AI Tools for Excel */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">AI Tools for Excel</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Tool 1 */}
              <div className="border rounded-md overflow-hidden">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3">
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-blue-600" />
                    <h4 className="text-sm font-medium">Excel Ideas</h4>
                  </div>
                  <p className="text-xs mt-1">Built-in AI pattern recognition</p>
                </div>
                <div className="p-3 space-y-2">
                  <p className="text-xs">Automatically analyzes your data and suggests insights, charts, and PivotTables. Access via Insert {'>'} Ideas.</p>
                </div>
              </div>

              {/* Tool 2 */}
              <div className="border rounded-md overflow-hidden">
                <div className="bg-green-50 dark:bg-green-900/20 p-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <h4 className="text-sm font-medium">Forecast Sheet</h4>
                  </div>
                  <p className="text-xs mt-1">Time series prediction</p>
                </div>
                <div className="p-3 space-y-2">
                  <p className="text-xs">Creates forecast charts and data based on historical time series. Access via Data {'>'} Forecast Sheet.</p>
                </div>
              </div>

              {/* Tool 3 */}
              <div className="border rounded-md overflow-hidden">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-purple-600" />
                    <h4 className="text-sm font-medium">Smart Lookup</h4>
                  </div>
                  <p className="text-xs mt-1">Contextual information retrieval</p>
                </div>
                <div className="p-3 space-y-2">
                  <p className="text-xs">Provides insights about selected data from web sources. Access via Review {'>'} Smart Lookup.</p>
                </div>
              </div>

              {/* Tool 4 */}
              <div className="border rounded-md overflow-hidden">
                <div className="bg-amber-50 dark:bg-amber-900/20 p-3">
                  <div className="flex items-center gap-2">
                    <LineChart className="h-4 w-4 text-amber-600" />
                    <h4 className="text-sm font-medium">Power Query AI</h4>
                  </div>
                  <p className="text-xs mt-1">Advanced data transformation</p>
                </div>
                <div className="p-3 space-y-2">
                  <p className="text-xs">Uses AI to suggest data transformations and cleaning operations. Access via Data {'>'} Get Data {'>'} From Other Sources.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataAnalysisWithAIExercise;
