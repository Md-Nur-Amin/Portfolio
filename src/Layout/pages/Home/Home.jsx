import { useRef } from "react";
import EducationAndSkills from "../EducationAndSkills/EducationAndSkills";
import Navbar from "../../Shared/Navbar";

const Home = () => {
    const homeRef = useRef(null);

    return (
        <div>
            <div
                ref={homeRef}
                className="min-h-screen pt-48 px-4 bg-transparent flex flex-col items-center justify-start text-[#eae6db] relative overflow-hidden transition-all duration-700"
            >
                <Navbar />

                {/* Static Intro Section */}
                <div className="text-center space-y-6">
                    {/* Year */}
                    <div className="inline-flex items-center gap-2 text-[#eae6db]/90 ml-[-16] mt-16">
                        <div className="w-6 h-6 border-2 rounded-full"></div>
                        <div className="border border-[#eae6db] px-6 rounded-full italic text-lg tracking-widest">
                            2025
                        </div>
                    </div>

                    {/* Title */}
                    {/* <div className="relative text-5xl md:text-7xl font-bold min-h-[80px] font-mono tracking-wide">
                        <span className="text-[#eae6db]">Md. Nur Amin</span>
                    </div> */}

                    <div className="relative text-5xl md:text-7xl font-bold min-h-[80px] font-mono tracking-wide">
                        <span className="text-[#eae6db]">
                            <span className="relative inline-block">
                                M
                                <img
                                    src="/src/assets/witch-hat.png"
                                    alt="Witch Hat"
                                    className="absolute -top-4 w-10 h-auto "
                                />
                            </span>
                            d. Nur Amin
                        </span>
                    </div>


                    {/* Name */}
                    <div className="w-full flex justify-end mt-4 text-[#eae6db]/90">
                        <div className="inline-flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#eae6db] rounded-full" />
                            <div className="border border-[#eae6db] px-3 py-1 rounded-full font-serif italic text-sm">
                                SQA Engineer
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Sections */}
            <EducationAndSkills />
        </div>
    );
};

export default Home;
