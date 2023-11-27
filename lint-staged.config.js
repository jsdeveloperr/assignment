module.exports = {
  './src/**/*.{js,jsx,ts,tsx}': () => ['pnpm lint'],
  '*.+(js|jsx|ts|tsx|json|css|md|mdx)': ['pnpm format'],
};
