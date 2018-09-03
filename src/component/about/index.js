
// import './content.scss';
import Nav from '../nav';
import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../lib/utils';
import * as locationActions from  '../../action/find-location';

class About extends React.Component {

  render() {
    return (
      <div className="landing">
        <h1 className="landing-saying">This is the About page.</h1>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  location: state.location,
});

export default connect(mapStateToProps, null)(About);
