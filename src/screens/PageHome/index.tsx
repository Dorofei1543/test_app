import React, { memo } from 'react';
import { RouteButton } from 'components/controls/ButtonRoute';
import { Back1 } from 'assets';
import { SafeAreaViewImage } from 'components/view/SafeAreaView';

const PageHomeComponent = (): JSX.Element => {
	return (
		<SafeAreaViewImage source={Back1}>
			<RouteButton title="Page A" name="PageA" />
			<RouteButton title="Page B" name="PageB" />
		</SafeAreaViewImage>
	);
};

export const PageHome = memo(PageHomeComponent);
