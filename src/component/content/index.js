
import './content.scss';
import Nav from '../nav';
import React from 'react';
import {connect} from 'react-redux';
import Project from '../project-items';
import { renderIf } from '../../lib/utils';
import { Apps } from '../../assests/projects';
import * as locationActions from  '../../action/find-location';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    // this.handleError = this.handleError.bind(this);
  }


  render() {
    console.log('new test', Apps);
    return (
      <div className="project-holder">
        <Project
          title= 'Get The Flight Out'
          app={Apps['GTFO']}
        />
        <Project
          title= 'tic tac toe'
        />
        <Project
          title= 'Weather for you'
        />
        <Project
          title= 'Bingo was his name O'
        />
      </div>
    );
  }
}

let mapStateToProps = state => ({
  location: state.location,
});

export default connect(mapStateToProps, null)(Content);
