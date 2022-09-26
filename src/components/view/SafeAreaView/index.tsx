import React, { memo } from 'react';
import { ImageBackground, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './index.styles';

const SafeAreaViewComponent = ({
	source,
	children,
}: {
	source: ImageSourcePropType;
	children: React.ReactNode;
}): JSX.Element => {
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={source}
				resizeMode="cover"
			>
				{children}
			</ImageBackground>
		</SafeAreaView>
	);
};

export const SafeAreaViewImage = memo(SafeAreaViewComponent);
