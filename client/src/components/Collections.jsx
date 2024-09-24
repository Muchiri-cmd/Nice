import { mens,womens,kids,banner } from "../assets"
import { Link } from "react-router-dom"

const Collections = () => {
  return (
    <section className='max-padd-container py-14 xl:py-24'>
    <h1 className='text-[45px] font-bold text-secondary hover:cursor-pointer'>Our Collections</h1>
    <div className='grid gap-8 grid-cols-1 xs:grid-cols-2 md:md:grid-cols-3 xl:grid-cols-4 mt-10'>
      <div className='hidden xl:flex flex-col ring-1 ring-slate-900/5 rounded-3xl overflow-hidden shadow-sm'>
        <div><img src={banner} alt="banner" style={{ height: '350px' }}/></div>
        <div className='px-5'>
          <h4 className='medium-18 mt-4'>Universal Collections</h4>
          <p className='my-2'>
            Explore our curated collections for every style. From versatile unisex pieces to bold menswear and playful kids fashion, we offer something for everyone—all at prices that elevate your wardrobe without breaking the bank.
          </p>

          <Link to={'/'} className='bold-15 text-secondary'>Explore
          </Link>
        </div>
      </div>

      <div >
        <div className='ring-1 ring-slate-900/5 rounded-3xl text-white'>
          <img src={mens} alt="mens collection image" className='rounded-3xl' style={{ height: '350px' }}/>
        </div>
        <div className='px-5'>
        <h4 className='medium-18 mt-4'>Men's Collection</h4>
        <p className='my-2'>
            Discover our exclusive men's collection, where timeless designs meet modern style. From sharp essentials to bold statement pieces, elevate your wardrobe with fashion that defines confidence.
        </p>

          <Link to={'/men'} className='bold-15 text-secondary'>Explore
          </Link>
        </div>
      </div>

      <div>
        <div className='ring-1 ring-slate-900/5 rounded-3xl text-white'>
          <img src={womens} alt="womens collection image" className='rounded-3xl' style={{ height: '350px' }}/>
        </div>
        <div className='px-5'>
        <h4 className='medium-18 mt-4'>Women's Collection</h4>
        <p className='my-2'>
            Step into elegance with our women's collection, designed to celebrate your unique style. From chic everyday wear to stunning statement pieces, each item is picked to inspire confidence and showcase effortless beauty.
        </p>

          <Link to={'/women'} className='bold-15 text-secondary'>Explore
          </Link>
        </div>
      </div>

      <div>
        <div className='ring-1 ring-slate-900/5 rounded-3xl text-white'>
          <img src={kids} alt="kids collection image" className='rounded-3xl' style={{ height: '350px' }}/>
        </div>
        <div className='px-5'>
        <h4 className='medium-18 mt-4'>Kids' Collection</h4>
        <p className='my-2'>
            Dress your little ones in style with our playful yet practical kids' collection. Designed with both comfort and durability in mind, our range offers trendy pieces that parents love and kids adore—perfect for every adventure.
        </p>

          <Link to={'/kids'} className='bold-15 text-secondary'>Explore
          </Link>
        </div>
      </div>

      
    </div>
  </section>
  )
}

export default Collections
