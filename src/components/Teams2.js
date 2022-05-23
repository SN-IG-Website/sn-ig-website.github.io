import React from 'react';
import './Teams2.css';
import NavbarComp from './NavbarComp';
import Footer from '../components/footer';



// import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faInstagramI, faFacebookF, faLinkedInL} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faLinkedin , faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

//images

import IshitaJhunjhunwala from './images2/IshitaJhunjhunwala.jpg';
import rhea from './images2/rhea.jpg';
import Yashika from './images2/Yashika.jpeg';

import Jessica from './images2/Jessica.jpeg';
import Vidushi from './images2/Vidushi.jpg';
import Siddhi from './images2/Siddhi.jpeg';


const Teams2 = () => {
    return ( 
    <>
    <NavbarComp/>
    <section id="team" className="team-area">
        <center>
    <div className="container">
      <pre></pre>
      <div className="row">
        <div className="col-md-12">
          <div className="site-heading text-center" style={{marginBottom:'5px',marginTop:'10px'}}>
            <h2>Web Team</h2>
            <h4> </h4>
          </div>
        </div>
      </div>
      <div className="row team-items">
      <div className="row team-items centered">

      <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={IshitaJhunjhunwala} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Lorem Ipsum</h4> */}
                <p>
                The best is yet to come...                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <a href="https://www.facebook.com/ishita.jhunjhunwala.52/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li>
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/ishita-jhunjhunwala-73a1161a4/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li className="instagram">
                      <a href="https://www.instagram.com/jhunjhunwala_ishita/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <a href="mailto:ishitajhunjhunwala.iitkgp@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Ishita Jhunjhunwala</h4>
              <span>Web Coordinator</span>
            </div>
          </div>
        </div>

      <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={rhea} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Lorem Ipsum</h4> */}
                <p>
                Commending the wins and celebrating the losses.                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <a href="https://www.facebook.com/rhea2801/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li>
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/rhea2801/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
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
                <a href="mailto:rhea2801@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Rhea Sundaresan</h4>
              <span>Web Coordinator</span>
            </div>
          </div>
        </div>

        

<div className="row team-items centered">


<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={Yashika} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        Be your own kind of beautiful      </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/yashika.aggarwal.3154/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/yashika-aggarwal-bb2926205/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/y.a.s.h.i.ka/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:aggarwalyashi49@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Yashika Aggarwal</h4>
      <span>Web Secretary</span>
    </div>
  </div>
</div>
<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={Jessica} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        Accentuate the positive, Eliminate the Negative, latch onto the affirmative.   
        </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/jessica.britto.395/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/jessica-john-britto-97ab71205/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/jess__britto/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:jessjohnbritto@gmail.com "><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Jessica John Britto</h4>
           <span>Web Secretary</span>
    </div>
  </div>
</div>
</div>
</div>

<div className="row team-items centered">


<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={Vidushi} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        Stay a mystery; it’s better.            </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/vidushi.agarwal.1671" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/vidushi-agarwal-4704a8205/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/vidushi_2510/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:vidushiagarwal232@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Vidushi Agarwal</h4>
      <span>Web Secretary</span>
    </div>
  </div>
</div>
<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={Siddhi} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        Be you, do you, for you.
        </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/profile.php?id=100009117742880" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/siddhi-agrawal-b208a91bb/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/__siddhiagrawal__/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:siddhiagrawal2106@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Siddhi Agrawal</h4>
      <span>Web Secretary</span>
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
 
export default Teams2;