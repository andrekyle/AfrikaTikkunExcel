import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Bell, Brain, Zap, Clock } from "lucide-react";
import CopyableContent from './CopyableContent';

interface SmartNotificationsLessonProps {
  onContinue?: () => void;
}

const SmartNotificationsLesson: React.FC<SmartNotificationsLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Lesson Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
            <Bell className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Smart Notifications
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              AI-driven alerts and recommendations
            </p>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-orange-500" />
            <span>Learning Objectives</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Technical Skills
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>AI-powered intelligent alert systems and threshold monitoring</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Smart recommendation engines with contextual insights</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Automated notification routing and escalation workflows</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Multi-channel notification delivery (email, teams, mobile)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Predictive alerting with machine learning insights</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-3 flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                Business Applications
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Proactive business issue detection and rapid response</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Intelligent performance monitoring and optimization alerts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Automated compliance monitoring and regulatory alerts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Smart resource allocation and capacity planning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Enhanced decision-making through timely insights</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: AI Alert Management System */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-orange-700">
            Project 1: AI Alert Management System
          </CardTitle>
          <CardDescription>
            Build an intelligent alert system that monitors business metrics, detects anomalies, and sends smart notifications with AI-generated recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step-by-step Instructions */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-4 flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Step-by-Step Instructions (50 minutes)
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-orange-700 mb-2">🔔 Phase 1: Alert System Setup (10 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Create workbook</strong> with sheets: Metrics_Data, Alert_Rules, Notifications, AI_Insights</li>
                  <li>• <strong>Set up monitoring framework</strong>: define KPIs, thresholds, and alert priorities</li>
                  <li>• <strong>Configure alert channels</strong>: email, Teams, mobile notifications, dashboard alerts</li>
                  <li>• <strong>Initialize tracking system</strong>: create alert history and performance metrics</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-orange-700 mb-2">🤖 Phase 2: AI Analysis Engine (12 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Build anomaly detection</strong>: statistical analysis and pattern recognition</li>
                  <li>• <strong>Integrate AI insights</strong>: connect to OpenAI API for intelligent analysis</li>
                  <li>• <strong>Create recommendation engine</strong>: AI-generated action suggestions</li>
                  <li>• <strong>Set up predictive alerts</strong>: forecast potential issues before they occur</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-orange-700 mb-2">📧 Phase 3: Notification System (12 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Design email templates</strong>: professional, branded notification formats</li>
                  <li>• <strong>Build routing logic</strong>: send alerts to appropriate stakeholders</li>
                  <li>• <strong>Create escalation rules</strong>: automatic escalation for critical issues</li>
                  <li>• <strong>Set up delivery tracking</strong>: monitor notification success rates</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-orange-700 mb-2">📊 Phase 4: Smart Dashboard (10 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Create alert dashboard</strong>: real-time view of active alerts and status</li>
                  <li>• <strong>Build metrics visualization</strong>: charts showing alert trends and patterns</li>
                  <li>• <strong>Design action center</strong>: quick response buttons and status updates</li>
                  <li>• <strong>Add performance tracking</strong>: measure alert effectiveness and response times</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-orange-700 mb-2">✅ Phase 5: Testing & Optimization (6 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Test alert triggers</strong>: validate threshold detection and notification delivery</li>
                  <li>• <strong>Verify AI recommendations</strong>: ensure suggestions are relevant and actionable</li>
                  <li>• <strong>Check escalation flows</strong>: confirm proper routing and timing</li>
                  <li>• <strong>Optimize performance</strong>: fine-tune thresholds and reduce false positives</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Sample Business Metrics for Alert Monitoring</h4>
            <div className="overflow-x-auto">
              <CopyableContent content={`Metric_ID	Metric_Name	Current_Value	Target_Value	Threshold_Low	Threshold_High	Alert_Level	Department	Last_Updated
MET001	Daily Revenue	R 45,200.00	R 50,000.00	R 40,000.00	R 60,000.00	Medium	Sales	2024-03-15 14:30
MET002	Customer Satisfaction	4.2	4.5	4.0	5.0	Low	Service	2024-03-15 14:25
MET003	System Uptime	99.2%	99.5%	99.0%	100.0%	Low	IT	2024-03-15 14:35
MET004	Order Processing Time	2.8 hours	2.0 hours	3.0 hours	1.5 hours	High	Operations	2024-03-15 14:20
MET005	Inventory Turnover	8.5	10.0	7.0	12.0	Medium	Supply Chain	2024-03-15 14:15
MET006	Employee Productivity	85%	90%	80%	95%	Medium	HR	2024-03-15 14:10
MET007	Marketing ROI	3.2	4.0	2.5	5.0	Medium	Marketing	2024-03-15 14:05
MET008	Cash Flow	R 125,000.00	R 150,000.00	R 100,000.00	R 200,000.00	Medium	Finance	2024-03-15 14:00
MET009	Quality Score	92%	95%	90%	98%	Low	Quality	2024-03-15 13:55
MET010	Support Response Time	4.5 hours	2.0 hours	6.0 hours	1.0 hour	Critical	Support	2024-03-15 13:50`}>
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Metric_ID</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Metric_Name</th>
                      <th className="border border-gray-300 px-3 py-2 text-right font-medium">Current_Value</th>
                      <th className="border border-gray-300 px-3 py-2 text-center font-medium">Alert_Level</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">MET001</td>
                      <td className="border border-gray-300 px-3 py-2">Daily Revenue</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">R 45,200.00</td>
                      <td className="border border-gray-300 px-3 py-2 text-center"><Badge className="bg-yellow-100 text-yellow-800">Medium</Badge></td>
                      <td className="border border-gray-300 px-3 py-2"><Badge className="bg-blue-100 text-blue-800">Sales</Badge></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">MET004</td>
                      <td className="border border-gray-300 px-3 py-2">Order Processing Time</td>
                      <td className="border border-gray-300 px-3 py-2 text-right bg-red-50">2.8 hours</td>
                      <td className="border border-gray-300 px-3 py-2 text-center"><Badge className="bg-red-100 text-red-800">High</Badge></td>
                      <td className="border border-gray-300 px-3 py-2"><Badge className="bg-green-100 text-green-800">Operations</Badge></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">MET010</td>
                      <td className="border border-gray-300 px-3 py-2">Support Response Time</td>
                      <td className="border border-gray-300 px-3 py-2 text-right bg-red-100">4.5 hours</td>
                      <td className="border border-gray-300 px-3 py-2 text-center"><Badge className="bg-red-100 text-red-800">Critical</Badge></td>
                      <td className="border border-gray-300 px-3 py-2"><Badge className="bg-orange-100 text-orange-800">Support</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </CopyableContent>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      {onContinue && (
        <div className="flex justify-center pt-6">
          <Button 
            onClick={onContinue}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Continue to Next Lesson
          </Button>
        </div>
      )}
    </div>
  );
};

export default SmartNotificationsLesson;
