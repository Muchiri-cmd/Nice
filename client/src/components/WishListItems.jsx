import { useContext } from "react"
import { ShopContext } from "../context/Shop"
import { TbTrash } from 'react-icons/tb'
import { whatsappicon } from "../assets";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";

const WishListItems = () => {

  const {all_products,wishlistItems,removeFromWishlist,getTotal } = useContext(ShopContext)

  console.log(all_products)
  
 const sendWhatsappMessage = () => {
  const phoneNumber = "+254113708866";
  const wishlistProducts = all_products.filter(item => wishlistItems[item.id] > 0);

  if (wishlistProducts.length === 0) {
    alert("Your wishlist is empty. Add some products before sharing!");
    return;
  }

    const formatCurrency = (amount) => {
      return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(amount);
    };

    const productDetails = wishlistProducts.map(item => `
    Product: ${item.name}
    Price: ${formatCurrency(item.current_price)}
    Link: ${window.location.origin}/products/${item.id}
    Image: ${item.image}
    `).join('\n');

    const total = formatCurrency(getTotal());

    const message = `
      Hello! I'm interested in the following products from my wishlist:

      ${productDetails}

      Total: ${total}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message.trim())}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className='max-padd-container'>
      {/* <div className="h-[50px]"></div> */}
      <div className='pt-24 bg-primary rounded-3xl'>
        <table className="w-full mx-auto">
          <thead>
            <tr className='bg-tertiary/90 text-white regular-16 sm:regular-18 text-start py-12'>
              <th className='p-1 py-2'>Liked Items</th>
              <th className='p-1 py-2'>Title</th>
              <th className='p-1 py-2'>Price</th>
              <th className='p-1 py-2'>View</th>
              <th className='p-1 py-2'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((item) => {
              if (wishlistItems[item.id] > 0 ){
                return(
                 
                  <tr key={item.id} 
                    className="border-b border-slate-900/20 text-gray-30 p-6 medium-16 sm:text-center">
                    <td className='flexCenter'>
                    <Link to={`/products/${item.id}`} className='group'>
                      <img src={item.image} alt="product image" height={43} width={43} 
                      className="rounded-lg ring-1 ring-slate-900/5 my-1"/>
                    </Link>
                      
                    </td>
                    <td><div className='line-clamp-5'>
                    <Link to={`/products/${item.id}`} className='group'>
                      {item.name}
                    </Link>
                    </div></td>
                    <td>
                      <Link to={`/products/${item.id}`} className='group'>
                        {item.current_price} kes
                      </Link>
                    </td>
                    <td>
                      <Link to={`/products/${item.id}`} className='group'>
                        <FaEye className=' rounded-full h-7 w-7 sm:h-10 sm:w-10 group-hover:scale-110 transition-all duration-500 bold-22 relative left-1/2' />
                      </Link>
                    </td>
                    <td>
                      <div className='bold-22 relative left-1/2'>
                        <TbTrash onClick={() => {
                          removeFromWishlist(item.id)
                        }}/>
                      </div>
                    </td>
                  </tr>
                 
                )
              }
              return null
            })}
          </tbody>
        </table>

        <div className='flex flex-col justify-between gap-y-16 my-16 p-8 md:flex-row
         rounded-md w-full max-w-[800px]'>
          <div className='flex flex-col gap-8'>
            <h4 className='bold-20'>Summary</h4>
            <div>
              <div className='flexBetween py-4'>
                <h4 className="bold-18">Total</h4>
                <h4 className='text-gray-30 font-semibold text-[20px]'>{getTotal()}</h4>
              </div>
            </div>
            <button className='rounded-md flex items-center gap-x-5 px-2 bg-green-400 h-14 sm:h-20 sm:text-[18px] max-w-64'
                  onClick={() => sendWhatsappMessage()}
                >Whatsapp Me
                  <img src={whatsappicon} alt="whatsapp" width={25} className="p-1 h-10 w-10 sm:h-16  sm:w-16 "/>
                </button>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default WishListItems
