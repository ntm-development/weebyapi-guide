export default {
	'/': [
		{
			text: 'Home',
			children: [
				'/',
				'/branding.md',
			],
		},
		{
			text: 'Weeby API',
			children: [
				'/weeby-api/faq.md',
				'/weeby-api/guidelines.md',
				'/weeby-api/obtaining-a-token.md',
				'/weeby-api/requirements.md',
				'/weeby-api/first-request.md',
				'/weeby-api/authentication.md',
				'/weeby-api/bot-commands.md',
				'/weeby-api/webhooks.md',
			],
		},
		{
			text: 'Previews',
			children: [
				'/previews/custom.md',
			],
		},
		{
			text: 'Weeby-JS',
			children: [
				'/weeby-js/setup.md',
				'/weeby-js/authentication.md',
				'/weeby-js/examples.md',
			],
		},

	],
};
