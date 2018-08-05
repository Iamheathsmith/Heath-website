import React from 'react';
import './project-items.scss';
import {connect} from 'react-redux';
import { titleStyle } from '../../lib/utils';
import * as locationActions from  '../../action/find-location';

class Project extends React.Component {

  render() {
    return (
      <div className="project">
        <h1 className={titleStyle(this.props.app.Name)}> - {this.props.app.Name}</h1>
        <img  className="image" src={this.props.app.Image}/>

        <div className="about-project">
          <h4>{this.props.app.Info}</h4>
          <div className="tech">
            <h4>
              technology used:
            </h4>
            <h5>{this.props.app.Tech}</h5>
          </div>
        </div>

        <a href={this.props.app.Link}>
          <button className="btn">Check it out</button>
        </a>
        {/* <button className="btn">Check it out</button> */}
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
