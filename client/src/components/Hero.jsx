import { MdOutlineLocalOffer } from "react-icons/md"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className='max-padd-container mx-5'>
      <div className='max-padd-container bg-hero bg-center bg-no-repeat bg-cover h-screen w-full rounded-3xl'>
        <div className="relative top-32 xs:top-80">
          <h2 className='h2 capitalize max-w-[40rem]'> Elevate Your Wardrobe with Unique <span className='text-secondary'>Wears</span></h2>
          <p className='text-gray-50 regular-16 my-10 max-2-[33rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste porro ducimus voluptatibus, voluptas quas sint hic. Non, quia totam! Dolorum saepe fuga vero tempora,
             eos enim eum tempore perspiciatis aperiam aliquam impedit laborum quidem dolore quis esse veritatis provident voluptatem asperiores facere temporibus animi hic! Nesciunt fugiat pariatur quidem. Esse!</p>
          <div className='max-xs:flex-col flex gap-5'>
            <Link to={'/'} className='btn-dark rounded-full flexCenter'>Shop Now</Link>
            <Link to={'/'} className='text-tertiary bg-white pl-6 rounded-full flexCenter gap-x-8 medium-16 group'>Offers
            <MdOutlineLocalOffer className='text-xl bg-secondary text-primary rounded-full h-12 w-12 p-2 rotate-90 border border-dashed border-white group-hover:rotate-45 transition-all duration-500'/></Link>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero
