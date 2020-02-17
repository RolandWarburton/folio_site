import React, { Component, useState, useContext, useTransition, useEffect, Fragment, Children } from 'react';
import { TransitionGroup, CSSTransition, Transition, SwitchTransition } from 'react-transition-group'
import { Switch, Route, Link, useParams } from 'react-router-dom';
import '../styles/styles.scss'

import Title from './components/Title';
import Header from './components/Header'
import Index from './components/Index.js';
import Articles from './components/Articles';
import Projects from './components/Projects';

// is there a way to read `Component: Index` as a component and not a string in real json?
const routes = [
	{ path: '/', name: 'Home', name: "Home", Component: Index },
	{ path: '/Articles', name: 'Articles', Component: Articles },
	{ path: '/Projects', name: 'Projects', Component: Projects },
]

function App({ location }) {
	// Set the timeout for the CSSTransition
	const timeout = { enter: 100, exit: 100 }

	return (
		<Fragment>
			{routes.map(({ path, Component }) => (
				<Route key={path} exact path={path}>
					{({ match }) => (
						<CSSTransition in={match != null} timeout={timeout} classNames="fade" unmountOnExit>
							<Component location={location} />
						</CSSTransition>
					)}
				</Route>
			))}
		</Fragment>
	)
}

export default App;