import { useState,useEffect } from "react"
import Product from "./Product"
// import Latest_Arrivals from "../assets/newArrivals"

const NewArrivals = () => {

  const [latestArrivals,setLatestArrivals] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/recent-products').then((res) => res.json()).then((data) => setLatestArrivals(data))
  },[])

  return (
    <section className='max-padd-container' id="arrivals">
    <div className='bg-primary rounded-3xl py-4 xl:py-12' >
      <div className='w-[90%] mx-auto'>
        <h3 className='h3 font-ace text-secondary mt-12'>Recent Arrivals</h3>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-16'>
          {latestArrivals.map((product) => (
            <Product key={product.id} 
              id={product.id}
              name={product.name}
              image={product.image}
              current_price={product.current_price}
              initial_price={product.initial_price}/>
          ))}
        </div>
      </div>
    </div>
   </section>
  )
}

export default NewArrivals
