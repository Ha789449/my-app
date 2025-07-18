'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white dark:bg-[#0F172A] text-black dark:text-white px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-400 uppercase tracking-widest">About me</span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <Image
              src="/About.png" // replace with actual image path
              alt="Sagar standing outside"
              width={300}
              height={400}
              className="rounded-md shadow-lg"
            />
          </div>

          <div className="text-left">
            <h2 className="text-2xl font-semibold mb-4">Curious about me? Here you have it:</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I’m a passionate, <span className="text-blue-600 dark:text-blue-400">self-taught developer</span> who specializes in full stack development (React & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and clean, readable, highly performant code matters to me.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I began my journey as a web developer in 2023, and since then, I’ve continued to grow and evolve as a developer. My passion for learning and my commitment to mastering my craft have fueled my success.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I am very much a progressive thinker and enjoy working on products end to end, from ideation to development.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When I’m not in developer mode, I’m usually watching YouTube, tweeting tech jokes, or spending time with family.
            </p>

            <div className="text-sm text-gray-600 dark:text-gray-400 mt-6">
              <p>📚 B.E. in Computer Engineering</p>
              <p>📁 Full time freelancer</p>
              <p>🎯 Aspiring indie hacker</p>
              <p>💬 Ask me about React, Node, TypeScript</p>
              <p className="mt-3">One last thing, I’m available for freelance work, so feel free to reach out and say hello! I promise I don’t bite 😊</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}