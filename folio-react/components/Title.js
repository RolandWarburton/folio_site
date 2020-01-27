import React, { Component, useContext } from 'react';
import SVGIcon from './SVGIcon'
import { withRouter } from 'react-router-dom';
import { matchPath } from 'react-router'
import { ContextSVG } from './ContextSVG'

function Title(props) {
	const value = useContext(ContextSVG)
	return (
		<header>
			<h3>Roland<br />Warburton</h3>
			<li id="location">Melbourne, VIC</li>
			<div className="flex-row" id="social-links">
				<SVGIcon iconName="github" linksTo="/test"></SVGIcon>
				<SVGIcon iconName="email" linksTo="/test"></SVGIcon>
				<SVGIcon iconName="cv" linksTo="/test"></SVGIcon>
			</div>
		</header>
	)
}

export default Title;

// const styles = {}
// styles.test = {
// 	"backgroundColor": "red",
// 	"transform": "translate(-200px)",
// 	"transition": "transform 300ms ease-in-out"
// }

// class Title extends React.Component {
// 	// constructor(props) {
// 	// 	super(props);
// 	// 	this.handleMouseHover = this.handleMouseHover.bind(this);
// 	// 	this.state = {
// 	// 	  isHovering: false,
// 	// 	};
// 	//   }
// 	//   handleMouseHover() {
// 	// 	this.setState(this.toggleHoverState);
// 	// 	console.log(this.props)
// 	//   }

// 	//   toggleHoverState(state) {
// 	// 	return {
// 	// 	  isHovering: !state.isHovering,
// 	// 	};
// 	//   }


// 	render() {
// 		return (
// 			// <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} >
// 			// <header style={this.state.isHovering ? styles.test : null}>
// <header>
// 	<h3>Roland<br />Warburton</h3>
// 	<li id="location">Melbourne, VIC</li>
// 	<div className="flex-row" id="social-links">
// 		<SVGIcon iconName="github" linksTo="/test"></SVGIcon>
// 		<SVGIcon iconName="email" linksTo="/test"></SVGIcon>
// 		<SVGIcon iconName="cv" linksTo="/test"></SVGIcon>
// 	</div>
// </header>
// 			// </div>
// 		);
// 	}
// }
