import { Link} from 'react-router-dom'

const Sidebar = () => {
  
 
  return (
    <div className='py-7 flex justify-center gap-x-2 gap-y-5 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20
    lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6'>
      <Link to="/">
        <button
          className="flex items-center justify-center font-semibold h-12 w-24 sm:2-60 xs:w-44 gap-2 text-white bg-secondary 
          rounded-md shadow-md transition-all duration-300 ease-in-out medium-16"        
        >
         <span>Overview </span>
        </button>
      </Link>
      
      <Link to="/add-product">
        <button
          className="flex items-center justify-center font-semibold h-12 w-24 sm:2-60 xs:w-44 gap-2 text-white bg-secondary 
          rounded-md shadow-md transition-all duration-300 ease-in-out medium-16"        
        >
         <span>Add Products </span>
        </button>
      </Link>
      <Link to="/products-list">
        <button
          className="flex items-center justify-center font-semibold h-12 w-24 sm:2-60 xs:w-44 gap-2 text-white bg-secondary 
          rounded-md shadow-md transition-all duration-300 ease-in-out medium-16"        
        >
         <span>Listed Products </span>
        </button>
      </Link>

      
    </div>
  )
}

export default Sidebar
