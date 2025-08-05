import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy } from "lucide-react";

const sampleData = [
  { employee: "Alice Smith", department: "Sales", region: "Gauteng", sales: 12000, target: 15000 },
  { employee: "Bob Johnson", department: "Sales", region: "Western Cape", sales: 18500, target: 17000 },
  { employee: "Carol Lee", department: "Marketing", region: "Gauteng", sales: 9800, target: 12000 },
  { employee: "Dan Brown", department: "Sales", region: "KwaZulu-Natal", sales: 22000, target: 20000 },
  { employee: "Eve Adams", department: "Marketing", region: "Western Cape", sales: 15700, target: 15000 },
  { employee: "Fikile Moyo", department: "Sales", region: "Gauteng", sales: 13400, target: 14000 },
  { employee: "Grace Ndlovu", department: "Marketing", region: "KwaZulu-Natal", sales: 14200, target: 13000 },
  { employee: "Hassan Patel", department: "Sales", region: "Gauteng", sales: 17500, target: 16000 },
  { employee: "Imani Dlamini", department: "Sales", region: "Western Cape", sales: 16300, target: 15500 },
  { employee: "Jabu Khumalo", department: "Marketing", region: "Gauteng", sales: 12500, target: 12000 },
];

const macroCode = `Sub GenerateSalesReport()
    ' This macro finds total sales, highlights the top performer, and marks who met their target
    Dim lastRow As Long
    Dim i As Long
    Dim totalSales As Double
    Dim maxSales As Double
    Dim maxRow As Long
    lastRow = Cells(Rows.Count, 4).End(xlUp).Row ' Column 4 = Sales
    totalSales = 0
    maxSales = 0
    For i = 2 To lastRow
        totalSales = totalSales + Cells(i, 4).Value ' Sales in column 4
        If Cells(i, 4).Value >maxSales Then
            maxSales = Cells(i, 4).Value
            maxRow = i
        End If
        If Cells(i, 4).Value >= Cells(i, 5).Value Then
            Cells(i, 4).Interior.Color = RGB(173, 216, 230) ' Met or exceeded target (light blue)
        Else
            Cells(i, 4).Interior.Color = vbRed ' Missed target
        End If
    Next i
    Cells(lastRow + 2, 1).Value = "Total Sales:"
    Cells(lastRow + 2, 4).Value = totalSales
    Cells(maxRow, 4).Interior.Color = vbGreen ' Highlight top performer
End Sub`;

export default function VBAReportGeneratorExercise() {
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
      "Employee\tDepartment\tRegion\tSales\tTarget\n" +
      sampleData.map(row => `${row.employee}\t${row.department}\t${row.region}\t${row.sales}\t${row.target}`).join("\n")
    );
    setTableCopied(true);
    setTimeout(() => setTableCopied(false), 1200);
  };

  return (
    <Card className="mt-4 border-primary/40">
      <CardContent className="pt-6">
        <div className="mb-4">
          <h6 className="font-semibold mb-1 text-sm">Step-by-Step Instructions</h6>
          <ol className="list-decimal ml-6 space-y-1 text-sm">
            <li>Copy the sample data table (using the copy button) and paste it into a worksheet in your Excel workbook.</li>
            <li>Copy the VBA macro code (using the copy button) and paste it into a new module in the VBA editor (Alt + F11).</li>
            <li>Run the <b >GenerateSalesReport</b>
                  macro.</li>
            <li>Observe how the macro calculates total sales, highlights the top performer, and colors sales cells based on whether the target was met.</li>
          </ol>
        </div>
        {/* Sample Data Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h5 className="font-semibold">Sample Data Table</h5>
            <Button size="icon" variant="ghost" aria-label="Copy sample table" onClick={handleCopyTable}>
              <Copy className="h-4 w-4" />
            </Button>
            {tableCopied && <span className="text-success-green text-xs ml-1">Copied!</span>}
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[600px] text-sm border rounded-lg bg-muted">
              <thead>
                <tr className="bg-muted/80">
                  <th className="px-4 py-2 text-left font-medium">Employee</th>
                  <th className="px-4 py-2 text-left font-medium">Department</th>
                  <th className="px-4 py-2 text-left font-medium">Region</th>
                  <th className="px-4 py-2 text-left font-medium">Sales</th>
                  <th className="px-4 py-2 text-left font-medium">Target</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-4 py-2 whitespace-nowrap">{row.employee}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.department}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.region}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.sales}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Macro Steps Section */}
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
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li><b >Sub GenerateSalesReport()</b>: Starts the macro definition named <b >GenerateSalesReport</b>.</li>
              <li><b>' This macro finds total sales, highlights the top performer, and marks who met their target</b>: A comment describing the macro’s purpose.</li>
              <li><b >Dim lastRow As Long</b>: Declares a variable to store the last row with data.</li>
              <li><b >Dim i As Long</b>: Declares a variable for the loop counter.</li>
              <li><b >Dim totalSales As Double</b>: Declares a variable to accumulate the total sales.</li>
              <li><b >Dim maxSales As Double</b>: Declares a variable to track the highest sales value.</li>
              <li><b >Dim maxRow As Long</b>: Declares a variable to remember the row of the top performer.</li>
              <li><b >lastRow = Cells(Rows.Count, 4).End(xlUp).Row</b>: Finds the last row in column 4 (D - Sales) with data.</li>
              <li><b >totalSales = 0</b>: Initializes total sales to zero.</li>
              <li><b >maxSales = 0</b>: Initializes the top sales value to zero.</li>
              <li><b >For i = 2 To lastRow</b>: Loops through each row of data (assuming row 1 is headers).</li>
              <li><b >totalSales = totalSales + Cells(i, 4).Value</b>: Adds each employee's sales to the total.</li>
              <li><b >If Cells(i, 4).Value &gt; maxSales Then</b>: Checks if the current sales value is greater than the previous maximum.</li>
              <li><b >maxSales = Cells(i, 4).Value</b>: Updates the maximum sales value if a new top performer is found.</li>
              <li><b >maxRow = i</b>: Remembers the row number of the top performer.</li>
              <li><b >If Cells(i, 4).Value &gt;= Cells(i, 5).Value Then</b>: Checks if the employee met or exceeded their target (Sales {'>='}Target).</li>
              <li><b >Cells(i, 4).Interior.Color = RGB(173, 216, 230)</b>: Highlights the sales cell in a custom light blue (RGB(173, 216, 230)) if target was met.</li>
              <li><b >Else</b>: Otherwise...</li>
              <li><b >Cells(i, 4).Interior.Color = vbRed</b>: Highlights the sales cell in red if target was missed.</li>
              <li><b >End If</b>: Ends the If statement for target check.</li>
              <li><b >End If</b>: Ends the If statement for top performer check.</li>
              <li><b >Next i</b>: Moves to the next row.</li>
              <li><b >Cells(lastRow + 2, 1).Value = "Total Sales:"</b>: Writes the label for total sales below the data.</li>
              <li><b >Cells(lastRow + 2, 4).Value = totalSales</b>: Writes the total sales value in the Sales column next to the label.</li>
              <li><b >Cells(maxRow, 4).Interior.Color = vbGreen</b>: Highlights the top performer’s sales cell in green.</li>
              <li><b >End Sub</b>: Ends the macro definition.</li>
            </ul>
            <div className="mt-2">This macro calculates the total sales, writes the result below the table, highlights the employee with the highest sales in green, those who met/exceeded their target in blue, and those who missed their target in red. This demonstrates If statements, loops, and decision making using a realistic report scenario.</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
