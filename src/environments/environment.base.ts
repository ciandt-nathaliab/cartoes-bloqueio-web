export const baseEnvironment = {
	verbose: true,
	mockSessionStorage: false,

	appInsights: {
		instrumentationKey: 'KEY',
	},
	api: {
		endpoints: {
			cartoes: {
				bloqueio: 'operacoes/bloqueio-cartoes',
			},
		},
	},
};
