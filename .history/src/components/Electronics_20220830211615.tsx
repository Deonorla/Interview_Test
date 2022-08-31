
import { BsCart3 } from 'react-icons/bs'
import { useSelector } from 'react-redux'
const Electronics = () => {

     console.log(
        useSelector((store) => {
            console.log(store)
        })
     )
       
            
  return (
    <section className="products section" id="products">
    <h2 className="section_title section_title-gradient product_line">
        Electronics  
    </h2>
    <div className="products_container container grid">
       <article className="product_card">
           <div className="products_content">
               <img 
               src="assets/images/product1.png" 
               alt="" 
               className="product_img"/>

               <h3 className="product_title">Black</h3>
               <span className="product_price">$249</span>

               <button className="button buttom--flex products_button">
               <BsCart3 className='button_icon' />
               </button>
           </div>
       </article>

       <article className="product_card">
        <div className="products_content">
            <img 
            src="assets/images/product2.png" 
            alt="" 
            className="product_img" />

            <h3 className="product_title">Red Black</h3>
            <span className="product_price">$249</span>

            <button className="button buttom--flex products_button">
            <BsCart3 className='button_icon' />
            </button>
        </div>
    </article>

    <article className="product_card">
        <div className="products_content">
            <img 
            src="assets/images/product3.png" 
            alt="" 
            className="product_img" />

            <h3 className="product_title">Night Black</h3>
            <span className="product_price">$249</span>

            <button className="button buttom--flex products_button">
            <BsCart3 className='button_icon' />
            </button>
        </div>
    </article>

    <article className="product_card">
        <div className="products_content">
            <img 
            src="assets/images/product4.png" 
            alt="" 
            className="product_img" />

            <h3 className="product_title" >Blue</h3>
            <span className="product_price">$249</span>

            <button className="button buttom--flex products_button">
            <BsCart3 className='button_icon' />
            </button>
        </div>
    </article>

    <article className="product_card">
        <div className="products_content">
            <img 
            src="assets/images/product5.png" 
            alt="" 
            className="product_img" />
            
            <h3 className="product_title">Twilight grey</h3>
            <span className="product_price">$249</span>

            <button className="button buttom--flex products_button">
            <BsCart3 className='button_icon' />
            </button>
        </div>
    </article>
    </div>
</section>
  )
}

export default Electronics