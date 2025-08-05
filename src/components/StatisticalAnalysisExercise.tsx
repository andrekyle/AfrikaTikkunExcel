import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

const StatisticalAnalysisExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  // Sample data strings for the exercise
  const salesPerformanceCSV = `Region,SalesRep,Experience,TrainingHours,LeadCount,ConversionRate,SalesAmount,CustomerSatisfaction
North,Rep1,3,25,85,0.18,125000,4.2
North,Rep2,5,40,92,0.22,145000,4.5
North,Rep3,2,15,78,0.14,85000,3.9
North,Rep4,7,30,110,0.25,175000,4.7
South,Rep5,4,35,95,0.21,140000,4.3
South,Rep6,6,45,105,0.23,155000,4.6
South,Rep7,1,10,70,0.12,65000,3.7
South,Rep8,8,50,120,0.27,190000,4.8
East,Rep9,3,20,80,0.17,115000,4.0
East,Rep10,5,35,90,0.20,135000,4.4
East,Rep11,2,15,75,0.15,95000,3.8
East,Rep12,6,40,100,0.24,160000,4.6
West,Rep13,4,30,90,0.19,130000,4.2
West,Rep14,7,45,115,0.26,180000,4.7
West,Rep15,1,10,65,0.11,60000,3.6
West,Rep16,9,55,125,0.29,210000,4.9`;

  const marketingCampaignCSV = `CampaignID,Channel,Budget,Impressions,Clicks,Conversions,Revenue,ROI
C001,Social,15000,250000,7500,375,45000,3.0
C002,Email,8000,120000,6000,480,52000,6.5
C003,Search,25000,180000,9000,720,86000,3.44
C004,Display,12000,300000,4500,270,38000,3.17
C005,Social,18000,275000,8250,495,59000,3.28
C006,Email,10000,150000,7500,600,65000,6.5
C007,Search,30000,220000,11000,880,105000,3.5
C008,Display,14000,350000,5250,315,44000,3.14
C009,Social,20000,300000,9000,540,64000,3.2
C010,Email,12000,180000,9000,720,78000,6.5
C011,Search,35000,260000,13000,1040,124000,3.54
C012,Display,16000,400000,6000,360,50000,3.13`;

  const productMetricsCSV = `ProductID,Category,Price,ProductionCost,ShippingWeight,InventoryTurnover,DefectRate,CustomerRating
P001,Electronics,499.99,275.50,2.3,5.2,0.02,4.3
P002,Electronics,799.99,440.00,3.5,4.8,0.015,4.5
P003,Accessories,49.99,12.50,0.5,7.5,0.01,4.7
P004,Furniture,349.99,175.00,25.0,2.1,0.03,4.1
P005,Electronics,599.99,330.00,2.8,5.0,0.018,4.4
P006,Accessories,29.99,7.50,0.3,8.2,0.008,4.6
P007,Furniture,499.99,250.00,32.0,1.9,0.035,4.0
P008,Electronics,999.99,550.00,4.2,4.5,0.012,4.6
P009,Accessories,79.99,20.00,0.8,7.0,0.011,4.5
P010,Furniture,699.99,350.00,45.0,1.7,0.04,3.9
P011,Electronics,1299.99,715.00,5.0,4.2,0.01,4.7
P012,Accessories,99.99,25.00,1.0,6.8,0.012,4.4
P013,Furniture,899.99,450.00,55.0,1.5,0.045,3.8
P014,Electronics,1499.99,825.00,5.5,4.0,0.008,4.8
P015,Accessories,129.99,32.50,1.2,6.5,0.014,4.3`;

  // Handler for copy buttons
  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus({ ...copyStatus, [key]: true });
    setTimeout(() => setCopyStatus({ ...copyStatus, [key]: false }), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Statistical Analysis in Excel</h2>
        <p className="text-sm text-muted-foreground">Excel offers powerful statistical tools for data analysis, from basic descriptive statistics to complex 
          regression analysis and hypothesis testing. This exercise will guide you through performing statistical 
          analysis on business data to derive meaningful insights and make data-driven decisions.
        </p>
      </div>

      {/* Sample Datasets */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Sample Datasets</h3>
        <p className="text-sm text-muted-foreground">Use these sample datasets for the hands-on exercises. Copy each dataset and paste it into separate 
          CSV files or directly into Excel to follow along.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Sales Performance Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(salesPerformanceCSV, "salesPerformance")}
                >
                  {copyStatus["salesPerformance"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {salesPerformanceCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Marketing Campaign Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(marketingCampaignCSV, "marketingCampaign")}
                >
                  {copyStatus["marketingCampaign"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {marketingCampaignCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Product Metrics Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(productMetricsCSV, "productMetrics")}
                >
                  {copyStatus["productMetrics"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {productMetricsCSV}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hands-on Exercise */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Hands-on Exercise: Perform Statistical Analysis on Real Data</h3>
        <p className="text-sm text-muted-foreground">In this exercise, you'll apply various statistical analysis methods to extract insights from business data, 
          including correlation analysis, regression modeling, and hypothesis testing.
        </p>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Exercise Steps</h4>
            <ol className="list-decimal pl-5 space-y-3 text-sm">
              <li><strong >Descriptive Statistics Analysis:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li >Import the Sales Performance dataset into Excel</li>
                  <li >Calculate basic descriptive statistics:
                    <ul>
                      <li >Use the Data Analysis ToolPak (if not enabled, go to File → Options → Add-ins → Excel Add-ins → Analysis ToolPak)</li>
                      <li >Select Data → Data Analysis → Descriptive Statistics</li>
                      <li >Select your data range, check "Summary statistics" and "Output Range"</li>
                      <li >Analyze the mean, median, standard deviation, and range for each numerical column</li>
                    </ul>
                  </li>
                  <li >Create a histogram for the SalesAmount column:
                    <ul>
                      <li >Data → Data Analysis → Histogram</li>
                      <li >Set the input range and bin range (create bins in 25,000 increments)</li>
                      <li >Check "Chart Output" to visualize the distribution</li>
                      <li >Format the histogram to make it visually appealing</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong >Correlation Analysis:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li >Identify relationships between variables:
                    <ul>
                      <li >Data → Data Analysis → Correlation</li>
                      <li >Select all numerical columns from the Sales Performance dataset</li>
                      <li >Check "Labels in first row" and set an output range</li>
                    </ul>
                  </li>
                  <li >Create a correlation heatmap:
                    <ul>
                      <li >Apply conditional formatting to the correlation matrix (Home → Conditional Formatting → Color Scales)</li>
                      <li >Choose a color scale that highlights strong positive (close to 1) and negative (close to -1) correlations</li>
                    </ul>
                  </li>
                  <li >Interpret key relationships:
                    <ul>
                      <li >Identify the strongest positive and negative correlations</li>
                      <li >Create a scatter plot for Experience vs. ConversionRate:</li>
                      <li >Insert → Scatter chart → Select data for the two variables</li>
                      <li >Add a trendline (Right-click on data points → Add Trendline)</li>
                      <li >Check "Display Equation on chart" and "Display R-squared value on chart"</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong >Regression Analysis:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li >Build a multiple regression model for SalesAmount:
                    <ul>
                      <li >Data → Data Analysis → Regression</li>
                      <li >Set Y Range as SalesAmount column</li>
                      <li >Set X Range as Experience, TrainingHours, LeadCount, and ConversionRate columns</li>
                      <li >Check "Labels" and "Residuals"</li>
                    </ul>
                  </li>
                  <li >Analyze the regression output:
                    <ul>
                      <li >Examine R Square to determine model fit</li>
                      <li >Check p-values for each variable to determine significance (p &lt; 0.05 is generally considered significant)</li>
                      <li >Interpret coefficients to understand the impact of each variable on sales</li>
                      <li >Create a residual plot to check for patterns or heteroscedasticity</li>
                    </ul>
                  </li>
                  <li >Build a prediction model:
                    <ul>
                      <li >Create a new section for "Sales Prediction"</li>
                      <li >Set up input cells for Experience, TrainingHours, LeadCount, and ConversionRate</li>
                      <li >Use the regression equation to create a formula that predicts SalesAmount based on these inputs</li>
                      <li >Test the model with different input values</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong >Hypothesis Testing:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li >Test if training hours impact conversion rates:
                    <ul>
                      <li >Create two groups: Sales reps with ≤25 training hours and {'>'} 25 training hours</li>
                      <li >Set up a hypothesis test:</li>
                      <li >H₀: There is no significant difference in conversion rates between the two groups</li>
                      <li >H₁: Sales reps with more training hours have higher conversion rates</li>
                      <li >Perform a t-Test: Data → Data Analysis → t-Test: Two-Sample Assuming Unequal Variances</li>
                      <li >Set up Variable 1 and Variable 2 ranges with the conversion rates for both groups</li>
                      <li >Set alpha = 0.05</li>
                      <li >Interpret the results: If p-value &lt; 0.05, reject the null hypothesis</li>
                    </ul>
                  </li>
                  <li >Compare sales performance across regions:
                    <ul>
                      <li >Data → Data Analysis → ANOVA: Single Factor</li>
                      <li >Group the sales data by Region</li>
                      <li >Set up the input range with all regions' SalesAmount data</li>
                      <li >Check "Labels in first row" and set output range</li>
                      <li >Interpret the results: If p-value &lt; 0.05, at least one region has significantly different sales</li>
                      <li >If ANOVA shows significance, perform post-hoc t-tests between pairs of regions to identify which ones differ</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong >Advanced Analysis with the Marketing Campaign Data:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li >Compare ROI across marketing channels:
                    <ul>
                      <li >Import the Marketing Campaign dataset</li>
                      <li >Create a PivotTable: Insert → PivotTable</li>
                      <li >Add Channel to Rows and ROI to Values (set to Average)</li>
                      <li >Create a column chart to visualize the average ROI by channel</li>
                      <li >Perform an ANOVA test to determine if differences are statistically significant</li>
                    </ul>
                  </li>
                  <li >Analyze the relationship between Budget and Revenue:
                    <ul>
                      <li >Create a scatter plot with Budget on x-axis and Revenue on y-axis</li>
                      <li >Add a trendline and display R² value</li>
                      <li >Calculate the correlation coefficient using CORREL function</li>
                      <li >Perform regression analysis to determine if Budget is a significant predictor of Revenue</li>
                      <li >Find the optimal Budget allocation using Solver or Goal Seek</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong >Practical Application with the Product Metrics Data:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li >Build a product rating prediction model:
                    <ul>
                      <li >Import the Product Metrics dataset</li>
                      <li >Perform correlation analysis between CustomerRating and other variables</li>
                      <li >Build a multiple regression model with CustomerRating as the dependent variable</li>
                      <li >Identify the most significant factors affecting customer ratings</li>
                      <li >Create a dashboard that predicts the expected rating for a new product based on its attributes</li>
                    </ul>
                  </li>
                  <li >Analyze price elasticity:
                    <ul>
                      <li >Create additional columns for Profit Margin and Price-to-Cost Ratio</li>
                      <li >Perform regression analysis to understand the relationship between Price and InventoryTurnover</li>
                      <li >Calculate price elasticity using Excel formulas</li>
                      <li >Create a dynamic chart that shows the optimal price point based on elasticity</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong >Final Analysis Report:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li >Create a summary dashboard with key findings:
                    <ul>
                      <li >Key correlations discovered</li>
                      <li >Regression model accuracy and significant predictors</li>
                      <li >Results of hypothesis tests</li>
                      <li >Visualizations of the most important relationships</li>
                    </ul>
                  </li>
                  <li >Document actionable insights:
                    <ul>
                      <li >Recommended training hours based on ROI</li>
                      <li >Optimal marketing budget allocation by channel</li>
                      <li >Product improvement priorities based on statistical significance</li>
                      <li >Regional sales strategy recommendations</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Statistical Analysis Tools Overview */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">Statistical Analysis Tools in Excel</h3>
        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Key Excel Statistical Features</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong >Data Analysis ToolPak:</strong>
                  Add-in with comprehensive statistical tools</li>
            <li><strong >Descriptive Statistics:</strong>
                  Mean, median, mode, standard deviation, variance, kurtosis, skewness</li>
            <li><strong >Correlation Analysis:</strong>
                  Pearson correlation coefficient, covariance</li>
            <li><strong >Regression Analysis:</strong>
                  Linear regression, multiple regression, residual analysis</li>
            <li><strong >Hypothesis Testing:</strong>
                  t-tests, z-tests, ANOVA, chi-square tests</li>
            <li><strong >Distribution Analysis:</strong>
                  Histograms, normal probability plots, frequency distributions</li>
            <li><strong >Time Series Analysis:</strong>
                  Moving averages, exponential smoothing, forecasting</li>
            <li><strong >Statistical Functions:</strong>
                  Over 100 built-in statistical functions like CORREL, STDEV.P, TDIST</li>
            <li><strong >Data Visualization:</strong>
                  Box plots, scatter plots, histograms, QQ plots</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Statistical Concepts</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong >Correlation vs. Causation:</strong>
                  Correlation indicates relationship strength but doesn't prove causation</li>
            <li><strong >Statistical Significance:</strong>
                  p-value &lt; 0.05 generally indicates significant results</li>
            <li><strong >R-squared:</strong>
                  Measures how well a regression model explains variability (0-1 scale)</li>
            <li><strong >Type I Error:</strong>
                  Rejecting a true null hypothesis (false positive)</li>
            <li><strong >Type II Error:</strong>
                  Failing to reject a false null hypothesis (false negative)</li>
            <li><strong >Statistical Power:</strong>
                  Probability of detecting an effect when it exists</li>
            <li><strong >Confidence Intervals:</strong>
                  Range of values likely to contain the true population parameter</li>
            <li><strong >Outlier Analysis:</strong>
                  Identifying and handling data points that differ significantly from others</li>
            <li><strong >Multicollinearity:</strong>
                  High correlation between independent variables that affects regression models</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Best Practices</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong >Data Cleaning:</strong>
                  Remove or address outliers, missing values, and errors before analysis</li>
            <li><strong >Assumption Testing:</strong>
                  Verify statistical test assumptions (normality, homogeneity of variance, etc.)</li>
            <li><strong >Visualization:</strong>
                  Always visualize your data alongside statistical tests</li>
            <li><strong >Effect Size:</strong>
                  Consider practical significance, not just statistical significance</li>
            <li><strong >Sample Size:</strong>
                  Ensure adequate sample sizes for reliable statistical inference</li>
            <li><strong >Documentation:</strong>
                  Document all statistical methods, formulas, and interpretations</li>
            <li><strong >Multiple Testing:</strong>
                  Apply corrections (e.g., Bonferroni) when performing multiple hypothesis tests</li>
            <li><strong >Model Validation:</strong>
                  Test regression models on new data to ensure generalizability</li>
            <li><strong >Interpretation:</strong>
                  Translate statistical findings into actionable business insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatisticalAnalysisExercise;
