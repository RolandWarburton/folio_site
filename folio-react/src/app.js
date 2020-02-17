import React, { Component, useState, useContext, useTransition, useEffect, Fragment, Children } from 'react';
import { TransitionGroup, CSSTransition, Transition, SwitchTransition } from 'react-transition-group'
import { Switch, Route, Link, useParams } from 'react-router-dom';
import '../styles/styles.scss'

import Title from './components/Title';
import Header from './components/Header'
import Index from './components/Index.js';
import Articles from './components/Articles';
import Projects from './components/Projects';

const routes = [
	{ path: '/', name: 'Home', name: "Home", Component: Index },
	{ path: '/Articles', name: 'Articles', Component: Articles },
	{ path: '/Projects', name: 'Projects', Component: Projects },
]

function App({ location }) {
	// Set the timeout for the CSSTransition
	const timeout = { enter: 200, exit: 200 }

	return (
		// <SwitchTransition mode="out-in">
			<Fragment>
			{routes.map(({ path, Component }) => (
				<Route key={path} exact path={path}>
					{({ match }) => (
						<CSSTransition in={match != null} timeout={timeout} classNames={(path == "/") ? "fadeY" : "fadeX"} unmountOnExit>
							<Component location={location}/>
						</CSSTransition>
					)}
				</Route>
			))}
		</Fragment>
			
	)
}

export default App;
