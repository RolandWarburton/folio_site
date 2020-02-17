import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import indexTopics from './indexTopics.json'
import Title from './Title.js';
import Header from './Header';
import { TransitionGroup, CSSTransition, Transition, SwitchTransition } from 'react-transition-group'
import SVGIcon from './SVGIcon'

// =========================================
// This is the index page that renders on the Right Hand Column.
// It contains a list of pages that can be found in "indexTopics.json"
// =========================================

// Returns a topic title and all of its subheadings
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

// returns all the topics that link to other pages
function Topics() {
	return (
		<div className="RightCol">
			<div className="TopicContainer"> <Topic heading="Articles" items={indexTopics.Articles} /></div>
			<div className="TopicContainer"> <Topic heading="Projects" items={indexTopics.Projects} /></div>
			<div className="TopicContainer"> <Topic heading="Misc" items={indexTopics.Misc} /></div>
		</div>
	)
}

function Index({ location }) {
	return (
		<div className="centerCol">
			<Title />
			<Topics />
		</div >
	)
}

export default Index;
