import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

const DashboardDesignExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  // Sample data strings for the exercise
  const salesDataCSV = `Date,Region,Product,Sales,Units,Target,PrevYearSales,MarketShare
2023-01-15,North,Laptops,125000,250,130000,115000,0.28
2023-01-15,North,Desktops,85000,170,90000,80000,0.22
2023-01-15,North,Tablets,45000,300,50000,40000,0.15
2023-01-15,South,Laptops,95000,190,100000,85000,0.24
2023-01-15,South,Desktops,65000,130,70000,60000,0.18
2023-01-15,South,Tablets,40000,267,45000,35000,0.12
2023-01-15,East,Laptops,110000,220,115000,100000,0.26
2023-01-15,East,Desktops,75000,150,80000,70000,0.20
2023-01-15,East,Tablets,42000,280,45000,38000,0.14
2023-01-15,West,Laptops,135000,270,140000,120000,0.30
2023-01-15,West,Desktops,95000,190,100000,85000,0.24
2023-01-15,West,Tablets,50000,333,55000,45000,0.17
2023-02-15,North,Laptops,130000,260,135000,120000,0.29
2023-02-15,North,Desktops,88000,176,92000,82000,0.23
2023-02-15,North,Tablets,47000,313,52000,42000,0.16
2023-02-15,South,Laptops,98000,196,105000,88000,0.25
2023-02-15,South,Desktops,68000,136,73000,63000,0.19
2023-02-15,South,Tablets,42000,280,48000,37000,0.13
2023-02-15,East,Laptops,115000,230,120000,105000,0.27
2023-02-15,East,Desktops,78000,156,83000,73000,0.21
2023-02-15,East,Tablets,44000,293,48000,40000,0.15
2023-02-15,West,Laptops,140000,280,145000,125000,0.31
2023-02-15,West,Desktops,98000,196,103000,88000,0.25
2023-02-15,West,Tablets,53000,353,58000,48000,0.18
2023-03-15,North,Laptops,132000,264,136000,122000,0.30
2023-03-15,North,Desktops,90000,180,94000,84000,0.24
2023-03-15,North,Tablets,48000,320,53000,43000,0.17`;

  const marketingDataCSV = `Campaign,Channel,Spend,Impressions,Clicks,Conversions,Revenue,StartDate,EndDate,TargetAudience
Summer Sale,Email,15000,500000,25000,1500,75000,2023-06-01,2023-06-30,Existing Customers
Summer Sale,Social Media,25000,1200000,45000,2000,100000,2023-06-01,2023-06-30,General
Summer Sale,Search,30000,800000,60000,3000,150000,2023-06-01,2023-06-30,In-Market
Back to School,Email,18000,550000,27500,1650,82500,2023-08-01,2023-08-31,Parents
Back to School,Social Media,28000,1300000,49000,2200,110000,2023-08-01,2023-08-31,Students
Back to School,Search,32000,850000,63000,3150,157500,2023-08-01,2023-08-31,Education
Holiday Promo,Email,22000,600000,30000,1800,90000,2023-11-15,2023-12-31,All Segments
Holiday Promo,Social Media,35000,1500000,55000,2500,125000,2023-11-15,2023-12-31,Gift Buyers
Holiday Promo,Search,40000,950000,70000,3500,175000,2023-11-15,2023-12-31,High Intent`;

  const financialDataCSV = `Month,Revenue,Expenses,Profit,OperatingMargin,CashBalance,AccountsReceivable,AccountsPayable,InventoryValue,EmployeeCount
Jan-2023,1250000,875000,375000,0.30,450000,320000,280000,550000,125
Feb-2023,1180000,826000,354000,0.30,475000,335000,265000,530000,126
Mar-2023,1320000,924000,396000,0.30,510000,350000,295000,570000,128
Apr-2023,1275000,892500,382500,0.30,535000,360000,270000,545000,130
May-2023,1350000,945000,405000,0.30,565000,375000,310000,580000,132
Jun-2023,1500000,1050000,450000,0.30,620000,390000,325000,610000,135
Jul-2023,1400000,980000,420000,0.30,650000,405000,315000,590000,137
Aug-2023,1450000,1015000,435000,0.30,685000,420000,330000,605000,140
Sep-2023,1550000,1085000,465000,0.30,720000,440000,345000,625000,142
Oct-2023,1600000,1120000,480000,0.30,765000,455000,360000,640000,145
Nov-2023,1750000,1225000,525000,0.30,820000,470000,380000,670000,148
Dec-2023,2000000,1400000,600000,0.30,900000,500000,410000,700000,150`;

  const webAnalyticsDataCSV = `Date,TotalVisits,UniqueVisitors,PageViews,BounceRate,AvgSessionDuration,ConversionRate,MobileUsers,DesktopUsers,TabletUsers
2023-01-01,12500,8750,42500,0.35,185,0.045,5250,6500,750
2023-02-01,13200,9240,44880,0.34,192,0.047,5808,6600,792
2023-03-01,14800,10360,50320,0.32,205,0.051,6808,7104,888
2023-04-01,14200,9940,48280,0.33,198,0.049,6534,6816,852
2023-05-01,15500,10850,52700,0.31,210,0.053,7595,6975,930
2023-06-01,16800,11760,57120,0.29,218,0.057,8568,7224,1008
2023-07-01,15800,11060,53720,0.30,215,0.055,8058,6794,948
2023-08-01,16200,11340,55080,0.30,212,0.056,8262,7128,972
2023-09-01,17500,12250,59500,0.28,220,0.059,9275,7350,1050
2023-10-01,18200,12740,61880,0.27,225,0.061,9828,7462,1092
2023-11-01,19800,13860,67320,0.26,230,0.064,10890,7920,1188
2023-12-01,22500,15750,76500,0.25,235,0.068,12375,9000,1350`;

  // Handler for copy buttons
  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus({ ...copyStatus, [key]: true });
    setTimeout(() => setCopyStatus({ ...copyStatus, [key]: false }), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Dashboard Design Principles</h2>
        <p className="text-sm text-muted-foreground">Effective dashboard design combines data visualization best practices with a deep understanding of user needs. 
          A well-designed dashboard communicates key insights at a glance, enables data-driven decision making, and 
          provides intuitive navigation to additional details. This exercise will guide you through the process of 
          creating effective Excel dashboards that balance aesthetics with functionality.
        </p>
      </div>

      {/* Sample Datasets */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Sample Datasets</h3>
        <p className="text-sm text-muted-foreground">Use these sample datasets for the hands-on exercises. Copy each dataset and paste it into separate 
          worksheets in Excel to follow along with the dashboard design process.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Sales Performance Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(salesDataCSV, "salesData")}
                >
                  {copyStatus["salesData"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {salesDataCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Marketing Campaign Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(marketingDataCSV, "marketingData")}
                >
                  {copyStatus["marketingData"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {marketingDataCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Financial KPI Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(financialDataCSV, "financialData")}
                >
                  {copyStatus["financialData"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {financialDataCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Website Analytics Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(webAnalyticsDataCSV, "webAnalyticsData")}
                >
                  {copyStatus["webAnalyticsData"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {webAnalyticsDataCSV}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hands-on Exercise */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Hands-on Exercise: KPI Dashboard Design (Stage by Stage)</h3>
        <p className="text-sm text-muted-foreground">In this exercise, you'll learn how to create an effective Excel dashboard by following a structured, 
          stage-by-stage approach. Each stage builds upon the previous one, resulting in a comprehensive, 
          interactive dashboard that effectively communicates key performance indicators.
        </p>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Dashboard Development Stages</h4>
            
            <ol className="list-decimal pl-5 space-y-6 text-sm">
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 1: Planning and Requirements Gathering</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Define dashboard purpose and audience:
                    <ul>
                      <li>Create a new Excel workbook and add a "Planning" worksheet</li>
                      <li>Document the primary purpose of your dashboard (e.g., sales performance tracking)</li>
                      <li>Identify key stakeholders and their specific data needs</li>
                      <li>Define how often the dashboard will be updated (daily, weekly, monthly)</li>
                    </ul>
                  </li>
                  <li>Identify key metrics and KPIs:
                    <ul>
                      <li>List the most important metrics for your dashboard (5-7 maximum for main view)</li>
                      <li>For each KPI, document:
                        <ul>
                          <li>Calculation method/formula</li>
                          <li>Data source</li>
                          <li>Target/benchmark values</li>
                          <li>Visualization type best suited for the KPI</li>
                        </ul>
                      </li>
                      <li>Define relationships between metrics to guide dashboard flow</li>
                    </ul>
                  </li>
                  <li>Create a dashboard wireframe:
                    <ul>
                      <li>In a new "Wireframe" worksheet, use simple shapes to sketch your dashboard layout</li>
                      <li>Divide the dashboard into logical sections (KPI summary, trends, details)</li>
                      <li>Plan placement of filters and interactive elements</li>
                      <li>Determine size and positioning of each chart/visualization</li>
                      <li>Consider information hierarchy - most important metrics should be prominently positioned</li>
                    </ul>
                  </li>
                  <li>Data inventory and preparation:
                    <ul>
                      <li>Import the sample datasets into separate worksheets</li>
                      <li>Create a data dictionary documenting field names and descriptions</li>
                      <li>Identify any data transformations needed (calculations, aggregations, formatting)</li>
                      <li>Plan how data will be refreshed/updated in the future</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 2: Setting Up the Dashboard Structure</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create the dashboard worksheet:
                    <ul>
                      <li>Add a new worksheet named "Dashboard"</li>
                      <li>Set the zoom level to 80-100% for optimal viewing</li>
                      <li>Hide gridlines (View → Show → uncheck Gridlines)</li>
                      <li>Set appropriate page orientation and print settings</li>
                    </ul>
                  </li>
                  <li>Implement a grid system:
                    <ul>
                      <li>Create a consistent grid structure using merged cells or carefully planned cell dimensions</li>
                      <li>Add thin borders or subtle background colors to define sections</li>
                      <li>Set appropriate row heights and column widths</li>
                      <li>Create designated areas for:
                        <ul>
                          <li>Dashboard title and description</li>
                          <li>Filters and controls</li>
                          <li>KPI summary section</li>
                          <li>Trend analysis section</li>
                          <li>Detailed analysis section</li>
                          <li>Footer with data sources/last update info</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Set up visual hierarchy:
                    <ul>
                      <li>Add a dashboard title using a large, bold font</li>
                      <li>Create section headers with medium-sized fonts</li>
                      <li>Use consistent font sizes for labels, values, and annotations</li>
                      <li>Implement a color scheme (2-3 primary colors, 2-3 accent colors)</li>
                      <li>Create a simple legend or key explaining any color coding</li>
                    </ul>
                  </li>
                  <li>Add navigation elements:
                    <ul>
                      <li>Create simple navigation buttons or hyperlinks to other worksheets</li>
                      <li>Add a home button that returns to the main dashboard view</li>
                      <li>Consider adding tabs for different dashboard views</li>
                      <li>Include any necessary instructions for using the dashboard</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 3: Designing Key Performance Indicators</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create a KPI summary section:
                    <ul>
                      <li>In the top section of your dashboard, allocate space for 4-6 key metrics</li>
                      <li>For each KPI, create a card-like structure containing:
                        <ul>
                          <li>Metric name (clear, concise label)</li>
                          <li>Current value (large, bold font)</li>
                          <li>Comparison to target or previous period</li>
                          <li>Trend indicator (up/down arrow or sparkline)</li>
                        </ul>
                      </li>
                      <li>Use ROUND, TEXT, or FIXED functions for proper number formatting</li>
                      <li>Add VALUE, TEXT, and CONCATENATE for combined text displays</li>
                    </ul>
                  </li>
                  <li>Implement conditional formatting for KPIs:
                    <ul>
                      <li>Add color-coded backgrounds or icons based on performance:
                        <ul>
                          <li>Green for above target/improving</li>
                          <li>Yellow for near target/stable</li>
                          <li>Red for below target/declining</li>
                        </ul>
                      </li>
                      <li>Use data bars or icon sets to show progress toward goals</li>
                      <li>Create custom conditional formatting rules using formulas</li>
                      <li>Add visual indicators like Harvey Balls or traffic lights using Unicode characters or shapes</li>
                    </ul>
                  </li>
                  <li>Add trend indicators:
                    <ul>
                      <li>Create sparklines for each KPI showing historical trends</li>
                      <li>Add percentage change calculations with appropriate up/down indicators</li>
                      <li>Use the CHAR function for arrow symbols (↑ = CHAR(8593), ↓ = CHAR(8595))</li>
                      <li>Format trends with appropriate colors (green for positive, red for negative)</li>
                    </ul>
                  </li>
                  <li>Create interactive KPI tooltips (optional):
                    <ul>
                      <li>Use Data Validation and VLOOKUP to create hover-over explanations</li>
                      <li>Add comments with formula explanations</li>
                      <li>Include reference lines or thresholds for context</li>
                      <li>Provide links to detailed analysis for each KPI</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 4: Adding Charts and Visualizations</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Select appropriate chart types:
                    <ul>
                      <li>Line charts for trends over time</li>
                      <li>Bar/column charts for comparisons across categories</li>
                      <li>Pie/donut charts for composition (limit to 5-7 segments max)</li>
                      <li>Scatter plots for correlation analysis</li>
                      <li>Gauge charts for progress toward goals</li>
                      <li>Waterfall charts for financial analysis</li>
                      <li>Heat maps for comparative performance</li>
                    </ul>
                  </li>
                  <li>Create clean, effective charts:
                    <ul>
                      <li>Add a time series chart showing primary KPI trends</li>
                      <li>Create a comparison chart for performance by region/product</li>
                      <li>Add a composition chart showing breakdowns</li>
                      <li>Build a relationship chart showing correlations</li>
                      <li>For each chart:
                        <ul>
                          <li>Remove chart junk (gridlines, borders, unnecessary labels)</li>
                          <li>Add clear titles and concise labels</li>
                          <li>Use consistent colors matching your dashboard theme</li>
                          <li>Ensure appropriate axis scaling and formatting</li>
                          <li>Add data labels only where necessary</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Implement small multiples (where appropriate):
                    <ul>
                      <li>Create a series of small, identical charts for different segments</li>
                      <li>Ensure consistent scales across all small multiples</li>
                      <li>Use small multiples to compare patterns across regions, products, or time periods</li>
                      <li>Label each multiple clearly but minimally</li>
                    </ul>
                  </li>
                  <li>Add annotations and context:
                    <ul>
                      <li>Highlight important data points or anomalies</li>
                      <li>Add reference lines for targets or benchmarks</li>
                      <li>Include annotations explaining significant changes or events</li>
                      <li>Use text boxes or shapes to add context where needed</li>
                      <li>Consider adding a small legend or explanatory note for complex visualizations</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 5: Adding Interactive Elements</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create dashboard filters:
                    <ul>
                      <li>Add a filter section at the top of your dashboard</li>
                      <li>Create dropdown filters for key dimensions (time, region, product)</li>
                      <li>Use Data Validation lists for simple filters</li>
                      <li>Add slicers for more visual filtering options</li>
                      <li>Create date range selectors using form controls</li>
                    </ul>
                  </li>
                  <li>Connect filters to visualizations:
                    <ul>
                      <li>Use INDIRECT, OFFSET, or INDEX/MATCH functions to make charts dynamic</li>
                      <li>Create named ranges that update based on filter selections</li>
                      <li>Set up formulas that recalculate KPIs based on filters</li>
                      <li>Add visual indicators showing which filters are currently applied</li>
                    </ul>
                  </li>
                  <li>Create drill-down capabilities:
                    <ul>
                      <li>Add hyperlinks to detailed analysis worksheets</li>
                      <li>Create buttons that reveal additional detail on demand</li>
                      <li>Use CHOOSE or SWITCH functions to toggle between different views</li>
                      <li>Add "show details" buttons that expand sections of the dashboard</li>
                    </ul>
                  </li>
                  <li>Add user-controlled calculations:
                    <ul>
                      <li>Create scenario selection dropdowns</li>
                      <li>Add parameter inputs that users can adjust</li>
                      <li>Create toggle buttons for different calculation methods</li>
                      <li>Add forecast horizon adjusters</li>
                      <li>Implement sensitivity analysis controls</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 6: Formatting and Visual Polish</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Implement a cohesive color scheme:
                    <ul>
                      <li>Define a primary color for your dashboard theme</li>
                      <li>Select complementary colors for secondary elements</li>
                      <li>Choose accent colors for highlights and alerts</li>
                      <li>Use color psychology principles (blue for trust, green for growth, etc.)</li>
                      <li>Ensure sufficient contrast for readability</li>
                      <li>Apply consistent colors across all charts and elements</li>
                    </ul>
                  </li>
                  <li>Add professional formatting:
                    <ul>
                      <li>Use consistent fonts throughout (max 2-3 font families)</li>
                      <li>Apply proper number formatting for all metrics</li>
                      <li>Add thousands separators and decimal places appropriately</li>
                      <li>Use currency, percentage, and date formats consistently</li>
                      <li>Ensure alignment consistency (right-align numbers, left-align text)</li>
                      <li>Add subtle borders or background shading to separate sections</li>
                    </ul>
                  </li>
                  <li>Add explanatory elements:
                    <ul>
                      <li>Create a dashboard title that explains the purpose</li>
                      <li>Add concise chart titles that highlight insights</li>
                      <li>Include brief annotations explaining key findings</li>
                      <li>Add tooltips or comments for complex metrics</li>
                      <li>Create a small legend or key for color coding</li>
                      <li>Include information about data sources and update frequency</li>
                    </ul>
                  </li>
                  <li>Implement white space and visual hierarchy:
                    <ul>
                      <li>Ensure adequate spacing between dashboard sections</li>
                      <li>Use white space strategically to group related items</li>
                      <li>Apply the squint test - dashboard should be readable at a glance</li>
                      <li>Ensure the most important information stands out visually</li>
                      <li>Remove any decorative elements that don't add informational value</li>
                      <li>Check overall balance and visual flow from top to bottom, left to right</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 7: Testing and Refinement</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Test with various data scenarios:
                    <ul>
                      <li>Test the dashboard with different filter selections</li>
                      <li>Verify that all calculations are correct</li>
                      <li>Check conditional formatting with extreme values</li>
                      <li>Test how the dashboard handles missing data</li>
                      <li>Verify that all interactive elements work as expected</li>
                      <li>Test the dashboard with a larger dataset to check performance</li>
                    </ul>
                  </li>
                  <li>Optimize for performance:
                    <ul>
                      <li>Replace volatile functions (OFFSET, INDIRECT, NOW) when possible</li>
                      <li>Use structured references and defined names</li>
                      <li>Consolidate and simplify complex formulas</li>
                      <li>Limit conditional formatting to essential ranges</li>
                      <li>Remove unnecessary calculations or array formulas</li>
                      <li>Consider using Power Pivot for very large datasets</li>
                    </ul>
                  </li>
                  <li>Gather user feedback:
                    <ul>
                      <li>Share the dashboard with potential users for review</li>
                      <li>Ask specific questions about usability and clarity</li>
                      <li>Observe users interacting with the dashboard</li>
                      <li>Document any confusion or questions users have</li>
                      <li>Collect suggestions for improvements or additional features</li>
                    </ul>
                  </li>
                  <li>Iterate and improve:
                    <ul>
                      <li>Revise the dashboard based on feedback</li>
                      <li>Add any missing key information</li>
                      <li>Simplify overly complex elements</li>
                      <li>Enhance explanatory text if needed</li>
                      <li>Create documentation for dashboard maintenance</li>
                      <li>Plan for future updates and enhancements</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 8: Advanced Dashboard Techniques (Optional)</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Add dynamic titles and annotations:
                    <ul>
                      <li>Create formulas that update chart titles based on filter selections</li>
                      <li>Add automatically generated insights using conditional logic</li>
                      <li>Implement dynamic date references in headers and footers</li>
                      <li>Build automated commentary that highlights key changes or trends</li>
                    </ul>
                  </li>
                  <li>Create custom visualizations:
                    <ul>
                      <li>Build custom gauges or speedometers using shapes and formulas</li>
                      <li>Create waffle charts for part-to-whole relationships</li>
                      <li>Design bullet graphs for performance against targets</li>
                      <li>Build custom progress bars or thermometer charts</li>
                      <li>Create cascade/waterfall charts for financial analysis</li>
                    </ul>
                  </li>
                  <li>Implement advanced interactivity:
                    <ul>
                      <li>Create a dashboard navigation system with buttons and hyperlinks</li>
                      <li>Add collapsible sections using form controls</li>
                      <li>Implement pop-up details using shapes and object properties</li>
                      <li>Create custom tooltip systems using OFFSET and VLOOKUP</li>
                      <li>Build interactive what-if analysis tools</li>
                    </ul>
                  </li>
                  <li>Optimize for different platforms (optional):
                    <ul>
                      <li>Create different layouts for desktop and mobile viewing</li>
                      <li>Build print-friendly versions of key dashboard views</li>
                      <li>Design export-friendly formats for presentations</li>
                      <li>Create lightweight versions for sharing externally</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Dashboard Design Reference */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">Dashboard Design Reference</h3>
        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Dashboard Design Principles</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Clarity First:</strong>
                  Every element should serve a clear purpose</li>
            <li><strong>Simplicity:</strong>
                  Remove any element that doesn't contribute to understanding</li>
            <li><strong>Context:</strong>
                  Provide benchmarks, targets, or historical context for numbers</li>
            <li><strong>Focus:</strong>
                  Highlight the most important information visually</li>
            <li><strong>Hierarchy:</strong>
                  Organize information from most to least important</li>
            <li><strong>Consistency:</strong>
                  Use consistent formatting, labeling, and positioning</li>
            <li><strong>Actionability:</strong>
                  Design to support specific decisions or actions</li>
            <li><strong>Audience-Centricity:</strong>
                  Design for your specific audience's needs</li>
            <li><strong>Efficiency:</strong>
                  Enable viewers to understand key points quickly</li>
            <li><strong>Interactivity:</strong>
                  Add filters and controls for exploration</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Chart Selection Guide</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Line Chart:</strong>
                  For trends over time, continuous data</li>
            <li><strong>Bar/Column Chart:</strong>
                  For comparing categories or groups</li>
            <li><strong>Pie/Donut Chart:</strong>
                  For parts of a whole (use sparingly, max 5-7 slices)</li>
            <li><strong>Scatter Plot:</strong>
                  For showing correlation between two variables</li>
            <li><strong>Area Chart:</strong>
                  For showing cumulative totals over time</li>
            <li><strong>Sparklines:</strong>
                  For showing trends in a small space</li>
            <li><strong>Gauge/Bullet Graph:</strong>
                  For showing progress toward a goal</li>
            <li><strong>Waterfall Chart:</strong>
                  For showing sequential changes to a value</li>
            <li><strong>Heat Map:</strong>
                  For showing patterns across multiple categories</li>
            <li><strong>Tree Map:</strong>
                  For hierarchical part-to-whole relationships</li>
            <li><strong>Funnel Chart:</strong>
                  For showing sequential stages and drop-off</li>
            <li><strong>Radar/Spider Chart:</strong>
                  For comparing multiple variables</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Excel Dashboard Functions & Techniques</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>VLOOKUP, XLOOKUP, INDEX/MATCH:</strong>
                  For dynamic data retrieval</li>
            <li><strong>SUMIFS, COUNTIFS, AVERAGEIFS:</strong>
                  For conditional calculations</li>
            <li><strong>IF, IFS, SWITCH:</strong>
                  For conditional logic</li>
            <li><strong>CHOOSE, OFFSET, INDIRECT:</strong>
                  For dynamic range references</li>
            <li><strong>SMALL, LARGE, RANK:</strong>
                  For top/bottom analyses</li>
            <li><strong>TEXT, CONCATENATE, &:</strong>
                  For dynamic labels and annotations</li>
            <li><strong>Conditional Formatting:</strong>
                  For visual indicators and heat maps</li>
            <li><strong>Data Validation:</strong>
                  For creating dropdown filters</li>
            <li><strong>Form Controls:</strong>
                  For interactive elements (slicers, scrollbars)</li>
            <li><strong>Camera Tool:</strong>
                  For creating dynamic snapshots</li>
            <li><strong>Named Ranges:</strong>
                  For easier formula management</li>
            <li><strong>Tables:</strong>
                  For structured data references</li>
            <li><strong>Hyperlinks:</strong>
                  For dashboard navigation</li>
            <li><strong>GETPIVOTDATA:</strong>
                  For extracting specific pivot table values</li>
            <li><strong>Dynamic Arrays:</strong>
                  For spill-based calculations</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Common Dashboard Mistakes to Avoid</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Cluttered Design:</strong>
                  Including too many metrics or charts</li>
            <li><strong>Poor Visual Hierarchy:</strong>
                  Not emphasizing what's most important</li>
            <li><strong>3D Charts:</strong>
                  Distorting data with unnecessary 3D effects</li>
            <li><strong>Inappropriate Chart Types:</strong>
                  Using pie charts for time series, etc.</li>
            <li><strong>Inconsistent Scales:</strong>
                  Making comparisons difficult or misleading</li>
            <li><strong>Rainbow Color Schemes:</strong>
                  Using too many colors without purpose</li>
            <li><strong>Missing Context:</strong>
                  Showing numbers without targets or comparison</li>
            <li><strong>Overuse of Red/Green:</strong>
                  Ignoring colorblindness accessibility</li>
            <li><strong>Data Overload:</strong>
                  Showing too much detail on the main view</li>
            <li><strong>Ignoring White Space:</strong>
                  Cramming elements too closely together</li>
            <li><strong>Poor Organization:</strong>
                  Lacking logical flow or grouping</li>
            <li><strong>Excessive Precision:</strong>
                  Showing unnecessary decimal places</li>
            <li><strong>Misleading Visualizations:</strong>
                  Using truncated axes or deceptive scaling</li>
            <li><strong>Missing Titles/Labels:</strong>
                  Not clearly explaining what's being shown</li>
            <li><strong>Static Design:</strong>
                  Not allowing user interaction or exploration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardDesignExercise;
