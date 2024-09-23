import { Link } from "react-router-dom"
import { FaEye } from 'react-icons/fa6'

const Product = ({id, name, image, current_price , initial_price}) => {
  return (
    <div className='overflow-hidden p-3 rounded-3xl bg-white ring-1 ring-slate-900/5'>
      <div className='relative flexCenter overflow-hidden transition-all duration-100 rounded-3xl'>
        <img src={image} alt="cloth image" className='w-full block object-cover transition-all duration-1000'
          style={{ height:'500px' }}
        />
      </div>
      <div className='px-5 pt-3 '>
        <h4 className='medium-18 line-clamp-1'>{name}</h4>
        <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='flexBetween'>
          <div className='xl:flex gap-3'>
            <div className='bold-16'>Kes {current_price}</div>
            <div className='text-secondary bold-16 line-through'>Kes {initial_price}</div>
          </div>
          <Link to={`/product/${id}`} className='group'>
            <FaEye className=' text-secondary rounded-full h-10 w-10 p-1.5 group-hover:scale-110 transition-all duration-500' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product
