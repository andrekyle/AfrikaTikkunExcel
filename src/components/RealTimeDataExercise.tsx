import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Download, RefreshCw, Database, LineChart, CloudCog } from "lucide-react";

const RealTimeDataExercise = () => {
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
        <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring Dashboard</h3>
        <p className="text-muted-foreground mb-4">In this hands-on exercise, you'll learn how to create a dashboard that connects to live data sources
          and automatically refreshes. These techniques are essential for building operational dashboards
          that display the most current information without manual updates.
        </p>
      </div>

      {/* Exercise Overview */}
      <div className="bg-muted/30 p-4 rounded-lg">
        <h4 className="font-medium mb-3">What You'll Build</h4>
        <p className="text-sm text-muted-foreground mb-4">A real-time monitoring dashboard that includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
          <li>Live connection to external data sources</li>
          <li>Auto-refreshing charts and tables</li>
          <li>Real-time status indicators</li>
          <li>Dynamic time-based filtering</li>
          <li>Alert thresholds for key metrics</li>
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
              <h5 className="font-medium">Set Up Data Connection</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Create a new Excel workbook and go to the Data tab</li>
                <li>Click "Get Data" (Power Query) and select from these options:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>From Web (for online data sources)</li>
                  <li>From Database (for SQL Server, MySQL, etc.)</li>
                  <li>From Online Services (for SharePoint, Salesforce, etc.)</li>
                </ul>
                <li>For this exercise, use "From Web" and enter a URL with regularly updated data</li>
                <li>Example sources:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Public APIs with stock prices</li>
                  <li>Weather data feeds</li>
                  <li>Currency exchange rates</li>
                  <li>Company's internal web service (if available)</li>
                </ul>
                <li>Navigate through the Power Query Editor to select the tables/fields you need</li>
                <li>Click "Close & Load To" and choose "Table" and "Existing Worksheet"</li>
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
              <h5 className="font-medium">Create Auto-Refreshing Charts</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Select your data and create appropriate charts (line charts work well for time series data)</li>
                <li>Configure auto-refresh settings:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Go to Data → Properties → Query Properties</li>
                  <li>Check "Enable background refresh"</li>
                  <li>Select "Refresh every X minutes" and set your desired frequency (e.g., 5 minutes)</li>
                </ul>
                <li>Ensure your chart references use dynamic ranges:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Convert data to an Excel Table (Ctrl+T) so charts automatically expand</li>
                  <li>Or use OFFSET/INDIRECT functions for dynamic ranges</li>
                </ul>
                <li>Add a timestamp that shows when the data was last refreshed:</li>
                <li>Use this formula: <code>=NOW()</code>
                  with appropriate time formatting</li>
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
              <h5 className="font-medium">Create Real-Time Status Indicators</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Add a status panel that shows current state of monitored metrics</li>
                <li>Create conditional formatting rules to highlight status changes:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Use icon sets for status indicators (green/yellow/red)</li>
                  <li>Apply data bars to show relative values</li>
                  <li>Use color scales for trending data</li>
                </ul>
                <li>Create alert formulas that evaluate thresholds:</li>
                <li>Example: <code>=IF(A2 {'>'}ThresholdValue,"Alert","Normal")</code></li>
                <li>Add conditional formatting to highlight alerts with bold red text</li>
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
              <h5 className="font-medium">Implement Time-Based Filtering</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Add timeline slicers to filter data by different time periods:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Insert → Slicer → Timeline</li>
                  <li>Connect to your data table</li>
                  <li>Configure options to show days/weeks/months/quarters</li>
                </ul>
                <li>Create dynamic time window options:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Last hour</li>
                  <li>Today</li>
                  <li>Last 24 hours</li>
                  <li>Last 7 days</li>
                </ul>
                <li>Use form controls (dropdown) to select time window</li>
                <li>Create dynamic filtering formulas based on selected time window</li>
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
              <h5 className="font-medium">Add Dynamic Thresholds and Alerts</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Create a configuration section for threshold values</li>
                <li>Set up dynamic alerts that evaluate real-time data against thresholds:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Critical threshold (e.g., {'>'} 95%)</li>
                  <li>Warning threshold (e.g., {'>'} 80%)</li>
                  <li>Normal operation range</li>
                </ul>
                <li>Use conditional formatting to create visual alerts:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Red for critical issues</li>
                  <li>Yellow for warnings</li>
                  <li>Green for normal operation</li>
                </ul>
                <li>Create a summary table showing all current alerts</li>
                <li>Use COUNTIF or SUMPRODUCT to count the number of active alerts by severity</li>
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
              <h5 className="font-medium">Final Dashboard Assembly</h5>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Organize all elements into a cohesive dashboard layout:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>KPI summary at the top</li>
                  <li>Time-based filters in the upper-right</li>
                  <li>Main charts in the center</li>
                  <li>Alert summary at the bottom</li>
                </ul>
                <li>Add these dashboard enhancements:</li>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Title with last refresh timestamp</li>
                  <li>Automatic refresh button (using simple VBA if needed)</li>
                  <li>Navigation controls between different views</li>
                </ul>
                <li>Test the auto-refresh functionality to ensure it updates properly</li>
                <li>Create documentation for how to interpret the dashboard</li>
                <li>Add data source attribution if using public APIs</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Challenge */}
      {completed && (
        <div className="bg-muted/30 p-4 rounded-lg border border-excel-green/30">
          <h4 className="font-medium text-excel-green mb-3">🏆 Challenge: Enhanced Real-Time Features</h4>
          <p className="text-sm mb-3">Take your real-time dashboard to the next level with these advanced features:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li>Create a VBA macro to send email alerts when critical thresholds are breached</li>
            <li>Add sparklines to show recent trends alongside current values</li>
            <li>Implement data validation to allow users to adjust alert thresholds dynamically</li>
            <li>Create a connection to multiple data sources and combine them using Power Query</li>
            <li>Use Power Automate to trigger workflows when certain conditions are met</li>
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
              <a href="/solutions/real-time-data/RealTime_Data_Template.xlsx" download>
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

export default RealTimeDataExercise;
