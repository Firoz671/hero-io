import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiDownload, FiStar, FiMessageSquare } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from 'react-toastify';
import appsData from '../data/apps.json';
import { installApp, isAppInstalled } from '../utils/localStorage';

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const foundApp = appsData.find(a => a.id === id);
    if (!foundApp) {
      navigate('/app-not-found', { replace: true });
      return;
    }
    setApp(foundApp);
    setInstalled(isAppInstalled(foundApp.id));
  }, [id, navigate]);

  const handleInstall = () => {
    if (!installed && app) {
      const success = installApp(app);
      if (success) {
        setInstalled(true);
        toast.success(`${app.title} installed successfully!`);
      }
    }
  };

  if (!app) return null; // or loading spinner

  // Formatting chart data for horizontal bars: 5 star at top, 1 star at bottom.
  const chartData = app.ratings.slice().reverse().map(rating => ({
    name: rating.name,
    count: rating.count
  }));

  return (
    <div className="bg-[#f9fafb] min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 shadow-sm rounded-xl">
        
        {/* 1. Top Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 border-b border-gray-100 pb-12">
          {/* Left: App Image */}
          <div className="w-full md:w-64 h-64 bg-white rounded-xl flex items-center justify-center p-4 border border-gray-100 shadow-sm shrink-0">
            <img src={app.image} alt={app.title} className="max-w-full max-h-full object-contain" />
          </div>

          {/* Right: Info */}
          <div className="flex-1 flex flex-col pt-2">
            <h1 className="text-3xl font-bold text-[#0b1727] mb-2">{app.title}</h1>
            <p className="text-[#8758FF] font-medium mb-8">Developed by {app.companyName}</p>
            
            <div className="flex flex-wrap items-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <FiDownload className="text-[#06D6A0]" size={32} />
                <div>
                    <div className="text-sm text-gray-500 mb-1 leading-none">Downloads</div>
                    <div className="font-bold text-2xl text-[#0b1727] leading-none">{app.downloads}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiStar className="text-[#FF9F1C]" fill="currentColor" size={32} />
                 <div>
                    <div className="text-sm text-gray-500 mb-1 leading-none">Average Ratings</div>
                    <div className="font-bold text-2xl text-[#0b1727] leading-none">{app.ratingAvg || 5}</div>
                </div>
              </div>
               <div className="flex items-center gap-3">
                <FiMessageSquare className="text-[#8758FF]" size={32} />
                 <div>
                    <div className="text-sm text-gray-500 mb-1 leading-none">Total Reviews</div>
                    <div className="font-bold text-2xl text-[#0b1727] leading-none">{app.reviews}</div>
                </div>
              </div>
            </div>

            <div>
               <button 
                  onClick={handleInstall}
                  disabled={installed}
                  className={`px-8 py-3 rounded-md font-medium text-white transition-colors ${installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#06D6A0] hover:bg-[#05b889]'}`}
               >
                 {installed ? 'Installed' : `Install Now (${app.size})`}
               </button>
            </div>
          </div>
        </div>

        {/* 2. Ratings Chart */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-[#0b1727] mb-6">Ratings</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={chartData}
                margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
              >
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 14}} width={80} />
                <Tooltip cursor={{fill: 'transparent'}} />
                 <Bar dataKey="count" fill="#FF9F1C" radius={[4, 4, 4, 4]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <hr className="border-gray-100 mb-12" />

        {/* 3. Description Section */}
        <div>
          <h2 className="text-xl font-bold text-[#0b1727] mb-6">Description</h2>
          <div className="text-gray-600 leading-relaxed space-y-4 whitespace-pre-wrap">
              {app.description}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppDetails;
