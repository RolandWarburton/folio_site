import React from 'react';
import { Link } from 'react-router-dom';
import indexTopics from './indexTopics.json'

function Header() {
    const privilegesData = indexTopics.map((topics) => {
        return {
            children: indexTopics.topics,
        };
    });
    return (
        <nav>
            <ul>
                {indexTopics.map(({ name, path }) => (
                    <li key={path}><Link to={path} className="darkHyperLink">{name}</Link></li>
                ))}
            </ul>
        </nav>
    )
}

export default Header;