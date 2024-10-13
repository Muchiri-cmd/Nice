import logo from '../assets/logo2.png'

const Navbar = () => {
  return (
    <nav className="flexBetween bg-white py-2 ring-1 ring-slate-900/5">
      <div><img src={logo} alt="logo" className='w-[150px] h-[50px]'/></div>
      <div
      className="uppercase bold-22 px-3 hidden sm:block
      rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 max-xs:px-1">
      Admin Panel
      </div>
{/* 
      <div>
        <img src="admin" alt="" className="bg-gray-30 h-20 w-20 rounded-full"/>
      </div> */}
    </nav>
  )
}

export default Navbar
