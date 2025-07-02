import React from "react";
import Image from "next/image";


export default function Experience() {
  const experiences = [
    {
      role: "Sr. Frontend Developer",
      company: "Upwork",
      date: "Nov 2021 - Present",
      bullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      role: "Team Lead",
      company: "Upwork",
      date: "Jul 2017 - Oct 2021",
      bullets: [
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Upwork",
      date: "Dec 2015 - May 2017",
      bullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
  ];

  return (
    <section className="bg-[#f5f6f7] py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#e5e7eb] text-gray-700 text-xs px-4 py-1 rounded-full flex items-center gap-1 shadow-sm">
           
            Experience
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-600 text-sm mb-10">
          Here is a quick summary of my most recent experiences:
        </p>

        {/* Experience Cards */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm"
          >
            {/* Top-right Date */}
            <div className="absolute top-6 right-6 text-xs text-gray-500">
              {exp.date}
            </div>

            {/* Content Row */}
            <div className="flex items-start gap-6">
              {/* Company Logo */}
              <Image
                src="/images/upwork.jpg"
                alt="Upwork"
                width={60}
                height={20}
                className="object-contain mt-1"
              />

              {/* Textual Info */}
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  {exp.role}
                </p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
