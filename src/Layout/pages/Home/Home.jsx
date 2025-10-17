import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import EducationAndSkills from "../EducationAndSkills/EducationAndSkills";
import Navbar from "../../Shared/Navbar";

const Home = () => {
    const homeRef = useRef(null);
    const [fadeBlur, setFadeBlur] = useState(false);
    const [typedText, setTypedText] = useState("");
    const fullTitle = "SQA Engineer";

    // Typing effect
    useEffect(() => {
        if (fadeBlur && typedText.length < fullTitle.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullTitle.slice(0, typedText.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [fadeBlur, typedText]);

    // Fade effect on scroll
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
                className="min-h-screen pt-48 px-4 bg-transparent flex flex-col items-center justify-start text-[#eae6db] relative overflow-hidden transition-all duration-700"
            >
                <Navbar />

                {/* Animated Intro Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={fadeBlur ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center space-y-6"
                >
                    {/* Year */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={fadeBlur ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 text-[#eae6db]/90 ml-[-16] mt-16"
                    >
                        <div className="w-6 h-6 border-2 rounded-full"></div>
                        <div className="border border-[#eae6db] px-6 rounded-full italic text-lg tracking-widest">
                            2025
                        </div>
                    </motion.div>


                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={fadeBlur ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.4 }}
                        className="relative text-5xl md:text-7xl font-bold min-h-[80px] font-mono tracking-wide"
                    >
                        <span className="text-[#eae6db]">
                            {typedText}
                            <span className="border-r-2 border-[#eae6db] animate-pulse ml-1" />
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={fadeBlur ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: 0.6 }}
                        className="w-full flex justify-end mt-4 text-[#eae6db]/90"
                    >
                        <div className="inline-flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#eae6db] rounded-full" />
                            <div className="border border-[#eae6db] px-3 py-1 rounded-full font-serif italic text-sm">
                                Md. Nur Amin
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Other Sections */}
            <EducationAndSkills />
        </div>
    );
};

export default Home;
