import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import CopyableContent from "./CopyableContent";

interface VBAControlStructuresLessonProps {
  onContinue?: () => void;
}

const VBAControlStructuresLesson: React.FC<VBAControlStructuresLessonProps> = ({ onContinue }) => {
  // Function to handle copying content to clipboard
  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    // Could add toast notification here if desired
  };
  
  // Function to extract table data into CSV or TSV format for copying
  const extractTableData = (tableId: string): string => {
    // In a real implementation, this would use DOM methods to extract the table
    // For now, we'll just return placeholder data based on the table ID
    const tables = {
      "employee-data": `EmployeeID,Name,Department,Hire Date,Salary,Performance
E001,Thabo Nkosi,Sales,15/01/2020,R650000,Good
E002,Zanele Johnson,Marketing,22/03/2019,R725000,Excellent
E003,Michael Mokoena,IT,07/11/2021,R780000,Good
E004,Lindiwe Dlamini,Sales,30/06/2022,R630000,Needs Improvement
E005,David Khumalo,Finance,15/09/2018,R850000,Excellent`,
      "product-inventory": `ProductID,Product Name,Category,Price,Stock Level,Reorder Point,Discontinued
P101,Wireless Mouse,Electronics,R249.99,45,15,False
P102,USB-C Cable,Electronics,R125.00,78,25,False
P103,Notebook Set,Office Supplies,R187.50,12,20,False
P104,Desk Lamp,Furniture,R359.90,5,10,False
P105,Memory Stick,Electronics,R59.99,3,0,False`,
      "customer-orders": `OrderID,CustomerName,OrderDate,OrderAmount,CustomerType,PaymentStatus,ShippingStatus
O2023-001,Vodacom Solutions (Pty) Ltd,15/02/2023,R24500.00,Corporate,Paid,Delivered
O2023-002,Thabo Mbeki,17/02/2023,R1755.50,Retail,Paid,Shipped
O2023-003,Shoprite Holdings Ltd,20/02/2023,R128000.00,Corporate,Pending,Processing
O2023-004,Lerato Molefe,22/02/2023,R899.99,Retail,Paid,Delivered
O2023-005,University of Cape Town,28/02/2023,R56752.50,Education,Unpaid,On Hold`,
      "validation-data": `Name,Phone,Date,Email,ProductCode
Sipho Nkosi,071 123 4567,15/01/2023,sipho.nkosi@gmail.co.za,ZA-12345
N@tasha Dlamini,0821234567,2023/01/20,natasha.dlamini@vodacom,WC-98765
Tshepo2,(011) 987-6543,25-01-2023,tshepo@webmail.co.za,GP12345
Nomvula Khumalo,073.789.0123,30/01/2023,nomvula.khumalo@uct.ac.za,KZN-56789
,084-321-9876,05/02/2023,missing@telkomsa,EC-00000`,
    };
    
    return tables[tableId as keyof typeof tables] || "No data available for this table";
  };
  
  return (
    <div className="space-y-8">
      {/* Introduction Section */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Lesson 3: Control Structures & Logic</h3>
        <p className="text-muted-foreground mb-4">Control structures are the backbone of programming logic, allowing your VBA code to make decisions, 
          repeat tasks, and respond dynamically to different conditions. This lesson covers essential control 
          flow techniques including conditionals, loops, and logical operators that will enable you to build 
          intelligent and responsive Excel automations.
        </p>
      </div>
      
      {/* Main Content Section */}
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium mb-4">1. Conditional Statements</h4>
          
          <div className="space-y-5">
            <div>
              <h5 className="font-medium mb-2">1. If...Then Statements</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">The If...Then statement allows your code to make decisions based on conditions:
                </p>
                <CopyableContent
                  alwaysShowButton={true}
                  content={`' Simple If...Then (single line)
If salesTotal >1000 Then bonus = 100

' If...Then with multiple statements
If salesTotal > 5000 Then
    bonus = salesTotal * 0.05
    eligibleForPromotion = True
    Call SendCongratulationsEmail(employeeID)
End If

' If...Then...Else
If stockLevel < reorderPoint Then
    Call PlaceOrder(productID)
Else
    statusMessage = "Stock level acceptable"
End If

' If...Then...ElseIf (multiple conditions)
If grade >= 90 Then
    letterGrade = "A"
ElseIf grade >= 80 Then
    letterGrade = "B"
ElseIf grade >= 70 Then
    letterGrade = "C"
ElseIf grade >= 60 Then
    letterGrade = "D"
Else
    letterGrade = "F"
End If`}
                >
                  <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                    <code>
{`' Simple If...Then (single line)
If salesTotal > 1000 Then bonus = 100

' If...Then with multiple statements
If salesTotal > 5000 Then
    bonus = salesTotal * 0.05
    eligibleForPromotion = True
    Call SendCongratulationsEmail(employeeID)
End If

' If...Then...Else
If stockLevel < reorderPoint Then
    Call PlaceOrder(productID)
Else
    statusMessage = "Stock level acceptable"
End If

' If...Then...ElseIf (multiple conditions)
If grade >= 90 Then
    letterGrade = "A"
ElseIf grade >= 80 Then
    letterGrade = "B"
ElseIf grade >= 70 Then
    letterGrade = "C"
ElseIf grade >= 60 Then
    letterGrade = "D"
Else
    letterGrade = "F"
End If`}
                    </code>
                  </pre>
                </CopyableContent>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">2. Nested If Statements</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">You can place If statements inside other If statements to create complex decision trees:
                </p>
                <CopyableContent
                  alwaysShowButton={true}
                  content={`If customerType = "Corporate" Then
    discountRate = 0.15
    If orderTotal >100000 Then
        discountRate = 0.20
        If isLoyaltyMember Then
            discountRate = 0.25
        End If
    End If
Else
    discountRate = 0.05
    If isLoyaltyMember Then
        discountRate = 0.10
    End If
End If`}
                >
                  <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                    <code>
{`If customerType = "Corporate" Then
    discountRate = 0.15
    If orderTotal > 10000 Then
        discountRate = 0.20
        If isLoyaltyMember Then
            discountRate = 0.25
        End If
    End If
Else
    discountRate = 0.05
    If isLoyaltyMember Then
        discountRate = 0.10
    End If
End If`}
                    </code>
                  </pre>
                </CopyableContent>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong>Tip:</strong>
                  While nested If statements are powerful, deeply nested conditions can become difficult to read and maintain. 
                  Consider using Select Case or multiple independent If statements when appropriate.
                </p>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">3. Select Case Statement</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">The Select Case statement provides a cleaner alternative to multiple ElseIf statements when checking a single variable against multiple values:
                </p>
                <CopyableContent
                  alwaysShowButton={true}
                  content={`' Simple Select Case
Select Case productCategory
    Case "Electronics"
        tax = 0.15
    Case "Clothing"
        tax = 0.15
    Case "Basic Foods"
        tax = 0
    Case Else
        tax = 0.15
End Select

' Select Case with ranges and multiple values
Select Case score
    Case Is >= 90
        grade = "A"
    Case 80 To 89
        grade = "B"
    Case 70 To 79
        grade = "C"
    Case 60 To 69
        grade = "D"
    Case Else
        grade = "F"
End Select

' Select Case with multiple values per case
Select Case dayOfWeek
    Case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
        isWeekday = True
    Case "Saturday", "Sunday"
        isWeekday = False
End Select`}
                >
                  <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                    <code>
{`' Simple Select Case
Select Case productCategory
    Case "Electronics"
        tax = 0.08
    Case "Clothing"
        tax = 0.05
    Case "Food"
        tax = 0
    Case Else
        tax = 0.06
End Select

' Select Case with ranges and multiple values
Select Case score
    Case Is >= 90
        grade = "A"
    Case 80 To 89
        grade = "B"
    Case 70 To 79
        grade = "C"
    Case 60 To 69
        grade = "D"
    Case Else
        grade = "F"
End Select

' Select Case with multiple values per case
Select Case dayOfWeek
    Case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
        isWeekday = True
    Case "Saturday", "Sunday"
        isWeekday = False
End Select`}
                  </code>
                </pre>
                </CopyableContent>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">4. Logical Operators</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">Logical operators allow you to combine multiple conditions:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="border px-3 py-2 text-left">Operator</th>
                        <th className="border px-3 py-2 text-left">Description</th>
                        <th className="border px-3 py-2 text-left">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-3 py-2 font-medium">And</td>
                        <td className="border px-3 py-2">Both conditions must be True</td>
                        <td className="border px-3 py-2"><code >If age {'&gt;'} 18 And hasID Then</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">Or</td>
                        <td className="border px-3 py-2">At least one condition must be True</td>
                        <td className="border px-3 py-2"><code >If isManager Or isAdmin Then</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">Not</td>
                        <td className="border px-3 py-2">Reverses the logical state</td>
                        <td className="border px-3 py-2"><code >If Not isDeleted Then</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">Xor</td>
                        <td className="border px-3 py-2">True if one condition is True and the other is False</td>
                        <td className="border px-3 py-2"><code >If hasDiscount Xor isMember Then</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <CopyableContent
                  alwaysShowButton={true}
                  content={`' Using multiple logical operators
If (age >= 18 And hasID) Or isVIP Then
    allowEntry = True
End If

' Complex condition
If (totalPurchase > 10000 And customerStatus = "Premium") Or _
   (totalPurchase > 50000 And Not hasPreviousReturns) Then
    applyDiscount = True
End If`}
                >
                  <pre className="mt-3 bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                    <code>
{`' Using multiple logical operators
If (age >= 18 And hasID) Or isVIP Then
    allowEntry = True
End If

' Complex condition
If (totalPurchase > 1000 And customerStatus = "Premium") Or _
   (totalPurchase > 5000 And Not hasPreviousReturns) Then
    applyDiscount = True
End If`}
                    </code>
                  </pre>
                </CopyableContent>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">5. Comparison Operators</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="border px-3 py-2 text-left">Operator</th>
                        <th className="border px-3 py-2 text-left">Description</th>
                        <th className="border px-3 py-2 text-left">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-3 py-2 font-medium">=</td>
                        <td className="border px-3 py-2">Equal to</td>
                        <td className="border px-3 py-2"><code >If status = "Active" Then</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">{'<>'}</td>
                        <td className="border px-3 py-2">Not equal to</td>
                        <td className="border px-3 py-2"><code >If status {'<'}{'>'} "Deleted" Then</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">{'>'}</td>
                        <td className="border px-3 py-2">Greater than</td>
                        <td className="border px-3 py-2"><code >If quantity {'>'} 10 Then</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">{'<'}</td>
                        <td className="border px-3 py-2">Less than</td>
                        <td className="border px-3 py-2"><code >If quantity {'<'} 5 Then</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">{'>='}</td>
                        <td className="border px-3 py-2">Greater than or equal to</td>
                        <td className="border px-3 py-2"><code >If age {'>='} 18 Then</code></td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium">{'<='}</td>
                        <td className="border px-3 py-2">Less than or equal to</td>
                        <td className="border px-3 py-2"><code >If temperature {'<='} 32 Then</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  <strong>Tip:</strong>
                  When comparing strings, VBA is not case-sensitive by default. Use the <code >StrComp()</code>
                  function with the <code >vbBinaryCompare</code>
                  option for case-sensitive comparisons.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-4">2. Loop Structures</h4>
          
          <div className="space-y-5">
            <div>
              <h5 className="font-medium mb-2">1. For...Next Loops</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">For...Next loops are used when you know exactly how many times you want to execute a block of code:
                </p>
                <CopyableContent
                  alwaysShowButton={true}
                  content={`' Basic For...Next loop
Dim i As Integer
For i = 1 To 10
    Debug.Print i
Next i

' For...Next with Step value
Dim j As Integer
For j = 10 To 1 Step -1  ' Counts down from 10 to 1
    Debug.Print j
Next j

' Nested For...Next loops
Dim row As Integer, col As Integer
For row = 1 To 5
    For col = 1 To 3
        Cells(row, col).Value = row * col
    Next col
Next row

' Early exit with Exit For
Dim k As Integer
For k = 1 To 100
    If k >50 Then
        Exit For  ' Exit loop when k exceeds 50
    End If
    Debug.Print k
Next k`}
                >
                  <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                    <code>
{`' Basic For...Next loop
Dim i As Integer
For i = 1 To 10
    Debug.Print i
Next i

' For...Next with Step value
Dim j As Integer
For j = 10 To 1 Step -1  ' Counts down from 10 to 1
    Debug.Print j
Next j

' Nested For...Next loops
Dim row As Integer, col As Integer
For row = 1 To 5
    For col = 1 To 3
        Cells(row, col).Value = row * col
    Next col
Next row

' Early exit with Exit For
Dim k As Integer
For k = 1 To 100
    If k > 50 Then
        Exit For  ' Exit loop when k exceeds 50
    End If
    Debug.Print k
Next k`}
                    </code>
                  </pre>
                </CopyableContent>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">2. For Each...Next Loops</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">For Each...Next loops are ideal for iterating through collections of objects:
                </p>
                  content={`' Loop through all worksheets in a workbook
Dim ws As Worksheet
For Each ws In ThisWorkbook.Worksheets
    Debug.Print ws.Name
Next ws

' Loop through a range of cells
Dim cell As Range
Dim total As Double

For Each cell In Range("A1:A10")
    total = total + cell.Value
Next cell
MsgBox "Total: " & total

' Loop through all selected cells
Dim selectedCell As Range
For Each selectedCell In Selection
    selectedCell.Font.Bold = True
Next selectedCell

' Loop through a collection of form controls
Dim ctrl As Control
For Each ctrl In UserForm1.Controls
    If TypeOf ctrl Is TextBox Then
        ctrl.Text = ""
    End If
Next ctrl`}
                
                  <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                    <code>
                      ' Loop through all worksheets in a workbook<br/>
                      Dim ws As Worksheet<br/>
                      For Each ws In ThisWorkbook.Worksheets<br/>
                          Debug.Print ws.Name<br/>
                      Next ws<br/>
                      <br/>
                      ' Loop through a range of cells<br/>
                      Dim cell As Range<br/>
                      Dim total As Double<br/>
                      <br/>
                      For Each cell In Range("A1:A10")<br/>
                          total = total + cell.Value<br/>
                      Next cell<br/>
                      MsgBox "Total: " & total<br/>
                      <br/>
                      ' Loop through all selected cells<br/>
                      Dim selectedCell As Range<br/>
                      For Each selectedCell In Selection<br/>
                          selectedCell.Font.Bold = True<br/>
                      Next selectedCell<br/>
                      <br/>
                      ' Loop through a collection of form controls<br/>
                      Dim ctrl As Control<br/>
                      For Each ctrl In UserForm1.Controls<br/>
                          If TypeOf ctrl Is TextBox Then<br/>
                              ctrl.Text = ""<br/>
                          End If<br/>
                      Next ctrl
                    </code>
                </pre>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong>Note:</strong>
                  For Each loops are particularly useful when working with Excel objects like ranges, worksheets, and UI elements, providing cleaner code than traditional For...Next loops.
                </p>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">3. Do...Loop Structures</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">Do loops are used when you don't know in advance how many iterations are needed:
                </p>
                <CopyableContent
                  alwaysShowButton={true}
                  content={`' Do...While loop (evaluates condition at the start)
Dim counter As Integer
counter = 0

Do While counter < 5
    counter = counter + 1
    Debug.Print counter
Loop

' Do...Until loop (evaluates condition at the start)
Dim inputValue As String

Do Until IsNumeric(inputValue)
    inputValue = InputBox("Enter a number:")
Loop

' Do...Loop While (evaluates condition at the end)
Dim result As Double
result = 1

Do
    result = result * 2
    Debug.Print result
Loop While result < 1000

' Do...Loop Until (evaluates condition at the end)
Dim randomValue As Integer

Do
    randomValue = Int((6 * Rnd) + 1)  ' Random number between 1 and 6
    Debug.Print "Dice roll: " & randomValue
Loop Until randomValue = 6  ' Continue until we roll a 6`}
                >
                  <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                    <code>
{`' Do...While loop (evaluates condition at the start)
Dim counter As Integer
counter = 0

Do While counter < 5
    counter = counter + 1
    Debug.Print counter
Loop

' Do...Until loop (evaluates condition at the start)
Dim inputValue As String

Do Until IsNumeric(inputValue)
    inputValue = InputBox("Enter a number:")
Loop

' Do...Loop While (evaluates condition at the end)
Dim result As Double
result = 1

Do
    result = result * 2
    Debug.Print result
Loop While result < 1000

' Do...Loop Until (evaluates condition at the end)
Dim randomValue As Integer

Do
    randomValue = Int((6 * Rnd) + 1)  ' Random number between 1 and 6
    Debug.Print "Dice roll: " & randomValue
Loop Until randomValue = 6  ' Continue until we roll a 6`}
                    </code>
                  </pre>
                </CopyableContent>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong>Tip:</strong>
                  Use <code >Exit Do</code>
                  to break out of a Do loop early, similar to <code >Exit For</code>
                  in For loops.
                </p>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">4. While...Wend Loop (Legacy)</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">The While...Wend loop is an older structure that is still supported but less commonly used:
                </p>
                <CopyableContent
                  alwaysShowButton={true}
                  content={`Dim count As Integer
count = 1

While count <= 5
    Debug.Print count
    count = count + 1
Wend`}
                >
                  <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                    <code>
{`Dim count As Integer
count = 1

While count <= 5
    Debug.Print count
    count = count + 1
Wend`}
                    </code>
                  </pre>
                </CopyableContent>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong>Note:</strong>
                  While...Wend loops don't support <code >Exit</code>
                  statements. The Do...Loop structures are more flexible and generally preferred in modern VBA code.
                </p>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">5. Loop Best Practices</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Always include an exit condition to prevent infinite loops</li>
                  <li>Use <code >Application.ScreenUpdating = False</code>
                  before loops that modify Excel objects to improve performance</li>
                  <li>Consider using <code >Application.EnableEvents = False</code>
                  during loops to prevent triggering cascading events</li>
                  <li>For large data operations, consider using arrays instead of directly accessing cells in a loop</li>
                  <li>When looping through ranges, use <code >For Each</code>
                  rather than accessing cells by row and column for better readability</li>
                  <li>Add periodic status updates for long-running loops (e.g., every 100 iterations)</li>
                </ul>
                <CopyableContent
                  alwaysShowButton={true}
                  content={`' Example of optimized looping with Excel
Sub ProcessLargeRange()
    ' Performance optimization
    Application.ScreenUpdating = False
    Application.EnableEvents = False
    Application.Calculation = xlCalculationManual
    
    ' Store data in array (much faster than cell-by-cell operations)
    Dim dataRange As Range
    Set dataRange = Range("A1:D1000")
    
    Dim dataArray As Variant
    dataArray = dataRange.Value
    
    ' Process the array
    Dim i As Long, j As Long
    Dim rowCount As Long, colCount As Long
    rowCount = UBound(dataArray, 1)
    colCount = UBound(dataArray, 2)
    
    ' Status variables
    Dim startTime As Double
    startTime = Timer
    Dim processedCount As Long
    processedCount = 0
    
    ' Process data in memory
    For i = 1 To rowCount
        For j = 1 To colCount
            ' Manipulate the array data
            If IsNumeric(dataArray(i, j)) Then
                dataArray(i, j) = dataArray(i, j) * 1.1  ' Apply 10% increase
            End If
            
            ' Update progress periodically
            processedCount = processedCount + 1
            If processedCount Mod 1000 = 0 Then
                Application.StatusBar = "Processing... " & 
                    Format(processedCount / (rowCount * colCount), "0%") & 
                    " complete. Elapsed time: " & Format(Timer - startTime, "0.0") & "s"
                DoEvents  ' Allow UI to update
            End If
        Next j
    Next i
    
    ' Write the results back
    dataRange.Value = dataArray
    
    ' Restore Excel settings
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = True
    Application.ScreenUpdating = True
    Application.StatusBar = False
    
    MsgBox "Processing complete in " & Format(Timer - startTime, "0.0") & " seconds."
End Sub`}
                >
                  <pre className="mt-3 bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                    <code>
{`' Example of optimized looping with Excel
Sub ProcessLargeRange()
    ' Performance optimization
    Application.ScreenUpdating = False
    Application.EnableEvents = False
    Application.Calculation = xlCalculationManual
    
    ' Store data in array (much faster than cell-by-cell operations)
    Dim dataRange As Range
    Set dataRange = Range("A1:D1000")
    
    Dim dataArray As Variant
    dataArray = dataRange.Value
    
    ' Process the array
    Dim i As Long, j As Long
    Dim rowCount As Long, colCount As Long
    rowCount = UBound(dataArray, 1)
    colCount = UBound(dataArray, 2)
    
    ' Status variables
    Dim startTime As Double
    startTime = Timer
    Dim processedCount As Long
    processedCount = 0
    
    ' Process data in memory
    For i = 1 To rowCount
        For j = 1 To colCount
            ' Manipulate the array data
            If IsNumeric(dataArray(i, j)) Then
                dataArray(i, j) = dataArray(i, j) * 1.1  ' Apply 10% increase
            End If
            
            ' Update progress periodically
            processedCount = processedCount + 1
            If processedCount Mod 1000 = 0 Then
                Application.StatusBar = "Processing... " & 
                    Format(processedCount / (rowCount * colCount), "0%") & 
                    " complete. Elapsed time: " & Format(Timer - startTime, "0.0") & "s"
                DoEvents  ' Allow UI to update
            End If
        Next j
    Next i
    
    ' Write the results back
    dataRange.Value = dataArray
    
    ' Restore Excel settings
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = True
    Application.ScreenUpdating = True
    Application.StatusBar = False
    
    MsgBox "Processing complete in " & Format(Timer - startTime, "0.0") & " seconds."
End Sub`}
                    </code>
                  </pre>
                </CopyableContent>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-4">3. Error Handling</h4>
          
          <div className="space-y-5">
            <div>
              <h5 className="font-medium mb-2">1. Error Handling Basics</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <p className="mb-2 text-sm text-muted-foreground">VBA provides structured error handling to manage runtime errors gracefully:
                </p>
                <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                  <code>
{`Sub BasicErrorHandling()
    On Error GoTo ErrorHandler
    
    ' Your code here
    Dim x As Integer
    x = 1 / 0  ' This will cause a division by zero error
    
    ' This code won't execute if an error occurs above
    MsgBox "Operation completed successfully!"
    Exit Sub
    
ErrorHandler:
    MsgBox "Error occurred: " & Err.Description
    ' Code to handle the error
End Sub`}
                  </code>
                </pre>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">2. Error Handling Options</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="border px-3 py-2 text-left">Statement</th>
                        <th className="border px-3 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-3 py-2 font-medium"><code >On Error GoTo [label]</code></td>
                        <td className="border px-3 py-2">Enables error handling by jumping to a specified label when an error occurs</td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium"><code >On Error Resume Next</code></td>
                        <td className="border px-3 py-2">Continues execution with the next statement after an error occurs</td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium"><code >On Error GoTo 0</code></td>
                        <td className="border px-3 py-2">Disables any previous error handling in the current procedure</td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium"><code >Err.Clear</code></td>
                        <td className="border px-3 py-2">Clears the current error information</td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2 font-medium"><code >Err object properties</code></td>
                        <td className="border px-3 py-2">Access error information via Err.Number, Err.Description, Err.Source, etc.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">3. Comprehensive Error Handling Pattern</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <CopyableContent
                  alwaysShowButton={true}
                  content={`Sub RobustErrorHandlingExample()
    ' Variables for error handling
    Dim errNumber As Long
    Dim errDescription As String
    Dim errSource As String
    Dim errProcedure As String
    
    ' Variables for our procedure
    Dim dataSheet As Worksheet
    Dim lastRow As Long
    
    On Error GoTo ErrorHandler
    
    ' Capture procedure name for error reporting
    errProcedure = "RobustErrorHandlingExample"
    
    ' Application settings for better performance
    Application.ScreenUpdating = False
    Application.EnableEvents = False
    
    ' Main code
    Set dataSheet = ThisWorkbook.Worksheets("Data")
    lastRow = dataSheet.Cells(dataSheet.Rows.Count, "A").End(xlUp).Row
    
    ' Process data...
    ProcessData dataSheet, lastRow
    
    ' If we got here, everything worked fine
    MsgBox "Operation completed successfully!"
    
CleanExit:
    ' Always restore application settings
    Application.ScreenUpdating = True
    Application.EnableEvents = True
    Exit Sub
    
ErrorHandler:
    ' Capture error information
    errNumber = Err.Number
    errDescription = Err.Description
    errSource = Err.Source
    
    ' Log error (to immediate window and potentially a log file)
    Debug.Print "Error in " & errProcedure & ": " & errNumber & ": " & errDescription
    
    ' Different handling based on specific errors
    Select Case errNumber
        Case 9 ' Subscript out of range
            MsgBox "The Data sheet was not found. Please ensure it exists and try again.", _
                   vbExclamation, "Sheet Not Found"
                   
        Case 1004 ' Application-defined or object-defined error
            If InStr(errDescription, "range") >0 Then
                MsgBox "There was a problem with the selected range. Please try again.", _
                       vbExclamation, "Range Error"
            Else
                GoTo GenericError
            End If
            
        Case Else ' Handle other errors
GenericError:
            MsgBox "An error occurred:" & vbNewLine & _
                   "Error Number: " & errNumber & vbNewLine & _
                   "Description: " & errDescription, _
                   vbCritical, "Error"
    End Select
    
    ' Resume execution or exit gracefully
    Resume CleanExit
End Sub

Sub ProcessData(ws As Worksheet, lastRow As Long)
    ' Another procedure with its own error handling
    On Error GoTo ErrorHandler
    
    ' Process data here...
    ' ...
    Exit Sub
    
ErrorHandler:
    ' Re-raise the error to be handled by the calling procedure
    Err.Raise Err.Number, "ProcessData: " & Err.Source, Err.Description
End Sub`}
                >
                  <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                    <code>
{`Sub RobustErrorHandlingExample()
    ' Variables for error handling
    Dim errNumber As Long
    Dim errDescription As String
    Dim errSource As String
    Dim errProcedure As String
    
    ' Variables for our procedure
    Dim dataSheet As Worksheet
    Dim lastRow As Long
    
    On Error GoTo ErrorHandler
    
    ' Capture procedure name for error reporting
    errProcedure = "RobustErrorHandlingExample"
    
    ' Application settings for better performance
    Application.ScreenUpdating = False
    Application.EnableEvents = False
    
    ' Main code
    Set dataSheet = ThisWorkbook.Worksheets("Data")
    lastRow = dataSheet.Cells(dataSheet.Rows.Count, "A").End(xlUp).Row
    
    ' Process data...
    ProcessData dataSheet, lastRow
    
    ' If we got here, everything worked fine
    MsgBox "Operation completed successfully!"
    
CleanExit:
    ' Always restore application settings
    Application.ScreenUpdating = True
    Application.EnableEvents = True
    Exit Sub
    
ErrorHandler:
    ' Capture error information
    errNumber = Err.Number
    errDescription = Err.Description
    errSource = Err.Source
    
    ' Log error (to immediate window and potentially a log file)
    Debug.Print "Error in " & errProcedure & ": " & errNumber & ": " & errDescription
    
    ' Different handling based on specific errors
    Select Case errNumber
        Case 9 ' Subscript out of range
            MsgBox "The Data sheet was not found. Please ensure it exists and try again.", _
                   vbExclamation, "Sheet Not Found"
                   
        Case 1004 ' Application-defined or object-defined error
            If InStr(errDescription, "range") >0 Then
                MsgBox "There was a problem with the selected range. Please try again.", _
                       vbExclamation, "Range Error"
            Else
                GoTo GenericError
            End If
            
        Case Else ' Handle other errors
GenericError:
            MsgBox "An error occurred:" & vbNewLine & _
                   "Error Number: " & errNumber & vbNewLine & _
                   "Description: " & errDescription, _
                   vbCritical, "Error"
    End Select
    
    ' Resume execution or exit gracefully
    Resume CleanExit
End Sub

Sub ProcessData(ws As Worksheet, lastRow As Long)
    ' Another procedure with its own error handling
    On Error GoTo ErrorHandler
    
    ' Process data here...
    ' ...
    Exit Sub
    
ErrorHandler:
    ' Re-raise the error to be handled by the calling procedure
    Err.Raise Err.Number, "ProcessData: " & Err.Source, Err.Description
End Sub`}
                    </code>
                  </pre>
                </CopyableContent>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">4. Error Handling Best Practices</h5>
              <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Include error handling in every procedure</li>
                  <li>Use specific error handlers for anticipated errors</li>
                  <li>Include cleanup code to restore application states (ScreenUpdating, EnableEvents, etc.)</li>
                  <li>Log errors for debugging purposes</li>
                  <li>Provide user-friendly error messages</li>
                  <li>Test your error handlers by deliberately causing errors</li>
                  <li>Use <code >Resume</code>
                  or <code >Resume Next</code>
                  carefully to continue execution after an error</li>
                  <li>Consider using a centralized error handling module for consistent error management across your application</li>
                </ul>
              </div>
            </div>
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
          <li>Mastered conditional statements for decision-making in VBA</li>
          <li>Implemented different types of loops for repetitive tasks</li>
          <li>Used logical operators to create complex conditions</li>
          <li>Applied error handling techniques to make robust code</li>
          <li>Utilized control flow best practices for efficient programming</li>
          <li>Created an intelligent data validation system</li>
        </ul>
      </div>
      
      {/* Hands-on Project Section */}
      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold mb-4">Hands-on Project: Build an Intelligent Data Validator</h3>
        <p className="mb-4">Apply your knowledge of control structures and logic to create a sophisticated data validation system in VBA.
          This project will validate various types of data input against complex business rules, ensuring data integrity
          before it enters your Excel system.
        </p>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Project Requirements:</h4>
            <div className="pl-4 border-l-2 border-muted">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Create a VBA system that validates data in a designated input range</li>
                <li>Implement validation rules for different data types (text, numbers, dates, emails)</li>
                <li>Use conditional statements to apply different validation rules based on data type</li>
                <li>Use loops to process all cells in the input range</li>
                <li>Provide user feedback with meaningful error messages</li>
                <li>Implement error handling for robustness</li>
                <li>Format valid and invalid cells differently for visual feedback</li>
                <li>Create a summary report of validation results</li>
              </ol>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Data Validation Rules to Implement:</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border px-3 py-2 text-left">Data Type</th>
                    <th className="border px-3 py-2 text-left">Validation Rules</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-medium">Names</td>
                    <td className="border px-3 py-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Must be 2-50 characters</li>
                        <li>No special characters except hyphens and apostrophes</li>
                        <li>First letter must be capitalized</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-medium">Email Addresses</td>
                    <td className="border px-3 py-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Must follow email format (user@domain.com)</li>
                        <li>Domain must be valid (contains at least one dot)</li>
                        <li>No spaces allowed</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-medium">Phone Numbers</td>
                    <td className="border px-3 py-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Must be in format: (XXX) XXX-XXXX or XXX-XXX-XXXX</li>
                        <li>Only digits, parentheses, and hyphens allowed</li>
                        <li>Must have correct number of digits (10)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-medium">Dates</td>
                    <td className="border px-3 py-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Must be a valid date</li>
                        <li>Must be between 1/1/2000 and current date</li>
                        <li>If it's a birth date, person must be at least 18 years old</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-medium">Product Codes</td>
                    <td className="border px-3 py-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Must follow pattern: XX-9999-XX</li>
                        <li>First two characters must be capital letters</li>
                        <li>Middle 4 characters must be digits</li>
                        <li>Last two characters must be capital letters</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Starter Code:</h4>
            <CopyableContent
                  alwaysShowButton={true}
              content={`' Intelligent Data Validator
Option Explicit

' Main procedure to validate data
Sub ValidateData()
    ' Error handling
    On Error GoTo ErrorHandler
    
    ' Variables
    Dim inputRange As Range
    Dim cell As Range
    Dim validCount As Integer
    Dim invalidCount As Integer
    Dim startTime As Double
    
    ' Performance optimization
    Application.ScreenUpdating = False
    Application.EnableEvents = False
    
    ' Initialize
    startTime = Timer
    validCount = 0
    invalidCount = 0
    
    ' Get the input range - this assumes data is in columns A to E
    ' and has headers in row 1
    Set inputRange = Range("A2:E" & LastRow(1))
    
    ' Clear previous validation formatting
    ClearValidationFormatting
    
    ' Loop through each cell in the input range
    For Each cell In inputRange
        ' Skip empty cells
        If Not IsEmpty(cell) Then
            ' Determine which column we're in to apply appropriate validation
            Select Case cell.Column
                Case 1  ' Column A - Names
                    If IsValidName(cell.Value) Then
                        MarkAsValid cell
                        validCount = validCount + 1
                    Else
                        MarkAsInvalid cell, "Invalid name format"
                        invalidCount = invalidCount + 1
                    End If
                    
                Case 2  ' Column B - Email addresses
                    If IsValidEmail(cell.Value) Then
                        MarkAsValid cell
                        validCount = validCount + 1
                    Else
                        MarkAsInvalid cell, "Invalid email address"
                        invalidCount = invalidCount + 1
                    End If
                    
                Case 3  ' Column C - Phone numbers
                    ' TODO: Implement phone validation
                    
                Case 4  ' Column D - Dates
                    ' TODO: Implement date validation
                    
                Case 5  ' Column E - Product codes
                    ' TODO: Implement product code validation
            End Select
        End If
    Next cell
    
    ' Display validation summary
    DisplayValidationSummary validCount, invalidCount, Timer - startTime
    
CleanExit:
    ' Restore settings
    Application.ScreenUpdating = True
    Application.EnableEvents = True
    Exit Sub
    
ErrorHandler:
    MsgBox "Error: " & Err.Description, vbCritical, "Validation Error"
    Resume CleanExit
End Sub

' ===== Validation Functions =====

Function IsValidName(nameStr As String) As Boolean
    ' TODO: Implement name validation logic
    ' Hint: Use pattern matching with Like operator or RegExp
    IsValidName = True ' Placeholder
End Function

Function IsValidEmail(email As String) As Boolean
    ' Basic email validation
    Dim validPattern As Boolean
    
    ' Check for @ and . characters
    validPattern = InStr(email, "@") >0 And _
                   InStr(InStr(email, "@") + 1, email, ".") >0
    
    ' Check for spaces
    validPattern = validPattern And InStr(email, " ") = 0
    
    IsValidEmail = validPattern
End Function

' ===== Helper Functions =====

Sub MarkAsValid(cell As Range)
    With cell.Interior
        .Color = RGB(225, 240, 220) ' Light green
    End With
End Sub

Sub MarkAsInvalid(cell As Range, errorMsg As String)
    With cell.Interior
        .Color = RGB(255, 200, 200) ' Light red
    End With
    
    ' Add comment with error message
    If Not cell.Comment Is Nothing Then
        cell.Comment.Delete
    End If
    cell.AddComment
    cell.Comment.Text Text:=errorMsg
    cell.Comment.Shape.TextFrame.AutoSize = True
End Sub

Sub ClearValidationFormatting()
    ' Clear all formatting and comments in the data range
    Dim dataRange As Range
    Set dataRange = Range("A2:E" & LastRow(1))
    
    dataRange.Interior.ColorIndex = xlNone
    
    ' Remove comments
    On Error Resume Next
    dataRange.ClearComments
    On Error GoTo 0
End Sub

Function LastRow(colNum As Integer) As Long
    ' Returns the last row with data in the specified column
    LastRow = Cells(Rows.Count, colNum).End(xlUp).Row
End Function

Sub DisplayValidationSummary(valid As Integer, invalid As Integer, durationSec As Double)
    ' Create a nicely formatted message box with validation statistics
    Dim msg As String
    Dim totalCells As Integer
    
    totalCells = valid + invalid
    
    msg = "===== Validation Results ====" & vbNewLine & vbNewLine & _
          "Total cells validated: " & totalCells & vbNewLine & _
          "Valid cells: " & valid & " (" & Format(valid / totalCells, "0.0%") & ")" & vbNewLine & _
          "Invalid cells: " & invalid & " (" & Format(invalid / totalCells, "0.0%") & ")" & vbNewLine & _
          "Duration: " & Format(durationSec, "0.00") & " seconds"
    
    MsgBox msg, vbInformation, "Validation Complete"
End Sub`}
            >
              <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
                <code>
{`' Intelligent Data Validator
+Option Explicit
+
+' Main procedure to validate data
+Sub ValidateData()
+    ' Error handling
+    On Error GoTo ErrorHandler
+    
+    ' Variables
+    Dim inputRange As Range
+    Dim cell As Range
+    Dim validCount As Integer
+    Dim invalidCount As Integer
+    Dim startTime As Double
+    
+    ' Performance optimization
+    Application.ScreenUpdating = False
+    Application.EnableEvents = False
+    
+    ' Initialize
+    startTime = Timer
+    validCount = 0
+    invalidCount = 0
+    
+    ' Get the input range - this assumes data is in columns A to E
+    ' and has headers in row 1
+    Set inputRange = Range("A2:E" & LastRow(1))
+    
+    ' Clear previous validation formatting
+    ClearValidationFormatting
+    
+    ' Loop through each cell in the input range
+    For Each cell In inputRange
+        ' Skip empty cells
+        If Not IsEmpty(cell) Then
+            ' Determine which column we're in to apply appropriate validation
+            Select Case cell.Column
+                Case 1  ' Column A - Names
+                    If IsValidName(cell.Value) Then
+                        MarkAsValid cell
+                        validCount = validCount + 1
+                    Else
+                        MarkAsInvalid cell, "Invalid name format"
+                        invalidCount = invalidCount + 1
+                    End If
+                    
+                Case 2  ' Column B - Email addresses
+                    If IsValidEmail(cell.Value) Then
+                        MarkAsValid cell
+                        validCount = validCount + 1
+                    Else
+                        MarkAsInvalid cell, "Invalid email address"
+                        invalidCount = invalidCount + 1
+                    End If
+                    
+                Case 3  ' Column C - Phone numbers
+                    ' TODO: Implement phone validation
+                    
+                Case 4  ' Column D - Dates
+                    ' TODO: Implement date validation
+                    
+                Case 5  ' Column E - Product codes
+                    ' TODO: Implement product code validation
+            End Select
+        End If
+    Next cell
+    
+    ' Display validation summary
+    DisplayValidationSummary validCount, invalidCount, Timer - startTime
+    
+CleanExit:
+    ' Restore settings
+    Application.ScreenUpdating = True
+    Application.EnableEvents = True
+    Exit Sub
+    
+ErrorHandler:
+    MsgBox "Error: " & Err.Description, vbCritical, "Validation Error"
+    Resume CleanExit
+End Sub
+
+' ===== Validation Functions =====
+
+Function IsValidName(nameStr As String) As Boolean
+    ' TODO: Implement name validation logic
+    ' Hint: Use pattern matching with Like operator or RegExp
+    IsValidName = True ' Placeholder
+End Function
+
+Function IsValidEmail(email As String) As Boolean
+    ' Basic email validation
+    Dim validPattern As Boolean
+    
+    ' Check for @ and . characters
+    validPattern = InStr(email, "@") >0 And _
+                   InStr(InStr(email, "@") + 1, email, ".") >0
+    
+    ' Check for spaces
+    validPattern = validPattern And InStr(email, " ") = 0
+    
+    IsValidEmail = validPattern
+End Function
+
+' ===== Helper Functions =====
+
+Sub MarkAsValid(cell As Range)
+    With cell.Interior
+        .Color = RGB(225, 240, 220) ' Light green
+    End With
+End Sub
+
+Sub MarkAsInvalid(cell As Range, errorMsg As String)
+    With cell.Interior
+        .Color = RGB(255, 200, 200) ' Light red
+    End With
+    
+    ' Add comment with error message
+    If Not cell.Comment Is Nothing Then
+        cell.Comment.Delete
+    End If
+    cell.AddComment
+    cell.Comment.Text Text:=errorMsg
+    cell.Comment.Shape.TextFrame.AutoSize = True
+End Sub
+
+Sub ClearValidationFormatting()
+    ' Clear all formatting and comments in the data range
+    Dim dataRange As Range
+    Set dataRange = Range("A2:E" & LastRow(1))
+    
+    dataRange.Interior.ColorIndex = xlNone
+    
+    ' Remove comments
+    On Error Resume Next
+    dataRange.ClearComments
+    On Error GoTo 0
+End Sub
+
+Function LastRow(colNum As Integer) As Long
+    ' Returns the last row with data in the specified column
+    LastRow = Cells(Rows.Count, colNum).End(xlUp).Row
+End Function
+
+Sub DisplayValidationSummary(valid As Integer, invalid As Integer, durationSec As Double)
+    ' Create a nicely formatted message box with validation statistics
+    Dim msg As String
+    Dim totalCells As Integer
+    
+    totalCells = valid + invalid
+    
+    msg = "===== Validation Results ====" & vbNewLine & vbNewLine & _
+          "Total cells validated: " & totalCells & vbNewLine & _
+          "Valid cells: " & valid & " (" & Format(valid / totalCells, "0.0%") & ")" & vbNewLine & _
+          "Invalid cells: " & invalid & " (" & Format(invalid / totalCells, "0.0%") & ")" & vbNewLine & _
+          "Duration: " & Format(durationSec, "0.00") & " seconds"
+    
+    MsgBox msg, vbInformation, "Validation Complete"
+End Sub`}
                </code>
              </pre>
            </CopyableContent>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Sample Data Tables for Exercises</h4>
            <p className="text-sm text-muted-foreground mb-3">The following tables contain sample data you can use when practicing VBA control structures. Copy these into your Excel worksheet to work with the exercises.
            </p>
            
            <div className="space-y-6">
              {/* Employee Data Table */}
              <div>
                <h5 className="text-sm font-medium mb-2">Table 1: Employee Data</h5>
                <CopyableContent
                  alwaysShowButton={true}
                  content={extractTableData("employee-data")}
                >
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-xs">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="border px-2 py-1 text-left">EmployeeID</th>
                        <th className="border px-2 py-1 text-left">Name</th>
                        <th className="border px-2 py-1 text-left">Department</th>
                        <th className="border px-2 py-1 text-left">Hire Date</th>
                        <th className="border px-2 py-1 text-left">Salary</th>
                        <th className="border px-2 py-1 text-left">Performance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">E001</td>
                        <td className="border px-2 py-1">Thabo Nkosi</td>
                        <td className="border px-2 py-1">Sales</td>
                        <td className="border px-2 py-1">15/01/2020</td>
                        <td className="border px-2 py-1">R650,000</td>
                        <td className="border px-2 py-1">Good</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">E002</td>
                        <td className="border px-2 py-1">Zanele Johnson</td>
                        <td className="border px-2 py-1">Marketing</td>
                        <td className="border px-2 py-1">22/03/2019</td>
                        <td className="border px-2 py-1">R725,000</td>
                        <td className="border px-2 py-1">Excellent</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">E003</td>
                        <td className="border px-2 py-1">Michael Mokoena</td>
                        <td className="border px-2 py-1">IT</td>
                        <td className="border px-2 py-1">07/11/2021</td>
                        <td className="border px-2 py-1">R780,000</td>
                        <td className="border px-2 py-1">Good</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">E004</td>
                        <td className="border px-2 py-1">Lindiwe Dlamini</td>
                        <td className="border px-2 py-1">Sales</td>
                        <td className="border px-2 py-1">30/06/2022</td>
                        <td className="border px-2 py-1">R630,000</td>
                        <td className="border px-2 py-1">Needs Improvement</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">E005</td>
                        <td className="border px-2 py-1">David Khumalo</td>
                        <td className="border px-2 py-1">Finance</td>
                        <td className="border px-2 py-1">15/09/2018</td>
                        <td className="border px-2 py-1">R850,000</td>
                        <td className="border px-2 py-1">Excellent</td>
                      </tr>
                    </tbody>
                    </table>
                  </div>
                </CopyableContent>
              </div>
              
              {/* Product Inventory Table */}
              <div>
                <h5 className="text-sm font-medium mb-2">Table 2: Product Inventory</h5>
                <CopyableContent
                  alwaysShowButton={true}
                  content={extractTableData("product-inventory")}
                >
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-xs">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="border px-2 py-1 text-left">ProductID</th>
                        <th className="border px-2 py-1 text-left">Product Name</th>
                        <th className="border px-2 py-1 text-left">Category</th>
                        <th className="border px-2 py-1 text-left">Price</th>
                        <th className="border px-2 py-1 text-left">Stock Level</th>
                        <th className="border px-2 py-1 text-left">Reorder Point</th>
                        <th className="border px-2 py-1 text-left">Discontinued</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">P101</td>
                        <td className="border px-2 py-1">Wireless Mouse</td>
                        <td className="border px-2 py-1">Electronics</td>
                        <td className="border px-2 py-1">R249.99</td>
                        <td className="border px-2 py-1">45</td>
                        <td className="border px-2 py-1">15</td>
                        <td className="border px-2 py-1">False</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">P102</td>
                        <td className="border px-2 py-1">USB-C Cable</td>
                        <td className="border px-2 py-1">Electronics</td>
                        <td className="border px-2 py-1">R125.00</td>
                        <td className="border px-2 py-1">78</td>
                        <td className="border px-2 py-1">25</td>
                        <td className="border px-2 py-1">False</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">P103</td>
                        <td className="border px-2 py-1">Notebook Set</td>
                        <td className="border px-2 py-1">Office Supplies</td>
                        <td className="border px-2 py-1">R187.50</td>
                        <td className="border px-2 py-1">12</td>
                        <td className="border px-2 py-1">20</td>
                        <td className="border px-2 py-1">False</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">P104</td>
                        <td className="border px-2 py-1">Desk Lamp</td>
                        <td className="border px-2 py-1">Furniture</td>
                        <td className="border px-2 py-1">R359.90</td>
                        <td className="border px-2 py-1">5</td>
                        <td className="border px-2 py-1">10</td>
                        <td className="border px-2 py-1">False</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">P105</td>
                        <td className="border px-2 py-1">Memory Stick</td>
                        <td className="border px-2 py-1">Electronics</td>
                        <td className="border px-2 py-1">R59.99</td>
                        <td className="border px-2 py-1">3</td>
                        <td className="border px-2 py-1">0</td>
                        <td className="border px-2 py-1">True</td>
                      </tr>
                    </tbody>
                    </table>
                  </div>
                </CopyableContent>
              </div>
              
              {/* Customer Orders Table */}
              <div>
                <h5 className="text-sm font-medium mb-2">Table 3: Customer Orders</h5>
                <CopyableContent
                  alwaysShowButton={true}
                  content={extractTableData("customer-orders")}
                >
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-xs">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="border px-2 py-1 text-left">OrderID</th>
                        <th className="border px-2 py-1 text-left">CustomerName</th>
                        <th className="border px-2 py-1 text-left">OrderDate</th>
                        <th className="border px-2 py-1 text-left">OrderAmount</th>
                        <th className="border px-2 py-1 text-left">CustomerType</th>
                        <th className="border px-2 py-1 text-left">PaymentStatus</th>
                        <th className="border px-2 py-1 text-left">ShippingStatus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">O2023-001</td>
                        <td className="border px-2 py-1">Vodacom Solutions (Pty) Ltd</td>
                        <td className="border px-2 py-1">15/02/2023</td>
                        <td className="border px-2 py-1">R24,450.00</td>
                        <td className="border px-2 py-1">Corporate</td>
                        <td className="border px-2 py-1">Paid</td>
                        <td className="border px-2 py-1">Delivered</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">O2023-002</td>
                        <td className="border px-2 py-1">Thabo Mbeki</td>
                        <td className="border px-2 py-1">17/02/2023</td>
                        <td className="border px-2 py-1">R1,750.50</td>
                        <td className="border px-2 py-1">Retail</td>
                        <td className="border px-2 py-1">Paid</td>
                        <td className="border px-2 py-1">Shipped</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">O2023-003</td>
                        <td className="border px-2 py-1">Shoprite Holdings Ltd</td>
                        <td className="border px-2 py-1">20/02/2023</td>
                        <td className="border px-2 py-1">R128,000.00</td>
                        <td className="border px-2 py-1">Corporate</td>
                        <td className="border px-2 py-1">Pending</td>
                        <td className="border px-2 py-1">Processing</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">O2023-004</td>
                        <td className="border px-2 py-1">Lerato Molefe</td>
                        <td className="border px-2 py-1">22/02/2023</td>
                        <td className="border px-2 py-1">R899.99</td>
                        <td className="border px-2 py-1">Retail</td>
                        <td className="border px-2 py-1">Paid</td>
                        <td className="border px-2 py-1">Delivered</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">O2023-005</td>
                        <td className="border px-2 py-1">University of Cape Town</td>
                        <td className="border px-2 py-1">28/02/2023</td>
                        <td className="border px-2 py-1">R56,752.50</td>
                        <td className="border px-2 py-1">Education</td>
                        <td className="border px-2 py-1">Unpaid</td>
                        <td className="border px-2 py-1">On Hold</td>
                      </tr>
                    </tbody>
                    </table>
                  </div>
                </CopyableContent>
              </div>
              
              {/* Data Validation Sample */}
              <div>
                <h5 className="text-sm font-medium mb-2">Table 4: Data for Validation Exercise</h5>
                <CopyableContent
                  alwaysShowButton={true}
                  content={extractTableData("validation-data")}
                >
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-xs">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="border px-2 py-1 text-left">Name</th>
                        <th className="border px-2 py-1 text-left">Phone</th>
                        <th className="border px-2 py-1 text-left">Date</th>
                        <th className="border px-2 py-1 text-left">Email</th>
                        <th className="border px-2 py-1 text-left">ProductCode</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1">Sipho Nkosi</td>
                        <td className="border px-2 py-1">071 123 4567</td>
                        <td className="border px-2 py-1">15/01/2023</td>
                        <td className="border px-2 py-1">sipho.nkosi@gmail.co.za</td>
                        <td className="border px-2 py-1">ZA-12345</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">N@tasha Dlamini</td>
                        <td className="border px-2 py-1">0821234567</td>
                        <td className="border px-2 py-1">2023/01/20</td>
                        <td className="border px-2 py-1">natasha.dlamini@vodacom</td>
                        <td className="border px-2 py-1">WC-98765</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Tshepo2</td>
                        <td className="border px-2 py-1">(011) 987-6543</td>
                        <td className="border px-2 py-1">25-01-2023</td>
                        <td className="border px-2 py-1">tshepo@webmail.co.za</td>
                        <td className="border px-2 py-1">GP12345</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1">Nomvula Khumalo</td>
                        <td className="border px-2 py-1">073.789.0123</td>
                        <td className="border px-2 py-1">30/01/2023</td>
                        <td className="border px-2 py-1">nomvula.khumalo@uct.ac.za</td>
                        <td className="border px-2 py-1">KZN-56789</td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1"></td>
                        <td className="border px-2 py-1">084-321-9876</td>
                        <td className="border px-2 py-1">05/02/2023</td>
                        <td className="border px-2 py-1">missing@telkomsa</td>
                        <td className="border px-2 py-1">EC-00000</td>
                      </tr>
                    </tbody>
                    </table>
                  </div>
                </CopyableContent>
              </div>
            </div>
            
            <div className="mt-4 mb-6">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong>
                  These tables are designed to help you practice VBA control structures. 
                They contain a mix of valid and invalid data that will help you test your conditional statements, 
                loops, and validation routines. You can copy these into Excel to work with the exercises below.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Your Tasks:</h4>
            <div className="pl-4 border-l-2 border-muted">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Complete the <code >IsValidName()</code>
                  function using appropriate string operations and pattern matching</li>
                <li>Implement the missing validation functions for phone numbers, dates, and product codes</li>
                <li>Complete the <code >Select Case</code>
                  structure to handle all data types</li>
                <li>Test your validator with various data inputs</li>
                <li>Add additional error handling and input validation as needed</li>
              </ol>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Bonus Challenges:</h4>
            <div className="pl-4 border-l-2 border-muted">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Create a user form to allow customization of validation rules</li>
                <li>Implement a "fix data" feature that automatically corrects minor formatting issues</li>
                <li>Add the ability to validate against a list of valid values stored in another worksheet</li>
                <li>Create a detailed log of all validation errors in a separate worksheet</li>
                <li>Extend the validator to handle custom data types specific to your organization</li>
              </ol>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-muted-foreground italic">This project will give you hands-on experience with using control structures in a practical scenario. 
              You'll implement conditional logic, loops, and error handling while creating a useful tool that 
              can be adapted for real-world data validation needs in Excel.
            </p>
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

export default VBAControlStructuresLesson;
