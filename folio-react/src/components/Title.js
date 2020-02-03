import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import SVGIcon from './SVGIcon'

function Title(props) {
	return (

		<header>
			<div className="LeftCol">
				<div className="FlexCenter">
					<div>
						<h3>Roland Warburton</h3>
						<div className="NormalAnchor" href="https://goo.gl/maps/SEBJEfeRSAbGtLmv9" id="location">Melbourne, VIC</div>
						<Link className="NormalAnchor" to="/">Home</Link>
					</div>
					<div className="SVGIconContainer">
						<SVGIcon iconName="github" linksTo="/test"></SVGIcon>
						<SVGIcon iconName="email" linksTo="/test"></SVGIcon>
						<SVGIcon iconName="cv" linksTo="/test"></SVGIcon>
					</div>
				</div>
			</div>
		</header >
	);
}

export default Title;