import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-24 px-4 bg-[#f9fafb] min-h-[60vh]">
            <img src="/error-404.png" alt="404 Not Found" className="w-full max-w-md mix-blend-multiply mb-8" />
            <h1 className="text-4xl font-bold text-[#0b1727] mb-4">Oops, page not found!</h1>
            <p className="text-gray-500 mb-8">The page you are looking for is not available.</p>
            <Link to="/" className="bg-[#8758FF] hover:bg-[#7340ff] text-white px-8 py-3 rounded-md font-medium transition-colors">
                Go Back!
            </Link>
        </div>
    );
};
export default NotFound;
