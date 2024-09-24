import Featured_Clothes from "../assets/featured"
import Product from "./Product"

const Featured = () => {
  return (
   <section className='max-padd-container'>
    <div className='bg-slate-200 rounded-3xl py-4 xl:py-12'>
      <div className='w-[90%] mx-auto'>
        <h3 className='h3 font-ace text-secondary'>Featured</h3>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10'>
          {Featured_Clothes.map((product) => (
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

export default Featured
