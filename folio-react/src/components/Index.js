import React from 'react';
import { Link } from 'react-router-dom';
import indexTopics from './indexTopics.json'

function Topic(props) {
	return (
		<section id={props.heading}>
			<Link className="LightHyperLink" to={props.heading}><h3>{props.heading}</h3></Link>
			<ul>
				{props.items.map((item) =>
					<li key={item.name}><Link className="HyperLink" key={item.name} to={item.name}>{item.name}</Link></li>
				)}
			</ul>
		</section>
	)
}

function Index({ location }) {
	return (
		<div>
			<div className="TopicContainer"> <Topic heading="Articles" items={indexTopics.Articles} /></div>
			<div className="TopicContainer"> <Topic heading="Projects" items={indexTopics.Projects} /></div>
			<div className="TopicContainer"> <Topic heading="Misc" items={indexTopics.Misc} /></div>
		</div>
	)
}

export default Index;
