// import all_products from "../../../client/src/assets/all_products"

import { useEffect,useState } from "react"
import { TbTrash } from 'react-icons/tb'

const ProductsList = () => {

  const [allProducts,setAllProducts] = useState([])

  const fetchInfo = async () => {
    await fetch('http://localhost:8000/products').then((res) => res.json()).then((data) => {
      setAllProducts(data)
    })
  }

  useEffect(() => {
    fetchInfo()
  },[])

  const remove_product = async(id) => {
    await fetch('http://localhost:8000/delete-product', {
      method : "POST",
      headers: {
        Accept : 'application/json',
        'Content-type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo()
  }

  return (
    <div className='p-2 box-border bg-white mb-0 rounded-sm w-full mt-4 sm:p-4 sm:m-7'>
      <h4 className='bold-22 p-5 uppercase'>Products</h4>
      <div className='max-h-[77vh] overflow-auto px-4 text-center'>
        <table className='w-full mx-auto'>
          <thead>
            <tr className='bg-primary bold-14 sm:regular-22 text-start py-12'>
              <th className='p-2'>Product</th>
              <th className='p-2'>Title</th>
              <th className='p-2'>Price</th>
              <th className='p-2'>Offer Price</th>
              <th className="p-2">Category</th>
              <th className='p-2'>Delete</th>
            </tr>
          </thead>
          <tbody className=''>
            {allProducts.map((product,index) => (
              <tr key = {index} className="border-b border-slate-900/20 p-6 medium-14">
                <td className='flexStart sm:flexCenter'><img src={product.image} alt="" height={43} width={43} className='rounded-lg ring-slate-900/5 my-1'/></td>
                <td><div className='line-clamp-3'>{product.name}</div></td>
                <td><div>Ksh{product.initial_price}</div></td>
                <td><div>Ksh{product.current_price}</div></td>
                <td><div>{product.category}</div></td>
                <td><div className='bold-22 pl-6 sm:pl-14'><TbTrash onClick={() => remove_product(product.id)}/></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductsList
