import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselComp.css";
import homepageimage from "./images/homepageimage.jpeg";
import homeimage1 from "./images/homeimage1.jpeg";
import homeimage2 from "./images/homeimage2.jpeg";

function CarouselComp() {
  return (
    <div className="carousel">
      <Carousel className="styling">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={homepageimage}
            alt="First slide"
            style={{height:'700px', width:'100%'}}
            
          />
          <Carousel.Caption className="InsideText">
            
            <h1>Sarojini Naidu/Indira Gandhi </h1>
            <h2>Hall of Residence</h2>
            <h5>संस्कृता स्त्रीः पराशक्ति</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={homeimage1}
            alt="Second slide"
            style={{height:'700px', width:'100%'}}
          />
          <Carousel.Caption className="InsideText">
            
            <h1>Sarojini Naidu/Indira Gandhi </h1>
            <h2>Hall of Residence</h2>
            <h5>संस्कृता स्त्रीः पराशक्ति</h5>
          </Carousel.Caption>
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={homeimage2}
            alt="Third slide"
            style={{height:'700px', width:'100%'}}
            
          />
          <Carousel.Caption className="InsideText">
            
            <h1>Sarojini Naidu/Indira Gandhi </h1>
            <h2>Hall of Residence</h2>
            <h5>संस्कृता स्त्रीः पराशक्ति</h5>
          </Carousel.Caption>
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
