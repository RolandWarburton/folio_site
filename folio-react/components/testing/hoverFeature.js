class HoverExample extends React.Component {
	constructor(props) {
	  super(props);
	  this.handleMouseHover = this.handleMouseHover.bind(this);
	  this.state = {
		isHovering: false,
	  };
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
		  <div
			onMouseEnter={this.handleMouseHover}
			onMouseLeave={this.handleMouseHover}
		  >
			Hover Me
		  </div>
		  {
			this.state.isHovering &&
			<div>
			  Hovering right meow! 🐱
			</div>
		  }
		</div>
	  );
	}
  }

class NavLink extends React.Component {
	// constructor(text) {
	//   super(text);
	//   this.state = {text: text};
	// }
	render() {
		const { link, text } = this.props;
		return (
			<li className="list-item">
				<Link to={link}>{text}</Link>
			</li>
		);
	}
}