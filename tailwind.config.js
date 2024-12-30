/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				blue: "#299cdf", // second option: 44a8e4
				black: "#1b1b1b",
			},
			fontFamily: {
				figtree: ["Figtree", "serif"],
				sourGummy: ["Sour Gummy", "serif"],
			},
		},
	},
	plugins: [],
}
