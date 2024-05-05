import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Store from './pages/Store.jsx'
import CartProvider from "./store/CartProvider.jsx"


function App() {

  return (
    <CartProvider>
      <Navbar />
      <Outlet />
    </CartProvider>
  )
}

export default App
