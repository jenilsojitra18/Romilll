import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Button } from "@mui/material";
import { Col , Row ,Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import { HiArrowUpLeft } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegEye} from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 15,
  responsiveClass: true,
  nav: true,
  alignItems: 'center',
  loop: true,
  dots: false,
  autoplay: false,
  alignItems: 'center',
  autoplayTimeout:2500,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 1,
      },
      700: {
          items: 2,
      },
      1000: {
          items: 2.5,
      },
      1100: {
          items: 2,
      },
      1200: {
          items: 2,
      },
      1300: {
          items:2.5,
      }
  },
};

function Top_Selling() {
  return (
    <>
<Container>
      <Row  className="py-5">
        <Col xl={4} lg={4} md={12} sm={12}>
        <div className="d-flex verticle ">
          <div className="w-[359px] h-[572px] bg-[#EEEBE4] rounded-2xl">
            <center>
              <img src={require("../img/asset 33.png")}  className="pt-[59px]" />
              <h2 className="mt-3">
                <b>Get Up to 26% Off Vegetables</b>
              </h2>
              <Button
                variant="contained"
                className="mt-4 rounded-xl"
                color="success"  >
                Success <GoArrowRight className="fs-4 ml-2" />{" "}
              </Button>
            </center>
            <div className="media-query">
            <img src={require('../img/asset 34.png')} className="mt-[60px] ml-[35px]" />
            </div>
          </div>
          </div>
        </Col>

        <Col xl={8} lg={8} md={12} sm={12} >
        <Row>
              <h5>More to Discover</h5>
            <h1><b>Bestsellers of the week</b></h1>
            <OwlCarousel className="owl-theme container" {...options}>

              <div className="item">
            <Card style={{ width: "19rem" , border:"none"}}  className="main mx-auto">
              <div className="Hov">
                <div className="Layor_Show">
                  <div className="Part_1"><FaShoppingCart /></div>
                  <div className="Part_2"><FaRegEye /></div>
                  <div className="Part_2"><FaRegEye /></div>
                  <div className="Part_3"><HiArrowUpLeft /></div>
                </div>
                <div className="img-css">
              <Card.Img variant="" src={require('../img/asset 18.jpeg')} className="rounded-lg  "/>
                </div>
              <Card.Body className="p-1">
                <span className="text-[14px]">Baby Food OKK</span>
                <div>
                  <span className="text-[20px]">Ergonomic Linen Pants   </span>
                </div>
                <div className="d-flex fs-4 m-0 p-0 ">
                <IoMdStar className="text-yellow-400" />
                <IoMdStar className="text-yellow-400" />
                <IoMdStar className="text-yellow-400" />
                <IoMdStar className="text-yellow-400" />
                <IoMdStar className="text-yellow-400" />
                </div>
                <span>$25.00  </span>
              </Card.Body>

              </div>
            </Card>
              </div>
              <div className="item">
            <Card style={{ width: "19rem" , border:"none"}}  className="main mx-auto">
              <div className="Hov">
                <div className="Layor_Show">
                  <div className="Part_1"><FaShoppingCart /></div>
                  <div className="Part_2"><FaRegEye /></div>
                  <div className="Part_3"><HiArrowUpLeft /></div>
                  <div className="Part_3"><HiArrowUpLeft /></div>
                </div>
                <div className="img-css">
              <Card.Img variant="" src={require('../img/asset 18.jpeg')} className="rounded-lg  "/>
                </div>
              <Card.Body className="p-1">
                <span className="text-[14px]">Baby Food OKK</span>
                <div>
                  <span className="text-[20px]">Ergonomic Linen Pants   </span>
                </div>
                <div className="d-flex fs-4 m-0 p-0 ">
                <IoMdStar className="text-yellow-400" />
                <IoMdStar className="text-yellow-400" />
                <IoMdStar className="text-yellow-400" />
                <IoMdStar className="text-yellow-400" />
                <IoMdStar className="text-yellow-400" />
                </div>
                <span>$25.00  </span>
              </Card.Body>

              </div>
            </Card>
              </div>
              <div className="item">
            <Card style={{ width: "19rem" , border:"none"}}  className="main mx-auto">
              <div className="Hov">
                <div className="Layor_Show">
                  <div className="Part_1"><FaShoppingCart /></div>
                  <div className="Part_1"><FaShoppingCart /></div>
                  <div className="Part_2"><FaRegEye /></div>
                  <div className="Part_3"><HiArrowUpLeft /></div>
                </div>
                <div className="img-css">
              <Card.Img variant="" src={require('../img/asset 18.jpeg')} className="rounded-lg  "/>
                </div>
              <Card.Body className="p-1">
                <span className="text-[14px]">Baby Food OKK</span>
                <div>
                  <span className="text-[20px]">Ergonomic Linen Pants   </span>
                </div>
                <div className="d-flex fs-4 m-0 p-0 ">
                <IoMdStar className="text-yellow-400" />
                <IoMdStar className="text-yellow-400" />
                <IoMdStar className="text-yellow-400" />
                <IoMdStar className="text-yellow-400" />
                <IoMdStar className="text-yellow-400" />
                </div>
                <span>$25.00  </span>
              </Card.Body>

              </div>
            </Card>
              </div>

        </OwlCarousel>

        </Row>

        </Col>
      </Row>
</Container>


    </>
  );
}

export default Top_Selling;
