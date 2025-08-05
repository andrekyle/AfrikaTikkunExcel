import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Camera, 
  FileImage, 
  Scan, 
  BarChart3, 
  CheckCircle, 
  Brain, 
  ArrowRight,
  Image as ImageIcon,
  FileText,
  Zap,
  Database,
  Lightbulb,
  Settings
} from "lucide-react";
import CopyableContent from "@/components/CopyableContent";
import ComputerVisionProjects from "@/components/ComputerVisionProjects";

interface ComputerVisionExcelLessonProps {
  onContinue?: () => void;
}

const ComputerVisionExcelLesson: React.FC<ComputerVisionExcelLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 bg-purple-100 rounded-full">
            <Eye className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Computer Vision in Excel</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Integrate image recognition and OCR capabilities into Excel workflows for automated visual data processing
        </p>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-600" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Understand computer vision concepts and applications in business</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Implement OCR (Optical Character Recognition) for document processing</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Build image analysis dashboards with Azure Computer Vision API</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Create automated workflows for visual content analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Extract and analyze data from images, receipts, and documents</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Computer Vision Overview */}
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
                  <p><strong>Microsoft Excel 2016 or later</strong> with VBA enabled</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                  <p><strong>Azure Computer Vision API account</strong> (free tier available)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                  <p><strong>Internet connection</strong> for API calls</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                  <p><strong>Sample images</strong> (receipts, documents, or product photos)</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-3">🔑 Azure Setup Steps:</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>1.</strong> Go to <code className="bg-gray-100 px-2 py-1 rounded">portal.azure.com</code> and create a free account</p>
                <p><strong>2.</strong> Create a new "Computer Vision" resource</p>
                <p><strong>3.</strong> Copy your API Key and Endpoint URL</p>
                <p><strong>4.</strong> Note the region (e.g., eastus, westus2) for your resource</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Computer Vision Capabilities
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Scan className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Optical Character Recognition (OCR)</h4>
                  <p className="text-sm text-gray-600">Extract text from images, scanned documents, and receipts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <ImageIcon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Image Analysis</h4>
                  <p className="text-sm text-gray-600">Analyze image content, objects, and visual features</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FileText className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Document Processing</h4>
                  <p className="text-sm text-gray-600">Automate data extraction from forms and invoices</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Camera className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Face Detection</h4>
                  <p className="text-sm text-gray-600">Identify and analyze faces in images for demographics</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Visual Analytics</h4>
                  <p className="text-sm text-gray-600">Generate insights from visual data patterns</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Zap className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Real-time Processing</h4>
                  <p className="text-sm text-gray-600">Process images and extract data in real-time</p>
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
            Excel Integration Methods
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Azure Computer Vision API</h4>
              <p className="text-sm text-gray-600">Microsoft's cloud-based computer vision service with comprehensive image analysis capabilities</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Google Cloud Vision API</h4>
              <p className="text-sm text-gray-600">Google's machine learning service for image recognition and OCR processing</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">AWS Rekognition</h4>
              <p className="text-sm text-gray-600">Amazon's deep learning-based image and video analysis service</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Custom VBA Solutions</h4>
              <p className="text-sm text-gray-600">Build custom image processing workflows using VBA and external libraries</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            Implementation Tips & Troubleshooting
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-3">💡 Pro Tips:</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Image Quality:</strong> Use high-resolution images (300+ DPI) for better OCR accuracy</p>
                <p><strong>File Formats:</strong> JPEG and PNG work best. Avoid GIF or heavily compressed images</p>
                <p><strong>API Limits:</strong> Azure free tier allows 5,000 transactions/month. Monitor usage carefully</p>
                <p><strong>Error Handling:</strong> Always implement timeout and retry logic for API calls</p>
                <p><strong>Batch Processing:</strong> Process images in small batches (5-10) to avoid timeouts</p>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-3">⚠️ Common Issues:</h4>
              <div className="space-y-2 text-sm">
                <p><strong>"Invalid API Key" Error:</strong> Double-check your API key and endpoint URL in the Config sheet</p>
                <p><strong>"Request Timeout" Error:</strong> Reduce image file size or check internet connection</p>
                <p><strong>"Rate Limit Exceeded":</strong> Add delays between API calls (1-2 seconds minimum)</p>
                <p><strong>Poor OCR Results:</strong> Ensure images are clear, well-lit, and text is horizontal</p>
                <p><strong>VBA Security Error:</strong> Enable macros and add Excel to trusted locations</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Projects */}
      <ComputerVisionProjects />

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Best Practices for Computer Vision in Excel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">✅ Do's</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Optimize image quality before processing (resolution, contrast)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Implement error handling for API failures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Use batch processing for multiple images</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Cache results to avoid redundant API calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Validate image formats and sizes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Monitor API usage and costs</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-3">❌ Don'ts</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Don't process extremely large images without resizing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Don't ignore API rate limits and quotas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Don't store API keys in plain text</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Don't assume 100% accuracy from computer vision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Don't skip data validation and cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Don't forget to handle different image formats</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="mt-1">1</Badge>
              <p className="text-sm">Computer vision APIs can automate document processing, saving hours of manual data entry</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="mt-1">2</Badge>
              <p className="text-sm">OCR technology enables extraction of text from receipts, invoices, and scanned documents</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="mt-1">3</Badge>
              <p className="text-sm">Image analysis can provide insights into product quality, inventory, and visual content</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="mt-1">4</Badge>
              <p className="text-sm">Proper error handling and rate limiting are essential for production computer vision workflows</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="mt-1">5</Badge>
              <p className="text-sm">Combining computer vision with Excel creates powerful automated business intelligence solutions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      {onContinue && (
        <div className="flex justify-center pt-6">
          <Button onClick={onContinue} className="flex items-center gap-2">
            Continue to Next Lesson
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ComputerVisionExcelLesson;
