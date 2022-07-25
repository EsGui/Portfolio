import React from 'react';
import './AboutMe.css';
import textPortfolio from '../../../objects/Text';

function AboutMe() {
  const { 
    aboutMe,
    titleAboutMe
  } = textPortfolio

  return (
    <>
      <div className="ContainerAboutMe">
        <div className="AboutMeHomePortfolio">
          <h2>{ titleAboutMe }</h2>  
          <p>{ aboutMe }</p>
        </div>
      </div>
    </>
  )
}

export default AboutMe;
