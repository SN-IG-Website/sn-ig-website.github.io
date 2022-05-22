import React from "react";
import "./galleryback.css";
import NavbarComp from './NavbarComp';
import Footer from '../components/footer';
import farewell1 from "./images/farewell1.JPG" ;
import farewell2 from "./images/farewell2.JPG" ;
import farewell3 from "./images/farewell3.JPG" ;
import farewell4 from "./images/farewell4.JPG" ;
import farewell5 from "./images/farewell5.JPG" ;
import farewell6 from "./images/farewell6.JPG" ;
import farewell7 from "./images/farewell7.JPG" ;
import farewell8 from "./images/farewell8.JPG" ;
import farewell9 from "./images/farewell9.JPG" ;
import farewell10 from "./images/farewell10.JPG" ;
import farewell11 from "./images/farewell11.JPG" ;
import farewell12 from "./images/farewell12.JPG" ;
import farewell13 from "./images/farewell13.JPG" ;
import farewell14 from "./images/farewell14.JPG" ;
import farewell15 from "./images/farewell15.JPG" ;
import farewell16 from "./images/farewell16.JPG" ;
import farewell17 from "./images/farewell17.JPG" ;
import farewell18 from "./images/farewell18.JPG" ;
import farewell19 from "./images/farewell19.JPG" ;
import farewell20 from "./images/farewell20.jpg" ;
import farewell21 from "./images/farewell21.jpeg" ;
import farewell22 from "./images/farewell22.jpeg" ;
import farewell23 from "./images/farewell23.JPG" ;
import farewell24 from "./images/farewell24.JPG" ;

function galleryback() {
  return (
    <><NavbarComp/>
    {/* <center><div className="heading"><h1 className="backimagecontent">Freshers' Treat</h1></div></center> */}
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
                Freshers' Treat{" "}
              </h5>
              
              <h4 style={{paddingBottom:'0px'}}> </h4>
            </div>
      <div className="row">
        <div className="column">
          <div className="imageHover"> <img alt=""  src={farewell1} /></div>
          <img alt=""  src={farewell2} />
          <img alt=""  src={farewell3} />
          <img alt=""  src={farewell4} />
          <img alt=""  src={farewell5} />
          <img alt=""  src={farewell21} />

         
        </div>
        <div className="column">
          <img alt=""  src={farewell6} />
          <img alt=""  src={farewell7} />
          <img alt=""  src={farewell8} />
          <img alt=""  src={farewell9} />
          <img alt=""  src={farewell10} />
          <img alt=""  src={farewell23} />
        </div>
        <div className="column">
          <img alt=""  src={farewell11} />
          <img alt=""  src={farewell12} />
          <img alt=""  src={farewell13} />
          <img alt=""  src={farewell14} />
          <img alt=""  src={farewell15} />
          <img alt=""  src={farewell24} />
        </div>
        <div className="column">
          <img alt=""  src={farewell16} />
          <img alt=""  src={farewell17} />
          <img alt=""  src={farewell18} />
          <img alt=""  src={farewell19} />
          <img alt=""  src={farewell20} />
          <img alt=""  src={farewell22} />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default galleryback;
