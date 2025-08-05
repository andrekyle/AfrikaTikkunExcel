import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const ConditionalFormattingExercise = () => {
  return (
    <div className="space-y-8">
      {/* Introduction Section */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Conditional Formatting: Advanced Rules and Data Bars</h3>
        <p className="text-muted-foreground mb-4">Conditional formatting is a powerful Excel feature that changes the appearance of cells based on their values or specific conditions. 
          This makes it easier to visualize data patterns, highlight important information, and create interactive dashboards.
        </p>
      </div>
      
      {/* Key Concepts Section */}
      <div>
        <h4 className="text-lg font-medium mb-2">Key Concepts</h4>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">Basic Conditional Formatting:</span>
                  Highlight cells that meet specific criteria using predefined rules.
          </li>
          <li>
            <span className="font-medium text-foreground">Color Scales:</span>
                  Apply gradient color schemes that represent value ranges, perfect for visualizing distributions.
          </li>
          <li>
            <span className="font-medium text-foreground">Data Bars:</span>
                  Add in-cell horizontal bars that visually represent values, ideal for comparing numbers at a glance.
          </li>
          <li>
            <span className="font-medium text-foreground">Icon Sets:</span>
                  Insert small symbols based on threshold values to provide quick visual indicators.
          </li>
          <li>
            <span className="font-medium text-foreground">Custom Rules:</span>
                  Create complex formatting based on formulas for advanced scenarios.
          </li>
          <li>
            <span className="font-medium text-foreground">Rule Management:</span>
                  Edit, reorder, and combine multiple formatting rules for sophisticated visualizations.
          </li>
        </ul>
      </div>
      
      {/* Common Applications Section */}
      <div>
        <h4 className="text-lg font-medium mb-2">Common Applications</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Performance Dashboards</h5>
            <p className="text-sm text-muted-foreground">Use color coding to highlight performance metrics above or below targets, helping managers quickly identify areas needing attention.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Data Analysis</h5>
            <p className="text-sm text-muted-foreground">Apply color scales to large datasets to identify trends, outliers, and patterns that might be difficult to spot in raw numbers.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Project Management</h5>
            <p className="text-sm text-muted-foreground">Track task completion, deadlines, and resource allocation with icon sets and color-coded status indicators.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Financial Reporting</h5>
            <p className="text-sm text-muted-foreground">Highlight variances, profits vs. losses, and budget exceptions with custom rules and data bars for clear financial insights.
            </p>
          </div>
        </div>
      </div>
      
      {/* Step-by-Step Guide */}
      <div>
        <h4 className="text-lg font-medium mb-2">Applying Conditional Formatting</h4>
        <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">Select your data:</span>
                  Highlight the range of cells you want to format.
          </li>
          <li>
            <span className="font-medium text-foreground">Access Conditional Formatting:</span>
                  On the Home tab, click "Conditional Formatting" in the Styles group.
          </li>
          <li>
            <span className="font-medium text-foreground">Choose a rule type:</span>
                  Select from Highlight Cells Rules, Top/Bottom Rules, Data Bars, Color Scales, or Icon Sets.
          </li>
          <li>
            <span className="font-medium text-foreground">Define your conditions:</span>
                  Set criteria like "Greater than," "Top 10%," or specific formulas.
          </li>
          <li>
            <span className="font-medium text-foreground">Select formatting style:</span>
                  Choose colors, fill patterns, or icons that will be applied when conditions are met.
          </li>
          <li>
            <span className="font-medium text-foreground">Preview and confirm:</span>
                  Review how your formatting appears and click "OK" to apply.
          </li>
        </ol>
      </div>
      
      {/* Hands-on Exercise: Performance Scorecard */}
      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold mb-4">Hands-on Exercise: Build a Performance Scorecard</h3>
        <p className="mb-4">In this exercise, you'll create a comprehensive performance scorecard using advanced conditional formatting techniques to visualize KPIs effectively.
        </p>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-2">Step 1: Prepare Your Data</h4>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Create a new worksheet titled "Performance Scorecard"</li>
              <li>Set up column headers: Department, Sales Target, Actual Sales, % of Target, Growth vs Last Year, Customer Satisfaction</li>
              <li>Enter sample data for 5-10 departments with varying performance levels</li>
              <li>Format the "% of Target" column as percentage</li>
            </ol>
            <div className="bg-gray-100 dark:bg-slate-800 rounded-lg mt-3 p-3">
              <p className="text-xs font-mono mb-2">Sample Data Setup:</p>
              <div className="overflow-auto">
                <table className="min-w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-1">Department</th>
                      <th className="text-right p-1">Sales Target (R)</th>
                      <th className="text-right p-1">Actual Sales (R)</th>
                      <th className="text-right p-1">% of Target</th>
                      <th className="text-right p-1">Growth vs LY</th>
                      <th className="text-right p-1">Customer Satisfaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-1">Sales</td>
                      <td className="text-right p-1">1,300,000</td>
                      <td className="text-right p-1">1,350,000</td>
                      <td className="text-right p-1">103.8%</td>
                      <td className="text-right p-1">12.5%</td>
                      <td className="text-right p-1">92.5%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-1">Marketing</td>
                      <td className="text-right p-1">900,000</td>
                      <td className="text-right p-1">820,000</td>
                      <td className="text-right p-1">91.1%</td>
                      <td className="text-right p-1">9.3%</td>
                      <td className="text-right p-1">88.2%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-1">Operations</td>
                      <td className="text-right p-1">1,050,000</td>
                      <td className="text-right p-1">950,000</td>
                      <td className="text-right p-1">90.5%</td>
                      <td className="text-right p-1">-3.1%</td>
                      <td className="text-right p-1">85.7%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-1">Finance</td>
                      <td className="text-right p-1">480,000</td>
                      <td className="text-right p-1">490,000</td>
                      <td className="text-right p-1">102.1%</td>
                      <td className="text-right p-1">8.9%</td>
                      <td className="text-right p-1">94.0%</td>
                    </tr>
                    <tr>
                      <td className="p-1">IT</td>
                      <td className="text-right p-1">850,000</td>
                      <td className="text-right p-1">920,000</td>
                      <td className="text-right p-1">108.2%</td>
                      <td className="text-right p-1">10.8%</td>
                      <td className="text-right p-1">89.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-xs font-mono mt-4 mb-2">Expected Output with Conditional Formatting:</p>
              <div className="overflow-auto">
                <table className="min-w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-1">Department</th>
                      <th className="text-right p-1">Sales Target (R)</th>
                      <th className="text-right p-1">Actual Sales (R)</th>
                      <th className="text-right p-1">% of Target</th>
                      <th className="text-right p-1">Growth vs LY</th>
                      <th className="text-right p-1">Customer Satisfaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-1">Sales</td>
                      <td className="text-right p-1">1,300,000</td>
                      <td className="text-right p-1 bg-green-50 dark:bg-green-900">1,350,000</td>
                      <td className="text-right p-1 text-green-700 dark:text-green-300 font-medium">103.8%</td>
                      <td className="text-right p-1 text-green-700 dark:text-green-300 font-medium">12.5%</td>
                      <td className="text-right p-1">
                        <span className="inline-flex items-center">
                          92.5%
                          <svg className="w-4 h-4 ml-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-1">Marketing</td>
                      <td className="text-right p-1">900,000</td>
                      <td className="text-right p-1 bg-red-50 dark:bg-red-900">820,000</td>
                      <td className="text-right p-1 text-yellow-600 dark:text-yellow-400 font-medium">91.1%</td>
                      <td className="text-right p-1 text-green-700 dark:text-green-300 font-medium">9.3%</td>
                      <td className="text-right p-1">
                        <span className="inline-flex items-center">
                          88.2%
                          <svg className="w-4 h-4 ml-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 14.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L15 9.414V12z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-1">Operations</td>
                      <td className="text-right p-1">1,050,000</td>
                      <td className="text-right p-1 bg-red-50 dark:bg-red-900">950,000</td>
                      <td className="text-right p-1 text-yellow-600 dark:text-yellow-400 font-medium">90.5%</td>
                      <td className="text-right p-1 text-red-600 dark:text-red-400 font-medium">-3.1%</td>
                      <td className="text-right p-1">
                        <span className="inline-flex items-center">
                          85.7%
                          <svg className="w-4 h-4 ml-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 14.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L15 9.414V12z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-1">Finance</td>
                      <td className="text-right p-1">480,000</td>
                      <td className="text-right p-1 bg-green-50 dark:bg-green-900">490,000</td>
                      <td className="text-right p-1 text-green-700 dark:text-green-300 font-medium">102.1%</td>
                      <td className="text-right p-1 text-green-700 dark:text-green-300 font-medium">8.9%</td>
                      <td className="text-right p-1">
                        <span className="inline-flex items-center">
                          94.0%
                          <svg className="w-4 h-4 ml-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1">IT</td>
                      <td className="text-right p-1">850,000</td>
                      <td className="text-right p-1 bg-green-50 dark:bg-green-900">920,000</td>
                      <td className="text-right p-1 text-green-700 dark:text-green-300 font-medium">108.2%</td>
                      <td className="text-right p-1 text-green-700 dark:text-green-300 font-medium">10.8%</td>
                      <td className="text-right p-1">
                        <span className="inline-flex items-center">
                          89.5%
                          <svg className="w-4 h-4 ml-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="inline-flex items-center mr-3">
                    <span className="w-3 h-3 rounded-full bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 mr-1"></span>
                    Above Target
                  </span>
                  <span className="inline-flex items-center mr-3">
                    <span className="w-3 h-3 rounded-full bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 mr-1"></span>
                    Below Target
                  </span>
                  <span className="inline-flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    Good Performance
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-2">Step 2: Apply Basic Conditional Formatting</h4>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Select the "% of Target" column</li>
              <li>Go to Home → Conditional Formatting → Highlight Cells Rules → Greater Than</li>
              <li>Enter 100% and choose "Green Fill with Dark Green Text"</li>
              <li>Apply another rule: Home → Conditional Formatting → Highlight Cells Rules → Less Than</li>
              <li>Enter 90% and choose "Light Red Fill with Dark Red Text"</li>
              <li>For values between 90-100%, create a custom rule with yellow formatting</li>
            </ol>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-2">Step 3: Add Data Bars</h4>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Select the "Actual Sales" column</li>
              <li>Go to Home → Conditional Formatting → Data Bars</li>
              <li>Choose a gradient fill style (blue is recommended)</li>
              <li>Click "More Rules" to customize:</li>
              <li className="pl-4">Set the minimum value to 0</li>
              <li className="pl-4">Set the maximum value to "Highest value"</li>
              <li className="pl-4">Check "Show Bar Only" to hide the numbers</li>
            </ol>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-2">Step 4: Use Icon Sets for Customer Satisfaction</h4>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Select the "Customer Satisfaction" column</li>
              <li>Go to Home → Conditional Formatting → Icon Sets → 3 Ratings</li>
              <li>Click "More Rules" to customize the thresholds:</li>
              <li className="pl-4">Green icon: &gt;= 4.0</li>
              <li className="pl-4">Yellow icon: 3.5 - 4.0</li>
              <li className="pl-4">Red icon: &lt;= 3.5</li>
              <li>Choose to display icon and cell value</li>
            </ol>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-2">Step 5: Create a Custom Formula Rule</h4>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Select the "Growth vs Last Year" column</li>
              <li>Go to Home → Conditional Formatting → New Rule</li>
              <li>Select "Use a formula to determine which cells to format"</li>
              <li>Enter this formula: <code>=AND(B2 &gt; 0,C2/B2&gt;=1)</code></li>
              <li>Click "Format" and choose a dark green background</li>
              <li>Create another rule with formula: <code>=AND(B2 &gt; 0,C2/B2&lt;1,C2/B2&gt;=0.9)</code></li>
              <li>Format with a yellow background</li>
              <li>Create a third rule for underperformance with formula: <code>=AND(B2 &gt; 0,C2/B2&lt;0.9)</code></li>
              <li>Format with a red background</li>
            </ol>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-2">Step 6: Manage and Finalize Your Rules</h4>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Go to Home → Conditional Formatting → Manage Rules</li>
              <li>Review all your applied rules</li>
              <li>Adjust the order of rules using the up/down arrows (rules are evaluated top to bottom)</li>
              <li>Modify any formatting as needed for clarity</li>
              <li>Add a title, current date, and any other relevant information to complete your scorecard</li>
            </ol>
          </div>
          
          <div className="bg-gray-50 dark:bg-slate-900 border rounded-lg p-4">
            <h4 className="font-medium mb-2">Challenge: Enhanced Scorecard</h4>
            <p className="text-sm mb-3">Take your scorecard to the next level by adding these advanced features:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Add a trends column with sparklines to show 6-month performance history</li>
              <li>Create a conditional format that highlights the top performing department</li>
              <li>Add a formula-based KPI indicator that combines multiple metrics into an overall score</li>
              <li>Use custom number formatting to display arrows (↑/↓) next to growth percentages</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Tips Section */}
      <div className="bg-gray-50 dark:bg-slate-900 border rounded-lg p-4">
        <h4 className="font-medium mb-2">Pro Tips</h4>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">Use Clear Stop Points:</span>
                  When creating color scales, define specific values for minimum/maximum points rather than using auto-calculated extremes.
          </li>
          <li>
            <span className="font-medium text-foreground">Rule Order Matters:</span>
                  Rules are evaluated top-down in the Manage Rules dialog. Place more specific rules at the top.
          </li>
          <li>
            <span className="font-medium text-foreground">Copy Formatting:</span>
                  Use the Format Painter to quickly apply conditional formatting from one range to another.
          </li>
          <li>
            <span className="font-medium text-foreground">Rule Management:</span>
                  Regularly review and clean up rules to maintain spreadsheet performance.
          </li>
          <li>
            <span className="font-medium text-foreground">Consider Accessibility:</span>
                  Don't rely on color alone; use icons or patterns for people with color vision deficiencies.
          </li>
        </ul>
      </div>
      
      {/* Next Steps Button */}
      <div className="flex justify-end">
        <Button variant="excel" className="gap-2">
          <span >Continue to Practice</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ConditionalFormattingExercise;
