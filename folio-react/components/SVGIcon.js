import React, { Component, Suspense } from 'react';
import {Link} from 'react-router-dom'
import SVGIconPopup from './TextPopup';

function loadIcon(name) {
	const Component = React.lazy(() =>
	  import(`../icons/${name}.svg`)
	);
	return Component;
  }

class SVGIcon extends React.Component {	  
	  render() {
		const Icon = loadIcon(this.props.iconName);
		return (
			<div>
				<div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
					<div>
					<Link to="/test">
						<Suspense fallback={<div></div>}>
							<Icon className="icon-svg"/>
						</Suspense>
					</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default SVGIcon;

