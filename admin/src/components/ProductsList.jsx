import { useEffect, useState } from "react";
import { TbTrash } from 'react-icons/tb';
import { FaPen } from 'react-icons/fa';

const ProductsList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null); // Track product being edited
  const [updatedProduct, setUpdatedProduct] = useState({}); // Store updated product data
  const [selectedFile, setSelectedFile] = useState(null); // Track selected image file for update

  const fetchInfo = async () => {
    await fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch('http://localhost:8000/delete-product', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    });
    await fetchInfo();
  };

  const handleEditClick = (product) => {
    setEditProduct(product); 
    setUpdatedProduct(product); 
    setSelectedFile(null); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Handle image file selection
  };

  const submitUpdate = async (e) => {
    e.preventDefault();
    const { id } = editProduct;

    const formData = new FormData();
    formData.append("name", updatedProduct.name);
    formData.append("initial_price", updatedProduct.initial_price);
    formData.append("current_price", updatedProduct.current_price);
    formData.append("category", updatedProduct.category);

    if (selectedFile) {
        formData.append("image", selectedFile);
    }

    try {
        const response = await fetch(`http://localhost:8000/update-product/${id}`, {
            method: "PUT",
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error updating product:', errorData); 
        }

        setEditProduct(null); 
        await fetchInfo(); 
    } catch (error) {
        console.error('Fetch error:', error);
    }
};


  return (
    <div className='p-2 box-border bg-white mb-0 rounded-sm w-full mt-4 sm:p-4 sm:m-7'>
      <h4 className='bold-22 p-5 uppercase'>Products</h4>
      <div className='max-h-[77vh] overflow-auto px-4 text-center'>
        <table className='w-full mx-auto'>
          <thead>
            <tr className='bg-primary bold-14 sm:regular-22 text-start py-12'>
              <th className='p-2'>Product</th>
              <th className='p-2'>Title</th>
              <th className='p-2'>Initial Price</th>
              <th className='p-2'>Offer Price</th>
              <th className="p-2">Category</th>
              <th className="p-2">Edit</th>
              <th className='p-2'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, index) => (
              <tr key={index} className="border-b border-slate-900/20 p-6 medium-14">
                <td className='flex items-center justify-center'><img src={product.image} alt="" height={43} width={43} className='rounded-lg ring-slate-900/5 my-1'/></td>
                <td><div className='line-clamp-3'>{product.name}</div></td>
                <td><div>Ksh{product.initial_price}</div></td>
                <td><div>Ksh{product.current_price}</div></td>
                <td><div>{product.category}</div></td>
                <td>
                  <div className='text-xl cursor-pointer'>
                    <FaPen onClick={() => handleEditClick(product)} />
                  </div>
                </td>
                <td>
                  <div className='text-xl cursor-pointer'>
                    <TbTrash onClick={() => removeProduct(product.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Product Modal */}
      {editProduct && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h3 className="text-lg font-bold mb-4">Edit Product</h3>
            <form onSubmit={submitUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={updatedProduct.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Initial Price</label>
                <input
                  type="number"
                  name="initial_price"
                  value={updatedProduct.initial_price}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Current Price</label>
                <input
                  type="number"
                  name="current_price"
                  value={updatedProduct.current_price}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Category</label>
                <input
                  type="text"
                  name="category"
                  value={updatedProduct.category}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-md shadow hover:bg-gray-600"
                  onClick={() => setEditProduct(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
