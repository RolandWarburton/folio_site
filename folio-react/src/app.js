import React, { Component, useState, useContext, useTransition, useEffect, Fragment } from 'react';
import { TransitionGroup, CSSTransition, Transition, SwitchTransition } from 'react-transition-group'
import { Switch, Route } from 'react-router-dom';
import '../styles/styles.scss'

import Title from './components/Title.js';
import Index from './components/Index.js';
import Articles from './components/Articles';
import Projects from './components/Projects';

const routes = [
	{ path: '/', name: 'Home', name: "Home", Component: Index },
	{ path: '/Articles', name: 'Articles', Component: Articles },
	{ path: '/Projects', name: 'Projects', Component: Projects },
]

const RouteMenu = ({ location }) => (
	<Switch location={location}>
		{routes.map(route => (
			<Route key={route.name} exact path={route.path} name={route.name} component={route.Component} />
		))}
	</Switch>
);


function App({ location }) {
	const [prevPath, setPrevPath] = useState(null);
	const [path, setPath] = useState(location.pathname)
	const timeout = { enter: 200, exit: 100 }

	useEffect(() => {
		const thisPath = location.pathname
		if (thisPath != path) {
			setPath(location.pathname)
			setPrevPath(path)
		}
	}, [location.pathname]);

	return (
		<Fragment>
			<Title />
			<div className="RightCol FlexCenter">
				<TransitionGroup>
					<SwitchTransition mode="out-in">
						<CSSTransition timeout={timeout} classNames="fade" key={location.key}>
							<RouteMenu location={location} />
						</CSSTransition>
					</SwitchTransition>
				</TransitionGroup>
			</div>
		</Fragment>
	)
}

export default App;
