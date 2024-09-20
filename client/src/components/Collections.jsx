import { mens,womens,kids,banner } from "../assets"
import { Link } from "react-router-dom"

const Collections = () => {
  return (
    <section className='max-padd-container py-14 xl:py-24'>
    <h1 className='text-[45px] font-bold underline text-secondary hover:cursor-pointer'>Our Collections</h1>
    <div className='grid gap-8 grid-cols-1 xs:grid-cols-2 md:md:grid-cols-3 xl:grid-cols-4 mt-10'>
      <div className='hidden xl:flex flex-col ring-1 ring-slate-900/5 rounded-3xl overflow-hidden shadow-sm'>
        <div><img src={banner} alt="banner" style={{ height: '450px' }}/></div>
        <div className='px-5'>
          <h4 className='medium-18 mt-4'>Best Collections</h4>
          <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum error excepturi. Harum, excepturi reiciendis.</p>
          <Link to={'/'} className='bold-15 text-secondary'>Explore
          </Link>
        </div>
      </div>

      <div>
        <div className='ring-1 ring-slate-900/5 rounded-3xl text-white'>
          <img src={mens} alt="mens collection image" className='rounded-3xl' style={{ height: '450px' }}/>
        </div>
        <div className='px-5'>
          <h4 className='medium-18 mt-4'>Mens Collection</h4>
          <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum error excepturi. Harum, excepturi reiciendis.</p>
          <Link to={'/mens'} className='bold-15 text-secondary'>Explore
          </Link>
        </div>
      </div>

      <div>
        <div className='ring-1 ring-slate-900/5 rounded-3xl text-white'>
          <img src={womens} alt="mens collection image" className='rounded-3xl' style={{ height: '450px' }}/>
        </div>
        <div className='px-5'>
          <h4 className='medium-18 mt-4'>Womens Collection</h4>
          <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum error excepturi. Harum, excepturi reiciendis.</p>
          <Link to={'/mens'} className='bold-15 text-secondary'>Explore
          </Link>
        </div>
      </div>

      <div>
        <div className='ring-1 ring-slate-900/5 rounded-3xl text-white'>
          <img src={kids} alt="mens collection image" className='rounded-3xl' style={{ height: '450px' }}/>
        </div>
        <div className='px-5'>
          <h4 className='medium-18 mt-4'>Kids Collection</h4>
          <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum error excepturi. Harum, excepturi reiciendis.</p>
          <Link to={'/mens'} className='bold-15 text-secondary'>Explore
          </Link>
        </div>
      </div>

      
    </div>
  </section>
  )
}

export default Collections
