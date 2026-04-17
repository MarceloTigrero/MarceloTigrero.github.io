import React, { Suspense } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Certifications from './components/sections/Certifications';

function LanguageSelector() {
  const { i18n } = useTranslation();
  return (
    <div className="absolute top-4 right-4 z-50 flex items-center gap-2 bg-gray-800/80 p-2 rounded-full backdrop-blur-sm border border-gray-700">
      <Globe className="w-4 h-4 text-gray-400" />
      <select 
        value={i18n.language.substring(0, 2)} 
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-transparent text-sm text-gray-300 outline-none cursor-pointer"
      >
        <option value="es" className="bg-gray-800">ES</option>
        <option value="en" className="bg-gray-800">EN</option>
      </select>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Loading...</div>}>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative">
        <LanguageSelector />
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </Suspense>
  );
}

export default App;