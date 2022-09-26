import React from 'react';
import 'react-native-gesture-handler';

import MainNavigator from './src/router/MainNavigator/MainNavigator';

const App: () => JSX.Element = () => {
	return <MainNavigator />;
};

export default App;
