import React from 'react';
import Hero from '../components/Hero';
import FeaturedVenues from '../components/FeaturedVenues';
import ExclusiveOffers from '../components/ExclusiveOffers';
import Testimonials from '../components/Testimonials';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div className="w-full">
      {/* 42:51 to 57:29 - Create Home Page */}
      <Hero />
      <FeaturedVenues />
      <ExclusiveOffers />
      <Testimonials />
      <NewsLetter />
    </div>
  );
};

export default Home;
