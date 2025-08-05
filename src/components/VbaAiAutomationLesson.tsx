import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  CheckCircle, 
  Brain,
  Zap,
  BarChart3,
  FileText,
  Clock,
  MessageSquare,
  FileCode,
  Bot,
  Terminal,
  Settings,
  ArrowRight
} from "lucide-react";
import CopyableContent from "@/components/CopyableContent";

interface VbaAiAutomationLessonProps {
  onContinue?: () => void;
}

const VbaAiAutomationLesson: React.FC<VbaAiAutomationLessonProps> = ({ onContinue }) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      {/* Lesson Header */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Bot className="h-8 w-8 text-green-600" />
            VBA + AI Automation
          </CardTitle>
          <p className="text-gray-600 text-lg">Combine VBA with AI APIs for intelligent automation</p>
        </CardHeader>
      </Card>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎯 Technical Skills</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Building intelligent Excel macros with AI
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Automating data analysis with AI insights
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Creating AI-powered Excel add-ins
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Implementing AI chatbots in Excel
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Automating report generation with AI
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🏢 Business Applications</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Automated financial analysis with AI
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Smart data validation and cleanup
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Automated customer insights
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Intelligent inventory management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Automated compliance checking
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Concepts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Key Concepts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Bot className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">AI-Powered Macros</h3>
                <p className="text-sm text-gray-600">Learn to create macros that use AI for dynamic decision making and pattern recognition.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Smart Data Processing</h3>
                <p className="text-sm text-gray-600">Implement AI algorithms for automated data cleaning, categorization, and analysis.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">AI Chatbots</h3>
                <p className="text-sm text-gray-600">Create interactive Excel interfaces that use AI for natural language processing and user interaction.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BarChart3 className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Automated Insights</h3>
                <p className="text-sm text-gray-600">Generate intelligent reports and visualizations based on AI-powered data analysis.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: AI-Powered Macro */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-indigo-600" />
            Example: AI-Powered Data Analysis Macro
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              This example shows how to create a macro that uses AI to analyze and categorize data automatically.
            </p>
            
            <div className="relative">
              <div className="absolute top-2 right-2 flex gap-2">
                <CopyableContent
                  content={`' AI-Powered Data Analysis Macro
Sub AnalyzeDataWithAI()
    Dim ws As Worksheet
    Set ws = ActiveSheet
    
    ' Check if data exists
    If ws.UsedRange.Rows.Count < 2 Then
        MsgBox "No data to analyze!", vbExclamation
        Exit Sub
    End If
    
    ' Call AI service to analyze data
    Dim analysisResult As String
    analysisResult = CallAIService(ws.UsedRange.Value)
    
    ' Add analysis results to new sheet
    Dim analysisSheet As Worksheet
    Set analysisSheet = ThisWorkbook.Worksheets.Add
    analysisSheet.Name = "AI Analysis"
    
    ' Format results
    With analysisSheet
        .Range("A1").Value = "Analysis Date:"
        .Range("B1").Value = Now
        .Range("A3").Value = "AI Insights:"
        .Range("A4").Value = analysisResult
        
        ' Add formatting
        .Range("A1:B1").Font.Bold = True
        .Range("A3").Font.Bold = True
        .Columns.AutoFit
    End With
    
    ' Create visualization
    CreateAIChart analysisSheet
End Sub

' Helper function to call AI service
Private Function CallAIService(data As Variant) As String
    Dim http As Object
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    Dim url As String
    url = "https://api.example.com/analyze-data"
    
    ' Convert data to JSON
    Dim json As String
    json = ConvertToJSON(data)
    
    With http
        .Open "POST", url, False
        .setRequestHeader "Content-Type", "application/json"
        .setRequestHeader "Authorization", "Bearer YOUR_API_KEY"
        .send json
        
        If .Status = 200 Then
            CallAIService = .responseText
        Else
            Err.Raise vbObjectError + 1, "CallAIService", "API Error: " & .statusText
        End If
    End With
End Function

' Create visualization based on AI insights
Private Sub CreateAIChart(sheet As Worksheet)
    Dim chart As Chart
    Set chart = sheet.Shapes.AddChart2(240, xlColumnClustered).Chart
    
    ' Configure chart based on AI analysis
    With chart
        .SetSourceData sheet.Range("A4:B4")
        .HasTitle = True
        .ChartTitle.Text = "AI Analysis Results"
        .Parent.Left = sheet.Range("A6").Left
        .Parent.Top = sheet.Range("A6").Top
    End With
End Sub`}
                  label="Copy Code"
                />
              </div>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                <code className="text-xs">
                  {`' AI-Powered Data Analysis Macro
Sub AnalyzeDataWithAI()
    Dim ws As Worksheet
    Set ws = ActiveSheet
    
    ' Check if data exists
    If ws.UsedRange.Rows.Count < 2 Then
        MsgBox "No data to analyze!", vbExclamation
        Exit Sub
    End If
    
    ' Call AI service to analyze data
    Dim analysisResult As String
    analysisResult = CallAIService(ws.UsedRange.Value)
    
    ' Add analysis results to new sheet
    Dim analysisSheet As Worksheet
    Set analysisSheet = ThisWorkbook.Worksheets.Add
    analysisSheet.Name = "AI Analysis"
    
    ' Format results
    With analysisSheet
        .Range("A1").Value = "Analysis Date:"
        .Range("B1").Value = Now
        .Range("A3").Value = "AI Insights:"
        .Range("A4").Value = analysisResult
        
        ' Add formatting
        .Range("A1:B1").Font.Bold = True
        .Range("A3").Font.Bold = True
        .Columns.AutoFit
    End With
    
    ' Create visualization
    CreateAIChart analysisSheet
End Sub

' Helper function to call AI service
Private Function CallAIService(data As Variant) As String
    Dim http As Object
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    Dim url As String
    url = "https://api.example.com/analyze-data"
    
    ' Convert data to JSON
    Dim json As String
    json = ConvertToJSON(data)
    
    With http
        .Open "POST", url, False
        .setRequestHeader "Content-Type", "application/json"
        .setRequestHeader "Authorization", "Bearer YOUR_API_KEY"
        .send json
        
        If .Status = 200 Then
            CallAIService = .responseText
        Else
            Err.Raise vbObjectError + 1, "CallAIService", "API Error: " & .statusText
        End If
    End With
End Function

' Create visualization based on AI insights
Private Sub CreateAIChart(sheet As Worksheet)
    Dim chart As Chart
    Set chart = sheet.Shapes.AddChart2(240, xlColumnClustered).Chart
    
    ' Configure chart based on AI analysis
    With chart
        .SetSourceData sheet.Range("A4:B4")
        .HasTitle = True
        .ChartTitle.Text = "AI Analysis Results"
        .Parent.Left = sheet.Range("A6").Left
        .Parent.Top = sheet.Range("A6").Top
    End With
End Sub`}
                </code>
              </pre>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Zap className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <span className="font-medium">Pro Tip:</span> Always validate AI-generated insights with your business logic before making decisions.
                  </p>
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
            <Settings className="h-5 w-5 text-gray-600" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Terminal className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Error Handling</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                  <li>Always implement robust error handling for API calls</li>
                  <li>Validate AI results before processing</li>
                  <li>Include fallback mechanisms for failed AI operations</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Performance Optimization</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                  <li>Cache AI results when possible</li>
                  <li>Optimize data processing before sending to AI services</li>
                  <li>Implement proper timeouts and retry mechanisms</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileCode className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Code Organization</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                  <li>Separate AI-specific code into dedicated modules</li>
                  <li>Use clear naming conventions for AI-related functions</li>
                  <li>Document AI integration points thoroughly</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <div className="flex justify-between items-center pt-4">
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          Estimated time to complete: 60 minutes
        </div>
        {onContinue && (
          <Button onClick={onContinue} className="bg-emerald-600 hover:bg-emerald-700">
            Continue to Next Lesson
          </Button>
        )}
      </div>
    </div>
  );
};

export default VbaAiAutomationLesson;
