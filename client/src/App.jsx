import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Header,Footer } from './components'
import { Home,Categories, Products } from './pages'
import { mensbanner,womensbanner,kidsbanner } from './assets'

function App() {
  return (
    <div className="text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/men" element={<Categories category={"men"} banner={mensbanner}/>}/>
          <Route path="/women" element={<Categories category={"women"} banner={womensbanner}/>}/>
          <Route path="/kids" element={<Categories category={"kids"}  banner={kidsbanner}/>}/>
          <Route path="/products" element={<Products/>} >
              <Route path=":productId" element={<Products />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  )
}

export default App
