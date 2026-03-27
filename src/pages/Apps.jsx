import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import AppCard from '../components/AppCard';
import appsData from '../data/apps.json';

const Apps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('highToLow'); // 'highToLow' | 'lowToHigh'
  const [loading, setLoading] = useState(false);
  const [displayedApps, setDisplayedApps] = useState([]);

  // Parse downloads (e.g., "9M" -> 9000000, "54K" -> 54000) for sorting
  const parseDownloads = (downloadsStr) => {
    if (!downloadsStr) return 0;
    const str = downloadsStr.toString().toUpperCase();
    if (str.endsWith('M')) return parseFloat(str) * 1000000;
    if (str.endsWith('K')) return parseFloat(str) * 1000;
    return parseFloat(str) || 0;
  };

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      // Filter
      let filtered = appsData.filter(app => 
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Sort
      filtered.sort((a, b) => {
        const aDownloads = parseDownloads(a.downloads);
        const bDownloads = parseDownloads(b.downloads);
        
        if (sortOrder === 'highToLow') {
          return bDownloads - aDownloads;
        } else {
          return aDownloads - bDownloads;
        }
      });

      setDisplayedApps(filtered);
      setLoading(false);
    }, 400); // Fake delay for loading state as requested

    return () => clearTimeout(timer);
  }, [searchTerm, sortOrder]);

  return (
    <div className="bg-[#f9fafb] min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* 1. Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our All Applications</h1>
          <p className="text-gray-500 text-sm">Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        {/* 2. Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="font-bold text-lg text-gray-800">
            ({displayedApps.length}) Apps Found
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
             {/* Sort Dropdown */}
             <select 
               value={sortOrder} 
               onChange={(e) => setSortOrder(e.target.value)}
               className="border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-[#8758FF] bg-white w-full sm:w-auto"
             >
               <option value="highToLow">Downloads: High to Low</option>
               <option value="lowToHigh">Downloads: Low to High</option>
             </select>

             {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="search Apps"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-200 rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-[#8758FF] bg-white transition-colors"
              />
            </div>
          </div>
        </div>

        {/* 3. Apps Grid & States */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8758FF]"></div>
          </div>
        ) : displayedApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
           <div className="flex justify-center py-20">
               <h3 className="text-xl font-semibold text-gray-600">No App Found</h3>
           </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
