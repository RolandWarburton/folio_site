import React, { Suspense } from 'react';
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Test = styled.div`
	margin: 2px;
	min-height: 30px;
	fill: #fff;

    const Wrapper = ({ message }) => {
        return <h1>{message}</h1>
`

function loadIcon(name) {
	const Component = React.lazy(() =>
		import(`../icons/${name}.svg`)
	);
	return Component;
}

function SVGIcon(props) {
	const Icon = loadIcon(props.iconName);
	return (
		<Test message="test">
			<Suspense fallback={<div></div>}>
				<Icon />
			</Suspense>
		</Test>
	);
}

export default SVGIcon;


{/* <Suspense fallback={<div></div>}>
	<Icon/>
</Suspense> */}