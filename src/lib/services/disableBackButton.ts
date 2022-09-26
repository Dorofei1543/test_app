import { BackHandler } from 'react-native';
export const disableBackButton = () => {
	const onBackPress = (): boolean => {
		return true;
	};
	BackHandler.addEventListener('hardwareBackPress', onBackPress);
};
