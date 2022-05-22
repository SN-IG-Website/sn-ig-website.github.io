import React from 'react';
import './Teams2.css';
import NavbarComp from './NavbarComp';
// import Warden from './Warden';
// import Table from'./Table';
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

import DebarpitaJyoti from './images2/DebarpitaJyoti.jpg';
import AlishaChannel from './images2/AlishaChandel.jpg';
import AnweshaPatel from './images2/AnweshaPatel.jpg';
import AshlesaGoyal from './images2/AshlesaGoyal.jpeg';
import CharviJain from './images2/CharviJain.jpeg';
import DishaChoraria from './images2/DishaChoraria.jpeg';
import elizaroy from './images2/elizaroy.JPG';
import FizaNissam from './images2/FizaNissam.jpg';
import GargiDas from './images2/GargiDas.jpeg';
import GauriPatki from './images2/GauriPatki.jpg';
import GunjanAgarwal from './images2/GunjanAgarwal.jpg';
import IshitaJhunjhunwala from './images2/IshitaJhunjhunwala.jpg';
import KashishLundia from './images2/KashishLundia.jpg';
import KirtiChoudhary from './images2/KirtiChoudhary.JPG';
import navya from './images2/navya.jpg';
import NidhiGoyal from './images2/NidhiGoyal.jpg';
import NikithaBobbary from './images2/NikithaBobbary.jpg';
import PoulomiChaudhuri from './images2/PoulomiChaudhuri.jpeg';
import PrachiBajpai from './images2/PrachiBajpai.jpg';
import RajshreeSharma from './images2/RajshreeSharma.jpg';
import rhea from './images2/rhea.jpg';
import RoshniKar from './images2/RoshniKar.png';
import Rushali from './images2/RushaliChakraborty.jpg'
import SanskritiKashyap from './images2/SanskritiKashyap.jpg';
import SejalShambharkar from './images2/SejalShambharkar.jpg';
import ShikhaBagaria from './images2/ShikhaBagaria.jpeg';
import ShivaniAnneboina from './images2/ShivaniAnneboina.jpeg';
import SraavyaUppala from './images2/SraavyaUppala.jpg';
import SwastikaMandal from './images2/SwastikaMandal.jpg';
import TanayaRamane from './images2/TanayaRamane.jpg';
import YashasviRathore from './images2/YashasviRathore.PNG';
import Sakshi from './images2/Sakshi.jpg';




const Hall = () => {
    return (
      <>
      <NavbarComp/>
        <section id="team" className="team-area">
        <center>
    <div className="container">
      <pre> </pre>
      <div className="row">
        <div className="col-md-12">
          <div className="site-heading text-center">
            <h2>Student Representatives</h2>
            <h4>2021-2022</h4>
          </div>
        </div>
      </div>
      <div className="row team-items">
          <div className="row team-items centered">
          <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={DebarpitaJyoti} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Hall President</h4> */}
                <p>
                We should have the courage to surrender to our calling                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <a href="https://www.facebook.com/debarpita.jyoti.9" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li>
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/debarpita-jyoti-10242518b" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li className="instagram">
                      <a href="https://www.instagram.com/debarpitajyoti/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <a href="mailto:debarpitajyoti@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Debarpita Jyoti</h4>
              <span>Hall President</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={PrachiBajpai} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Second Senate Member</h4> */}
                <p>
                Make every moment mean something. Work hard for the things that you love. Never Ever Give Up !!
                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <a href="https://www.facebook.com/prachi.bajpai.58726/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li>
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/prachi-bajpai-011086172/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
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
                <a href="mailto:nationhind@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Prachi Bajpai</h4>
              <span>Second Senate Member</span>
            </div>
          </div>
        </div>
          </div>
          <pre> </pre>
          {/* <div className="site-heading text-center">
          <h3>Student Representatives</h3>

          </div> */}

          <pre></pre>

          <div className="row team-items centered">

        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={Rushali} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Lorem Ipsum</h4> */}
                <p>
                Spent the tenure making newcomers gain skills in different spheres of Social and Cultural activities, will always look forward to making SN/IG proud.                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <a href="https://www.facebook.com/thefmled/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li>
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/rushali-chakraborty-b68297a8/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li className="instagram">
                      <a href="https://www.instagram.com/thefmled/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <a href="mailto:rushali.c1710@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Rushali Chakraborty </h4>
              <span>General Secretary Social and Cultural </span>
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
              <span>General Secretary Sports and Games</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={PoulomiChaudhuri} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Lorem Ipsum</h4> */}
                <p>
                Make Every day of Your Life Magical                 </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <a href="https://www.facebook.com/poulomi.chaudhuri.58" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li>
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/poulomi11c/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li className="instagram">
                      <a href="https://www.instagram.com/poulomi_112/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <a href="mailto:poulomisalomi@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Poulomi Chaudhuri</h4>
              <span>General Secretary Maintenance</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={CharviJain} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Lorem Ipsum</h4> */}
                <p>
                Life is full of surprises. You may never know what it plans out for you.                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <a href="https://www.facebook.com/singhvi.charvi/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li>
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/charvi-jain-/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li className="instagram">
                      <a href="https://www.instagram.com/charvi2002/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <a href="mailto:charvijain9928@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Charvi Jain</h4>
              <span>General Secretary Mess</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={ShikhaBagaria} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Lorem Ipsum</h4> */}
                <p>
                Home away from Home                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <a href="https://www.facebook.com/shikhabagaria11/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li>
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/shikha-bagaria/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li className="instagram">
                      <a href="https://www.instagram.com/shikhabagaria/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <a href="mailto:shikhabagaria11@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Shikha Bagaria</h4>
              <span>General Secretary Library</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={TanayaRamane} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Lorem Ipsum</h4> */}
                <p>
                  An amazing tenure marked with enthusia response and appreciation from boarders...a shoutout to all boarders SN KA TEMPO HIGH HAI!!
                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <a href="https://www.facebook.com/Tanaya.Ramane.0/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li>
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/tanayaramane/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
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
                <a href="mailto:ramanetanaya@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Tanaya Vijay Ramane</h4>
              <span>General Secretary Student's Welfare</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={KashishLundia} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Lorem Ipsum</h4> */}
                <p>
                Hall is an integral part of every college student's life and contributing towards its welfare   only makes the stay more memorable.                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <a href="https://www.facebook.com/profile.php?id=100009554445852" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li>
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/kasis-lundia/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li className="instagram">
                      <a href="https://www.instagram.com/kashish_lundia.17/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <a href="mailto:kasis.lundia1@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Kashish Lundia</h4>
              <span>General Secretary Alumni Affairs</span>
            </div>
          </div>
        </div>
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
              <span>General Secretary Technology</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={RoshniKar} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        In the end, what counts is how we all worked together to carry on the legacy of SN/IG...                </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/roshni.kar.56" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/roshni-kar-699547194/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/roshni_kar11/?hl=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:roshnikar27@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Roshni Kar</h4>
      <span>Maintenance Coordinator</span>
    </div>
  </div>
</div>

<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={GargiDas} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
I will drink life to the lees and follow knowledge like a sinking star!               </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/gargi.das.98229241/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/gargi-das-282a04190/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/the.transcendental.girl/?hl=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:dasgargi607@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Gargi Das</h4>
      <span>Maintenance Coordinator</span>
    </div>
  </div>
</div>

{/* <div className="row team-items centered"> */}


<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={YashasviRathore} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        Dream Big, Stay Focused and Be Fearless!               </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/yashasvi.rathore.969/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/yashasvi-rathore-06b3b4192/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
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
        <a href="mailto:yasharathore9462@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Yashasvi Rathore</h4>
      <span>Maintenance Coordinator</span>
    </div>
  </div>
</div>
        <div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={SejalShambharkar} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        {/* <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p> */}
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/sejal.shambharkar.501" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/sejal-shambharkar-0398b91b4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
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
        <a href="mailto:sejalshambharkar2001@gmail.com "><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Sejal Shambharkar</h4>
      <span>Maintenance Coordinator</span>
    </div>
  </div>
</div>



        </div>

        {/* <pre> </pre> */}
          {/* <div className="site-heading text-center">
          <h4>Coordinators</h4>

          </div> */}

          {/* <pre></pre> */}

        {/* <div className="row team-items centered"> */}



{/* </div> */}
{/* </div> */}

<pre> </pre>
          {/* <div className="site-heading text-center">
          <h4>Sectaries</h4>

          </div> */}

          <pre></pre>
          <pre></pre>

        <div className="row team-items centered">




<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={RajshreeSharma} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        Dream Big, Stay Focused and Be Fearless!               </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/rajshree.sharma.965928" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.instagram.com/raj_shree_sharma/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.linkedin.com/in/rajshree-sharma-484224206/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:rajshree.sh2002@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Rajshree Sharma</h4>
      <span>Secretary Sports and Games</span>
    </div>
  </div>
</div>
<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={DishaChoraria} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        There’s a blessing in the storm!        </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/disha.choraria" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/mwlite/in/disha-choraria" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://instagram.com/dishaaa__01?r=nametag" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:dishachoraria01@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Disha Choraria</h4>
      <span>Secretary Technology </span>
    </div>
  </div>
</div>

<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={navya} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        {/* <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p> */}
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/navya.choudhary.35110418" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/navya-choudhary-82a902210" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/_navyyaa___" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:navyachoudhary2010@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Navya</h4>
      <span>Secretary Social and Cultural</span>
    </div>
  </div>
</div>
<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={NikithaBobbary} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        My commitment to work and patience defines me.         </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/profile.php?id=100006742217497" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/nikbobbary" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/n.i.k_017/ " target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:sejalshambharkar2001@gmail.com "><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Nikitha Bobbary </h4>
      <span>Secretary Maintainance </span>
    </div>
  </div>
</div>
<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={SanskritiKashyap} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        My composure and confidence speaks for me        </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/sanskriti.kashyap.3939" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/sanskriti-kashyap-53b2a01bb" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
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
        <a href="mailto:mssanskriti789@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Sanskriti </h4>
      <span>Secretary Mess</span>
    </div>
  </div>
</div>
<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={FizaNissam} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
I think, therefore I am        </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/fiza.nissam.7" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/fiza-nissam" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/fiza_nissam_2001/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:fizanissam2001@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Fiza Nissam</h4>
      <span>Secretary Social and Cultural</span>
    </div>
  </div>
</div>
<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={GauriPatki} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
Soaring Above Imagination         </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/gauri.patki.961" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/gauri-patki-643b87219" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
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
        <a href="mailto:gpatki1702@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Gauri Patki </h4>
      <span>Secratary Library </span>
    </div>
  </div>
</div>

<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={AshlesaGoyal} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
Unstoppably optimistic!        </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/ashlesa.ashlesa" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/ashlesagoyal" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.Instagram.Com/ashlesagoyal_211" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:ashleshagoyal21@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Ashlesa Goyal</h4>
      <span>Secretary Social and Cultural</span>
    </div>
  </div>
</div>

<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={AnweshaPatel} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
In a constant process to discover myself in this labyrinth called life        </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/anwesha.patel.969/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/anwesha-patel-0a6827221/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/anweshapatel916/?hl=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:anweshapatel916@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Anwesha Patel</h4>
      <span>Secratary Library </span>
    </div>
  </div>
</div>
<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={elizaroy} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
Connecting the alumni to the budding batch        </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/eliza.roy.946/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/elizaroy" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/papertowner_3/?hl=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:pupuelize@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Eliza Roy</h4>
      <span>Secretary Alumni Affairs</span>
    </div>
  </div>
</div>
<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={NidhiGoyal} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        Don't loose opportunities here. Engage yourselves in some or the other activity!       </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/profile.php?id=100059180424213" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/nidhi-goyal-3a6b5322b/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/nidhigoyal1310/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:nidhigoyal1310@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Nidhi Goyal</h4>
      <span>Secretary Technology</span>
    </div>
  </div>
</div>
<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={KirtiChoudhary} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        {/* <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p> */}
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/profile.php?id=100049997417514" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/kirti-choudhary-386347204" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/invites/contact/?i=1eqmbttcr2j11&utm_content=k2ipsni" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:darakirti@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Kirti Choudhary</h4>
      <span>Secretary Mess</span>
    </div>
  </div>
</div>
<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={GunjanAgarwal} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        The more you sweat in times of peace, the less you bleed in times of war.            </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/profile.php?id=100027817206864" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/gunjan-agarwal-95730120a/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/gunjan.agarwal_/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:gunjan.agarwal088@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Gunjan Agarwal</h4>
      <span>Secretary Students' Welfare, Secretary Social and Cultural </span>
    </div>
  </div>
</div>
<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={SwastikaMandal} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        Every second of life have challenges, responsibilities and many new things to explore, so just go with the flow in your own way.        </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/profile.php?id=100050333828622" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/swastika-mandal-94688a22a" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://instagram.com/00__blueberry__00" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:mandalmanu5@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Swastika Mandal</h4>
      <span>Secretary Social and Cultural</span>
    </div>
  </div>
</div>

<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={SraavyaUppala} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
If your glasses do tint in the sun, let me tell you, it is odd if the odds aren't in your favour.        </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/sraavya.uppala/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/sraavya-uppala-457688223/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/katannawho/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:sraavya02@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Sraavya Uppala</h4>
      <span>Secretary Sports and Games</span>
    </div>
  </div>
</div>

<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={AlishaChannel} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
Have faith in yourself....        </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/alisha.chandel.946" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            {/* <li className="pinterest">
              <a href="https://www.linkedin.com/in/sejal-shambharkar-0398b91b4" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li> */}
            <li className="instagram">
              <a href="https://instagram.com/chandel_alisha?utm_medium=copy_link" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:alishachandel678@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Alisha</h4>
      <span>Secretary Maintenance</span>
    </div>
  </div>
</div>
<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={ShivaniAnneboina} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        <p>
        Dedicated to the wellness of SN/IG        </p>
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/profile.php?id=100076455762990" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/shivani-anneboina-27432420a/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li> 
             <li className="instagram">
              <a href="https://www.instagram.com/_shivianneboina_/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:shivanianneboina@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Lakshmi Shivani Anneboina</h4>
      <span>Secretary Students' Welfare </span>
    </div>
  </div>
</div>

<div className="col-md-4 single-item">
  <div className="item">
    <div className="thumb">
      <img className="img-fluid" src={Sakshi} alt="Thumb"/>
      <div className="overlay">
        {/* <h4>Lorem Ipsum</h4> */}
        {/* <p>
        Spent the tenure making newcomers gain skills in different spheres of Social and Cultural activities, will always look forward to making SN/IG proud.                </p> */}
        <div className="social">
          <ul>
          <li className="twitter">
              <a href="https://www.facebook.com/sakshiagrawal1651/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="pinterest">
              <a href="https://www.linkedin.com/in/sakshi-agrawal-1856a4213/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="instagram">
              <a href="https://instagram.com/sakshi_agrawa1?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="info">
      <span className="message">
        <a href="mailto:sakshiagrawal1651@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </span>
      <h4>Sakshi Agrawal</h4>
      <span>Secretary Dramatics</span>
    </div>
  </div>
</div>

</div>

      </div>
    </div>
    <pre> </pre>
          {/* <div className="site-heading text-center">
          <h4>Wardens</h4>
          </div>
    <Warden/> */}
    {/* <Table/> */}
    </center>
  </section>
  <Footer/>

  </> 
        );
}
 
export default Hall;