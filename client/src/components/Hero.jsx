import { FaArrowRightLong } from "react-icons/fa6"

const Hero = () => {
  return (
    <section className='sm:max-padd-container sm:mx-5'>
    <div className="h-[70px]"></div>
    <div className='relative sm:max-padd-container bg-hero bg-center bg-no-repeat bg-cover h-screen sm:rounded-3xl sm:w-full w-[100vw]'>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 sm:rounded-3xl"></div>
      
      <div className="relative top-32 xs:top-80">
        <h2 className='h2 capitalize max-w-[60rem] mx-5 text-white font-bold text-18'> 
          Elevate Your Wardrobe with Unique <span className='text-secondary'>Wears</span>
        </h2>
        <p className='regular-16 mx-10 max-w-[48rem] text-white'>
          Discover a curated collection of fashion-forward pieces that are designed to make you stand out. 
          <br /> Redefine your fashion journey with us today.
        </p>
        <div className='max-xs:flex-col flex gap-5 mx-5 my-5'>
          <a href="#arrivals" className='btn-dark rounded-full flexCenter'>Latest Arrivals</a>
          <a href="#collections" className='text-tertiary bg-white pl-6 rounded-full flexCenter gap-x-8 medium-16 group'>
            Collections
            <FaArrowRightLong className='text-xl bg-secondary text-primary rounded-full h-12 w-12 p-4
            hover:rotate-45 transition-all duration-500 border-dashed border-white '/> 
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
