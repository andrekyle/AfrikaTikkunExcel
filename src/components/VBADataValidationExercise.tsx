import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy } from "lucide-react";

const sampleData = [
  { name: "Alice Smith", age: 29 },
  { name: "Bob Johnson", age: 17 }, // Invalid (under 18)
  { name: "Carol Lee", age: 45 },
  { name: "Dan Brown", age: 120 }, // Invalid (too high)
  { name: "Eve Adams", age: 34 },
];

const macroCode = `Sub ValidateAges()
    ' This macro highlights invalid ages (less than 18 or greater than 65)
    Dim lastRow As Long
    Dim i As Long
    lastRow = Cells(Rows.Count, 2).End(xlUp).Row
    For i = 2 To lastRow
        If Cells(i, 2).Value < 18 Or Cells(i, 2).Value > 65 Then
            Cells(i, 2).Interior.Color = vbRed
        End If
    Next i
End Sub`;

export default function VBADataValidationExercise() {
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
      "Name\tAge\n" +
      sampleData.map(row => `${row.name}\t${row.age}`).join("\n")
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
            <li>Run the <b >ValidateAges</b>
                  macro.</li>
            <li>Observe how the macro highlights invalid ages (under 18 or over 65) in red.</li>
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
            <table className="min-w-[220px] text-sm border rounded-lg bg-muted">
              <thead>
                <tr className="bg-muted/80">
                  <th className="px-4 py-2 text-left font-medium">Name</th>
                  <th className="px-4 py-2 text-left font-medium">Age</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-4 py-2 whitespace-nowrap">{row.name}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.age}</td>
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
            <ul className="list-disc ml-5 space-y-1">
              <li><b >Sub ValidateAges()</b>: Starts the macro definition named <b >ValidateAges</b>.</li>
              <li><b>' This macro highlights invalid ages (less than 18 or greater than 65)</b>: A comment describing the macro’s purpose.</li>
              <li><b >Dim lastRow As Long</b>: Declares a variable to store the last row with data.</li>
              <li><b >Dim i As Long</b>: Declares a variable for the loop counter.</li>
              <li><b >lastRow = Cells(Rows.Count, 2).End(xlUp).Row</b>: Finds the last row in column 2 (B) with data.</li>
              <li><b >For i = 2 To lastRow</b>: Starts a loop from row 2 (assuming row 1 is headers) to the last data row.</li>
              <li><b >If Cells(i, 2).Value &lt; 18 Or Cells(i, 2).Value &gt; 65 Then</b>: Checks if the age is less than 18 or greater than 65.</li>
              <li><b >Cells(i, 2).Interior.Color = vbRed</b>: Highlights the cell in red if invalid.</li>
              <li><b >End If</b>: Ends the If statement.</li>
              <li><b >Next i</b>: Moves to the next row.</li>
              <li><b >End Sub</b>: Ends the macro definition.</li>
            </ul>
            <div className="mt-2">This macro checks each age in the sample table and highlights any cell with an invalid age (under 18 or over 65) in red, helping you quickly spot data entry errors.</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
