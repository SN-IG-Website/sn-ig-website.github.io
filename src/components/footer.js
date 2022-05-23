import React from 'react';
import "./footer.css";
import logo from "./logo.png";

function footer() {
  return (
    <div className="footer">
        <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h4 style={{fontSize: '20px'}}>Contact Us</h4>
            <ul class="footer-links">
              <li>Address: Sarojini Naidu/Indira Gandhi Hall of Residence, IIT Kharagpur</li>
              <li>Kharagpur, India-721302</li>
              <li>Phone(office): +91 3222 2 81126</li>
              <li>Phone(Security): +91 3222 2 81128</li>
              <li>Email: <a href="mailto:snig.iitkgp22@gmail.com" target="_blank" rel="noreferrer">snig.iitkgp22@gmail.com</a></li>
              {/* <li><a href="http://scanfcode.com/category/templates/">Templates</a></li> */}
            </ul>
            {/* <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p> */}
          </div>

          {/* <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div> */}

          <div class="col-xs-6 col-md-6 logo">
            <img style={{height:'150px',width:'150px',paddingRight:'0'}}class="logosize"src={logo} alt="SN/IG logo"/>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">&copy; 2022 <h7 style={{color: '#FBE5E5'}}>Sarojini Naidu/Indira Gandhi Hall of Residence</h7> All Rights Reserved
         .
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="https://www.facebook.com/SNIGHallOfResidence/" target="_blank" rel="noreferrer"><i class="fa fa-facebook" style={{color:'#FBE5E5'}}></i></a></li>
              <li><a class="envelope" href="mailto:snig.iitkgp22@gmail.com" target="_blank" rel="noreferrer"><i style={{color:'#FBE5E5'}} class="fa fa-envelope"></i></a></li>
              {/* <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>    */}
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  )
}

export default footer