
// import './content.scss';
import Nav from '../nav';
import React from 'react';
import {connect} from 'react-redux';
import { renderIf } from '../../lib/utils';
import LandingBox from '../landingBox/index';
import * as locationActions from  '../../action/find-location';

class Landing extends React.Component {

  render() {
    return (
      <div className="landing">
        <h1 className="landing-saying"> Full stack software developer that wants to push the boundaries</h1>
        <LandingBox />
      </div>
    );
  }
}

let mapStateToProps = state => ({
  location: state.location,
});

export default connect(mapStateToProps, null)(Landing);
