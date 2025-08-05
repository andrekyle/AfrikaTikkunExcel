import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import CopyableContent from "./CopyableContent";

interface VBAVariablesDataTypesLessonProps {
  onContinue?: () => void;
}

const VBAVariablesDataTypesLesson: React.FC<VBAVariablesDataTypesLessonProps> = ({ onContinue }) => {
  return (
    <div className="space-y-8">
      {/* Introduction Section */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Lesson 2: Variables and Data Types</h3>
        <p className="text-muted-foreground mb-4">Understanding variables and data types is fundamental to effective VBA programming. This lesson will cover how to declare and use variables, 
          work with arrays, and manipulate objects in VBA to build dynamic and flexible Excel applications.
        </p>
      </div>
      
      {/* Main Content Section */}
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium mb-4">VBA Variable Fundamentals</h4>
          
          <div className="space-y-5">
            <div>
              <h5 className="font-medium mb-2">1. Variable Declaration</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">Variables in VBA should be declared before use with the <code >Dim</code>
                  statement:
                </p>
                <CopyableContent
                  alwaysShowButton={true}
                  content={`' Variable declaration
Dim customerName As String
Dim totalSales As Double
Dim isActive As Boolean

' Assignment
customerName = "Acme Corporation"
totalSales = 15420.75
isActive = True`}
                >
                  <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                    <code>
{`' Variable declaration
Dim customerName As String
Dim totalSales As Double
Dim isActive As Boolean

' Assignment
customerName = "Acme Corporation"
totalSales = 15420.75
isActive = True`}
                    </code>
                  </pre>
                </CopyableContent>
                <p className="mt-2 text-sm text-muted-foreground">Use <code >Option Explicit</code>
                  at the top of your modules to require all variables to be declared.
                </p>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">2. VBA Data Types</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="border px-3 py-2 text-left">Data Type</th>
                        <th className="border px-3 py-2 text-left">Size</th>
                        <th className="border px-3 py-2 text-left">Range</th>
                        <th className="border px-3 py-2 text-left">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-3 py-2 font-medium">Boolean</td>
                        <td className="border px-3 py-2">2 bytes</td>
                        <td className="border px-3 py-2">True or False</td>
                        <td className="border px-3 py-2"><code >Dim isActive As Boolean</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">Byte</td>
                        <td className="border px-3 py-2">1 byte</td>
                        <td className="border px-3 py-2">0 to 255</td>
                        <td className="border px-3 py-2"><code >Dim colorValue As Byte</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">Integer</td>
                        <td className="border px-3 py-2">2 bytes</td>
                        <td className="border px-3 py-2">-32,768 to 32,767</td>
                        <td className="border px-3 py-2"><code >Dim counter As Integer</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">Long</td>
                        <td className="border px-3 py-2">4 bytes</td>
                        <td className="border px-3 py-2">-2,147,483,648 to 2,147,483,647</td>
                        <td className="border px-3 py-2"><code >Dim population As Long</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">Single</td>
                        <td className="border px-3 py-2">4 bytes</td>
                        <td className="border px-3 py-2">±3.4E-38 to ±3.4E+38</td>
                        <td className="border px-3 py-2"><code >Dim price As Single</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">Double</td>
                        <td className="border px-3 py-2">8 bytes</td>
                        <td className="border px-3 py-2">±1.8E-308 to ±1.8E+308</td>
                        <td className="border px-3 py-2"><code >Dim totalSales As Double</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">Currency</td>
                        <td className="border px-3 py-2">8 bytes</td>
                        <td className="border px-3 py-2">±922,337,203,685,477.5808</td>
                        <td className="border px-3 py-2"><code >Dim revenue As Currency</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">String</td>
                        <td className="border px-3 py-2">Varies</td>
                        <td className="border px-3 py-2">0 to 2 billion characters</td>
                        <td className="border px-3 py-2"><code >Dim name As String</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">Date</td>
                        <td className="border px-3 py-2">8 bytes</td>
                        <td className="border px-3 py-2">January 1, 100 to December 31, 9999</td>
                        <td className="border px-3 py-2"><code >Dim startDate As Date</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">Object</td>
                        <td className="border px-3 py-2">4 bytes</td>
                        <td className="border px-3 py-2">Any object reference</td>
                        <td className="border px-3 py-2"><code >Dim wb As Object</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">Variant</td>
                        <td className="border px-3 py-2">Varies</td>
                        <td className="border px-3 py-2">Any data type</td>
                        <td className="border px-3 py-2"><code >Dim anyValue As Variant</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">3. Variable Scope</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                  <li><strong >Procedure-level (Local)</strong>: Declared with <code >Dim</code>
                  inside a Sub or Function</li>
                  <li><strong >Module-level</strong>: Declared with <code >Dim</code>
                  at the top of a module, outside any procedures</li>
                  <li><strong >Public</strong>: Declared with <code >Public</code>
                  at the top of a module, accessible everywhere</li>
                  <li><strong >Private</strong>: Declared with <code >Private</code>
                  at the top of a module, accessible only within that module</li>
                </ul>
                <CopyableContent
                  alwaysShowButton={true}
                  content={`' In a standard module:
Option Explicit

' Module level variables
Private moduleCounter As Long
Public sharedValue As String

Sub ProcessData()
    ' Local variables
    Dim localValue As Double
    
    localValue = 100 ' Only accessible in this procedure
    moduleCounter = moduleCounter + 1 ' Accessible in all procedures in this module
    sharedValue = "Updated" ' Accessible from any procedure in any module
End Sub`}
                >
                  <pre className="mt-2 bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                    <code>
{`' In a standard module:
Option Explicit

' Module level variables
Private moduleCounter As Long
Public sharedValue As String

Sub ProcessData()
    ' Local variables
    Dim localValue As Double
    
    localValue = 100 ' Only accessible in this procedure
    moduleCounter = moduleCounter + 1 ' Accessible in all procedures in this module
    sharedValue = "Updated" ' Accessible from any procedure in any module
End Sub`}
                    </code>
                  </pre>
                </CopyableContent>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-4">Working with Arrays</h4>
          
          <div className="space-y-5">
            <div>
              <h5 className="font-medium mb-2">1. Fixed-Size Arrays</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">Fixed arrays have a predetermined size that doesn't change during execution:
                </p>
                <CopyableContent
                  alwaysShowButton={true}
                  content={`' Fixed-size array (0 to 9 = 10 elements)
Dim temperatures(0 To 9) As Double

' Populate array
temperatures(0) = 72.5
temperatures(1) = 73.6
' ...and so on

' Multi-dimensional array (5 rows x 3 columns)
Dim salesData(1 To 5, 1 To 3) As Double

' Accessing elements
salesData(1, 1) = 1000 ' Row 1, Column 1
salesData(2, 3) = 1500 ' Row 2, Column 3`}
                >
                  <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                    <code>
{`' Fixed-size array (0 to 9 = 10 elements)
Dim temperatures(0 To 9) As Double

' Populate array
temperatures(0) = 72.5
temperatures(1) = 73.6
' ...and so on

' Multi-dimensional array (5 rows x 3 columns)
Dim salesData(1 To 5, 1 To 3) As Double

' Accessing elements
salesData(1, 1) = 1000 ' Row 1, Column 1
salesData(2, 3) = 1500 ' Row 2, Column 3`}
                    </code>
                  </pre>
                </CopyableContent>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">2. Dynamic Arrays</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">Dynamic arrays can be resized during execution using <code >ReDim</code>:
                </p>
                <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                  <code>
{`' Declare a dynamic array
Dim customerList() As String

' Size the array at runtime
ReDim customerList(1 To 100)

' Add data
customerList(1) = "Acme Corp"
customerList(2) = "Globex"

' Resize array preserving data
ReDim Preserve customerList(1 To 200)

' Get array bounds
Dim lowerBound As Long
Dim upperBound As Long
lowerBound = LBound(customerList)
upperBound = UBound(customerList)`}
                  </code>
                </pre>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">3. Array Functions</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                  <li><code >LBound(array)</code>: Returns the lowest subscript (index) for the array</li>
                  <li><code >UBound(array)</code>: Returns the highest subscript (index) for the array</li>
                  <li><code >Erase array</code>: Clears all values in the array (resets to default values)</li>
                  <li><code >IsArray(variable)</code>: Returns True if the variable is an array</li>
                  <li><code >Array(element1, element2, ...)</code>: Creates a new array with the specified elements</li>
                </ul>
                <pre className="mt-2 bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                  <code>
{`' Quick array creation
Dim fruits As Variant
fruits = Array("Apple", "Banana", "Cherry", "Date")

' Loop through array
Dim i As Long
For i = LBound(fruits) To UBound(fruits)
    Debug.Print fruits(i)
Next i

' Check array size
Dim arraySize As Long
arraySize = UBound(fruits) - LBound(fruits) + 1 ' Size = 4`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-4">Object Manipulation</h4>
          
          <div className="space-y-5">
            <div>
              <h5 className="font-medium mb-2">1. Working with Excel Objects</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">VBA can manipulate Excel objects like workbooks, worksheets, ranges, and cells:
                </p>
                <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                  <code>
{`' Reference Excel objects
Dim wb As Workbook
Dim ws As Worksheet
Dim rng As Range
Dim cell As Range

' Set references to existing objects
Set wb = ThisWorkbook
Set ws = wb.Worksheets("Sheet1")
Set rng = ws.Range("A1:C10")

' Creating new objects
Set wb = Workbooks.Add
Set ws = wb.Worksheets.Add

' Object properties and methods
ws.Name = "Sales Data"
rng.Font.Bold = True
rng.Interior.Color = RGB(255, 255, 0) ' Yellow

' Loop through cells in a range
For Each cell In rng
    If cell.Value > 100 Then
        cell.Font.Color = RGB(255, 0, 0) ' Red
    End If
Next cell`}
                  </code>
                </pre>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">2. Object Variables and Early Binding</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">Declare specific object types for early binding (better performance and IntelliSense):
                </p>
                <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                  <code>
{`' Early binding (specific object type)
Dim xl As Excel.Application
Dim wb As Excel.Workbook
Dim ws As Excel.Worksheet

Set xl = Application
Set wb = xl.ActiveWorkbook
Set ws = wb.ActiveSheet

' Late binding (generic Object type - more flexible but slower)
Dim xl As Object
Dim wb As Object
Dim ws As Object

Set xl = Application
Set wb = xl.ActiveWorkbook
Set ws = wb.ActiveSheet`}
                  </code>
                </pre>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">3. Creating Custom Objects with Class Modules</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">Class modules let you create custom objects with properties and methods:
                </p>
                <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                  <code>
{`' In a class module named "Customer"
' Properties
Private m_ID As Long
Private m_Name As String
Private m_Balance As Double

' Property methods
Public Property Get ID() As Long
    ID = m_ID
End Property

Public Property Let ID(value As Long)
    m_ID = value
End Property

Public Property Get Name() As String
    Name = m_Name
End Property

Public Property Let Name(value As String)
    m_Name = value
End Property

Public Property Get Balance() As Double
    Balance = m_Balance
End Property

Public Property Let Balance(value As Double)
    m_Balance = value
End Property

' Methods
Public Function ApplyDiscount(discountRate As Double) As Double
    Balance = Balance * (1 - discountRate)
    ApplyDiscount = Balance
End Function

' In a standard module:
Sub UseCustomerClass()
    Dim cust As New Customer
    
    ' Set properties
    cust.ID = 1001
    cust.Name = "Contoso Ltd"
    cust.Balance = 5000
    
    ' Use methods
    cust.ApplyDiscount 0.1 ' 10% discount
    
    Debug.Print cust.Name & " balance: $" & cust.Balance
End Sub`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-4">Best Practices and Tips</h4>
          
          <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
            <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
              <li><strong >Always use Option Explicit</strong>: Forces explicit variable declaration, preventing typos and logic errors</li>
              <li><strong >Use meaningful variable names</strong>: <code >customerTotalSales</code>
                  is better than <code >cts</code>
                  or <code >var1</code></li>
              <li><strong >Initialize variables</strong>: Set initial values to avoid unexpected behavior</li>
              <li><strong >Use the appropriate data type</strong>: Don't default to Variant, use the most specific type needed</li>
              <li><strong >Release object references</strong>: Set object variables to Nothing when done using them</li>
              <li><strong >Limit variable scope</strong>: Declare variables in the narrowest scope necessary</li>
              <li><strong >Use constants for fixed values</strong>: <code >Const TAX_RATE As Double = 0.07</code></li>
              <li><strong >Document complex variables</strong>: Add comments explaining purpose and constraints</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Completed Section */}
      <div className="border-t pt-6">
        <h4 className="text-lg font-medium mb-3 flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          <span >Completed</span>
        </h4>
        <p className="text-muted-foreground mb-4">After completing this lesson, you'll have successfully:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li >Understood how to declare and use variables with appropriate data types</li>
          <li >Mastered the different variable scopes and their implications</li>
          <li >Learned to work with fixed-size and dynamic arrays</li>
          <li >Gained experience manipulating Excel objects with VBA</li>
          <li >Explored the creation of custom objects using Class Modules</li>
          <li >Applied best practices for efficient variable management</li>
        </ul>
      </div>
      
      {/* Hands-on Project Section */}
      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold mb-4">Hands-on Project: Create a Dynamic Data Processor</h3>
        <p className="mb-6">Apply what you've learned about variables, data types, arrays, and object manipulation by creating a VBA application that processes data dynamically.
        </p>
        
        <div className="space-y-6">
          <div className="bg-muted/20 p-4 rounded-md border">
            <h4 className="font-medium mb-3">Project Description:</h4>
            <p className="text-sm text-muted-foreground mb-4">Create a VBA macro that processes sales data, storing it in appropriate data structures, performing calculations, and producing formatted output.
            </p>
            
            <h4 className="font-medium mb-3">Project Requirements:</h4>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Data Input:</span> 
                <p className="mt-1 text-sm">Create a VBA procedure that collects sales data from a worksheet range (product name, quantity, unit price).</p>
              </li>
              <li>
                <span className="font-medium text-foreground">Data Storage:</span> 
                <p className="mt-1 text-sm">Store the collected data in appropriate arrays or a custom class.</p>
              </li>
              <li>
                <span className="font-medium text-foreground">Data Processing:</span> 
                <p className="mt-1 text-sm">Calculate total sales, average sale price, highest and lowest sales.</p>
              </li>
              <li>
                <span className="font-medium text-foreground">Data Output:</span> 
                <p className="mt-1 text-sm">Create a summary report on a new worksheet with formatted results.</p>
              </li>
              <li>
                <span className="font-medium text-foreground">Dynamic Flexibility:</span> 
                <p className="mt-1 text-sm">The solution should handle varying amounts of data using dynamic arrays or collections.</p>
              </li>
            </ol>
          </div>
          
          <div className="bg-gray-50 dark:bg-slate-900 border rounded-lg p-4">
            <h4 className="font-medium mb-2">Starter Code:</h4>
            <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto font-mono text-sm">
              <code>
{`Option Explicit

' Define a custom Product class
' Create a new Class Module named "Product" and add this code:

Private m_Name As String
Private m_Quantity As Long
Private m_UnitPrice As Currency
Private m_TotalSale As Currency

Public Property Get Name() As String
    Name = m_Name
End Property

Public Property Let Name(value As String)
    m_Name = value
End Property

Public Property Get Quantity() As Long
    Quantity = m_Quantity
End Property

Public Property Let Quantity(value As Long)
    m_Quantity = value
    ' Recalculate total sale when quantity changes
    m_TotalSale = m_Quantity * m_UnitPrice
End Property

Public Property Get UnitPrice() As Currency
    UnitPrice = m_UnitPrice
End Property

Public Property Let UnitPrice(value As Currency)
    m_UnitPrice = value
    ' Auto-calculate total sale when unit price is set
    m_TotalSale = m_Quantity * m_UnitPrice
End Property

Public Property Get TotalSale() As Currency
    TotalSale = m_TotalSale
End Property

' In a standard module, add this code:
Sub ProcessSalesData()
    ' TODO: Implement the data processor
    
    ' 1. Define variables and arrays
    
    ' 2. Collect data from the worksheet
    
    ' 3. Process the data
    
    ' 4. Create summary report
    
    ' 5. Format the output
End Sub`}
              </code>
            </pre>
            
            <h4 className="font-medium mt-4 mb-2">Bonus Challenge:</h4>
            <p className="text-sm mb-3">Enhance your data processor with the following features:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
              <li >Add data validation to ensure all inputs are valid</li>
              <li >Implement filters to analyze sales by category or date range</li>
              <li >Create interactive elements (e.g., message boxes) to guide the user</li>
              <li >Add visualization like conditional formatting based on sales performance</li>
            </ul>
          </div>
        </div>

        {/* Step by Step Instructions */}
        <div className="mt-8 border border-blue-200 bg-blue-50 rounded-md p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Step-by-Step Instructions: Sales Data Processor</h2>
          
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-blue-800 mb-2">Step 1: Set Up Your Excel Workbook</h3>
              <ol className="list-decimal ml-6 space-y-2">
                <li >Open Excel and create a new workbook</li>
                <li >Create a worksheet named <code className="bg-white px-1 py-0.5 rounded">Sales_Data</code>
                  for the input data</li>
                <li >Enter the following column headers in row 1: Product, Quantity, UnitPrice</li>
                <li >Add some sample data in rows 2-10 (e.g., "Laptop", 5, 1200)</li>
                <li >Save your workbook as <code className="bg-white px-1 py-0.5 rounded">SalesDataProcessor.xlsm</code> (make sure to select Excel Macro-Enabled Workbook)</li>
              </ol>
            </div>

            <div>
              <h3 className="font-medium text-blue-800 mb-2">Step 2: Create the VBA Class Module</h3>
              <ol className="list-decimal ml-6 space-y-2">
                <li >Press <code className="bg-white px-1 py-0.5 rounded">Alt+F11</code>
                  to open the VBA Editor</li>
                <li >Right-click on your project in the Project Explorer → Insert → Class Module</li>
                <li >Name the class module "Product" by changing its name in the Properties window (F4)</li>
                <li >Copy and paste the Product class code from the starter code section</li>
                <li >Remove the comment markers (') from all lines to activate the code</li>
              </ol>
            </div>

            <div>
              <h3 className="font-medium text-blue-800 mb-2">Step 3: Create the Standard Module</h3>
              <ol className="list-decimal ml-6 space-y-2">
                <li >Right-click on your project in the Project Explorer → Insert → Module</li>
                <li >Type <code className="bg-white px-1 py-0.5 rounded">Option Explicit</code>
                  at the top of the module</li>
                <li >Copy and paste the <code className="bg-white px-1 py-0.5 rounded">ProcessSalesData</code>
                  Sub procedure from the starter code</li>
              </ol>
            </div>

            <div>
              <h3 className="font-medium text-blue-800 mb-2">Step 4: Complete the ProcessSalesData Procedure</h3>
        
                <li >Define variables and arrays to store the sales data:</li>
                <pre className="bg-white p-3 rounded-md overflow-x-auto text-sm whitespace-pre-wrap">
                  <code>
' 1. Define variables and arrays
Dim ws As Worksheet
Dim summaryWs As Worksheet
Dim lastRow As Long
Dim i As Long
Dim products As Collection
Dim prod As Product
Dim totalRevenue As Currency
Dim avgPrice As Currency
Dim highestSale As Currency
Dim lowestSale As Currency
Dim highestProduct As String
Dim lowestProduct As String
                  </code>
                </pre>
                
                <li >Add code to collect data from the worksheet:</li>
                <pre className="bg-white p-3 rounded-md overflow-x-auto text-sm whitespace-pre-wrap">
                  <code>
' 2. Collect data from the worksheet
Set ws = ThisWorkbook.Worksheets("Sales_Data")
lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row

' Initialize collection
Set products = New Collection

' Loop through data rows
For i = 2 To lastRow
    ' Create new product object for each row
    Set prod = New Product
    prod.Name = ws.Cells(i, 1).Value
    prod.Quantity = ws.Cells(i, 2).Value
    prod.UnitPrice = ws.Cells(i, 3).Value
    
    ' Add to collection
    products.Add prod
Next i
                  </code>
                </pre>
                
                <li >Process the data to calculate statistics:</li>
                <pre className="bg-white p-3 rounded-md overflow-x-auto text-sm whitespace-pre-wrap">
                  <code>
' 3. Process the data
totalRevenue = 0
highestSale = 0
lowestSale = -1 ' Initialize to an impossible value
 
' Loop through products to calculate statistics
For i = 1 To products.Count
    Set prod = products(i)
    
    ' Add to total revenue
    totalRevenue = totalRevenue + prod.TotalSale
    
    ' Check for highest sale
    If prod.TotalSale {'>'} highestSale Then
        highestSale = prod.TotalSale
        highestProduct = prod.Name
    End If
    
    ' Check for lowest sale (after first product)
    If lowestSale = -1 Or prod.TotalSale {'<'} lowestSale Then
        lowestSale = prod.TotalSale
        lowestProduct = prod.Name
    End If
Next i

' Calculate average price
avgPrice = totalRevenue / products.Count
                  </code>
                </pre>
                
                <li >Create a summary report with the processed data:</li>
                <pre className="bg-white p-3 rounded-md overflow-x-auto text-sm whitespace-pre-wrap">
                  <code>
' 4. Create summary report
' Check if Summary sheet exists, if yes delete it
On Error Resume Next
Application.DisplayAlerts = False
ThisWorkbook.Worksheets("Summary").Delete
Application.DisplayAlerts = True
On Error GoTo 0

' Create new Summary sheet
Set summaryWs = ThisWorkbook.Worksheets.Add
summaryWs.Name = "Summary"

' Add headers and data
With summaryWs
    ' Title
    .Cells(1, 1).Value = "Sales Data Summary"
    .Cells(1, 1).Font.Bold = True
    .Cells(1, 1).Font.Size = 14
    
    ' Summary statistics
    .Cells(3, 1).Value = "Total Revenue:"
    .Cells(3, 2).Value = totalRevenue
    .Cells(4, 1).Value = "Average Sale Price:"
    .Cells(4, 2).Value = avgPrice
    .Cells(5, 1).Value = "Highest Sale:"
    .Cells(5, 2).Value = highestSale
    .Cells(5, 3).Value = "(" & highestProduct & ")"
    .Cells(6, 1).Value = "Lowest Sale:"
    .Cells(6, 2).Value = lowestSale
    .Cells(6, 3).Value = "(" & lowestProduct & ")"
    
    ' Product details table headers
    .Cells(8, 1).Value = "Product"
    .Cells(8, 2).Value = "Quantity"
    .Cells(8, 3).Value = "Unit Price"
    .Cells(8, 4).Value = "Total Sale"
    
    ' Product details data
    For i = 1 To products.Count
        Set prod = products(i)
        .Cells(8 + i, 1).Value = prod.Name
        .Cells(8 + i, 2).Value = prod.Quantity
        .Cells(8 + i, 3).Value = prod.UnitPrice
        .Cells(8 + i, 4).Value = prod.TotalSale
    Next i
End With
                  </code>
                </pre>
                
                <li >Format the output for better readability:</li>
                <CopyableContent
                  alwaysShowButton={true}
                  content={`' 5. Format the output
With summaryWs
    ' Format currency cells
    .Cells(3, 2).NumberFormat = "$#,##0.00"
    .Cells(4, 2).NumberFormat = "$#,##0.00"
    .Cells(5, 2).NumberFormat = "$#,##0.00"
    .Cells(6, 2).NumberFormat = "$#,##0.00"
    
    ' Format headers
    .Range(.Cells(8, 1), .Cells(8, 4)).Font.Bold = True
    .Range(.Cells(8, 1), .Cells(8, 4)).Interior.Color = RGB(200, 200, 200)
    
    ' Format table data
    .Range(.Cells(9, 3), .Cells(8 + products.Count, 3)).NumberFormat = "$#,##0.00"
    .Range(.Cells(9, 4), .Cells(8 + products.Count, 4)).NumberFormat = "$#,##0.00"`
                  }
                />
            
                 <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
  <pre className="text-sm font-mono">
    <code className="language-vba">
      {'// 5. Format the output\n'}
      {'With summaryWs\n'}
      {'    // Format currency cells\n'}
      {"    .Cells(3, 2).NumberFormat = \"$#,##0.00\"\n"}
      {"    .Cells(4, 2).NumberFormat = \"$#,##0.00\"\n"}
      {"    .Cells(5, 2).NumberFormat = \"$#,##0.00\"\n"}
      {"    .Cells(6, 2).NumberFormat = \"$#,##0.00\"\n\n"}
      {'    // Format headers\n'}
      {'    .Range(.Cells(8, 1), .Cells(8, 4)).Font.Bold = True\n'}
      {'    .Range(.Cells(8, 1), .Cells(8, 4)).Interior.Color = RGB(200, 200, 200)\n\n'}
      {'    // Format table data\n'}
      {'    .Range(.Cells(9, 3), .Cells(8 + products.Count, 3)).NumberFormat = \"$#,##0.00\"\n'}
      {'    .Range(.Cells(9, 4), .Cells(8 + products.Count, 4)).NumberFormat = \"$#,##0.00\"\n\n'}
      {'    // Enable text wrapping for better readability\n'}
      {'    .Range(.Cells(8, 1), .Cells(8 + products.Count, 4)).WrapText = True\n'}
      {'    .Range(.Cells(8, 1), .Cells(8 + products.Count, 1)).ColumnWidth = 20\n\n'}
      {'    // Auto-fit columns\n'}
      {'    .Columns(\"B:D\").AutoFit\n\n'}
      {'    // Add borders\n'}
      {'    .Range(.Cells(8, 1), .Cells(8 + products.Count, 4)).Borders.Weight = xlThin\n'}
      {'End With\n\n'}
      {'MsgBox \"Sales data processed successfully!\", vbInformation'}
    </code>
  </pre>
</div>
            </div>

            <div>
              <h3 className="font-medium text-blue-800 mb-2">Step 5: Run the Procedure</h3>
              <ol className="list-decimal ml-6 space-y-2">
                <li >Return to Excel by pressing <code className="bg-white px-1 py-0.5 rounded">Alt+Q</code></li>
                <li >Press <code className="bg-white px-1 py-0.5 rounded">Alt+F8</code>
                  to open the Macros dialog</li>
                <li >Select <code className="bg-white px-1 py-0.5 rounded">ProcessSalesData</code>
                  and click Run</li>
                <li >Check the newly created Summary sheet to see your processed data</li>
              </ol>
            </div>

            <div>
              <h3 className="font-medium text-blue-800 mb-2">Troubleshooting Common Issues</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>"Object required" error:</strong>
                  Make sure you've created the Product class correctly and removed all comment markers</li>
                <li><strong>"Subscript out of range" error:</strong>
                  Check that your worksheet names match exactly ("Sales_Data")</li>
                <li><strong>"Type mismatch" error:</strong>
                  Verify that your sample data matches the expected data types (text for product names, numbers for quantity and price)</li>
                <li><strong>"Method or data member not found":</strong>
                  Ensure all properties in the Product class are correctly implemented</li>
              </ul>
            </div>

            <div className="bg-blue-100 p-4 rounded-md">
              <h3 className="font-medium text-blue-800 mb-2">Bonus Challenge Implementation Tips</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong >Data validation:</strong>
                  Add input validation using <code className="bg-white px-1 py-0.5 rounded">IsNumeric</code>
                  and <code className="bg-white px-1 py-0.5 rounded">Len</code>
                  functions to check for empty or invalid entries</li>
                <li><strong >Category filters:</strong>
                  Add a category column to your data and modify the code to group by category</li>
                <li><strong >Interactive elements:</strong>
                  Use <code className="bg-white px-1 py-0.5 rounded">InputBox</code>
                  to let users specify criteria like minimum sale amount</li>
                <li><strong >Visualization:</strong>
                  Add <code className="bg-white px-1 py-0.5 rounded">Conditional Formatting</code>
                  to highlight high and low performing products</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Next Steps Button */}
      <div className="flex justify-end">
        <Button variant="excel" className="gap-2" onClick={onContinue}>
          <span >Continue to Next Lesson</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VBAVariablesDataTypesLesson;
