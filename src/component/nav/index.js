import React from 'react';
import './nav.scss';

class Nav extends React.Component {

  render() {
    return (
      <div className="header">
        <h1 className="logo"> H </h1>
        <h3 className="name"> Heath A. Smith </h3>
        <h3 className="saying"> Full stack software developer that wants to push the boundaries</h3>
      </div>
    );
  }
}


export default Nav;
