import React, { Component, useState, useContext, useTransition, TransitionGroup, CSSTransition } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import styled, { createGlobalStyle } from 'styled-components'
import { LeftCol, RightCol, FlexCenter } from './components/styles/Containers'
import { GlobalStyle } from './components/styles/Stylesheet';

import Title from './components/Title.js';
import Index from './components/Index.js';
import Articles from './components/Articles';
import Projects from './components/Projects';



// ${props =>
//     props.primary &&
//     css`
//   background: palevioletred;
//   color: white;
// `};



function App() {
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
	// console.log('isDesktopOrLaptop ' + isDesktopOrLaptop)

	const [todos, setTodos] = useState([
		{ text: "Learn about React" },
		{ text: "Meet friend for lunch" },
		{ text: "Build really cool todo app" }
	]);


	const { pathname, key } = location

	return (
		<div>
			<BrowserRouter>
				<GlobalStyle whiteColor />
				<LeftCol unfocus={false}>
					<FlexCenter>
						<Title />
					</FlexCenter>
				</LeftCol>
				<Switch>
					<RightCol unfocus={false}>
						<FlexCenter>
							<Route exact path="/" component={Index} />
							<Route exact path="/Articles" component={Articles} />
							<Route exact path="/Projects" component={Projects} />
							<Route exact path="/Misc" component={Index} />
							{/* <Route exact path="/Testing" component={Testing} /> */}
							{/* <Route render={() => <div className="content">Page Not Found</div>} /> */}
						</FlexCenter>
					</RightCol>
				</Switch>
			</BrowserRouter>

		</div>
	)
}

export default App;


// trying to make animations
{/* <Route
    render={({ location }) => {
        const { pathname, key } = location;

        return (
            <TransitionGroup component={null}>
                <Transition
                    key={key}
                    appear={true}
                    onEnter={(node, appears) => play(pathname, node, appears)}
                    onExit={(node, appears) => exit(node, appears)}
                    timeout={{ enter: 750, exit: 150 }}
                >
                    <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route path="/author" component={Author} />
                        <Route path="/about" component={About} />
                    </Switch>
                </Transition>
            </TransitionGroup>
        );
    }}
/> */}






// testing react hooks
// const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

// function TodoForm({ addTodo }) {
//     const [value, setValue] = useState("");

//     const handleSubmit = e => {
//         e.preventDefault();
//         if (!value) return;
//         addTodo(value);
//         setValue("");
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 className="input"
//                 value={value}
//                 onChange={e => setValue(e.target.value)}
//             />
//         </form>
//     );
// }

// function TestTODO() {
//     const [todos, setTodos] = useState(false);

//     const addTodo = (text) => {
//         setTodos(newTodos);
//     };

//     return (
//         <div className="app">
//             <div className="todo-list">{todos && "todo is true" || "todo is false"}
//                 <TodoForm addTodo={addTodo} />
//             </div>
//         </div>
//     );
// }