
import React from 'react';
import { Link } from 'react-router-dom';
import { renderIf } from '../../lib/utils';
import './navbar.scss';
import { slide as Menu } from 'react-burger-menu';


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let x = document.getElementsById('checkbox');
    x.checked = false;
  }

  render() {
    return (
      <div className="nav">
        <label className="checkbox" >
          <input id="checkbox" type="checkbox"/>
          <section className="line"></section>
          <section className="line1"></section>
          <section className="line2"></section>
          <ul className='navbar'>
            <li className='nav-li'><Link to="/" onClick={this.handleClick}>Home</Link></li>
            <li className='nav-li'><Link to="About" onClick={this.handleClick}>About</Link></li>
            <li className='nav-li'><Link to="Projects" onClick={this.handleClick}>Projects</Link></li>
            <li className='nav-li'><Link to="Photography" onClick={this.handleClick}>Photography</Link></li>
          </ul>
        </label>
      </div>
    );
  }
}

export default Navbar;
