import React from 'react';
import { Database, LineChart, BarChart3, LightbulbIcon } from 'lucide-react';

const DataFlowJourney = () => {
  const steps = [
    {
      icon: <Database className="h-12 w-12 text-excel-green" strokeWidth={1} />,
      title: 'Data Collection',
      description: 'Gather and organize data from various sources'
    },
    {
      icon: <LineChart className="h-12 w-12 text-excel-blue" strokeWidth={1} />,
      title: 'Data Analysis',
      description: 'Transform raw data into meaningful insights'
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-learning-orange" strokeWidth={1} />,
      title: 'Data Visualization',
      description: 'Create compelling visual stories with data'
    },
    {
      icon: <LightbulbIcon className="h-12 w-12 text-success-green" strokeWidth={1} />,
      title: 'Decision Making',
      description: 'Drive impactful decisions with data'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">The Data Flow Journey</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="p-6 bg-card rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="mr-3">{step.icon}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataFlowJourney;
