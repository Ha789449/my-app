// app/components/Testimonials.jsx
"use client";

import { User2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "Job well done! I am really impressed. He is very good at what he does :) I would recommend Sagar and will rehire in the future for Frontend development.",
    name: "John Doe",
    role: "Founder - xyz.com",
  },
  {
    quote:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
    name: "John Doe",
    role: "Founder - abc.com",
  },
  {
    quote:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
    name: "John Doe",
    role: "Freelancer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-200 text-black py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs bg-white text-black px-3 py-1 rounded-full uppercase tracking-widest">
          Testimonials
        </span>
        <h2 className="mt-4 text-xl font-medium text-gray-800">
          Nice things people have said about me:
        </h2>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center"
          >
            <div className="bg-white p-3 rounded-full mb-4">
              <User2 className="text-black w-6 h-6" />
            </div>
            <p className="text-sm text-gray-800 mb-4">“{t.quote}”</p>
            <h3 className="font-semibold text-black">{t.name}</h3>
            <p className="text-gray-600 text-xs">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
