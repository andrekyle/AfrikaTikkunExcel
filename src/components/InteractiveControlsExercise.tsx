import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

const InteractiveControlsExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  // Sample data strings for the exercise
  const salesDataCSV = `Date,Region,Category,Product,Sales,Units,TargetSales,PrevYearSales,SalesChannel
2023-01-15,North,Electronics,Laptops,125000,250,130000,115000,Online
2023-01-15,North,Electronics,Smartphones,95000,380,100000,90000,Online
2023-01-15,North,Electronics,Tablets,45000,300,50000,40000,Retail
2023-01-15,North,Appliances,Refrigerators,75000,150,80000,70000,Retail
2023-01-15,North,Appliances,Washing Machines,60000,120,65000,55000,Retail
2023-01-15,North,Appliances,Microwaves,25000,250,28000,22000,Online
2023-01-15,South,Electronics,Laptops,95000,190,100000,85000,Online
2023-01-15,South,Electronics,Smartphones,80000,320,85000,75000,Online
2023-01-15,South,Electronics,Tablets,40000,267,45000,35000,Retail
2023-01-15,South,Appliances,Refrigerators,65000,130,70000,60000,Retail
2023-01-15,South,Appliances,Washing Machines,50000,100,55000,45000,Retail
2023-01-15,South,Appliances,Microwaves,22000,220,24000,20000,Online
2023-02-15,North,Electronics,Laptops,130000,260,135000,120000,Online
2023-02-15,North,Electronics,Smartphones,100000,400,105000,92000,Online
2023-02-15,North,Electronics,Tablets,47000,313,52000,42000,Retail
2023-02-15,North,Appliances,Refrigerators,78000,156,82000,72000,Retail
2023-02-15,North,Appliances,Washing Machines,63000,126,67000,57000,Retail
2023-02-15,North,Appliances,Microwaves,26000,260,29000,23000,Online
2023-02-15,South,Electronics,Laptops,98000,196,105000,88000,Online
2023-02-15,South,Electronics,Smartphones,85000,340,88000,78000,Online
2023-02-15,South,Electronics,Tablets,42000,280,48000,37000,Retail
2023-02-15,South,Appliances,Refrigerators,67000,134,72000,62000,Retail
2023-02-15,South,Appliances,Washing Machines,52000,104,56000,47000,Retail
2023-02-15,South,Appliances,Microwaves,23000,230,25000,21000,Online`;

  const projectDataCSV = `ProjectID,ProjectName,Department,StartDate,EndDate,Budget,ActualCost,CompletionPercentage,Status,ProjectManager,TeamSize,Priority
P001,Website Redesign,Marketing,2023-01-15,2023-04-15,50000,48000,100,Complete,John Smith,5,High
P002,CRM Implementation,IT,2023-02-01,2023-06-30,120000,125000,95,In Progress,Sarah Johnson,8,Critical
P003,Product Launch,Sales,2023-03-10,2023-05-20,75000,70000,100,Complete,Michael Brown,6,High
P004,Cost Reduction Initiative,Finance,2023-04-01,2023-12-31,30000,12000,40,In Progress,Emily Wilson,3,Medium
P005,Warehouse Expansion,Operations,2023-01-20,2023-08-15,200000,180000,70,In Progress,David Lee,12,High
P006,Employee Training Program,HR,2023-05-01,2023-07-15,25000,22000,80,In Progress,Lisa Chen,4,Medium
P007,Mobile App Development,IT,2023-02-15,2023-10-31,180000,170000,60,In Progress,Robert Kim,10,Critical
P008,Market Research Study,Marketing,2023-04-10,2023-06-25,35000,36000,90,In Progress,Jennifer Wong,2,Medium
P009,Supply Chain Optimization,Operations,2023-03-01,2023-09-30,80000,75000,50,In Progress,Thomas Garcia,7,High
P010,Financial Reporting System,Finance,2023-05-15,2023-11-30,95000,45000,30,In Progress,Amanda Taylor,6,Critical`;

  const humanResourcesDataCSV = `EmployeeID,FirstName,LastName,Department,Position,HireDate,Salary,PerformanceRating,TrainingHours,Certification,ManagerID,Location
E001,John,Smith,IT,Developer,2020-03-15,72000,4,35,AWS Certified,E010,New York
E002,Sarah,Johnson,Marketing,Specialist,2021-06-20,58000,3,20,Digital Marketing,E005,Chicago
E003,Michael,Brown,Sales,Representative,2019-11-10,68000,5,25,Sales Professional,E009,Los Angeles
E004,Emily,Wilson,Finance,Analyst,2022-01-05,65000,4,15,CFA Level 1,E007,New York
E005,David,Lee,Marketing,Manager,2018-07-15,85000,4,30,MBA,E011,Chicago
E006,Lisa,Chen,HR,Specialist,2021-02-28,55000,3,40,SHRM,E008,Remote
E007,Robert,Kim,Finance,Manager,2017-09-10,92000,5,20,CPA,E011,New York
E008,Jennifer,Wong,HR,Manager,2018-04-22,88000,4,45,SHRM-SCP,E011,Remote
E009,Thomas,Garcia,Sales,Manager,2016-12-05,95000,4,30,Sales Leadership,E011,Los Angeles
E010,Amanda,Taylor,IT,Manager,2017-06-18,98000,5,25,PMP,E011,New York
E011,Daniel,Martinez,Executive,Director,2015-03-01,150000,5,15,MBA,NULL,New York
E012,Michelle,Anderson,IT,Developer,2022-05-10,70000,3,15,JavaScript Cert,E010,Remote
E013,Christopher,Thompson,Sales,Representative,2021-08-15,65000,4,20,NULL,E009,Chicago
E014,Jessica,Rodriguez,Finance,Analyst,2020-11-22,63000,3,10,NULL,E007,New York
E015,Steven,Wright,Marketing,Specialist,2022-03-12,56000,3,15,NULL,E005,Remote`;

  const inventoryDataCSV = `ProductID,ProductName,Category,Supplier,StockLevel,ReorderPoint,UnitCost,SellingPrice,LastRestockDate,LeadTimeDays,WarehouseLocation,StockStatus
P001,15-inch Laptop,Electronics,TechWorld,125,20,450,799,2023-05-10,5,A-101,In Stock
P002,Smartphone Model X,Electronics,GadgetZone,85,15,350,699,2023-05-15,7,A-102,In Stock
P003,Wireless Earbuds,Electronics,AudioTech,50,10,60,129,2023-04-28,3,A-103,In Stock
P004,4K Smart TV 55",Electronics,ViewTech,32,8,480,899,2023-05-05,10,A-201,In Stock
P005,Digital Camera,Electronics,PhotoPro,18,5,220,499,2023-04-20,6,A-202,In Stock
P006,Gaming Console,Electronics,GameWorld,7,15,320,499,2023-05-12,8,A-203,Low Stock
P007,Office Desk Chair,Furniture,ComfortZone,24,5,120,249,2023-05-08,14,B-101,In Stock
P008,Adjustable Desk,Furniture,ErgoPro,16,5,200,429,2023-04-25,14,B-102,In Stock
P009,Bookshelf,Furniture,HomeDecor,12,3,80,179,2023-05-02,10,B-103,In Stock
P010,Coffee Table,Furniture,HomeDecor,8,3,150,299,2023-04-15,10,B-201,In Stock
P011,Bedside Lamp,Home Goods,LightingCo,35,10,25,59,2023-05-18,4,C-101,In Stock
P012,Cutlery Set,Home Goods,KitchenPlus,22,8,40,89,2023-05-01,5,C-102,In Stock
P013,Blender,Appliances,KitchenPlus,14,5,45,99,2023-04-22,6,C-103,In Stock
P014,Microwave Oven,Appliances,AppliancePro,9,5,85,179,2023-05-06,8,C-201,In Stock
P015,Coffee Maker,Appliances,BrewTech,4,10,60,129,2023-05-09,5,C-202,Low Stock`;

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
        <h2 className="text-xl font-semibold">Interactive Controls in Excel</h2>
        <p className="text-sm text-muted-foreground">Interactive controls transform static Excel reports into dynamic, user-driven dashboards. 
          Slicers, timelines, and form controls allow users to filter, manipulate, and interact with data 
          without needing to understand the underlying formulas or data structure. This lesson explores how 
          to implement these powerful controls to create intuitive, self-service analytical tools.
        </p>
      </div>

      {/* Sample Datasets */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Sample Datasets</h3>
        <p className="text-sm text-muted-foreground">Use these sample datasets for the hands-on exercises. Copy each dataset and paste it into separate 
          worksheets in Excel to follow along with building interactive controls.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Sales Data</h4>
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
                <h4 className="text-sm font-medium">Project Management Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(projectDataCSV, "projectData")}
                >
                  {copyStatus["projectData"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {projectDataCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Human Resources Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(humanResourcesDataCSV, "hrData")}
                >
                  {copyStatus["hrData"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {humanResourcesDataCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Inventory Management Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(inventoryDataCSV, "inventoryData")}
                >
                  {copyStatus["inventoryData"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {inventoryDataCSV}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hands-on Exercise */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Hands-on Exercise: Building Interactive Filtering Systems (Stage by Stage)</h3>
        <p className="text-sm text-muted-foreground">In this exercise, you'll learn how to implement various interactive controls in Excel to create dynamic, 
          user-friendly dashboards. We'll progress through different types of controls and techniques, building an 
          increasingly sophisticated filtering system.
        </p>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Interactive Controls Development Stages</h4>
            
            <ol className="list-decimal pl-5 space-y-6 text-sm">
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 1: Setting Up Your Data</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Prepare your workbook:
                    <ul>
                      <li>Create a new Excel workbook with three worksheets: "Data", "Dashboard", and "Controls"</li>
                      <li>Copy the Sales Data into the "Data" worksheet, starting at cell A1</li>
                      <li>Format the data as an Excel Table (Ctrl+T or Insert → Table)</li>
                      <li>Give your table a meaningful name (e.g., "SalesData") via the Table Design tab</li>
                    </ul>
                  </li>
                  <li>Create a pivot table for your dashboard:
                    <ul>
                      <li>Select any cell in your table and go to Insert → PivotTable</li>
                      <li>Place the PivotTable in the "Dashboard" worksheet, starting at cell B2</li>
                      <li>Add the following fields to your PivotTable:
                        <ul>
                          <li>Rows: Region, Category</li>
                          <li>Columns: Date (grouped by month)</li>
                          <li>Values: Sales (Sum)</li>
                        </ul>
                      </li>
                      <li>Format the PivotTable values as Currency</li>
                    </ul>
                  </li>
                  <li>Create a basic chart:
                    <ul>
                      <li>Select your PivotTable and go to Insert → PivotChart</li>
                      <li>Choose a Column chart type</li>
                      <li>Move the chart to an appropriate position below the PivotTable</li>
                      <li>Add a title to the chart: "Sales by Region, Category, and Month"</li>
                    </ul>
                  </li>
                  <li>Prepare for interactive controls:
                    <ul>
                      <li>Create a section at the top of your "Dashboard" worksheet labeled "Filters"</li>
                      <li>Add text labels for each type of filter you will create</li>
                      <li>Reserve space for slicers, timelines, and form controls</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 2: Implementing Basic Slicers</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Add slicers to your dashboard:
                    <ul>
                      <li>Select any cell in your PivotTable</li>
                      <li>Go to PivotTable Analyze (or Options) tab → Insert Slicer</li>
                      <li>Select the following fields: Region, Category, Product, SalesChannel</li>
                      <li>Click OK to create the slicers</li>
                    </ul>
                  </li>
                  <li>Arrange and format your slicers:
                    <ul>
                      <li>Position the slicers in the "Filters" section of your dashboard</li>
                      <li>Resize each slicer to an appropriate size</li>
                      <li>In the Slicer Tools Options tab:
                        <ul>
                          <li>Change the number of columns (1-2 columns depending on the number of items)</li>
                          <li>Choose a slicer style that matches your dashboard theme</li>
                          <li>Adjust the caption (header) of each slicer if needed</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Test and refine your slicers:
                    <ul>
                      <li>Click on different slicer items to filter your PivotTable and chart</li>
                      <li>Hold Ctrl to select multiple items within a single slicer</li>
                      <li>Click the funnel icon in the slicer header to clear filters</li>
                      <li>Observe how the PivotTable and chart update dynamically</li>
                      <li>Adjust slicer positions and sizes as needed for better usability</li>
                    </ul>
                  </li>
                  <li>Add a clear filters button:
                    <ul>
                      <li>Select all slicers (hold Ctrl and click each slicer)</li>
                      <li>Go to Slicer Tools Options tab → Clear → "Clear Filter"</li>
                      <li>Alternatively, create a simple "Reset Filters" button using a shape or text box with a macro</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 3: Adding a Timeline Control</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Insert a timeline control:
                    <ul>
                      <li>Select any cell in your PivotTable</li>
                      <li>Go to PivotTable Analyze (or Options) tab → Insert Timeline</li>
                      <li>Select the "Date" field and click OK</li>
                    </ul>
                  </li>
                  <li>Configure the timeline:
                    <ul>
                      <li>Position the timeline at the top of your dashboard, above the slicers</li>
                      <li>Resize the timeline to span the width of your dashboard</li>
                      <li>In the Timeline Tools Options tab:
                        <ul>
                          <li>Choose an appropriate style for your timeline</li>
                          <li>Select the time level (Months, Quarters, or Years) from the dropdown</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Use the timeline control:
                    <ul>
                      <li>Click on a specific month to filter to just that period</li>
                      <li>Click and drag to select a range of months</li>
                      <li>Use the scrollbar to navigate through time periods</li>
                      <li>Click the dropdown in the header to change between YEARS, QUARTERS, MONTHS, or DAYS</li>
                      <li>Click the clear filter button (funnel icon) to reset the time filter</li>
                    </ul>
                  </li>
                  <li>Connect multiple PivotTables (optional):
                    <ul>
                      <li>Create a second PivotTable on your dashboard showing different metrics</li>
                      <li>Select your Timeline control</li>
                      <li>Go to Timeline Tools Options → Report Connections</li>
                      <li>Check both PivotTables to have them controlled by the same Timeline</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 4: Creating Form Controls</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Add the Developer tab to the ribbon:
                    <ul>
                      <li>Right-click on any ribbon tab and select "Customize the Ribbon..."</li>
                      <li>In the right column, check "Developer" and click OK</li>
                    </ul>
                  </li>
                  <li>Create a dropdown control:
                    <ul>
                      <li>Go to the "Controls" worksheet</li>
                      <li>Create a list of options in cells A1:A4 (e.g., "All", "Above Target", "Below Target", "Near Target")</li>
                      <li>Select cell C1 and type "Selected Option:" as a label</li>
                      <li>Go to Developer tab → Insert → Form Controls → Combo Box</li>
                      <li>Draw the combo box in cell D1</li>
                      <li>Right-click the combo box and select "Format Control"</li>
                      <li>In the "Control" tab:
                        <ul>
                          <li>Set "Input range:" to =Controls!$A$1:$A$4</li>
                          <li>Set "Cell link:" to =Controls!$E$1</li>
                          <li>Click OK</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Create a checkbox control:
                    <ul>
                      <li>Go to Developer tab → Insert → Form Controls → Check Box</li>
                      <li>Draw the check box in cell C3</li>
                      <li>Right-click the check box and select "Edit Text" to name it "Show Targets"</li>
                      <li>Right-click again and select "Format Control"</li>
                      <li>Set "Cell link:" to =Controls!$E$3</li>
                      <li>Click OK</li>
                    </ul>
                  </li>
                  <li>Create a spin button control:
                    <ul>
                      <li>Select cell C5 and type "Variance Threshold (%):" as a label</li>
                      <li>Go to Developer tab → Insert → Form Controls → Spin Button</li>
                      <li>Draw the spin button in cell D5</li>
                      <li>Right-click the spin button and select "Format Control"</li>
                      <li>In the "Control" tab:
                        <ul>
                          <li>Set "Current value:" to 5</li>
                          <li>Set "Minimum value:" to 1</li>
                          <li>Set "Maximum value:" to 20</li>
                          <li>Set "Incremental change:" to 1</li>
                          <li>Set "Cell link:" to =Controls!$E$5</li>
                        </ul>
                      </li>
                      <li>In cell F5, enter the formula =E5 to display the current value</li>
                      <li>Format cell F5 to show a percentage (0%)</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 5: Creating Custom Filter Logic</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Set up performance calculations:
                    <ul>
                      <li>Go to the "Data" worksheet</li>
                      <li>Add a new column called "Performance" next to the last column</li>
                      <li>Create a formula to calculate performance as: =(Sales-TargetSales)/TargetSales</li>
                      <li>Format the column as Percentage with one decimal place</li>
                    </ul>
                  </li>
                  <li>Create a helper table for filtering:
                    <ul>
                      <li>Go to the "Controls" worksheet</li>
                      <li>Create a helper table in cells A10:C14 with the following structure:
                        <ul>
                          <li>Column headers (A10:C10): Option, Min_Value, Max_Value</li>
                          <li>Row 1 (A11:C11): All, -100%, 100%</li>
                          <li>Row 2 (A12:C12): Above Target, 0%, 100%</li>
                          <li>Row 3 (A13:C13): Below Target, -100%, 0%</li>
                          <li>Row 4 (A14:C14): Near Target, -E5, E5 (referencing your spin button value)</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Create a dynamic named range:
                    <ul>
                      <li>Go to Formulas tab → Name Manager → New</li>
                      <li>Name: SelectedRange</li>
                      <li>Scope: Workbook</li>
                      <li>Refers to: =OFFSET(Controls!$A$10,Controls!$E$1+1,1,1,2)</li>
                      <li>Click OK</li>
                    </ul>
                  </li>
                  <li>Apply advanced filter logic:
                    <ul>
                      <li>Go to the "Data" worksheet</li>
                      <li>Select your data table</li>
                      <li>Go to Data tab → Advanced</li>
                      <li>In the "Advanced Filter" dialog:
                        <ul>
                          <li>Action: "Filter the list, in-place"</li>
                          <li>List range: Your table range</li>
                          <li>Criteria range: Controls!$A$10:$C$14</li>
                          <li>Click OK</li>
                        </ul>
                      </li>
                      <li>Note: This manual step is just for demonstration. In the next stage, we'll automate this with a macro.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 6: Automating with VBA (Simple Macros)</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Insert a module for your macros:
                    <ul>
                      <li>Go to Developer tab → Visual Basic (or press Alt+F11)</li>
                      <li>Right-click on your workbook in the Project Explorer</li>
                      <li>Select Insert → Module</li>
                    </ul>
                  </li>
                  <li>Create a macro for your dropdown filter:
                    <ul>
                      <li>Add the following code to your module:
                        <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
{`Sub ApplyPerformanceFilter()
    ' Get the selected filter option and threshold
    Dim filterOption As Integer
    Dim threshold As Double
    
    filterOption = Worksheets("Controls").Range("E1").Value
    threshold = Worksheets("Controls").Range("E5").Value / 100
    
    ' Update the Near Target range based on threshold
    Worksheets("Controls").Range("B14").Value = -threshold
    Worksheets("Controls").Range("C14").Value = threshold
    
    ' Apply the advanced filter
    Worksheets("Data").ListObjects("SalesData").Range.AdvancedFilter _
        Action:=xlFilterInPlace, _
        CriteriaRange:=Worksheets("Controls").Range("A10:C14")
    
    ' Refresh PivotTables
    Dim pt As PivotTable
    For Each pt In Worksheets("Dashboard").PivotTables
        pt.PivotCache.Refresh
    Next pt
End Sub`}
                        </pre>
                      </li>
                    </ul>
                  </li>
                  <li>Create a macro for your checkbox control:
                    <ul>
                      <li>Add the following code to your module:
                        <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
{`Sub ToggleTargets()
    ' Get checkbox state
    Dim showTargets As Boolean
    showTargets = Worksheets("Controls").Range("E3").Value
    
    ' Show or hide target columns in PivotTable
    Dim pt As PivotTable
    Set pt = Worksheets("Dashboard").PivotTables(1)
    
    ' Toggle visibility of target fields
    On Error Resume Next
    If showTargets Then
        pt.PivotFields("TargetSales").Orientation = xlDataField
    Else
        pt.PivotFields("TargetSales").Orientation = xlHidden
    End If
    On Error GoTo 0
    
    pt.PivotCache.Refresh
End Sub`}
                        </pre>
                      </li>
                    </ul>
                  </li>
                  <li>Connect macros to your controls:
                    <ul>
                      <li>Go back to your spreadsheet (Alt+F11 to exit VBA editor)</li>
                      <li>Right-click on your dropdown control → Assign Macro → Select "ApplyPerformanceFilter"</li>
                      <li>Right-click on your checkbox control → Assign Macro → Select "ToggleTargets"</li>
                      <li>Right-click on your spin button → Assign Macro → Select "ApplyPerformanceFilter"</li>
                    </ul>
                  </li>
                  <li>Create a reset button:
                    <ul>
                      <li>Go to Developer tab → Insert → Form Controls → Button</li>
                      <li>Draw a button below your other controls</li>
                      <li>Name it "Reset All Filters"</li>
                      <li>Assign it to the following macro:
                        <pre className="text-xs p-1 bg-gray-100 dark:bg-slate-800 overflow-x-auto">
{`Sub ResetAllFilters()
    ' Clear advanced filters
    Worksheets("Data").ListObjects("SalesData").Range.AdvancedFilter _
        Action:=xlFilterInPlace, _
        CriteriaRange:=Worksheets("Controls").Range("A10:C11")
        
    ' Reset dropdown to "All"
    Worksheets("Controls").Range("E1").Value = 0
    
    ' Reset checkbox
    Worksheets("Controls").Range("E3").Value = False
    
    ' Clear slicer selections
    Dim slicer As SlicerCache
    For Each slicer In ActiveWorkbook.SlicerCaches
        slicer.ClearManualFilter
    Next slicer
    
    ' Clear timeline selections
    Dim timeline As SlicerCache
    For Each timeline In ActiveWorkbook.SlicerCaches
        If timeline.Timeline Then
            timeline.ClearAllFilters
        End If
    Next timeline
    
    ' Refresh PivotTables
    Dim pt As PivotTable
    For Each pt In Worksheets("Dashboard").PivotTables
        pt.PivotCache.Refresh
    Next pt
End Sub`}
                        </pre>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 7: Creating a Dynamic Dashboard with Multiple Controls</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Set up a comprehensive dashboard:
                    <ul>
                      <li>Create a new worksheet named "Full Dashboard"</li>
                      <li>Add a title and subtitle with formatting</li>
                      <li>Create a dedicated filter section at the top</li>
                      <li>Divide the worksheet into logical sections (KPIs, Charts, Details)</li>
                    </ul>
                  </li>
                  <li>Add multiple pivot tables and charts:
                    <ul>
                      <li>Create pivot tables for different metrics (Sales, Units, Performance)</li>
                      <li>Add corresponding charts (Column, Line, Pie)</li>
                      <li>Position these elements in a logical, visually pleasing layout</li>
                    </ul>
                  </li>
                  <li>Implement a combined filtering system:
                    <ul>
                      <li>Add slicers for categorical data (Region, Category, Product)</li>
                      <li>Add a timeline for date filtering</li>
                      <li>Add form controls for custom metrics and thresholds</li>
                      <li>Connect all charts and tables to these filters</li>
                    </ul>
                  </li>
                  <li>Create a custom control panel:
                    <ul>
                      <li>Add option buttons for different view modes (Summary, Detail, Comparison)</li>
                      <li>Create a dropdown to select the primary metric</li>
                      <li>Add buttons to export or print specific views</li>
                      <li>Create a filter status indicator showing active filters</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Stage 8: Advanced Interactive Techniques</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create custom dynamic ranges with controls:
                    <ul>
                      <li>Add a scrollbar control to dynamically adjust a "Top N" analysis</li>
                      <li>Create formulas using OFFSET or INDEX that respond to the scrollbar value</li>
                      <li>Display only the top N products, regions, or customers based on selection</li>
                    </ul>
                  </li>
                  <li>Implement cascading filters:
                    <ul>
                      <li>Create dependent dropdown lists (e.g., selecting a Region filters the available Products)</li>
                      <li>Use Data Validation with INDIRECT function to create the dependencies</li>
                      <li>Connect these dropdowns to your dashboard's display</li>
                    </ul>
                  </li>
                  <li>Create interactive what-if analysis controls:
                    <ul>
                      <li>Add a section with input controls for forecast assumptions</li>
                      <li>Create spinner buttons to adjust growth rates, prices, or costs</li>
                      <li>Connect these to calculation models that update charts and projections</li>
                      <li>Add scenario buttons to quickly switch between pre-defined scenarios</li>
                    </ul>
                  </li>
                  <li>Add interactive chart elements:
                    <ul>
                      <li>Create combo boxes to switch between chart types</li>
                      <li>Add controls to toggle between absolute values and percentages</li>
                      <li>Implement controls to change the chart's time granularity (daily, weekly, monthly, quarterly)</li>
                      <li>Create a dynamic reference line that users can adjust with a form control</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Interactive Controls Reference */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">Interactive Controls Reference</h3>
        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Types of Excel Interactive Controls</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Slicers:</strong>
                  Visual filters that allow users to filter PivotTables, PivotCharts, and tables with a simple click</li>
            <li><strong>Timelines:</strong>
                  Specialized controls for filtering date fields in PivotTables and PivotCharts</li>
            <li><strong>Form Controls:</strong>
                  Legacy controls (buttons, checkboxes, dropdown lists) that can be linked to cells and macros</li>
            <li><strong>ActiveX Controls:</strong>
                  More advanced controls with additional properties and events (require VBA)</li>
            <li><strong>Data Validation:</strong>
                  Cell-level controls like dropdown lists, date pickers, and custom validation rules</li>
            <li><strong>Conditional Formatting:</strong>
                  Visual indicators that change based on data values or conditions</li>
            <li><strong>Hyperlinks:</strong>
                  Clickable text or objects that navigate to different locations</li>
            <li><strong>Camera Tool:</strong>
                  Creates a linked picture of a range that updates automatically</li>
            <li><strong>Scroll Bars:</strong>
                  Allow users to scroll through data or adjust values</li>
            <li><strong>Spin Buttons:</strong>
                  Allow users to increment or decrement values with arrow buttons</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Slicer Properties and Techniques</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Multi-select:</strong>
                  Hold Ctrl to select multiple items in a slicer</li>
            <li><strong>Clear Filter:</strong>
                  Click the funnel icon to clear all selections</li>
            <li><strong>Resize/Reformat:</strong>
                  Use Slicer Tools to change appearance, columns, buttons size</li>
            <li><strong>Connect to Multiple PivotTables:</strong>
                  Use Report Connections in Slicer Tools</li>
            <li><strong>Sync Slicers:</strong>
                  Connect the same field from multiple tables to one slicer</li>
            <li><strong>Search in Slicer:</strong>
                  Use the search box in newer Excel versions</li>
            <li><strong>Sort Items:</strong>
                  Customize the order of items in the slicer</li>
            <li><strong>Lock Position:</strong>
                  Use Properties to lock position and size</li>
            <li><strong>Header Customization:</strong>
                  Change the caption, visibility, and formatting</li>
            <li><strong>Style Customization:</strong>
                  Create and apply custom slicer styles</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Form Controls vs. ActiveX Controls</h4>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-slate-200 dark:bg-slate-700">
                <th className="border p-1 text-left">Feature</th>
                <th className="border p-1 text-left">Form Controls</th>
                <th className="border p-1 text-left">ActiveX Controls</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">Compatibility</td>
                <td className="border p-1">Works across all Excel versions</td>
                <td className="border p-1">Windows only, more version sensitive</td>
              </tr>
              <tr>
                <td className="border p-1">Cell Link</td>
                <td className="border p-1">Can link directly to cells</td>
                <td className="border p-1">Requires VBA to read/write to cells</td>
              </tr>
              <tr>
                <td className="border p-1">Events</td>
                <td className="border p-1">Limited (mainly click events)</td>
                <td className="border p-1">Rich event model (hover, change, etc.)</td>
              </tr>
              <tr>
                <td className="border p-1">Formatting</td>
                <td className="border p-1">Basic formatting options</td>
                <td className="border p-1">Extensive formatting capabilities</td>
              </tr>
              <tr>
                <td className="border p-1">Ease of Use</td>
                <td className="border p-1">Simpler to set up and use</td>
                <td className="border p-1">More complex, requires more coding</td>
              </tr>
              <tr>
                <td className="border p-1">Performance</td>
                <td className="border p-1">Generally faster and lighter</td>
                <td className="border p-1">Can be slower, especially with many controls</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Advanced Filtering Techniques</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Simple Filters:</strong>
                  Built-in filters on tables and ranges (AutoFilter)</li>
            <li><strong>Advanced Filter:</strong>
                  Complex criteria with AND/OR logic (Data → Advanced)</li>
            <li><strong>Slicers:</strong>
                  Visual filters for tables and PivotTables</li>
            <li><strong>Custom Filter Logic:</strong>
                  Using helper columns with formulas</li>
            <li><strong>VBA Filters:</strong>
                  Programmatic filtering with macros</li>
            <li><strong>Filter by Selection:</strong>
                  Right-click → Filter → Filter by Selected Cell's Value</li>
            <li><strong>Filter by Color:</strong>
                  Filter by cell or font color</li>
            <li><strong>Filter by Icon:</strong>
                  Filter by conditional formatting icons</li>
            <li><strong>Dynamic Named Ranges:</strong>
                  Ranges that adjust based on filter results</li>
            <li><strong>Power Query:</strong>
                  Advanced filtering with M language</li>
            <li><strong>Power Pivot:</strong>
                  DAX measures and filters for data models</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Best Practices for Interactive Controls</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Placement:</strong>
                  Position controls in a logical, easy-to-find location</li>
            <li><strong>Grouping:</strong>
                  Group related controls together</li>
            <li><strong>Clear Labeling:</strong>
                  Use descriptive labels for all controls</li>
            <li><strong>Consistent Styling:</strong>
                  Use consistent colors and formatting</li>
            <li><strong>Visual Feedback:</strong>
                  Provide visual cues when filters are active</li>
            <li><strong>Reset Option:</strong>
                  Always include a way to clear all filters</li>
            <li><strong>Default State:</strong>
                  Set sensible defaults for all controls</li>
            <li><strong>Performance:</strong>
                  Optimize for speed with large datasets</li>
            <li><strong>Tooltips/Instructions:</strong>
                  Provide guidance on how to use controls</li>
            <li><strong>Progressive Disclosure:</strong>
                  Show only relevant controls based on context</li>
            <li><strong>Accessibility:</strong>
                  Ensure controls are accessible with keyboard navigation</li>
            <li><strong>Testing:</strong>
                  Test with different data scenarios and user profiles</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InteractiveControlsExercise;
