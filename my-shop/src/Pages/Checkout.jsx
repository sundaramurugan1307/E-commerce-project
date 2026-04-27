import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Checkout({ cartItems: propCartItems = [] }) {
  const cartItems = propCartItems.length > 0
    ? propCartItems
    : JSON.parse(localStorage.getItem('cartItems') || '[]')

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  })

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleOrder = async (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      localStorage.removeItem('cartItems')
    }, 2000)
  }

  if (success) {
    return (
      <div className="checkout-success">
        <div className="success-box">
          <div className="success-icon">✅</div>
          <h2 className="success-title">Order Placed!</h2>
          <p className="success-text">
            Thank you for your order. We'll send a confirmation to {form.email}
          </p>
          <button
            className="btn-primary"
            onClick={() => navigate('/')}
            style={{ marginTop: '2rem', padding: '1rem 2.5rem' }}
          >
            Back to Shop
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">

      <div className="checkout-header">
        <a href="/" className="checkout-logo">NOIR<span>.</span></a>
        <h1 className="checkout-title">Checkout</h1>
      </div>

      <div className="checkout-grid">

        <div className="checkout-form-side">

          <div className="checkout-section">
            <h2 className="checkout-section-title">Delivery Details</h2>

            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label className="form-label">Address</label>
              <input className="form-input" name="address" placeholder="123 Street Name" value={form.address} onChange={handleChange} />
            </div>

            <div className="form-row-two">
              <div className="form-group">
                <label className="form-label">City</label>
                <input className="form-input" name="city" placeholder="Chennai" value={form.city} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">ZIP Code</label>
                <input className="form-input" name="zip" placeholder="600001" value={form.zip} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="checkout-section">
            <h2 className="checkout-section-title">Payment Details</h2>

            <div className="form-group">
              <label className="form-label">Card Number</label>
              <input className="form-input" name="cardNumber" placeholder="1234 5678 9012 3456" maxLength="19" value={form.cardNumber} onChange={handleChange} />
            </div>

            <div className="form-row-two">
              <div className="form-group">
                <label className="form-label">Expiry Date</label>
                <input className="form-input" name="expiry" placeholder="MM/YY" maxLength="5" value={form.expiry} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">CVV</label>
                <input className="form-input" name="cvv" placeholder="123" maxLength="3" value={form.cvv} onChange={handleChange} />
              </div>
            </div>
          </div>

          <button
            className="btn-primary"
            onClick={handleOrder}
            disabled={loading}
            style={{ width: '100%', padding: '1.1rem' }}
          >
            {loading ? 'Processing Payment...' : `Pay $${total}`}
          </button>

        </div>

        <div className="checkout-summary">
          <h2 className="checkout-section-title">Order Summary</h2>

          <div className="summary-items">
            {cartItems.length === 0 ? (
              <p style={{color: 'var(--muted)', fontSize: '0.8rem'}}>No items in cart</p>
            ) : (
              cartItems.map((item) => (
                <div className="summary-item" key={item.id}>
                  <img src={item.img} alt={item.name} className="summary-img" />
                  <div className="summary-info">
                    <p className="summary-name">{item.name}</p>
                    <p className="summary-brand">{item.brand}</p>
                    <p className="summary-qty">Qty: {item.qty}</p>
                  </div>
                  <p className="summary-price">${item.price * item.qty}</p>
                </div>
              ))
            )}
          </div>

          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="free">Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Checkout