const categories = [
  {
    id: 1,
    name: "Fashion",
    count: "320+ items",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80"
  },
  {
    id: 2,
    name: "Electronics",
    count: "180+ items",
    img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80"
  },
  {
    id: 3,
    name: "Footwear",
    count: "210+ items",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
  },
  {
    id: 4,
    name: "Accessories",
    count: "150+ items",
    img: "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=800&q=80"
  },
]

function Categories() {
  return (
    <section className="categories" id="categories">

      <div className="section-header">
        <div>
          <p className="section-tag">What are you looking for</p>
          <h2 className="section-title">Shop by <em>Category</em></h2>
        </div>
        <a href="#" className="link-arrow">View All →</a>
      </div>

      <div className="categories-grid">
        {categories.map((cat) => (
          <div className="cat-card" key={cat.id}>
            <img src={cat.img} alt={cat.name} />
            <div className="cat-label">
              <h3 className="cat-name">{cat.name}</h3>
              <p className="cat-count">{cat.count}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Categories