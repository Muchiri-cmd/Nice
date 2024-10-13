import {FaStar} from "react-icons/fa6"
// import { FaGreaterThan } from 'react-icons/fa'; 
import { whatsappicon } from "../assets";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useContext } from "react";
import { ShopContext } from "../context/Shop";

const ProductDisplay = (props) => {
  const { product } = props
  const { addToWishlist,isInWishlist,removeFromWishlist } = useContext(ShopContext)
  
  const liked = isInWishlist(product.id)

  const handleWishlistToggle = () => {
    if (liked) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product.id)
    }
  }

  const sendWhatsappMessage = () => {
    const phoneNumber = "+254113708866";
    
        // Assume we have access to the full product object
        const productUrl = window.location.href; // Current page URL
        const imageUrl = product.image; // Full URL to the product image
        
        const message = `Hello! I'm interested in this product:
      
      Name: ${product.name}
      Price: ${product.current_price}
      Product Link: ${productUrl}
      Image Link: ${imageUrl}
      .`;
      
        // WhatsApp API URL
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp link
        window.open(whatsappURL, "_blank");
      }
      
  return (
    <>
      {/* <div className="flex items-center flex-wrap gap-x-2 my-4 mx-2 capitalize">
          Home<FaGreaterThan />  Shop <FaGreaterThan/>{product.category} <FaGreaterThan/>{product.name}
      </div> */}

      <section className="flex flex-col gap-8 md:flex-row px-4">
          <div className='flex gap-x-2 xl:flex-1'>
            {/* <div className='flex flex-col gap-[7px] flex-wrap'>
              <img src={product.image} alt="product image" className='max-h-[99px] w-[120px] rounded-lg'/>
              <img src={product.image} alt="product image" className='max-h-[99px] w-[120px] rounded-lg'/>
              <img src={product.image} alt="product image" className='max-h-[99px] w-[120px] rounded-lg'/>
              <img src={product.image} alt="product image" className='max-h-[99px] w-[120px] rounded-lg'/>
            </div> */}
            <div>
              <img src={product.image} alt="product image" className=" max-h-[420px] w-[500px] rounded-xl"/>
            </div>
          </div>

          <div className="flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl">
            <div>
              <h3 className="h3 sm:line-clamp-1">{product.name}</h3>
              <div className="flex items-end gap-x-2 medium-20 text-yellow-400">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                {/* <p>(13)</p> */}
              </div>
              <div className='flex items-baseline gap-x-6 bold-28 sm:bold-32 mt-4'>
                <div>Ksh {product.current_price}</div>
                <div className='bold-20 sm:old-28 line-through text-secondary'>Ksh {product.initial_price}</div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-6">
                  {/* <div>
                    <h4 className="bold-16">Select Color:</h4>
                    <div className="flex gap-3 my-3">
                      <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryRed"></div>
                      <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryRed"></div>
                      <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryRed"></div>
                      <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryRed"></div>
                    </div>
                  </div> */}
                  {/* <div>
                    <h4 className="bold-16">Select Your Size:</h4>
                      <div className="flex gap-3 my-3">
                        <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md ">S</div>
                        <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md ">M</div>
                        <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md ">L</div>
                        <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md ">XL</div>
                      </div>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 mb-12 ">
                <button
                  onClick={handleWishlistToggle}
                  className='group-hover:scale-110 transition-all duration-500 rounded-md flex items-center gap-x-5 px-2 bg-gray-10 h-14 sm:h-20'>
                  {liked ? (
                    <>
                      <span>Remove From WishList </span> <FaHeart className="h-10 w-10 text-red-500" />
                    </>
                   
                  ) : (
                    <>
                      <span>Add to wishlist</span>  <FaRegHeart className="p-1 h-10 w-10 text-black" />
                    </>
                  
                  )}
              </button>
                <button className=' rounded-md flex items-center gap-x-5 px-2 bg-gray-10 h-14 sm:h-20'
                  onClick={() => sendWhatsappMessage()}
                >Whatsapp Me
                  <img src={whatsappicon} alt="whatsapp" width={25} className="p-1 h-16 w-16 "/>
                </button>
              </div>
              <p><span className='medium-16 text-tertiary'>Category: </span> {product.category}</p>
              <p><span className="medium-16 text-tertiary">Tags:</span> Latest | Fashion </p>

            </div>
            
          </div>
      </section>
    </>
  
  )
}

export default ProductDisplay
