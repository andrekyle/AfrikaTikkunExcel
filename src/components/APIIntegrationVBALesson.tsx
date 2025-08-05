import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Globe, Code, Zap, Target, CheckCircle, AlertTriangle, Database, Key, Shield } from 'lucide-react';
import CopyableContent from './CopyableContent';

interface APIIntegrationVBALessonProps {
  onContinue?: () => void;
}

const APIIntegrationVBALesson: React.FC<APIIntegrationVBALessonProps> = ({ onContinue }) => {
  const [activeTab, setActiveTab] = useState('weather');

  const vbaCodeExamples = {
    weatherAPI: `Sub GetWeatherData()
    Dim http As Object
    Dim url As String
    Dim response As String
    Dim json As Object
    
    ' Create HTTP request object
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    ' API endpoint (replace YOUR_API_KEY with actual key)
    url = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric"
    
    ' Make GET request
    http.Open "GET", url, False
    http.send
    
    ' Get response
    response = http.responseText
    
    ' Parse JSON response (requires JSON converter)
    Set json = JsonConverter.ParseJson(response)
    
    ' Extract data to Excel cells
    Range("A1").Value = "City"
    Range("B1").Value = json("name")
    Range("A2").Value = "Temperature"
    Range("B2").Value = json("main")("temp") & "°C"
    Range("A3").Value = "Description"
    Range("B3").Value = json("weather")(1)("description")
    Range("A4").Value = "Humidity"
    Range("B4").Value = json("main")("humidity") & "%"
    
    MsgBox "Weather data updated successfully!"
End Sub`,

    stockAPI: `Sub GetStockPrices()
    Dim http As Object
    Dim url As String
    Dim response As String
    Dim json As Object
    Dim i As Integer
    
    ' Stock symbols to fetch
    Dim symbols As Variant
    symbols = Array("AAPL", "GOOGL", "MSFT", "TSLA")
    
    ' Set up headers
    Range("A1").Value = "Symbol"
    Range("B1").Value = "Price"
    Range("C1").Value = "Change"
    Range("D1").Value = "Change %"
    
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    For i = 0 To UBound(symbols)
        ' API endpoint (replace YOUR_API_KEY)
        url = "https://api.twelvedata.com/price?symbol=" & symbols(i) & "&apikey=YOUR_API_KEY"
        
        http.Open "GET", url, False
        http.send
        
        response = http.responseText
        Set json = JsonConverter.ParseJson(response)
        
        ' Write data to Excel
        Range("A" & (i + 2)).Value = symbols(i)
        Range("B" & (i + 2)).Value = "$" & json("price")
        
        ' Add some delay to avoid rate limiting
        Application.Wait (Now + TimeValue("0:00:01"))
    Next i
    
    MsgBox "Stock prices updated!"
End Sub`,

    currencyAPI: `Sub GetExchangeRates()
    Dim http As Object
    Dim url As String
    Dim response As String
    Dim json As Object
    
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    ' Free currency API (no key required)
    url = "https://api.exchangerate-api.com/v4/latest/USD"
    
    http.Open "GET", url, False
    http.send
    
    response = http.responseText
    Set json = JsonConverter.ParseJson(response)
    
    ' Set up headers
    Range("A1").Value = "Currency"
    Range("B1").Value = "Rate (USD)"
    Range("C1").Value = "Last Updated"
    
    ' Extract common currencies
    Range("A2").Value = "EUR": Range("B2").Value = json("rates")("EUR")
    Range("A3").Value = "GBP": Range("B3").Value = json("rates")("GBP")
    Range("A4").Value = "JPY": Range("B4").Value = json("rates")("JPY")
    Range("A5").Value = "CAD": Range("B5").Value = json("rates")("CAD")
    Range("A6").Value = "AUD": Range("B6").Value = json("rates")("AUD")
    
    Range("C2").Value = json("date")
    
    MsgBox "Exchange rates updated!"
End Sub`,

    jsonConverter: `' Add this to a new module called "JsonConverter"
' This is a simplified JSON parser for basic use cases

Public Function ParseJson(jsonString As String) As Object
    ' This is a placeholder - in real implementation, you would use:
    ' 1. VBA-JSON library by Tim Hall
    ' 2. Or Excel's built-in JSON parsing (Excel 365)
    ' 3. Or a custom JSON parser
    
    ' For Excel 365, you can use:
    ' Set ParseJson = Application.WorksheetFunction.WebService(url)
    
    Set ParseJson = CreateObject("Scripting.Dictionary")
    ' Add parsing logic here...
End Function`
  };

  const apiExamples = [
    {
      name: "Weather API",
      description: "Get current weather data for any city",
      endpoint: "api.openweathermap.org",
      free: true,
      useCase: "Weather dashboards, location-based analysis"
    },
    {
      name: "Stock Market API",
      description: "Real-time stock prices and financial data",
      endpoint: "twelvedata.com",
      free: "Limited",
      useCase: "Investment tracking, portfolio analysis"
    },
    {
      name: "Currency Exchange",
      description: "Live exchange rates for all currencies",
      endpoint: "exchangerate-api.com",
      free: true,
      useCase: "International business, currency conversion"
    },
    {
      name: "News API",
      description: "Latest news articles and headlines",
      endpoint: "newsapi.org",
      free: "Limited",
      useCase: "Market sentiment, news monitoring"
    },
    {
      name: "Google Sheets API",
      description: "Read/write data to Google Sheets",
      endpoint: "sheets.googleapis.com",
      free: "Quota limits",
      useCase: "Data synchronization, collaboration"
    }
  ];

  const securityBestPractices = [
    {
      title: "API Key Management",
      description: "Never hardcode API keys in your VBA code",
      solution: "Store keys in Excel cells or external config files"
    },
    {
      title: "HTTPS Only",
      description: "Always use HTTPS endpoints for secure data transmission",
      solution: "Verify API endpoints use SSL/TLS encryption"
    },
    {
      title: "Rate Limiting",
      description: "Respect API rate limits to avoid being blocked",
      solution: "Add delays between requests and implement retry logic"
    },
    {
      title: "Error Handling",
      description: "Handle network failures and API errors gracefully",
      solution: "Use Try-Catch blocks and provide user feedback"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
            <Globe className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">API Integration with VBA</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn how to connect Excel to external APIs using VBA to fetch real-time data and automate data collection
        </p>
        <div className="flex justify-center gap-2">
          <Badge variant="secondary">API Integration</Badge>
          <Badge variant="secondary">Real-time Data</Badge>
          <Badge variant="secondary">Automation</Badge>
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
              <span>Understand REST API concepts and HTTP methods</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Make HTTP requests from VBA using XMLHTTP</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Parse JSON responses and extract data</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Handle API authentication and security</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Build automated data collection systems</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Introduction to APIs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            What are APIs?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            <strong>API (Application Programming Interface)</strong> allows different software applications to communicate with each other. 
            In Excel, we can use APIs to:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Database className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Fetch Live Data</h4>
                  <p className="text-sm text-gray-600">Get real-time information from external sources</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Automate Updates</h4>
                  <p className="text-sm text-gray-600">Automatically refresh data without manual intervention</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Integrate Systems</h4>
                  <p className="text-sm text-gray-600">Connect Excel with other business applications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-purple-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Secure Access</h4>
                  <p className="text-sm text-gray-600">Use authentication to access protected data</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Popular APIs for Excel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Popular APIs for Excel Integration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {apiExamples.map((api, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-blue-700">{api.name}</h4>
                  <Badge variant={api.free === true ? "default" : api.free === "Limited" ? "secondary" : "outline"}>
                    {api.free === true ? "Free" : api.free}
                  </Badge>
                </div>
                <p className="text-gray-700 mb-2">{api.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-mono">{api.endpoint}</span>
                  <span className="text-gray-600">{api.useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project 1: Weather API Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Project 1: Weather Data Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold">Step 1: Set Up API Access</h3>
            <p className="text-sm text-gray-600">
              First, sign up for a free API key at OpenWeatherMap:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 ml-4">
              <li>Visit <a href="https://openweathermap.org/api" className="text-blue-600 underline">openweathermap.org/api</a></li>
              <li>Create a free account</li>
              <li>Generate your API key</li>
              <li>Store the key in cell Z1 of your Excel sheet</li>
            </ol>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 2: VBA Code for Weather API</h3>
            <p className="text-sm text-gray-600">
              Copy this VBA code to fetch weather data:
            </p>
            <CopyableContent
              content={vbaCodeExamples.weatherAPI}
              label="Weather API VBA Code"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {vbaCodeExamples.weatherAPI}
              </pre>
            </CopyableContent>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 3: JSON Converter Setup</h3>
            <p className="text-sm text-gray-600">
              You'll need a JSON parser for VBA. Here's a basic setup:
            </p>
            <CopyableContent
              content={vbaCodeExamples.jsonConverter}
              label="JSON Converter Module"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {vbaCodeExamples.jsonConverter}
              </pre>
            </CopyableContent>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-sm text-blue-800">
                <strong>💡 Pro Tip:</strong> For production use, download the VBA-JSON library by Tim Hall from GitHub, 
                or use Excel 365's built-in JSON parsing capabilities.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project 2: Stock Market API */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Project 2: Stock Price Tracker
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold">Step 1: Stock API Integration</h3>
            <p className="text-sm text-gray-600">
              Create a real-time stock price tracker:
            </p>
            <CopyableContent
              content={vbaCodeExamples.stockAPI}
              label="Stock API VBA Code"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {vbaCodeExamples.stockAPI}
              </pre>
            </CopyableContent>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 2: Automated Updates</h3>
            <p className="text-sm text-gray-600">
              Add this code to automatically refresh stock prices every 5 minutes:
            </p>
            <CopyableContent
              content={`Sub AutoRefreshStocks()
    ' Set up automatic refresh
    Application.OnTime Now + TimeValue("00:05:00"), "GetStockPrices"
End Sub

Sub StopAutoRefresh()
    ' Stop automatic refresh
    Application.OnTime Now + TimeValue("00:05:00"), "GetStockPrices", , False
End Sub`}
              label="Auto Refresh Code"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
{`Sub AutoRefreshStocks()
    ' Set up automatic refresh
    Application.OnTime Now + TimeValue("00:05:00"), "GetStockPrices"
End Sub

Sub StopAutoRefresh()
    ' Stop automatic refresh
    Application.OnTime Now + TimeValue("00:05:00"), "GetStockPrices", , False
End Sub`}
              </pre>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Project 3: Currency Exchange */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Project 3: Currency Exchange Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold">Step 1: Currency API Integration</h3>
            <p className="text-sm text-gray-600">
              Build a currency exchange rate tracker:
            </p>
            <CopyableContent
              content={vbaCodeExamples.currencyAPI}
              label="Currency API VBA Code"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {vbaCodeExamples.currencyAPI}
              </pre>
            </CopyableContent>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold">Step 2: Currency Converter Function</h3>
            <p className="text-sm text-gray-600">
              Create a custom Excel function for currency conversion:
            </p>
            <CopyableContent
              content={`Function ConvertCurrency(amount As Double, fromCurrency As String, toCurrency As String) As Double
    Dim http As Object
    Dim url As String
    Dim response As String
    Dim json As Object
    Dim rate As Double
    
    Set http = CreateObject("MSXML2.XMLHTTP")
    url = "https://api.exchangerate-api.com/v4/latest/" & fromCurrency
    
    http.Open "GET", url, False
    http.send
    
    response = http.responseText
    Set json = JsonConverter.ParseJson(response)
    
    rate = json("rates")(toCurrency)
    ConvertCurrency = amount * rate
End Function`}
              label="Currency Converter Function"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
{`Function ConvertCurrency(amount As Double, fromCurrency As String, toCurrency As String) As Double
    Dim http As Object
    Dim url As String
    Dim response As String
    Dim json As Object
    Dim rate As Double
    
    Set http = CreateObject("MSXML2.XMLHTTP")
    url = "https://api.exchangerate-api.com/v4/latest/" & fromCurrency
    
    http.Open "GET", url, False
    http.send
    
    response = http.responseText
    Set json = JsonConverter.ParseJson(response)
    
    rate = json("rates")(toCurrency)
    ConvertCurrency = amount * rate
End Function`}
              </pre>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Security Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {securityBestPractices.map((practice, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Key className="h-5 w-5 text-red-500 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-red-700 mb-2">{practice.title}</h4>
                    <p className="text-gray-700 mb-2">{practice.description}</p>
                    <div className="bg-green-50 p-3 rounded-md">
                      <p className="text-sm text-green-800">
                        <strong>✅ Solution:</strong> {practice.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Error Handling */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Error Handling & Troubleshooting
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-orange-700 mb-2">Common Issues & Solutions</h4>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded-md">
                  <p className="text-sm text-red-800">
                    <strong>❌ Error:</strong> "Object doesn't support this property or method"
                  </p>
                  <p className="text-sm text-green-800 mt-1">
                    <strong>✅ Fix:</strong> Enable Microsoft XML HTTP library in VBA References
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded-md">
                  <p className="text-sm text-red-800">
                    <strong>❌ Error:</strong> "Invalid JSON response"
                  </p>
                  <p className="text-sm text-green-800 mt-1">
                    <strong>✅ Fix:</strong> Check API endpoint URL and verify API key is valid
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded-md">
                  <p className="text-sm text-red-800">
                    <strong>❌ Error:</strong> "Rate limit exceeded"
                  </p>
                  <p className="text-sm text-green-800 mt-1">
                    <strong>✅ Fix:</strong> Add delays between requests and implement retry logic
                  </p>
                </div>
              </div>
            </div>

            <CopyableContent
              content={`Sub APICallWithErrorHandling()
    On Error GoTo ErrorHandler
    
    Dim http As Object
    Dim url As String
    Dim response As String
    
    Set http = CreateObject("MSXML2.XMLHTTP")
    url = "https://api.example.com/data"
    
    http.Open "GET", url, False
    http.send
    
    If http.Status = 200 Then
        response = http.responseText
        ' Process successful response
        MsgBox "Data retrieved successfully!"
    Else
        MsgBox "API Error: " & http.Status & " - " & http.statusText
    End If
    
    Exit Sub
    
ErrorHandler:
    MsgBox "VBA Error: " & Err.Description
End Sub`}
              label="Error Handling Template"
            >
              <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
{`Sub APICallWithErrorHandling()
    On Error GoTo ErrorHandler
    
    Dim http As Object
    Dim url As String
    Dim response As String
    
    Set http = CreateObject("MSXML2.XMLHTTP")
    url = "https://api.example.com/data"
    
    http.Open "GET", url, False
    http.send
    
    If http.Status = 200 Then
        response = http.responseText
        ' Process successful response
        MsgBox "Data retrieved successfully!"
    Else
        MsgBox "API Error: " & http.Status & " - " & http.statusText
    End If
    
    Exit Sub
    
ErrorHandler:
    MsgBox "VBA Error: " & Err.Description
End Sub`}
              </pre>
            </CopyableContent>
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
              <li>• Use XMLHTTP object to make HTTP requests from VBA</li>
              <li>• Parse JSON responses to extract meaningful data</li>
              <li>• Implement proper error handling and security practices</li>
              <li>• Create automated data refresh systems</li>
              <li>• Build custom Excel functions that fetch live data</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Next Steps:</strong> Practice with different APIs and build your own data integration projects. 
              Remember to always respect API rate limits and implement proper error handling for production use.
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

export default APIIntegrationVBALesson;
