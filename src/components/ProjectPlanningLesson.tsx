import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  ArrowRight, 
  Layers,
  Target,
  Users,
  Clock,
  Database,
  Zap,
  Shield,
  TrendingUp,
  FileText,
  Settings
} from "lucide-react";
import CopyableContent from './CopyableContent';

interface ProjectPlanningLessonProps {
  onContinue?: () => void;
}

const ProjectPlanningLesson: React.FC<ProjectPlanningLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
            <Layers className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Lesson 10: Project Planning</h1>
            <p className="text-lg text-gray-600">Plan and architect complex Excel + VBA + AI projects</p>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-indigo-600" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Technical Skills</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Project architecture design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Technical requirements analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">AI integration planning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Data architecture design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Security and compliance planning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Performance optimization strategies</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Business Applications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Stakeholder requirement gathering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Project timeline and milestone planning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Risk assessment and mitigation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Resource allocation and budgeting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Change management strategies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Success metrics and KPI definition</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: Enterprise Project Architecture */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Layers className="h-5 w-5 text-blue-600" />
            </div>
            Project 1: Enterprise Project Architecture
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step-by-step Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Step-by-Step Instructions (75 minutes)
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-blue-800 mb-2">🏗️ Phase 1: Project Scope Definition (15 minutes)</h5>
                <ul className="text-sm text-blue-700 space-y-1 ml-4">
                  <li>• <strong>Create project charter workbook</strong> with stakeholder requirements</li>
                  <li>• <strong>Define functional and non-functional requirements</strong> using structured templates</li>
                  <li>• <strong>Establish success criteria and KPIs</strong> with measurable targets</li>
                  <li>• <strong>Document constraints and assumptions</strong> for realistic planning</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-2">🎯 Phase 2: Technical Architecture Design (18 minutes)</h5>
                <ul className="text-sm text-blue-700 space-y-1 ml-4">
                  <li>• <strong>Design system architecture</strong> with component diagrams and data flows</li>
                  <li>• <strong>Plan AI integration points</strong> and API connectivity requirements</li>
                  <li>• <strong>Define data architecture</strong> with entity relationships and storage strategies</li>
                  <li>• <strong>Create security framework</strong> with access controls and data protection</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-2">📊 Phase 3: Resource Planning Matrix (15 minutes)</h5>
                <ul className="text-sm text-blue-700 space-y-1 ml-4">
                  <li>• <strong>Create resource allocation spreadsheet</strong> with skills matrix and availability</li>
                  <li>• <strong>Plan development timeline</strong> with critical path analysis</li>
                  <li>• <strong>Estimate effort and costs</strong> using historical data and benchmarks</li>
                  <li>• <strong>Define milestone deliverables</strong> with quality gates and reviews</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-2">⚠️ Phase 4: Risk Assessment Framework (15 minutes)</h5>
                <ul className="text-sm text-blue-700 space-y-1 ml-4">
                  <li>• <strong>Identify technical and business risks</strong> with probability and impact analysis</li>
                  <li>• <strong>Create mitigation strategies</strong> with contingency plans and alternatives</li>
                  <li>• <strong>Establish monitoring procedures</strong> for early risk detection</li>
                  <li>• <strong>Define escalation protocols</strong> for risk management and decision making</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-2">✅ Phase 5: Implementation Roadmap (12 minutes)</h5>
                <ul className="text-sm text-blue-700 space-y-1 ml-4">
                  <li>• <strong>Create detailed project schedule</strong> with dependencies and resource assignments</li>
                  <li>• <strong>Define testing and validation strategy</strong> with acceptance criteria</li>
                  <li>• <strong>Plan deployment and rollout</strong> with user training and support</li>
                  <li>• <strong>Establish maintenance and support framework</strong> for ongoing operations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sample Project Requirements */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Sample Enterprise Project Requirements</h4>
            <CopyableContent 
              content={`Project ID	Project Name	Business Unit	Priority	Complexity	Timeline	Budget (R)	AI Components	Success Metrics
PROJ001	Customer Analytics Platform	Sales & Marketing	Critical	High	6 months	R 2,500,000	Predictive Analytics, NLP	30% increase in conversion rates
PROJ002	Financial Risk Dashboard	Finance	High	Medium	4 months	R 1,800,000	Anomaly Detection, Forecasting	50% faster risk identification
PROJ003	Supply Chain Optimizer	Operations	High	High	8 months	R 3,200,000	Optimization AI, Demand Forecasting	20% cost reduction
PROJ004	HR Performance System	Human Resources	Medium	Medium	5 months	R 1,500,000	Sentiment Analysis, Performance Prediction	25% improvement in retention
PROJ005	Quality Control Automation	Manufacturing	Critical	High	7 months	R 2,800,000	Computer Vision, Pattern Recognition	90% defect detection accuracy
PROJ006	Customer Service Bot	Customer Service	High	Medium	3 months	R 1,200,000	Chatbot, Intent Recognition	60% reduction in response time
PROJ007	Inventory Management AI	Warehouse Operations	Medium	Medium	4 months	R 1,600,000	Demand Prediction, Optimization	15% inventory cost savings
PROJ008	Marketing Campaign Optimizer	Marketing	High	Medium	5 months	R 2,000,000	Campaign Analytics, A/B Testing	40% improvement in ROI`}
              label="Enterprise Project Portfolio Data"
            >
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left">Project ID</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Project Name</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Business Unit</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Priority</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Complexity</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Timeline</th>
                      <th className="border border-gray-300 px-3 py-2 text-right">Budget</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">AI Components</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Success Metrics</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">PROJ001</td>
                      <td className="border border-gray-300 px-3 py-2">Customer Analytics Platform</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Sales & Marketing</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Critical</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">High</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">6 months</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">R 2,500,000</td>
                      <td className="border border-gray-300 px-3 py-2">Predictive Analytics, NLP</td>
                      <td className="border border-gray-300 px-3 py-2">30% increase in conversion</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">PROJ002</td>
                      <td className="border border-gray-300 px-3 py-2">Financial Risk Dashboard</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Finance</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">High</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Medium</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">4 months</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">R 1,800,000</td>
                      <td className="border border-gray-300 px-3 py-2">Anomaly Detection, Forecasting</td>
                      <td className="border border-gray-300 px-3 py-2">50% faster risk identification</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">PROJ003</td>
                      <td className="border border-gray-300 px-3 py-2">Supply Chain Optimizer</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Operations</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">High</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">High</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">8 months</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">R 3,200,000</td>
                      <td className="border border-gray-300 px-3 py-2">Optimization AI, Demand Forecasting</td>
                      <td className="border border-gray-300 px-3 py-2">20% cost reduction</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">PROJ004</td>
                      <td className="border border-gray-300 px-3 py-2">HR Performance System</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">Human Resources</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Medium</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Medium</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">5 months</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">R 1,500,000</td>
                      <td className="border border-gray-300 px-3 py-2">Sentiment Analysis, Performance Prediction</td>
                      <td className="border border-gray-300 px-3 py-2">25% improvement in retention</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">PROJ005</td>
                      <td className="border border-gray-300 px-3 py-2">Quality Control Automation</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Manufacturing</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Critical</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">High</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2">7 months</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">R 2,800,000</td>
                      <td className="border border-gray-300 px-3 py-2">Computer Vision, Pattern Recognition</td>
                      <td className="border border-gray-300 px-3 py-2">90% defect detection accuracy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      {onContinue && (
        <div className="flex justify-center pt-6">
          <Button 
            onClick={onContinue}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg flex items-center gap-2"
          >
            Complete Course
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectPlanningLesson;
