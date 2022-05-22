import React from "react";
import "./AboutComp.css";

function AboutComp() {
  return (
    <div className="about" id="aboutsnig" style={{paddingBottom:'0px'}}>
       <div className="site-heading text-center" style={{marginBottom:'5px'}}>
       <h5
                className="heading"
                style={{
                  textAlign: "center",
                  fontSize: "45px",
                  marginTop: "20px",
                  padding: "0 px",
                  fontWeight: "700",
                }}
              >
                {" "}
                ABOUT US {" "}
              </h5>
              {/* <h2 style={{ marginTop: "30px",fontSizeAdjust: '70px'}}> DISTINGUISHED ALUMNI </h2> */}
              <h4 style={{paddingBottom:'0px'}}> </h4>
            <h4> </h4>
          </div>
      <center>
       {/* <h2>About Us</h2> */}
        <p className="contentsnig">
          The Sarojini Naidu/Indira Gandhi hall of residence is one of the
          oldest halls in the institute. The hall motto is 'Sanskrita Striya
          Parashakti' which means an enlightened woman is the source of infinite
          strength. The hall has carved its niche in various technology,
          socio-cultural and sports events. The boarders have brought several
          laurels for the hall in GC, Inter IIT and several other competitions.
          The hall has always been a home away from home for the boarders and
          will continue to serve the boarders. We are now a family of thousands
          of alumni and current students and more counting..... The hall is
          incomplete without the tempo shout that the boarders give out so here
          we go... Yo SN ❤️
        </p>
      </center>
      <hr style={{marginBottom:'0px',marginTop:'40px'}} />
    </div>
  );
}

export default AboutComp;
