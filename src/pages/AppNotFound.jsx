import { Link } from 'react-router-dom';

const AppNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-24 px-4 bg-[#f9fafb] min-h-[60vh]">
            <img src="/App-Error.png" alt="App Not Found" className="w-full max-w-sm mb-8" />
            <h1 className="text-4xl font-bold text-[#0b1727] mb-4">OPPS!! APP NOT FOUND</h1>
            <p className="text-gray-500 mb-8 text-center max-w-md">
                The App you are requesting is not found on our system. please try another apps
            </p>
            <Link to="/apps" className="bg-[#8758FF] hover:bg-[#7340ff] text-white px-8 py-3 rounded-md font-medium transition-colors">
                Go Back!
            </Link>
        </div>
    );
};
export default AppNotFound;
