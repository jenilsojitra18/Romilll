import React from 'react'

import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Badge from '@mui/material/Badge';
import Switch from '@mui/material/Switch';
import MailIcon from '@mui/icons-material/Mail';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Header() {

  return (
    <>
    <Navbar expand="lg" className="bg-[#678E61] py-3 navbar-light shadow sticky-top p-0">
      <Container>
        <Navbar.Brand >
        <Image src={require('../img/logo-white.png')} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="jen border-0" />
        <Navbar.Collapse id="navbarScroll"> 
        
          <Nav className="ms-auto my-2 my-lg-0"   style={{ maxHeight: '100px' }}  navbarScroll >
            <Link className=' mt mx-auto text-decoration-none text-white text-[18px] px-3' to="/">Home</Link>
            <Link className=' mt mx-auto text-decoration-none text-white text-[18px] px-3' to="/About">About</Link>
            <Link className=' mt mx-auto text-decoration-none text-white text-[18px] px-3' to="/Page">Pages </Link>
            <Link className=' mt mx-auto text-decoration-none text-white text-[18px] px-3' to="/Coupon">Coupons</Link>
            <Link className=' mt mx-auto text-decoration-none text-white text-[18px] px-3' to="/Blog">Blog </Link>
            <Link className=' mt mx-auto text-decoration-none text-white text-[18px] px-3' to="/Contact">Contact </Link> 
          </Nav>



          <div className="">
          {/* <Switch {...label} defaultChecked /> */}
          </div>

      {/* <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
          </Badge> */}


        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header
