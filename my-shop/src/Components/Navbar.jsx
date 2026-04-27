import { useEffect, useState } from 'react'

function Navbar({ searchTerm, setSearchTerm, cartCount, onCartClick }) {
  const [user, setUser] = useState(null)

 useEffect(() => {
  const stored = localStorage.getItem('user')
  if (stored) {
    setUser(JSON.parse(stored))
  }
}, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    window.location.href = '/'
  }

  const goToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav>
      <div className="nav-logo">
        NOIR<span>.</span>
      </div>

      <ul className="nav-links">
        <li>
          <button className="nav-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
        </li>
        <li>
          <button className="nav-btn" onClick={() => goToSection('products')}>Shop</button>
        </li>
        <li>
          <button className="nav-btn" onClick={() => goToSection('categories')}>Categories</button>
        </li>
        <li>
          <button className="nav-btn" onClick={() => goToSection('products')}>About</button>
        </li>
      </ul>

      <div className="nav-search">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            goToSection('products')
          }}
          className="search-input"
        />
        {searchTerm && (
          <button className="search-clear" onClick={() => setSearchTerm('')}>✕</button>
        )}
      </div>

      <div className="nav-right">
        {user ? (
          <>
            <span className="nav-user">👤 {user.name}</span>
            <button className="nav-logout" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <a href="/login" className="nav-login">Sign In</a>
        )}
        <button className="cart-btn" onClick={onCartClick}>
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  )
}

export default Navbar