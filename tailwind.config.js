/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				bgLight: "#6EC3F5",
				bgDark: "#5B8DEE",
				title: "#2D4465",
				description: "#2C4364",
				bgWhite: "#F3F6F8",
				stroke: "#D9D9D9",
			},
			fontFamily: {
				sans: ["Nunito Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
