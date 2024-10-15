import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear()
    window.location.reload();
  }
  
  return (
    <nav className="flexBetween bg-white py-2 ring-1 ring-slate-900/5">
      <Link to="/">
        <div><img src={logo} alt="logo" className='w-[150px] h-[50px] sm:w-[250px] hidden sm:block'/></div>
      </Link>
    
      <div
        className="uppercase bold-22 px-3 
        rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 max-xs:px-1">
        Admin Panel
      </div>
      <button 
        onClick={() => handleLogout()}
        className="transform -translate-x-1/2 flex items-center justify-center font-semibold h-12 w-16 sm:w-32 sm:2-60 xs:w-44 gap-2 text-white bg-secondary 
        rounded-md shadow-md transition-all duration-300 ease-in-out medium-16">
        Logout
      </button>
{/* 
      <div>
        <img src="admin" alt="" className="bg-gray-30 h-20 w-20 rounded-full"/>
      </div> */}
    </nav>
  )
}

export default Navbar
