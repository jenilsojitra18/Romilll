import React from 'react'

function Banner() {
  return (
    <>
     <div class="single-slider slider-height d-flex align-items-center justify-content-center" style={{minHeight:"550px"}}>
         <div class="container">
             <div class="d-flex">
                 <div className='my-auto'>
                         <h1 class="text-size text-dark ">The Online Grocery Store </h1>
                         <h6 >Lorem ipsum dolor sit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magni earum pariatur!</h6>
                         <button className='bg-success px-5 rounded-full text-white py-2'>Shop Now</button>
                 </div>
                 <div className="">
                   <img src={require('../img/asset 17.png')} alt="" />
                 </div>
             </div>
         </div>
     </div>

    </>
  )
}

export default Banner
