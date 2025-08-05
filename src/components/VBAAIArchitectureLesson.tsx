import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  CheckCircle, 
  Code2, 
  Database, 
  Bot, 
  Zap, 
  Settings, 
  Shield, 
  Clock,
  AlertTriangle,
  Lightbulb,
  FileCode,
  Network,
  Layers,
  GitBranch,
  Monitor
} from "lucide-react";
import CopyableContent from './CopyableContent';
import VBAAIArchitectureProjects from './VBAAIArchitectureProjects';

interface VBAAIArchitectureLessonProps {
  onContinue: () => void;
}

const VBAAIArchitectureLesson: React.FC<VBAAIArchitectureLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-success-green to-excel-green-light rounded-xl">
            <Bot className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-success-green to-excel-green-light bg-clip-text text-transparent">
              VBA + AI Architecture
            </h1>
            <p className="text-muted-foreground">Design patterns for combining VBA with AI services</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            90 minutes
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Code2 className="h-3 w-3" />
            Advanced
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Bot className="h-3 w-3" />
            AI Integration
          </Badge>
        </div>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success-green" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
              <span>Design scalable VBA + AI architecture patterns</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
              <span>Implement secure API integration with error handling</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
              <span>Build modular AI service abstraction layers</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
              <span>Create performance-optimized AI-VBA workflows</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
              <span>Develop enterprise-ready AI integration solutions</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Architecture Patterns Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-excel-blue" />
            VBA + AI Architecture Patterns
          </CardTitle>
          <CardDescription>
            Essential design patterns for integrating AI services with VBA applications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-800">
              <strong>🏗️ Architecture Foundation:</strong> These patterns form the backbone of scalable AI-VBA integration. 
              Each pattern addresses specific challenges in enterprise AI deployment and maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="h-5 w-5 text-success-green" />
                <h4 className="font-semibold text-success-green">Service Layer Pattern</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Abstract AI services behind a consistent interface for easy switching and testing
              </p>
              <div className="bg-green-50 p-2 rounded text-xs">
                <strong>Use Case:</strong> When you need to support multiple AI providers (OpenAI, Azure, AWS) 
                or switch between different models without changing business logic.
              </div>
            </div>

            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Network className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-600">Request-Response Pattern</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Standardize AI communication with structured request/response objects
              </p>
              <div className="bg-blue-50 p-2 rounded text-xs">
                <strong>Use Case:</strong> Ensures consistent data flow and enables comprehensive 
                logging, caching, and error handling across all AI interactions.
              </div>
            </div>

            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Database className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-600">Cache-First Pattern</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Implement intelligent caching to reduce API calls and improve performance
              </p>
              <div className="bg-purple-50 p-2 rounded text-xs">
                <strong>Use Case:</strong> For repetitive queries or expensive AI operations. 
                Can reduce costs by 60-80% and improve response times significantly.
              </div>
            </div>

            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="h-5 w-5 text-orange-600" />
                <h4 className="font-semibold text-orange-600">Circuit Breaker Pattern</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Prevent cascading failures when AI services are unavailable or slow
              </p>
              <div className="bg-orange-50 p-2 rounded text-xs">
                <strong>Use Case:</strong> Essential for production systems. Automatically 
                switches to fallback behavior when AI services fail or exceed timeout limits.
              </div>
            </div>

            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Settings className="h-5 w-5 text-indigo-600" />
                <h4 className="font-semibold text-indigo-600">Configuration Pattern</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Centralize AI service configuration for easy management and deployment
              </p>
              <div className="bg-indigo-50 p-2 rounded text-xs">
                <strong>Use Case:</strong> Enables different configurations for development, 
                testing, and production environments without code changes.
              </div>
            </div>

            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-red-600">Security Wrapper Pattern</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Implement security controls, input validation, and audit logging
              </p>
              <div className="bg-red-50 p-2 rounded text-xs">
                <strong>Use Case:</strong> Critical for enterprise deployments. Handles 
                API key security, data sanitization, and compliance requirements.
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Network className="h-4 w-4 text-excel-blue" />
                <h4 className="font-semibold">API Gateway Pattern</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Centralize API calls through a single gateway for rate limiting and monitoring
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Database className="h-4 w-4 text-learning-orange" />
                <h4 className="font-semibold">Cache-First Pattern</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Cache AI responses to reduce API calls and improve performance
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-4 w-4 text-accent" />
                <h4 className="font-semibold">Async Processing Pattern</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Handle long-running AI operations without blocking the Excel UI
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-purple-600" />
            Implementation Guide: Building AI-VBA Architecture
          </CardTitle>
          <CardDescription>
            Step-by-step guide to implementing enterprise-grade AI integration patterns in VBA
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <p className="text-sm text-purple-800">
              <strong>🛠️ Implementation Strategy:</strong> Follow this systematic approach to build scalable, 
              maintainable AI-VBA integration. Each step builds upon the previous one to create a robust architecture.
            </p>
          </div>

          {/* Step 1: Service Layer Implementation */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
              Service Layer Implementation
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Create a unified interface for all AI services to enable easy switching between providers and consistent error handling.
            </p>
            
            <CopyableContent 
              content={`' AIServiceInterface Module - Core Service Layer
Public Enum AIProvider
    OpenAI = 1
    AzureOpenAI = 2
    AnthropicClaude = 3
    GooglePaLM = 4
End Enum

Public Type AIRequest
    Provider As AIProvider
    Model As String
    Prompt As String
    MaxTokens As Integer
    Temperature As Double
    SystemMessage As String
    RequestID As String
End Type

Public Type AIResponse
    Success As Boolean
    Content As String
    TokensUsed As Integer
    Cost As Double
    ResponseTime As Double
    ErrorMessage As String
    RequestID As String
End Type

' Main service interface function
Public Function CallAIService(request As AIRequest) As AIResponse
    Dim response As AIResponse
    
    ' Generate unique request ID for tracking
    request.RequestID = "REQ_" & Format(Now, "yyyymmddhhmmss") & "_" & Int(Rnd * 1000)
    
    ' Log request start
    LogAIRequest request
    
    ' Route to appropriate provider
    Select Case request.Provider
        Case OpenAI
            response = CallOpenAI(request)
        Case AzureOpenAI
            response = CallAzureOpenAI(request)
        Case AnthropicClaude
            response = CallClaude(request)
        Case GooglePaLM
            response = CallPaLM(request)
        Case Else
            response.Success = False
            response.ErrorMessage = "Unsupported AI provider"
    End Select
    
    ' Log response
    LogAIResponse response
    
    CallAIService = response
End Function

Private Sub LogAIRequest(request As AIRequest)
    ' Log to AIRequestLog worksheet
    Dim ws As Worksheet
    Set ws = GetOrCreateWorksheet("AIRequestLog")
    
    Dim lastRow As Long
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row + 1
    
    With ws
        .Cells(lastRow, 1).Value = request.RequestID
        .Cells(lastRow, 2).Value = request.Provider
        .Cells(lastRow, 3).Value = request.Model
        .Cells(lastRow, 4).Value = Left(request.Prompt, 100) & "..."
        .Cells(lastRow, 5).Value = Now
    End With
End Sub`}
              label="Service Layer Implementation"
            >
              <pre className="text-sm bg-gray-50 p-3 rounded border overflow-x-auto">
                <code>{`' AIServiceInterface Module - Core Service Layer
Public Enum AIProvider
    OpenAI = 1
    AzureOpenAI = 2
    AnthropicClaude = 3
    GooglePaLM = 4
End Enum

Public Type AIRequest
    Provider As AIProvider
    Model As String
    Prompt As String
    MaxTokens As Integer
    Temperature As Double
    SystemMessage As String
    RequestID As String
End Type

' Main service interface function
Public Function CallAIService(request As AIRequest) As AIResponse
    ' Route to appropriate provider with logging
    Select Case request.Provider
        Case OpenAI: response = CallOpenAI(request)
        Case AzureOpenAI: response = CallAzureOpenAI(request)
        ' ... other providers
    End Select
    
    CallAIService = response
End Function`}</code>
              </pre>
            </CopyableContent>
          </div>

          {/* Step 2: Configuration Management */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
              Configuration Management System
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Centralize all AI service configurations for easy management across environments (dev, test, production).
            </p>
            
            <CopyableContent 
              content={`' AIConfiguration Module - Centralized Config Management
Public Type AIConfig
    DefaultProvider As AIProvider
    OpenAIKey As String
    OpenAIEndpoint As String
    AzureKey As String
    AzureEndpoint As String
    DefaultModel As String
    DefaultMaxTokens As Integer
    DefaultTemperature As Double
    CacheEnabled As Boolean
    CacheDurationMinutes As Integer
    RetryAttempts As Integer
    TimeoutSeconds As Integer
    RateLimitDelay As Integer
End Type

Private m_Config As AIConfig
Private m_ConfigLoaded As Boolean

Public Function GetAIConfig() As AIConfig
    If Not m_ConfigLoaded Then
        LoadConfiguration
    End If
    GetAIConfig = m_Config
End Function

Private Sub LoadConfiguration()
    Dim configWs As Worksheet
    Set configWs = GetOrCreateWorksheet("AIConfig")
    
    ' Create default configuration if worksheet is empty
    If configWs.Cells(1, 1).Value = "" Then
        CreateDefaultConfiguration configWs
    End If
    
    ' Load configuration from worksheet
    With m_Config
        .DefaultProvider = configWs.Range("B1").Value
        .OpenAIKey = configWs.Range("B2").Value
        .OpenAIEndpoint = configWs.Range("B3").Value
        .AzureKey = configWs.Range("B4").Value
        .AzureEndpoint = configWs.Range("B5").Value
        .DefaultModel = configWs.Range("B6").Value
        .DefaultMaxTokens = configWs.Range("B7").Value
        .DefaultTemperature = configWs.Range("B8").Value
        .CacheEnabled = configWs.Range("B9").Value
        .CacheDurationMinutes = configWs.Range("B10").Value
        .RetryAttempts = configWs.Range("B11").Value
        .TimeoutSeconds = configWs.Range("B12").Value
        .RateLimitDelay = configWs.Range("B13").Value
    End With
    
    m_ConfigLoaded = True
End Sub

Private Sub CreateDefaultConfiguration(ws As Worksheet)
    ' Create configuration template
    With ws
        .Cells(1, 1).Value = "Default Provider": .Cells(1, 2).Value = 1
        .Cells(2, 1).Value = "OpenAI API Key": .Cells(2, 2).Value = "YOUR_OPENAI_KEY_HERE"
        .Cells(3, 1).Value = "OpenAI Endpoint": .Cells(3, 2).Value = "https://api.openai.com/v1/chat/completions"
        .Cells(4, 1).Value = "Azure API Key": .Cells(4, 2).Value = "YOUR_AZURE_KEY_HERE"
        .Cells(5, 1).Value = "Azure Endpoint": .Cells(5, 2).Value = "YOUR_AZURE_ENDPOINT_HERE"
        .Cells(6, 1).Value = "Default Model": .Cells(6, 2).Value = "gpt-4"
        .Cells(7, 1).Value = "Max Tokens": .Cells(7, 2).Value = 1000
        .Cells(8, 1).Value = "Temperature": .Cells(8, 2).Value = 0.7
        .Cells(9, 1).Value = "Cache Enabled": .Cells(9, 2).Value = True
        .Cells(10, 1).Value = "Cache Duration (min)": .Cells(10, 2).Value = 60
        .Cells(11, 1).Value = "Retry Attempts": .Cells(11, 2).Value = 3
        .Cells(12, 1).Value = "Timeout (sec)": .Cells(12, 2).Value = 30
        .Cells(13, 1).Value = "Rate Limit Delay (ms)": .Cells(13, 2).Value = 1000
    End With
End Sub`}
              label="Configuration Management Code"
            >
              <pre className="text-sm bg-gray-50 p-3 rounded border overflow-x-auto">
                <code>{`' AIConfiguration Module - Centralized Config Management
Public Function GetAIConfig() As AIConfig
    If Not m_ConfigLoaded Then LoadConfiguration
    GetAIConfig = m_Config
End Function

Private Sub LoadConfiguration()
    ' Load from AIConfig worksheet
    Dim configWs As Worksheet
    Set configWs = GetOrCreateWorksheet("AIConfig")
    
    With m_Config
        .DefaultProvider = configWs.Range("B1").Value
        .OpenAIKey = configWs.Range("B2").Value
        .DefaultModel = configWs.Range("B6").Value
        .CacheEnabled = configWs.Range("B9").Value
        ' ... load other settings
    End With
End Sub`}</code>
              </pre>
            </CopyableContent>
          </div>

          {/* Step 3: Caching Implementation */}
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
              Intelligent Caching System
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Implement smart caching to reduce API costs and improve response times for repeated queries.
            </p>
            
            <CopyableContent 
              content={`' AICacheManager Module - Smart Caching Implementation
Public Type CacheEntry
    Key As String
    Content As String
    Timestamp As Date
    TokensUsed As Integer
    Cost As Double
    HitCount As Integer
End Type

Private m_CacheEntries As Collection

Public Function GetCachedResponse(prompt As String, model As String) As String
    Dim cacheKey As String
    cacheKey = GenerateCacheKey(prompt, model)
    
    Dim entry As CacheEntry
    If TryGetCacheEntry(cacheKey, entry) Then
        If IsCacheEntryValid(entry) Then
            ' Update hit count
            entry.HitCount = entry.HitCount + 1
            UpdateCacheEntry cacheKey, entry
            
            ' Log cache hit
            LogCacheHit cacheKey
            
            GetCachedResponse = entry.Content
            Exit Function
        Else
            ' Remove expired entry
            RemoveCacheEntry cacheKey
        End If
    End If
    
    ' Cache miss
    GetCachedResponse = ""
End Function

Public Sub StoreCachedResponse(prompt As String, model As String, response As String, tokensUsed As Integer, cost As Double)
    Dim config As AIConfig
    config = GetAIConfig()
    
    If Not config.CacheEnabled Then Exit Sub
    
    Dim cacheKey As String
    cacheKey = GenerateCacheKey(prompt, model)
    
    Dim entry As CacheEntry
    With entry
        .Key = cacheKey
        .Content = response
        .Timestamp = Now
        .TokensUsed = tokensUsed
        .Cost = cost
        .HitCount = 0
    End With
    
    ' Store in memory cache
    If m_CacheEntries Is Nothing Then
        Set m_CacheEntries = New Collection
    End If
    
    On Error Resume Next
    m_CacheEntries.Remove cacheKey
    On Error GoTo 0
    
    m_CacheEntries.Add entry, cacheKey
    
    ' Store in worksheet for persistence
    StoreCacheEntryToWorksheet entry
    
    ' Clean up old entries
    CleanupExpiredEntries
End Sub

Private Function GenerateCacheKey(prompt As String, model As String) As String
    ' Create hash-like key for caching
    Dim combined As String
    combined = model & "|" & prompt
    
    ' Simple hash function (in production, use proper hashing)
    Dim hash As Long
    Dim i As Integer
    For i = 1 To Len(combined)
        hash = ((hash * 31) + Asc(Mid(combined, i, 1))) Mod 2147483647
    Next i
    
    GenerateCacheKey = "CACHE_" & Abs(hash)
End Function

Private Function IsCacheEntryValid(entry As CacheEntry) As Boolean
    Dim config As AIConfig
    config = GetAIConfig()
    
    Dim minutesElapsed As Double
    minutesElapsed = (Now - entry.Timestamp) * 24 * 60
    
    IsCacheEntryValid = (minutesElapsed <= config.CacheDurationMinutes)
End Function`}
              label="Caching System Implementation"
            >
              <pre className="text-sm bg-gray-50 p-3 rounded border overflow-x-auto">
                <code>{`' AICacheManager Module - Smart Caching Implementation
Public Function GetCachedResponse(prompt As String, model As String) As String
    Dim cacheKey As String
    cacheKey = GenerateCacheKey(prompt, model)
    
    Dim entry As CacheEntry
    If TryGetCacheEntry(cacheKey, entry) Then
        If IsCacheEntryValid(entry) Then
            entry.HitCount = entry.HitCount + 1
            GetCachedResponse = entry.Content
            Exit Function
        End If
    End If
    
    GetCachedResponse = "" ' Cache miss
End Function

Public Sub StoreCachedResponse(prompt As String, model As String, response As String)
    ' Store response with timestamp for future retrieval
    Dim entry As CacheEntry
    entry.Key = GenerateCacheKey(prompt, model)
    entry.Content = response
    entry.Timestamp = Now
    
    m_CacheEntries.Add entry, entry.Key
End Sub`}</code>
              </pre>
            </CopyableContent>
          </div>

          {/* Step 4: Error Handling and Circuit Breaker */}
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
              <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
              Circuit Breaker & Error Handling
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Implement robust error handling with circuit breaker pattern to prevent cascading failures.
            </p>
            
            <CopyableContent 
              content={`' CircuitBreaker Module - Fault Tolerance Implementation
Public Enum CircuitState
    Closed = 0      ' Normal operation
    Open = 1        ' Circuit is open, failing fast
    HalfOpen = 2    ' Testing if service is back
End Enum

Public Type CircuitBreakerConfig
    FailureThreshold As Integer
    TimeoutSeconds As Integer
    RetryTimeoutSeconds As Integer
End Type

Private m_State As CircuitState
Private m_FailureCount As Integer
Private m_LastFailureTime As Date
Private m_Config As CircuitBreakerConfig

Public Function ExecuteWithCircuitBreaker(request As AIRequest) As AIResponse
    Dim response As AIResponse
    
    ' Initialize circuit breaker if needed
    If m_Config.FailureThreshold = 0 Then
        InitializeCircuitBreaker
    End If
    
    Select Case m_State
        Case Closed
            response = ExecuteRequest(request)
            If response.Success Then
                ResetCircuitBreaker
            Else
                RecordFailure
            End If
            
        Case Open
            If ShouldAttemptReset() Then
                m_State = HalfOpen
                response = ExecuteRequest(request)
                If response.Success Then
                    ResetCircuitBreaker
                Else
                    m_State = Open
                    m_LastFailureTime = Now
                End If
            Else
                ' Fail fast
                response.Success = False
                response.ErrorMessage = "Circuit breaker is OPEN - service unavailable"
            End If
            
        Case HalfOpen
            response = ExecuteRequest(request)
            If response.Success Then
                ResetCircuitBreaker
            Else
                m_State = Open
                m_LastFailureTime = Now
            End If
    End Select
    
    ExecuteWithCircuitBreaker = response
End Function

Private Function ExecuteRequest(request As AIRequest) As AIResponse
    Dim response As AIResponse
    Dim attempt As Integer
    Dim config As AIConfig
    config = GetAIConfig()
    
    For attempt = 1 To config.RetryAttempts
        response = CallAIService(request)
        
        If response.Success Then
            Exit For
        End If
        
        ' Wait before retry (exponential backoff)
        If attempt < config.RetryAttempts Then
            Application.Wait Now + TimeValue("00:00:" & Format(2 ^ attempt, "00"))
        End If
    Next attempt
    
    ExecuteRequest = response
End Function

Private Sub RecordFailure()
    m_FailureCount = m_FailureCount + 1
    m_LastFailureTime = Now
    
    If m_FailureCount >= m_Config.FailureThreshold Then
        m_State = Open
        LogCircuitBreakerEvent "Circuit breaker opened due to " & m_FailureCount & " failures"
    End If
End Sub

Private Sub ResetCircuitBreaker()
    m_State = Closed
    m_FailureCount = 0
    LogCircuitBreakerEvent "Circuit breaker reset - service restored"
End Sub

Private Function ShouldAttemptReset() As Boolean
    Dim secondsElapsed As Double
    secondsElapsed = (Now - m_LastFailureTime) * 24 * 60 * 60
    ShouldAttemptReset = (secondsElapsed >= m_Config.RetryTimeoutSeconds)
End Function`}
              label="Circuit Breaker Implementation"
            >
              <pre className="text-sm bg-gray-50 p-3 rounded border overflow-x-auto">
                <code>{`' CircuitBreaker Module - Fault Tolerance Implementation
Public Function ExecuteWithCircuitBreaker(request As AIRequest) As AIResponse
    Select Case m_State
        Case Closed
            response = ExecuteRequest(request)
            If response.Success Then
                ResetCircuitBreaker
            Else
                RecordFailure
            End If
            
        Case Open
            If ShouldAttemptReset() Then
                m_State = HalfOpen
                ' Try one request
            Else
                ' Fail fast - don't call API
                response.ErrorMessage = "Circuit breaker OPEN"
            End If
    End Select
End Function`}</code>
              </pre>
            </CopyableContent>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
              Implementation Best Practices
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-blue-600 mb-1">Modular Design</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Separate modules for each pattern (Service, Cache, Config, Circuit Breaker)</li>
                  <li>• Use consistent interfaces across all modules</li>
                  <li>• Implement proper error handling in each layer</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-600 mb-1">Testing Strategy</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Create mock AI services for testing</li>
                  <li>• Test circuit breaker with simulated failures</li>
                  <li>• Validate caching with different scenarios</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-600 mb-1">Performance Optimization</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Use asynchronous patterns where possible</li>
                  <li>• Implement request batching for bulk operations</li>
                  <li>• Monitor and log performance metrics</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-red-600 mb-1">Security Considerations</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Never hardcode API keys in VBA code</li>
                  <li>• Validate and sanitize all input data</li>
                  <li>• Implement audit logging for compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-success-green" />
            Architecture Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-success-green mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Do's
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-3 w-3 text-success-green mt-1 flex-shrink-0" />
                  <span>Use modular design with clear separation of concerns</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-3 w-3 text-success-green mt-1 flex-shrink-0" />
                  <span>Implement comprehensive error handling and logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-3 w-3 text-success-green mt-1 flex-shrink-0" />
                  <span>Cache responses to minimize API calls and costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-3 w-3 text-success-green mt-1 flex-shrink-0" />
                  <span>Use secure credential management</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-3 w-3 text-success-green mt-1 flex-shrink-0" />
                  <span>Implement rate limiting and retry logic</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Don'ts
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-3 w-3 text-red-600 mt-1 flex-shrink-0" />
                  <span>Don't hardcode API keys in VBA code</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-3 w-3 text-red-600 mt-1 flex-shrink-0" />
                  <span>Don't make synchronous calls without user feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-3 w-3 text-red-600 mt-1 flex-shrink-0" />
                  <span>Don't ignore API rate limits and quotas</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-3 w-3 text-red-600 mt-1 flex-shrink-0" />
                  <span>Don't create tight coupling between AI services and business logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-3 w-3 text-red-600 mt-1 flex-shrink-0" />
                  <span>Don't skip input validation and sanitization</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Projects */}
      <VBAAIArchitectureProjects />

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-learning-orange" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="bg-learning-orange text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">1</span>
              <span className="text-sm">Proper architecture is crucial for scalable AI-VBA integration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-learning-orange text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">2</span>
              <span className="text-sm">Service abstraction layers enable easy switching between AI providers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-learning-orange text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">3</span>
              <span className="text-sm">Caching and error handling are essential for production systems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-learning-orange text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">4</span>
              <span className="text-sm">Security and performance considerations must be built in from the start</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-learning-orange text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">5</span>
              <span className="text-sm">Modular design enables easier testing and maintenance</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-center pt-6">
        <Button onClick={onContinue} className="bg-gradient-to-r from-success-green to-excel-green-light hover:from-success-green/90 hover:to-excel-green-light/90 text-white px-8 py-2">
          Continue to Next Lesson
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VBAAIArchitectureLesson;
