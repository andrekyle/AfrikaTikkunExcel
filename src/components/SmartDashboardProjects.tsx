import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Brain, AlertCircle, CheckCircle, Lightbulb, Settings, TrendingUp } from 'lucide-react';
import CopyableContent from './CopyableContent';

interface SmartDashboardProjectsProps {
  onContinue?: () => void;
}

const SmartDashboardProjects: React.FC<SmartDashboardProjectsProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <BarChart3 className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Smart Dashboard Projects</h1>
        </div>
        <p className="text-xl text-gray-600">
          Build an intelligent KPI dashboard with AI-enhanced features and automated insights
        </p>
      </div>

      {/* Project Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            Hands-on Project: Intelligent KPI Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Project Overview</h4>
            <p className="text-blue-800">
              Build a comprehensive business intelligence dashboard with AI-enhanced features, 
              automated insights, and interactive visualizations for executive decision-making.
            </p>
          </div>

          {/* Step 1: Setup Data Tables */}
          <div className="pl-4">
            <h4 className="font-semibold text-gray-900 mb-3">📊 Step 1: Setup Core Data Tables</h4>
            <p className="text-gray-700 mb-4">Create the foundation datasets for your intelligent dashboard.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-blue-900 mb-2">📋 Detailed Instructions:</h5>
              <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
                <li><strong>Open Excel</strong> and create a new workbook named "Smart_Dashboard_Project.xlsx"</li>
                <li><strong>Create three worksheets:</strong> "Sales_Data", "Regional_Data", and "Product_Data"</li>
                <li><strong>Copy each dataset below</strong> into its respective worksheet (use Ctrl+C to copy, Ctrl+V to paste)</li>
                <li><strong>Format as Tables:</strong> Select each dataset → Insert → Table → Check "My table has headers"</li>
                <li><strong>Name your tables:</strong> "SalesPerformance", "RegionalPerformance", "ProductPerformance"</li>
                <li><strong>Apply formatting:</strong> Currency columns (Revenue, Target) → Format Cells → Currency → South African Rand</li>
                <li><strong>Percentage columns:</strong> Select percentage columns → Format Cells → Percentage → 1 decimal place</li>
                <li><strong>Save your workbook</strong> before proceeding to Step 2</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Sales Performance Data</h5>
                <CopyableContent
                  label="Sales KPI Data"
                  content={`Month	Revenue	Target	Units_Sold	Conversion_Rate	Customer_Acquisition	Customer_Retention
Jan 2024	R44,100,000	R39,600,000	4,890	3.2%	1,250	94.5%
Feb 2024	R39,240,000	R39,600,000	4,360	2.8%	1,100	93.8%
Mar 2024	R52,020,000	R43,200,000	5,780	3.8%	1,450	95.2%
Apr 2024	R47,700,000	R43,200,000	5,300	3.5%	1,320	94.1%
May 2024	R56,160,000	R46,800,000	6,240	4.1%	1,560	96.3%
Jun 2024	R53,640,000	R46,800,000	5,960	3.9%	1,490	95.7%
Jul 2024	R60,300,000	R50,400,000	6,700	4.3%	1,675	97.1%
Aug 2024	R57,240,000	R50,400,000	6,360	4.0%	1,590	96.8%
Sep 2024	R52,560,000	R48,600,000	5,840	3.7%	1,460	95.4%
Oct 2024	R62,100,000	R54,000,000	6,900	4.5%	1,725	97.8%
Nov 2024	R66,240,000	R57,600,000	7,360	4.8%	1,840	98.2%
Dec 2024	R74,160,000	R63,000,000	8,240	5.2%	2,060	98.9%`}
                />
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">Regional Performance Data</h5>
                <CopyableContent
                  label="Regional KPI Data"
                  content={`Region	Q4_Revenue	Q4_Target	Growth_Rate	Market_Share	Customer_Satisfaction	Sales_Team_Size
North America	R58,500,000	R54,000,000	12.5%	28.5%	4.6	45
Europe	R52,020,000	R50,400,000	8.7%	22.3%	4.4	38
Asia Pacific	R44,100,000	R39,600,000	15.2%	18.7%	4.5	32
Latin America	R30,240,000	R27,000,000	18.9%	12.4%	4.3	25
Middle East	R23,760,000	R21,600,000	22.1%	9.8%	4.2	18
Africa	R17,640,000	R14,400,000	28.5%	8.3%	4.1	15`}
                />
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">Product Performance Data</h5>
                <CopyableContent
                  label="Product KPI Data"
                  content={`Product_Category	Revenue	Profit_Margin	Units_Sold	Return_Rate	Customer_Rating	Inventory_Turnover
Enterprise Software	R152,100,000	42.5%	1,690	2.1%	4.7	8.2
Cloud Services	R124,020,000	38.2%	2,756	1.8%	4.6	12.5
Mobile Apps	R76,140,000	35.8%	8,460	3.2%	4.4	15.3
Consulting Services	R66,240,000	55.7%	736	1.2%	4.8	N/A
Training Programs	R38,160,000	48.3%	4,240	2.8%	4.5	N/A
Hardware Solutions	R34,020,000	28.9%	945	4.1%	4.2	6.7`}
                />
              </div>
            </div>
          </div>

          {/* Step 2: Create Executive Summary */}
          <div className="pl-4">
            <h4 className="font-semibold text-gray-900 mb-3">📈 Step 2: Build Executive Summary Dashboard</h4>
            <p className="text-gray-700 mb-4">Create the top-level KPI overview with AI-enhanced insights.</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-green-900 mb-2">📋 Detailed Instructions:</h5>
              <ol className="list-decimal list-inside space-y-2 text-sm text-green-800">
                <li><strong>Create Dashboard Sheet:</strong> Add new worksheet named "Executive_Dashboard"</li>
                <li><strong>Setup KPI Cards:</strong> In cells A1:D4, create 4 summary cards with borders and colors</li>
                <li><strong>Add Formulas:</strong> Copy the formulas below into cells B2, B3, B4 for calculations</li>
                <li><strong>Create Charts:</strong> Insert → Charts → Line Chart for revenue trends (E1:L15)</li>
                <li><strong>Add Slicers:</strong> Insert → Slicer → Connect to your data tables for filtering</li>
                <li><strong>Format Dashboard:</strong> Apply consistent colors, fonts, and spacing</li>
                <li><strong>Test Interactivity:</strong> Click slicers to verify charts and KPIs update dynamically</li>
                <li><strong>Add Conditional Formatting:</strong> Home → Conditional Formatting → Color Scales for performance indicators</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-800 mb-2">Key Metrics Setup</h5>
                <p className="text-sm text-green-700 mb-3">Create these calculated fields in your dashboard:</p>
                
                <CopyableContent
                  label="Executive KPI Formulas"
                  content={`// Revenue Performance
Total_Revenue: =SUM(Sales_Data[Revenue])
Revenue_vs_Target: =(SUM(Sales_Data[Revenue])/SUM(Sales_Data[Target]))-1
YTD_Growth: =(SUM(Sales_Data[Revenue])-SUM(Previous_Year[Revenue]))/SUM(Previous_Year[Revenue])

// Customer Metrics
Avg_Conversion_Rate: =AVERAGE(Sales_Data[Conversion_Rate])
Customer_Lifetime_Value: =AVERAGE(Sales_Data[Revenue])/AVERAGE(Sales_Data[Customer_Acquisition])*12
Retention_Trend: =TREND(Sales_Data[Customer_Retention],ROW(Sales_Data[Customer_Retention]))

// AI-Enhanced Insights
Performance_Score: =IF(Revenue_vs_Target>0.1,"Excellent",IF(Revenue_vs_Target>0,"Good",IF(Revenue_vs_Target>-0.05,"Warning","Critical")))
Forecast_Next_Month: =FORECAST.LINEAR(MONTH(TODAY())+1,Sales_Data[Revenue],ROW(Sales_Data[Revenue]))
Anomaly_Detection: =IF(ABS(Sales_Data[Revenue]-AVERAGE(Sales_Data[Revenue]))>2*STDEV(Sales_Data[Revenue]),"Anomaly","Normal")`}
                />
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-800 mb-2">Dashboard Layout Structure</h5>
                <div className="text-sm text-blue-700 space-y-2">
                  <p><strong>Row 1:</strong> Executive Summary Cards (Revenue, Growth, Customers, Performance Score)</p>
                  <p><strong>Row 2:</strong> Trend Charts (Monthly Revenue, Conversion Rate, Customer Metrics)</p>
                  <p><strong>Row 3:</strong> Regional Performance Heatmap and Top Products</p>
                  <p><strong>Row 4:</strong> AI Insights Panel and Alerts Section</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Implement Smart Visualizations */}
          <div className="pl-4">
            <h4 className="font-semibold text-gray-900 mb-3">🎨 Step 3: Create Smart Visualizations</h4>
            <p className="text-gray-700 mb-4">Build dynamic charts with conditional formatting and AI insights.</p>
            
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-purple-900 mb-2">📋 Detailed Instructions:</h5>
              <ol className="list-decimal list-inside space-y-2 text-sm text-purple-800">
                <li><strong>Create Charts Sheet:</strong> Add new worksheet named "Smart_Charts"</li>
                <li><strong>Revenue Trend Chart:</strong> Select Sales data → Insert → Line Chart → Position at A1:H15</li>
                <li><strong>Add Trendlines:</strong> Right-click chart → Add Trendline → Linear → Forecast 3 periods forward</li>
                <li><strong>Regional Heatmap:</strong> Select Regional data → Home → Conditional Formatting → Color Scales</li>
                <li><strong>Product Performance:</strong> Insert → Column Chart → Add data labels and conditional colors</li>
                <li><strong>Interactive Slicers:</strong> Insert → Slicer → Connect to all charts for filtering</li>
                <li><strong>Format Charts:</strong> Apply consistent colors, fonts, and professional styling</li>
                <li><strong>Test Interactivity:</strong> Use slicers to filter data and verify charts update automatically</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h5 className="font-medium text-purple-800 mb-2">Revenue Trend Chart with AI Predictions</h5>
                <CopyableContent
                  label="Chart Setup Instructions"
                  content={`1. Select your Sales Performance Data (A1:G13)
2. Insert > Charts > Line Chart with Markers
3. Add Forecast Trendline:
   - Right-click data series > Add Trendline
   - Select Linear, check "Display Equation" and "Display R-squared"
   - Set "Forward" periods to 3 months
4. Format with conditional colors:
   - Above target: Green (#10B981)
   - Below target: Red (#EF4444)
   - Within 5% of target: Orange (#F59E0B)
5. Add data labels showing variance from target`}
                />
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg">
                <h5 className="font-medium text-indigo-800 mb-2">Regional Performance Heatmap</h5>
                <CopyableContent
                  label="Heatmap Creation Steps"
                  content={`1. Select Regional Performance Data (A1:G7)
2. Home > Conditional Formatting > Color Scales
3. Create custom 3-color scale:
   - Minimum (Red): Bottom 20% performers
   - Midpoint (Yellow): Middle 60% performers  
   - Maximum (Green): Top 20% performers
4. Add data bars for Growth_Rate column
5. Insert sparklines for trend visualization:
   - Select empty column next to data
   - Insert > Sparklines > Line
   - Use quarterly data for each region`}
                />
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <h5 className="font-medium text-orange-800 mb-2">Product Performance Matrix</h5>
                <CopyableContent
                  label="Matrix Visualization Setup"
                  content={`1. Create scatter plot with Product data:
   - X-axis: Revenue (size of market)
   - Y-axis: Profit_Margin (profitability)
   - Bubble size: Units_Sold (volume)
   - Color: Customer_Rating (satisfaction)
2. Add quadrant lines:
   - Vertical line at average revenue
   - Horizontal line at average profit margin
3. Label quadrants:
   - Top-right: "Stars" (High revenue, High margin)
   - Top-left: "Cash Cows" (Low revenue, High margin)
   - Bottom-right: "Question Marks" (High revenue, Low margin)
   - Bottom-left: "Dogs" (Low revenue, Low margin)`}
                />
              </div>
            </div>
          </div>

          {/* Step 4: Add AI-Powered Insights */}
          <div className="pl-4">
            <h4 className="font-semibold text-gray-900 mb-3">🤖 Step 4: Implement AI-Powered Insights</h4>
            <p className="text-gray-700 mb-4">Add intelligent analysis and automated recommendations.</p>
            
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-red-900 mb-2">📋 Detailed Instructions:</h5>
              <ol className="list-decimal list-inside space-y-2 text-sm text-red-800">
                <li><strong>Create AI Insights Sheet:</strong> Add new worksheet named "AI_Insights"</li>
                <li><strong>Setup Insight Panels:</strong> Create 4 sections: Top Performers, Trends, Alerts, Recommendations</li>
                <li><strong>Add Smart Formulas:</strong> Copy the AI formulas below into designated cells</li>
                <li><strong>Create Alert System:</strong> Use conditional formatting to highlight critical metrics</li>
                <li><strong>Build Recommendation Engine:</strong> Add IF statements for automated suggestions</li>
                <li><strong>Format Insight Cards:</strong> Apply borders, colors, and icons for visual appeal</li>
                <li><strong>Link to Dashboard:</strong> Create hyperlinks between insights and main dashboard</li>
                <li><strong>Test AI Logic:</strong> Change data values to verify insights update automatically</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h5 className="font-medium text-red-800 mb-2">Automated Insights Panel</h5>
                <CopyableContent
                  label="AI Insights Formulas"
                  content={`// Top Performer Identification
Best_Region: =INDEX(Regional_Data[Region],MATCH(MAX(Regional_Data[Growth_Rate]),Regional_Data[Growth_Rate],0))
Best_Product: =INDEX(Product_Data[Product_Category],MATCH(MAX(Product_Data[Revenue]),Product_Data[Revenue],0))

// Trend Analysis
Revenue_Trend: =IF(SLOPE(Sales_Data[Revenue],ROW(Sales_Data[Revenue]))>0,"Increasing","Decreasing")
Seasonality_Factor: =AVERAGE(IF(MONTH(Sales_Data[Month])=MONTH(TODAY()),Sales_Data[Revenue]))/AVERAGE(Sales_Data[Revenue])

// Risk Assessment
At_Risk_Products: =COUNTIFS(Product_Data[Return_Rate],">3%",Product_Data[Customer_Rating],"<4.5")
Underperforming_Regions: =COUNTIF(Regional_Data[Growth_Rate],"<10%")

// Recommendations
Action_Priority: =IF(Revenue_vs_Target<-0.1,"Immediate Action Required",IF(Revenue_vs_Target<0,"Monitor Closely","Continue Current Strategy"))
Focus_Area: =IF(AVERAGE(Sales_Data[Conversion_Rate])<3.5%,"Improve Conversion",IF(AVERAGE(Sales_Data[Customer_Retention])<95%,"Focus on Retention","Expand Market Share"))`}
                />
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h5 className="font-medium text-yellow-800 mb-2">Smart Alerts System</h5>
                <CopyableContent
                  label="Alert Configuration"
                  content={`// Revenue Alerts
Revenue_Alert: =IF(Sales_Data[Revenue]<Sales_Data[Target]*0.9,"🔴 Revenue Below 90% of Target","")
Growth_Alert: =IF(YTD_Growth<0.05,"⚠️ Growth Rate Below 5%","")

// Customer Alerts  
Retention_Alert: =IF(Sales_Data[Customer_Retention]<94%,"🔴 Customer Retention Declining","")
Conversion_Alert: =IF(Sales_Data[Conversion_Rate]<AVERAGE(Sales_Data[Conversion_Rate])*0.8,"⚠️ Conversion Rate Drop","")

// Product Alerts
Quality_Alert: =IF(Product_Data[Return_Rate]>3%,"🔴 High Return Rate: "&Product_Data[Product_Category],"")
Inventory_Alert: =IF(Product_Data[Inventory_Turnover]<6,"⚠️ Slow Moving Inventory: "&Product_Data[Product_Category],"")

// Opportunity Alerts
Growth_Opportunity: =IF(Regional_Data[Growth_Rate]>20%,"🚀 High Growth Region: "&Regional_Data[Region],"")
Market_Opportunity: =IF(Regional_Data[Market_Share]<15%,"📈 Market Share Opportunity: "&Regional_Data[Region],"")`}
                />
              </div>
            </div>
          </div>

          {/* Step 5: Create Interactive Controls */}
          <div className="pl-4">
            <h4 className="font-semibold text-gray-900 mb-3">⚙️ Step 5: Add Interactive Dashboard Controls</h4>
            <p className="text-gray-700 mb-4">Implement filters, slicers, and dynamic parameters for user interaction.</p>
            
            <div className="bg-indigo-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-indigo-900 mb-2">📋 Detailed Instructions:</h5>
              <ol className="list-decimal list-inside space-y-2 text-sm text-indigo-800">
                <li><strong>Add Control Panel:</strong> Create section on Executive Dashboard for interactive controls</li>
                <li><strong>Insert Time Slicer:</strong> Insert → Slicer → Month → Connect to all tables</li>
                <li><strong>Create Region Filter:</strong> Data → Data Validation → List → Source: Regional_Data[Region]</li>
                <li><strong>Add Product Slicer:</strong> Insert → Slicer → Product_Category → Enable multi-select</li>
                <li><strong>Setup Threshold Controls:</strong> Create input cells for performance thresholds</li>
                <li><strong>Link Controls to Charts:</strong> Update chart data sources to reference filter cells</li>
                <li><strong>Format Controls:</strong> Apply consistent styling and clear labels</li>
                <li><strong>Test Functionality:</strong> Verify all filters update charts and KPIs dynamically</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h5 className="font-medium text-indigo-800 mb-2">Dashboard Filters Setup</h5>
                <CopyableContent
                  label="Interactive Controls Configuration"
                  content={`1. Time Period Slicer:
   - Insert > Slicer > Month
   - Connect to all data tables
   - Format with timeline style

2. Region Filter Dropdown:
   - Data > Data Validation > List
   - Source: Regional_Data[Region]
   - Use in FILTER formulas for dynamic data

3. Product Category Filter:
   - Insert > Slicer > Product_Category  
   - Multi-select enabled
   - Connect to product visualizations

4. Performance Threshold Controls:
   - Create input cells for:
     * Target Achievement Threshold (default: 100%)
     * Growth Rate Threshold (default: 10%)
     * Customer Satisfaction Threshold (default: 4.5)
   - Use in conditional formatting rules

5. Dynamic Date Range:
   - Start Date: Data validation with date constraint
   - End Date: Data validation with date constraint
   - Use in all time-based calculations`}
                />
              </div>

              <div className="p-4 bg-teal-50 rounded-lg">
                <h5 className="font-medium text-teal-800 mb-2">Dynamic Data Formulas</h5>
                <CopyableContent
                  label="Interactive Formula Examples"
                  content={`// Filtered Revenue Calculation
Filtered_Revenue: =SUMIFS(Sales_Data[Revenue],Sales_Data[Month],">="&Start_Date,Sales_Data[Month],"<="&End_Date)

// Dynamic Regional Performance
Selected_Region_Data: =FILTER(Regional_Data,Regional_Data[Region]=Region_Filter)

// Conditional Product Display
Filtered_Products: =FILTER(Product_Data,Product_Data[Customer_Rating]>=Rating_Threshold)

// Dynamic KPI Calculation
Dynamic_Conversion: =AVERAGEIFS(Sales_Data[Conversion_Rate],Sales_Data[Month],">="&Start_Date,Sales_Data[Month],"<="&End_Date)

// Interactive Benchmark Comparison
Performance_vs_Benchmark: =IF(Filtered_Revenue>Benchmark_Revenue,"Above Benchmark","Below Benchmark")`}
                />
              </div>
            </div>
          </div>

          {/* Step 6: Final Dashboard Assembly */}
          <div className="pl-4">
            <h4 className="font-semibold text-gray-900 mb-3">🎯 Step 6: Assemble Complete Dashboard</h4>
            <p className="text-gray-700 mb-4">Combine all elements into a cohesive, professional dashboard.</p>
            
            <div className="bg-emerald-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-emerald-900 mb-2">📋 Detailed Instructions:</h5>
              <ol className="list-decimal list-inside space-y-2 text-sm text-emerald-800">
                <li><strong>Create Master Dashboard:</strong> Add new worksheet named "Master_Dashboard"</li>
                <li><strong>Design Layout Grid:</strong> Plan 6 sections: Header, KPIs, Charts, Insights, Controls, Footer</li>
                <li><strong>Copy Key Elements:</strong> Link charts and KPIs from other sheets using Paste Special → Link</li>
                <li><strong>Add Navigation:</strong> Insert hyperlinks to detailed sheets and data sources</li>
                <li><strong>Apply Branding:</strong> Add company colors, fonts, and logo for professional appearance</li>
                <li><strong>Test All Features:</strong> Verify filters, charts, and calculations work correctly</li>
                <li><strong>Add Documentation:</strong> Include user guide and data source information</li>
                <li><strong>Final Review:</strong> Check formatting, alignment, and overall user experience</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-lg">
                <h5 className="font-medium text-emerald-800 mb-2">Dashboard Layout Checklist</h5>
                <div className="text-sm text-emerald-700 space-y-2">
                  <p>✅ <strong>Header Section:</strong> Company logo, dashboard title, last updated timestamp</p>
                  <p>✅ <strong>KPI Cards:</strong> Revenue, growth, customers, performance score with trend indicators</p>
                  <p>✅ <strong>Main Charts:</strong> Revenue trend, regional heatmap, product matrix</p>
                  <p>✅ <strong>Insights Panel:</strong> AI recommendations, alerts, top performers</p>
                  <p>✅ <strong>Controls Panel:</strong> Filters, date range, threshold settings</p>
                  <p>✅ <strong>Footer:</strong> Data sources, refresh status, contact information</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-800 mb-2">Professional Formatting Guidelines</h5>
                <CopyableContent
                  label="Dashboard Styling Standards"
                  content={`Color Scheme:
- Primary: #2563EB (Blue)
- Success: #10B981 (Green) 
- Warning: #F59E0B (Orange)
- Danger: #EF4444 (Red)
- Neutral: #6B7280 (Gray)

Typography:
- Headers: Arial Bold, 14-16pt
- KPI Values: Arial Bold, 18-24pt
- Labels: Arial Regular, 10-12pt
- Insights: Arial Italic, 11pt

Spacing:
- Margin between sections: 20px
- Card padding: 15px
- Chart margins: 10px
- Grid alignment: 5px snap

Conditional Formatting:
- Above target: Green background, white text
- Below target: Red background, white text  
- Warning zone: Orange background, black text
- Neutral: Light gray background, dark text`}
                />
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h5 className="font-medium text-purple-800 mb-2">Dashboard Testing Checklist</h5>
                <div className="text-sm text-purple-700 space-y-1">
                  <p>🔍 Verify all formulas calculate correctly</p>
                  <p>📊 Test all interactive filters and slicers</p>
                  <p>🎨 Check conditional formatting rules</p>
                  <p>📱 Ensure responsive design on different screen sizes</p>
                  <p>⚡ Validate data refresh functionality</p>
                  <p>🚨 Test alert thresholds and notifications</p>
                  <p>📈 Confirm chart data accuracy</p>
                  <p>🎯 Review AI insights for relevance</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            Best Practices for Smart Dashboards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-800 mb-3">✅ Do's</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Use consistent color schemes and visual hierarchy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Implement automated data refresh and real-time updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Provide clear context and explanations for metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Include trend indicators and comparative analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Design for mobile and tablet viewing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Test with real users and gather feedback</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-3">❌ Don'ts</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Overcrowd the dashboard with too many metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Use inconsistent color coding or formatting</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Display data without proper context or benchmarks</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Ignore mobile responsiveness and accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Create static dashboards without interactivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Skip user testing and stakeholder feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
              <p className="text-gray-700"><strong>Smart dashboards combine data visualization with AI insights</strong> to provide actionable business intelligence beyond traditional reporting.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
              <p className="text-gray-700"><strong>Visual hierarchy and user-centric design</strong> ensure that the most important information is immediately accessible to decision-makers.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
              <p className="text-gray-700"><strong>Automated alerts and anomaly detection</strong> enable proactive management and rapid response to business changes.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">4</div>
              <p className="text-gray-700"><strong>Interactive elements and dynamic filtering</strong> allow users to explore data and discover insights tailored to their specific needs.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">5</div>
              <p className="text-gray-700"><strong>AI-powered recommendations and predictive analytics</strong> transform dashboards from reactive reporting tools into strategic planning platforms.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      {onContinue && (
        <div className="flex justify-center">
          <Button onClick={onContinue} className="flex items-center gap-2">
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default SmartDashboardProjects;
