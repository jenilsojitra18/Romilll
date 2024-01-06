import React from 'react'
import Card_product_path from './Card_product_path'

function Card_product() {
  return (
    <>

      <Card_product_path /> 

      <div className="container py-[50px]">
          <div className="Card-Main d-flex">
            <div className="Img-Part">
                <img src={require('../img/asset 18.jpeg')} alt="" />
            </div>
            <div className="Content-Part">
                <p className='Frozen Foods-[16px]'>Frozen Foods</p>
            </div>
           </div>
      </div>



    </>
  )
}

export default Card_product
