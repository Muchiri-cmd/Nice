import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { mainlogo } from '../assets'
import { useContext, useState } from 'react'
import {MdMenu,MdClose} from 'react-icons/md'
import { wsIcon } from '../assets'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/Shop'

const Header = () => {
  //keep track of toggleMenu
  const [toggledMenu, setToggledMenu] = useState(false)
  const toggleMenu = () => setToggledMenu(!toggledMenu)
  const closeMenu = () => setToggledMenu(false);

  const {getNumberofItems} = useContext(ShopContext)

  return (
    <header className="max-padd-container w-full z-10 py-5 bg-white fixed left-1/2 transform -translate-x-1/2">
      <div className="flexBetween py-1">
        <div className='flex flex-1'>
        {/* bg-secondary rounded-full */}
          <div className='h-24 w-90 flexCenter absolute top-0 px-2'>
            <Link to ={'/'}>
              <img src={mainlogo} alt="logo" className="h-[50px] w-[150px] sm:h-[50px] sm:w-[240px] md:h-[60px] md:w-[300px] bg-white" />
            </Link>
          </div>
        </div>
        
        {/* desktop navbar */}
        <div className="hidden sm:flex flex-1 z-50">
          <Navbar containerStyles={"hidden sm:flex gap-x-5 sm:gap-x-10 medium-15 ring-1 ring-slate-900/10 rounded-full px-2 py-1"}/>
        </div>

        {/* mobile navbar */}
        <div className="">
          <Navbar containerStyles={`${toggledMenu ? 
            "flex items-start flex-col gap-y-8 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50" 
            : "flex items-start flex-col gap-y-8 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]" }`} closeMenu={closeMenu}/>
        </div>
       
        <div className="flexBetween sm:gap-x-2 bold-16">
          <div className="flexBetween sm:gap-x-6">
            <NavLink to={"/wishlist"} className="flex">
              <img src={wsIcon} alt="wishlist" width={25} className="p-1 h-8 w-8  sm:h-10 sm:w-10 hover:text-secondary"/>
              <span className="relative flexCenter w-5 h-5 rounded-full text-primary bg-red-600 medium-14 -top-1">{getNumberofItems()}</span>
            </NavLink>
            
          </div>
          {toggledMenu 
            ? (<MdClose className="sm:hidden cursor-pointer ring-1 ring-slate-900/10 mr-2 p-2 h-10 w-10 rounded-full" onClick={() => toggleMenu()}/>)
            : (<MdMenu className="sm:hidden cursor-pointer ring-1 ring-slate-900/10 mr-2 p-2 h-10 w-10 rounded-full" onClick={() => toggleMenu()}/>)
          }
        </div>
      </div>
    </header>
    
  )
}

export default Header
