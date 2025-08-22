import { useEffect, useState } from 'react';

const Health = () => {
  const [healthData, setHealthData] = useState({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'PawSpa Grooming Website',
    version: '1.0.0'
  });

  useEffect(() => {
    // Update timestamp every time the component mounts
    setHealthData(prev => ({
      ...prev,
      timestamp: new Date().toISOString()
    }));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full">
        <div className="bg-gradient-card rounded-lg shadow-card p-8 text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">✅</span>
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Service Health Check
          </h1>
          
          <div className="space-y-3 text-left">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status:</span>
              <span className="font-semibold text-primary">{healthData.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service:</span>
              <span className="font-semibold text-foreground">{healthData.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Version:</span>
              <span className="font-semibold text-foreground">{healthData.version}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Timestamp:</span>
              <span className="font-mono text-sm text-foreground">
                {new Date(healthData.timestamp).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-sm font-medium">
              🐾 All systems operational
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Also export the health data as JSON for API endpoints
export const getHealthData = () => ({
  status: 'healthy',
  timestamp: new Date().toISOString(),
  service: 'PawSpa Grooming Website',
  version: '1.0.0'
});

export default Health;