function Hero() {
  return (
    <section id="home">
      <div className="hero-pattern"></div>
      <div className="hero-grid"></div>
      <div className="hero-aurora-layer" aria-hidden="true"></div>
      <div className="hero-shimmer-layer" aria-hidden="true"></div>
      <div className="hero-content">
        <div>
          <div className="hero-badge">ISO 9001:2015 Certified Company</div>
          <h1 className="hero-title">
            Building Dreams,
            <br />
            <span>Securing Futures</span>
          </h1>
          <p className="hero-tagline">"Crafting Infrastructure, Enriching Lives"</p>
          <p className="hero-desc">
            Mayura Groups Limited offers comprehensive housing development, savings schemes, loans, and insurance services - empowering families across Coimbatore to build, save, and thrive.
          </p>
          <div className="hero-btns">
            <a href="/#services" className="btn-primary">
              Explore Our Services
            </a>
            <a href="/#careers" className="btn-outline">
              Join Our Team
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="service-orbit" aria-hidden="true">
              <svg className="orbit-links" viewBox="0 0 180 180" focusable="false">
                <polygon points="90,12 154,58 129,138 51,138 26,58" />
              </svg>
              <span className="orbit-node orbit-home" data-label="Housing">🏠</span>
              <span className="orbit-node orbit-savings" data-label="Savings">💰</span>
              <span className="orbit-node orbit-loans" data-label="Loans">🏦</span>
              <span className="orbit-node orbit-health" data-label="Health">🏥</span>
              <span className="orbit-node orbit-life" data-label="Insurance">🛡️</span>
            </div>
            <img src="/mayura-logo.png" alt="Mayura Groups Limited Logo" className="hero-logo-img" />
            <div className="hero-company-name">MAYURA</div>
            <div className="hero-company-sub">Groups Limited</div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">5</div>
                <div className="hero-stat-label">Services Offered</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">2</div>
                <div className="hero-stat-label">Branch Locations</div>
              </div>
            </div>
            <div className="iso-badge-hero">✓ Quality Management Systems Compliant</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
