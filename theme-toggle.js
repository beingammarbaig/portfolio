const fs = require('fs');
const path = require('path');
const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

const replacements = [
  { search: /text-white\/80/g, replace: 'text-slate-600 dark:text-white/80' },
  { search: /text-white\/60/g, replace: 'text-slate-500 dark:text-white/60' },
  { search: /text-white\/50/g, replace: 'text-slate-400 dark:text-white/50' },
  { search: /text-white\/90/g, replace: 'text-slate-700 dark:text-white/90' },
  { search: /text-white(?![a-zA-Z0-9\/])/g, replace: 'text-slate-800 dark:text-white' },
  
  { search: /bg-black\/30/g, replace: 'bg-white/80 dark:bg-black/30' },
  { search: /bg-black\/40/g, replace: 'bg-white/90 dark:bg-black/40' },
  { search: /bg-white\\\/\[0\.03\]/g, replace: 'bg-white/80 dark:bg-white/[0.03]' },
  { search: /bg-white\\\/\[0\.06\]/g, replace: 'bg-white/90 dark:bg-white/[0.06]' },
  
  { search: /border-white\/10/g, replace: 'border-slate-200 dark:border-white/10' },
  { search: /border-white\/20/g, replace: 'border-slate-300 dark:border-white/20' },
  { search: /border-white\/5/g, replace: 'border-slate-100 dark:border-white/5' },
  
  { search: /from-\\[#ff56f6\\]/g, replace: 'from-[#059669] dark:from-[#ff56f6]' },
  { search: /to-\\[#b936ee\\]/g, replace: 'to-[#0891B2] dark:to-[#b936ee]' },
  { search: /via-\\[#b936ee\\]/g, replace: 'via-[#0891B2] dark:via-[#b936ee]' },
  { search: /to-\\[#406aff\\]/g, replace: 'to-[#6366F1] dark:to-[#406aff]' },
  
  { search: /text-\\[#ff56f6\\]/g, replace: 'text-[#059669] dark:text-[#ff56f6]' },
  { search: /bg-\\[#ff56f6\\]/g, replace: 'bg-[#059669] dark:bg-[#ff56f6]' },
  { search: /border-\\[#ff56f6\\]/g, replace: 'border-[#059669] dark:border-[#ff56f6]' },
  
  { search: /text-\\[#b936ee\\]/g, replace: 'text-[#0891B2] dark:text-[#b936ee]' },
  { search: /bg-\\[#b936ee\\]/g, replace: 'bg-[#0891B2] dark:bg-[#b936ee]' },
  { search: /border-\\[#b936ee\\]/g, replace: 'border-[#0891B2] dark:border-[#b936ee]' },
  
  { search: /shadow-\\[0_8px_30px_rgba\\(255,86,246,0\\.1\\)\\]/g, replace: 'shadow-md dark:shadow-[0_8px_30px_rgba(255,86,246,0.1)]' },
  { search: /shadow-\\[0_0_15px_rgba\\(255,86,246,0\\.15\\)\\]/g, replace: 'shadow-md dark:shadow-[0_0_15px_rgba(255,86,246,0.15)]' },
  { search: /shadow-\\[0_0_15px_rgba\\(255,86,246,0\\.05\\)\\]/g, replace: 'shadow-sm dark:shadow-[0_0_15px_rgba(255,86,246,0.05)]' },
  { search: /shadow-\\[0_0_6px_rgba\\(255,86,246,0\\.35\\)\\]/g, replace: 'shadow-[0_0_6px_rgba(5,150,105,0.35)] dark:shadow-[0_0_6px_rgba(255,86,246,0.35)]' }
];

files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  let original = content;
  
  content = content.replace(/className=\"[^\"]*btn[^\"]*text-white[^\"]*\"/g, match => match.replace('text-white', 'TEMP_TEXT_WHITE'));
  content = content.replace(/<span className=\"text-white\">I am a <\/span>/g, '<span className=\"TEMP_TEXT_WHITE\">I am a </span>'); // Banner.js
  
  replacements.forEach(r => {
    content = content.replace(r.search, r.replace);
  });
  
  content = content.replace(/TEMP_TEXT_WHITE/g, 'text-white');
  
  if (content !== original) {
    fs.writeFileSync(p, content, 'utf8');
    console.log('Updated ' + f);
  }
});
