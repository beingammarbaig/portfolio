import React, { useState } from 'react';

const getInitialDark = () => {
  try {
    return localStorage.getItem('theme') === 'dark';
  } catch {
    return false;
  }
};

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDark);

  const toggleTheme = () => {
    const next = !isDarkMode;
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    setIsDarkMode(next);
  };

  return (
    <button
      onClick={toggleTheme}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative w-12 h-6 rounded-full transition-colors duration-300 border flex items-center px-0.5 ${
        isDarkMode
          ? 'bg-slate-700 border-slate-600'
          : 'bg-green-100 border-green-300'
      }`}
      aria-label="Toggle Theme"
    >
      <div className={`w-5 h-5 rounded-full shadow transition-all duration-300 flex items-center justify-center text-[11px] ${
        isDarkMode
          ? 'translate-x-6 bg-slate-300 text-slate-700'
          : 'translate-x-0 bg-green-600 text-white'
      }`}>
        {isDarkMode ? '🌙' : '☀'}
      </div>
    </button>
  );
};

export default ThemeToggle;
