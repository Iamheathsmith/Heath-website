import React from 'react';
import './project-items.scss';
import {connect} from 'react-redux';
import { titleStyle } from '../../lib/utils';
import * as locationActions from  '../../action/find-location';

class Project extends React.Component {

  render() {
    return (
      <div className="project">
        <h1 className={titleStyle(this.props.app.name)}>{this.props.app.name}</h1>
        <img  className="image" src={this.props.app.image}/>

        <div className="btn">
          <a href={this.props.app.git}>
            <button className="btn-git">GitHub</button>
          </a>
          <a href={this.props.app.link}>
            <button className="btn-live">Live Site</button>
          </a>
        </div>

        <div className="about-project">
          <h4>{this.props.app.info}</h4>
          <div className="tech">
            <h4>
              technology used:
            </h4>
            <h5>{this.props.app.tech}</h5>
          </div>
        </div>
      </div>
    );
  }
}

// let mapStateToProps = state => ({
//   location: state.location,
// });

// const mapDispatchToProps = dispatch => ({
//   addLocation : search => dispatch(locationActions.addLocationAction(search)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Project);
export default Project;
