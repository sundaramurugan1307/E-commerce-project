const footerLinks = {
  Shop: ["New Arrivals", "Best Sellers", "Sale", "All Products"],
  Help: ["FAQs", "Shipping Info", "Returns", "Track Order"],
  Company: ["About Us", "Careers", "Press", "Contact"],
}

function Footer() {
  return (
    <footer>

      {/* TOP SECTION */}
      <div className="footer-top">

        {/* BRAND COLUMN */}
        <div className="footer-brand">
          <div className="footer-logo">NOIR<span>.</span></div>
          <p className="footer-desc">
            Premium products across every category —
            curated for those who refuse to settle.
          </p>
          <div className="footer-socials">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Pinterest</a>
          </div>
        </div>

        {/* LINK COLUMNS — looping through the object */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div className="footer-col" key={title}>
            <h4 className="footer-col-title">{title}</h4>
            <ul className="footer-links">
              {links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p className="footer-copy">© 2025 NOIR. All rights reserved.</p>
        <p className="footer-copy">Made with 🖤 using React + Express</p>
      </div>

    </footer>
  )
}

export default Footer