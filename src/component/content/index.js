
import './content.scss';
import Nav from '../nav';
import React from 'react';
import {connect} from 'react-redux';
import Project from '../project-items';
import { renderIf } from '../../lib/utils';
import { Apps } from '../../assests/projects';
import * as locationActions from  '../../action/find-location';

class Content extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: false,
  //   };
  // }


  render() {
    console.log('new test', Apps.Bingo);
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

export default connect(mapStateToProps, null)(Content);
