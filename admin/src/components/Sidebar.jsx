import { Link} from 'react-router-dom'

const Sidebar = () => {
  
  const handleLogout = () => {
    localStorage.clear()
    window.location.reload();
  }
  return (
    <div className='py-7 flex justify-center gap-x-2 gap-y-5 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20
    lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6'>
      <Link to="/add-product">
        <button
          className="flex items-center justify-center font-semibold h-12 w-32 sm:2-60 xs:w-44 gap-2 text-white bg-secondary 
          rounded-md shadow-md transition-all duration-300 ease-in-out medium-16"        
        >
         <span>Add Products </span>
        </button>
      </Link>
      <Link to="/products-list">
        <button
          className="flex items-center justify-center font-semibold h-12 w-32 sm:2-60 xs:w-44 gap-2 text-white bg-secondary 
          rounded-md shadow-md transition-all duration-300 ease-in-out medium-16"        
        >
         <span>Listed Products </span>
        </button>
      </Link>

      <button 
        onClick={() => handleLogout()}
        className="absolute top-0  left-60 sm:left-32 sm:bottom-0 transform -translate-x-1/2 flex items-center justify-center font-semibold h-12 w-32 sm:2-60 xs:w-44 gap-2 text-white bg-secondary 
        rounded-md shadow-md transition-all duration-300 ease-in-out medium-16">
        Logout
      </button>
    </div>
  )
}

export default Sidebar
