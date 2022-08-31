import { AiOutlinePlus } from 'react-icons/ai';
import { HiMinusSm } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { BsCart3 } from 'react-icons/bs';



const CheckoutCard = ({title, image, price}: any) => {
   const {  amount, total } = useSelector((store: any) => store.cart  )

  return (
    <div className="bg-zinc-800 rounded-[12px] flex flex-col my-4 mx-6  py-4 px-3">
        <div className=" flex ">
          <img 
          src={image} 
          alt=""
          className="w-[6.5rem] h-[7rem] rounded-[8px]"
          />
           <div className='flex flex-col justify-center items-center '> 
              <h2>Price</h2>
                <p>${price}</p>
           </div>
        </div>
        
        <div className='flex items- mt-8'>
               <div className=' bg-black rounded-[4px] py-1 px-3 text-white text-2xl'>
                <AiOutlinePlus />
               </div>
                 <h4 className='font-bold self-center mx-3 '>{amount}</h4>
                 <div className='bg-black rounded-[4px] py-1 px-3 text-white text-2xl'>
                 <HiMinusSm  />
                 </div>
        </div>

    </div>
  )
}

export default CheckoutCard;