import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Copy } from "lucide-react";
import { type } from "os";

const PowerQueryMasteryExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  // Sample CSV data strings
  const salesDataCSV = `Date,Region,Product,Sales,Units
2023-01-15,North,Laptops,12500.00,25
2023-01-22,South,Monitors,5400.00,18
2023-01-29,East,Keyboards,1200.00,40
2023-02-05,West,Laptops,15000.00,30
2023-02-12,North,Printers,8200.00,10
2023-02-19,South,Laptops,14000.00,28
2023-02-26,East,Monitors,6300.00,21
2023-03-05,West,Keyboards,1800.00,60
2023-03-12,North,Laptops,16500.00,33
2023-03-19,South,Printers,9400.00,12`;

  const inventoryDataCSV = `ProductID,Product,Warehouse,QuantityOnHand,RestockLevel,LastUpdated
P001,Laptops,Central,120,50,2023-03-15
P002,Monitors,East,85,40,2023-03-12
P003,Keyboards,West,210,100,2023-03-14
P004,Printers,North,35,25,2023-03-10
P005,Mice,South,150,75,2023-03-13
P001,Laptops,East,45,50,2023-03-15
P002,Monitors,West,30,40,2023-03-12
P003,Keyboards,North,95,100,2023-03-14
P004,Printers,Central,60,25,2023-03-10
P005,Mice,East,80,75,2023-03-13`;

  const customerDataCSV = `CustomerID,Name,Region,LastPurchase,AccountType,TotalSpend
C101,TechCorp Inc.,North,2023-03-10,Corporate,45000.00
C102,Digital Solutions,South,2023-02-28,Corporate,36500.00
C103,HomeOffice Direct,East,2023-03-05,Retail,12800.00
C104,University of Technology,West,2023-03-08,Education,52000.00
C105,Government Services,North,2023-02-15,Government,68000.00
C106,Small Business LLC,South,2023-03-12,SMB,8500.00
C107,Retail Chain Co.,East,2023-03-01,Retail,28700.00
C108,Healthcare Solutions,West,2023-02-20,Healthcare,39000.00
C109,Manufacturing Plus,North,2023-03-06,Corporate,42500.00
C110,Educational Systems,South,2023-03-09,Education,33000.00`;

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
        <h2 className="text-xl font-semibold">Power Query Mastery</h2>
        <p className="text-sm text-muted-foreground">Power Query is Excel's robust ETL (Extract, Transform, Load) tool that allows you to connect to 
          various data sources, transform data with a visual interface or M code, and load it into Excel.
          This lesson covers advanced techniques for creating powerful data transformation pipelines.
        </p>
      </div>

      {/* Sample Datasets */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Sample Datasets</h3>
        <p className="text-sm text-muted-foreground">Use these sample datasets for the hands-on exercises. Copy each dataset and paste it into separate 
          CSV files or directly into Excel to follow along.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
                  {copyStatus.salesData ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
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
                <h4 className="text-sm font-medium">Inventory Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(inventoryDataCSV, "inventoryData")}
                >
                  {copyStatus.inventoryData ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {inventoryDataCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Customer Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(customerDataCSV, "customerData")}
                >
                  {copyStatus.customerData ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {customerDataCSV}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hands-on Exercise */}
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Hands-on Exercise: Building Complex Data Transformation Pipelines</h3>

        <div className="space-y-4">
          <div className="rounded-md border">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-3">
              <h4 className="text-sm font-medium mb-1">Stage 1: Setting Up Data Connections</h4>
              <ol className="list-decimal pl-5 text-xs space-y-1">
                <li><strong>Create a new workbook and save it as "PowerQueryMastery.xlsx"</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Open Excel and create a blank workbook</li>
                    <li>Save it with a descriptive name</li>
                    <li>Create three CSV files from the sample datasets above (save as sales.csv, inventory.csv, and customers.csv)</li>
                  </ul>
                </li>
                <li><strong>Connect to multiple data sources:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Go to the Data tab in Excel's ribbon</li>
                    <li>Click "Get Data" (or "New Query" in some versions)</li>
                    <li>Browse to and select the sales.csv file</li>
                    <li>In the preview dialog, ensure data types are correctly identified (dates as dates, numbers as numbers)</li>
                    <li>Click "Load To..." instead of just "Load"</li>
                    <li>In the dialog box, select "Only Create Connection" and click "Load"</li>
                    <li>Repeat these steps for inventory.csv and customers.csv files</li>
                  </ul>
                </li>
                <li><strong>Open Power Query Editor to view connections:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Go to Data </li>
                    <li>You should now see all three data connections in the Queries pane</li>
                    <li>Double-click on any query to open it in the Power Query Editor</li>
                    <li>Familiarize yourself with the interface: Queries pane (left), preview area (center), and Query Settings pane (right)</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-3">
              <h4 className="text-sm font-medium mb-1">Stage 2: Advanced Data Transformations</h4>
              <ol className="list-decimal pl-5 text-xs space-y-1">
                <li><strong>Clean and transform the Sales data:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>In Power Query Editor, open the sales query</li>
                    <li>Format the Date column: select the column {'>'} Transform {'>'} Format</li>
                    <li>Create a calculated column for Month:
                      <ul>
                        <li>Add Column {'>'} New Column</li>
                      </ul>
                    </li>
                    <li>Create a calculated column for Quarter:
                      <ul>
                        <li>Add Column {'>'} New Column</li>
                        <li>Name it "Quarter"</li>
                        <li>Enter formula: <code>="Q" & Text.From(Date.QuarterOfYear({'['}Date{']'}))</code></li>
                      </ul>
                    </li>
                    <li>Add a Revenue Category column:
                      <ul>
                        <li>Add Column {'>'} New Column</li>
                        <li>Name it "Revenue Category"</li>
                        <li>Enter formula: <code>if [Sales] {'>'} 10000 then "High" else if [Sales] {'>'} 5000 then "Medium" else "Low"</code></li>
                      </ul>
                    </li>
                    <li>Rename this query to "Transformed_Sales"</li>
                  </ul>
                </li>
                <li><strong>Handle the Inventory data with advanced transformations:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Open the inventory query</li>
                    <li>Pivot the data to show products by warehouse:
                      <ul>
                        <li>Select the Warehouse column</li>
                        <li>Transform {'>'} Pivot Column</li>
                        <li>Choose "QuantityOnHand" as the Values column</li>
                        <li>Expand the advanced options and select "Sum" as the aggregation</li>
                      </ul>
                    </li>
                    <li>Add a Stock Status column:
                      <ul>
                        <li>Add Column {'>'} New Column</li>
                        <li>Name it "Overall Stock Status"</li>
                        <li>Create a formula comparing total quantity across warehouses with restock level</li>
                      </ul>
                    </li>
                    <li>Format the LastUpdated column as a date</li>
                    <li>Rename this query to "Inventory_Analysis"</li>
                  </ul>
                </li>
                <li><strong>Group and categorize Customer data:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Open the customer query</li>
                    <li>Group data by Region and AccountType:
                      <ul>
                        <li>Transform {'>'} Group By</li>
                        <li>Group by Region, then by AccountType</li>
                        <li>Add aggregation: Sum of TotalSpend, Count of rows</li>
                      </ul>
                    </li>
                    <li>Add calculated column for Average Spend:
                      <ul>
                        <li>Add Column {'>'} New Column</li>
                        <li>Formula: divide sum of spend by count</li>
                      </ul>
                    </li>
                    <li>Sort results by total spend in descending order</li>
                    <li>Rename this query to "Customer_Segments"</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-3">
              <h4 className="text-sm font-medium mb-1">Stage 3: Merging and Joining Data</h4>
              <ol className="list-decimal pl-5 text-xs space-y-1">
                <li><strong>Create relationships between datasets:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Create a new query through "Merge Queries" option:
                      <ul>
                        <li>Home tab </li>
                        <li>Select Transformed_Sales as your first table</li>
                        <li>Select Inventory_Analysis as your second table</li>
                        <li>Choose "Product" columns from both tables for the join</li>
                        <li>Select "Left Outer" join type (keep all rows from Sales)</li>
                      </ul>
                    </li>
                    <li>In the new merged query, expand the Inventory_Analysis column to select just the fields you need:
                      <ul>
                        <li>Click the expand button (double arrows) on the column header</li>
                        <li>Select QuantityOnHand and Stock Status columns</li>
                        <li>Uncheck "Use original column name as prefix"</li>
                      </ul>
                    </li>
                    <li>Name this query "Sales_With_Inventory"</li>
                  </ul>
                </li>
                <li><strong>Create a regional sales and customer analysis:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Create another merge between Sales_With_Inventory and Customer_Segments:
                      <ul>
                        <li>Home tab </li>
                        <li>Join on the Region column</li>
                        <li>Use an "Inner" join type</li>
                      </ul>
                    </li>
                    <li>Expand only the fields needed from Customer_Segments</li>
                    <li>Create a calculated column for potential cross-selling opportunities:
                      <ul>
                        <li>Add Column {'>'} New Column</li>
                        <li>Name it "Cross-Sell Potential"</li>
                        <li>Use a formula that combines product category, customer segment, and purchase history</li>
                      </ul>
                    </li>
                    <li>Name this query "Regional_Analysis"</li>
                  </ul>
                </li>
                <li><strong>Master M code for custom transformations:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Create a new blank query: Home tab </li>
                    <li>Open the Advanced Editor: View tab </li>
                    <li>Study the M code for one of your existing transformations</li>
                    <li>Create a custom function that calculates sales per unit:
                      <ul>
                        <li>In Advanced Editor, enter:</li>
                        <li>
<code>
// Sales per unit function
(sales as number, units as number) ={'>'}let
  Result = if units {'>'} 0 then sales/units else 0
in
  Result
</code>
                        </li>
                        <li>Name this query "fnSalesPerUnit"</li>
                        <li>Verify it shows as a function in your Queries pane</li>
                      </ul>
                    </li>
                    <li>Apply your custom function to the Sales_With_Inventory query:
                      <ul>
                        <li>Add Column {'>'} New Column</li>
                        <li>Select your function and map the parameters to your columns</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-3">
              <h4 className="text-sm font-medium mb-1">Stage 4: Creating a Data Model and Loading Data</h4>
              <ol className="list-decimal pl-5 text-xs space-y-1">
                <li><strong>Set up a proper data model structure:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Create a date dimension table:
                      <ul>
                        <li>New Source </li>
                        <li>Advanced Editor</li>
                        <li>
<code >let
    StartDate = #date(2023, 1, 1),
    EndDate = #date(2023, 12, 31),
    DayCount = Duration.Days(EndDate - StartDate) + 1,
    Source = List.Dates(StartDate, DayCount, #duration(1, 0, 0, 0)),
    TableFromList = Table.FromList(Source, Splitter.SplitByNothing()),
    RenamedColumns = Table.RenameColumns(TableFromList, "(Column1)", "Date"),
    ChangedType = Table.TransformColumnTypes(RenamedColumns, "(Date)", "type date"),
    'This code will generate an error MQUERY'
    AddedYear = Table.AddColumn(ChangedType, "Year", each Date.Year([Date])),
    AddedQuarter = Table.AddColumn(AddedYear, "Quarter", each "Q" & Text.From(Date.QuarterOfYear([Date]))),
    AddedMonth = Table.AddColumn(AddedQuarter, "Month", each Date.MonthName([Date])),
    AddedMonthNum = Table.AddColumn(AddedMonth, "MonthNum", each Date.Month([Date])),
    AddedDay = Table.AddColumn(AddedMonthNum, "Day", each Date.Day([Date])),
    AddedWeekday = Table.AddColumn(AddedDay, "Weekday", each Date.DayOfWeekName([Date])),
    Result = AddedWeekday
in
    Result

</code>
                        </li>
                        <li>Name this query "Date_Dimension"</li>
                      </ul>
                    </li>
                    <li>Prepare all queries for loading:
                      <ul>
                        <li>Review all queries and ensure appropriate naming</li>
                        <li>For each query, right-click and select "Properties"</li>
                        <li>Add descriptions to document your transformation steps</li>
                      </ul>
                    </li>
                    <li>Configure load settings:
                      <ul>
                        <li>Home tab </li>
                        <li>Choose "Only Create Connection" for dimension tables</li>
                        <li>For analysis tables, select "Table" and "Add this data to the Data Model"</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><strong>Load to Excel and create a data model:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Load your final analysis queries to Excel as tables</li>
                    <li>Go to Data </li>
                    <li>Verify and establish relationships between your tables:
                      <ul>
                        <li>Connect Date_Dimension to Transformed_Sales on Date column</li>
                        <li>Connect other relationships as appropriate</li>
                      </ul>
                    </li>
                    <li>Create a basic PivotTable from your data model:
                      <ul>
                        <li>Insert </li>
                        <li>Add fields from multiple tables to demonstrate relationships</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><strong>Create an automated refresh process:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Set up refresh parameters:
                      <ul>
                        <li>Data </li>
                        <li>Right-click on a query </li>
                        <li>Configure refresh settings</li>
                      </ul>
                    </li>
                    <li>Set up query dependencies:
                      <ul>
                        <li>In Power Query Editor, right-click on a query</li>
                        <li>Select "Query Dependencies" to view and manage the sequence of refreshes</li>
                      </ul>
                    </li>
                    <li>Document your data pipeline:
                      <ul>
                        <li>Create a new worksheet named "Documentation"</li>
                        <li>List all queries and their purpose</li>
                        <li>Describe the transformation steps and relationships</li>
                        <li>Add refresh instructions for future users</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-3">
              <h4 className="text-sm font-medium mb-1">Stage 5: Advanced Power Query Techniques</h4>
              <ol className="list-decimal pl-5 text-xs space-y-1">
                <li><strong>Create parameterized queries:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Create a parameter for date ranges:
                      <ul>
                        <li>Home tab </li>
                        <li>Create a date parameter named "StartDate" with an appropriate default value</li>
                        <li>Create another parameter named "EndDate"</li>
                      </ul>
                    </li>
                    <li>Modify the Transformed_Sales query to use parameters:
                      <ul>
                        <li>Add a step that filters dates: Table.SelectRows(PreviousStep, each {'['}Date{']'} {'>'} EndDate)</li>
                        <li>Test changing parameter values and see how the data updates</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><strong>Implement error handling and data quality checks:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Add error handling to custom functions:
                      <ul>
                        <li>Modify your fnSalesPerUnit function to handle errors:</li>
                        <li>
<code>
// Improved Sales per unit function with error handling
(sales as number, units as number) ={'>'}let
  Result = try if units {'>'} 0 then sales/units else 0 otherwise 0
in
  Result
</code>
                        </li>
                      </ul>
                    </li>
                    <li>Create a data quality check query:
                      <ul>
                        <li>Create a new query based on Transformed_Sales</li>
                        <li>Group by "Revenue Category" and count records</li>
                        <li>Add checks for missing values or outliers</li>
                        <li>Name it "Data_Quality_Check"</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><strong>Create a dynamic Power Query solution:</strong>
                  <ul className="list-disc pl-5 my-1">
                    <li>Add a parameter for selecting region:
                      <ul>
                        <li>Create a text parameter named "SelectedRegion" with options for each region plus "All Regions"</li>
                      </ul>
                    </li>
                    <li>Create a conditional filtering query:
                      <ul>
                        <li>Duplicate the Regional_Analysis query</li>
                        <li>Add a condition: if SelectedRegion = "All Regions" then [original table] else [filtered table]</li>
                        <li>Test the parameter by changing region selection and verifying results</li>
                      </ul>
                    </li>
                    <li>Document your advanced techniques:
                      <ul>
                        <li>In your Documentation sheet, add a section on advanced techniques</li>
                        <li>Explain how parameters, error handling, and conditional filtering work</li>
                        <li>Add screenshots of M code for future reference</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Power Query Tools Overview */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">Power Query Tools & Techniques</h3>
        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Key Power Query Features</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Get & Transform:</strong>
                  Connect to 100+ data sources including databases, files, folders, and web</li>
            <li><strong>Query Editor:</strong>
                  Visual interface for data transformation with step-by-step history</li>
            <li><strong>M Language:</strong>
                  Powerful formula language for advanced transformations and custom functions</li>
            <li><strong>Data Types:</strong>
                  Advanced type system with date/time, duration, and custom handling</li>
            <li><strong>Query Folding:</strong>
                  Optimization technique that pushes transformations back to source databases</li>
            <li><strong>Parameters:</strong>
                  Create dynamic, user-adjustable queries</li>
            <li><strong>Functions:</strong>
                  Build reusable custom transformation logic</li>
            <li><strong>Column Profiling:</strong>
                  Analyze data quality and distribution</li>
            <li><strong>Data Privacy:</strong>
                  Configure data source privacy levels for secure combinations</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Best Practices</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Query Organization:</strong>
                  Use descriptive names, groups, and documentation</li>
            <li><strong>Performance Optimization:</strong>
                  Remove unneeded columns early, use query folding when possible</li>
            <li><strong>Modularity:</strong>
                  Create reference queries for reuse and easier maintenance</li>
            <li><strong>Testing:</strong>
                  Test with different data scenarios, especially edge cases</li>
            <li><strong>Error Handling:</strong>
                  Implement proper error handling in custom functions</li>
            <li><strong>Documentation:</strong>
                  Document complex M code with comments</li>
            <li><strong>Version Control:</strong>
                  Save versions of your queries during development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PowerQueryMasteryExercise;
