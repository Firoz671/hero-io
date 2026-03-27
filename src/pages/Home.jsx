import { Link } from 'react-router-dom';
import AppCard from '../components/AppCard';
import appsData from '../data/apps.json';

const Home = () => {
    // Show only the first 8 apps for trending section
    const trendingApps = appsData.slice(0, 8);

    return (
        <div className="flex flex-col w-full">
            {/* 1. Banner Section */}
            <section className="pt-20 pb-16 px-4 flex flex-col items-center text-center max-w-4xl mx-auto">
                <h1 className="text-[42px] md:text-[56px] font-bold leading-tight mb-6">
                    <span className="text-[#102a43]">We Build</span> <br className="md:hidden" />
                    <span className="text-[#8758FF]">Productive</span> <span className="text-[#102a43]">Apps</span>
                </h1>
                <p className="text-gray-500 text-[15px] md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className="flex gap-4 mb-16 justify-center">
                    <button className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm">
                        <img src="/google.png" alt="Google Play" className="h-6 w-auto" />
                        <span className="text-sm">Google Play</span>
                    </button>
                    <button className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm">
                        <img src="/apple.png" alt="App Store" className="h-6 w-auto" />
                        <span className="text-sm">App Store</span>
                    </button>
                </div>

                {/* Hero Image */}
                <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto">
                    <img src="/hero.png" alt="App Preview" className="w-full h-auto drop-shadow-2xl z-10 relative" />
                </div>
            </section>

            {/* 2. Stats Section */}
            <section className="bg-[#8758FF] py-16 -mt-10 md:-mt-20 relative z-0">
                <div className="container mx-auto px-4 max-w-5xl mt-12 md:mt-24">
                    <h2 className="text-white text-3xl font-bold text-center mb-12">Trusted By Millions, Built For You</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                        <div className="flex flex-col">
                            <span className="text-sm text-purple-200 mb-2">Total Downloads</span>
                            <span className="text-5xl font-bold mb-2">29.6M</span>
                            <span className="text-xs text-purple-200">21% More Than Last Month</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <span className="text-sm text-purple-200 mb-2">Total Reviews</span>
                            <span className="text-5xl font-bold mb-2">906K</span>
                            <span className="text-xs text-purple-200">46% More Than Last Month</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <span className="text-sm text-purple-200 mb-2">Active Apps</span>
                            <span className="text-5xl font-bold mb-2">132+</span>
                            <span className="text-xs text-purple-200">31 More Will Launch</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Trending Apps Section */}
            <section className="py-20 px-4 bg-[#f9fafb]">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Apps</h2>
                        <p className="text-gray-500 text-sm">Explore All Trending Apps on the Market developed by us</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                        {trendingApps.map(app => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/apps" className="inline-block bg-[#8758FF] hover:bg-[#7340ff] text-white font-medium text-sm px-8 py-3 rounded-md transition-colors">
                            Show All
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
