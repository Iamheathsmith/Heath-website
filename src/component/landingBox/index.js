import React from 'react';
import './landingBox.scss';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class LandingBox extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="box">
          <Link to="About">
            <div className='icon'>
              <FontAwesomeIcon
                className='fa fa-search'
                icon="info-circle" />
            </div>
          </Link>
          <div className="content">
            <h3>About Heath</h3>
            <p>A little bit of a back story on me</p>
          </div>
        </div>
        <div className="box">
          <Link to="Projects">
            <div className='icon'>
              <FontAwesomeIcon
                className='fa fa-search'
                icon="project-diagram" />
            </div>
          </Link>
          <div className="content">
            <h3>Projects</h3>
            <p>Recent project that I built</p>
          </div>
        </div>
        <div className="box">
          <Link to="Photography">
            <div className='icon'>
              <FontAwesomeIcon
                className='fa fa-search'
                icon="camera-retro" />
            </div>
          </Link>
          <div className="content">
            <h3>Creative side</h3>
            <p>Being Creative is key to seeing things in a new light</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingBox;
