import { Linking, Platform } from 'react-native';
import { STORAGE_KEY } from 'utils/constants/storageKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { MainNavigatorType } from 'router/MainNavigator/types';

interface UseRestoreType {
	isReady: boolean;
	initialState: undefined;
	restoreState: () => Promise<void>;
	onStateChange: (state: stateType) => Promise<void>;
}

type stateType =
	| Readonly<{
			key: string;
			index: number;
			routeNames: string[];
			history?: unknown[] | undefined;
			routes: MainNavigatorType[];
			type: string;
			stale: false;
	  }>
	| undefined;

export const useRestoreState = (): UseRestoreType => {
	const [isReady, setIsReady] = useState(false);
	const [initialState, setInitialState] = useState();
	const onStateChange: (state: stateType) => Promise<void> = async (
		state: stateType
	) => await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));

	const restoreState = async () => {
		try {
			const initialUrl = await Linking.getInitialURL();
			if (Platform.OS !== 'web' && initialUrl === null) {
				const savedStateString = await AsyncStorage.getItem(STORAGE_KEY);
				const state = savedStateString
					? JSON.parse(savedStateString)
					: undefined;

				if (state) {
					setInitialState(state);
				}
			}
		} finally {
			setIsReady(true);
		}
	};

	return { isReady, initialState, restoreState, onStateChange };
};
