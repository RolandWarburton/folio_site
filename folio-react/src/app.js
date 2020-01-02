import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './styles/styles.scss';

import Title from './components/Title.js';
import Index from './components/Index.js';
import Articles from './components/Articles';
import Projects from './components/Projects';
import Misc from './components/Misc';
import About from './components/About';
import Testing from './components/testing/testing'

class App extends Component
{
    render() {
        return (
            <div className="flex-container">
                <Title />

                <div className="flex-column">
                    <Switch>
                            <Route exact path="/" component={Index} />
                            <Route exact path="/Articles" component={Articles} />
                            <Route exact path="/Projects" component={Projects} />
                            <Route exact path="/Misc" component={Index} />
                            <Route path="/Testing" component={Testing} />
                            <Route render={() => <div>Page Not Found</div>} />
                    </Switch>
                </div>
            
                        
            </div>
        );
    }
}

export default App;