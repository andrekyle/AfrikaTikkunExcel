import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

const WhatIfAnalysisExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  // Sample data strings for the exercise
  const investmentDataCSV = `Project,InitialInvestment,AnnualRevenueMean,AnnualRevenueStdDev,AnnualCostsMean,AnnualCostsStdDev,ProjectLifespan,DiscountRate
Project A,1500000,450000,75000,250000,40000,7,0.08
Project B,950000,320000,50000,180000,30000,5,0.08
Project C,2200000,680000,120000,380000,65000,8,0.08
Project D,1250000,400000,90000,220000,35000,6,0.08`;

  const productLaunchDataCSV = `Scenario,MarketSize,MarketShare,UnitPrice,VariableCostPerUnit,FixedCosts,MarketGrowthRate
Worst Case,500000,0.05,50,30,250000,0.02
Base Case,750000,0.08,55,28,250000,0.05
Best Case,1000000,0.12,60,25,250000,0.08`;

  const loanAnalysisDataCSV = `LoanAmount,InterestRateMean,InterestRateStdDev,TermYears,MonthlyIncomeMean,MonthlyIncomeStdDev,OtherMonthlyDebtMean,OtherMonthlyDebtStdDev
350000,0.0425,0.0050,30,9500,1200,2500,500
275000,0.0400,0.0045,20,9500,1200,2500,500
400000,0.0450,0.0055,30,9500,1200,2500,500`;

  // Handler for copy buttons
  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus({ ...copyStatus, [key]: true });
      setTimeout(() => setCopyStatus({ ...copyStatus, [key]: false }), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      // Fallback for older browsers or when clipboard API fails
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (fallbackError) {
        console.error('Fallback copy failed:', fallbackError);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">What-If Analysis in Excel</h2>
        <p className="text-sm text-muted-foreground">What-If Analysis is a powerful Excel capability that allows you to explore different scenarios, 
          conduct sensitivity analysis, and simulate possible outcomes to support better decision-making. 
          In this exercise, you'll learn advanced techniques including Monte Carlo simulations to model uncertainty 
          and risk in financial decisions, business scenarios, and project planning.
        </p>
      </div>

      {/* Sample Datasets */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Sample Datasets</h3>
        <p className="text-sm text-muted-foreground">Use these sample datasets for the hands-on exercises. Copy each dataset and paste it into separate 
          worksheets in Excel to follow along.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Investment Project Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(investmentDataCSV, "investmentData")}
                >
                  {copyStatus["investmentData"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {investmentDataCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Product Launch Scenarios</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(productLaunchDataCSV, "productLaunchData")}
                >
                  {copyStatus["productLaunchData"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {productLaunchDataCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Mortgage & Loan Analysis</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(loanAnalysisDataCSV, "loanAnalysisData")}
                >
                  {copyStatus["loanAnalysisData"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {loanAnalysisDataCSV}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hands-on Exercise */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Hands-on Exercise: Monte Carlo Simulations and Scenario Analysis</h3>
        <p className="text-sm text-muted-foreground">In this comprehensive exercise, you'll learn how to use Excel's What-If Analysis tools to model uncertainty 
          and make data-driven decisions through scenario planning, sensitivity analysis, and Monte Carlo simulations.
        </p>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Exercise Steps</h4>
            
            <ol className="list-decimal pl-5 space-y-6 text-sm">
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Basic What-If Analysis Tools in Excel</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Goal Seek - Finding input values for desired outcomes:
                    <ul>
                      <li>Set up a simple loan payment model with principal, interest rate, and term</li>
                      <li>Use Data → What-If Analysis → Goal Seek to find what interest rate gives a specific monthly payment</li>
                      <li>Try different scenarios: changing loan amount to fit a budget, adjusting term length for a target payment</li>
                    </ul>
                  </li>
                  <li>Data Tables - Analyzing one or two variable impacts:
                    <ul>
                      <li>Create a one-variable data table to see how different interest rates affect loan payments</li>
                      <li>Build a two-variable data table to analyze how both loan amount and interest rate affect payments</li>
                      <li>Format the results with conditional formatting to highlight affordable scenarios</li>
                    </ul>
                  </li>
                  <li>Scenario Manager - Comparing different business scenarios:
                    <ul>
                      <li>Import the Product Launch Scenarios dataset</li>
                      <li>Create a profit model with formulas for revenue, costs, and profit</li>
                      <li>Use Data → What-If Analysis → Scenario Manager to create worst, base, and best case scenarios</li>
                      <li>Generate a scenario summary report to compare key outcomes across scenarios</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Setting Up for Monte Carlo Simulation</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Understanding Monte Carlo concepts:
                    <ul>
                      <li>Create a worksheet explaining key concepts: random variables, probability distributions, iterations</li>
                      <li>Document the steps for implementing Monte Carlo in Excel</li>
                    </ul>
                  </li>
                  <li>Generating random values from different distributions:
                    <ul>
                      <li>Use RAND() and NORMINV() to generate normally distributed random values</li>
                      <li>Implement LOGNORMINV() for log-normal distributions (e.g., stock prices, real estate values)</li>
                      <li>Create custom distributions using VLOOKUP with RAND()</li>
                    </ul>
                  </li>
                  <li>Creating correlation between random variables:
                    <ul>
                      <li>Generate correlated random variables using Cholesky decomposition (advanced)</li>
                      <li>Set up a simple correlation model using the formula: Z2 = r*Z1 + sqrt(1-r²)*Z3 
                        where Z1 and Z3 are independent standard normal variables and r is correlation</li>
                      <li>Test the correlation using CORREL() function</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Investment Project Monte Carlo Analysis</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Set up the investment model:
                    <ul>
                      <li>Import the Investment Project Data</li>
                      <li>Create a deterministic Net Present Value (NPV) calculation for each project</li>
                      <li>Set up formulas for annual cash flows (Revenue - Costs) and discounting</li>
                    </ul>
                  </li>
                  <li>Create the Monte Carlo simulation:
                    <ul>
                      <li>Set up a table for 1,000 iterations</li>
                      <li>For each iteration, generate random annual revenues and costs using NORM.INV(RAND(), mean, std_dev)</li>
                      <li>Calculate NPV for each iteration</li>
                      <li>Use Data → Data Analysis → Descriptive Statistics to analyze the results</li>
                    </ul>
                  </li>
                  <li>Visualize and interpret the results:
                    <ul>
                      <li>Create a histogram of NPV results (using Data Analysis Toolpak)</li>
                      <li>Calculate the probability of a negative NPV: =COUNTIF(npv_range,"&lt;0")/COUNT(npv_range)</li>
                      <li>Generate percentiles (10th, 50th, 90th) to understand the range of likely outcomes</li>
                      <li>Create a chart comparing the probability of positive NPV across all projects</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Mortgage Affordability Monte Carlo Analysis</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Set up the mortgage model:
                    <ul>
                      <li>Import the Loan Analysis Data</li>
                      <li>Create formulas for monthly payment, total interest paid, and loan-to-income ratio</li>
                      <li>Implement debt-to-income ratio calculation</li>
                    </ul>
                  </li>
                  <li>Create the Monte Carlo simulation:
                    <ul>
                      <li>Set up a table for 1,000 iterations</li>
                      <li>For each iteration, generate random interest rates, monthly income, and other debt</li>
                      <li>Calculate monthly payment and debt-to-income ratio for each iteration</li>
                      <li>Flag iterations where debt-to-income ratio exceeds 36% (standard lending threshold)</li>
                    </ul>
                  </li>
                  <li>Analyze mortgage affordability:
                    <ul>
                      <li>Calculate the probability of exceeding safe debt-to-income ratio for each loan option</li>
                      <li>Create a tornado chart showing sensitivity of monthly payment to each input variable</li>
                      <li>Build a dashboard showing affordability metrics across different loan scenarios</li>
                      <li>Add sliders to adjust key assumptions and see real-time impacts</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Advanced Business Case Monte Carlo Analysis</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Build a comprehensive business model:
                    <ul>
                      <li>Create a 5-year financial projection model with multiple uncertain variables</li>
                      <li>Include market size, market share, pricing, costs, and growth rates</li>
                      <li>Add formulas for revenue, costs, profits, cash flow, and ROI</li>
                    </ul>
                  </li>
                  <li>Set up a sophisticated Monte Carlo simulation:
                    <ul>
                      <li>Create a parameters section with mean, std dev, min, and max for each variable</li>
                      <li>Implement truncated normal distributions to keep values within realistic ranges</li>
                      <li>Add correlation between related variables (e.g., price and market share)</li>
                      <li>Run 5,000 iterations using Data Table or VBA</li>
                    </ul>
                  </li>
                  <li>Create an executive dashboard:
                    <ul>
                      <li>Build probability distributions for key metrics (NPV, IRR, Payback Period)</li>
                      <li>Create a tornado chart showing which variables have the greatest impact on outcomes</li>
                      <li>Add a risk profile chart showing cumulative probability of different profit levels</li>
                      <li>Include a table of recommendations based on simulation results</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Portfolio Optimization with Monte Carlo</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create an investment portfolio model:
                    <ul>
                      <li>Set up historical returns data for different asset classes (stocks, bonds, real estate)</li>
                      <li>Calculate historical mean returns, standard deviations, and correlation matrix</li>
                      <li>Create a portfolio allocation model with adjustable weights</li>
                    </ul>
                  </li>
                  <li>Run a portfolio simulation:
                    <ul>
                      <li>Generate 10,000 random portfolio returns based on historical parameters</li>
                      <li>Use correlation matrix to ensure realistic relationships between asset returns</li>
                      <li>Calculate expected portfolio return and volatility</li>
                      <li>Compute value-at-risk (VaR) metrics at different confidence levels</li>
                    </ul>
                  </li>
                  <li>Optimize portfolio allocation:
                    <ul>
                      <li>Use Solver to find the optimal allocation that maximizes return for a given risk level</li>
                      <li>Generate an efficient frontier by solving for multiple risk levels</li>
                      <li>Create a chart showing the efficient frontier with risk-return trade-offs</li>
                      <li>Build a dashboard allowing users to select their risk tolerance and see recommended allocations</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Sensitivity Analysis Techniques</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Single-factor sensitivity analysis:
                    <ul>
                      <li>Use Data Tables to vary one input at a time and observe the impact on key outputs</li>
                      <li>Create tornado charts to visualize which factors have the greatest impact</li>
                      <li>Calculate elasticity to quantify how sensitive outputs are to each input</li>
                    </ul>
                  </li>
                  <li>Multi-factor sensitivity analysis:
                    <ul>
                      <li>Use two-variable Data Tables to see interaction effects between inputs</li>
                      <li>Create heat maps to visualize outcomes across different combination of inputs</li>
                      <li>Apply conditional formatting to highlight critical thresholds</li>
                    </ul>
                  </li>
                  <li>Scenario analysis integration:
                    <ul>
                      <li>Use Monte Carlo results to define realistic ranges for Scenario Manager</li>
                      <li>Create scenarios for key risk points identified in sensitivity analysis</li>
                      <li>Build a comprehensive reporting dashboard integrating Monte Carlo, sensitivity analysis, and scenario planning</li>
                      <li>Add interactive controls to allow stakeholders to explore different assumptions</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Advanced Excel Techniques for Simulation</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Automating Monte Carlo with VBA (optional):
                    <ul>
                      <li>Create a simple macro to run a Monte Carlo simulation with any number of iterations</li>
                      <li>Add progress indicators and result storage</li>
                      <li>Build a user form to input simulation parameters</li>
                    </ul>
                  </li>
                  <li>Using array formulas for efficiency:
                    <ul>
                      <li>Implement array formulas to generate multiple random values simultaneously</li>
                      <li>Use array operations to perform calculations across all iterations at once</li>
                      <li>Leverage FREQUENCY and PERCENTILE.INC as array formulas for faster analysis</li>
                    </ul>
                  </li>
                  <li>Advanced visualization of simulation results:
                    <ul>
                      <li>Create custom histogram charts with overlaid normal distribution curves</li>
                      <li>Build box-and-whisker plots to show distribution characteristics</li>
                      <li>Create dynamic charts that update when simulation parameters change</li>
                      <li>Implement interactive filters to explore subsets of simulation results</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* What-If Analysis Reference */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">What-If Analysis Reference Guide</h3>
        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Excel What-If Analysis Tools</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Goal Seek:</strong>
                  Find the input value needed to achieve a specific output target in a single formula</li>
            <li><strong>Data Tables:</strong>
                  Create tables showing how changing one or two variables affects a formula result</li>
            <li><strong>Scenario Manager:</strong>
                  Create and save multiple sets of input values and switch between them</li>
            <li><strong>Solver Add-in:</strong>
                  Find optimal solutions subject to constraints, useful for optimization problems</li>
            <li><strong>Analysis ToolPak:</strong>
                  Additional statistical and analytical tools including histogram, correlation, and regression</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Monte Carlo Simulation Concepts</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Random Variable:</strong>
                  A variable whose value is subject to variations due to chance</li>
            <li><strong>Probability Distribution:</strong>
                  The mathematical function that gives the probabilities of different outcomes</li>
            <li><strong>Normal Distribution:</strong>
                  Bell-shaped distribution defined by mean and standard deviation</li>
            <li><strong>Lognormal Distribution:</strong>
                  Distribution whose logarithm follows a normal distribution, common for prices</li>
            <li><strong>Triangular Distribution:</strong>
                  Defined by minimum, most likely, and maximum values</li>
            <li><strong>Correlation:</strong>
                  Statistical relationship between two random variables</li>
            <li><strong>Iteration:</strong>
                  A single run of the simulation with randomly generated input values</li>
            <li><strong>Simulation:</strong>
                  Running many iterations to approximate the probability distribution of outcomes</li>
            <li><strong>Confidence Interval:</strong>
                  Range of values that is likely to contain the true value with a certain probability</li>
            <li><strong>Value at Risk (VaR):</strong>
                  Maximum potential loss within a given confidence level</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Excel Functions for Simulation</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>RAND():</strong>
                  Generates a random number between 0 and 1</li>
            <li><strong>RANDBETWEEN(bottom, top):</strong>
                  Generates a random integer between specified values</li>
            <li><strong>NORM.INV(probability, mean, standard_dev):</strong>
                  Returns the inverse of the normal distribution</li>
            <li><strong>NORM.DIST(x, mean, standard_dev, cumulative):</strong>
                  Returns the normal distribution</li>
            <li><strong>LOGNORM.INV(probability, mean, standard_dev):</strong>
                  Returns the inverse of the lognormal distribution</li>
            <li><strong>PERCENTILE.INC(array, k):</strong>
                  Returns the k-th percentile of values in a range</li>
            <li><strong>FREQUENCY(data_array, bins_array):</strong>
                  Returns a frequency distribution as a vertical array</li>
            <li><strong>COUNTIF(range, criteria):</strong>
                  Counts cells that meet a specified condition</li>
            <li><strong>AVERAGEIF(range, criteria, [average_range]):</strong>
                  Averages values that meet a specified condition</li>
            <li><strong>STDEV.P(number1, [number2], ...):</strong>
                  Calculates standard deviation based on the entire population</li>
            <li><strong>CORREL(array1, array2):</strong>
                  Returns the correlation coefficient between two data sets</li>
            <li><strong>NPV(rate, value1, [value2], ...):</strong>
                  Returns the net present value of an investment</li>
            <li><strong>IRR(values, [guess]):</strong>
                  Returns the internal rate of return for a series of cash flows</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Best Practices for What-If Analysis</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Document Assumptions:</strong>
                  Clearly document all assumptions and sources for input parameters</li>
            <li><strong>Use Realistic Distributions:</strong>
                  Choose probability distributions that accurately reflect real-world behavior</li>
            <li><strong>Consider Correlations:</strong>
                  Account for relationships between variables to avoid unrealistic scenarios</li>
            <li><strong>Run Sufficient Iterations:</strong>
                  More iterations provide more precise results, typically 1,000+ for basic and 10,000+ for critical decisions</li>
            <li><strong>Validate the Model:</strong>
                  Test the model against historical data or known outcomes when possible</li>
            <li><strong>Focus on Insights:</strong>
                  Use simulation results to gain insights, not just precise predictions</li>
            <li><strong>Present Results Effectively:</strong>
                  Use clear visualizations and summarize key probabilities</li>
            <li><strong>Perform Sensitivity Analysis:</strong>
                  Determine which inputs have the biggest impact on outcomes</li>
            <li><strong>Structure Spreadsheets Clearly:</strong>
                  Separate inputs, calculations, and outputs for clarity</li>
            <li><strong>Use Scenario Manager:</strong>
                  Save important scenarios for key decision points</li>
            <li><strong>Include Risk Metrics:</strong>
                  Report not just expected values but also measures of risk and uncertainty</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatIfAnalysisExercise;
