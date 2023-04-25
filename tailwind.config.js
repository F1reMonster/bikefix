module.exports = {
	mode: "jit", // Just-In-Time Compiler
	content: ["./src/**/*.html"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		screens: {
			lg: { max: "992px" },
			md: { max: "768px" },
			sm: { max: "480px" },
			lw: { max: "374px" },
		},
		container: {
			padding: "10px",
			center: true,
		},
		extend: {
			colors: {
				"charade": "#232532",
				"indigo": "#4163CF",
				"perano": "#BDCBF6",

			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require('prettier-plugin-tailwindcss')
	],
};
