import React from 'react';
import './Warden.css';
import NavbarComp from './NavbarComp';
import Footer from '../components/footer';


// import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faInstagramI, faFacebookF, faLinkedInL} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faFacebookF , faLinkedin , faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

//images

import ArchanaPatnaik from './images2/ArchanaPatnaik.jpg';
import NiharikaSahoo from './images2/NiharikaSahoo.jpg';
import SunitaMishra from './images2/SunitaMishra.jpg';


const Warden = () => {
    return ( 
    <>
    <NavbarComp/>
    <section id="team" className="team-area">
        <center>
    <div className="container">
      <pre></pre>
      <pre></pre>
      <div className="row">
        <div className="col-md-12">
          <div className="site-heading text-center">
            <h2>Wardens</h2>
            <h4> </h4>
          </div>
        </div>
      </div>
      <div className="row team-items">
      <div className="row team-items centered">

      <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={ArchanaPatnaik} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Lorem Ipsum</h4> */}
                {/* <p>
                Commending the wins and celebrating the losses.                </p> */}
                <div className="social">
                  <ul>
                  {/* <li className="twitter">
                      <a href="https://www.facebook.com/rhea2801/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li> */}
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/archana-patnaik-1483637/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    {/* <li className="instagram">
                      <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <a href="mailto:archana@hss.iitkgp.ac.in" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Prof. Archana Patnaik</h4>
              <span>Warden</span>
            </div>
          </div>
        </div>

        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={NiharikaSahoo} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Lorem Ipsum</h4> */}
                {/* <p>
                The best is yet to come...                </p> */}
                <div className="social">
                  <ul>
                  {/* <li className="twitter">
                      <a href="https://www.facebook.com/prachi.bajpai.58726/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li> */}
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/niharikasahoo/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    {/* <li className="instagram">
                      <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <a href="mailto:niharika@rgsoipl.iitkgp.ac.in" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Prof. Niharika Sahoo Bhattacharya</h4>
              <span>Assistant Warden</span>
            </div>
          </div>
        </div>

        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={SunitaMishra} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Lorem Ipsum</h4> */}
                {/* <p>
                The best is yet to come...                </p> */}
                <div className="social">
                  <ul>
                  {/* <li className="twitter">
                      <a href="https://www.facebook.com/prachi.bajpai.58726/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li> */}
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/sunita-mishra-06739769/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    {/* <li className="instagram">
                      <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <a href="mailto:smishra@mining.iitkgp.ac.in" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Prof. Sunita Mishra</h4>
              <span>Assistant Warden</span>
            </div>
          </div>
        </div>

</div>





      </div>
    </div>
    </center>
  </section>
  <Footer/>
  </>
);

}
 
export default Warden;