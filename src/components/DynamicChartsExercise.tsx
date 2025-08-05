import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clipboard, ClipboardCheck } from "lucide-react";

const DynamicChartsExercise = () => {
  // State for copy feedback
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({
    sales: false,
    products: false,
    weather: false,
    financial: false,
  });

  // Sample datasets
  const salesDataCSV = `Date,Region,Product,Sales,Target,Units
2023-01-15,North,Laptops,12500,12000,25
2023-01-22,South,Phones,8750,9000,35
2023-01-29,East,Tablets,6250,6000,25
2023-02-05,West,Laptops,9500,9000,19
2023-02-12,North,Phones,7800,7500,31
2023-02-19,South,Tablets,5300,5500,21
2023-02-26,East,Laptops,11300,11000,22
2023-03-05,West,Phones,9100,9500,36
2023-03-12,North,Tablets,7200,7000,29
2023-03-19,South,Laptops,10600,10000,21
2023-03-26,East,Phones,8400,8500,33
2023-04-02,West,Tablets,6800,7000,27
2023-04-09,North,Laptops,13200,13000,26
2023-04-16,South,Phones,9300,9000,37
2023-04-23,East,Tablets,7100,7500,28
2023-04-30,West,Laptops,12200,12500,24`;

  const productInventoryCSV = `Product,Category,SubCategory,InStock,OnOrder,ReorderLevel,LeadTime,UnitCost,UnitPrice
Laptop Pro X,Electronics,Computers,45,20,30,14,850,1299
Smartphone Z10,Electronics,Phones,78,50,40,7,350,599
Tablet Air,Electronics,Tablets,32,25,35,10,220,399
Monitor UltraWide,Electronics,Accessories,15,10,15,21,180,299
Wireless Mouse,Electronics,Accessories,110,50,75,5,12,29.99
Bluetooth Keyboard,Electronics,Accessories,65,30,50,5,22,49.99
Wireless Earbuds,Electronics,Audio,89,40,60,7,35,79.99
Smart Speaker,Electronics,Audio,27,15,25,14,45,89.99
USB-C Cables (3pk),Electronics,Accessories,135,100,120,3,5,14.99
Power Bank 20000mAh,Electronics,Accessories,42,30,40,10,25,49.99
Laptop Bag,Accessories,Bags,38,20,30,7,18,39.99
Smartphone Case,Accessories,Protection,95,60,80,5,8,24.99
Screen Protector,Accessories,Protection,120,100,100,5,3,12.99
Wireless Charger,Electronics,Accessories,55,30,45,10,15,34.99
External SSD 1TB,Electronics,Storage,29,20,25,14,85,149.99`;

  const weatherDataCSV = `Date,Location,HighTemp,LowTemp,Precipitation,WindSpeed,Humidity,Conditions
2023-01-01,New York,32,25,0.5,12,85,Snow
2023-01-01,Los Angeles,68,52,0,5,45,Sunny
2023-01-01,Chicago,28,17,0.8,18,80,Snow
2023-01-01,Miami,75,65,0,8,70,Partly Cloudy
2023-02-01,New York,35,27,0,10,65,Cloudy
2023-02-01,Los Angeles,70,54,0,4,40,Sunny
2023-02-01,Chicago,30,20,0.3,15,75,Light Snow
2023-02-01,Miami,78,68,0.2,7,75,Rain
2023-03-01,New York,42,33,0.7,14,80,Rain
2023-03-01,Los Angeles,72,56,0,6,35,Sunny
2023-03-01,Chicago,38,28,0.1,12,65,Cloudy
2023-03-01,Miami,80,70,0,5,65,Sunny
2023-04-01,New York,55,42,0.2,8,60,Cloudy
2023-04-01,Los Angeles,75,58,0,5,30,Sunny
2023-04-01,Chicago,52,40,0.4,10,70,Rain
2023-04-01,Miami,82,72,0.1,6,70,Partly Cloudy
2023-05-01,New York,65,50,0,7,55,Sunny
2023-05-01,Los Angeles,78,60,0,4,25,Sunny
2023-05-01,Chicago,63,50,0,8,60,Partly Cloudy
2023-05-01,Miami,85,75,0.3,9,75,Rain
2023-06-01,New York,75,62,0.1,5,65,Partly Cloudy
2023-06-01,Los Angeles,82,64,0,3,20,Sunny
2023-06-01,Chicago,78,65,0.2,7,68,Partly Cloudy
2023-06-01,Miami,88,78,0.5,10,80,Thunderstorm`;

  const financialDataCSV = `Date,Department,Category,Revenue,Expenses,Profit,BudgetVariance
2023-Q1,Sales,Products,245000,175000,70000,5000
2023-Q1,Sales,Services,125000,80000,45000,2000
2023-Q1,Marketing,Digital,85000,70000,15000,-3000
2023-Q1,Marketing,Traditional,55000,48000,7000,-5000
2023-Q1,R&D,Innovation,40000,90000,-50000,-8000
2023-Q1,Administration,Operations,30000,110000,-80000,2000
2023-Q2,Sales,Products,265000,180000,85000,7000
2023-Q2,Sales,Services,135000,85000,50000,3000
2023-Q2,Marketing,Digital,95000,75000,20000,-1000
2023-Q2,Marketing,Traditional,45000,42000,3000,-2000
2023-Q2,R&D,Innovation,35000,95000,-60000,-10000
2023-Q2,Administration,Operations,28000,105000,-77000,5000
2023-Q3,Sales,Products,280000,185000,95000,10000
2023-Q3,Sales,Services,145000,88000,57000,5000
2023-Q3,Marketing,Digital,105000,78000,27000,2000
2023-Q3,Marketing,Traditional,40000,38000,2000,0
2023-Q3,R&D,Innovation,42000,98000,-56000,-5000
2023-Q3,Administration,Operations,27000,103000,-76000,6000
2023-Q4,Sales,Products,310000,195000,115000,15000
2023-Q4,Sales,Services,160000,92000,68000,8000
2023-Q4,Marketing,Digital,115000,82000,33000,5000
2023-Q4,Marketing,Traditional,35000,36000,-1000,-3000
2023-Q4,R&D,Innovation,45000,100000,-55000,-2000
2023-Q4,Administration,Operations,25000,100000,-75000,8000`;

  // Copy to clipboard function
  const copyToClipboard = (text: string, datasetName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [datasetName]: true });
    setTimeout(() => {
      setCopiedStates({ ...copiedStates, [datasetName]: false });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Dynamic Charts in Excel</h2>
        <p className="text-sm mb-4">Dynamic charts are powerful visualizations that automatically update when the underlying data 
          or user selections change. This hands-on exercise will guide you through creating a comprehensive 
          dashboard with charts that respond dynamically to user inputs, providing an interactive data 
          exploration experience.
        </p>
      </div>

      {/* Sample Datasets */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">Sample Datasets</h3>
        <p className="text-sm">Choose one of the datasets below for your dynamic charts exercise. Copy the data and paste it into a new 
          Excel worksheet to begin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-sm">Sales Performance Data</h4>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8"
                onClick={() => copyToClipboard(salesDataCSV, "sales")}
              >
                {copiedStates.sales ? (
                  <ClipboardCheck className="h-4 w-4 text-green-500" />
                ) : (
                  <Clipboard className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-slate-500">Monthly sales data by region and product with targets for comparison
            </p>
          </Card>

          <Card className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-sm">Product Inventory Data</h4>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8"
                onClick={() => copyToClipboard(productInventoryCSV, "products")}
              >
                {copiedStates.products ? (
                  <ClipboardCheck className="h-4 w-4 text-green-500" />
                ) : (
                  <Clipboard className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-slate-500">Detailed inventory data including categories, stock levels, and pricing
            </p>
          </Card>

          <Card className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-sm">Weather Analysis Data</h4>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8"
                onClick={() => copyToClipboard(weatherDataCSV, "weather")}
              >
                {copiedStates.weather ? (
                  <ClipboardCheck className="h-4 w-4 text-green-500" />
                ) : (
                  <Clipboard className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-slate-500">Monthly weather measurements across multiple locations and conditions
            </p>
          </Card>

          <Card className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-sm">Financial Performance Data</h4>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8"
                onClick={() => copyToClipboard(financialDataCSV, "financial")}
              >
                {copiedStates.financial ? (
                  <ClipboardCheck className="h-4 w-4 text-green-500" />
                ) : (
                  <Clipboard className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-slate-500">Quarterly financial data by department with budget variance analysis
            </p>
          </Card>
        </div>
      </div>

      {/* Hands-on Exercise */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">Hands-on Exercise: Creating a Dynamic Chart Dashboard</h3>
        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
          <div className="space-y-4">
            <p className="text-sm">Follow this exercise to create a dashboard with dynamic charts that update based on user selections.
              We'll build progressively from basic concepts to more advanced techniques.
            </p>

            <ol className="list-decimal pl-5 space-y-6">
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 1: Setting Up Your Data Structure</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create a new Excel workbook and name it "Dynamic Charts Dashboard"</li>
                  <li>Create the following worksheets:
                    <ul>
                      <li>Data: For storing your raw dataset</li>
                      <li>Dashboard: For displaying your dynamic charts</li>
                      <li>Controls: For user input controls</li>
                    </ul>
                  </li>
                  <li>Paste your chosen dataset into the Data worksheet:
                    <ul>
                      <li>Copy the entire dataset including headers</li>
                      <li>Select cell A1 in the Data worksheet and paste</li>
                      <li>Format the data as an Excel Table (Ctrl+T or Insert → Table)</li>
                      <li>Give the table a meaningful name (e.g., "SalesData") in the Table Design tab</li>
                    </ul>
                  </li>
                  <li>Format your data appropriately:
                    <ul>
                      <li>Apply number formats to numeric columns (currency for sales/revenue, percentage for rates)</li>
                      <li>Format date columns as dates</li>
                      <li>Ensure all column headers are clear and descriptive</li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 2: Creating Your First Dynamic Chart</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Set up a basic chart on your Dashboard worksheet:
                    <ul>
                      <li>Go to the Dashboard worksheet</li>
                      <li>Insert a column chart (Insert → Charts → Column)</li>
                      <li>For the data source, select your table data (not just the current values)</li>
                      <li>For example, if using sales data, select the entire Sales and Date columns in your table</li>
                      <li>Position and resize the chart appropriately</li>
                    </ul>
                  </li>
                  <li>Create your first dropdown control:
                    <ul>
                      <li>Go to the Controls worksheet</li>
                      <li>In cell A1, type "Select Region:"</li>
                      <li>In cell B1, create a dropdown list:
                        <ol>
                          <li>Data → Data Validation</li>
                          <li>Select "List" as validation criteria</li>
                          <li>For the source, use a formula like: =UNIQUE(SalesData[Region])</li>
                          <li>This creates a dropdown with unique region values</li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                  <li>Create a dynamic named range:
                    <ul>
                      <li>Go to Formulas → Name Manager → New</li>
                      <li>Name: "FilteredSales" (or appropriate name for your dataset)</li>
                      <li>Scope: Workbook</li>
                      <li>If using Sales data, enter this formula:
                        <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
                          =IF(Controls!B1="All",SalesData[Sales],
                            FILTER(SalesData[Sales],SalesData[Region]=Controls!B1))
                        </pre>
                      </li>
                      <li>Create a second named range for the corresponding dates/categories:
                        <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
                          =IF(Controls!B1="All",SalesData[Date],
                            FILTER(SalesData[Date],SalesData[Region]=Controls!B1))
                        </pre>
                      </li>
                      <li>Note: These formulas use the FILTER function which is only available in Excel 365 or Excel 2021. For earlier versions, see the alternative approach in the reference section.</li>
                    </ul>
                  </li>
                  <li>Update your chart to use the dynamic named ranges:
                    <ul>
                      <li>Right-click on your chart and select "Select Data"</li>
                      <li>Edit the data series to use your named ranges:</li>
                      <li>For Series Values: =FilteredSales</li>
                      <li>For Category (X) axis: =FilteredDates</li>
                      <li>Click OK to apply</li>
                    </ul>
                  </li>
                  <li>Add "All" option to your dropdown:
                    <ul>
                      <li>Go back to your Controls worksheet</li>
                      <li>Edit the data validation for cell B1</li>
                      <li>Change the source to: ="All,"&TEXTJOIN(",",TRUE,UNIQUE(SalesData[Region]))</li>
                      <li>Select "All" from the dropdown to see all data</li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 3: Adding Multiple Chart Types and Views</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Add a second chart type for comparison:
                    <ul>
                      <li>Insert a line chart next to your column chart</li>
                      <li>If using sales data, configure it to show Units or another metric</li>
                      <li>Use the same filtering mechanism to keep the charts in sync</li>
                      <li>Create appropriate named ranges for the new metrics</li>
                    </ul>
                  </li>
                  <li>Add a chart type selector:
                    <ul>
                      <li>In the Controls worksheet, cell A3, type "Chart Type:"</li>
                      <li>In cell B3, create a dropdown with options like "Column", "Line", "Area", "Bar"</li>
                      <li>In cell C3, add this formula to convert selection to a number:
                        <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
                          =MATCH(B3,{'{'}"Column","Line","Area","Bar"{'}'}, 0)
                        </pre>
                      </li>
                    </ul>
                  </li>
                  <li>Make the chart type dynamic:
                    <ul>
                      <li>Select your first chart</li>
                      <li>Right-click and select "Change Chart Type"</li>
                      <li>Look for the chart type ID number that appears in the dialog (hover over types)</li>
                      <li>Create a VBA macro to change chart types (Developer → Visual Basic):
                        <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
{`Sub UpdateChartType()
    Dim chartType As Integer
    chartType = Worksheets("Controls").Range("C3").Value
    
    ' Map dropdown selection to Excel chart types
    Select Case chartType
        Case 1 ' Column
            Worksheets("Dashboard").ChartObjects("Chart1").Chart.ChartType = xlColumnClustered
        Case 2 ' Line
            Worksheets("Dashboard").ChartObjects("Chart1").Chart.ChartType = xlLine
        Case 3 ' Area
            Worksheets("Dashboard").ChartObjects("Chart1").Chart.ChartType = xlArea
        Case 4 ' Bar
            Worksheets("Dashboard").ChartObjects("Chart1").Chart.ChartType = xlBarClustered
    End Select
End Sub`}
                        </pre>
                      </li>
                      <li>Connect the dropdown to the macro:
                        <ul>
                          <li>Right-click on cell B3 and select "Assign Macro"</li>
                          <li>Select the "UpdateChartType" macro</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 4: Creating a Time Period Selector</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Add date range filters:
                    <ul>
                      <li>In the Controls worksheet, cells A5 and A6, add labels "Start Date:" and "End Date:"</li>
                      <li>In cells B5 and B6, use data validation to create date pickers:
                        <ol>
                          <li>Data → Data Validation → Allow: Date</li>
                          <li>Set minimum and maximum based on your dataset's date range</li>
                          <li>Set default values to the first and last dates in your dataset</li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                  <li>Update your dynamic named ranges to include date filtering:
                    <ul>
                      <li>Modify your existing named ranges in Name Manager:
                        <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
                          =IF(Controls!B1="All",
                            FILTER(SalesData[Sales],
                              (SalesData[Date]{">"}=Controls!B5)*(SalesData[Date]{'<'}=Controls!B6)),
                            FILTER(SalesData[Sales],
                              (SalesData[Region]=Controls!B1)*(SalesData[Date]{'>'}=Controls!B5)*(SalesData[Date]{'<'}=Controls!B6)))
                        </pre>
                      </li>
                      <li>Update the corresponding category named range similarly</li>
                    </ul>
                  </li>
                  <li>Add time period quick selectors:
                    <ul>
                      <li>In the Controls worksheet, add a section for quick time periods</li>
                      <li>Add buttons or dropdown for options like "YTD", "Last Quarter", "Last 30 Days"</li>
                      <li>Create a simple macro to update date fields when these are selected:
                        <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
{`Sub SetDateRange(timePeriod As String)
    Dim lastDate As Date
    Dim startDate As Date
    
    ' Get the latest date from the data
    lastDate = WorksheetFunction.Max(Range("SalesData[Date]"))
    
    ' Set appropriate date range based on selection
    Select Case timePeriod
        Case "YTD"
            startDate = DateSerial(Year(lastDate), 1, 1)
        Case "Last Quarter"
            startDate = DateSerial(Year(lastDate), Int((Month(lastDate) - 1) / 3) * 3 - 2, 1)
        Case "Last 30 Days"
            startDate = lastDate - 30
    End Select
    
    ' Update the date controls
    Worksheets("Controls").Range("B5").Value = startDate
    Worksheets("Controls").Range("B6").Value = lastDate
End Sub`}
                        </pre>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 5: Adding Interactive Chart Elements</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Add dynamic chart titles:
                    <ul>
                      <li>Select your chart and go to Chart Design → Add Chart Element → Chart Title</li>
                      <li>Right-click on the title and select "Edit Text"</li>
                      <li>Instead of static text, link it to a cell:
                        <ol>
                          <li>In your Controls worksheet, create a cell (e.g., D1) with a formula to generate a title</li>
                          <li>Example formula: =IF(B1="All","Sales Across All Regions","Sales for "&B1&" Region")</li>
                          <li>In the chart title, type: =Controls!D1</li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                  <li>Add dynamic chart elements:
                    <ul>
                      <li>Create checkboxes for toggling elements on/off:
                        <ol>
                          <li>Go to Developer → Insert → Form Controls → Checkbox</li>
                          <li>Add checkboxes for "Show Data Labels", "Show Trendline", "Show Target Line"</li>
                          <li>Link each checkbox to a cell in your Controls worksheet</li>
                        </ol>
                      </li>
                      <li>Create a VBA macro to update chart elements:
                        <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
{`Sub UpdateChartElements()
    Dim showLabels As Boolean
    Dim showTrendline As Boolean
    Dim showTarget As Boolean
    
    ' Get checkbox values
    showLabels = Worksheets("Controls").Range("B8").Value
    showTrendline = Worksheets("Controls").Range("B9").Value
    showTarget = Worksheets("Controls").Range("B10").Value
    
    ' Access the chart
    With Worksheets("Dashboard").ChartObjects("Chart1").Chart
        ' Toggle data labels
        On Error Resume Next
        If showLabels Then
            .SeriesCollection(1).HasDataLabels = True
        Else
            .SeriesCollection(1).HasDataLabels = False
        End If
        
        ' Toggle trendline
        If showTrendline Then
            .SeriesCollection(1).Trendlines.Add
        Else
            If .SeriesCollection(1).Trendlines.Count > 0 Then
                .SeriesCollection(1).Trendlines(1).Delete
            End If
        End If
        
        ' Toggle target line
        If showTarget Then
            If .SeriesCollection.Count < 2 Then
                ' Add target line series if it doesn't exist
                Dim targetSeries As Series
                Set targetSeries = .SeriesCollection.NewSeries
                targetSeries.Name = "Target"
                targetSeries.Values = "=SalesData[Target]"
                targetSeries.XValues = "=SalesData[Date]"
                targetSeries.ChartType = xlLine
                targetSeries.Format.Line.Weight = 2
                targetSeries.Format.Line.ForeColor.RGB = RGB(255, 0, 0) ' Red
            End If
        Else
            If .SeriesCollection.Count > 1 Then
                .SeriesCollection(2).Delete
            End If
        End If
        On Error GoTo 0
    End With
End Sub`}
                        </pre>
                      </li>
                      <li>Connect the checkboxes to the macro</li>
                    </ul>
                  </li>
                  <li>Add a dynamic reference line for comparison:
                    <ul>
                      <li>In the Controls worksheet, add a label "Reference Value:" at cell A12</li>
                      <li>In cell B12, add a spin button control (Developer → Insert → Form Controls → Spin Button)</li>
                      <li>Link it to cell C12 and set min/max values appropriate for your data</li>
                      <li>Create a VBA macro to add/update a horizontal reference line at the specified value</li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 6: Creating a Multi-metric Dashboard</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Design a dashboard layout:
                    <ul>
                      <li>Sketch the layout with spaces for:
                        <ul>
                          <li>Filter controls section (top)</li>
                          <li>KPI summary metrics (below filters)</li>
                          <li>Primary chart (large, central)</li>
                          <li>Secondary charts (smaller, arranged around primary)</li>
                        </ul>
                      </li>
                      <li>Create borders or shapes to visually separate dashboard sections</li>
                    </ul>
                  </li>
                  <li>Add KPI metrics that update with selections:
                    <ul>
                      <li>Create cells for key metrics with formulas based on your filtered data:</li>
                      <li>For total sales: =SUM(FilteredSales)</li>
                      <li>For average: =AVERAGE(FilteredSales)</li>
                      <li>For % of target: =SUM(FilteredSales)/SUM(FilteredTargets)</li>
                      <li>Format these cells attractively with conditional formatting</li>
                    </ul>
                  </li>
                  <li>Add secondary charts showing different perspectives:
                    <ul>
                      <li>Add a pie chart showing breakdown by product/category</li>
                      <li>Add a bar chart showing comparison against targets</li>
                      <li>Ensure all charts respond to the same filters</li>
                      <li>Position and size charts according to your layout design</li>
                    </ul>
                  </li>
                  <li>Add a metric selector for the main chart:
                    <ul>
                      <li>Create a dropdown to switch the primary metric displayed</li>
                      <li>Options might include "Sales", "Units", "Profit", etc.</li>
                      <li>Update your named ranges to respond to this selection</li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 7: Advanced Dynamic Techniques</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create a dynamic chart title with multiple conditions:
                    <ul>
                      <li>Enhance your chart title to reflect all active filters</li>
                      <li>Example: "Sales by [Product] in [Region] from [StartDate] to [EndDate]"</li>
                      <li>Use IF, CONCAT and other text functions to build the string</li>
                    </ul>
                  </li>
                  <li>Implement cascading filters:
                    <ul>
                      <li>Make your product filter dependent on selected region</li>
                      <li>Use FILTER or INDIRECT functions to create dependent dropdowns</li>
                      <li>Example:
                        <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
                          =IF(B1="All",UNIQUE(SalesData[Product]),
                            UNIQUE(FILTER(SalesData[Product],SalesData[Region]=B1)))
                        </pre>
                      </li>
                    </ul>
                  </li>
                  <li>Add interactive highlighting:
                    <ul>
                      <li>Create a system to highlight specific data points</li>
                      <li>Add checkboxes to highlight:
                        <ul>
                          <li>Values above/below target</li>
                          <li>Highest/lowest values</li>
                          <li>Values outside normal range (statistical outliers)</li>
                        </ul>
                      </li>
                      <li>Use VBA or conditional formatting to apply highlighting</li>
                    </ul>
                  </li>
                  <li>Create a dynamic data point selector:
                    <ul>
                      <li>Add a scroll bar to move through data points one by one</li>
                      <li>Display detailed information about the selected data point</li>
                      <li>Highlight the selected point on the chart</li>
                      <li>Create navigation buttons (Previous/Next) as an alternative</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 8: Finalizing Your Interactive Dashboard</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Add user instructions:
                    <ul>
                      <li>Create a brief "How to Use" section at the top of your dashboard</li>
                      <li>Add tooltips to complex controls (using comments or shapes with text)</li>
                      <li>Include a reset button to return to default selections</li>
                    </ul>
                  </li>
                  <li>Optimize performance:
                    <ul>
                      <li>Review formulas for efficiency</li>
                      <li>Convert complex formulas to VBA if appropriate</li>
                      <li>Consider using calculation options (Manual vs. Automatic)</li>
                      <li>Test with larger datasets to ensure responsiveness</li>
                    </ul>
                  </li>
                  <li>Enhance visual design:
                    <ul>
                      <li>Apply consistent color scheme across all charts</li>
                      <li>Ensure accessibility with high contrast and clear labels</li>
                      <li>Add your company logo or branding elements</li>
                      <li>Create a clean, professional look with consistent fonts and sizes</li>
                    </ul>
                  </li>
                  <li>Add export/sharing capabilities:
                    <ul>
                      <li>Create buttons to export views as images or PDFs</li>
                      <li>Add email functionality to send the current view</li>
                      <li>Create a print-friendly version of the dashboard</li>
                      <li>Add documentation about the data sources and update frequency</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Dynamic Charts Reference */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">Dynamic Charts Reference</h3>
        
        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Chart Elements and Properties</h4>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-slate-200 dark:bg-slate-700">
                <th className="border p-1 text-left">Element</th>
                <th className="border p-1 text-left">How to Access</th>
                <th className="border p-1 text-left">Dynamic Capabilities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">Data Series</td>
                <td className="border p-1">Select Data Source dialog</td>
                <td className="border p-1">Link to named ranges that update with filters</td>
              </tr>
              <tr>
                <td className="border p-1">Chart Title</td>
                <td className="border p-1">Add Chart Element → Chart Title</td>
                <td className="border p-1">Reference a cell with a formula that changes based on selections</td>
              </tr>
              <tr>
                <td className="border p-1">Axis Titles</td>
                <td className="border p-1">Add Chart Element → Axis Titles</td>
                <td className="border p-1">Can reference cells with dynamic text</td>
              </tr>
              <tr>
                <td className="border p-1">Data Labels</td>
                <td className="border p-1">Add Chart Element → Data Labels</td>
                <td className="border p-1">Can be toggled with VBA; formatting can change based on values</td>
              </tr>
              <tr>
                <td className="border p-1">Trendlines</td>
                <td className="border p-1">Add Chart Element → Trendline</td>
                <td className="border p-1">Can be toggled with VBA; type can change based on user selection</td>
              </tr>
              <tr>
                <td className="border p-1">Chart Type</td>
                <td className="border p-1">Change Chart Type dialog</td>
                <td className="border p-1">Can change via VBA based on user selection</td>
              </tr>
              <tr>
                <td className="border p-1">Axis Scaling</td>
                <td className="border p-1">Format Axis dialog</td>
                <td className="border p-1">Min/Max values can be linked to cells that update with data</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Functions for Dynamic Ranges</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>FILTER:</strong>
                  Returns filtered array based on criteria (Excel 365/2021+)
              <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
                =FILTER(array, include, [if_empty])
              </pre>
            </li>
            <li><strong>OFFSET:</strong>
                  Returns range reference shifted from a starting reference
              <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
                =OFFSET(reference, rows, cols, [height], [width])
              </pre>
            </li>
            <li><strong>INDEX:</strong>
                  Returns value at specific position in range
              <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
                =INDEX(array, row_num, [column_num])
              </pre>
            </li>
            <li><strong>INDIRECT:</strong>
                  Returns reference specified by text string
              <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
                =INDIRECT(ref_text, [a1])
              </pre>
            </li>
            <li><strong>UNIQUE:</strong>
                  Returns list of unique values in a range (Excel 365/2021+)
              <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
                =UNIQUE(array, [by_col], [exactly_once])
              </pre>
            </li>
            <li><strong>SORT:</strong>
                  Sorts array contents (Excel 365/2021+)
              <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
                =SORT(array, [sort_index], [sort_order], [by_col])
              </pre>
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Alternative Methods for Excel 2019 and Earlier</h4>
          <p className="text-xs">Without FILTER function, use these approaches:</p>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>OFFSET + COUNTA for Dynamic Ranges:</strong>
              <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
                =OFFSET(Sheet1!$A$2,0,0,COUNTA(Sheet1!$A:$A)-1,1)
              </pre>
            </li>
            <li><strong>Helper Columns with Boolean Flags:</strong>
              <ol className="list-decimal pl-5">
                <li>Add helper column with formula: =IF(Region=ControlCell,1,0)</li>
                <li>Use the helper column as a filter</li>
              </ol>
            </li>
            <li><strong>PivotTables with Slicers:</strong>
              <ol className="list-decimal pl-5">
                <li>Create PivotTable from data</li>
                <li>Add slicers for filtering</li>
                <li>Create charts from the PivotTable</li>
              </ol>
            </li>
            <li><strong>Advanced Filter with Criteria Range:</strong>
              <ol className="list-decimal pl-5">
                <li>Set up criteria range with headings</li>
                <li>Use Data → Advanced Filter</li>
                <li>Reference filtered output for charts</li>
              </ol>
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Best Practices for Dynamic Charts</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Data Structure:</strong>
                  Use Excel Tables for auto-expanding ranges and structured references</li>
            <li><strong>Named Ranges:</strong>
                  Use descriptive names that reflect their purpose</li>
            <li><strong>Error Handling:</strong>
                  Include error handling in formulas and VBA to prevent #REF! errors</li>
            <li><strong>Performance:</strong>
                  For large datasets, consider using pivot tables instead of formulas</li>
            <li><strong>User Interface:</strong>
                  Group controls logically and provide clear labels</li>
            <li><strong>Consistency:</strong>
                  Use consistent formatting across all charts</li>
            <li><strong>Documentation:</strong>
                  Include instructions and tooltips for complex features</li>
            <li><strong>Testing:</strong>
                  Test with different selections and edge cases</li>
            <li><strong>Macros:</strong>
                  If using VBA, include error handling and optimization</li>
            <li><strong>Modularity:</strong>
                  Design charts that can be reused or repurposed</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Common Issues and Solutions</h4>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-slate-200 dark:bg-slate-700">
                <th className="border p-1 text-left">Issue</th>
                <th className="border p-1 text-left">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">Chart doesn't update when data changes</td>
                <td className="border p-1">Ensure chart is linked to ranges, not static values; check calculation settings</td>
              </tr>
              <tr>
                <td className="border p-1">Filter returns no results</td>
                <td className="border p-1">Add error handling with IF_EMPTY parameter in FILTER or check for empty results</td>
              </tr>
              <tr>
                <td className="border p-1">Chart shows #REF! error</td>
                <td className="border p-1">Verify named ranges exist and formulas don't return errors; use IFERROR</td>
              </tr>
              <tr>
                <td className="border p-1">Controls don't affect charts</td>
                <td className="border p-1">Check cell links and named range formulas; verify event procedures</td>
              </tr>
              <tr>
                <td className="border p-1">Performance is slow with large datasets</td>
                <td className="border p-1">Use pivot tables instead of formulas; consider manual calculation mode</td>
              </tr>
              <tr>
                <td className="border p-1">Macros don't work on other computers</td>
                <td className="border p-1">Enable macros in security settings; save as .xlsm file; check references</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DynamicChartsExercise;
