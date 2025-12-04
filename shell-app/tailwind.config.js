/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts}",
    // Include remote MF sources so Tailwind generates utilities used by remotes
    "../mf-users/pages/**/*.{js,ts,jsx,tsx}",
    "../mf-users/components/**/*.{js,ts,jsx,tsx}",
    "../mf-users/common/**/*.{js,ts,jsx,tsx}",
    "../mf-users/data/**/*.{js,ts}",
    ,
    // Also include mf-analysis so DashboardPage utilities are generated
    "../mf-analysis/pages/**/*.{js,ts,jsx,tsx}",
    "../mf-analysis/components/**/*.{js,ts,jsx,tsx}",
    "../mf-analysis/common/**/*.{js,ts,jsx,tsx}",
    "../mf-users/data/**/*.{js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
