import React from "react";
import "./galleryback.css";
import NavbarComp from './NavbarComp';
import Footer from '../components/footer';
import illu from "./images/illu.JPG" ;
// import illu1 from "./images/illu1.jpg" ;
// import illu2 from "./images/illu2.jpg" ;
// import illu3 from "./images/illu3.jpg" ;
import illu4 from "./images/illu4.JPG" ;
import illu5 from "./images/illu5.JPG" ;
import illu6 from "./images/illu6.JPG" ;
import illu7 from "./images/illu7.JPG" ;
import illu8 from "./images/illu8.JPG" ;
import illu9 from "./images/illu9.JPG" ;
import illu10 from "./images/illu10.JPG" ;
import illu11 from "./images/illu11.JPG" ;
import illu12 from "./images/illu12.JPG" ;
import illu13 from "./images/illu13.JPG" ;
import illu14 from "./images/illu14.JPG" ;
import illu15 from "./images/illu15.JPG" ; 
import illu16 from "./images/illu16.JPG" ;
import illu17 from "./images/illu17.JPG" ;
import illu18 from "./images/illu18.JPG" ;
import illu19 from "./images/illu19.JPG" ;
import illu20 from "./images/illu20.JPG" ;
//import illu21 from "./images/illu21.JPG" ;
import illu22 from "./images/illu22.JPG" ;
//import illu23 from "./images/illu23.JPG" ;
import illu24 from "./images/illu24.JPG" ;
import illu25 from "./images/illu25.JPG" ;
import illu26 from "./images/illu26.JPG" ;
import illu27 from "./images/illu27.JPG" ;
import illu28 from "./images/illu28.JPG" ;
import illu29 from "./images/illu29.JPG" ;
import illu30 from "./images/illu30.JPG" ;
import illu31 from "./images/illu31.JPG" ;
import illu32 from "./images/illu32.JPG" ;
import illu33 from "./images/illu33.JPG" ;
import illu34 from "./images/illu34.JPG" ;
import illu35 from "./images/illu35.JPG" ;
import illu36 from "./images/illu36.JPG" ;




function galleryback() {
  return (
    <><NavbarComp/>
    {/* <center><div className="heading"><h1 className="backimagecontent" >Illumination</h1></div></center> */}
    <div className="text">
          <div
            className="Main-header"
            style={{
              paddingTop: "70px",
              paddingBottom: "0px",
              // backgroundColor: "#E3B7A0",
              // backgroundImage: "linear-gradient(150deg,#E3B7A0,#BF9270",
            }}
         / ></div>
     <div className="site-heading text-center" style={{marginBottom:'5px'}}>
              <h5
                className="heading"
                style={{
                  textAlign: "center",
                  fontSize: "50px",
                  marginTop: "30px",
                  padding: "0 px",
                  fontWeight: "700",
                }}
              >
                {" "}
                Illumination{" "}
              </h5>
              
              <h4 style={{paddingBottom:'0px'}}> </h4>
            </div>
      <div className="row">
        <div className="column">
          <img alt="" src={illu} />
          {/* <img alt="" src={illu1} />
          <img alt="" src={illu2} />
          <img alt="" src={illu3} /> */}
          <img alt="" src={illu4} />
          <img alt="" src={illu19} />
          <img alt="" src={illu20} />
          <img alt="" src={illu35} />
          <img alt="" src={illu36} />
          <img alt="" src={illu22} />
          <img alt="" src={illu28} />

         
        </div>
        <div className="column">
          <img alt="" src={illu5} />
          <img alt="" src={illu6} />
          <img alt="" src={illu7} />
          <img alt="" src={illu8} />
          <img alt="" src={illu9} />
          <img alt="" src={illu24} />
          <img alt="" src={illu25} />
          <img alt="" src={illu26} />
         
         
         
        </div>
        <div className="column">
          <img alt="" src={illu10} />
          <img alt="" src={illu11} />
          <img alt="" src={illu12} />
          <img alt="" src={illu13} />
          <img alt="" src={illu14} />
          <img alt="" src={illu29} />
          <img alt="" src={illu30} />
          <img alt="" src={illu31} />
         
          
         
        </div>
        <div className="column">
          <img alt="" src={illu34} />
          <img alt="" src={illu15} />
          <img alt="" src={illu16} />
          <img alt="" src={illu17} />
          <img alt="" src={illu18} />
          <img alt="" src={illu32} />
          <img alt="" src={illu33} />
          <img alt="" src={illu27} />
        
         
        </div>
       
        
      </div>
      <Footer/>
    </>
  );
}

export default galleryback;
