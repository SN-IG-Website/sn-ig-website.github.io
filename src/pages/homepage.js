import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../components/NavbarComp';
import CarouselComp from '../components/CarouselComp';
import AboutComp from '../components/AboutComp';
// import InfraComp from '../components/InfraComp';
import Footer from '../components/footer';
import Infra from '../components/infra';
import "./homepage.css";

function homepage() {
  return (
      <div className='homepage'>
          <NavbarComp/>
         <CarouselComp/>
         <AboutComp/>
         <Infra/>
         <Footer/>
      </div>
  )
}

export default homepage