import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { HiArrowUpLeft } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { SiUndertale } from "react-icons/si";
import { IoMdStar } from "react-icons/io";




function Main_Card() {
  const [key, setKey] = useState("home");

  return (
    <>

      <div className="container py-[30px]">
        <div className="">
          <p><b>All Product Shop</b></p>
          <h2><b>Featured Products</b></h2>
        </div>
        <Tabs  id="controlled-tab-example" activeKey={key}onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="All Product8" title="All Product">
            <Row className="">
              <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="">
                <Card
                  style={{ width: "18rem", border: "none" }}
                  className="main mx-auto"
                >
                  <div className="Hov">
                    <div className="Layor_Show">
                      <div className="Part_1">
                        <FaShoppingCart />
                      </div>
                      <div className="Part_2">
                        <FaRegEye />
                      </div>
                      <div className="Part_3">
                        <HiArrowUpLeft />
                      </div>
                      <div className="Part_4">
                        <SiUndertale />
                      </div>
                    </div>
                    <div className="img-css">
                      <Card.Img
                        variant=""
                        src={require("../img/asset 18.jpeg")}
                        className="rounded-lg  "
                      />
                    </div>
                    <Card.Body className="p-1">
                      <span className="text-[14px]">Baby Food OKK</span>
                      <div>
                        <span className="text-[20px]">
                          Ergonomic Linen Pants{" "}
                        </span>
                      </div>
                      <div className="d-flex fs-4 m-0 p-0 ">
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                      </div>
                      <span>$25.00 </span>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
              <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="">

                <Card
                  style={{ width: "18rem", border: "none" }}
                  className="main mx-auto"
                >
                  <div className="Hov">
                    <div className="Layor_Show">
                      <div className="Part_1">
                        <FaShoppingCart />
                      </div>
                      <div className="Part_2">
                        <FaRegEye />
                      </div>
                      <div className="Part_3">
                        <HiArrowUpLeft />
                      </div>
                      <div className="Part_4">
                        <SiUndertale />
                      </div>
                    </div>
                    <div className="img-css">
                      <Card.Img
                        variant=""
                        src={require("../img/asset 18.jpeg")}
                        className="rounded-lg  "
                      />
                    </div>
                    <Card.Body className="p-1">
                      <span className="text-[14px]">Baby Food OKK</span>
                      <div>
                        <span className="text-[20px]">
                          Ergonomic Linen Pants{" "}
                        </span>
                      </div>
                      <div className="d-flex fs-4 m-0 p-0 ">
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                      </div>
                      <span>$25.00 </span>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
              <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="">

                <Card
                  style={{ width: "18rem", border: "none" }}
                  className="main mx-auto"
                >
                  <div className="Hov">
                    <div className="Layor_Show">
                      <div className="Part_1">
                        <FaShoppingCart />
                      </div>
                      <div className="Part_2">
                        <FaRegEye />
                      </div>
                      <div className="Part_3">
                        <HiArrowUpLeft />
                      </div>
                      <div className="Part_4">
                        <SiUndertale />
                      </div>
                    </div>
                    <div className="img-css">
                      <Card.Img
                        variant=""
                        src={require("../img/asset 18.jpeg")}
                        className="rounded-lg  "
                      />
                    </div>
                    <Card.Body className="p-1">
                      <span className="text-[14px]">Baby Food OKK</span>
                      <div>
                        <span className="text-[20px]">
                          Ergonomic Linen Pants{" "}
                        </span>
                      </div>
                      <div className="d-flex fs-4 m-0 p-0 ">
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                      </div>
                      <span>$25.00 </span>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
              <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="">

                <Card
                  style={{ width: "18rem", border: "none" }}
                  className="main mx-auto"
                >
                  <div className="Hov">
                    <div className="Layor_Show">
                      <div className="Part_1">
                        <FaShoppingCart />
                      </div>
                      <div className="Part_2">
                        <FaRegEye />
                      </div>
                      <div className="Part_3">
                        <HiArrowUpLeft />
                      </div>
                      <div className="Part_4">
                        <SiUndertale />
                      </div>
                    </div>
                    <div className="img-css">
                      <Card.Img
                        variant=""
                        src={require("../img/asset 18.jpeg")}
                        className="rounded-lg  "
                      />
                    </div>
                    <Card.Body className="p-1">
                      <span className="text-[14px]">Baby Food OKK</span>
                      <div>
                        <span className="text-[20px]">
                          Ergonomic Linen Pants{" "}
                        </span>
                      </div>
                      <div className="d-flex fs-4 m-0 p-0 ">
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                      </div>
                      <span>$25.00 </span>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="Frozen Foods" title="Frozen Foods">
          <Row className="">
              <Col xxl={3} xl={4} lg={4} md={6} sm={6}>
                <Card
                  style={{ width: "18rem", border: "none" }}
                  className="main"
                >
                  <div className="Hov">
                    <div className="Layor_Show">
                      <div className="Part_1">
                        <FaShoppingCart />
                      </div>
                      <div className="Part_2">
                        <FaRegEye />
                      </div>
                      <div className="Part_3">
                        <HiArrowUpLeft />
                      </div>
                      <div className="Part_4">
                        <SiUndertale />
                      </div>
                    </div>
                    <div className="img-css">
                      <Card.Img
                        variant=""
                        src={require("../img/asset 19.jpeg")}
                        className="rounded-lg  "
                      />
                    </div>
                    <Card.Body className="p-1">
                      <span className="text-[14px]">Baby Food OKK</span>
                      <div>
                        <span className="text-[20px]">
                          Ergonomic Linen Pants{" "}
                        </span>
                      </div>
                      <div className="d-flex fs-4 m-0 p-0 ">
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                      </div>
                      <span>$25.00 </span>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="Meat and Fish" title="Meat and Fish">
          <Row className="">
              <Col xxl={3} xl={4} lg={4} md={6} sm={6}>
                <Card
                  style={{ width: "18rem", border: "none" }}
                  className="main"
                >
                  <div className="Hov">
                    <div className="Layor_Show">
                      <div className="Part_1">
                        <FaShoppingCart />
                      </div>
                      <div className="Part_2">
                        <FaRegEye />
                      </div>
                      <div className="Part_3">
                        <HiArrowUpLeft />
                      </div>
                      <div className="Part_4">
                        <SiUndertale />
                      </div>
                    </div>
                    <div className="img-css">
                      <Card.Img
                        variant=""
                        src={require("../img/asset 20.jpeg")}
                        className="rounded-lg  "
                      />
                    </div>
                    <Card.Body className="p-1">
                      <span className="text-[14px]">Baby Food OKK</span>
                      <div>
                        <span className="text-[20px]">
                          Ergonomic Linen Pants{" "}
                        </span>
                      </div>
                      <div className="d-flex fs-4 m-0 p-0 ">
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                      </div>
                      <span>$25.00 </span>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="Milk & Dairy" title="Milk & Dairy">
          <Row className="">
              <Col xxl={3} xl={4} lg={4} md={6} sm={6}>
                <Card
                  style={{ width: "18rem", border: "none" }}
                  className="main"
                >
                  <div className="Hov">
                    <div className="Layor_Show">
                      <div className="Part_1">
                        <FaShoppingCart />
                      </div>
                      <div className="Part_2">
                        <FaRegEye />
                      </div>
                      <div className="Part_3">
                        <HiArrowUpLeft />
                      </div>
                      <div className="Part_4">
                        <SiUndertale />
                      </div>
                    </div>
                    <div className="img-css">
                      <Card.Img
                        variant=""
                        src={require("../img/asset 20.jpeg")}
                        className="rounded-lg  "
                      />
                    </div>
                    <Card.Body className="p-1">
                      <span className="text-[14px]">Baby Food OKK</span>
                      <div>
                        <span className="text-[20px]">
                          Ergonomic Linen Pants{" "}
                        </span>
                      </div>
                      <div className="d-flex fs-4 m-0 p-0 ">
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                        <IoMdStar className="text-yellow-400" />
                      </div>
                      <span>$25.00 </span>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Main_Card;
