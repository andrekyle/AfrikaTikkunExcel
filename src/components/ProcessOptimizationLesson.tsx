import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Settings, Brain, Zap, Clock, TrendingUp } from "lucide-react";
import CopyableContent from './CopyableContent';

interface ProcessOptimizationLessonProps {
  onContinue?: () => void;
}

const ProcessOptimizationLesson: React.FC<ProcessOptimizationLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Lesson Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl">
            <Settings className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Process Optimization
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              AI-enhanced workflow improvements
            </p>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-purple-500" />
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
                  <span>AI-powered process analysis and bottleneck identification</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Automated workflow optimization and efficiency metrics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Intelligent resource allocation and capacity planning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Predictive modeling for process improvement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Real-time performance monitoring and optimization</span>
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
                  <span>Operational efficiency improvements and cost reduction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Enhanced customer satisfaction through faster processes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Data-driven decision making for process improvements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Scalable workflow automation and standardization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Competitive advantage through optimized operations</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: AI Workflow Analyzer */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-purple-700">
            Project 1: AI Workflow Analyzer
          </CardTitle>
          <CardDescription>
            Build an intelligent system that analyzes business processes, identifies bottlenecks, and provides AI-generated optimization recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step-by-step Instructions */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-4 flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Step-by-Step Instructions (55 minutes)
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-purple-700 mb-2">⚙️ Phase 1: Process Mapping Setup (12 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Create workbook</strong> with sheets: Process_Data, Workflow_Steps, Performance_Metrics, AI_Analysis</li>
                  <li>• <strong>Map current processes</strong>: document workflow steps, timings, and resource requirements</li>
                  <li>• <strong>Define KPIs</strong>: establish baseline metrics for cycle time, throughput, and quality</li>
                  <li>• <strong>Set up data collection</strong>: create forms and tracking mechanisms for process data</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-700 mb-2">🔍 Phase 2: AI Analysis Engine (15 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Build bottleneck detection</strong>: identify slow steps and resource constraints</li>
                  <li>• <strong>Integrate AI insights</strong>: connect to OpenAI API for process analysis</li>
                  <li>• <strong>Create efficiency calculator</strong>: measure process performance and waste</li>
                  <li>• <strong>Develop optimization engine</strong>: generate improvement recommendations</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-700 mb-2">📊 Phase 3: Performance Dashboard (12 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Design process visualization</strong>: create flowcharts and performance charts</li>
                  <li>• <strong>Build metrics dashboard</strong>: real-time view of process KPIs</li>
                  <li>• <strong>Create comparison tools</strong>: before/after optimization analysis</li>
                  <li>• <strong>Add trend analysis</strong>: track improvement progress over time</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-700 mb-2">🚀 Phase 4: Optimization Implementation (10 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Apply AI recommendations</strong>: implement suggested process improvements</li>
                  <li>• <strong>Automate workflow steps</strong>: reduce manual tasks and errors</li>
                  <li>• <strong>Set up monitoring</strong>: track optimization impact and results</li>
                  <li>• <strong>Create feedback loop</strong>: continuous improvement mechanism</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-700 mb-2">✅ Phase 5: Testing & Validation (6 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Test optimized processes</strong>: validate improvements and measure impact</li>
                  <li>• <strong>Verify AI recommendations</strong>: ensure suggestions are practical and effective</li>
                  <li>• <strong>Check performance gains</strong>: measure cycle time, quality, and cost improvements</li>
                  <li>• <strong>Document best practices</strong>: create optimization playbook for future use</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Sample Process Performance Data</h4>
            <div className="overflow-x-auto">
              <CopyableContent content={`Process_ID	Process_Name	Current_Cycle_Time	Target_Cycle_Time	Quality_Score	Bottleneck_Step	Optimization_Priority	Department
PROC001	Order Processing	3.5 hours	2.0 hours	92%	Payment Verification	High	Sales
PROC002	Customer Onboarding	5.2 hours	3.0 hours	89%	Document Review	Critical	Customer Service
PROC003	Inventory Management	2.8 hours	2.0 hours	95%	Stock Counting	Medium	Warehouse
PROC004	Invoice Generation	1.5 hours	1.0 hour	97%	Approval Process	Medium	Finance
PROC005	Quality Control	4.2 hours	3.0 hours	91%	Testing Phase	High	Quality Assurance
PROC006	Supplier Evaluation	8.5 hours	5.0 hours	85%	Reference Checks	Critical	Procurement
PROC007	Employee Onboarding	12.0 hours	8.0 hours	88%	System Access Setup	High	Human Resources
PROC008	Product Development	45.0 hours	35.0 hours	93%	Design Review	Medium	R&D
PROC009	Customer Support	2.2 hours	1.5 hours	94%	Issue Escalation	Low	Support
PROC010	Financial Reporting	6.8 hours	4.0 hours	96%	Data Consolidation	High	Finance`}>
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Process_ID</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Process_Name</th>
                      <th className="border border-gray-300 px-3 py-2 text-right font-medium">Current_Cycle_Time</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Bottleneck_Step</th>
                      <th className="border border-gray-300 px-3 py-2 text-center font-medium">Priority</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">PROC002</td>
                      <td className="border border-gray-300 px-3 py-2">Customer Onboarding</td>
                      <td className="border border-gray-300 px-3 py-2 text-right bg-red-100">5.2 hours</td>
                      <td className="border border-gray-300 px-3 py-2">Document Review</td>
                      <td className="border border-gray-300 px-3 py-2 text-center"><Badge className="bg-red-100 text-red-800">Critical</Badge></td>
                      <td className="border border-gray-300 px-3 py-2"><Badge className="bg-purple-100 text-purple-800">Customer Service</Badge></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">PROC006</td>
                      <td className="border border-gray-300 px-3 py-2">Supplier Evaluation</td>
                      <td className="border border-gray-300 px-3 py-2 text-right bg-red-100">8.5 hours</td>
                      <td className="border border-gray-300 px-3 py-2">Reference Checks</td>
                      <td className="border border-gray-300 px-3 py-2 text-center"><Badge className="bg-red-100 text-red-800">Critical</Badge></td>
                      <td className="border border-gray-300 px-3 py-2"><Badge className="bg-indigo-100 text-indigo-800">Procurement</Badge></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">PROC007</td>
                      <td className="border border-gray-300 px-3 py-2">Employee Onboarding</td>
                      <td className="border border-gray-300 px-3 py-2 text-right bg-red-50">12.0 hours</td>
                      <td className="border border-gray-300 px-3 py-2">System Access Setup</td>
                      <td className="border border-gray-300 px-3 py-2 text-center"><Badge className="bg-red-100 text-red-800">High</Badge></td>
                      <td className="border border-gray-300 px-3 py-2"><Badge className="bg-pink-100 text-pink-800">Human Resources</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </CopyableContent>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-purple-500" />
            <span>Key Takeaways</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Technical Mastery
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>AI-powered process analysis and bottleneck identification</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Automated workflow optimization and efficiency measurement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>ROI calculation and optimization impact assessment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Real-time performance monitoring and continuous improvement</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-3 flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                Business Impact
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Significant cost reduction through process optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Improved customer satisfaction and faster service delivery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Enhanced operational efficiency and resource utilization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Data-driven insights for strategic decision making</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      {onContinue && (
        <div className="flex justify-center pt-6">
          <Button 
            onClick={onContinue}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Continue to Next Lesson
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProcessOptimizationLesson;
