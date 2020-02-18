import React, { Component, useState, useContext, useTransition, useEffect, Fragment, Children } from 'react';
import { TransitionGroup, CSSTransition, Transition, SwitchTransition } from 'react-transition-group'
import { Switch, Route, Link, useParams } from 'react-router-dom';
import '../styles/styles.scss'

import Title from './components/Title';
import Header from './components/Header'
import Index from './components/Index.js';
import Blog from './components/Blog.js';
import Projects from './components/Projects';
import Notes from './components/Notes';
import indexTopics from './components/indexTopics.json'

// is there a way to read `Component: Index` as a component and not a string in real json?
// const routes = [
// 	{ path: '/', name: 'Home', name: "Home", Component: Index },
// 	{ path: '/Blog', name: 'Blog', Component: Articles },
// 	{ path: '/Notes', name: 'Notes', Component: Projects },
// ]

// A list of possible components for different routes
// This exists to translate the "Component" from indexTopics.json to a component
const components = {
	Index: Index,
	Notes: Notes,
	Projects: Projects,
	Blog: Blog
};

function returnComponent({ Component }) {
	const Aprop = components[Component];
	// console.log(Aprop)
	return <Aprop />;
}

function Story(props) {
	return (
		<Fragment>
			<Route key="/" exact path="/"><Index /></Route>
			{indexTopics.map(({ path, Component }) => (
				<Route key={path} exact path={path}>
					{returnComponent({ Component })}
				</Route>
			))}
		</Fragment>
	)

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

// {({ match }) => (
// <CSSTransition in={match != null} timeout={timeout} classNames="fade" unmountOnExit>
// { returnComponent({ Component }) }
// {console.log(Component)}
// </CSSTransition> 
// )}