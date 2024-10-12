import { useContext } from "react"
import { ShopContext } from "../context/Shop"
import { TbTrash } from 'react-icons/tb'


const WishListItems = () => {

  const {all_products,wishlistItems,removeFromWishlist,getTotal } = useContext(ShopContext)
  
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
              <th className='p-1 py-2'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((item) => {
              if (wishlistItems[item.id] > 0 ){
                return(
                  <>
                    <tr key={item.id} 
                      className="border-b border-slate-900/20 text-gray-30 p-6 medium-16 sm:text-center">
                      <td className='flexCenter'>
                        <img src={item.image} alt="product image" height={43} width={43} 
                        className="rounded-lg ring-1 ring-slate-900/5 my-1"/>
                      </td>
                      <td><div className='line-clamp-5'>{item.name}</div></td>
                      <td>{item.current_price} kes</td>
                      <td>
                        <div className='bold-22 relative left-1/2'>
                          <TbTrash onClick={() => removeFromWishlist(item.id)}/>
                        </div>
                      </td>
                    </tr>
                  </>
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
              <div className="flexBetween py-4">
                <h4 className='medium-16'>SubTotal</h4>
                <h4 className="text-gray-30 font-semibold">{getTotal()}</h4>
              </div>
              <hr />
              <div className="flexBetween py-4 ">
                <h4 className='medium-16'>Shipping Fee:</h4>
                <h4 className='text-gray-30 font-semibold'>Free</h4>
              </div>
              <hr />
              <div className='flexBetween py-4'>
                <h4 className="bold-18">Total</h4>
                <h4 className='text-gray-30 font-semibold'>{getTotal()}</h4>
              </div>
            </div>
            <button className="btn-dark w-44 rounded-full">Checkout</button>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default WishListItems
