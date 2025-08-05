import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Brain, Eye, Lightbulb, Target, TrendingUp, Users, DollarSign, ShoppingCart, Calendar, AlertCircle, CheckCircle, Settings } from 'lucide-react';
import CopyableContent from './CopyableContent';

interface SmartDashboardDesignLessonProps {
  onContinue?: () => void;
}

const SmartDashboardDesignLesson: React.FC<SmartDashboardDesignLessonProps> = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <BarChart3 className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Smart Dashboard Design</h1>
        </div>
        <p className="text-xl text-gray-600">
          Master the principles of creating AI-enhanced dashboards for intelligent business insights
        </p>
      </div>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
              <span>Understand smart dashboard design principles and AI integration</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
              <span>Design intelligent KPI dashboards with automated insights</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
              <span>Implement dynamic visualizations with conditional formatting</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
              <span>Create automated alerts and performance monitoring systems</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
              <span>Build interactive dashboards with AI-powered recommendations</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Smart Dashboard Principles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Smart Dashboard Design Principles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-4 w-4 text-blue-600" />
                  <h4 className="font-semibold text-blue-900">Visual Hierarchy</h4>
                </div>
                <p className="text-sm text-blue-800">Most important KPIs at the top, supporting metrics below, with clear visual emphasis</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <h4 className="font-semibold text-green-900">Real-time Intelligence</h4>
                </div>
                <p className="text-sm text-green-800">Automated data refresh, trend analysis, and predictive insights using AI</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  <h4 className="font-semibold text-purple-900">User-Centric Design</h4>
                </div>
                <p className="text-sm text-purple-800">Tailored views for different stakeholders with role-based access</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                  <h4 className="font-semibold text-orange-900">Smart Alerts</h4>
                </div>
                <p className="text-sm text-orange-800">Automated notifications for threshold breaches and anomaly detection</p>
              </div>
              
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="h-4 w-4 text-red-600" />
                  <h4 className="font-semibold text-red-900">Interactive Elements</h4>
                </div>
                <p className="text-sm text-red-800">Drill-down capabilities, filters, and dynamic parameter controls</p>
              </div>
              
              <div className="p-4 bg-indigo-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-4 w-4 text-indigo-600" />
                  <h4 className="font-semibold text-indigo-900">AI Recommendations</h4>
                </div>
                <p className="text-sm text-indigo-800">Automated insights, trend predictions, and actionable recommendations</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      {onContinue && (
        <div className="flex justify-center">
          <Button onClick={onContinue} className="flex items-center gap-2">
            Continue to Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default SmartDashboardDesignLesson;
