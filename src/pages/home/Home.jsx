import React from 'react';
import FAQs from '../../components/FAQs';
import MainHeader from '../../components/MainHeader';
import Programs from '../../components/Programs';
import Values from '../../components/Values';
import Testimonials from '../../components/Testimonials';
import './home.css';

const Home = () => {
  return (
    <div>
      <MainHeader />
      <Programs/>
      <Values/>
      <FAQs/>
      <Testimonials/>
    </div>   
  );
};

export default Home;
