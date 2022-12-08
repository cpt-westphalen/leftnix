/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				logo: "Bebas Neue",
			},
			colors: {
				red: {
					DEFAULT: "#AA0000",
					neon: "#C10F0F",
					dark: "#410F0F",
				},
				dark: {
					DEFAULT: "#070707",
					50: "#0A0A0A",
					100: "#101010",
					500: "#222222",
					600: "#333333",
				},
			},
			height: {
				86: "22rem",
			},
			scale: {
				102: "1.025",
			},
		},
	},
	plugins: [],
};
