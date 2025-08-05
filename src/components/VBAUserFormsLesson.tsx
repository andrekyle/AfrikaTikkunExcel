import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, Check, ArrowRight, Play } from "lucide-react";
import React, { useState } from 'react';
import CopyableContent from "@/components/CopyableContent";

interface VBAUserFormsLessonProps {
  onContinue?: () => void;
}

const VBAUserFormsLesson: React.FC<VBAUserFormsLessonProps> = ({ onContinue }) => {
  const [copied, setCopied] = useState<{[key: string]: boolean}>({});

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopied({...copied, [id]: true});
    setTimeout(() => setCopied({...copied, [id]: false}), 2000);
  };

  const codeSnippets = {
    basicForm: `' Create a basic user form with a textbox and button
Private Sub UserForm_Initialize()
    ' Set form properties
    Me.Caption = "Customer Information"
    Me.Width = 400
    Me.Height = 300
    
    ' Add a label
    With Me.Controls.Add("Forms.Label.1")
        .Caption = "Enter Customer Name:"
        .Left = 20
        .Top = 20
        .Width = 120
        .Height = 18
    End With
    
    ' Add a textbox
    With Me.Controls.Add("Forms.TextBox.1")
        .Name = "txtCustomerName"
        .Left = 150
        .Top = 20
        .Width = 200
    End With
    
    ' Add a button
    With Me.Controls.Add("Forms.CommandButton.1")
        .Caption = "Submit"
        .Name = "btnSubmit"
        .Left = 150
        .Top = 60
        .Width = 80
    End With
End Sub`,
    
    eventHandler: `' Button click event handler
Private Sub btnSubmit_Click()
    If Len(Me.txtCustomerName.Value) = 0 Then
        MsgBox "Please enter a customer name.", vbExclamation
        Me.txtCustomerName.SetFocus
        Exit Sub
    End If
    
    ' Process the form data
    ProcessCustomer Me.txtCustomerName.Value
    
    ' Close the form
    Unload Me
End Sub`,
    
    validation: `' Form validation function
Private Function ValidateForm() As Boolean
    ValidateForm = False
    
    ' Check required fields
    If Len(Me.txtName.Value) = 0 Then
        MsgBox "Name is required.", vbExclamation, "Validation Error"
        Me.txtName.SetFocus
        Exit Function
    End If
    
    ' Validate email format
    If Not IsValidEmail(Me.txtEmail.Value) Then
        MsgBox "Please enter a valid email address.", vbExclamation, "Validation Error"
        Me.txtEmail.SetFocus
        Exit Function
    End If
    
    ' Validate numeric field
    If Not IsNumeric(Me.txtAge.Value) Or Val(Me.txtAge.Value) < 18 Then
        MsgBox "Age must be a number 18 or greater.", vbExclamation, "Validation Error"
        Me.txtAge.SetFocus
        Exit Function
    End If
    
    ValidateForm = True
End Function`,
    
    modalForm: `' Show a form as a modal dialog
Sub ShowCustomerForm()
    Dim frm As UserForm
    
    ' Create an instance of the form
    Set frm = New frmCustomer
    
    ' Show the form as modal
    frm.Show vbModal
    
    ' Process the result after the form is closed
    If frm.Tag <> "" Then
        ' Form was submitted with data
        MsgBox "Customer " & frm.Tag & " was processed successfully!", vbInformation
    End If
    
    ' Clean up
    Unload frm
    Set frm = Nothing
End Sub`
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle >User Forms & Interfaces in VBA</CardTitle>
          <CardDescription >Learn how to create professional dialog boxes and user interfaces in Excel VBA to enhance user interaction.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Introduction to UserForms</h3>
            <p className="text-muted-foreground">UserForms in VBA provide a way to create custom dialog boxes and interfaces for your Excel applications. 
              They allow you to design professional-looking forms with various controls like textboxes, buttons, 
              listboxes, and more.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Step-by-Step: Creating a Basic UserForm</h3>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-3">Step 1: Open the VBA Editor</h4>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-blue-700 dark:text-blue-300 mb-3">Press <kbd className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 font-mono text-sm">Alt + F11</kbd>
                  in Excel to open the VBA Editor.</p>
                  <ul className="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
                    <li>This shortcut works in all versions of Excel for Windows</li>
                    <li>For Mac, use <kbd className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-0.5 font-mono text-xs">Option + F11</kbd>
                  or <kbd className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-0.5 font-mono text-xs">Fn + Option + F11</kbd></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-3">Step 2: Insert a New UserForm</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-blue-700 dark:text-blue-300 mb-3">In the VBA Editor:</p>
                  <ol className="list-decimal pl-5 space-y-2 text-blue-700 dark:text-blue-300">
                    <li>Locate your workbook in the Project Explorer (left pane)</li>
                    <li>Right-click on your project name</li>
                    <li>Hover over <span className="font-medium">Insert</span></li>
                    <li>Click on <span className="font-medium">UserForm</span></li>
                  </ol>
                </div>
                <div className="bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700">
                  <div className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-1">Project Explorer</div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded p-2 bg-gray-50 dark:bg-gray-800">
                    <div className="text-xs text-gray-900 dark:text-gray-300 font-medium">VBAProject (YourWorkbook.xlsm)</div>
                    <div className="pl-4 mt-1">
                      <div className="text-xs text-blue-700 dark:text-blue-400">Microsoft Excel Objects</div>
                      <div className="text-xs text-purple-700 dark:text-purple-400">Modules</div>
                      <div className="text-xs text-green-700 dark:text-green-400">Forms</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500 pl-4">UserForm1 (UserForm)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-3">Step 3: Customize Your UserForm</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-blue-700 dark:text-blue-300 mb-3">Using the Toolbox (press <kbd className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-0.5 font-mono text-xs">Ctrl + T</kbd>
                  if not visible):</p>
                  <ul className="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
                    <li><span className="font-medium">Label</span> - Add descriptive text</li>
                    <li><span className="font-medium">TextBox</span> - For user text input</li>
                    <li><span className="font-medium">ComboBox</span> - Dropdown selection</li>
                    <li><span className="font-medium">ListBox</span> - List of selectable items</li>
                    <li><span className="font-medium">CheckBox</span> - For yes/no options</li>
                    <li><span className="font-medium">OptionButton</span> - For single selection</li>
                    <li><span className="font-medium">CommandButton</span> - For actions</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700">
                  <div className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-1">Toolbox</div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded p-2 bg-gray-50 dark:bg-gray-800 grid grid-cols-3 gap-2">
                    <div className="text-center p-1 border rounded bg-white dark:bg-gray-700">
                      <div className="h-6 border-b mb-1"></div>
                      <span className="text-xs">Label</span>
                    </div>
                    <div className="text-center p-1 border rounded bg-white dark:bg-gray-700">
                      <div className="h-6 border rounded bg-white dark:bg-gray-600 mb-1"></div>
                      <span className="text-xs">TextBox</span>
                    </div>
                    <div className="text-center p-1 border rounded bg-white dark:bg-gray-700">
                      <div className="h-6 border rounded bg-white dark:bg-gray-600 mb-1 flex items-center justify-end pr-2">
                        <span className="text-xs text-gray-400">▼</span>
                      </div>
                      <span className="text-xs">ComboBox</span>
                    </div>
                    <div className="text-center p-1 border rounded bg-white dark:bg-gray-700">
                      <div className="h-6 border rounded bg-white dark:bg-gray-600 mb-1"></div>
                      <span className="text-xs">ListBox</span>
                    </div>
                    <div className="text-center p-1 border rounded bg-white dark:bg-gray-700">
                      <div className="h-6 flex items-center space-x-1">
                        <div className="w-4 h-4 border rounded"></div>
                        <span className="text-xs">Option</span>
                      </div>
                      <span className="text-xs">CheckBox</span>
                    </div>
                    <div className="text-center p-1 border rounded bg-white dark:bg-gray-700">
                      <div className="h-6 flex items-center justify-center">
                        <div className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded text-sm">Click Me</div>
                      </div>
                      <span className="text-xs">CommandButton</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-3">Step 4: Set Properties</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-blue-700 dark:text-blue-300 mb-3">For each control, set properties in the Properties window (press <kbd className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-0.5 font-mono text-xs">F4</kbd>):</p>
                  <ul className="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
                    <li><span className="font-medium">(Name)</span> - Use meaningful names (e.g., <code className="bg-blue-100 dark:bg-blue-900/50 px-1 py-0.5 rounded text-xs">txtFirstName</code>, <code className="bg-blue-100 dark:bg-blue-900/50 px-1 py-0.5 rounded text-xs">btnSubmit</code>)</li>
                    <li><span className="font-medium">Caption</span> - Text that appears on the control</li>
                    <li><span className="font-medium">Font</span> - Control the text appearance</li>
                    <li><span className="font-medium">BackColor/ForeColor</span> - Set colors</li>
                    <li><span className="font-medium">Width/Height</span> - Size the control</li>
                    <li><span className="font-medium">TabIndex</span> - Set the tab order</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700">
                  <div className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-1">Properties Window</div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800 text-xs">
                    <div className="border-b border-gray-200 dark:border-gray-700 p-1 bg-gray-100 dark:bg-gray-700 font-medium">CommandButton1 CommandButton</div>
                    <div className="p-1 border-b border-gray-200 dark:border-gray-700">
                      <span className="text-gray-500 dark:text-gray-400">(Name)</span>
                      <span className="float-right">btnSubmit</span>
                    </div>
                    <div className="p-1 border-b border-gray-200 dark:border-gray-700">
                      <span className="text-gray-500 dark:text-gray-400">Caption</span>
                      <span className="float-right">Submit</span>
                    </div>
                    <div className="p-1 border-b border-gray-200 dark:border-gray-700">
                      <span className="text-gray-500 dark:text-gray-400">BackColor</span>
                      <span className="float-right">&H8000000F&</span>
                    </div>
                    <div className="p-1 border-b border-gray-200 dark:border-gray-700">
                      <span className="text-gray-500 dark:text-gray-400">Font</span>
                      <span className="float-right">Arial, 8pt</span>
                    </div>
                    <div className="p-1 border-b border-gray-200 dark:border-gray-700">
                      <span className="text-gray-500 dark:text-gray-400">Width</span>
                      <span className="float-right">72</span>
                    </div>
                    <div className="p-1">
                      <span className="text-gray-500 dark:text-gray-400">Height</span>
                      <span className="float-right">24</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Basic UserForm Example</h3>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md relative">
              <CopyableContent
                alwaysShowButton={true}
                content={codeSnippets.basicForm}
                buttonClassName="bg-white"
                label=""
              />
              <pre className="overflow-x-auto text-sm">
                <code className="language-vba">{codeSnippets.basicForm}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Handling Events</h3>
            <p className="text-muted-foreground mb-4">UserForms and controls have various events you can handle, such as button clicks, form initialization, 
              and control-specific events. Here's an example of a button click event handler:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md relative">
              <CopyableContent
                alwaysShowButton={true}
                content={codeSnippets.eventHandler}
                buttonClassName="bg-white"
                label=""
              />
              <pre className="overflow-x-auto text-sm">
                <code className="language-vba">{codeSnippets.eventHandler}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Form Validation</h3>
            <p className="text-muted-foreground mb-4">Always validate user input to ensure data integrity. Here's an example of form validation:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md relative">
              <CopyableContent
                alwaysShowButton={true}
                content={codeSnippets.validation}
                buttonClassName="bg-white"
                label=""
              />
              <pre className="overflow-x-auto text-sm">
                <code className="language-vba">{codeSnippets.validation}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Modal vs Modeless Forms</h3>
            <p className="text-muted-foreground mb-4">VBA supports both modal (user must close the form before interacting with Excel) and modeless 
              (user can interact with Excel while the form is open) forms. Here's how to show a form as modal:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md relative">
              <CopyableContent
                alwaysShowButton={true}
                content={codeSnippets.modalForm}
                buttonClassName="bg-white"
                label=""
              />
              <pre className="overflow-x-auto text-sm">
                <code className="language-vba">{codeSnippets.modalForm}</code>
              </pre>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md border border-blue-200 dark:border-blue-800">
            <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Best Practices</h3>
            <ul className="list-disc pl-6 space-y-2 text-blue-700 dark:text-blue-300">
              <li>Always validate user input before processing</li>
              <li>Use meaningful names for controls (e.g., <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">txtFirstName</code>
                  for a textbox)</li>
              <li>Set the <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">TabIndex</code>
                  property for logical tab order</li>
              <li>Use <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">Tag</code>
                  property to store data with controls</li>
              <li>Clean up object references when closing forms</li>
              <li>Consider using a form factory pattern for complex applications</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md border border-green-200 dark:border-green-800">
            <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">Exercise: Create a Contact Form</h3>
            <p className="text-green-700 dark:text-green-300 mb-4">Create a UserForm for entering contact information with the following fields:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-green-700 dark:text-green-300">
              <li>First Name (required)</li>
              <li>Last Name (required)</li>
              <li>Email (required, must be valid format)</li>
              <li>Phone (validate format)</li>
              <li>Contact Method (dropdown with options: Email, Phone, Text, Mail)</li>
              <li>Best Time to Contact (option buttons: Morning, Afternoon, Evening)</li>
              <li>Comments (multiline textbox)</li>
            </ul>
            <p className="mt-4 text-green-700 dark:text-green-300">Add validation and a submit button that processes the form data.
            </p>
            <Button variant="outline" className="mt-4 border-green-300 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50">
              <Play className="h-4 w-4 mr-2" />
              Start Exercise
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps Button */}
      <div className="flex justify-end mt-8">
        <Button variant="default" className="gap-2" onClick={onContinue}>
          <span>Continue to Next Lesson</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VBAUserFormsLesson;
