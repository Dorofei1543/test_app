import React, { useEffect } from 'react';
import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { IScreen } from './types';

import { useRestoreState } from 'lib/hooks/useRestoreState';
import { disableBackButton } from 'lib/services/disableBackButton';
import { routes } from 'router';

const Stack = createStackNavigator();

const MainNavigator = (): JSX.Element | null => {
	const { isReady, initialState, restoreState, onStateChange } =
		useRestoreState();

	useEffect(() => {
		if (!isReady) {
			restoreState();
		}
		disableBackButton();
	}, [isReady]);

	if (!isReady) {
		return null;
	}

	return (
		<NavigationContainer
			initialState={initialState}
			onStateChange={onStateChange}
		>
			<Stack.Navigator screenOptions={{ headerLeft: () => null }}>
				{routes.map(({ name, component }: IScreen) => (
					<Stack.Screen
						key={name}
						options={{
							cardStyleInterpolator:
								CardStyleInterpolators.forFadeFromBottomAndroid,
						}}
						component={component}
						name={name}
					/>
				))}
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default MainNavigator;
