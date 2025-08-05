import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Copy, Table, Code2 } from "lucide-react";

const PythonInExcelExercise: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});
  
  // Customer Segmentation Script
  const customerSegmentationScript = `import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import seaborn as sns

# Customer data is available as 'df'

# Step 1: Data preparation
# Convert Income Bracket to numeric value (midpoint of range)
def extract_income(income_range):
    if '25000-50000' in income_range:
        return 37500
    elif '50000-75000' in income_range:
        return 62500
    elif '75000-100000' in income_range:
        return 87500
    elif '100000-150000' in income_range:
        return 125000
    elif '150000-200000' in income_range:
        return 175000
    elif '200000+' in income_range:
        return 250000
    else:
        return np.nan

df['Income'] = df['Income Bracket (ZAR)'].apply(extract_income)

# Convert Purchase Frequency to numeric value (purchases per month)
def frequency_to_monthly(freq):
    if freq == 'Weekly':
        return 4
    elif freq == 'Bi-weekly':
        return 2
    elif freq == 'Monthly':
        return 1
    else:
        return 0

df['Monthly Purchases'] = df['Purchase Frequency'].apply(frequency_to_monthly)

# Calculate estimated monthly spend
df['Monthly Spend'] = df['Monthly Purchases'] * df['Avg Transaction (ZAR)']

# Encode Loyalty Status
loyalty_map = {'None': 0, 'Bronze': 1, 'Silver': 2, 'Gold': 3, 'Platinum': 4}
df['Loyalty Score'] = df['Loyalty Status'].map(loyalty_map)

# Step 2: Feature selection for clustering
features = ['Income', 'Age', 'Monthly Spend', 'Loyalty Score']

# Step 3: Scale the features
scaler = StandardScaler()
scaled_features = scaler.fit_transform(df[features])

# Step 4: Determine optimal number of clusters using the Elbow Method
inertia = []
for k in range(1, 11):
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(scaled_features)
    inertia.append(kmeans.inertia_)

# Plot Elbow Method graph
elbow_fig, ax = plt.subplots(figsize=(8, 5))
ax.plot(range(1, 11), inertia, 'bo-')
ax.set_xlabel('Number of Clusters')
ax.set_ylabel('Inertia')
ax.set_title('Elbow Method for Optimal k')
ax.grid(True)

# Step 5: Apply K-means with the optimal number of clusters (in this case, 4)
n_clusters = 4  # Based on elbow method analysis
kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
df['Cluster'] = kmeans.fit_predict(scaled_features)

# Step 6: Analyze the clusters
cluster_analysis = df.groupby('Cluster').agg({
    'Age': 'mean',
    'Income': 'mean',
    'Monthly Spend': 'mean',
    'Avg Transaction (ZAR)': 'mean',
    'Loyalty Score': 'mean',
    'Customer ID': 'count'
}).rename(columns={'Customer ID': 'Count'}).reset_index()

# Add meaningful labels based on cluster characteristics
def assign_cluster_name(row):
    if row['Income'] > 100000 and row['Monthly Spend'] > 5000:
        return 'Premium Customers'
    elif row['Income'] > 75000 or row['Monthly Spend'] > 2500:
        return 'High Value Customers'
    elif row['Monthly Spend'] > 1000:
        return 'Regular Customers'
    else:
        return 'Occasional Customers'

cluster_analysis['Segment'] = cluster_analysis.apply(assign_cluster_name, axis=1)

# Step 7: Create a visualization of the clusters
segment_fig, ax = plt.subplots(figsize=(10, 6))
scatter = ax.scatter(
    df['Monthly Spend'], 
    df['Income'],
    c=df['Cluster'], 
    cmap='viridis', 
    alpha=0.6,
    s=100
)

# Add cluster centers
centers = scaler.inverse_transform(kmeans.cluster_centers_)
for i, center in enumerate(centers):
    ax.annotate(
        f'Cluster {i}',
        (center[2], center[0]),
        fontsize=12,
        fontweight='bold'
    )

ax.set_xlabel('Monthly Spend (ZAR)')
ax.set_ylabel('Income (ZAR)')
ax.set_title('South African Customer Segments')
legend1 = ax.legend(*scatter.legend_elements(), title="Clusters")
ax.add_artist(legend1)

# Return the results
return pd.concat([
    pd.DataFrame({'Analysis': ['Cluster Analysis']}),
    cluster_analysis[['Cluster', 'Segment', 'Count', 'Income', 'Monthly Spend', 'Loyalty Score']],
    pd.DataFrame({'Analysis': ['Visualizations will appear below:']})  
])

# The figures will appear as separate outputs in Excel`;
  
  // Economic Forecasting Script
  const economicForecastingScript = `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.stattools import adfuller
from sklearn.metrics import mean_absolute_error

# Assume economic_data contains historical GDP values
# Format should be: Province | Year | GDP (Billion ZAR) | Other indicators...

# Step 1: Prepare the data
# For this example, we'll focus on Gauteng province
gauteng_data = df[df['Province'] == 'Gauteng'].copy()

# Create a time series from the data
# Note: In a real scenario, you'd have multiple years of data
# For this example, we'll simulate 10 years of historical data
def simulate_historical_data(current_gdp, years=10):
    historical_gdp = [current_gdp]
    growth_rates = [0.038, 0.042, 0.045, 0.039, 0.021, -0.01, 0.015, 0.034, 0.028, 0.033]
    
    for i in range(9):
        previous_gdp = historical_gdp[0]
        for rate in reversed(growth_rates[i:]):
            historical_gdp.insert(0, previous_gdp / (1 + rate))
        
    years = list(range(2013, 2023))
    return pd.DataFrame({'Year': years, 'GDP': historical_gdp})

historical_df = simulate_historical_data(gauteng_data['GDP (Billion ZAR)'].iloc[0])
historical_df = historical_df.set_index('Year')

# Step 2: Check for stationarity using the Augmented Dickey-Fuller test
def check_stationarity(timeseries):
    # Perform Dickey-Fuller test
    result = adfuller(timeseries.values)
    
    # Format the results
    output = pd.DataFrame({
        'Test Statistic': [result[0]],
        'p-value': [result[1]],
        'Lags Used': [result[2]],
        'Observations': [result[3]]
    })
    
    for key, value in result[4].items():
        output[f'Critical Value ({key})'] = value
    
    output['Stationary'] = result[1] <= 0.05
    return output

stationarity_test = check_stationarity(historical_df['GDP'])

# Step 3: Prepare the data - differencing if necessary
is_stationary = stationarity_test['Stationary'].iloc[0]
if not is_stationary:
    # Apply differencing
    historical_df['GDP_diff'] = historical_df['GDP'].diff().dropna()
    train_data = historical_df['GDP_diff'].dropna()
    original_last = historical_df['GDP'].iloc[-1]
else:
    train_data = historical_df['GDP']
    original_last = None

# Step 4: Build and train the ARIMA model
# For simplicity, we'll use ARIMA(1,1,1) but in practice, you would use
# auto_arima or grid search to find optimal parameters
model = ARIMA(train_data, order=(1, 1, 1) if not is_stationary else (1, 0, 1))
model_fit = model.fit()

# Step 5: Make forecasts for the next 5 years
forecast_steps = 5
forecast = model_fit.forecast(steps=forecast_steps)

# If we differenced the data, we need to convert back to the original scale
if not is_stationary:
    forecast_values = [original_last]
    for diff_val in forecast:
        forecast_values.append(forecast_values[-1] + diff_val)
    forecast_values = forecast_values[1:]
else:
    forecast_values = forecast

# Create a dataframe with forecasted values
forecast_years = list(range(2023, 2023 + forecast_steps))
forecast_df = pd.DataFrame({
    'Year': forecast_years,
    'Forecasted GDP (Billion ZAR)': forecast_values
})

# Step 6: Visualize the historical data and forecast
plt.figure(figsize=(12, 6))
plt.plot(
    historical_df.index, 
    historical_df['GDP'], 
    marker='o', 
    linestyle='-', 
    label='Historical GDP'
)
plt.plot(
    forecast_df['Year'], 
    forecast_df['Forecasted GDP (Billion ZAR)'], 
    marker='o', 
    linestyle='--', 
    color='red', 
    label='Forecasted GDP'
)

# Add confidence intervals - using a simplified approach
conf_interval = 0.1 * np.array(forecast_df['Forecasted GDP (Billion ZAR)'])
plt.fill_between(
    forecast_df['Year'],
    forecast_df['Forecasted GDP (Billion ZAR)'] - conf_interval,
    forecast_df['Forecasted GDP (Billion ZAR)'] + conf_interval,
    color='red', 
    alpha=0.2, 
    label='Confidence Interval'
)

plt.title('Gauteng GDP Historical Data and Forecast (2013-2027)')
plt.xlabel('Year')
plt.ylabel('GDP (Billion ZAR)')
plt.grid(True)
plt.legend()

# Calculate growth rates for forecasted years
forecast_df['Annual Growth Rate'] = [None] + [
    (forecast_df['Forecasted GDP (Billion ZAR)'][i] / forecast_df['Forecasted GDP (Billion ZAR)'][i-1] - 1) * 100
    for i in range(1, len(forecast_df))
]

# Calculate the last historical growth rate
last_historical_growth = (historical_df['GDP'].iloc[-1] / historical_df['GDP'].iloc[-2] - 1) * 100

# Create a summary table with forecast and growth rates
summary = pd.DataFrame({
    'Year': forecast_df['Year'],
    'Forecasted GDP (Billion ZAR)': forecast_df['Forecasted GDP (Billion ZAR)'].round(2),
    'Growth Rate (%)': [last_historical_growth] + forecast_df['Annual Growth Rate'].iloc[1:].tolist()
})

# Add a row for the latest historical year
summary = pd.concat([
    pd.DataFrame({
        'Year': [2022],
        'Forecasted GDP (Billion ZAR)': [historical_df['GDP'].iloc[-1]],
        'Growth Rate (%)': [last_historical_growth]
    }),
    summary
]).reset_index(drop=True)

# Format the growth rates
summary['Growth Rate (%)'] = summary['Growth Rate (%)'].apply(lambda x: f"{x:.2f}%" if x is not None else None)

# Return both the plot and the summary table
return summary`;

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus({ ...copyStatus, [key]: true });
      setTimeout(() => {
        setCopyStatus({ ...copyStatus, [key]: false });
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Sample South African datasets
  const propertySalesData = `Area,Property Type,Bedrooms,Bathrooms,Erf Size (m²),Floor Area (m²),Year Built,Amenities,Sale Price (ZAR)
Sandton,House,4,3.5,1200,380,2010,Pool|Garden|Garage,8500000
Rosebank,Apartment,2,2,0,85,2015,Balcony|Parking|Security,2750000
Melville,Townhouse,3,2.5,350,160,2005,Garden|Garage,3450000
Parkhurst,House,3,2,950,210,1980,Pool|Garden|Garage,5200000
Bryanston,House,5,4.5,2000,450,2018,Pool|Garden|Tennis Court|Garage,12500000
Morningside,Apartment,2,1,0,65,2010,Balcony|Parking|Gym,1950000
Fourways,Cluster,3,2.5,500,220,2012,Pool|Garden|Security|Garage,4200000
Dainfern,House,4,3.5,1500,380,2015,Pool|Garden|Security|Golf Estate,9800000
Midrand,Townhouse,2,1.5,200,110,2018,Garden|Parking|Security,1800000
Waterfall,Apartment,3,2,0,120,2020,Balcony|Parking|Gym|Security,3950000
Randburg,House,3,2,800,180,2000,Pool|Garden|Garage,3750000
Houghton,House,6,5,3000,750,1995,Pool|Tennis Court|Garden|Staff Quarters,18500000
Kyalami,Cluster,4,3,650,280,2015,Pool|Garden|Security|Garage,6200000
Linden,House,3,2,950,210,1975,Pool|Garden|Garage,4100000
Northcliff,House,4,3,1200,320,1990,Pool|Garden|Staff Quarters|Garage,6800000`;

  const retailCustomerData = `Customer ID,Age,Gender,Location,Income Bracket (ZAR),Purchase Frequency,Avg Transaction (ZAR),Preferred Category,Payment Method,Loyalty Status
C1001,34,Female,Johannesburg,50000-75000,Weekly,850,Clothing,Credit Card,Gold
C1002,45,Male,Pretoria,75000-100000,Monthly,2300,Electronics,Credit Card,Silver
C1003,28,Female,Cape Town,25000-50000,Bi-weekly,650,Cosmetics,Debit Card,Bronze
C1004,52,Male,Durban,100000-150000,Monthly,3100,Home & Garden,Credit Card,Gold
C1005,31,Female,Port Elizabeth,50000-75000,Weekly,780,Groceries,Cash,Bronze
C1006,42,Male,Bloemfontein,75000-100000,Bi-weekly,1250,Sporting Goods,Credit Card,Silver
C1007,23,Female,Johannesburg,25000-50000,Weekly,520,Clothing,Debit Card,None
C1008,39,Male,Cape Town,150000-200000,Monthly,4200,Electronics,Credit Card,Platinum
C1009,47,Female,Pretoria,100000-150000,Bi-weekly,1850,Home & Garden,EFT,Gold
C1010,29,Male,Johannesburg,50000-75000,Weekly,920,Groceries,Debit Card,Silver
C1011,36,Female,Durban,75000-100000,Weekly,1050,Clothing,Credit Card,Gold
C1012,51,Male,Cape Town,200000+,Monthly,6500,Electronics,Credit Card,Platinum
C1013,25,Female,Johannesburg,25000-50000,Bi-weekly,600,Cosmetics,Cash,Bronze
C1014,44,Male,Pretoria,100000-150000,Monthly,2750,Home & Garden,EFT,Gold
C1015,33,Female,Bloemfontein,50000-75000,Weekly,820,Groceries,Debit Card,Silver`;

  const economicIndicatorsData = `Province,GDP (Billion ZAR),Population (Million),Unemployment Rate,Manufacturing Index,Tourism Revenue (Million ZAR),Agriculture Output (Million ZAR),Mining Output (Million ZAR),Inflation Rate
Gauteng,1580,15.5,32.7,118.5,25400,8200,45600,4.8
Western Cape,680,7.1,24.3,109.2,32700,18400,3200,5.1
KwaZulu-Natal,750,11.5,28.4,105.8,18600,14500,8700,4.9
Eastern Cape,350,6.7,43.8,98.3,8500,12800,2500,5.3
Free State,230,2.9,36.5,94.7,3200,15400,12800,5.0
Mpumalanga,320,4.7,34.2,101.5,5400,11300,32500,4.7
North West,270,4.1,35.7,92.1,2800,9200,38400,4.6
Limpopo,310,5.9,38.3,90.5,4100,13600,28700,5.2
Northern Cape,110,1.3,28.9,88.4,1900,7500,21300,4.5`;

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Python in Excel</CardTitle>
          <CardDescription>
            Leverage Python for advanced analytics and machine learning directly within Excel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm space-y-2">
            <p>
              Microsoft Excel has evolved to integrate Python, bringing powerful data analysis capabilities directly to your spreadsheets. 
              This integration allows South African businesses to perform advanced analytics, create sophisticated visualizations, and 
              build machine learning models without leaving Excel's familiar interface.
            </p>
          </div>

          <div className="space-y-4 mt-4">
            <h3 className="text-md font-medium">Key Benefits of Python in Excel</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-blue-50 dark:bg-blue-900/20">
                  <CardTitle className="text-sm">Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent className="p-3 text-xs space-y-2">
                  <p>
                    Access powerful Python libraries like Pandas, NumPy, and SciPy directly within Excel. 
                    This enables sophisticated statistical analysis of South African economic data, 
                    complex financial modeling for JSE-listed companies, and custom data transformations beyond what's possible with Excel formulas.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-green-50 dark:bg-green-900/20">
                  <CardTitle className="text-sm">Data Visualization</CardTitle>
                </CardHeader>
                <CardContent className="p-3 text-xs space-y-2">
                  <p>
                    Create compelling visualizations using Matplotlib, Seaborn, and Plotly that aren't available in Excel's native charts. 
                    Visualize township development data, provincial economic comparisons, or demographic trends across South Africa's diverse communities
                    with customized, publication-quality graphics.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-purple-50 dark:bg-purple-900/20">
                  <CardTitle className="text-sm">Machine Learning</CardTitle>
                </CardHeader>
                <CardContent className="p-3 text-xs space-y-2">
                  <p>
                    Implement machine learning models using scikit-learn and other Python ML libraries without leaving Excel. 
                    Predict property values in Cape Town's changing market, segment retail customers by spending patterns, 
                    or forecast sales across South African provinces—all from your spreadsheet.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-3 bg-amber-50 dark:bg-amber-900/20">
                  <CardTitle className="text-sm">Workflow Integration</CardTitle>
                </CardHeader>
                <CardContent className="p-3 text-xs space-y-2">
                  <p>
                    Seamlessly blend Excel's user-friendly interface with Python's programming power. 
                    Your team can prepare data in Excel, analyze it with Python, and visualize results back in Excel—all 
                    without switching applications. This is ideal for South African businesses with mixed technical capabilities among staff.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started with Python in Excel */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Getting Started with Python in Excel</CardTitle>
          <CardDescription>
            Setup instructions and requirements for using Python within Excel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-xs space-y-3">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md space-y-2">
              <p className="font-medium">1. System Requirements</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Excel for Microsoft 365 (Version 2307 or later)</li>
                <li>Windows 10/11 or macOS</li>
                <li>Internet connection (Python runs in the Microsoft Cloud)</li>
                <li>Microsoft account or work account with appropriate licenses</li>
              </ul>
              <p className="text-gray-600 italic">Note: If you're working in a corporate environment in South Africa, check with your IT department about Microsoft 365 licenses and security policies for Python in Excel.</p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-md space-y-2">
              <p className="font-medium">2. Enabling Python in Excel</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Open Excel and create a new workbook</li>
                <li>Go to the Insert tab on the ribbon</li>
                <li>Look for the "Python" button in the Scripts group</li>
                <li>If you don't see it, your version may not support Python yet, or it might need to be enabled</li>
                <li>For organizational accounts, your admin may need to enable Python features</li>
              </ol>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-md space-y-2">
              <p className="font-medium">3. Available Python Libraries</p>
              <p>Python in Excel comes with many pre-installed libraries, including:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                <div className="bg-white dark:bg-slate-800 p-2 rounded text-center">pandas</div>
                <div className="bg-white dark:bg-slate-800 p-2 rounded text-center">numpy</div>
                <div className="bg-white dark:bg-slate-800 p-2 rounded text-center">matplotlib</div>
                <div className="bg-white dark:bg-slate-800 p-2 rounded text-center">scikit-learn</div>
                <div className="bg-white dark:bg-slate-800 p-2 rounded text-center">seaborn</div>
                <div className="bg-white dark:bg-slate-800 p-2 rounded text-center">statsmodels</div>
              </div>
              <p className="text-gray-600 italic mt-2">Note: Additional libraries specific to South African data analysis (like PyGeoprocessing for GIS analysis of SA regions) may need to be requested through your organization.</p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md space-y-2">
              <p className="font-medium">4. Your First Python Script in Excel</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Select a range of data in Excel (or leave empty to start fresh)</li>
                <li>Go to Insert {'>'} Python</li>
                <li>A Python editor will open in a side panel</li>
                <li>Your selected Excel data is available as a DataFrame named "df"</li>
                <li>Write Python code that analyzes or transforms the data</li>
                <li>Results can be sent back to Excel using the "return" statement</li>
              </ol>
              <div className="bg-slate-50 dark:bg-slate-900/20 p-2 rounded-md mt-2">
                <p className="text-xs font-mono">
                  # Basic example<br />
                  import pandas as pd<br />
                  <br />
                  # df contains your Excel data automatically<br />
                  # Perform calculations<br />
                  summary = df.describe()<br />
                  <br />
                  # Return results to Excel<br />
                  return summary
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sample Data Tables */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Sample South African Datasets</CardTitle>
          <CardDescription>
            Copy these sample datasets to use in the hands-on exercise
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Table className="h-4 w-4" /> Johannesburg Property Sales Data
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs"
                onClick={() => handleCopy(propertySalesData, "propertySales")}
              >
                {copyStatus["propertySales"] ? (
                  <>
                    <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-3 w-3" /> Copy
                  </>
                )}
              </Button>
            </div>
            <div className="bg-muted p-2 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap">
                {propertySalesData}
              </pre>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Table className="h-4 w-4" /> South African Retail Customer Data
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs"
                onClick={() => handleCopy(retailCustomerData, "retailData")}
              >
                {copyStatus["retailData"] ? (
                  <>
                    <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-3 w-3" /> Copy
                  </>
                )}
              </Button>
            </div>
            <div className="bg-muted p-2 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap">
                {retailCustomerData}
              </pre>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Table className="h-4 w-4" /> South African Provincial Economic Indicators
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs"
                onClick={() => handleCopy(economicIndicatorsData, "economicData")}
              >
                {copyStatus["economicData"] ? (
                  <>
                    <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-3 w-3" /> Copy
                  </>
                )}
              </Button>
            </div>
            <div className="bg-muted p-2 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap">
                {economicIndicatorsData}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Python Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Python Code Examples</CardTitle>
          <CardDescription>
            Ready-to-use Python scripts for Excel analysis with South African data context
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm space-y-2">
            <p>
              Below are practical Python examples you can use directly in Excel to analyze South African datasets.
              Each example demonstrates key Python libraries and techniques relevant to business analysis in a South African context.
            </p>
          </div>

          <div className="space-y-4">
            {/* Example 1: Data Preparation */}
            <div className="border rounded-md overflow-hidden">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3">
                <h3 className="text-sm font-medium mb-1">Data Cleaning & Preparation</h3>
                <p className="text-xs">This script cleans property data by handling missing values, standardizing formats, and creating derived features.</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-blue-600" />
                    <span className="text-xs font-medium">Property Data Preparation</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 text-xs"
                    onClick={() => handleCopy(`import pandas as pd
import numpy as np

# Property data is available as 'df'

# Step 1: Handle missing values
df['Floor Area (m²)'] = df['Floor Area (m²)'].fillna(0)
df['Erf Size (m²)'] = df['Erf Size (m²)'].fillna(0)

# Step 2: Create price per square meter
df['Price per m²'] = df.apply(
    lambda row: row['Sale Price (ZAR)'] / row['Floor Area (m²)'] if row['Floor Area (m²)'] > 0 else np.nan, 
    axis=1
)

# Step 3: Extract amenities into individual columns
amenitiesList = ['Pool', 'Garden', 'Garage', 'Security', 'Balcony', 'Parking']
for amenity in amenitiesList:
    df[f'Has {amenity}'] = df['Amenities'].str.contains(amenity, case=False, na=False).astype(int)

# Step 4: Categorize properties by price range
price_bins = [0, 2000000, 5000000, 10000000, float('inf')]
price_labels = ['Affordable', 'Mid-range', 'Luxury', 'Ultra-luxury']
df['Price Category'] = pd.cut(df['Sale Price (ZAR)'], bins=price_bins, labels=price_labels)

# Step 5: Calculate age of property
from datetime import datetime
current_year = datetime.now().year
df['Property Age'] = current_year - df['Year Built']

# Return the cleaned and enhanced dataset
return df`, "dataCleaning")}
                  >
                    {copyStatus["dataCleaning"] ? (
                      <>
                        <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-1 h-3 w-3" /> Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className="mt-2">
                  <pre className="text-xs overflow-auto p-2 bg-slate-100 dark:bg-slate-900/40 rounded-md whitespace-pre-wrap">
{`import pandas as pd
import numpy as np

# Property data is available as 'df'

# Step 1: Handle missing values
df['Floor Area (m²)'] = df['Floor Area (m²)'].fillna(0)
df['Erf Size (m²)'] = df['Erf Size (m²)'].fillna(0)

# Step 2: Create price per square meter
df['Price per m²'] = df.apply(
    lambda row: row['Sale Price (ZAR)'] / row['Floor Area (m²)'] if row['Floor Area (m²)'] > 0 else np.nan, 
    axis=1
)

# Step 3: Extract amenities into individual columns
amenitiesList = ['Pool', 'Garden', 'Garage', 'Security', 'Balcony', 'Parking']
for amenity in amenitiesList:
    df[f'Has {amenity}'] = df['Amenities'].str.contains(amenity, case=False, na=False).astype(int)

# Step 4: Categorize properties by price range
price_bins = [0, 2000000, 5000000, 10000000, float('inf')]
price_labels = ['Affordable', 'Mid-range', 'Luxury', 'Ultra-luxury']
df['Price Category'] = pd.cut(df['Sale Price (ZAR)'], bins=price_bins, labels=price_labels)

# Step 5: Calculate age of property
from datetime import datetime
current_year = datetime.now().year
df['Property Age'] = current_year - df['Year Built']

# Return the cleaned and enhanced dataset
return df`}
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Example 2: Data Visualization */}
            <div className="border rounded-md overflow-hidden">
              <div className="bg-green-50 dark:bg-green-900/20 p-3">
                <h3 className="text-sm font-medium mb-1">Data Visualization</h3>
                <p className="text-xs">This script creates advanced visualizations of South African provincial economic indicators that aren't available in Excel's native charting tools.</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-medium">Provincial Economic Visualization</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 text-xs"
                    onClick={() => handleCopy(`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Economic indicators are available as 'df'

# Set the style for the visualizations
plt.style.use('ggplot')
sns.set_palette('colorblind')

# Create a figure with multiple subplots
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Plot 1: GDP vs Unemployment Rate with bubble size as Population
axes[0, 0].scatter(
    df['GDP (Billion ZAR)'], 
    df['Unemployment Rate'], 
    s=df['Population (Million)'] * 20, 
    alpha=0.6
)
for i, prov in enumerate(df['Province']):
    axes[0, 0].annotate(prov, (df['GDP (Billion ZAR)'].iloc[i], df['Unemployment Rate'].iloc[i]))
axes[0, 0].set_title('GDP vs Unemployment by Province')
axes[0, 0].set_xlabel('GDP (Billion ZAR)')
axes[0, 0].set_ylabel('Unemployment Rate (%)')

# Plot 2: Manufacturing vs Agriculture Output
axes[0, 1].bar(
    df['Province'],
    df['Manufacturing Index'],
    color='steelblue',
    alpha=0.7,
    label='Manufacturing'
)
ax2 = axes[0, 1].twinx()
ax2.plot(
    df['Province'],
    df['Agriculture Output (Million ZAR)'] / 1000,
    'ro-',
    label='Agriculture'
)
axes[0, 1].set_title('Manufacturing Index vs Agriculture Output')
axes[0, 1].set_xlabel('Province')
axes[0, 1].set_ylabel('Manufacturing Index')
ax2.set_ylabel('Agriculture (Billion ZAR)')
axes[0, 1].tick_params(axis='x', rotation=45)
lines1, labels1 = axes[0, 1].get_legend_handles_labels()
lines2, labels2 = ax2.get_legend_handles_labels()
axes[0, 1].legend(lines1 + lines2, labels1 + labels2, loc='upper left')

# Plot 3: Mining Output Pie Chart
mining_data = df[['Province', 'Mining Output (Million ZAR)']].sort_values('Mining Output (Million ZAR)', ascending=False)
top_5_mining = mining_data.head(5)
others = pd.DataFrame({
    'Province': ['Other Provinces'],
    'Mining Output (Million ZAR)': [mining_data['Mining Output (Million ZAR)'].iloc[5:].sum()]
})
mining_plot_data = pd.concat([top_5_mining, others])

axes[1, 0].pie(
    mining_plot_data['Mining Output (Million ZAR)'],
    labels=mining_plot_data['Province'],
    autopct='%1.1f%%',
    startangle=90,
    shadow=True
)
axes[1, 0].set_title('Mining Output Distribution by Province')

# Plot 4: Tourism and Inflation Relationship
sns.scatterplot(
    x='Tourism Revenue (Million ZAR)', 
    y='Inflation Rate',
    size='GDP (Billion ZAR)',
    hue='Province',
    data=df,
    ax=axes[1, 1]
)
axes[1, 1].set_title('Tourism Revenue vs Inflation Rate')
axes[1, 1].set_xlabel('Tourism Revenue (Million ZAR)')
axes[1, 1].set_ylabel('Inflation Rate (%)')

# Adjust layout and return the figure
plt.tight_layout()
plt.subplots_adjust(top=0.9)
fig.suptitle('South African Provincial Economic Analysis', fontsize=16)
return fig`, "dataVisualization")}
                  >
                    {copyStatus["dataVisualization"] ? (
                      <>
                        <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-1 h-3 w-3" /> Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className="mt-2">
                  <pre className="text-xs overflow-auto p-2 bg-slate-100 dark:bg-slate-900/40 rounded-md whitespace-pre-wrap">
{`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Economic indicators are available as 'df'

# Set the style for the visualizations
plt.style.use('ggplot')
sns.set_palette('colorblind')

# Create a figure with multiple subplots
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Plot 1: GDP vs Unemployment Rate with bubble size as Population
axes[0, 0].scatter(
    df['GDP (Billion ZAR)'], 
    df['Unemployment Rate'], 
    s=df['Population (Million)'] * 20, 
    alpha=0.6
)
for i, prov in enumerate(df['Province']):
    axes[0, 0].annotate(prov, (df['GDP (Billion ZAR)'].iloc[i], df['Unemployment Rate'].iloc[i]))
axes[0, 0].set_title('GDP vs Unemployment by Province')
axes[0, 0].set_xlabel('GDP (Billion ZAR)')
axes[0, 0].set_ylabel('Unemployment Rate (%)')

# Plot 2: Manufacturing vs Agriculture Output
axes[0, 1].bar(
    df['Province'],
    df['Manufacturing Index'],
    color='steelblue',
    alpha=0.7,
    label='Manufacturing'
)
ax2 = axes[0, 1].twinx()
ax2.plot(
    df['Province'],
    df['Agriculture Output (Million ZAR)'] / 1000,
    'ro-',
    label='Agriculture'
)
axes[0, 1].set_title('Manufacturing Index vs Agriculture Output')
axes[0, 1].set_xlabel('Province')
axes[0, 1].set_ylabel('Manufacturing Index')
ax2.set_ylabel('Agriculture (Billion ZAR)')
axes[0, 1].tick_params(axis='x', rotation=45)
lines1, labels1 = axes[0, 1].get_legend_handles_labels()
lines2, labels2 = ax2.get_legend_handles_labels()
axes[0, 1].legend(lines1 + lines2, labels1 + labels2, loc='upper left')

# Plot 3: Mining Output Pie Chart
mining_data = df[['Province', 'Mining Output (Million ZAR)']].sort_values('Mining Output (Million ZAR)', ascending=False)
top_5_mining = mining_data.head(5)
others = pd.DataFrame({
    'Province': ['Other Provinces'],
    'Mining Output (Million ZAR)': [mining_data['Mining Output (Million ZAR)'].iloc[5:].sum()]
})
mining_plot_data = pd.concat([top_5_mining, others])

axes[1, 0].pie(
    mining_plot_data['Mining Output (Million ZAR)'],
    labels=mining_plot_data['Province'],
    autopct='%1.1f%%',
    startangle=90,
    shadow=True
)
axes[1, 0].set_title('Mining Output Distribution by Province')

# Plot 4: Tourism and Inflation Relationship
sns.scatterplot(
    x='Tourism Revenue (Million ZAR)', 
    y='Inflation Rate',
    size='GDP (Billion ZAR)',
    hue='Province',
    data=df,
    ax=axes[1, 1]
)
axes[1, 1].set_title('Tourism Revenue vs Inflation Rate')
axes[1, 1].set_xlabel('Tourism Revenue (Million ZAR)')
axes[1, 1].set_ylabel('Inflation Rate (%)')

# Adjust layout and return the figure
plt.tight_layout()
plt.subplots_adjust(top=0.9)
fig.suptitle('South African Provincial Economic Analysis', fontsize=16)
return fig`}
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Example 3: Machine Learning */}
            <div className="border rounded-md overflow-hidden">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3">
                <h3 className="text-sm font-medium mb-1">Machine Learning Model</h3>
                <p className="text-xs">This script builds a property price prediction model using South African housing data and key features.</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-purple-600" />
                    <span className="text-xs font-medium">Property Price Prediction Model</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 text-xs"
                    onClick={() => handleCopy(`import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score

# Property data is available as 'df'

# Step 1: Data preparation
# First, clean the data and handle missing values
df = df.dropna(subset=['Sale Price (ZAR)'])
df['Bedrooms'] = df['Bedrooms'].fillna(df['Bedrooms'].median())
df['Bathrooms'] = df['Bathrooms'].fillna(df['Bathrooms'].median())
df['Floor Area (m²)'] = df['Floor Area (m²)'].fillna(df['Floor Area (m²)'].median())
df['Erf Size (m²)'] = df['Erf Size (m²)'].fillna(0)  # Apartments have no erf size
df['Year Built'] = df['Year Built'].fillna(df['Year Built'].median())

# Step 2: Feature engineering
# Extract amenities
df['Has_Pool'] = df['Amenities'].str.contains('Pool', case=False, na=False).astype(int)
df['Has_Garden'] = df['Amenities'].str.contains('Garden', case=False, na=False).astype(int)
df['Has_Security'] = df['Amenities'].str.contains('Security', case=False, na=False).astype(int)
df['Has_Garage'] = df['Amenities'].str.contains('Garage', case=False, na=False).astype(int)

# Calculate property age
from datetime import datetime
current_year = datetime.now().year
df['Property_Age'] = current_year - df['Year Built']

# Step 3: Define features and target
X = df[['Area', 'Property Type', 'Bedrooms', 'Bathrooms', 'Floor Area (m²)', 'Erf Size (m²)', 
        'Property_Age', 'Has_Pool', 'Has_Garden', 'Has_Security', 'Has_Garage']]
y = df['Sale Price (ZAR)']

# Step 4: Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 5: Create preprocessing pipeline
categorical_features = ['Area', 'Property Type']
categorical_transformer = Pipeline(steps=[
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

numerical_features = ['Bedrooms', 'Bathrooms', 'Floor Area (m²)', 'Erf Size (m²)', 
                     'Property_Age', 'Has_Pool', 'Has_Garden', 'Has_Security', 'Has_Garage']
numerical_transformer = Pipeline(steps=[
    ('scaler', StandardScaler())
])

preprocessor = ColumnTransformer(
    transformers=[
        ('cat', categorical_transformer, categorical_features),
        ('num', numerical_transformer, numerical_features)
    ])

# Step 6: Create and train model
model = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))
])

model.fit(X_train, y_train)

# Step 7: Evaluate model
y_pred = model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# Format the results as a dataframe
evaluation = pd.DataFrame({
    'Metric': ['Mean Absolute Error', 'R² Score'],
    'Value': [f'R {mae:,.2f}', f'{r2:.3f}']
})

# Return the evaluation metrics
return evaluation`, "machineLearning")}
                  >
                    {copyStatus["machineLearning"] ? (
                      <>
                        <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-1 h-3 w-3" /> Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className="mt-2">
                  <pre className="text-xs overflow-auto p-2 bg-slate-100 dark:bg-slate-900/40 rounded-md whitespace-pre-wrap">
{`import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score

# Property data is available as 'df'

# Step 1: Data preparation
# First, clean the data and handle missing values
df = df.dropna(subset=['Sale Price (ZAR)'])
df['Bedrooms'] = df['Bedrooms'].fillna(df['Bedrooms'].median())
df['Bathrooms'] = df['Bathrooms'].fillna(df['Bathrooms'].median())
df['Floor Area (m²)'] = df['Floor Area (m²)'].fillna(df['Floor Area (m²)'].median())
df['Erf Size (m²)'] = df['Erf Size (m²)'].fillna(0)  # Apartments have no erf size
df['Year Built'] = df['Year Built'].fillna(df['Year Built'].median())

# Step 2: Feature engineering
# Extract amenities
df['Has_Pool'] = df['Amenities'].str.contains('Pool', case=False, na=False).astype(int)
df['Has_Garden'] = df['Amenities'].str.contains('Garden', case=False, na=False).astype(int)
df['Has_Security'] = df['Amenities'].str.contains('Security', case=False, na=False).astype(int)
df['Has_Garage'] = df['Amenities'].str.contains('Garage', case=False, na=False).astype(int)

# Calculate property age
from datetime import datetime
current_year = datetime.now().year
df['Property_Age'] = current_year - df['Year Built']

# Step 3: Define features and target
X = df[['Area', 'Property Type', 'Bedrooms', 'Bathrooms', 'Floor Area (m²)', 'Erf Size (m²)', 
        'Property_Age', 'Has_Pool', 'Has_Garden', 'Has_Security', 'Has_Garage']]
y = df['Sale Price (ZAR)']

# Step 4: Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 5: Create preprocessing pipeline
categorical_features = ['Area', 'Property Type']
categorical_transformer = Pipeline(steps=[
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

numerical_features = ['Bedrooms', 'Bathrooms', 'Floor Area (m²)', 'Erf Size (m²)', 
                     'Property_Age', 'Has_Pool', 'Has_Garden', 'Has_Security', 'Has_Garage']
numerical_transformer = Pipeline(steps=[
    ('scaler', StandardScaler())
])

preprocessor = ColumnTransformer(
    transformers=[
        ('cat', categorical_transformer, categorical_features),
        ('num', numerical_transformer, numerical_features)
    ])

# Step 6: Create and train model
model = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))
])

model.fit(X_train, y_train)

# Step 7: Evaluate model
y_pred = model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# Format the results as a dataframe
evaluation = pd.DataFrame({
    'Metric': ['Mean Absolute Error', 'R² Score'],
    'Value': [f'R {mae:,.2f}', f'{r2:.3f}']
})

# Return the evaluation metrics
return evaluation`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Exercise */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Hands-on Exercise: Property Price Prediction</CardTitle>
          <CardDescription>
            Build a machine learning model in Excel using Python to predict South African property prices
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-sm space-y-4">
            <p>
              In this exercise, you'll build a machine learning model to predict property prices in South Africa using 
              Python in Excel. Follow these step-by-step instructions to create a fully functional ML model directly
              inside your Excel workbook.
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-4">
              <h3 className="text-sm font-medium">Prerequisites</h3>
              <ul className="list-disc pl-6 text-xs space-y-2">
                <li>Microsoft 365 Excel with Python functionality enabled</li>
                <li>Internet connection (for Python library access)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Step 1: Prepare Your Excel Workbook</h3>
              <ol className="list-decimal pl-6 text-xs space-y-3">
                <li>
                  <strong>Create a new Excel workbook</strong> and save it with an appropriate name (e.g., "SA_Property_Price_Prediction.xlsx").
                </li>
                <li>
                  <strong>Create three worksheets</strong> named: "Property_Data", "ML_Model", and "Predictions".
                </li>
                <li>
                  <strong>In the Property_Data sheet</strong>, paste the Johannesburg Property Sales Data from the sample datasets section.
                  <ul className="list-disc pl-6 mt-1">
                    <li>Make sure the data starts in cell A1</li>
                    <li>Format the data as a proper Excel table by selecting the data range and pressing Ctrl+T (or Insert → Table)</li>
                    <li>Name the table "PropertyTable" (Table Design tab → Table Name)</li>
                  </ul>
                </li>
              </ol>

              <h3 className="font-medium">Step 2: Set Up Your First Python Script</h3>
              <ol className="list-decimal pl-6 text-xs space-y-3">
                <li>
                  <strong>Go to the ML_Model sheet</strong> and click on cell A1.
                </li>
                <li>
                  <strong>Access Python in Excel</strong> by navigating to the Insert tab and selecting "Python Script" (or use keyboard shortcut Alt+F8+P in newer versions).
                </li>
                <li>
                  <strong>In the Python editor</strong>, paste the Property Data Preparation script from the Python Code Examples section above.
                </li>
                <li>
                  <strong>Modify the first line</strong> to reference your Excel table:
                  <pre className="bg-slate-100 p-2 mt-1 rounded text-xs"># Load data from Excel table
df = px.DataFrame(px.get_worksheet_data("PropertyTable"))</pre>
                </li>
                <li>
                  <strong>Run the script</strong> by clicking the Run button. This will clean and process your property data.
                </li>
                <li>
                  <strong>Review the output</strong> in Excel. You should see the enhanced dataset with new columns like "Price per m²" and "Property Age".
                </li>
              </ol>

              <h3 className="font-medium">Step 3: Build the Machine Learning Model</h3>
              <ol className="list-decimal pl-6 text-xs space-y-3">
                <li>
                  <strong>In the ML_Model sheet</strong>, click on cell A20 (or any empty cell below your first output).
                </li>
                <li>
                  <strong>Insert another Python script</strong> and paste the Property Price Prediction Model script from the Python Code Examples section above.
                </li>
                <li>
                  <strong>Modify the script</strong> to use the already processed data from your previous script output, replacing the first few lines with:
                  <pre className="bg-slate-100 p-2 mt-1 rounded text-xs"># Use the already processed dataframe
# No need to clean data again as it's already done

# Step 3: Define features and target
X = df[['Area', 'Property Type', 'Bedrooms', 'Bathrooms', 'Floor Area (m²)', 'Erf Size (m²)', 
        'Property Age', 'Has Pool', 'Has Garden', 'Has Security', 'Has Garage']]
y = df['Sale Price (ZAR)']</pre>
                </li>
                <li>
                  <strong>Run the script</strong> to train the machine learning model. You'll see the model evaluation metrics in the output.
                </li>
              </ol>

              <h3 className="font-medium">Step 4: Create the Prediction Interface</h3>
              <ol className="list-decimal pl-6 text-xs space-y-3">
                <li>
                  <strong>Go to the Predictions sheet</strong> and create a simple input form with the following fields:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Area (e.g., Sandton, Rosebank, etc.)</li>
                    <li>Property Type (House, Apartment, Townhouse, etc.)</li>
                    <li>Bedrooms (number)</li>
                    <li>Bathrooms (number)</li>
                    <li>Floor Area (m²)</li>
                    <li>Erf Size (m²)</li>
                    <li>Year Built</li>
                    <li>Checkboxes for amenities: Pool, Garden, Garage, Security</li>
                  </ul>
                </li>
                <li>
                  <strong>Create a prediction button</strong> using a shape or form control.
                </li>
                <li>
                  <strong>Below your input form</strong>, insert a new Python script and paste the following code:
                  <pre className="bg-slate-100 p-2 mt-1 rounded text-xs overflow-auto whitespace-pre-wrap">
{`import pandas as pd
import numpy as np
from datetime import datetime

# Get input values from Excel
inputs = px.get_values('B2:B11')  # Adjust cell range to match your input form

# Create a dataframe with the new property
new_property = pd.DataFrame({
    'Area': [inputs[0]],
    'Property Type': [inputs[1]],
    'Bedrooms': [float(inputs[2])],
    'Bathrooms': [float(inputs[3])],
    'Floor Area (m²)': [float(inputs[4])],
    'Erf Size (m²)': [float(inputs[5])],
    'Year Built': [int(inputs[6])],
    'Has Pool': [1 if inputs[7] == 'Yes' else 0],
    'Has Garden': [1 if inputs[8] == 'Yes' else 0],
    'Has Security': [1 if inputs[9] == 'Yes' else 0],
    'Has Garage': [1 if inputs[10] == 'Yes' else 0]
})

# Calculate property age
current_year = datetime.now().year
new_property['Property_Age'] = current_year - new_property['Year Built']

# Use the previously trained model (accessible through global variables)
# Assuming model was saved in the previous script
predicted_price = model.predict(new_property)[0]

# Format the price with commas and ZAR
formatted_price = f'R {predicted_price:,.2f}'

# Return the prediction
result = pd.DataFrame({
    'Predicted Property Price': [formatted_price]
})
return result`}
                  </pre>
                </li>
                <li>
                  <strong>Link the prediction button</strong> to run this script when clicked.
                </li>
              </ol>

              <h3 className="font-medium">Step 5: Test and Refine Your Model</h3>
              <ol className="list-decimal pl-6 text-xs space-y-3">
                <li>
                  <strong>Test your prediction model</strong> with different property scenarios from various South African regions.
                </li>
                <li>
                  <strong>Compare the predictions</strong> with actual property listings to gauge the model's accuracy.
                </li>
                <li>
                  <strong>Refine the model</strong> by adjusting features or model parameters if needed.
                </li>
              </ol>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-md border-l-4 border-amber-500">
              <h3 className="text-sm font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 text-amber-500"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                Pro Tips
              </h3>
              <ul className="list-disc pl-6 text-xs mt-2 space-y-1">
                <li>Always save your work before running Python scripts in Excel</li>
                <li>For larger datasets, consider sampling the data to improve performance</li>
                <li>Use descriptive variable names to make your code more maintainable</li>
                <li>Add comments to explain complex sections of your Python code</li>
                <li>Consider exporting model files for reuse in other Python applications</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Python Scripts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Additional Python Scripts</CardTitle>
          <CardDescription>
            More advanced Python scripts for business analysis in South Africa
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-sm">
            <p>
              Expand your Python in Excel skills with these advanced scripts for customer segmentation and economic forecasting,
              specifically tailored for South African business contexts.
            </p>
          </div>
          
          {/* Customer Segmentation Script */}
          <div className="border rounded-md overflow-hidden">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3">
              <h3 className="text-sm font-medium mb-1">Customer Segmentation</h3>
              <p className="text-xs">This script segments South African retail customers using K-means clustering based on spending patterns and demographics.</p>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-indigo-600" />
                  <span className="text-xs font-medium">Retail Customer Segmentation</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 text-xs"
                  onClick={() => handleCopy(customerSegmentationScript, "customerSegmentation")}                  
                >
                  {copyStatus["customerSegmentation"] ? (
                    <>
                      <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-1 h-3 w-3" /> Copy
                    </>
                  )}
                </Button>
              </div>
              <div className="mt-2">
                <pre className="text-xs overflow-auto p-2 bg-slate-100 dark:bg-slate-900/40 rounded-md max-h-60 whitespace-pre-wrap">
                  {customerSegmentationScript}
                </pre>
              </div>
            </div>
          </div>
          
          {/* Economic Forecasting Script */}
          <div className="border rounded-md overflow-hidden">
            <div className="bg-teal-50 dark:bg-teal-900/20 p-3">
              <h3 className="text-sm font-medium mb-1">Economic Forecasting</h3>
              <p className="text-xs">This script uses time series analysis to forecast economic indicators for South African provinces.</p>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-teal-600" />
                  <span className="text-xs font-medium">Provincial Economic Forecasting</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 text-xs"
                  onClick={() => handleCopy(economicForecastingScript, "economicForecasting")}
                >
                  {copyStatus["economicForecasting"] ? (
                    <>
                      <CheckCircle2 className="mr-1 h-3 w-3" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-1 h-3 w-3" /> Copy
                    </>
                  )}
                </Button>
              </div>
              <div className="mt-2">
                <pre className="text-xs overflow-auto p-2 bg-slate-100 dark:bg-slate-900/40 rounded-md max-h-60 whitespace-pre-wrap">
                  {economicForecastingScript}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/20 p-4 rounded-md border space-y-2">
            <h3 className="text-sm font-medium">Taking It Further</h3>
            <p className="text-xs">
              These scripts demonstrate the power of Python in Excel for South African business analysis. Try combining these techniques with Excel's built-in features for comprehensive business solutions. For example, use Excel formulas and conditional formatting to highlight insights from your Python analysis, or create dashboards that blend Excel visualizations with Python-generated charts.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PythonInExcelExercise;
