import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import CartProvider from "./store/CartProvider.jsx"
import { useContext } from "react"
import { AuthContext } from "./store/auth-context.js"
import Form from "./components/Form.jsx"

function App() {
  const {isLoggedIn} = useContext(AuthContext)
  return (
    <CartProvider>
      <Navbar />
      {!isLoggedIn && <Form />}
      {isLoggedIn && <Outlet />}
    </CartProvider>
  )
}

export default App
