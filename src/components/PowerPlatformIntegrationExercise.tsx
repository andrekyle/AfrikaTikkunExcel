import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Copy, FileSpreadsheet, Workflow, Bot } from "lucide-react";

const PowerPlatformIntegrationExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});
  
  // Sample data for tables in CSV format
  const invoiceDataCSV = `Invoice Number,Supplier Name,Date,Total Amount,VAT Amount,Payment Terms,Status,Department
INV-2023-4582,Cape Town Office Supplies,15/06/2023,8750.00,1312.50,30 days,Pending,Finance
INV-2023-4683,Durban Tech Solutions,22/06/2023,12500.00,1875.00,60 days,Paid,IT
INV-2023-4701,Joburg Marketing Agency,28/06/2023,22000.00,3300.00,30 days,Processed,Marketing
INV-2023-4892,Pretoria Furniture Ltd,05/07/2023,35000.00,5250.00,90 days,Pending,Operations
INV-2023-4925,Bloemfontein Consulting,12/07/2023,18500.00,2775.00,30 days,Paid,HR`;

  const procurementDataCSV = `Request ID,Requestor,Department,Item Description,Quantity,Estimated Cost,Urgency,Request Date,Approval Status
PR-2023-0145,Thabo Nkosi,Marketing,Digital Marketing Software License,1,15000.00,Medium,10/07/2023,Pending
PR-2023-0151,Lerato Moloi,IT,Dell XPS Laptops,5,85000.00,High,12/07/2023,Approved
PR-2023-0158,Sipho Ndlovu,HR,Team Building Event Venue,1,25000.00,Low,15/07/2023,Rejected
PR-2023-0163,Nomsa Dlamini,Finance,Financial Analysis Software,3,12000.00,Critical,17/07/2023,Approved
PR-2023-0170,Pieter van Wyk,Operations,Warehouse Equipment,10,45000.00,Medium,20/07/2023,Pending`;
  
  // Workflow Steps Constants
  const invoiceWorkflowSteps = `# Invoice Processing with Power Automate & AI Builder

## Step 1: Create the AI Model for Invoice Processing
1. Go to https://make.powerapps.com
2. Select "AI Builder" from the left menu
3. Choose "Form processing"
4. Click "Create" and name it "SA Invoice Processor"
5. Upload 5-10 sample South African invoices for training
6. Define the fields to extract: Invoice Number, Date, Supplier, Amount, VAT, etc.
7. Train and publish your model

## Step 2: Create the Flow in Power Automate
1. Go to https://flow.microsoft.com
2. Create a new automated cloud flow
3. Select the trigger: "When a new email arrives (V3)" in Outlook
4. Add a condition to filter emails with subject containing "Invoice"
5. Add "Process and save information from forms" AI Builder action
   - Select your "SA Invoice Processor" model
   - For the form, select "Email Attachment" from dynamic content
6. Add "Add a row into a table" Excel Online action
   - Select your Invoice tracking workbook and table
   - Map AI Builder outputs to Excel columns
7. Add a condition to check if Amount > 5000 ZAR
8. For the "If yes" branch:
   - Add "Start and wait for an approval" action
   - Configure for your approval workflow needs
9. Add "Send an email" action to notify finance
10. Add "Update row" action to update the invoice status
11. Save and test your flow
`;  
  
  const procurementWorkflowSteps = `# Procurement Request Automation with Power Automate

## Step 1: Set Up Your Request Form
1. Go to https://forms.office.com
2. Create a new form for "Procurement Request"
3. Add fields for:
   - Requestor Name and Department
   - Item Description
   - Quantity and Estimated Cost (ZAR)
   - Urgency (dropdown: Low, Medium, High, Critical)
   - Justification (text area)
4. Save and publish the form

## Step 2: Prepare Your Excel Tracking Sheet
1. Create a new Excel workbook in OneDrive/SharePoint
2. Create a table with columns matching your form fields
3. Add additional columns for tracking:
   - Request ID (use formula =CONCATENATE("PR-",TEXT(NOW(),"yyyy"),"-",ROW()-1))
   - Approval Status
   - Approval Date
   - Assigned Approver

## Step 3: Build the AI Categorization Model
1. In AI Builder, select "Category classification"
2. Create a new model named "Procurement Categorizer"
3. Define your categories (e.g., IT Equipment, Office Supplies, Professional Services)
4. Train with sample procurement descriptions
5. Test and publish your model

## Step 4: Create the Flow in Power Automate
1. Create a new automated flow
2. Select "When a new response is submitted" Microsoft Forms trigger
3. Add "Get response details" Forms action
4. Add "Categorize text" AI Builder action
   - Use the item description as input
   - Connect to your "Procurement Categorizer" model
5. Add "Add a row into a table" Excel action
6. Add a "Condition" action to check estimated cost:
   - If over 25,000 ZAR, route to Finance Director
   - If under 25,000 ZAR, route to Department Head
7. Add "Start and wait for an approval" action
8. Add condition to check approval outcome
9. Add "Update row" action to update request status
10. Add "Send an email" action to notify requestor
11. Save and test your flow
`;

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus({ ...copyStatus, [key]: true });
      setTimeout(() => {
        setCopyStatus({ ...copyStatus, [key]: false });
      }, 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Workflow className="h-5 w-5 text-indigo-600" />
            Power Platform Integration with Excel
          </CardTitle>
          <CardDescription >Connect Excel with Power Automate and AI Builder for automated workflows and intelligent data processing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Introduction */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Introduction</h3>
            <p className="text-sm">Microsoft Power Platform combines Power BI, Power Apps, Power Automate, and AI Builder to help businesses 
              create intelligent solutions. When integrated with Excel, it allows you to automate data processing, build 
              AI models without complex coding, and create responsive workflows that enhance business productivity.
            </p>
            <p className="text-sm">In South African businesses, Power Platform can transform operations by automating routine tasks, extracting 
              insights from documents, processing unstructured data, and connecting disparate systems—all while leveraging 
              your Excel skills and data.
            </p>
          </div>

          {/* South African Sample Data */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">South African Sample Data</h3>
            <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="h-4 w-4 text-green-600" />
                  <h4 className="text-sm font-medium">Invoice Processing Dataset</h4>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 text-xs"
                  onClick={() => handleCopy(invoiceDataCSV, "invoiceData")}
                >
                  {copyStatus["invoiceData"] ? (
                    <>
                      <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-1 h-3 w-3" /> Copy Data
                    </>
                  )}
                </Button>
              </div>
              <div className="space-y-1 text-xs">
                <p >This dataset contains South African business invoices with the following columns:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li >Invoice Number: Unique identifier (e.g., INV-2023-4582)</li>
                  <li >Supplier Name: Company name (e.g., Cape Town Office Supplies)</li>
                  <li >Date: Invoice date in DD/MM/YYYY format</li>
                  <li >Total Amount: In South African Rand (ZAR)</li>
                  <li >VAT Amount: Value-Added Tax at 15%</li>
                  <li >Payment Terms: 30 days, 60 days, etc.</li>
                  <li >Status: Pending, Processed, Paid</li>
                  <li >Department: Finance, IT, Operations, etc.</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="h-4 w-4 text-green-600" />
                  <h4 className="text-sm font-medium">Procurement Requests Dataset</h4>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 text-xs"
                  onClick={() => handleCopy(procurementDataCSV, "procurementData")}
                >
                  {copyStatus["procurementData"] ? (
                    <>
                      <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-1 h-3 w-3" /> Copy Data
                    </>
                  )}
                </Button>
              </div>
              <div className="space-y-1 text-xs">
                <p >This dataset tracks procurement requests with the following fields:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li >Request ID: Unique identifier (e.g., PR-2023-0145)</li>
                  <li >Requestor: Employee name</li>
                  <li >Department: Marketing, Sales, HR, etc.</li>
                  <li >Item Description: Product or service description</li>
                  <li >Quantity: Number of items</li>
                  <li >Estimated Cost: In ZAR</li>
                  <li >Urgency: Low, Medium, High, Critical</li>
                  <li >Request Date: Date submitted</li>
                  <li >Approval Status: Pending, Approved, Rejected</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hands-on Exercise */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Hands-on Exercise: Build an AI-Powered Invoice Processing Solution</h3>
            <p className="text-sm">In this exercise, you will create a complete solution that uses Excel, Power Automate, and AI Builder to 
              automate invoice processing for a South African business. This will save countless hours of manual data entry 
              and reduce errors.
            </p>
            
            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 1: Setting Up Your Excel Workbook</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li >Create a new Excel workbook and save it to your OneDrive for Business or SharePoint site</li>
                  <li >Create a worksheet named "Invoice Register"</li>
                  <li >Set up a table with these columns: InvoiceID, Date, Supplier, Amount, VAT, Total, PaymentTerms, DueDate, Status</li>
                  <li >Format the Amount and Total columns as Currency with ZAR symbol</li>
                  <li >Create a simple dashboard sheet with COUNT and SUM formulas to track invoices by status</li>
                  <li >Format the table as a proper Excel Table (Insert {'>'} Table) and name it "InvoiceTable"</li>
                </ol>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 2: Creating Your AI Builder Model</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li >Sign in to <a href="https://make.powerapps.com" className="text-blue-600 underline">Power Apps</a>
                  with your Microsoft 365 account</li>
                  <li >Select "AI Builder" from the left menu and choose "Form processing"</li>
                  <li >Click "Create" and name your model "SA Invoice Processor"</li>
                  <li >Upload at least 5 sample South African invoices (you can find templates online if needed)</li>
                  <li >Define the fields to extract: Invoice Number, Date, Supplier Name, Amount, VAT Amount</li>
                  <li >Train your AI model by tagging where each field appears on your sample invoices</li>
                  <li >Test the model with a new invoice to ensure it correctly extracts information</li>
                  <li >Publish your trained model so it can be used in Power Automate</li>
                </ol>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 3: Building the Power Automate Flow</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li >Go to <a href="https://flow.microsoft.com" className="text-blue-600 underline">Power Automate</a>
                  and create a new "Automated cloud flow"</li>
                  <li >Select trigger: "When a new email arrives (V3)" from Outlook connector</li>
                  <li >Add a condition to filter emails with subject containing "Invoice"</li>
                  <li >Add the AI Builder "Process and save information from forms" action</li>
                  <li >Select your "SA Invoice Processor" model and use the email attachment as input</li>
                  <li >Add the "Add a row into a table" Excel Online action:</li>
                  <li >Select your workbook, "Invoice Register" worksheet and "InvoiceTable" table</li>
                  <li >Map the AI Builder outputs to the corresponding Excel columns</li>
                  <li >Add a "Calculate due date" action: add Payment Terms days to Invoice Date</li>
                  <li >Add a condition to check if Amount exceeds 10,000 ZAR</li>
                  <li >For high-value invoices, add an approval action to notify the finance manager</li>
                  <li >Add notification actions to confirm processing regardless of amount</li>
                  <li >Save your flow and test it by emailing yourself a sample invoice</li>
                </ol>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Stage 4: Enhancing Your Solution</h4>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li >Add data validation in Excel to ensure consistent Status values (Pending, Approved, Paid)</li>
                  <li >Create conditional formatting to highlight overdue invoices based on Due Date</li>
                  <li >Add a Power BI dashboard connected to your Excel data for advanced visualizations</li>
                  <li >Enhance your flow to add error handling if the AI model confidence is low</li>
                  <li >Create a scheduled flow that sends weekly reports of pending invoices</li>
                  <li >Add a Teams notification for urgent approval requests</li>
                </ol>
              </div>
            </div>
            
            <div className="rounded-md border">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-3">
                <h4 className="text-sm font-medium mb-1">Bonus Challenge</h4>
                <p className="text-xs mb-2">Take your solution to the next level by adding these advanced features:</p>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li >Implement duplicate invoice detection by checking if the same invoice number from the same supplier already exists</li>
                  <li >Add currency conversion for foreign currency invoices using Power Automate's HTTP connector to call a currency API</li>
                  <li >Create a mobile app using Power Apps that allows managers to approve invoices on their phones</li>
                  <li >Implement an archiving system that moves paid invoices to a separate worksheet after 60 days</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
              <h3 className="text-sm font-medium">Key Tips for Success</h3>
              <ul className="list-disc pl-5 text-xs space-y-1">
                <li><strong >Start small:</strong>
                  Begin with a simple flow and gradually add complexity</li>
                <li><strong >Test thoroughly:</strong>
                  Test each stage with real South African invoice formats</li>
                <li><strong >Consider privacy:</strong>
                  When using real invoices, ensure sensitive data is protected</li>
                <li><strong >Error handling:</strong>
                  Always include error notification steps in your flows</li>
                <li><strong >Document your solution:</strong>
                  Create simple documentation for others who may need to maintain it</li>
                <li><strong >South African context:</strong>
                  Remember to account for local VAT rates (15%) and local payment terms</li>
              </ul>
            </div>
          </div>

          {/* Workflow Automation Examples */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Power Automate Workflow Examples</h3>
            <p className="text-sm">Below are practical workflows you can build by connecting Power Automate with Excel:</p>
            
            {/* Example 1 */}
            <div className="border rounded-md overflow-hidden">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3">
                <h3 className="text-sm font-medium mb-1">Invoice Processing Workflow</h3>
                <p className="text-xs">Automate invoice processing from email attachments to Excel and approval notifications</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Workflow className="h-4 w-4 text-blue-600" />
                    <span className="text-xs font-medium">Workflow Steps</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 text-xs"
                    onClick={() => handleCopy(invoiceWorkflowSteps, "invoiceWorkflow")}
                  >
                    {copyStatus["invoiceWorkflow"] ? (
                      <>
                        <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-1 h-3 w-3" /> Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className="mt-2">
                  <ol className="list-decimal pl-5 text-xs space-y-2">
                    <li><strong >Trigger:</strong>
                  When a new email arrives in Outlook with specific subject filter (e.g., "Invoice")</li>
                    <li><strong >Extract:</strong>
                  Get PDF attachment from the email</li>
                    <li><strong >AI Processing:</strong>
                  Use AI Builder's form processing model to extract invoice data</li>
                    <li><strong >Data Handling:</strong>
                  Add a row to an Excel table with the extracted invoice details</li>
                    <li><strong >Condition:</strong>
                  Check if amount exceeds approval threshold (e.g., 5000 ZAR)</li>
                    <li><strong >Approval:</strong>
                  If threshold exceeded, send approval request to manager</li>
                    <li><strong >Notification:</strong>
                  Send confirmation email to finance department</li>
                    <li><strong >Update:</strong>
                  Update invoice status in Excel based on approval outcome</li>
                  </ol>
                </div>
              </div>
            </div>
            
            {/* Example 2 */}
            <div className="border rounded-md overflow-hidden">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3">
                <h3 className="text-sm font-medium mb-1">Procurement Request Automation</h3>
                <p className="text-xs">Streamline procurement requests with Excel data management and approval routing</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Workflow className="h-4 w-4 text-purple-600" />
                    <span className="text-xs font-medium">Workflow Steps</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 text-xs"
                    onClick={() => handleCopy(procurementWorkflowSteps, "procurementWorkflow")}
                  >
                    {copyStatus["procurementWorkflow"] ? (
                      <>
                        <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-1 h-3 w-3" /> Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className="mt-2">
                  <ol className="list-decimal pl-5 text-xs space-y-2">
                    <li><strong >Trigger:</strong>
                  When a new form submission occurs (Microsoft Form for procurement requests)</li>
                    <li><strong >Data Storage:</strong>
                  Add the request details to an Excel table</li>
                    <li><strong >Categorization:</strong>
                  Use AI Builder to categorize request by department and urgency</li>
                    <li><strong >Dynamic Routing:</strong>
                  Send approval request to appropriate department head</li>
                    <li><strong >Condition Branch:</strong>
                  Check approval status and estimated cost</li>
                    <li><strong >Secondary Approval:</strong>
                  For requests over 25,000 ZAR, route to finance director</li>
                    <li><strong >Status Update:</strong>
                  Update request status in Excel</li>
                    <li><strong >Notification:</strong>
                  Send outcome notification to requestor</li>
                    <li><strong >Reporting:</strong>
                  If approved, add to monthly procurement report</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PowerPlatformIntegrationExercise;
