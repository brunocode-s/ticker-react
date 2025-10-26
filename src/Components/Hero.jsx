import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-purple-500 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-indigo-400 rounded-full opacity-10 blur-2xl animate-pulse" style={{ animationDuration: '3s' }}></div>

      <div className="max-w-4xl px-6 relative z-10 text-center">
        {/* Main heading with gradient text */}
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
          Simplify Ticket
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Management
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-4 text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Track, organize, and resolve tickets effortlessly all in one place.
        </p>
        
        <p className="text-base text-blue-200 mb-12 max-w-xl mx-auto">
          Streamline your workflow with intelligent automation and real-time collaboration.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
            to="/auth/signup"
            className="group relative bg-white text-blue-600 text-lg px-8 py-4 rounded-xl shadow-2xl font-bold hover:shadow-white/20 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Get Started Free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            to="/auth/login"
            className="border-2 border-white text-white text-lg px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 hover:border-white transition-all duration-300 hover:scale-105"
          >
            Login
          </Link>
        </div>
      </div>
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f9fafb', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#f9fafb', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </section>
  );
}