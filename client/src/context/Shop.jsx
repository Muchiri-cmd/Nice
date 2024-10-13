import { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext(null)

const getInitialWishlist = () => {
  const storedWishlist = localStorage.getItem('wishlist')
  if (storedWishlist) {
    return JSON.parse(storedWishlist)
  }
  let wishlist = {}
  for (let index = 0; index < 300 + 1; index++) {
    wishlist[index] = 0
  }
  return wishlist
}

const ShopContextProvider = (props) => {
  const [wishlistItems, setWishListItem] = useState(getInitialWishlist())
  const [all_products, setAllProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems))
  }, [wishlistItems])

  const addToWishlist = (id) => {
    setWishListItem((prev) => ({
      ...prev,
      [id]: true
    }))
  }
  const getTotal = () => {
    if (isLoading || all_products.length === 0) {
      return 0 
    }
    let totalAmount = 0
    for (const item in wishlistItems) {
      if (wishlistItems[item] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(item))
        totalAmount += itemInfo.current_price * wishlistItems[item]
      }
    }
    return totalAmount
  }

  const getNumberofItems = () => {
    let numOfItems = 0;
    for (const item in wishlistItems) {
      if (wishlistItems[item] > 0) {
        numOfItems += wishlistItems[item]
      }
    }
    return numOfItems
  }

  const removeFromWishlist = (id) => {
    setWishListItem((prev) => {
      const newWishlist = { ...prev }
      delete newWishlist[id]
      return newWishlist
    })
  }

  const isInWishlist = (id) => {
    return !!wishlistItems[id]
  }


  const contextValue = { all_products, wishlistItems, addToWishlist, removeFromWishlist, getTotal, getNumberofItems,isInWishlist }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider