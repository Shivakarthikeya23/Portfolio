/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#00bfff",    // Changed from purple to sky blue
				secondary: "#0088cc",   // Changed to darker sky blue
				tertiary: "#40c9ff",   // Changed to lighter sky blue
				quaternary: "#4d9aee",
				five: "#b8e7f5",       // Changed to light sky blue

				ctnPrimaryLight: "#2e384d",
				ctnSecondaryLight: "#0088cc",  // Updated to match new secondary

				ctnPrimaryDark: "#e5e6e9",
				ctnSecondaryDark: "#7e8c9f"
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35"
			},
			backgroundImage: {
				"hero-pattern": "url('/assets/herobg.png')",
				bgPrimaryDark:
					"linear-gradient(90deg, rgba(24,24,38,1) 0%, rgba(32,32,50,1) 50%, rgba(24,24,38,1) 100%)",
				bgSecondaryDark:
					"linear-gradient(90deg, rgba(33,33,52,1) 0%, rgba(39,39,61,1) 50%, rgba(33,33,52,1) 100%)",
				bgPrimaryLight:
					"linear-gradient(90deg, rgba(211,207,212,1) 0%, rgba(231,239,244,1) 50%, rgba(211,207,212,1) 100%)",
				bgSecondaryLight:
					"linear-gradient(90deg, rgba(224,234,240,1) 0%, rgba(232,239,243,1) 50%, rgba(224,234,240,1) 100%)"
			},
			screens: {
				xs: "320px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px"
			}
		}
	},
	plugins: []
};
