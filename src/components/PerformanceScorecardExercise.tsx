import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Download, RefreshCw } from "lucide-react";
import SampleDataTables from "@/components/SampleDataTables";

const PerformanceScorecardExercise = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [completed, setCompleted] = React.useState(false);

  const handleNextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setCompleted(false);
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Performance Scorecard Exercise</h3>
        <p className="text-muted-foreground mb-4">In this hands-on exercise, you'll create a dynamic performance scorecard using advanced 
          conditional formatting techniques. This type of visualization is commonly used in business 
          dashboards to quickly identify performance metrics.
        </p>
      </div>

      {/* Sample Data */}
      <SampleDataTables />

      {/* Exercise Overview */}
      <div className="bg-muted/30 p-4 rounded-lg">
        <h4 className="font-medium mb-3">What You'll Build</h4>
        <p className="text-sm text-muted-foreground mb-4">A departmental performance scorecard that visually highlights:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
          <li>Departments exceeding targets (green)</li>
          <li>Departments meeting targets within acceptable range (yellow)</li>
          <li>Underperforming departments (red)</li>
          <li>Visual data bars showing relative performance</li>
          <li>Icon sets indicating trend direction</li>
        </ul>
      </div>

      {/* Step by Step Instructions */}
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-muted/50 p-4 border-b">
          <h4 className="font-medium">Step-by-Step Guide</h4>
        </div>

        {/* Step 1 */}
        <div className={`p-4 border-b ${currentStep === 1 ? "bg-accent/20" : ""}`}>
          <div className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep > 1 ? "bg-green-500 text-white" : "bg-muted text-foreground"
            }`}>
              {currentStep > 1 ? <CheckCircle className="h-4 w-4" /> : "1"}
            </div>
            <div className="space-y-3 flex-1">
              <h5 className="font-medium">Create Your Dataset</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Open a new Excel worksheet and create the following column headers:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Department</li>
                  <li>Last Year (Currency)</li>
                  <li>Current Year (Currency)</li>
                  <li>Target (Currency)</li>
                  <li>% of Target</li>
                  <li>Growth vs Last Year</li>
                  <li>Status</li>
                </ul>
                <li>Add at least 8 different departments with sample data</li>
                <li>For the "% of Target" column, use the formula: <code>=C2/D2</code></li>
                <li>For "Growth vs Last Year", use: <code>=(C2-B2)/B2</code></li>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className={`p-4 border-b ${currentStep === 2 ? "bg-accent/20" : ""}`}>
          <div className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep > 2 ? "bg-green-500 text-white" : "bg-muted text-foreground"
            }`}>
              {currentStep > 2 ? <CheckCircle className="h-4 w-4" /> : "2"}
            </div>
            <div className="space-y-3 flex-1">
              <h5 className="font-medium">Apply Data Bars to Current Year Performance</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Select the "Current Year (Currency)" column</li>
                <li>Go to Home → Conditional Formatting → Data Bars</li>
                <li>Choose a gradient fill (blue is recommended)</li>
                <li>Right-click on the applied formatting and select "Edit Rule"</li>
                <li>Change the settings to:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Minimum: Number, Value: 0</li>
                  <li>Maximum: Automatic</li>
                  <li>Show Bar Only: Unchecked (to keep values visible)</li>
                </ul>
                <li>Click "OK" to apply the custom data bar rule</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className={`p-4 border-b ${currentStep === 3 ? "bg-accent/20" : ""}`}>
          <div className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep > 3 ? "bg-green-500 text-white" : "bg-muted text-foreground"
            }`}>
              {currentStep > 3 ? <CheckCircle className="h-4 w-4" /> : "3"}
            </div>
            <div className="space-y-3 flex-1">
              <h5 className="font-medium">Apply Color Scale to % of Target</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Select the "% of Target" column</li>
                <li>Go to Home → Conditional Formatting → Color Scales</li>
                <li>Choose a Red-Yellow-Green color scale</li>
                <li>Right-click the applied formatting and select "Edit Rule"</li>
                <li>Change settings to:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Minimum: Number, Value: 0.8, Color: Red</li>
                  <li>Midpoint: Number, Value: 1.0, Color: Yellow</li>
                  <li>Maximum: Number, Value: 1.2, Color: Green</li>
                </ul>
                <li>Click "OK" to apply the custom color scale</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className={`p-4 border-b ${currentStep === 4 ? "bg-accent/20" : ""}`}>
          <div className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep > 4 ? "bg-green-500 text-white" : "bg-muted text-foreground"
            }`}>
              {currentStep > 4 ? <CheckCircle className="h-4 w-4" /> : "4"}
            </div>
            <div className="space-y-3 flex-1">
              <h5 className="font-medium">Add Icon Sets to Growth Column</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Select the "Growth vs Last Year" column</li>
                <li>Go to Home → Conditional Formatting → Icon Sets</li>
                <li>Choose the "3 Arrows" icon set</li>
                <li>Right-click and select "Edit Rule"</li>
                <li>Change the icon settings to:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Green up arrow: {'>='} 0.1 (positive growth)</li>
                  <li>Yellow sideways arrow: 0 to 0.1 (neutral growth)</li>
                  <li>Red down arrow: {'<='} 0 (negative growth)</li>
                </ul>
                <li>Select "Show Icon Only" to hide the numerical values if desired</li>
                <li>Click "OK" to apply the custom icon set rule</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className={`p-4 border-b ${currentStep === 5 ? "bg-accent/20" : ""}`}>
          <div className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep > 5 ? "bg-green-500 text-white" : "bg-muted text-foreground"
            }`}>
              {currentStep > 5 ? <CheckCircle className="h-4 w-4" /> : "5"}
            </div>
            <div className="space-y-3 flex-1">
              <h5 className="font-medium">Create a Status Indicator with Custom Rules</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Select the "Status" column</li>
                <li>Enter formulas that output "On Track", "At Risk", or "Off Track" based on performance</li>
                <li>Use this formula: <code>=IF(E2{'>'}=1,"On Track",IF(E2{'>'}=0.9,"At Risk","Off Track"))</code></li>
                <li>Apply conditional formatting with these rules:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Format cells that contain "On Track" with green background</li>
                  <li>Format cells that contain "At Risk" with yellow background</li>
                  <li>Format cells that contain "Off Track" with red background</li>
                </ul>
                <li>Click "Apply" for each rule</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className={`p-4 ${currentStep === 6 ? "bg-accent/20" : ""}`}>
          <div className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep > 6 ? "bg-green-500 text-white" : "bg-muted text-foreground"
            }`}>
              {currentStep > 6 ? <CheckCircle className="h-4 w-4" /> : "6"}
            </div>
            <div className="space-y-3 flex-1">
              <h5 className="font-medium">Final Touches and Dashboard Enhancement</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Add a title at the top: "Department Performance Scorecard"</li>
                <li>Add the current date using: <code>=TODAY()</code></li>
                <li>Format your header row with a bold font and background color</li>
                <li>Create a Total row at the bottom using SUM functions</li>
                <li>Apply special formatting to the Total row (e.g., bold, different background)</li>
                <li>Adjust column widths for optimal readability</li>
                <li>Add cell borders where appropriate to improve clarity</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Challenge */}
      {completed && (
        <div className="bg-muted/30 p-4 rounded-lg border border-excel-green/30">
          <h4 className="font-medium text-excel-green mb-3">🏆 Challenge: Enhanced Scorecard</h4>
          <p className="text-sm mb-3">Take your scorecard to the next level with these advanced features:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li>Add a trends column with sparklines to show 6-month performance history</li>
            <li>Create a conditional format that highlights the top performing department</li>
            <li>Add a formula-based KPI indicator that combines multiple metrics into an overall score</li>
            <li>Use custom number formatting to display arrows (↑/↓) next to growth percentages</li>
            <li>Create a summary dashboard that pulls key metrics from your scorecard</li>
          </ul>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        {!completed ? (
          <>
            <Button 
              variant="outline" 
              onClick={handleReset}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span >Reset</span>
            </Button>
            <Button variant="excel" onClick={handleNextStep} className="gap-2">
              <span>{currentStep < 6 ? `Step ${currentStep + 1}` : "Complete Exercise"}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <div className="flex gap-3 ml-auto">
            <Button variant="outline" onClick={handleReset} className="gap-2">
              <RefreshCw className="h-4 w-4" />
              <span >Start Over</span>
            </Button>
            <Button asChild variant="excel" className="gap-2">
              <a href="/solutions/performance-scorecard/Scorecard_Template.xlsx" download>
                <Download className="h-4 w-4" />
                <span >Download Template</span>
              </a>
            </Button>
          </div>
        )}
      </div>

      {/* Solutions Table */}
      <div className="mt-8 border rounded-lg overflow-hidden">
        <div className="bg-excel-green/10 p-4 border-b">
          <h4 className="font-medium flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-excel-green" />
            Performance Scorecard Solutions Reference
          </h4>
        </div>
        
        <div className="p-4 space-y-6">
          {/* Expected Results Table */}
          <div>
            <h5 className="font-medium text-sm mb-2">Expected Results Table</h5>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2 text-left border">Department</th>
                    <th className="p-2 text-right border">Last Year</th>
                    <th className="p-2 text-right border">Current Year</th>
                    <th className="p-2 text-right border">Target</th>
                    <th className="p-2 text-right border">% of Target</th>
                    <th className="p-2 text-right border">Growth <span className="text-gray-400 font-normal">(with icons)</span></th>
                    <th className="p-2 text-center border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Sales</td>
                    <td className="p-2 text-right border">R450,000</td>
                    <td className="p-2 text-right border bg-blue-50">R520,000</td>
                    <td className="p-2 text-right border">R500,000</td>
                    <td className="p-2 text-right border bg-green-50">104%</td>
                    <td className="p-2 text-right border">
                      <div className="flex items-center justify-end gap-1">
                        <span>15.6%</span>
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </div>
                    </td>
                    <td className="p-2 text-center border bg-green-100">On Track</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Marketing</td>
                    <td className="p-2 text-right border">R320,000</td>
                    <td className="p-2 text-right border bg-blue-50">R295,000</td>
                    <td className="p-2 text-right border">R310,000</td>
                    <td className="p-2 text-right border bg-yellow-50">95%</td>
                    <td className="p-2 text-right border">
                      <div className="flex items-center justify-end gap-1">
                        <span>-7.8%</span>
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </td>
                    <td className="p-2 text-center border bg-yellow-100">At Risk</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Operations</td>
                    <td className="p-2 text-right border">R280,000</td>
                    <td className="p-2 text-right border bg-blue-50">R310,000</td>
                    <td className="p-2 text-right border">R300,000</td>
                    <td className="p-2 text-right border bg-green-50">103%</td>
                    <td className="p-2 text-right border">
                      <div className="flex items-center justify-end gap-1">
                        <span>10.7%</span>
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </div>
                    </td>
                    <td className="p-2 text-center border bg-green-100">On Track</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">HR</td>
                    <td className="p-2 text-right border">R180,000</td>
                    <td className="p-2 text-right border bg-blue-50">R185,000</td>
                    <td className="p-2 text-right border">R200,000</td>
                    <td className="p-2 text-right border bg-yellow-50">92.5%</td>
                    <td className="p-2 text-right border">
                      <div className="flex items-center justify-end gap-1">
                        <span>2.8%</span>
                        <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                        </svg>
                      </div>
                    </td>
                    <td className="p-2 text-center border bg-yellow-100">At Risk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Conditional Formatting Reference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h5 className="font-medium text-sm mb-3">Conditional Formatting Rules</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-green-100 border border-green-300"></div>
                  <span>On Track: {'>='}100% of target</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-yellow-100 border border-yellow-300"></div>
                  <span>At Risk: 90-99% of target</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-red-100 border border-red-300"></div>
                  <span>Off Track: {'<'}90% of target</span>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h5 className="font-medium text-sm mb-3">Icon Set Legend</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">↑</span>
                  <span>Growth {'>='} 10%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">→</span>
                  <span>Growth between 0-10%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">↓</span>
                  <span>Negative growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Icon Set Customization */}
          <div className="border rounded-lg p-4">
            <h5 className="font-medium text-sm mb-3">Customizing Icon Sets</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium mb-1">3. Icon Sets for Growth (Column F):</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Select the entire Growth column (excluding header)</li>
                  <li>Go to <span className="font-medium">Home → Conditional Formatting → Icon Sets</span></li>
                  <li>Under "Directional," choose <span className="font-medium">3 Arrows (Colored)</span></li>
                  <li>With the cells still selected, go to <span className="font-medium">Conditional Formatting → Manage Rules</span></li>
                  <li>Click on the Icon Set rule and select <span className="font-medium">Edit Rule</span></li>
                  <li>In the Edit Formatting Rule window:
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Set <span className="font-medium">Icon Style</span> to "3 Arrows (Colored)"</li>
                      <li>Change <span className="font-medium">Icon</span> to show values:</li>
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 text-green-500">↑</span>
                        <span>When value is <span className="font-medium">{'>='}10%</span> (Green up arrow)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 text-yellow-500">→</span>
                        <span>When value is <span className="font-medium">{'>='}0%</span> (Yellow right arrow)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 text-red-500">↓</span>
                        <span>When value is <span className="font-medium">{'<'}0%</span> (Red down arrow)</span>
                      </li>
                      <li>Check <span className="font-medium">Show Icon Only</span> if you want to hide the numbers</li>
                      <li>Set <span className="font-medium">Reverse Icon Order</span> to No</li>
                    </ul>
                  </li>
                  <li>Click <span className="font-medium">OK</span> to apply the changes</li>
                </ul>
                <div className="mt-2 p-3 bg-blue-50 rounded border border-blue-100 text-sm">
                  <p className="font-medium text-blue-800">Pro Tip:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>To adjust the thresholds, change the percentage values in the Icon Settings</li>
                    <li>For a cleaner look, check "Show Icon Only" and add a separate column for the actual percentage values</li>
                    <li>Use the "Format all cells based on their values" option for more customization</li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2">Common Adjustments:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Change icon style (arrows, shapes, indicators)</li>
                  <li>Adjust value thresholds for each icon</li>
                  <li>Show/hide actual cell values</li>
                  <li>Change icon order (reverse or custom)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formula Reference */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium text-sm mb-3">Key Formulas</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded border">
                <p className="text-xs font-mono text-gray-700">=C2/D2</p>
                <p className="text-xs text-gray-500 mt-1">% of Target (format as percentage)</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <p className="text-xs font-mono text-gray-700">=(C2-B2)/B2</p>
                <p className="text-xs text-gray-500 mt-1">Growth vs Last Year (format as percentage)</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <p className="text-xs font-mono text-gray-700">=IF(E2{'>='}1,"On Track",IF(E2{'>='}0.9,"At Risk","Off Track"))</p>
                <p className="text-xs text-gray-500 mt-1">Status column formula</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceScorecardExercise;
