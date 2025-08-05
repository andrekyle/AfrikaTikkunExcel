import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
  componentName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error in component:', this.props.componentName || 'Unknown', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  private handleReset = () => {
    if (this.props.onReset) {
      this.props.onReset();
    }
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="p-6 max-w-2xl mx-auto">
          <div className="rounded-lg bg-red-50 p-4 border border-red-200">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-red-600" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  {this.props.componentName ? 
                    `Error in ${this.props.componentName}` : 
                    'An error occurred'}
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p className="font-mono text-xs bg-red-100 p-2 rounded">
                    {this.state.error?.message || 'Unknown error'}
                  </p>
                  {this.state.errorInfo?.componentStack && (
                    <details className="mt-2">
                      <summary className="text-xs text-red-700 cursor-pointer">
                        View component stack
                      </summary>
                      <pre className="mt-1 p-2 bg-red-50 text-xs text-red-600 overflow-auto max-h-40">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
                <div className="mt-4 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={this.handleReset}
                    className="inline-flex items-center gap-1"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Try again
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center gap-1"
                  >
                    Reload Page
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Helper component to wrap components with error boundary
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  componentName: string = Component.displayName || Component.name || 'Unknown',
  FallbackComponent?: React.ComponentType<{ error: Error; onReset: () => void }>
) => {
  const displayName = `withErrorBoundary(${componentName})`;
  
  const WrappedComponent: React.FC<P> = (props) => {
    if (FallbackComponent) {
      return (
        <ErrorBoundary
          componentName={componentName}
          fallback={
            <FallbackComponent 
              error={new Error('An error occurred')} 
              onReset={() => window.location.reload()} 
            />
          }
        >
          <Component {...(props as P)} />
        </ErrorBoundary>
      );
    }
    
    return (
      <ErrorBoundary componentName={componentName}>
        <Component {...(props as P)} />
      </ErrorBoundary>
    );
  };
  
  WrappedComponent.displayName = displayName;
  return WrappedComponent;
};

export default ErrorBoundary;
