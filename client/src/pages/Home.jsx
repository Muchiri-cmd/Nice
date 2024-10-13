import Hero from '../components/Hero'
import { Collections,Banner, NewArrivals, } from '../components' //Featured

const Home = () => {
  return (
    <div>
      <Hero/>
      <Collections/>
      {/* <Featured/> */}
      <Banner/>
      <NewArrivals/>
    </div>
  )
}

export default Home
