import { FaTruck } from "react-icons/fa";
import { TfiMoney } from "react-icons/tfi";
import { PiIntersectThreeBold } from "react-icons/pi";
import { TfiHelp } from "react-icons/tfi";



import React from 'react'

function Service() {
  return (
    <>
        <div className="border rounded-2xl container my-[50px]">
            <div className=" d-flex justify-evenly">
                 <p className='fs-5 py-2 m-0 d-flex'><FaTruck className="mr-2 mt-1" /> Flexible Delivery</p>
                 <p className='fs-5 py-2 m-0 d-flex'><TfiMoney className="mr-2 mt-1" /> 100% Money Back</p>
                 <p className='fs-5 py-2 m-0 d-flex'><TfiHelp  className="mr-2 mt-1"/> Secure Payment</p>
                 <p className='fs-5 py-2 m-0 d-flex'><PiIntersectThreeBold className="mr-2 mt-1" /> 24 Hour Support</p>
            </div>
        </div>
    </>
  )
}

export default Service
