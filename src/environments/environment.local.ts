import { baseEnvironment } from './environment.base';

const base = '';

export const environment = {
	...baseEnvironment,
	production: false,
	api: {
		...baseEnvironment.api,
		base,
	},
};
