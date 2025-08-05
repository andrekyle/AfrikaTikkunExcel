import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, ArrowRight, FileText, RefreshCw, Download, Upload, AlertTriangle, CheckCircle, Puzzle, Wrench } from 'lucide-react';
import CopyableContent from '@/components/CopyableContent';

interface VBACustomFunctionsAddinsLessonProps {
  onContinue?: () => void;
}

const VBACustomFunctionsAddinsLesson: React.FC<VBACustomFunctionsAddinsLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
          <Puzzle className="w-5 h-5" />
          <span className="font-semibold">VBA Lesson 9</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Custom Functions & Add-ins</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build reusable functions and Excel add-ins to extend Excel's functionality and create professional solutions
        </p>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Custom Functions</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Create User Defined Functions (UDFs)</li>
                <li>• Build function libraries for reuse</li>
                <li>• Handle function parameters and return values</li>
                <li>• Implement error handling in functions</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Excel Add-ins</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Develop Excel add-in projects</li>
                <li>• Create custom ribbon interfaces</li>
                <li>• Package and distribute add-ins</li>
                <li>• Implement add-in security and updates</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: Basic Custom Functions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-600" />
            Project 1: Custom Functions Library
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Create a library of useful custom functions for business calculations.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Sample Data - Employee Records</h4>
            <CopyableContent content={`Employee ID	Name	Department	Salary	Performance
EMP001	John Smith	Sales	65000	Excellent
EMP002	Sarah Johnson	Marketing	58000	Good
EMP003	Mike Wilson	IT	72000	Excellent
EMP004	Lisa Brown	HR	55000	Average
EMP005	David Lee	Finance	68000	Good`}>
              <div className="bg-white p-3 rounded border font-mono text-sm">
                <div className="grid grid-cols-5 gap-4 text-xs font-semibold border-b pb-2 mb-2">
                  <span>Employee ID</span><span>Name</span><span>Department</span><span>Salary</span><span>Performance</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="grid grid-cols-5 gap-4"><span>EMP001</span><span>John Smith</span><span>Sales</span><span>65000</span><span>Excellent</span></div>
                  <div className="grid grid-cols-5 gap-4"><span>EMP002</span><span>Sarah Johnson</span><span>Marketing</span><span>58000</span><span>Good</span></div>
                  <div className="grid grid-cols-5 gap-4"><span>EMP003</span><span>Mike Wilson</span><span>IT</span><span>72000</span><span>Excellent</span></div>
                </div>
              </div>
            </CopyableContent>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Custom Functions Code</h4>
            <CopyableContent content={`' ===== CUSTOM FUNCTIONS LIBRARY =====
Public Function CalculateBonus(salary As Double, performance As String) As Double
    On Error GoTo ErrorHandler
    Select Case UCase(performance)
        Case "EXCELLENT": CalculateBonus = salary * 0.15
        Case "GOOD": CalculateBonus = salary * 0.1
        Case "AVERAGE": CalculateBonus = salary * 0.05
        Case Else: CalculateBonus = 0
    End Select
    Exit Function
ErrorHandler:
    CalculateBonus = 0
End Function

Public Function FormatEmployeeName(fullName As String) As String
    On Error GoTo ErrorHandler
    Dim names As Variant
    names = Split(fullName, " ")
    If UBound(names) >= 1 Then
        FormatEmployeeName = names(UBound(names)) & ", " & names(0)
    Else
        FormatEmployeeName = fullName
    End If
    Exit Function
ErrorHandler:
    FormatEmployeeName = fullName
End Function

Public Function GetTaxBracket(salary As Double) As String
    On Error GoTo ErrorHandler
    Select Case salary
        Case Is >= 70000: GetTaxBracket = "High"
        Case Is >= 60000: GetTaxBracket = "Medium"
        Case Is >= 50000: GetTaxBracket = "Low"
        Case Else: GetTaxBracket = "Minimum"
    End Select
    Exit Function
ErrorHandler:
    GetTaxBracket = "Error"
End Function`}>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`' ===== CUSTOM FUNCTIONS LIBRARY =====
Public Function CalculateBonus(salary As Double, performance As String) As Double
    On Error GoTo ErrorHandler
    Select Case UCase(performance)
        Case "EXCELLENT": CalculateBonus = salary * 0.15
        Case "GOOD": CalculateBonus = salary * 0.1
        Case "AVERAGE": CalculateBonus = salary * 0.05
        Case Else: CalculateBonus = 0
    End Select
    Exit Function
ErrorHandler:
    CalculateBonus = 0
End Function

Public Function FormatEmployeeName(fullName As String) As String
    On Error GoTo ErrorHandler
    Dim names As Variant
    names = Split(fullName, " ")
    If UBound(names) >= 1 Then
        FormatEmployeeName = names(UBound(names)) & ", " & names(0)
    Else
        FormatEmployeeName = fullName
    End If
    Exit Function
ErrorHandler:
    FormatEmployeeName = fullName
End Function`}</pre>
              </div>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Project 2: Excel Add-in Development */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-purple-600" />
            Project 2: Excel Add-in Development
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Create a complete Excel add-in with custom functionality and professional interface.
          </p>

          <div className="space-y-4">
            <h4 className="font-semibold">Add-in Main Code</h4>
            <CopyableContent content={`' ===== EXCEL ADD-IN TEMPLATE =====
Option Explicit

Public Const ADDIN_NAME As String = "Business Analytics Toolkit"
Public Const ADDIN_VERSION As String = "1.0.0"

Private Sub Workbook_Open()
    On Error GoTo ErrorHandler
    Call CreateCustomMenu
    MsgBox "Welcome to " & ADDIN_NAME & " v" & ADDIN_VERSION, vbInformation
    Exit Sub
ErrorHandler:
    MsgBox "Error loading add-in: " & Err.Description, vbCritical
End Sub

Private Sub CreateCustomMenu()
    On Error GoTo ErrorHandler
    Dim menuBar As CommandBar
    Dim newMenu As CommandBarPopup
    Dim menuItem As CommandBarButton
    
    Call RemoveCustomMenu
    Set menuBar = Application.CommandBars("Worksheet Menu Bar")
    Set newMenu = menuBar.Controls.Add(Type:=msoControlPopup)
    newMenu.Caption = "Analytics Toolkit"
    
    Set menuItem = newMenu.Controls.Add(Type:=msoControlButton)
    With menuItem
        .Caption = "Data Dashboard"
        .OnAction = "ShowDataDashboard"
        .FaceId = 590
    End With
    
    Exit Sub
ErrorHandler:
    Debug.Print "Error creating menu: " & Err.Description
End Sub

Public Sub ShowDataDashboard()
    On Error GoTo ErrorHandler
    Dim ws As Worksheet
    Set ws = ActiveWorkbook.Worksheets.Add
    ws.Name = "Analytics Dashboard"
    
    With ws
        .Range("A1").Value = "Business Analytics Dashboard"
        .Range("A1").Font.Size = 16
        .Range("A1").Font.Bold = True
        .Range("A3").Value = "Total Revenue:"
        .Range("B3").Formula = "=SUM(Data!D:D)"
        .Columns("A:B").AutoFit
    End With
    
    MsgBox "Dashboard created successfully!", vbInformation
    Exit Sub
ErrorHandler:
    MsgBox "Error creating dashboard: " & Err.Description, vbCritical
End Sub`}>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`' ===== EXCEL ADD-IN TEMPLATE =====
Option Explicit

Public Const ADDIN_NAME As String = "Business Analytics Toolkit"
Public Const ADDIN_VERSION As String = "1.0.0"

Private Sub Workbook_Open()
    On Error GoTo ErrorHandler
    Call CreateCustomMenu
    MsgBox "Welcome to " & ADDIN_NAME & " v" & ADDIN_VERSION, vbInformation
    Exit Sub
ErrorHandler:
    MsgBox "Error loading add-in: " & Err.Description, vbCritical
End Sub

Private Sub CreateCustomMenu()
    On Error GoTo ErrorHandler
    Dim menuBar As CommandBar
    Dim newMenu As CommandBarPopup
    Dim menuItem As CommandBarButton
    
    Call RemoveCustomMenu
    Set menuBar = Application.CommandBars("Worksheet Menu Bar")
    Set newMenu = menuBar.Controls.Add(Type:=msoControlPopup)
    newMenu.Caption = "Analytics Toolkit"
    
    Set menuItem = newMenu.Controls.Add(Type:=msoControlButton)
    With menuItem
        .Caption = "Data Dashboard"
        .OnAction = "ShowDataDashboard"
        .FaceId = 590
    End With
    
    Exit Sub
ErrorHandler:
    Debug.Print "Error creating menu: " & Err.Description
End Sub`}</pre>
              </div>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            Best Practices & Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-800">✅ Do's</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Use descriptive function names</li>
                <li>• Include comprehensive error handling</li>
                <li>• Document function parameters clearly</li>
                <li>• Test functions with various data types</li>
                <li>• Create modular, reusable code</li>
                <li>• Version control your add-ins</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-red-800">❌ Don'ts</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Don't use generic function names</li>
                <li>• Don't ignore error handling</li>
                <li>• Don't hardcode values in functions</li>
                <li>• Don't create overly complex functions</li>
                <li>• Don't skip testing edge cases</li>
                <li>• Don't distribute untested add-ins</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      <div className="flex justify-center pt-6">
        <Button 
          onClick={onContinue}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
        >
          Continue to Next Lesson
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default VBACustomFunctionsAddinsLesson;
