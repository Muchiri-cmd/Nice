import { Link } from "react-router-dom"

import { MdNotifications } from 'react-icons/md';

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
        >Offers
          <div className='relative inline-block'>
          <MdNotifications
            className='text-xl bg-secondary text-primary rounded-full h-12 w-12 p-2 border border-dashed border-white animate-pulse'
          />
          <span className='absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full animate-ping'></span>
        </div>
      </Link>
    </div>
   </section>
  )
}

export default Banner
