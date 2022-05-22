import React from "react";
import "./galleryback.css";
import NavbarComp from './NavbarComp';
import granddinner1 from "./images/granddinner1.jpg" ;
import granddinner2 from "./images/granddinner2.jpg" ;
import granddinner3 from "./images/granddinner3.jpg" ;
import granddinner4 from "./images/granddinner4.jpg" ;
import granddinner5 from "./images/granddinner5.jpg" ;
import Footer from '../components/footer';



function galleryback() {
  return (
    <><NavbarComp/>
     {/* <center><div className="heading"><h1 className="backimagecontent" >Grand Dinner</h1></div></center> */}
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
                Grand Dinner{" "}
              </h5>
              
              <h4 style={{paddingBottom:'0px'}}> </h4>
            </div>
      <div className="row">
        <div className="column">
          <img alt="" src={granddinner1} />
          <img alt="" src={granddinner5} />

        </div>
        <div className="column">
        <img alt="" src={granddinner2} />
        </div>
        <div className="column">
        <img alt="" src={granddinner3} />
        </div>
        <div className="column">
        <img alt="" src={granddinner4} />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default galleryback;
