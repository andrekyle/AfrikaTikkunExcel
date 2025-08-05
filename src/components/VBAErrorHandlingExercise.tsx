import React, { useState, useRef } from 'react';
import { Copy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sampleData = [
  { employee: "Alice Smith", sales: 12000 },
  { employee: "Bob Johnson", sales: "N/A" }, // Error: Not a number
  { employee: "Carol Lee", sales: 14500 },
  { employee: "Dan Brown", sales: 9800 },
  { employee: "Eve Adams", sales: "N/A" }, // Error: Not a number
  { employee: "Frank White", sales: 15400 },
];

const macroCode = `Sub CalculateTotalSalesWithErrorHandling()
    ' This macro sums sales and handles errors gracefully
    Dim lastRow As Long
    Dim i As Long
    Dim totalSales As Double
    On Error GoTo HandleError
    
    lastRow = Cells(Rows.Count, 2).End(xlUp).Row
    totalSales = 0
    For i = 2 To lastRow
        If IsNumeric(Cells(i, 2).Value) Then
            totalSales = totalSales + Cells(i, 2).Value
        Else
            Cells(i, 2).Interior.Color = vbYellow
        End If
    Next i
    MsgBox "Total sales: " & totalSales, vbInformation
    Exit Sub
HandleError:
    MsgBox "An error occurred: " & Err.Description, vbExclamation
End Sub`;

export default function VBAErrorHandlingExercise() {
  const [copied, setCopied] = useState(false);
  const [tableCopied, setTableCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(macroCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const handleCopyTable = async () => {
    await navigator.clipboard.writeText(
      "Employee\tSales\n" +
        sampleData.map(row => `${row.employee}\t${row.sales}`).join("\n")
    );
    setTableCopied(true);
    setTimeout(() => setTableCopied(false), 1200);
  };

  return (
    <Card className="mt-4 border-primary/40">
      <CardHeader>
        <CardTitle className="text-lg">Lesson 5: Error Handling</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-4">
          <h6 className="font-semibold mb-1 text-sm">Step-by-Step Instructions</h6>
          <ol className="list-decimal ml-6 space-y-1 text-sm">
            <li>Copy the sample data table (using the copy button) and paste it into a worksheet in your Excel workbook.</li>
            <li>Copy the VBA macro code (using the copy button) and paste it into a new module in the VBA editor (Alt + F11).</li>
            <li>Run the <b >CalculateTotalSalesWithErrorHandling</b>
                  macro.</li>
            <li>Observe how the macro handles non-numeric sales values and displays the total sales.</li>
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
            <table className="min-w-[220px] text-sm border rounded-lg bg-muted">
              <thead>
                <tr className="bg-muted/80">
                  <th className="px-4 py-2 text-left font-medium">Employee</th>
                  <th className="px-4 py-2 text-left font-medium">Sales</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-4 py-2 whitespace-nowrap">{row.employee}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.sales}</td>
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
          <pre ref={codeRef} className="bg-background border rounded p-3 text-xs overflow-x-auto select-all mt-2">
{macroCode}
          </pre>
          <div className="mt-3 p-3 bg-muted/60 rounded text-xs">
            <h6 className="font-semibold mb-1">VBA Code Explanation</h6>
            <ul className="list-disc ml-5 space-y-1 text-xs">
              <li><b >Sub CalculateTotalSalesWithErrorHandling()</b>: Starts the macro definition.</li>
              <li><b >On Error GoTo HandleError</b>: Sets up error handling for the macro.</li>
              <li><b >For i = 2 To lastRow</b>: Loops through each row of data in the worksheet.</li>
              <li><b >If IsNumeric(Cells(i, 2).Value) Then ...</b>: Checks if the sales value is numeric.</li>
              <li><b >Else: Cells(i, 2).Interior.Color = vbYellow</b>: Highlights non-numeric sales values in yellow.</li>
              <li><b >MsgBox "Total sales: ..."</b>: Displays the total sales in a message box.</li>
              <li><b >HandleError:</b>: Error handler label. Displays an error message if something goes wrong.</li>
            </ul>
            <div className="mt-2">This macro demonstrates robust error handling by checking for non-numeric values and highlighting them, while also catching unexpected errors and informing the user.</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
