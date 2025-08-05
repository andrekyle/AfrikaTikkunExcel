import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

const TimeSeriesAnalysisExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  // Sample data strings for the exercise
  const monthlySalesCSV = `Date,Sales,Advertising,Promotion,Holiday
2021-01-01,125000,35000,15000,1
2021-02-01,118000,32000,8000,0
2021-03-01,132000,38000,12000,0
2021-04-01,141000,40000,10000,1
2021-05-01,145000,42000,15000,0
2021-06-01,152000,45000,18000,0
2021-07-01,146000,43000,20000,1
2021-08-01,138000,40000,15000,0
2021-09-01,147000,44000,12000,0
2021-10-01,156000,47000,18000,0
2021-11-01,165000,50000,22000,0
2021-12-01,182000,55000,25000,1
2022-01-01,138000,40000,18000,1
2022-02-01,125000,38000,10000,0
2022-03-01,142000,42000,15000,0
2022-04-01,153000,45000,12000,1
2022-05-01,157000,47000,18000,0
2022-06-01,168000,50000,20000,0
2022-07-01,162000,48000,22000,1
2022-08-01,155000,46000,18000,0
2022-09-01,163000,49000,15000,0
2022-10-01,172000,52000,20000,0
2022-11-01,183000,55000,24000,0
2022-12-01,195000,60000,28000,1
2023-01-01,152000,45000,20000,1
2023-02-01,145000,43000,12000,0
2023-03-01,158000,47000,18000,0
2023-04-01,168000,50000,15000,1
2023-05-01,175000,53000,20000,0
2023-06-01,183000,55000,22000,0
2023-07-01,178000,54000,24000,1
2023-08-01,172000,52000,20000,0
2023-09-01,180000,55000,18000,0
2023-10-01,188000,57000,22000,0
2023-11-01,198000,60000,26000,0
2023-12-01,215000,65000,30000,1`;

  const stockPricesCSV = `Date,Open,High,Low,Close,Volume
2023-01-03,142.50,145.20,140.80,144.75,5240000
2023-01-04,145.30,147.80,144.60,147.20,4850000
2023-01-05,147.00,147.90,145.50,146.70,4320000
2023-01-06,145.80,148.30,145.20,147.90,5120000
2023-01-09,148.20,149.40,147.10,148.50,4650000
2023-01-10,148.80,150.20,147.90,149.80,5380000
2023-01-11,150.40,152.80,150.10,152.30,6240000
2023-01-12,152.60,153.70,151.40,152.80,5490000
2023-01-13,153.10,155.20,152.60,154.90,6120000
2023-01-17,154.50,156.80,154.10,156.30,5870000
2023-01-18,155.90,156.40,153.20,153.80,6350000
2023-01-19,153.20,154.90,152.30,154.20,5420000
2023-01-20,154.80,157.20,154.50,156.90,6280000
2023-01-23,157.30,158.40,155.90,157.80,5930000
2023-01-24,157.50,158.20,155.30,156.40,5480000
2023-01-25,156.20,157.80,153.90,157.40,6180000
2023-01-26,158.10,160.40,157.80,159.80,7240000
2023-01-27,160.20,162.30,159.80,161.90,8320000
2023-01-30,161.50,161.80,158.40,158.90,6750000
2023-01-31,159.40,162.10,159.10,162.00,7180000`;

  const weatherDataCSV = `Date,Temperature,Humidity,Precipitation,WindSpeed,EnergyDemand
2023-01-01,32,65,0.05,10,285
2023-01-02,30,70,0.25,15,298
2023-01-03,28,75,0.50,18,310
2023-01-04,33,60,0.00,8,278
2023-01-05,36,55,0.00,5,265
2023-01-06,38,50,0.00,7,252
2023-01-07,40,45,0.00,6,243
2023-01-08,42,40,0.00,4,235
2023-01-09,45,35,0.00,5,230
2023-01-10,48,40,0.10,8,225
2023-01-11,45,45,0.30,12,240
2023-01-12,40,50,0.15,10,255
2023-01-13,38,55,0.05,7,265
2023-01-14,36,60,0.00,5,275
2023-01-15,35,65,0.00,6,280
2023-01-16,33,70,0.10,8,290
2023-01-17,30,75,0.40,15,305
2023-01-18,28,80,0.60,20,315
2023-01-19,27,85,0.35,18,320
2023-01-20,29,80,0.20,14,310
2023-01-21,31,75,0.10,10,300
2023-01-22,34,70,0.00,8,285
2023-01-23,36,65,0.00,6,275
2023-01-24,38,60,0.00,5,265
2023-01-25,41,55,0.00,7,255
2023-01-26,43,50,0.00,6,245
2023-01-27,45,45,0.00,8,235
2023-01-28,47,40,0.00,7,230
2023-01-29,46,45,0.05,9,235
2023-01-30,44,50,0.15,12,245
2023-01-31,40,55,0.10,10,260`;

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
        setCopyStatus({ ...copyStatus, [key]: true });
        setTimeout(() => setCopyStatus({ ...copyStatus, [key]: false }), 2000);
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
        <h2 className="text-xl font-semibold">Time Series Analysis in Excel</h2>
        <p className="text-sm text-muted-foreground">Time series analysis helps you understand patterns, trends, and seasonality in data collected over time. 
          Excel provides powerful tools to analyze historical time data and create forecasts. This exercise will guide you 
          through techniques for analyzing temporal data and building accurate forecasting models.
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
                <h4 className="text-sm font-medium">Monthly Sales Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(monthlySalesCSV, "monthlySales")}
                >
                  {copyStatus["monthlySales"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {monthlySalesCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Stock Price Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(stockPricesCSV, "stockPrices")}
                >
                  {copyStatus["stockPrices"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {stockPricesCSV}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium">Weather & Energy Data</h4>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => handleCopy(weatherDataCSV, "weatherData")}
                >
                  {copyStatus["weatherData"] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded-md overflow-auto max-h-40">
                {weatherDataCSV}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hands-on Exercise */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Hands-on Exercise: Create Forecasting Models</h3>
        <p className="text-sm text-muted-foreground">In this exercise, you'll explore various techniques to analyze time-based data and build forecasting 
          models to predict future trends using Excel's advanced time series analysis tools.
        </p>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Exercise Steps</h4>
            <ol className="list-decimal pl-5 space-y-3 text-sm">
              <li><strong>Basic Time Series Visualization and Analysis:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Import the Monthly Sales dataset into Excel</li>
                  <li>Create a time series line chart:
                    <ul>
                      <li>Select the Date and Sales columns</li>
                      <li>Insert → Line Chart → Select the first 2-D Line option</li>
                      <li>Format the chart with proper titles and axis labels</li>
                    </ul>
                  </li>
                  <li>Identify time series components:
                    <ul>
                      <li>Add a trendline to visualize the long-term trend (Right-click on data series → Add Trendline)</li>
                      <li>Select "Linear" and check "Display Equation on chart" and "Display R-squared value"</li>
                      <li>Observe if there's any seasonality (recurring patterns) in the data</li>
                      <li>Create a 12-month moving average to smooth out seasonality:
                        <ul>
                          <li>In a new column, use formula: =AVERAGE(Sales_cell_range_for_past_12_months)</li>
                          <li>Add this to your chart as a new series</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong>Seasonal Decomposition:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create a new worksheet titled "Seasonal Decomposition"</li>
                  <li>Calculate the centered moving average (for monthly data):
                    <ul>
                      <li>First create a regular 12-month moving average</li>
                      <li>Then create a centered version by averaging consecutive pairs of the moving average values</li>
                    </ul>
                  </li>
                  <li>Calculate seasonal factors:
                    <ul>
                      <li>Divide actual values by the centered moving average</li>
                      <li>Group values by month (all Januaries, all Februaries, etc.)</li>
                      <li>Calculate the average seasonal factor for each month</li>
                      <li>Normalize seasonal factors to ensure they sum to 12 (for monthly data)</li>
                    </ul>
                  </li>
                  <li>Deseasonalize the data:
                    <ul>
                      <li>Divide each original value by its corresponding seasonal factor</li>
                      <li>Plot the deseasonalized data to visualize the underlying trend</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong>Trend Analysis and Forecasting:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Using the deseasonalized data, fit a trend line:
                    <ul>
                      <li>Create a scatter plot with date as X and deseasonalized values as Y</li>
                      <li>Add a linear trendline and display the equation</li>
                      <li>For more complex patterns, try polynomial or exponential trendlines</li>
                    </ul>
                  </li>
                  <li>Create a forecast for the next 12 months:
                    <ul>
                      <li>Extend your date column for 12 additional months</li>
                      <li>Use the trendline equation to calculate the trend component for future dates</li>
                      <li>Multiply by the appropriate seasonal factors to reseasonalize the forecast</li>
                      <li>Add the forecast to your original chart as a new series with a different color</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong>Excel's Forecast Sheet Feature (Excel 2016 and later):</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create a new forecast using Excel's built-in tools:
                    <ul>
                      <li>Select your time series data (Date and Sales columns)</li>
                      <li>Go to Data → Forecast Sheet</li>
                      <li>Set forecast end date 12 months into the future</li>
                      <li>Explore the forecast options (seasonality detection, confidence intervals)</li>
                      <li>Click "Create" to generate a forecast sheet with chart</li>
                    </ul>
                  </li>
                  <li>Analyze the forecast results:
                    <ul>
                      <li>Review the forecast chart and confidence intervals</li>
                      <li>Compare with your manual forecast from the previous step</li>
                      <li>Note any differences and possible reasons</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong>Advanced Forecasting with FORECAST.ETS Functions:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create a new worksheet titled "ETS Forecasting"</li>
                  <li>Set up your historical data with Date and Sales columns</li>
                  <li>Use the FORECAST.ETS function to predict future values:
                    <ul>
                      <li>Create a column for future dates (extending 12 months beyond your data)</li>
                      <li>In the adjacent column, use the formula: =FORECAST.ETS(target_date, values_range, timeline_range, [seasonality], [data_completion], [aggregation])</li>
                      <li>Set seasonality to 12 for monthly data</li>
                    </ul>
                  </li>
                  <li>Add confidence intervals to your forecast:
                    <ul>
                      <li>Use FORECAST.ETS.CONFINT to calculate upper and lower bounds</li>
                      <li>Formula: =FORECAST.ETS.CONFINT(target_date, values_range, timeline_range, confidence_level, [seasonality], [data_completion], [aggregation])</li>
                      <li>Use a 95% confidence level (0.95)</li>
                    </ul>
                  </li>
                  <li>Visualize the forecast with confidence intervals:
                    <ul>
                      <li>Create a chart with historical values, forecast values, upper bound, and lower bound</li>
                      <li>Format the chart for clarity, using different colors for historical and forecast periods</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong>Multiple Regression Forecasting with External Variables:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Analyze the relationship between Sales and external factors (Advertising and Promotion):
                    <ul>
                      <li>Create a correlation matrix to identify relationships</li>
                      <li>Use Data → Data Analysis → Correlation</li>
                    </ul>
                  </li>
                  <li>Build a multiple regression model:
                    <ul>
                      <li>Use Data → Data Analysis → Regression</li>
                      <li>Set Sales as Y Range, and Advertising, Promotion, and a seasonal dummy variable (Holiday) as X Range</li>
                      <li>Analyze the regression output, noting R-squared and p-values</li>
                    </ul>
                  </li>
                  <li>Create a forecast model using regression results:
                    <ul>
                      <li>Create a forecast table with future dates and estimated future values for Advertising, Promotion, and Holiday</li>
                      <li>Use the regression equation to calculate predicted Sales</li>
                      <li>Compare this forecast with the time series forecasts created earlier</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong>Advanced Stock Price Analysis with Moving Averages:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Import the Stock Price dataset</li>
                  <li>Calculate technical indicators:
                    <ul>
                      <li>Add 5-day and 20-day Simple Moving Averages (SMA) for Close prices</li>
                      <li>Add Relative Strength Index (RSI) using a 14-day period</li>
                      <li>Calculate daily price volatility (High-Low range)</li>
                    </ul>
                  </li>
                  <li>Visualize stock price with technical indicators:
                    <ul>
                      <li>Create a chart with Close price, 5-day SMA, and 20-day SMA</li>
                      <li>Add a secondary axis for the RSI indicator</li>
                      <li>Format the chart with appropriate labels and legends</li>
                    </ul>
                  </li>
                  <li>Develop a simple trading signal model:
                    <ul>
                      <li>Create a "Signal" column that shows "Buy" when 5-day SMA crosses above 20-day SMA</li>
                      <li>Show "Sell" when 5-day SMA crosses below 20-day SMA</li>
                      <li>Use conditional formatting to highlight these signals on your chart</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong>Weather Data Analysis and Energy Demand Forecasting:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Import the Weather & Energy dataset</li>
                  <li>Explore relationships between weather variables and energy demand:
                    <ul>
                      <li>Create scatter plots of Temperature vs. EnergyDemand, Humidity vs. EnergyDemand, etc.</li>
                      <li>Add trendlines to identify key relationships</li>
                      <li>Calculate correlation coefficients</li>
                    </ul>
                  </li>
                  <li>Build a multiple regression model for energy demand:
                    <ul>
                      <li>Use Data → Data Analysis → Regression</li>
                      <li>Set EnergyDemand as Y Range, and Temperature, Humidity, Precipitation, and WindSpeed as X Range</li>
                      <li>Analyze which weather factors have the most significant impact on energy demand</li>
                    </ul>
                  </li>
                  <li>Create a weather-based energy demand forecast:
                    <ul>
                      <li>Use weather forecasts (create hypothetical data) for the next 7 days</li>
                      <li>Apply your regression model to predict energy demand based on forecasted weather</li>
                      <li>Create a dashboard showing forecasted weather and resulting energy demand</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><strong>Forecast Accuracy Evaluation:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create a new worksheet titled "Forecast Evaluation"</li>
                  <li>Set up a holdout sample for testing:
                    <ul>
                      <li>Use only the first 30 months of data to build your models</li>
                      <li>Reserve the last 6 months as a test set</li>
                    </ul>
                  </li>
                  <li>Apply all your forecasting methods to predict the test period:
                    <ul>
                      <li>Seasonal decomposition method</li>
                      <li>Excel's Forecast Sheet</li>
                      <li>FORECAST.ETS functions</li>
                      <li>Multiple regression with external variables</li>
                    </ul>
                  </li>
                  <li>Calculate forecast accuracy metrics:
                    <ul>
                      <li>Mean Absolute Error (MAE): =AVERAGE(ABS(actual_values - forecast_values))</li>
                      <li>Mean Absolute Percentage Error (MAPE): =AVERAGE(ABS((actual_values - forecast_values)/actual_values))</li>
                      <li>Root Mean Square Error (RMSE): =SQRT(AVERAGE((actual_values - forecast_values)^2))</li>
                    </ul>
                  </li>
                  <li>Create a comparison chart and table for all methods</li>
                  <li>Select the best performing model for your final forecast</li>
                </ul>
              </li>
              
              <li><strong>Final Forecasting Dashboard:</strong>
                <ul className="list-disc pl-5 my-1">
                  <li>Create a comprehensive forecasting dashboard:
                    <ul>
                      <li>Historical data chart with trend and seasonality highlighted</li>
                      <li>Forecast chart with confidence intervals</li>
                      <li>Accuracy metrics for your chosen model</li>
                      <li>Key factors driving the forecast (from regression analysis)</li>
                    </ul>
                  </li>
                  <li>Add interactive elements:
                    <ul>
                      <li>Create drop-down lists to select different forecast horizons (3, 6, 12 months)</li>
                      <li>Add sliders to adjust key external variables for scenario planning</li>
                      <li>Include a "what-if" section to test different assumptions</li>
                    </ul>
                  </li>
                  <li>Document your forecasting methodology:
                    <ul>
                      <li>Add a methodology section explaining your approach</li>
                      <li>List assumptions and limitations</li>
                      <li>Provide recommendations for improving forecast accuracy</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Time Series Analysis Tools Overview */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">Time Series Analysis in Excel</h3>
        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Key Time Series Analysis Techniques</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Trend Analysis:</strong>
                  Identifying long-term movements in time series data</li>
            <li><strong>Seasonal Analysis:</strong>
                  Detecting regular patterns that repeat over known periods</li>
            <li><strong>Cyclical Analysis:</strong>
                  Identifying fluctuations not tied to seasonal factors</li>
            <li><strong>Moving Averages:</strong>
                  Smoothing techniques to reduce noise and highlight trends</li>
            <li><strong>Exponential Smoothing:</strong>
                  Weighted averaging with more emphasis on recent data</li>
            <li><strong>Seasonal Decomposition:</strong>
                  Breaking time series into trend, seasonal, and residual components</li>
            <li><strong>ARIMA Models:</strong>
                  Advanced forecasting using AutoRegressive Integrated Moving Average</li>
            <li><strong>Regression Analysis:</strong>
                  Using explanatory variables to forecast dependent variables</li>
            <li><strong>ETS Models:</strong>
                  Error, Trend, Seasonality modeling approach</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Excel Time Series Functions</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>FORECAST.LINEAR:</strong>
                  Predicts future values based on linear regression</li>
            <li><strong>FORECAST.ETS:</strong>
                  Forecasts using exponential triple smoothing algorithm</li>
            <li><strong>FORECAST.ETS.SEASONALITY:</strong>
                  Detects seasonality in time series data</li>
            <li><strong>FORECAST.ETS.CONFINT:</strong>
                  Calculates confidence intervals for ETS forecasts</li>
            <li><strong>TREND:</strong>
                  Returns values along a linear trend line</li>
            <li><strong>GROWTH:</strong>
                  Returns values along an exponential trend</li>
            <li><strong>LINEST:</strong>
                  Calculates linear regression statistics</li>
            <li><strong>LOGEST:</strong>
                  Calculates exponential regression statistics</li>
            <li><strong>AVERAGEIF/AVERAGEIFS:</strong>
                  Useful for conditional moving averages</li>
            <li><strong>DATE, YEAR, MONTH, DAY:</strong>
                  Essential for time series date manipulation</li>
            <li><strong>WORKDAY, NETWORKDAYS:</strong>
                  Working with business days in forecasting</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
          <h4 className="text-sm font-medium">Best Practices</h4>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Data Preparation:</strong>
                  Ensure consistent time intervals and handle missing values</li>
            <li><strong>Outlier Treatment:</strong>
                  Identify and address anomalies that may skew forecasts</li>
            <li><strong>Model Selection:</strong>
                  Choose the right forecasting method based on data patterns</li>
            <li><strong>Validation:</strong>
                  Always test models on holdout samples before using for real forecasts</li>
            <li><strong>Multiple Methods:</strong>
                  Use ensemble approaches combining different forecasting techniques</li>
            <li><strong>Regular Updates:</strong>
                  Refresh forecasts as new data becomes available</li>
            <li><strong>Visualizations:</strong>
                  Use charts to communicate forecast results and uncertainty</li>
            <li><strong>External Factors:</strong>
                  Consider incorporating external variables that influence the target</li>
            <li><strong>Forecast Horizon:</strong>
                  Match the forecasting technique to the required time horizon</li>
            <li><strong>Forecast Uncertainty:</strong>
                  Always communicate confidence intervals with point forecasts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimeSeriesAnalysisExercise;
