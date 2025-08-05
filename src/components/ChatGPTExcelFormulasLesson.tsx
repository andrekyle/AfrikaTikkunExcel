import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MessageSquare, Lightbulb, Zap, Target, CheckCircle, AlertTriangle } from 'lucide-react';
import CopyableContent from './CopyableContent';

interface ChatGPTExcelFormulasLessonProps {
  onContinue?: () => void;
}

const ChatGPTExcelFormulasLesson: React.FC<ChatGPTExcelFormulasLessonProps> = ({ onContinue }) => {
  const sampleData = {
    sales: `Product	Region	Sales_Amount	Date	Salesperson
Laptop	North	1200	2024-01-15	John Smith
Tablet	South	800	2024-01-16	Sarah Johnson
Desktop	East	1500	2024-01-17	Mike Davis
Monitor	West	300	2024-01-18	Lisa Wilson
Keyboard	North	50	2024-01-19	John Smith
Mouse	South	25	2024-01-20	Sarah Johnson
Laptop	East	1200	2024-01-21	Mike Davis
Tablet	West	800	2024-01-22	Lisa Wilson
Desktop	North	1500	2024-01-23	John Smith
Monitor	South	300	2024-01-24	Sarah Johnson`,

    inventory: `Item	Category	Stock	Min_Stock	Unit_Cost	Supplier
Office Chair	Furniture	45	20	150	Office Pro
Desk Lamp	Electronics	12	15	35	Tech Solutions
Notebook	Stationery	200	50	2.5	Paper Plus
Printer	Electronics	8	10	250	Tech Solutions
Stapler	Stationery	25	10	15	Office Pro
Monitor Stand	Furniture	18	12	45	Furniture World
USB Cable	Electronics	75	30	8	Tech Solutions
Pen Set	Stationery	150	40	12	Paper Plus
File Cabinet	Furniture	6	8	180	Furniture World
Wireless Mouse	Electronics	22	15	25	Tech Solutions`,

    employees: `Employee_ID	Name	Department	Salary	Hire_Date	Performance_Rating
E001	Alice Johnson	Marketing	65000	2022-03-15	Excellent
E002	Bob Smith	Sales	58000	2021-07-22	Good
E003	Carol Davis	IT	72000	2020-11-08	Excellent
E004	David Wilson	HR	55000	2023-01-10	Good
E005	Eva Brown	Finance	68000	2021-09-14	Excellent
E006	Frank Miller	Marketing	52000	2023-05-20	Average
E007	Grace Lee	Sales	61000	2022-08-03	Good
E008	Henry Taylor	IT	75000	2020-04-17	Excellent
E009	Iris Chen	HR	57000	2022-12-01	Good
E010	Jack Anderson	Finance	63000	2021-06-25	Good`
  };

  const chatGPTPrompts = [
    {
      scenario: "Calculate commission with tiered rates",
      prompt: "Create an Excel formula that calculates sales commission with these rates: 5% for sales up to $1000, 7% for $1001-$5000, and 10% for sales above $5000. The sales amount is in column B.",
      formula: "=IF(B2<=1000,B2*0.05,IF(B2<=5000,1000*0.05+(B2-1000)*0.07,1000*0.05+4000*0.07+(B2-5000)*0.1))"
    },
    {
      scenario: "Dynamic date-based calculations",
      prompt: "Create a formula that calculates the number of business days between two dates, excluding weekends and a list of holidays in column F.",
      formula: "=NETWORKDAYS(C2,D2,F:F)"
    },
    {
      scenario: "Complex text manipulation",
      prompt: "Extract the first name, last name, and domain from email addresses in column A (format: firstname.lastname@domain.com).",
      formula: "=TRIM(LEFT(SUBSTITUTE(A2,\".\"&REPT(\" \",100)),100))"
    }
  ];

  const bestPractices = [
    {
      title: "Be Specific in Your Prompts",
      description: "Provide clear context, sample data, and desired outcomes",
      example: "Instead of 'help with formula', say 'calculate compound interest with monthly contributions'"
    },
    {
      title: "Include Data Structure",
      description: "Describe your column layout and data types",
      example: "Column A has dates, Column B has amounts, Column C needs the result"
    },
    {
      title: "Specify Excel Version",
      description: "Mention if you need compatibility with older Excel versions",
      example: "Create a formula compatible with Excel 2016"
    },
    {
      title: "Ask for Explanations",
      description: "Request step-by-step breakdowns of complex formulas",
      example: "Explain how each part of this nested IF statement works"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">ChatGPT for Excel Formulas</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn how to leverage ChatGPT and AI assistants to generate, explain, and optimize complex Excel formulas
        </p>
        <div className="flex justify-center gap-2">
          <Badge variant="secondary">AI-Powered</Badge>
          <Badge variant="secondary">Formula Generation</Badge>
          <Badge variant="secondary">Problem Solving</Badge>
        </div>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Master the art of crafting effective prompts for formula generation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Generate complex formulas using natural language descriptions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Understand and modify AI-generated formulas for your specific needs</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Debug and optimize formulas with AI assistance</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Apply AI-generated solutions to real-world business scenarios</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Introduction to AI-Powered Formula Creation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Why Use AI for Excel Formulas?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            AI assistants like ChatGPT can dramatically accelerate your Excel formula development by:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Speed</h4>
                  <p className="text-sm text-gray-600">Generate complex formulas in seconds instead of hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Learning</h4>
                  <p className="text-sm text-gray-600">Get detailed explanations of how formulas work</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Accuracy</h4>
                  <p className="text-sm text-gray-600">Reduce syntax errors and logical mistakes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-purple-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Creativity</h4>
                  <p className="text-sm text-gray-600">Discover new approaches and advanced techniques</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices for AI Prompts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Best Practices for AI Prompts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {bestPractices.map((practice, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">{practice.title}</h4>
                <p className="text-gray-700 mb-2">{practice.description}</p>
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm font-mono text-gray-600">💡 {practice.example}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Project 1: Sales Commission Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Project 1: AI-Generated Sales Commission Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold">Step 1: Set Up Your Data</h3>
            <p className="text-sm text-gray-600">
              Copy this sales data into Excel to practice with:
            </p>
            <CopyableContent
              content={sampleData.sales}
              label="Sales Data"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {sampleData.sales}
              </pre>
            </CopyableContent>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 2: Try These ChatGPT Prompts</h3>
            <p className="text-sm text-gray-600">
              Use these example prompts with ChatGPT to generate formulas:
            </p>
            <div className="space-y-4">
              {chatGPTPrompts.map((prompt, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Scenario: {prompt.scenario}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">ChatGPT Prompt:</p>
                      <CopyableContent
                        content={prompt.prompt}
                        label="Copy Prompt"
                      >
                        <div className="bg-blue-50 p-3 rounded-md text-sm">
                          {prompt.prompt}
                        </div>
                      </CopyableContent>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Generated Formula:</p>
                      <CopyableContent
                        content={prompt.formula}
                        label="Copy Formula"
                      >
                        <code className="bg-gray-50 p-2 rounded text-sm font-mono block">
                          {prompt.formula}
                        </code>
                      </CopyableContent>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 3: Practice Your Own Prompts</h3>
            <p className="text-sm text-gray-600">
              Try creating prompts for these scenarios using your sales data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
              <li>Calculate the average sales per salesperson</li>
              <li>Find the top 3 products by total sales</li>
              <li>Create a formula to categorize sales as "High", "Medium", or "Low"</li>
              <li>Calculate month-over-month growth rates</li>
              <li>Generate a formula to find the best performing region</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Project 2: Inventory Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Project 2: Smart Inventory Formulas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold">Step 1: Load Inventory Data</h3>
            <p className="text-sm text-gray-600">
              Use this inventory dataset for the next exercises:
            </p>
            <CopyableContent
              content={sampleData.inventory}
              label="Inventory Data"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {sampleData.inventory}
              </pre>
            </CopyableContent>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 2: Advanced Prompt Examples</h3>
            <p className="text-sm text-gray-600">
              Try these more complex prompts for inventory management:
            </p>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-2">Multi-Condition Analysis</h4>
                <CopyableContent
                  content="Create a formula that identifies items that are both below minimum stock AND from a specific supplier. Show 'URGENT REORDER' if both conditions are met, 'REORDER SOON' if only stock is low, and 'OK' otherwise."
                  label="Copy Prompt"
                >
                  <div className="bg-purple-50 p-3 rounded-md text-sm">
                    Create a formula that identifies items that are both below minimum stock AND from a specific supplier. Show 'URGENT REORDER' if both conditions are met, 'REORDER SOON' if only stock is low, and 'OK' otherwise.
                  </div>
                </CopyableContent>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Dynamic Ranking</h4>
                <CopyableContent
                  content="Create a formula that ranks items by their total inventory value (Stock × Unit_Cost) and shows the rank number next to each item."
                  label="Copy Prompt"
                >
                  <div className="bg-green-50 p-3 rounded-md text-sm">
                    Create a formula that ranks items by their total inventory value (Stock × Unit_Cost) and shows the rank number next to each item.
                  </div>
                </CopyableContent>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-orange-700 mb-2">Predictive Restocking</h4>
                <CopyableContent
                  content="Create a formula that calculates how many days of stock remain based on an assumed daily usage rate of 2 units per day, and flags items that will run out in less than 10 days."
                  label="Copy Prompt"
                >
                  <div className="bg-orange-50 p-3 rounded-md text-sm">
                    Create a formula that calculates how many days of stock remain based on an assumed daily usage rate of 2 units per day, and flags items that will run out in less than 10 days.
                  </div>
                </CopyableContent>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Project 3: Employee Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Project 3: HR Analytics with AI
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold">Step 1: Employee Data Setup</h3>
            <p className="text-sm text-gray-600">
              Copy this employee data for HR analytics practice:
            </p>
            <CopyableContent
              content={sampleData.employees}
              label="Employee Data"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {sampleData.employees}
              </pre>
            </CopyableContent>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 2: Challenge Yourself</h3>
            <p className="text-sm text-gray-600">
              Create your own prompts for these HR scenarios:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-600">Compensation Analysis</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Calculate salary percentiles by department</li>
                  <li>Identify pay gaps between departments</li>
                  <li>Generate bonus calculations based on performance</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-green-600">Performance Insights</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Calculate tenure-based performance trends</li>
                  <li>Identify high-performers for promotion</li>
                  <li>Create performance improvement flags</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips for Formula Optimization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Formula Optimization Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600">✅ Do's</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Test AI-generated formulas with sample data first</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Ask for explanations of complex nested functions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Request alternative approaches for comparison</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Specify performance requirements for large datasets</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-red-600">❌ Don'ts</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't blindly copy formulas without understanding them</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't use overly complex formulas when simple ones work</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't forget to validate results with known data</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore error handling in production formulas</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="font-semibold text-blue-700">🎯 Master These Skills:</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-4">
              <li>• Craft specific, context-rich prompts for better AI responses</li>
              <li>• Understand and modify AI-generated formulas for your needs</li>
              <li>• Use AI to learn new Excel functions and techniques</li>
              <li>• Combine multiple AI suggestions to create optimal solutions</li>
              <li>• Validate and test all AI-generated formulas thoroughly</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Next Steps:</strong> Practice with your own datasets and gradually increase complexity. 
              Remember, AI is a powerful tool that enhances your Excel skills—the more you understand Excel fundamentals, 
              the better you can leverage AI assistance.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      <div className="flex justify-center pt-6">
        <Button onClick={onContinue} className="flex items-center gap-2">
          Continue to Next Lesson
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatGPTExcelFormulasLesson;
