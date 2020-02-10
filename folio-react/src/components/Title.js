import React, { Component, useState, Children, useEffect, createContext, useContext, Fragment } from 'react';
import { TransitionGroup, CSSTransition, Transition, SwitchTransition } from 'react-transition-group'
import { Link } from 'react-router-dom';
import SVGIcon from './SVGIcon'

// Container for the SVG links on the Left Hand Column 
const SVGContent = () => {
	return (
		<div className="SVGIconContainer">
			<SVGIcon iconName="github" linksTo="/test"></SVGIcon>
			<SVGIcon iconName="email" linksTo="/test"></SVGIcon>
			<SVGIcon iconName="cv" linksTo="/test"></SVGIcon>
		</div>
	)
}

function Title({ location }) {
	// Define a timeout for the page slide transition
	const timeout = { enter: 700, exit: 700 };
	
	// This is my attempt at the slide animation...
	// create a hook for when the location changes
	const [onPageRoot, setOnPageRoot] = useState(() => (location.pathname != "/") ? true : false)

	// Flip between true and false to set the onPageRoot state.
	useEffect(() => {
		setOnPageRoot(() => (location.pathname != "/") ? true : false)
	}, [location.pathname]);

	return (
		<CSSTransition timeout={timeout} in={onPageRoot} classNames="transform" key={location.key}>
			<header className="LeftCol">
				<h3 className="tester">Roland Warburton</h3>
				<div className="NormalAnchor" href="https://goo.gl/maps/SEBJEfeRSAbGtLmv9" id="location">Melbourne, VIC</div>
				<SVGContent />
				<Link className="DarkHyperLink" to='/' >click me (home)</Link>
				{/* <button onClick={() => setState(!state)}>manually set state</button> */}
			</header >
		</CSSTransition >
	);
}

export default Title;

// THIS IS A REMINDER FOR ME ON HOW TO USE HOOKS...
// const [state, setState] = useState(path)
// useEffect(() => {
// 	// console.log(location.pathname)
// 	if (location.pathname != "/") {
// 		setState(true)
// 	} else {
// 		setState(false)
// 	}
// }, [location.pathname]);