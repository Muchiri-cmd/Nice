import { useState } from 'react'

import upload_area from '../assets/upload_area.svg'
import { MdAdd } from 'react-icons/md'

const ContentManager = () => {

  const [image ,setImage ]= useState(false)
  const [productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"men",
    initial_price:"",
    current_price:""
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value
    })
  }

  const addProduct = async () => {
    console.log(productDetails)
    let responseData;
    let product = productDetails

    let formData = new FormData()
    formData.append('product',image),

    await fetch('http://localhost:8000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData
    }).then((res) => res.json())
        .then((data) => { responseData = data })

    if (responseData.success){
      product.image = responseData.image_url
      console.log(product)
      await fetch(`http://localhost:8000/add-product`,{
        method:"POST",
        headers:{
          Accept : 'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(product),
      }).then((resp) => resp.json()).then((data) => {data.success?alert("Product Added"): alert("Upload failed")})
    }
  }

  return (
    <div className='p-8 box-border bg-white  w-full rounded-sm mt-4 lg:m-7'>
      <div className="mb-3">
        <h4 className='bold-18 pb-2'>Product name:</h4>
        <input value={productDetails.name} type="text" onChange={changeHandler} name='name' placeholder="product name" className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
      </div>
      
      <div className="mb-3">
        <h4 className='bold-18 pb-2'>Initial Price: </h4>
        <input value={productDetails.initial_price} onChange={changeHandler} type="text" name='initial_price' placeholder="initial cost" className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
      </div>

      <div className="mb-3">
        <h4 className='bold-18 pb-2'>Offer Price: </h4>
        <input value={productDetails.current_price} onChange={changeHandler} type="text" name='current_price' placeholder="current price" className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
      </div>

      <div className="mb-3 flex items-center gap-x-4">
        <h4 className='bold-18 pb-2'>Product Category</h4>
        <select value={productDetails.category} onChange={changeHandler}  name='category' className='bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none'>
          <option value="men">men</option>
          <option value="women">women</option>
          <option value="kids">kids</option>
        </select>
      </div>

      <div>
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} alt="" 
          className="rounded-sm inline-block "
          />
        </label>
        <input onChange={imageHandler} type="file" name="image" id='file-input' hidden className='bg-primary max-w-80 w-full py-3 px-4'/>
      </div>

      <button className='btn-dark mt-4 flexCenter gap-x-1 rounded-md' onClick={() => addProduct()}><MdAdd />Add Product</button>

    </div>
   
  )
}

export default ContentManager
