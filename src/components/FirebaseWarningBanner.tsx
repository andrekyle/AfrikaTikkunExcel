import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface FirebaseWarningBannerProps {
  isConfigured: boolean;
}

const FirebaseWarningBanner = ({ isConfigured }: FirebaseWarningBannerProps) => {
  if (isConfigured) return null;
  
  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Firebase Configuration Warning</AlertTitle>
      <AlertDescription>
        Firebase is not properly configured for user profile tracking. 
        User data may not display correctly in the dashboard.
        Please verify your Firebase environment variables in the Vercel dashboard.
      </AlertDescription>
    </Alert>
  );
};

export default FirebaseWarningBanner;
