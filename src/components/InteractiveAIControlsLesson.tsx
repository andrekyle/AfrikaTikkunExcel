import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Target, Lightbulb, CheckCircle, Filter, Sliders, Search, Calendar, BarChart3, TrendingUp } from "lucide-react";
import CopyableContent from './CopyableContent';

interface InteractiveAIControlsLessonProps {
  onContinue?: () => void;
}

const InteractiveAIControlsLesson: React.FC<InteractiveAIControlsLessonProps> = ({ onContinue }) => {

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="px-4 py-2">
          <Sliders className="w-4 h-4 mr-2" />
          Lesson 4: Interactive AI Controls
        </Badge>
        <h1 className="text-4xl font-bold text-gray-900">
          Interactive AI Controls
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Master the art of creating AI-powered filters and dynamic controls that make dashboards truly interactive and intelligent
        </p>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Technical Skills</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Build dynamic filter systems with AI logic
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Create intelligent search and autocomplete features
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Implement adaptive date range controls
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Design context-aware dashboard controls
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Business Applications</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Enhance user experience with smart controls
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Reduce analysis time with intelligent filtering
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Enable self-service analytics for end users
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Improve decision-making speed and accuracy
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: Smart Sales Filter Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-purple-600" />
            Project 1: Smart Sales Filter Dashboard
          </CardTitle>
          <CardDescription>
            Build an intelligent sales dashboard with AI-powered filters that adapt to user behavior and data patterns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Project Overview</h4>
            <p className="text-blue-800">
              Create a sales dashboard with smart filters that learn from user interactions and suggest relevant filter combinations based on data patterns and business context.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Sample Sales Data</h4>
            <CopyableContent 
              label="Sales Transaction Data"
              content={`Date	Salesperson	Region	Product	Category	Revenue	Units	Customer_Type
2024-01-15	Sarah Chen	North	Laptop Pro	Electronics	R 45,000	15	Enterprise
2024-01-16	Mike Johnson	South	Office Chair	Furniture	R 12,500	25	SMB
2024-01-17	Lisa Wang	East	Smartphone	Electronics	R 28,000	40	Consumer
2024-01-18	David Brown	West	Desk Lamp	Furniture	R 3,200	16	Consumer
2024-01-19	Sarah Chen	North	Tablet	Electronics	R 18,000	20	Enterprise
2024-01-20	Emma Wilson	Central	Monitor	Electronics	R 22,000	30	SMB
2024-01-21	Mike Johnson	South	Bookshelf	Furniture	R 8,500	10	Consumer
2024-01-22	Lisa Wang	East	Keyboard	Electronics	R 4,800	24	SMB
2024-01-23	David Brown	West	Mouse	Electronics	R 2,400	30	Consumer
2024-01-24	Sarah Chen	North	Webcam	Electronics	R 6,000	20	Enterprise
2024-01-25	Emma Wilson	Central	Headphones	Electronics	R 9,600	32	Consumer
2024-01-26	Mike Johnson	South	Standing Desk	Furniture	R 15,000	8	Enterprise
2024-01-27	Lisa Wang	East	Printer	Electronics	R 12,000	15	SMB
2024-01-28	David Brown	West	Scanner	Electronics	R 8,000	10	Enterprise
2024-01-29	Sarah Chen	North	Projector	Electronics	R 25,000	5	Enterprise
2024-01-30	Emma Wilson	Central	Conference Table	Furniture	R 35,000	3	Enterprise`}
            >
              <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Date</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Salesperson</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Region</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Product</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Category</th>
                      <th className="text-right py-2 px-3 font-semibold text-gray-700">Revenue</th>
                      <th className="text-right py-2 px-3 font-semibold text-gray-700">Units</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Customer Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-15</td>
                      <td className="py-2 px-3">Sarah Chen</td>
                      <td className="py-2 px-3">North</td>
                      <td className="py-2 px-3">Laptop Pro</td>
                      <td className="py-2 px-3">Electronics</td>
                      <td className="py-2 px-3 text-right font-medium">R 45,000</td>
                      <td className="py-2 px-3 text-right">15</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Enterprise</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-16</td>
                      <td className="py-2 px-3">Mike Johnson</td>
                      <td className="py-2 px-3">South</td>
                      <td className="py-2 px-3">Office Chair</td>
                      <td className="py-2 px-3">Furniture</td>
                      <td className="py-2 px-3 text-right font-medium">R 12,500</td>
                      <td className="py-2 px-3 text-right">25</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">SMB</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-17</td>
                      <td className="py-2 px-3">Lisa Wang</td>
                      <td className="py-2 px-3">East</td>
                      <td className="py-2 px-3">Smartphone</td>
                      <td className="py-2 px-3">Electronics</td>
                      <td className="py-2 px-3 text-right font-medium">R 28,000</td>
                      <td className="py-2 px-3 text-right">40</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Consumer</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-18</td>
                      <td className="py-2 px-3">David Brown</td>
                      <td className="py-2 px-3">West</td>
                      <td className="py-2 px-3">Desk Lamp</td>
                      <td className="py-2 px-3">Furniture</td>
                      <td className="py-2 px-3 text-right font-medium">R 3,200</td>
                      <td className="py-2 px-3 text-right">16</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Consumer</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-19</td>
                      <td className="py-2 px-3">Sarah Chen</td>
                      <td className="py-2 px-3">North</td>
                      <td className="py-2 px-3">Tablet</td>
                      <td className="py-2 px-3">Electronics</td>
                      <td className="py-2 px-3 text-right font-medium">R 18,000</td>
                      <td className="py-2 px-3 text-right">20</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Enterprise</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-20</td>
                      <td className="py-2 px-3">Emma Wilson</td>
                      <td className="py-2 px-3">Central</td>
                      <td className="py-2 px-3">Monitor</td>
                      <td className="py-2 px-3">Electronics</td>
                      <td className="py-2 px-3 text-right font-medium">R 22,000</td>
                      <td className="py-2 px-3 text-right">30</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">SMB</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-21</td>
                      <td className="py-2 px-3">Mike Johnson</td>
                      <td className="py-2 px-3">South</td>
                      <td className="py-2 px-3">Bookshelf</td>
                      <td className="py-2 px-3">Furniture</td>
                      <td className="py-2 px-3 text-right font-medium">R 8,500</td>
                      <td className="py-2 px-3 text-right">10</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Consumer</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-22</td>
                      <td className="py-2 px-3">Lisa Wang</td>
                      <td className="py-2 px-3">East</td>
                      <td className="py-2 px-3">Keyboard</td>
                      <td className="py-2 px-3">Electronics</td>
                      <td className="py-2 px-3 text-right font-medium">R 4,800</td>
                      <td className="py-2 px-3 text-right">24</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">SMB</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-23</td>
                      <td className="py-2 px-3">David Brown</td>
                      <td className="py-2 px-3">West</td>
                      <td className="py-2 px-3">Mouse</td>
                      <td className="py-2 px-3">Electronics</td>
                      <td className="py-2 px-3 text-right font-medium">R 2,400</td>
                      <td className="py-2 px-3 text-right">30</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Consumer</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-24</td>
                      <td className="py-2 px-3">Sarah Chen</td>
                      <td className="py-2 px-3">North</td>
                      <td className="py-2 px-3">Webcam</td>
                      <td className="py-2 px-3">Electronics</td>
                      <td className="py-2 px-3 text-right font-medium">R 6,000</td>
                      <td className="py-2 px-3 text-right">20</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Enterprise</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-25</td>
                      <td className="py-2 px-3">Emma Wilson</td>
                      <td className="py-2 px-3">Central</td>
                      <td className="py-2 px-3">Headphones</td>
                      <td className="py-2 px-3">Electronics</td>
                      <td className="py-2 px-3 text-right font-medium">R 9,600</td>
                      <td className="py-2 px-3 text-right">32</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Consumer</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-26</td>
                      <td className="py-2 px-3">Mike Johnson</td>
                      <td className="py-2 px-3">South</td>
                      <td className="py-2 px-3">Standing Desk</td>
                      <td className="py-2 px-3">Furniture</td>
                      <td className="py-2 px-3 text-right font-medium">R 15,000</td>
                      <td className="py-2 px-3 text-right">8</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Enterprise</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-27</td>
                      <td className="py-2 px-3">Lisa Wang</td>
                      <td className="py-2 px-3">East</td>
                      <td className="py-2 px-3">Printer</td>
                      <td className="py-2 px-3">Electronics</td>
                      <td className="py-2 px-3 text-right font-medium">R 12,000</td>
                      <td className="py-2 px-3 text-right">15</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">SMB</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-28</td>
                      <td className="py-2 px-3">David Brown</td>
                      <td className="py-2 px-3">West</td>
                      <td className="py-2 px-3">Scanner</td>
                      <td className="py-2 px-3">Electronics</td>
                      <td className="py-2 px-3 text-right font-medium">R 8,000</td>
                      <td className="py-2 px-3 text-right">10</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Enterprise</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-29</td>
                      <td className="py-2 px-3">Sarah Chen</td>
                      <td className="py-2 px-3">North</td>
                      <td className="py-2 px-3">Projector</td>
                      <td className="py-2 px-3">Electronics</td>
                      <td className="py-2 px-3 text-right font-medium">R 25,000</td>
                      <td className="py-2 px-3 text-right">5</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Enterprise</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-30</td>
                      <td className="py-2 px-3">Emma Wilson</td>
                      <td className="py-2 px-3">Central</td>
                      <td className="py-2 px-3">Conference Table</td>
                      <td className="py-2 px-3">Furniture</td>
                      <td className="py-2 px-3 text-right font-medium">R 35,000</td>
                      <td className="py-2 px-3 text-right">3</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Enterprise</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CopyableContent>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Step 1: Create Smart Filter Framework</h4>
            <p className="text-gray-700 mb-3">
              Start by setting up the basic filter structure with dynamic dropdowns that update based on data relationships.
            </p>
            
            <CopyableContent 
              label="Filter Setup Formulas"
              content={`=UNIQUE(FILTER(SalesData[Region], SalesData[Revenue]>AVERAGE(SalesData[Revenue])))`}
            >
              <code className="bg-gray-50 p-2 rounded text-sm">
                {`=UNIQUE(FILTER(SalesData[Region], SalesData[Revenue]>AVERAGE(SalesData[Revenue])))`}
              </code>
            </CopyableContent>

            <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>💡 Pro Tip:</strong> This formula creates a dynamic list of regions that perform above average, making the filter intelligent by default.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Step 2: Implement Cascading Filters</h4>
            <p className="text-gray-700 mb-3">
              Create filters that automatically update based on previous selections, reducing irrelevant options.
            </p>
            
            <CopyableContent 
              label="Cascading Filter Logic"
              content={`=IF(RegionFilter<>"All", UNIQUE(FILTER(SalesData[Salesperson], SalesData[Region]=RegionFilter)), UNIQUE(SalesData[Salesperson]))`}
            >
              <code className="bg-gray-50 p-2 rounded text-sm">
                {`=IF(RegionFilter<>"All", UNIQUE(FILTER(SalesData[Salesperson], SalesData[Region]=RegionFilter)), UNIQUE(SalesData[Salesperson]))`}
              </code>
            </CopyableContent>

            <div className="mt-3 space-y-2">
              <h5 className="font-medium">Implementation Steps:</h5>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li>Create named ranges for each filter category</li>
                <li>Set up dependency chains between filters</li>
                <li>Add data validation with dynamic sources</li>
                <li>Implement reset functionality for filter chains</li>
              </ol>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Step 3: Add Intelligent Search</h4>
            <p className="text-gray-700 mb-3">
              Implement a search function that finds relevant data across multiple columns with fuzzy matching.
            </p>
            
            <CopyableContent 
              label="Smart Search Formula"
              content={`=FILTER(SalesData, (ISNUMBER(SEARCH(SearchTerm, SalesData[Product])) + ISNUMBER(SEARCH(SearchTerm, SalesData[Salesperson])) + ISNUMBER(SEARCH(SearchTerm, SalesData[Region]))) > 0)`}
            >
              <code className="bg-gray-50 p-2 rounded text-sm">
                {`=FILTER(SalesData, (ISNUMBER(SEARCH(SearchTerm, SalesData[Product])) + ISNUMBER(SEARCH(SearchTerm, SalesData[Salesperson])) + ISNUMBER(SEARCH(SearchTerm, SalesData[Region]))) > 0)`}
              </code>
            </CopyableContent>

            <div className="mt-3 p-3 bg-green-50 rounded-lg">
              <p className="text-green-800 text-sm">
                <strong>🎯 Business Impact:</strong> Users can now search for "Sarah" and find all related sales, products, or regions, dramatically improving dashboard usability.
              </p>
            </div>
          </div>


        </CardContent>
      </Card>

      {/* Project 2: Dynamic Date Range Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-green-600" />
            Project 2: Dynamic Date Range Controls
          </CardTitle>
          <CardDescription>
            Create intelligent date controls that suggest optimal time periods based on data patterns and business cycles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Project Overview</h4>
            <p className="text-green-800">
              Build date range controls that automatically detect seasonal patterns, suggest relevant comparison periods, and highlight significant date ranges based on business events.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Extended Sales Data with Dates</h4>
            <CopyableContent 
              label="Time-Series Sales Data"
              content={`Date	Week	Month	Quarter	Revenue	Units	Event_Type
2024-01-01	1	January	Q1	R 25,000	50	New Year
2024-01-08	2	January	Q1	R 18,000	36	Regular
2024-01-15	3	January	Q1	R 22,000	44	Regular
2024-01-22	4	January	Q1	R 28,000	56	Regular
2024-01-29	5	January	Q1	R 32,000	64	Regular
2024-02-05	6	February	Q1	R 35,000	70	Regular
2024-02-12	7	February	Q1	R 42,000	84	Valentine's
2024-02-19	8	February	Q1	R 38,000	76	Regular
2024-02-26	9	February	Q1	R 33,000	66	Regular
2024-03-05	10	March	Q1	R 45,000	90	Regular
2024-03-12	11	March	Q1	R 52,000	104	Regular
2024-03-19	12	March	Q1	R 48,000	96	Regular
2024-03-26	13	March	Q1	R 55,000	110	Easter
2024-04-02	14	April	Q2	R 38,000	76	Regular
2024-04-09	15	April	Q2	R 41,000	82	Regular`}
            >
              <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Date</th>
                      <th className="text-center py-2 px-3 font-semibold text-gray-700">Week</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Month</th>
                      <th className="text-center py-2 px-3 font-semibold text-gray-700">Quarter</th>
                      <th className="text-right py-2 px-3 font-semibold text-gray-700">Revenue</th>
                      <th className="text-right py-2 px-3 font-semibold text-gray-700">Units</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Event Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-01</td>
                      <td className="py-2 px-3 text-center">1</td>
                      <td className="py-2 px-3">January</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Q1</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 25,000</td>
                      <td className="py-2 px-3 text-right">50</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">New Year</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-08</td>
                      <td className="py-2 px-3 text-center">2</td>
                      <td className="py-2 px-3">January</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Q1</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 18,000</td>
                      <td className="py-2 px-3 text-right">36</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Regular</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-15</td>
                      <td className="py-2 px-3 text-center">3</td>
                      <td className="py-2 px-3">January</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Q1</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 22,000</td>
                      <td className="py-2 px-3 text-right">44</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Regular</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-22</td>
                      <td className="py-2 px-3 text-center">4</td>
                      <td className="py-2 px-3">January</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Q1</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 28,000</td>
                      <td className="py-2 px-3 text-right">56</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Regular</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-01-29</td>
                      <td className="py-2 px-3 text-center">5</td>
                      <td className="py-2 px-3">January</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Q1</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 32,000</td>
                      <td className="py-2 px-3 text-right">64</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Regular</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-02-05</td>
                      <td className="py-2 px-3 text-center">6</td>
                      <td className="py-2 px-3">February</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Q1</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 35,000</td>
                      <td className="py-2 px-3 text-right">70</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Regular</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-02-12</td>
                      <td className="py-2 px-3 text-center">7</td>
                      <td className="py-2 px-3">February</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Q1</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 42,000</td>
                      <td className="py-2 px-3 text-right">84</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs">Valentine's</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-02-19</td>
                      <td className="py-2 px-3 text-center">8</td>
                      <td className="py-2 px-3">February</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Q1</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 38,000</td>
                      <td className="py-2 px-3 text-right">76</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Regular</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-02-26</td>
                      <td className="py-2 px-3 text-center">9</td>
                      <td className="py-2 px-3">February</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Q1</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 33,000</td>
                      <td className="py-2 px-3 text-right">66</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Regular</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-03-05</td>
                      <td className="py-2 px-3 text-center">10</td>
                      <td className="py-2 px-3">March</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Q1</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 45,000</td>
                      <td className="py-2 px-3 text-right">90</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Regular</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-03-12</td>
                      <td className="py-2 px-3 text-center">11</td>
                      <td className="py-2 px-3">March</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Q1</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 52,000</td>
                      <td className="py-2 px-3 text-right">104</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Regular</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-03-19</td>
                      <td className="py-2 px-3 text-center">12</td>
                      <td className="py-2 px-3">March</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Q1</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 48,000</td>
                      <td className="py-2 px-3 text-right">96</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Regular</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-03-26</td>
                      <td className="py-2 px-3 text-center">13</td>
                      <td className="py-2 px-3">March</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Q1</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 55,000</td>
                      <td className="py-2 px-3 text-right">110</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">Easter</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-04-02</td>
                      <td className="py-2 px-3 text-center">14</td>
                      <td className="py-2 px-3">April</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Q2</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 38,000</td>
                      <td className="py-2 px-3 text-right">76</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Regular</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3">2024-04-09</td>
                      <td className="py-2 px-3 text-center">15</td>
                      <td className="py-2 px-3">April</td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Q2</span></td>
                      <td className="py-2 px-3 text-right font-medium">R 41,000</td>
                      <td className="py-2 px-3 text-right">82</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Regular</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CopyableContent>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Step 1: Create Smart Date Presets</h4>
            <p className="text-gray-700 mb-3">
              Build intelligent date presets that adapt to current business context and highlight relevant periods.
            </p>
            
            <CopyableContent 
              label="Smart Date Preset Formulas"
              content={`=TODAY()-WEEKDAY(TODAY(),2)+1  // Current Week Start
=EOMONTH(TODAY(),-1)+1  // Current Month Start  
=DATE(YEAR(TODAY()),MONTH(TODAY())-3,1)  // Last Quarter Start
=DATE(YEAR(TODAY())-1,MONTH(TODAY()),DAY(TODAY()))  // Same Period Last Year`}
            >
              <code className="bg-gray-50 p-2 rounded text-sm">
                {`=TODAY()-WEEKDAY(TODAY(),2)+1  // Current Week Start
=EOMONTH(TODAY(),-1)+1  // Current Month Start  
=DATE(YEAR(TODAY()),MONTH(TODAY())-3,1)  // Last Quarter Start
=DATE(YEAR(TODAY())-1,MONTH(TODAY()),DAY(TODAY()))  // Same Period Last Year`}
              </code>
            </CopyableContent>

            <div className="mt-3 space-y-2">
              <h5 className="font-medium">Intelligent Preset Options:</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Performance Periods:</strong> Automatically identify high/low performance weeks</li>
                <li><strong>Seasonal Comparisons:</strong> Same period last year with seasonal adjustments</li>
                <li><strong>Event-Based Ranges:</strong> Periods around holidays or business events</li>
                <li><strong>Trend Analysis:</strong> Optimal ranges for detecting trends and patterns</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Step 2: Implement Adaptive Range Suggestions</h4>
            <p className="text-gray-700 mb-3">
              Create logic that suggests optimal date ranges based on data volatility and business patterns.
            </p>
            
            <CopyableContent 
              label="Adaptive Range Logic"
              content={`=IF(STDEV(FILTER(SalesData[Revenue], (SalesData[Date]>=StartDate)*(SalesData[Date]<=EndDate))) > AVERAGE(SalesData[Revenue])*0.3, "High Volatility - Consider Longer Period", "Stable Period - Current Range Optimal")`}
            >
              <code className="bg-gray-50 p-2 rounded text-sm">
                {`=IF(STDEV(FILTER(SalesData[Revenue], (SalesData[Date]>=StartDate)*(SalesData[Date]<=EndDate))) > AVERAGE(SalesData[Revenue])*0.3, "High Volatility - Consider Longer Period", "Stable Period - Current Range Optimal")`}
              </code>
            </CopyableContent>

            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>🔍 Analysis Insight:</strong> This formula analyzes data volatility and suggests whether to expand or contract the date range for more meaningful analysis.
              </p>
            </div>
          </div>


        </CardContent>
      </Card>

      {/* Project 3: Context-Aware Dashboard Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-orange-600" />
            Project 3: Context-Aware Dashboard Controls
          </CardTitle>
          <CardDescription>
            Build intelligent controls that adapt their behavior based on user role, data context, and business rules
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 mb-2">Project Overview</h4>
            <p className="text-orange-800">
              Create dashboard controls that intelligently adapt based on user permissions, data availability, and business context to provide personalized and relevant filtering options.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">User Role and Permission Data</h4>
            <CopyableContent 
              label="User Role Configuration"
              content={`User	Role	Department	Access_Level	Regions_Allowed	Data_Scope
john.manager	Manager	Sales	Level_3	North,South,East	All_Data
sarah.analyst	Analyst	Marketing	Level_2	North,Central	Current_Year
mike.director	Director	Operations	Level_4	All	All_Data
lisa.rep	Sales_Rep	Sales	Level_1	East	Own_Data
david.vp	VP	Executive	Level_5	All	All_Data
emma.coordinator	Coordinator	Support	Level_2	Central,West	Department_Data
alex.specialist	Specialist	Finance	Level_3	All	Financial_Data
maria.lead	Team_Lead	Sales	Level_3	South,West	Team_Data`}
            >
              <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">User</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Role</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Department</th>
                      <th className="text-center py-2 px-3 font-semibold text-gray-700">Access Level</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Regions Allowed</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Data Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3 font-mono text-blue-600">john.manager</td>
                      <td className="py-2 px-3">Manager</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Sales</span></td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Level 3</span></td>
                      <td className="py-2 px-3"><span className="text-xs bg-gray-100 px-1 py-0.5 rounded mr-1">North</span><span className="text-xs bg-gray-100 px-1 py-0.5 rounded mr-1">South</span><span className="text-xs bg-gray-100 px-1 py-0.5 rounded">East</span></td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">All Data</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3 font-mono text-blue-600">sarah.analyst</td>
                      <td className="py-2 px-3">Analyst</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Marketing</span></td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">Level 2</span></td>
                      <td className="py-2 px-3"><span className="text-xs bg-gray-100 px-1 py-0.5 rounded mr-1">North</span><span className="text-xs bg-gray-100 px-1 py-0.5 rounded">Central</span></td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Current Year</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3 font-mono text-blue-600">mike.director</td>
                      <td className="py-2 px-3">Director</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Operations</span></td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Level 4</span></td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">All</span></td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">All Data</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3 font-mono text-blue-600">lisa.rep</td>
                      <td className="py-2 px-3">Sales Rep</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Sales</span></td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">Level 1</span></td>
                      <td className="py-2 px-3"><span className="text-xs bg-gray-100 px-1 py-0.5 rounded">East</span></td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Own Data</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3 font-mono text-blue-600">david.vp</td>
                      <td className="py-2 px-3">VP</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Executive</span></td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Level 5</span></td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">All</span></td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">All Data</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3 font-mono text-blue-600">emma.coordinator</td>
                      <td className="py-2 px-3">Coordinator</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs">Support</span></td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">Level 2</span></td>
                      <td className="py-2 px-3"><span className="text-xs bg-gray-100 px-1 py-0.5 rounded mr-1">Central</span><span className="text-xs bg-gray-100 px-1 py-0.5 rounded">West</span></td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">Department Data</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3 font-mono text-blue-600">alex.specialist</td>
                      <td className="py-2 px-3">Specialist</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">Finance</span></td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Level 3</span></td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">All</span></td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs">Financial Data</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-2 px-3 font-mono text-blue-600">maria.lead</td>
                      <td className="py-2 px-3">Team Lead</td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Sales</span></td>
                      <td className="py-2 px-3 text-center"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Level 3</span></td>
                      <td className="py-2 px-3"><span className="text-xs bg-gray-100 px-1 py-0.5 rounded mr-1">South</span><span className="text-xs bg-gray-100 px-1 py-0.5 rounded">West</span></td>
                      <td className="py-2 px-3"><span className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs">Team Data</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CopyableContent>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Step 1: Role-Based Filter Generation</h4>
            <p className="text-gray-700 mb-3">
              Create dynamic filters that automatically adjust based on user permissions and access levels.
            </p>
            
            <CopyableContent 
              label="Role-Based Filter Logic"
              content={`=IF(UserRole="Sales_Rep", 
  FILTER(SalesData[Region], SalesData[Salesperson]=CurrentUser),
  IF(UserRole="Manager",
    FILTER(SalesData[Region], ISNUMBER(MATCH(SalesData[Region], AllowedRegions, 0))),
    UNIQUE(SalesData[Region])
  )
)`}
            >
              <code className="bg-gray-50 p-2 rounded text-sm">
                {`=IF(UserRole="Sales_Rep", 
  FILTER(SalesData[Region], SalesData[Salesperson]=CurrentUser),
  IF(UserRole="Manager",
    FILTER(SalesData[Region], ISNUMBER(MATCH(SalesData[Region], AllowedRegions, 0))),
    UNIQUE(SalesData[Region])
  )
)`}
              </code>
            </CopyableContent>

            <div className="mt-3 space-y-2">
              <h5 className="font-medium">Access Control Features:</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Data Scope Filtering:</strong> Automatically limit data based on user permissions</li>
                <li><strong>Regional Access:</strong> Show only regions user is authorized to view</li>
                <li><strong>Time Period Limits:</strong> Restrict historical data based on role</li>
                <li><strong>Sensitive Data Masking:</strong> Hide confidential information from unauthorized users</li>
              </ul>
            </div>
          </div>


        </CardContent>
      </Card>

      {/* Advanced Techniques */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            Advanced Interactive Control Techniques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Dynamic Control Generation</h4>
              <CopyableContent 
                label="Dynamic Control Formula"
                content={`=TRANSPOSE(UNIQUE(FILTER(ControlOptions, ISNUMBER(SEARCH(UserInput, ControlOptions)))))`}
              >
                <code className="bg-gray-50 p-2 rounded text-sm">
                  {`=TRANSPOSE(UNIQUE(FILTER(ControlOptions, ISNUMBER(SEARCH(UserInput, ControlOptions)))))`}
                </code>
              </CopyableContent>
              <p className="text-sm text-gray-600 mt-2">
                Creates controls that appear and disappear based on user input and data context.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Multi-Dimensional Filtering</h4>
              <CopyableContent 
                label="Multi-Dimension Filter"
                content={`=FILTER(SalesData, (SalesData[Region]=RegionFilter)*(SalesData[Product]=ProductFilter)*(SalesData[Date]>=StartDate)*(SalesData[Date]<=EndDate))`}
              >
                <code className="bg-gray-50 p-2 rounded text-sm">
                  {`=FILTER(SalesData, (SalesData[Region]=RegionFilter)*(SalesData[Product]=ProductFilter)*(SalesData[Date]>=StartDate)*(SalesData[Date]<=EndDate))`}
                </code>
              </CopyableContent>
              <p className="text-sm text-gray-600 mt-2">
                Combines multiple filter dimensions with intelligent conflict resolution.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            Best Practices for Interactive AI Controls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">User Experience</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Keep controls intuitive and discoverable</li>
                <li>• Provide clear feedback on filter states</li>
                <li>• Enable easy reset and undo functionality</li>
                <li>• Show data impact of filter changes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Performance</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Optimize for large datasets with sampling</li>
                <li>• Implement progressive loading for options</li>
                <li>• Cache frequently used filter combinations</li>
                <li>• Use efficient formulas and avoid volatile functions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle>Key Takeaways</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">🎯 Smart Filtering</h4>
              <p className="text-blue-800 text-sm">
                Interactive AI controls transform static dashboards into intelligent, adaptive interfaces that respond to user needs and data patterns.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">⚡ User Empowerment</h4>
              <p className="text-green-800 text-sm">
                Context-aware controls enable self-service analytics, reducing dependency on technical teams and accelerating decision-making.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">🔄 Adaptive Intelligence</h4>
              <p className="text-purple-800 text-sm">
                Dynamic controls that learn from user behavior and data patterns create increasingly personalized and efficient dashboard experiences.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

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
    </div>
  );
};

export default InteractiveAIControlsLesson;
