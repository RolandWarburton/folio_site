import React, {Component, useState, useContext} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './styles/styles.scss';

import Title from './components/Title.js';
import Index from './components/Index.js';
import Articles from './components/Articles';
import Projects from './components/Projects';
import Testing from './components/MovieList'

import {MovieProvider} from './components/context'


class App extends Component
{
    render() {
        return (
            <div id="page">
                <Title/>
                    <Switch>
                        <MovieProvider value="t">
                            <Route exact path="/" component={Index} />
                            <Route exact path="/Articles" component={Articles} />
                            <Route exact path="/Projects" component={Projects} />
                            <Route exact path="/Misc" component={Index} />
                            <Route exact path="/Testing" component={Testing} />
                            {/* <Route render={() => <div className="content">Page Not Found</div>} /> */}
                        </MovieProvider>
                    </Switch>
            </div>
        );
    }
}

export default App;