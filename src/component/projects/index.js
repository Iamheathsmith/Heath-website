
import './projects.scss';
import Nav from '../nav';
import React from 'react';
import {connect} from 'react-redux';
import Project from '../project-items';
import { Apps } from '../../assests/projects';
import { renderIf, titleStyle } from '../../lib/utils';
import * as locationActions from  '../../action/find-location';

class ProjectPage extends React.Component {
  render() {
    return (
      <div className="project-holder">
        <ul className="ul-holder">
          <li className='li-item'>
            <Project
              app={Apps.Bingo}
            />
          </li>
          <li className='li-item'>
            <Project
              app={Apps.Tic}
            />
          </li>
          <li className='li-item'>
            <Project
              app={Apps.Weather}
            />
          </li>
          <li className='li-item'>
            <Project
              app={Apps.GTFO}
            />
          </li>
        </ul>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  location: state.location,
});

export default connect(mapStateToProps, null)(ProjectPage);
