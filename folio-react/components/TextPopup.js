import React from 'react';
// Description of component:
// This can be attached to other react components to show text when its parent is hovered over

// put this code in the parent that you want to hover over:
// <div className="popup">
// <SVGIconPopup data={this.state}></SVGIconPopup>
// </div> 
// 
// the constructor of your parent should look something like:
// constructor(props) {
// 	super(props);
// 	this.handleMouseHover = this.handleMouseHover.bind(this);
// 	this.state = {
// 		isHovering: false
// 	}
// }
// 
// And you will need these functions inside your parent too:
// handleMouseHover() {
// 	this.setState(this.toggleHoverState);
// }
// toggleHoverState(state) {
// 	return {
// 		isHovering: !state.isHovering,
// 	};
// }

class SVGIconPopup extends React.Component {
	render() {
		return (
			<div className="popup-container">
				{
					this.props.data.isHovering &&
					<div>
						Some Text
      				</div>
				}
			</div>
		);
	}
}

export default SVGIconPopup;