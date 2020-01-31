import React, { Component, useState, useContext, useTransition } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
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

function App({ location }) {
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
	// console.log('isDesktopOrLaptop ' + isDesktopOrLaptop)

	const [todos, setTodos] = useState([
		{ text: "Learn about React" },
		{ text: "Meet friend for lunch" },
		{ text: "Build really cool todo app" }
	]);

	// const { pathname, key } = location

	return (
		<div>
			<GlobalStyle whiteColor />
			<Title />

			<Wrapper>
				<TransitionGroup className="transition-group">
					<CSSTransition
						key={location.key}
						timeout={{ enter: 500, exit: 500 }}
						mountOnEnter={true}
						unmountOnExit={true}
						classNames="fade"
					>
						<section className="route-section">
							<Switch location={location}>
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
						</section>

					</CSSTransition>
				</TransitionGroup>
			</Wrapper>

		</div>
	)
}

export default withRouter(App);

const Wrapper = styled.div`
  .fade-enter {
	opacity: 0;
	color: rgba(255, 255, 255, 0);
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
	transition: opacity 500ms ease-in;
	color: rgba(255, 255, 255, 1);
  }

  .fade-exit {
	opacity: 1;
  }

  .fade-exit.fade-exit-active {
	opacity: 0;
	color: rgba(255, 255, 255, 0);
    transition: opacity 500ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;



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