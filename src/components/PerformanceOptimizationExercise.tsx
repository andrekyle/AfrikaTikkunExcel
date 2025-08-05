import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Download, RefreshCw, Zap, Database, Timer, FileSearch, Gauge } from "lucide-react";
import SampleDataTables from "@/components/SampleDataTables";

const PerformanceOptimizationExercise = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  const handleNextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setCompleted(false);
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Excel Performance Optimization</h3>
        <p className="text-muted-foreground mb-4">In this hands-on exercise, you'll learn how to diagnose and optimize a slow Excel workbook. 
          These techniques are essential for working with large datasets and complex calculations, 
          ensuring your spreadsheets remain responsive and efficient.
        </p>
      </div>

      {/* Sample Data */}
      <SampleDataTables />

      {/* Exercise Overview */}
      <div className="bg-muted/30 p-4 rounded-lg">
        <h4 className="font-medium mb-3">What You'll Learn</h4>
        <p className="text-sm text-muted-foreground mb-4">How to identify and fix common performance issues in Excel workbooks:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
          <li>Find and replace volatile functions</li>
          <li>Optimize calculation modes and settings</li>
          <li>Reduce formula complexity and redundancy</li>
          <li>Improve data structure and organization</li>
          <li>Eliminate unnecessary formatting and objects</li>
        </ul>
      </div>

      {/* Step by Step Instructions */}
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-muted/50 p-4 border-b">
          <h4 className="font-medium">Step-by-Step Guide</h4>
        </div>

        {/* Step 1 */}
        <div className={`p-4 border-b ${currentStep === 1 ? "bg-accent/20" : ""}`}>
          <div className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep > 1 ? "bg-green-500 text-white" : "bg-muted text-foreground"
            }`}>
              {currentStep > 1 ? <CheckCircle className="h-4 w-4" /> : "1"}
            </div>
            <div className="space-y-3 flex-1">
              <h5 className="font-medium">Diagnose Performance Issues</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Download the sample "Slow Workbook" template for practice</li>
                <li>Enable the Developer tab if not already visible:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>File → Options → Customize Ribbon → Check "Developer" in main tabs</li>
                </ul>
                <li>Diagnose calculation performance:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Developer → Formula Auditing → Evaluate Formula on key cells</li>
                  <li>Check calculation time: Developer → Code → Performance</li>
                  <li>Identify sheets or ranges that are calculation-intensive</li>
                </ul>
                <li>Scan for common issues:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Volatile functions (NOW, TODAY, RAND, OFFSET, INDIRECT)</li>
                  <li>Array formulas (identified with {`{}`} brackets)</li>
                  <li>Excessive conditional formatting</li>
                  <li>Large named ranges with complex formulas</li>
                </ul>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className={`p-4 border-b ${currentStep === 2 ? "bg-accent/20" : ""}`}>
          <div className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep > 2 ? "bg-green-500 text-white" : "bg-muted text-foreground"
            }`}>
              {currentStep > 2 ? <CheckCircle className="h-4 w-4" /> : "2"}
            </div>
            <div className="space-y-3 flex-1">
              <h5 className="font-medium">Optimize Calculation Settings</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Review current calculation settings:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Formulas → Calculation Options</li>
                  <li>Note current setting (Automatic, Automatic Except Tables, Manual)</li>
                </ul>
                <li>For large workbooks with frequent updates, switch to "Manual" calculation:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Formulas → Calculation Options → Manual</li>
                  <li>Use F9 to calculate when needed</li>
                </ul>
                <li>Use calculation options strategically:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>F9: Calculate all open workbooks</li>
                  <li>Shift+F9: Calculate active worksheet only</li>
                  <li>Ctrl+Alt+F9: Force full recalculation of all formulas</li>
                </ul>
                <li>For the sample workbook, test performance difference between:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Automatic calculation (note time taken)</li>
                  <li>Manual calculation (note time to press F9)</li>
                </ul>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className={`p-4 border-b ${currentStep === 3 ? "bg-accent/20" : ""}`}>
          <div className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep > 3 ? "bg-green-500 text-white" : "bg-muted text-foreground"
            }`}>
              {currentStep > 3 ? <CheckCircle className="h-4 w-4" /> : "3"}
            </div>
            <div className="space-y-3 flex-1">
              <h5 className="font-medium">Replace Volatile Functions</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Identify volatile functions using Find (Ctrl+F):</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Search for: NOW(), TODAY(), RAND(), OFFSET(), INDIRECT()</li>
                  <li>Use "Find All" to see all instances</li>
                </ul>
                <li>Replace volatile functions with alternatives:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>NOW() → Use a single cell with NOW() and reference it</li>
                  <li>TODAY() → Use a single cell with TODAY() and reference it</li>
                  <li>RAND() → Use RANDBETWEEN() sparingly or pre-calculate</li>
                  <li>OFFSET() → Replace with INDEX() which is non-volatile</li>
                  <li>INDIRECT() → Replace with direct references or INDEX/MATCH</li>
                </ul>
                <li>For the sample workbook:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Replace all OFFSET formulas with equivalent INDEX formulas</li>
                  <li>Change INDIRECT references to direct cell references</li>
                  <li>Move all TODAY() functions to a single cell in a dedicated reference area</li>
                </ul>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className={`p-4 border-b ${currentStep === 4 ? "bg-accent/20" : ""}`}>
          <div className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep > 4 ? "bg-green-500 text-white" : "bg-muted text-foreground"
            }`}>
              {currentStep > 4 ? <CheckCircle className="h-4 w-4" /> : "4"}
            </div>
            <div className="space-y-3 flex-1">
              <h5 className="font-medium">Optimize Formula Complexity</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Simplify nested formulas:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Break complex formulas into smaller steps using helper columns</li>
                  <li>Reduce nesting levels where possible</li>
                </ul>
                <li>Convert array formulas to regular formulas:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Identify array formulas (enclosed in {`{}`})</li>
                  <li>Replace with equivalent non-array calculations when possible</li>
                </ul>
                <li>Use structured references with Excel Tables:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Convert data ranges to Tables (Ctrl+T)</li>
                  <li>Use column names instead of cell references</li>
                </ul>
                <li>For the sample workbook:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Break down the complex formulas in the "Analysis" sheet</li>
                  <li>Convert the main data table to an Excel Table</li>
                  <li>Update formulas to use Table references</li>
                  <li>Replace SUMPRODUCT array calculations with SUMIFS when appropriate</li>
                </ul>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className={`p-4 border-b ${currentStep === 5 ? "bg-accent/20" : ""}`}>
          <div className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep > 5 ? "bg-green-500 text-white" : "bg-muted text-foreground"
            }`}>
              {currentStep > 5 ? <CheckCircle className="h-4 w-4" /> : "5"}
            </div>
            <div className="space-y-3 flex-1">
              <h5 className="font-medium">Reduce Workbook Bloat</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Check workbook size and structure:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>File → Info → Properties → Size</li>
                  <li>Look for unusually large file size relative to data amount</li>
                </ul>
                <li>Remove excess formatting:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Select all cells (Ctrl+A) → Clear → Clear Formats (where appropriate)</li>
                  <li>Limit conditional formatting to essential cells only</li>
                </ul>
                <li>Clean up data connections and ranges:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Data → Queries & Connections → Review and remove unused connections</li>
                  <li>Formulas → Name Manager → Delete unused named ranges</li>
                </ul>
                <li>For the sample workbook:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Remove unnecessary conditional formatting in the "Dashboard" sheet</li>
                  <li>Delete unused named ranges (there are several)</li>
                  <li>Remove excess formatting from unused cells</li>
                  <li>Delete hidden/unused worksheets</li>
                </ul>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className={`p-4 ${currentStep === 6 ? "bg-accent/20" : ""}`}>
          <div className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep > 6 ? "bg-green-500 text-white" : "bg-muted text-foreground"
            }`}>
              {currentStep > 6 ? <CheckCircle className="h-4 w-4" /> : "6"}
            </div>
            <div className="space-y-3 flex-1">
              <h5 className="font-medium">Measure Performance Improvement</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Compare before and after performance:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>File size reduction</li>
                  <li>Calculation time (using Developer tools)</li>
                  <li>File open/save time</li>
                </ul>
                <li>Document optimizations made:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Number of volatile functions replaced</li>
                  <li>Complex formulas simplified</li>
                  <li>Formatting and objects removed</li>
                </ul>
                <li>Create a performance checklist for future workbooks:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Use non-volatile functions when possible</li>
                  <li>Limit conditional formatting</li>
                  <li>Use Tables for structured data</li>
                  <li>Break complex calculations into steps</li>
                  <li>Choose appropriate calculation settings</li>
                </ul>
                <li>Save the optimized workbook with a new name</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Challenge */}
      {completed && (
        <div className="bg-muted/30 p-4 rounded-lg border border-excel-green/30">
          <h4 className="font-medium text-excel-green mb-3">🏆 Challenge: Advanced Performance Techniques</h4>
          <p className="text-sm mb-3">Ready to take your Excel optimization skills to the next level? Try these advanced techniques:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li>Use Power Query for data transformations instead of formulas</li>
            <li>Create a VBA macro that cleans up excess formatting across all sheets</li>
            <li>Implement binary search algorithms for large dataset lookups</li>
            <li>Use Solver to optimize calculation sequence for complex models</li>
            <li>Create an optimization log that tracks performance metrics over time</li>
          </ul>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        {!completed ? (
          <>
            <Button 
              variant="outline" 
              onClick={handleReset}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span >Reset</span>
            </Button>
            <Button variant="excel" onClick={handleNextStep} className="gap-2">
              <span>{currentStep < 6 ? `Step ${currentStep + 1}` : "Complete Exercise"}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <div className="flex gap-3 ml-auto">
            <Button variant="outline" onClick={handleReset} className="gap-2">
              <RefreshCw className="h-4 w-4" />
              <span >Start Over</span>
            </Button>
            <Button asChild variant="excel" className="gap-2">
              <a href="/solutions/performance-optimization/Slow_Workbook_Template.xlsx" download>
                <Download className="h-4 w-4" />
                <span >Download Template</span>
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceOptimizationExercise;
