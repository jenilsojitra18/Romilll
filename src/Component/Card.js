import React from "react";
import { Col, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Link } from "react-router-dom";

const options = {
  margin: 15,
  responsiveClass: true,
  nav: true,
  loop: true,
  dots: false,
  autoplay: false,
  alignItems: 'center',
  autoplayTimeout:2500,
  smartSpeed: 1000,
  responsive: {
      200: {
          items: 1,
      },
      400: {
          items: 2,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 5,

      }
  },
};


function Card() {
  return (
    <>
    <div className="" style={{padding:"70px 0px"}}>
      <div className="container" style={{ fontFamily: "Jost, sans-serif"}} >
        <div className="title">
            <center> <p style={{ fontSize: "14px" }}>Shop by Category</p></center>
            <center> <h1 className="fw-bold text-[45px]">Popular on the Shofi store.</h1></center>
        </div>
      </div>
      
      <OwlCarousel className="owl-theme" {...options} >
        <div class="item">
           <Col>
            <div className="main Card " style={{ position: "relative" }}>
              <img
                src={require("../img/asset 3.jpeg")}
                className="rounded-xl mx-auto"
                style={{ width: "260px", height: "270px", objectFit: "cover" }} />
              <div className="img-content mx-auto"  style={{ position: "absolute", top: "30px", width:"100%" ,height:"20%"}}  >
                <span className="text-[20px]"><center>Frozen Foods-</center></span>
                  <p className="mx-auto text-[14px]" style={{ color: "green"}}><center>5 items+</center> </p>
              </div>
            </div>
          </Col>
        </div>
        <div class="item">
           <Col>
            <div className="main Card" style={{ position: "relative" }}>
              <img
                src={require("../img/asset 4.jpeg")}
                className="rounded-xl mx-auto"
                style={{ width: "260px", height: "270px", objectFit: "cover" }} />
              <div className="img-content mx-auto"  style={{ position: "absolute", top: "30px", width:"100%" ,height:"20%"}}  >
                <span className="text-[20px]"><center>Frozen Foods-</center></span>
                  <p className="mx-auto text-[14px]" style={{ color: "green"}}><center>5 items+</center> </p>
              </div>
            </div>
          </Col>
        </div>
        <div class="item">
           <Col>
            <div className="main Card" style={{ position: "relative" }}>
              <img
                src={require("../img/asset 5.jpeg")}
                className="rounded-xl mx-auto"
                style={{ width: "260px", height: "270px", objectFit: "cover" }} />
              <div className="img-content mx-auto"  style={{ position: "absolute", top: "30px", width:"100%" ,height:"20%"}}  >
                <span className="text-[20px]"><center>Frozen Foods-</center></span>
                  <p className="mx-auto text-[14px]" style={{ color: "green"}}><center>5 items+</center> </p>
              </div>
            </div>
          </Col>
        </div>
        <div class="item">
           <Col>
            <div className="main Card" style={{ position: "relative" }}>
              <img
                src={require("../img/asset 6.jpeg")}
                className="rounded-xl mx-auto"
                style={{ width: "260px", height: "270px", objectFit: "cover" }} />
              <div className="img-content mx-auto"  style={{ position: "absolute", top: "30px", width:"100%" ,height:"20%"}}  >
                <span className="text-[20px]"><center>Frozen Foods-</center></span>
                  <p className="mx-auto text-[14px]" style={{ color: "green"}}><center>5 items+</center> </p>
              </div>
            </div>
          </Col>
        </div>
        <div class="item">
           <Col>
            <div className="main Card" style={{ position: "relative" }}>
              <img
                src={require("../img/asset 7.jpeg")}
                className="rounded-xl mx-auto"
                style={{ width: "260px", height: "270px", objectFit: "cover" }} />
              <div className="img-content mx-auto"  style={{ position: "absolute", top: "30px", width:"100%" ,height:"20%"}}  >
                <span className="text-[20px]"><center>Frozen Foods-</center></span>
                  <p className="mx-auto text-[14px]" style={{ color: "green"}}><center>5 items+</center> </p>
              </div>
            </div>
          </Col>
        </div>
        <div class="item">
           <Col>
            <div className="main Card mx-auto" style={{ position: "relative" }}>
              <img
                src={require("../img/asset 3.jpeg")}
                className="rounded-xl"
                style={{ width: "260px", height: "270px", objectFit: "cover" }} />
              <div className="img-content mx-auto"  style={{ position: "absolute", top: "30px", width:"100%" ,height:"20%"}}  >
                <span className="text-[20px]"><center>Frozen Foods-</center></span>
                  <p className="mx-auto text-[14px]" style={{ color: "green"}}><center>5 items+</center> </p>
              </div>
            </div>
          </Col>
        </div>

         
      </OwlCarousel>
      </div>
    </>
  );
}


export default Card;



