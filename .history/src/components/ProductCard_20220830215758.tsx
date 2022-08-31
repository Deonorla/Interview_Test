import React from 'react'
import { BsCart3 } from 'react-icons/bs'

const ProductCard = ({id, image, price}: any) => {
  return (
    <article className="product_card">
           <div className="products_content">
               <img 
               src={image}
               alt="" 
               className="product_img"/>

               <h3 className="product_title">Black</h3>
               <span className="product_price">{price}</span>

               <button className="button buttom--flex products_button">
               <BsCart3 className='button_icon' />
               </button>
           </div>
       </article>
  )
}

export default ProductCard;