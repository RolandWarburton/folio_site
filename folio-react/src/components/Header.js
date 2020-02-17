import React from 'react';
import { Link } from 'react-router-dom';
import routes from './Routes.json'

function Header() {
    return (
        <nav>
            <ul>
                {routes.map(({ path, name, Component }) => (
                    <li key={path}><Link to={path} className="DarkHyperLink">{name}</Link></li>
                ))}
            </ul>
        </nav>
    )
}

export default Header;