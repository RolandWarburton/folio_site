import React, { Component, useState, Children, useEffect, createContext, useContext, Fragment } from 'react';
import { TransitionGroup, CSSTransition, Transition, SwitchTransition } from 'react-transition-group'
import { Link } from 'react-router-dom';
import { jsx, css, Global, ClassNames } from '@emotion/core'
import styled from '@emotion/styled'
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

function Title() {
	return (
		<div className="LeftCol">
			<h3>Roland Warburton</h3>
			<a className="darkHyperLink" href="https://goo.gl/maps/SEBJEfeRSAbGtLmv9" id="location">Melbourne, VIC</a>
			<SVGContent />
		</div>
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