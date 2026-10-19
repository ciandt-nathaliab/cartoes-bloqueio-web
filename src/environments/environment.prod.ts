import { baseEnvironment } from './environment.base';

export const environment = {
	...baseEnvironment,
	production: true,
	api: {
		...baseEnvironment.api,
		base: 'API_URL_CARTOES',
	},
};
