import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Brain, MessageSquare, BarChart3, FileText, Zap, CheckCircle } from 'lucide-react';
import CopyableContent from '@/components/CopyableContent';

interface NaturalLanguageProcessingLessonProps {
  onContinue?: () => void;
}

const NaturalLanguageProcessingLesson: React.FC<NaturalLanguageProcessingLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Brain className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Natural Language Processing</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Process and analyze text data using AI to extract insights, classify content, and automate text-based workflows in Excel
        </p>
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
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Understand NLP concepts and applications in Excel</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Build automated text classification systems</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Perform sentiment analysis on customer feedback</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Extract key information from unstructured text</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Create intelligent text processing workflows</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* NLP Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-purple-600" />
            Natural Language Processing in Excel
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language. 
            In Excel, we can leverage AI services and built-in features to process text data automatically.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Key NLP Capabilities:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">Text Classification</Badge>
                  <span>Categorize documents and messages</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">Sentiment Analysis</Badge>
                  <span>Determine emotional tone</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">Entity Extraction</Badge>
                  <span>Identify names, dates, locations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">Text Summarization</Badge>
                  <span>Create concise summaries</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Excel Integration Methods:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span>Power Query AI features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span>Azure Cognitive Services API</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span>OpenAI API integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span>Custom VBA solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: Text Classification System */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-green-600" />
            Project 1: Automated Text Classification System
          </CardTitle>
          <CardDescription>
            Build a system to automatically categorize customer support tickets and emails
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Sample Customer Support Data:</h4>
            <CopyableContent>
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left">Ticket ID</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Customer Message</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Priority</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">T001</td>
                    <td className="border border-gray-300 px-3 py-2">My account is locked and I cannot access my dashboard. This is urgent!</td>
                    <td className="border border-gray-300 px-3 py-2">High</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-15</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">T002</td>
                    <td className="border border-gray-300 px-3 py-2">I would like to know more about your premium features and pricing plans.</td>
                    <td className="border border-gray-300 px-3 py-2">Low</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-15</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">T003</td>
                    <td className="border border-gray-300 px-3 py-2">The system is running very slowly today. Is there a server issue?</td>
                    <td className="border border-gray-300 px-3 py-2">Medium</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-16</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">T004</td>
                    <td className="border border-gray-300 px-3 py-2">Thank you for the quick resolution! Your support team is amazing.</td>
                    <td className="border border-gray-300 px-3 py-2">Low</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-16</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">T005</td>
                    <td className="border border-gray-300 px-3 py-2">I'm getting error code 500 when trying to upload files. Please help immediately.</td>
                    <td className="border border-gray-300 px-3 py-2">High</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-17</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">T006</td>
                    <td className="border border-gray-300 px-3 py-2">Can you provide documentation for your API integration?</td>
                    <td className="border border-gray-300 px-3 py-2">Medium</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-17</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">T007</td>
                    <td className="border border-gray-300 px-3 py-2">I want to cancel my subscription and get a refund for this month.</td>
                    <td className="border border-gray-300 px-3 py-2">High</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-18</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">T008</td>
                    <td className="border border-gray-300 px-3 py-2">The new feature you added is fantastic! Great work on the user interface.</td>
                    <td className="border border-gray-300 px-3 py-2">Low</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-18</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">T009</td>
                    <td className="border border-gray-300 px-3 py-2">My payment failed and I can't access premium features. Need urgent assistance.</td>
                    <td className="border border-gray-300 px-3 py-2">High</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-19</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">T010</td>
                    <td className="border border-gray-300 px-3 py-2">Could you schedule a demo call to show me the advanced analytics features?</td>
                    <td className="border border-gray-300 px-3 py-2">Medium</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-19</td>
                  </tr>
                </tbody>
              </table>
            </CopyableContent>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Step 1: Set up Text Classification Categories</h4>
            <CopyableContent>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`' VBA Code for Text Classification Setup
Sub SetupTextClassification()
    ' Define classification categories
    Dim categories As Variant
    categories = Array("Technical Issue", "Billing", "Feature Request", "Compliment", "Sales Inquiry", "Account Access")
    
    ' Create category lookup table
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Worksheets("Classifications")
    
    ' Add headers
    ws.Range("A1").Value = "Category"
    ws.Range("B1").Value = "Keywords"
    ws.Range("C1").Value = "Priority Weight"
    
    ' Add categories with keywords
    ws.Range("A2").Value = "Technical Issue"
    ws.Range("B2").Value = "error,bug,broken,not working,slow,crash,issue,problem"
    ws.Range("C2").Value = 3
    
    ws.Range("A3").Value = "Billing"
    ws.Range("B3").Value = "payment,bill,charge,refund,subscription,cancel,invoice"
    ws.Range("C3").Value = 2
    
    ws.Range("A4").Value = "Feature Request"
    ws.Range("B4").Value = "feature,enhancement,suggestion,improve,add,new"
    ws.Range("C4").Value = 1
    
    ws.Range("A5").Value = "Compliment"
    ws.Range("B5").Value = "great,amazing,fantastic,excellent,thank you,love,perfect"
    ws.Range("C5").Value = 1
    
    ws.Range("A6").Value = "Sales Inquiry"
    ws.Range("B6").Value = "pricing,demo,trial,purchase,buy,plan,upgrade"
    ws.Range("C6").Value = 2
    
    ws.Range("A7").Value = "Account Access"
    ws.Range("B7").Value = "locked,login,password,access,account,authenticate"
    ws.Range("C7").Value = 3
    
    MsgBox "Text classification setup complete!"
End Sub`}
              </pre>
            </CopyableContent>

            <h4 className="font-semibold text-gray-900">Step 2: Automated Classification Function</h4>
            <CopyableContent>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`' Function to classify text automatically
Function ClassifyText(inputText As String) As String
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Worksheets("Classifications")
    
    Dim lastRow As Long
    lastRow = ws.Cells(ws.Rows.Count, "A").End(xlUp).Row
    
    Dim maxScore As Double
    Dim bestCategory As String
    maxScore = 0
    bestCategory = "Unclassified"
    
    ' Convert input text to lowercase for matching
    Dim lowerText As String
    lowerText = LCase(inputText)
    
    ' Check each category
    Dim i As Long
    For i = 2 To lastRow
        Dim category As String
        Dim keywords As String
        Dim priorityWeight As Double
        
        category = ws.Cells(i, 1).Value
        keywords = ws.Cells(i, 2).Value
        priorityWeight = ws.Cells(i, 3).Value
        
        ' Split keywords and count matches
        Dim keywordArray As Variant
        keywordArray = Split(keywords, ",")
        
        Dim matchCount As Long
        Dim j As Long
        matchCount = 0
        
        For j = 0 To UBound(keywordArray)
            If InStr(lowerText, Trim(keywordArray(j))) > 0 Then
                matchCount = matchCount + 1
            End If
        Next j
        
        ' Calculate score (matches * priority weight)
        Dim score As Double
        score = matchCount * priorityWeight
        
        If score > maxScore Then
            maxScore = score
            bestCategory = category
        End If
    Next i
    
    ClassifyText = bestCategory
End Function`}
              </pre>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Project 2: Sentiment Analysis Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-orange-600" />
            Project 2: Customer Sentiment Analysis Dashboard
          </CardTitle>
          <CardDescription>
            Analyze customer feedback sentiment and create visual dashboards
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 mb-2">Sample Customer Reviews Data:</h4>
            <CopyableContent>
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left">Review ID</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Customer Review</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Product</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Rating</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">R001</td>
                    <td className="border border-gray-300 px-3 py-2">This product exceeded my expectations! Amazing quality and fast delivery.</td>
                    <td className="border border-gray-300 px-3 py-2">Laptop Pro</td>
                    <td className="border border-gray-300 px-3 py-2">5</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-20</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">R002</td>
                    <td className="border border-gray-300 px-3 py-2">Terrible experience. The item arrived damaged and customer service was unhelpful.</td>
                    <td className="border border-gray-300 px-3 py-2">Smartphone X</td>
                    <td className="border border-gray-300 px-3 py-2">1</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-21</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">R003</td>
                    <td className="border border-gray-300 px-3 py-2">Good product overall, but the price could be better. Works as expected.</td>
                    <td className="border border-gray-300 px-3 py-2">Tablet Mini</td>
                    <td className="border border-gray-300 px-3 py-2">3</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-22</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">R004</td>
                    <td className="border border-gray-300 px-3 py-2">Love this purchase! Great value for money and excellent build quality.</td>
                    <td className="border border-gray-300 px-3 py-2">Headphones Pro</td>
                    <td className="border border-gray-300 px-3 py-2">4</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-23</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">R005</td>
                    <td className="border border-gray-300 px-3 py-2">Disappointing quality. Expected much better for this price point.</td>
                    <td className="border border-gray-300 px-3 py-2">Watch Smart</td>
                    <td className="border border-gray-300 px-3 py-2">2</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-24</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">R006</td>
                    <td className="border border-gray-300 px-3 py-2">Outstanding product! Highly recommend to anyone looking for reliability.</td>
                    <td className="border border-gray-300 px-3 py-2">Camera DSLR</td>
                    <td className="border border-gray-300 px-3 py-2">5</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-25</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">R007</td>
                    <td className="border border-gray-300 px-3 py-2">Average product. Nothing special but does the job adequately.</td>
                    <td className="border border-gray-300 px-3 py-2">Speaker Bluetooth</td>
                    <td className="border border-gray-300 px-3 py-2">3</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-26</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">R008</td>
                    <td className="border border-gray-300 px-3 py-2">Fantastic experience from start to finish! Will definitely buy again.</td>
                    <td className="border border-gray-300 px-3 py-2">Monitor 4K</td>
                    <td className="border border-gray-300 px-3 py-2">5</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-27</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">R009</td>
                    <td className="border border-gray-300 px-3 py-2">Poor build quality and overpriced. Would not recommend to others.</td>
                    <td className="border border-gray-300 px-3 py-2">Keyboard Mechanical</td>
                    <td className="border border-gray-300 px-3 py-2">2</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-28</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">R010</td>
                    <td className="border border-gray-300 px-3 py-2">Decent product with room for improvement. Customer service was helpful.</td>
                    <td className="border border-gray-300 px-3 py-2">Mouse Wireless</td>
                    <td className="border border-gray-300 px-3 py-2">3</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-29</td>
                  </tr>
                </tbody>
              </table>
            </CopyableContent>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Step 1: Sentiment Analysis Function</h4>
            <CopyableContent>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`' Function to analyze sentiment of text
Function AnalyzeSentiment(reviewText As String) As String
    ' Define positive and negative keywords
    Dim positiveWords As Variant
    Dim negativeWords As Variant
    
    positiveWords = Array("amazing", "excellent", "fantastic", "great", "love", "outstanding", "perfect", "wonderful", "good", "exceeded", "recommend", "reliable", "quality")
    negativeWords = Array("terrible", "awful", "horrible", "bad", "poor", "disappointing", "damaged", "unhelpful", "overpriced", "worst", "hate", "useless")
    
    Dim lowerText As String
    lowerText = LCase(reviewText)
    
    Dim positiveScore As Long
    Dim negativeScore As Long
    positiveScore = 0
    negativeScore = 0
    
    ' Count positive words
    Dim i As Long
    For i = 0 To UBound(positiveWords)
        If InStr(lowerText, positiveWords(i)) > 0 Then
            positiveScore = positiveScore + 1
        End If
    Next i
    
    ' Count negative words
    For i = 0 To UBound(negativeWords)
        If InStr(lowerText, negativeWords(i)) > 0 Then
            negativeScore = negativeScore + 1
        End If
    Next i
    
    ' Determine sentiment
    If positiveScore > negativeScore Then
        AnalyzeSentiment = "Positive"
    ElseIf negativeScore > positiveScore Then
        AnalyzeSentiment = "Negative"
    Else
        AnalyzeSentiment = "Neutral"
    End If
End Function`}
              </pre>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Best Practices for NLP in Excel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700">✅ Do's</h4>
              <ul className="space-y-2 text-sm">
                <li>• Preprocess text data (lowercase, remove punctuation)</li>
                <li>• Use comprehensive keyword dictionaries</li>
                <li>• Implement confidence scoring</li>
                <li>• Test with diverse sample data</li>
                <li>• Regularly update classification rules</li>
                <li>• Handle edge cases and errors gracefully</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-red-700">❌ Don'ts</h4>
              <ul className="space-y-2 text-sm">
                <li>• Rely solely on simple keyword matching</li>
                <li>• Ignore context and nuance</li>
                <li>• Use outdated or biased training data</li>
                <li>• Skip validation and testing</li>
                <li>• Hardcode language-specific rules</li>
                <li>• Forget to handle special characters</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-600" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm font-semibold">1</span>
              </div>
              <div>
                <span className="font-semibold">Text Classification:</span> Automatically categorize documents and messages using keyword-based scoring systems
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm font-semibold">2</span>
              </div>
              <div>
                <span className="font-semibold">Sentiment Analysis:</span> Determine emotional tone of customer feedback to prioritize responses and identify trends
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm font-semibold">3</span>
              </div>
              <div>
                <span className="font-semibold">Automation:</span> Build scalable text processing workflows that can handle large volumes of unstructured data
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm font-semibold">4</span>
              </div>
              <div>
                <span className="font-semibold">Integration:</span> Combine Excel's built-in features with external AI services for more sophisticated text analysis
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Continue Button */}
      {onContinue && (
        <div className="flex justify-center pt-6">
          <Button onClick={onContinue} className="flex items-center gap-2">
            Continue to Next Lesson
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default NaturalLanguageProcessingLesson;
