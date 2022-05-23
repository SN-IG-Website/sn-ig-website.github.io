import React from "react";
import NavbarComp from "./NavbarComp";
import Tabs from "./Tabs";
import "./AchievComp.css";
// import { Dropdown } from "react-bootstrap";
// import Flipcard from "./Flipcard";
import { Col, Row } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import "./Flipcard.css";
import Athletics from "./images/athletics.jpg";
import tec1 from "./images/tec1.jpg";
import tech2 from "./images/tech2.jpeg";
import chess from "./images/chess.jpeg";
import gold from "./images/gold-medal.png";
import silver from "./images/silver.png";
import bronze from "./images/bronze-medal.png";
// import Picture1 from "./images/Picture1.jpg";
// import Picture2 from "./images/Picture2.jpg";
// import Picture3 from "./images/Picture3.jpg";
// import Picture4 from "./images/Picture4.jpg";
import Volley from "./images/volley.jpg";
import BaddyTeam from "./images/baddy-team.jpeg";
// import Picture6 from "./images/Picture6.jpg";
// import Picture7 from "./images/Picture7.jpg";
//import Picture8 from "./images/Picture8.jpg";
import TableTennisTeam from "./images/tennisteam.jpeg";
import LawnTennisTeam from "./images/lawnteam.jpeg";
import Footer from "../components/footer";
import BasketballTeam from "./images/basketballteam.jpeg";

function AchievComp() {
  return (
    <div className="achiev-section">
      <NavbarComp />
      {/* <center>
        <h1>Achievements</h1>
      </center> */}
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
                ACHIEVEMENTS {" "}
              </h5>
              {/* <h2 style={{ marginTop: "30px",fontSizeAdjust: '70px'}}> DISTINGUISHED ALUMNI </h2> */}
              <h4 style={{paddingBottom:'0px'}}> </h4>
            </div>
      <Tabs>
        <div label="Sports & Games">
          <center>
            <div style={{ marginBottom: "25px" }}>
              <Grid>
                <Row className="mx-2">
                  <Col xs={6} md={4}>
                    <div class="card-container">
                      <div class="card">
                        <div class="side">
                          <img alt=""  class="flipimage" src={Athletics} />
                        </div>
                        <div class="side back">
                          <h1
                            style={{ marginTop: "15px", marginBottom: "20px" }}
                          >
                            Athletics
                          </h1>
                          <p>
                            2021-22 | Interhall Tournament- Gold
                            <img alt="" 
                              src={gold}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                          <p>
                            2018-19 | General Championship- Gold
                            <img alt="" 
                              src={gold}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                          <p>
                            2017-18 | General Championship- Gold
                            <img alt="" 
                              src={gold}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                          <p>
                            2016-17 | General Championship- Gold
                            <img alt="" 
                              src={gold}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div class="card-container">
                      <div class="card">
                        <div class="side">
                          <img alt=""  class="flipimage" src={Volley} />
                        </div>

                        <div class="side back">
                          <h1
                            style={{ marginTop: "15px", marginBottom: "20px" }}
                          >
                            Volleyball
                          </h1>
                          <p>
                            2021-22 | Interhall Tournament- Silver
                            <img alt="" 
                              src={silver}
                              style={{ height: "40px", width: "30px" }}
                            ></img>
                          </p>
                          <p>
                            2018-19 | General Championship- Bronze
                            <img alt="" 
                              src={bronze}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                          <p>
                            2017-18 | General Championship- Silver
                            <img alt="" 
                              src={silver}
                              style={{ height: "40px", width: "30px" }}
                            ></img>
                          </p>
                          <p>
                            2016-17 | General Championship- Silver
                            <img alt="" 
                              src={silver}
                              style={{ height: "40px", width: "30px" }}
                            ></img>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div class="card-container">
                      <div class="card">
                        <div class="side">
                          <img alt=""  class="flipimage" src={BaddyTeam} />
                        </div>
                        <div class="side back">
                          <h1
                            style={{ marginTop: "15px", marginBottom: "20px" }}
                          >
                            Badminton
                          </h1>
                          <p>
                            2021-22 | Interhall Tournament- Gold
                            <img alt="" 
                              src={gold}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                          <p>
                            2019-20 | General Championship- Gold
                            <img alt="" 
                              src={gold}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                          <p>
                            2017-18 | General Championship- Gold
                            <img alt="" 
                              src={gold}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="mx-2" style={{ paddingTop: "40px" }}>
                  <Col xs={6} md={4}>
                    <div class="card-container">
                      <div class="card">
                        <div class="side">
                          <img alt=""  class="flipimage" src={BasketballTeam} />
                        </div>
                        <div class="side back">
                          <h1
                            style={{ marginTop: "15px", marginBottom: "20px" }}
                          >
                            Basketball
                          </h1>
                          <p>
                            2021-22 | Interhall Tournament- Gold
                            <img alt="" 
                              src={gold}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                          <p>
                            2018-19 | General Championship- Gold
                            <img alt="" 
                              src={gold}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                          <p>
                            2016-17 | General Championship- Gold
                            <img alt="" 
                              src={gold}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>                 
                  <Col xs={6} md={4}>
                    <div class="card-container">
                      <div class="card">
                        <div class="side">
                          <img alt=""  class="flipimage" src={TableTennisTeam} />
                        </div>
                        <div class="side back">
                          <h1
                            style={{ marginTop: "15px", marginBottom: "20px" }}
                          >
                            Table Tennis
                          </h1>
                          <p>
                            2021-22 | Interhall Tournament- Gold
                            <img alt="" 
                              src={gold}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                          <p>
                            2018-19 | General Championship- Bronze
                            <img alt="" 
                              src={bronze}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div class="card-container">
                      <div class="card">
                        <div class="side">
                          <img alt=""  class="flipimage" src={LawnTennisTeam} />
                        </div>
                        <div class="side back">
                          <h1
                            style={{ marginTop: "15px", marginBottom: "20px" }}
                          >
                            Lawn Tennis
                          </h1>
                          <p>
                            2021-22 | Interhall Tournament- Bronze
                            <img alt="" 
                              src={bronze}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                          <p>
                            2018-19 | General Championship- Bronze
                            <img alt="" 
                              src={bronze}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="mx-2" style={{ paddingTop: "40px" }}>
                  <Col xs={6} md={4}>
                    <div class="card-container">
                      <div class="card">
                        <div class="side">
                          <img alt=""  class="flipimage" src={chess} />
                        </div>
                        <div class="side back">
                          <h1
                            style={{ marginTop: "15px", marginBottom: "20px" }}
                          >
                            Chess
                          </h1>
                          <p>
                            2021-22 | Interhall Tournament- Bronze
                            <img alt="" 
                              src={bronze}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                          <p>
                            2018-19 | General Championship- Gold
                            <img alt="" 
                              src={gold}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </div>
          </center>
        </div>
        <div label="Technology">
          <center>
            <div style={{ marginBottom: "25px" }}>
              <Grid>
                <Row className="mx-2">
                  <Col xs={6} md={4}>
                    <div class="card-container">
                      <div class="card">
                        <div class="side">
                          <img alt=""  class="flipimage" src={tech2} />
                        </div>
                        <div class="side back">
                          <h1
                            style={{ marginTop: "15px", marginBottom: "20px" }}
                          >
                            Hardware Modelling
                          </h1>
                          <p>
                            2018-19 | General Championship- Bronze
                            <img alt="" 
                              src={bronze}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div class="card-container">
                      <div class="card">
                        <div class="side">
                          <img alt=""  class="flipimage" src={tec1} />
                        </div>
                        <div class="side back">
                          <h1
                            style={{ marginTop: "15px", marginBottom: "20px" }}
                          >
                            Data Analytics
                          </h1>
                          <p>
                            2020-21 | Open IIT- Bronze
                            <img alt="" 
                              src={bronze}
                              style={{ height: "30px", width: "30px" }}
                            ></img>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </div>
          </center>
        </div>
        <div label="Social & Cultural">
          <div style={{ marginBottom: "195px" }}>
            <p>This page will be updated soon...</p>
          </div>
        </div>
      </Tabs>
      <Footer />
    </div>
  );
}

export default AchievComp;
