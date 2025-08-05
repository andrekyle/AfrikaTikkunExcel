import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Database, ArrowRight, FileText, RefreshCw, Download, Upload, AlertTriangle, CheckCircle } from 'lucide-react';
import CopyableContent from '@/components/CopyableContent';

interface VBADatabaseConnectivityLessonProps {
  onContinue?: () => void;
}

const VBADatabaseConnectivityLesson: React.FC<VBADatabaseConnectivityLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
          <Database className="w-5 h-5" />
          <span className="font-semibold">VBA Lesson 8</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Database Connectivity</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect VBA to databases and external data sources for powerful data integration and synchronization
        </p>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Database Operations</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Connect to SQL Server, Access, and MySQL</li>
                <li>• Execute SELECT, INSERT, UPDATE, DELETE queries</li>
                <li>• Handle database connections and transactions</li>
                <li>• Work with recordsets and data retrieval</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Data Integration</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Import data from external sources</li>
                <li>• Export Excel data to databases</li>
                <li>• Create automated data synchronization</li>
                <li>• Build real-time data dashboards</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Database Connection Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" />
            Database Connection Methods
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">ADO (ActiveX Data Objects)</h4>
              <p className="text-sm text-gray-600">Modern, flexible method for database connectivity with excellent performance</p>
              <Badge variant="secondary" className="mt-2">Recommended</Badge>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">ODBC (Open Database Connectivity)</h4>
              <p className="text-sm text-gray-600">Universal standard for connecting to various database systems</p>
              <Badge variant="outline" className="mt-2">Universal</Badge>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">OLE DB</h4>
              <p className="text-sm text-gray-600">Microsoft's strategic system-level programming interface for data access</p>
              <Badge variant="outline" className="mt-2">Legacy</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: SQL Server Connection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-600" />
            Project 1: SQL Server Database Connection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Learn to connect to SQL Server databases and execute queries with proper error handling.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Sample Employee Database Schema</h4>
              <CopyableContent 
                content={`-- Create Employees table
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY IDENTITY(1,1),
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    Department NVARCHAR(50),
    Salary DECIMAL(10,2),
    HireDate DATE,
    Email NVARCHAR(100)
);

-- Insert sample data
INSERT INTO Employees (FirstName, LastName, Department, Salary, HireDate, Email) VALUES
('John', 'Smith', 'Sales', 55000.00, '2023-01-15', 'john.smith@company.com'),
('Sarah', 'Johnson', 'Marketing', 62000.00, '2022-11-20', 'sarah.johnson@company.com'),
('Mike', 'Davis', 'IT', 75000.00, '2023-03-10', 'mike.davis@company.com'),
('Emily', 'Brown', 'HR', 58000.00, '2022-09-05', 'emily.brown@company.com'),
('David', 'Wilson', 'Finance', 68000.00, '2023-02-28', 'david.wilson@company.com');`}
                label="SQL Database Schema"
              >
                <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
                  <code>{`-- Create Employees table
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY IDENTITY(1,1),
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    Department NVARCHAR(50),
    Salary DECIMAL(10,2),
    HireDate DATE,
    Email NVARCHAR(100)
);

-- Insert sample data
INSERT INTO Employees (FirstName, LastName, Department, Salary, HireDate, Email) VALUES
('John', 'Smith', 'Sales', 55000.00, '2023-01-15', 'john.smith@company.com'),
('Sarah', 'Johnson', 'Marketing', 62000.00, '2022-11-20', 'sarah.johnson@company.com'),
('Mike', 'Davis', 'IT', 75000.00, '2023-03-10', 'mike.davis@company.com'),
('Emily', 'Brown', 'HR', 58000.00, '2022-09-05', 'emily.brown@company.com'),
('David', 'Wilson', 'Finance', 68000.00, '2023-02-28', 'david.wilson@company.com');`}</code>
                </pre>
              </CopyableContent>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">VBA SQL Server Connection Code</h4>
              <CopyableContent 
                content={`Sub ConnectToSQLServer()
    Dim conn As Object
    Dim rs As Object
    Dim connectionString As String
    Dim sql As String
    Dim ws As Worksheet
    Dim i As Long
    
    ' Set up worksheet
    Set ws = ThisWorkbook.Worksheets("EmployeeData")
    ws.Cells.Clear
    
    ' Create ADO connection
    Set conn = CreateObject("ADODB.Connection")
    Set rs = CreateObject("ADODB.Recordset")
    
    ' Connection string (modify server, database, credentials)
    connectionString = "Provider=SQLOLEDB;Data Source=YourServer;" & _
                      "Initial Catalog=YourDatabase;Integrated Security=SSPI;"
    
    On Error GoTo ErrorHandler
    
    ' Open connection
    conn.Open connectionString
    Debug.Print "Connected to SQL Server successfully!"
    
    ' SQL query to retrieve employee data
    sql = "SELECT EmployeeID, FirstName, LastName, Department, Salary, HireDate, Email FROM Employees ORDER BY Department, LastName"
    
    ' Execute query
    rs.Open sql, conn
    
    ' Add headers
    ws.Cells(1, 1).Value = "Employee ID"
    ws.Cells(1, 2).Value = "First Name"
    ws.Cells(1, 3).Value = "Last Name"
    ws.Cells(1, 4).Value = "Department"
    ws.Cells(1, 5).Value = "Salary"
    ws.Cells(1, 6).Value = "Hire Date"
    ws.Cells(1, 7).Value = "Email"
    
    ' Format headers
    With ws.Range("A1:G1")
        .Font.Bold = True
        .Interior.Color = RGB(200, 200, 200)
    End With
    
    ' Populate data
    i = 2
    Do While Not rs.EOF
        ws.Cells(i, 1).Value = rs("EmployeeID")
        ws.Cells(i, 2).Value = rs("FirstName")
        ws.Cells(i, 3).Value = rs("LastName")
        ws.Cells(i, 4).Value = rs("Department")
        ws.Cells(i, 5).Value = rs("Salary")
        ws.Cells(i, 6).Value = rs("HireDate")
        ws.Cells(i, 7).Value = rs("Email")
        
        rs.MoveNext
        i = i + 1
    Loop
    
    ' Format salary column as currency
    ws.Columns(5).NumberFormat = "$#,##0.00"
    
    ' Auto-fit columns
    ws.Columns.AutoFit
    
    ' Close connections
    rs.Close
    conn.Close
    
    MsgBox "Employee data imported successfully! " & (i - 2) & " records loaded."
    
    Exit Sub
    
ErrorHandler:
    MsgBox "Error connecting to database: " & Err.Description
    If Not rs Is Nothing Then If rs.State = 1 Then rs.Close
    If Not conn Is Nothing Then If conn.State = 1 Then conn.Close
End Sub`}
                label="SQL Server Connection VBA Code"
              >
                <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
                  <code>{`Sub ConnectToSQLServer()
    Dim conn As Object
    Dim rs As Object
    Dim connectionString As String
    Dim sql As String
    Dim ws As Worksheet
    Dim i As Long
    
    ' Set up worksheet
    Set ws = ThisWorkbook.Worksheets("EmployeeData")
    ws.Cells.Clear
    
    ' Create ADO connection
    Set conn = CreateObject("ADODB.Connection")
    Set rs = CreateObject("ADODB.Recordset")
    
    ' Connection string (modify server, database, credentials)
    connectionString = "Provider=SQLOLEDB;Data Source=YourServer;" & _
                      "Initial Catalog=YourDatabase;Integrated Security=SSPI;"
    
    On Error GoTo ErrorHandler
    
    ' Open connection
    conn.Open connectionString
    Debug.Print "Connected to SQL Server successfully!"
    
    ' SQL query to retrieve employee data
    sql = "SELECT EmployeeID, FirstName, LastName, Department, Salary, HireDate, Email FROM Employees ORDER BY Department, LastName"
    
    ' Execute query
    rs.Open sql, conn
    
    ' Add headers and populate data...
    ' (Code continues with data processing)
    
ErrorHandler:
    MsgBox "Error connecting to database: " & Err.Description
    If Not rs Is Nothing Then If rs.State = 1 Then rs.Close
    If Not conn Is Nothing Then If conn.State = 1 Then conn.Close
End Sub`}</code>
                </pre>
              </CopyableContent>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 2: Data Export */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-blue-600" />
            Project 2: Export Excel Data to Database
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Learn to export Excel data to databases with validation and error handling.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Sample Excel Data for Export</h4>
              <CopyableContent 
                content={`FirstName\tLastName\tDepartment\tSalary\tHireDate\tEmail
Jennifer\tGarcia\tMarketing\t64000\t2024-01-10\tjennifer.garcia@company.com
Robert\tMartinez\tSales\t59000\t2024-02-15\trobert.martinez@company.com
Lisa\tAnderson\tIT\t78000\t2024-01-20\tlisa.anderson@company.com
Kevin\tTaylor\tFinance\t71000\t2024-03-05\tkevin.taylor@company.com
Amanda\tThomas\tHR\t61000\t2024-02-28\tamanda.thomas@company.com`}
                label="Sample Export Data"
              >
                <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
                  <code>{`FirstName\tLastName\tDepartment\tSalary\tHireDate\tEmail
Jennifer\tGarcia\tMarketing\t64000\t2024-01-10\tjennifer.garcia@company.com
Robert\tMartinez\tSales\t59000\t2024-02-15\trobert.martinez@company.com
Lisa\tAnderson\tIT\t78000\t2024-01-20\tlisa.anderson@company.com
Kevin\tTaylor\tFinance\t71000\t2024-03-05\tkevin.taylor@company.com
Amanda\tThomas\tHR\t61000\t2024-02-28\tamanda.thomas@company.com`}</code>
                </pre>
              </CopyableContent>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">VBA Data Export Code</h4>
              <CopyableContent 
                content={`Sub ExportToDatabase()
    Dim conn As Object
    Dim ws As Worksheet
    Dim connectionString As String
    Dim sql As String
    Dim lastRow As Long
    Dim i As Long
    Dim recordsInserted As Long
    
    ' Set up worksheet
    Set ws = ThisWorkbook.Worksheets("NewEmployees")
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
    
    If lastRow < 2 Then
        MsgBox "No data to export!"
        Exit Sub
    End If
    
    ' Create ADO connection
    Set conn = CreateObject("ADODB.Connection")
    
    ' Connection string
    connectionString = "Provider=SQLOLEDB;Data Source=YourServer;" & _
                      "Initial Catalog=YourDatabase;Integrated Security=SSPI;"
    
    On Error GoTo ErrorHandler
    
    ' Open connection
    conn.Open connectionString
    Debug.Print "Connected to database for export"
    
    ' Begin transaction for data integrity
    conn.BeginTrans
    
    recordsInserted = 0
    
    ' Loop through Excel data (starting from row 2, skipping headers)
    For i = 2 To lastRow
        ' Validate required fields
        If ws.Cells(i, 1).Value <> "" And ws.Cells(i, 2).Value <> "" Then
            ' Build INSERT statement with parameters
            sql = "INSERT INTO Employees (FirstName, LastName, Department, Salary, HireDate, Email) VALUES (" & _
                  "'" & Replace(ws.Cells(i, 1).Value, "'", "''") & "', " & _
                  "'" & Replace(ws.Cells(i, 2).Value, "'", "''") & "', " & _
                  "'" & Replace(ws.Cells(i, 3).Value, "'", "''") & "', " & _
                  ws.Cells(i, 4).Value & ", " & _
                  "'" & Format(ws.Cells(i, 5).Value, "yyyy-mm-dd") & "', " & _
                  "'" & Replace(ws.Cells(i, 6).Value, "'", "''") & "')"
            
            ' Execute INSERT
            conn.Execute sql
            recordsInserted = recordsInserted + 1
            
            ' Mark row as processed
            ws.Cells(i, 8).Value = "Exported"
            ws.Cells(i, 8).Interior.Color = RGB(144, 238, 144) ' Light green
        Else
            ' Mark invalid rows
            ws.Cells(i, 8).Value = "Invalid Data"
            ws.Cells(i, 8).Interior.Color = RGB(255, 182, 193) ' Light red
        End If
    Next i
    
    ' Commit transaction
    conn.CommitTrans
    
    ' Close connection
    conn.Close
    
    MsgBox "Export completed successfully! " & recordsInserted & " records inserted."
    
    Exit Sub
    
ErrorHandler:
    ' Rollback transaction on error
    If Not conn Is Nothing Then
        If conn.State = 1 Then
            conn.RollbackTrans
            conn.Close
        End If
    End If
    
    MsgBox "Error during export: " & Err.Description & vbCrLf & _
           "Transaction rolled back. No data was inserted."
End Sub`}
                label="Data Export VBA Code"
              >
                <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
                  <code>{`Sub ExportToDatabase()
    Dim conn As Object
    Dim ws As Worksheet
    Dim connectionString As String
    Dim sql As String
    Dim lastRow As Long
    Dim i As Long
    Dim recordsInserted As Long
    
    ' Set up worksheet
    Set ws = ThisWorkbook.Worksheets("NewEmployees")
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
    
    ' Create ADO connection and export data with validation
    ' (Full implementation with transaction handling)
    
ErrorHandler:
    ' Rollback transaction on error
    If Not conn Is Nothing Then
        If conn.State = 1 Then
            conn.RollbackTrans
            conn.Close
        End If
    End If
End Sub`}</code>
                </pre>
              </CopyableContent>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            Best Practices & Security
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Do's
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Use parameterized queries to prevent SQL injection</li>
                <li>• Always close connections and recordsets</li>
                <li>• Use transactions for data integrity</li>
                <li>• Implement proper error handling</li>
                <li>• Validate data before database operations</li>
                <li>• Use connection pooling for performance</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Don'ts
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Don't hardcode connection strings in code</li>
                <li>• Don't leave connections open unnecessarily</li>
                <li>• Don't ignore error handling</li>
                <li>• Don't use dynamic SQL without validation</li>
                <li>• Don't store passwords in plain text</li>
                <li>• Don't process large datasets without batching</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 p-4 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Database connectivity</strong> enables powerful data integration between Excel and external systems</li>
              <li>• <strong>ADO (ActiveX Data Objects)</strong> provides the most flexible and modern approach to database access</li>
              <li>• <strong>Transaction management</strong> ensures data integrity during complex operations</li>
              <li>• <strong>Proper error handling</strong> is essential for robust database applications</li>
              <li>• <strong>Security practices</strong> like parameterized queries prevent SQL injection attacks</li>
              <li>• <strong>Connection management</strong> impacts performance and resource utilization</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Continue button */}
      <div className="flex justify-center pt-8">
        <Button 
          onClick={onContinue}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
        >
          Continue to Next Lesson
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default VBADatabaseConnectivityLesson;
