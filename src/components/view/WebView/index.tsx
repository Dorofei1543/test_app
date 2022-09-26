import React from 'react';
import WebView from 'react-native-webview';
import { Loader } from 'components/view/Loader';
import { URI } from 'utils/constants/uriWebView';

export const WebViewSite: () => JSX.Element = () => (
	<WebView
		originWhitelist={['*']}
		source={{ uri: URI }}
		startInLoadingState={true}
		onLoadProgress={Loader}
	/>
);
