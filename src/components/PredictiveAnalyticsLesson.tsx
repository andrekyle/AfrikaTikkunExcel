import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  BarChart3, 
  LineChart, 
  Target, 
  Brain, 
  Calculator,
  CheckCircle, 
  ArrowRight,
  Settings,
  Lightbulb,
  Database,
  Calendar,
  DollarSign,
  Users
} from "lucide-react";
import CopyableContent from "@/components/CopyableContent";
import PredictiveAnalyticsProjects from "@/components/PredictiveAnalyticsProjects";

interface PredictiveAnalyticsLessonProps {
  onContinue: () => void;
}

const PredictiveAnalyticsLesson: React.FC<PredictiveAnalyticsLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-lg">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <CardTitle className="text-2xl text-purple-900">Predictive Analytics in Excel</CardTitle>
              <CardDescription className="text-lg text-purple-700">
                Implement forecasting and prediction models to make data-driven business decisions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Master time series forecasting techniques and trend analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Build sales prediction models using regression analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Implement customer behavior prediction systems</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Create automated forecasting dashboards with confidence intervals</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Apply machine learning algorithms for predictive modeling</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Prerequisites */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-orange-900 mb-4 flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Getting Started - Prerequisites
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-3">📝 Required Setup:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                  <p><strong>Microsoft Excel 2016 or later</strong> with Data Analysis ToolPak enabled</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                  <p><strong>Historical data</strong> (at least 12-24 data points for reliable forecasting)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                  <p><strong>Basic statistics knowledge</strong> (mean, standard deviation, correlation)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                  <p><strong>Understanding of business context</strong> for meaningful predictions</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-3">🔧 Excel Setup Steps:</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>1.</strong> Go to <code className="bg-gray-100 px-2 py-1 rounded">File → Options → Add-ins</code></p>
                <p><strong>2.</strong> Select "Excel Add-ins" and click "Go"</p>
                <p><strong>3.</strong> Check "Analysis ToolPak" and click "OK"</p>
                <p><strong>4.</strong> Verify "Data Analysis" appears in the Data ribbon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Predictive Analytics Overview */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Predictive Analytics Techniques
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <LineChart className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Time Series Forecasting</h4>
                  <p className="text-sm text-gray-600">Predict future values based on historical time-ordered data patterns</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Regression Analysis</h4>
                  <p className="text-sm text-gray-600">Model relationships between variables to predict outcomes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Trend Analysis</h4>
                  <p className="text-sm text-gray-600">Identify patterns and seasonal variations in data</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Calculator className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Statistical Modeling</h4>
                  <p className="text-sm text-gray-600">Apply statistical methods for accurate predictions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Users className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Customer Analytics</h4>
                  <p className="text-sm text-gray-600">Predict customer behavior and lifetime value</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Financial Forecasting</h4>
                  <p className="text-sm text-gray-600">Predict revenue, costs, and financial performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Excel Integration Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-indigo-600" />
            Excel Predictive Analytics Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Built-in Functions</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• FORECAST.LINEAR() for linear trends</li>
                <li>• FORECAST.ETS() for seasonal data</li>
                <li>• TREND() and GROWTH() functions</li>
                <li>• LINEST() for regression analysis</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Data Analysis ToolPak</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regression analysis tools</li>
                <li>• Moving averages</li>
                <li>• Exponential smoothing</li>
                <li>• Correlation analysis</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Power Query & Power Pivot</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Data transformation and modeling</li>
                <li>• DAX functions for calculations</li>
                <li>• Time intelligence functions</li>
                <li>• Advanced data relationships</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">VBA & External APIs</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Custom prediction algorithms</li>
                <li>• Azure Machine Learning integration</li>
                <li>• Python in Excel for ML models</li>
                <li>• Automated forecasting workflows</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            Implementation Tips & Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-3">💡 Pro Tips:</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Data Quality:</strong> Clean and validate data before modeling - remove outliers and handle missing values</p>
                <p><strong>Sample Size:</strong> Use at least 30 data points for reliable predictions, more for seasonal data</p>
                <p><strong>Model Validation:</strong> Always test predictions against known outcomes to measure accuracy</p>
                <p><strong>Confidence Intervals:</strong> Include prediction intervals to communicate uncertainty</p>
                <p><strong>Regular Updates:</strong> Retrain models with new data to maintain accuracy over time</p>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-3">⚠️ Common Pitfalls:</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Overfitting:</strong> Don't create overly complex models that fit noise rather than patterns</p>
                <p><strong>Extrapolation Limits:</strong> Be cautious when predicting far beyond your data range</p>
                <p><strong>Ignoring Seasonality:</strong> Account for seasonal patterns in time series data</p>
                <p><strong>Correlation vs Causation:</strong> Strong correlation doesn't imply causation</p>
                <p><strong>Static Models:</strong> Update models regularly as business conditions change</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Projects */}
      <PredictiveAnalyticsProjects />

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Best Practices for Predictive Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-800 mb-3">✅ Do's</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Start with simple models and add complexity gradually</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Document your modeling assumptions and methodology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Validate models with out-of-sample data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Communicate uncertainty and confidence levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Monitor model performance over time</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-3">❌ Don'ts</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Don't ignore data quality issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Don't use models without understanding their limitations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Don't extrapolate too far beyond your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Don't ignore business context and domain knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Don't treat predictions as certainties</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Brain className="h-5 w-5" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">1</Badge>
              <p className="text-sm"><strong>Predictive analytics transforms historical data into actionable insights</strong> for strategic decision-making and competitive advantage.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">2</Badge>
              <p className="text-sm"><strong>Excel provides powerful built-in tools</strong> for forecasting, regression analysis, and statistical modeling without external software.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">3</Badge>
              <p className="text-sm"><strong>Data quality and model validation are critical</strong> for reliable predictions and business credibility.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">4</Badge>
              <p className="text-sm"><strong>Automated forecasting workflows save time</strong> and ensure consistent, up-to-date predictions for business operations.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">5</Badge>
              <p className="text-sm"><strong>Combining multiple techniques and regular model updates</strong> improves prediction accuracy and business value.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      <div className="flex justify-center pt-6">
        <Button 
          onClick={onContinue}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
        >
          Continue to Next Lesson
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default PredictiveAnalyticsLesson;
