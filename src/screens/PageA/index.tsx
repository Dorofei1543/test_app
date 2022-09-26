import { Back2 } from 'assets';
import { BackButton } from 'components/controls/ButtonBack';
import { RouteButton } from 'components/controls/ButtonRoute';
import { SafeAreaViewImage } from 'components/view/SafeAreaView';

import React, { memo } from 'react';

const PageAComponent = (): JSX.Element => {
	return (
		<SafeAreaViewImage source={Back2}>
			<RouteButton title="Page B" name="PageB" />
			<BackButton />
		</SafeAreaViewImage>
	);
};

export const PageA = memo(PageAComponent);
