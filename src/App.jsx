import Navbar from "./components/Navbar"
import Store from './pages/Store.jsx'
import CartProvider from "./store/CartProvider.jsx"


function App() {

  return (
    <CartProvider>
      <Navbar />
      <Store />
    </CartProvider>
  )
}

export default App
