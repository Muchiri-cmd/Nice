import Sidebar from "../components/Sidebar"
import { Routes, Route } from "react-router-dom"
import ContentManager from "../components/ContentManager"
import ProductsList from "../components/ProductsList"
import Login from "../components/Login"

const Dashboard = () => {
  return (
    <div className='lg:flex'>
      {localStorage.getItem('auth-token') 
        ? 
        <>
            <Sidebar /> 
            <Routes>
              <Route path="/add-product" element={<ContentManager />} />
              <Route path="/products-list" element={<ProductsList />} />
            </Routes>        
        </> 
        : <Login/> 
      }
    </div>
  )
}

export default Dashboard
