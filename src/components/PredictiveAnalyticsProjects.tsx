import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  BarChart3, 
  Users, 
  DollarSign,
  Calendar,
  Target
} from "lucide-react";
import CopyableContent from "@/components/CopyableContent";

const PredictiveAnalyticsProjects: React.FC = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-purple-600" />
            Hands-on Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">
            Apply predictive analytics techniques with real business scenarios and sample datasets.
          </p>

          {/* Project 1: Sales Forecasting */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Project 1: Sales Forecasting System</h3>
                <p className="text-gray-600">Build a comprehensive sales prediction model with seasonal adjustments</p>
              </div>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">📋 Step-by-Step Instructions:</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="font-semibold">Set Up Historical Sales Data</p>
                    <p className="text-gray-700">Create a worksheet with monthly sales data for the past 24 months, including seasonal patterns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="font-semibold">Calculate Moving Averages</p>
                    <p className="text-gray-700">Use 3-month and 6-month moving averages to smooth out short-term fluctuations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="font-semibold">Apply Exponential Smoothing</p>
                    <p className="text-gray-700">Use Excel's Data Analysis ToolPak to create exponential smoothing forecasts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <p className="font-semibold">Implement FORECAST.ETS Function</p>
                    <p className="text-gray-700">Use Excel's built-in seasonal forecasting for more accurate predictions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <p className="font-semibold">Create Confidence Intervals</p>
                    <p className="text-gray-700">Calculate upper and lower bounds for predictions using statistical functions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">6</span>
                  <div>
                    <p className="font-semibold">Build Interactive Dashboard</p>
                    <p className="text-gray-700">Create charts and controls for dynamic forecasting with different parameters</p>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900">Sample Historical Sales Data</h4>
            <CopyableContent 
              content={`Month\tYear\tSales ($)\tUnits Sold\tMarketing Spend ($)\tSeason
Jan\t2023\t85,000\t425\t12,000\tWinter
Feb\t2023\t78,500\t392\t10,500\tWinter
Mar\t2023\t92,300\t461\t13,500\tSpring
Apr\t2023\t105,200\t526\t15,000\tSpring
May\t2023\t118,700\t593\t16,800\tSpring
Jun\t2023\t135,400\t677\t18,200\tSummer
Jul\t2023\t142,800\t714\t19,500\tSummer
Aug\t2023\t138,900\t694\t18,800\tSummer
Sep\t2023\t125,600\t628\t17,200\tFall
Oct\t2023\t110,300\t551\t15,500\tFall
Nov\t2023\t158,200\t791\t22,000\tFall
Dec\t2023\t175,800\t879\t25,000\tWinter`}
              label="Sales Data"
            >
              <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-3 py-2 text-left">Month</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Year</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Sales ($)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Units Sold</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Marketing Spend ($)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Season</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-3 py-2">Jan</td><td className="border border-gray-300 px-3 py-2">2023</td><td className="border border-gray-300 px-3 py-2">85,000</td><td className="border border-gray-300 px-3 py-2">425</td><td className="border border-gray-300 px-3 py-2">12,000</td><td className="border border-gray-300 px-3 py-2">Winter</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">Feb</td><td className="border border-gray-300 px-3 py-2">2023</td><td className="border border-gray-300 px-3 py-2">78,500</td><td className="border border-gray-300 px-3 py-2">392</td><td className="border border-gray-300 px-3 py-2">10,500</td><td className="border border-gray-300 px-3 py-2">Winter</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">Mar</td><td className="border border-gray-300 px-3 py-2">2023</td><td className="border border-gray-300 px-3 py-2">92,300</td><td className="border border-gray-300 px-3 py-2">461</td><td className="border border-gray-300 px-3 py-2">13,500</td><td className="border border-gray-300 px-3 py-2">Spring</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">Apr</td><td className="border border-gray-300 px-3 py-2">2023</td><td className="border border-gray-300 px-3 py-2">105,200</td><td className="border border-gray-300 px-3 py-2">526</td><td className="border border-gray-300 px-3 py-2">15,000</td><td className="border border-gray-300 px-3 py-2">Spring</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">May</td><td className="border border-gray-300 px-3 py-2">2023</td><td className="border border-gray-300 px-3 py-2">118,700</td><td className="border border-gray-300 px-3 py-2">593</td><td className="border border-gray-300 px-3 py-2">16,800</td><td className="border border-gray-300 px-3 py-2">Spring</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">Jun</td><td className="border border-gray-300 px-3 py-2">2023</td><td className="border border-gray-300 px-3 py-2">135,400</td><td className="border border-gray-300 px-3 py-2">677</td><td className="border border-gray-300 px-3 py-2">18,200</td><td className="border border-gray-300 px-3 py-2">Summer</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">Jul</td><td className="border border-gray-300 px-3 py-2">2023</td><td className="border border-gray-300 px-3 py-2">142,800</td><td className="border border-gray-300 px-3 py-2">714</td><td className="border border-gray-300 px-3 py-2">19,500</td><td className="border border-gray-300 px-3 py-2">Summer</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">Aug</td><td className="border border-gray-300 px-3 py-2">2023</td><td className="border border-gray-300 px-3 py-2">138,900</td><td className="border border-gray-300 px-3 py-2">694</td><td className="border border-gray-300 px-3 py-2">18,800</td><td className="border border-gray-300 px-3 py-2">Summer</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">Sep</td><td className="border border-gray-300 px-3 py-2">2023</td><td className="border border-gray-300 px-3 py-2">125,600</td><td className="border border-gray-300 px-3 py-2">628</td><td className="border border-gray-300 px-3 py-2">17,200</td><td className="border border-gray-300 px-3 py-2">Fall</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">Oct</td><td className="border border-gray-300 px-3 py-2">2023</td><td className="border border-gray-300 px-3 py-2">110,300</td><td className="border border-gray-300 px-3 py-2">551</td><td className="border border-gray-300 px-3 py-2">15,500</td><td className="border border-gray-300 px-3 py-2">Fall</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">Nov</td><td className="border border-gray-300 px-3 py-2">2023</td><td className="border border-gray-300 px-3 py-2">158,200</td><td className="border border-gray-300 px-3 py-2">791</td><td className="border border-gray-300 px-3 py-2">22,000</td><td className="border border-gray-300 px-3 py-2">Fall</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">Dec</td><td className="border border-gray-300 px-3 py-2">2023</td><td className="border border-gray-300 px-3 py-2">175,800</td><td className="border border-gray-300 px-3 py-2">879</td><td className="border border-gray-300 px-3 py-2">25,000</td><td className="border border-gray-300 px-3 py-2">Winter</td></tr>
                  </tbody>
                </table>
              </div>
            </CopyableContent>

            <h4 className="font-semibold text-gray-900">Excel Formulas for Sales Forecasting</h4>
            <CopyableContent 
              content={`' Moving Average Calculation (3-month)
=AVERAGE(OFFSET(C2,-2,0,3,1))

' Exponential Smoothing Formula
=C2*$F$2+(1-$F$2)*D1
' Where F2 contains the smoothing constant (0.3)

' Seasonal Forecasting with FORECAST.ETS
=FORECAST.ETS(A26,C2:C25,A2:A25,1,1,1)

' Confidence Interval Calculation
Upper: =E26+1.96*STDEV(C2:C25)/SQRT(COUNT(C2:C25))
Lower: =E26-1.96*STDEV(C2:C25)/SQRT(COUNT(C2:C25))

' VBA Automated Forecasting
Sub AutomatedSalesForecasting()
    Dim lastRow As Long
    lastRow = Cells(Rows.Count, 1).End(xlUp).Row
    
    For i = 1 To 6
        Cells(lastRow + i, 1).Value = DateAdd("m", i, Cells(lastRow, 1).Value)
        Cells(lastRow + i, 3).Formula = "=FORECAST.ETS(" & _
            Cells(lastRow + i, 1).Address & "," & _
            Range("C2:C" & lastRow).Address & "," & _
            Range("A2:A" & lastRow).Address & ",1,1,1)"
    Next i
End Sub`}
              label="Sales Forecasting Formulas"
            >
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`' Moving Average Calculation (3-month)
=AVERAGE(OFFSET(C2,-2,0,3,1))

' Exponential Smoothing Formula
=C2*$F$2+(1-$F$2)*D1
' Where F2 contains the smoothing constant (0.3)

' Seasonal Forecasting with FORECAST.ETS
=FORECAST.ETS(A26,C2:C25,A2:A25,1,1,1)

' Confidence Interval Calculation
Upper: =E26+1.96*STDEV(C2:C25)/SQRT(COUNT(C2:C25))
Lower: =E26-1.96*STDEV(C2:C25)/SQRT(COUNT(C2:C25))

' VBA Automated Forecasting
Sub AutomatedSalesForecasting()
    Dim lastRow As Long
    lastRow = Cells(Rows.Count, 1).End(xlUp).Row
    
    For i = 1 To 6
        Cells(lastRow + i, 1).Value = DateAdd("m", i, Cells(lastRow, 1).Value)
        Cells(lastRow + i, 3).Formula = "=FORECAST.ETS(" & _
            Cells(lastRow + i, 1).Address & "," & _
            Range("C2:C" & lastRow).Address & "," & _
            Range("A2:A" & lastRow).Address & ",1,1,1)"
    Next i
End Sub`}
              </pre>
            </CopyableContent>
          </div>

          {/* Project 2: Customer Lifetime Value Prediction */}
          <div className="space-y-6 mt-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Project 2: Customer Lifetime Value Prediction</h3>
                <p className="text-gray-600">Build a model to predict customer value and churn probability</p>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3">📋 Step-by-Step Instructions:</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="font-semibold">Prepare Customer Data</p>
                    <p className="text-gray-700">Collect customer transaction history, demographics, and engagement metrics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="font-semibold">Calculate RFM Metrics</p>
                    <p className="text-gray-700">Compute Recency, Frequency, and Monetary values for each customer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="font-semibold">Build Regression Model</p>
                    <p className="text-gray-700">Use multiple regression to predict future customer value based on historical patterns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <p className="font-semibold">Calculate Churn Probability</p>
                    <p className="text-gray-700">Use logistic regression to predict likelihood of customer churn</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <p className="font-semibold">Segment Customers</p>
                    <p className="text-gray-700">Create customer segments based on predicted value and churn risk</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">6</span>
                  <div>
                    <p className="font-semibold">Create Action Dashboard</p>
                    <p className="text-gray-700">Build interactive dashboard with customer insights and recommended actions</p>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900">Sample Customer Data</h4>
            <CopyableContent 
              content={`Customer ID	First Purchase	Last Purchase	Total Orders	Total Spent ($)	Avg Order Value ($)	Days Since Last	Segment
CUST001	2023-01-15	2024-11-20	24	4,850	202	15	High Value
CUST002	2023-03-22	2024-12-01	18	2,340	130	4	Medium Value
CUST003	2023-02-10	2024-08-15	8	920	115	112	At Risk
CUST004	2023-05-08	2024-11-28	31	6,720	217	7	VIP
CUST005	2023-07-12	2024-11-15	12	1,680	140	20	Medium Value
CUST006	2023-04-03	2024-06-22	5	485	97	161	Lost
CUST007	2023-06-18	2024-11-30	22	3,960	180	5	High Value
CUST008	2023-08-25	2024-10-12	9	1,215	135	54	At Risk
CUST009	2023-09-14	2024-12-02	16	2,720	170	3	Medium Value
CUST010	2023-11-07	2024-11-25	28	5,880	210	10	VIP`}
              label="Customer Data"
            >
              <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-3 py-2 text-left">Customer ID</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">First Purchase</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Last Purchase</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Total Orders</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Total Spent ($)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Avg Order Value ($)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Days Since Last</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Segment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-3 py-2">CUST001</td><td className="border border-gray-300 px-3 py-2">2023-01-15</td><td className="border border-gray-300 px-3 py-2">2024-11-20</td><td className="border border-gray-300 px-3 py-2">24</td><td className="border border-gray-300 px-3 py-2">4,850</td><td className="border border-gray-300 px-3 py-2">202</td><td className="border border-gray-300 px-3 py-2">15</td><td className="border border-gray-300 px-3 py-2">High Value</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">CUST002</td><td className="border border-gray-300 px-3 py-2">2023-03-22</td><td className="border border-gray-300 px-3 py-2">2024-12-01</td><td className="border border-gray-300 px-3 py-2">18</td><td className="border border-gray-300 px-3 py-2">2,340</td><td className="border border-gray-300 px-3 py-2">130</td><td className="border border-gray-300 px-3 py-2">4</td><td className="border border-gray-300 px-3 py-2">Medium Value</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">CUST003</td><td className="border border-gray-300 px-3 py-2">2023-02-10</td><td className="border border-gray-300 px-3 py-2">2024-08-15</td><td className="border border-gray-300 px-3 py-2">8</td><td className="border border-gray-300 px-3 py-2">920</td><td className="border border-gray-300 px-3 py-2">115</td><td className="border border-gray-300 px-3 py-2">112</td><td className="border border-gray-300 px-3 py-2">At Risk</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">CUST004</td><td className="border border-gray-300 px-3 py-2">2023-05-08</td><td className="border border-gray-300 px-3 py-2">2024-11-28</td><td className="border border-gray-300 px-3 py-2">31</td><td className="border border-gray-300 px-3 py-2">6,720</td><td className="border border-gray-300 px-3 py-2">217</td><td className="border border-gray-300 px-3 py-2">7</td><td className="border border-gray-300 px-3 py-2">VIP</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">CUST005</td><td className="border border-gray-300 px-3 py-2">2023-07-12</td><td className="border border-gray-300 px-3 py-2">2024-11-15</td><td className="border border-gray-300 px-3 py-2">12</td><td className="border border-gray-300 px-3 py-2">1,680</td><td className="border border-gray-300 px-3 py-2">140</td><td className="border border-gray-300 px-3 py-2">20</td><td className="border border-gray-300 px-3 py-2">Medium Value</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">CUST006</td><td className="border border-gray-300 px-3 py-2">2023-04-03</td><td className="border border-gray-300 px-3 py-2">2024-06-22</td><td className="border border-gray-300 px-3 py-2">5</td><td className="border border-gray-300 px-3 py-2">485</td><td className="border border-gray-300 px-3 py-2">97</td><td className="border border-gray-300 px-3 py-2">161</td><td className="border border-gray-300 px-3 py-2">Lost</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">CUST007</td><td className="border border-gray-300 px-3 py-2">2023-06-18</td><td className="border border-gray-300 px-3 py-2">2024-11-30</td><td className="border border-gray-300 px-3 py-2">22</td><td className="border border-gray-300 px-3 py-2">3,960</td><td className="border border-gray-300 px-3 py-2">180</td><td className="border border-gray-300 px-3 py-2">5</td><td className="border border-gray-300 px-3 py-2">High Value</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">CUST008</td><td className="border border-gray-300 px-3 py-2">2023-08-25</td><td className="border border-gray-300 px-3 py-2">2024-10-12</td><td className="border border-gray-300 px-3 py-2">9</td><td className="border border-gray-300 px-3 py-2">1,215</td><td className="border border-gray-300 px-3 py-2">135</td><td className="border border-gray-300 px-3 py-2">54</td><td className="border border-gray-300 px-3 py-2">At Risk</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">CUST009</td><td className="border border-gray-300 px-3 py-2">2023-09-14</td><td className="border border-gray-300 px-3 py-2">2024-12-02</td><td className="border border-gray-300 px-3 py-2">16</td><td className="border border-gray-300 px-3 py-2">2,720</td><td className="border border-gray-300 px-3 py-2">170</td><td className="border border-gray-300 px-3 py-2">3</td><td className="border border-gray-300 px-3 py-2">Medium Value</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2">CUST010</td><td className="border border-gray-300 px-3 py-2">2023-11-07</td><td className="border border-gray-300 px-3 py-2">2024-11-25</td><td className="border border-gray-300 px-3 py-2">28</td><td className="border border-gray-300 px-3 py-2">5,880</td><td className="border border-gray-300 px-3 py-2">210</td><td className="border border-gray-300 px-3 py-2">10</td><td className="border border-gray-300 px-3 py-2">VIP</td></tr>
                  </tbody>
                </table>
              </div>
            </CopyableContent>

            <h4 className="font-semibold text-gray-900">Customer Analytics Formulas</h4>
            <CopyableContent 
              content={`' RFM Analysis Calculations
' Recency (days since last purchase)
=TODAY()-MAX(IF(CustomerID=A2,PurchaseDate))

' Frequency (number of purchases)
=COUNTIF(CustomerID,A2)

' Monetary (total customer value)
=SUMIF(CustomerID,A2,OrderValue)

' Customer Lifetime Value Prediction
=((AvgOrderValue*PurchaseFrequency*GrossMargin)/ChurnRate)*12

' Churn Probability Score
=1/(1+EXP(-(0.1*Recency-0.05*Frequency+0.02*Monetary)))

' Customer Segmentation
=IF(AND(CLV>5000,ChurnProb<0.3),"VIP",
   IF(AND(CLV>2000,ChurnProb<0.5),"High Value",
     IF(AND(CLV>500,ChurnProb<0.7),"Medium Value",
       IF(ChurnProb>0.8,"Lost","At Risk"))))

' VBA Customer Analytics Dashboard
Sub CreateCustomerAnalytics()
    Dim ws As Worksheet
    Set ws = ActiveSheet
    
    ' Calculate RFM scores
    For i = 2 To ws.Cells(Rows.Count, 1).End(xlUp).Row
        ' Recency Score (1-5 scale)
        ws.Cells(i, 9).Formula = "=5-ROUNDUP(RANK(H" & i & ",H:H)/COUNT(H:H)*5,0)+1"
        
        ' Frequency Score (1-5 scale)
        ws.Cells(i, 10).Formula = "=ROUNDUP(RANK(D" & i & ",D:D,1)/COUNT(D:D)*5,0)"
        
        ' Monetary Score (1-5 scale)
        ws.Cells(i, 11).Formula = "=ROUNDUP(RANK(E" & i & ",E:E,1)/COUNT(E:E)*5,0)"
        
        ' CLV Prediction
        ws.Cells(i, 12).Formula = "=F" & i & "*D" & i & "*0.3*12/(1+G" & i & "/365)"
    Next i
End Sub`}
              label="Customer Analytics Formulas"
            >
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`' RFM Analysis Calculations
' Recency (days since last purchase)
=TODAY()-MAX(IF(CustomerID=A2,PurchaseDate))

' Frequency (number of purchases)
=COUNTIF(CustomerID,A2)

' Monetary (total customer value)
=SUMIF(CustomerID,A2,OrderValue)

' Customer Lifetime Value Prediction
=((AvgOrderValue*PurchaseFrequency*GrossMargin)/ChurnRate)*12

' Churn Probability Score
=1/(1+EXP(-(0.1*Recency-0.05*Frequency+0.02*Monetary)))

' Customer Segmentation
=IF(AND(CLV>5000,ChurnProb<0.3),"VIP",
   IF(AND(CLV>2000,ChurnProb<0.5),"High Value",
     IF(AND(CLV>500,ChurnProb<0.7),"Medium Value",
       IF(ChurnProb>0.8,"Lost","At Risk"))))

' VBA Customer Analytics Dashboard
Sub CreateCustomerAnalytics()
    Dim ws As Worksheet
    Set ws = ActiveSheet
    
    ' Calculate RFM scores
    For i = 2 To ws.Cells(Rows.Count, 1).End(xlUp).Row
        ' Recency Score (1-5 scale)
        ws.Cells(i, 9).Formula = "=5-ROUNDUP(RANK(H" & i & ",H:H)/COUNT(H:H)*5,0)+1"
        
        ' Frequency Score (1-5 scale)
        ws.Cells(i, 10).Formula = "=ROUNDUP(RANK(D" & i & ",D:D,1)/COUNT(D:D)*5,0)"
        
        ' Monetary Score (1-5 scale)
        ws.Cells(i, 11).Formula = "=ROUNDUP(RANK(E" & i & ",E:E,1)/COUNT(E:E)*5,0)"
        
        ' CLV Prediction
        ws.Cells(i, 12).Formula = "=F" & i & "*D" & i & "*0.3*12/(1+G" & i & "/365)"
    Next i
End Sub`}
              </pre>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictiveAnalyticsProjects;
