import React from "react";
import "./galleryback.css";
import NavbarComp from './NavbarComp';
import Footer from '../components/footer';
import classsong1 from "./images/classsong1.jpg" ;
import classsong2 from "./images/classsong2.jpg" ;
import classsong3 from "./images/classsong3.jpg" ;
import classsong4 from "./images/classsong4.jpg" ;
import classsong5 from "./images/classsong5.jpg" ;
import classsong6 from "./images/classsong6.jpg" ;
import classsong7 from "./images/classsong7.jpg" ;
import classsong8 from "./images/classsong8.jpg" ;
import classsong9 from "./images/classsong9.jpg" ;
import classsong10 from "./images/classsong10.jpg" ;
import classsong11 from "./images/classsong11.jpg" ;
import classsong12 from "./images/classsong12.jpg" ;
import classsong13 from "./images/classsong13.jpg" ;
import classsong14 from "./images/classsong14.jpg" ;
import classsong15 from "./images/classsong15.jpg" ;
// import classsong16 from "./images/classsong16.jpg" ;




function galleryback() {
    return (
      <><NavbarComp/>
      {/* <center><div className="heading"><h1 className="backimagecontent" >Class Song</h1></div></center> */}
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
                Class Song{" "}
              </h5>
              
              <h4 style={{paddingBottom:'0px'}}> </h4>
            </div>
        <div className="row">
          <div className="column">
          <img alt="" src={classsong1} />
          <img alt="" src={classsong2} />
          <img alt="" src={classsong3} />
          <img alt="" src={classsong4} />

  
           
          </div>
          <div className="column">
          <img alt="" src={classsong4} />
          <img alt="" src={classsong5} />
          <img alt="" src={classsong6} />
          <img alt="" src={classsong7} />
          </div>
          <div className="column">
          <img alt="" src={classsong8} />
          <img alt="" src={classsong9} />
          <img alt="" src={classsong10} />
          <img alt="" src={classsong11} />
          </div>
          <div className="column">
          <img alt="" src={classsong12} />
          <img alt="" src={classsong13} />
          <img alt="" src={classsong14} />
          <img alt="" src={classsong15} />
          </div>
        </div>
        <Footer/>
      </>
    );
  }
  
  export default galleryback;
  