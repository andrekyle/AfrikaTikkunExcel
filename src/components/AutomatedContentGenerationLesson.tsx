import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CheckCircle, 
  Clock,
  Brain,
  Zap,
  MessageSquare,
  BarChart3,
  FileCode,
  Bot
} from "lucide-react";
import CopyableContent from "@/components/CopyableContent";

interface AutomatedContentGenerationLessonProps {
  onContinue?: () => void;
}

const AutomatedContentGenerationLesson: React.FC<AutomatedContentGenerationLessonProps> = ({ onContinue }) => {
  return (
    <div className="space-y-6">
      {/* Lesson Header */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FileText className="h-8 w-8 text-purple-600" />
            Lesson 4: Automated Content Generation
          </CardTitle>
          <p className="text-gray-600 text-lg">Use AI to generate reports, summaries, and content</p>
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
                  AI-powered report generation using natural language processing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Automated content summarization and analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Dynamic template-based content creation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Multi-format content export (PDF, Word, HTML)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Intelligent content personalization and customization
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🏢 Business Applications</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Automated executive summary generation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Intelligent financial report creation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Dynamic client proposal generation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Automated compliance and audit reports
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Personalized customer communication
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Projects */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Hands-on Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Project 1: AI Report Generator */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FileText className="h-5 w-5 text-green-600" />
              Project 1: AI Report Generator
            </h3>
            <p className="text-gray-700 mb-4">Build an intelligent report generation system that automatically creates comprehensive business reports from raw data using AI analysis.</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-green-900 mb-2">📋 Step-by-Step Instructions:</h5>
              <div className="space-y-4 text-sm text-green-800">
                <div>
                  <h6 className="font-semibold mb-2">🔧 Phase 1: Report Generator Setup (10 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Create new workbook:</strong> "AI_Report_Generator.xlsx"</li>
                    <li><strong>Create 6 worksheets:</strong> "Raw_Data", "AI_Analysis", "Report_Templates", "Generated_Reports", "Content_Library", "Settings"</li>
                    <li><strong>Set up API configuration:</strong> Configure OpenAI API settings and authentication</li>
                    <li><strong>Design report structure:</strong> Define standard report sections and formatting</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📊 Phase 2: Data Analysis Engine (15 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to AI_Analysis sheet</strong> and import sample business data</li>
                    <li><strong>Create data profiling functions:</strong> Analyze data patterns, trends, and anomalies</li>
                    <li><strong>Build statistical summaries:</strong> Generate key metrics and performance indicators</li>
                    <li><strong>Implement trend detection:</strong> Identify growth patterns and seasonal variations</li>
                    <li><strong>Set up insight generation:</strong> Create AI prompts for data interpretation</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">🤖 Phase 3: AI Content Generation (20 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Report_Templates sheet</strong> and design report templates</li>
                    <li><strong>Create AI prompt library:</strong> Build prompts for different report sections</li>
                    <li><strong>Implement content generation:</strong> Connect to AI API for text generation</li>
                    <li><strong>Add context awareness:</strong> Include business context in AI prompts</li>
                    <li><strong>Build content validation:</strong> Verify generated content quality and accuracy</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📄 Phase 4: Report Assembly & Formatting (12 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Generated_Reports sheet</strong> and create report layout</li>
                    <li><strong>Implement dynamic formatting:</strong> Apply professional styling based on content type</li>
                    <li><strong>Add charts and visualizations:</strong> Generate relevant charts from data analysis</li>
                    <li><strong>Create executive summary:</strong> Build AI-generated executive overview</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📤 Phase 5: Export & Distribution (8 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Set up export functions:</strong> Enable PDF, Word, and HTML export options</li>
                    <li><strong>Add email integration:</strong> Automatically distribute reports to stakeholders</li>
                    <li><strong>Create scheduling system:</strong> Set up automated report generation</li>
                    <li><strong>Test complete workflow:</strong> Verify end-to-end report generation process</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-medium text-gray-800">📊 Sample Business Data for Report Generation</h5>
              <CopyableContent
                label="Business Performance Data"
                content={`Date	Department	Revenue	Expenses	Profit_Margin	Customer_Count	Satisfaction_Score	Market_Share	Growth_Rate	Risk_Level
2024-01-01	Sales	R 2,450,000	R 1,680,000	31.4%	1,250	4.7	23.5%	12.3%	Low
2024-01-01	Marketing	R 890,000	R 720,000	19.1%	850	4.2	18.2%	8.7%	Medium
2024-01-01	Operations	R 1,680,000	R 1,200,000	28.6%	950	4.5	21.8%	15.2%	Low
2024-01-01	Finance	R 560,000	R 480,000	14.3%	320	4.1	12.4%	6.8%	Medium
2024-01-01	HR	R 340,000	R 290,000	14.7%	180	4.3	8.9%	4.2%	Low
2024-01-01	IT	R 780,000	R 650,000	16.7%	420	4.6	15.6%	18.9%	High
2024-01-01	Customer_Service	R 450,000	R 380,000	15.6%	680	4.8	19.3%	11.4%	Low
2024-01-01	R&D	R 920,000	R 820,000	10.9%	150	4.4	25.7%	22.1%	High`}
              >
                <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left p-2 font-semibold">Department</th>
                        <th className="text-right p-2 font-semibold">Revenue</th>
                        <th className="text-right p-2 font-semibold">Profit Margin</th>
                        <th className="text-center p-2 font-semibold">Satisfaction</th>
                        <th className="text-center p-2 font-semibold">Growth Rate</th>
                        <th className="text-center p-2 font-semibold">Risk Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2">
                          <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Sales</span>
                        </td>
                        <td className="p-2 text-right font-semibold">R 2,450,000</td>
                        <td className="p-2 text-right text-green-600 font-semibold">31.4%</td>
                        <td className="p-2 text-center">4.7</td>
                        <td className="p-2 text-center text-green-600">12.3%</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Low</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2">
                          <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">Marketing</span>
                        </td>
                        <td className="p-2 text-right font-semibold">R 890,000</td>
                        <td className="p-2 text-right text-orange-600 font-semibold">19.1%</td>
                        <td className="p-2 text-center">4.2</td>
                        <td className="p-2 text-center text-green-600">8.7%</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">Medium</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2">
                          <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">IT</span>
                        </td>
                        <td className="p-2 text-right font-semibold">R 780,000</td>
                        <td className="p-2 text-right text-orange-600 font-semibold">16.7%</td>
                        <td className="p-2 text-center">4.6</td>
                        <td className="p-2 text-center text-green-600">18.9%</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">High</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">R&D</span>
                        </td>
                        <td className="p-2 text-right font-semibold">R 920,000</td>
                        <td className="p-2 text-right text-red-600 font-semibold">10.9%</td>
                        <td className="p-2 text-center">4.4</td>
                        <td className="p-2 text-center text-green-600">22.1%</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">High</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CopyableContent>

              <h5 className="font-medium text-gray-800">🤖 AI Report Generation Formulas</h5>
              <CopyableContent
                label="AI Content Generation VBA Code"
                content={`' AI Report Generation System
Sub GenerateAIReport()
    Dim reportData As String
    Dim aiPrompt As String
    Dim generatedContent As String
    
    ' Collect and analyze data
    reportData = AnalyzeBusinessData()
    
    ' Create AI prompt for report generation
    aiPrompt = "Based on the following business data, generate a comprehensive executive report: " & reportData & _
               ". Include: Executive Summary, Key Performance Insights, Trend Analysis, Risk Assessment, and Recommendations."
    
    ' Generate content using AI API
    generatedContent = CallOpenAIAPI(aiPrompt)
    
    ' Format and insert into report template
    FormatAndInsertReport generatedContent
End Sub

Function AnalyzeBusinessData() As String
    Dim ws As Worksheet
    Dim dataRange As Range
    Dim analysis As String
    
    Set ws = ThisWorkbook.Sheets("Raw_Data")
    Set dataRange = ws.Range("A1").CurrentRegion
    
    ' Calculate key metrics
    analysis = "Revenue Analysis: " & CalculateRevenueMetrics(dataRange) & vbCrLf
    analysis = analysis & "Profitability Analysis: " & CalculateProfitMetrics(dataRange) & vbCrLf
    analysis = analysis & "Growth Analysis: " & CalculateGrowthMetrics(dataRange) & vbCrLf
    analysis = analysis & "Risk Analysis: " & CalculateRiskMetrics(dataRange)
    
    AnalyzeBusinessData = analysis
End Function

Function CallOpenAIAPI(prompt As String) As String
    Dim http As Object
    Dim jsonBody As String
    Dim response As String
    
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    ' Prepare API request
    jsonBody = "{""model"": ""gpt-4"", ""messages"": [{""role"": ""user"", ""content"": """ & prompt & """}], ""max_tokens"": 2000}"
    
    ' Make API call
    http.Open "POST", "https://api.openai.com/v1/chat/completions", False
    http.setRequestHeader "Content-Type", "application/json"
    http.setRequestHeader "Authorization", "Bearer " & GetAPIKey()
    http.send jsonBody
    
    ' Parse response
    response = http.responseText
    CallOpenAIAPI = ParseAIResponse(response)
End Function`}
              >
                <div className="bg-gray-50 p-2 rounded">
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap">{`' AI Report Generation System
Sub GenerateAIReport()
    Dim reportData As String
    Dim aiPrompt As String
    Dim generatedContent As String
    
    ' Collect and analyze data
    reportData = AnalyzeBusinessData()
    
    ' Create AI prompt for report generation
    aiPrompt = "Based on the following business data, generate a comprehensive executive report: " & reportData
    
    ' Generate content using AI API
    generatedContent = CallOpenAIAPI(aiPrompt)
    
    ' Format and insert into report template
    FormatAndInsertReport generatedContent
End Sub

Function CallOpenAIAPI(prompt As String) As String
    Dim http As Object
    Dim jsonBody As String
    
    Set http = CreateObject("MSXML2.XMLHTTP")
    jsonBody = "{"model": "gpt-4", "messages": [{"role": "user", "content": "" & prompt & ""}]}"
    
    http.Open "POST", "https://api.openai.com/v1/chat/completions", False
    http.setRequestHeader "Authorization", "Bearer " & GetAPIKey()
    http.send jsonBody
    
    CallOpenAIAPI = ParseAIResponse(http.responseText)
End Function`}</pre>
                </div>
              </CopyableContent>
            </div>
          </div>

          {/* Project 2: Smart Content Summarizer */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              Project 2: Smart Content Summarizer
            </h3>
            <p className="text-gray-700 mb-4">Build an intelligent content summarization system that can analyze large documents and generate concise, actionable summaries.</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-blue-900 mb-2">📋 Step-by-Step Instructions:</h5>
              <div className="space-y-4 text-sm text-blue-800">
                <div>
                  <h6 className="font-semibold mb-2">🔧 Phase 1: Summarizer Setup (8 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Create new workbook:</strong> "Smart_Content_Summarizer.xlsx"</li>
                    <li><strong>Create 5 worksheets:</strong> "Input_Documents", "AI_Processing", "Summary_Output", "Keywords_Analysis", "Settings"</li>
                    <li><strong>Set up document import:</strong> Configure text import and processing capabilities</li>
                    <li><strong>Design summary templates:</strong> Create templates for different summary types</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📝 Phase 2: Content Analysis Engine (12 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to AI_Processing sheet</strong> and implement text analysis functions</li>
                    <li><strong>Create keyword extraction:</strong> Identify key terms and phrases</li>
                    <li><strong>Build sentiment analysis:</strong> Analyze document tone and sentiment</li>
                    <li><strong>Implement topic modeling:</strong> Identify main themes and topics</li>
                    <li><strong>Add readability scoring:</strong> Assess document complexity</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">🤖 Phase 3: AI Summarization (15 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Summary_Output sheet</strong> and create summary generation logic</li>
                    <li><strong>Implement extractive summarization:</strong> Select key sentences from original text</li>
                    <li><strong>Add abstractive summarization:</strong> Generate new summary text using AI</li>
                    <li><strong>Create multi-level summaries:</strong> Generate executive, detailed, and technical summaries</li>
                    <li><strong>Build custom summary types:</strong> Create summaries for specific audiences</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">✅ Phase 4: Testing & Validation (10 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Test with sample documents:</strong> Verify summarization accuracy</li>
                    <li><strong>Validate summary quality:</strong> Check coherence and completeness</li>
                    <li><strong>Test different document types:</strong> Ensure versatility across content types</li>
                    <li><strong>Optimize summary length:</strong> Fine-tune summary size and detail level</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-medium text-gray-800">📄 Sample Document Content for Summarization</h5>
              <CopyableContent
                label="Sample Business Documents"
                content={`Document_ID	Document_Type	Title	Content_Length	Priority_Level	Department	Date_Created	Summary_Type_Needed
DOC001	Financial_Report	Q4 Financial Performance Analysis	15,450	High	Finance	2024-01-15	Executive
DOC002	Market_Research	Customer Behavior Analysis 2024	22,380	Medium	Marketing	2024-01-10	Detailed
DOC003	Technical_Spec	New Product Development Specifications	18,920	High	R&D	2024-01-12	Technical
DOC004	Compliance_Report	Regulatory Compliance Assessment	12,670	Critical	Legal	2024-01-08	Executive
DOC005	HR_Policy	Employee Handbook Updates	8,540	Medium	HR	2024-01-14	Standard
DOC006	Sales_Analysis	Regional Sales Performance Review	19,230	High	Sales	2024-01-11	Detailed
DOC007	Operational_Report	Supply Chain Optimization Study	16,780	Medium	Operations	2024-01-13	Executive
DOC008	Strategic_Plan	5-Year Business Strategy Document	28,450	Critical	Executive	2024-01-09	Executive`}
              >
                <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left p-2 font-semibold">Document ID</th>
                        <th className="text-left p-2 font-semibold">Title</th>
                        <th className="text-right p-2 font-semibold">Length</th>
                        <th className="text-center p-2 font-semibold">Priority</th>
                        <th className="text-center p-2 font-semibold">Department</th>
                        <th className="text-center p-2 font-semibold">Summary Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2 font-mono text-xs">DOC001</td>
                        <td className="p-2">Q4 Financial Performance Analysis</td>
                        <td className="p-2 text-right">15,450</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">High</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Finance</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">Executive</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2 font-mono text-xs">DOC008</td>
                        <td className="p-2">5-Year Business Strategy Document</td>
                        <td className="p-2 text-right">28,450</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Critical</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Executive</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">Executive</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2 font-mono text-xs">DOC003</td>
                        <td className="p-2">New Product Development Specifications</td>
                        <td className="p-2 text-right">18,920</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">High</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">R&D</span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">Technical</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CopyableContent>

              <h5 className="font-medium text-gray-800">🤖 AI Summarization Formulas</h5>
              <CopyableContent
                label="AI Summarization VBA Code"
                content={`' AI Content Summarization System
Sub GenerateSmartSummary()
    Dim documentText As String
    Dim summaryType As String
    Dim aiPrompt As String
    Dim generatedSummary As String
    
    ' Get document content and summary requirements
    documentText = GetDocumentContent()
    summaryType = GetSummaryType()
    
    ' Create AI prompt for summarization
    aiPrompt = "Summarize the following document for " & summaryType & " audience: " & documentText & _
               ". Focus on key insights, actionable recommendations, and critical information."
    
    ' Generate summary using AI API
    generatedSummary = CallOpenAIAPI(aiPrompt)
    
    ' Format and insert summary
    FormatAndInsertSummary generatedSummary, summaryType
End Sub

Function ExtractKeywords(text As String) As String
    Dim aiPrompt As String
    Dim keywords As String
    
    aiPrompt = "Extract the 10 most important keywords and phrases from this text: " & text
    keywords = CallOpenAIAPI(aiPrompt)
    
    ExtractKeywords = keywords
End Function

Function AnalyzeSentiment(text As String) As String
    Dim aiPrompt As String
    Dim sentiment As String
    
    aiPrompt = "Analyze the sentiment and tone of this text. Provide a brief assessment: " & text
    sentiment = CallOpenAIAPI(aiPrompt)
    
    AnalyzeSentiment = sentiment
End Function`}
              >
                <div className="bg-gray-50 p-2 rounded">
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap">{`' AI Content Summarization System
Sub GenerateSmartSummary()
    Dim documentText As String
    Dim summaryType As String
    Dim aiPrompt As String
    
    ' Get document content and summary requirements
    documentText = GetDocumentContent()
    summaryType = GetSummaryType()
    
    ' Create AI prompt for summarization
    aiPrompt = "Summarize the following document for " & summaryType & " audience: " & documentText
    
    ' Generate summary using AI API
    generatedSummary = CallOpenAIAPI(aiPrompt)
End Sub

Function ExtractKeywords(text As String) As String
    aiPrompt = "Extract the 10 most important keywords from this text: " & text
    ExtractKeywords = CallOpenAIAPI(aiPrompt)
End Function`}</pre>
                </div>
              </CopyableContent>
            </div>
          </div>

          {/* Project 3: Dynamic Proposal Generator */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              Project 3: Dynamic Proposal Generator
            </h3>
            <p className="text-gray-700 mb-4">Create an intelligent proposal generation system that automatically creates customized business proposals based on client requirements and company capabilities.</p>
            
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-purple-900 mb-2">📋 Step-by-Step Instructions:</h5>
              <div className="space-y-4 text-sm text-purple-800">
                <div>
                  <h6 className="font-semibold mb-2">🔧 Phase 1: Proposal System Setup (12 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Create new workbook:</strong> "Dynamic_Proposal_Generator.xlsx"</li>
                    <li><strong>Create 6 worksheets:</strong> "Client_Requirements", "Company_Capabilities", "Proposal_Templates", "Generated_Proposals", "Pricing_Engine", "Settings"</li>
                    <li><strong>Set up client database:</strong> Configure client information and requirements tracking</li>
                    <li><strong>Design proposal templates:</strong> Create modular proposal sections and components</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">📊 Phase 2: Requirements Analysis (15 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Client_Requirements sheet</strong> and implement requirement analysis</li>
                    <li><strong>Create requirement categorization:</strong> Classify client needs by type and priority</li>
                    <li><strong>Build capability matching:</strong> Match client requirements to company services</li>
                    <li><strong>Implement gap analysis:</strong> Identify areas requiring additional resources</li>
                    <li><strong>Add competitive analysis:</strong> Compare against market alternatives</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">🤖 Phase 3: AI Proposal Generation (18 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Go to Generated_Proposals sheet</strong> and create proposal generation logic</li>
                    <li><strong>Implement dynamic content creation:</strong> Generate customized proposal sections</li>
                    <li><strong>Add value proposition generation:</strong> Create compelling value statements</li>
                    <li><strong>Build pricing optimization:</strong> Generate competitive and profitable pricing</li>
                    <li><strong>Create executive summary:</strong> Generate compelling proposal summaries</li>
                  </ol>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2">✅ Phase 4: Testing & Optimization (10 minutes)</h6>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><strong>Test with sample clients:</strong> Verify proposal quality and relevance</li>
                    <li><strong>Validate pricing accuracy:</strong> Check pricing calculations and competitiveness</li>
                    <li><strong>Test customization levels:</strong> Ensure proposals are properly personalized</li>
                    <li><strong>Optimize generation speed:</strong> Fine-tune performance and efficiency</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-medium text-gray-800">🏢 Sample Client Requirements Data</h5>
              <CopyableContent
                label="Client Requirements Database"
                content={`Client_ID	Company_Name	Industry	Project_Type	Budget_Range	Timeline	Complexity	Special_Requirements	Decision_Maker	Competitors
CL001	TechCorp Solutions	Technology	Digital_Transformation	R 2,500,000 - R 5,000,000	6 months	High	AI Integration, Cloud Migration	CTO	IBM, Microsoft
CL002	Retail Dynamics	Retail	Inventory_Optimization	R 800,000 - R 1,500,000	4 months	Medium	Real-time Analytics, Mobile App	COO	SAP, Oracle
CL003	Finance First	Financial_Services	Risk_Management	R 1,200,000 - R 2,000,000	8 months	High	Compliance, Reporting	CRO	Deloitte, PwC
CL004	Healthcare Plus	Healthcare	Patient_Management	R 600,000 - R 1,200,000	5 months	Medium	HIPAA Compliance, Integration	CMO	Epic, Cerner
CL005	Manufacturing Pro	Manufacturing	Supply_Chain	R 1,800,000 - R 3,000,000	7 months	High	IoT Integration, Predictive Analytics	VP Operations	Siemens, GE
CL006	Education Excellence	Education	Learning_Platform	R 400,000 - R 800,000	3 months	Low	Student Portal, Analytics	IT Director	Blackboard, Canvas`}
              >
                <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left p-2 font-semibold">Client</th>
                        <th className="text-left p-2 font-semibold">Industry</th>
                        <th className="text-left p-2 font-semibold">Project Type</th>
                        <th className="text-right p-2 font-semibold">Budget Range</th>
                        <th className="text-center p-2 font-semibold">Timeline</th>
                        <th className="text-center p-2 font-semibold">Complexity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2">TechCorp Solutions</td>
                        <td className="p-2">
                          <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Technology</span>
                        </td>
                        <td className="p-2">Digital Transformation</td>
                        <td className="p-2 text-right font-semibold">R 2.5M - R 5M</td>
                        <td className="p-2 text-center">6 months</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">High</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2">Finance First</td>
                        <td className="p-2">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Financial</span>
                        </td>
                        <td className="p-2">Risk Management</td>
                        <td className="p-2 text-right font-semibold">R 1.2M - R 2M</td>
                        <td className="p-2 text-center">8 months</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">High</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2">Manufacturing Pro</td>
                        <td className="p-2">
                          <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">Manufacturing</span>
                        </td>
                        <td className="p-2">Supply Chain</td>
                        <td className="p-2 text-right font-semibold">R 1.8M - R 3M</td>
                        <td className="p-2 text-center">7 months</td>
                        <td className="p-2 text-center">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">High</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CopyableContent>

              <h5 className="font-medium text-gray-800">🤖 AI Proposal Generation Formulas</h5>
              <CopyableContent
                label="AI Proposal Generation VBA Code"
                content={`' AI Proposal Generation System
Sub GenerateDynamicProposal()
    Dim clientData As String
    Dim requirements As String
    Dim capabilities As String
    Dim aiPrompt As String
    Dim generatedProposal As String
    
    ' Collect client and project data
    clientData = GetClientInformation()
    requirements = AnalyzeClientRequirements()
    capabilities = GetCompanyCapabilities()
    
    ' Create comprehensive AI prompt
    aiPrompt = "Generate a professional business proposal based on: " & _
               "Client: " & clientData & ". " & _
               "Requirements: " & requirements & ". " & _
               "Our Capabilities: " & capabilities & ". " & _
               "Include: Executive Summary, Solution Overview, Timeline, Pricing, and Value Proposition."
    
    ' Generate proposal using AI API
    generatedProposal = CallOpenAIAPI(aiPrompt)
    
    ' Format and insert proposal
    FormatAndInsertProposal generatedProposal
End Sub

Function GenerateValueProposition(clientNeeds As String, ourSolution As String) As String
    Dim aiPrompt As String
    Dim valueProps As String
    
    aiPrompt = "Create compelling value propositions that show how our solution " & ourSolution & _
               " addresses the client's specific needs: " & clientNeeds
    
    valueProps = CallOpenAIAPI(aiPrompt)
    GenerateValueProposition = valueProps
End Function

Function OptimizePricing(requirements As String, budget As String, competition As String) As String
    Dim aiPrompt As String
    Dim pricingStrategy As String
    
    aiPrompt = "Suggest optimal pricing strategy for requirements: " & requirements & _
               ". Client budget: " & budget & ". Competition: " & competition
    
    pricingStrategy = CallOpenAIAPI(aiPrompt)
    OptimizePricing = pricingStrategy
End Function`}
              >
                <div className="bg-gray-50 p-2 rounded">
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap">{`' AI Proposal Generation System
Sub GenerateDynamicProposal()
    Dim clientData As String
    Dim requirements As String
    Dim capabilities As String
    
    ' Collect client and project data
    clientData = GetClientInformation()
    requirements = AnalyzeClientRequirements()
    capabilities = GetCompanyCapabilities()
    
    ' Create comprehensive AI prompt
    aiPrompt = "Generate a professional business proposal based on: " & clientData
    
    ' Generate proposal using AI API
    generatedProposal = CallOpenAIAPI(aiPrompt)
End Sub

Function GenerateValueProposition(clientNeeds As String) As String
    aiPrompt = "Create compelling value propositions for: " & clientNeeds
    GenerateValueProposition = CallOpenAIAPI(aiPrompt)
End Function`}</pre>
                </div>
              </CopyableContent>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-600" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🏆 Technical Mastery</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  AI-powered report generation with natural language processing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Intelligent content summarization and analysis techniques
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Dynamic template-based content creation systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Multi-format export and distribution automation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Advanced AI API integration and prompt engineering
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">💼 Business Impact</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Dramatically reduced time for report creation and content generation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Consistent, professional-quality business communications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Improved decision-making through intelligent content analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Enhanced competitive advantage through personalized proposals
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  Scalable content creation for growing business needs
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      {onContinue && (
        <div className="flex justify-center pt-6">
          <Button 
            onClick={onContinue}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
          >
            Continue to Next Lesson
            <Bot className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default AutomatedContentGenerationLesson;
