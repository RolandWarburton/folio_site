import React from 'react';

const red = {
  margin: '40px',
  background: red
};

class Projects extends React.Component {
  // componentDidMount () {
  //   removeClass(document.querySelector('content'), 'red');
  // }
  render() {
    return (
      <div className="flex-column">
          <h1>Projects</h1>
          <ul>
              <li className="list-item">StatsV2 - Life statistics</li>
              <li className="list-item">Robbiefincham - Commission website</li>
              <li className="list-item">Portfolio - My old cluttered portfolio site</li>
          </ul>
      </div>
    );
  }
}
//  componentWillUnmount () {
//     addClass(document.querySelector('content'), 'red');
//  }
  export default Projects;