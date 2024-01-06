import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Button } from "@mui/material";
import { FaStar } from "react-icons/fa6";
import { Col , Row ,Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import { Link  } from 'react-router-dom';

function Best_Seller() {
  return (
    <div>
      <Container>
      <Row  className="py-5">
        <Col lg={4} md={12} sm={12}>
        <div className="d-flex verticle ">
          <div className="w-[359px] h-[572px] bg-[#EEEBE4] rounded-2xl">
            <center>
              <img src={require("../img/asset 33.png")} className="pt-[59px]" />
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
        <Col lg={8} md={12} sm={12}>
          <Row>    
            <h3><center><b>Top Selling Products</b></center></h3>
              <Col lg={6}>
              <Link to="/Card_product" className='text-decoration-none'>
              <Card className="p-2 my-2"  style={{ objectFit:"cover"}}>
                <div className="d-flex">
                    <Card.Img variant="top" src={require('../img/asset 18.jpeg')} style={{width: '140px',height: '140px'}} />
                  <div className="">
                    <Card.Body>
                      <span>Baby Food</span>
                      <p className="text-[18px]">Ergonomic Linen Pants</p>
                      <div className="d-flex">
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      </div>
                      <span><b>$25</b></span>
                    </Card.Body>
                  </div>
                </div>
              </Card>
       </Link>
              </Col>
              <Col lg={6}>
              <Link to="/Card_product" className='text-decoration-none'>
              <Card className="p-2 my-2"  style={{ objectFit:"cover"}}>
                <div className="d-flex">
                    <Card.Img variant="top" src={require('../img/asset 18.jpeg')} style={{width: '140px',height: '140px'}} />
                  <div className="">
                    <Card.Body>
                      <span>Baby Food</span>
                      <p className="text-[18px]">Ergonomic Linen Pants</p>
                      <div className="d-flex">
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      </div>
                      <span><b>$25</b></span>
                    </Card.Body>
                  </div>
                </div>
              </Card>
       </Link>
              </Col>
              <Col lg={6}>
              <Link to="/Card_product" className='text-decoration-none'>
              <Card className="p-2 my-2"  style={{ objectFit:"cover"}}>
                <div className="d-flex">
                    <Card.Img variant="top" src={require('../img/asset 18.jpeg')} style={{width: '140px',height: '140px'}} />
                  <div className="">
                    <Card.Body>
                      <span>Baby Food</span>
                      <p className="text-[18px]">Ergonomic Linen Pants</p>
                      <div className="d-flex">
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      </div>
                      <span><b>$25</b></span>
                    </Card.Body>
                  </div>
                </div>
              </Card>
       </Link>
              </Col>
              <Col lg={6}>
              <Link to="/Card_product" className='text-decoration-none'>
              <Card className="p-2 my-2"  style={{ objectFit:"cover"}}>
                <div className="d-flex">
                    <Card.Img variant="top" src={require('../img/asset 18.jpeg')} style={{width: '140px',height: '140px'}} />
                  <div className="">
                    <Card.Body>
                      <span>Baby Food</span>
                      <p className="text-[18px]">Ergonomic Linen Pants</p>
                      <div className="d-flex">
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      </div>
                      <span><b>$25</b></span>
                    </Card.Body>
                  </div>
                </div>
              </Card>
       </Link>
              </Col>
              <Col lg={6}>
              <Link to="/Card_product" className='text-decoration-none'>
              <Card className="p-2 my-2"  style={{ objectFit:"cover"}}>
                <div className="d-flex">
                    <Card.Img variant="top" src={require('../img/asset 18.jpeg')} style={{width: '140px',height: '140px'}} />
                  <div className="">
                    <Card.Body>
                      <span>Baby Food</span>
                      <p className="text-[18px]">Ergonomic Linen Pants</p>
                      <div className="d-flex">
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      </div>
                      <span><b>$25</b></span>
                    </Card.Body>
                  </div>
                </div>
              </Card>
       </Link>
              </Col>
              <Col lg={6}>
              <Link to="/Card_product" className='text-decoration-none'>
              <Card className="p-2 my-2"  style={{ objectFit:"cover"}}>
                <div className="d-flex">
                    <Card.Img variant="top" src={require('../img/asset 18.jpeg')} style={{width: '140px',height: '140px'}} />
                  <div className="">
                    <Card.Body>
                      <span>Baby Food</span>
                      <p className="text-[18px]">Ergonomic Linen Pants</p>
                      <div className="d-flex">
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      <FaStar className="text-yellow-300" />
                      </div>
                      <span><b>$25</b></span>
                    </Card.Body>
                  </div>
                </div>
              </Card>
       </Link>
              </Col>

          </Row>
        </Col>
      </Row>
</Container>
    </div>
  )
}

export default Best_Seller
