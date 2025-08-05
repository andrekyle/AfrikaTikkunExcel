import React, { FC, useState } from 'react';
import { AlertCircle, Code, Lightbulb, Copy, Shield, Lock, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample macro project metadata
const projectMetadata = [
  { feature: "Candidate Tracking", moduleCount: 3, dependencies: "None", securityLevel: "Standard" },
  { feature: "Interview Scheduler", moduleCount: 2, dependencies: "Calendar API", securityLevel: "High" },
  { feature: "Recruiter Dashboard", moduleCount: 4, dependencies: "Charts Library", securityLevel: "Standard" },
  { feature: "Resume Processor", moduleCount: 1, dependencies: "None", securityLevel: "Medium" },
  { feature: "Metrics Reporter", moduleCount: 3, dependencies: "None", securityLevel: "Standard" },
];

// Sample security settings
const securitySettings = [
  { setting: "Trust access to the VBA project object model", purpose: "Allow programmatic access to VBA projects", recommended: "Disabled unless necessary" },
  { setting: "Enable all macros", purpose: "Run all macros without notifications", recommended: "Not recommended" },
  { setting: "Disable all macros with notification", purpose: "Block macros and notify users", recommended: "Recommended for most cases" },
  { setting: "Disable all macros except digitally signed", purpose: "Only run trusted, signed macros", recommended: "Recommended for deployment" },
  { setting: "Disable all macros without notification", purpose: "Block all macros silently", recommended: "High-security environments only" },
];

const VBADeploymentSecurityExercise: FC = () => {
  const [metadataCopied, setMetadataCopied] = useState(false);
  const [securitySettingsCopied, setSecuritySettingsCopied] = useState(false);
  
  const handleCopyMetadata = async () => {
    const data = "Feature\tModule Count\tDependencies\tSecurity Level\n" +
      projectMetadata.map(item => 
        `${item.feature}\t${item.moduleCount}\t${item.dependencies}\t${item.securityLevel}`
      ).join("\n");
    await navigator.clipboard.writeText(data);
    setMetadataCopied(true);
    setTimeout(() => setMetadataCopied(false), 1200);
  };
  
  const handleCopySecuritySettings = async () => {
    const data = "Setting\tPurpose\tRecommended\n" +
      securitySettings.map(item => 
        `${item.setting}\t${item.purpose}\t${item.recommended}`
      ).join("\n");
    await navigator.clipboard.writeText(data);
    setSecuritySettingsCopied(true);
    setTimeout(() => setSecuritySettingsCopied(false), 1200);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle >Deployment & Security for Recruitment VBA Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <section className="space-y-4">
          <p className="text-xs text-muted-foreground">In this lesson, you'll learn how to safely package and distribute VBA recruitment tools,
            manage security settings, and implement best practices for deployment in a corporate environment.
          </p>

          <div className="flex items-start gap-2 p-4 bg-muted/60 rounded-md">
            <Lightbulb className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-xs">Why Secure Deployment Matters</p>
              <p className="text-xs">For recruiting teams, VBA solutions often handle sensitive candidate data. 
                Proper security ensures compliance with data protection regulations and maintains candidate privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Digital Signatures */}
        <section className="space-y-4">
          <h5 className="font-semibold m-0">Digital Signatures for VBA Projects</h5>
          <p className="text-xs">Digital signatures verify your VBA code's authenticity and integrity, crucial for distributing
            recruitment tools that access sensitive candidate data.
          </p>
          
          <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-auto">
            <div className="flex items-center justify-between">
              <p className="font-medium">Creating a Self-signed Certificate</p>
              <Code className="h-4 w-4" />
            </div>
            <pre>
{`' In Windows:
1. Start >Run >"certmgr.msc"
2. Right-click on "Trusted Publishers" >All Tasks >Advanced Operations >Create Custom Request
3. Follow the Certificate Enrollment wizard
4. Use "SelfCert.exe" in Office's installation folder (alternate method)
`}
            </pre>
          </div>
          
          <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-auto">
            <div className="flex items-center justify-between">
              <p className="font-medium">Signing Your VBA Project</p>
              <Code className="h-4 w-4" />
            </div>
            <pre>
{`1. In the VBA editor, go to Tools >Digital Signature
2. Click "Choose" and select your certificate
3. Save the workbook as a macro-enabled workbook (.xlsm)
4. Recipients must add you to their trusted publishers`}
            </pre>
          </div>
          
          <div className="flex items-center gap-1 p-3 bg-yellow-50 rounded text-xs border-l-4 border-yellow-400 pl-3">
            <AlertCircle className="h-4 w-4 text-yellow-500" />
            <p >Digital signatures will expire eventually. Plan for re-signing before deployment.</p>
          </div>
        </section>

        {/* Section 2: Package and Deployment */}
        <section className="space-y-4">
          <h5 className="font-semibold m-0">Packaging Your Recruiting VBA Solution</h5>
          <p className="text-xs">When deploying VBA tools for a recruiting team, proper packaging ensures smooth adoption and fewer issues.
          </p>
          
          <div className="bg-muted p-4 rounded-lg space-y-3 text-xs">
            <div className="flex items-start gap-2">
              <Lock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <h6 className="font-semibold m-0">Password Protect Your VBA Project</h6>
                <p >In the VBA editor, go to Tools {'>'} VBAProject Properties {'>'} Protection tab. Enable password protection
                for the project to prevent unauthorized modifications to your recruitment automation tools.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Shield className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <h6 className="font-semibold m-0">Create a Workbook Template</h6>
                <p >Save your VBA-enabled recruiting tools as a template (.xltm) to let users create new workbooks
                based on your solution without modifying the original.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Share2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <h6 className="font-semibold m-0">Add-in Deployment (.xlam)</h6>
                <p >Convert your recruitment VBA tools to an Excel add-in (.xlam) for seamless integration with any
                workbook. Add-ins load automatically when Excel starts and are ideal for company-wide deployment.</p>
              </div>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-auto">
            <div className="flex items-center justify-between">
              <p className="font-medium">Creating an Add-in</p>
              <Code className="h-4 w-4" />
            </div>
            <pre>
{`1. Develop and test your recruiting automation tools
2. Save your workbook as "Excel Add-in (*.xlam)"
3. Place in a shared network location or distribute to users
4. Users add it via File >Options >Add-ins >Excel Add-ins >Browse`}
            </pre>
          </div>
        </section>

        {/* Section 3: Security Best Practices */}
        <section className="space-y-4">
          <h5 className="font-semibold m-0">Security Best Practices</h5>
          <p className="text-xs">Implement these security practices to protect candidate data and ensure your recruiting VBA tools are trusted.
          </p>
          
          <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-auto">
            <div className="flex items-center justify-between">
              <p className="font-medium">Data Protection in VBA</p>
              <Code className="h-4 w-4" />
            </div>
            <pre>
{`' Never store sensitive information in plain text
Private Function EncryptSensitiveData(data As String) As String
    Dim encryptedData As String
    ' Basic implementation (use more robust methods in production)
    For i = 1 To Len(data)
        encryptedData = encryptedData & Chr(Asc(Mid(data, i, 1)) + 5)
    Next i
    EncryptSensitiveData = encryptedData
End Function

Private Function DecryptSensitiveData(encrypted As String) As String
    Dim decryptedData As String
    ' Reverse the encryption process
    For i = 1 To Len(encrypted)
        decryptedData = decryptedData & Chr(Asc(Mid(encrypted, i, 1)) - 5)
    Next i
    DecryptSensitiveData = decryptedData
End Function`}
            </pre>
          </div>
          
          <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-auto">
            <div className="flex items-center justify-between">
              <p className="font-medium">User Permission Levels</p>
              <Code className="h-4 w-4" />
            </div>
            <pre>
{`' Implement permission checking for sensitive operations
Function UserHasAdminPermission() As Boolean
    ' Check against a list of admin users
    Dim adminList As String
    adminList = "hr_admin;recruiting_manager;it_support"
    
    ' Get current username (using Windows username)
    Dim userName As String
    userName = LCase(Environ$("USERNAME"))
    
    ' Check if user is in admin list
    UserHasAdminPermission = (InStr(1, adminList, userName) >0)
End Function

Sub DeleteCandidateRecord()
    ' Only allow deletion for users with permission
    If UserHasAdminPermission() Then
        ' Proceed with deletion
        ' Code to delete candidate...
    Else
        MsgBox "You don't have permission to delete candidate records", _
               vbExclamation, "Access Denied"
    End If
End Sub`}
            </pre>
          </div>
        </section>
        
        {/* Sample Data Tables */}
        <section className="space-y-6">
          <h5 className="font-semibold m-0">Sample Data Tables</h5>
          <p className="text-xs">Copy these tables to Excel for reference when working on the exercises.</p>
          
          {/* Table 1: Project Metadata */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <h6 className="font-semibold m-0 text-xs">Recruiting VBA Project Metadata</h6>
              <Button size="icon" variant="ghost" aria-label="Copy metadata" onClick={handleCopyMetadata}>
                <Copy className="h-4 w-4" />
              </Button>
              {metadataCopied && <span className="text-green-600 text-xs ml-1">Copied!</span>}
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[320px] text-xs border rounded-lg bg-muted">
                <thead>
                  <tr className="bg-muted/80">
                    <th className="px-4 py-2 text-left font-medium">Feature</th>
                    <th className="px-4 py-2 text-left font-medium">Module Count</th>
                    <th className="px-4 py-2 text-left font-medium">Dependencies</th>
                    <th className="px-4 py-2 text-left font-medium">Security Level</th>
                  </tr>
                </thead>
                <tbody>
                  {projectMetadata.map((row, i) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="px-4 py-2 whitespace-nowrap">{row.feature}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{row.moduleCount}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{row.dependencies}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{row.securityLevel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Table 2: Security Settings */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <h6 className="font-semibold m-0 text-xs">Excel Security Settings</h6>
              <Button size="icon" variant="ghost" aria-label="Copy security settings" onClick={handleCopySecuritySettings}>
                <Copy className="h-4 w-4" />
              </Button>
              {securitySettingsCopied && <span className="text-green-600 text-xs ml-1">Copied!</span>}
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[320px] text-xs border rounded-lg bg-muted">
                <thead>
                  <tr className="bg-muted/80">
                    <th className="px-4 py-2 text-left font-medium">Setting</th>
                    <th className="px-4 py-2 text-left font-medium">Purpose</th>
                    <th className="px-4 py-2 text-left font-medium">Recommended</th>
                  </tr>
                </thead>
                <tbody>
                  {securitySettings.map((row, i) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="px-4 py-2 whitespace-nowrap">{row.setting}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{row.purpose}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{row.recommended}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Exercise Instructions */}
        <section className="space-y-4 bg-muted/60 p-4 rounded">
          <h6 className="font-semibold mb-2">Step-by-Step Instructions</h6>
          
          <ol className="list-decimal list-inside space-y-2 pl-4 text-xs">
            <li >Copy the sample data tables (using the copy buttons) for reference during this exercise.</li>
            <li >Create a new Excel workbook with a candidate tracker sheet and basic VBA functionality.</li>
            <li >Add a simple password protection to your VBA project using the VBE's Project Properties.</li>
            <li >Implement the <code className="bg-blue-100 px-2 py-0.5 rounded">EncryptSensitiveData</code>
                  and <code className="bg-blue-100 px-2 py-0.5 rounded">DecryptSensitiveData</code>
                  functions in a new module.</li>
            <li >Create a user permission function similar to <code className="bg-blue-100 px-2 py-0.5 rounded">UserHasAdminPermission</code>
                  and apply it to protect a sensitive macro.</li>
            <li >Save your workbook as an Excel add-in (.xlam) and place it in a dedicated folder.</li>
            <li >Configure Excel's macro security settings to the "Disable all macros except digitally signed macros" option.</li>
          </ol>
          
          <div className="mt-4 p-4 bg-white rounded-md border border-blue-200">
            <p className="font-medium text-xs">Bonus Challenge:</p>
            <p className="text-xs">Create a VBA installer that helps users properly install your recruiting add-in, including setting the correct security preferences and adding it to Excel's add-in library automatically.</p>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default VBADeploymentSecurityExercise;
