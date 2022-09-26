import { PageA } from 'screens/PageA';
import { PageB } from 'screens/PageB';
import { PageHome } from 'screens/PageHome';
import { PageAName, PageBName, PageHomeName } from 'utils/constants/routeNames';

const routes = [
	{
		name: PageHomeName,
		component: PageHome,
	},
	{
		name: PageAName,
		component: PageA,
	},
	{
		name: PageBName,
		component: PageB,
	},
];

export { routes };
