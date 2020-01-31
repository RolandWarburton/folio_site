import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Link, Switch } from 'react-router-dom';
import indexTopics from './indexTopics.json'
import styled from 'styled-components'
import { HyperLink, LightHyperLink } from './styles/Links'
import { TopicContainer } from './styles/Containers'

function Topic(props) {
	return (
		<section id={props.heading}>
			<LightHyperLink to={props.heading}><h3>{props.heading}</h3></LightHyperLink>
			<ul>
				{props.items.map((item) =>
					<HyperLink key={item.name} to={item.name}>{item.name}</HyperLink>
				)}
			</ul>
		</section>
	)
}

function Index({ location }) {
	return (
		<Wrapper>
			
					{/* <Switch> */}
						<TopicContainer><Topic heading="Articles" items={indexTopics.Articles}></Topic></TopicContainer>
						<TopicContainer><Topic heading="Projects" items={indexTopics.Projects}></Topic></TopicContainer>
						<TopicContainer><Topic heading="Misc" items={indexTopics.Misc}></Topic></TopicContainer>
					{/* </Switch> */}
				{/* </CSSTransition>
			</TransitionGroup> */}
		</Wrapper>
	)
}

export default Index;


const Wrapper = styled.div`
  .fade-enter {
	opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
	opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
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