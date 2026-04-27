const products = [
  {
    id: 1,
    name: "Oversized Wool Coat",
    brand: "Maison",
    price: 299,
    oldPrice: 399,
    tag: "Sale",
    img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80"
  },
  {
    id: 2,
    name: "Premium Sneakers",
    brand: "Stride",
    price: 189,
    oldPrice: null,
    tag: "New",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"
  },
  {
    id: 3,
    name: "Wireless Headphones",
    brand: "SoundLab",
    price: 249,
    oldPrice: 320,
    tag: "Sale",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    brand: "Luxe",
    price: 159,
    oldPrice: null,
    tag: "New",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80"
  },
  {
    id: 5,
    name: "Slim Fit Trousers",
    brand: "Maison",
    price: 119,
    oldPrice: null,
    tag: null,
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80"
  },
  {
    id: 6,
    name: "Smart Watch Pro",
    brand: "TechWear",
    price: 399,
    oldPrice: 499,
    tag: "Sale",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
  },
  {
    id: 7,
    name: "Silk Evening Dress",
    brand: "Luxe",
    price: 229,
    oldPrice: null,
    tag: "New",
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80"
  },
  {
    id: 8,
    name: "Leather Chelsea Boots",
    brand: "Stride",
    price: 279,
    oldPrice: 340,
    tag: "Sale",
    img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80"
  },
]

function Products({ searchTerm, addToCart }) {

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
   <section className="products" id="products">

      <div className="section-header">
        <div>
          <p className="section-tag">Handpicked for you</p>
          <h2 className="section-title">Featured <em>Products</em></h2>
        </div>
        <a href="#" className="link-arrow">View All →</a>
      </div>

      {filtered.length === 0 && (
        <div className="no-results">
          <p>No products found for "<strong>{searchTerm}</strong>"</p>
        </div>
      )}

      <div className="products-grid">
        {filtered.map((product) => (
          <div className="product-card" key={product.id}>

            <div className="product-img-wrap">
              <img src={product.img} alt={product.name} />
              {product.tag && (
                <span className="product-badge">{product.tag}</span>
              )}
              <div className="product-actions">
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="product-info">
              <p className="product-brand">{product.brand}</p>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price-row">
                <span className="product-price">${product.price}</span>
                {product.oldPrice && (
                  <span className="product-price-old">${product.oldPrice}</span>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Products