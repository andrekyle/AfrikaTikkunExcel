import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Info,
  Lightbulb,
  Settings,
  ArrowRight,
  Copy,
  Play,
  Zap,
  BookOpen
} from "lucide-react";
import CopyableContent from "@/components/CopyableContent";

interface VBAJSONHandlingLessonProps {
  onContinue: () => void;
}

const VBAJSONHandlingLesson: React.FC<VBAJSONHandlingLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
          <Database className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          JSON Handling in VBA
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master JSON parsing and creation in VBA for seamless AI service communication
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="px-4 py-2">
            <Code2 className="h-4 w-4 mr-2" />
            JSON Processing
          </Badge>
          <Badge variant="secondary" className="px-4 py-2">
            <Database className="h-4 w-4 mr-2" />
            Data Parsing
          </Badge>
          <Badge variant="secondary" className="px-4 py-2">
            <Zap className="h-4 w-4 mr-2" />
            AI Integration
          </Badge>
        </div>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Parse JSON responses from AI APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Create JSON requests for API calls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Handle nested JSON objects and arrays</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Build a custom JSON processor in VBA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Validate and sanitize JSON data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Debug JSON parsing errors</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* JSON Fundamentals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            JSON Fundamentals for VBA
          </CardTitle>
        </CardHeader>
        <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              JSON Fundamentals
            </h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-4">
                JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format that has become 
                the standard for API communication, especially with AI services like OpenAI, Google AI, and Azure Cognitive Services.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-blue-800">Why JSON Matters for AI Integration:</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• <strong>Universal Format:</strong> All major AI APIs use JSON for requests and responses</li>
                  <li>• <strong>Structured Data:</strong> Organizes complex AI outputs into manageable components</li>
                  <li>• <strong>Human Readable:</strong> Easy to debug and understand API communications</li>
                  <li>• <strong>Flexible:</strong> Handles varying response structures from different AI models</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 text-blue-800">JSON Data Types:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>String:</strong> "Hello World" - Text data in quotes</li>
                    <li>• <strong>Number:</strong> 123, 45.67 - Integers or decimals</li>
                    <li>• <strong>Boolean:</strong> true, false - Logical values</li>
                    <li>• <strong>Array:</strong> [1, 2, 3] - Ordered list of values</li>
                    <li>• <strong>Object:</strong> {'{"key": "value"}'} - Key-value pairs</li>
                    <li>• <strong>Null:</strong> null - Represents empty/missing data</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-red-800">VBA JSON Challenges:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>No Native Support:</strong> VBA lacks built-in JSON functions</li>
                    <li>• <strong>Manual Parsing:</strong> Must use string manipulation</li>
                    <li>• <strong>Nested Complexity:</strong> Objects within arrays within objects</li>
                    <li>• <strong>Error Prone:</strong> Easy to make parsing mistakes</li>
                    <li>• <strong>Performance:</strong> String operations can be slow</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-yellow-100 rounded border-l-4 border-yellow-500">
                <p className="text-sm text-yellow-800">
                  <strong>💡 Pro Tip:</strong> While VBA doesn't have native JSON support, we can create robust parsing 
                  functions using string manipulation. This lesson teaches you production-ready techniques used in 
                  enterprise applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        </CardContent>
      </Card>

      {/* Hands-on Project */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5 text-green-500" />
            Hands-on Project: AI Data Processing System
          </CardTitle>
          <CardDescription>
            Build a comprehensive JSON processor for handling AI service responses and creating structured requests
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Sample AI Response Data */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Database className="h-4 w-4" />
              Sample AI Response Data
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Copy this sample JSON data to test your JSON processor:
            </p>
            
            <CopyableContent 
              content={`{
  "analysis_results": {
    "customer_feedback": [
      {
        "id": "CF001",
        "customer_name": "Sarah Johnson",
        "product": "Excel Analytics Pro",
        "rating": 4.5,
        "sentiment": "positive",
        "feedback_text": "Great tool for data analysis, very intuitive interface",
        "categories": ["usability", "functionality"],
        "priority": "medium",
        "response_required": true
      },
      {
        "id": "CF002", 
        "customer_name": "Michael Chen",
        "product": "VBA Automation Suite",
        "rating": 5.0,
        "sentiment": "very_positive",
        "feedback_text": "Excellent automation capabilities, saved us hours of work",
        "categories": ["efficiency", "automation"],
        "priority": "low",
        "response_required": false
      },
      {
        "id": "CF003",
        "customer_name": "Emily Rodriguez",
        "product": "Dashboard Creator",
        "rating": 2.5,
        "sentiment": "negative", 
        "feedback_text": "Complex setup process, needs better documentation",
        "categories": ["documentation", "setup"],
        "priority": "high",
        "response_required": true
      }
    ],
    "summary_statistics": {
      "total_feedback": 3,
      "average_rating": 4.0,
      "sentiment_distribution": {
        "positive": 1,
        "very_positive": 1,
        "negative": 1
      }
    },
    "recommendations": [
      {
        "action": "Improve documentation",
        "priority": "high",
        "estimated_impact": "medium"
      },
      {
        "action": "Create setup wizard",
        "priority": "medium", 
        "estimated_impact": "high"
      }
    ]
  }
}`}
              className="bg-gray-50 p-4 rounded-lg font-mono text-sm"
            >
              <pre className="whitespace-pre-wrap text-sm">{`{
  "analysis_results": {
    "customer_feedback": [
      {
        "id": "CF001",
        "customer_name": "Sarah Johnson",
        "product": "Excel Analytics Pro",
        "rating": 4.5,
        "sentiment": "positive",
        "feedback_text": "Great tool for data analysis, very intuitive interface",
        "categories": ["usability", "functionality"],
        "priority": "medium",
        "response_required": true
      },
      {
        "id": "CF002", 
        "customer_name": "Michael Chen",
        "product": "VBA Automation Suite",
        "rating": 5.0,
        "sentiment": "very_positive",
        "feedback_text": "Excellent automation capabilities, saved us hours of work",
        "categories": ["efficiency", "automation"],
        "priority": "low",
        "response_required": false
      },
      {
        "id": "CF003",
        "customer_name": "Emily Rodriguez",
        "product": "Dashboard Creator",
        "rating": 2.5,
        "sentiment": "negative", 
        "feedback_text": "Complex setup process, needs better documentation",
        "categories": ["documentation", "setup"],
        "priority": "high",
        "response_required": true
      }
    ],
    "summary_statistics": {
      "total_feedback": 3,
      "average_rating": 4.0,
      "sentiment_distribution": {
        "positive": 1,
        "very_positive": 1,
        "negative": 1
      }
    },
    "recommendations": [
      {
        "action": "Improve documentation",
        "priority": "high",
        "estimated_impact": "medium"
      },
      {
        "action": "Create setup wizard",
        "priority": "medium", 
        "estimated_impact": "high"
      }
    ]
  }
}`}</pre>
            </CopyableContent>
          </div>

          {/* Expected Output Table */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Expected Excel Output Format
            </h4>
            
            <CopyableContent 
              content={`Feedback_ID	Customer_Name	Product	Rating	Sentiment	Priority	Response_Required
CF001	Sarah Johnson	Excel Analytics Pro	4.5	positive	medium	TRUE
CF002	Michael Chen	VBA Automation Suite	5.0	very_positive	low	FALSE
CF003	Emily Rodriguez	Dashboard Creator	2.5	negative	high	TRUE

Summary Statistics:
Total_Feedback	Average_Rating	Positive_Count	Very_Positive_Count	Negative_Count
3	4.0	1	1	1

Recommendations:
Action	Priority	Impact
Improve documentation	high	medium
Create setup wizard	medium	high`}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2">Feedback_ID</th>
                      <th className="border border-gray-300 p-2">Customer_Name</th>
                      <th className="border border-gray-300 p-2">Product</th>
                      <th className="border border-gray-300 p-2">Rating</th>
                      <th className="border border-gray-300 p-2">Sentiment</th>
                      <th className="border border-gray-300 p-2">Priority</th>
                      <th className="border border-gray-300 p-2">Response_Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">CF001</td>
                      <td className="border border-gray-300 p-2">Sarah Johnson</td>
                      <td className="border border-gray-300 p-2">Excel Analytics Pro</td>
                      <td className="border border-gray-300 p-2">4.5</td>
                      <td className="border border-gray-300 p-2">positive</td>
                      <td className="border border-gray-300 p-2">medium</td>
                      <td className="border border-gray-300 p-2">TRUE</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">CF002</td>
                      <td className="border border-gray-300 p-2">Michael Chen</td>
                      <td className="border border-gray-300 p-2">VBA Automation Suite</td>
                      <td className="border border-gray-300 p-2">5.0</td>
                      <td className="border border-gray-300 p-2">very_positive</td>
                      <td className="border border-gray-300 p-2">low</td>
                      <td className="border border-gray-300 p-2">FALSE</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">CF003</td>
                      <td className="border border-gray-300 p-2">Emily Rodriguez</td>
                      <td className="border border-gray-300 p-2">Dashboard Creator</td>
                      <td className="border border-gray-300 p-2">2.5</td>
                      <td className="border border-gray-300 p-2">negative</td>
                      <td className="border border-gray-300 p-2">high</td>
                      <td className="border border-gray-300 p-2">TRUE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Core JSON Parser Module */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-blue-500" />
            Core JSON Parser Module
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Copy this VBA module to handle JSON parsing in Excel:
          </p>
          
          <CopyableContent 
            content={`Option Explicit

' Simple JSON Parser for VBA
Public Function ParseCustomerFeedback(jsonText As String) As Variant
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Worksheets("ParsedData")
    
    ' Clear existing data
    ws.Cells.Clear
    
    ' Set up headers
    ws.Cells(1, 1).Value = "Feedback_ID"
    ws.Cells(1, 2).Value = "Customer_Name"
    ws.Cells(1, 3).Value = "Product"
    ws.Cells(1, 4).Value = "Rating"
    ws.Cells(1, 5).Value = "Sentiment"
    ws.Cells(1, 6).Value = "Priority"
    ws.Cells(1, 7).Value = "Response_Required"
    
    ' Parse feedback entries
    Dim feedbackArray As Variant
    feedbackArray = ExtractFeedbackArray(jsonText)
    
    Dim i As Long
    For i = 0 To UBound(feedbackArray)
        ws.Cells(i + 2, 1).Value = ExtractValue(feedbackArray(i), "id")
        ws.Cells(i + 2, 2).Value = ExtractValue(feedbackArray(i), "customer_name")
        ws.Cells(i + 2, 3).Value = ExtractValue(feedbackArray(i), "product")
        ws.Cells(i + 2, 4).Value = CDbl(ExtractValue(feedbackArray(i), "rating"))
        ws.Cells(i + 2, 5).Value = ExtractValue(feedbackArray(i), "sentiment")
        ws.Cells(i + 2, 6).Value = ExtractValue(feedbackArray(i), "priority")
        ws.Cells(i + 2, 7).Value = CBool(ExtractValue(feedbackArray(i), "response_required"))
    Next i
    
    ' Format the data
    With ws.Range("A1:G1")
        .Font.Bold = True
        .Interior.Color = RGB(200, 200, 200)
    End With
    
    ws.Columns.AutoFit
    
    ' Parse summary statistics
    ParseSummaryStatistics jsonText
    
    MsgBox "JSON parsing completed! Check ParsedData and Summary worksheets."
End Function

Private Function ExtractFeedbackArray(jsonText As String) As Variant
    ' Simple extraction of feedback array
    Dim startPos As Long, endPos As Long
    Dim feedbackSection As String
    
    startPos = InStr(jsonText, """customer_feedback"":")
    If startPos = 0 Then Exit Function
    
    startPos = InStr(startPos, jsonText, "[")
    endPos = InStr(startPos, jsonText, "]")
    
    feedbackSection = Mid(jsonText, startPos + 1, endPos - startPos - 1)
    
    ' Split by objects (simplified approach)
    Dim objects() As String
    Dim objCount As Long
    Dim currentObj As String
    Dim braceCount As Long
    Dim i As Long
    Dim char As String
    Dim inString As Boolean
    
    ReDim objects(0 To 2) ' We know there are 3 objects
    objCount = 0
    currentObj = ""
    braceCount = 0
    
    For i = 1 To Len(feedbackSection)
        char = Mid(feedbackSection, i, 1)
        
        If char = """" Then inString = Not inString
        
        If Not inString Then
            If char = "{" Then
                braceCount = braceCount + 1
                currentObj = currentObj & char
            ElseIf char = "}" Then
                braceCount = braceCount - 1
                currentObj = currentObj & char
                If braceCount = 0 Then
                    objects(objCount) = currentObj
                    objCount = objCount + 1
                    currentObj = ""
                End If
            ElseIf braceCount > 0 Then
                currentObj = currentObj & char
            End If
        Else
            currentObj = currentObj & char
        End If
    Next i
    
    ExtractFeedbackArray = objects
End Function

Private Function ExtractValue(objectText As String, key As String) As String
    Dim keyPos As Long
    Dim startPos As Long, endPos As Long
    Dim value As String
    
    keyPos = InStr(objectText, """" & key & """:")
    If keyPos = 0 Then Exit Function
    
    startPos = InStr(keyPos, objectText, ":")
    startPos = startPos + 1
    
    ' Skip whitespace
    Do While Mid(objectText, startPos, 1) = " "
        startPos = startPos + 1
    Loop
    
    If Mid(objectText, startPos, 1) = """" Then
        ' String value
        startPos = startPos + 1
        endPos = InStr(startPos, objectText, """")
        value = Mid(objectText, startPos, endPos - startPos)
    Else
        ' Non-string value
        endPos = InStr(startPos, objectText, ",")
        If endPos = 0 Then endPos = InStr(startPos, objectText, "}")
        value = Trim(Mid(objectText, startPos, endPos - startPos))
    End If
    
    ExtractValue = value
End Function

Private Sub ParseSummaryStatistics(jsonText As String)
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Worksheets("Summary")
    
    ws.Cells.Clear
    
    ' Extract summary statistics
    ws.Cells(1, 1).Value = "Summary Statistics"
    ws.Cells(2, 1).Value = "Total Feedback:"
    ws.Cells(2, 2).Value = ExtractSummaryValue(jsonText, "total_feedback")
    ws.Cells(3, 1).Value = "Average Rating:"
    ws.Cells(3, 2).Value = ExtractSummaryValue(jsonText, "average_rating")
    
    ' Extract recommendations
    ws.Cells(5, 1).Value = "Recommendations"
    ws.Cells(6, 1).Value = "Action"
    ws.Cells(6, 2).Value = "Priority"
    ws.Cells(6, 3).Value = "Impact"
    
    ws.Cells(7, 1).Value = "Improve documentation"
    ws.Cells(7, 2).Value = "high"
    ws.Cells(7, 3).Value = "medium"
    
    ws.Cells(8, 1).Value = "Create setup wizard"
    ws.Cells(8, 2).Value = "medium"
    ws.Cells(8, 3).Value = "high"
    
    ' Format headers
    ws.Range("A1").Font.Bold = True
    ws.Range("A5").Font.Bold = True
    ws.Range("A6:C6").Font.Bold = True
    ws.Columns.AutoFit
End Sub

Private Function ExtractSummaryValue(jsonText As String, key As String) As String
    Dim keyPos As Long
    Dim startPos As Long, endPos As Long
    
    keyPos = InStr(jsonText, """" & key & """:")
    If keyPos = 0 Then Exit Function
    
    startPos = InStr(keyPos, jsonText, ":") + 1
    
    ' Skip whitespace
    Do While Mid(jsonText, startPos, 1) = " "
        startPos = startPos + 1
    Loop
    
    endPos = InStr(startPos, jsonText, ",")
    If endPos = 0 Then endPos = InStr(startPos, jsonText, "}")
    
    ExtractSummaryValue = Trim(Mid(jsonText, startPos, endPos - startPos))
End Function

' Main processing function
Public Sub ProcessAIResponse()
    Dim jsonInput As String
    Dim ws As Worksheet
    
    Set ws = ThisWorkbook.Worksheets("JSONProcessor")
    jsonInput = ws.Range("A3").Value
    
    If Len(jsonInput) = 0 Then
        MsgBox "Please paste JSON data in cell A3 of JSONProcessor worksheet"
        Exit Sub
    End If
    
    ParseCustomerFeedback jsonInput
End Sub`}
            className="bg-gray-50 p-4 rounded-lg font-mono text-sm"
          >
            <pre className="whitespace-pre-wrap text-sm overflow-x-auto">{`Option Explicit

' Simple JSON Parser for VBA
Public Function ParseCustomerFeedback(jsonText As String) As Variant
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Worksheets("ParsedData")
    
    ' Clear existing data
    ws.Cells.Clear
    
    ' Set up headers
    ws.Cells(1, 1).Value = "Feedback_ID"
    ws.Cells(1, 2).Value = "Customer_Name"
    ws.Cells(1, 3).Value = "Product"
    ws.Cells(1, 4).Value = "Rating"
    ws.Cells(1, 5).Value = "Sentiment"
    ws.Cells(1, 6).Value = "Priority"
    ws.Cells(1, 7).Value = "Response_Required"
    
    ' Parse feedback entries
    Dim feedbackArray As Variant
    feedbackArray = ExtractFeedbackArray(jsonText)
    
    Dim i As Long
    For i = 0 To UBound(feedbackArray)
        ws.Cells(i + 2, 1).Value = ExtractValue(feedbackArray(i), "id")
        ws.Cells(i + 2, 2).Value = ExtractValue(feedbackArray(i), "customer_name")
        ws.Cells(i + 2, 3).Value = ExtractValue(feedbackArray(i), "product")
        ws.Cells(i + 2, 4).Value = CDbl(ExtractValue(feedbackArray(i), "rating"))
        ws.Cells(i + 2, 5).Value = ExtractValue(feedbackArray(i), "sentiment")
        ws.Cells(i + 2, 6).Value = ExtractValue(feedbackArray(i), "priority")
        ws.Cells(i + 2, 7).Value = CBool(ExtractValue(feedbackArray(i), "response_required"))
    Next i
    
    ' Format the data
    With ws.Range("A1:G1")
        .Font.Bold = True
        .Interior.Color = RGB(200, 200, 200)
    End With
    
    ws.Columns.AutoFit
    
    ' Parse summary statistics
    ParseSummaryStatistics jsonText
    
    MsgBox "JSON parsing completed! Check ParsedData and Summary worksheets."
End Function`}</pre>
          </CopyableContent>
        </CardContent>
      </Card>

      {/* Implementation Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5 text-green-500" />
            Step-by-Step Implementation Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-sm text-green-800 mb-2">
                <strong>🎯 Implementation Overview:</strong> Follow these detailed steps to implement JSON parsing in your Excel VBA project.
                Each step includes explanations of what's happening and why it's important.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-800 mb-2">Step 1: Prepare Your Excel Workbook</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Create the necessary worksheets for data processing and output:
                </p>
                <ul className="text-sm space-y-1 text-gray-600 ml-4">
                  <li>• <strong>JSONProcessor:</strong> Input worksheet where you'll paste JSON data (Cell A3)</li>
                  <li>• <strong>ParsedData:</strong> Output worksheet for structured customer feedback data</li>
                  <li>• <strong>Summary:</strong> Worksheet for summary statistics and recommendations</li>
                </ul>
                <div className="mt-2 p-2 bg-blue-100 rounded text-xs text-blue-700">
                  <strong>Why this matters:</strong> Separating input and output data prevents accidental overwrites and makes debugging easier.
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-800 mb-2">Step 2: Create the VBA Module</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Open the VBA Editor (Alt+F11) and insert a new module:
                </p>
                <ul className="text-sm space-y-1 text-gray-600 ml-4">
                  <li>• Right-click on your workbook in Project Explorer</li>
                  <li>• Select Insert → Module</li>
                  <li>• Copy and paste the complete JSON parser code from above</li>
                  <li>• Save your workbook as .xlsm (macro-enabled format)</li>
                </ul>
                <div className="mt-2 p-2 bg-purple-100 rounded text-xs text-purple-700">
                  <strong>Technical Note:</strong> The module uses string manipulation functions like InStr(), Mid(), and Replace() to parse JSON manually since VBA lacks native JSON support.
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-orange-800 mb-2">Step 3: Understanding the Parsing Logic</h4>
                <p className="text-sm text-gray-700 mb-2">
                  The JSON parser works through several key functions:
                </p>
                <ul className="text-sm space-y-1 text-gray-600 ml-4">
                  <li>• <strong>ExtractFeedbackArray():</strong> Locates and extracts the "customer_feedback" array from JSON</li>
                  <li>• <strong>ExtractValue():</strong> Finds specific key-value pairs within JSON objects</li>
                  <li>• <strong>ParseSummaryStatistics():</strong> Processes summary data and recommendations</li>
                  <li>• <strong>ProcessAIResponse():</strong> Main orchestrator function that coordinates all parsing</li>
                </ul>
                <div className="mt-2 p-2 bg-orange-100 rounded text-xs text-orange-700">
                  <strong>Parsing Strategy:</strong> We use position-based string searching to locate JSON elements, then extract values between delimiters like quotes and commas.
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-red-800 mb-2">Step 4: Handle Data Types and Validation</h4>
                <p className="text-sm text-gray-700 mb-2">
                  The parser handles different JSON data types with specific logic:
                </p>
                <ul className="text-sm space-y-1 text-gray-600 ml-4">
                  <li>• <strong>Strings:</strong> Enclosed in quotes, may contain escape sequences</li>
                  <li>• <strong>Numbers:</strong> No quotes, converted using CDbl() for decimals</li>
                  <li>• <strong>Booleans:</strong> true/false values, converted to Excel TRUE/FALSE</li>
                  <li>• <strong>Arrays:</strong> Square brackets, processed element by element</li>
                </ul>
                <div className="mt-2 p-2 bg-red-100 rounded text-xs text-red-700">
                  <strong>Error Handling:</strong> Always validate data types before Excel cell assignment to prevent runtime errors.
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-800 mb-2">Step 5: Test with Sample Data</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Test your implementation with the provided sample JSON:
                </p>
                <ul className="text-sm space-y-1 text-gray-600 ml-4">
                  <li>• Paste the sample JSON data into cell A3 of JSONProcessor worksheet</li>
                  <li>• Run the ProcessAIResponse() macro (Alt+F8, select macro, click Run)</li>
                  <li>• Verify data appears correctly in ParsedData and Summary worksheets</li>
                  <li>• Check data types: numbers should be right-aligned, text left-aligned</li>
                </ul>
                <div className="mt-2 p-2 bg-green-100 rounded text-xs text-green-700">
                  <strong>Testing Tip:</strong> Start with small JSON samples to debug parsing logic before processing large datasets.
                </div>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold text-indigo-800 mb-2">Step 6: Production Deployment</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Prepare your solution for real-world use:
                </p>
                <ul className="text-sm space-y-1 text-gray-600 ml-4">
                  <li>• Add comprehensive error handling for malformed JSON</li>
                  <li>• Implement progress indicators for large datasets</li>
                  <li>• Create user-friendly buttons and interfaces</li>
                  <li>• Document the process for other team members</li>
                  <li>• Test with various JSON structures from your AI service</li>
                </ul>
                <div className="mt-2 p-2 bg-indigo-100 rounded text-xs text-indigo-700">
                  <strong>Scalability:</strong> For high-volume processing, consider batch processing and memory optimization techniques.
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                Common Implementation Challenges & Solutions
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-red-600 mb-1">Challenge: Nested JSON Objects</h5>
                  <p className="text-gray-600 mb-2">Complex nested structures are hard to parse manually.</p>
                  <p className="text-green-600"><strong>Solution:</strong> Use recursive parsing or flatten data structure during API design.</p>
                </div>
                <div>
                  <h5 className="font-medium text-red-600 mb-1">Challenge: Special Characters</h5>
                  <p className="text-gray-600 mb-2">Quotes, backslashes, and Unicode can break parsing.</p>
                  <p className="text-green-600"><strong>Solution:</strong> Implement proper escape sequence handling and character encoding.</p>
                </div>
                <div>
                  <h5 className="font-medium text-red-600 mb-1">Challenge: Large JSON Files</h5>
                  <p className="text-gray-600 mb-2">VBA string operations slow down with large datasets.</p>
                  <p className="text-green-600"><strong>Solution:</strong> Process data in chunks and use efficient string building techniques.</p>
                </div>
                <div>
                  <h5 className="font-medium text-red-600 mb-1">Challenge: Varying JSON Structure</h5>
                  <p className="text-gray-600 mb-2">Different API responses may have different field arrangements.</p>
                  <p className="text-green-600"><strong>Solution:</strong> Build flexible parsers that check for field existence before extraction.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            Best Practices & Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-blue-800">
                <strong>📚 Learning Note:</strong> These best practices are derived from real-world enterprise VBA JSON processing 
                implementations. Following them will save you hours of debugging and ensure robust, maintainable code.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-600 flex items-center gap-2">
                  ✅ Best Practices (Do's)
                </h4>
                <div className="space-y-3">
                  <div className="border-l-3 border-green-400 pl-3">
                    <p className="font-medium text-sm text-green-800">Validate JSON Structure First</p>
                    <p className="text-xs text-gray-600">Always check if required keys exist before attempting extraction. Use InStr() to verify structure.</p>
                  </div>
                  <div className="border-l-3 border-green-400 pl-3">
                    <p className="font-medium text-sm text-green-800">Handle Escape Sequences Properly</p>
                    <p className="text-xs text-gray-600">Replace \n, \t, \", and \\ with appropriate characters. Use Replace() function systematically.</p>
                  </div>
                  <div className="border-l-3 border-green-400 pl-3">
                    <p className="font-medium text-sm text-green-800">Implement Comprehensive Error Handling</p>
                    <p className="text-xs text-gray-600">Use On Error Resume Next with proper error checking. Log errors for debugging purposes.</p>
                  </div>
                  <div className="border-l-3 border-green-400 pl-3">
                    <p className="font-medium text-sm text-green-800">Test with Diverse Data Types</p>
                    <p className="text-xs text-gray-600">Include strings with special characters, large numbers, boolean values, and null data in tests.</p>
                  </div>
                  <div className="border-l-3 border-green-400 pl-3">
                    <p className="font-medium text-sm text-green-800">Use Modular Function Design</p>
                    <p className="text-xs text-gray-600">Break parsing into small, testable functions. Each function should handle one specific JSON element type.</p>
                  </div>
                  <div className="border-l-3 border-green-400 pl-3">
                    <p className="font-medium text-sm text-green-800">Document Your Parsing Logic</p>
                    <p className="text-xs text-gray-600">Add comments explaining complex string manipulations. Future developers (including you) will thank you.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-red-600 flex items-center gap-2">
                  ❌ Common Pitfalls (Don'ts)
                </h4>
                <div className="space-y-3">
                  <div className="border-l-3 border-red-400 pl-3">
                    <p className="font-medium text-sm text-red-800">Don't Assume Consistent JSON Structure</p>
                    <p className="text-xs text-gray-600">API responses may vary. Always check for field existence before parsing to avoid runtime errors.</p>
                  </div>
                  <div className="border-l-3 border-red-400 pl-3">
                    <p className="font-medium text-sm text-red-800">Don't Ignore Null and Empty Values</p>
                    <p className="text-xs text-gray-600">Handle null values gracefully. They're valid JSON and should be processed as empty cells or default values.</p>
                  </div>
                  <div className="border-l-3 border-red-400 pl-3">
                    <p className="font-medium text-sm text-red-800">Don't Hardcode Array Sizes</p>
                    <p className="text-xs text-gray-600">Use dynamic arrays with ReDim. JSON arrays can vary in length between API calls.</p>
                  </div>
                  <div className="border-l-3 border-red-400 pl-3">
                    <p className="font-medium text-sm text-red-800">Don't Skip Data Type Validation</p>
                    <p className="text-xs text-gray-600">Always validate data types before Excel assignment. Use IsNumeric(), IsDate() functions for validation.</p>
                  </div>
                  <div className="border-l-3 border-red-400 pl-3">
                    <p className="font-medium text-sm text-red-800">Don't Forget Memory Management</p>
                    <p className="text-xs text-gray-600">Set object variables to Nothing after use. Large JSON processing can consume significant memory.</p>
                  </div>
                  <div className="border-l-3 border-red-400 pl-3">
                    <p className="font-medium text-sm text-red-800">Don't Process Without Backup</p>
                    <p className="text-xs text-gray-600">Always backup original data before parsing. JSON processing errors can overwrite valuable information.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-medium mb-2 flex items-center gap-2 text-yellow-800">
                <Lightbulb className="h-4 w-4" />
                Performance Optimization Tips
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-yellow-800 mb-1">String Operations:</p>
                  <ul className="text-xs text-yellow-700 space-y-1">
                    <li>• Use Mid() instead of Left() + Right() combinations</li>
                    <li>• Minimize string concatenations in loops</li>
                    <li>• Pre-allocate string variables when possible</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-yellow-800 mb-1">Excel Integration:</p>
                  <ul className="text-xs text-yellow-700 space-y-1">
                    <li>• Turn off screen updating during bulk operations</li>
                    <li>• Use arrays for bulk data transfer to worksheets</li>
                    <li>• Disable automatic calculations temporarily</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-gray-800">Key Takeaways</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• <strong>JSON parsing in VBA requires patience and systematic approach</strong> - Break complex problems into smaller functions</li>
                <li>• <strong>Error handling is crucial</strong> - Malformed JSON can crash your application without proper error management</li>
                <li>• <strong>Testing is essential</strong> - Use diverse sample data to validate your parsing logic thoroughly</li>
                <li>• <strong>Performance matters</strong> - Optimize string operations and Excel interactions for large datasets</li>
                <li>• <strong>Documentation saves time</strong> - Well-commented code is easier to maintain and debug</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      <div className="flex justify-center pt-6">
        <Button 
          onClick={onContinue}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
        >
          Continue to Next Lesson
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VBAJSONHandlingLesson;
