import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Header,Navbar,Footer } from './components'
import { Home,Categories, Products } from './pages'

function App() {
  return (
    <div className="text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mens" element={<Categories category={"men"}/>}/>
          <Route path="/women" element={<Categories category={"women"}/>}/>
          <Route path="/kids" element={<Categories category={"kids"}/>}/>
          <Route path="/products" element={<Products/>}>
              <Route path=":productId" element={<Products />}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  )
}

export default App
