module.exports = {
	content: ["./src/index.html", "./src/**/*.{html,vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		darkTheme: "dark",
		themes: true,
	},
};
