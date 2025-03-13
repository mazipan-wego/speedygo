module.exports = {
	name: "wego.com",
	description: "Wego Sites",
	// skip if localhost
	skip: !process.env.CONTEXT,
	options: {
		run: 1,
		frequency: 60 * 24 * 2, // per 2 days
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://sa.wego.com/",
		"https://sa.wego.com/flights",
		"https://sa.wego.com/hotels",
		"https://sa.wego.com/en",
		"https://sa.wego.com/en/flights",

		"https://www.wego.ae/",
		"https://www.wego.ae/flights",
		"https://www.wego.ae/en",
		"https://www.wego.ae/en/flights",

		"https://kw.wego.com/",
		"https://kw.wego.com/flights",

		"https://eg.wego.com",
		"https://eg.wego.com/flights",

		"https://www.wego.qa",
		"https://www.wego.qa/flights",
		"https://www.wego.co.in",
		"https://www.wego.co.in/flights",
		"https://www.wego.pk",
		"https://www.wego.pk/flights"
	]
};