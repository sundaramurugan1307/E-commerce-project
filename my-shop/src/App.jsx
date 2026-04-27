import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Checkout from './Pages/Checkout'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id)
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <Routes>

      {/* HOME PAGE */}
      <Route path="/" element={
        <div>
          <Navbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            cartCount={cartItems.reduce((sum, item) => sum + item.qty, 0)}
            onCartClick={() => setCartOpen(true)}
          />
          <Hero />
          <Categories />
          <Products searchTerm={searchTerm} addToCart={addToCart} />
          <Footer />
          <CartDrawer
            cartItems={cartItems}
            isOpen={cartOpen}
            onClose={() => setCartOpen(false)}
            removeFromCart={removeFromCart}
          />
        </div>
      } />

      {/* LOGIN PAGE */}
      <Route path="/login" element={<Login />} />

      {/* REGISTER PAGE */}
      <Route path="/register" element={<Register />} />

      {/* CHECKOUT PAGE */}
      <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />

    </Routes>
  )
}

export default App