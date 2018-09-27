
import './about.scss';
// import Nav from '../nav';
import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../lib/utils';
const image  = require('../../assests/images/Heath.jpg');
const Resume  = require('../../assests/files/Resume.pdf');
import * as locationActions from  '../../action/find-location';
const CoverLetter  = require('../../assests/files/Coverletter.pdf');

class About extends React.Component {

  render() {
    return (
      <div className="landing">
        <img className="profile-image" src={image}/>
        <h1 className="landing-saying">
          <p>I am a Full-stack Software Engineer with a proven track record of being reliable, able to adapt quickly and build a team with my leadership skills. I have a passion for working with people to look deeper into problems to create solutions for complex issues that change the way things are done or optimize existing practices. I believe that the skills and experiences from my past endeavors make me a valuable asset to your team.</p>

          <p>With my experience in the military, it has instilled in me a strong sense of accountability, work ethic, problem-solving under pressure, being part of the team and able to adapt to whatever comes my way. Pairing these abilities with my skill set as a full stack software developer, I am able to craft solutions to complex problems in addition to providing phenomenal user experiences.</p>
        </h1>
        <a href={Resume} download='heath Resume'>Resume</a>
        <a href={CoverLetter} download='heath Resume'>Cover Letter</a>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  location: state.location,
});

export default connect(mapStateToProps, null)(About);
