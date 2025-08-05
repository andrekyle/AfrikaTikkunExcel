import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Database, 
  Bot, 
  Settings, 
  Network,
  Shield,
  Zap,
  FileCode,
  BarChart3,
  CheckCircle
} from "lucide-react";
import CopyableContent from './CopyableContent';

const VBAAIArchitectureProjects: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Monitor className="h-5 w-5 text-learning-orange" />
          Hands-on Projects: AI-Powered Excel Architecture
        </CardTitle>
        <CardDescription>
          Build complete AI-integrated Excel solutions with proper architecture patterns
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        
        {/* Project 1: Smart Business Intelligence Dashboard */}
        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
            <h3 className="text-xl font-semibold text-blue-900">Smart Business Intelligence Dashboard</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <Badge variant="secondary" className="mb-2">Architecture Focus</Badge>
              <p className="text-sm text-muted-foreground">
                Service Layer Pattern, Cache Management, Error Handling
              </p>
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">AI Services</Badge>
              <p className="text-sm text-muted-foreground">
                OpenAI GPT-4, Azure Cognitive Services, Custom Analytics
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-white border border-blue-200 rounded">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Database className="h-4 w-4 text-blue-600" />
                Sample Business Data
              </h4>
              
              <CopyableContent 
                content={`Company	Department	Employee	Sales_Q1	Sales_Q2	Sales_Q3	Sales_Q4	Performance_Rating	Years_Experience
TechCorp	Sales	John Smith	125000	135000	142000	158000	Excellent	8
TechCorp	Marketing	Sarah Johnson	95000	102000	108000	115000	Good	5
TechCorp	Engineering	Mike Chen	180000	175000	190000	195000	Excellent	12
TechCorp	Sales	Lisa Brown	110000	118000	125000	132000	Good	6
TechCorp	HR	David Wilson	75000	78000	82000	85000	Fair	3
DataFlow	Sales	Emma Davis	98000	105000	112000	118000	Good	4
DataFlow	Marketing	James Miller	87000	92000	96000	103000	Good	7
DataFlow	Engineering	Anna Garcia	165000	170000	175000	182000	Excellent	10
DataFlow	Sales	Robert Taylor	115000	122000	128000	135000	Excellent	9
DataFlow	Operations	Jennifer Lee	92000	95000	98000	102000	Good	5`}
                label="Business Intelligence Data"
              >
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-2 py-1 text-left">Company</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Department</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Employee</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Sales_Q1</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Sales_Q2</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Sales_Q3</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Sales_Q4</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Performance</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Experience</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 px-2 py-1">TechCorp</td><td className="border border-gray-300 px-2 py-1">Sales</td><td className="border border-gray-300 px-2 py-1">John Smith</td><td className="border border-gray-300 px-2 py-1">125000</td><td className="border border-gray-300 px-2 py-1">135000</td><td className="border border-gray-300 px-2 py-1">142000</td><td className="border border-gray-300 px-2 py-1">158000</td><td className="border border-gray-300 px-2 py-1">Excellent</td><td className="border border-gray-300 px-2 py-1">8</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1">TechCorp</td><td className="border border-gray-300 px-2 py-1">Marketing</td><td className="border border-gray-300 px-2 py-1">Sarah Johnson</td><td className="border border-gray-300 px-2 py-1">95000</td><td className="border border-gray-300 px-2 py-1">102000</td><td className="border border-gray-300 px-2 py-1">108000</td><td className="border border-gray-300 px-2 py-1">115000</td><td className="border border-gray-300 px-2 py-1">Good</td><td className="border border-gray-300 px-2 py-1">5</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1">TechCorp</td><td className="border border-gray-300 px-2 py-1">Engineering</td><td className="border border-gray-300 px-2 py-1">Mike Chen</td><td className="border border-gray-300 px-2 py-1">180000</td><td className="border border-gray-300 px-2 py-1">175000</td><td className="border border-gray-300 px-2 py-1">190000</td><td className="border border-gray-300 px-2 py-1">195000</td><td className="border border-gray-300 px-2 py-1">Excellent</td><td className="border border-gray-300 px-2 py-1">12</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1">DataFlow</td><td className="border border-gray-300 px-2 py-1">Sales</td><td className="border border-gray-300 px-2 py-1">Emma Davis</td><td className="border border-gray-300 px-2 py-1">98000</td><td className="border border-gray-300 px-2 py-1">105000</td><td className="border border-gray-300 px-2 py-1">112000</td><td className="border border-gray-300 px-2 py-1">118000</td><td className="border border-gray-300 px-2 py-1">Good</td><td className="border border-gray-300 px-2 py-1">4</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1">DataFlow</td><td className="border border-gray-300 px-2 py-1">Engineering</td><td className="border border-gray-300 px-2 py-1">Anna Garcia</td><td className="border border-gray-300 px-2 py-1">165000</td><td className="border border-gray-300 px-2 py-1">170000</td><td className="border border-gray-300 px-2 py-1">175000</td><td className="border border-gray-300 px-2 py-1">182000</td><td className="border border-gray-300 px-2 py-1">Excellent</td><td className="border border-gray-300 px-2 py-1">10</td></tr>
                    </tbody>
                  </table>
                </div>
              </CopyableContent>
            </div>

            <div className="p-4 bg-white border border-blue-200 rounded">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Settings className="h-4 w-4 text-blue-600" />
                Step-by-Step Implementation
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="font-medium text-sm">Set Up Configuration Manager</p>
                    <p className="text-xs text-muted-foreground">Create secure API key management and configuration system</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="font-medium text-sm">Implement Service Layer</p>
                    <p className="text-xs text-muted-foreground">Build abstraction layer for multiple AI services</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="font-medium text-sm">Add Caching System</p>
                    <p className="text-xs text-muted-foreground">Implement intelligent caching to reduce API costs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <p className="font-medium text-sm">Create Dashboard Interface</p>
                    <p className="text-xs text-muted-foreground">Build user-friendly Excel interface with AI insights</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</div>
                  <div>
                    <p className="font-medium text-sm">Test and Deploy</p>
                    <p className="text-xs text-muted-foreground">Comprehensive testing and production deployment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border border-blue-200 rounded">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Bot className="h-4 w-4 text-blue-600" />
                Core Architecture Code
              </h4>
              
              <CopyableContent 
                content={`' Main AI Architecture Module
Public Function AnalyzeBusinessData() As String
    Dim aiRequest As AIRequest
    Dim aiResponse As AIResponse
    Dim dataRange As Range
    Dim prompt As String
    
    ' Get data from worksheet
    Set dataRange = ThisWorkbook.Worksheets("BusinessData").UsedRange
    
    ' Build analysis prompt
    prompt = "Analyze this business data and provide insights on: " & vbCrLf & _
             "1. Top performing employees and departments" & vbCrLf & _
             "2. Sales trends and growth patterns" & vbCrLf & _
             "3. Performance correlation with experience" & vbCrLf & _
             "4. Recommendations for improvement" & vbCrLf & vbCrLf & _
             "Data: " & RangeToText(dataRange)
    
    ' Configure AI request
    With aiRequest
        .ServiceType = OpenAI
        .Model = "gpt-4"
        .Prompt = prompt
        .MaxTokens = 1000
        .Temperature = 0.3
    End With
    
    ' Make AI call through service layer
    aiResponse = CallAI(aiRequest)
    
    If aiResponse.Success Then
        AnalyzeBusinessData = aiResponse.Content
        ' Update dashboard with insights
        UpdateDashboard aiResponse.Content
    Else
        AnalyzeBusinessData = "Error: " & aiResponse.ErrorMessage
    End If
End Function

Private Function RangeToText(rng As Range) As String
    Dim result As String
    Dim i As Integer, j As Integer
    
    For i = 1 To rng.Rows.Count
        For j = 1 To rng.Columns.Count
            result = result & rng.Cells(i, j).Value
            If j < rng.Columns.Count Then result = result & vbTab
        Next j
        result = result & vbCrLf
    Next i
    
    RangeToText = result
End Function

Private Sub UpdateDashboard(insights As String)
    ' Update dashboard worksheet with AI insights
    With ThisWorkbook.Worksheets("Dashboard")
        .Range("B2").Value = "AI Business Analysis"
        .Range("B3").Value = Format(Now, "yyyy-mm-dd hh:mm:ss")
        .Range("B5").Value = insights
        .Range("B5").WrapText = True
    End With
End Sub`}
                label="Business Intelligence Architecture VBA Code"
              >
                <pre className="text-sm bg-gray-50 p-3 rounded border overflow-x-auto">
                  <code>{`' Main AI Architecture Module
Public Function AnalyzeBusinessData() As String
    Dim aiRequest As AIRequest
    Dim aiResponse As AIResponse
    Dim dataRange As Range
    Dim prompt As String
    
    ' Get data from worksheet
    Set dataRange = ThisWorkbook.Worksheets("BusinessData").UsedRange
    
    ' Build analysis prompt
    prompt = "Analyze this business data and provide insights on: " & vbCrLf & _
             "1. Top performing employees and departments" & vbCrLf & _
             "2. Sales trends and growth patterns" & vbCrLf & _
             "3. Performance correlation with experience" & vbCrLf & _
             "4. Recommendations for improvement" & vbCrLf & vbCrLf & _
             "Data: " & RangeToText(dataRange)
    
    ' Configure AI request
    With aiRequest
        .ServiceType = OpenAI
        .Model = "gpt-4"
        .Prompt = prompt
        .MaxTokens = 1000
        .Temperature = 0.3
    End With
    
    ' Make AI call through service layer
    aiResponse = CallAI(aiRequest)
    
    If aiResponse.Success Then
        AnalyzeBusinessData = aiResponse.Content
        UpdateDashboard aiResponse.Content
    Else
        AnalyzeBusinessData = "Error: " & aiResponse.ErrorMessage
    End If
End Function`}</code>
                </pre>
              </CopyableContent>
            </div>
          </div>
        </div>

        {/* Project 2: Document Processing System */}
        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
            <h3 className="text-xl font-semibold text-green-900">Intelligent Document Processing System</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <Badge variant="secondary" className="mb-2">Architecture Focus</Badge>
              <p className="text-sm text-muted-foreground">
                Async Processing, Error Recovery, Performance Optimization
              </p>
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">AI Services</Badge>
              <p className="text-sm text-muted-foreground">
                OCR, Document Analysis, Text Classification
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-white border border-green-200 rounded">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <FileCode className="h-4 w-4 text-green-600" />
                Document Processing Data
              </h4>
              
              <CopyableContent 
                content={`Document_ID	Document_Type	File_Path	Status	Processing_Date	Confidence_Score	Extracted_Text_Preview
DOC001	Invoice	C:\Documents\Invoice_001.pdf	Processed	2024-01-15	0.95	Invoice #12345 - Amount: $1,250.00 - Due: 2024-02-15
DOC002	Contract	C:\Documents\Contract_ABC.pdf	Processed	2024-01-16	0.92	Service Agreement between Company A and Company B
DOC003	Receipt	C:\Documents\Receipt_Store.jpg	Processed	2024-01-17	0.88	Store Purchase - Total: $45.67 - Date: 2024-01-17
DOC004	Email	C:\Documents\Email_Thread.pdf	Processing	2024-01-18	0.90	Subject: Project Update - Meeting scheduled for tomorrow
DOC005	Report	C:\Documents\Monthly_Report.docx	Pending	2024-01-19	0.00	Monthly sales report for Q4 2023
DOC006	Invoice	C:\Documents\Invoice_002.pdf	Processed	2024-01-20	0.97	Invoice #12346 - Amount: $2,100.00 - Due: 2024-02-20
DOC007	Form	C:\Documents\Application_Form.pdf	Error	2024-01-21	0.00	Processing failed - OCR error
DOC008	Letter	C:\Documents\Business_Letter.pdf	Processed	2024-01-22	0.85	Dear Sir/Madam, We are writing to inform you...
DOC009	Proposal	C:\Documents\Project_Proposal.docx	Processed	2024-01-23	0.93	Project Proposal: AI Integration Initiative
DOC010	Certificate	C:\Documents\Certificate.jpg	Processed	2024-01-24	0.91	Certificate of Completion - John Smith - Excel VBA Course`}
                label="Document Processing Data"
              >
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-2 py-1 text-left">Document_ID</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Type</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Status</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Date</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Confidence</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Preview</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 px-2 py-1">DOC001</td><td className="border border-gray-300 px-2 py-1">Invoice</td><td className="border border-gray-300 px-2 py-1">Processed</td><td className="border border-gray-300 px-2 py-1">2024-01-15</td><td className="border border-gray-300 px-2 py-1">0.95</td><td className="border border-gray-300 px-2 py-1">Invoice #12345 - Amount: $1,250.00</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1">DOC002</td><td className="border border-gray-300 px-2 py-1">Contract</td><td className="border border-gray-300 px-2 py-1">Processed</td><td className="border border-gray-300 px-2 py-1">2024-01-16</td><td className="border border-gray-300 px-2 py-1">0.92</td><td className="border border-gray-300 px-2 py-1">Service Agreement</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1">DOC003</td><td className="border border-gray-300 px-2 py-1">Receipt</td><td className="border border-gray-300 px-2 py-1">Processed</td><td className="border border-gray-300 px-2 py-1">2024-01-17</td><td className="border border-gray-300 px-2 py-1">0.88</td><td className="border border-gray-300 px-2 py-1">Store Purchase - Total: $45.67</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1">DOC004</td><td className="border border-gray-300 px-2 py-1">Email</td><td className="border border-gray-300 px-2 py-1">Processing</td><td className="border border-gray-300 px-2 py-1">2024-01-18</td><td className="border border-gray-300 px-2 py-1">0.90</td><td className="border border-gray-300 px-2 py-1">Subject: Project Update</td></tr>
                      <tr><td className="border border-gray-300 px-2 py-1">DOC005</td><td className="border border-gray-300 px-2 py-1">Report</td><td className="border border-gray-300 px-2 py-1">Pending</td><td className="border border-gray-300 px-2 py-1">2024-01-19</td><td className="border border-gray-300 px-2 py-1">0.00</td><td className="border border-gray-300 px-2 py-1">Monthly sales report</td></tr>
                    </tbody>
                  </table>
                </div>
              </CopyableContent>
            </div>

            <div className="p-4 bg-white border border-green-200 rounded">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-green-600" />
                Async Document Processor
              </h4>
              
              <CopyableContent 
                content={`' AsyncDocumentProcessor Module
Public Function ProcessDocumentAsync(filePath As String) As String
    Dim jobID As String
    Dim aiRequest As AIRequest
    Dim aiResponse As AIResponse
    
    jobID = "JOB_" & Format(Now, "yyyymmddhhmmss")
    
    ' Update status
    UpdateProcessingStatus jobID, "Starting", 0
    
    ' Configure AI request for document analysis
    With aiRequest
        .ServiceType = AzureOpenAI
        .Model = "gpt-4-vision-preview"
        .Prompt = "Extract and classify key information from this document: " & filePath
        .MaxTokens = 1500
        .Temperature = 0.1
    End With
    
    ' Update progress
    UpdateProcessingStatus jobID, "Processing", 50
    
    ' Make AI call
    aiResponse = CallAI(aiRequest)
    
    If aiResponse.Success Then
        ' Store results
        StoreDocumentResults jobID, filePath, aiResponse.Content
        UpdateProcessingStatus jobID, "Completed", 100
        ProcessDocumentAsync = aiResponse.Content
    Else
        UpdateProcessingStatus jobID, "Error", 0
        ProcessDocumentAsync = "Error: " & aiResponse.ErrorMessage
    End If
End Function

Private Sub UpdateProcessingStatus(jobID As String, status As String, progress As Integer)
    ' Update processing status in worksheet
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Worksheets("ProcessingLog")
    
    Dim lastRow As Long
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row + 1
    
    With ws
        .Cells(lastRow, 1).Value = jobID
        .Cells(lastRow, 2).Value = status
        .Cells(lastRow, 3).Value = progress
        .Cells(lastRow, 4).Value = Now
    End With
End Sub

Private Sub StoreDocumentResults(jobID As String, filePath As String, results As String)
    ' Store processing results
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Worksheets("DocumentResults")
    
    Dim lastRow As Long
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row + 1
    
    With ws
        .Cells(lastRow, 1).Value = jobID
        .Cells(lastRow, 2).Value = filePath
        .Cells(lastRow, 3).Value = results
        .Cells(lastRow, 4).Value = Now
    End With
End Sub`}
                label="Async Document Processor VBA Code"
              >
                <pre className="text-sm bg-gray-50 p-3 rounded border overflow-x-auto">
                  <code>{`' AsyncDocumentProcessor Module
Public Function ProcessDocumentAsync(filePath As String) As String
    Dim jobID As String
    Dim aiRequest As AIRequest
    Dim aiResponse As AIResponse
    
    jobID = "JOB_" & Format(Now, "yyyymmddhhmmss")
    
    ' Update status
    UpdateProcessingStatus jobID, "Starting", 0
    
    ' Configure AI request for document analysis
    With aiRequest
        .ServiceType = AzureOpenAI
        .Model = "gpt-4-vision-preview"
        .Prompt = "Extract and classify key information from this document: " & filePath
        .MaxTokens = 1500
        .Temperature = 0.1
    End With
    
    ' Update progress
    UpdateProcessingStatus jobID, "Processing", 50
    
    ' Make AI call
    aiResponse = CallAI(aiRequest)
    
    If aiResponse.Success Then
        StoreDocumentResults jobID, filePath, aiResponse.Content
        UpdateProcessingStatus jobID, "Completed", 100
        ProcessDocumentAsync = aiResponse.Content
    Else
        UpdateProcessingStatus jobID, "Error", 0
        ProcessDocumentAsync = "Error: " & aiResponse.ErrorMessage
    End If
End Function`}</code>
                </pre>
              </CopyableContent>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VBAAIArchitectureProjects;
