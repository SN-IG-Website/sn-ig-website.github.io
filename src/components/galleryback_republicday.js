import React from "react";
import "./galleryback.css";
import NavbarComp from './NavbarComp';
import Footer from '../components/footer';
import republic1 from "./images/republic1.jpg" ;
import republic2 from "./images/republic2.jpg" ;
import republic3 from "./images/republic3.jpg" ;
import republic4 from "./images/republic4.jpg" ;
import republic5 from "./images/republic5.jpg" ;
import republic6 from "./images/republic6.jpg" ;
import republic7 from "./images/republic7.jpg" ;
import republic8 from "./images/republic8.jpg" ;



function galleryback() {
  return (
    <><NavbarComp/>
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
              Republic Day{" "}
              </h5>
              
              <h4 style={{paddingBottom:'0px'}}> </h4>
            </div>
     {/* <center><div className="heading"><h1 className="backimagecontent">Republic Day</h1></div></center> */}
      <div className="row">
        <div className="column">
          <img alt=""  src={republic1} />
          <img alt=""  src={republic5} />
        </div>
        <div className="column">
        <img alt=""  src={republic2} /> 
        <img alt=""  src={republic6} /> 
        </div>
        <div className="column">
        <img alt=""  src={republic3} />
        <img alt=""  src={republic7} />
        </div>
        <div className="column">
        <img alt=""  src={republic4} />
        <img alt=""  src={republic8} />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default galleryback;
