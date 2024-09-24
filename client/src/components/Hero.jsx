import { MdOutlineLocalOffer } from "react-icons/md"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className='max-padd-container mx-5 '>
    <div className="h-[70px]"></div>
    <div className='relative max-padd-container bg-hero bg-center bg-no-repeat bg-cover h-screen w-full rounded-3xl'>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-10 rounded-3xl"></div>
      
      <div className="relative top-32 xs:top-80">
        <h2 className='h2 capitalize max-w-[60rem] mx-5 text-white'> 
          Elevate Your Wardrobe with Unique <span className='text-secondary'>Wears</span>
        </h2>
        <p className='regular-16 mx-10 max-w-[48rem] text-white'>
          Discover a curated collection of fashion-forward pieces that are designed to make you stand out. From bold statements to timeless classics, our exclusive range blends style and individuality.
          Each item is thoughtfully picked to elevate your wardrobe and empower your unique sense of style. 
          <br /> Redefine your fashion journey with us today.
        </p>
        <div className='max-xs:flex-col flex gap-5 mx-5 my-5'>
          <Link to={'/'} className='btn-dark rounded-full flexCenter'>Shop Now</Link>
          <Link to={'/'} className='text-tertiary bg-white pl-6 rounded-full flexCenter gap-x-8 medium-16 group'>
            Offers
            <MdOutlineLocalOffer className='text-xl bg-secondary text-primary rounded-full h-12 w-12 p-2 rotate-90 border border-dashed border-white group-hover:rotate-45 transition-all duration-500'/>
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
