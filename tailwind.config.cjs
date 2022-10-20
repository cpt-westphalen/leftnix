/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				red: {
					DEFAULT: "#AA0000",
					neon: "#C10F0F",
					dark: "#410F0F",
				},
				dark: {
					DEFAULT: "#070707",
					500: "#222222",
				},
			},
		},
	},
	plugins: [],
};
