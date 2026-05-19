import { useEffect, useState, useCallback, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { isFirebaseConfigured } from "@/config/firebase";
import { db } from "@/config/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RefreshCcw } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from "@/components/ui/use-toast";
import { User, UserStatus } from '@/types/user';
import * as userService from '@/services/firebaseUserService';
import UserManagementTable from '@/components/UserManagementTable';
import CourseResourceManager from '@/components/admin/CourseResourceManager';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const { user } = useAuth0();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [autoApproveUsers, setAutoApproveUsers] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [firebaseConfigured, setFirebaseConfigured] = useState(true);
  const unsubscribeRef = useRef<(() => void) | null>(null);
  
  // Function to refresh users from storage
  const refreshUsers = useCallback(async () => {
    setLoading(true);
    try {
      // Check if Firebase is properly configured
      const isConfigured = isFirebaseConfigured();
      setFirebaseConfigured(isConfigured);
      
      if (!isConfigured) {
        console.warn('Firebase not configured properly, using fallback data');
        // Use static data or empty array as fallback
        setUsers([]);
        setFilteredUsers([]);
        return;
      }
      
      // Get users from our user service
      const allUsers = await userService.getUsers();
      setUsers(allUsers);
      setFilteredUsers(allUsers); // Also update filteredUsers state
    } catch (error) {
      console.error('Failed to fetch users:', error);
      toast({
        title: "Error",
        description: "Failed to load user data. Please check Firebase configuration.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  // Force refresh function that can be called from anywhere
  const forceRefresh = useCallback(async () => {
    console.log('Forcing user list refresh');
    // Always get fresh data directly from Firebase
    try {
      const latestUsers = await userService.getUsers();
      setUsers(latestUsers);
      setFilteredUsers(latestUsers);
    } catch (error) {
      console.error('Error during force refresh:', error);
      toast({
        title: "Error",
        description: "Failed to refresh user data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  // We'll use a timestamp to periodically check for updates instead of direct comparison
  // since we can't efficiently compare with Firestore without making reads
  const checkForUserChanges = useCallback(async () => {
    if (loading) return;
    
    // Instead of direct comparison, we'll just refresh data periodically
    // This simplifies the code and reduces Firestore reads
    try {
      const latestUsers = await userService.getUsers();
      
      // Only update if we have a different number of users or if last refresh was more than 30 seconds ago
      if (latestUsers.length !== users.length) {
        console.log('User count changed, refreshing');
        setUsers(latestUsers);
        setFilteredUsers(latestUsers);
        return;
      }
      
      // Compare emails to detect added/removed users
      const latestUserEmails = new Set(latestUsers.map(u => u.email));
      const stateUserEmails = new Set(users.map(u => u.email));
      
      // Check if any new emails exist in latest data
      let hasChanges = false;
      for (const email of latestUserEmails) {
        if (!stateUserEmails.has(email)) {
          hasChanges = true;
          break;
        }
      }
      
      if (hasChanges) {
        console.log('User changes detected, refreshing data');
        setUsers(latestUsers);
        setFilteredUsers(latestUsers);
      }
    } catch (error) {
      console.error('Error checking for user changes:', error);
    }
  }, [loading, users]);

  // Set up real-time Firestore listener for users collection
  const setupFirestoreListener = useCallback(() => {
    // Clean up existing listener if it exists
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
      unsubscribeRef.current = null;
    }

    if (!isFirebaseConfigured() || !db) {
      console.warn('Firebase not configured, skipping real-time updates');
      return;
    }

    try {
      // Create a query against the users collection ordered by email
      const usersQuery = query(
        collection(db, 'users'),
        orderBy('email')
      );

      // Set up the real-time listener
      const unsubscribe = onSnapshot(usersQuery, (snapshot) => {
        const updatedUsers: User[] = [];
        
        snapshot.forEach((doc) => {
          const userData = doc.data() as User;
          updatedUsers.push(userData);
        });
        
        console.log('Firestore real-time update received:', updatedUsers.length, 'users');
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
        setLoading(false);
      }, (error) => {
        console.error('Firestore listener error:', error);
        toast({
          title: "Real-time Update Error",
          description: "Failed to receive live updates. Using manual refresh instead.",
          variant: "destructive",
        });
        // Fall back to manual refresh if real-time fails
        refreshUsers();
      });

      // Store the unsubscribe function for cleanup
      unsubscribeRef.current = unsubscribe;
    } catch (error) {
      console.error('Error setting up Firestore listener:', error);
      // Fall back to regular refresh
      refreshUsers();
    }
  }, [refreshUsers, toast]);

  useEffect(() => {
    // Check if the current user is a super admin
    if (user?.email) {
      try {
        const result = userService.isSuperAdmin(user.email);
        setIsSuperAdmin(result);
      } catch (err) {
        console.error('Error checking admin status:', err);
        setIsSuperAdmin(false);
      }
    }

    // Initial load of users
    refreshUsers();
    
    // Set up real-time listener
    setupFirestoreListener();
    
    return () => {
      // Clean up listener on component unmount
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
    };
  }, [user, refreshUsers, setupFirestoreListener]);

  // Handle Firebase status check and display
  useEffect(() => {
    const checkFirebaseStatus = async () => {
      const isConfigured = isFirebaseConfigured();
      setFirebaseConfigured(isConfigured);
      
      if (!isConfigured) {
        console.warn('Firebase not properly configured for user profile tracking');
        toast({
          title: "Firebase Configuration Issue",
          description: "User profiles may not display correctly due to Firebase configuration",
          variant: "destructive",
        });
      }
    };
    
    checkFirebaseStatus();
  }, [toast]);

  const handleStatusChange = async (email: string, newStatus: UserStatus) => {
    setLoading(true);
    try {      
      // Update user status in our Firebase service
      const updatedUser = await userService.updateUserStatus(email, newStatus);
      
      if (updatedUser) {
        // Refresh the user list with latest data from Firebase
        const latestUsers = await userService.getUsers();
        setUsers(latestUsers);
        setFilteredUsers(latestUsers);
        
        toast({
          title: "User Updated",
          description: `User status has been changed to ${newStatus}`,
        });
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.error('Failed to update user status:', error);
      toast({
        title: "Error",
        description: "Failed to update user status",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (email: string) => {
    setLoading(true);
    try {
      // Delete user using the new deleteUser function
      await userService.deleteUser(email);
      
      // Refresh the user list with latest data from Firebase
      const latestUsers = await userService.getUsers();
      setUsers(latestUsers);
      setFilteredUsers(latestUsers);
      
      toast({
        title: "User Deleted",
        description: "User has been successfully deleted",
      });
    } catch (error) {
      console.error('Failed to delete user:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to delete user",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const statusBadgeColor = (status: string) => {
    switch(status) {
      case 'active': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'blocked': return 'bg-red-500';
      case 'deleted': return 'bg-gray-800';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Manage users and track their progress
          </p>
        </div>
        
        <Tabs defaultValue="users">
          <TabsList className="mb-4">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
            <TabsTrigger value="files">Course Files</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>
                      Approve new users and manage access
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline" 
                    size="sm"
                    onClick={refreshUsers}
                    disabled={loading}
                  >
                    <RefreshCcw className="h-4 w-4 mr-1" />
                    Refresh
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
                  </div>
                ) : (
                  <UserManagementTable
                    users={users}
                    isFirebaseConfigured={firebaseConfigured}
                    isSuperAdmin={isSuperAdmin}
                    isSuperAdminFunction={userService.isSuperAdmin}
                    handleStatusChange={handleStatusChange}
                    handleDeleteUser={handleDeleteUser}
                    statusBadgeColor={statusBadgeColor}
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle>User Progress</CardTitle>
                <CardDescription>
                  Track learning progress across all users
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Completed Modules</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users
                        .map((user) => (
                          <TableRow key={user.id} className="hover:bg-muted/50">
                            <TableCell>
                              <button 
                                onClick={() => navigate(`/admin/users/${encodeURIComponent(user.id)}`)}
                                className="font-medium text-primary hover:underline cursor-pointer bg-transparent border-none p-0 text-left"
                              >
                                {user.name}
                              </button>
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell className="w-[200px]">
                              <div className="flex items-center gap-2">
                                <Progress value={user.progress} className="h-2" />
                                <span className="text-sm text-muted-foreground">
                                  {user.progress}%
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {user.completedModules.map((module, idx) => (
                                  <Badge key={idx} variant="secondary" className="mr-1">
                                    {module}
                                  </Badge>
                                ))}
                                {user.completedModules.length === 0 && (
                                  <span className="text-sm text-muted-foreground">
                                    No modules completed
                                  </span>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="files">
            <CourseResourceManager />
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Admin Settings</CardTitle>
                <CardDescription>
                  Configure admin dashboard settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Auto-approve new users</h3>
                      <p className="text-sm text-muted-foreground">
                        Automatically approve new users when they sign up
                      </p>
                    </div>
                    <Switch 
                      checked={autoApproveUsers}
                      onCheckedChange={setAutoApproveUsers}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email notifications</h3>
                      <p className="text-sm text-muted-foreground">
                        Receive email notifications for new user registrations
                      </p>
                    </div>
                    <Switch 
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  
                  {isSuperAdmin && (
                    <div className="border-t pt-4 mt-4">
                      <h3 className="font-medium text-red-500">Super Admin Controls</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        These actions can only be performed by super administrators
                      </p>
                      
                      <Button 
                        variant="destructive" 
                        className="mr-2"
                        onClick={async () => {
                          if (confirm('Are you sure you want to reset all user data? This cannot be undone.')) {
                            try {
                              setLoading(true);
                              // Reset all users except admin in Firebase
                              await userService.resetAllUsers();
                              // Get fresh data with just the admin user
                              const refreshedUsers = await userService.getUsers();
                              setUsers(refreshedUsers);
                              setFilteredUsers(refreshedUsers);
                              toast({
                                title: "Data Reset",
                                description: "All user data has been reset",
                              });
                            } catch (error) {
                              console.error('Error resetting user data:', error);
                              toast({
                                title: "Error",
                                description: "Failed to reset user data",
                                variant: "destructive",
                              });
                            } finally {
                              setLoading(false);
                            }
                          }
                        }}
                      >
                        Reset All User Data
                      </Button>
                      
                      <Button 
                        variant="outline"
                        onClick={() => {
                          // Export users as JSON
                          const dataStr = JSON.stringify(users, null, 2);
                          const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
                          
                          const exportFileDefaultName = `excel-training-users-${new Date().toISOString().split('T')[0]}.json`;
                          
                          const linkElement = document.createElement('a');
                          linkElement.setAttribute('href', dataUri);
                          linkElement.setAttribute('download', exportFileDefaultName);
                          linkElement.click();
                          
                          toast({
                            title: "Export Complete",
                            description: "User database has been exported",
                          });
                        }}
                      >
                        Export User Database
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
