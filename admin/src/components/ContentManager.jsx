import { useState } from 'react'

import upload_area from '../assets/upload_area.svg'
import { MdAdd } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const ContentManager = () => {

  const [image ,setImage ]= useState(false)
  const [productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"men",
    initial_price:"",
    current_price:""
  })

  const navigate = useNavigate();
    
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

   
    if (!productDetails.name || !productDetails.initial_price || !productDetails.current_price || !productDetails.category) {
      alert("Please fill in all fields");
      return;
    }

    if (!image) {
      alert("Please select an image");
      return;
    }
    
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

      navigate('/products-list')
    }
   }

  return (
    <div className='p-8 box-border bg-white  w-full rounded-sm mt-4 lg:m-7'>
      <h4 className="text-2xl font-bold mb-6">Add New Product</h4>

      <div className="mb-4">
        <label htmlFor="name" className="block text-3xl font-semibold mb-2">Product Name:</label>
        <input 
            id="name" 
            value={productDetails.name} 
            type="text" 
            onChange={changeHandler} 
            name="name" 
            placeholder="Enter product name" 
            className="bg-gray-100 border border-gray-300 outline-none w-full py-3 px-4 rounded-md transition duration-200 focus:ring focus:ring-blue-500 text-2xl"
            required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="initial_price" className="block text-3xl font-semibold mb-2">Initial Price:</label>
        <input 
            id="initial_price" 
            value={productDetails.initial_price} 
            onChange={changeHandler} 
            type="number" 
            name="initial_price" 
            placeholder="Enter initial cost" 
            className="bg-gray-100 border border-gray-300 outline-none w-full py-3 px-4 rounded-md transition duration-200 focus:ring focus:ring-blue-500 text-2xl"
            required
        />
    </div>

    <div className="mb-4">
        <label htmlFor="current_price" className="block text-3xl font-semibold mb-2">Offer Price:</label>
        <input 
            id="current_price" 
            value={productDetails.current_price} 
            onChange={changeHandler} 
            type="number" 
            name="current_price" 
            placeholder="Enter current price" 
            className="bg-gray-100 border border-gray-300 outline-none w-full py-3 px-4 rounded-md transition duration-200 focus:ring focus:ring-blue-500 text-2xl"
            required
        />
    </div>

    <div className="mb-4">
        <label htmlFor="category" className="block text-3xl font-semibold mb-2">Product Category:</label>
        <select 
            id="category" 
            value={productDetails.category} 
            onChange={changeHandler} 
            name="category" 
            className="bg-gray-100 border border-gray-300 outline-none w-full py-3 px-4 rounded-md transition duration-200 focus:ring focus:ring-blue-500 text-2xl"
            required
        >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
        </select>
    </div>

      <div className="mb-4">
        <label htmlFor="file-input"
          className="block text-3xl font-semibold mb-2"
        > Upload Image
          <p>(Click to upload)</p>
          <img src={image?URL.createObjectURL(image):upload_area} alt="" 
          className="cursor-pointer"
          />
        </label>
        
        <input  required onChange={imageHandler} type="file" name="image" id='file-input' hidden className='bg-primary max-w-80 w-full py-3 px-4' />
      </div>

      <button className="btn-dark mt-4 flex items-center justify-center gap-x-2 rounded-md py-3 bg-blue-600 text-white hover:bg-secondary transition duration-200 w-full" onClick={() => addProduct()}><MdAdd />Add Product</button>

    </div>
   
  )
}

export default ContentManager
