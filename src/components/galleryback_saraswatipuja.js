import React from "react";
import "./galleryback.css";
import NavbarComp from './NavbarComp';
import Footer from '../components/footer';
import saraswatipuja1 from "./images/saraswatipuja1.jpg" ;
// import saraswatipuja2 from "./images/saraswatipuja2.jpg" ;
import saraswatipuja3 from "./images/saraswatipuja3.jpg" ;
import saraswatipuja4 from "./images/saraswatipuja4.jpg" ;
import saraswatipuja5 from "./images/saraswatipuja5.jpg" ;
// import saraswatipuja6 from "./images/saraswatipuja6.jpg" ;
// import saraswatipuja7 from "./images/saraswatipuja7.jpg" ;

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
                Saraswati Puja{" "}
              </h5>
              
              <h4 style={{paddingBottom:'0px'}}> </h4>
            </div>
    {/* <center><div className="heading"><h1 className="backimagecontent">Saraswati Puja</h1></div></center> */}
      <div className="row">
        <div className="column">
          <img alt=""  src={saraswatipuja1} />
         
     
        </div>
        <div className="column">
        <img alt=""  src={saraswatipuja5} />
       
         
        </div>
        <div className="column">
        <img alt=""  src={saraswatipuja3} />
       

        </div>
        <div className="column">
        <img alt=""  src={saraswatipuja4} />
         
          
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default galleryback;
