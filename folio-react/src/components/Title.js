import React from 'react';
import SVGIcon from './SVGIcon'
// import './testing/transition.scss';
// import FadeTransition from "./testing/transitions/fade.jsx";

class Title extends React.Component {
  render() {
    return (
        <div id="title" className="flex-column content">
            <h3>Roland<br/>Warburton</h3>
            <li id="location">Melbourne, VIC</li>
            <div className="flex-row" id="social-links">
                {/* <a href="#"><GithubIcon className="icon-svg" /></a> */}
                <SVGIcon iconName="github" linksTo="/test"></SVGIcon>
                <SVGIcon iconName="email" linksTo="/test"></SVGIcon>
                <SVGIcon iconName="cv" linksTo="/test"></SVGIcon>
                {/* <a href="#"><EmailIcon className="icon-svg" color="white"/></a>
                <a href="#"><CV className="icon-svg" fill="black" viewBox="0 0 100 100"/></a> */}
            </div>
        </div>
    );
  }
}

  export default Title;