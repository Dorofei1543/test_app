import type {
	NativeStackScreenProps,
	NavigationRoute,
} from '@react-navigation/native-stack';

interface ParamListBase {
	[x: string]: object;
}

type ComponentWithNavigation<ScreenProps extends ParamListBase> = ({
	navigation,
}: NativeStackScreenProps<ScreenProps>) => JSX.Element;

export type MainNavigatorType = NavigationRoute<ParamListBase, string>;

export interface IScreen {
	name: string;
	component: ComponentWithNavigation<ParamListBase>;
}
