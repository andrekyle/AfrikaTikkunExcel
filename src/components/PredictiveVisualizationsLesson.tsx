import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, BarChart3, LineChart, PieChart, ArrowRight, Target, Brain, Zap } from 'lucide-react';
import CopyableContent from './CopyableContent';

interface PredictiveVisualizationsLessonProps {
  onContinue?: () => void;
}

const PredictiveVisualizationsLesson: React.FC<PredictiveVisualizationsLessonProps> = ({ onContinue }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <TrendingUp className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Lesson 3: Predictive Visualizations</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create charts that show forecasts and trends using advanced Excel visualization techniques
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
                <li>• Master Excel forecasting functions (FORECAST, TREND, GROWTH)</li>
                <li>• Create dynamic trendlines and prediction intervals</li>
                <li>• Build interactive forecast dashboards</li>
                <li>• Implement moving averages and seasonal adjustments</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Business Applications</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Revenue and sales forecasting</li>
                <li>• Inventory demand prediction</li>
                <li>• Customer growth projections</li>
                <li>• Market trend analysis</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            Hands-on Project: Predictive Analytics Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Project Overview</h4>
            <p className="text-blue-800">
              Build a comprehensive predictive analytics dashboard with multiple forecasting models, 
              trend analysis, and interactive visualizations for business decision-making.
            </p>
          </div>

          {/* Project 1: Sales Revenue Forecasting */}
          <div className="pl-4">
            <h4 className="font-semibold text-gray-900 mb-3">📈 Project 1: Sales Revenue Forecasting Dashboard</h4>
            <p className="text-gray-700 mb-4">Create a comprehensive sales forecasting system with multiple prediction models.</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-green-900 mb-2">📋 Detailed Instructions:</h5>
              <ol className="list-decimal list-inside space-y-2 text-sm text-green-800">
                <li><strong>Create Workbook:</strong> Open Excel and create "Predictive_Analytics.xlsx"</li>
                <li><strong>Setup Worksheets:</strong> Create "Sales_Forecast", "Trend_Analysis", and "Dashboard"</li>
                <li><strong>Import Historical Data:</strong> Copy the sales data below into "Sales_Forecast" sheet</li>
                <li><strong>Create Base Charts:</strong> Insert → Line Chart for historical revenue trends</li>
                <li><strong>Add Forecast Formulas:</strong> Use FORECAST.LINEAR for 6-month predictions</li>
                <li><strong>Build Trendlines:</strong> Right-click chart → Add Trendline → Linear with forecast periods</li>
                <li><strong>Add Confidence Intervals:</strong> Calculate upper and lower prediction bounds</li>
                <li><strong>Create Interactive Controls:</strong> Add slicers for time periods and forecast methods</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Historical Sales Data (24 Months)</h5>
                <CopyableContent
                  label="Sales Revenue Data"
                  content={`Month	Revenue	Units_Sold	Marketing_Spend	Customer_Count	Avg_Order_Value
Jan 2023	R4,250,000	8,500	R425,000	3,400	R500
Feb 2023	R3,890,000	7,780	R389,000	3,112	R500
Mar 2023	R4,675,000	9,350	R467,500	3,740	R500
Apr 2023	R4,420,000	8,840	R442,000	3,536	R500
May 2023	R5,125,000	10,250	R512,500	4,100	R500
Jun 2023	R4,980,000	9,960	R498,000	3,984	R500
Jul 2023	R5,450,000	10,900	R545,000	4,360	R500
Aug 2023	R5,230,000	10,460	R523,000	4,184	R500
Sep 2023	R4,890,000	9,780	R489,000	3,912	R500
Oct 2023	R5,675,000	11,350	R567,500	4,540	R500
Nov 2023	R6,120,000	12,240	R612,000	4,896	R500
Dec 2023	R6,890,000	13,780	R689,000	5,512	R500
Jan 2024	R5,340,000	10,680	R534,000	4,272	R500
Feb 2024	R4,950,000	9,900	R495,000	3,960	R500
Mar 2024	R5,780,000	11,560	R578,000	4,624	R500
Apr 2024	R5,520,000	11,040	R552,000	4,416	R500
May 2024	R6,425,000	12,850	R642,500	5,140	R500
Jun 2024	R6,180,000	12,360	R618,000	4,944	R500
Jul 2024	R6,750,000	13,500	R675,000	5,400	R500
Aug 2024	R6,530,000	13,060	R653,000	5,224	R500
Sep 2024	R6,190,000	12,380	R619,000	4,952	R500
Oct 2024	R6,975,000	13,950	R697,500	5,580	R500
Nov 2024	R7,420,000	14,840	R742,000	5,936	R500
Dec 2024	R8,190,000	16,380	R819,000	6,552	R500`}
                />
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">Forecasting Formulas</h5>
                <CopyableContent
                  label="Excel Forecast Formulas"
                  content={`// Linear Forecast (Next 6 Months)
=FORECAST.LINEAR(ROW(A26:A31),Revenue_Range,Month_Numbers)

// Exponential Smoothing
=FORECAST.ETS(ROW(A26:A31),Revenue_Range,Date_Range,1,1,1)

// Moving Average Forecast
=AVERAGE(OFFSET(Revenue_Range,-3,0,3,1))

// Seasonal Adjustment
=Revenue * (1 + SEASONAL_FACTOR)

// Confidence Intervals
Upper_Bound: =Forecast_Value + (1.96 * STDEV(Historical_Revenue))
Lower_Bound: =Forecast_Value - (1.96 * STDEV(Historical_Revenue))

// Growth Rate Calculation
Monthly_Growth: =(Current_Month/Previous_Month)-1
Annual_Growth: =POWER((Latest_Month/First_Month),(1/2))-1`}
                />
              </div>
            </div>
          </div>

          {/* Project 2: Inventory Demand Prediction */}
          <div className="pl-4">
            <h4 className="font-semibold text-gray-900 mb-3">📦 Project 2: Inventory Demand Prediction System</h4>
            <p className="text-gray-700 mb-4">Build predictive models for inventory management and demand forecasting.</p>
            
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-purple-900 mb-2">📋 Detailed Instructions:</h5>
              <ol className="list-decimal list-inside space-y-2 text-sm text-purple-800">
                <li><strong>Create Inventory Sheet:</strong> Add "Inventory_Forecast" worksheet</li>
                <li><strong>Setup Product Data:</strong> Copy inventory data below with demand history</li>
                <li><strong>Calculate Seasonality:</strong> Use seasonal indices for demand patterns</li>
                <li><strong>Build Demand Charts:</strong> Create combo charts showing actual vs predicted demand</li>
                <li><strong>Add Safety Stock:</strong> Calculate buffer inventory levels</li>
                <li><strong>Create Reorder Alerts:</strong> Use conditional formatting for low stock warnings</li>
                <li><strong>Build Forecast Matrix:</strong> Show predictions for multiple products</li>
                <li><strong>Add Scenario Analysis:</strong> Create best/worst case demand scenarios</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Product Demand History (12 Months)</h5>
                <CopyableContent
                  label="Inventory Demand Data"
                  content={`Product_ID	Product_Name	Jan_Demand	Feb_Demand	Mar_Demand	Apr_Demand	May_Demand	Jun_Demand	Jul_Demand	Aug_Demand	Sep_Demand	Oct_Demand	Nov_Demand	Dec_Demand	Unit_Cost	Selling_Price
P001	Enterprise Software Licenses	450	420	580	550	650	620	720	690	640	750	820	920	R2,500	R4,500
P002	Cloud Storage Plans	1,200	1,150	1,380	1,320	1,450	1,400	1,520	1,480	1,420	1,580	1,650	1,780	R150	R300
P003	Mobile App Subscriptions	2,800	2,650	3,200	3,100	3,400	3,250	3,600	3,450	3,300	3,750	3,900	4,200	R45	R99
P004	Consulting Hours	180	170	220	210	240	230	260	250	240	280	300	320	R850	R1,500
P005	Training Modules	850	800	950	920	1,020	980	1,080	1,040	1,000	1,150	1,200	1,300	R125	R250
P006	Hardware Solutions	320	300	380	360	400	380	420	410	390	450	480	520	R1,200	R2,200
P007	Support Packages	650	620	750	720	800	770	850	820	780	900	950	1,020	R200	R400
P008	Analytics Tools	280	260	320	310	340	330	360	350	340	380	400	430	R750	R1,350`}
                />
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">Demand Forecasting Formulas</h5>
                <CopyableContent
                  label="Inventory Prediction Formulas"
                  content={`// Seasonal Demand Forecast
=AVERAGE(Historical_Demand) * Seasonal_Index * Growth_Factor

// Safety Stock Calculation
=SQRT(Lead_Time) * STDEV(Daily_Demand) * Service_Level_Factor

// Reorder Point
=Average_Daily_Demand * Lead_Time_Days + Safety_Stock

// Economic Order Quantity (EOQ)
=SQRT((2 * Annual_Demand * Ordering_Cost) / Holding_Cost_Per_Unit)

// Demand Variability
=STDEV(Monthly_Demand) / AVERAGE(Monthly_Demand)

// Forecast Accuracy
=1 - (ABS(Actual_Demand - Forecasted_Demand) / Actual_Demand)

// Inventory Turnover
=Annual_Demand * Unit_Cost / Average_Inventory_Value

// Stock Days
=Current_Stock / Average_Daily_Demand`}
                />
              </div>
            </div>
          </div>

          {/* Project 3: Customer Growth Projection */}
          <div className="pl-4">
            <h4 className="font-semibold text-gray-900 mb-3">👥 Project 3: Customer Growth Projection Dashboard</h4>
            <p className="text-gray-700 mb-4">Create predictive models for customer acquisition and lifetime value forecasting.</p>
            
            <div className="bg-orange-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-orange-900 mb-2">📋 Detailed Instructions:</h5>
              <ol className="list-decimal list-inside space-y-2 text-sm text-orange-800">
                <li><strong>Create Customer Sheet:</strong> Add "Customer_Forecast" worksheet</li>
                <li><strong>Setup Growth Data:</strong> Copy customer acquisition and retention data</li>
                <li><strong>Calculate Cohort Analysis:</strong> Track customer behavior by acquisition month</li>
                <li><strong>Build Growth Charts:</strong> Create waterfall charts for customer journey</li>
                <li><strong>Add LTV Calculations:</strong> Predict customer lifetime value</li>
                <li><strong>Create Churn Models:</strong> Forecast customer retention rates</li>
                <li><strong>Build Acquisition Funnel:</strong> Visualize conversion rates and predictions</li>
                <li><strong>Add Scenario Planning:</strong> Model different growth strategies</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Customer Growth Metrics (18 Months)</h5>
                <CopyableContent
                  label="Customer Growth Data"
                  content={`Month	New_Customers	Churned_Customers	Total_Active	Monthly_Revenue	Avg_Revenue_Per_Customer	Marketing_Cost	Acquisition_Cost
Jul 2023	1,250	85	8,450	R4,225,000	R500	R375,000	R300
Aug 2023	1,180	92	9,538	R4,769,000	R500	R354,000	R300
Sep 2023	1,320	105	10,753	R5,376,500	R500	R396,000	R300
Oct 2023	1,420	118	12,055	R6,027,500	R500	R426,000	R300
Nov 2023	1,380	125	13,310	R6,655,000	R500	R414,000	R300
Dec 2023	1,520	142	14,688	R7,344,000	R500	R456,000	R300
Jan 2024	1,180	156	15,712	R7,856,000	R500	R354,000	R300
Feb 2024	1,120	168	16,664	R8,332,000	R500	R336,000	R300
Mar 2024	1,350	185	17,829	R8,914,500	R500	R405,000	R300
Apr 2024	1,280	195	18,914	R9,457,000	R500	R384,000	R300
May 2024	1,450	208	20,156	R10,078,000	R500	R435,000	R300
Jun 2024	1,380	225	21,311	R10,655,500	R500	R414,000	R300
Jul 2024	1,520	238	22,593	R11,296,500	R500	R456,000	R300
Aug 2024	1,420	252	23,761	R11,880,500	R500	R426,000	R300
Sep 2024	1,380	265	24,876	R12,438,000	R500	R414,000	R300
Oct 2024	1,520	285	26,111	R13,055,500	R500	R456,000	R300
Nov 2024	1,580	298	27,393	R13,696,500	R500	R474,000	R300
Dec 2024	1,650	315	28,728	R14,364,000	R500	R495,000	R300`}
                />
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">Customer Prediction Formulas</h5>
                <CopyableContent
                  label="Customer Growth Formulas"
                  content={`// Customer Lifetime Value (CLV)
=Average_Monthly_Revenue * Gross_Margin * (1 / Monthly_Churn_Rate)

// Churn Rate Prediction
=Churned_Customers / Total_Active_Customers

// Net Customer Growth
=New_Customers - Churned_Customers

// Customer Acquisition Cost (CAC)
=Marketing_Cost / New_Customers

// LTV/CAC Ratio
=Customer_Lifetime_Value / Customer_Acquisition_Cost

// Monthly Recurring Revenue (MRR) Forecast
=Previous_MRR + (New_Customers * ARPU) - (Churned_Customers * ARPU)

// Cohort Retention Rate
=Customers_Active_Month_N / Customers_Acquired_Month_0

// Revenue Growth Rate
=(Current_Month_Revenue - Previous_Month_Revenue) / Previous_Month_Revenue

// Customer Payback Period
=Customer_Acquisition_Cost / Monthly_Revenue_Per_Customer`}
                />
              </div>
            </div>
          </div>

          {/* Advanced Visualization Techniques */}
          <div className="pl-4">
            <h4 className="font-semibold text-gray-900 mb-3">🎨 Advanced Visualization Techniques</h4>
            <p className="text-gray-700 mb-4">Master advanced charting techniques for predictive analytics.</p>
            
            <div className="bg-indigo-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-indigo-900 mb-2">📋 Detailed Instructions:</h5>
              <ol className="list-decimal list-inside space-y-2 text-sm text-indigo-800">
                <li><strong>Combo Charts:</strong> Insert → Combo Chart → Combine actual data with forecasts</li>
                <li><strong>Error Bars:</strong> Add error bars to show confidence intervals</li>
                <li><strong>Dynamic Ranges:</strong> Use OFFSET and INDIRECT for auto-updating charts</li>
                <li><strong>Conditional Formatting:</strong> Apply color scales for trend indicators</li>
                <li><strong>Sparklines:</strong> Insert → Sparklines for mini trend charts</li>
                <li><strong>Interactive Elements:</strong> Add form controls for scenario selection</li>
                <li><strong>Dashboard Assembly:</strong> Combine all charts into master dashboard</li>
                <li><strong>Performance Optimization:</strong> Use efficient formulas and data structures</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Chart Configuration Guide</h5>
                <CopyableContent
                  label="Advanced Chart Setup"
                  content={`// Dynamic Chart Range
Chart_Data_Range: =OFFSET(Data_Start,0,0,COUNTA(Date_Column),COUNTA(Header_Row))

// Forecast vs Actual Series
Actual_Series: =Historical_Data[Revenue]
Forecast_Series: =IF(Date_Column>TODAY(),Forecast_Formula,"")

// Confidence Interval Bands
Upper_Band: =Forecast_Value + Confidence_Interval
Lower_Band: =Forecast_Value - Confidence_Interval

// Trend Indicator Colors
=IF(Current_Value>Previous_Value,"Green","Red")

// Performance vs Target
=IF(Actual_Revenue>Target_Revenue,"Above Target","Below Target")

// Seasonal Highlighting
=IF(MONTH(Date_Column) IN {11,12,1},"Peak Season","Regular Season")

// Data Quality Indicators
=IF(ISBLANK(Data_Point),"Missing Data",IF(Data_Point<0,"Invalid","Valid"))`}
                />
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">Dashboard Best Practices</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h6 className="font-semibold text-gray-800">Design Principles</h6>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Use consistent color schemes for data series</li>
                      <li>• Clearly distinguish actual vs predicted data</li>
                      <li>• Include confidence intervals for forecasts</li>
                      <li>• Add interactive filters and controls</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h6 className="font-semibold text-gray-800">Performance Tips</h6>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Use efficient array formulas</li>
                      <li>• Minimize volatile functions</li>
                      <li>• Implement data validation</li>
                      <li>• Regular model accuracy checks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              Key Takeaways
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Technical Mastery</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✅ Excel forecasting functions and formulas</li>
                  <li>✅ Advanced charting with trendlines and confidence intervals</li>
                  <li>✅ Dynamic data ranges and interactive controls</li>
                  <li>✅ Performance optimization techniques</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Business Impact</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>🎯 Accurate revenue and demand forecasting</li>
                  <li>📊 Data-driven decision making</li>
                  <li>💰 Improved inventory management</li>
                  <li>📈 Strategic planning capabilities</li>
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

export default PredictiveVisualizationsLesson;
