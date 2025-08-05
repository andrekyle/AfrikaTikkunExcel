import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Database } from "lucide-react";

const SampleDataTables = () => {
  const [copiedTable, setCopiedTable] = useState<string | null>(null);

  // Sample data for Performance Scorecard
  const scorecardData = `Department\tSales Target (R)\tActual Sales (R)\t% of Target\tGrowth vs Last Year\tCustomer Satisfaction (%)
Sales\t1,300,000\t1,350,000\t103.8%\t12.5%\t92.5
Marketing\t900,000\t820,000\t91.1%\t9.3%\t88.2
Operations\t1,050,000\t950,000\t90.5%\t-3.1%\t85.7
Finance\t480,000\t490,000\t102.1%\t8.9%\t94.0
IT\t850,000\t920,000\t108.2%\t10.8%\t89.5
HR\t340,000\t290,000\t85.3%\t-9.4%\t91.2
Customer Service\t650,000\t670,000\t103.1%\t15.5%\t95.8
R&D\t1,600,000\t1,400,000\t87.5%\t-6.7%\t82.4`;

  // Sample data for the slow workbook - Main Data
  const slowWorkbookData = `Date\tRegion\tProduct\tCategory\tQuantity\tUnit Price\tRevenue\tCost\tProfit\tSales Rep
2025-01-05\tNorth\tWidget A\tHardware\t45\t125\t=E2*F2\t85\t=G2-E2*H2\tJohn Smith
2025-01-07\tSouth\tWidget B\tHardware\t32\t95\t=E3*F3\t65\t=G3-E3*H3\tSarah Jones
2025-01-12\tEast\tGadget C\tElectronics\t18\t210\t=E4*F4\t150\t=G4-E4*H4\tDavid Miller
2025-01-15\tWest\tGadget D\tElectronics\t27\t185\t=E5*F5\t135\t=G5-E5*H5\tLisa Wong
2025-01-22\tNorth\tTool E\tEquipment\t12\t450\t=E6*F6\t320\t=G6-E6*H6\tJohn Smith
2025-01-28\tSouth\tTool F\tEquipment\t8\t520\t=E7*F7\t375\t=G7-E7*H7\tSarah Jones
2025-02-03\tEast\tWidget A\tHardware\t55\t125\t=E8*F8\t85\t=G8-E8*H8\tDavid Miller
2025-02-10\tWest\tWidget B\tHardware\t41\t95\t=E9*F9\t65\t=G9-E9*H9\tLisa Wong
2025-02-15\tNorth\tGadget C\tElectronics\t22\t210\t=E10*F10\t150\t=G10-E10*H10\tJohn Smith
2025-02-22\tSouth\tGadget D\tElectronics\t35\t185\t=E11*F11\t135\t=G11-E11*H11\tSarah Jones
2025-03-01\tEast\tTool E\tEquipment\t15\t450\t=E12*F12\t320\t=G12-E12*H12\tDavid Miller
2025-03-08\tWest\tTool F\tEquipment\t10\t520\t=E13*F13\t375\t=G13-E13*H13\tLisa Wong`;

  // Sample data for problematic formulas (to be optimized)
  const slowWorkbookFormulas = `Formula Purpose\tSlow Formula (Needs Optimization)\tOptimized Formula
Dynamic Sum\t=SUM(OFFSET(A1,0,0,COUNTA(A:A),1))\t=SUM(Table1[Values])
Date Check\t=IF(A1=TODAY(),"Today",IF(A1<TODAY(),"Past","Future"))\t=IF(A1=[@[Reference Date]],"Today",IF(A1<[@[Reference Date]],"Past","Future"))
Complex Lookup\t=INDIRECT("'"&B2&"'!$A$1:$Z$1000")\t=INDEX(AllData,MATCH(LookupValue,LookupColumn,0),ResultColumn)
Volatile Random\t=IF(RAND() >0.5,"High","Low")\t=(Use a single RAND() cell and reference it)
Range Check\t=COUNTIFS(INDIRECT("'"&$A$1&"'!"&$B$1&":"&$C$1)," >0")\t=COUNTIFS(DataTable[Values]," >0")
Index with MATCH\t=SUMPRODUCT((A1:A100="Value")*B1:B100)\t=SUMIFS(B1:B100,A1:A100,"Value")`;

  // Sample data for Named Ranges to clean up
  const unusedNamedRanges = `Name\tRefers To\tScope\tComment
OldDataRange\t=Sheet1!$A$1:$J$100\tWorkbook\tUnused, delete
TemporaryCalcs\t=Sheet3!$C$5:$F$20\tWorkbook\tUnused, delete
Test_Data\t=Sheet2!$A$1:$D$50\tWorkbook\tUnused, delete
Draft_Report\t=Sheet4!$A$1:$Z$100\tWorkbook\tUnused, delete
MonthlyTarget\t=Sheet1!$K$5\tWorkbook\tStill used, keep
QuarterlyGoal\t=Sheet1!$L$5\tWorkbook\tStill used, keep`;

  const copyToClipboard = async (text: string, tableId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedTable(tableId);
      setTimeout(() => setCopiedTable(null), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      // Fallback for older browsers or when clipboard API fails
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedTable(tableId);
        setTimeout(() => setCopiedTable(null), 2000);
      } catch (fallbackError) {
        console.error('Fallback copy failed:', fallbackError);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" /> 
          Sample Data Tables
        </CardTitle>
        <CardDescription >Copy these sample datasets to use in your Excel exercises
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="scorecard">
          <TabsList className="mb-4">
            <TabsTrigger value="scorecard">Performance Scorecard Data</TabsTrigger>
            <TabsTrigger value="slow-data">Slow Workbook Data</TabsTrigger>
            <TabsTrigger value="formulas">Problematic Formulas</TabsTrigger>
            <TabsTrigger value="named-ranges">Named Ranges</TabsTrigger>
          </TabsList>

          <TabsContent value="scorecard" className="space-y-4">
            <div className="bg-muted/30 p-3 rounded-md">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Department Performance Data</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => copyToClipboard(scorecardData, 'scorecard')}
                  className="flex gap-2"
                >
                  {copiedTable === 'scorecard' ? (
                    <>
                      <Check className="h-4 w-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copy Data
                    </>
                  )}
                </Button>
              </div>
              <div className="overflow-auto max-h-80">
                <table className="min-w-full text-sm">
                  <thead className="bg-accent">
                    <tr>
                      <th className="px-2 py-1 text-left">Department</th>
                      <th className="px-2 py-1 text-right">Sales Target (R)</th>
                      <th className="px-2 py-1 text-right">Actual Sales (R)</th>
                      <th className="px-2 py-1 text-right">% of Target</th>
                      <th className="px-2 py-1 text-right">Growth vs Last Year</th>
                      <th className="px-2 py-1 text-right">Customer Satisfaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-2 py-1">Sales</td><td className="px-2 py-1 text-right">1,300,000</td><td className="px-2 py-1 text-right">1,350,000</td><td className="px-2 py-1 text-right">103.8%</td><td className="px-2 py-1 text-right">12.5%</td><td className="px-2 py-1 text-right">92.5%</td></tr>
                    <tr><td className="px-2 py-1">Marketing</td><td className="px-2 py-1 text-right">900,000</td><td className="px-2 py-1 text-right">820,000</td><td className="px-2 py-1 text-right">91.1%</td><td className="px-2 py-1 text-right">9.3%</td><td className="px-2 py-1 text-right">88.2%</td></tr>
                    <tr><td className="px-2 py-1">Operations</td><td className="px-2 py-1 text-right">1,050,000</td><td className="px-2 py-1 text-right">950,000</td><td className="px-2 py-1 text-right">90.5%</td><td className="px-2 py-1 text-right">-3.1%</td><td className="px-2 py-1 text-right">85.7%</td></tr>
                    <tr><td className="px-2 py-1">Finance</td><td className="px-2 py-1 text-right">480,000</td><td className="px-2 py-1 text-right">490,000</td><td className="px-2 py-1 text-right">102.1%</td><td className="px-2 py-1 text-right">8.9%</td><td className="px-2 py-1 text-right">94.0%</td></tr>
                    <tr><td className="px-2 py-1">IT</td><td className="px-2 py-1 text-right">850,000</td><td className="px-2 py-1 text-right">920,000</td><td className="px-2 py-1 text-right">108.2%</td><td className="px-2 py-1 text-right">10.8%</td><td className="px-2 py-1 text-right">89.5%</td></tr>
                    <tr><td className="px-2 py-1">HR</td><td className="px-2 py-1 text-right">340,000</td><td className="px-2 py-1 text-right">290,000</td><td className="px-2 py-1 text-right">85.3%</td><td className="px-2 py-1 text-right">-9.4%</td><td className="px-2 py-1 text-right">91.2%</td></tr>
                    <tr><td className="px-2 py-1">Customer Service</td><td className="px-2 py-1 text-right">650,000</td><td className="px-2 py-1 text-right">670,000</td><td className="px-2 py-1 text-right">103.1%</td><td className="px-2 py-1 text-right">15.5%</td><td className="px-2 py-1 text-right">95.8%</td></tr>
                    <tr><td className="px-2 py-1">R&D</td><td className="px-2 py-1 text-right">1,600,000</td><td className="px-2 py-1 text-right">1,400,000</td><td className="px-2 py-1 text-right">87.5%</td><td className="px-2 py-1 text-right">-6.7%</td><td className="px-2 py-1 text-right">82.4%</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Copy this dataset to start the Performance Scorecard exercise. The data is tab-delimited and can be pasted directly into Excel.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="slow-data" className="space-y-4">
            <div className="bg-muted/30 p-3 rounded-md">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Sales Transaction Data</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => copyToClipboard(slowWorkbookData, 'slow-data')}
                  className="flex gap-2"
                >
                  {copiedTable === 'slow-data' ? (
                    <>
                      <Check className="h-4 w-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copy Data
                    </>
                  )}
                </Button>
              </div>
              <div className="overflow-auto max-h-80">
                <table className="min-w-full text-sm">
                  <thead className="bg-accent">
                    <tr>
                      <th className="px-2 py-1 text-left">Date</th>
                      <th className="px-2 py-1 text-left">Region</th>
                      <th className="px-2 py-1 text-left">Product</th>
                      <th className="px-2 py-1 text-left">Category</th>
                      <th className="px-2 py-1 text-left">Quantity</th>
                      <th className="px-2 py-1 text-left">Unit Price</th>
                      <th className="px-2 py-1 text-left">Revenue</th>
                      <th className="px-2 py-1 text-left">Cost</th>
                      <th className="px-2 py-1 text-left">Profit</th>
                      <th className="px-2 py-1 text-left">Sales Rep</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-2 py-1">2025-01-05</td><td className="px-2 py-1">North</td><td className="px-2 py-1">Widget A</td><td className="px-2 py-1">Hardware</td><td className="px-2 py-1">45</td><td className="px-2 py-1">125</td><td className="px-2 py-1">=E2*F2</td><td className="px-2 py-1">85</td><td className="px-2 py-1">=G2-E2*H2</td><td className="px-2 py-1">John Smith</td></tr>
                    <tr><td className="px-2 py-1">2025-01-07</td><td className="px-2 py-1">South</td><td className="px-2 py-1">Widget B</td><td className="px-2 py-1">Hardware</td><td className="px-2 py-1">32</td><td className="px-2 py-1">95</td><td className="px-2 py-1">=E3*F3</td><td className="px-2 py-1">65</td><td className="px-2 py-1">=G3-E3*H3</td><td className="px-2 py-1">Sarah Jones</td></tr>
                    <tr><td className="px-2 py-1">2025-01-12</td><td className="px-2 py-1">East</td><td className="px-2 py-1">Gadget C</td><td className="px-2 py-1">Electronics</td><td className="px-2 py-1">18</td><td className="px-2 py-1">210</td><td className="px-2 py-1">=E4*F4</td><td className="px-2 py-1">150</td><td className="px-2 py-1">=G4-E4*H4</td><td className="px-2 py-1">David Miller</td></tr>
                    <tr><td className="px-2 py-1">2025-01-15</td><td className="px-2 py-1">West</td><td className="px-2 py-1">Gadget D</td><td className="px-2 py-1">Electronics</td><td className="px-2 py-1">27</td><td className="px-2 py-1">185</td><td className="px-2 py-1">=E5*F5</td><td className="px-2 py-1">135</td><td className="px-2 py-1">=G5-E5*H5</td><td className="px-2 py-1">Lisa Wong</td></tr>
                    <tr><td className="px-2 py-1">2025-01-22</td><td className="px-2 py-1">North</td><td className="px-2 py-1">Tool E</td><td className="px-2 py-1">Equipment</td><td className="px-2 py-1">12</td><td className="px-2 py-1">450</td><td className="px-2 py-1">=E6*F6</td><td className="px-2 py-1">320</td><td className="px-2 py-1">=G6-E6*H6</td><td className="px-2 py-1">John Smith</td></tr>
                    <tr><td className="px-2 py-1">2025-01-28</td><td className="px-2 py-1">South</td><td className="px-2 py-1">Tool F</td><td className="px-2 py-1">Equipment</td><td className="px-2 py-1">8</td><td className="px-2 py-1">520</td><td className="px-2 py-1">=E7*F7</td><td className="px-2 py-1">375</td><td className="px-2 py-1">=G7-E7*H7</td><td className="px-2 py-1">Sarah Jones</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Copy this dataset to start the Performance Optimization exercise. This represents the core data for a slow workbook that needs optimization.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="formulas" className="space-y-4">
            <div className="bg-muted/30 p-3 rounded-md">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Problematic Formulas</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => copyToClipboard(slowWorkbookFormulas, 'formulas')}
                  className="flex gap-2"
                >
                  {copiedTable === 'formulas' ? (
                    <>
                      <Check className="h-4 w-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copy Data
                    </>
                  )}
                </Button>
              </div>
              <div className="overflow-auto max-h-80">
                <table className="min-w-full text-sm">
                  <thead className="bg-accent">
                    <tr>
                      <th className="px-2 py-1 text-left">Formula Purpose</th>
                      <th className="px-2 py-1 text-left">Slow Formula (Needs Optimization)</th>
                      <th className="px-2 py-1 text-left">Optimized Formula</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-2 py-1">Dynamic Sum</td><td className="px-2 py-1">=SUM(OFFSET(A1,0,0,COUNTA(A:A),1))</td><td className="px-2 py-1">=SUM(Table1[Values])</td></tr>
                    <tr><td className="px-2 py-1">Date Check</td><td className="px-2 py-1">=IF(A1=TODAY(),"Today",IF(A1{'<'}TODAY(),"Past","Future"))</td><td className="px-2 py-1">=IF(A1=[@[Reference Date]],"Today",IF(A1{'<'}[@[Reference Date]],"Past","Future"))</td></tr>
                    <tr><td className="px-2 py-1">Complex Lookup</td><td className="px-2 py-1">=INDIRECT("'"&B2&"'!$A$1:$Z$1000")</td><td className="px-2 py-1">=INDEX(AllData,MATCH(LookupValue,LookupColumn,0),ResultColumn)</td></tr>
                    <tr><td className="px-2 py-1">Volatile Random</td><td className="px-2 py-1">=IF(RAND(){'>'}0.5,"High","Low")</td><td className="px-2 py-1">(Use a single RAND() cell and reference it)</td></tr>
                    <tr><td className="px-2 py-1">Range Check</td><td className="px-2 py-1">=COUNTIFS(INDIRECT("'"&$A$1&"'!"&$B$1&":"&$C$1),"{'>'}0")</td><td className="px-2 py-1">=COUNTIFS(DataTable[Values],"{'>'}0")</td></tr>
                    <tr><td className="px-2 py-1">Index with MATCH</td><td className="px-2 py-1">=SUMPRODUCT((A1:A100="Value")*B1:B100)</td><td className="px-2 py-1">=SUMIFS(B1:B100,A1:A100,"Value")</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">These formula examples show problematic patterns that cause slow calculation and their optimized alternatives.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="named-ranges" className="space-y-4">
            <div className="bg-muted/30 p-3 rounded-md">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Named Ranges to Clean Up</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => copyToClipboard(unusedNamedRanges, 'named-ranges')}
                  className="flex gap-2"
                >
                  {copiedTable === 'named-ranges' ? (
                    <>
                      <Check className="h-4 w-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copy Data
                    </>
                  )}
                </Button>
              </div>
              <div className="overflow-auto max-h-80">
                <table className="min-w-full text-sm">
                  <thead className="bg-accent">
                    <tr>
                      <th className="px-2 py-1 text-left">Name</th>
                      <th className="px-2 py-1 text-left">Refers To</th>
                      <th className="px-2 py-1 text-left">Scope</th>
                      <th className="px-2 py-1 text-left">Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-2 py-1">OldDataRange</td><td className="px-2 py-1">=Sheet1!$A$1:$J$100</td><td className="px-2 py-1">Workbook</td><td className="px-2 py-1">Unused, delete</td></tr>
                    <tr><td className="px-2 py-1">TemporaryCalcs</td><td className="px-2 py-1">=Sheet3!$C$5:$F$20</td><td className="px-2 py-1">Workbook</td><td className="px-2 py-1">Unused, delete</td></tr>
                    <tr><td className="px-2 py-1">Test_Data</td><td className="px-2 py-1">=Sheet2!$A$1:$D$50</td><td className="px-2 py-1">Workbook</td><td className="px-2 py-1">Unused, delete</td></tr>
                    <tr><td className="px-2 py-1">Draft_Report</td><td className="px-2 py-1">=Sheet4!$A$1:$Z$100</td><td className="px-2 py-1">Workbook</td><td className="px-2 py-1">Unused, delete</td></tr>
                    <tr><td className="px-2 py-1">MonthlyTarget</td><td className="px-2 py-1">=Sheet1!$K$5</td><td className="px-2 py-1">Workbook</td><td className="px-2 py-1">Still used, keep</td></tr>
                    <tr><td className="px-2 py-1">QuarterlyGoal</td><td className="px-2 py-1">=Sheet1!$L$5</td><td className="px-2 py-1">Workbook</td><td className="px-2 py-1">Still used, keep</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">This table shows named ranges that could be contributing to workbook bloat. Use the Name Manager to remove unused ranges.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SampleDataTables;
