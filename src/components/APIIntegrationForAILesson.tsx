import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  CheckCircle, 
  Cpu,
  Lock,
  Network,
  AlertTriangle,
  Clock,
  Zap
} from "lucide-react";
import CopyableContent from "@/components/CopyableContent";

interface APIIntegrationForAILessonProps {
  onContinue?: () => void;
}

const APIIntegrationForAILesson: React.FC<APIIntegrationForAILessonProps> = ({ onContinue }) => {
  return (
    <div className="space-y-6">
      {/* Lesson Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Network className="h-8 w-8 text-blue-600" />
            API Integration for AI
          </CardTitle>
          <p className="text-gray-600 text-lg">Connect Excel VBA with AI services through APIs</p>
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
                  Making HTTP requests from VBA
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Handling API authentication and security
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Processing JSON responses in VBA
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Implementing error handling and timeouts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Managing API rate limits and quotas
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🏢 Business Applications</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Integrate with AI services like OpenAI, Azure AI, etc.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Automate data processing with cloud-based AI
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Create intelligent Excel add-ins with AI capabilities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Build custom AI-powered Excel functions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Connect to proprietary AI/ML models
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
            <Cpu className="h-5 w-5 text-purple-600" />
            Key Concepts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Network className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">HTTP Requests in VBA</h3>
                <p className="text-sm text-gray-600">Learn to make GET, POST, PUT, and DELETE requests using MSXML2.XMLHTTP or WinHttp.WinHttpRequest.5.1 objects.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Lock className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">API Authentication</h3>
                <p className="text-sm text-gray-600">Implement API key authentication, OAuth 2.0, and JWT tokens in your VBA applications.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Code className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">JSON Handling</h3>
                <p className="text-sm text-gray-600">Parse and create JSON objects using VBA-JSON or Dictionary objects for working with API responses.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Error Handling</h3>
                <p className="text-sm text-gray-600">Implement robust error handling for network issues, timeouts, and API-specific errors.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-indigo-600" />
            Example: Calling an AI API
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              This example shows how to call an AI API from VBA to get AI-generated text completion.
            </p>
            
            <div className="relative">
              <div className="absolute top-2 right-2 flex gap-2">
                <CopyableContent
                  content={`' Example VBA code for calling an AI API
Sub CallAIService()
    Dim http As Object
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    Dim url As String
    url = "https://api.example.com/ai-endpoint"
    
    Dim requestBody As String
    requestBody = "{""prompt"":""Your input here""}"
    
    On Error GoTo ErrorHandler
    
    With http
        .Open "POST", url, False
        .setRequestHeader "Content-Type", "application/json"
        .setRequestHeader "Authorization", "Bearer YOUR_API_KEY"
        .setRequestHeader "Accept", "application/json"
        .setTimeouts 30000, 30000, 30000, 30000 ' 30 second timeouts
        .send requestBody
        
        If .Status = 200 Then
            Dim response As String
            response = .responseText
            ' Process the JSON response here
            Debug.Print "API Response: " & response
        Else
            Err.Raise vbObjectError + 1, "CallAIService", _
                "API Request Failed: " & .Status & " - " & .statusText
        End If
    End With
    
    Exit Sub
    
ErrorHandler:
    MsgBox "Error " & Err.Number & ": " & Err.Description, vbCritical, "API Error"
    ' Log error details
    Debug.Print "Error " & Err.Number & ": " & Err.Description
    Debug.Print "Source: " & Err.Source
End Sub`}
                  label="Copy Code"
                />
              </div>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                <code className="text-xs">
                  {`' Example VBA code for calling an AI API
Sub CallAIService()
    Dim http As Object
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    Dim url As String
    url = "https://api.example.com/ai-endpoint"
    
    Dim requestBody As String
    requestBody = "{""prompt"":""Your input here""}"
    
    On Error GoTo ErrorHandler
    
    With http
        .Open "POST", url, False
        .setRequestHeader "Content-Type", "application/json"
        .setRequestHeader "Authorization", "Bearer YOUR_API_KEY"
        .setRequestHeader "Accept", "application/json"
        .setTimeouts 30000, 30000, 30000, 30000 ' 30 second timeouts
        .send requestBody
        
        If .Status = 200 Then
            Dim response As String
            response = .responseText
            ' Process the JSON response here
            Debug.Print "API Response: " & response
        Else
            Err.Raise vbObjectError + 1, "CallAIService", _
                "API Request Failed: " & .Status & " - " & .statusText
        End If
    End With
    
    Exit Sub
    
ErrorHandler:
    MsgBox "Error " & Err.Number & ": " & Err.Description, vbCritical, "API Error"
    ' Log error details
    Debug.Print "Error " & Err.Number & ": " & Err.Description
    Debug.Print "Source: " & Err.Source
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
                    <span className="font-medium">Pro Tip:</span> Always store your API keys securely using environment variables or a configuration file that's not committed to version control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <div className="flex justify-between items-center pt-4">
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          Estimated time to complete: 45 minutes
        </div>
        {onContinue && (
          <Button onClick={onContinue} className="bg-blue-600 hover:bg-blue-700">
            Continue to Next Lesson
          </Button>
        )}
      </div>
    </div>
  );
};

export default APIIntegrationForAILesson;
