import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Database, Brain, Zap, Clock, Copy } from "lucide-react";
import CopyableContent from './CopyableContent';

interface IntelligentDataProcessingLessonProps {
  onContinue?: () => void;
}

const IntelligentDataProcessingLesson: React.FC<IntelligentDataProcessingLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Lesson Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
            <Database className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Intelligent Data Processing
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              AI-powered data cleaning and transformation
            </p>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-blue-500" />
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
                  <span>AI-powered data quality assessment and anomaly detection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Automated data cleaning with intelligent pattern recognition</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Smart data transformation and standardization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>AI-driven data validation and error correction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Intelligent data enrichment and completion</span>
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
                  <span>Automated data quality improvement for better decision making</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Reduced manual data cleaning time and human errors</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Enhanced data consistency across business systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Intelligent data preparation for analytics and reporting</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Proactive data quality monitoring and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: AI Data Quality Analyzer */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-green-700">
            Project 1: AI Data Quality Analyzer
          </CardTitle>
          <CardDescription>
            Build an intelligent system that automatically assesses data quality, identifies issues, and provides AI-powered recommendations for improvement.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step-by-step Instructions */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-4 flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Step-by-Step Instructions (45 minutes)
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-green-700 mb-2">📋 Phase 1: Quality Assessment Setup (10 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Create workbook</strong> with sheets: Raw_Data, Quality_Analysis, AI_Recommendations, Clean_Data</li>
                  <li>• <strong>Set up data quality metrics</strong>: completeness, accuracy, consistency, validity, uniqueness</li>
                  <li>• <strong>Configure AI analysis parameters</strong>: thresholds, scoring weights, validation rules</li>
                  <li>• <strong>Initialize quality tracking</strong>: create quality score dashboard and trend monitoring</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-2">🔍 Phase 2: Data Profiling Engine (10 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Build statistical profiler</strong>: analyze data distributions, patterns, and anomalies</li>
                  <li>• <strong>Create pattern detection</strong>: identify data formats, naming conventions, value ranges</li>
                  <li>• <strong>Implement completeness analysis</strong>: detect missing values, null patterns, data gaps</li>
                  <li>• <strong>Set up consistency checks</strong>: cross-field validation, referential integrity, format compliance</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-2">🤖 Phase 3: AI Quality Assessment (10 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Integrate AI analysis</strong>: call OpenAI API for intelligent data quality assessment</li>
                  <li>• <strong>Generate quality insights</strong>: AI-powered anomaly detection and pattern analysis</li>
                  <li>• <strong>Create improvement recommendations</strong>: specific, actionable suggestions for data enhancement</li>
                  <li>• <strong>Build priority scoring</strong>: rank issues by business impact and effort required</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-2">📊 Phase 4: Quality Dashboard (10 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Design quality scorecard</strong>: visual representation of data quality metrics</li>
                  <li>• <strong>Create issue tracking</strong>: categorize and prioritize data quality problems</li>
                  <li>• <strong>Build trend analysis</strong>: monitor quality improvements over time</li>
                  <li>• <strong>Set up alerts</strong>: automated notifications for quality threshold breaches</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-2">✅ Phase 5: Testing & Validation (5 minutes)</h5>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Test with sample data</strong>: validate quality assessment accuracy</li>
                  <li>• <strong>Verify AI recommendations</strong>: ensure suggestions are practical and relevant</li>
                  <li>• <strong>Check dashboard functionality</strong>: confirm all metrics and visualizations work correctly</li>
                  <li>• <strong>Document findings</strong>: create quality assessment report and improvement plan</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Sample Customer Data for Quality Analysis</h4>
            <div className="overflow-x-auto">
              <CopyableContent content={`Customer_ID	Name	Email	Phone	Address	Registration_Date	Status	Revenue
CUST001	John Smith	john.smith@email.com	+27 11 123 4567	123 Main St, Johannesburg	2024-01-15	Active	R 25,500.00
CUST002	Sarah Johnson		+27 21 987 6543	456 Oak Ave, Cape Town	2024-02-20	Active	R 18,750.00
CUST003	Mike Davis	mike.davis@company.co.za	+27 31 555 1234	789 Pine Rd, Durban	2024-01-10	Inactive	R 0.00
CUST004	Lisa Wilson	lisa@email.com	+27-11-999-8888	321 Elm St, Pretoria	2024-03-05	Active	R 42,300.00
CUST005	David Brown	david.brown@invalid	+27 11 777 5555		2024-02-28	Active	R 31,200.00
CUST006	Emma Taylor	emma.taylor@company.co.za	+27 21 444 3333	654 Maple Dr, Cape Town	2024-01-25	Active	R 28,900.00
CUST007	James Wilson	james@email	+27-31-222-1111	987 Cedar Ave, Durban	Invalid Date	Active	R 15,600.00
CUST008	Anna Garcia	anna.garcia@email.com	+27 11 888 7777	147 Birch St, Johannesburg	2024-02-15	Suspended	R 22,100.00
CUST009		maria.rodriguez@company.co.za	+27 21 333 2222	258 Spruce Rd, Cape Town	2024-03-10	Active	R 19,800.00
CUST010	Robert Lee	robert.lee@email.com	+27 31 666 5555	369 Willow Ave, Durban	2024-01-30	Active	R 35,400.00`}>
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Customer_ID</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Name</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Email</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Phone</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Address</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Registration_Date</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Status</th>
                      <th className="border border-gray-300 px-3 py-2 text-right font-medium">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">CUST001</td>
                      <td className="border border-gray-300 px-3 py-2">John Smith</td>
                      <td className="border border-gray-300 px-3 py-2">john.smith@email.com</td>
                      <td className="border border-gray-300 px-3 py-2">+27 11 123 4567</td>
                      <td className="border border-gray-300 px-3 py-2">123 Main St, Johannesburg</td>
                      <td className="border border-gray-300 px-3 py-2">2024-01-15</td>
                      <td className="border border-gray-300 px-3 py-2"><Badge className="bg-green-100 text-green-800">Active</Badge></td>
                      <td className="border border-gray-300 px-3 py-2 text-right">R 25,500.00</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">CUST002</td>
                      <td className="border border-gray-300 px-3 py-2">Sarah Johnson</td>
                      <td className="border border-gray-300 px-3 py-2 bg-red-50 text-red-600"><em>Missing Email</em></td>
                      <td className="border border-gray-300 px-3 py-2">+27 21 987 6543</td>
                      <td className="border border-gray-300 px-3 py-2">456 Oak Ave, Cape Town</td>
                      <td className="border border-gray-300 px-3 py-2">2024-02-20</td>
                      <td className="border border-gray-300 px-3 py-2"><Badge className="bg-green-100 text-green-800">Active</Badge></td>
                      <td className="border border-gray-300 px-3 py-2 text-right">R 18,750.00</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">CUST003</td>
                      <td className="border border-gray-300 px-3 py-2">Mike Davis</td>
                      <td className="border border-gray-300 px-3 py-2">mike.davis@company.co.za</td>
                      <td className="border border-gray-300 px-3 py-2">+27 31 555 1234</td>
                      <td className="border border-gray-300 px-3 py-2">789 Pine Rd, Durban</td>
                      <td className="border border-gray-300 px-3 py-2">2024-01-10</td>
                      <td className="border border-gray-300 px-3 py-2"><Badge className="bg-gray-100 text-gray-800">Inactive</Badge></td>
                      <td className="border border-gray-300 px-3 py-2 text-right">R 0.00</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">CUST004</td>
                      <td className="border border-gray-300 px-3 py-2">Lisa Wilson</td>
                      <td className="border border-gray-300 px-3 py-2">lisa@email.com</td>
                      <td className="border border-gray-300 px-3 py-2 bg-orange-50 text-orange-600">+27-11-999-8888</td>
                      <td className="border border-gray-300 px-3 py-2">321 Elm St, Pretoria</td>
                      <td className="border border-gray-300 px-3 py-2">2024-03-05</td>
                      <td className="border border-gray-300 px-3 py-2"><Badge className="bg-green-100 text-green-800">Active</Badge></td>
                      <td className="border border-gray-300 px-3 py-2 text-right">R 42,300.00</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">CUST005</td>
                      <td className="border border-gray-300 px-3 py-2">David Brown</td>
                      <td className="border border-gray-300 px-3 py-2 bg-red-50 text-red-600">david.brown@invalid</td>
                      <td className="border border-gray-300 px-3 py-2">+27 11 777 5555</td>
                      <td className="border border-gray-300 px-3 py-2 bg-red-50 text-red-600"><em>Missing Address</em></td>
                      <td className="border border-gray-300 px-3 py-2">2024-02-28</td>
                      <td className="border border-gray-300 px-3 py-2"><Badge className="bg-green-100 text-green-800">Active</Badge></td>
                      <td className="border border-gray-300 px-3 py-2 text-right">R 31,200.00</td>
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Continue to Next Lesson
          </Button>
        </div>
      )}
    </div>
  );
};

export default IntelligentDataProcessingLesson;
