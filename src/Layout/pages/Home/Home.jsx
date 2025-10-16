import React, { useEffect, useRef, useState } from 'react';
import EducationAndSkills from '../EducationAndSkills/EducationAndSkills';

const Home = () => {
    const homeRef = useRef(null);
    const [fadeBlur, setFadeBlur] = useState(false);
    const [typedText, setTypedText] = useState('');
    const fullTitle = "SQA Engineer";

    // Typing effect
    useEffect(() => {
        if (fadeBlur && typedText.length < fullTitle.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullTitle.slice(0, typedText.length + 1));
            }, 100); // typing speed
            return () => clearTimeout(timeout);
        }
    }, [fadeBlur, typedText, fullTitle]);

    // Scroll observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setFadeBlur(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.5,
            }
        );

        if (homeRef.current) observer.observe(homeRef.current);

        return () => {
            if (homeRef.current) observer.unobserve(homeRef.current);
        };
    }, []);

    return (
        <div>
            <div
                ref={homeRef}
                className="min-h-screen bg-[#0e0e0e] flex flex-col items-center justify-center text-[#eae6db] relative overflow-hidden transition-all duration-700"
            >
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
                    {/* Year */}
                    <div className="inline-flex items-center gap-2 text-[#eae6db]/90">
                        <div className="w-6 h-6 border-2 rounded-full"></div>
                        <div className="border border-[#eae6db] px-6 rounded-full italic text-lg">
                            2025
                        </div>
                    </div>

                    {/* Title with typing animation */}
                    <div className="relative text-6xl md:text-8xl font-bold min-h-[80px]">
                        <span className="text-[#eae6db]">
                            {typedText}
                            <span className="border-r-2 border-[#eae6db] animate-pulse ml-1" />
                        </span>
                    </div>

                    {/* Name */}
                    {/* Name aligned to right */}
                    <div className="w-full flex justify-end mt-4 text-[#eae6db]/90">
                        <div className="inline-flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#eae6db] rounded-full"></div>
                            <div className="border border-[#eae6db] px-3 py-1 rounded-full font-serif italic text-sm">
                                Md. Nur Amin
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <EducationAndSkills />
        </div>
    );
};

export default Home;
