import { ProductDisplay,ProductDescription,RelatedProducts } from "."
import { useContext } from "react"
import { ShopContext } from "../context/Shop"
import { useParams } from "react-router-dom"

const ProductDetailView = () => {

  const {all_products } = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_products.find((item) => item.id === Number(productId))

  if (!product){
    return <div>
      Product not found !
    </div>
  }

  return (
    <section className='max-padd-container '>
      <div className='max-padd-contianer bg-primary rounded-3xl py-28'>
        <ProductDisplay product={product}/>
        <ProductDescription/>
        <RelatedProducts category={product.category}/>
      </div>
      
    </section>
  )
}

export default ProductDetailView
