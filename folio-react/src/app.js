import React, { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'
import { Route } from 'react-router-dom';
import '../styles/styles.scss'

import Index from './components/Index.js';
import Blog from './components/Blog.js';
import Projects from './components/Projects';
import Notes from './components/Notes';
import indexTopics from './components/indexTopics.json'

// A list of possible components for different routes
// This exists to translate the "Component" from indexTopics.json to a component
const components = {
	Index: Index,
	Notes: Notes,
	Projects: Projects,
	Blog: Blog
};

// returns Component based on the string passed
function returnComponent({ Component }) {
	const Aprop = components[Component];
	// console.log(Aprop)
	return <Aprop />;
}

function App({ location }) {
	// Set the timeout for the CSSTransition
	const timeout = { enter: 100, exit: 100 }

	return (
		<Fragment>
			{indexTopics.map(({ path, Component }) => (
				<Route key={path} exact path={path}>
					{({ match }) => (
						<CSSTransition in={match != null} timeout={timeout} classNames="fade" unmountOnExit>
							{returnComponent({ Component })}
						</CSSTransition>
					)}
				</Route>
			))}
		</Fragment>
	)
}

export default App;
