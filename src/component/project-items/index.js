import React from 'react';
import './project-items.scss';
import {connect} from 'react-redux';
import * as locationActions from  '../../action/find-location';

class Project extends React.Component {

  render() {
    return (
      // <React.Fragment>
      <div className="project">
        <h1 className="title">{this.props.title}</h1>
        <div className="image">
          <a href="https://placeholder.com"><img src="http://via.placeholder.com/350x250"/></a>
        </div>

        <div className="about-project">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, velit sed sodales pulvinar, sem est rutrum metus, vel pulvinar nulla turpis quis diam. Nulla nec facilisis quam, sed lobortis justo. Nunc iaculis justo vel malesuada rhoncus. Aliquam at facilisis ipsum. Maecenas consectetur eu arcu nec congue. Praesent ultricies egestas feugiat. Nam quis nulla vel est vulputate molestie quis quis lorem.
          </h4>
          <div className="tech">
            <h4>
              technology used:
            </h4>
            <h5>
              javaScript, React, redux, etc...
            </h5>
          </div>
        </div>

        <button className="btn">Check it out</button>
      </div>
      // </React.Fragment>
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
