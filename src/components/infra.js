import React from 'react';
import './infra.css';
import gym from "./images/gym.jpg";
import mess from "./images/mess.jpg";
import library from "./images/library.jpg";
import music from "./images/music.jpg";
import newcommon from "./images/newcommon.jpg";
import oldcommon from "./images/oldcommon.jpg";
import studyroom from "./images/studyroom.jpg";
import daycanteen from "./images/daycanteen.jpg";
import daycanteen2 from "./images/daycanteen2.jpg";
import nightcanteen from "./images/nightcanteen.jpg";
import Basketball from "./images/basketball.jpg";
import Nescafe from "./images/nescafe.jpg";

// import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faInstagramI, faFacebookF, faLinkedInL} from '@fortawesome/free-brands-svg-icons';





const infra = () => {
    return ( 
    <div className="infrasnig infraimages" style={{paddingtop:'0px'}} id="infrasnig">
    <section id="team" className="team-area">
        <center>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <div className="site-heading text-center" style={{marginBottom:'5px',marginTop:'30px'}}>
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
                INFRASTRUCTURE {" "}
              </h5>
              
              <h4 style={{paddingBottom:'0px'}}> </h4>
            <h4> </h4>
          </div>
            {/* <h2 style={{paddingBottom:'25px'}}>Infrastructure</h2>           */}
          
        </div>
      </div>
      <div className="row team-items">
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={mess} alt="Thumb" style={{height:'350px',width:'400px'}}/>
              <div className="overlay">
                <h4>Mess</h4>
                               
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={library} alt="Thumb" style={{height:'350px',width:'400px'}}/>
              <div className="overlay">
                <h4>Library</h4>
                               
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={music} alt="Thumb" style={{height:'350px',width:'400px'}}/>
              <div className="overlay">
                <h4>Music Room</h4>
                              
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={newcommon} alt="Thumb" style={{height:'350px',width:'400px'}}/>
              <div className="overlay">
                <h4>New Common Room</h4>
                           
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={oldcommon} alt="Thumb" style={{height:'350px',width:'400px'}}/>
              <div className="overlay">
                <h4>Old Common Room</h4>
                             
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={daycanteen} alt="Thumb" style={{height:'350px',width:'400px'}}/>
              <div className="overlay">
                <h4>Day Canteen</h4>
                            
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={daycanteen2} alt="Thumb" style={{height:'350px',width:'400px'}}/>
              <div className="overlay">
                <h4>General Store</h4>
                            
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={studyroom} alt="Thumb" style={{height:'350px',width:'400px'}}/>
              <div className="overlay">
                <h4>Study Room</h4>
                            
              </div>
            </div>           
          </div>
        </div>
        {/* <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={daycanteen} alt="Thumb" style={{height:'350px',width:'400px'}}/>
              <div className="overlay">
                <h4>Day Canteen</h4>
                            
              </div>
            </div>           
          </div>
        </div> */}
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={nightcanteen} alt="Thumb" style={{height:'350px',width:'400px'}}/>
              <div className="overlay">
                <h4>Night Canteen</h4>
                            
              </div>
            </div>           
          </div>
        </div>       
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={Nescafe} alt="Thumb" style={{height:'350px',width:'400px'}}/>
              <div className="overlay">
                <h4>Nescafe</h4>                           
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={Basketball} alt="Thumb" style={{height:'350px',width:'400px'}}/>
              <div className="overlay">
                <h4>Basketball Court</h4>
                            
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={gym} alt="Thumb" style={{height:'350px',width:'400px'}}/>
              <div className="overlay">
                <h4>Gym</h4>
                            
              </div>
            </div>           
          </div>
        </div>
      </div>
    </div>
    </center>
  </section>
  </div>
);

}
 
export default infra;