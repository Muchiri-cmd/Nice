import { navLinks } from '../constants'
import { NavLink } from 'react-router-dom'

const Navbar = ({ containerStyles,closeMenu }) => {

  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link) => (
        <NavLink key={link.title} to={link.path} className={({isActive }) => isActive ? "active-link" : "px-3 py-2 rounded-full"} onClick={closeMenu} >
          <div className='flexCenter gap-x-1'>
            {link.title}
          </div>
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
