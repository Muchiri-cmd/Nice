import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"

const Banner = () => {
  return (
   <section className='max-padd-container mb-16'>
    <div className='max-padd-container text-white bg-banneroffer bg-cover w-full px-4 py-16 xl:py-16 mt-16 rounded-3xl'>
      <h2 className='h2 mx-5'>Good deals & Offers</h2>
      <h4 className='medium-3 capitalize font-normal mx-5'>Your ultimate
        <span className='text-secondary'> Budget Fashion</span> Boutique</h4>
      <Link
        to={'/'}
        className='text-tertiary bg-white pl-6 rounded-full flexBetween gap-x-2 medium-16 w-44 mt-10 mx-5'
        >Go to shop
        <FaArrowRightLong className='text-xl bg-secondary text-primary rounded-full h-12 w-12 p-4
        hover:-rotate-45 transition-all duration-500 border-dashed border-white '/>
      </Link>
    </div>
   </section>
  )
}

export default Banner
