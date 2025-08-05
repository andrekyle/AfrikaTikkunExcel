import React, { FC, useState } from 'react';
import { AlertCircle, Code, Lightbulb, Copy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample data for candidate evaluations
const candidateScoreData = [
  { name: "Jennifer Lee", role: "Software Engineer", techScore: 8.5, commScore: 7.0, cultureScore: 9.0 },
  { name: "Michael Chen", role: "UX Designer", techScore: 7.8, commScore: 9.2, cultureScore: 8.5 },
  { name: "Sarah Johnson", role: "Product Manager", techScore: 8.0, commScore: 9.0, cultureScore: 8.8 },
  { name: "David Kim", role: "Data Scientist", techScore: 9.5, commScore: 6.8, cultureScore: 7.5 },
  { name: "Emily Rodriguez", role: "Marketing Specialist", techScore: 7.2, commScore: 8.9, cultureScore: 9.3 },
  { name: "James Wilson", role: "Sales Executive", techScore: 6.5, commScore: 9.7, cultureScore: 9.0 },
  { name: "Aisha Patel", role: "Software Engineer", techScore: 9.0, commScore: 7.5, cultureScore: 8.2 },
];

// Sample data for recruiter assignments
const jobSpecialtyData = [
  { specialty: "Engineering", subCategories: "Software, DevOps, QA", currentRecruiter: "Sarah Chen" },
  { specialty: "Sales", subCategories: "Account Executive, Sales Development, Customer Success", currentRecruiter: "Marcus Johnson" },
  { specialty: "Finance", subCategories: "Accounting, Financial Analysis, Banking", currentRecruiter: "Priya Sharma" },
  { specialty: "HR", subCategories: "Talent Acquisition, Employee Relations, Training", currentRecruiter: "James Wilson" },
  { specialty: "Design", subCategories: "UX, UI, Graphic Design", currentRecruiter: "Ana Rodriguez" },
  { specialty: "Marketing", subCategories: "Digital Marketing, Content Creation, Brand Management", currentRecruiter: "Thomas Brown" },
  { specialty: "Product", subCategories: "Product Management, Product Development", currentRecruiter: "Leila Hassan" },
];

// Sample data for follow-up tracking
const followUpData = [
  { name: "Robert Garcia", position: "Senior Developer", lastContact: "2025-07-01", priority: "High", status: "Interviewing" },
  { name: "Lisa Taylor", position: "Marketing Manager", lastContact: "2025-06-25", priority: "Normal", status: "Sourced" },
  { name: "Omar Khan", position: "UX Designer", lastContact: "2025-07-10", priority: "Normal", status: "Interviewing" },
  { name: "Jessica Martinez", position: "Sales Director", lastContact: "2025-06-15", priority: "High", status: "Offer Stage" },
  { name: "Andrew Wilson", position: "Data Analyst", lastContact: "2025-07-12", priority: "Low", status: "Sourced" },
  { name: "Michelle Lee", position: "HR Specialist", lastContact: "2025-06-20", priority: "Normal", status: "Application" },
  { name: "Daniel Brown", position: "DevOps Engineer", lastContact: "2025-06-10", priority: "High", status: "Interviewing" },
];

const VBAAdvancedFunctionsExercise: FC = () => {
  const [candidateDataCopied, setCandidateDataCopied] = useState(false);
  const [specialtyDataCopied, setSpecialtyDataCopied] = useState(false);
  const [followUpDataCopied, setFollowUpDataCopied] = useState(false);
  
  const handleCopyCandidateData = async () => {
    const data = "Name\tRole\tTechnical Score\tCommunication Score\tCulture Score\n" +
      candidateScoreData.map(c => 
        `${c.name}\t${c.role}\t${c.techScore}\t${c.commScore}\t${c.cultureScore}`
      ).join("\n");
    await navigator.clipboard.writeText(data);
    setCandidateDataCopied(true);
    setTimeout(() => setCandidateDataCopied(false), 1200);
  };
  
  const handleCopySpecialtyData = async () => {
    const data = "Specialty\tSub-Categories\tCurrent Recruiter\n" +
      jobSpecialtyData.map(j => 
        `${j.specialty}\t${j.subCategories}\t${j.currentRecruiter}`
      ).join("\n");
    await navigator.clipboard.writeText(data);
    setSpecialtyDataCopied(true);
    setTimeout(() => setSpecialtyDataCopied(false), 1200);
  };
  
  const handleCopyFollowUpData = async () => {
    const data = "Name\tPosition\tLast Contact\tPriority\tStatus\n" +
      followUpData.map(f => 
        `${f.name}\t${f.position}\t${f.lastContact}\t${f.priority}\t${f.status}`
      ).join("\n");
    await navigator.clipboard.writeText(data);
    setFollowUpDataCopied(true);
    setTimeout(() => setFollowUpDataCopied(false), 1200);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle >Advanced Functions for Recruitment Workflows</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
      <section className="space-y-4">
        <p className="text-xs text-muted-foreground">In this lesson, you'll learn how to create custom VBA functions (User Defined Functions or UDFs) 
          that streamline recruitment processes. These functions can be used directly in worksheets 
          just like built-in Excel functions.
        </p>

        <div className="flex items-start gap-2 p-4 bg-muted/60 rounded-md">
          <Lightbulb className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-xs">Why Create Custom Functions?</p>
            <p className="text-xs">Custom VBA functions can dramatically improve consistency and efficiency in recruitment data processing. 
              They allow you to encapsulate complex calculations and logic that your team uses repeatedly.
            </p>
          </div>
        </div>
      </section>

      {/* Function 1: Candidate Score Calculator */}
      <section className="space-y-4">
        <h5 className="font-semibold m-0">Function 1: Candidate Score Calculator</h5>
        <p className="text-xs">This function calculates a weighted score based on multiple interview assessments, providing
          a standardized way to evaluate candidates.
        </p>

        <div className="bg-slate-50 p-4 rounded-md">
          <pre className="whitespace-pre-wrap text-xs font-mono select-all break-words">
{`Function CandidateScore(techScore As Double, commScore As Double, cultureScore As Double) As Double
    ' Weighted scoring system for candidate evaluation
    ' Technical skills: 50%, Communication: 30%, Culture fit: 20%
    
    ' Input validation
    If techScore < 0 Or techScore > 10 Then
        CandidateScore = CVErr(xlErrValue)
        Exit Function
    End If
    
    If commScore < 0 Or commScore > 10 Then
        CandidateScore = CVErr(xlErrValue)
        Exit Function
    End If
    
    If cultureScore < 0 Or cultureScore > 10 Then
        CandidateScore = CVErr(xlErrValue)
        Exit Function
    End If
    
    ' Calculate weighted score
    CandidateScore = (techScore * 0.5) + (commScore * 0.3) + (cultureScore * 0.2)
End Function`}
          </pre>
        </div>

        <div className="bg-blue-50 p-4 rounded-md">
          <p className="font-medium text-xs">How to use this function:</p>
          <p className="text-xs">In your Excel worksheet: <code className="bg-blue-100 px-2 py-0.5 rounded">=CandidateScore(8, 7, 9)</code>
          </p>
          <p className="text-xs mt-2">This calculates a score of 8 (8*0.5 + 7*0.3 + 9*0.2 = 4 + 2.1 + 1.8 = 7.9)
          </p>
        </div>
      </section>

      {/* Function 2: Recruiter Assignment */}
      <section className="space-y-4">
        <h5 className="font-semibold m-0">Function 2: Recruiter Assignment</h5>
        <p className="text-xs">This function manages the assignment of candidates to recruiters based on job specialties,
          making workload distribution more efficient.
        </p>

        <div className="bg-slate-50 p-4 rounded-md">
          <pre className="whitespace-pre-wrap text-xs font-mono select-all break-words">
{`Function AssignRecruiter(specialty As String) As String
    ' Assigns appropriate recruiter based on job specialty
    ' Uses Select Case for easy maintenance when team changes
    
    ' Convert to lowercase for case-insensitive matching
    Dim specialtyLower As String
    specialtyLower = LCase(specialty)
    
    ' Assign recruiter based on specialty
    Select Case specialtyLower
        Case "engineering", "development", "programming"
            AssignRecruiter = "Sarah Chen"
        Case "sales", "marketing", "business development"
            AssignRecruiter = "Marcus Johnson"
        Case "finance", "accounting", "banking"
            AssignRecruiter = "Priya Sharma"
        Case "hr", "talent", "recruiting"
            AssignRecruiter = "James Wilson"
        Case "design", "ux", "ui", "creative"
            AssignRecruiter = "Ana Rodriguez"
        Case Else
            AssignRecruiter = "Unassigned - Please Review"
    End Select
End Function`}
          </pre>
        </div>

        <div className="bg-green-50 p-4 rounded-md">
          <p className="font-medium text-xs">How to use this function:</p>
          <p className="text-xs">In your Excel worksheet: <code className="bg-green-100 px-2 py-0.5 rounded">=AssignRecruiter("Engineering")</code>
          </p>
          <p className="text-xs mt-2">This will return "Sarah Chen" as the assigned recruiter for Engineering roles.
          </p>
        </div>
      </section>

      {/* Function 3: Follow-up Alert */}
      <section className="space-y-4">
        <h5 className="font-semibold m-0">Function 3: Follow-up Alert</h5>
        <p className="text-xs">This function tracks candidate follow-ups by calculating elapsed time since last contact,
          ensuring no candidates fall through the cracks.
        </p>

        <div className="bg-slate-50 p-4 rounded-md">
          <pre className="whitespace-pre-wrap text-xs font-mono select-all break-words">
{`Function NeedsFollowUp(lastContact As Date, daysThreshold As Integer, Optional priority As String = "Normal") As String
    ' Determines if a candidate needs follow-up based on days since last contact
    ' Also accounts for candidate priority level
    
    ' Calculate days elapsed
    Dim daysElapsed As Integer
    daysElapsed = Date - lastContact
    
    ' Input validation
    If daysElapsed < 0 Then
        NeedsFollowUp = "ERROR: Future date"
        Exit Function
    End If
    
    ' Adjust threshold based on priority
    Dim adjustedThreshold As Integer
    
    Select Case LCase(priority)
        Case "high"
            adjustedThreshold = WorksheetFunction.Floor(daysThreshold * 0.7, 1)  ' 30% sooner for high priority
        Case "low"
            adjustedThreshold = WorksheetFunction.Ceiling(daysThreshold * 1.3, 1)  ' 30% later for low priority
        Case Else  ' "normal"
            adjustedThreshold = daysThreshold
    End Select
    
    ' Determine follow-up status with urgency level
    If daysElapsed >adjustedThreshold * 2 Then
        NeedsFollowUp = "URGENT FOLLOW-UP"
    ElseIf daysElapsed >adjustedThreshold Then
        NeedsFollowUp = "Follow Up"
    Else
        NeedsFollowUp = "OK"
    End If
End Function`}
          </pre>
        </div>

        <div className="bg-purple-50 p-4 rounded-md">
          <p className="font-medium text-xs">How to use this function:</p>
          <p className="text-xs">Basic usage: <code className="bg-purple-100 px-2 py-0.5 rounded">=NeedsFollowUp(A2, 14)</code>
          </p>
          <p className="text-xs mt-2">With priority: <code className="bg-purple-100 px-2 py-0.5 rounded">=NeedsFollowUp(A2, 14, "High")</code>
          </p>
          <p className="text-xs mt-2">This returns "Follow Up" if it's been more than 14 days (or 10 days for high priority candidates) since the last contact.
          </p>
        </div>
      </section>

      {/* Advanced Techniques */}
      <section className="space-y-4">
        <h5 className="font-semibold m-0">Advanced Techniques</h5>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium flex items-center gap-2">
              <Code className="h-4 w-4" /> Error Handling
            </h4>
            <p className="text-xs mt-2">Always include error handling in your functions. The examples above include input validation to prevent incorrect calculations.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium flex items-center gap-2">
              <Code className="h-4 w-4" /> Optional Parameters
            </h4>
            <p className="text-xs mt-2">Make functions flexible by using Optional parameters, as seen in the NeedsFollowUp function's priority parameter.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium flex items-center gap-2">
              <Code className="h-4 w-4" /> Excel Function Integration
            </h4>
            <p className="text-xs mt-2">Use <code >WorksheetFunction</code>
                  to leverage Excel's built-in functions within your VBA code.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium flex items-center gap-2">
              <Code className="h-4 w-4" /> Documentation
            </h4>
            <p className="text-xs mt-2">Always include comments in your functions to explain their purpose, parameters, and any special considerations.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sample Data Tables */}
      <section className="space-y-6">
        <h5 className="font-semibold m-0">Sample Data Tables</h5>
        <p className="text-xs">Copy these tables to Excel to practice your custom functions. Create separate worksheets for each table.</p>
        
        {/* Table 1: Candidate Scores */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h6 className="font-semibold m-0 text-xs">Candidate Evaluation Scores</h6>
            <Button size="icon" variant="ghost" aria-label="Copy candidate data" onClick={handleCopyCandidateData}>
              <Copy className="h-4 w-4" />
            </Button>
            {candidateDataCopied && <span className="text-green-600 text-xs ml-1">Copied!</span>}
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[320px] text-xs border rounded-lg bg-muted">
              <thead>
                <tr className="bg-muted/80">
                  <th className="px-4 py-2 text-left font-medium">Name</th>
                  <th className="px-4 py-2 text-left font-medium">Role</th>
                  <th className="px-4 py-2 text-left font-medium">Technical Score</th>
                  <th className="px-4 py-2 text-left font-medium">Communication Score</th>
                  <th className="px-4 py-2 text-left font-medium">Culture Score</th>
                </tr>
              </thead>
              <tbody>
                {candidateScoreData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-4 py-2 whitespace-nowrap">{row.name}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.role}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.techScore}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.commScore}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.cultureScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Table 2: Job Specialties */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h6 className="font-semibold m-0 text-xs">Job Specialties & Recruiter Assignments</h6>
            <Button size="icon" variant="ghost" aria-label="Copy specialty data" onClick={handleCopySpecialtyData}>
              <Copy className="h-4 w-4" />
            </Button>
            {specialtyDataCopied && <span className="text-green-600 text-xs ml-1">Copied!</span>}
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[320px] text-xs border rounded-lg bg-muted">
              <thead>
                <tr className="bg-muted/80">
                  <th className="px-4 py-2 text-left font-medium">Specialty</th>
                  <th className="px-4 py-2 text-left font-medium">Sub-Categories</th>
                  <th className="px-4 py-2 text-left font-medium">Current Recruiter</th>
                </tr>
              </thead>
              <tbody>
                {jobSpecialtyData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-4 py-2 whitespace-nowrap">{row.specialty}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.subCategories}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.currentRecruiter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Table 3: Follow-Up Tracking */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h6 className="font-semibold m-0 text-xs">Candidate Follow-Up Tracker</h6>
            <Button size="icon" variant="ghost" aria-label="Copy follow-up data" onClick={handleCopyFollowUpData}>
              <Copy className="h-4 w-4" />
            </Button>
            {followUpDataCopied && <span className="text-green-600 text-xs ml-1">Copied!</span>}
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[320px] text-xs border rounded-lg bg-muted">
              <thead>
                <tr className="bg-muted/80">
                  <th className="px-4 py-2 text-left font-medium">Name</th>
                  <th className="px-4 py-2 text-left font-medium">Position</th>
                  <th className="px-4 py-2 text-left font-medium">Last Contact</th>
                  <th className="px-4 py-2 text-left font-medium">Priority</th>
                  <th className="px-4 py-2 text-left font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {followUpData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="px-4 py-2 whitespace-nowrap">{row.name}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.position}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.lastContact}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.priority}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.status}</td>
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
          <li>Copy the sample data tables (using the copy buttons) and paste them into separate worksheets in your Excel workbook: "Candidates", "JobSpecialties", and "FollowUps".</li>
          <li>Open the VBA editor (Alt + F11) and insert a new module.</li>
          <li>Create the <code className="bg-blue-100 px-2 py-0.5 rounded">CandidateScore</code>
                  function that takes three parameters: techScore, commScore, and cultureScore.</li>
          <li>Create the <code className="bg-blue-100 px-2 py-0.5 rounded">AssignRecruiter</code>
                  function that takes a specialty parameter and returns the appropriate recruiter name.</li>
          <li>Test your functions by creating a new column in the Candidates worksheet called "Overall Score" with a formula like <code className="bg-blue-100 px-2 py-0.5 rounded">=CandidateScore(C2,D2,E2)</code>.</li>
          <li>Test the recruiter assignment by creating a formula in another column using <code className="bg-blue-100 px-2 py-0.5 rounded">=AssignRecruiter(B2)</code>
                  where B2 contains a job specialty.</li>
          <li>For the NeedsFollowUp function, refer to the sample code and implement it in your module.</li>
        </ol>
        
        <div className="mt-4 p-4 bg-white rounded-md border border-blue-200">
          <p className="font-medium text-xs">Bonus Challenge:</p>
          <p className="text-xs">Create a function called <code className="bg-blue-100 px-2 py-0.5 rounded">RecruitingEfficiency</code>
                  that calculates the average time to fill positions based on job opening date and filled date. Include parameters to filter by department and position level.</p>
        </div>
      </section>
    </CardContent>
  </Card>
  );
};

export default VBAAdvancedFunctionsExercise;
