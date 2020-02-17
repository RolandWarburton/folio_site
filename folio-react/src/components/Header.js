import React from 'react';
import { Link } from 'react-router-dom';
import indexTopics from './indexTopics.json'

function Header() {

    return(
        <div>
            <nav>
                <ul>
                    <li>test</li>
                    {/* <li>Roland</li>
                    <li>text</li> */}
                    {/* <Link className="DarkHyperLink" to='/' >click me (home)</Link> */}
                </ul>
            </nav>
        </div>
    )
}

export default Header;