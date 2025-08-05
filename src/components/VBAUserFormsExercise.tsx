import React, { useState, useRef } from 'react';
import { Copy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const macroCode = `Sub ShowEmployeeForm()
    EmployeeForm.Show
End Sub

' In a new UserForm (named EmployeeForm), add:
' - TextBox: txtName
' - TextBox: txtDepartment
' - TextBox: txtSalary
' - TextBox: txtEmail
' - TextBox: txtHireDate
' - ComboBox: cmbStatus (values: "Active", "Inactive")
' - CommandButton: btnSubmit

' This macro will add new employee data to the next empty row in the Employees worksheet, regardless of the current size of your table.
' You can use it with any number of employees.

' In the code module for EmployeeForm:
Private Sub btnSubmit_Click()
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Sheets("Employees")
    Dim nextRow As Long
    Dim msg As String

    ' Validation
    If Trim(txtName.Value) = "" Or Trim(txtDepartment.Value) = "" Or Trim(txtSalary.Value) = "" Or _
       Trim(txtEmail.Value) = "" Or Trim(txtHireDate.Value) = "" Or cmbStatus.ListIndex = -1 Then
        MsgBox "Please fill in all fields.", vbExclamation
        Exit Sub
    End If

    If Not IsNumeric(txtSalary.Value) Or Val(txtSalary.Value) <= 0 Then
        MsgBox "Salary must be a positive number.", vbExclamation
        Exit Sub
    End If

    If InStr(1, txtEmail.Value, "@") = 0 Or InStr(1, txtEmail.Value, ".") = 0 Then
        MsgBox "Please enter a valid email address.", vbExclamation
        Exit Sub
    End If

    If Not IsDate(txtHireDate.Value) Then
        MsgBox "Please enter a valid hire date.", vbExclamation
        Exit Sub
    End If

    nextRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row + 1
    ws.Cells(nextRow, 1).Value = txtName.Value
    ws.Cells(nextRow, 2).Value = txtDepartment.Value
    ws.Cells(nextRow, 3).Value = txtSalary.Value
    ws.Cells(nextRow, 4).Value = txtEmail.Value
    ws.Cells(nextRow, 5).Value = txtHireDate.Value
    ws.Cells(nextRow, 6).Value = cmbStatus.Value

    Unload Me
End Sub

Private Sub UserForm_Initialize()
    cmbStatus.Clear
    cmbStatus.AddItem "Active"
    cmbStatus.AddItem "Inactive"
End Sub`;

const sampleData = [
  { name: "Alice Smith", department: "Finance", salary: "70000", email: "alice@company.com", hireDate: "2020-01-15", status: "Active" },
  { name: "Bob Johnson", department: "Marketing", salary: "65000", email: "bob@company.com", hireDate: "2019-07-01", status: "Active" },
  { name: "Carol Lee", department: "IT", salary: "80000", email: "carol@company.com", hireDate: "2021-05-12", status: "Inactive" },
  { name: "Dan Brown", department: "HR", salary: "60000", email: "dan@company.com", hireDate: "2018-09-23", status: "Active" },
  { name: "Eva White", department: "Operations", salary: "72000", email: "eva@company.com", hireDate: "2022-03-10", status: "Active" },
  { name: "Frank Harris", department: "Sales", salary: "68000", email: "frank@company.com", hireDate: "2020-11-05", status: "Active" },
  { name: "Grace Kim", department: "IT", salary: "82000", email: "grace@company.com", hireDate: "2021-08-22", status: "Inactive" },
  { name: "Henry Adams", department: "Finance", salary: "75000", email: "henry@company.com", hireDate: "2017-06-30", status: "Active" },
  { name: "Irene Black", department: "Marketing", salary: "67000", email: "irene@company.com", hireDate: "2019-02-14", status: "Active" },
  { name: "Jack Green", department: "HR", salary: "61000", email: "jack@company.com", hireDate: "2023-01-09", status: "Active" },
];

export default function VBAUserFormsExercise() {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);
  const [tableCopied, setTableCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(macroCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const handleCopyTable = async () => {
    await navigator.clipboard.writeText(
      "Name\tDepartment\tSalary\tEmail\tHire Date\tStatus\n" +
        sampleData.map(row => `${row.name}\t${row.department}\t${row.salary}\t${row.email}\t${row.hireDate}\t${row.status}`).join("\n")
    );
    setTableCopied(true);
    setTimeout(() => setTableCopied(false), 1200);
  };

  return (
    <Card className="mt-4 border-primary/40">
      <CardHeader>
        <CardTitle className="text-lg">Lesson 6: User Forms</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-4">
          <h6 className="font-semibold mb-1 text-sm">Step-by-Step Instructions</h6>
          <ol className="list-decimal ml-6 space-y-1 text-sm">
            <li>Copy the sample data table (using the copy button) and paste it into a worksheet named <b >Employees</b>
                  in your Excel workbook.</li>
            <li>Open the VBA editor (Alt + F11) and insert a new UserForm. Name it <b >EmployeeForm</b>.</li>
            <li>Add three TextBoxes (<b >txtName</b>, <b >txtDepartment</b>, <b >txtSalary</b>) and a CommandButton (<b >btnSubmit</b>) to the form.</li>
            <li>Copy the provided VBA code into the appropriate modules (see comments in code).</li>
            <li>Run the <b >ShowEmployeeForm</b>
                  macro to open the form and enter new employee data.</li>
            <li>Click <b >Submit</b>
                  to add the data to the Employees worksheet.</li>
          </ol>
        </div>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h5 className="font-semibold m-0">Sample Data Table</h5>
            <Button size="icon" variant="ghost" aria-label="Copy sample table" onClick={handleCopyTable}>
              <Copy className="h-4 w-4" />
            </Button>
            {tableCopied && <span className="text-success-green text-xs ml-1">Copied!</span>}
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[320px] text-sm border rounded-lg bg-muted">
              <thead>
                <tr className="bg-muted/80">
                  <th className="px-4 py-2 text-left font-medium">Name</th>
                  <th className="px-4 py-2 text-left font-medium">Department</th>
                  <th className="px-4 py-2 text-left font-medium">Salary</th>
                  <th className="px-4 py-2 text-left font-medium">Email</th>
                  <th className="px-4 py-2 text-left font-medium">Hire Date</th>
                  <th className="px-4 py-2 text-left font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-4 py-2 whitespace-nowrap">{row.name}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.department}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.salary}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.email}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.hireDate}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <h5 className="font-semibold m-0">Sample VBA Macro Code</h5>
            <Button size="icon" variant="ghost" aria-label="Copy macro code" onClick={handleCopy}>
              <Copy className="h-4 w-4" />
            </Button>
            {copied && <span className="text-success-green text-xs ml-1">Copied!</span>}
          </div>
          <pre ref={codeRef} className="bg-background border rounded p-3 text-xs select-all mt-2 whitespace-pre-wrap break-words">
{macroCode}
          </pre>
          <div className="mt-3 p-3 bg-muted/60 rounded text-xs">
            <h6 className="font-semibold mb-1">VBA Code Explanation</h6>
            <ul className="list-disc ml-5 space-y-1 text-xs">
              <li><b >Sub ShowEmployeeForm()</b>: Macro to display the custom user form.</li>
              <li><b >UserForm (EmployeeForm)</b>: Contains text boxes for Name, Department, Salary, and a Submit button.</li>
              <li><b >btnSubmit_Click</b>: Event handler that writes form data to the next empty row in the Employees worksheet and closes the form.</li>
            </ul>
            <div className="mt-2">This exercise demonstrates how to create a custom data entry form in Excel using VBA UserForms, making data collection more user-friendly and robust.</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
