import { useContext } from "react"
import { ShopContext } from "../context/Shop"
import Product from "./Product"

const RelatedProducts = ({category,id}) => {
  const {all_products} = useContext(ShopContext)

  return (
    <section className='bg-primary rounded-3xl px-4'>
      <div className='py-12 mx-auto'>
        <h3 className='h3 font-ace text-secondary'>Related Products</h3>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grif-cols-3 xl:grid-cols-4 gap-6 mt-16'>
          {all_products.map((product) => {
              if (category === product.category && id != product.id) {
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
      </div>
    </section>
  )
}

export default RelatedProducts
