import React from 'react';
import { Link } from 'react-router-dom';
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

function Index() {
	return (
		<div>
			<TopicContainer><Topic heading="Articles" items={indexTopics.Articles}></Topic></TopicContainer>
			<TopicContainer><Topic heading="Projects" items={indexTopics.Projects}></Topic></TopicContainer>
			<TopicContainer><Topic heading="Misc" items={indexTopics.Misc}></Topic></TopicContainer>
		</div>
	)
}


export default Index;