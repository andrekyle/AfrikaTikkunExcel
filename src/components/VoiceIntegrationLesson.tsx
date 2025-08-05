import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Mic, ArrowRight, Volume2, MessageSquare, Settings } from 'lucide-react';
import CopyableContent from './CopyableContent';

interface VoiceIntegrationLessonProps {
  onContinue?: () => void;
}

const VoiceIntegrationLesson: React.FC<VoiceIntegrationLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Mic className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Voice Integration</h1>
            <p className="text-lg text-gray-600 mt-1">Add voice commands and speech-to-text capabilities</p>
          </div>
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
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Technical Skills</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Implement speech-to-text functionality in Excel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Create voice command recognition systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Build text-to-speech output capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Integrate AI-powered natural language processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Design voice-controlled user interfaces</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Business Applications</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Hands-free data entry and navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Accessibility improvements for users with disabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Voice-activated reporting and analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Multilingual voice interface support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Enhanced productivity through voice automation</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: Voice-Controlled Data Entry System */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mic className="h-5 w-5 text-purple-600" />
            Project 1: Voice-Controlled Data Entry System
          </CardTitle>
          <CardDescription>
            Build a comprehensive voice-controlled interface for hands-free data entry and Excel navigation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step-by-step Instructions */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Step-by-Step Instructions (60 minutes total)
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-purple-800 mb-2">🎤 Phase 1: Voice Recognition Setup (15 minutes)</h5>
                <ul className="text-sm text-purple-700 space-y-1 ml-4">
                  <li>• <strong>Create Voice Workbook:</strong> Set up Excel workbook with voice control modules</li>
                  <li>• <strong>Initialize Speech API:</strong> Configure Windows Speech Recognition API integration</li>
                  <li>• <strong>Voice Commands Framework:</strong> Build command recognition and processing system</li>
                  <li>• <strong>Audio Input Setup:</strong> Configure microphone access and audio processing</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-800 mb-2">🗣️ Phase 2: Speech-to-Text Engine (15 minutes)</h5>
                <ul className="text-sm text-purple-700 space-y-1 ml-4">
                  <li>• <strong>Text Recognition:</strong> Implement real-time speech-to-text conversion</li>
                  <li>• <strong>Language Processing:</strong> Add natural language understanding capabilities</li>
                  <li>• <strong>Command Parsing:</strong> Build intelligent command interpretation system</li>
                  <li>• <strong>Context Awareness:</strong> Create context-sensitive voice recognition</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-800 mb-2">📝 Phase 3: Voice Data Entry (15 minutes)</h5>
                <ul className="text-sm text-purple-700 space-y-1 ml-4">
                  <li>• <strong>Cell Navigation:</strong> Implement voice-controlled cell selection and movement</li>
                  <li>• <strong>Data Input:</strong> Create voice-to-text data entry with validation</li>
                  <li>• <strong>Formula Dictation:</strong> Build voice-controlled formula creation system</li>
                  <li>• <strong>Formatting Commands:</strong> Add voice-activated formatting and styling</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-800 mb-2">🔊 Phase 4: Text-to-Speech Feedback (10 minutes)</h5>
                <ul className="text-sm text-purple-700 space-y-1 ml-4">
                  <li>• <strong>Voice Feedback:</strong> Implement text-to-speech confirmation system</li>
                  <li>• <strong>Error Announcements:</strong> Create voice alerts for errors and warnings</li>
                  <li>• <strong>Status Updates:</strong> Build voice status reporting and progress updates</li>
                  <li>• <strong>Interactive Dialogue:</strong> Design conversational interface for complex tasks</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-800 mb-2">✅ Phase 5: Testing & Optimization (5 minutes)</h5>
                <ul className="text-sm text-purple-700 space-y-1 ml-4">
                  <li>• <strong>Voice Testing:</strong> Test voice commands with different accents and speeds</li>
                  <li>• <strong>Accuracy Tuning:</strong> Optimize speech recognition accuracy and response time</li>
                  <li>• <strong>Error Handling:</strong> Implement robust error handling for voice failures</li>
                  <li>• <strong>Performance Optimization:</strong> Fine-tune voice processing performance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sample Voice Commands Data */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Sample Voice Commands Configuration</h4>
            <CopyableContent 
              content={`Command ID	Voice Command	Action Type	Target Cell	Parameters	Confidence Threshold
CMD001	"Go to cell A1"	Navigation	A1	None	0.85
CMD002	"Enter value 1000"	Data Entry	Active Cell	Value: 1000	0.90
CMD003	"Sum column A"	Formula	Active Cell	Range: A:A, Function: SUM	0.88
CMD004	"Format as currency"	Formatting	Selection	Format: Currency, Symbol: R	0.85
CMD005	"Create new row"	Structure	Active Row	Action: Insert	0.90
CMD006	"Delete this column"	Structure	Active Column	Action: Delete	0.95
CMD007	"Save workbook"	File Operation	Workbook	Action: Save	0.92
CMD008	"Calculate average"	Formula	Active Cell	Function: AVERAGE	0.87
CMD009	"Bold selected text"	Formatting	Selection	Style: Bold	0.85
CMD010	"Copy to clipboard"	Edit	Selection	Action: Copy	0.90
CMD011	"Paste from clipboard"	Edit	Active Cell	Action: Paste	0.88
CMD012	"Undo last action"	Edit	Workbook	Action: Undo	0.95`}
              label="Voice Commands Data"
            >
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Command ID</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Voice Command</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Action Type</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Target Cell</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Parameters</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">CMD001</td>
                      <td className="border border-gray-300 px-3 py-2">"Go to cell A1"</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Navigation</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 font-mono">A1</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">None</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">0.85</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">CMD002</td>
                      <td className="border border-gray-300 px-3 py-2">"Enter value 1000"</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Data Entry</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 font-mono">Active Cell</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Value: 1000</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">0.90</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">CMD003</td>
                      <td className="border border-gray-300 px-3 py-2">"Sum column A"</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Formula</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 font-mono">Active Cell</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Range: A:A, Function: SUM</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">0.88</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">CMD004</td>
                      <td className="border border-gray-300 px-3 py-2">"Format as currency"</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Formatting</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 font-mono">Selection</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Format: Currency, Symbol: R</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">0.85</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">CMD005</td>
                      <td className="border border-gray-300 px-3 py-2">"Create new row"</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs">Structure</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 font-mono">Active Row</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Action: Insert</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">0.90</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">CMD006</td>
                      <td className="border border-gray-300 px-3 py-2">"Delete this column"</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Structure</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 font-mono">Active Column</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Action: Delete</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">0.95</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">CMD007</td>
                      <td className="border border-gray-300 px-3 py-2">"Save workbook"</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">File Operation</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 font-mono">Workbook</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Action: Save</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">0.92</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">CMD008</td>
                      <td className="border border-gray-300 px-3 py-2">"Calculate average"</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Formula</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 font-mono">Active Cell</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Function: AVERAGE</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">0.87</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">CMD009</td>
                      <td className="border border-gray-300 px-3 py-2">"Bold selected text"</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Formatting</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 font-mono">Selection</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Style: Bold</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">0.85</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">CMD010</td>
                      <td className="border border-gray-300 px-3 py-2">"Copy to clipboard"</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">Edit</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 font-mono">Selection</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Action: Copy</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">0.90</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">CMD011</td>
                      <td className="border border-gray-300 px-3 py-2">"Paste from clipboard"</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">Edit</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 font-mono">Active Cell</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Action: Paste</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">0.88</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">CMD012</td>
                      <td className="border border-gray-300 px-3 py-2">"Undo last action"</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">Edit</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 font-mono">Workbook</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Action: Undo</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">0.95</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CopyableContent>
          </div>

          {/* Voice Recognition VBA Code */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Voice Recognition Setup Code</h4>
            <CopyableContent 
              content={`' Voice Recognition Module - VBA Code
Option Explicit

' Windows Speech API Declaration
Private Declare PtrSafe Function SpeechRecognitionInitialize Lib "sapi.dll" () As Long
Private Declare PtrSafe Function SpeechRecognitionStart Lib "sapi.dll" () As Long

' Voice Recognition Class
Public Class VoiceController
    Private WithEvents speechRecognizer As Object
    Private commandList As Collection
    Private isListening As Boolean
    
    ' Initialize Voice Recognition System
    Public Sub InitializeVoiceRecognition()
        On Error GoTo ErrorHandler
        
        ' Create Speech Recognition Object
        Set speechRecognizer = CreateObject("SAPI.SpVoice")
        Set commandList = New Collection
        
        ' Load Voice Commands
        Call LoadVoiceCommands
        
        ' Start Listening
        isListening = True
        Call StartListening
        
        MsgBox "Voice Recognition Initialized Successfully!", vbInformation
        Exit Sub
        
    ErrorHandler:
        MsgBox "Error initializing voice recognition: " & Err.Description, vbCritical
    End Sub
    
    ' Load Voice Commands Configuration
    Private Sub LoadVoiceCommands()
        ' Navigation Commands
        commandList.Add Array("go to cell", "NavigateToCell")
        commandList.Add Array("select range", "SelectRange")
        commandList.Add Array("move up", "MoveUp")
        commandList.Add Array("move down", "MoveDown")
        
        ' Data Entry Commands
        commandList.Add Array("enter value", "EnterValue")
        commandList.Add Array("delete content", "DeleteContent")
        commandList.Add Array("clear cell", "ClearCell")
        
        ' Formula Commands
        commandList.Add Array("sum column", "CreateSumFormula")
        commandList.Add Array("calculate average", "CreateAverageFormula")
        commandList.Add Array("count values", "CreateCountFormula")
        
        ' Formatting Commands
        commandList.Add Array("format currency", "FormatAsCurrency")
        commandList.Add Array("bold text", "ApplyBoldFormat")
        commandList.Add Array("center align", "CenterAlign")
    End Sub
End Class`}
              label="Voice Recognition VBA Code"
            >
              <div className="bg-gray-50 p-4 rounded-md">
                <code className="text-sm text-gray-800 whitespace-pre-wrap">
{`' Voice Recognition Module - VBA Code
Option Explicit

' Windows Speech API Declaration
Private Declare PtrSafe Function SpeechRecognitionInitialize Lib "sapi.dll" () As Long
Private Declare PtrSafe Function SpeechRecognitionStart Lib "sapi.dll" () As Long

' Voice Recognition Class
Public Class VoiceController
    Private WithEvents speechRecognizer As Object
    Private commandList As Collection
    Private isListening As Boolean
    
    ' Initialize Voice Recognition System
    Public Sub InitializeVoiceRecognition()
        On Error GoTo ErrorHandler
        
        ' Create Speech Recognition Object
        Set speechRecognizer = CreateObject("SAPI.SpVoice")
        Set commandList = New Collection
        
        ' Load Voice Commands
        Call LoadVoiceCommands
        
        ' Start Listening
        isListening = True
        Call StartListening
        
        MsgBox "Voice Recognition Initialized Successfully!", vbInformation
        Exit Sub
        
    ErrorHandler:
        MsgBox "Error initializing voice recognition: " & Err.Description, vbCritical
    End Sub
    
    ' Load Voice Commands Configuration
    Private Sub LoadVoiceCommands()
        ' Navigation Commands
        commandList.Add Array("go to cell", "NavigateToCell")
        commandList.Add Array("select range", "SelectRange")
        commandList.Add Array("move up", "MoveUp")
        commandList.Add Array("move down", "MoveDown")
        
        ' Data Entry Commands
        commandList.Add Array("enter value", "EnterValue")
        commandList.Add Array("delete content", "DeleteContent")
        commandList.Add Array("clear cell", "ClearCell")
        
        ' Formula Commands
        commandList.Add Array("sum column", "CreateSumFormula")
        commandList.Add Array("calculate average", "CreateAverageFormula")
        commandList.Add Array("count values", "CreateCountFormula")
        
        ' Formatting Commands
        commandList.Add Array("format currency", "FormatAsCurrency")
        commandList.Add Array("bold text", "ApplyBoldFormat")
        commandList.Add Array("center align", "CenterAlign")
    End Sub
End Class`}
                </code>
              </div>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Technical Mastery</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Speech-to-text integration with Windows Speech API</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">AI-powered natural language processing and intent recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Multilingual voice interface development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Text-to-speech synthesis and voice feedback systems</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Business Impact</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Enhanced accessibility for users with disabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Increased productivity through hands-free operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Multilingual support for global business operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Improved user experience and engagement</span>
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
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg flex items-center gap-2"
          >
            Continue to Next Lesson
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default VoiceIntegrationLesson;
