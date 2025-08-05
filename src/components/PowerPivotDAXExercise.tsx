import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

const PowerPivotDAXExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  // Sample data strings for Power Pivot exercise
  const salesDataCSV = `Date,Region,ProductID,Sales,Units
2023-01-15,North,P001,12500.00,25
2023-01-22,South,P002,5400.00,18
2023-01-29,East,P003,1200.00,40
2023-02-05,West,P001,15000.00,30
2023-02-12,North,P004,8200.00,10
2023-02-19,South,P001,14000.00,28
2023-02-26,East,P002,6300.00,21
2023-03-05,West,P003,1800.00,60
2023-03-12,North,P001,16500.00,33
2023-03-19,South,P004,9400.00,12`;

  const productsDataCSV = `ProductID,ProductName,Category,UnitCost,LaunchDate
P001,Laptops,Electronics,650.00,2022-06-15
P002,Monitors,Electronics,200.00,2022-08-10
P003,Keyboards,Accessories,20.00,2022-05-20
P004,Printers,Office,450.00,2022-07-12
P005,Mice,Accessories,15.00,2022-05-25`;

  const storesDataCSV = `StoreID,Region,Size,OpenDate,Manager
S001,North,Large,2020-01-15,John Smith
S002,South,Medium,2021-03-22,Maria Garcia
S003,East,Small,2019-11-05,David Lee
S004,West,Large,2020-06-30,Lisa Wong
S005,North,Medium,2021-08-12,Robert Johnson`;

  const dateDimensionCSV = `Date,Year,Quarter,Month,MonthNum,Day,Weekday,IsHoliday
2023-01-01,2023,Q1,January,1,1,Sunday,1
2023-01-02,2023,Q1,January,1,2,Monday,0
2023-01-03,2023,Q1,January,1,3,Tuesday,0
...`;

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
        <h2 className="text-xl font-semibold">Power Pivot & DAX</h2>
        <p className="text-sm text-muted-foreground">Power Pivot is an Excel add-in that enables data modeling, allowing you to create relationships between tables and build complex 
          calculations with Data Analysis Expressions (DAX). Master these tools to transform how you work with data in Excel.
        </p>
      </div>

      {/* Sample Datasets */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Sample Datasets</h3>
        <p className="text-sm text-muted-foreground">Use these sample datasets for the hands-on exercises. Copy each dataset and paste it into separate 
          CSV files or directly into Excel to follow along.
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
                <h4 className="text-sm font-medium">Products Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(productsDataCSV, "productsData")}
                >
                  {copyStatus["productsData"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {productsDataCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Stores Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(storesDataCSV, "storesData")}
                >
                  {copyStatus["storesData"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {storesDataCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Date Dimension</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(dateDimensionCSV, "dateDimension")}
                >
                  {copyStatus["dateDimension"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {dateDimensionCSV}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hands-on Exercise */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Hands-on Exercise: Design a Comprehensive Data Model</h3>
        <p className="text-sm text-muted-foreground">In this exercise, you'll build a complete data model using Power Pivot, create relationships between tables, 
          and develop advanced DAX measures for business intelligence.
        </p>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Exercise Steps</h4>
            <ol className="list-decimal pl-5 space-y-3 text-sm">
              <li><strong>Load data into Power Pivot:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Enable Power Pivot add-in:
                    <ul>
                      <li>File → Options → Add-ins → Manage: COM Add-ins → Go...</li>
                      <li>Check "Microsoft Power Pivot for Excel" and click OK</li>
                    </ul>
                  </li>
                  <li>Import the sample datasets:
                    <ul>
                      <li>Power Pivot tab → Manage → Home → Get External Data → From Text</li>
                      <li>Import each dataset separately (Sales, Products, Stores, Date Dimension)</li>
                      <li>Make sure to set appropriate data types for each column</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong>Create relationships between tables:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>In the Power Pivot window, go to Design → Relationships</li>
                  <li>Create the following relationships:
                    <ul>
                      <li>Sales[Date] to DateDimension[Date]</li>
                      <li>Sales[ProductID] to Products[ProductID]</li>
                      <li>Sales[Region] to Stores[Region]</li>
                    </ul>
                  </li>
                  <li>Switch to Diagram View to visualize your data model</li>
                  <li>Validate relationships are properly configured</li>
                </ul>
              </li>
              
              <li><strong>Create calculated columns using DAX:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Add to Sales table:
                    <ul>
                      <li>Revenue = [Sales] * [Units]</li>
                      <li>Cost = RELATED(Products[UnitCost]) * [Units]</li>
                      <li>Profit = [Revenue] - [Cost]</li>
                      <li>ProfitMargin = DIVIDE([Profit], [Revenue], 0)</li>
                    </ul>
                  </li>
                  <li>Add to Products table:
                    <ul>
                      <li>ProductAge = DATEDIFF(Products[LaunchDate], TODAY(), DAY)</li>
                      <li>AgeCategory = IF([ProductAge] {'>'} 365, "Mature", "New")</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong>Create DAX measures:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Basic measures:
                    <ul>
                      <li>Total Sales := SUM(Sales[Sales])</li>
                      <li>Total Units := SUM(Sales[Units])</li>
                      <li>Total Revenue := SUM(Sales[Revenue])</li>
                      <li>Total Profit := SUM(Sales[Profit])</li>
                    </ul>
                  </li>
                  <li>Time Intelligence measures:
                    <ul>
                      <li>YTD Sales := TOTALYTD(SUM(Sales[Sales]), DateDimension[Date])</li>
                      <li>QTD Sales := TOTALQTD(SUM(Sales[Sales]), DateDimension[Date])</li>
                      <li>MTD Sales := TOTALMTD(SUM(Sales[Sales]), DateDimension[Date])</li>
                      <li>Prior Year Sales := CALCULATE([Total Sales], SAMEPERIODLASTYEAR(DateDimension[Date]))</li>
                      <li>YoY Growth % := DIVIDE([Total Sales] - [Prior Year Sales], [Prior Year Sales], 0)</li>
                    </ul>
                  </li>
                  <li>Advanced analytical measures:
                    <ul>
                      <li>Sales Moving Average := AVERAGEX(DATESINPERIOD(DateDimension[Date], MAX(DateDimension[Date]), -90, DAY), [Total Sales])</li>
                      <li>Top Product Contribution % := DIVIDE(CALCULATE([Total Sales], TOPN(1, ALL(Products), [Total Sales])), [Total Sales], 0)</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong>Create a data model hierarchy:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>In the DateDimension table:
                    <ul>
                      <li>Create a Calendar hierarchy: Year → Quarter → Month → Date</li>
                    </ul>
                  </li>
                  <li>In the Products table:
                    <ul>
                      <li>Create a Product hierarchy: Category → ProductName</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong>Build PivotTables with your data model:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create a Sales Analysis PivotTable:
                    <ul>
                      <li>Insert → PivotTable → Use this workbook's Data Model</li>
                      <li>Rows: Calendar hierarchy</li>
                      <li>Columns: Products hierarchy</li>
                      <li>Values: Total Sales, YoY Growth %, Total Profit</li>
                      <li>Slicers: Region, AgeCategory</li>
                    </ul>
                  </li>
                  <li>Create a Trend Analysis PivotTable:
                    <ul>
                      <li>Rows: Date</li>
                      <li>Values: Total Sales, Sales Moving Average</li>
                      <li>Insert a Line chart from the PivotTable data</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong>Create a KPI dashboard:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Add DAX measures for KPIs:
                    <ul>
                      <li>Sales Target Achievement % := DIVIDE([Total Sales], 100000, 0)</li>
                      <li>Profit Target Achievement % := DIVIDE([Total Profit], 30000, 0)</li>
                    </ul>
                  </li>
                  <li>Create KPI visuals:
                    <ul>
                      <li>Insert → PivotChart → Use this workbook's Data Model</li>
                      <li>Create gauges, cards, or custom visualizations to show KPIs</li>
                    </ul>
                  </li>
                  <li>Finalize the dashboard:
                    <ul>
                      <li>Add title and descriptions</li>
                      <li>Format all visualizations consistently</li>
                      <li>Add slicers for interactive filtering</li>
                      <li>Create a navigation menu or instructions for users</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Power Pivot & DAX Overview */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">Power Pivot & DAX Essentials</h3>
        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Key Power Pivot Features</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Data Model:</strong>
                  Create relationships between tables without VLOOKUP/INDEX-MATCH</li>
            <li><strong>Import Millions of Rows:</strong>
                  Overcome Excel's row limit with compressed in-memory storage</li>
            <li><strong>Multiple Data Sources:</strong>
                  Combine data from various sources in one model</li>
            <li><strong>Relationships:</strong>
                  One-to-many, many-to-one, and many-to-many relationships</li>
            <li><strong>Calculated Columns:</strong>
                  Add derived columns to tables using DAX</li>
            <li><strong>Measures:</strong>
                  Create dynamic calculations that respond to PivotTable context</li>
            <li><strong>Time Intelligence:</strong>
                  Built-in functions for YTD, QTD, MTD, and period comparisons</li>
            <li><strong>Hierarchies:</strong>
                  Build drill-down paths for easier data exploration</li>
            <li><strong>Data Analysis:</strong>
                  Advanced business analytics with PivotTables and Power BI</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Essential DAX Functions</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Aggregation:</strong>
                  SUM, AVERAGE, MIN, MAX, COUNT, COUNTROWS, DISTINCTCOUNT</li>
            <li><strong>Filtering:</strong>
                  FILTER, ALL, ALLEXCEPT, VALUES, DISTINCT, KEEPFILTERS</li>
            <li><strong>Time Intelligence:</strong>
                  TOTALYTD, SAMEPERIODLASTYEAR, DATEADD, DATESBETWEEN</li>
            <li><strong>Mathematical:</strong>
                  ABS, ROUND, TRUNC, POWER, SQRT, LN, LOG</li>
            <li><strong>Text:</strong>
                  CONCATENATE, FORMAT, LEFT, RIGHT, MID, SUBSTITUTE, SEARCH</li>
            <li><strong>Logical:</strong>
                  IF, SWITCH, AND, OR, NOT, IFERROR, ISBLANK</li>
            <li><strong>Context Modification:</strong>
                  CALCULATE, CALCULATETABLE, CONTEXT, ALLSELECTED</li>
            <li><strong>Ranking:</strong>
                  RANK, RANKX, TOPN, BOTTOMN</li>
            <li><strong>Iterator:</strong>
                  SUMX, AVERAGEX, MAXX, MINX, COUNTX, CONCATENATEX</li>
            <li><strong>Statistical:</strong>
                  MEDIAN, STDEV.P, VAR.P, PERCENTILE.INC</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Best Practices</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Star Schema:</strong>
                  Design your data model with a central fact table linked to dimension tables</li>
            <li><strong>Naming Conventions:</strong>
                  Use consistent, descriptive naming for tables, columns, and measures</li>
            <li><strong>Measures vs. Calculated Columns:</strong>
                  Use measures for aggregations, columns for row-level calculations</li>
            <li><strong>Data Types:</strong>
                  Set appropriate data types to optimize performance and memory usage</li>
            <li><strong>DAX Formatting:</strong>
                  Write clean, indented DAX expressions with line breaks for complex formulas</li>
            <li><strong>Documentation:</strong>
                  Add descriptions to measures and complex calculations</li>
            <li><strong>Performance Optimization:</strong>
                  Monitor query performance and optimize complex measures</li>
            <li><strong>Data Validation:</strong>
                  Verify calculations against source data during development</li>
            <li><strong>Security:</strong>
                  Implement row-level security for sensitive data when needed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PowerPivotDAXExercise;
