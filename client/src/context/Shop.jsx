import { createContext,useState } from 'react'
import { all_products } from '../assets'
// import { WishList } from '../pages'

export const ShopContext = createContext(null)

const getInitialWishlist = () => {
  let wishlist = {}
  for (let index = 0 ; index < all_products.length + 1 ; index ++){
    wishlist[index] = 0
  }
  return wishlist
}

const ShopContextProvider = (props) => {
  const [wishlistItems,setWishListItem] = useState(getInitialWishlist())

  const addToWishlist = (id) => {
    setWishListItem((prev) => ({...prev,[id]:prev[id]+1}))
    console.log(wishlistItems)
    
  }

  const getTotal = () => {
    let totalAmount = 0 
    for (const item in wishlistItems){
      if (wishlistItems[item] > 0 ){
        let itemInfo = all_products.find((product) => product.id === Number(item))
        totalAmount += itemInfo.current_price * wishlistItems[item]
      }
    }
    return totalAmount
  }

  const getNumberofItems = () => {
    let numOfItems = 0;

    for (const item in wishlistItems){
      if (wishlistItems[item] > 0 ){
        numOfItems += wishlistItems[item]
      }
    }

    return numOfItems
  }

  const removeFromWishlist = (id) => {
    setWishListItem((prev) => ({...prev,[id]:prev[id]-1}))
  }

  const contextValue = {all_products,wishlistItems,addToWishlist,removeFromWishlist,getTotal,getNumberofItems}

  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider