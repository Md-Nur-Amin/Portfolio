import spellbook from "../../../assets/spellbook.png";
import magicStaff from "../../../assets/magic-staff.png";


const EducationAndSkills = () => {
    return (
        <div className="min-h-screen text-[#eae6db] flex flex-col items-center justify-center px-4 py-10 space-y-10 relative overflow-hidden">
            
            {/* Top Left Circles */}
            {/* <div className="absolute top-3 left-3 flex gap-2">
                <div className="w-3 h-3 rounded-full border border-[#eae6db]"></div>
                <div className="w-3 h-3 rounded-full border border-[#eae6db]"></div>
            </div> */}

            {/* Top Right Circles */}
            {/* <div className="absolute top-3 right-3 flex gap-2">
                <div className="w-3 h-3 rounded-full border border-[#eae6db]"></div>
                <div className="w-3 h-3 rounded-full bg-[#eae6db]"></div>
            </div> */}

            {/* Section Title */}
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">Education & Skills</h1>
                <p className="italic text-[#eae6db]/70">A quick look at my background</p>
            </div>

            {/* Education Section */}
            <div className="w-full max-w-4xl space-y-6">
                <div className="flex items-center gap-3 border-b border-[#eae6db]/30 pb-1">
                    <img src={spellbook} alt="Spellbook Icon" className="w-6 h-6 drop-shadow-[0_0_6px_#eae6db]" />
                    <h2 className="text-2xl font-semibold">Education</h2>
                </div>

                <div className="space-y-4">
                    <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#eae6db]/20">
                        <h3 className="text-xl font-medium">B.Sc. in Computer Science & Engineering</h3>
                        <p className="text-sm text-[#eae6db]/80">Green University of Bangladesh | 2022 – Present</p>
                        <p className="mt-1 text-[#eae6db]/70">
                            Relevant coursework: Software Engineering, Software Quality Assurance, Machine Learning.
                        </p>
                    </div>

                    <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#eae6db]/20">
                        <h3 className="text-xl font-medium">Higher Secondary Certificate (HSC), Science</h3>
                        <p className="text-sm text-[#eae6db]/80">Abudhar Giffari College | 2019 – 2021</p>
                    </div>

                    <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#eae6db]/20">
                        <h3 className="text-xl font-medium">Secondary School Certificate (SSC), Science</h3>
                        <p className="text-sm text-[#eae6db]/80">Gulshan Model School & College</p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="w-full max-w-4xl space-y-6">
                <div className="flex items-center gap-3 border-b border-[#eae6db]/30 pb-1">
                    <img src={magicStaff} alt="Magic Staff Icon" className="w-6 h-6 drop-shadow-[0_0_6px_#eae6db]" />
                    <h2 className="text-2xl font-semibold">Skills</h2>
                </div>

                <div className="flex flex-wrap gap-3">
                    {[
                        "Manual Testing",
                        "Functional Testing",
                        "Regression Testing",
                        "Smoke & Sanity Testing",
                        "Test Case Design",
                        "TestRail",
                        "Zephyr",
                        "Jira",
                        "ClickUp",
                        "Linear",
                        "Trello",
                        "Selenium WebDriver",
                        "Playwright",
                        "Cypress",
                        "Postman (API Testing)",
                        "Jest (Unit Testing)",
                        "JMeter",
                        "k6",
                        "CI/CD (Jenkins, GitHub)",
                        "Agile / Scrum",
                        "SDLC & STLC"
                    ].map((skill, index) => (
                        <div
                            key={index}
                            className="badge badge-outline border-[#eae6db]/40 text-[#eae6db] font-mono"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            {/* Blurred Light Effects */}
            <div className="absolute -left-10 top-20 w-72 h-10 rounded-full shadow-lg backdrop-blur-md"></div>
            <div className="absolute -right-10 bottom-24 w-64 h-20 rounded-full shadow-lg backdrop-blur-md"></div>
        </div>
    );
};

export default EducationAndSkills;
