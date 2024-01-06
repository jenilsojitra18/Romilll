import React from "react";
import { Link } from 'react-router-dom';
import { SlArrowRight } from "react-icons/sl";


function Contact_Path() {
  return (
    <>
      <div className="container-fluid page-header mb-5 p-0 bg-img">
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase list-none">
                        <li className="breadcrumb-item  text-white" aria-current="Home">
                        <Link className='mx-auto text-decoration-none text-white text-[18px] px-3' to="/">    
                        Home 
                        </Link> 
                        </li>
                        <SlArrowRight className="text-white fw-bold mt-1" />

                        <li className="breadcrumb-item text-white " aria-current="page">
                        <Link className='mx-auto text-decoration-none text-white text-[18px] px-3' to="/contact">    
                        Contact
                        </Link> 
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    </>
  );
}

export default Contact_Path;
