import React from "react";

const EducationAndSkills = () => {
    return (
        <div className="min-h-screen text-[#eae6db] flex flex-col items-center justify-center px-4 py-10 space-y-10 relative overflow-hidden">
            
            {/* Top Left Circles */}
            <div className="absolute top-3 left-3 flex gap-2">
                <div className="w-3 h-3 rounded-full border border-[#eae6db]"></div>
                <div className="w-3 h-3 rounded-full border border-[#eae6db]"></div>
            </div>

            {/* Top Right Circles */}
            <div className="absolute top-3 right-3 flex gap-2">
                <div className="w-3 h-3 rounded-full border border-[#eae6db]"></div>
                <div className="w-3 h-3 rounded-full bg-[#eae6db]"></div>
            </div>

            {/* Section Title */}
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">Education & Skills</h1>
                <p className="italic text-[#eae6db]/70">A quick look at my background</p>
            </div>

            {/* Education Section */}
            <div className="w-full max-w-4xl space-y-6">
                <h2 className="text-2xl font-semibold border-b border-[#eae6db]/30 pb-1">🎓 Education</h2>

                <div className="space-y-4">
                    <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#eae6db]/20">
                        <h3 className="text-xl font-medium">B.Sc. in Computer Science</h3>
                        <p className="text-sm text-[#eae6db]/80">University of XYZ | 2018 - 2022</p>
                        <p className="mt-1 text-[#eae6db]/70">Focused on software engineering, testing methodologies, and data structures.</p>
                    </div>

                    <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#eae6db]/20">
                        <h3 className="text-xl font-medium">Higher Secondary Certificate (HSC)</h3>
                        <p className="text-sm text-[#eae6db]/80">ABC College | 2016 - 2018</p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="w-full max-w-4xl space-y-6">
                <h2 className="text-2xl font-semibold border-b border-[#eae6db]/30 pb-1">🛠️ Skills</h2>

                <div className="flex flex-wrap gap-3">
                    {[
                        "Manual Testing",
                        "Automation Testing",
                        "Selenium",
                        "Postman",
                        "JIRA",
                        "Agile/Scrum",
                        "JavaScript",
                        "React",
                        "Tailwind CSS",
                        "Git",
                        "CI/CD",
                        "Test Planning"
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
