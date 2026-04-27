function CartDrawer({ cartItems, isOpen, onClose, removeFromCart }) {

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />

      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>

        <div className="cart-header">
          <h2 className="cart-title">Your Cart ({cartItems.length})</h2>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p className="cart-empty-icon">🛍️</p>
              <p className="cart-empty-text">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <p className="cart-item-brand">{item.brand}</p>
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">${item.price} x {item.qty}</p>
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>✕</button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span className="cart-total-price">${total}</span>
            </div>
            <button
              className="btn-primary"
              style={{width:'100%',padding:'1.1rem'}}
              onClick={() => {
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
                window.open('/checkout', '_self')
              }}
            >
              Checkout
            </button>
          </div>
        )}

      </div>
    </>
  )
}

export default CartDrawer