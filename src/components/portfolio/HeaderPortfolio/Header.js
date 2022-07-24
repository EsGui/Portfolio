import React from 'react';
import textPortfolio from '../../../objects/Text';
import './Header.css'

function Header() {
  const {
    title
  } = textPortfolio;

  return(
    <>
      <div className="HeaderHomePortfolio">
        <h1>{ title }</h1>
      </div>
    </>
  )
}

export default Header;

