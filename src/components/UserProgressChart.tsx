import React from 'react';;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { User } from '@/types/user';

// Define Excel module categories
export const moduleCategories = [
  {
    id: 'fundamentals',
    name: 'Excel Fundamentals',
    color: 'bg-blue-500',
    modules: ['Basic Formulas', 'Cell Formatting', 'Data Entry', 'Basic Functions']
  },
  {
    id: 'intermediate',
    name: 'Intermediate Excel',
    color: 'bg-green-500',
    modules: ['Data Analysis', 'Pivot Tables', 'Charts', 'Conditional Formatting']
  },
  {
    id: 'advanced',
    name: 'Advanced Excel',
    color: 'bg-purple-500',
    modules: ['Advanced Functions', 'Data Modeling', 'Macros', 'Dashboard Design']
  },
  {
    id: 'vba',
    name: 'VBA & Automation',
    color: 'bg-orange-500',
    modules: ['VBA Basics', 'User Forms', 'Error Handling', 'Advanced VBA']
  },
  {
    id: 'ai',
    name: 'AI Integration',
    color: 'bg-red-500',
    modules: ['AI Tools Overview', 'ChatGPT for Excel', 'Python in Excel', 'AI-Powered Reporting']
  }
];

interface UserProgressChartProps {
  user: User;
}

const UserProgressChart = ({ user }: UserProgressChartProps) => {
  const [activeTab, setActiveTab] = React.useState('overview');

  // Calculate category progress based on completed modules
  const calculateCategoryProgress = (categoryModules: string[]) => {
    if (!user.completedModules || categoryModules.length === 0) return 0;
    
    const completedCount = categoryModules.filter(module => 
      user.completedModules.includes(module)
    ).length;
    
    return Math.round((completedCount / categoryModules.length) * 100);
  };

  // Format last login date
  const formatLastLogin = (dateString: string | null) => {
    if (!dateString) return 'Never';
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>
            {user.name}
            <Badge 
              variant="outline" 
              className={`ml-2 ${
                user.status === 'active' ? 'bg-green-100 text-green-800' :
                user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}
            >
              {user.status}
            </Badge>
          </span>
          <Badge variant="secondary">
            {Math.round(user.progress)}% Complete
          </Badge>
        </CardTitle>
        <CardDescription>
          <div className="flex items-center justify-between text-sm mt-1">
            <span>Email: {user.email}</span>
            <span>Last Login: {formatLastLogin(user.lastLogin)}</span>
          </div>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full mb-4">
            <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
            <TabsTrigger value="modules" className="flex-1">Modules</TabsTrigger>
            <TabsTrigger value="activity" className="flex-1">Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-muted-foreground">{Math.round(user.progress)}%</span>
                </div>
                <Progress value={user.progress} className="h-2" />
              </div>
              
              {moduleCategories.map(category => {
                const progress = calculateCategoryProgress(category.modules);
                return (
                  <div key={category.id}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="text-sm text-muted-foreground">{progress}%</span>
                    </div>
                    <Progress 
                      value={progress} 
                      className={`h-2 ${progress > 0 ? category.color : ''}`} 
                    />
                  </div>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="modules">
            <div className="space-y-4">
              {moduleCategories.map(category => (
                <div key={category.id} className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">{category.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.modules.map(module => {
                      const isCompleted = user.completedModules.includes(module);
                      return (
                        <div 
                          key={module} 
                          className={`flex items-center p-2 rounded border ${
                            isCompleted ? 'border-green-500 bg-green-50' : 'border-gray-200'
                          }`}
                        >
                          <div className={`w-3 h-3 rounded-full mr-2 ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}`} />
                          <span className="text-sm">{module}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="activity">
            <div className="text-center py-6 text-muted-foreground">
              {user.status === 'active' ? (
                <>
                  <p>Detailed user activity will be tracked here.</p>
                  <p className="mt-2">This feature is coming soon.</p>
                </>
              ) : (
                <p>Activity tracking is only available for active users.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UserProgressChart;
