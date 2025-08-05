import React, { useState, useRef } from 'react';
import { Copy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const salesDataSheet1 = [
  { region: "Gauteng", product: "Laptops", sales: 12000 },
  { region: "Gauteng", product: "Monitors", sales: 7000 },
  { region: "Western Cape", product: "Laptops", sales: 18500 },
  { region: "Western Cape", product: "Monitors", sales: 9500 },
  { region: "KwaZulu-Natal", product: "Laptops", sales: 9800 },
  { region: "KwaZulu-Natal", product: "Monitors", sales: 5200 },
  { region: "Gauteng", product: "Keyboards", sales: 4300 },
];
const salesDataSheet2 = [
  { region: "Gauteng", product: "Laptops", sales: 15000 },
  { region: "Gauteng", product: "Monitors", sales: 8200 },
  { region: "Western Cape", product: "Laptops", sales: 21000 },
  { region: "Western Cape", product: "Monitors", sales: 10400 },
  { region: "KwaZulu-Natal", product: "Laptops", sales: 11200 },
  { region: "KwaZulu-Natal", product: "Monitors", sales: 6300 },
  { region: "Gauteng", product: "Keyboards", sales: 6900 },
];

const summarySheet = [
  { region: "Gauteng", product: "Laptops", totalSales: ""},
  { region: "Gauteng", product: "Monitors", totalSales: ""},
  { region: "Gauteng", product: "Keyboards", totalSales: ""},
  { region: "Western Cape", product: "Laptops", totalSales: ""},
  { region: "Western Cape", product: "Monitors", totalSales: ""},
  { region: "KwaZulu-Natal", product: "Laptops", totalSales: ""},
  { region: "KwaZulu-Natal", product: "Monitors", totalSales: ""},
];

const macroCode = `Sub ProcessMultiSheetData()
    ' This macro aggregates sales by region and product from all sheets named "SalesData*" and writes a summary
    Dim ws As Worksheet
    Dim sumWs As Worksheet
    Dim region As String, product As String
    Dim lastRow As Long, sumRow As Long
    Dim i As Long, j As Long, found As Boolean
    
    Set sumWs = ThisWorkbook.Sheets("Summary")
    sumWs.Range("A2:C100").ClearContents
    sumRow = 2

    ' Loop through all worksheets
    For Each ws In ThisWorkbook.Worksheets
        If ws.Name Like "SalesData*" Then
            lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
            For i = 2 To lastRow
                region = ws.Cells(i, 1).Value
                product = ws.Cells(i, 2).Value
                found = False
                ' Search for region+product in summary
                For j = 2 To sumRow - 1
                    If sumWs.Cells(j, 1).Value = region And sumWs.Cells(j, 2).Value = product Then
                        sumWs.Cells(j, 3).Value = sumWs.Cells(j, 3).Value + ws.Cells(i, 3).Value
                        found = True
                        Exit For
                    End If
                Next j
                If Not found Then
                    sumWs.Cells(sumRow, 1).Value = region
                    sumWs.Cells(sumRow, 2).Value = product
                    sumWs.Cells(sumRow, 3).Value = ws.Cells(i, 3).Value
                    sumRow = sumRow + 1
                End If
            Next i
        End If
    Next ws
    sumWs.Cells(1, 1).Value = "Region"
    sumWs.Cells(1, 2).Value = "Product"
    sumWs.Cells(1, 3).Value = "Total Sales"
End Sub`;

export default function VBAMultiSheetProcessorExercise() {
  const [copied, setCopied] = useState(false);
  const [tableCopied1, setTableCopied1] = useState(false);
  const [tableCopied2, setTableCopied2] = useState(false);
  const [summaryCopied, setSummaryCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(macroCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const handleCopyTable = async (sheet: 1 | 2) => {
    const data = sheet === 1 ? salesDataSheet1 : salesDataSheet2;
    await navigator.clipboard.writeText(
      "Region\tProduct\tSales\n" +
        data.map(row => `${row.region}\t${row.product}\t${row.sales}`).join("\n")
    );
    if (sheet === 1) {
      setTableCopied1(true);
      setTimeout(() => setTableCopied1(false), 1200);
    } else {
      setTableCopied2(true);
      setTimeout(() => setTableCopied2(false), 1200);
    }
  };

  const handleCopySummary = async () => {
    await navigator.clipboard.writeText(
      "Region\tProduct\tTotal Sales\n" +
        summarySheet.map(row => `${row.region}\t${row.product}\t${row.totalSales}`).join("\n")
    );
    setSummaryCopied(true);
    setTimeout(() => setSummaryCopied(false), 1200);
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-sm">Hands-on Exercise: Multi-Sheet Data Processor</CardTitle>
        <div className="text-muted-foreground text-sm mt-1">Manipulate worksheets, ranges, and Excel objects by writing a macro that aggregates data from multiple sheets and writes a summary.
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="mb-4">
            <h6 className="font-semibold mb-1 text-sm">Step-by-Step Instructions</h6>
            <ol className="list-decimal ml-6 space-y-1 text-sm">
              <li>Copy the <b >SalesData1</b>
                  and <b >SalesData2</b>
                  tables (using the copy buttons) and paste each into a separate worksheet named <b >SalesData1</b>
                  and <b >SalesData2</b>
                  in your Excel workbook.</li>
              <li>Create a new worksheet and name it <b >Summary</b>.</li>
              <li>Copy the VBA macro code (using the copy button) and paste it into a new module in the VBA editor (Alt + F11).</li>
              <li>Run the <b >ProcessMultiSheetData</b>
                  macro.</li>
              <li>Check the <b >Summary</b>
                  sheet to see the total sales aggregated by region from all <b >SalesData*</b>
                  sheets.</li>
            </ol>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">Sample Data: SalesData1</span>
              <button
                className="inline-flex items-center px-2 py-1 text-xs border rounded hover:bg-muted transition"
                aria-label="Copy SalesData1 table"
                onClick={() => handleCopyTable(1)}
              >
                <Copy size={14} />
              </button>
              {tableCopied1 && <span className="text-success-green text-xs ml-1">Copied!</span>}
            </div>
            <table className="min-w-[380px] text-sm border rounded-lg bg-muted mt-2">
              <thead>
                <tr className="bg-muted/80">
                  <th className="px-4 py-2 text-left font-medium">Region</th>
                  <th className="px-4 py-2 text-left font-medium">Product</th>
                  <th className="px-4 py-2 text-left font-medium">Sales</th>
                </tr>
              </thead>
              <tbody>
                {salesDataSheet1.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-4 py-2 whitespace-nowrap">{row.region}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.product}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">Sample Data: SalesData2</span>
              <button
                className="inline-flex items-center px-2 py-1 text-xs border rounded hover:bg-muted transition"
                aria-label="Copy SalesData2 table"
                onClick={() => handleCopyTable(2)}
              >
                <Copy size={14} />
              </button>
              {tableCopied2 && <span className="text-success-green text-xs ml-1">Copied!</span>}
            </div>
            <table className="min-w-[380px] text-sm border rounded-lg bg-muted mt-2">
              <thead>
                <tr className="bg-muted/80">
                  <th className="px-4 py-2 text-left font-medium">Region</th>
                  <th className="px-4 py-2 text-left font-medium">Product</th>
                  <th className="px-4 py-2 text-left font-medium">Sales</th>
                </tr>
              </thead>
              <tbody>
                {salesDataSheet2.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-4 py-2 whitespace-nowrap">{row.region}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.product}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">Summary Sheet Output</span>
              <button
                className="inline-flex items-center px-2 py-1 text-xs border rounded hover:bg-muted transition"
                aria-label="Copy summary table"
                onClick={handleCopySummary}
              >
                <Copy size={14} />
              </button>
              {summaryCopied && <span className="text-success-green text-xs ml-1">Copied!</span>}
            </div>
            <table className="min-w-[420px] text-sm border rounded-lg bg-muted mt-2">
              <thead>
                <tr className="bg-muted/80">
                  <th className="px-4 py-2 text-left font-medium">Region</th>
                  <th className="px-4 py-2 text-left font-medium">Product</th>
                  <th className="px-4 py-2 text-left font-medium">Total Sales</th>
                </tr>
              </thead>
              <tbody>
                {summarySheet.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-4 py-2 whitespace-nowrap">{row.region}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.product}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.totalSales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <span className="font-semibold text-sm">VBA Macro: Multi-Sheet Data Processor</span>
              <button
                className="inline-flex items-center px-2 py-1 text-xs border rounded hover:bg-muted transition ml-2"
                aria-label="Copy VBA macro code"
                onClick={handleCopy}
              >
                <Copy size={14} />
              </button>
              {copied && <span className="text-success-green text-xs ml-1">Copied!</span>}
            </div>
            <pre ref={codeRef} className="bg-muted rounded p-3 overflow-x-auto text-xs border">
              {macroCode}
            </pre>
            <h6 className="font-semibold mb-1 mt-2 text-xs">VBA Code Explanation</h6>
            <ul className="list-disc ml-5 space-y-1 text-xs">
              <li><b >Sub ProcessMultiSheetData()</b>: Starts the macro definition.</li>
              <li><b >Dim ws As Worksheet</b>: Declares a worksheet variable for looping.</li>
              <li><b >Dim sumWs As Worksheet</b>: Declares a worksheet variable for the summary sheet.</li>
              <li><b >Dim region As String, product As String</b>: Declares variables for region and product.</li>
              <li><b >Set sumWs = ThisWorkbook.Sheets("Summary")</b>: Sets the summary worksheet.</li>
              <li><b >sumWs.Range("A2:C100").ClearContents</b>: Clears previous summary data.</li>
              <li><b >For Each ws In ThisWorkbook.Worksheets</b>: Loops through all worksheets in the workbook.</li>
              <li><b >If ws.Name Like "SalesData*" Then ...</b>: Checks if the sheet name starts with "SalesData".</li>
              <li><b >lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row</b>: Finds the last row in the current sheet.</li>
              <li><b >For i = 2 To lastRow ...</b>: Loops through each row of data in the sheet.</li>
              <li><b >region = ws.Cells(i, 1).Value</b>: Gets the region name from column 1.</li>
              <li><b >product = ws.Cells(i, 2).Value</b>: Gets the product name from column 2.</li>
              <li><b >Search for region+product in summary ...</b>: Checks if the region and product combination is already in the summary sheet.</li>
              <li><b >If found, add sales; else, add new row ...</b>: Aggregates sales for each region and product across all sheets.</li>
              <li><b >sumWs.Cells(1, 1).Value = "Region"</b>: Writes the region header in the summary sheet.</li>
              <li><b >sumWs.Cells(1, 2).Value = "Product"</b>: Writes the product header in the summary sheet.</li>
              <li><b >sumWs.Cells(1, 3).Value = "Total Sales"</b>: Writes the header for total sales.</li>
            </ul>
            <div className="mt-2 text-xs">This macro demonstrates how to manipulate worksheets, ranges, and Excel objects by aggregating sales data from multiple sheets and writing a summary table to a dedicated summary sheet.</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
