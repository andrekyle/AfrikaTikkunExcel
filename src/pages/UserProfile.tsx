import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Calendar, 
  Shield, 
  BookOpen, 
  TrendingUp, 
  ArrowLeft,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { User as UserType, UserStatus, UserRole } from '@/types/user';
import { getUserByEmail, updateUserStatus, isSuperAdmin } from '@/services/firebaseUserService';
import { useToast } from "@/hooks/use-toast";

const UserProfile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);

  // Decode the email from URL parameter
  const userEmail = userId ? decodeURIComponent(userId) : '';

  useEffect(() => {
    const fetchUser = async () => {
      if (!userEmail) {
        setError('No user email provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const userData = await getUserByEmail(userEmail);
        if (userData) {
          setUser(userData);
        } else {
          setError('User not found');
        }
      } catch (err) {
        console.error('Error fetching user:', err);
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userEmail]);

  const handleStatusChange = async (newStatus: UserStatus) => {
    if (!user) return;

    // Prevent blocking the super admin
    if (isSuperAdmin(user.email) && (newStatus === 'blocked' || newStatus === 'deleted')) {
      toast({
        title: "Action Not Allowed",
        description: "Super admin cannot be blocked or deleted",
        variant: "destructive",
      });
      return;
    }

    try {
      setUpdating(true);
      await updateUserStatus(user.email, newStatus);
      
      setUser(prev => prev ? { ...prev, status: newStatus } : null);
      
      toast({
        title: "Status Updated",
        description: `User status changed to ${newStatus}`,
      });
    } catch (err) {
      console.error('Error updating status:', err);
      toast({
        title: "Error",
        description: "Failed to update user status",
        variant: "destructive",
      });
    } finally {
      setUpdating(false);
    }
  };

  const getStatusColor = (status: UserStatus): string => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'blocked': return 'bg-red-100 text-red-800 border-red-200';
      case 'deleted': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRoleColor = (role: UserRole): string => {
    switch (role) {
      case 'super_admin': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'admin': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'user': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString: string | null): string => {
    if (!dateString) return 'Never';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Invalid date';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading user profile...</p>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-red-600">Error</CardTitle>
            <CardDescription>{error || 'User not found'}</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button onClick={() => navigate('/admin')} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Admin Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Button 
            onClick={() => navigate('/admin')} 
            variant="ghost" 
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin Dashboard
          </Button>
          
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                {getInitials(user.name || user.email)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {user.name || 'Unnamed User'}
              </h1>
              <p className="text-gray-600 flex items-center mt-1">
                <Mail className="h-4 w-4 mr-2" />
                {user.email}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                    <p className="text-gray-900 font-medium">{user.name || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email Address</label>
                    <p className="text-gray-900 font-medium">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">User ID</label>
                    <p className="text-gray-900 font-mono text-sm">{user.id}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Member Since</label>
                    <p className="text-gray-900 font-medium">{formatDate(user.createdAt)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress & Learning */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-gray-600">{user.progress || 0}%</span>
                  </div>
                  <Progress value={user.progress || 0} className="h-2" />
                </div>
                
                <Separator />
                
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-2 block">
                    Completed Modules ({user.completedModules?.length || 0})
                  </label>
                  {user.completedModules && user.completedModules.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {user.completedModules.map((module, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {module}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No modules completed yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status & Role */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Status & Permissions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Status</label>
                  <Badge className={getStatusColor(user.status)} variant="outline">
                    {user.status}
                  </Badge>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Role</label>
                  <Badge className={getRoleColor(user.role)} variant="outline">
                    {user.role.replace('_', ' ')}
                  </Badge>
                </div>

                <Separator />

                <div>
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Last Login</label>
                  <p className="text-gray-900 text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {formatDate(user.lastLogin)}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {user.status === 'pending' && (
                  <Button 
                    onClick={() => handleStatusChange('active')}
                    disabled={updating}
                    className="w-full"
                  >
                    Activate User
                  </Button>
                )}
                
                {user.status === 'active' && !isSuperAdmin(user.email) && (
                  <Button 
                    onClick={() => handleStatusChange('blocked')}
                    disabled={updating}
                    variant="destructive"
                    className="w-full"
                  >
                    Block User
                  </Button>
                )}
                
                {user.status === 'blocked' && (
                  <Button 
                    onClick={() => handleStatusChange('active')}
                    disabled={updating}
                    className="w-full"
                  >
                    Unblock User
                  </Button>
                )}

                {!isSuperAdmin(user.email) && (
                  <Button 
                    onClick={() => handleStatusChange('deleted')}
                    disabled={updating}
                    variant="outline"
                    className="w-full border-red-200 text-red-600 hover:bg-red-50"
                  >
                    Delete User
                  </Button>
                )}
                
                {isSuperAdmin(user.email) && (
                  <div className="w-full p-3 bg-blue-50 border border-blue-200 rounded-md text-center">
                    <Shield className="h-4 w-4 inline mr-2 text-blue-600" />
                    <span className="text-sm text-blue-700 font-medium">Super Admin - Protected Account</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
