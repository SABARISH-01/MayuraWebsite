function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">MAYURA GROUPS LIMITED</div>
          <div className="footer-tagline">"Crafting Infrastructure, Enriching Lives"</div>
          <p className="footer-desc">A trusted multi-service company offering Housing Development, Savings, Loans, and Insurance services from the heart of Coimbatore.</p>
          <div className="footer-iso">✓ &nbsp; ISO 9001:2015 Certified &nbsp;|&nbsp; Cert No: EU-02-D-5214</div>
        </div>

        <div>
          <div className="footer-col-title">Our Services</div>
          <ul className="footer-links">
            <li><a href="/#services">🏗️ Housing Development</a></li>
            <li><a href="/#services">💰 Savings Schemes</a></li>
            <li><a href="/#services">🏦 Loan Facilities</a></li>
            <li><a href="/#services">🏥 Health Insurance</a></li>
            <li><a href="/#services">🧍 Life Insurance</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#why">Why Choose Us</a></li>
            <li><a href="/#careers">Careers</a></li>
            <li><a href="/#contact">Contact Us</a></li>
          </ul>

          <div className="social-links">
            <a className="social-link" href="#" aria-label="Facebook">Facebook</a>
            <a className="social-link" href="#" aria-label="Instagram">Instagram</a>
            <a className="social-link" href="#" aria-label="YouTube">YouTube</a>
            <a className="social-link" href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>

          <div className="footer-address-block">
            <div className="footer-col-title">Address</div>
            <p className="footer-address-text">
              HQ: 7/25_1 Floor, NSN Palayam,
              <br />
              Mettupalayam Road, Coimbatore - 641031.
              <br />
              Branch: Yedakadu, The Nilgiris,
              <br />
              Tamil Nadu, India.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Mayura Groups Limited. All rights reserved.</span>
        <span className="footer-cert-no">Company No: 15665772</span>
      </div>
    </footer>
  )
}

export default Footer
