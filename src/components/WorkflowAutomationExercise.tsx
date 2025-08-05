import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Download, RefreshCw, Clock, FileSpreadsheet, Bot, Repeat, GitBranch, Settings } from "lucide-react";
import SampleDataTables from "@/components/SampleDataTables";

const WorkflowAutomationExercise = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  const totalSteps = 6;

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetExercise = () => {
    setCurrentStep(1);
    setCompleted(false);
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <Bot className="h-5 w-5 text-blue-600" /> Workflow Automation Exercise
        </h3>
        <p className="text-sm text-muted-foreground mt-1">Follow this step-by-step guide to build an automated reporting system in Excel that saves time and reduces errors.
        </p>
      </div>

      {/* Sample Data */}
      <SampleDataTables />

      {/* Exercise Overview */}
      <div className="bg-muted/30 p-4 rounded-lg">
        <h4 className="font-medium mb-3">What You'll Build</h4>
        <p className="text-sm mb-4">In this exercise, you'll create an automated reporting system that gathers data, performs calculations, 
          generates visual reports, and distributes them to stakeholders—all with minimal manual intervention.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="flex items-center gap-2 font-medium mb-2">
              <Clock className="h-4 w-4 text-blue-600" />
              Time-Saving Automation
            </div>
            <p className="text-xs text-muted-foreground">Transform a process that takes hours into one that runs in minutes with VBA and Power Query.
            </p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="flex items-center gap-2 font-medium mb-2">
              <FileSpreadsheet className="h-4 w-4 text-blue-600" />
              Error-Free Reporting
            </div>
            <p className="text-xs text-muted-foreground">Eliminate manual errors with consistent data processing and standardized report templates.
            </p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="flex items-center gap-2 font-medium mb-2">
              <GitBranch className="h-4 w-4 text-blue-600" />
              End-to-End Workflow
            </div>
            <p className="text-xs text-muted-foreground">Build an integrated system that handles the entire reporting process from data collection to distribution.
            </p>
          </div>
        </div>
      </div>

      {completed ? (
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-green-800">Exercise Completed!</h3>
          <p className="text-sm text-green-700 mt-2 mb-6">Congratulations! You've built an automated reporting system that will save hours of manual work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={resetExercise} className="flex gap-2 items-center">
              <RefreshCw className="h-4 w-4" /> Start Over
            </Button>
            <Button asChild variant="outline" className="flex gap-2 items-center">
              <a href="/solutions/workflow-automation/Automated_Reporting_Template.xlsm" download>
                <Download className="h-4 w-4" /> Download Template
              </a>
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 text-blue-700 font-medium h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
              {currentStep}
            </div>
            <h3 className="text-lg font-medium">
              {currentStep === 1 && "Set Up Your Data Structure"}
              {currentStep === 2 && "Create Data Collection Automation"}
              {currentStep === 3 && "Build Calculation Engine"}
              {currentStep === 4 && "Design Report Templates"}
              {currentStep === 5 && "Implement Distribution System"}
              {currentStep === 6 && "Test and Schedule Your Workflow"}
            </h3>
          </div>

          <div className="space-y-4 mb-8">
            {currentStep === 1 && (
              <>
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Settings className="h-4 w-4 text-blue-600" /> Setting Up Your Foundation
                </h4>
                <p className="text-sm">First, we need to create the data structure that will hold all the information for our reporting system.
                </p>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm">
                  <h5 className="font-medium">Step 1a: Create Your Data Table</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Open a new Excel workbook and create a sheet named "Data"</li>
                    <li>Create a structured table with these columns:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Date</li>
                        <li>Region</li>
                        <li>Department</li>
                        <li>Category</li>
                        <li>Revenue</li>
                        <li>Expenses</li>
                        <li>Profit (formula calculated)</li>
                      </ul>
                    </li>
                    <li>Format the table as an Excel Table (Ctrl+T) and name it "ReportData"</li>
                    <li>Add at least 10 sample rows with different departments and regions</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm mt-4">
                  <h5 className="font-medium">Step 1b: Create Configuration Sheet</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Add a new sheet named "Config"</li>
                    <li>Create the following named cells:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>DataSource - path where your source data files will be located</li>
                        <li>ReportFolder - path where reports will be saved</li>
                        <li>EmailList - comma-separated list of recipients</li>
                        <li>ReportFrequency - "Daily", "Weekly", or "Monthly"</li>
                      </ul>
                    </li>
                    <li>Create a "ReportTypes" table with columns "ReportName" and "Enabled" (use TRUE/FALSE)</li>
                    <li>Add entries for "Summary Report", "Department Report", and "Regional Report"</li>
                  </ol>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" /> Automating Data Collection
                </h4>
                <p className="text-sm">Now, let's set up Power Query to automatically import and clean data from external sources.
                </p>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm">
                  <h5 className="font-medium">Step 2a: Create a Power Query Connection</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Go to Data tab → Get Data → From File → From Folder</li>
                    <li>Select the folder path stored in your DataSource named cell</li>
                    <li>Click "Transform Data" to open Power Query Editor</li>
                    <li>Select "Combine Files" when prompted to combine all CSV files in the folder</li>
                    <li>Use "First Row as Headers" if your CSVs have headers</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm mt-4">
                  <h5 className="font-medium">Step 2b: Clean and Transform Data</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>In Power Query Editor, rename any columns to match your data model</li>
                    <li>Remove any unnecessary columns</li>
                    <li>Change data types: 
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Date column to Date type</li>
                        <li>Revenue and Expenses to Currency</li>
                        <li>Text fields to Text type</li>
                      </ul>
                    </li>
                    <li>Add a custom column for Profit using: = [Revenue] - [Expenses]</li>
                    <li>Add error handling with "Replace Errors" for any numeric fields</li>
                    <li>Click "Close & Load To..." and select to load to your "Data" sheet</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-3 rounded-md text-sm mt-4">
                  <p className="text-blue-700 font-medium">💡 Pro Tip:</p>
                  <p className="text-blue-600 text-xs">Create a parameter in Power Query using your DataSource named cell so you can easily change the source folder location without editing your query.
                  </p>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Bot className="h-4 w-4 text-blue-600" /> Building the Calculation Engine
                </h4>
                <p className="text-sm">Let's create the formulas and calculations that will transform raw data into meaningful insights.
                </p>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm">
                  <h5 className="font-medium">Step 3a: Create a Calculation Sheet</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Add a new sheet named "Calculations"</li>
                    <li>Create a PivotTable from your ReportData table:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Rows: Department, Category</li>
                        <li>Columns: Region</li>
                        <li>Values: Sum of Revenue, Sum of Expenses, Sum of Profit</li>
                      </ul>
                    </li>
                    <li>Add a Timeline control for Date to enable filtering by time period</li>
                    <li>Create a second PivotTable showing monthly trends with Date in rows</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm mt-4">
                  <h5 className="font-medium">Step 3b: Add KPI Calculations</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Create a KPI section with the following metrics:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Total Revenue</li>
                        <li>Total Expenses</li>
                        <li>Total Profit</li>
                        <li>Profit Margin % (Profit/Revenue)</li>
                        <li>Top Performing Department (by Profit)</li>
                        <li>Top Performing Region (by Revenue)</li>
                      </ul>
                    </li>
                    <li>Use GETPIVOTDATA() function to pull values from your PivotTables</li>
                    <li>Add Year-to-Date (YTD) and Month-to-Date (MTD) calculations</li>
                    <li>Create named ranges for all KPIs for easy reference in reports</li>
                  </ol>
                </div>
              </>
            )}

            {currentStep === 4 && (
              <>
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <FileSpreadsheet className="h-4 w-4 text-blue-600" /> Designing Report Templates
                </h4>
                <p className="text-sm">Now we'll create professional-looking report templates that will be automatically populated.
                </p>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm">
                  <h5 className="font-medium">Step 4a: Create Summary Report Template</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Add a new sheet named "SummaryReport"</li>
                    <li>Design a header with company logo, report title, and date</li>
                    <li>Create sections for:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Executive Summary (with top KPIs)</li>
                        <li>Performance Charts (insert charts from calculation sheet)</li>
                        <li>Regional Breakdown (using PivotTable data)</li>
                      </ul>
                    </li>
                    <li>Add formulas that reference your KPI named ranges</li>
                    <li>Insert a chart showing Profit by Department</li>
                    <li>Create a footer with page numbers and date of generation</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm mt-4">
                  <h5 className="font-medium">Step 4b: Create Department and Regional Templates</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Add sheets for "DepartmentReport" and "RegionalReport"</li>
                    <li>For each template:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Use consistent header and footer design</li>
                        <li>Add placeholder for the specific Department or Region name</li>
                        <li>Create a detail section showing specific metrics</li>
                        <li>Add comparison charts (e.g., current vs. previous period)</li>
                      </ul>
                    </li>
                    <li>Use conditional formatting to highlight areas that exceed or miss targets</li>
                    <li>Create dynamic titles that update based on selection</li>
                    <li>Add data validation for report parameters (period, department, region)</li>
                  </ol>
                </div>
              </>
            )}

            {currentStep === 5 && (
              <>
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Repeat className="h-4 w-4 text-blue-600" /> Implementing Distribution System
                </h4>
                <p className="text-sm">Let's create the VBA code that will generate and distribute reports automatically.
                </p>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm">
                  <h5 className="font-medium">Step 5a: Create Report Generation Module</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Press Alt+F11 to open the VBA editor</li>
                    <li>Insert a new module and name it "ReportGenerator"</li>
                    <li>Create the following procedures:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>RefreshData() - to refresh Power Query connections</li>
                        <li>GenerateSummaryReport() - to populate the summary report</li>
                        <li>GenerateDepartmentReports() - to create a report for each department</li>
                        <li>GenerateRegionalReports() - to create a report for each region</li>
                        <li>SaveReportsToPDF() - to export reports as PDF files</li>
                      </ul>
                    </li>
                    <li>Add a Main() procedure that calls these functions in sequence</li>
                  </ol>
                  <div className="bg-gray-100 p-3 rounded-md mt-2">
                    <p className="text-xs font-mono">Sub Main()<br />
                      &nbsp;&nbsp;RefreshData<br />
                      &nbsp;&nbsp;If IsEnabled("Summary Report") Then GenerateSummaryReport<br />
                      &nbsp;&nbsp;If IsEnabled("Department Report") Then GenerateDepartmentReports<br />
                      &nbsp;&nbsp;If IsEnabled("Regional Report") Then GenerateRegionalReports<br />
                      &nbsp;&nbsp;SaveReportsToPDF<br />
                      &nbsp;&nbsp;DistributeReports<br />
                      End Sub
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm mt-4">
                  <h5 className="font-medium">Step 5b: Create Email Distribution Module</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Add a new module named "EmailDistribution"</li>
                    <li>Create a procedure to send emails with the reports attached:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Use Outlook automation to create and send emails</li>
                        <li>Get email recipients from your Config sheet</li>
                        <li>Include report PDFs as attachments</li>
                        <li>Use HTML email body with key insights</li>
                      </ul>
                    </li>
                    <li>Add error handling for cases where email cannot be sent</li>
                    <li>Add logging to track when reports are generated and sent</li>
                  </ol>
                  <div className="bg-gray-100 p-3 rounded-md mt-2">
                    <p className="text-xs font-mono">Sub DistributeReports()<br />
                      &nbsp;&nbsp;Dim outlookApp As Object<br />
                      &nbsp;&nbsp;Dim emailItem As Object<br />
                      &nbsp;&nbsp;Dim recipientList As String<br />
                      <br />
                      &nbsp;&nbsp;' Get email recipients from config<br />
                      &nbsp;&nbsp;recipientList = Range("EmailList").Value<br />
                      <br />
                      &nbsp;&nbsp;' Create and send email with reports<br />
                      &nbsp;&nbsp;Set outlookApp = CreateObject("Outlook.Application")<br />
                      &nbsp;&nbsp;Set emailItem = outlookApp.CreateItem(0)<br />
                      &nbsp;&nbsp;With emailItem<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;.To = recipientList<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;.Subject = "Automated Reports - " & Format(Date, "yyyy-mm-dd")<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;.HTMLBody = CreateEmailBody()<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;' Add attachments<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;' Send email<br />
                      &nbsp;&nbsp;End With<br />
                      End Sub
                    </p>
                  </div>
                </div>
              </>
            )}

            {currentStep === 6 && (
              <>
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-blue-600" /> Testing and Scheduling
                </h4>
                <p className="text-sm">Finally, let's test the complete workflow and set up scheduling for automation.
                </p>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm">
                  <h5 className="font-medium">Step 6a: Test the Complete Workflow</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Create a test button on a control panel sheet:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Insert a shape or button</li>
                        <li>Right-click and assign the Main() macro</li>
                        <li>Label it "Run Full Workflow"</li>
                      </ul>
                    </li>
                    <li>Add individual test buttons for each component:</li>
                    <ul className="list-disc list-inside ml-5 mt-1">
                      <li>Refresh Data Only</li>
                      <li>Generate Reports Only</li>
                      <li>Distribute Reports Only</li>
                    </ul>
                    <li>Create a logging system to track any errors</li>
                    <li>Run a complete test and verify all reports are generated correctly</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-md space-y-3 text-sm mt-4">
                  <h5 className="font-medium">Step 6b: Set Up Automatic Scheduling</h5>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Save your workbook as a macro-enabled file (.xlsm)</li>
                    <li>Create a Windows Task Scheduler task:
                      <ul className="list-disc list-inside ml-5 mt-1">
                        <li>Action: Start Program</li>
                        <li>Program: Excel.exe</li>
                        <li>Arguments: /e /r "MacroName" "FullPathToYourFile.xlsm"</li>
                      </ul>
                    </li>
                    <li>Set the schedule based on your reporting frequency:</li>
                    <ul className="list-disc list-inside ml-5 mt-1">
                      <li>Daily: Choose time when data is expected to be ready</li>
                      <li>Weekly: Choose day of week and time</li>
                      <li>Monthly: Choose day of month and time</li>
                    </ul>
                    <li>Add notification on task completion or failure</li>
                    <li>Create documentation for maintaining the system</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-3 rounded-md text-sm mt-4">
                  <p className="text-blue-700 font-medium">🏆 Advanced Challenge:</p>
                  <p className="text-blue-600 text-xs">Add error handling to your VBA code that sends you a notification if the workflow encounters any problems during automated execution. This ensures you'll know immediately if something fails during an overnight run.
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
 >Previous Step
            </Button>
            <Button onClick={handleNextStep} className="flex gap-2 items-center">
              {currentStep === totalSteps ? "Complete" : "Next Step"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkflowAutomationExercise;
