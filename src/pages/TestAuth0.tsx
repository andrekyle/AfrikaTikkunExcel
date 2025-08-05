import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import Auth0Test from '@/components/Auth0Test';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TestAuth0 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Auth0 Configuration Test
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Test your Auth0 authentication setup, configuration, and user flow
            </p>
          </div>
        </div>

        <Auth0Test />
      </main>
      
      <Footer />
    </div>
  );
};

export default TestAuth0;
