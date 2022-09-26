import React, { memo } from 'react';
import { View, Button } from 'react-native';
import styles from './index.styles';

interface Props {
	name?: string;
	title: string;
	onPress?: () => void;
}

const ButtonBlockComponent: (props: Props) => JSX.Element = (props: any) => {
	return (
		<View style={styles.button}>
			<Button {...props} />
		</View>
	);
};

export const BlockButton = memo(ButtonBlockComponent);
