import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  FolderOpen,
  FileText,
  Copy,
  Search,
  Archive,
  HardDrive,
  AlertTriangle,
  CheckCircle,
  Code,
  Play,
  Database,
  Settings
} from "lucide-react";
import CopyableContent from "@/components/CopyableContent";

interface VBAFileSystemOperationsLessonProps {
  onContinue?: () => void;
}

const VBAFileSystemOperationsLesson: React.FC<VBAFileSystemOperationsLessonProps> = ({ onContinue }) => {
  // Sample data for file processing
  const sampleData = `Name,Department,Salary,Performance
John Smith,Sales,65000,Excellent
Sarah Johnson,Marketing,58000,Good
Mike Brown,IT,72000,Excellent
Lisa Davis,HR,55000,Good
Tom Wilson,Finance,68000,Very Good
Emma Taylor,Sales,62000,Good
David Lee,IT,75000,Excellent
Anna White,Marketing,59000,Good`;

  // VBA code examples
  const basicFileOperationsCode = `' Basic File System Operations in VBA

Sub BasicFileOperations()
    Dim filePath As String
    Dim folderPath As String
    Dim fileName As String
    
    ' Set file and folder paths
    folderPath = "C:\\ExcelAutomation\\"
    fileName = "ProcessedData.txt"
    filePath = folderPath & fileName
    
    ' Check if folder exists, create if not
    If Dir(folderPath, vbDirectory) = "" Then
        MkDir folderPath
        Debug.Print "Folder created: " & folderPath
    End If
    
    ' Check if file exists
    If Dir(filePath) <> "" Then
        Debug.Print "File exists: " & filePath
    Else
        Debug.Print "File does not exist: " & filePath
    End If
    
    ' Get file information
    If Dir(filePath) <> "" Then
        Debug.Print "File size: " & FileLen(filePath) & " bytes"
        Debug.Print "File date: " & FileDateTime(filePath)
    End If
End Sub`;

  const readWriteFileCode = `' Reading and Writing Files

Sub WriteDataToFile()
    Dim filePath As String
    Dim fileNum As Integer
    Dim ws As Worksheet
    Dim lastRow As Long
    Dim i As Long
    
    Set ws = ActiveSheet
    filePath = "C:\\ExcelAutomation\\ExportedData.csv"
    
    ' Get next available file number
    fileNum = FreeFile
    
    ' Open file for writing
    Open filePath For Output As #fileNum
    
    ' Write header
    Print #fileNum, "Name,Department,Salary,Status"
    
    ' Write data from worksheet
    lastRow = ws.Cells(ws.Rows.Count, "A").End(xlUp).Row
    
    For i = 2 To lastRow ' Skip header row
        Print #fileNum, ws.Cells(i, 1).Value & "," & _
                       ws.Cells(i, 2).Value & "," & _
                       ws.Cells(i, 3).Value & "," & _
                       "Processed"
    Next i
    
    ' Close file
    Close #fileNum
    
    MsgBox "Data exported to: " & filePath
End Sub

Sub ReadDataFromFile()
    Dim filePath As String
    Dim fileNum As Integer
    Dim textLine As String
    Dim dataArray() As String
    Dim ws As Worksheet
    Dim row As Long
    
    Set ws = ActiveSheet
    filePath = "C:\\ExcelAutomation\\ImportData.csv"
    
    ' Check if file exists
    If Dir(filePath) = "" Then
        MsgBox "File not found: " & filePath
        Exit Sub
    End If
    
    fileNum = FreeFile
    row = 1
    
    ' Open file for reading
    Open filePath For Input As #fileNum
    
    ' Clear existing data
    ws.Cells.Clear
    
    ' Read file line by line
    Do While Not EOF(fileNum)
        Line Input #fileNum, textLine
        
        ' Split CSV line
        dataArray = Split(textLine, ",")
        
        ' Write to worksheet
        Dim col As Long
        For col = 0 To UBound(dataArray)
            ws.Cells(row, col + 1).Value = dataArray(col)
        Next col
        
        row = row + 1
    Loop
    
    ' Close file
    Close #fileNum
    
    MsgBox "Data imported from: " & filePath
End Sub`;

  const fileProcessingAutomationCode = `' Advanced File Processing Automation

Sub ProcessMultipleFiles()
    Dim folderPath As String
    Dim fileName As String
    Dim filePath As String
    Dim processedCount As Long
    Dim errorCount As Long
    
    folderPath = "C:\\DataFiles\\"
    fileName = Dir(folderPath & "*.xlsx")
    
    ' Create results folder
    If Dir(folderPath & "Processed\\", vbDirectory) = "" Then
        MkDir folderPath & "Processed\\"
    End If
    
    ' Process each Excel file
    Do While fileName <> ""
        filePath = folderPath & fileName
        
        On Error GoTo ErrorHandler
        
        ' Process individual file
        If ProcessSingleFile(filePath) Then
            processedCount = processedCount + 1
            
            ' Move processed file
            Name filePath As folderPath & "Processed\\" & fileName
        Else
            errorCount = errorCount + 1
        End If
        
        fileName = Dir() ' Get next file
    Loop
    
    ' Show results
    MsgBox "Processing complete!" & vbNewLine & _
           "Files processed: " & processedCount & vbNewLine & _
           "Errors: " & errorCount
    
    Exit Sub
    
ErrorHandler:
    errorCount = errorCount + 1
    Resume Next
End Sub

Function ProcessSingleFile(filePath As String) As Boolean
    Dim wb As Workbook
    Dim ws As Worksheet
    Dim lastRow As Long
    Dim i As Long
    Dim outputPath As String
    
    On Error GoTo ErrorHandler
    
    ' Open workbook
    Set wb = Workbooks.Open(filePath, ReadOnly:=True)
    Set ws = wb.Sheets(1)
    
    ' Find last row with data
    lastRow = ws.Cells(ws.Rows.Count, "A").End(xlUp).Row
    
    ' Process data (example: add calculated column)
    For i = 2 To lastRow
        If IsNumeric(ws.Cells(i, 3).Value) Then
            ' Add 10% bonus calculation
            ws.Cells(i, 5).Value = ws.Cells(i, 3).Value * 0.1
            ws.Cells(i, 5).NumberFormat = "$#,##0.00"
        End If
    Next i
    
    ' Add header for new column
    ws.Cells(1, 5).Value = "Bonus"
    ws.Cells(1, 5).Font.Bold = True
    
    ' Save processed file
    outputPath = Replace(filePath, ".xlsx", "_Processed.xlsx")
    wb.SaveAs outputPath
    wb.Close
    
    ProcessSingleFile = True
    Exit Function
    
ErrorHandler:
    If Not wb Is Nothing Then wb.Close False
    ProcessSingleFile = False
End Function`;

  const backupSystemCode = `' Automated Backup and File Organization

Sub CreateBackupSystem()
    Dim sourceFolder As String
    Dim backupFolder As String
    Dim fileName As String
    Dim dateStamp As String
    
    sourceFolder = "C:\\ImportantFiles\\"
    dateStamp = Format(Now, "yyyy-mm-dd")
    backupFolder = "C:\\Backups\\" & dateStamp & "\\"
    
    ' Create backup folder
    If Dir("C:\\Backups\\", vbDirectory) = "" Then MkDir "C:\\Backups\\"
    If Dir(backupFolder, vbDirectory) = "" Then MkDir backupFolder
    
    fileName = Dir(sourceFolder & "*.*")
    
    Do While fileName <> ""
        ' Copy file to backup location
        FileCopy sourceFolder & fileName, backupFolder & fileName
        fileName = Dir()
    Loop
    
    ' Create backup log
    Dim logFile As Integer
    logFile = FreeFile
    Open backupFolder & "backup_log.txt" For Output As #logFile
    Print #logFile, "Backup created: " & Now
    Print #logFile, "Source: " & sourceFolder
    Close #logFile
    
    MsgBox "Backup completed: " & backupFolder
End Sub

Sub OrganizeFilesByType()
    Dim sourceFolder As String
    Dim fileName As String
    Dim fileExt As String
    Dim destFolder As String
    
    sourceFolder = "C:\\Downloads\\"
    fileName = Dir(sourceFolder & "*.*")
    
    Do While fileName <> ""
        ' Get file extension
        fileExt = LCase(Right(fileName, Len(fileName) - InStrRev(fileName, ".")))
        
        ' Determine destination folder
        Select Case fileExt
            Case "xlsx", "xls", "xlsm"
                destFolder = sourceFolder & "Excel\\"
            Case "pdf"
                destFolder = sourceFolder & "PDFs\\"
            Case "txt", "csv"
                destFolder = sourceFolder & "TextFiles\\"
            Case Else
                destFolder = sourceFolder & "Others\\"
        End Select
        
        ' Create destination folder if it doesn't exist
        If Dir(destFolder, vbDirectory) = "" Then
            MkDir destFolder
        End If
        
        ' Move file
        On Error Resume Next
        Name sourceFolder & fileName As destFolder & fileName
        On Error GoTo 0
        
        fileName = Dir()
    Loop
    
    MsgBox "Files organized successfully!"
End Sub`;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <Card className="border-l-4 border-l-excel-blue">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-3">
                <HardDrive className="h-8 w-8 text-excel-blue" />
                VBA File System Operations
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                Master file and folder manipulation with VBA automation
              </CardDescription>
            </div>
            <Badge variant="secondary" className="text-sm">
              Lesson 7 • VBA Fundamentals
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success-green" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-excel-blue" />
                <span>Read and write files programmatically</span>
              </div>
              <div className="flex items-center gap-2">
                <FolderOpen className="h-4 w-4 text-excel-blue" />
                <span>Create and manage folders</span>
              </div>
              <div className="flex items-center gap-2">
                <Copy className="h-4 w-4 text-excel-blue" />
                <span>Copy, move, and rename files</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-excel-blue" />
                <span>Search and filter files by criteria</span>
              </div>
              <div className="flex items-center gap-2">
                <Archive className="h-4 w-4 text-excel-blue" />
                <span>Build automated backup systems</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-excel-blue" />
                <span>Implement robust error handling</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: Basic File Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5 text-success-green" />
            Project 1: Basic File Operations
          </CardTitle>
          <CardDescription>
            Learn fundamental file system operations with VBA
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Sample Employee Data</h4>
            <p className="text-sm text-gray-600 mb-3">
              Copy this data to cells A1:D9 in your Excel worksheet:
            </p>
            <CopyableContent content={sampleData} label="Employee Data">
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
{sampleData}
              </pre>
            </CopyableContent>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Basic File Operations Code</h4>
            <p className="text-sm text-gray-600 mb-3">
              Learn to check file existence, create folders, and get file information:
            </p>
            <CopyableContent content={basicFileOperationsCode} label="Basic File Operations">
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
{basicFileOperationsCode}
              </pre>
            </CopyableContent>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Try This:</h4>
            <ol className="text-sm text-blue-700 space-y-1">
              <li>1. Run the BasicFileOperations subroutine</li>
              <li>2. Check the Immediate Window (Ctrl+G) for output</li>
              <li>3. Verify that the folder was created on your C: drive</li>
              <li>4. Modify the folder path to match your system</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Project 2: Reading and Writing Files */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-learning-orange" />
            Project 2: File Read/Write Operations
          </CardTitle>
          <CardDescription>
            Export Excel data to files and import data from external files
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">File I/O Implementation</h4>
            <p className="text-sm text-gray-600 mb-3">
              Complete file reading and writing functionality with error handling:
            </p>
            <CopyableContent content={readWriteFileCode} label="File Read/Write Code">
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
{readWriteFileCode}
              </pre>
            </CopyableContent>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Implementation Steps:</h4>
            <ol className="text-sm text-green-700 space-y-1">
              <li>1. Add the sample employee data to your worksheet</li>
              <li>2. Run WriteDataToFile to export data to CSV</li>
              <li>3. Create a new worksheet and run ReadDataFromFile</li>
              <li>4. Verify the data import functionality</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Project 3: Advanced File Processing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-accent" />
            Project 3: Batch File Processing Automation
          </CardTitle>
          <CardDescription>
            Build an automated system to process multiple files
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Automated File Processing System</h4>
            <p className="text-sm text-gray-600 mb-3">
              Process multiple Excel files automatically with validation:
            </p>
            <CopyableContent content={fileProcessingAutomationCode} label="File Processing Automation">
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
{fileProcessingAutomationCode}
              </pre>
            </CopyableContent>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">Advanced Features:</h4>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• Batch processing of multiple files</li>
              <li>• Automatic file organization and archiving</li>
              <li>• Error handling and recovery mechanisms</li>
              <li>• Progress tracking and reporting</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Project 4: Backup and Organization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Archive className="h-5 w-5 text-excel-green" />
            Project 4: Smart Backup & Organization
          </CardTitle>
          <CardDescription>
            Create automated backup systems and file organization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Backup and Organization System</h4>
            <p className="text-sm text-gray-600 mb-3">
              Automatically organize files by type and create systematic backups:
            </p>
            <CopyableContent content={backupSystemCode} label="Backup System">
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
{backupSystemCode}
              </pre>
            </CopyableContent>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Key Features:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Automatic file type detection and sorting</li>
              <li>• Date-stamped backup creation</li>
              <li>• Backup logging and verification</li>
              <li>• Customizable organization rules</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success-green" />
            Key Takeaways & Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-success-green">Best Practices</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                  <span>Always check file existence before operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                  <span>Use FreeFile for file number management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                  <span>Implement comprehensive error handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                  <span>Create backups before modifying files</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-red-600">Common Pitfalls</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't hardcode file paths without validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't leave files open after operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't process files without permission checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore error handling in file operations</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      <div className="flex justify-center pt-6">
        <Button 
          onClick={onContinue}
          className="bg-excel-blue hover:bg-excel-blue/90 text-white px-8 py-3 text-lg"
        >
          Continue to Next Lesson
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default VBAFileSystemOperationsLesson;
