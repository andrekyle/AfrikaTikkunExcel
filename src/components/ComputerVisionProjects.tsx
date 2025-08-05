import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scan, BarChart3 } from "lucide-react";
import CopyableContent from "@/components/CopyableContent";

const ComputerVisionProjects: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Project 1: OCR Document Processing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scan className="h-5 w-5 text-blue-600" />
            Project 1: OCR Document Processing System
          </CardTitle>
          <CardDescription>
            Build an automated system to extract text from receipts and invoices
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Sample Receipt Processing Data:</h4>
            <CopyableContent>
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left">Receipt ID</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Image Path</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Vendor Name</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Total Amount</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Date</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">RCP001</td>
                    <td className="border border-gray-300 px-3 py-2">C:\Images\receipt_001.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">Starbucks Coffee</td>
                    <td className="border border-gray-300 px-3 py-2">$12.45</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-15</td>
                    <td className="border border-gray-300 px-3 py-2">Food & Beverage</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">RCP002</td>
                    <td className="border border-gray-300 px-3 py-2">C:\Images\receipt_002.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">Office Depot</td>
                    <td className="border border-gray-300 px-3 py-2">$89.99</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-16</td>
                    <td className="border border-gray-300 px-3 py-2">Office Supplies</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">RCP003</td>
                    <td className="border border-gray-300 px-3 py-2">C:\Images\receipt_003.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">Shell Gas Station</td>
                    <td className="border border-gray-300 px-3 py-2">$45.67</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-17</td>
                    <td className="border border-gray-300 px-3 py-2">Transportation</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">RCP004</td>
                    <td className="border border-gray-300 px-3 py-2">C:\Images\receipt_004.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">Amazon</td>
                    <td className="border border-gray-300 px-3 py-2">$156.78</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-18</td>
                    <td className="border border-gray-300 px-3 py-2">Equipment</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">RCP005</td>
                    <td className="border border-gray-300 px-3 py-2">C:\Images\receipt_005.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">McDonald's</td>
                    <td className="border border-gray-300 px-3 py-2">$8.99</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-19</td>
                    <td className="border border-gray-300 px-3 py-2">Food & Beverage</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">RCP006</td>
                    <td className="border border-gray-300 px-3 py-2">C:\Images\receipt_006.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">Best Buy</td>
                    <td className="border border-gray-300 px-3 py-2">$299.99</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-20</td>
                    <td className="border border-gray-300 px-3 py-2">Electronics</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">RCP007</td>
                    <td className="border border-gray-300 px-3 py-2">C:\Images\receipt_007.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">Uber</td>
                    <td className="border border-gray-300 px-3 py-2">$23.45</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-21</td>
                    <td className="border border-gray-300 px-3 py-2">Transportation</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">RCP008</td>
                    <td className="border border-gray-300 px-3 py-2">C:\Images\receipt_008.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">Home Depot</td>
                    <td className="border border-gray-300 px-3 py-2">$127.33</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-22</td>
                    <td className="border border-gray-300 px-3 py-2">Home Improvement</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">RCP009</td>
                    <td className="border border-gray-300 px-3 py-2">C:\Images\receipt_009.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">Walgreens</td>
                    <td className="border border-gray-300 px-3 py-2">$34.56</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-23</td>
                    <td className="border border-gray-300 px-3 py-2">Healthcare</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">RCP010</td>
                    <td className="border border-gray-300 px-3 py-2">C:\Images\receipt_010.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">Target</td>
                    <td className="border border-gray-300 px-3 py-2">$67.89</td>
                    <td className="border border-gray-300 px-3 py-2">2024-01-24</td>
                    <td className="border border-gray-300 px-3 py-2">Retail</td>
                  </tr>
                </tbody>
              </table>
            </CopyableContent>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">📋 Step-by-Step Instructions:</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="font-semibold">Create Azure Computer Vision Resource</p>
                    <p className="text-gray-700">Sign up for Azure, create a Computer Vision resource, and obtain your API key and endpoint URL</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="font-semibold">Set Up Excel Workbook</p>
                    <p className="text-gray-700">Create a new Excel workbook with sheets: "Config", "ReceiptData", and "ProcessedResults"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="font-semibold">Configure API Settings</p>
                    <p className="text-gray-700">Run the setup macro to store your API credentials securely in the Config worksheet</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <p className="font-semibold">Prepare Sample Images</p>
                    <p className="text-gray-700">Save receipt images to C:\Images\ folder or update the image paths in the sample data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <p className="font-semibold">Test OCR Processing</p>
                    <p className="text-gray-700">Run the ProcessImageOCR function on a single receipt to verify the setup works correctly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">6</span>
                  <div>
                    <p className="font-semibold">Process All Receipts</p>
                    <p className="text-gray-700">Use the batch processing function to extract text from all receipt images automatically</p>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900">Step 1: Azure Computer Vision API Setup</h4>
            <CopyableContent>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`' VBA Code for Azure Computer Vision OCR Setup
Sub SetupComputerVisionAPI()
    ' Azure Computer Vision API Configuration
    Dim apiKey As String
    Dim endpoint As String
    
    ' Replace with your actual API key and endpoint
    apiKey = "YOUR_AZURE_API_KEY"
    endpoint = "https://YOUR_REGION.api.cognitive.microsoft.com/"
    
    ' Store configuration in worksheet
    Dim configWs As Worksheet
    Set configWs = ThisWorkbook.Worksheets("Config")
    
    configWs.Range("A1").Value = "Setting"
    configWs.Range("B1").Value = "Value"
    configWs.Range("A2").Value = "API_KEY"
    configWs.Range("B2").Value = apiKey
    configWs.Range("A3").Value = "ENDPOINT"
    configWs.Range("B3").Value = endpoint
    configWs.Range("A4").Value = "OCR_URL"
    configWs.Range("B4").Value = endpoint & "vision/v3.2/ocr"
    
    MsgBox "Computer Vision API configuration complete!"
End Sub`}
              </pre>
            </CopyableContent>

            <h4 className="font-semibold text-gray-900">Step 2: OCR Processing Function</h4>
            <CopyableContent>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`' Function to process image with OCR
Function ProcessImageOCR(imagePath As String) As String
    Dim http As Object
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    ' Get API configuration
    Dim configWs As Worksheet
    Set configWs = ThisWorkbook.Worksheets("Config")
    
    Dim apiKey As String
    Dim ocrUrl As String
    apiKey = configWs.Range("B2").Value
    ocrUrl = configWs.Range("B4").Value
    
    ' Read image file as binary
    Dim imageData As Variant
    imageData = ReadImageFile(imagePath)
    
    ' Prepare HTTP request
    http.Open "POST", ocrUrl, False
    http.setRequestHeader "Ocp-Apim-Subscription-Key", apiKey
    http.setRequestHeader "Content-Type", "application/octet-stream"
    
    ' Send request
    On Error GoTo ErrorHandler
    http.send imageData
    
    If http.Status = 200 Then
        ' Parse JSON response
        Dim jsonResponse As String
        jsonResponse = http.responseText
        
        ' Extract text from JSON (simplified)
        ProcessImageOCR = ExtractTextFromJSON(jsonResponse)
    Else
        ProcessImageOCR = "Error: " & http.Status & " - " & http.statusText
    End If
    
    Exit Function
    
ErrorHandler:
    ProcessImageOCR = "Error processing image: " & Err.Description
End Function

' Helper function to read image file
Function ReadImageFile(filePath As String) As Variant
    Dim fileNum As Integer
    fileNum = FreeFile
    
    Open filePath For Binary As fileNum
    Dim fileSize As Long
    fileSize = LOF(fileNum)
    
    Dim imageBytes() As Byte
    ReDim imageBytes(fileSize - 1)
    Get fileNum, , imageBytes
    Close fileNum
    
    ReadImageFile = imageBytes
End Function`}
              </pre>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>

      {/* Project 2: Image Analysis Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-green-600" />
            Project 2: Product Image Analysis Dashboard
          </CardTitle>
          <CardDescription>
            Analyze product images for inventory management and quality control
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Sample Product Image Analysis Data:</h4>
            <CopyableContent>
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left">Product ID</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Image URL</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Detected Objects</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Confidence Score</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Quality Rating</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">PRD001</td>
                    <td className="border border-gray-300 px-3 py-2">https://example.com/laptop1.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">laptop, computer, screen</td>
                    <td className="border border-gray-300 px-3 py-2">0.95</td>
                    <td className="border border-gray-300 px-3 py-2">Excellent</td>
                    <td className="border border-gray-300 px-3 py-2">Electronics</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">PRD002</td>
                    <td className="border border-gray-300 px-3 py-2">https://example.com/phone1.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">smartphone, mobile, device</td>
                    <td className="border border-gray-300 px-3 py-2">0.92</td>
                    <td className="border border-gray-300 px-3 py-2">Good</td>
                    <td className="border border-gray-300 px-3 py-2">Electronics</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">PRD003</td>
                    <td className="border border-gray-300 px-3 py-2">https://example.com/chair1.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">chair, furniture, seat</td>
                    <td className="border border-gray-300 px-3 py-2">0.88</td>
                    <td className="border border-gray-300 px-3 py-2">Good</td>
                    <td className="border border-gray-300 px-3 py-2">Furniture</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">PRD004</td>
                    <td className="border border-gray-300 px-3 py-2">https://example.com/watch1.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">watch, timepiece, accessory</td>
                    <td className="border border-gray-300 px-3 py-2">0.91</td>
                    <td className="border border-gray-300 px-3 py-2">Excellent</td>
                    <td className="border border-gray-300 px-3 py-2">Accessories</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">PRD005</td>
                    <td className="border border-gray-300 px-3 py-2">https://example.com/book1.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">book, text, publication</td>
                    <td className="border border-gray-300 px-3 py-2">0.87</td>
                    <td className="border border-gray-300 px-3 py-2">Fair</td>
                    <td className="border border-gray-300 px-3 py-2">Books</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">PRD006</td>
                    <td className="border border-gray-300 px-3 py-2">https://example.com/shoes1.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">shoes, footwear, sneakers</td>
                    <td className="border border-gray-300 px-3 py-2">0.94</td>
                    <td className="border border-gray-300 px-3 py-2">Excellent</td>
                    <td className="border border-gray-300 px-3 py-2">Clothing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">PRD007</td>
                    <td className="border border-gray-300 px-3 py-2">https://example.com/camera1.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">camera, photography, lens</td>
                    <td className="border border-gray-300 px-3 py-2">0.96</td>
                    <td className="border border-gray-300 px-3 py-2">Excellent</td>
                    <td className="border border-gray-300 px-3 py-2">Electronics</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">PRD008</td>
                    <td className="border border-gray-300 px-3 py-2">https://example.com/bag1.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">bag, handbag, accessory</td>
                    <td className="border border-gray-300 px-3 py-2">0.89</td>
                    <td className="border border-gray-300 px-3 py-2">Good</td>
                    <td className="border border-gray-300 px-3 py-2">Accessories</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">PRD009</td>
                    <td className="border border-gray-300 px-3 py-2">https://example.com/tablet1.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">tablet, device, screen</td>
                    <td className="border border-gray-300 px-3 py-2">0.93</td>
                    <td className="border border-gray-300 px-3 py-2">Good</td>
                    <td className="border border-gray-300 px-3 py-2">Electronics</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">PRD010</td>
                    <td className="border border-gray-300 px-3 py-2">https://example.com/headphones1.jpg</td>
                    <td className="border border-gray-300 px-3 py-2">headphones, audio, music</td>
                    <td className="border border-gray-300 px-3 py-2">0.90</td>
                    <td className="border border-gray-300 px-3 py-2">Good</td>
                    <td className="border border-gray-300 px-3 py-2">Electronics</td>
                  </tr>
                </tbody>
              </table>
            </CopyableContent>
          </div>

          <div className="space-y-6">
            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3">📋 Step-by-Step Instructions:</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="font-semibold">Prepare Product Images</p>
                    <p className="text-gray-700">Collect product images or use the provided sample URLs. Ensure images are accessible and in supported formats (JPG, PNG)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="font-semibold">Set Up Product Images Worksheet</p>
                    <p className="text-gray-700">Create "ProductImages" worksheet with columns: Product ID, Image URL, Detected Objects, Confidence Score, Quality Rating, Category</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="font-semibold">Configure Image Analysis API</p>
                    <p className="text-gray-700">Use the same Azure Computer Vision API configuration from Project 1, but with the analyze endpoint</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <p className="font-semibold">Test Single Image Analysis</p>
                    <p className="text-gray-700">Run the AnalyzeProductImage function on one image to verify object detection and confidence scoring work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <p className="font-semibold">Run Batch Processing</p>
                    <p className="text-gray-700">Execute BatchProcessProductImages to analyze all products and populate the results automatically</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">6</span>
                  <div>
                    <p className="font-semibold">Create Analysis Dashboard</p>
                    <p className="text-gray-700">Build charts and pivot tables to visualize quality ratings, confidence scores, and category distributions</p>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900">Step 1: Image Analysis Function</h4>
            <CopyableContent>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`' Function to analyze product images
Function AnalyzeProductImage(imageUrl As String) As String
    Dim http As Object
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    ' Get API configuration
    Dim configWs As Worksheet
    Set configWs = ThisWorkbook.Worksheets("Config")
    
    Dim apiKey As String
    Dim endpoint As String
    apiKey = configWs.Range("B2").Value
    endpoint = configWs.Range("B3").Value
    
    ' Prepare analysis URL
    Dim analysisUrl As String
    analysisUrl = endpoint & "vision/v3.2/analyze?visualFeatures=Objects,Tags,Description"
    
    ' Prepare HTTP request
    http.Open "POST", analysisUrl, False
    http.setRequestHeader "Ocp-Apim-Subscription-Key", apiKey
    http.setRequestHeader "Content-Type", "application/json"
    
    ' Create JSON payload with image URL
    Dim jsonPayload As String
    jsonPayload = "{""url"":""" & imageUrl & """}"
    
    ' Send request
    On Error GoTo ErrorHandler
    http.send jsonPayload
    
    If http.Status = 200 Then
        AnalyzeProductImage = http.responseText
    Else
        AnalyzeProductImage = "Error: " & http.Status & " - " & http.statusText
    End If
    
    Exit Function
    
ErrorHandler:
    AnalyzeProductImage = "Error analyzing image: " & Err.Description
End Function`}
              </pre>
            </CopyableContent>

            <h4 className="font-semibold text-gray-900">Step 2: Batch Image Processing</h4>
            <CopyableContent>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`' Batch process multiple product images
Sub BatchProcessProductImages()
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Worksheets("ProductImages")
    
    Dim lastRow As Long
    lastRow = ws.Cells(ws.Rows.Count, "A").End(xlUp).Row
    
    ' Process each product image
    Dim i As Long
    For i = 2 To lastRow ' Start from row 2 (skip header)
        Dim productId As String
        Dim imageUrl As String
        
        productId = ws.Cells(i, 1).Value ' Column A: Product ID
        imageUrl = ws.Cells(i, 2).Value  ' Column B: Image URL
        
        If imageUrl <> "" Then
            ' Analyze the image
            Dim analysisResult As String
            analysisResult = AnalyzeProductImage(imageUrl)
            
            ' Parse and extract key information
            Dim detectedObjects As String
            Dim confidenceScore As Double
            Dim qualityRating As String
            
            ' Parse JSON response (simplified)
            detectedObjects = ExtractObjectsFromJSON(analysisResult)
            confidenceScore = ExtractConfidenceFromJSON(analysisResult)
            qualityRating = DetermineQualityRating(confidenceScore)
            
            ' Update worksheet with results
            ws.Cells(i, 3).Value = detectedObjects  ' Column C
            ws.Cells(i, 4).Value = confidenceScore  ' Column D
            ws.Cells(i, 5).Value = qualityRating   ' Column E
            
            ' Add small delay to respect API rate limits
            Application.Wait (Now + TimeValue("0:00:01"))
        End If
    Next i
    
    MsgBox "Batch image processing complete!"
End Sub

' Helper function to determine quality rating
Function DetermineQualityRating(confidence As Double) As String
    If confidence >= 0.9 Then
        DetermineQualityRating = "Excellent"
    ElseIf confidence >= 0.8 Then
        DetermineQualityRating = "Good"
    ElseIf confidence >= 0.7 Then
        DetermineQualityRating = "Fair"
    Else
        DetermineQualityRating = "Poor"
    End If
End Function`}
              </pre>
            </CopyableContent>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComputerVisionProjects;
