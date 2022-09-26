import React, { memo, useState } from 'react';

import { RouteButton } from 'components/controls/ButtonRoute';

import { WebViewSite } from 'components/view/WebView';
import { Back3 } from 'assets';
import { BackButton } from 'components/controls/ButtonBack';
import { BlockButton } from 'components/controls/ButtonBlock';
import { SafeAreaViewImage } from 'components/view/SafeAreaView';

const PageBComponent = (): JSX.Element => {
	const [openSite, setOpenSite] = useState(false);
	const handlePressSite = () => {
		setOpenSite(!openSite);
	};

	return (
		<SafeAreaViewImage source={Back3}>
			<RouteButton title="Home page" name="PageHome" />
			<BackButton />
			<BlockButton
				onPress={handlePressSite}
				title={openSite ? 'Close site' : 'Open site'}
			/>

			{openSite && <WebViewSite />}
		</SafeAreaViewImage>
	);
};

export const PageB = memo(PageBComponent);
