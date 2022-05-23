import React from "react";
import "./InfraComp.css";
import { Col, Row } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import gym from "./images/gym.jpg";
import mess from "./images/mess.jpg";
import library from "./images/library.jpg";
import music from "./images/music.jpg";
import newcommon from "./images/newcommon.jpg";
import oldcommon from "./images/oldcommon.jpg";
import studyroom from "./images/studyroom.jpg";
import daycanteen from "./images/daycanteen.jpg";
import daycanteen2 from "./images/daycanteen2.jpg";

function InfraComp() {
  return (
    <div className="infra" >
      <center>
        <h2>Infrastructure</h2>
      </center>
      <Grid className="wrap">
        <Row className="row">
          <Col xs={6} md={3}>
            <div class="container">
              <div class="content">
                <div class="content-overlay"></div>
                   <img alt=""  class="content-image image" src={gym} />
                <div class="content-details fadeIn-top">
                  <h3>Gym</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
          <div class="container">
              <div class="content">
                <div class="content-overlay"></div>
                   <img alt=""  class="content-image image" src={library} />
                <div class="content-details fadeIn-top">
                  <h3>Library</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
          <div class="container">
              <div class="content">
                <div class="content-overlay"></div>
                   <img alt=""  class="content-image image" src={mess} />
                <div class="content-details fadeIn-top">
                  <h3>Mess</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
          <div class="container">
              <div class="content">
                <div class="content-overlay"></div>
                   <img alt=""  class="content-image image" src={daycanteen} />
                <div class="content-details fadeIn-top">
                  <h3>Day Canteen</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col xs={6} md={3}>
          <div class="container">
              <div class="content">
                <div class="content-overlay"></div>
                   <img alt=""  class="content-image image" src={daycanteen2} />
                <div class="content-details fadeIn-top">
                  <h3>Store</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
          <div class="container">
              <div class="content">
                <div class="content-overlay"></div>
                   <img alt=""  class="content-image image" src={studyroom} />
                <div class="content-details fadeIn-top">
                  <h3>Study Room</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
          <div class="container">
              <div class="content">
                <div class="content-overlay"></div>
                   <img alt=""  class="content-image image" src={music} />
                <div class="content-details fadeIn-top">
                  <h3>Music Room</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
          <div class="container">
              <div class="content">
                <div class="content-overlay"></div>
                   <img alt=""  class="content-image image" src={newcommon} />
                <div class="content-details fadeIn-top">
                  <h3>New Common Room</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col xs={6} md={3}>
          <div class="container">
              <div class="content">
                <div class="content-overlay"></div>
                   <img alt=""  class="content-image image" src={oldcommon} />
                <div class="content-details fadeIn-top">
                  <h3>Old Common Room</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
          <div class="container">
              <div class="content">
                <div class="content-overlay"></div>
                   <img alt=""  class="content-image image" src={gym} />
                <div class="content-details fadeIn-top">
                  <h3>Gym</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
          <div class="container">
              <div class="content">
                <div class="content-overlay"></div>
                   <img alt=""  class="content-image image" src={gym} />
                <div class="content-details fadeIn-top">
                  <h3>Gym</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default InfraComp;
