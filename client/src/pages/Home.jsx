import Hero from '../components/Hero'
import { Collections,Featured,Banner, NewArrivals, } from '../components'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Collections/>
      <Featured/>
      <Banner/>
      <NewArrivals/>
    </div>
  )
}

export default Home
