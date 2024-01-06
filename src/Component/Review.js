import React from "react";
import {Container} from "react-bootstrap";

import { IoStar } from "react-icons/io5";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

    

const options = {
    margin: 15,
    responsiveClass: true,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    alignItems: 'center',
    autoplayTimeout:4389,
    navText: ["Prev", "Next"],
    // smartSpeed: 1000,
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
            items: 1,
        },
        1000: {
            items: 1,
  
        }
    },
  };

function Review() {
  return (
    <>
    <Container>
    <OwlCarousel className="owl-theme container my-[40px]" {...options} >
        <div className="item">
        <div className="content border">
			<div className="thumbnail">
				<img src={require("../img/asset 38.jpeg")} /> 
                <p className="m-0 p-0 SdClientName">Theodore Handle</p>
                <p className="m-0 p-0 SdClientDesc">UI/UX design</p>
			</div>
            <div className="d-flex justify-center py-2">
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300" />
                </div>
			<div className="btnNtxt"> 
				<div className="sdAllContent"> 
					<div className="">
					<h1 className="sdCustomSliderHeadig">A wonderful, user-friendly HR solution! Farsight HR Solution helped us implement ESS (Employee Self Service) portal for our large enterprise, which made both employees and Human Resources more productive. User-oriented interface and professional team.</h1> 
					</div>
				</div>
			</div>
		</div>	
        </div>
        <div className="item">
        <div className="content border">
			<div className="thumbnail">
				<img src={require("../img/asset 38.jpeg")} /> 
                <p className="m-0 p-0 SdClientName">Theodore Handle</p>
                <p className="m-0 p-0 SdClientDesc">UI/UX design</p>
			</div>
            <div className="d-flex justify-center py-2">
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300" />
                </div>
			<div className="btnNtxt"> 
				<div className="sdAllContent"> 
					<div className="">
					<h1 className="sdCustomSliderHeadig">A wonderful, user-friendly HR solution! Farsight HR Solution helped us implement ESS (Employee Self Service) portal for our large enterprise, which made both employees and Human Resources more productive. User-oriented interface and professional team.</h1> 
					</div>
				</div>
			</div>
		</div>	
        </div>
        <div className="item">
        <div className="content border">
			<div className="thumbnail">
				<img src={require("../img/asset 38.jpeg")} /> 
                <p className="m-0 p-0 SdClientName">Theodore Handle</p>
                <p className="m-0 p-0 SdClientDesc">UI/UX design</p>
			</div>
            <div className="d-flex justify-center py-2">
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300" />
                </div>
			<div className="btnNtxt"> 
				<div className="sdAllContent"> 
					<div className="">
					<h1 className="sdCustomSliderHeadig">A wonderful, user-friendly HR solution! Farsight HR Solution helped us implement ESS (Employee Self Service) portal for our large enterprise, which made both employees and Human Resources more productive. User-oriented interface and professional team.</h1> 
					</div>
				</div>
			</div>
		</div>	
        </div>
        <div className="item">
        <div className="content border">
			<div className="thumbnail">
				<img src={require("../img/asset 38.jpeg")} /> 
                <p className="m-0 p-0 SdClientName">Theodore Handle</p>
                <p className="m-0 p-0 SdClientDesc">UI/UX design</p>
			</div>
            <div className="d-flex justify-center py-2">
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300" />
                </div>
			<div className="btnNtxt"> 
				<div className="sdAllContent"> 
					<div className="">
					<h1 className="sdCustomSliderHeadig">A wonderful, user-friendly HR solution! Farsight HR Solution helped us implement ESS (Employee Self Service) portal for our large enterprise, which made both employees and Human Resources more productive. User-oriented interface and professional team.</h1> 
					</div>
				</div>
			</div>
		</div>	
        </div>
        <div className="item">
        <div className="content border">
			<div className="thumbnail">
				<img src={require("../img/asset 38.jpeg")} /> 
                <p className="m-0 p-0 SdClientName">Theodore Handle</p>
                <p className="m-0 p-0 SdClientDesc">UI/UX design</p>
			</div>
            <div className="d-flex justify-center py-2">
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300" />
                </div>
			<div className="btnNtxt"> 
				<div className="sdAllContent"> 
					<div className="">
					<h1 className="sdCustomSliderHeadig">A wonderful, user-friendly HR solution! Farsight HR Solution helped us implement ESS (Employee Self Service) portal for our large enterprise, which made both employees and Human Resources more productive. User-oriented interface and professional team.</h1> 
					</div>
				</div>
			</div>
		</div>	
        </div>
        <div className="item">
        <div className="content border">
			<div className="thumbnail">
				<img src={require("../img/asset 38.jpeg")} /> 
                <p className="m-0 p-0 SdClientName">Theodore Handle</p>
                <p className="m-0 p-0 SdClientDesc">UI/UX design</p>
			</div>
            <div className="d-flex justify-center py-2">
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300"  />
                        <IoStar className="text-yellow-300" />
                </div>
			<div className="btnNtxt"> 
				<div className="sdAllContent"> 
					<div className="">
					<h1 className="sdCustomSliderHeadig">A wonderful, user-friendly HR solution! Farsight HR Solution helped us implement ESS (Employee Self Service) portal for our large enterprise, which made both employees and Human Resources more productive. User-oriented interface and professional team.</h1> 
					</div>
				</div>
			</div>
		</div>	
        </div>
    </OwlCarousel>	
    </Container>

    </>
  );
}

export default Review;
