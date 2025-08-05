import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, Suspense, lazy } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Index from "./pages/Index";
import Callback from "./pages/Callback";
import TestFirebase from "./pages/TestFirebase";
import TestAuth0 from "./pages/TestAuth0";
import AdminRoute from "./components/AdminRoute";
import AuthRoute from "./components/AuthRoute";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load course components for better performance
const ExcelFundamentals = lazy(() => import("./pages/ExcelFundamentals"));
const AdvancedExcel = lazy(() => import("./pages/AdvancedExcel"));
const ExcelVbaAi = lazy(() => import("./pages/ExcelVbaAi"));

// Lazy load admin components
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const UserProfile = lazy(() => import("./pages/UserProfile"));

// Loading component for lazy-loaded routes
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-pulse flex space-x-2">
      <div className="h-3 w-3 bg-primary rounded-full"></div>
      <div className="h-3 w-3 bg-primary rounded-full"></div>
      <div className="h-3 w-3 bg-primary rounded-full"></div>
    </div>
  </div>
);

const queryClient = new QueryClient();

// Debug component to log route changes
const RouteDebugger = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log('Route changed to:', location.pathname);
  }, [location]);
  
  return null;
};

// Main App component with routing
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteDebugger />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/test-firebase" element={<TestFirebase />} />
          <Route path="/test-auth0" element={<TestAuth0 />} />
          <Route 
            path="/excel-fundamentals" 
            element={
              <AuthRoute>
                <div className="min-h-screen bg-background">
                  <Suspense fallback={<LoadingSpinner />}>
                    <ExcelFundamentals />
                  </Suspense>
                </div>
              </AuthRoute>
            } 
          />
          <Route 
            path="/advanced-excel" 
            element={
              <AuthRoute>
                <div className="min-h-screen bg-background">
                  <Suspense fallback={<LoadingSpinner />}>
                    <AdvancedExcel />
                  </Suspense>
                </div>
              </AuthRoute>
            } 
          />
          <Route 
            path="/excel-vba-ai/:topic/lessons/:lesson" 
            element={
              <AuthRoute>
                <div className="min-h-screen bg-background">
                  <Suspense fallback={<LoadingSpinner />}>
                    <ExcelVbaAi />
                  </Suspense>
                </div>
              </AuthRoute>
            } 
          />
          <Route 
            path="/excel-vba-ai/:topic?" 
            element={
              <AuthRoute>
                <div className="min-h-screen bg-background">
                  <Suspense fallback={<LoadingSpinner />}>
                    <ExcelVbaAi />
                  </Suspense>
                </div>
              </AuthRoute>
            } 
          />
          {/* Redirect old URL to default topic */}
          <Route 
            path="/excel-vba-ai" 
            element={<Navigate to="/excel-vba-ai/vba-fundamentals" replace />} 
          />
          <Route 
            path="/admin" 
            element={
              <AdminRoute>
                <div className="min-h-screen bg-background">
                  <Suspense fallback={<LoadingSpinner />}>
                    <AdminDashboard />
                  </Suspense>
                </div>
              </AdminRoute>
            } 
          />
          <Route 
            path="/admin/user/:userId" 
            element={
              <AdminRoute>
                <ErrorBoundary>
                  <div className="min-h-screen bg-background">
                    <Suspense fallback={<LoadingSpinner />}>
                      <UserProfile />
                    </Suspense>
                  </div>
                </ErrorBoundary>
              </AdminRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
