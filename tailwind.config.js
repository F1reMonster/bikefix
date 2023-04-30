const options = require("./config"); //options from config.js

const allPlugins = {
	typography: require("@tailwindcss/typography"),
	forms: require("@tailwindcss/forms"),
	containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
	.filter((k) => options.plugins[k])
	.map((k) => {
		if (k in options.plugins && options.plugins[k]) {
			return allPlugins[k];
		}
	});

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,php}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		screens: {
			'min-hd': {min: "120rem"}, // 1920
			exlg: {max: "104.6875rem"}, // 1675
			xxlg: {max: "90rem"}, // 1440
			xslg: {max: "87.4375rem"}, // 1399
			xlg: {max: "75rem"}, // 1200
			xmlg: {max: "1100px"}, // 1100
			lg: { max: "62rem" }, // 992
			md: { max: "48rem" }, // 768
			mdd: { max: "35.9375rem" }, // 757
			'w-600': { max: "37.5rem" }, // 600
			exmd: { max: "36rem" }, // 576
			sm: { max: "30rem" }, // 480
			smm: { max: "25rem" }, // 400
			lw: { max: "23.375rem" }, // 374
		},
		container: {
			padding: "0.625rem",
			center: true,
		},
		extend: {
			screens: {
				// max-height
				"mx-h884": { raw: "(max-height: 55.25rem)" }, // 884
				"mx-h860": { raw: "(max-height: 53.75rem)" }, // 860
				"mx-h718": { raw: "(max-height: 44.875rem)" }, // 718
				"mx-h717": { raw: "(max-height: 44.8125rem)" }, // 717
				"mx-h648": { raw: "(max-height: 40.5rem)" }, // 648
				"mx-h550": { raw: "(max-height: 34.375rem)" }, // 550
				"mx-h450": { raw: "(max-height: 28.125rem)" }, // 450
				// min-height
				"mn-h992": { raw: "(min-height: 62rem)" }, // 992
			},
			boxShadow: {
				custom: "inset 0px 4px 5px rgba(65, 99, 207, 0.29)",
				darkcustom: "inset 0px 4px 5px rgba(255, 255, 255, 0.29)",
				'modal-shadow': "0px 4px 12px rgba(66, 100, 208, 0.29)",
				message: "0px 4px 18px rgba(137, 158, 225, 0.28)",
			},
			colors: {
				charade: "#232532",
				indigo: "#4163CF",
				'indigo-500': "#6F89DB",
				perano: "#BDCBF6",
				concrete: "#F3F3F3",
				'silver-chalice': "#B0B0B0",
				punch: "#DC3131",
				tundora: '#454545',
				'cod-gray': "#131313",
				'cod-gray-500': "#2F2E2E",
				mariner: "#1B74E4",
				'mariner-500': "#4282D0",
				'apple-green': '#D8F0E3',
				como: '#4C8269',
				pippin: '#FFDEE0',
				cabaret: '#D04768',
				zumthor: '#E5EEFF',
				'royal-blue': '#337FF0',
				'chetwode-blue': "#899EE1"		
			},
			fontFamily: {
				roboto: ["Roboto"],
			},
			backgroundImage: {
				'bg-bike': "url('../img/bike.webp')",
				'bike-benefits': "url('../img/bike.webp')",
				'select-arrow': "url('../img/select-arrow.svg')"
			},
			backgroundPosition: {
				'select-arrow': "right 1rem center",
				'bike-benefits': 'right 5rem center'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: plugins,
};
