import React, { useEffect, useState } from 'react';


const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme === 'dark';
    }
    return false; // Default to Light Mode
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 lg:w-16 lg:h-8 flex items-center rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300 ml-4 border border-slate-200 dark:border-0 shadow-inner overflow-hidden"
      aria-label="Toggle Theme"
    >

      {/* Sliding Thumb */}
      <div
        className={`absolute left-1 w-6 h-6 lg:w-7 lg:h-7 rounded-full shadow-md transition-transform duration-300 z-10 ${
          isDarkMode ? 'translate-x-6 lg:translate-x-7 bg-[#c4c9d2]' : 'translate-x-0 bg-[#ffcf33]'
        }`}
      >
        {isDarkMode && (
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <div className="absolute w-[35%] h-[35%] bg-[#939caa] rounded-full bottom-[15%] left-[15%]"></div>
            <div className="absolute w-[22%] h-[22%] bg-[#939caa] rounded-full top-[35%] right-[15%]"></div>
            <div className="absolute w-[15%] h-[15%] bg-[#939caa] rounded-full top-[15%] right-[35%]"></div>
          </div>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
