import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="min-h-screen bg-[#0e0e0e] flex flex-col items-center justify-center text-[#eae6db] relative overflow-hidden">
                {/* Top corner circles */}
                <div className="absolute top-3 left-3 flex gap-2">
                    <div className="w-3 h-3 rounded-full border border-[#eae6db]"></div>
                    <div className="w-3 h-3 rounded-full border border-[#eae6db]"></div>
                </div>

                <div className="absolute top-3 right-3 flex gap-2">
                    <div className="w-3 h-3 rounded-full border border-[#eae6db]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#eae6db]"></div>
                </div>

                {/* Content */}
                <div className="">
                    
                    {/* Year space-y-6 */}
                    <div className="inline-flex items-center gap-2 text-[#eae6db]/90">
                        <div className="w-6 h-6 border-2 rounded-full"></div>
                        <div className="border border-[#eae6db] px-6 rounded-full italic text-lg">
                            2025
                        </div>
                    </div>

                    {/* Title */}
                    <div className="relative text-6xl md:text-9xl font-bold">
                        <span className="text-[#eae6db]">SQA Engineer</span>

                        {/* Blurred Overlay Elements */}
                        <div className="absolute right-0  top-1 w-56 h-14 rounded-full shadow-lg backdrop-blur-md"></div>
                        <div className="absolute -left-10 top-6 w-52 h-12 bg-black/50 rounded-full shadow-lg backdrop-blur-md"></div>
                    </div>

                    {/* Name */}
                    <div className="inline-flex items-center gap-2 text-[#eae6db]/90">
                        <div className="w-3 h-3 bg-[#eae6db] rounded-full"></div>
                        <div className="border border-[#eae6db] px-3 py-1 rounded-full font-serif italic text-sm">
                            Truong Khoi
                        </div>
                    </div>
                </div>


                
            </div>
        </div>
    );
};

export default Home;