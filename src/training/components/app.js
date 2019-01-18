import React, {PropTypes} from 'react';
import ContentContainer from 'terra-content-container';
import Header from 'terra-clinical-header';
import {Link, IndexLink} from 'react-router';


class App extends React.Component {
  render(){
    return(
          <div className="container-fluid">
            <img src="images/logo.jpeg" />
            <ul>
              <li><IndexLink to="/">Home</IndexLink></li>
              <li><Link to="about">About</Link></li>
            </ul>
            {this.props.children}
          </div>
  		);
  }
}

export default App;
