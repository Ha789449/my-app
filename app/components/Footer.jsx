import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Get in touch badge */}
        <div className="mb-3">
          <span className="bg-gray-200 text-gray-700 text-xs px-4 py-1 rounded-full">
            Get in touch
          </span>
        </div>

        {/* Message */}
        <p className="text-sm text-gray-600 mb-6">
          What’s next? Feel free to reach out to me if you’re looking for a
          developer, have a query, or simply want to connect.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-800 font-semibold text-base mb-4">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-gray-600" />
            <span>reachsagarshah@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-gray-600" />
            <span>+91 8980500565</span>
          </div>
        </div>

        {/* Optional Note */}
        <p className="text-xs text-gray-500 mb-3">
          You may also find me on these platforms
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom Line */}
        <p className="text-xs text-gray-400">
          © 2025 | Designed and coded with ❤️ by Sagar Shah
        </p>
      </div>
    </footer>
  );
}
