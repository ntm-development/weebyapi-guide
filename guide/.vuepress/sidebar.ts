export default {
	'/': [
		{
			text: 'Home',
			children: [
				'/',
				'/about.md',
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
				'/previews/generators.md',
				'/previews/custom.md',
				'/previews/effects.md',
				'/previews/overlays.md',
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
		{
			text: 'Other',
			children: [
				'/other/socialmedia.md',
				'/other/privacypolicy.md',
				'/other/stayingsafeonline.md',
			],
		},
	],
};
