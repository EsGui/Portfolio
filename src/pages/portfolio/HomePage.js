import React from 'react';
import AboutMe from '../../components/portfolio/ AboutMePortfolio/AboutMe';
import Banner from '../../components/portfolio/BannerPortfolio/Banner';
import Header from '../../components/portfolio/HeaderPortfolio/Header';
import Technologies from '../../components/portfolio/TechnologiesPortfolio/Technologies';


function HomePage() {
  return(
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Technologies />
    </>
  )
};

export default HomePage;

