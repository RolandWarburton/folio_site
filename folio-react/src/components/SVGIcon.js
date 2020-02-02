import React, { Suspense } from 'react';
import { Link } from 'react-router-dom'

function loadIcon(name) {
	const Component = React.lazy(() =>
		import(`../icons/${name}.svg`)
	);
	return Component;
}

function SVGIcon(props) {
	const Icon = loadIcon(props.iconName);
	return (
		<div className="SVGIcon">
			<Suspense fallback={<div></div>}>
				<Icon />
			</Suspense>
		</div>
	);
}

export default SVGIcon;
