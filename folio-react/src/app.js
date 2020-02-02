import React, { Component, useState, useContext, useTransition, useEffect, Fragment } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import '../styles/styles.scss'

import Title from './components/Title.js';
import Index from './components/Index.js';
import Articles from './components/Articles';
import Projects from './components/Projects';

function App({ location }) {
	return (
		<Fragment>
			<Title />
			<TransitionGroup>
				<CSSTransition key={location.pathname} classNames="fade" timeout={600} >
					<div className="RightCol FlexCenter">
						<Switch location={location}>
							<Route exact path="/" component={Index} />
							<Route exact path="/Articles" component={Articles} />
							{/* <Route exact path="/Projects" component={Projects} /> */}
							{/* <Route exact path="/Misc" component={Index} /> */}
							{/* <Route exact path="/Testing" component={Testing} /> */}
							{/* <Route render={() => <div className="content">Page Not Found</div>} /> */}
						</Switch>
					</div>
				</CSSTransition>
			</TransitionGroup>
		</Fragment>
	)
}

export default App;

// css in js example
// const a = {
// 	textAlign: 'left',
// 	color: 'purple'
// }



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