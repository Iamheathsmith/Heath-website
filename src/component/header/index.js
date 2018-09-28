
import './nav.scss';
import React from 'react';
import Nav from './../nav/index';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="header">
          <h1 className="logo"> H </h1>
          {/* <h3 className="name"> Heath A. Smith </h3> */}
          {/* <h3 className="saying"> Full stack software developer that wants to push the boundaries</h3> */}
        </div>

        <Nav />
      </header>
    );
  }
}


export default Header;
