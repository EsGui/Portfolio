import React from 'react';
import './Technologies.css'
import technologies from '../../../objects/Technologies';
import textPortfolio from '../../../objects/Text';

function Technologies() {
  const { 
    titleTechnologies,
  } = textPortfolio

  return (
    <>
      <h2 className="TitleTechnologie">{ titleTechnologies }</h2>
      <div className="ContainerTechnologieStyle">
        {
          technologies.map(({ technologie, imageTechnologie }) => (
            <div className="TechnologieStyle">
              <img
                className="imageTechnologie"
                src = { imageTechnologie } 
                alt={ `image ${technologie}` } 
              />
              <h3>{ technologie }</h3>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Technologies