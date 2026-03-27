import { useState, useEffect } from 'react';
import { getInstalledApps, uninstallApp } from '../utils/localStorage';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    setInstalledApps(getInstalledApps());
  }, []);

  const handleUninstall = (appId, appTitle) => {
    const success = uninstallApp(appId);
    if (success) {
       setInstalledApps(getInstalledApps());
       toast.error(`${appTitle} uninstalled successfully.`);
    }
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl bg-white p-8 border border-gray-100 shadow-sm rounded-xl">
        <h1 className="text-3xl font-bold text-[#0b1727] mb-8 border-b border-gray-100 pb-4">Installed Applications</h1>
        
        {installedApps.length === 0 ? (
          <div className="py-12 text-center text-gray-500">
             <p className="mb-4">You have not installed any apps yet.</p>
             <Link to="/apps" className="text-[#8758FF] hover:underline font-medium">Browse Apps</Link>
          </div>
        ) : (
          <div className="space-y-6">
            {installedApps.map(app => (
              <div key={app.id} className="flex flex-col sm:flex-row items-center justify-between p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow gap-4">
                 <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img src={app.image} alt={app.title} className="w-16 h-16 object-contain bg-gray-50 rounded-md p-1" />
                    <div>
                      <h3 className="font-bold text-[#0b1727]">{app.title}</h3>
                      <p className="text-sm text-gray-500">{app.size}</p>
                    </div>
                 </div>
                 <button 
                   onClick={() => handleUninstall(app.id, app.title)}
                   className="text-red-500 border border-red-500 hover:bg-red-50 px-4 py-2 rounded-md transition-colors text-sm font-medium w-full sm:w-auto"
                 >
                   Uninstall
                 </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
