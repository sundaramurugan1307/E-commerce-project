function Hero() {
  return (
    <section className="hero">

      {/* LEFT SIDE — Text Content */}
      <div className="hero-left">

        <p className="hero-tag">New Collection 2025</p>

        <h1 className="hero-title">
          Shop Without <br />
          <em>Limits.</em>
        </h1>

        <p className="hero-sub">
          Premium products across every category —
          curated for those who refuse to settle.
        </p>

        <div className="hero-buttons">
         <button
  className="btn-primary"
  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
>
  Shop Now
</button>
          <button className="btn-ghost">View Lookbook →</button>
        </div>

        {/* STATS ROW */}
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">12K+</span>
            <p className="stat-label">Products</p>
          </div>
          <div className="stat">
            <span className="stat-num">98%</span>
            <p className="stat-label">Happy Customers</p>
          </div>
          <div className="stat">
            <span className="stat-num">50+</span>
            <p className="stat-label">Brands</p>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE — Image */}
      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
          alt="hero"
        />
        <div className="hero-right-overlay" />
      </div>

    </section>
  )
}

export default Hero