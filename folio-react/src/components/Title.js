import React, { Component, useState, Children, useEffect } from 'react';
import { TransitionGroup, CSSTransition, Transition, SwitchTransition } from 'react-transition-group'
import { Link } from 'react-router-dom';
import SVGIcon from './SVGIcon'

const transitionStyles = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0.5 },
	exited: { opacity: 0.5 },
};

function Title({ location }) {
	// let notOnRoot = false;
	const path = (location.pathname) ? true : false
	const [state, setState] = useState(path)
	let timeout = { enter: 700, exit: 700 }
	// const path = location.pathname

	const animWrapper = {
		transform: "translateX(-25vw)"
	}

	useEffect(() => {
		setState(!state)
	}, [location.pathname]);

	return (
		<CSSTransition disabled timeout={timeout} in={state} classNames="transform" key={location.key}>
			<header className="LeftCol FlexCenter">
				<div>
					<h3>Roland Warburton</h3>
					<div className="NormalAnchor" href="https://goo.gl/maps/SEBJEfeRSAbGtLmv9" id="location">Melbourne, VIC</div>
					<Link className="NormalAnchor" to="/">Home</Link>
					<button onClick={() => setState(false)}>state</button>
				</div>
				<div className="SVGIconContainer">
					<SVGIcon iconName="github" linksTo="/test"></SVGIcon>
					<SVGIcon iconName="email" linksTo="/test"></SVGIcon>
					<SVGIcon iconName="cv" linksTo="/test"></SVGIcon>
				</div>
			</header >
		</CSSTransition>
	);
}

export default Title;