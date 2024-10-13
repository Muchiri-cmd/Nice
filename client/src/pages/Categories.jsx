import { useContext } from "react"
import { ShopContext } from "../context/Shop"
// import { Link } from "react-router-dom"
// import { VscSettings } from 'react-icons/vsc'
import { Product } from "../components"

const Categories = ( {category, banner }) => {
  const {all_products} = useContext(ShopContext)

  return (
    <section className="max-padd-container">
      <div className="h-[70px]"></div>
      <div>
        <div className="max-sm:mt-4">
          <img src={banner} alt="banner" className="block mb-7 mx-auto rounded-3xl w-full h-[200px] sm:h-[500px]"/>
        </div>
        {/* <div className="flexBetween my-10 mx-2">
          <h5><span className="font-bold">Showing 1-12</span> out of 36 products</h5>
          <Link to={'/'}><VscSettings className="text-3xl bg-tertiary rounded-md h-10 w-10 p-2 text-white"/></Link>
        </div> */}
        <div className="max-padd-container bg-primary rounded-3xl py-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {all_products.map((product) => {
              if (category === product.category){
                return (  
                <Product key={product.id} 
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  current_price={product.current_price}
                  initial_price={product.initial_price}
                />
                )
              }
            })}
          </div>
          {/* <div className="mt-16 text-center">
            <button className="btn-white rounded-full">Load more</button>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Categories
