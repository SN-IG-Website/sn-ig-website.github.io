import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlumniCard from '../components/AlumniCards';
import NavbarComp from '../components/NavbarComp';
import Footer from '../components/footer';

function Alumni() {
    return (
      <div>
        <NavbarComp/>
        <AlumniCard/>
        <Footer/>
      </div>
    )
  }
  
  export default Alumni