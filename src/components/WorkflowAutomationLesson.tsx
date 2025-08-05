import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle, 
  Settings, 
  Workflow,
  Brain,
  GitBranch,
  Zap,
  Clock,
  Database,
  MessageSquare,
  AlertTriangle,
  TrendingUp
} from "lucide-react";
import CopyableContent from './CopyableContent';

interface WorkflowAutomationLessonProps {
  onContinue?: () => void;
}

const WorkflowAutomationLesson: React.FC<WorkflowAutomationLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Lesson Header */}
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-3 text-3xl font-bold text-purple-900">
            <Workflow className="h-8 w-8 text-purple-600" />
            Lesson 9: Workflow Automation
          </CardTitle>
          <CardDescription className="text-lg text-purple-700 mt-2">
            Create intelligent workflows with AI decision making
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-600" />
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
                  <span className="text-sm text-gray-700">Design and implement AI-powered workflow engines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Create intelligent decision trees and conditional logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Build automated approval and escalation systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Implement workflow monitoring and analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Integrate external systems and APIs into workflows</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Business Applications</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Automate complex business processes and approvals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Reduce manual intervention and human errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Improve process efficiency and response times</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Enable intelligent routing and task assignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Create audit trails and compliance reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: AI-Powered Workflow Engine */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-purple-600" />
            Project 1: AI-Powered Workflow Engine
          </CardTitle>
          <CardDescription>
            Build a comprehensive workflow automation system with intelligent decision making and process routing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step-by-step Instructions */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Step-by-Step Instructions (75 minutes total)
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-purple-800 mb-2">🏗️ Phase 1: Workflow Engine Foundation (18 minutes)</h5>
                <ul className="text-sm text-purple-700 space-y-1 ml-4">
                  <li>• <strong>Engine Architecture:</strong> Design the core workflow engine structure and components</li>
                  <li>• <strong>Process Definition:</strong> Create workflow templates and process configuration system</li>
                  <li>• <strong>State Management:</strong> Implement workflow state tracking and persistence</li>
                  <li>• <strong>Task Queue System:</strong> Build task scheduling and execution management</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-800 mb-2">🧠 Phase 2: AI Decision Engine (20 minutes)</h5>
                <ul className="text-sm text-purple-700 space-y-1 ml-4">
                  <li>• <strong>Decision Trees:</strong> Create AI-powered decision trees for process routing</li>
                  <li>• <strong>Rule Engine:</strong> Implement intelligent business rule evaluation system</li>
                  <li>• <strong>Machine Learning:</strong> Integrate ML models for predictive workflow optimization</li>
                  <li>• <strong>Context Analysis:</strong> Build context-aware decision making capabilities</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-800 mb-2">⚡ Phase 3: Process Automation (15 minutes)</h5>
                <ul className="text-sm text-purple-700 space-y-1 ml-4">
                  <li>• <strong>Task Automation:</strong> Automate repetitive tasks and data processing</li>
                  <li>• <strong>Approval Workflows:</strong> Create multi-level approval and escalation systems</li>
                  <li>• <strong>Notification System:</strong> Build intelligent notification and alert mechanisms</li>
                  <li>• <strong>Integration Points:</strong> Connect with external systems and databases</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-800 mb-2">📊 Phase 4: Monitoring & Analytics (12 minutes)</h5>
                <ul className="text-sm text-purple-700 space-y-1 ml-4">
                  <li>• <strong>Performance Tracking:</strong> Monitor workflow execution times and bottlenecks</li>
                  <li>• <strong>Analytics Dashboard:</strong> Create real-time workflow analytics and reporting</li>
                  <li>• <strong>Error Handling:</strong> Implement comprehensive error handling and recovery</li>
                  <li>• <strong>Audit Logging:</strong> Build detailed audit trails for compliance</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-800 mb-2">✅ Phase 5: Testing & Optimization (10 minutes)</h5>
                <ul className="text-sm text-purple-700 space-y-1 ml-4">
                  <li>• <strong>Workflow Testing:</strong> Test complex workflow scenarios and edge cases</li>
                  <li>• <strong>Performance Optimization:</strong> Optimize workflow execution speed and resource usage</li>
                  <li>• <strong>User Interface:</strong> Create intuitive workflow management interface</li>
                  <li>• <strong>Documentation:</strong> Generate comprehensive workflow documentation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sample Workflow Configuration Data */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Sample Workflow Configuration</h4>
            <CopyableContent 
              content={`Workflow ID	Workflow Name	Trigger Type	Decision Criteria	Action Type	Assigned Role	Priority	SLA Hours
WF001	Purchase Order Approval	Form Submission	Amount > R50000	Manager Approval	Finance Manager	High	24
WF002	Leave Request Processing	Employee Request	Days > 5	HR Review	HR Specialist	Medium	48
WF003	Invoice Processing	Email Receipt	Vendor = Preferred	Auto Approve	System	Low	2
WF004	Customer Complaint	Support Ticket	Severity = Critical	Escalate	Senior Support	Critical	4
WF005	Budget Approval	Budget Request	Department = IT	CTO Review	CTO	High	72
WF006	Contract Review	Document Upload	Value > R100000	Legal Review	Legal Team	High	120
WF007	Expense Claim	Expense Report	Amount > R5000	Manager Review	Line Manager	Medium	48
WF008	New Employee Onboarding	HR System	Department = Sales	Sales Training	Sales Manager	Medium	168
WF009	Equipment Request	Asset Request	Cost > R10000	Procurement	Procurement Team	Medium	96
WF010	Performance Review	Calendar Event	Review Type = Annual	Manager Meeting	Direct Manager	Low	336
WF011	Security Incident	Alert System	Risk Level = High	Security Team	Security Officer	Critical	1
WF012	Vendor Onboarding	Vendor Application	Category = Strategic	Due Diligence	Compliance Team	High	240`}
              label="Workflow Configuration Data"
            >
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Workflow ID</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Workflow Name</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Trigger Type</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Decision Criteria</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Action Type</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Assigned Role</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Priority</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">SLA Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">WF001</td>
                      <td className="border border-gray-300 px-3 py-2">Purchase Order Approval</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Form Submission</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Amount {'>'} R50000</td>
                      <td className="border border-gray-300 px-3 py-2">Manager Approval</td>
                      <td className="border border-gray-300 px-3 py-2">Finance Manager</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">High</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-right">24</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">WF002</td>
                      <td className="border border-gray-300 px-3 py-2">Leave Request Processing</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Employee Request</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Days {'>'} 5</td>
                      <td className="border border-gray-300 px-3 py-2">HR Review</td>
                      <td className="border border-gray-300 px-3 py-2">HR Specialist</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Medium</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-right">48</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">WF003</td>
                      <td className="border border-gray-300 px-3 py-2">Invoice Processing</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Email Receipt</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Vendor = Preferred</td>
                      <td className="border border-gray-300 px-3 py-2">Auto Approve</td>
                      <td className="border border-gray-300 px-3 py-2">System</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Low</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-right">2</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">WF004</td>
                      <td className="border border-gray-300 px-3 py-2">Customer Complaint</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Support Ticket</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Severity = Critical</td>
                      <td className="border border-gray-300 px-3 py-2">Escalate</td>
                      <td className="border border-gray-300 px-3 py-2">Senior Support</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Critical</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-right">4</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">WF005</td>
                      <td className="border border-gray-300 px-3 py-2">Budget Approval</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs">Budget Request</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Department = IT</td>
                      <td className="border border-gray-300 px-3 py-2">CTO Review</td>
                      <td className="border border-gray-300 px-3 py-2">CTO</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">High</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-right">72</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono text-blue-600">WF006</td>
                      <td className="border border-gray-300 px-3 py-2">Contract Review</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">Document Upload</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600">Value {'>'} R100000</td>
                      <td className="border border-gray-300 px-3 py-2">Legal Review</td>
                      <td className="border border-gray-300 px-3 py-2">Legal Team</td>
                      <td className="border border-gray-300 px-3 py-2">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">High</span>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-right">120</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CopyableContent>
          </div>

          {/* Workflow Engine VBA Code */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Workflow Engine VBA Implementation</h4>
            <CopyableContent 
              content={`' AI-Powered Workflow Engine - VBA Implementation
Option Explicit

' Workflow Engine Class
Public Class WorkflowEngine
    Private workflows As Collection
    Private activeProcesses As Collection
    Private decisionEngine As AIDecisionEngine
    Private taskQueue As Collection
    
    ' Initialize Workflow Engine
    Public Sub InitializeEngine()
        On Error GoTo ErrorHandler
        
        Set workflows = New Collection
        Set activeProcesses = New Collection
        Set decisionEngine = New AIDecisionEngine
        Set taskQueue = New Collection
        
        ' Load workflow configurations
        Call LoadWorkflowConfigurations
        
        ' Initialize AI decision engine
        Call decisionEngine.Initialize
        
        MsgBox "Workflow Engine Initialized Successfully!", vbInformation
        Exit Sub
        
    ErrorHandler:
        MsgBox "Error initializing workflow engine: " & Err.Description, vbCritical
    End Sub
    
    ' Process Workflow Trigger
    Public Sub ProcessTrigger(triggerType As String, triggerData As Dictionary)
        Dim workflow As WorkflowDefinition
        Dim process As WorkflowProcess
        
        ' Find matching workflow
        For Each workflow In workflows
            If workflow.TriggerType = triggerType Then
                ' Evaluate decision criteria
                If decisionEngine.EvaluateCriteria(workflow.DecisionCriteria, triggerData) Then
                    ' Create new process instance
                    Set process = CreateProcessInstance(workflow, triggerData)
                    
                    ' Add to active processes
                    activeProcesses.Add process, process.ProcessID
                    
                    ' Execute first step
                    Call ExecuteWorkflowStep(process)
                    Exit For
                End If
            End If
        Next workflow
    End Sub
    
    ' Execute Workflow Step
    Private Sub ExecuteWorkflowStep(process As WorkflowProcess)
        Dim currentStep As WorkflowStep
        Dim nextAction As String
        
        Set currentStep = process.GetCurrentStep()
        
        Select Case currentStep.ActionType
            Case "Manager Approval"
                Call RequestApproval(process, currentStep)
            Case "Auto Approve"
                Call AutoApproveProcess(process)
            Case "Escalate"
                Call EscalateProcess(process, currentStep)
            Case "HR Review"
                Call RouteToHR(process, currentStep)
            Case "System"
                Call ExecuteSystemAction(process, currentStep)
        End Select
        
        ' Log workflow step
        Call LogWorkflowActivity(process.ProcessID, currentStep.StepName, "Executed")
    End Sub
    
    ' AI Decision Engine Class
    Private Class AIDecisionEngine
        Private rules As Collection
        
        Public Sub Initialize()
            Set rules = New Collection
            Call LoadBusinessRules
        End Sub
        
        Public Function EvaluateCriteria(criteria As String, data As Dictionary) As Boolean
            Dim result As Boolean
            result = False
            
            ' Parse and evaluate criteria using AI logic
            Select Case True
                Case InStr(criteria, "Amount >") > 0
                    result = EvaluateAmountCriteria(criteria, data)
                Case InStr(criteria, "Days >") > 0
                    result = EvaluateDaysCriteria(criteria, data)
                Case InStr(criteria, "Vendor =") > 0
                    result = EvaluateVendorCriteria(criteria, data)
                Case InStr(criteria, "Severity =") > 0
                    result = EvaluateSeverityCriteria(criteria, data)
                Case InStr(criteria, "Department =") > 0
                    result = EvaluateDepartmentCriteria(criteria, data)
            End Select
            
            EvaluateCriteria = result
        End Function
        
        Private Function EvaluateAmountCriteria(criteria As String, data As Dictionary) As Boolean
            Dim threshold As Double
            Dim amount As Double
            
            ' Extract threshold from criteria
            threshold = CDbl(Mid(criteria, InStr(criteria, "R") + 1))
            amount = CDbl(data("Amount"))
            
            EvaluateAmountCriteria = (amount > threshold)
        End Function
    End Class
End Class

' Workflow Process Class
Public Class WorkflowProcess
    Public ProcessID As String
    Public WorkflowID As String
    Public Status As String
    Public CreatedDate As Date
    Public AssignedUser As String
    Public Priority As String
    Public SLADeadline As Date
    Public CurrentStepIndex As Integer
    Public ProcessData As Dictionary
    
    Public Sub Initialize(wfID As String, data As Dictionary)
        ProcessID = "PROC_" & Format(Now, "yyyymmddhhmmss") & "_" & Int(Rnd * 1000)
        WorkflowID = wfID
        Status = "Active"
        CreatedDate = Now
        Set ProcessData = data
        CurrentStepIndex = 0
    End Sub
End Class`}
              label="Workflow Engine VBA Code"
            >
              <div className="bg-gray-50 p-4 rounded-md">
                <code className="text-sm text-gray-800 whitespace-pre-wrap">
{`' AI-Powered Workflow Engine - VBA Implementation
Option Explicit

' Workflow Engine Class
Public Class WorkflowEngine
    Private workflows As Collection
    Private activeProcesses As Collection
    Private decisionEngine As AIDecisionEngine
    Private taskQueue As Collection
    
    ' Initialize Workflow Engine
    Public Sub InitializeEngine()
        On Error GoTo ErrorHandler
        
        Set workflows = New Collection
        Set activeProcesses = New Collection
        Set decisionEngine = New AIDecisionEngine
        Set taskQueue = New Collection
        
        ' Load workflow configurations
        Call LoadWorkflowConfigurations
        
        ' Initialize AI decision engine
        Call decisionEngine.Initialize
        
        MsgBox "Workflow Engine Initialized Successfully!", vbInformation
        Exit Sub
        
    ErrorHandler:
        MsgBox "Error initializing workflow engine: " & Err.Description, vbCritical
    End Sub
    
    ' Process Workflow Trigger
    Public Sub ProcessTrigger(triggerType As String, triggerData As Dictionary)
        Dim workflow As WorkflowDefinition
        Dim process As WorkflowProcess
        
        ' Find matching workflow
        For Each workflow In workflows
            If workflow.TriggerType = triggerType Then
                ' Evaluate decision criteria
                If decisionEngine.EvaluateCriteria(workflow.DecisionCriteria, triggerData) Then
                    ' Create new process instance
                    Set process = CreateProcessInstance(workflow, triggerData)
                    
                    ' Add to active processes
                    activeProcesses.Add process, process.ProcessID
                    
                    ' Execute first step
                    Call ExecuteWorkflowStep(process)
                    Exit For
                End If
            End If
        Next workflow
    End Sub`}
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
                  <span className="text-sm text-gray-700">AI-powered workflow engine design and implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Intelligent decision trees and process automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Advanced analytics and performance monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Smart escalation and notification systems</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Business Impact</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Automated business process optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Reduced manual intervention and errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Improved compliance and audit capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Enhanced operational efficiency and cost savings</span>
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

export default WorkflowAutomationLesson;
