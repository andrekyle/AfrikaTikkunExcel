import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, ArrowRight, Target, TrendingUp } from 'lucide-react';
import CopyableContent from './CopyableContent';

interface QualityAssuranceAutomationLessonProps {
  onContinue?: () => void;
}

const QualityAssuranceAutomationLesson: React.FC<QualityAssuranceAutomationLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Lesson Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500">
            <Shield className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Quality Assurance Automation</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Develop AI-powered quality control systems that automatically detect errors, validate data integrity, and ensure compliance across your Excel solutions.
        </p>
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
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Technical Skills</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Build automated data validation systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Implement AI-powered error detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Create compliance monitoring dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Design automated testing frameworks</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-600">Business Applications</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Reduce manual quality control time by 80%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Ensure regulatory compliance automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Prevent costly data errors before they occur</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Generate automated quality reports</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: AI-Powered Data Validation System */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 font-bold text-sm">1</span>
            </div>
            Project 1: AI-Powered Data Validation System
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step-by-step Instructions */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-3">📋 Step-by-Step Instructions (55 minutes)</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Phase 1: Validation Framework Setup (10 minutes)</strong>
                <p className="text-green-700 ml-4">• Create validation workbook with dedicated sheets for rules, results, and logs</p>
                <p className="text-green-700 ml-4">• Set up data validation rule repository with categories and severity levels</p>
              </div>
              <div>
                <strong>Phase 2: AI Rule Engine Development (15 minutes)</strong>
                <p className="text-green-700 ml-4">• Build intelligent validation rules using pattern recognition and statistical analysis</p>
                <p className="text-green-700 ml-4">• Implement machine learning algorithms for anomaly detection</p>
              </div>
              <div>
                <strong>Phase 3: Real-Time Validation System (12 minutes)</strong>
                <p className="text-green-700 ml-4">• Create real-time data monitoring with instant error flagging</p>
                <p className="text-green-700 ml-4">• Set up automated alerts for critical validation failures</p>
              </div>
              <div>
                <strong>Phase 4: Quality Dashboard Creation (10 minutes)</strong>
                <p className="text-green-700 ml-4">• Design executive quality dashboard with KPIs and trend analysis</p>
                <p className="text-green-700 ml-4">• Build interactive charts showing validation results and improvement metrics</p>
              </div>
              <div>
                <strong>Phase 5: Testing & Optimization (8 minutes)</strong>
                <p className="text-green-700 ml-4">• Test validation system with sample data and edge cases</p>
                <p className="text-green-700 ml-4">• Optimize performance and fine-tune AI algorithms for accuracy</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Sample Quality Control Data</h4>
            <CopyableContent 
              label="Quality Control Dataset"
              content={`Record_ID	Data_Type	Value	Expected_Range	Validation_Status	Error_Type	Severity	Department	AI_Confidence
QC001	Revenue	R125000	R100000-R200000	Valid	None	Low	Sales	0.95
QC002	Customer_Age	-5	18-100	Invalid	Negative_Value	High	Marketing	0.98
QC003	Product_Price	R0	R10-R5000	Invalid	Zero_Value	Medium	Finance	0.92
QC004	Email	john@company	Valid_Email_Format	Invalid	Format_Error	Medium	HR	0.89
QC005	Date	2024-13-45	Valid_Date_Format	Invalid	Invalid_Date	High	Operations	0.97
QC006	Percentage	150%	0%-100%	Invalid	Out_of_Range	Medium	Analytics	0.94
QC007	Phone	+27123456789	Valid_Phone_Format	Valid	None	Low	Support	0.91
QC008	Quantity	1000000	1-10000	Invalid	Extreme_Value	High	Inventory	0.99`}
            >
              <div className="bg-gray-50 p-3 rounded-md overflow-x-auto">
                <pre className="text-xs">{`Record_ID	Data_Type	Value	Expected_Range	Validation_Status	Error_Type	Severity	Department	AI_Confidence
QC001	Revenue	R125000	R100000-R200000	Valid	None	Low	Sales	0.95
QC002	Customer_Age	-5	18-100	Invalid	Negative_Value	High	Marketing	0.98
QC003	Product_Price	R0	R10-R5000	Invalid	Zero_Value	Medium	Finance	0.92
QC004	Email	john@company	Valid_Email_Format	Invalid	Format_Error	Medium	HR	0.89
QC005	Date	2024-13-45	Valid_Date_Format	Invalid	Invalid_Date	High	Operations	0.97
QC006	Percentage	150%	0%-100%	Invalid	Out_of_Range	Medium	Analytics	0.94
QC007	Phone	+27123456789	Valid_Phone_Format	Valid	None	Low	Support	0.91
QC008	Quantity	1000000	1-10000	Invalid	Extreme_Value	High	Inventory	0.99`}</pre>
              </div>
            </CopyableContent>
          </div>

          <div>
            <h4 className="font-semibold mb-3">AI Validation Formulas</h4>
            <CopyableContent 
              label="Advanced Validation Formulas"
              content={`// AI-Powered Data Type Detection
=IF(ISNUMBER(A2), "Numeric", IF(ISDATE(A2), "Date", IF(ISERROR(FIND("@",A2)), "Text", "Email")))

// Anomaly Detection Using Statistical Analysis
=IF(ABS(A2-AVERAGE($A$2:$A$100))>2*STDEV($A$2:$A$100), "Anomaly", "Normal")

// Pattern Recognition for Data Quality
=IF(AND(LEN(A2)=13, ISNUMBER(VALUE(A2))), "Valid_ID", "Invalid_ID")

// AI Confidence Score Calculation
=ROUND((1-ABS(A2-FORECAST.LINEAR(ROW(),ROW($A$2:$A$100),$A$2:$A$100))/A2)*100,0)/100`}
            >
              <div className="bg-gray-50 p-3 rounded-md">
                <pre className="text-sm overflow-x-auto"><code>{`// AI-Powered Data Type Detection
=IF(ISNUMBER(A2), "Numeric", IF(ISDATE(A2), "Date", IF(ISERROR(FIND("@",A2)), "Text", "Email")))

// Anomaly Detection Using Statistical Analysis
=IF(ABS(A2-AVERAGE($A$2:$A$100))>2*STDEV($A$2:$A$100), "Anomaly", "Normal")

// Pattern Recognition for Data Quality
=IF(AND(LEN(A2)=13, ISNUMBER(VALUE(A2))), "Valid_ID", "Invalid_ID")

// AI Confidence Score Calculation
=ROUND((1-ABS(A2-FORECAST.LINEAR(ROW(),ROW($A$2:$A$100),$A$2:$A$100))/A2)*100,0)/100`}</code></pre>
              </div>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Project 2: Automated Compliance Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">2</span>
            </div>
            Project 2: Automated Compliance Monitoring
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-3">📊 Step-by-Step Instructions (50 minutes)</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Phase 1: Compliance Framework Setup (12 minutes)</strong>
                <p className="text-blue-700 ml-4">• Create compliance monitoring workbook with regulatory requirements</p>
              </div>
              <div>
                <strong>Phase 2: Real-Time Monitoring System (15 minutes)</strong>
                <p className="text-blue-700 ml-4">• Build continuous compliance monitoring with violation detection</p>
              </div>
              <div>
                <strong>Phase 3: Audit Trail Generation (10 minutes)</strong>
                <p className="text-blue-700 ml-4">• Create comprehensive audit logs with timestamped events</p>
              </div>
              <div>
                <strong>Phase 4: Executive Dashboard (8 minutes)</strong>
                <p className="text-blue-700 ml-4">• Design dashboard showing compliance status and risk metrics</p>
              </div>
              <div>
                <strong>Phase 5: Testing & Validation (5 minutes)</strong>
                <p className="text-blue-700 ml-4">• Test compliance system with various scenarios</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Compliance Monitoring Data</h4>
            <CopyableContent 
              label="Compliance Dataset"
              content={`Rule_ID	Regulation	Description	Status	Violation_Count	Risk_Level	Department	Action_Required
COMP001	POPIA	Personal data protection	Compliant	0	Low	IT	None
COMP002	SARS_VAT	VAT calculation accuracy	Non-Compliant	3	High	Finance	Immediate Review
COMP003	B-BBEE	Economic Empowerment	Compliant	0	Low	HR	None
COMP004	JSE_Listing	JSE listing requirements	Warning	1	Medium	Legal	Review Required
COMP005	King_IV	Corporate governance	Compliant	0	Low	Executive	None
COMP006	FAIS	Financial Advisory Services	Non-Compliant	2	High	Compliance	Urgent Action`}
            >
              <div className="bg-gray-50 p-3 rounded-md overflow-x-auto">
                <pre className="text-xs">{`Rule_ID	Regulation	Description	Status	Violation_Count	Risk_Level	Department	Action_Required
COMP001	POPIA	Personal data protection	Compliant	0	Low	IT	None
COMP002	SARS_VAT	VAT calculation accuracy	Non-Compliant	3	High	Finance	Immediate Review
COMP003	B-BBEE	Economic Empowerment	Compliant	0	Low	HR	None
COMP004	JSE_Listing	JSE listing requirements	Warning	1	Medium	Legal	Review Required
COMP005	King_IV	Corporate governance	Compliant	0	Low	Executive	None
COMP006	FAIS	Financial Advisory Services	Non-Compliant	2	High	Compliance	Urgent Action`}</pre>
              </div>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Project 3: Quality Testing Framework */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-purple-600 font-bold text-sm">3</span>
            </div>
            Project 3: Automated Quality Testing Framework
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-3">🧪 Step-by-Step Instructions (45 minutes)</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Phase 1: Test Framework Architecture (10 minutes)</strong>
                <p className="text-purple-700 ml-4">• Design automated testing framework with test cases and scenarios</p>
              </div>
              <div>
                <strong>Phase 2: AI-Powered Test Generation (15 minutes)</strong>
                <p className="text-purple-700 ml-4">• Create intelligent test case generation using AI algorithms</p>
              </div>
              <div>
                <strong>Phase 3: Automated Test Execution (12 minutes)</strong>
                <p className="text-purple-700 ml-4">• Build automated test runner with result validation</p>
              </div>
              <div>
                <strong>Phase 4: Quality Reporting Dashboard (8 minutes)</strong>
                <p className="text-purple-700 ml-4">• Create comprehensive quality reports and metrics dashboard</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Test Results Data</h4>
            <CopyableContent 
              label="Quality Test Results"
              content={`Test_ID	Test_Name	Category	Status	Execution_Time	Pass_Rate	Issues_Found	Priority
TEST001	Data Validation	Functional	Passed	2.3s	100%	0	High
TEST002	Formula Accuracy	Calculation	Failed	1.8s	85%	3	Critical
TEST003	Performance Load	Performance	Passed	5.2s	95%	1	Medium
TEST004	Security Check	Security	Warning	3.1s	90%	2	High
TEST005	UI Responsiveness	Interface	Passed	1.5s	100%	0	Low
TEST006	Integration API	Integration	Failed	4.7s	75%	5	Critical`}
            >
              <div className="bg-gray-50 p-3 rounded-md overflow-x-auto">
                <pre className="text-xs">{`Test_ID	Test_Name	Category	Status	Execution_Time	Pass_Rate	Issues_Found	Priority
TEST001	Data Validation	Functional	Passed	2.3s	100%	0	High
TEST002	Formula Accuracy	Calculation	Failed	1.8s	85%	3	Critical
TEST003	Performance Load	Performance	Passed	5.2s	95%	1	Medium
TEST004	Security Check	Security	Warning	3.1s	90%	2	High
TEST005	UI Responsiveness	Interface	Passed	1.5s	100%	0	Low
TEST006	Integration API	Integration	Failed	4.7s	75%	5	Critical`}</pre>
              </div>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Technical Mastery</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">AI-powered data validation and error detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Automated compliance monitoring systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Intelligent testing frameworks and quality assurance</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Business Impact</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Reduce quality control costs by 80%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Ensure 100% regulatory compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Prevent data errors and improve accuracy</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      {onContinue && (
        <div className="flex justify-center pt-6">
          <Button 
            onClick={onContinue}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2"
          >
            Continue to Next Lesson
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default QualityAssuranceAutomationLesson;
