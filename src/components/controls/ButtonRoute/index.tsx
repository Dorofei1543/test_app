import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';

import { MainNavigatorType } from 'router/MainNavigator/types';
import { BlockButton } from '../ButtonBlock';

interface Props {
	name: string;
	title: string;
}

const RouteButtonComponent = ({ name, title }: Props): JSX.Element => {
	const navigation = useNavigation<MainNavigatorType>();
	const onPress = () => {
		navigation.navigate(name);
	};
	return <BlockButton onPress={onPress} title={title} name={name} />;
};

export const RouteButton = memo(RouteButtonComponent);
