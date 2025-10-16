import React, { useEffect, useRef, useState } from 'react';
import EducationAndSkills from '../EducationAndSkills/EducationAndSkills';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../../Shared/Navbar';

const newspaperText = `
  SQA ENGINEER
  TESTING & QUALITY ASSURANCE
  EXPERIENCE IN MANUAL & AUTOMATION TESTING
  ENSURING SOFTWARE RELIABILITY AND PERFORMANCE
  MD. NUR AMIN - PROFESSIONAL TEST ENGINEER
  CONTACT: EMAIL@EXAMPLE.COM | PORTFOLIO ONLINE
  DELIVERING QUALITY SINCE 2025
`;

const Home = () => {
    const homeRef = useRef(null);
    const [fadeBlur, setFadeBlur] = useState(false);
    const [typedText, setTypedText] = useState('');
    const fullTitle = "SQA Engineer";

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, -80]);
    const y2 = useTransform(scrollY, [0, 300], [0, 80]);

    // Scroll direction detection for newspaper text show/hide
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showNewspaper, setShowNewspaper] = useState(true);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest > lastScrollY && latest > 50) {
                // Scrolling down -> hide newspaper text
                setShowNewspaper(false);
            } else {
                // Scrolling up -> show newspaper text
                setShowNewspaper(true);
            }
            setLastScrollY(latest);
        });
    }, [lastScrollY, scrollY]);

    // Typing effect
    useEffect(() => {
        if (fadeBlur && typedText.length < fullTitle.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullTitle.slice(0, typedText.length + 1));
            }, 100); // typing speed
            return () => clearTimeout(timeout);
        }
    }, [fadeBlur, typedText]);

    // Scroll observer for fadeBlur
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
            {/* Animated background */}
            <motion.div
                className="fixed inset-0 -z-10 overflow-hidden bg-[#0e0e0e]"
                aria-hidden="true"
            >
                {/* Gritty halftone-style circles */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#ffffff12] rounded-full blur-3xl opacity-20"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#ffffff12] rounded-full blur-3xl opacity-20"
                />

                {/* Halftone grid pattern (faux 90s print texture) */}
                <div className="absolute inset-0 bg-[radial-gradient(#9991_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04] pointer-events-none" />

                {/* Newspaper background text */}
                <motion.pre
                    initial={{ opacity: 1, y: 0 }}
                    animate={showNewspaper ? { opacity: 0.06, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="whitespace-pre-wrap font-serif uppercase text-[#eae6db] text-[4.5vw] leading-[1] tracking-widest pointer-events-none select-none absolute inset-0 px-10 pt-0 pb-4"

                    style={{ userSelect: 'none', zIndex: -1 }}
                >
                    {newspaperText}
                </motion.pre>
            </motion.div>

            <div
                ref={homeRef}
                className="min-h-[160vh] bg-transparent flex flex-col items-center justify-center text-[#eae6db] relative overflow-hidden transition-all duration-700 px-4"

            >
                <Navbar></Navbar>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={fadeBlur ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center space-y-6"
                >
                    {/* Year */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={fadeBlur ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 text-[#eae6db]/90"
                    >
                        <div className="w-6 h-6 border-2 rounded-full"></div>
                        <div className="border border-[#eae6db] px-6 rounded-full italic text-lg tracking-widest">
                            2025
                        </div>
                    </motion.div>

                    {/* Title with typing animation */}
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
                            <div className="w-3 h-3 bg-[#eae6db] rounded-full"></div>
                            <div className="border border-[#eae6db] px-3 py-1 rounded-full font-serif italic text-sm">
                                Md. Nur Amin
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <EducationAndSkills />
        </div>
    );
};

export default Home;
