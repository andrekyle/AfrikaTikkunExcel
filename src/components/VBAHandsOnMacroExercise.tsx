import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy } from "lucide-react";

const sampleData = [
  { name: "John Smith", department: "Sales", salary: "$50,000" },
  { name: "Jane Doe", department: "Marketing", salary: "$55,000" },
  { name: "Mike Johnson", department: "IT", salary: "$60,000" },
  { name: "Sarah Wilson", department: "HR", salary: "$48,000" },
  { name: "Tom Brown", department: "Finance", salary: "$52,000" },
];

const macroSteps = [
  { step: "Start Macro Recorder", description: "Go to Developer tab > Record Macro" },
  { step: "Name Your Macro", description: "Enter a name, e.g., FormatHeader, and choose where to store it" },
  { step: "Perform Actions", description: "Apply formatting or actions you want the macro to record (e.g., bold header row)" },
  { step: "Stop Recording", description: "Click 'Stop Recording' in the Developer tab" },
  { step: "View/Edit Macro", description: "Go to Developer tab > Macros > Edit to view the VBA code" },
];

const macroCode = `Sub FormatHeader()
    ' This macro bolds the first row
    Rows("1:1").Select
    Selection.Font.Bold = True
End Sub`;

export default function VBAHandsOnMacroExercise() {
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
      "Name\tDepartment\tSalary\n" +
      sampleData.map(row => `${row.name}\t${row.department}\t${row.salary}`).join("\n")
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
            <li>Go to the <b >Developer</b>
                  tab and click <b >Record Macro</b>.</li>
            <li>Name your macro (e.g., <b >FormatHeader</b>) and choose where to store it.</li>
            <li>Select the header row and apply bold formatting.</li>
            <li>Stop recording the macro.</li>
            <li>Go to <b >Developer &gt; Macros</b>, select your macro, and click <b >Edit</b>
                  to view the VBA code.</li>
            <li>Optionally, copy/paste the provided VBA code into a new module to automate the same task.</li>
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
            <table className="min-w-[320px] text-sm border rounded-lg bg-muted">
              <thead>
                <tr className="bg-muted/80">
                  <th className="px-4 py-2 text-left font-medium">Name</th>
                  <th className="px-4 py-2 text-left font-medium">Department</th>
                  <th className="px-4 py-2 text-left font-medium">Salary</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-4 py-2 whitespace-nowrap">{row.name}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.department}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Macro Steps Section */}
        <div className="mb-4">
          <h5 className="font-semibold mb-2">Macro Recording Steps</h5>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border rounded-lg bg-muted">
              <thead>
                <tr className="bg-muted/80">
                  <th className="px-4 py-2 text-left font-medium">Step</th>
                  <th className="px-4 py-2 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                {macroSteps.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-4 py-2 font-medium whitespace-nowrap">{row.step}</td>
                    <td className="px-4 py-2 whitespace-pre-line">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-2 flex items-center gap-2">
          <h5 className="font-semibold mb-1">Sample VBA Macro Code</h5>
          <Button size="icon" variant="ghost" aria-label="Copy macro code" onClick={handleCopy}>
            <Copy className="h-4 w-4" />
          </Button>
          {copied && <span className="text-success-green text-xs ml-1">Copied!</span>}
        </div>
        <pre ref={codeRef} className="bg-background border rounded p-3 text-xs overflow-x-auto select-all">
{macroCode}
        </pre>
        <div className="mt-3 p-3 bg-muted/60 rounded text-xs">
          <h6 className="font-semibold mb-1">VBA Code Explanation</h6>
          <ul className="list-disc ml-5 space-y-1">
            <li><b >Sub FormatHeader()</b>: Starts the macro definition named <b >FormatHeader</b>.</li>
            <li><b>' This macro bolds the first row</b>: A comment describing the macro’s purpose.</li>
            <li><b >Rows("1:1").Select</b>: Selects the entire first row in the worksheet.</li>
            <li><b >Selection.Font.Bold = True</b>: Applies bold formatting to the selected row.</li>
            <li><b >End Sub</b>: Ends the macro definition.</li>
          </ul>
          <div className="mt-2">This macro selects the first row and makes all its text bold, automating a common Excel formatting task.</div>
        </div>
      </CardContent>
    </Card>
  );
}
