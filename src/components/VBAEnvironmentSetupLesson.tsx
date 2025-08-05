import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface VBAEnvironmentSetupLessonProps {
  onContinue?: () => void;
}

const VBAEnvironmentSetupLesson: React.FC<VBAEnvironmentSetupLessonProps> = ({ onContinue }) => {
  return (
    <div className="space-y-8">
      {/* Introduction Section */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Lesson 1: VBA Environment Setup</h3>
        <p className="text-muted-foreground mb-4">Before diving into VBA programming, you need to properly configure your Excel environment. This lesson will guide you through setting up the VBA editor, adjusting security settings, and accessing the developer tools necessary for Excel automation.
        </p>
      </div>
      
      {/* Main Content Section */}
      <div>
        <h4 className="text-lg font-medium mb-2">Configure VBA Editor, Security Settings, and Developer Tools</h4>
        <div className="space-y-6">
          <div>
            <h5 className="font-medium mb-2">1. Enable the Developer Tab</h5>
            <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
              <ol className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                <li>Go to <strong>File → Options</strong> (or <strong>Excel → Preferences</strong>
                  on Mac)</li>
                <li>Select <strong>Customize Ribbon</strong></li>
                <li>Check the box next to <strong>Developer</strong>
                  in the main tabs list</li>
                <li>Click <strong>OK</strong>
                  to apply the changes</li>
              </ol>
            </div>
          </div>
          
          <div>
            <h5 className="font-medium mb-2">2. Configure Macro Security Settings</h5>
            <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
              <ol className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                <li>Go to the <strong>Developer</strong>
                  tab</li>
                <li>Click on <strong>Macro Security</strong>
                  in the Code group</li>
                <li>Select <strong>Disable all macros with notification</strong> (recommended)</li>
                <li>Optionally, check <strong>Trust access to the VBA project object model</strong>
                  for advanced development</li>
                <li>Click <strong>OK</strong>
                  to save settings</li>
              </ol>
            </div>
          </div>
          
          <div>
            <h5 className="font-medium mb-2">3. Open and Configure the VBA Editor</h5>
            <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
              <ol className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                <li>Go to the <strong>Developer</strong>
                  tab</li>
                <li>Click <strong>Visual Basic</strong> (or press <strong>Alt+F11</strong>)</li>
                <li>When the VBA Editor opens, go to <strong>Tools → Options</strong></li>
                <li>In the Editor tab, enable <strong>Auto Syntax Check</strong>
                  and <strong>Auto List Members</strong></li>
                <li>Click <strong>OK</strong>
                  to apply the settings</li>
              </ol>
            </div>
          </div>
          
          <div>
            <h5 className="font-medium mb-2">4. Create a VBA Module</h5>
            <div className="pl-4 border-l-2 border-muted p-2 bg-muted/20 rounded-sm">
              <ol className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                <li>In the VBA Editor's Project Explorer (left panel), right-click on your workbook</li>
                <li>Select <strong>Insert → Module</strong></li>
                <li>A new module window will appear where you can write your first VBA code</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      {/* Completed Section */}
      <div className="border-t pt-6">
        <h4 className="text-lg font-medium mb-3 flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          <span >Completed</span>
        </h4>
        <p className="text-muted-foreground mb-4">After completing this lesson, you'll have successfully:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Enabled the Developer tab in the Excel ribbon</li>
          <li>Configured appropriate macro security settings</li>
          <li>Accessed and customized the VBA Editor environment</li>
          <li>Created your first VBA module</li>
          <li>Prepared your Excel environment for VBA development</li>
        </ul>
      </div>
      
      {/* Hands-on Project Section */}
      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold mb-4">Hands-on Project: Set Up Your VBA Development Environment</h3>
        <p className="mb-6">Apply what you've learned by setting up your own VBA development environment and creating a simple test macro.
        </p>
        
        <div className="space-y-6">
          <div className="bg-muted/20 p-4 rounded-md border">
            <h4 className="font-medium mb-3">Project Steps:</h4>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Enable the Developer Tab:</span> 
                <p className="mt-1 text-sm">Follow the steps to enable the Developer tab in your version of Excel.</p>
              </li>
              <li>
                <span className="font-medium text-foreground">Set Macro Security Level:</span> 
                <p className="mt-1 text-sm">Configure your security settings to allow macros with notification.</p>
              </li>
              <li>
                <span className="font-medium text-foreground">Create a HelloWorld Macro:</span> 
                <p className="mt-1 text-sm">Open the VBA Editor and create a new module with the following code:</p>
                <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto mt-2">
                  <code>
{`Sub HelloWorld()
    MsgBox "Hello, VBA World!"
End Sub`}
                  </code>
                </pre>
              </li>
              <li>
                <span className="font-medium text-foreground">Run and Test:</span> 
                <p className="mt-1 text-sm">Save your workbook as a macro-enabled file (.xlsm), run your HelloWorld macro, and verify that it works correctly.</p>
              </li>
              <li>
                <span className="font-medium text-foreground">Customize Your Environment:</span> 
                <p className="mt-1 text-sm">Set up your preferred VBA Editor options under Tools → Options.</p>
              </li>
            </ol>
          </div>
          
          <div className="bg-gray-50 dark:bg-slate-900 border rounded-lg p-4">
            <h4 className="font-medium mb-2">Bonus Challenge:</h4>
            <p className="text-sm mb-3">Create a simple utility macro that formats selected cells:
            </p>
            <pre className="bg-gray-50 dark:bg-slate-900 p-3 rounded-md overflow-x-auto">
              <code>
{`Sub FormatCells()
    ' Apply formatting to selected range
    With Selection
        .Font.Bold = True
        .Interior.Color = RGB(255, 255, 0)  ' Yellow background
        .Borders.LineStyle = xlContinuous
    End With
End Sub`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      
      {/* Next Steps Button */}
      <div className="flex justify-end">
        <Button variant="excel" className="gap-2" onClick={onContinue}>
          <span >Continue to Next Lesson</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VBAEnvironmentSetupLesson;
