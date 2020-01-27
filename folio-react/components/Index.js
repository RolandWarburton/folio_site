import React from 'react';
import { Link } from 'react-router-dom';
import indexTopics from './indexTopics.json'


class ListAnchor extends React.Component {
	constructor(id, name) {
		super(id, name)
	}

	render() {
		return (
			<li className="list-item">
				<Link to={this.props.name}>{this.props.name}</Link>
			</li>
		);
	}
}

// super = base() from C#. Passes props to React.Component
class Topic extends React.Component {
	constructor(heading, items) {
		super(heading, items)
	}
	
	render() {
		return (
			<section id={this.props.heading}>
				<Link to={this.props.heading}><h3>{this.props.heading}</h3></Link>
				<ul>
					{this.props.items.map((item) =>
						<ListAnchor key={item.name} name={item.name} id={item.id} />
					)}
				</ul>
			</section>
		);
	}
}

class Index extends React.Component {
	render() {
		return (
			<div className="content">
				<Topic heading="Articles" items={indexTopics.Articles}></Topic>
				<Topic heading="Projects" items={indexTopics.Projects}></Topic>
				<Topic heading="Misc" items={indexTopics.Misc}></Topic>
			</div>
		);
	}
}

export default Index;