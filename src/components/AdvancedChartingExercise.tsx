import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Copy } from "lucide-react";

const AdvancedChartingExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  // Sample data strings for the exercise
  const salesPerformanceCSV = `Region,Product,Year,Quarter,Revenue,Units,Profit,MarketShare,CustomerSatisfaction,ReturnRate
North,Laptops,2023,Q1,850000,1250,187000,22.5,4.3,3.2
North,Laptops,2023,Q2,920000,1350,202000,23.1,4.4,3.0
North,Laptops,2023,Q3,890000,1300,195000,22.8,4.5,2.8
North,Laptops,2023,Q4,1100000,1600,242000,24.5,4.6,2.5
North,Smartphones,2023,Q1,1200000,3800,264000,28.7,4.2,3.5
North,Smartphones,2023,Q2,1280000,4000,281000,29.2,4.3,3.3
North,Smartphones,2023,Q3,1350000,4200,297000,30.1,4.4,3.0
North,Smartphones,2023,Q4,1500000,4650,330000,31.5,4.5,2.8
North,Accessories,2023,Q1,320000,8500,112000,15.8,4.4,2.0
North,Accessories,2023,Q2,350000,9200,122500,16.2,4.5,1.9
North,Accessories,2023,Q3,370000,9700,129500,16.5,4.6,1.8
North,Accessories,2023,Q4,420000,11000,147000,17.2,4.7,1.7
South,Laptops,2023,Q1,780000,1150,171600,20.8,4.2,3.4
South,Laptops,2023,Q2,820000,1200,180400,21.2,4.3,3.2
South,Laptops,2023,Q3,860000,1250,189200,21.8,4.4,3.0
South,Laptops,2023,Q4,950000,1400,209000,22.5,4.5,2.7
South,Smartphones,2023,Q1,1050000,3300,231000,26.5,4.1,3.7
South,Smartphones,2023,Q2,1120000,3500,246400,27.2,4.2,3.5
South,Smartphones,2023,Q3,1180000,3700,259600,27.8,4.3,3.2
South,Smartphones,2023,Q4,1320000,4100,290400,29.0,4.4,3.0
South,Accessories,2023,Q1,280000,7400,98000,14.2,4.3,2.2
South,Accessories,2023,Q2,310000,8100,108500,14.8,4.4,2.0
South,Accessories,2023,Q3,330000,8600,115500,15.2,4.5,1.9
South,Accessories,2023,Q4,370000,9700,129500,15.8,4.6,1.8
East,Laptops,2023,Q1,920000,1350,202400,24.1,4.4,3.0
East,Laptops,2023,Q2,980000,1450,215600,24.8,4.5,2.8
East,Laptops,2023,Q3,1020000,1500,224400,25.2,4.6,2.6
East,Laptops,2023,Q4,1180000,1750,259600,26.5,4.7,2.3
East,Smartphones,2023,Q1,1350000,4200,297000,31.2,4.3,3.3
East,Smartphones,2023,Q2,1420000,4450,312400,31.8,4.4,3.1
East,Smartphones,2023,Q3,1480000,4650,325600,32.3,4.5,2.9
East,Smartphones,2023,Q4,1650000,5150,363000,33.5,4.6,2.7
East,Accessories,2023,Q1,350000,9200,122500,16.8,4.5,1.9
East,Accessories,2023,Q2,380000,10000,133000,17.3,4.6,1.8
East,Accessories,2023,Q3,400000,10500,140000,17.6,4.7,1.7
East,Accessories,2023,Q4,450000,11800,157500,18.2,4.8,1.6
West,Laptops,2023,Q1,810000,1200,178200,21.5,4.3,3.1
West,Laptops,2023,Q2,860000,1250,189200,22.1,4.4,2.9
West,Laptops,2023,Q3,890000,1300,195800,22.6,4.5,2.7
West,Laptops,2023,Q4,1050000,1550,231000,23.8,4.6,2.4
West,Smartphones,2023,Q1,1150000,3600,253000,27.3,4.2,3.4
West,Smartphones,2023,Q2,1220000,3800,268400,28.0,4.3,3.2
West,Smartphones,2023,Q3,1280000,4000,281600,28.6,4.4,3.0
West,Smartphones,2023,Q4,1450000,4500,319000,30.0,4.5,2.8
West,Accessories,2023,Q1,310000,8100,108500,15.3,4.4,2.1
West,Accessories,2023,Q2,340000,8900,119000,15.8,4.5,2.0
West,Accessories,2023,Q3,360000,9400,126000,16.1,4.6,1.8
West,Accessories,2023,Q4,410000,10700,143500,16.7,4.7,1.7`;

  const surveyResultsCSV = `Age,Gender,Income,Education,ProductUsage,Satisfaction,RecommendScore,FeatureRating1,FeatureRating2,FeatureRating3,PurchaseIntent,PricePerception
28,M,65000,Bachelor,Daily,4.5,9,4.2,4.7,3.9,High,Medium
35,F,78000,Master,Daily,4.8,10,4.5,4.8,4.6,High,Medium
42,M,95000,PhD,Weekly,3.9,7,3.5,4.1,3.7,Medium,High
31,F,72000,Bachelor,Daily,4.6,9,4.3,4.5,4.4,High,Medium
24,M,52000,Associate,Daily,4.2,8,4.0,4.3,3.8,Medium,Low
29,F,68000,Master,Daily,4.7,10,4.5,4.8,4.5,High,Medium
38,M,82000,Bachelor,Weekly,4.0,8,3.9,4.2,3.8,Medium,Medium
45,F,98000,Master,Monthly,3.6,6,3.2,3.8,3.5,Low,High
33,M,76000,Bachelor,Daily,4.5,9,4.2,4.6,4.3,High,Medium
27,F,59000,Associate,Daily,4.3,8,4.0,4.4,4.1,Medium,Low
36,M,83000,PhD,Weekly,3.8,7,3.6,4.0,3.6,Medium,High
40,F,92000,Master,Weekly,4.1,8,3.9,4.3,4.0,Medium,Medium
26,M,56000,Bachelor,Daily,4.4,9,4.2,4.5,4.2,High,Low
32,F,74000,Master,Daily,4.6,9,4.4,4.7,4.5,High,Medium
44,M,102000,PhD,Monthly,3.7,6,3.3,3.9,3.5,Low,High
30,F,69000,Bachelor,Daily,4.5,9,4.3,4.6,4.2,High,Medium
25,M,53000,Associate,Daily,4.2,8,4.0,4.3,3.9,Medium,Low
34,F,78000,Master,Weekly,4.3,8,4.1,4.4,4.1,Medium,Medium
41,M,91000,Master,Monthly,3.9,7,3.7,4.0,3.8,Medium,High
29,F,64000,Bachelor,Daily,4.5,9,4.3,4.7,4.4,High,Medium
37,M,81000,Bachelor,Weekly,4.0,8,3.8,4.2,3.9,Medium,Medium
43,F,96000,PhD,Monthly,3.8,7,3.5,3.9,3.7,Medium,High
31,M,73000,Master,Daily,4.4,9,4.2,4.5,4.3,High,Medium
28,F,62000,Bachelor,Daily,4.6,9,4.4,4.7,4.5,High,Low
39,M,87000,Master,Weekly,4.1,8,3.9,4.3,4.0,Medium,Medium
46,F,105000,PhD,Monthly,3.5,6,3.2,3.8,3.4,Low,High
32,M,75000,Bachelor,Daily,4.3,8,4.1,4.4,4.2,Medium,Medium
27,F,58000,Associate,Daily,4.4,8,4.2,4.5,4.3,High,Low
35,M,79000,Master,Weekly,4.2,8,4.0,4.3,4.1,Medium,Medium
42,F,94000,PhD,Monthly,3.7,7,3.4,3.9,3.6,Medium,High`;

  const financialDataCSV = `Date,Revenue,Expenses,NetProfit,CashFlow,Assets,Liabilities,Equity,ROI,MarketingSpend,CustomerAcquisitionCost
2023-01-31,2850000,2123000,727000,652000,12500000,4800000,7700000,5.8,350000,125
2023-02-28,2720000,2010000,710000,685000,12650000,4750000,7900000,5.6,330000,122
2023-03-31,3150000,2320000,830000,795000,12950000,4700000,8250000,6.4,380000,118
2023-04-30,2980000,2185000,795000,752000,13100000,4650000,8450000,6.1,365000,120
2023-05-31,3050000,2230000,820000,778000,13250000,4600000,8650000,6.2,370000,116
2023-06-30,3250000,2375000,875000,842000,13500000,4550000,8950000,6.5,390000,112
2023-07-31,3120000,2290000,830000,805000,13650000,4500000,9150000,6.3,380000,114
2023-08-31,2950000,2180000,770000,742000,13800000,4450000,9350000,5.9,360000,118
2023-09-30,3180000,2340000,840000,815000,14000000,4400000,9600000,6.0,385000,115
2023-10-31,3320000,2435000,885000,862000,14250000,4350000,9900000,6.2,400000,112
2023-11-30,3480000,2550000,930000,905000,14500000,4300000,10200000,6.4,420000,110
2023-12-31,3850000,2810000,1040000,1015000,14850000,4250000,10600000,7.0,460000,105
2024-01-31,3150000,2330000,820000,790000,15000000,4200000,10800000,5.5,385000,118
2024-02-29,3020000,2240000,780000,755000,15150000,4150000,11000000,5.2,370000,120
2024-03-31,3450000,2550000,900000,875000,15450000,4100000,11350000,5.8,415000,116
2024-04-30,3280000,2430000,850000,830000,15650000,4050000,11600000,5.4,395000,118
2024-05-31,3380000,2500000,880000,860000,15850000,4000000,11850000,5.6,405000,115
2024-06-30,3580000,2645000,935000,915000,16100000,3950000,12150000,5.8,430000,112`;

  // Handler for copy buttons
  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus({ ...copyStatus, [key]: true });
    setTimeout(() => setCopyStatus({ ...copyStatus, [key]: false }), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Advanced Charting and Visualization in Excel</h2>
        <p className="text-sm text-muted-foreground">Excel offers powerful capabilities for creating sophisticated data visualizations that go beyond basic charts. 
          In this exercise, you'll learn how to build interactive dashboards, create custom visualizations, 
          and use advanced charting techniques to communicate insights effectively.
        </p>
      </div>

      {/* Sample Datasets */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Sample Datasets</h3>
        <p className="text-sm text-muted-foreground">Use these sample datasets for the hands-on exercises. Copy each dataset and paste it into separate 
          CSV files or directly into Excel to follow along.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Sales Performance Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(salesPerformanceCSV, "salesPerformance")}
                >
                  {copyStatus.salesPerformance ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {salesPerformanceCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Survey Results Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(surveyResultsCSV, "surveyResults")}
                >
                  {copyStatus.surveyResults ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {surveyResultsCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Financial Performance Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(financialDataCSV, "financialData")}
                >
                  {copyStatus.financialData ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {financialDataCSV}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hands-on Exercise */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Hands-on Exercise: Build Advanced Visualization Dashboard</h3>
        <p className="text-sm text-muted-foreground">In this exercise, you'll create a comprehensive dashboard with advanced visualizations to analyze and 
          communicate business insights effectively.
        </p>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Exercise Overview</h4>
            <p className="text-sm text-muted-foreground">This hands-on exercise will guide you through creating an interactive dashboard with multiple 
              advanced chart types, custom visualizations, and interactive elements. You'll learn how to 
              transform raw data into compelling visual stories that drive business decisions.
            </p>
            
            <ol className="list-decimal pl-5 space-y-6 text-sm">
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Creating Custom Combo Charts</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Import the Sales Performance dataset into Excel</li>
                  <li>Create a combo chart with multiple series types:
                    <ul>
                      <li>Select data for Revenue and Profit across quarters</li>
                      <li>Insert → Recommended Charts → Combo chart</li>
                      <li>Set Revenue as columns and Profit as line with markers</li>
                      <li>Add Units as a secondary axis line chart</li>
                    </ul>
                  </li>
                  <li>Enhance the combo chart with custom formatting:
                    <ul>
                      <li>Add data labels to the Profit line</li>
                      <li>Format axis with appropriate number formats ($ for Revenue/Profit, # for Units)</li>
                      <li>Add a descriptive title and axis labels</li>
                      <li>Create a custom color scheme that matches your corporate branding</li>
                    </ul>
                  </li>
                  <li>Add trendlines for the Revenue and Profit series:
                    <ul>
                      <li>Right-click each series → Add Trendline</li>
                      <li>Choose appropriate trendline type (linear, moving average)</li>
                      <li>Display forecast for 2 periods forward</li>
                      <li>Show R-squared value on chart</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Advanced Data Visualization with Waterfall and Funnel Charts</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create a waterfall chart to visualize financial performance:
                    <ul>
                      <li>Create a structured dataset with starting value, increases, decreases, and total</li>
                      <li>Insert → Waterfall chart</li>
                      <li>Format colors to indicate positive (green) and negative (red) values</li>
                      <li>Add subtotals at key points in the analysis</li>
                      <li>Add data labels and a title that explains the financial story</li>
                    </ul>
                  </li>
                  <li>Build a funnel chart for conversion analysis:
                    <ul>
                      <li>Create a dataset with stages and values (e.g., Visitors, Leads, Opportunities, Customers)</li>
                      <li>Insert → Funnel chart (or create manually with stacked bar charts)</li>
                      <li>Add percentage labels to show conversion rates between stages</li>
                      <li>Format with custom colors and remove gridlines</li>
                      <li>Add a descriptive title and annotations explaining key drop-off points</li>
                    </ul>
                  </li>
                  <li>Create a cascading waterfall chart for profit bridge analysis:
                    <ul>
                      <li>Set up data showing starting profit, revenue changes, expense changes, and ending profit</li>
                      <li>Create a waterfall chart showing how various factors impact profit</li>
                      <li>Add floating columns for subtotals</li>
                      <li>Format with custom colors and clear labels</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Creating Dynamic Charts with Form Controls</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Set up a dashboard with interactive elements:
                    <ul>
                      <li>Create a dropdown list for filtering by Region:
                        <ul>
                          <li>Insert → Form Control → Combo Box</li>
                          <li>Link to a cell and create a data validation list with regions</li>
                        </ul>
                      </li>
                      <li>Add a slicer for filtering by Product:
                        <ul>
                          <li>Insert → Slicer → Select Product field</li>
                          <li>Format slicer to match dashboard design</li>
                        </ul>
                      </li>
                      <li>Create option buttons for selecting different metrics (Revenue, Units, Profit)</li>
                      <li>Add a timeline control for time-based filtering (if using tables or pivots)</li>
                    </ul>
                  </li>
                  <li>Build dynamic charts that respond to control selections:
                    <ul>
                      <li>Create INDIRECT or INDEX/MATCH formulas to reference data based on selections</li>
                      <li>Set up named ranges that update based on filter selections</li>
                      <li>Create charts that use these dynamic ranges as data sources</li>
                      <li>Add titles that update automatically based on user selections</li>
                    </ul>
                  </li>
                  <li>Create a dynamic chart title and annotations using formulas:
                    <ul>
                      <li>Use TEXT, CONCATENATE and IF functions to build dynamic titles</li>
                      <li>Link text boxes to cells containing these formulas</li>
                      <li>Create conditional formatting that changes chart elements based on data values</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Creating Advanced Scatter and Bubble Charts</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Import the Survey Results dataset</li>
                  <li>Create a scatter chart to analyze correlations:
                    <ul>
                      <li>Set up a scatter plot with Satisfaction as X-axis and RecommendScore as Y-axis</li>
                      <li>Add data labels to identify key points</li>
                      <li>Insert a trendline and display the equation and R-squared value</li>
                      <li>Format the chart with appropriate titles and axis labels</li>
                    </ul>
                  </li>
                  <li>Enhance the scatter chart with quadrant analysis:
                    <ul>
                      <li>Add reference lines to divide the chart into quadrants (average X and Y values)</li>
                      <li>Format each quadrant with different background colors</li>
                      <li>Add text boxes to label each quadrant (e.g., "High Satisfaction, Low Recommendation")</li>
                      <li>Use conditional formatting to color data points based on quadrant location</li>
                    </ul>
                  </li>
                  <li>Create a bubble chart for multi-dimensional analysis:
                    <ul>
                      <li>Set up a bubble chart with Age as X-axis, Income as Y-axis, and PurchaseIntent for bubble size</li>
                      <li>Use colors to represent gender or education level</li>
                      <li>Add data labels for key bubbles</li>
                      <li>Format axis scales appropriately</li>
                      <li>Create a legend that explains bubble size and colors</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Advanced Heat Maps and Conditional Formatting</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create a correlation heat map:
                    <ul>
                      <li>Calculate correlation coefficients between numerical variables in the survey data</li>
                      <li>Apply conditional formatting with color scales to the correlation matrix</li>
                      <li>Use custom formatting rules to highlight strong positive and negative correlations</li>
                      <li>Add data bars to visually represent correlation strength</li>
                    </ul>
                  </li>
                  <li>Build a product performance heat map:
                    <ul>
                      <li>Set up a matrix with Products in rows and Regions in columns</li>
                      <li>Use sales or profit data as values</li>
                      <li>Apply conditional formatting with color scales (red-yellow-green)</li>
                      <li>Add data bars or icons to enhance visual impact</li>
                      <li>Include variance calculations (% change year-over-year) with separate formatting</li>
                    </ul>
                  </li>
                  <li>Create a calendar heat map:
                    <ul>
                      <li>Set up a calendar layout in Excel (using date functions)</li>
                      <li>Import daily sales or performance data</li>
                      <li>Apply conditional formatting to show high and low performance days</li>
                      <li>Add custom icons for special events or holidays</li>
                      <li>Create a summary section showing weekly and monthly trends</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Creating Custom Gauge Charts and Speedometers</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Build a basic gauge chart:
                    <ul>
                      <li>Create a doughnut chart with three segments (value, remainder, and background)</li>
                      <li>Format the chart to show only half of the doughnut</li>
                      <li>Remove gridlines and chart borders</li>
                      <li>Add a needle using shapes or error bars</li>
                      <li>Insert value labels and thresholds</li>
                    </ul>
                  </li>
                  <li>Enhance the gauge with color zones:
                    <ul>
                      <li>Create multiple segments for different performance zones (red, yellow, green)</li>
                      <li>Format each zone with appropriate colors</li>
                      <li>Add text annotations to describe each performance level</li>
                      <li>Create a dynamic title showing current value and status</li>
                    </ul>
                  </li>
                  <li>Build a multi-gauge dashboard:
                    <ul>
                      <li>Create multiple gauge charts for different KPIs</li>
                      <li>Arrange them in a dashboard layout</li>
                      <li>Add labels and descriptions for each gauge</li>
                      <li>Create a central control panel to update threshold values</li>
                      <li>Add a summary table showing all metrics and their statuses</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Working with Map Charts and Geographical Data</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create a basic map chart:
                    <ul>
                      <li>Import the Sales Performance data with regional information</li>
                      <li>Insert → Maps → Filled Map</li>
                      <li>Set locations to Region and values to Revenue or Profit</li>
                      <li>Format the map with appropriate color scheme and legend</li>
                      <li>Add data labels for key regions</li>
                    </ul>
                  </li>
                  <li>Enhance the map chart with custom regions:
                    <ul>
                      <li>Create custom territories by grouping states or countries</li>
                      <li>Format regions with custom colors based on performance</li>
                      <li>Add a legend with value ranges</li>
                      <li>Create tooltips with multiple metrics for each region</li>
                    </ul>
                  </li>
                  <li>Build a dynamic map dashboard:
                    <ul>
                      <li>Connect the map to slicers or filters for time periods and products</li>
                      <li>Add a detail section that updates when a region is selected</li>
                      <li>Create small multiple maps to compare different metrics across regions</li>
                      <li>Add a summary table with regional performance metrics</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Creating a Comprehensive Dashboard</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Plan your dashboard layout:
                    <ul>
                      <li>Create a wireframe with sections for KPIs, trends, details, and filters</li>
                      <li>Decide on a logical flow of information (overview to detail)</li>
                      <li>Allocate space for different chart types based on importance</li>
                      <li>Plan interactive elements and their positions</li>
                    </ul>
                  </li>
                  <li>Build a KPI section with executive summary:
                    <ul>
                      <li>Create mini charts or sparklines for key metrics</li>
                      <li>Add gauge charts for performance against targets</li>
                      <li>Include trend indicators (up/down arrows with conditional formatting)</li>
                      <li>Create a summary text that updates automatically</li>
                    </ul>
                  </li>
                  <li>Integrate various chart types into a cohesive dashboard:
                    <ul>
                      <li>Add combo charts for revenue and profit trends</li>
                      <li>Include waterfall charts for financial analysis</li>
                      <li>Add scatter or bubble charts for correlation analysis</li>
                      <li>Include heat maps for product performance by region</li>
                      <li>Add a map chart for geographical performance</li>
                    </ul>
                  </li>
                  <li>Add interactive elements and navigation:
                    <ul>
                      <li>Create a control panel with slicers, dropdowns, and option buttons</li>
                      <li>Add buttons to switch between different views or time periods</li>
                      <li>Include hyperlinks to detailed analysis sheets</li>
                      <li>Create bookmarks for different dashboard configurations</li>
                    </ul>
                  </li>
                  <li>Optimize dashboard performance and appearance:
                    <ul>
                      <li>Ensure consistent formatting and color schemes</li>
                      <li>Add appropriate titles, legends, and annotations</li>
                      <li>Optimize formulas for speed (avoid volatile functions)</li>
                      <li>Create documentation for dashboard users</li>
                      <li>Test the dashboard with different data scenarios</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Advanced Charting Reference */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">Advanced Excel Chart Types</h3>
        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Standard Chart Types</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Column and Bar Charts:</strong>
                  For comparing values across categories</li>
            <li><strong>Line and Area Charts:</strong>
                  For showing trends over time</li>
            <li><strong>Pie and Doughnut Charts:</strong>
                  For showing proportions of a whole</li>
            <li><strong>Scatter Charts:</strong>
                  For showing correlation between two variables</li>
            <li><strong>Combo Charts:</strong>
                  Combining multiple chart types (e.g., columns with line)</li>
            <li><strong>Stock Charts:</strong>
                  For financial data with high-low-close values</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Specialized Chart Types</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Waterfall Charts:</strong>
                  For visualizing sequential changes leading to a total</li>
            <li><strong>Funnel Charts:</strong>
                  For visualizing stages in a process with decreasing values</li>
            <li><strong>Sunburst Charts:</strong>
                  For showing hierarchical data with nested rings</li>
            <li><strong>Treemap Charts:</strong>
                  For hierarchical data with nested rectangles</li>
            <li><strong>Box and Whisker:</strong>
                  For statistical distribution and outliers</li>
            <li><strong>Histogram:</strong>
                  For frequency distribution of data</li>
            <li><strong>Pareto Charts:</strong>
                  For highlighting the vital few versus the trivial many</li>
            <li><strong>Radar/Spider Charts:</strong>
                  For comparing multiple variables</li>
            <li><strong>Map Charts:</strong>
                  For geographical data visualization</li>
            <li><strong>Gauge Charts:</strong>
                  For showing values within ranges (custom created)</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Interactive Elements</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Form Controls:</strong>
                  Dropdown lists, checkboxes, spinners, scrollbars</li>
            <li><strong>Slicers:</strong>
                  Visual filters that narrow data displayed in charts and tables</li>
            <li><strong>Timelines:</strong>
                  Special slicers for filtering dates</li>
            <li><strong>Hyperlinks:</strong>
                  For navigation between dashboard elements</li>
            <li><strong>VBA Buttons:</strong>
                  For custom actions and interactivity</li>
            <li><strong>Conditional Formatting:</strong>
                  For dynamic visual cues based on data values</li>
            <li><strong>Data Validation:</strong>
                  For creating dependent dropdowns and input constraints</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Data Visualization Best Practices</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Choose the Right Chart Type:</strong>
                  Match the chart to your data and message</li>
            <li><strong>Simplify:</strong>
                  Remove chart junk and non-essential elements</li>
            <li><strong>Focus Attention:</strong>
                  Highlight the most important data points</li>
            <li><strong>Use Color Effectively:</strong>
                  Apply color purposefully, not decoratively</li>
            <li><strong>Label Directly:</strong>
                  Avoid legends when you can label directly</li>
            <li><strong>Show Context:</strong>
                  Include relevant comparisons and benchmarks</li>
            <li><strong>Be Consistent:</strong>
                  Use consistent scales, colors, and formats</li>
            <li><strong>Start at Zero:</strong>
                  Use zero-based scales for bar and column charts</li>
            <li><strong>Sort Data:</strong>
                  Order data logically to improve readability</li>
            <li><strong>Test for Accessibility:</strong>
                  Ensure colorblind-friendly palettes</li>
            <li><strong>Tell a Story:</strong>
                  Organize visualizations to convey a narrative</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdvancedChartingExercise;
