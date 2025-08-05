import React from 'react';
import { Check, Copy, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

// CopyableContent component for code snippets with copy functionality
interface CopyableContentProps {
  content: string;
  children: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  alwaysShowButton?: boolean;
}

const CopyableContent: React.FC<CopyableContentProps> = ({
  content,
  children,
  className = "",
  buttonClassName = "",
  alwaysShowButton = false
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative group ${className}`}>
      <div className={`absolute top-2 right-2 ${alwaysShowButton ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className={`p-1 h-7 hover:bg-muted/50 ${buttonClassName}`}
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      {children}
    </div>
  );
};

interface VBAExcelObjectsLessonProps {
  onContinue?: () => void;
}

const VBAExcelObjectsLesson: React.FC<VBAExcelObjectsLessonProps> = ({ onContinue }) => {
  // Function to extract table data for copyable content
  const extractTableData = (tableId: string): string => {
    const tables = {
      "excel-hierarchy": `Object,Description,Example
Application,Top level Excel application,Application.StatusBar = "Processing..."
Workbook,An Excel file,Workbooks.Open("Report.xlsx")
Worksheet,Sheet in a workbook,Worksheets("Sheet1").Activate
Range,Cells or cell selection,Range("A1:B10").Value = 100
Chart,Visual data representation,Charts.Add.ChartType = xlPie`,
      
      "workbook-properties": `Property/Method,Description,Example
Name,Workbook name,ActiveWorkbook.Name
Path,File path,ActiveWorkbook.Path
FullName,Full path with filename,ActiveWorkbook.FullName
Saved,Whether workbook has been saved,ActiveWorkbook.Saved = True
Worksheets,Collection of worksheets,ActiveWorkbook.Worksheets.Count`,
      
      "worksheet-methods": `Method,Description,Example
Activate,Makes the worksheet active,Worksheets("Data").Activate
Select,Selects the worksheet,Worksheets("Data").Select
Delete,Deletes the worksheet,Worksheets("OldData").Delete
Move,Moves the worksheet,Worksheets("Data").Move After:=Worksheets("Summary")
Copy,Copies the worksheet,Worksheets("Template").Copy After:=Worksheets("Data")`,
      
      "range-properties": `Property,Description,Example
Value,Gets/sets the value of a cell/range,Range("A1").Value = "Sales Report"
Formula,Gets/sets formula as string,Range("C5").Formula = "=SUM(C1:C4)"
Address,Returns the cell reference as string,CellAddress = Range("B5").Address
Font,Returns font object for formatting,Range("A1").Font.Bold = True`,
      
      "chart-properties": `Property,Description,Example
ChartType,Gets/sets the chart type,ActiveChart.ChartType = xlColumnClustered
HasTitle,Gets/sets whether chart has title,ActiveChart.HasTitle = True
ChartTitle,Returns the title object,ActiveChart.ChartTitle.Text = "Sales Performance"
Legend,Returns the legend object,ActiveChart.Legend.Position = xlBottom`
    };
    
    return tables[tableId] || "No data available for this table";
  };

  // Code examples for the lesson
  const objectHierarchyCode = `' Excel Object Hierarchy Example
Sub ExploreObjectHierarchy()
    ' Access the Application object
    Application.ScreenUpdating = False
    
    ' Access the active Workbook
    Dim wb As Workbook
    Set wb = ActiveWorkbook
    
    ' Access a specific Worksheet
    Dim ws As Worksheet
    Set ws = wb.Worksheets("Sales Data")
    
    ' Access a Range on the worksheet
    Dim salesRange As Range
    Set salesRange = ws.Range("B2:E10")
    
    ' Access a Chart on the worksheet
    Dim salesChart As Chart
    Set salesChart = ws.ChartObjects(1).Chart
    
    ' Restore screen updating
    Application.ScreenUpdating = True
End Sub`;

  const createWorkbookCode = `' Creating and Managing Workbooks
Sub ManageWorkbooks()
    ' Create a new workbook
    Dim newWb As Workbook
    Set newWb = Workbooks.Add
    
    ' Save the workbook with a specific name
    newWb.SaveAs Filename:="R:\\Reports\\SalesReport.xlsx", _
                FileFormat:=xlOpenXMLWorkbook
    
    ' Open an existing workbook
    Dim existingWb As Workbook
    Set existingWb = Workbooks.Open("R:\\Data\\QuarterlyData.xlsx")
    
    ' Close workbook without saving changes
    existingWb.Close SaveChanges:=False
    
    ' Save and close the new workbook
    newWb.Close SaveChanges:=True
End Sub`;

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-4">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Lesson 4: Working with Excel Objects</h1>
        <p className="text-lg text-muted-foreground">Learn how to manipulate workbooks, worksheets, ranges, and charts using VBA
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Excel Object Hierarchy</h2>
        <p>VBA interacts with Excel through a hierarchical object model. Understanding this hierarchy 
          is crucial for effective programming:
        </p>
        
        <div className="pl-6 space-y-2">
          <p><strong>Application</strong> → The Excel application itself</p>
          <p><strong>Workbook</strong> → An Excel file (.xlsx, .xlsm)</p>
          <p><strong>Worksheet</strong> → Individual sheets within a workbook</p>
          <p><strong>Range</strong> → A cell or collection of cells</p>
          <p><strong>Chart</strong> → Visual representation of data</p>
        </div>
        
        <div className="mt-4">
          <CopyableContent
            content={objectHierarchyCode}
            className="mt-2"
            alwaysShowButton={true}
          >
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
              <code>{objectHierarchyCode}</code>
            </pre>
          </CopyableContent>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Working with Workbooks</h2>
        <p>Workbooks are the Excel files you create and edit. VBA provides methods to create, open, 
          save, and manipulate workbooks.
        </p>
        
        <div className="pl-6 space-y-1">
          <p><code >Workbooks.Add</code> - Creates a new workbook</p>
          <p><code >Workbooks.Open("path")</code> - Opens an existing workbook</p>
          <p><code >ActiveWorkbook</code> - References the currently active workbook</p>
          <p><code >ThisWorkbook</code> - References the workbook containing the VBA code</p>
        </div>
        
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Common Workbook Properties</h3>
          <CopyableContent
            content={extractTableData("workbook-properties")}
          >
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border px-4 py-2 text-left">Property</th>
                    <th className="border px-4 py-2 text-left">Description</th>
                    <th className="border px-4 py-2 text-left">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Name</td>
                    <td className="border px-4 py-2">Name of the workbook</td>
                    <td className="border px-4 py-2 font-mono text-xs">ActiveWorkbook.Name = "Sales Report.xlsm"</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Path</td>
                    <td className="border px-4 py-2">File path where workbook is stored</td>
                    <td className="border px-4 py-2 font-mono text-xs">FilePath = ActiveWorkbook.Path</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">FullName</td>
                    <td className="border px-4 py-2">Full path including filename</td>
                    <td className="border px-4 py-2 font-mono text-xs">FullPath = ActiveWorkbook.FullName</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Saved</td>
                    <td className="border px-4 py-2">Returns whether workbook has unsaved changes</td>
                    <td className="border px-4 py-2 font-mono text-xs">If Not ActiveWorkbook.Saved Then Call SaveWorkbook</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">FileFormat</td>
                    <td className="border px-4 py-2">Numerical value representing file format</td>
                    <td className="border px-4 py-2 font-mono text-xs">If ActiveWorkbook.FileFormat = xlOpenXMLWorkbook Then</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CopyableContent>
        </div>
        
        <div className="mt-4">
          <CopyableContent
            content={createWorkbookCode}
            className="mt-2"
            alwaysShowButton={true}
          >
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
              <code>{createWorkbookCode}</code>
            </pre>
          </CopyableContent>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Working with Worksheets</h2>
        <p>Worksheets are individual pages within a workbook that contain cells arranged in rows and columns.
          VBA provides powerful tools to manage and manipulate worksheets.
        </p>
        
        <div className="pl-6 space-y-1">
          <p><code >Worksheets("Sheet1")</code> - References a specific worksheet by name</p>
          <p><code >Worksheets(1)</code> - References a worksheet by index</p>
          <p><code >ActiveSheet</code> - References the currently active worksheet</p>
          <p><code >Sheets.Add</code> - Adds a new worksheet</p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Common Worksheet Methods</h3>
          <CopyableContent
            content={extractTableData("worksheet-methods")}
            alwaysShowButton={true}
          >
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border px-4 py-2 text-left">Method</th>
                    <th className="border px-4 py-2 text-left">Description</th>
                    <th className="border px-4 py-2 text-left">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Select</td>
                    <td className="border px-4 py-2">Makes the worksheet active</td>
                    <td className="border px-4 py-2 font-mono text-xs">Worksheets("Sales Data").Select</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Activate</td>
                    <td className="border px-4 py-2">Activates the worksheet</td>
                    <td className="border px-4 py-2 font-mono text-xs">Worksheets("Sales Data").Activate</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Copy</td>
                    <td className="border px-4 py-2">Copies worksheet to another location</td>
                    <td className="border px-4 py-2 font-mono text-xs">Worksheets("Template").Copy After:=Worksheets("Sales Data")</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Delete</td>
                    <td className="border px-4 py-2">Deletes the worksheet</td>
                    <td className="border px-4 py-2 font-mono text-xs">Worksheets("Old Data").Delete</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CopyableContent>
        </div>
        
        <div className="mt-4">
          <CopyableContent
            content={`' Working with Worksheets Example
Sub ManageWorksheets()
    ' Add a new worksheet
    Dim newSheet As Worksheet
    Set newSheet = ThisWorkbook.Worksheets.Add(After:=ThisWorkbook.Worksheets(ThisWorkbook.Worksheets.Count))
    
    ' Name the new worksheet
    newSheet.Name = "Q3 Sales"
    
    ' Copy a worksheet
    ThisWorkbook.Worksheets("Template").Copy After:=ThisWorkbook.Worksheets("Q3 Sales")
    
    ' Rename the copied worksheet
    ThisWorkbook.Worksheets(ThisWorkbook.Worksheets.Count).Name = "Q4 Sales"
    
    ' Hide a worksheet
    ThisWorkbook.Worksheets("Raw Data").Visible = xlSheetHidden
    
    ' Delete a worksheet (if it exists)
    On Error Resume Next
    ThisWorkbook.Worksheets("Temporary").Delete
    On Error GoTo 0
    
    ' Activate a specific worksheet
    ThisWorkbook.Worksheets("Dashboard").Activate
End Sub`}
            className="mt-2"
          >
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
              <code>{`' Working with Worksheets Example
Sub ManageWorksheets()
    ' Add a new worksheet
    Dim newSheet As Worksheet
    Set newSheet = ThisWorkbook.Worksheets.Add(After:=ThisWorkbook.Worksheets(ThisWorkbook.Worksheets.Count))
    
    ' Name the new worksheet
    newSheet.Name = "Q3 Sales"
    
    ' Copy a worksheet
    ThisWorkbook.Worksheets("Template").Copy After:=ThisWorkbook.Worksheets("Q3 Sales")
    
    ' Rename the copied worksheet
    ThisWorkbook.Worksheets(ThisWorkbook.Worksheets.Count).Name = "Q4 Sales"
    
    ' Hide a worksheet
    ThisWorkbook.Worksheets("Raw Data").Visible = xlSheetHidden
    
    ' Delete a worksheet (if it exists)
    On Error Resume Next
    ThisWorkbook.Worksheets("Temporary").Delete
    On Error GoTo 0
    
    ' Activate a specific worksheet
    ThisWorkbook.Worksheets("Dashboard").Activate
End Sub`}</code>
            </pre>
          </CopyableContent>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Working with Ranges</h2>
        <p>Ranges represent cells or groups of cells in a worksheet. They are one of the most frequently
          used objects in Excel VBA programming.
        </p>
        
        <div className="pl-6 space-y-1">
          <p><code >Range("A1")</code> - References a single cell</p>
          <p><code >Range("A1:B10")</code> - References a range of cells</p>
          <p><code >Cells(1, 1)</code> - References cell at row 1, column 1 (A1)</p>
          <p><code >Range(Cells(1, 1), Cells(10, 5))</code> - References range A1:E10</p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Common Range Properties</h3>
          <CopyableContent
            content={extractTableData("range-properties")}
          >
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border px-4 py-2 text-left">Property</th>
                    <th className="border px-4 py-2 text-left">Description</th>
                    <th className="border px-4 py-2 text-left">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Value</td>
                    <td className="border px-4 py-2">Gets/sets the value of a cell/range</td>
                    <td className="border px-4 py-2 font-mono text-xs">Range("A1").Value = "Sales Report"</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Formula</td>
                    <td className="border px-4 py-2">Gets/sets formula as string</td>
                    <td className="border px-4 py-2 font-mono text-xs">Range("C5").Formula = "=SUM(C1:C4)"</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Address</td>
                    <td className="border px-4 py-2">Returns the cell reference as string</td>
                    <td className="border px-4 py-2 font-mono text-xs">CellAddress = Range("B5").Address</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Font</td>
                    <td className="border px-4 py-2">Returns font object for formatting</td>
                    <td className="border px-4 py-2 font-mono text-xs">Range("A1").Font.Bold = True</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CopyableContent>
        </div>
        
        <div className="mt-4">
          <CopyableContent
            content={`' Working with Ranges Example
Sub ManipulateRanges()
    ' Set values in individual cells
    Range("A1").Value = "Sales Report: Q3 2023"
    Range("A2").Value = "Prepared by: Sipho Nkosi"
    Range("A3").Value = "Date: " & Format(Date, "dd/mm/yyyy")
    
    ' Set values in a range at once using an array
    Range("B5:E5").Value = Array("Product", "Units Sold", "Unit Price", "Total")
    
    ' Format a range
    With Range("B5:E5")
        .Font.Bold = True
        .Interior.Color = RGB(217, 217, 217)
        .Borders.LineStyle = xlContinuous
    End With
    
    ' Set values for product data
    Range("B6").Value = "Wireless Mouse"
    Range("C6").Value = 145
    Range("D6").Value = "R249.99"
    Range("E6").Formula = "=C6*D6"
    
    Range("B7").Value = "USB-C Cable"
    Range("C7").Value = 278
    Range("D7").Value = "R125.00"
    Range("E7").Formula = "=C7*D7"
    
    ' Format currency values
    Range("D6:E7").NumberFormat = "R#,##0.00"
    
    ' Insert a total row
    Range("B9").Value = "Total"
    Range("E9").Formula = "=SUM(E6:E7)"
    Range("B9:E9").Font.Bold = True
    
    ' Clear a range
    Range("A12:E15").ClearContents
    
    ' Find the last used row in column B
    Dim lastRow As Long
    lastRow = Cells(Rows.Count, "B").End(xlUp).Row
    
    ' Select a range programmatically
    Range("B6:E" & lastRow).Select
End Sub`}
            className="mt-2"
          >
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
              <code>{`' Working with Ranges Example
Sub ManipulateRanges()
    ' Set values in individual cells
    Range("A1").Value = "Sales Report: Q3 2023"
    Range("A2").Value = "Prepared by: Sipho Nkosi"
    Range("A3").Value = "Date: " & Format(Date, "dd/mm/yyyy")
    
    ' Set values in a range at once using an array
    Range("B5:E5").Value = Array("Product", "Units Sold", "Unit Price", "Total")
    
    ' Format a range
    With Range("B5:E5")
        .Font.Bold = True
        .Interior.Color = RGB(217, 217, 217)
        .Borders.LineStyle = xlContinuous
    End With
    
    ' Set values for product data
    Range("B6").Value = "Wireless Mouse"
    Range("C6").Value = 145
    Range("D6").Value = "R249.99"
    Range("E6").Formula = "=C6*D6"
    
    Range("B7").Value = "USB-C Cable"
    Range("C7").Value = 278
    Range("D7").Value = "R125.00"
    Range("E7").Formula = "=C7*D7"
    
    ' Format currency values
    Range("D6:E7").NumberFormat = "R#,##0.00"
    
    ' Insert a total row
    Range("B9").Value = "Total"
    Range("E9").Formula = "=SUM(E6:E7)"
    Range("B9:E9").Font.Bold = True
    
    ' Clear a range
    Range("A12:E15").ClearContents
    
    ' Find the last used row in column B
    Dim lastRow As Long
    lastRow = Cells(Rows.Count, "B").End(xlUp).Row
    
    ' Select a range programmatically
    Range("B6:E" & lastRow).Select
End Sub`}</code>
            </pre>
          </CopyableContent>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Working with Charts</h2>
        <p>Charts provide visual representations of data in Excel. With VBA, you can create, modify, 
          and manage charts programmatically.
        </p>
        
        <div className="pl-6 space-y-1">
          <p><code >Charts.Add</code> - Creates a new chart sheet</p>
          <p><code >ActiveSheet.ChartObjects.Add(left, top, width, height)</code> - Embeds a chart on a worksheet</p>
          <p><code >ActiveChart</code> - References the currently selected chart</p>
          <p><code >ChartObjects(1)</code> - References an embedded chart by index</p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Common Chart Properties</h3>
          <CopyableContent
            content={extractTableData("chart-properties")}
          >
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border px-4 py-2 text-left">Property</th>
                    <th className="border px-4 py-2 text-left">Description</th>
                    <th className="border px-4 py-2 text-left">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">ChartType</td>
                    <td className="border px-4 py-2">Gets/sets the chart type</td>
                    <td className="border px-4 py-2 font-mono text-xs">ActiveChart.ChartType = xlColumnClustered</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">HasTitle</td>
                    <td className="border px-4 py-2">Gets/sets whether chart has title</td>
                    <td className="border px-4 py-2 font-mono text-xs">ActiveChart.HasTitle = True</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">ChartTitle</td>
                    <td className="border px-4 py-2">Returns the title object</td>
                    <td className="border px-4 py-2 font-mono text-xs">ActiveChart.ChartTitle.Text = "Sales Performance"</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Legend</td>
                    <td className="border px-4 py-2">Returns the legend object</td>
                    <td className="border px-4 py-2 font-mono text-xs">ActiveChart.Legend.Position = xlBottom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CopyableContent>
        </div>
        
        <div className="mt-4">
          <CopyableContent
            content={`' Creating and Modifying Charts Example
Sub CreateSalesChart()
    ' Declare variables
    Dim ws As Worksheet
    Dim dataRange As Range
    Dim chartObj As ChartObject
    Dim chart As Chart
    
    ' Set references
    Set ws = ActiveSheet
    Set dataRange = ws.Range("B5:E7")  ' Product data range including headers
    
    ' Create an embedded chart
    Set chartObj = ws.ChartObjects.Add(Left:=100, Top:=250, Width:=450, Height:=250)
    Set chart = chartObj.Chart
    
    ' Set the data source
    chart.SetSourceData Source:=dataRange
    
    ' Set the chart type to column chart
    chart.ChartType = xlColumnClustered
    
    ' Add and format chart title
    chart.HasTitle = True
    chart.ChartTitle.Text = "Product Sales Summary"
    chart.ChartTitle.Font.Size = 14
    chart.ChartTitle.Font.Bold = True
    
    ' Format axes
    chart.Axes(xlCategory).HasTitle = True
    chart.Axes(xlCategory).AxisTitle.Text = "Products"
    
    chart.Axes(xlValue).HasTitle = True
    chart.Axes(xlValue).AxisTitle.Text = "Amount (Rand)"
    
    ' Format legend
    chart.HasLegend = True
    chart.Legend.Position = xlBottom
    
    ' Add data labels
    chart.SeriesCollection(1).HasDataLabels = True
    chart.SeriesCollection(1).DataLabels.ShowValue = True
    
    ' Customize series colors - using corporate colors
    chart.SeriesCollection(1).Format.Fill.ForeColor.RGB = RGB(91, 155, 213) ' Blue
    chart.SeriesCollection(2).Format.Fill.ForeColor.RGB = RGB(237, 125, 49) ' Orange
    
    ' Name the chart for future reference
    chartObj.Name = "SalesChart"
    
    ' Display message when done
    MsgBox "Sales chart has been created successfully!", vbInformation
End Sub`}
            className="mt-2"
          >
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
              <code>{`' Creating and Modifying Charts Example
Sub CreateSalesChart()
    ' Declare variables
    Dim ws As Worksheet
    Dim dataRange As Range
    Dim chartObj As ChartObject
    Dim chart As Chart
    
    ' Set references
    Set ws = ActiveSheet
    Set dataRange = ws.Range("B5:E7")  ' Product data range including headers
    
    ' Create an embedded chart
    Set chartObj = ws.ChartObjects.Add(Left:=100, Top:=250, Width:=450, Height:=250)
    Set chart = chartObj.Chart
    
    ' Set the data source
    chart.SetSourceData Source:=dataRange
    
    ' Set the chart type to column chart
    chart.ChartType = xlColumnClustered
    
    ' Add and format chart title
    chart.HasTitle = True
    chart.ChartTitle.Text = "Product Sales Summary"
    chart.ChartTitle.Font.Size = 14
    chart.ChartTitle.Font.Bold = True
    
    ' Format axes
    chart.Axes(xlCategory).HasTitle = True
    chart.Axes(xlCategory).AxisTitle.Text = "Products"
    
    chart.Axes(xlValue).HasTitle = True
    chart.Axes(xlValue).AxisTitle.Text = "Amount (Rand)"
    
    ' Format legend
    chart.HasLegend = True
    chart.Legend.Position = xlBottom
    
    ' Add data labels
    chart.SeriesCollection(1).HasDataLabels = True
    chart.SeriesCollection(1).DataLabels.ShowValue = True
    
    ' Customize series colors - using corporate colors
    chart.SeriesCollection(1).Format.Fill.ForeColor.RGB = RGB(91, 155, 213) ' Blue
    chart.SeriesCollection(2).Format.Fill.ForeColor.RGB = RGB(237, 125, 49) ' Orange
    
    ' Name the chart for future reference
    chartObj.Name = "SalesChart"
    
    ' Display message when done
    MsgBox "Sales chart has been created successfully!", vbInformation
End Sub`}</code>
            </pre>
          </CopyableContent>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Hands-on Project: Multi-Sheet Report Generator</h2>
        <p>Now let's apply what we've learned by creating a comprehensive VBA project that generates 
          a multi-sheet sales report. This project will demonstrate how to manipulate workbooks, 
          worksheets, ranges, and charts in a practical business scenario.
        </p>
        
        <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-4">
          <h3 className="font-medium text-amber-800 mb-2">Project Scenario</h3>
          <p className="text-amber-900">You work for Cape Town Traders, a retail company that needs to generate monthly sales reports.
            Your task is to create a VBA macro that automatically creates a professional multi-sheet 
            report from raw sales data.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-medium">Step 1: Set Up the Project</h3>
          <CopyableContent
            content={`' Multi-Sheet Report Generator - Main Procedure
Sub GenerateSalesReport()
    ' Disable screen updating and alerts for better performance
    Application.ScreenUpdating = False
    Application.DisplayAlerts = False
    
    ' Clear any existing report sheets
    ClearExistingReports
    
    ' Create the summary sheet
    CreateSummarySheet
    
    ' Create the regional breakdown sheet
    CreateRegionalSheet
    
    ' Create the product category sheet
    CreateCategorySheet
    
    ' Create dashboard with charts
    CreateDashboard
    
    ' Format the report professionally
    FormatReportSheets
    
    ' Restore screen updating and alerts
    Application.ScreenUpdating = True
    Application.DisplayAlerts = True
    
    ' Activate the Dashboard sheet
    Sheets("Dashboard").Activate
    
    ' Inform user that report is complete
    MsgBox "Sales report has been generated successfully!", vbInformation, "Cape Town Traders - Report Generator"
End Sub

' Helper procedure to clear existing report sheets
Sub ClearExistingReports()
    Dim ws As Worksheet
    Dim sheetsToDelete As New Collection
    
    ' Identify sheets to delete
    For Each ws In ThisWorkbook.Worksheets
        If ws.Name = "Summary" Or ws.Name = "Regional" Or _
           ws.Name = "Categories" Or ws.Name = "Dashboard" Then
            On Error Resume Next
            sheetsToDelete.Add ws
            On Error GoTo 0
        End If
    Next ws
    
    ' Delete the sheets
    For Each ws In sheetsToDelete
        ws.Delete
    Next ws
End Sub`}
            className="mt-2"
          >
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
              <code>{`' Multi-Sheet Report Generator - Main Procedure
Sub GenerateSalesReport()
    ' Disable screen updating and alerts for better performance
    Application.ScreenUpdating = False
    Application.DisplayAlerts = False
    
    ' Clear any existing report sheets
    ClearExistingReports
    
    ' Create the summary sheet
    CreateSummarySheet
    
    ' Create the regional breakdown sheet
    CreateRegionalSheet
    
    ' Create the product category sheet
    CreateCategorySheet
    
    ' Create dashboard with charts
    CreateDashboard
    
    ' Format the report professionally
    FormatReportSheets
    
    ' Restore screen updating and alerts
    Application.ScreenUpdating = True
    Application.DisplayAlerts = True
    
    ' Activate the Dashboard sheet
    Sheets("Dashboard").Activate
    
    ' Inform user that report is complete
    MsgBox "Sales report has been generated successfully!", vbInformation, "Cape Town Traders - Report Generator"
End Sub

' Helper procedure to clear existing report sheets
Sub ClearExistingReports()
    Dim ws As Worksheet
    Dim sheetsToDelete As New Collection
    
    ' Identify sheets to delete
    For Each ws In ThisWorkbook.Worksheets
        If ws.Name = "Summary" Or ws.Name = "Regional" Or _
           ws.Name = "Categories" Or ws.Name = "Dashboard" Then
            On Error Resume Next
            sheetsToDelete.Add ws
            On Error GoTo 0
        End If
    Next ws
    
    ' Delete the sheets
    For Each ws In sheetsToDelete
        ws.Delete
    Next ws
End Sub`}</code>
            </pre>
          </CopyableContent>
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-medium">Step 2: Create the Summary Sheet</h3>
          <CopyableContent
            content={`' Create the Summary Sheet
Sub CreateSummarySheet()
    ' Add a new worksheet for the summary
    Dim summarySheet As Worksheet
    Set summarySheet = ThisWorkbook.Worksheets.Add
    summarySheet.Name = "Summary"
    
    ' Add report title and information
    With summarySheet.Range("A1")
        .Value = "CAPE TOWN TRADERS"
        .Font.Size = 16
        .Font.Bold = True
    End With
    
    summarySheet.Range("A2").Value = "Monthly Sales Summary - " & Format(Date, "MMMM yyyy")
    summarySheet.Range("A4").Value = "Report Generated: " & Format(Now, "dd/mm/yyyy hh:mm")
    summarySheet.Range("A5").Value = "Prepared by: " & Application.UserName
    
    ' Create summary table headers
    Dim headers As Variant
    headers = Array("Metric", "Value", "% Change (Previous Month)")
    summarySheet.Range("A7:C7").Value = headers
    
    ' Format the headers
    With summarySheet.Range("A7:C7")
        .Font.Bold = True
        .Interior.Color = RGB(217, 217, 217)
        .Borders.LineStyle = xlContinuous
    End With
    
    ' Add summary data
    summarySheet.Range("A8").Value = "Total Sales"
    summarySheet.Range("B8").Value = "R" & Format(WorksheetFunction.Sum(Sheets("Data").Range("F:F")), "#,##0.00")
    
    summarySheet.Range("A9").Value = "Average Order Value"
    summarySheet.Range("B9").Formula = "=AVERAGEIF(Data!F:F," >0")"
    summarySheet.Range("B9").NumberFormat = "R#,##0.00"
    
    summarySheet.Range("A10").Value = "Total Orders"
    summarySheet.Range("B10").Formula = "=COUNTA(Data!A:A)-1"
    
    summarySheet.Range("A11").Value = "Top Selling Province"
    summarySheet.Range("B11").Formula = "=INDEX(Data!C:C,MATCH(MAX(Data!F:F),Data!F:F,0))"
    
    ' Apply conditional formatting to the % Change column (you'd normally calculate real values)
    summarySheet.Range("C8").Value = "5.2%"
    summarySheet.Range("C9").Value = "-1.8%"
    summarySheet.Range("C10").Value = "7.3%"
    summarySheet.Range("C11").Value = "N/A"
    
    ' Apply conditional formatting for positive/negative values
    With summarySheet.Range("C8:C10")
        .FormatConditions.Add Type:=xlCellValue, Operator:=xlGreater, Formula1:="0"
        .FormatConditions(1).Font.Color = RGB(0, 97, 0)  ' Dark green for positive
        
        .FormatConditions.Add Type:=xlCellValue, Operator:=xlLess, Formula1:="0"
        .FormatConditions(2).Font.Color = RGB(192, 0, 0)  ' Dark red for negative
    End With
    
    ' Autofit columns for better appearance
    summarySheet.Columns("A:C").AutoFit
End Sub`}
            className="mt-2"
          >
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
              <code>{`' Create the Summary Sheet
Sub CreateSummarySheet()
    ' Add a new worksheet for the summary
    Dim summarySheet As Worksheet
    Set summarySheet = ThisWorkbook.Worksheets.Add
    summarySheet.Name = "Summary"
    
    ' Add report title and information
    With summarySheet.Range("A1")
        .Value = "CAPE TOWN TRADERS"
        .Font.Size = 16
        .Font.Bold = True
    End With
    
    summarySheet.Range("A2").Value = "Monthly Sales Summary - " & Format(Date, "MMMM yyyy")
    summarySheet.Range("A4").Value = "Report Generated: " & Format(Now, "dd/mm/yyyy hh:mm")
    summarySheet.Range("A5").Value = "Prepared by: " & Application.UserName
    
    ' Create summary table headers
    Dim headers As Variant
    headers = Array("Metric", "Value", "% Change (Previous Month)")
    summarySheet.Range("A7:C7").Value = headers
    
    ' Format the headers
    With summarySheet.Range("A7:C7")
        .Font.Bold = True
        .Interior.Color = RGB(217, 217, 217)
        .Borders.LineStyle = xlContinuous
    End With
    
    ' Add summary data
    summarySheet.Range("A8").Value = "Total Sales"
    summarySheet.Range("B8").Value = "R" & Format(WorksheetFunction.Sum(Sheets("Data").Range("F:F")), "#,##0.00")
    
    summarySheet.Range("A9").Value = "Average Order Value"
    summarySheet.Range("B9").Formula = "=AVERAGEIF(Data!F:F," >0")"
    summarySheet.Range("B9").NumberFormat = "R#,##0.00"
    
    summarySheet.Range("A10").Value = "Total Orders"
    summarySheet.Range("B10").Formula = "=COUNTA(Data!A:A)-1"
    
    summarySheet.Range("A11").Value = "Top Selling Province"
    summarySheet.Range("B11").Formula = "=INDEX(Data!C:C,MATCH(MAX(Data!F:F),Data!F:F,0))"
    
    ' Apply conditional formatting to the % Change column (you'd normally calculate real values)
    summarySheet.Range("C8").Value = "5.2%"
    summarySheet.Range("C9").Value = "-1.8%"
    summarySheet.Range("C10").Value = "7.3%"
    summarySheet.Range("C11").Value = "N/A"
    
    ' Apply conditional formatting for positive/negative values
    With summarySheet.Range("C8:C10")
        .FormatConditions.Add Type:=xlCellValue, Operator:=xlGreater, Formula1:="0"
        .FormatConditions(1).Font.Color = RGB(0, 97, 0)  ' Dark green for positive
        
        .FormatConditions.Add Type:=xlCellValue, Operator:=xlLess, Formula1:="0"
        .FormatConditions(2).Font.Color = RGB(192, 0, 0)  ' Dark red for negative
    End With
    
    ' Autofit columns for better appearance
    summarySheet.Columns("A:C").AutoFit
End Sub`}</code>
            </pre>
          </CopyableContent>
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-medium">Step 3: Create the Dashboard with Charts</h3>
          <CopyableContent
            content={`' Create Dashboard with Charts
Sub CreateDashboard()
    ' Add a new worksheet for the dashboard
    Dim dashSheet As Worksheet
    Set dashSheet = ThisWorkbook.Worksheets.Add(After:=ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count))
    dashSheet.Name = "Dashboard"
    
    ' Add dashboard title
    With dashSheet.Range("A1:H1")
        .Merge
        .Value = "CAPE TOWN TRADERS - SALES DASHBOARD"
        .Font.Size = 16
        .Font.Bold = True
        .HorizontalAlignment = xlCenter
    End With
    
    ' Add subtitle with date
    With dashSheet.Range("A2:H2")
        .Merge
        .Value = Format(Date, "MMMM yyyy")
        .Font.Size = 12
        .Font.Italic = True
        .HorizontalAlignment = xlCenter
    End With
    
    ' Create a sales by region chart
    CreateRegionalSalesChart dashSheet
    
    ' Create a sales by category chart
    CreateCategorySalesChart dashSheet
    
    ' Create a monthly trend chart
    CreateMonthlySalesTrendChart dashSheet
    
    ' Add a section for KPIs
    CreateKPISection dashSheet
    
    ' Adjust column widths for better appearance
    dashSheet.Columns("A:H").ColumnWidth = 12
End Sub

' Helper function to create regional sales chart
Sub CreateRegionalSalesChart(dashSheet As Worksheet)
    ' Create sample data on the dashboard for the chart
    dashSheet.Range("B5").Value = "Sales by Province"
    dashSheet.Range("B5").Font.Bold = True
    
    dashSheet.Range("B6:C11").Value = Array( _
        Array("Province", "Sales (Rand)"), _
        Array("Western Cape", 1245000), _
        Array("Gauteng", 1850000), _
        Array("KwaZulu-Natal", 920000), _
        Array("Eastern Cape", 540000), _
        Array("Free State", 375000) _
    )
    
    ' Create a chart
    Dim chartObj As ChartObject
    Set chartObj = dashSheet.ChartObjects.Add(Left:=100, Top:=125, Width:=300, Height:=200)
    
    ' Configure the chart
    With chartObj.Chart
        .SetSourceData Source:=dashSheet.Range("B6:C11")
        .ChartType = xlColumnClustered
        
        ' Format the chart
        .HasTitle = True
        .ChartTitle.Text = "Provincial Sales Distribution"
        .Axes(xlValue).HasTitle = True
        .Axes(xlValue).AxisTitle.Text = "Amount (Rand)"
        .HasLegend = False
        
        ' Format the data labels
        .SeriesCollection(1).HasDataLabels = True
        .SeriesCollection(1).DataLabels.NumberFormat = "#,##0"
    End With
End Sub`}
            className="mt-2"
          >
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
              <code>{`' Create Dashboard with Charts
Sub CreateDashboard()
    ' Add a new worksheet for the dashboard
    Dim dashSheet As Worksheet
    Set dashSheet = ThisWorkbook.Worksheets.Add(After:=ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count))
    dashSheet.Name = "Dashboard"
    
    ' Add dashboard title
    With dashSheet.Range("A1:H1")
        .Merge
        .Value = "CAPE TOWN TRADERS - SALES DASHBOARD"
        .Font.Size = 16
        .Font.Bold = True
        .HorizontalAlignment = xlCenter
    End With
    
    ' Add subtitle with date
    With dashSheet.Range("A2:H2")
        .Merge
        .Value = Format(Date, "MMMM yyyy")
        .Font.Size = 12
        .Font.Italic = True
        .HorizontalAlignment = xlCenter
    End With
    
    ' Create a sales by region chart
    CreateRegionalSalesChart dashSheet
    
    ' Create a sales by category chart
    CreateCategorySalesChart dashSheet
    
    ' Create a monthly trend chart
    CreateMonthlySalesTrendChart dashSheet
    
    ' Add a section for KPIs
    CreateKPISection dashSheet
    
    ' Adjust column widths for better appearance
    dashSheet.Columns("A:H").ColumnWidth = 12
End Sub

' Helper function to create regional sales chart
Sub CreateRegionalSalesChart(dashSheet As Worksheet)
    ' Create sample data on the dashboard for the chart
    dashSheet.Range("B5").Value = "Sales by Province"
    dashSheet.Range("B5").Font.Bold = True
    
    dashSheet.Range("B6:C11").Value = Array( _
        Array("Province", "Sales (Rand)"), _
        Array("Western Cape", 1245000), _
        Array("Gauteng", 1850000), _
        Array("KwaZulu-Natal", 920000), _
        Array("Eastern Cape", 540000), _
        Array("Free State", 375000) _
    )
    
    ' Create a chart
    Dim chartObj As ChartObject
    Set chartObj = dashSheet.ChartObjects.Add(Left:=100, Top:=125, Width:=300, Height:=200)
    
    ' Configure the chart
    With chartObj.Chart
        .SetSourceData Source:=dashSheet.Range("B6:C11")
        .ChartType = xlColumnClustered
        
        ' Format the chart
        .HasTitle = True
        .ChartTitle.Text = "Provincial Sales Distribution"
        .Axes(xlValue).HasTitle = True
        .Axes(xlValue).AxisTitle.Text = "Amount (Rand)"
        .HasLegend = False
        
        ' Format the data labels
        .SeriesCollection(1).HasDataLabels = True
        .SeriesCollection(1).DataLabels.NumberFormat = "#,##0"
    End With
End Sub`}</code>
            </pre>
          </CopyableContent>
        </div>

        <div className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold">Sample Data Tables</h2>
          <p className="text-muted-foreground">Below are sample data tables you can use for the multi-sheet report generator project. 
            Click the copy icon to easily paste the data into Excel.
          </p>
          
          <div className="space-y-6">
            {/* Sales Transactions Table */}
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 flex justify-between items-center">
                <h3 className="font-medium">Sales Transactions Data</h3>
                <CopyableContent 
                  alwaysShowButton={true}
                  content={`OrderID\tDate\tCustomer\tProvince\tCategory\tAmount\tPayment
1001\t15/07/2025\tStellenbosch Wines\tWestern Cape\tBeverages\t42500\tCredit
1002\t16/07/2025\tDurban Grocers\tKwaZulu-Natal\tFood\t28750\tCash
1003\t17/07/2025\tPretoria Tech\tGauteng\tElectronics\t135000\tCredit
1004\t18/07/2025\tEast London Retail\tEastern Cape\tClothing\t18400\tCredit
1005\t19/07/2025\tBloemfontein Stores\tFree State\tFood\t22300\tCash
1006\t20/07/2025\tCape Town Mall\tWestern Cape\tElectronics\t98500\tCredit
1007\t21/07/2025\tJohannesburg Outlet\tGauteng\tClothing\t37600\tCredit
1008\t22/07/2025\tDurban Wholesalers\tKwaZulu-Natal\tBeverages\t63200\tCredit
1009\t23/07/2025\tSomerset West Shop\tWestern Cape\tFood\t15400\tCash
1010\t24/07/2025\tPretoria Office\tGauteng\tOffice\t42300\tCredit`}
                  buttonClassName="bg-white"
                >
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white text-sm">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="border px-3 py-2 text-left">OrderID</th>
                            <th className="border px-3 py-2 text-left">Date</th>
                            <th className="border px-3 py-2 text-left">Customer</th>
                            <th className="border px-3 py-2 text-left">Province</th>
                            <th className="border px-3 py-2 text-left">Category</th>
                            <th className="border px-3 py-2 text-right">Amount</th>
                            <th className="border px-3 py-2 text-left">Payment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-3 py-2">1001</td>
                            <td className="border px-3 py-2">15/07/2025</td>
                            <td className="border px-3 py-2">Stellenbosch Wines</td>
                            <td className="border px-3 py-2">Western Cape</td>
                            <td className="border px-3 py-2">Beverages</td>
                            <td className="border px-3 py-2 text-right">42,500</td>
                            <td className="border px-3 py-2">Credit</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-3 py-2">1002</td>
                            <td className="border px-3 py-2">16/07/2025</td>
                            <td className="border px-3 py-2">Durban Grocers</td>
                            <td className="border px-3 py-2">KwaZulu-Natal</td>
                            <td className="border px-3 py-2">Food</td>
                            <td className="border px-3 py-2 text-right">28,750</td>
                            <td className="border px-3 py-2">Cash</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2">1003</td>
                            <td className="border px-3 py-2">17/07/2025</td>
                            <td className="border px-3 py-2">Pretoria Tech</td>
                            <td className="border px-3 py-2">Gauteng</td>
                            <td className="border px-3 py-2">Electronics</td>
                            <td className="border px-3 py-2 text-right">135,000</td>
                            <td className="border px-3 py-2">Credit</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-3 py-2">1004</td>
                            <td className="border px-3 py-2">18/07/2025</td>
                            <td className="border px-3 py-2">East London Retail</td>
                            <td className="border px-3 py-2">Eastern Cape</td>
                            <td className="border px-3 py-2">Clothing</td>
                            <td className="border px-3 py-2 text-right">18,400</td>
                            <td className="border px-3 py-2">Credit</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2">1005</td>
                            <td className="border px-3 py-2">19/07/2025</td>
                            <td className="border px-3 py-2">Bloemfontein Stores</td>
                            <td className="border px-3 py-2">Free State</td>
                            <td className="border px-3 py-2">Food</td>
                            <td className="border px-3 py-2 text-right">22,300</td>
                            <td className="border px-3 py-2">Cash</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2 text-center italic">Copy includes all 10 rows of data. Table display shows first 5 rows.                  
                    </div>
                  </div>
                </CopyableContent>
              </div>
            </div>

            {/* Monthly Sales Table */}
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 flex justify-between items-center">
                <h3 className="font-medium">Monthly Sales Data</h3>
                <CopyableContent 
                  alwaysShowButton={true}
                  content={`Month\tWestern Cape\tGauteng\tKwaZulu-Natal\tEastern Cape\tFree State
January\t420500\t680200\t320400\t190500\t145000
February\t450200\t700500\t340800\t210300\t152000
March\t468300\t720100\t350600\t205400\t158000
April\t490100\t750300\t360200\t215800\t160000
May\t510500\t780600\t380400\t220300\t165000
June\t530200\t810400\t390800\t225000\t170000`}
                  buttonClassName="bg-white"
                >
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white text-sm">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="border px-3 py-2 text-left">Month</th>
                            <th className="border px-3 py-2 text-right">Western Cape</th>
                            <th className="border px-3 py-2 text-right">Gauteng</th>
                            <th className="border px-3 py-2 text-right">KwaZulu-Natal</th>
                            <th className="border px-3 py-2 text-right">Eastern Cape</th>
                            <th className="border px-3 py-2 text-right">Free State</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-3 py-2">January</td>
                            <td className="border px-3 py-2 text-right">420,500</td>
                            <td className="border px-3 py-2 text-right">680,200</td>
                            <td className="border px-3 py-2 text-right">320,400</td>
                            <td className="border px-3 py-2 text-right">190,500</td>
                            <td className="border px-3 py-2 text-right">145,000</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-3 py-2">February</td>
                            <td className="border px-3 py-2 text-right">450,200</td>
                            <td className="border px-3 py-2 text-right">700,500</td>
                            <td className="border px-3 py-2 text-right">340,800</td>
                            <td className="border px-3 py-2 text-right">210,300</td>
                            <td className="border px-3 py-2 text-right">152,000</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2">March</td>
                            <td className="border px-3 py-2 text-right">468,300</td>
                            <td className="border px-3 py-2 text-right">720,100</td>
                            <td className="border px-3 py-2 text-right">350,600</td>
                            <td className="border px-3 py-2 text-right">205,400</td>
                            <td className="border px-3 py-2 text-right">158,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2 text-center italic">Copy includes 6 months of data. Table display shows first 3 months.
                    </div>
                  </div>
                </CopyableContent>
              </div>
            </div>

            {/* Product Categories Table */}
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 flex justify-between items-center">
                <h3 className="font-medium">Product Categories Data</h3>
                <CopyableContent 
                  alwaysShowButton={true}
                  content={`Category	Q1 Sales	Q2 Sales	Growth %	Margin %	Manager
Beverages	845000	905000	7.10%	32.50%	Sibongile Nkosi
Food	1250000	1325000	6.00%	28.40%	Johan van der Merwe
Electronics	2350000	2580000	9.79%	22.30%	Priya Naidoo
Clothing	980000	1050000	7.14%	35.20%	Mark Anderson
Office	420000	455000	8.33%	30.10%	Thabo Molefe`}
                  buttonClassName="bg-white"
                >
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white text-sm">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="border px-3 py-2 text-left">Category</th>
                            <th className="border px-3 py-2 text-right">Q1 Sales</th>
                            <th className="border px-3 py-2 text-right">Q2 Sales</th>
                            <th className="border px-3 py-2 text-right">Growth %</th>
                            <th className="border px-3 py-2 text-right">Margin %</th>
                            <th className="border px-3 py-2 text-left">Manager</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-3 py-2">Beverages</td>
                            <td className="border px-3 py-2 text-right">845,000</td>
                            <td className="border px-3 py-2 text-right">905,000</td>
                            <td className="border px-3 py-2 text-right">7.10%</td>
                            <td className="border px-3 py-2 text-right">32.50%</td>
                            <td className="border px-3 py-2">Sibongile Nkosi</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-3 py-2">Food</td>
                            <td className="border px-3 py-2 text-right">1,250,000</td>
                            <td className="border px-3 py-2 text-right">1,325,000</td>
                            <td className="border px-3 py-2 text-right">6.00%</td>
                            <td className="border px-3 py-2 text-right">28.40%</td>
                            <td className="border px-3 py-2">Johan van der Merwe</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2">Electronics</td>
                            <td className="border px-3 py-2 text-right">2,350,000</td>
                            <td className="border px-3 py-2 text-right">2,580,000</td>
                            <td className="border px-3 py-2 text-right">9.79%</td>
                            <td className="border px-3 py-2 text-right">22.30%</td>
                            <td className="border px-3 py-2">Priya Naidoo</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-3 py-2">Clothing</td>
                            <td className="border px-3 py-2 text-right">980,000</td>
                            <td className="border px-3 py-2 text-right">1,050,000</td>
                            <td className="border px-3 py-2 text-right">7.14%</td>
                            <td className="border px-3 py-2 text-right">35.20%</td>
                            <td className="border px-3 py-2">Mark Anderson</td>
                          </tr>
                          <tr>
                            <td className="border px-3 py-2">Office</td>
                            <td className="border px-3 py-2 text-right">420,000</td>
                            <td className="border px-3 py-2 text-right">455,000</td>
                            <td className="border px-3 py-2 text-right">8.33%</td>
                            <td className="border px-3 py-2 text-right">30.10%</td>
                            <td className="border px-3 py-2">Thabo Molefe</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CopyableContent>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border border-blue-200 bg-blue-50 rounded-md p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">How to Complete the Exercise</h2>
          
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-blue-800 mb-2">Step 1: Set Up Your Excel Workbook</h3>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Open Excel and create a new workbook</li>
                <li>Create a worksheet named <code className="bg-white px-1 py-0.5 rounded">Raw_Data</code> (right-click on Sheet1 tab → Rename)</li>
                <li>Copy the <strong>Sales Transactions Data</strong>
                  from above and paste it into cell A1 of the Raw_Data sheet</li>
                <li>Create another worksheet named <code className="bg-white px-1 py-0.5 rounded">Monthly_Data</code></li>
                <li>Copy the <strong>Monthly Sales Data</strong>
                  and paste it into cell A1 of the Monthly_Data sheet</li>
                <li>Create a third worksheet named <code className="bg-white px-1 py-0.5 rounded">Categories</code></li>
                <li>Copy the <strong>Product Categories Data</strong>
                  and paste it into cell A1 of the Categories sheet</li>
                <li>Save your workbook as <code className="bg-white px-1 py-0.5 rounded">Sales_Report_Generator.xlsm</code> (make sure to select Excel Macro-Enabled Workbook)</li>
              </ol>
            </div>

            <div>
              <h3 className="font-medium text-blue-800 mb-2">Step 2: Add the VBA Code</h3>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Press <code className="bg-white px-1 py-0.5 rounded">Alt+F11</code>
                  to open the VBA Editor</li>
                <li>Right-click on your workbook name in the Project Explorer → Insert → Module</li>
                <li>Copy the entire VBA code from the <strong>Main Procedure</strong>
                  and <strong>Clear Existing Sheets</strong>
                  sections above</li>
                <li>Paste the code into the module window</li>
                <li>Copy and paste the code for <strong>Create Summary Sheet</strong>
                  and <strong>Create Dashboard</strong>
                  sections</li>
                <li>Continue copying and pasting all the helper functions</li>
                <li>Save your workbook again to preserve the VBA code</li>
              </ol>
            </div>

            <div>
              <h3 className="font-medium text-blue-800 mb-2">Step 3: Run the Report Generator</h3>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Return to Excel by pressing <code className="bg-white px-1 py-0.5 rounded">Alt+Q</code></li>
                <li>Enable macros if prompted (click "Enable Content" if you see a security warning)</li>
                <li>Press <code className="bg-white px-1 py-0.5 rounded">Alt+F8</code>
                  to open the Macros dialog</li>
                <li>Select <code className="bg-white px-1 py-0.5 rounded">GenerateSalesReport</code>
                  from the list and click Run</li>
                <li>The VBA code will now create the Summary and Dashboard sheets with charts</li>
              </ol>
            </div>

            <div>
              <h3 className="font-medium text-blue-800 mb-2">Step 4: Verify Your Results</h3>
              <ol className="list-decimal ml-6 space-y-2">
                <li>After running the macro, check that two new sheets have been created:</li>
                <ul className="list-disc ml-6 space-y-1">
                  <li><code className="bg-white px-1 py-0.5 rounded">Summary</code> - containing the summary tables</li>
                  <li><code className="bg-white px-1 py-0.5 rounded">Dashboard</code> - containing charts and KPIs</li>
                </ul>
                <li>The Summary sheet should contain formatted tables with totals and averages</li>
                <li>The Dashboard sheet should contain a regional sales chart, product mix chart, and KPI sections</li>
                <li>Check that the data in these sheets match the source data</li>
              </ol>
            </div>

            <div>
              <h3 className="font-medium text-blue-800 mb-2">Troubleshooting Common Issues</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>"Compile error":</strong>
                  Ensure you've copied all the code sections completely. Check for any lines that got cut off during copying.</li>
                <li><strong>"Subscript out of range":</strong>
                  Make sure your worksheet names match exactly: "Raw_Data", "Monthly_Data", "Categories", etc.</li>
                <li><strong>"Object required":</strong>
                  Check that all variables are properly declared and instantiated.</li>
                <li><strong>"Method or data member not found":</strong>
                  This often happens with chart methods. Verify that chart object creation code is correct.</li>
                <li><strong>Charts don't look right:</strong>
                  Adjust the chart dimensions and positions in the code if needed.</li>
              </ul>
            </div>

            <div className="bg-blue-100 p-4 rounded-md">
              <h3 className="font-medium text-blue-800 mb-2">Pro Tips</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Use F8 key in the VBA Editor to step through the code line by line for debugging</li>
                <li>Add <code className="bg-white px-1 py-0.5 rounded">Debug.Print</code>
                  statements to track variable values</li>
                <li>Try running each sub procedure individually to isolate issues</li>
                <li>The code is modular, so you can enhance each section independently</li>
                <li>Make sure to save regularly as you modify the code</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-md p-4">
          <h3 className="font-medium text-green-800 mb-2">Project Extensions</h3>
          <p className="text-green-900 mb-2">Once you've completed the basic multi-sheet report generator, consider adding these enhancements:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-green-900">
            <li>Add error handling to make the code more robust</li>
            <li>Create a user form to let users select date ranges for the report</li>
            <li>Add email functionality to automatically send the report to stakeholders</li>
            <li>Implement a progress bar during report generation</li>
            <li>Add export options to PDF or PowerPoint for presentations</li>
          </ul>
        </div>
      </section>

      {/* Next Steps Button */}
      <div className="flex justify-end mt-8">
        <Button variant="default" className="gap-2" onClick={onContinue}>
          <span>Continue to Next Lesson</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VBAExcelObjectsLesson;
