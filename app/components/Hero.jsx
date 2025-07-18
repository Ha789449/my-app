// app/components/Hero.tsx
'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white text-black px-8 py-20 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Side Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Hi, I’m Abdul Hakeem 👋</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            I’m a full stack developer <span className="font-semibold">React.js & Node.js</span> with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            Even though I have been creating web applications for over 2 years, I still love it as if it was something new.
          </p>

          {/* Location + Availability */}
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-600">●</span>
              <span>Islamabad, Pakistan</span>
            </div>
            <span className="text-green-600 font-medium">✅ Available for new projects</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-500">
            <a href="#" aria-label="Website">🌐</a>
            <a href="#" aria-label="GitHub">🐱</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
         <Image
  src="/Hero.png"
  alt="Your Name"
  width={220}
  height={220}
  className="rounded-lg shadow-lg"
/>
        </div>
      </div>
    </section>
  );
}
