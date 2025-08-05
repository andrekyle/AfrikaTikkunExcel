import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Download, RefreshCw, Clock, Database, Bot, Globe, Code, Zap } from "lucide-react";
import SampleDataTables from "@/components/SampleDataTables";

const DatabaseAPIIntegrationExercise = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  const totalSteps = 4;

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetExercise = () => {
    setCurrentStep(1);
    setCompleted(false);
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <Database className="h-5 w-5 text-blue-600" /> Integration with Other Tools
        </h3>
        <p className="text-sm text-muted-foreground mt-1">Learn how to connect Excel with external data sources like databases and APIs to create powerful data integration pipelines.
        </p>
      </div>

      {/* Sample Data */}
      <SampleDataTables />

      {/* Exercise Overview */}
      <div className="bg-muted/30 p-4 rounded-lg">
        <h4 className="font-medium mb-3">What You'll Build</h4>
        <p className="text-sm mb-4">In this exercise, you'll create a comprehensive data integration system that pulls information from databases and web APIs,
          transforms it in Excel, and creates a dynamic reporting dashboard—all updated with a single click.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="flex items-center gap-2 font-medium mb-2">
              <Database className="h-4 w-4 text-blue-600" />
              Database Integration
            </div>
            <p className="text-xs text-muted-foreground">Connect Excel directly to SQL databases to import and analyze large datasets.
            </p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="flex items-center gap-2 font-medium mb-2">
              <Globe className="h-4 w-4 text-blue-600" />
              API Connections
            </div>
            <p className="text-xs text-muted-foreground">Pull real-time data from web APIs using VBA and Power Query for up-to-date insights.
            </p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="flex items-center gap-2 font-medium mb-2">
              <Zap className="h-4 w-4 text-blue-600" />
              Automated Pipeline
            </div>
            <p className="text-xs text-muted-foreground">Build an end-to-end data pipeline that refreshes automatically on schedule.
            </p>
          </div>
        </div>
      </div>

      {completed ? (
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-green-800">Exercise Completed!</h3>
          <p className="text-sm text-green-700 mt-2 mb-6">Congratulations! You've built a powerful data integration pipeline that connects Excel with databases and APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={resetExercise} className="flex gap-2 items-center">
              <RefreshCw className="h-4 w-4" /> Start Over
            </Button>
            <Button asChild variant="outline" className="flex gap-2 items-center">
              <a href="/solutions/database-api/SalesAnalytics_Setup.sql" download>
                <Download className="h-4 w-4" /> Download Solution
              </a>
            </Button>
          </div>
        </div>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm font-medium">
                {currentStep}
              </div>
              <h3 className="font-medium">Step {currentStep} of {totalSteps}
              </h3>
            </div>
            <div className="text-sm text-muted-foreground">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </div>
          </div>

          <div className="p-6 space-y-6">
            {currentStep === 1 && (
              <>
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Database className="h-4 w-4 text-blue-600" /> Connecting to Databases
                </h4>
                <p className="text-sm">Let's start by establishing connections to external databases to import data into Excel.
                </p>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm">
                  <h5 className="font-medium">Step 1a: Set Up Database Connection with Power Query</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Create a new Excel workbook</li>
                    <li>Go to Data tab → Get Data → From Database → From SQL Server Database
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Enter server name and database credentials</li>
                        <li>Choose authentication method (Windows or SQL)</li>
                        <li>Select specific tables or write a custom SQL query</li>
                      </ul>
                    </li>
                    <li>Use Power Query Editor to:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Filter unnecessary data</li>
                        <li>Remove duplicate records</li>
                        <li>Standardize data formats</li>
                        <li>Combine multiple tables if needed</li>
                      </ul>
                    </li>
                    <li>Load the transformed data to a worksheet</li>
                    <li>Create an Excel Table (Ctrl+T) from the imported data</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm mt-4">
                  <h5 className="font-medium">Step 1b: Alternative Database Connection with VBA</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Open VBA Editor (Alt+F11)</li>
                    <li>Add reference to Microsoft ActiveX Data Objects:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Tools → References → Microsoft ActiveX Data Objects (latest version)</li>
                      </ul>
                    </li>
                    <li>Create a new module with this sample code:
                      <pre className="bg-slate-800 text-slate-50 p-3 rounded-md text-xs mt-2 overflow-x-auto">
{`Sub ConnectToDatabase()
    Dim conn As ADODB.Connection
    Dim rs As ADODB.Recordset
    Dim sql As String
    Dim ws As Worksheet
    
    ' Create connection
    Set conn = New ADODB.Connection
    conn.ConnectionString = "Provider=SQLOLEDB;Data Source=ServerName;" & _
                           "Initial Catalog=DatabaseName;" & _
                           "Integrated Security=SSPI;"
    conn.Open
    
    ' Execute SQL query
    sql = "SELECT * FROM Customers WHERE Region='North'"
    Set rs = conn.Execute(sql)
    
    ' Set target worksheet
    Set ws = ThisWorkbook.Sheets("Data")
    ws.Cells.Clear
    
    ' Write headers
    Dim i As Integer
    For i = 0 To rs.Fields.Count - 1
        ws.Cells(1, i + 1).Value = rs.Fields(i).Name
    Next i
    
    ' Write data
    ws.Range("A2").CopyFromRecordset rs
    
    ' Clean up
    rs.Close
    conn.Close
    Set rs = Nothing
    Set conn = Nothing
    
    MsgBox "Data imported successfully", vbInformation
End Sub`}
                      </pre>
                    </li>
                    <li>Customize the connection string for your specific database</li>
                    <li>Create a button on the worksheet to run this macro</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-3 rounded-md text-sm mt-4">
                  <p className="text-blue-700 font-medium">💡 Pro Tip:</p>
                  <p className="text-blue-600 text-xs">Store connection strings in a separate config sheet or environment variable for security. Never hardcode credentials in your VBA code for production environments.
                  </p>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Globe className="h-4 w-4 text-blue-600" /> Working with APIs
                </h4>
                <p className="text-sm">Now let's connect Excel to web APIs to fetch real-time data from online services.
                </p>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm">
                  <h5 className="font-medium">Step 2a: Power Query API Connection</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Go to Data tab → Get Data → From Other Sources → From Web</li>
                    <li>Enter the API endpoint URL (e.g., https://api.example.com/data)
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>For authenticated APIs, use Advanced dialog to add headers</li>
                        <li>Add Authentication header with your API key</li>
                      </ul>
                    </li>
                    <li>If the API returns JSON data:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Use Power Query to navigate the JSON structure</li>
                        <li>Convert JSON to tables using "To Table" operations</li>
                        <li>Expand nested arrays and objects as needed</li>
                      </ul>
                    </li>
                    <li>Apply transformations to format the data properly</li>
                    <li>Load the final dataset to your worksheet</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm mt-4">
                  <h5 className="font-medium">Step 2b: VBA for API Integration</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Create a new VBA module for API connections</li>
                    <li>Add this sample code for REST API calls:
                      <pre className="bg-slate-800 text-slate-50 p-3 rounded-md text-xs mt-2 overflow-x-auto">
{`Sub GetDataFromAPI()
    Dim request As Object
    Dim response As String
    Dim json As Object
    Dim ws As Worksheet
    Dim apiUrl As String
    Dim apiKey As String
    
    ' Set API details
    apiUrl = "https://api.example.com/data"
    apiKey = "YOUR_API_KEY"  ' Store this securely!
    
    ' Create HTTP request
    Set request = CreateObject("MSXML2.XMLHTTP")
    request.Open "GET", apiUrl, False
    request.setRequestHeader "Authorization", "Bearer " & apiKey
    request.setRequestHeader "Content-Type", "application/json"
    
    ' Send request
    request.Send
    
    ' Process response
    response = request.responseText
    
    ' Parse JSON (requires reference to Microsoft Script Control)
    Set json = ParseJson(response)
    
    ' Target worksheet
    Set ws = ThisWorkbook.Sheets("API_Data")
    ws.Cells.Clear
    
    ' Process and display data
    ' This will vary based on your specific API response structure
    ' Example assumes a simple array of objects with id and name properties
    ws.Range("A1").Value = "ID"
    ws.Range("B1").Value = "Name"
    
    For i = 0 To json("results").Count - 1
        ws.Cells(i + 2, 1).Value = json("results")(i)("id")
        ws.Cells(i + 2, 2).Value = json("results")(i)("name")
    Next i
    
    MsgBox "API data fetched successfully", vbInformation
End Sub

' Helper function to parse JSON (simplified)
Function ParseJson(jsonString As String) As Object
    ' In a real implementation, use a proper JSON parser library
    ' This is just a placeholder
    Set ParseJson = CreateObject("Scripting.Dictionary")
    ' Actual parsing code would go here
End Function`}
                      </pre>
                    </li>
                    <li>Add error handling for API timeouts and connection issues</li>
                    <li>Create a refresh button on your worksheet</li>
                    <li>Consider using a third-party JSON parser library for VBA</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-3 rounded-md text-sm mt-4">
                  <p className="text-blue-700 font-medium">🔑 API Key Management:</p>
                  <p className="text-blue-600 text-xs">For production applications, store API keys in a protected worksheet cell or use Windows Credential Manager. Consider implementing OAuth 2.0 for services that support it for more secure authentication.
                  </p>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Code className="h-4 w-4 text-blue-600" /> Building the Integration Pipeline
                </h4>
                <p className="text-sm">Let's create a unified data integration pipeline that combines multiple sources.
                </p>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm">
                  <h5 className="font-medium">Step 3a: Design the Integration Architecture</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Create dedicated worksheets for each data source:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>"DB_Raw" - for database data</li>
                        <li>"API_Raw" - for API data</li>
                        <li>"Transformed" - for combined and cleaned data</li>
                        <li>"Dashboard" - for final visualizations</li>
                      </ul>
                    </li>
                    <li>Create a control panel worksheet:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Add buttons for each individual data source refresh</li>
                        <li>Add a "Refresh All" button</li>
                        <li>Include status indicators for each connection</li>
                        <li>Add timestamp tracking for last refresh</li>
                      </ul>
                    </li>
                    <li>Establish data relationships:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Identify common keys between datasets</li>
                        <li>Plan transformation steps needed</li>
                        <li>Design output data model</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm mt-4">
                  <h5 className="font-medium">Step 3b: Implement the Pipeline with VBA</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Create a main orchestration module:
                      <pre className="bg-slate-800 text-slate-50 p-3 rounded-md text-xs mt-2 overflow-x-auto">
{`Sub RunFullPipeline()
    Application.ScreenUpdating = False
    Application.DisplayAlerts = False
    
    On Error GoTo ErrorHandler
    
    ' Update status indicators
    Range("StatusCell").Value = "Running..."
    
    ' Step 1: Import from database
    Call ConnectToDatabase
    
    ' Step 2: Import from API
    Call GetDataFromAPI
    
    ' Step 3: Transform and combine data
    Call TransformData
    
    ' Step 4: Refresh dashboard connections
    Call RefreshDashboard
    
    ' Update status and timestamp
    Range("StatusCell").Value = "Complete"
    Range("LastRunCell").Value = Now()
    
    Application.ScreenUpdating = True
    Application.DisplayAlerts = True
    Exit Sub
    
ErrorHandler:
    Range("StatusCell").Value = "Error: " & Err.Description
    Application.ScreenUpdating = True
    Application.DisplayAlerts = True
End Sub`}
                      </pre>
                    </li>
                    <li>Implement the TransformData procedure:
                      <pre className="bg-slate-800 text-slate-50 p-3 rounded-md text-xs mt-2 overflow-x-auto">
{`Sub TransformData()
    ' This procedure combines and transforms data from multiple sources
    ' Example assumes we're joining customer data from database with
    ' order data from an API based on customer ID
    
    Dim dbWs As Worksheet
    Dim apiWs As Worksheet
    Dim transformWs As Worksheet
    
    Set dbWs = ThisWorkbook.Sheets("DB_Raw")
    Set apiWs = ThisWorkbook.Sheets("API_Raw")
    Set transformWs = ThisWorkbook.Sheets("Transformed")
    
    ' Clear previous data
    transformWs.Cells.Clear
    
    ' Set up headers
    transformWs.Range("A1").Value = "CustomerID"
    transformWs.Range("B1").Value = "CustomerName"
    transformWs.Range("C1").Value = "OrderCount"
    transformWs.Range("D1").Value = "TotalValue"
    transformWs.Range("E1").Value = "LastOrderDate"
    
    ' Create dictionary for customer lookup
    ' (Simplified - in real code you'd implement this with a proper dictionary)
    
    ' Loop through both data sources and combine based on CustomerID
    ' This would be actual code to process your data
    
    ' Format the results as a Table
    transformWs.ListObjects.Add(xlSrcRange, transformWs.Range("A1").CurrentRegion, , xlYes).Name = "TransformedData"
End Sub`}
                      </pre>
                    </li>
                    <li>Create proper error handling and logging
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Log connection failures</li>
                        <li>Handle API timeouts gracefully</li>
                        <li>Implement data validation</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-3 rounded-md text-sm mt-4">
                  <p className="text-blue-700 font-medium">📊 Data Model Design:</p>
                  <p className="text-blue-600 text-xs">Consider using Power Pivot to create proper data models with relationships instead of manually joining data in VBA. This approach scales better with large datasets and enables more powerful analytics.
                  </p>
                </div>
              </>
            )}

            {currentStep === 4 && (
              <>
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-600" /> Automating and Scheduling Updates
                </h4>
                <p className="text-sm">Finally, let's set up automation to keep your data pipeline running on schedule.
                </p>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm">
                  <h5 className="font-medium">Step 4a: Implement Scheduled Refresh</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Create a Windows Task Scheduler task:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Program: Excel.exe</li>
                        <li>Arguments: /e /r "RunFullPipeline" "path/to/your/workbook.xlsm"</li>
                        <li>Set schedule (daily, hourly, etc.)</li>
                      </ul>
                    </li>
                    <li>Add notification options:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Email alerts on completion or failure</li>
                        <li>Log file generation</li>
                      </ul>
                    </li>
                    <li>For cloud-based solutions, consider:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Power Automate flows</li>
                        <li>Azure Automation</li>
                        <li>Microsoft 365 scripts</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm mt-4">
                  <h5 className="font-medium">Step 4b: Implement Advanced Features</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Add data versioning:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Save historical snapshots of data</li>
                        <li>Track changes over time</li>
                        <li>Implement audit trails</li>
                      </ul>
                    </li>
                    <li>Implement incremental refresh:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Only fetch new or changed records</li>
                        <li>Use timestamps or change tracking</li>
                        <li>Optimize for large datasets</li>
                      </ul>
                    </li>
                    <li>Add security features:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Encrypt sensitive data</li>
                        <li>Use secure storage for credentials</li>
                        <li>Implement access controls</li>
                      </ul>
                    </li>
                    <li>Create documentation:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Data dictionary for sources</li>
                        <li>Pipeline architecture diagram</li>
                        <li>Troubleshooting guide</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-3 rounded-md text-sm mt-4">
                  <p className="text-blue-700 font-medium">🚀 Advanced Challenge:</p>
                  <p className="text-blue-600 text-xs">Implement a hybrid solution that uses Power Query for initial data preparation and VBA for orchestration and custom business logic. This combines the strengths of both approaches – Power Query's excellent ETL capabilities with VBA's flexibility for custom workflows.
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-between p-4 bg-muted/30">
            <Button
              variant="outline"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
 >Previous Step
            </Button>
            <Button onClick={handleNextStep} className="flex gap-2 items-center">
              {currentStep === totalSteps ? "Complete" : "Next Step"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatabaseAPIIntegrationExercise;
