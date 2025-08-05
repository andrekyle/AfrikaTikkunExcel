import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, AlertTriangle, TrendingUp, Database, Zap, Clock } from 'lucide-react';
import CopyableContent from '@/components/CopyableContent';

interface PerformanceMonitoringLessonProps {
  onContinue?: () => void;
}

const PerformanceMonitoringLesson: React.FC<PerformanceMonitoringLessonProps> = ({ onContinue }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Activity className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Lesson 6: Performance Monitoring</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Master AI-driven performance tracking and alerting systems to create intelligent monitoring dashboards 
          that automatically detect anomalies, predict trends, and trigger real-time alerts for critical business metrics.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-600" />
          Learning Objectives
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">🎯 Technical Skills</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Build real-time performance monitoring systems
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Implement AI-powered anomaly detection algorithms
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Create automated alert and notification systems
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Design predictive performance forecasting models
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Build interactive monitoring dashboards with drill-down capabilities
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">🏢 Business Applications</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                Monitor KPIs and business metrics in real-time
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                Detect performance anomalies before they impact business
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                Automate escalation procedures for critical issues
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                Provide stakeholders with proactive performance insights
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                Optimize resource allocation based on performance trends
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Hands-on Projects */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Database className="h-5 w-5 text-purple-600" />
          Hands-on Projects
        </h2>

        <div className="space-y-8">
          {/* Project 1: Real-Time Performance Dashboard */}
          <div className="pl-4">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              Project 1: Real-Time Performance Dashboard
            </h4>
            <p className="text-gray-700 mb-4">Build a comprehensive real-time monitoring dashboard that tracks key performance indicators and automatically detects performance anomalies.</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-green-900 mb-2">📋 Step-by-Step Instructions:</h5>
              <div className="space-y-4 text-sm text-green-800">
                <div>
                  <h6 className="font-semibold mb-2">🔧 Phase 1: Dashboard Setup (6 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Create new workbook:</strong> "Performance_Monitoring_Dashboard.xlsx"</li>
                    <li><strong>Create 5 worksheets:</strong> "Live_Data", "Historical_Trends", "Anomaly_Detection", "Alert_System", "Executive_View"</li>
                    <li><strong>Set up data connections:</strong> Configure automatic data refresh every 5 minutes</li>
                    <li><strong>Design dashboard layout:</strong> Create sections for KPIs, trends, alerts, and drill-down analysis</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📊 Phase 2: Performance Data Import (4 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Copy performance data:</strong> Use the copy button below to get the real-time performance dataset</li>
                    <li><strong>Paste in Live_Data:</strong> Start from A1 and paste the complete performance metrics</li>
                    <li><strong>Format as Table:</strong> Select data → Insert → Table → Name it "PerformanceMetrics"</li>
                    <li><strong>Set up data types:</strong> Ensure timestamps, metrics, and thresholds are properly formatted</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">⚙️ Phase 3: KPI Monitoring Engine (12 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Historical_Trends sheet</strong> and create trend analysis calculations</li>
                    <li><strong>Implement moving averages:</strong> Calculate 7-day, 30-day, and 90-day moving averages</li>
                    <li><strong>Create performance baselines:</strong> Establish normal operating ranges for each KPI</li>
                    <li><strong>Build variance calculations:</strong> Track deviations from baseline performance</li>
                    <li><strong>Add trend indicators:</strong> Create up/down/stable trend classifications</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">🚨 Phase 4: Anomaly Detection System (15 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Anomaly_Detection sheet</strong> and set up detection algorithms</li>
                    <li><strong>Implement statistical controls:</strong> Create upper and lower control limits using standard deviations</li>
                    <li><strong>Build pattern recognition:</strong> Detect unusual patterns and outliers automatically</li>
                    <li><strong>Create severity scoring:</strong> Rank anomalies by impact and urgency</li>
                    <li><strong>Add AI insights:</strong> Generate automated explanations for detected anomalies</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">🔔 Phase 5: Alert & Notification System (10 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Alert_System sheet</strong> and create alert triggers</li>
                    <li><strong>Set up threshold monitoring:</strong> Define critical, warning, and info alert levels</li>
                    <li><strong>Create escalation matrix:</strong> Define who gets notified for different alert types</li>
                    <li><strong>Build notification templates:</strong> Create automated email and dashboard alerts</li>
                    <li><strong>Add snooze functionality:</strong> Allow temporary alert suppression for maintenance</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">✅ Phase 6: Testing & Validation (8 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Test real-time updates:</strong> Verify dashboard refreshes automatically</li>
                    <li><strong>Validate anomaly detection:</strong> Test with known anomalous data points</li>
                    <li><strong>Check alert system:</strong> Ensure alerts trigger correctly for threshold breaches</li>
                    <li><strong>Review executive view:</strong> Confirm high-level summary displays properly</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-medium text-gray-800">📈 Real-Time Performance Data</h5>
              <CopyableContent
                label="Performance Monitoring Data"
                content={`Timestamp	Metric_Name	Current_Value	Baseline_Value	Threshold_Min	Threshold_Max	Status	Department	Impact_Level
2024-01-15 09:00	Revenue_Per_Hour	R 12,450	R 11,200	R 9,000	R 15,000	Normal	Sales	Medium
2024-01-15 09:00	Customer_Satisfaction	4.7	4.5	4.0	5.0	Above_Target	Service	High
2024-01-15 09:00	Response_Time_Avg	2.3	2.1	0.0	3.0	Normal	IT	High
2024-01-15 09:00	Order_Processing_Time	18	22	0	30	Above_Target	Operations	Medium
2024-01-15 09:00	Employee_Productivity	87%	82%	75%	95%	Above_Target	HR	Medium
2024-01-15 09:00	System_Uptime	99.8%	99.5%	98.0%	100.0%	Normal	IT	Critical
2024-01-15 09:00	Cost_Per_Transaction	R 45.20	R 48.50	R 30.00	R 60.00	Above_Target	Finance	Medium
2024-01-15 09:00	Inventory_Turnover	6.2	5.8	4.0	8.0	Normal	Supply_Chain	Medium
2024-01-15 09:00	Quality_Score	94.5%	92.0%	85.0%	98.0%	Above_Target	Quality	High
2024-01-15 09:00	Lead_Conversion_Rate	23.8%	21.5%	15.0%	30.0%	Above_Target	Marketing	High
2024-01-15 09:00	Cash_Flow_Daily	R 145,000	R 135,000	R 100,000	R 200,000	Normal	Finance	Critical
2024-01-15 09:00	Customer_Retention	96.3%	94.8%	90.0%	98.0%	Above_Target	Service	High`}
              >
                <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left p-2 font-semibold">Timestamp</th>
                        <th className="text-left p-2 font-semibold">Metric</th>
                        <th className="text-right p-2 font-semibold">Current</th>
                        <th className="text-right p-2 font-semibold">Baseline</th>
                        <th className="text-center p-2 font-semibold">Status</th>
                        <th className="text-center p-2 font-semibold">Department</th>
                        <th className="text-center p-2 font-semibold">Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2 text-xs font-mono">09:00</td>
                        <td className="p-2">Revenue Per Hour</td>
                        <td className="p-2 text-right font-semibold">R 12,450</td>
                        <td className="p-2 text-right text-gray-600">R 11,200</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Normal</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Sales</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">Medium</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2 text-xs font-mono">09:00</td>
                        <td className="p-2">Customer Satisfaction</td>
                        <td className="p-2 text-right font-semibold">4.7</td>
                        <td className="p-2 text-right text-gray-600">4.5</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Above Target</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">Service</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">High</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2 text-xs font-mono">09:00</td>
                        <td className="p-2">System Uptime</td>
                        <td className="p-2 text-right font-semibold">99.8%</td>
                        <td className="p-2 text-right text-gray-600">99.5%</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Normal</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">IT</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Critical</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2 text-xs font-mono">09:00</td>
                        <td className="p-2">Lead Conversion Rate</td>
                        <td className="p-2 text-right font-semibold">23.8%</td>
                        <td className="p-2 text-right text-gray-600">21.5%</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Above Target</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Marketing</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">High</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CopyableContent>

              <h5 className="font-medium text-gray-800">🤖 AI-Powered Monitoring Formulas</h5>
              <CopyableContent
                label="Performance Monitoring Formulas"
                content={`// Real-Time Status Monitoring
Performance_Status: =IF(Current_Value>=Threshold_Max,"Critical_High",IF(Current_Value<=Threshold_Min,"Critical_Low",IF(Current_Value>Baseline_Value*1.1,"Above_Target","Normal")))

// Anomaly Detection Algorithm
Anomaly_Score: =ABS((Current_Value-Baseline_Value)/STDEV(Historical_Range))*100
Anomaly_Level: =IF(Anomaly_Score>300,"Severe",IF(Anomaly_Score>200,"Moderate",IF(Anomaly_Score>100,"Minor","Normal")))

// Trend Analysis
Trend_Direction: =IF(SLOPE(Current_Week,ROW(Current_Week))>0.1,"Improving",IF(SLOPE(Current_Week,ROW(Current_Week))<-0.1,"Declining","Stable"))
Trend_Strength: =ABS(CORREL(Current_Week,ROW(Current_Week)))*100&"%"

// AI-Generated Insights
Performance_Insight: =IF(Performance_Status="Above_Target",Metric_Name&" is performing "&TEXT((Current_Value-Baseline_Value)/Baseline_Value,"0.0%")&" above baseline",IF(Performance_Status="Critical_Low",Metric_Name&" has dropped "&TEXT((Baseline_Value-Current_Value)/Baseline_Value,"0.0%")&" below normal levels","Performance within expected range"))

// Alert Priority Calculation
Alert_Priority: =IF(Impact_Level="Critical",IF(Performance_Status CONTAINS "Critical",1,2),IF(Impact_Level="High",IF(Performance_Status CONTAINS "Critical",2,3),4))
Alert_Message: ="ALERT: "&Metric_Name&" - "&Performance_Status&" | Current: "&Current_Value&" | Expected: "&Baseline_Value&" | Department: "&Department

// Predictive Forecasting
Next_Period_Forecast: =FORECAST.LINEAR(ROWS(Historical_Data)+1,Historical_Values,ROW(Historical_Values))
Forecast_Confidence: =IF(CORREL(Historical_Values,ROW(Historical_Values))>0.8,"High",IF(CORREL(Historical_Values,ROW(Historical_Values))>0.5,"Medium","Low"))`}
              >
                <div className="bg-gray-50 p-2 rounded">
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap">{`// Real-Time Status Monitoring
Performance_Status: =IF(Current_Value>=Threshold_Max,"Critical_High",
  IF(Current_Value<=Threshold_Min,"Critical_Low",
    IF(Current_Value>Baseline_Value*1.1,"Above_Target","Normal")))

// Anomaly Detection Algorithm  
Anomaly_Score: =ABS((Current_Value-Baseline_Value)/STDEV(Historical_Range))*100
Anomaly_Level: =IF(Anomaly_Score>300,"Severe",
  IF(Anomaly_Score>200,"Moderate",
    IF(Anomaly_Score>100,"Minor","Normal")))

// AI-Generated Performance Insights
Performance_Insight: =IF(Performance_Status="Above_Target",
  Metric_Name&" is performing "&TEXT((Current_Value-Baseline_Value)/Baseline_Value,"0.0%")&" above baseline",
  IF(Performance_Status="Critical_Low",
    Metric_Name&" has dropped "&TEXT((Baseline_Value-Current_Value)/Baseline_Value,"0.0%")&" below normal levels",
    "Performance within expected range"))`}</pre>
                </div>
              </CopyableContent>
            </div>
          </div>

          {/* Project 2: Predictive Alert System */}
          <div className="pl-4 mt-8">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Project 2: Predictive Alert System
            </h4>
            <p className="text-gray-700 mb-4">Build an intelligent alert system that predicts potential issues before they occur and automatically escalates critical situations.</p>
            
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-red-900 mb-2">📋 Step-by-Step Instructions:</h5>
              <div className="space-y-4 text-sm text-red-800">
                <div>
                  <h6 className="font-semibold mb-2">🔧 Phase 1: Alert System Architecture (7 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Create new workbook:</strong> "Predictive_Alert_System.xlsx"</li>
                    <li><strong>Create 6 worksheets:</strong> "Alert_Rules", "Prediction_Engine", "Escalation_Matrix", "Alert_History", "Performance_Trends", "Executive_Alerts"</li>
                    <li><strong>Design alert architecture:</strong> Set up hierarchical alert levels and escalation paths</li>
                    <li><strong>Configure alert channels:</strong> Email, dashboard notifications, and mobile alerts</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">⚡ Phase 2: Predictive Modeling Setup (12 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Prediction_Engine sheet</strong> and import historical performance data</li>
                    <li><strong>Build trend analysis models:</strong> Create moving averages and seasonal adjustments</li>
                    <li><strong>Implement regression analysis:</strong> Predict future performance based on historical patterns</li>
                    <li><strong>Create confidence intervals:</strong> Establish prediction accuracy ranges</li>
                    <li><strong>Set up early warning triggers:</strong> Alert when trends indicate future problems</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">🚨 Phase 3: Alert Rule Configuration (10 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Alert_Rules sheet</strong> and define alert conditions</li>
                    <li><strong>Set up threshold-based alerts:</strong> Configure min/max value triggers</li>
                    <li><strong>Create pattern-based alerts:</strong> Detect unusual trends and patterns</li>
                    <li><strong>Implement composite alerts:</strong> Combine multiple metrics for complex conditions</li>
                    <li><strong>Add time-based rules:</strong> Different thresholds for different time periods</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📞 Phase 4: Escalation & Notification (8 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Escalation_Matrix sheet</strong> and create escalation workflows</li>
                    <li><strong>Define stakeholder groups:</strong> Map alerts to appropriate personnel</li>
                    <li><strong>Set up escalation timers:</strong> Auto-escalate unacknowledged alerts</li>
                    <li><strong>Create notification templates:</strong> Standardized alert messages for different scenarios</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📅 Phase 5: Testing & Optimization (8 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Test alert triggers:</strong> Verify alerts fire correctly for different scenarios</li>
                    <li><strong>Test escalation paths:</strong> Ensure proper escalation timing and recipients</li>
                    <li><strong>Validate predictions:</strong> Check accuracy of predictive models</li>
                    <li><strong>Optimize alert sensitivity:</strong> Reduce false positives while maintaining coverage</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-medium text-gray-800">🚨 Alert Configuration Data</h5>
              <CopyableContent
                label="Alert System Configuration"
                content={`Alert_ID	Alert_Name	Metric_Monitored	Condition_Type	Threshold_Value	Severity_Level	Escalation_Time	Assigned_Team	Notification_Method
ALT001	Revenue_Drop_Alert	Revenue_Per_Hour	Below_Threshold	R 9,000	Critical	5_minutes	Sales_Management	Email+SMS
ALT002	System_Downtime_Alert	System_Uptime	Below_Threshold	98.0%	Critical	1_minute	IT_Operations	Email+SMS+Call
ALT003	Customer_Satisfaction_Warning	Customer_Satisfaction	Below_Threshold	4.0	High	15_minutes	Service_Management	Email
ALT004	Response_Time_Alert	Response_Time_Avg	Above_Threshold	3.0	High	10_minutes	IT_Operations	Email+Dashboard
ALT005	Productivity_Decline	Employee_Productivity	Trend_Declining	-5%_per_week	Medium	30_minutes	HR_Management	Email
ALT006	Quality_Issue_Alert	Quality_Score	Below_Threshold	85.0%	High	10_minutes	Quality_Assurance	Email+SMS
ALT007	Cash_Flow_Warning	Cash_Flow_Daily	Below_Threshold	R 100,000	Critical	5_minutes	Finance_Team	Email+SMS+Call
ALT008	Inventory_Turnover_Low	Inventory_Turnover	Below_Threshold	4.0	Medium	60_minutes	Supply_Chain	Email
ALT009	Conversion_Rate_Drop	Lead_Conversion_Rate	Below_Threshold	15.0%	High	20_minutes	Marketing_Team	Email+Dashboard
ALT010	Cost_Spike_Alert	Cost_Per_Transaction	Above_Threshold	R 60.00	Medium	30_minutes	Finance_Team	Email
ALT011	Predictive_Revenue_Warning	Revenue_Forecast	Trend_Declining	-10%_next_week	High	60_minutes	Executive_Team	Email+Dashboard
ALT012	Anomaly_Detection_Alert	Multiple_Metrics	Statistical_Outlier	3_Sigma	Medium	45_minutes	Data_Analytics	Email`}
              >
                <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left p-2 font-semibold">Alert ID</th>
                        <th className="text-left p-2 font-semibold">Alert Name</th>
                        <th className="text-left p-2 font-semibold">Metric</th>
                        <th className="text-center p-2 font-semibold">Severity</th>
                        <th className="text-center p-2 font-semibold">Escalation</th>
                        <th className="text-center p-2 font-semibold">Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2 font-mono text-xs">ALT001</td>
                        <td className="p-2">Revenue Drop Alert</td>
                        <td className="p-2">Revenue Per Hour</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Critical</span>
                        </td>
                        <td className="p-2 text-center">5 min</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Sales</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2 font-mono text-xs">ALT002</td>
                        <td className="p-2">System Downtime Alert</td>
                        <td className="p-2">System Uptime</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Critical</span>
                        </td>
                        <td className="p-2 text-center">1 min</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">IT</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2 font-mono text-xs">ALT007</td>
                        <td className="p-2">Cash Flow Warning</td>
                        <td className="p-2">Cash Flow Daily</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Critical</span>
                        </td>
                        <td className="p-2 text-center">5 min</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Finance</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CopyableContent>

              <h5 className="font-medium text-gray-800">🤖 Predictive Alert Formulas</h5>
              <CopyableContent
                label="Predictive Alert Formulas"
                content={`// Predictive Trend Analysis
Trend_Prediction: =FORECAST.LINEAR(ROWS(Historical_Data)+7,Historical_Values,ROW(Historical_Values))
Prediction_Confidence: =CORREL(Historical_Values,ROW(Historical_Values))
Early_Warning: =IF(AND(Trend_Prediction<Threshold_Min,Prediction_Confidence>0.7),"WARNING: Predicted threshold breach in 7 days","Normal")

// Dynamic Alert Thresholds
Adaptive_Threshold: =AVERAGE(Historical_Range)+2*STDEV(Historical_Range)
Seasonal_Adjustment: =Current_Value/INDEX(Seasonal_Factors,MONTH(TODAY()))
Context_Aware_Alert: =IF(Seasonal_Adjustment>Adaptive_Threshold,"Alert","Normal")

// Escalation Logic
Escalation_Level: =IF(Minutes_Since_Alert>Escalation_Time,IF(Severity_Level="Critical","Executive","Manager"),"Team")
Next_Escalation: =Escalation_Time+IF(Severity_Level="Critical",5,IF(Severity_Level="High",15,30))

// Multi-Metric Composite Alerts
Composite_Score: =SUMPRODUCT(Metric_Values,Metric_Weights)/SUM(Metric_Weights)
System_Health: =IF(Composite_Score<70,"Critical",IF(Composite_Score<85,"Warning","Healthy"))

// AI-Generated Alert Messages
Alert_Description: =IF(Alert_Type="Threshold",Metric_Name&" has "&IF(Current_Value>Threshold,"exceeded","fallen below")&" threshold of "&Threshold&" with current value "&Current_Value,IF(Alert_Type="Trend",Metric_Name&" is trending "&Trend_Direction&" at "&Trend_Rate&" per day","Anomaly detected in "&Metric_Name))`}
              >
                <div className="bg-gray-50 p-2 rounded">
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap">{`// Predictive Trend Analysis
Trend_Prediction: =FORECAST.LINEAR(ROWS(Historical_Data)+7,Historical_Values,ROW(Historical_Values))
Prediction_Confidence: =CORREL(Historical_Values,ROW(Historical_Values))
Early_Warning: =IF(AND(Trend_Prediction<Threshold_Min,Prediction_Confidence>0.7),
  "WARNING: Predicted threshold breach in 7 days","Normal")

// Dynamic Alert Thresholds
Adaptive_Threshold: =AVERAGE(Historical_Range)+2*STDEV(Historical_Range)
Seasonal_Adjustment: =Current_Value/INDEX(Seasonal_Factors,MONTH(TODAY()))

// Multi-Metric Composite Alerts
Composite_Score: =SUMPRODUCT(Metric_Values,Metric_Weights)/SUM(Metric_Weights)
System_Health: =IF(Composite_Score<70,"Critical",
  IF(Composite_Score<85,"Warning","Healthy"))`}</pre>
                </div>
              </CopyableContent>
            </div>
          </div>

          {/* Project 3: Executive Performance Dashboard */}
          <div className="pl-4 mt-8">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-purple-600" />
              Project 3: Executive Performance Dashboard
            </h4>
            <p className="text-gray-700 mb-4">Create a comprehensive executive dashboard that provides real-time insights, predictive analytics, and automated decision support.</p>
            
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-purple-900 mb-2">📋 Step-by-Step Instructions:</h5>
              <div className="space-y-4 text-sm text-purple-800">
                <div>
                  <h6 className="font-semibold mb-2">🔧 Phase 1: Executive Dashboard Setup (8 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Create new workbook:</strong> "Executive_Performance_Dashboard.xlsx"</li>
                    <li><strong>Create 4 worksheets:</strong> "Executive_Summary", "KPI_Scorecards", "Predictive_Analytics", "Action_Items"</li>
                    <li><strong>Design executive layout:</strong> High-level metrics, trends, and key insights</li>
                    <li><strong>Set up auto-refresh:</strong> Configure real-time data updates every 15 minutes</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📈 Phase 2: KPI Scorecard Creation (12 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to KPI_Scorecards sheet</strong> and create balanced scorecard framework</li>
                    <li><strong>Implement traffic light system:</strong> Red/Yellow/Green status indicators</li>
                    <li><strong>Add trend arrows:</strong> Up/down/stable indicators for each KPI</li>
                    <li><strong>Create drill-down capability:</strong> Link to detailed analysis sheets</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">🔮 Phase 3: Predictive Analytics Integration (15 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Predictive_Analytics sheet</strong> and implement forecasting models</li>
                    <li><strong>Create scenario analysis:</strong> Best case, worst case, and most likely scenarios</li>
                    <li><strong>Build risk assessment:</strong> Identify potential issues and opportunities</li>
                    <li><strong>Add confidence intervals:</strong> Show prediction accuracy ranges</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">✅ Phase 4: Testing & Deployment (10 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Test all dashboard components:</strong> Verify data accuracy and formatting</li>
                    <li><strong>Validate predictive models:</strong> Check forecasting accuracy</li>
                    <li><strong>Test drill-down functionality:</strong> Ensure navigation works properly</li>
                    <li><strong>Create user documentation:</strong> Guide for executives on dashboard usage</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Takeaways */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-600" />
          Key Takeaways
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">🎯 Technical Mastery</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Real-time performance monitoring with automated data refresh
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                AI-powered anomaly detection using statistical analysis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Predictive alerting with trend analysis and forecasting
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Multi-level escalation systems with automated notifications
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Executive dashboards with drill-down capabilities
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">🏢 Business Impact</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                Proactive issue detection reduces downtime and costs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                Automated alerting ensures rapid response to critical issues
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                Predictive insights enable preventive action planning
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                Executive visibility improves strategic decision making
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                Continuous monitoring drives performance optimization
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Continue Button */}
      {onContinue && (
        <div className="text-center">
          <Button onClick={onContinue} size="lg" className="bg-blue-600 hover:bg-blue-700">
            Continue to Next Lesson
          </Button>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitoringLesson;
