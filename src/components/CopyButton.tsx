import React from 'react';
import { Copy, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  content: string;
  className?: string;
  iconOnly?: boolean;
}

const CopyButton: React.FC<CopyButtonProps> = ({ content, className = "", iconOnly = false }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      // Fallback for older browsers or when clipboard API fails
      const textArea = document.createElement('textarea');
      textArea.value = content;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackError) {
        console.error('Fallback copy failed:', fallbackError);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={handleCopy} 
      className={`p-1 h-6 ${className} hover:bg-muted/50`}
      title="Copy to clipboard"
    >
      {copied ? 
        <CheckCheck className="h-4 w-4 text-green-500" /> : 
        <Copy className="h-4 w-4" />
      }
      {!iconOnly && <span className="ml-1 text-xs">{copied ? "Copied" : "Copy"}</span>}
    </Button>
  );
};

export default CopyButton;
