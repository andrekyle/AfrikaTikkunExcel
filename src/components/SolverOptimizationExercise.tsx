import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Copy } from "lucide-react";

const SolverOptimizationExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  // Sample data strings for the exercise
  const productionPlanningDataCSV = `Product,Profit,Labor_Hours,Material_A,Material_B,Min_Production,Max_Production
Widget A,25,2,3,2,100,1000
Widget B,30,3,2,4,80,700
Widget C,40,4,3,2,50,600
Widget D,50,5,5,1,30,300
Resource Limit,,2000,3000,1500,,`;

  const transportationDataCSV = `Costs,Warehouse 1,Warehouse 2,Warehouse 3,Supply
Factory A,10,12,8,250
Factory B,7,9,15,400
Factory C,14,8,10,300
Demand,200,350,400,`;

  const portfolioDataCSV = `Investment,Expected_Return,Risk_Level,Min_Allocation,Max_Allocation
Stocks,0.12,0.20,0.10,0.60
Bonds,0.07,0.08,0.20,0.70
Real Estate,0.09,0.15,0.05,0.30
Commodities,0.11,0.25,0.00,0.20
Cash,0.03,0.01,0.05,0.25`;

  const staffingScheduleCSV = `Day,Shift_A_Need,Shift_B_Need,Shift_C_Need
Monday,15,20,10
Tuesday,18,22,12
Wednesday,20,25,10
Thursday,17,23,15
Friday,25,28,18
Saturday,30,35,20
Sunday,10,15,8`;

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
        <h2 className="text-xl font-semibold">Solver & Optimization in Excel</h2>
        <p className="text-sm text-muted-foreground">Excel's Solver add-in is a powerful tool for solving complex optimization problems, including linear programming, 
          integer programming, and non-linear optimization. This exercise will teach you how to formulate and solve 
          optimization problems to find the best solution when there are multiple constraints and competing objectives.
          You'll learn to maximize profits, minimize costs, optimize resource allocation, and solve real-world business problems.
        </p>
      </div>

      {/* Sample Datasets */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Sample Datasets</h3>
        <p className="text-sm text-muted-foreground">Use these sample datasets for the hands-on exercises. Copy each dataset and paste it into separate 
          worksheets in Excel to follow along with the optimization scenarios.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Production Planning Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(productionPlanningDataCSV, "productionPlanningData")}
                >
                  {copyStatus.productionPlanningData ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {productionPlanningDataCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Transportation Optimization Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(transportationDataCSV, "transportationData")}
                >
                  {copyStatus.transportationData ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {transportationDataCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Investment Portfolio Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(portfolioDataCSV, "portfolioData")}
                >
                  {copyStatus.portfolioData ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {portfolioDataCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Staff Scheduling Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(staffingScheduleCSV, "staffingScheduleData")}
                >
                  {copyStatus.staffingScheduleData ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {staffingScheduleCSV}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hands-on Exercise */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Hands-on Exercise: Linear Programming and Optimization</h3>
        <p className="text-sm text-muted-foreground">Follow these exercises to learn how to set up and solve various optimization problems using Excel's Solver add-in.
        </p>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Exercise Steps</h4>
            
            <ol className="list-decimal pl-5 space-y-6 text-sm">
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Getting Started with Excel Solver</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Installing and enabling the Solver add-in:
                    <ul>
                      <li>Go to File → Options → Add-ins → Manage: Excel Add-ins → Go</li>
                      <li>Check the box next to "Solver Add-in" and click OK</li>
                      <li>Verify Solver appears in the Data tab in the Analysis group</li>
                    </ul>
                  </li>
                  <li>Understanding Solver components:
                    <ul>
                      <li>Set up a simple model with a target cell (objective)</li>
                      <li>Identify decision variables (cells you want Solver to adjust)</li>
                      <li>Define constraints (limitations on possible solutions)</li>
                      <li>Learn about solving methods: Simplex LP, GRG Nonlinear, and Evolutionary</li>
                    </ul>
                  </li>
                  <li>Creating a simple optimization model:
                    <ul>
                      <li>Set up a basic profit calculation with two products</li>
                      <li>Define constraints on available resources</li>
                      <li>Use Solver to maximize profit within constraints</li>
                      <li>Interpret the solution and sensitivity report</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Production Planning Optimization</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Setting up the production planning model:
                    <ul>
                      <li>Import the Production Planning data into Excel</li>
                      <li>Create a range for decision variables (how many of each product to make)</li>
                      <li>Set up formulas for resource usage (labor hours, materials)</li>
                      <li>Create a profit calculation formula</li>
                    </ul>
                  </li>
                  <li>Defining the constraints:
                    <ul>
                      <li>Add constraints for maximum available resources</li>
                      <li>Add minimum and maximum production requirements</li>
                      <li>Ensure all production quantities are non-negative</li>
                      <li>Add integer constraints if products can only be produced in whole units</li>
                    </ul>
                  </li>
                  <li>Solving the model:
                    <ul>
                      <li>Open Solver from the Data tab</li>
                      <li>Set objective to maximize profit</li>
                      <li>Select the decision variable cells</li>
                      <li>Add all constraints to the model</li>
                      <li>Select Simplex LP as the solving method</li>
                      <li>Solve and analyze the optimal production quantities</li>
                    </ul>
                  </li>
                  <li>Analyzing the Solver reports:
                    <ul>
                      <li>Generate and interpret the Answer Report</li>
                      <li>Examine the Sensitivity Report to understand shadow prices</li>
                      <li>Identify binding constraints and their impact on the solution</li>
                      <li>Calculate how much you would pay for additional resources</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Transportation Optimization Problem</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Setting up the transportation model:
                    <ul>
                      <li>Import the Transportation Optimization data</li>
                      <li>Create a matrix for decision variables (shipment quantities)</li>
                      <li>Set up formulas for total shipping cost</li>
                      <li>Create formulas to sum supply used from each factory</li>
                      <li>Create formulas to sum demand fulfilled at each warehouse</li>
                    </ul>
                  </li>
                  <li>Defining the transportation constraints:
                    <ul>
                      <li>Add constraints to ensure total shipments from each factory don't exceed supply</li>
                      <li>Add constraints to ensure demand at each warehouse is exactly met</li>
                      <li>Ensure all shipment quantities are non-negative</li>
                    </ul>
                  </li>
                  <li>Solving the transportation problem:
                    <ul>
                      <li>Set objective to minimize total transportation cost</li>
                      <li>Select the decision variables (shipment matrix)</li>
                      <li>Add all constraints to the model</li>
                      <li>Choose Simplex LP as the solving method</li>
                      <li>Solve and review the optimal shipping plan</li>
                    </ul>
                  </li>
                  <li>Exploring variations of the transportation problem:
                    <ul>
                      <li>Add capacity constraints for specific routes</li>
                      <li>Modify for cases where demand exceeds supply</li>
                      <li>Add fixed costs for using certain routes</li>
                      <li>Implement multi-period transportation planning</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Investment Portfolio Optimization</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Setting up the portfolio optimization model:
                    <ul>
                      <li>Import the Investment Portfolio data</li>
                      <li>Create a range for decision variables (allocation percentages)</li>
                      <li>Set up formulas for total expected return</li>
                      <li>Create a formula for portfolio risk (optional: use a covariance matrix for more realism)</li>
                    </ul>
                  </li>
                  <li>Defining portfolio constraints:
                    <ul>
                      <li>Add constraint that allocation percentages sum to 100%</li>
                      <li>Add minimum and maximum allocation constraints for each investment</li>
                      <li>Add constraint on maximum acceptable portfolio risk</li>
                      <li>Ensure all allocations are non-negative</li>
                    </ul>
                  </li>
                  <li>Solving for optimal allocation:
                    <ul>
                      <li>Set objective to maximize total expected return</li>
                      <li>Select the allocation percentages as decision variables</li>
                      <li>Add all constraints to the model</li>
                      <li>Solve using GRG Nonlinear method (for complex risk formulas) or Simplex LP</li>
                      <li>Review the optimal allocation strategy</li>
                    </ul>
                  </li>
                  <li>Creating an efficient frontier:
                    <ul>
                      <li>Use a data table to run Solver multiple times with different risk constraints</li>
                      <li>Plot the risk-return tradeoff curve</li>
                      <li>Identify the optimal portfolio based on risk tolerance</li>
                      <li>Discuss implications for investment strategy</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Workforce Scheduling Optimization</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Setting up the staff scheduling model:
                    <ul>
                      <li>Import the Staff Scheduling data</li>
                      <li>Create a matrix for staff assignments (rows: days, columns: shifts)</li>
                      <li>Set up formulas for total staffing cost</li>
                      <li>Create formulas to calculate total staff per shift per day</li>
                    </ul>
                  </li>
                  <li>Defining scheduling constraints:
                    <ul>
                      <li>Add constraints to ensure minimum staff requirements are met for each shift</li>
                      <li>Add constraints for maximum consecutive working days</li>
                      <li>Add constraints for required rest periods between shifts</li>
                      <li>Ensure each employee works the required number of shifts per week</li>
                      <li>Add binary constraints (0 or 1) for staff assignments</li>
                    </ul>
                  </li>
                  <li>Solving the scheduling problem:
                    <ul>
                      <li>Set objective to minimize total staffing cost</li>
                      <li>Select the staff assignment matrix as decision variables</li>
                      <li>Add all constraints to the model</li>
                      <li>Use the Evolutionary method for this complex integer problem</li>
                      <li>Solve and review the optimal staff schedule</li>
                    </ul>
                  </li>
                  <li>Enhancing the scheduling model:
                    <ul>
                      <li>Add employee preferences for shifts</li>
                      <li>Include different pay rates for different shifts</li>
                      <li>Add overtime cost considerations</li>
                      <li>Implement rolling horizon scheduling</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Advanced Linear Programming Techniques</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Multi-objective optimization:
                    <ul>
                      <li>Create a model with multiple competing objectives (e.g., profit vs. environmental impact)</li>
                      <li>Use the weighted sum approach to combine objectives</li>
                      <li>Analyze trade-offs by varying the weights</li>
                      <li>Generate Pareto-optimal solutions</li>
                    </ul>
                  </li>
                  <li>Handling binary and integer variables:
                    <ul>
                      <li>Formulate a capital budgeting problem with yes/no project decisions</li>
                      <li>Add constraints for mutually exclusive projects</li>
                      <li>Add precedence constraints between related projects</li>
                      <li>Solve using Simplex LP with integer constraints</li>
                    </ul>
                  </li>
                  <li>Using Solver for network optimization:
                    <ul>
                      <li>Set up a shortest path problem</li>
                      <li>Formulate a maximum flow network problem</li>
                      <li>Create a minimum spanning tree problem</li>
                      <li>Solve each network problem and interpret the results</li>
                    </ul>
                  </li>
                  <li>Solving assignment problems:
                    <ul>
                      <li>Create a worker-to-task assignment model</li>
                      <li>Add binary constraints for assignments</li>
                      <li>Ensure each worker is assigned to exactly one task</li>
                      <li>Ensure each task is assigned to exactly one worker</li>
                      <li>Solve to minimize total cost or maximize total productivity</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Non-linear Optimization Problems</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Understanding non-linear programming:
                    <ul>
                      <li>Identify when problems are non-linear (e.g., quadratic objectives, product constraints)</li>
                      <li>Learn about convex vs. non-convex optimization</li>
                      <li>Understand limitations and challenges of non-linear problems</li>
                    </ul>
                  </li>
                  <li>Setting up non-linear models:
                    <ul>
                      <li>Create a pricing optimization model with price elasticity (non-linear demand)</li>
                      <li>Set up a chemical blending problem with non-linear property relationships</li>
                      <li>Formulate a production model with diminishing returns</li>
                    </ul>
                  </li>
                  <li>Solving with GRG Nonlinear method:
                    <ul>
                      <li>Configure GRG Nonlinear options for convergence and precision</li>
                      <li>Use multiple starting points to avoid local optima</li>
                      <li>Interpret convergence messages and solution quality</li>
                      <li>Analyze the sensitivity of the solution</li>
                    </ul>
                  </li>
                  <li>Advanced non-linear applications:
                    <ul>
                      <li>Create a curve fitting model using least squares optimization</li>
                      <li>Develop a logistics fleet sizing model with economies of scale</li>
                      <li>Build an optimal control model for inventory management</li>
                      <li>Implement a financial derivative pricing model</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li className="bg-slate-100 dark:bg-slate-800/30 p-3 rounded">
                <strong className="block text-sm font-medium mb-1">Sensitivity Analysis and Scenario Management</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Understanding sensitivity reports:
                    <ul>
                      <li>Interpret reduced costs and shadow prices</li>
                      <li>Analyze allowable increases and decreases</li>
                      <li>Identify binding and non-binding constraints</li>
                      <li>Determine the economic value of additional resources</li>
                    </ul>
                  </li>
                  <li>Performing what-if analysis with Solver:
                    <ul>
                      <li>Save multiple Solver scenarios using SolverTable add-in or manual approach</li>
                      <li>Use data tables to analyze sensitivity to key parameters</li>
                      <li>Create tornado diagrams to visualize sensitivity</li>
                      <li>Build a dashboard to interactively explore scenarios</li>
                    </ul>
                  </li>
                  <li>Handling uncertainty in optimization models:
                    <ul>
                      <li>Implement scenario analysis for different market conditions</li>
                      <li>Use robust optimization approaches to handle parameter uncertainty</li>
                      <li>Add safety margins to constraints to account for variability</li>
                      <li>Combine optimization with Monte Carlo simulation for stochastic modeling</li>
                    </ul>
                  </li>
                  <li>Advanced reporting techniques:
                    <ul>
                      <li>Create custom reports summarizing optimization results</li>
                      <li>Build interactive visualizations of the solution</li>
                      <li>Develop a decision support dashboard</li>
                      <li>Implement automated sensitivity analysis using VBA</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Solver & Optimization Reference */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">Solver & Optimization Reference</h3>
        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Linear Programming Concepts</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Objective Function:</strong>
                  The quantity to be maximized or minimized (profit, cost, etc.)</li>
            <li><strong>Decision Variables:</strong>
                  Unknown quantities that Solver will determine</li>
            <li><strong>Constraints:</strong>
                  Limitations on possible values of decision variables</li>
            <li><strong>Binding Constraint:</strong>
                  A constraint that limits the optimal solution</li>
            <li><strong>Shadow Price:</strong>
                  The marginal value of relaxing a constraint</li>
            <li><strong>Reduced Cost:</strong>
                  The amount by which a coefficient must improve before a variable enters the solution</li>
            <li><strong>Feasible Region:</strong>
                  The set of all possible solutions that satisfy all constraints</li>
            <li><strong>Optimal Solution:</strong>
                  The feasible solution that maximizes or minimizes the objective function</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Excel Solver Parameters</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Set Objective:</strong>
                  The target cell to maximize, minimize, or set to a specific value</li>
            <li><strong>By Changing Variable Cells:</strong>
                  The cells that Solver can adjust to find the solution</li>
            <li><strong>Subject to the Constraints:</strong>
                  Limitations that must be satisfied</li>
            <li><strong>Making Unconstrained Variables Non-Negative:</strong>
                  Forces variables to be </li>
            <li><strong>Solving Method:</strong>
                  Algorithm used to solve the problem:
              <ul>
                <li><em >Simplex LP:</em>
                  For linear problems</li>
                <li><em >GRG Nonlinear:</em>
                  For smooth nonlinear problems</li>
                <li><em >Evolutionary:</em>
                  For non-smooth problems or those with many integer constraints</li>
              </ul>
            </li>
            <li><strong>Solver Options:</strong>
                  Settings for precision, iterations, and other algorithm controls</li>
            <li><strong>Solver Reports:</strong>
                  Answer, Sensitivity, and Limits reports for analysis</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Common Types of Optimization Problems</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Resource Allocation:</strong>
                  Distributing limited resources to maximize return</li>
            <li><strong>Blending:</strong>
                  Mixing ingredients to meet requirements at minimum cost</li>
            <li><strong>Transportation:</strong>
                  Moving goods from origins to destinations at minimum cost</li>
            <li><strong>Assignment:</strong>
                  Matching tasks to resources optimally</li>
            <li><strong>Production Planning:</strong>
                  Determining optimal production quantities</li>
            <li><strong>Portfolio Optimization:</strong>
                  Allocating investments to balance return and risk</li>
            <li><strong>Network Optimization:</strong>
                  Finding optimal flows, paths, or spanning trees in networks</li>
            <li><strong>Scheduling:</strong>
                  Assigning resources to tasks over time</li>
            <li><strong>Cutting Stock/Bin Packing:</strong>
                  Minimizing waste in cutting or packing operations</li>
            <li><strong>Facility Location:</strong>
                  Optimally locating facilities to minimize distance or cost</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Troubleshooting Solver Issues</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>"Solver could not find a feasible solution":</strong>
                  Your constraints may be contradictory</li>
            <li><strong>"The objective cell values do not converge":</strong>
                  Model may be unbounded or ill-conditioned</li>
            <li><strong>"Solver has found a solution, but may not be optimal":</strong>
                  Consider using a different starting point</li>
            <li><strong>Getting stuck in local optima:</strong>
                  Use multiple starting points or the Evolutionary solver</li>
            <li><strong>Solver is too slow:</strong>
                  Simplify the model, reduce the number of variables, or use a different solving method</li>
            <li><strong>Integer constraints causing problems:</strong>
                  Relax integer constraints initially, then solve again with them</li>
            <li><strong>Numerical instability:</strong>
                  Scale your model to avoid very large or small numbers</li>
            <li><strong>Poor constraint formulation:</strong>
                  Ensure constraints are properly specified without redundancy</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Best Practices for Optimization Modeling</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Start Simple:</strong>
                  Begin with a simplified version of your problem and gradually add complexity</li>
            <li><strong>Organize Your Spreadsheet:</strong>
                  Clearly separate inputs, decision variables, calculations, and outputs</li>
            <li><strong>Use Named Ranges:</strong>
                  Create descriptive names for key cells and ranges</li>
            <li><strong>Document Assumptions:</strong>
                  Clearly state all assumptions in your model</li>
            <li><strong>Test with Simple Cases:</strong>
                  Verify your model with small problems where you know the answer</li>
            <li><strong>Check Formulas:</strong>
                  Ensure all calculations are correct before running Solver</li>
            <li><strong>Save Multiple Versions:</strong>
                  Keep backups of your model at different stages</li>
            <li><strong>Perform Sensitivity Analysis:</strong>
                  Always check how sensitive your solution is to changes in parameters</li>
            <li><strong>Interpret Results Carefully:</strong>
                  Remember that optimization results are only as good as your model</li>
            <li><strong>Consider Practical Implications:</strong>
                  Evaluate whether the optimal solution is practical to implement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SolverOptimizationExercise;
