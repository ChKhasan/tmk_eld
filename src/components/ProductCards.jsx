import React from 'react'

const ProductCards = ({title,text,img}) => {
  return (
    <div className='product_card'>
      <div className="row">
        <div className="col-12 d-flex align-items-center ">
            <img style={{marginRight: "16px"}} src={img} alt="" />
            <h4>{title}</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
            <p>
            {text}
            </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCards
