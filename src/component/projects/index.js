
import './projects.scss';
import Nav from '../nav';
import React from 'react';
import {connect} from 'react-redux';
import Project from '../project-items';
import { renderIf } from '../../lib/utils';
import { Apps } from '../../assests/projects';
import * as locationActions from  '../../action/find-location';

class ProjectPage extends React.Component {
  render() {
    return (
      <div className="project-holder">
        <Project
          app={Apps.Bingo}
        />
        <Project
          app={Apps.GTFO}
        />
        <Project
          app={Apps.Weather}
        />
        <Project
          app={Apps.Tic}
        />
      </div>
    );
  }
}

let mapStateToProps = state => ({
  location: state.location,
});

export default connect(mapStateToProps, null)(ProjectPage);
