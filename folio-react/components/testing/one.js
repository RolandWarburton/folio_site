import React, { Component } from 'react';
import Homepage from './homepage';

class One extends React.Component {
	constructor() {
		super();
		this.handleMouseHover = this.handleMouseHover.bind(this);
		this.state = {
			number: 26,
			isHovering: false
		}
	}

	handleMouseHover() {
		this.setState(this.toggleHoverState);
	}

	toggleHoverState(state) {
		return {
			isHovering: !state.isHovering,
		};
	}

	render() {
		return (
			<div>
				<Homepage data={this.state} />
				<div
					onMouseEnter={this.handleMouseHover}
					onMouseLeave={this.handleMouseHover}
				>
					<h3>one</h3>
					{/* <h3>hover: {this.isHovering}</h3> */}
				</div>
			</div>

		);
	}
}


export default One;