import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fiski",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec elit at enim varius luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "/fiskil.png",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "TailwindCSS",
      "Figma",
      "Cypress",
      "Storybook",
      "CI",
    ],
    link: "#",
  },
  {
    title: "Fiski",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec elit at enim varius luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "/fiskil.png",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "TailwindCSS",
      "Figma",
      "Cypress",
      "Storybook",
      "CI",
    ],
    link: "#",
  },
  {
    title: "Fiski",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec elit at enim varius luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "/fiskil.png",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "TailwindCSS",
      "Figma",
      "Cypress",
      "Storybook",
      "CI",
    ],
    link: "#",
  },
];

export default function Experience() {
  return (
    <section className="bg-[#f9fafb] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-3">
          <span className="bg-gray-200 text-gray-700 text-xs px-4 py-1 rounded-full">
            Work
          </span>
        </div>
        <p className="text-center text-sm text-gray-600 mb-10">
          Some of the noteworthy projects I have built:
        </p>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* 🖼 Image Section (Unchanged) */}
              <div className="w-full md:w-1/2 h-auto flex items-center justify-center bg-white p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* 📝 Text Section */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-xs text-gray-700 px-3 py-1 rounded-full w-fit"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
