'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [isDark, setIsDark] = useState(false);

  // Detect system preference on mount
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      default:
        return <About />;
    }
  };

  return (
    <div className={`
      min-h-screen w-full p-6 md:p-12 font-mono text-sm leading-relaxed transition-colors duration-0
      bg-white text-gray-900 selection:bg-black selection:text-white
      dark:bg-[#0d0d0d] dark:text-gray-300 dark:selection:bg-white dark:selection:text-black
    `}>
      <div className="max-w-[70ch]">
        <Header isDark={isDark} onThemeToggle={handleThemeToggle} />
        
        <Divider char="=" />

        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="animate-in fade-in duration-0 min-h-[50vh]">
          {renderContent()}
        </main>

        <Divider />
        
        <Footer />
      </div>
    </div>
  );
}

