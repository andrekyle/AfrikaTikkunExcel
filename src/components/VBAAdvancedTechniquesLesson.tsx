import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Code2, 
  Lightbulb, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Zap,
  Settings,
  Brain,
  Target,
  Layers
} from "lucide-react";
import CopyableContent from "@/components/CopyableContent";

interface VBAAdvancedTechniquesLessonProps {
  onContinue?: () => void;
}

const VBAAdvancedTechniquesLesson: React.FC<VBAAdvancedTechniquesLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-4">
          <Brain className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Advanced VBA Techniques
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master class modules, events, and advanced programming patterns to create professional, object-oriented Excel solutions
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Badge variant="secondary" className="px-3 py-1">
            <Layers className="h-3 w-3 mr-1" />
            Class Modules
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            <Zap className="h-3 w-3 mr-1" />
            Event Handling
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            <Settings className="h-3 w-3 mr-1" />
            Design Patterns
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            <Cpu className="h-3 w-3 mr-1" />
            OOP Principles
          </Badge>
        </div>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            Learning Objectives
          </CardTitle>
          <CardDescription>
            Master advanced VBA programming concepts and object-oriented design
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Create and implement class modules</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Handle workbook and worksheet events</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Implement object-oriented programming principles</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Apply advanced design patterns</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Create custom collection classes</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Build enterprise-level VBA applications</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: Employee Class Module */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-purple-600" />
            Project 1: Employee Management with Class Modules
          </CardTitle>
          <CardDescription>
            Build an object-oriented employee management system using class modules
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Sample Employee Data
            </h4>
            <CopyableContent label="Employee Data">
              <div className="bg-gray-50 p-3 rounded-md">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 px-3 font-semibold">ID</th>
                      <th className="text-left py-2 px-3 font-semibold">Name</th>
                      <th className="text-left py-2 px-3 font-semibold">Department</th>
                      <th className="text-left py-2 px-3 font-semibold">Position</th>
                      <th className="text-left py-2 px-3 font-semibold">Salary</th>
                      <th className="text-left py-2 px-3 font-semibold">HireDate</th>
                      <th className="text-left py-2 px-3 font-semibold">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">1</td>
                      <td className="py-2 px-3">John Smith</td>
                      <td className="py-2 px-3">IT</td>
                      <td className="py-2 px-3">Developer</td>
                      <td className="py-2 px-3">75000</td>
                      <td className="py-2 px-3">2020-01-15</td>
                      <td className="py-2 px-3">Excellent</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">2</td>
                      <td className="py-2 px-3">Sarah Johnson</td>
                      <td className="py-2 px-3">HR</td>
                      <td className="py-2 px-3">Manager</td>
                      <td className="py-2 px-3">85000</td>
                      <td className="py-2 px-3">2019-03-20</td>
                      <td className="py-2 px-3">Good</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">3</td>
                      <td className="py-2 px-3">Mike Brown</td>
                      <td className="py-2 px-3">Finance</td>
                      <td className="py-2 px-3">Analyst</td>
                      <td className="py-2 px-3">65000</td>
                      <td className="py-2 px-3">2021-06-10</td>
                      <td className="py-2 px-3">Excellent</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">4</td>
                      <td className="py-2 px-3">Lisa Davis</td>
                      <td className="py-2 px-3">IT</td>
                      <td className="py-2 px-3">Senior Developer</td>
                      <td className="py-2 px-3">95000</td>
                      <td className="py-2 px-3">2018-11-05</td>
                      <td className="py-2 px-3">Outstanding</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">5</td>
                      <td className="py-2 px-3">Tom Wilson</td>
                      <td className="py-2 px-3">Marketing</td>
                      <td className="py-2 px-3">Coordinator</td>
                      <td className="py-2 px-3">55000</td>
                      <td className="py-2 px-3">2022-02-28</td>
                      <td className="py-2 px-3">Good</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">6</td>
                      <td className="py-2 px-3">Emma Taylor</td>
                      <td className="py-2 px-3">Finance</td>
                      <td className="py-2 px-3">Manager</td>
                      <td className="py-2 px-3">90000</td>
                      <td className="py-2 px-3">2019-08-12</td>
                      <td className="py-2 px-3">Excellent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CopyableContent>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Employee Class Module (clsEmployee)</h4>
            <CopyableContent label="Employee Class">
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono">
{`' Class Module: clsEmployee
Option Explicit

Private m_ID As Long
Private m_Name As String
Private m_Department As String
Private m_Salary As Currency
Private m_Performance As String

' Property procedures
Public Property Get ID() As Long
    ID = m_ID
End Property

Public Property Let ID(value As Long)
    m_ID = value
End Property

Public Property Get Name() As String
    Name = m_Name
End Property

Public Property Let Name(value As String)
    m_Name = value
End Property

Public Property Get Salary() As Currency
    Salary = m_Salary
End Property

Public Property Let Salary(value As Currency)
    If value < 0 Then
        Err.Raise vbObjectError + 1, "clsEmployee", "Salary cannot be negative"
    End If
    m_Salary = value
End Property

' Methods
Public Function CalculateBonus() As Currency
    Select Case m_Performance
        Case "Outstanding"
            CalculateBonus = m_Salary * 0.15
        Case "Excellent"
            CalculateBonus = m_Salary * 0.1
        Case "Good"
            CalculateBonus = m_Salary * 0.05
        Case Else
            CalculateBonus = 0
    End Select
End Function

Public Function GetSummary() As String
    GetSummary = m_Name & " (" & m_Department & ") - " & Format(m_Salary, "Currency")
End Function`}
              </pre>
            </CopyableContent>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Implementation Code</h4>
            <CopyableContent label="Class Implementation">
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono">
{`Sub DemonstrateClassModules()
    ' Create employee objects
    Dim emp1 As New clsEmployee
    Dim emp2 As New clsEmployee
    
    ' Set properties for first employee
    With emp1
        .ID = 1
        .Name = "John Smith"
        .Department = "IT"
        .Salary = 75000
        .Performance = "Excellent"
    End With
    
    ' Set properties for second employee
    With emp2
        .ID = 2
        .Name = "Sarah Johnson"
        .Department = "HR"
        .Salary = 85000
        .Performance = "Outstanding"
    End With
    
    ' Display results
    MsgBox "Employee 1: " & emp1.GetSummary() & vbCrLf & _
           "Bonus: " & Format(emp1.CalculateBonus(), "Currency") & vbCrLf & vbCrLf & _
           "Employee 2: " & emp2.GetSummary() & vbCrLf & _
           "Bonus: " & Format(emp2.CalculateBonus(), "Currency")
End Sub`}
              </pre>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Project 2: Event Handling */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-600" />
            Project 2: Event-Driven Data Validation
          </CardTitle>
          <CardDescription>
            Create intelligent data validation using worksheet events
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Worksheet Event Handler</h4>
            <CopyableContent label="Worksheet Events">
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono">
{`' Place this code in the worksheet module (e.g., Sheet1)
Private Sub Worksheet_Change(ByVal Target As Range)
    Application.EnableEvents = False
    
    On Error GoTo ErrorHandler
    
    ' Validate salary entries (Column E)
    If Not Intersect(Target, Range("E:E")) Is Nothing Then
        ValidateSalaryEntry Target
    End If
    
    ' Auto-calculate bonus when salary changes
    If Not Intersect(Target, Range("E:E")) Is Nothing Or _
       Not Intersect(Target, Range("G:G")) Is Nothing Then
        CalculateBonus Target
    End If
    
ExitHandler:
    Application.EnableEvents = True
    Exit Sub
    
ErrorHandler:
    MsgBox "Error in validation: " & Err.Description
    GoTo ExitHandler
End Sub

Private Sub ValidateSalaryEntry(Target As Range)
    Dim cell As Range
    
    For Each cell In Target
        If cell.Row > 1 And cell.Value <> "" Then
            If Not IsNumeric(cell.Value) Or cell.Value < 0 Then
                MsgBox "Invalid salary. Please enter a positive number."
                cell.Select
                Exit Sub
            End If
            
            ' Format as currency
            cell.NumberFormat = "$#,##0.00"
            
            ' Color code based on salary range
            If cell.Value >= 80000 Then
                cell.Interior.Color = RGB(144, 238, 144) ' Light green
            ElseIf cell.Value >= 60000 Then
                cell.Interior.Color = RGB(255, 255, 224) ' Light yellow
            Else
                cell.Interior.Color = RGB(255, 182, 193) ' Light pink
            End If
        End If
    Next cell
End Sub

Private Sub CalculateBonus(Target As Range)
    Dim cell As Range
    Dim salaryCell As Range, performanceCell As Range, bonusCell As Range
    Dim salary As Currency, performance As String, bonus As Currency
    
    For Each cell In Target
        If cell.Row > 1 Then
            Set salaryCell = Cells(cell.Row, 5)      ' Column E
            Set performanceCell = Cells(cell.Row, 7)  ' Column G
            Set bonusCell = Cells(cell.Row, 8)        ' Column H
            
            If IsNumeric(salaryCell.Value) And performanceCell.Value <> "" Then
                salary = salaryCell.Value
                performance = performanceCell.Value
                
                Select Case performance
                    Case "Outstanding"
                        bonus = salary * 0.15
                    Case "Excellent"
                        bonus = salary * 0.1
                    Case "Good"
                        bonus = salary * 0.05
                    Case Else
                        bonus = 0
                End Select
                
                bonusCell.Value = bonus
                bonusCell.NumberFormat = "$#,##0.00"
            End If
        End If
    Next cell
End Sub`}
              </pre>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Project 3: Design Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-green-600" />
            Project 3: Singleton Configuration Manager
          </CardTitle>
          <CardDescription>
            Implement the Singleton design pattern for application configuration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Singleton Configuration Class</h4>
            <CopyableContent label="Singleton Pattern">
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono">
{`' Class Module: clsConfigManager
Option Explicit

' Static instance variable
Private Shared m_Instance As clsConfigManager
Private m_Settings As Object
Private m_IsInitialized As Boolean

' Singleton instance getter
Public Shared Function GetInstance() As clsConfigManager
    If m_Instance Is Nothing Then
        Set m_Instance = New clsConfigManager
        m_Instance.Initialize
    End If
    Set GetInstance = m_Instance
End Function

' Initialize configuration
Private Sub Initialize()
    If m_IsInitialized Then Exit Sub
    
    Set m_Settings = CreateObject("Scripting.Dictionary")
    
    ' Load default settings
    m_Settings("AppName") = "Employee Management System"
    m_Settings("Version") = "1.0.0"
    m_Settings("MaxSalary") = 200000
    m_Settings("MinSalary") = 30000
    m_Settings("AutoSave") = True
    m_Settings("Theme") = "Light"
    
    m_IsInitialized = True
End Sub

' Property methods
Public Function GetSetting(key As String) As Variant
    If m_Settings.Exists(key) Then
        GetSetting = m_Settings(key)
    Else
        GetSetting = Null
    End If
End Function

Public Sub SetSetting(key As String, Value As Variant)
    m_Settings(key) = Value
End Sub

' Validation methods
Public Function IsValidSalary(salary As Currency) As Boolean
    Dim minSal As Currency, maxSal As Currency
    minSal = GetSetting("MinSalary")
    maxSal = GetSetting("MaxSalary")
    IsValidSalary = (salary >= minSal And salary <= maxSal)
End Function

Public Function GetAppInfo() As String
    GetAppInfo = GetSetting("AppName") & " v" & GetSetting("Version")
End Function`}
              </pre>
            </CopyableContent>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Using the Singleton Pattern</h4>
            <CopyableContent label="Singleton Usage">
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono">
{`Sub DemonstrateSingletonPattern()
    ' Get configuration instance
    Dim config As clsConfigManager
    Set config = clsConfigManager.GetInstance()
    
    ' Display app information
    MsgBox "Application: " & config.GetAppInfo()
    
    ' Test salary validation
    Dim testSalary As Currency
    testSalary = 75000
    
    If config.IsValidSalary(testSalary) Then
        MsgBox Format(testSalary, "Currency") & " is a valid salary"
    Else
        MsgBox Format(testSalary, "Currency") & " is outside valid range"
    End If
    
    ' Modify settings
    config.SetSetting "MaxSalary", 250000
    MsgBox "Max salary updated to: " & Format(config.GetSetting("MaxSalary"), "Currency")
    
    ' Demonstrate singleton behavior - same instance
    Dim config2 As clsConfigManager
    Set config2 = clsConfigManager.GetInstance()
    
    MsgBox "Same instance? " & CStr(config Is config2) ' Should be True
End Sub`}
              </pre>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            Best Practices for Advanced VBA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">✅ Do's</h4>
              <ul className="space-y-2 text-sm">
                <li>• Use class modules for complex data structures</li>
                <li>• Implement proper error handling in events</li>
                <li>• Apply design patterns appropriately</li>
                <li>• Use property procedures for data validation</li>
                <li>• Disable events during programmatic changes</li>
                <li>• Create reusable, modular code</li>
                <li>• Document your class interfaces</li>
                <li>• Use meaningful naming conventions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-3">❌ Don'ts</h4>
              <ul className="space-y-2 text-sm">
                <li>• Don't create circular references</li>
                <li>• Don't forget to clean up object references</li>
                <li>• Don't use events for heavy processing</li>
                <li>• Don't ignore the Class_Terminate event</li>
                <li>• Don't make everything public in classes</li>
                <li>• Don't create unnecessary singleton classes</li>
                <li>• Don't skip input validation</li>
                <li>• Don't use global variables excessively</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-600" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm">
              <strong>Class Modules:</strong> Enable object-oriented programming in VBA, providing encapsulation and reusability.
            </p>
            <p className="text-sm">
              <strong>Event Handling:</strong> Creates responsive applications that react to user actions and data changes.
            </p>
            <p className="text-sm">
              <strong>Design Patterns:</strong> Proven solutions to common programming problems that improve code quality.
            </p>
            <p className="text-sm">
              <strong>Professional Development:</strong> These techniques enable creation of enterprise-level Excel applications.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      <div className="flex justify-center pt-6">
        <Button 
          onClick={onContinue} 
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
        >
          Complete VBA Course
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VBAAdvancedTechniquesLesson;
