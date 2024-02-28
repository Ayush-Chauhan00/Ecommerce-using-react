import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Nopage from './pages/nopage/Nopage';
import Order from './pages/order/Order';
import Allproducts from './pages/allproducts/Allproducts';
import Dashboard from './pages/admin/dashboard/Dashboard';
import MyState from './context/data/MyState';
import Login from './pages/registeration/Login';
import Signup from './pages/registeration/Signup';
import Productinfo from './pages/productinfo/Productinfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (<MyState>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<Nopage />} />
        <Route path='/order' element={
          <ProtectedRouterForUser>
            <Order />
          </ProtectedRouterForUser>
        } />
        <Route path='/allproducts' element={<Allproducts />} />
        <Route path='/dashboard' element={
          <ProtectedRouteForAdmin>
            <Dashboard />
          </ProtectedRouteForAdmin>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/productinfo/:id' element={<Productinfo />} />
        <Route path='/addproduct' element={
          <ProtectedRouteForAdmin>
            <AddProduct />
          </ProtectedRouteForAdmin>} />
        <Route path='/updateproduct' element={
          <ProtectedRouteForAdmin>|
            <UpdateProduct />
          </ProtectedRouteForAdmin>
        } />
      </Routes>
    </Router>
    <ToastContainer />
  </MyState>


  )
}

export default App
//user
export const ProtectedRouterForUser = ({ children }) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children;
  }
  else {
    <Navigate to={'/login'} />
  }
}
//admin
export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if (admin.user.email == 'dikshachn1@gmail.com') {
    return children;
  }
  else {
    <Navigate to={'/login'} />
  }
}
