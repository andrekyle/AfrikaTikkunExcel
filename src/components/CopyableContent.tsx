import React, { ReactNode } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CopyableContentProps {
  content: string;
  children?: ReactNode;
  className?: string;
  buttonClassName?: string;
  label?: string;
  alwaysShowButton?: boolean;
}

/**
 * A component that wraps content and provides a copy button
 */
const CopyableContent: React.FC<CopyableContentProps> = ({
  content,
  children,
  className = "",
  buttonClassName = "",
  label,
  alwaysShowButton = false
}) => {
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
    <div className={`relative group ${className}`}>
      <div className={`absolute top-2 right-2 ${alwaysShowButton ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className={`p-1 h-7 hover:bg-muted/50 ${buttonClassName}`}
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      {children}
      {label && <div className="mt-1 text-xs text-gray-500">{label}</div>}
    </div>
  );
};

export default CopyableContent;
