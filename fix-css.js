const fs = require('fs');
const cssPath = './src/index.css';
let css = fs.readFileSync(cssPath, 'utf8');

const vars = `
:root {
  --theme-color-1: #059669;
  --theme-color-2: #0891B2;
  --theme-shadow-rgb: 5, 150, 105;
}
.dark {
  --theme-color-1: #ff56f6;
  --theme-color-2: #b936ee;
  --theme-shadow-rgb: 255, 86, 246;
}
`;

if (!css.includes('--theme-color-1')) {
  css = css.replace('@tailwind utilities;', '@tailwind utilities;\n\n' + vars);
}

// Only replace hardcoded #ff56f6 that are NOT part of tailwind classes dark:from-[#ff56f6]
// Actually, since tailwind classes are already from-[#ff56f6], replacing them with var(--theme-color-1) would break tailwind compilation!
// So we ONLY replace them inside standard CSS blocks.
// An easy way is to NOT replace them globally, but only replace them where they are used like #ff56f6
// Wait, we can replace them globally but revert the ones in tailwind strings.
css = css.replace(/#ff56f6/g, 'var(--theme-color-1)');
css = css.replace(/#b936ee/g, 'var(--theme-color-2)');

css = css.replace(/rgba\(255, 86, 246/g, 'rgba(var(--theme-shadow-rgb)');
css = css.replace(/rgba\(5, 150, 105/g, 'rgba(var(--theme-shadow-rgb)');

// Revert tailwind arbitrary values because tailwind doesn't parse var(--theme-color-1) nicely if we replace literally.
css = css.replace(/var\(--theme-color-1\)/g, match => {
  return 'var(--theme-color-1)';
});

// Actually, in index.css we only used dark:from-[#ff56f6] at the very bottom in .text-gradient
// We can just fix .text-gradient manually.
css = css.replace(/from-\[var\(--theme-color-1\)\].*dark:hover:to-\[var\(--theme-color-1\)\]/g, 'from-[#059669] to-[#0891B2] font-bold font-primary hover:from-[#0891B2] hover:to-[#059669] dark:from-[#ff56f6] dark:to-[#b936ee] dark:hover:from-[#b936ee] dark:hover:to-[#ff56f6]');

fs.writeFileSync(cssPath, css);
console.log('Fixed index.css');
