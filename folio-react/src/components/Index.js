import React from 'react';
import { Link } from 'react-router-dom';
import indexTopics from './indexTopics.json'

// =========================================
// This is the index page that renders on the Right Hand Column.
// It contains a list of pages that can be found in "indexTopics.json"
// =========================================


function Topic(props) {
	return (
		<section id={props.heading}>
			<Link className="LightHyperLink" to={props.heading}><h3>{props.heading}</h3></Link>
			<ul>
				{props.items.map((item) =>
					<li key={item.name}><Link className="DarkHyperLink" key={item.name} to={item.name}>{item.name}</Link></li>
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
