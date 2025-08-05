import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Code2, 
  Database, 
  Settings, 
  CheckCircle,
  AlertTriangle,
  Monitor,
  Bot,
  Key,
  Network,
  Clock
} from "lucide-react";
import CopyableContent from './CopyableContent';

interface VBAAPICallsLessonProps {
  onContinue: () => void;
}

const VBAAPICallsLesson: React.FC<VBAAPICallsLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
          <Globe className="h-4 w-4" />
          VBA AI Automation - Lesson 2
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          API Calls from VBA
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master HTTP requests to AI APIs using VBA with hands-on OpenAI integration
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            45 minutes
          </div>
          <Badge variant="secondary">Intermediate</Badge>
        </div>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Master HTTP requests in VBA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Connect to OpenAI API securely</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Handle JSON requests/responses</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Implement error handling</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Build production-ready integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Create intelligent automation</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prerequisites */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <Settings className="h-5 w-5" />
            Prerequisites & Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Key className="h-4 w-4 text-orange-600" />
                Required Setup
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>OpenAI API account and key</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Excel 2016+ with VBA enabled</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Internet connection</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Network className="h-4 w-4 text-orange-600" />
                HTTP Methods
              </h4>
              <div className="space-y-2 text-sm">
                <div><strong>GET:</strong> Retrieve data</div>
                <div><strong>POST:</strong> Send data (OpenAI)</div>
                <div><strong>Headers:</strong> Authorization, Content-Type</div>
                <div><strong>Status:</strong> 200 (Success), 429 (Rate limit)</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Project */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5 text-learning-orange" />
            Hands-on Project: OpenAI API Integration
          </CardTitle>
          <CardDescription>
            Build a complete VBA solution for AI-powered business analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <h3 className="text-xl font-semibold text-blue-900">Business AI Consultant System</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-white border border-blue-200 rounded">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Database className="h-4 w-4 text-blue-600" />
                  Sample Business Questions Data
                </h4>
                
                <CopyableContent 
                  content={`Question_ID	Category	Business_Question	Context	Expected_Output
Q001	Sales	How can we increase quarterly sales by 15%?	Current sales: $2.5M, Team: 12 reps, Market: B2B SaaS	Strategy recommendations
Q002	Marketing	What marketing channels should we prioritize?	Budget: $50K/month, Target: SMB, Current: Google Ads	Channel analysis
Q003	Operations	How to reduce support response time to 1 hour?	Team: 8 agents, Tickets: 200/day, Tools: Zendesk	Process optimization
Q004	Finance	Cost-cutting measures to save $100K annually?	Revenue: $10M, Expenses: $8M, Team: 45 employees	Cost analysis
Q005	HR	Improve employee retention rate to 95%?	Turnover: 15%, Exit reasons: Career growth, compensation	Retention strategies
Q006	Product	What features to prioritize in next release?	Users: 5000, Feedback: 200 requests, Dev: 3 months	Feature prioritization
Q007	Customer Success	Increase satisfaction scores from 4.2 to 4.7?	NPS: 45, CSAT: 4.2/5, Churn: 8%, Tickets: 150/month	Satisfaction improvement
Q008	Technology	Technology stack for mobile app development?	Timeline: 6 months, Budget: $200K, Platforms: iOS/Android	Technology recommendations
Q009	Strategy	Should we expand to European market?	Current: North America, Revenue: $5M, Team: 25	Market analysis
Q010	Legal	GDPR compliance requirements needed?	Business: SaaS, Users: EU residents, Data: Personal info	Compliance checklist`}
                  label="Business Questions Data"
                >
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-xs border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-2 py-1 text-left">Question_ID</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Category</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Business_Question</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Context</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Expected_Output</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border border-gray-300 px-2 py-1">Q001</td><td className="border border-gray-300 px-2 py-1">Sales</td><td className="border border-gray-300 px-2 py-1">How can we increase quarterly sales by 15%?</td><td className="border border-gray-300 px-2 py-1">Current sales: $2.5M, Team: 12 reps</td><td className="border border-gray-300 px-2 py-1">Strategy recommendations</td></tr>
                        <tr><td className="border border-gray-300 px-2 py-1">Q002</td><td className="border border-gray-300 px-2 py-1">Marketing</td><td className="border border-gray-300 px-2 py-1">What marketing channels should we prioritize?</td><td className="border border-gray-300 px-2 py-1">Budget: $50K/month, Target: SMB</td><td className="border border-gray-300 px-2 py-1">Channel analysis</td></tr>
                        <tr><td className="border border-gray-300 px-2 py-1">Q003</td><td className="border border-gray-300 px-2 py-1">Operations</td><td className="border border-gray-300 px-2 py-1">How to reduce support response time to 1 hour?</td><td className="border border-gray-300 px-2 py-1">Team: 8 agents, Tickets: 200/day</td><td className="border border-gray-300 px-2 py-1">Process optimization</td></tr>
                        <tr><td className="border border-gray-300 px-2 py-1">Q004</td><td className="border border-gray-300 px-2 py-1">Finance</td><td className="border border-gray-300 px-2 py-1">Cost-cutting measures to save $100K annually?</td><td className="border border-gray-300 px-2 py-1">Revenue: $10M, Expenses: $8M</td><td className="border border-gray-300 px-2 py-1">Cost analysis</td></tr>
                        <tr><td className="border border-gray-300 px-2 py-1">Q005</td><td className="border border-gray-300 px-2 py-1">HR</td><td className="border border-gray-300 px-2 py-1">Improve employee retention rate to 95%?</td><td className="border border-gray-300 px-2 py-1">Turnover: 15%, Exit reasons: Career growth</td><td className="border border-gray-300 px-2 py-1">Retention strategies</td></tr>
                      </tbody>
                    </table>
                  </div>
                </CopyableContent>
              </div>

              <div className="p-4 bg-white border border-blue-200 rounded">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-blue-600" />
                  Step-by-Step Implementation
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <p className="font-medium text-sm">Set Up Excel Workbook</p>
                      <p className="text-xs text-muted-foreground">Create worksheets: Config, BusinessQuestions, AIResponses</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <p className="font-medium text-sm">Configure API Settings</p>
                      <p className="text-xs text-muted-foreground">Add OpenAI API key in Config sheet (B2 cell)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <p className="font-medium text-sm">Import Sample Data</p>
                      <p className="text-xs text-muted-foreground">Copy business questions data to BusinessQuestions worksheet</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                    <div>
                      <p className="font-medium text-sm">Install VBA Code</p>
                      <p className="text-xs text-muted-foreground">Add the OpenAI API module to VBA editor</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</div>
                    <div>
                      <p className="font-medium text-sm">Test Single API Call</p>
                      <p className="text-xs text-muted-foreground">Test with one business question to verify connection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">6</div>
                    <div>
                      <p className="font-medium text-sm">Process All Questions</p>
                      <p className="text-xs text-muted-foreground">Run ProcessBusinessQuestions() to analyze all data</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-blue-200 rounded">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Bot className="h-4 w-4 text-blue-600" />
                  Core OpenAI API Module
                </h4>
                
                <CopyableContent 
                  content={`' OpenAI API Module for VBA
Option Explicit

Private Const OPENAI_API_URL As String = "https://api.openai.com/v1/chat/completions"
Private Const MAX_RETRIES As Integer = 3

Public Function CallOpenAI(prompt As String, Optional model As String = "gpt-3.5-turbo") As String
    Dim http As Object
    Dim apiKey As String
    Dim requestBody As String
    Dim response As String
    Dim retryCount As Integer
    
    ' Get API key from Config worksheet
    apiKey = ThisWorkbook.Worksheets("Config").Range("B2").Value
    If apiKey = "" Then
        CallOpenAI = "Error: API key not configured"
        Exit Function
    End If
    
    ' Create HTTP object
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    ' Build JSON request
    requestBody = "{"
    requestBody = requestBody & """model"": """ & model & ""","
    requestBody = requestBody & """messages"": [{"
    requestBody = requestBody & """role"": ""user"","
    requestBody = requestBody & """content"": """ & EscapeJSON(prompt) & """"
    requestBody = requestBody & "}],"
    requestBody = requestBody & """max_tokens"": 1000,"
    requestBody = requestBody & """temperature"": 0.7"
    requestBody = requestBody & "}"
    
    ' Retry logic for robust API calls
    For retryCount = 1 To MAX_RETRIES
        On Error GoTo ErrorHandler
        
        With http
            .Open "POST", OPENAI_API_URL, False
            .setRequestHeader "Content-Type", "application/json"
            .setRequestHeader "Authorization", "Bearer " & apiKey
            .send requestBody
        End With
        
        If http.Status = 200 Then
            response = http.responseText
            CallOpenAI = ParseResponse(response)
            Exit Function
        ElseIf http.Status = 429 Then
            Application.Wait DateAdd("s", 2 ^ retryCount, Now)
        End If
        
        GoTo NextRetry
ErrorHandler:
        Application.Wait DateAdd("s", 1, Now)
NextRetry:
    Next retryCount
    
    CallOpenAI = "Error: Failed after " & MAX_RETRIES & " attempts"
End Function

Private Function ParseResponse(jsonResponse As String) As String
    Dim startPos As Long, endPos As Long
    Dim content As String
    
    startPos = InStr(jsonResponse, """content"": """)
    If startPos > 0 Then
        startPos = startPos + 12
        endPos = InStr(startPos, jsonResponse, """,")
        If endPos = 0 Then endPos = InStr(startPos, jsonResponse, """}")
        
        If endPos > startPos Then
            content = Mid(jsonResponse, startPos, endPos - startPos)
            content = Replace(content, "\n", vbCrLf)
            content = Replace(content, "\""", """")
            ParseResponse = content
        Else
            ParseResponse = "Error: Could not parse response"
        End If
    Else
        ParseResponse = "Error: Invalid response format"
    End If
End Function

Private Function EscapeJSON(text As String) As String
    Dim result As String
    result = text
    result = Replace(result, "\", "\\")
    result = Replace(result, """", "\""")
    result = Replace(result, vbCrLf, "\n")
    EscapeJSON = result
End Function

Public Sub ProcessBusinessQuestions()
    Dim ws As Worksheet
    Dim responseWs As Worksheet
    Dim lastRow As Long
    Dim i As Long
    Dim question As String
    Dim context As String
    Dim fullPrompt As String
    Dim response As String
    
    Set ws = ThisWorkbook.Worksheets("BusinessQuestions")
    Set responseWs = ThisWorkbook.Worksheets("AIResponses")
    
    ' Setup response sheet
    responseWs.Cells.Clear
    responseWs.Range("A1:E1").Value = Array("Question_ID", "Category", "Question", "AI_Response", "Timestamp")
    
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
    
    For i = 2 To lastRow
        question = ws.Cells(i, 3).Value
        context = ws.Cells(i, 4).Value
        
        fullPrompt = "As a business consultant, provide detailed recommendations for: " & vbCrLf
        fullPrompt = fullPrompt & "Question: " & question & vbCrLf
        fullPrompt = fullPrompt & "Context: " & context & vbCrLf
        fullPrompt = fullPrompt & "Please provide specific, actionable recommendations."
        
        response = CallOpenAI(fullPrompt)
        
        With responseWs
            .Cells(i - 1, 1).Value = ws.Cells(i, 1).Value
            .Cells(i - 1, 2).Value = ws.Cells(i, 2).Value
            .Cells(i - 1, 3).Value = question
            .Cells(i - 1, 4).Value = response
            .Cells(i - 1, 5).Value = Now
        End With
        
        Application.StatusBar = "Processing question " & (i - 1) & " of " & (lastRow - 1)
        DoEvents
        Application.Wait DateAdd("s", 1, Now)
    Next i
    
    ' Format worksheet
    With responseWs
        .Columns("A:E").AutoFit
        .Range("A1:E1").Font.Bold = True
        .Range("D:D").WrapText = True
        .Range("D:D").ColumnWidth = 50
    End With
    
    Application.StatusBar = False
    MsgBox "Processing complete! " & (lastRow - 1) & " questions processed."
End Sub`}
                  label="OpenAI API VBA Module"
                >
                  <pre className="text-sm bg-gray-50 p-3 rounded border overflow-x-auto">
                    <code>{`' OpenAI API Module for VBA
Public Function CallOpenAI(prompt As String) As String
    Dim http As Object
    Dim apiKey As String
    Dim requestBody As String
    
    ' Get API key from Config worksheet
    apiKey = ThisWorkbook.Worksheets("Config").Range("B2").Value
    
    ' Create HTTP object and build request
    Set http = CreateObject("MSXML2.XMLHTTP")
    requestBody = BuildJSONRequest(prompt)
    
    ' Make API call
    With http
        .Open "POST", "https://api.openai.com/v1/chat/completions", False
        .setRequestHeader "Content-Type", "application/json"
        .setRequestHeader "Authorization", "Bearer " & apiKey
        .send requestBody
    End With
    
    ' Parse and return response
    CallOpenAI = ParseResponse(http.responseText)
End Function

Public Sub ProcessBusinessQuestions()
    ' Process all business questions with AI analysis
    ' Creates detailed recommendations in AIResponses sheet
End Sub`}</code>
                  </pre>
                </CopyableContent>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Best Practices & Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-800 mb-3">✅ Do's</h4>
              <div className="space-y-2 text-sm">
                <div>• Store API keys securely (not in code)</div>
                <div>• Implement retry logic for reliability</div>
                <div>• Add rate limiting between requests</div>
                <div>• Validate responses before processing</div>
                <div>• Use error handling for all HTTP calls</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-3">❌ Don'ts</h4>
              <div className="space-y-2 text-sm">
                <div>• Don't hardcode API keys in VBA code</div>
                <div>• Don't ignore HTTP status codes</div>
                <div>• Don't make calls without rate limiting</div>
                <div>• Don't skip JSON escaping for user input</div>
                <div>• Don't process responses without validation</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      <div className="flex justify-center pt-6">
        <Button 
          onClick={onContinue}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          Continue to Next Lesson
        </Button>
      </div>
    </div>
  );
};

export default VBAAPICallsLesson;
