
import './landing.scss';
import Nav from '../nav';
import React from 'react';
import Typed from 'typed.js';
import {connect} from 'react-redux';
import { renderIf } from '../../lib/utils';
import LandingBox from '../landingBox/index';
import * as locationActions from  '../../action/find-location';

class Landing extends React.Component {

  componentDidMount() {
    const options = {
    	strings: [
        'Push the boundaries of design',
        'Push the . . . . . .',
        'Reinvent how we create applications',
        'Check that, I want to create amazing apps!',
      ],
      typeSpeed: 50,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 700,
      smartBackspace: true,
    };
    this.typed = new Typed(this.el, options);
  }

  render() {
    return (
      <div className="landing">
        <div className="intro-saying">
          <span
            // style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </div>
        {/* <a href="#"><svg><rect></rect></svg>test</a> */}
        <LandingBox />
      </div>
    );
  }
}

let mapStateToProps = state => ({
  location: state.location,
});

export default connect(mapStateToProps, null)(Landing);
