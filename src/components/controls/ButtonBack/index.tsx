import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { BlockButton } from '../ButtonBlock';

const BackButtonComponent: () => JSX.Element = () => {
	const navigation = useNavigation();
	const onPress = () => {
		navigation.goBack();
	};
	return <BlockButton title="Previous page" onPress={onPress} />;
};

export const BackButton = memo(BackButtonComponent);
