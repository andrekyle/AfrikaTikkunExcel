Attribute VB_Name = "DatabaseAPIConnection"
Option Explicit

' Reference: Microsoft ActiveX Data Objects 6.1 Library
' To add reference: Tools > References > Microsoft ActiveX Data Objects 6.1 Library

' Database Connection Example
Sub ConnectToSQLServer()
    Dim conn As ADODB.Connection
    Dim rs As ADODB.Recordset
    Dim sql As String
    Dim outputSheet As Worksheet
    
    ' Set up the connection
    Set conn = New ADODB.Connection
    conn.ConnectionString = "Provider=SQLOLEDB;Data Source=YOUR_SERVER;Initial Catalog=SalesAnalytics;Integrated Security=SSPI;"
    
    On Error Resume Next
    conn.Open
    If Err.Number <> 0 Then
        MsgBox "Connection failed: " & Err.Description
        Exit Sub
    End If
    On Error GoTo 0
    
    ' Create SQL query
    sql = "SELECT * FROM SalesByProduct ORDER BY TotalSales DESC"
    
    ' Execute the query
    Set rs = New ADODB.Recordset
    rs.Open sql, conn
    
    ' Set up the output sheet
    Set outputSheet = ThisWorkbook.Sheets("Data")
    outputSheet.Cells.Clear
    
    ' Copy field names to the first row
    Dim i As Integer
    For i = 0 To rs.Fields.Count - 1
        outputSheet.Cells(1, i + 1).Value = rs.Fields(i).Name
    Next i
    
    ' Copy data starting from the second row
    outputSheet.Range("A2").CopyFromRecordset rs
    
    ' Close the connection
    rs.Close
    conn.Close
    Set rs = Nothing
    Set conn = Nothing
    
    MsgBox "Data imported successfully!"
End Sub

' API Connection Example
Sub GetDataFromAPI()
    Dim httpRequest As Object
    Dim responseText As String
    Dim apiUrl As String
    Dim outputSheet As Worksheet
    
    ' Create HTTP request object
    Set httpRequest = CreateObject("MSXML2.XMLHTTP")
    
    ' API endpoint (example using JSONPlaceholder API)
    apiUrl = "https://jsonplaceholder.typicode.com/users"
    
    ' Open connection and send request
    httpRequest.Open "GET", apiUrl, False
    httpRequest.setRequestHeader "Content-Type", "application/json"
    httpRequest.send
    
    ' Check if request was successful
    If httpRequest.Status = 200 Then
        responseText = httpRequest.responseText
        
        ' Process the JSON response (requires JSON parsing library)
        ' This is a simplified example to show the concept
        Set outputSheet = ThisWorkbook.Sheets("APIData")
        outputSheet.Cells.Clear
        outputSheet.Cells(1, 1).Value = "API Response:"
        outputSheet.Cells(2, 1).Value = Left(responseText, 32000)  ' Excel cell has 32,767 character limit
    Else
        MsgBox "API request failed with status: " & httpRequest.Status
    End If
    
    Set httpRequest = Nothing
End Sub

' Integrated Pipeline Example
Sub RunIntegrationPipeline()
    ' Step 1: Get data from SQL database
    Call ConnectToSQLServer
    
    ' Step 2: Get data from API
    Call GetDataFromAPI
    
    ' Step 3: Process and combine the data
    Call ProcessCombinedData
    
    MsgBox "Integration pipeline completed successfully!"
End Sub

Private Sub ProcessCombinedData()
    ' This is a placeholder for data processing logic
    ' In a real application, you would combine and transform data here
    
    Dim dbSheet As Worksheet
    Dim apiSheet As Worksheet
    Dim outputSheet As Worksheet
    
    Set dbSheet = ThisWorkbook.Sheets("Data")
    Set apiSheet = ThisWorkbook.Sheets("APIData")
    Set outputSheet = ThisWorkbook.Sheets("Combined")
    
    ' Clear destination sheet
    outputSheet.Cells.Clear
    
    ' Add header
    outputSheet.Cells(1, 1).Value = "Integrated Data Pipeline Results"
    outputSheet.Cells(1, 1).Font.Bold = True
    
    ' Example of copying some data (in real application, would do more processing)
    outputSheet.Cells(3, 1).Value = "Data from Database:"
    outputSheet.Cells(3, 1).Font.Bold = True
    
    If Not IsEmpty(dbSheet.Cells(1, 1).Value) Then
        dbSheet.Range("A1:D10").Copy outputSheet.Range("A4")
    End If
    
    outputSheet.Cells(15, 1).Value = "Data from API:"
    outputSheet.Cells(15, 1).Font.Bold = True
    
    If Not IsEmpty(apiSheet.Cells(1, 1).Value) Then
        apiSheet.Range("A1:A2").Copy outputSheet.Range("A16")
    End If
End Sub
