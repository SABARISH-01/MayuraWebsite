function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-img-block">
              <img
                src="/founder-photo.png"
                alt="Mayura Groups Limited"
                className="about-director-img"
              />
              <p className="about-quote">Crafting Infrastructure, Enriching Lives</p>
            </div>
            <div className="about-accent">
              ISO
              <br />
              9001
              <br />
              :2015
            </div>
          </div>

          <div className="about-text">
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title">A Multi-Industry Company Built on Trust &amp; Purpose</h2>
            <p className="section-desc about-desc-primary">
              Mayura Groups Limited is a dynamic and diversified conglomerate with a strong and growing presence across housing, finance, and insurance sectors. Driven by a commitment to innovation, customer satisfaction, and sustainable growth, we strive to create a meaningful, lasting impact in the lives of our clients, partners, and communities.
            </p>
            <p className="about-desc-secondary">
              As an ISO 9001:2015 certified organisation, our processes are rigorously assessed to ensure we consistently deliver on our promises with integrity, transparency, and a deeply human touch.
            </p>
            <div className="pillar about-founder-card">
              <div className="pillar-icon">👤</div>
              <div className="pillar-title">Founder &amp; Managing Director - Mr. Manikandan S</div>
              <div className="pillar-text">
                Diploma in Civil Engineering with over 10 years of hands-on experience in civil construction and infrastructure, complemented by 5 years in the insurance sector. His cross-domain expertise drives Mayura's integrated approach to housing and financial services.
              </div>
            </div>

            <div className="about-pillars">
              <div className="pillar">
                <div className="pillar-icon">🏠</div>
                <div className="pillar-title">Our Mission</div>
                <div className="pillar-text">To deliver exceptional value to customers, partners, and employees while upholding integrity, transparency, and professional excellence.</div>
              </div>
              <div className="pillar">
                <div className="pillar-icon">🎯</div>
                <div className="pillar-title">Our Vision</div>
                <div className="pillar-text">To grow as a trusted and innovative multi-sector company creating long-term social and financial impact.</div>
              </div>
              <div className="pillar">
                <div className="pillar-icon">💡</div>
                <div className="pillar-title">Innovation</div>
                <div className="pillar-text">We encourage creative thinking and progressive solutions across every aspect of our business.</div>
              </div>
              <div className="pillar">
                <div className="pillar-icon">🤝</div>
                <div className="pillar-title">Customer-Centricity</div>
                <div className="pillar-text">Our clients are our compass. We go beyond expectations to deliver experiences that truly matter.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
