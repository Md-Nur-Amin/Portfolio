
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const newspaperText = `
  RETRO VIBES!
  SQA ENGINEER - TESTING & QUALITY ASSURANCE
  EXPERIENCE IN MANUAL & AUTOMATION TESTING
  ENSURING SOFTWARE RELIABILITY AND PERFORMANCE
  MD. NUR AMIN - PROFESSIONAL TEST ENGINEER
  CONTACT: EMAIL@EXAMPLE.COM | PORTFOLIO ONLINE
  DELIVERING QUALITY SINCE 2025
`;

const Background = ({ children }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -80]);
  const y2 = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <>
      {/* Fixed Background */}
      <motion.div
        className="fixed inset-0 -z-10 overflow-hidden bg-[#0e0e0e]"
        aria-hidden="true"
      >
        {/* Floating circles */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#ffffff12] rounded-full blur-3xl opacity-20"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#ffffff12] rounded-full blur-3xl opacity-20"
        />

        {/* Halftone pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#9991_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04] pointer-events-none" />

        {/* Newspaper Text - always visible */}
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="whitespace-pre-wrap font-serif uppercase text-[#eae6db] text-[4.5vw] leading-[1] tracking-widest pointer-events-none select-none absolute inset-0 px-10 pt-0 pb-4"
          style={{ userSelect: "none", zIndex: -1 }}
        >
          {newspaperText}
        </motion.pre>
      </motion.div>




      {/* LinkedIn Button */}
      {/* === LinkedIn (Right Side) === */}
      <a
        href="https://www.linkedin.com/in/mdnuramin"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 top-1/2 -translate-y-1/2 text-[#eae6db] text-sm leading-5 z-50 transition-all duration-300 hover:text-[#00a0dc]"
      >
        <div className="flex flex-col items-center space-y-1 tracking-[0.15em] font-[Poppins,sans-serif]">
          {/* উপরের দাগ */}
          <span className="w-[1px] h-10 bg-[#eae6db] opacity-50"></span>

          {/* LinkedIn আইকন */}
          <FaLinkedin className="text-2xl mb-1 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_4px_#00a0dc]" />

          {/* LinkedIn লেখা */}
          {"LinkedIn".split("").map((char, index) => (
            <span
              key={index}
              className="font-semibold hover:text-[#00a0dc] transition-all duration-300"
            >
              {char}
            </span>
          ))}

          {/* নিচের দাগ */}
          <span className="w-[1px] h-10 bg-[#eae6db] opacity-50"></span>
        </div>
      </a>

      {/* === GitHub (Left Side) === */}
      <a
        href="https://github.com/your-github-username"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-6 top-1/2 -translate-y-1/2 text-[#eae6db] text-sm leading-5 z-50 transition-all duration-300 hover:text-[#c9510c]"
      >
        <div className="flex flex-col items-center space-y-1 tracking-[0.15em] font-['Fira_Code',monospace]">
          {/* উপরের দাগ */}
          <span className="w-[1px] h-10 bg-[#eae6db] opacity-50"></span>

          {/* GitHub আইকন */}
          <FaGithub className="text-2xl mb-1 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_4px_#c9510c]" />

          {/* GitHub লেখা */}
          {"GitHub".split("").map((char, index) => (
            <span
              key={index}
              className="font-semibold hover:text-[#c9510c] transition-all duration-300"
            >
              {char}
            </span>
          ))}

          {/* নিচের দাগ */}
          <span className="w-[1px] h-10 bg-[#eae6db] opacity-50"></span>
        </div>
      </a>




      <div>{children}</div>
    </>
  );
};

export default Background;
