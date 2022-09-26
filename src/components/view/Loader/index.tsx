import React, { memo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './index.styles';

const LoaderComponent = (): JSX.Element => (
	<View style={styles.container}>
		<ActivityIndicator size="large" />
	</View>
);

export const Loader = (): React.MemoExoticComponent<() => JSX.Element> =>
	memo(LoaderComponent);
