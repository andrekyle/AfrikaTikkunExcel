import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CopyableContent from "@/components/CopyableContent";
import { Separator } from "@/components/ui/separator";

interface VBAErrorHandlingDebuggingLessonProps {
  onContinue?: () => void;
}

export default function VBAErrorHandlingDebuggingLesson({ onContinue }: VBAErrorHandlingDebuggingLessonProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle >Error Handling & Debugging in VBA</CardTitle>
          <CardDescription >Learn how to implement professional error handling and debugging techniques in Excel VBA to create robust, reliable macros.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Introduction to VBA Error Handling</h3>
            <p className="text-muted-foreground">Error handling is crucial for developing reliable VBA applications. Without proper error handling, your macros may crash unexpectedly, potentially causing data loss or corruption. In this lesson, you'll learn how to:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-muted-foreground">
              <li>Understand VBA's error handling mechanisms</li>
              <li>Implement structured error handling with On Error statements</li>
              <li>Create informative error messages and logs</li>
              <li>Use debugging tools in the VBA Editor</li>
              <li>Build a robust error-handling framework</li>
            </ul>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Error Handling Fundamentals</h3>
            
            <h4 className="font-medium mt-4">Error Types in VBA</h4>
            <div className="mt-2 space-y-2">
              <p className="text-muted-foreground">VBA has three main types of errors:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><span className="font-medium text-foreground">Compile errors:</span>
                  Syntax errors detected when code is compiled</li>
                <li><span className="font-medium text-foreground">Runtime errors:</span>
                  Errors that occur during code execution</li>
                <li><span className="font-medium text-foreground">Logic errors:</span>
                  Code runs but produces incorrect results</li>
              </ul>
            </div>
            
            <h4 className="font-medium mt-4">The On Error Statement</h4>
            <p className="text-muted-foreground mt-2">VBA provides the <code >On Error</code>
                  statement as the primary error-handling mechanism:
            </p>
            
            <div className="mt-2 space-y-4">
              <Card className="bg-muted">
                <CardHeader className="py-2">
                  <CardTitle className="text-sm">Error Handling Options</CardTitle>
                </CardHeader>
                <CardContent className="pb-3 pt-0">
                  <CopyableContent
                    alwaysShowButton={true}
                    content={`' Option 1: Resume on next line
On Error Resume Next

' Option 2: Jump to specific label
On Error GoTo ErrorHandler

' Option 3: Clear previous error handler
On Error GoTo 0`}
                    label="Copy Code"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Structured Error Handling</h3>
            
            <p className="text-muted-foreground">A proper error handling structure follows this pattern:
            </p>
            
            <Card className="bg-muted mt-4">
              <CardHeader className="py-2">
                <CardTitle className="text-sm">Structured Error Handling Template</CardTitle>
              </CardHeader>
              <CardContent className="pb-3 pt-0">
                <CopyableContent
                    alwaysShowButton={true}
                  content={`Sub ProcedureWithErrorHandling()
    ' Initialize variables
    Dim ws As Worksheet
    
    ' Begin error handling
    On Error GoTo ErrorHandler
    
    ' Main code
    Set ws = ThisWorkbook.Worksheets("Data")
    ws.Range("A1").Value = "Hello World"
    
    ' Clean up
    Set ws = Nothing
    Exit Sub
    
ErrorHandler:
    ' Handle error
    MsgBox "An error occurred: " & Err.Description, vbExclamation, "Error " & Err.Number
    
    ' Clean up
    Set ws = Nothing
    Exit Sub
End Sub`}
                  label="Copy Code"
                />
              </CardContent>
            </Card>
            
            <h4 className="font-medium mt-4">Error Object Properties</h4>
            <p className="text-muted-foreground mt-2">The <code >Err</code>
                  object provides information about runtime errors:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <Card className="bg-gray-50 dark:bg-slate-900">
                <CardHeader className="py-2">
                  <CardTitle className="text-sm">Key Err Properties</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><code >Err.Number</code> - Error code number</p>
                  <p><code >Err.Description</code> - Error message</p>
                  <p><code >Err.Source</code> - Object that generated the error</p>
                  <p><code >Err.HelpFile</code> - Path to help file</p>
                  <p><code >Err.HelpContext</code> - Context ID in help file</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-50 dark:bg-slate-900">
                <CardHeader className="py-2">
                  <CardTitle className="text-sm">Error Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><code >Err.Clear</code> - Clear all property settings</p>
                  <p><code >Err.Raise</code> - Generate a runtime error</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Debugging Techniques</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">VBA Debugging Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><span className="font-medium">Breakpoints:</span>
                  Pause code execution at specific lines</p>
                  <p className="text-sm"><span className="font-medium">Step Into (F8):</span>
                  Execute one statement at a time</p>
                  <p className="text-sm"><span className="font-medium">Step Over (Shift+F8):</span>
                  Skip over procedure calls</p>
                  <p className="text-sm"><span className="font-medium">Watch Window:</span>
                  Monitor variables during execution</p>
                  <p className="text-sm"><span className="font-medium">Immediate Window:</span>
                  Test expressions and commands</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Debug.Print</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">The <code >Debug.Print</code>
                  statement outputs values to the Immediate Window during code execution.
                  </p>
                  <div className="mt-2">
                    <CopyableContent
                    alwaysShowButton={true}
                      content={`' Logging variable values
Debug.Print "Counter: " & intCounter
Debug.Print "Customer: " & strName & ", Total: " & curSales`}
                      label="Copy Code"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Separator />
          
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md">
            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-4">Hands-on Project: Error-Resilient Data Processor
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Project Overview</h4>
                <p className="text-sm text-blue-800 dark:text-blue-300">You'll build a VBA procedure that processes data from a worksheet while implementing robust error handling. 
                  This procedure will validate data, handle potential runtime errors, and log any issues that occur.
                </p>
              </div>
              
              <div className="pl-4 border-l-2 border-blue-200 dark:border-blue-800">
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Project Requirements:</h4>
                <ol className="list-decimal pl-6 space-y-3 text-sm text-blue-800 dark:text-blue-300">
                  <li>
                    <span className="font-medium">Data Validation:</span> 
                    <p className="mt-1">Check for blank cells, invalid data types, and out-of-range values.</p>
                  </li>
                  <li>
                    <span className="font-medium">Structured Error Handling:</span> 
                    <p className="mt-1">Implement On Error GoTo structures with specific error handlers.</p>
                  </li>
                  <li>
                    <span className="font-medium">Error Logging:</span> 
                    <p className="mt-1">Create a log sheet to record all errors with timestamps.</p>
                  </li>
                  <li>
                    <span className="font-medium">User Feedback:</span> 
                    <p className="mt-1">Provide meaningful error messages and status updates.</p>
                  </li>
                  <li>
                    <span className="font-medium">Resume Options:</span> 
                    <p className="mt-1">Implement different resume strategies based on error types.</p>
                  </li>
                </ol>
              </div>
              
              <div className="mt-4">
                <h3 className="text-xl font-medium text-blue-800 dark:text-blue-300 mb-4">Sample Data Tables</h3>
                <p className="text-blue-800 dark:text-blue-300 mb-4">Below are sample data tables you can use for the Error-Resilient Data Processor project. 
                  Click the copy icon to easily paste the data into Excel.
                </p>
                
                <div className="space-y-6 mb-6">
                  {/* Product Data Table */}
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-white p-3 flex justify-between items-center">
                      <h3 className="font-medium">Product Data (with Errors)</h3>
                      <CopyableContent
                        alwaysShowButton={true} 
                        content={`ProductID\tProduct Name\tPrice\tQuantity\tCategory\tIn Stock
1001\tLaptop Pro\t1299.99\t5\tElectronics\tTRUE
1002\tWireless Mouse\t24.95\t15\tAccessories\tTRUE
1003\tExternal SSD\t\t8\tStorage\tTRUE
1004\tMonitor 27"\t249.50\ttwelve\tElectronics\tTRUE
1005\tHeadphones\t-89.99\t10\tAudio\tFALSE
1006\tKeyboard\t59.99\t0\tAccessories\tFALSE
1007\t\t35.00\t22\tCables\tTRUE
1008\tWebcam HD\t79.99\t-3\tAccessories\tTRUE
1009\tTablet 10"\t399.00\t7\tElectronics\tTRUE
1010\tPrinter\tABC\t4\tElectronics\tTRUE`}
                        buttonClassName="bg-white"
                        label=""
                      />
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-2 text-left">ProductID</th>
                            <th className="p-2 text-left">Product Name</th>
                            <th className="p-2 text-left">Price</th>
                            <th className="p-2 text-left">Quantity</th>
                            <th className="p-2 text-left">Category</th>
                            <th className="p-2 text-left">In Stock</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-2">1001</td>
                            <td className="p-2">Laptop Pro</td>
                            <td className="p-2">1299.99</td>
                            <td className="p-2">5</td>
                            <td className="p-2">Electronics</td>
                            <td className="p-2">TRUE</td>
                          </tr>
                          <tr className="border-t bg-gray-50">
                            <td className="p-2">1002</td>
                            <td className="p-2">Wireless Mouse</td>
                            <td className="p-2">24.95</td>
                            <td className="p-2">15</td>
                            <td className="p-2">Accessories</td>
                            <td className="p-2">TRUE</td>
                          </tr>
                          <tr className="border-t bg-red-50">
                            <td className="p-2">1003</td>
                            <td className="p-2">External SSD</td>
                            <td className="p-2 text-red-500"><em >missing</em></td>
                            <td className="p-2">8</td>
                            <td className="p-2">Storage</td>
                            <td className="p-2">TRUE</td>
                          </tr>
                          <tr className="border-t bg-red-50">
                            <td className="p-2">1004</td>
                            <td className="p-2">Monitor 27"</td>
                            <td className="p-2">249.50</td>
                            <td className="p-2 text-red-500"><em >twelve</em></td>
                            <td className="p-2">Electronics</td>
                            <td className="p-2">TRUE</td>
                          </tr>
                          <tr className="border-t bg-red-50">
                            <td className="p-2">1005</td>
                            <td className="p-2">Headphones</td>
                            <td className="p-2 text-red-500"><em>-89.99</em></td>
                            <td className="p-2">10</td>
                            <td className="p-2">Audio</td>
                            <td className="p-2">FALSE</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2 text-gray-500" colSpan={6}><em >5 more rows (including errors) not shown</em></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-gray-50 p-2 text-xs text-gray-500">Note: Red rows contain intentional errors for testing your error handling
                    </div>
                  </div>
                  
                  {/* Customer Orders Table */}
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-white p-3 flex justify-between items-center">
                      <h3 className="font-medium">Customer Orders (with Errors)</h3>
                      <CopyableContent
                    alwaysShowButton={true} 
                        content={`OrderID\tCustomerID\tOrderDate\tProductID\tQuantity\tDiscount\tStatus
5001\t201\t15/07/2025\t1001\t2\t0.05\tShipped
5002\t202\t16/07/2025\t1003\t1\t0.00\tProcessing
5003\t203\t16/07/2025\t1050\t3\t0.10\tShipped
5004\t204\t17/07/2025\t1002\tThree\t0.00\tShipped
5005\t\t18/07/2025\t1005\t1\t0.15\tCancelled
5006\t206\t-1\t1008\t2\t0.20\tProcessing
5007\t207\t20/07/2025\t1004\t1\t150%\tShipped
5008\t208\t21/07/2025\t\t4\t0.00\tProcessing
5009\t209\t22/07/2025\t1006\t-2\t0.05\tShipped
5010\t210\t23/07/2025\t1009\t3\t0.10\tPending`}
                        buttonClassName="bg-white"
                        label="Copy Table Data"
                      />
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-2 text-left">OrderID</th>
                            <th className="p-2 text-left">CustomerID</th>
                            <th className="p-2 text-left">OrderDate</th>
                            <th className="p-2 text-left">ProductID</th>
                            <th className="p-2 text-left">Quantity</th>
                            <th className="p-2 text-left">Discount</th>
                            <th className="p-2 text-left">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-2">5001</td>
                            <td className="p-2">201</td>
                            <td className="p-2">15/07/2025</td>
                            <td className="p-2">1001</td>
                            <td className="p-2">2</td>
                            <td className="p-2">0.05</td>
                            <td className="p-2">Shipped</td>
                          </tr>
                          <tr className="border-t bg-gray-50">
                            <td className="p-2">5002</td>
                            <td className="p-2">202</td>
                            <td className="p-2">16/07/2025</td>
                            <td className="p-2">1003</td>
                            <td className="p-2">1</td>
                            <td className="p-2">0.00</td>
                            <td className="p-2">Processing</td>
                          </tr>
                          <tr className="border-t bg-red-50">
                            <td className="p-2">5003</td>
                            <td className="p-2">203</td>
                            <td className="p-2">16/07/2025</td>
                            <td className="p-2 text-red-500"><em >1050</em></td>
                            <td className="p-2">3</td>
                            <td className="p-2">0.10</td>
                            <td className="p-2">Shipped</td>
                          </tr>
                          <tr className="border-t bg-red-50">
                            <td className="p-2">5004</td>
                            <td className="p-2">204</td>
                            <td className="p-2">17/07/2025</td>
                            <td className="p-2">1002</td>
                            <td className="p-2 text-red-500"><em >Three</em></td>
                            <td className="p-2">0.00</td>
                            <td className="p-2">Shipped</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2 text-gray-500" colSpan={7}><em >6 more rows (including errors) not shown</em></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-gray-50 p-2 text-xs text-gray-500">Note: This data contains various error types to test different validation scenarios
                    </div>
                  </div>
                  
                  {/* Valid Customer Data */}
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-white p-3 flex justify-between items-center">
                      <h3 className="font-medium">Customer Data (Valid)</h3>
                      <CopyableContent
                    alwaysShowButton={true} 
                        content={`CustomerID\tCustomerName\tEmail\tPhone\tCountry\tCreditLimit
201\tTech Solutions\ttechsolutions@example.com\t+27 11 555 1234\tSouth Africa\t25000
202\tOffice Supplies Ltd\tinfo@officesupplies.co.za\t+27 21 555 5678\tSouth Africa\t10000
203\tGlobal Imports\torders@globalimports.com\t+27 31 555 9012\tSouth Africa\t50000
204\tData Systems\tcontact@datasystems.co.za\t+27 12 555 3456\tSouth Africa\t35000
205\tRetail Group\tinfo@retailgroup.com\t+27 41 555 7890\tSouth Africa\t20000
206\tElectronic Hub\tsales@electronichub.co.za\t+27 11 555 2345\tSouth Africa\t15000
207\tOffice Furniture Co\tcontact@officefurniture.co.za\t+27 21 555 6789\tSouth Africa\t30000
208\tComputer World\tsupport@computerworld.com\t+27 31 555 0123\tSouth Africa\t25000
209\tSchool Supplies\torders@schoolsupplies.co.za\t+27 12 555 4567\tSouth Africa\t40000
210\tBusiness Solutions\tinfo@businesssolutions.com\t+27 41 555 8901\tSouth Africa\t45000`}
                        buttonClassName="bg-white"
                        label="Copy Table Data"
                      />
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-2 text-left">CustomerID</th>
                            <th className="p-2 text-left">CustomerName</th>
                            <th className="p-2 text-left">Email</th>
                            <th className="p-2 text-left">Country</th>
                            <th className="p-2 text-left">CreditLimit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-2">201</td>
                            <td className="p-2">Tech Solutions</td>
                            <td className="p-2">techsolutions@example.com</td>
                            <td className="p-2">South Africa</td>
                            <td className="p-2">25000</td>
                          </tr>
                          <tr className="border-t bg-gray-50">
                            <td className="p-2">202</td>
                            <td className="p-2">Office Supplies Ltd</td>
                            <td className="p-2">info@officesupplies.co.za</td>
                            <td className="p-2">South Africa</td>
                            <td className="p-2">10000</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">203</td>
                            <td className="p-2">Global Imports</td>
                            <td className="p-2">orders@globalimports.com</td>
                            <td className="p-2">South Africa</td>
                            <td className="p-2">50000</td>
                          </tr>
                          <tr className="border-t bg-gray-50">
                            <td className="p-2 text-gray-500" colSpan={5}><em >7 more rows not shown</em></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-gray-50 p-2 text-xs text-gray-500">Note: This is clean data to use as a reference table for validation
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">How to Complete the Exercise</h4>
                <ol className="list-decimal pl-6 space-y-4 text-sm text-blue-800 dark:text-blue-300">
                  <li>
                    <span className="font-medium">Set up your workbook:</span>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Create a new Excel workbook and save it as "ErrorHandling.xlsm" (Macro-Enabled Workbook)</li>
                      <li>Create a worksheet named "Data" with sample data (product ID, name, price, quantity)</li>
                      <li>Add some intentional errors in your data (blank cells, text in number fields)</li>
                    </ul>
                  </li>
                  
                  <li>
                    <span className="font-medium">Create the error logging module:</span>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Open the VBA Editor (Alt+F11)</li>
                      <li>Insert a new standard module and name it "ErrorHandling"</li>
                      <li>Create a procedure to initialize the error log sheet</li>
                      <li>Create a procedure to log errors with timestamp, error number, description, and source</li>
                    </ul>
                  </li>
                  
                  <li>
                    <span className="font-medium">Implement the data processor:</span>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Create a main procedure that will process the data using structured error handling</li>
                      <li>Add input validation before processing each row</li>
                      <li>Implement specific error handlers for different scenarios</li>
                      <li>Use Resume Next for minor errors and Exit Sub for critical ones</li>
                    </ul>
                  </li>
                  
                  <li>
                    <span className="font-medium">Test your error handling:</span>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Run the procedure and observe how it handles the intentional errors</li>
                      <li>Review the error log to confirm proper recording of issues</li>
                      <li>Try various data scenarios to test the robustness of your error handling</li>
                    </ul>
                  </li>
                </ol>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Starter Code</h4>
                <div className="bg-white p-4 rounded-md overflow-x-auto">
                  <pre className="text-sm font-mono whitespace-pre-wrap">
{`Option Explicit

' Error logging module
Sub InitializeErrorLog()
    Dim logWs As Worksheet
    Dim wsExists As Boolean
    
    ' Check if log sheet exists
    wsExists = False
    For Each logWs In ThisWorkbook.Worksheets
        If logWs.Name = "ErrorLog" Then
            wsExists = True
            Exit For
        End If
    Next logWs
    
    ' Create log sheet if it doesn't exist
    If Not wsExists Then
        Set logWs = ThisWorkbook.Worksheets.Add
        logWs.Name = "ErrorLog"
        
        ' Set up headers
        With logWs
            .Cells(1, 1).Value = "Timestamp"
            .Cells(1, 2).Value = "Error Number"
            .Cells(1, 3).Value = "Description"
            .Cells(1, 4).Value = "Procedure"
            .Cells(1, 5).Value = "Row"
            
            ' Format headers
            .Range("A1:E1").Font.Bold = True
        End With
    End If
End Sub

Sub LogError(errorNum As Long, errorDesc As String, procName As String, Optional rowNum As Long = 0)
    Dim logWs As Worksheet
    Dim nextRow As Long
    
    ' Ensure log sheet exists
    Call InitializeErrorLog
    Set logWs = ThisWorkbook.Worksheets("ErrorLog")
    
    ' Find next empty row
    nextRow = logWs.Cells(logWs.Rows.Count, 1).End(xlUp).Row + 1
    
    ' Log error details
    With logWs
        .Cells(nextRow, 1).Value = Now()
        .Cells(nextRow, 2).Value = errorNum
        .Cells(nextRow, 3).Value = errorDesc
        .Cells(nextRow, 4).Value = procName
        .Cells(nextRow, 5).Value = rowNum
        
        ' Format timestamp
        .Cells(nextRow, 1).NumberFormat = "yyyy-mm-dd hh:mm:ss"
    End With
End Sub

' Main data processing procedure
Sub ProcessData()
    ' TODO: Implement the data processor with structured error handling
    ' Use On Error GoTo statements
    ' Validate input data
    ' Handle different error types
    ' Log errors using the LogError procedure
End Sub`}
                  </pre>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Implementation Guide</h4>
                <p className="text-sm text-blue-800 dark:text-blue-300">Now, implement the ProcessData procedure following this structure:
                </p>
                <div className="bg-white p-4 rounded-md overflow-x-auto mt-2">
                  <pre className="text-sm font-mono whitespace-pre-wrap">
{`Sub ProcessData()
    ' Variables
    Dim dataWs As Worksheet
    Dim summaryWs As Worksheet
    Dim lastRow As Long
    Dim i As Long
    Dim wsExists As Boolean
    
    ' Begin error handling
    On Error GoTo ErrorHandler
    
    ' Initialize
    Set dataWs = ThisWorkbook.Worksheets("Data")
    
    ' Create or clear summary sheet
    wsExists = False
    For Each summaryWs In ThisWorkbook.Worksheets
        If summaryWs.Name = "Summary" Then
            wsExists = True
            Exit For
        End If
    Next summaryWs
    
    If Not wsExists Then
        Set summaryWs = ThisWorkbook.Worksheets.Add
        summaryWs.Name = "Summary"
    Else
        summaryWs.Cells.Clear
    End If
    
    ' Set up summary headers
    With summaryWs
        .Cells(1, 1).Value = "Product ID"
        .Cells(1, 2).Value = "Product Name"
        .Cells(1, 3).Value = "Total Value"
        .Range("A1:C1").Font.Bold = True
    End With
    
    ' Find last data row
    lastRow = dataWs.Cells(dataWs.Rows.Count, 1).End(xlUp).Row
    
    ' Process each row
    For i = 2 To lastRow
        ' Local error handling for row processing
        On Error Resume Next
        
        ' Get row data
        Dim id As String
        Dim name As String
        Dim price As Double
        Dim qty As Integer
        Dim totalValue As Double
        
        id = dataWs.Cells(i, 1).Value
        name = dataWs.Cells(i, 2).Value
        
        ' Validate price (column 3)
        If IsNumeric(dataWs.Cells(i, 3).Value) Then
            price = CDbl(dataWs.Cells(i, 3).Value)
        Else
            ' Log error and continue with default value
            Call LogError(5, "Invalid price format", "ProcessData", i)
            price = 0
        End If
        
        ' Validate quantity (column 4)
        If IsNumeric(dataWs.Cells(i, 4).Value) Then
            qty = CInt(dataWs.Cells(i, 4).Value)
        Else
            ' Log error and continue with default value
            Call LogError(6, "Invalid quantity format", "ProcessData", i)
            qty = 0
        End If
        
        ' Calculate total value
        totalValue = price * qty
        
        ' Add to summary sheet
        Dim nextSummaryRow As Long
        nextSummaryRow = summaryWs.Cells(summaryWs.Rows.Count, 1).End(xlUp).Row + 1
        
        summaryWs.Cells(nextSummaryRow, 1).Value = id
        summaryWs.Cells(nextSummaryRow, 2).Value = name
        summaryWs.Cells(nextSummaryRow, 3).Value = totalValue
        
        ' Reset error handling for loop
        On Error GoTo ErrorHandler
    Next i
    
    ' Format summary sheet
    summaryWs.Columns("A:C").AutoFit
    summaryWs.Columns("C").NumberFormat = "$#,##0.00"
    
    ' Show completion message
    MsgBox "Data processing complete. Check the Summary sheet and ErrorLog for details.", vbInformation
    
    ' Clean up and exit
    Set dataWs = Nothing
    Set summaryWs = Nothing
    Exit Sub
    
ErrorHandler:
    ' Handle unexpected errors
    MsgBox "Critical error: " & Err.Description, vbCritical, "Error " & Err.Number
    Call LogError(Err.Number, Err.Description, "ProcessData")
    
    ' Clean up
    Set dataWs = Nothing
    Set summaryWs = Nothing
    Exit Sub
End Sub`}
                  </pre>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Debugging Tips</h4>
                <ul className="list-disc pl-6 space-y-2 text-sm text-blue-800 dark:text-blue-300">
                  <li>Add <code >Debug.Print</code>
                  statements to track execution flow and variable values</li>
                  <li>Use breakpoints to pause execution at critical points</li>
                  <li>Check the Immediate Window (Ctrl+G) for output from Debug.Print</li>
                  <li>Use the Watch window to monitor variables during execution</li>
                  <li>Test with various data scenarios to ensure your error handling is robust</li>
                </ul>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Bonus Challenges</h4>
                <ul className="list-disc pl-6 space-y-2 text-sm text-blue-800 dark:text-blue-300">
                  <li>Add a custom error dialog with options to retry, ignore, or abort</li>
                  <li>Implement data recovery for corrupted entries</li>
                  <li>Create a visual indicator (status bar or userform) for processing progress</li>
                  <li>Add an option to email the error log to an administrator</li>
                  <li>Implement a centralized error handling module for an entire application</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps Button */}
      <div className="flex justify-end mt-8">
        <Button variant="default" className="gap-2" onClick={onContinue}>
          <span>Continue to Next Lesson</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
