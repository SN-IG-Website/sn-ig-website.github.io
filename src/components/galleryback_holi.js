import React from "react";
import "./galleryback.css";
import NavbarComp from './NavbarComp';
import Footer from '../components/footer';
import holi1 from "./images/holi1.jpeg" ;
import holi2 from "./images/holi2.jpeg" ;
import holi3 from "./images/holi3.jpeg" ;
import holi4 from "./images/holi4.jpeg" ;
//import holi5 from "./images/holi5.jpeg" ;
//import holi6 from "./images/holi6.jpeg" ;
import holi7 from "./images/holi7.jpg" ;
import holi8 from "./images/holi8.jpg" ;
import holi9 from "./images/holi9.jpg" ;
import holi10 from "./images/holi10.jpg" ;
import holi11 from "./images/holi11.jpg" ;
import holi12 from "./images/holi12.jpg" ;
import holi13 from "./images/holi13.jpg" ;
import holi14 from "./images/holi14.jpg" ;
// import holi5 from "./images/holi5.jpeg" ;
//import holi6 from "./images/holi6.jpeg" ;


function galleryback() {
  return (
    <><NavbarComp/>
    <center><div className="heading"><h1 className="backimagecontent">Holi</h1></div></center>
      <div className="row">
        <div className="column">
          <img alt=""  src={holi1} />
          <img alt=""  src={holi10} />
          <img alt=""  src={holi7} />
          
     
        </div>
        <div className="column">
          <img alt=""  src={holi2} />
          <img alt=""  src={holi11} />
          <img alt=""  src={holi8} />
        
         
        </div>
        <div className="column">
          <img alt=""  src={holi3} />
          <img alt=""  src={holi12} />
          <img alt=""  src={holi9} />
        

        </div>
        <div className="column">
          <img alt=""  src={holi4} />
          <img alt=""  src={holi13} />
          <img alt=""  src={holi14} />
        
          
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default galleryback;
