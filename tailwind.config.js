module.exports = {
	// mode: "jit", // Just-In-Time Compiler
	content: ["./src/**/*.html"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		screens: {
			lg: { max: "992px" },
			md: { max: "768px" },
			mdd: { max: "575px" },
			sm: { max: "480px" },
			smm: { max: "400px" },
			lw: { max: "374px" },
		},
		container: {
			padding: "10px",
			center: true,
		},
		extend: {
			screens: {
				// max-height
				"mx-h884": { raw: "(max-height: 884px)" },
				"mx-h860": { raw: "(max-height: 860px)" },
				"mx-h718": { raw: "(max-height: 718px)" },
				"mx-h717": { raw: "(max-height: 717px)" },
				"mx-h648": { raw: "(max-height: 648px)" },
				"mx-h550": { raw: "(max-height: 550px)" },
				"mx-h450": { raw: "(max-height: 450px)" },
				// min-height
				"mn-h992": { raw: "(min-height: 992px)" },
			},
			boxShadow: {
				custom: "inset 0px 4px 5px rgba(65, 99, 207, 0.29)",
			},
			colors: {
				charade: "#232532",
				indigo: "#4163CF",
				perano: "#BDCBF6",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms"), require("prettier-plugin-tailwindcss")],
};
