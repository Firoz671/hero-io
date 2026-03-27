import { Link } from 'react-router-dom';
import { FiDownload, FiStar } from 'react-icons/fi';

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col p-4">
        {/* App Image / Placeholder */}
        <div className="aspect-square bg-gray-200 rounded-md w-full mb-4 flex items-center justify-center overflow-hidden">
             <img src={app.image} alt={app.title} className="max-w-full max-h-full object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('bg-gray-200'); }} />
        </div>
        
        {/* App Title */}
        <h3 className="font-semibold text-gray-800 text-[15px] leading-tight mb-4 flex-1">
          {app.title}
        </h3>

        {/* Footer info (Downloads & Rating) */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center text-[#06D6A0] gap-1 text-sm font-medium bg-[#06D6A0]/10 px-2 py-1 rounded">
            <FiDownload size={14} />
            <span>{app.downloads}</span>
          </div>
          <div className="flex items-center text-[#FF9F1C] gap-1 text-sm font-medium bg-[#FF9F1C]/10 px-2 py-1 rounded">
            <FiStar size={14} fill="currentColor" className="text-[#FF9F1C]" />
            <span>{app.ratingAvg || 5}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
