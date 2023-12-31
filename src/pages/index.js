import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';

const Home = () => {

    
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjThree}/>
    <Footer/>
    </>
  );
};

export default Home