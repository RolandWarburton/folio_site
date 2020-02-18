import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import indexTopics from './indexTopics.json'
import Title from './Title.js';

// =========================================
// This is the index page that renders on the Right Hand Column.
// It contains a list of pages that can be found in "indexTopics.json"
// =========================================

function TopicName({ name }) {
	if (name != "Index") {
		return (
			<Link className="lightHyperLink" to={name}>
				<h3>
					{name}
				</h3>
			</Link>
		)
	}
	return (null)
}

// Returns a list of topic subheadings
// needs an array of "topics" to map
function TopicSubheadings({ topics }) {
	if (name != "index") {
		return (
			<ul>
				{topics.map(({ id, name, path }) => (
					<li key={id}>
						<Link className="darkHyperLink" key={id} to={path}>{name}</Link>
					</li>
				))}
			</ul>
		)
	}
	return (null)
}

// returns all the topics that link to other pages
function Topics() {
	return (
		<div className="RightCol">
			{indexTopics.slice(1).map(({ name, topics }) => (
				<div className="TopicContainer" key={name}>
					<TopicName name={name} />
					<TopicSubheadings name={name} topics={topics} />
				</div>
			))}
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
