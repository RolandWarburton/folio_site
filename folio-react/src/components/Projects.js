import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsList = [
	{
		"name": "StatsV2 - Life statistics"
	},
	{
		"name": "Robbiefincham - Commission website"
	},
	{
		"name": "Portfolio - My old cluttered portfolio site"
	}
]

function Projects({ location }) {
	return (
		<div className="flex-column">
			<h1>Projects</h1>
			<ul>
				{ProjectsList.map((item) =>
					<li key={item.name}><Link className="HyperLink" to={item.name}>{item.name}</Link></li>
				)}
			</ul>
		</div>
	)
}

export default Projects;