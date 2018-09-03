
import React from 'react';
import { Link } from 'react-router-dom';
import { renderIf } from '../../lib/utils';
import './navbar.scss';
import { slide as Menu } from 'react-burger-menu';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let x = document.getElementsById('checkbox');
    x.checked = false;
  }

  render() {
    // window.onscroll = this.makeOpaque;
    return (
      <div className="nav">
        <label className="checkbox" >
          <input id="checkbox" type="checkbox"/>
          <span className="line"></span>
          <span className="line1"></span>
          <span className="line2"></span>
          <ul className='navbar'>
            <li><Link to="/" onClick={this.handleClick}>Home</Link></li>
            <li><Link to="About" onClick={this.handleClick}>About</Link></li>
            <li><Link to="Projects" onClick={this.handleClick}>Projects</Link></li>
            <li><Link to="Photography" onClick={this.handleClick}>Photography</Link></li>
          </ul>
        </label>
      </div>
    );
  }
}

export default Navbar;
