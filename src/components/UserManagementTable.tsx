import { User, UserStatus } from '@/types/user';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import FirebaseWarningBanner from '@/components/FirebaseWarningBanner';

interface UserManagementTableProps {
  users: User[];
  isFirebaseConfigured: boolean;
  isSuperAdmin: boolean;
  isSuperAdminFunction: (email: string) => boolean;
  handleStatusChange: (email: string, newStatus: UserStatus) => Promise<void>;
  handleDeleteUser: (email: string) => Promise<void>;
  statusBadgeColor: (status: string) => string;
}

const UserManagementTable = ({
  users,
  isFirebaseConfigured,
  isSuperAdmin,
  isSuperAdminFunction,
  handleStatusChange,
  handleDeleteUser,
  statusBadgeColor
}: UserManagementTableProps) => {
  return (
    <>
      {/* Display Firebase configuration warning if needed */}
      <FirebaseWarningBanner isConfigured={isFirebaseConfigured} />
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Login</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id || user.email} className="hover:bg-muted/50">
              <TableCell>
                <Link 
                  to={`/admin/user/${encodeURIComponent(user.email)}`} 
                  className="font-medium text-primary hover:underline"
                >
                  {user.name || 'No name'}
                </Link>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge className={statusBadgeColor(user.status || 'pending')}>
                  {user.status || 'pending'}
                </Badge>
              </TableCell>
              <TableCell>
                {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Never'}
              </TableCell>
              <TableCell className="space-x-2">
                {user.status === 'pending' && (
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusChange(user.email, 'active')}
                  >
                    Activate
                  </Button>
                )}
                {user.status === 'active' && !isSuperAdminFunction(user.email) && (
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusChange(user.email, 'blocked')}
                  >
                    Block
                  </Button>
                )}
                {user.status === 'blocked' && (
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusChange(user.email, 'active')}
                  >
                    Unblock
                  </Button>
                )}
                {isSuperAdmin && !isSuperAdminFunction(user.email) && (
                  <Button 
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                      if (confirm(`Are you sure you want to delete the user ${user.name || user.email}? This action cannot be undone.`)) {
                        handleDeleteUser(user.email);
                      }
                    }}
                  >
                    Delete
                  </Button>
                )}
                {isSuperAdminFunction(user.email) && (
                  <Badge variant="secondary" className="text-xs">
                    Protected
                  </Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
          {users.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-8">
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default UserManagementTable;
