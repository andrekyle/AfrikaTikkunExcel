import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Database, TrendingUp, Brain, FileSpreadsheet, Zap, AlertCircle, CheckCircle, BookOpen } from "lucide-react";
import CopyableContent from "@/components/CopyableContent";

interface PythonInExcelLessonProps {
  onContinue?: () => void;
}

const PythonInExcelLesson: React.FC<PythonInExcelLessonProps> = ({ onContinue }) => {
  const sampleSalesData = `Date,Product,Category,Sales,Region
2024-01-15,Laptop,Electronics,1200,North
2024-01-16,Desk Chair,Furniture,350,South
2024-01-17,Smartphone,Electronics,800,East
2024-01-18,Coffee Table,Furniture,450,West
2024-01-19,Tablet,Electronics,600,North
2024-01-20,Bookshelf,Furniture,280,South
2024-01-21,Monitor,Electronics,400,East
2024-01-22,Sofa,Furniture,1100,West
2024-01-23,Headphones,Electronics,150,North
2024-01-24,Dining Table,Furniture,750,South`;

  const sampleStockData = `Symbol,Price,Volume,Market_Cap
AAPL,175.50,45000000,2800000000000
MSFT,380.25,28000000,2850000000000
GOOGL,140.75,22000000,1750000000000
AMZN,155.20,35000000,1600000000000
TSLA,245.80,55000000,780000000000
META,485.60,18000000,1250000000000
NVDA,875.30,40000000,2150000000000
NFLX,425.90,12000000,190000000000`;

  const pythonBasicsCode = `# Basic Python in Excel - Data Analysis
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Create DataFrame from Excel data
df = pd.DataFrame(xl("A1:E11", headers=True))

# Basic data analysis
print("Dataset Overview:")
print(f"Total rows: {len(df)}")
print(f"Columns: {list(df.columns)}")
print(f"Data types: {df.dtypes}")

# Summary statistics
print("\\nSummary Statistics:")
print(df.describe())

# Group by analysis
sales_by_region = df.groupby('Region')['Sales'].agg(['sum', 'mean', 'count'])
print("\\nSales by Region:")
print(sales_by_region)`;

  const machineLearningCode = `# Machine Learning with Python in Excel
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# Load data from Excel
df = pd.DataFrame(xl("A1:E11", headers=True))

# Feature engineering
df['Date'] = pd.to_datetime(df['Date'])
df['DayOfYear'] = df['Date'].dt.dayofyear
df['Month'] = df['Date'].dt.month

# Encode categorical variables
category_mapping = {'Electronics': 1, 'Furniture': 2}
region_mapping = {'North': 1, 'South': 2, 'East': 3, 'West': 4}

df['Category_Encoded'] = df['Category'].map(category_mapping)
df['Region_Encoded'] = df['Region'].map(region_mapping)

# Prepare features and target
features = ['DayOfYear', 'Month', 'Category_Encoded', 'Region_Encoded']
X = df[features]
y = df['Sales']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Train models
lr_model = LinearRegression()
rf_model = RandomForestRegressor(n_estimators=100, random_state=42)

lr_model.fit(X_train, y_train)
rf_model.fit(X_train, y_train)

# Make predictions
lr_pred = lr_model.predict(X_test)
rf_pred = rf_model.predict(X_test)

# Evaluate models
lr_r2 = r2_score(y_test, lr_pred)
rf_r2 = r2_score(y_test, rf_pred)

print(f"Linear Regression R²: {lr_r2:.3f}")
print(f"Random Forest R²: {rf_r2:.3f}")

# Feature importance (Random Forest)
feature_importance = pd.DataFrame({
    'Feature': features,
    'Importance': rf_model.feature_importances_
}).sort_values('Importance', ascending=False)

print("\\nFeature Importance:")
print(feature_importance)`;

  const dataVisualizationCode = `# Advanced Data Visualization with Python in Excel
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import plotly.graph_objects as go

# Load data
df = pd.DataFrame(xl("A1:E11", headers=True))

# Set style for better-looking plots
plt.style.use('seaborn-v0_8')
sns.set_palette("husl")

# 1. Sales Distribution by Category
fig, axes = plt.subplots(2, 2, figsize=(15, 12))

# Bar plot - Sales by Category
category_sales = df.groupby('Category')['Sales'].sum()
axes[0, 0].bar(category_sales.index, category_sales.values)
axes[0, 0].set_title('Total Sales by Category')
axes[0, 0].set_ylabel('Sales ($)')

# Box plot - Sales distribution by Region
df.boxplot(column='Sales', by='Region', ax=axes[0, 1])
axes[0, 1].set_title('Sales Distribution by Region')
axes[0, 1].set_xlabel('Region')

# Time series plot
df['Date'] = pd.to_datetime(df['Date'])
df_sorted = df.sort_values('Date')
axes[1, 0].plot(df_sorted['Date'], df_sorted['Sales'], marker='o')
axes[1, 0].set_title('Sales Trend Over Time')
axes[1, 0].set_ylabel('Sales ($)')
axes[1, 0].tick_params(axis='x', rotation=45)

# Correlation heatmap
numeric_cols = df.select_dtypes(include=[np.number]).columns
correlation_matrix = df[numeric_cols].corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', ax=axes[1, 1])
axes[1, 1].set_title('Correlation Matrix')

plt.tight_layout()
plt.show()

# Interactive Plotly visualization
fig_interactive = px.scatter(df, x='Date', y='Sales', color='Category', 
                           size='Sales', hover_data=['Product', 'Region'],
                           title='Interactive Sales Analysis')
fig_interactive.show()`;

  const stockAnalysisCode = `# Stock Market Analysis with Python in Excel
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import yfinance as yf
from datetime import datetime, timedelta

# Load stock data from Excel
stock_df = pd.DataFrame(xl("A1:E9", headers=True))

# Calculate additional metrics
stock_df['Price_Change'] = stock_df['Price'].pct_change()
stock_df['Market_Cap_Billions'] = stock_df['Market_Cap'] / 1e9
stock_df['Volume_Millions'] = stock_df['Volume'] / 1e6

# Portfolio analysis
total_market_cap = stock_df['Market_Cap'].sum()
stock_df['Portfolio_Weight'] = stock_df['Market_Cap'] / total_market_cap

print("Portfolio Analysis:")
print(stock_df[['Symbol', 'Price', 'Market_Cap_Billions', 'Portfolio_Weight']].round(3))

# Risk metrics
stock_df['Price_Volatility'] = np.random.normal(0.02, 0.01, len(stock_df))  # Simulated
stock_df['Beta'] = np.random.normal(1.0, 0.3, len(stock_df))  # Simulated

# Calculate portfolio beta
portfolio_beta = (stock_df['Portfolio_Weight'] * stock_df['Beta']).sum()
print(f"\\nPortfolio Beta: {portfolio_beta:.3f}")

# Visualization
fig, axes = plt.subplots(2, 2, figsize=(15, 10))

# Market cap distribution
axes[0, 0].pie(stock_df['Market_Cap_Billions'], labels=stock_df['Symbol'], autopct='%1.1f%%')
axes[0, 0].set_title('Market Cap Distribution')

# Price vs Volume scatter
axes[0, 1].scatter(stock_df['Volume_Millions'], stock_df['Price'], 
                   s=stock_df['Market_Cap_Billions']*10, alpha=0.6)
axes[0, 1].set_xlabel('Volume (Millions)')
axes[0, 1].set_ylabel('Price ($)')
axes[0, 1].set_title('Price vs Volume (Size = Market Cap)')

# Risk-Return plot
axes[1, 0].scatter(stock_df['Price_Volatility'], stock_df['Price_Change'], 
                   s=stock_df['Market_Cap_Billions']*10, alpha=0.6)
axes[1, 0].set_xlabel('Volatility')
axes[1, 0].set_ylabel('Price Change')
axes[1, 0].set_title('Risk-Return Analysis')

# Top performers
top_stocks = stock_df.nlargest(5, 'Market_Cap_Billions')
axes[1, 1].barh(top_stocks['Symbol'], top_stocks['Market_Cap_Billions'])
axes[1, 1].set_xlabel('Market Cap (Billions)')
axes[1, 1].set_title('Top 5 Stocks by Market Cap')

plt.tight_layout()
plt.show()`;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Code className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Python in Excel</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Leverage Python's powerful data science libraries directly within Excel for advanced analytics, machine learning, and visualization.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">Data Science</Badge>
          <Badge variant="secondary">Machine Learning</Badge>
          <Badge variant="secondary">Pandas</Badge>
          <Badge variant="secondary">Matplotlib</Badge>
          <Badge variant="secondary">Scikit-learn</Badge>
        </div>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">By the end of this lesson, you will:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Set up and use Python in Excel
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Perform advanced data analysis with Pandas
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Create machine learning models
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Build interactive visualizations
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Key Technologies:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <Code className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  Python in Excel (Microsoft 365)
                </li>
                <li className="flex items-start gap-2">
                  <Database className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Pandas for data manipulation
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  Matplotlib & Seaborn for visualization
                </li>
                <li className="flex items-start gap-2">
                  <Brain className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  Scikit-learn for machine learning
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Python in Excel Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileSpreadsheet className="h-5 w-5" />
            Python in Excel Overview
          </CardTitle>
          <CardDescription>
            Understanding Microsoft's Python integration in Excel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">What is Python in Excel?</h4>
              <ul className="space-y-2 text-sm">
                <li>• Native Python integration in Excel cells</li>
                <li>• Access to popular Python libraries (Pandas, NumPy, Matplotlib)</li>
                <li>• Cloud-based Python execution via Microsoft Cloud</li>
                <li>• Seamless data exchange between Excel and Python</li>
                <li>• Advanced analytics without leaving Excel</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-sm">
                <li>• Powerful data science capabilities</li>
                <li>• Machine learning model development</li>
                <li>• Advanced statistical analysis</li>
                <li>• Rich data visualizations</li>
                <li>• Familiar Excel interface</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-800">Requirements</h4>
                <p className="text-sm text-blue-700 mt-1">
                  Python in Excel requires Microsoft 365 subscription and is currently available in Excel for Windows and Excel for the web.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 1: Basic Data Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Project 1: Sales Data Analysis with Pandas
          </CardTitle>
          <CardDescription>
            Learn fundamental data analysis techniques using Python in Excel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Sample Sales Data</h4>
            <p className="text-sm text-gray-600 mb-3">
              Copy this data to cells A1:E11 in your Excel worksheet:
            </p>
            <CopyableContent content={sampleSalesData} label="Sales Data">
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
{sampleSalesData}
              </pre>
            </CopyableContent>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Python Analysis Code</h4>
            <p className="text-sm text-gray-600 mb-3">
              Enter this Python code in a cell (start with =PY()):
            </p>
            <CopyableContent content={pythonBasicsCode} label="Python Data Analysis">
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
{pythonBasicsCode}
              </pre>
            </CopyableContent>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Expected Results</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Dataset overview with 10 rows and 5 columns</li>
              <li>• Summary statistics for numerical columns</li>
              <li>• Sales analysis grouped by region</li>
              <li>• Data type information for each column</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Project 2: Machine Learning */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Project 2: Sales Prediction with Machine Learning
          </CardTitle>
          <CardDescription>
            Build predictive models using scikit-learn in Excel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Machine Learning Implementation</h4>
            <p className="text-sm text-gray-600 mb-3">
              Create predictive models to forecast sales based on various features:
            </p>
            <CopyableContent content={machineLearningCode} label="Machine Learning Code">
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
{machineLearningCode}
              </pre>
            </CopyableContent>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Model Features</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Day of year (seasonality)</li>
                <li>• Month (monthly trends)</li>
                <li>• Product category (encoded)</li>
                <li>• Sales region (encoded)</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Model Comparison</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Linear Regression (baseline)</li>
                <li>• Random Forest (ensemble)</li>
                <li>• R² score evaluation</li>
                <li>• Feature importance analysis</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 3: Data Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Project 3: Advanced Data Visualization
          </CardTitle>
          <CardDescription>
            Create stunning visualizations with Matplotlib and Plotly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Visualization Code</h4>
            <p className="text-sm text-gray-600 mb-3">
              Generate multiple chart types and interactive visualizations:
            </p>
            <CopyableContent content={dataVisualizationCode} label="Data Visualization">
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
{dataVisualizationCode}
              </pre>
            </CopyableContent>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Static Visualizations</h4>
              <ul className="text-sm space-y-1">
                <li>• Bar charts for category comparison</li>
                <li>• Box plots for distribution analysis</li>
                <li>• Time series plots for trends</li>
                <li>• Correlation heatmaps</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Interactive Features</h4>
              <ul className="text-sm space-y-1">
                <li>• Hover data with Plotly</li>
                <li>• Zoom and pan capabilities</li>
                <li>• Dynamic filtering</li>
                <li>• Export to various formats</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 4: Stock Market Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Project 4: Stock Market Portfolio Analysis
          </CardTitle>
          <CardDescription>
            Analyze stock market data and calculate portfolio metrics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Sample Stock Data</h4>
            <p className="text-sm text-gray-600 mb-3">
              Copy this stock market data to cells A1:E9:
            </p>
            <CopyableContent content={sampleStockData} label="Stock Data">
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
{sampleStockData}
              </pre>
            </CopyableContent>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Stock Analysis Code</h4>
            <p className="text-sm text-gray-600 mb-3">
              Comprehensive portfolio analysis with risk metrics:
            </p>
            <CopyableContent content={stockAnalysisCode} label="Stock Analysis">
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
{stockAnalysisCode}
              </pre>
            </CopyableContent>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Analysis Features</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
              <ul className="space-y-1">
                <li>• Portfolio weight calculation</li>
                <li>• Risk metrics (Beta, Volatility)</li>
                <li>• Market cap analysis</li>
                <li>• Performance visualization</li>
              </ul>
              <ul className="space-y-1">
                <li>• Risk-return scatter plots</li>
                <li>• Market cap distribution</li>
                <li>• Volume vs price analysis</li>
                <li>• Top performers ranking</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Best Practices & Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-600 mb-3">✅ Do's</h4>
              <ul className="space-y-2 text-sm">
                <li>• Use xl() function to reference Excel data</li>
                <li>• Start Python cells with =PY()</li>
                <li>• Import libraries at the beginning</li>
                <li>• Use descriptive variable names</li>
                <li>• Comment your code for clarity</li>
                <li>• Test with small datasets first</li>
                <li>• Save workbooks regularly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-3">❌ Don'ts</h4>
              <ul className="space-y-2 text-sm">
                <li>• Don't use file I/O operations</li>
                <li>• Avoid infinite loops</li>
                <li>• Don't install additional packages</li>
                <li>• Avoid very large datasets (&gt;1M rows)</li>
                <li>• Don't use network requests</li>
                <li>• Avoid complex GUI operations</li>
                <li>• Don't rely on external files</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle>Key Takeaways</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Technical Skills Gained</h4>
              <ul className="space-y-2 text-sm">
                <li>• Python integration in Excel environment</li>
                <li>• Advanced data analysis with Pandas</li>
                <li>• Machine learning model development</li>
                <li>• Data visualization techniques</li>
                <li>• Statistical analysis and metrics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Business Applications</h4>
              <ul className="space-y-2 text-sm">
                <li>• Sales forecasting and prediction</li>
                <li>• Portfolio risk analysis</li>
                <li>• Customer behavior analysis</li>
                <li>• Market trend identification</li>
                <li>• Automated reporting and insights</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      <div className="flex justify-center pt-6">
        <Button onClick={onContinue} size="lg" className="bg-blue-600 hover:bg-blue-700">
          Continue to Next Lesson
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PythonInExcelLesson;
