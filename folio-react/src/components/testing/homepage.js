import React, { Component } from 'react';


class Homepage extends React.Component {

	render() {
		console.log("this is homepage", this.props);
		return (
			<div>
				{/* {this.props.data.isHovering} */}
				
				<div>
				{
					this.props.data.isHovering &&
					// TODO: Make this div static
					<div className="popup">
						Hovering right meow from the homepage! 🐱
					</div>
				}
				</div>
			</div>
        );
	}
}

export default Homepage;