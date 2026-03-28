function Services() {
  return (
    <section id="services">
      <div className="section-inner">
        <div className="services-header">
          <div>
            <div className="section-tag">What We Offer</div>
            <h2 className="section-title">Our Services</h2>
          </div>
          <p className="services-intro">
            Five powerful services designed to support you at every stage of life.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card primary wide">
            <div>
              <div className="service-icon">🏗️</div>
              <h3 className="service-title">Housing Development</h3>
              <p className="service-desc">We help you turn your dream home into reality with structured housing solutions. From planning to ownership, every step is simplified and guided, affordable, reliable, and designed for long-term security.</p>
              <span className="service-tag">Construction &amp; Ownership</span>
            </div>
            <div className="service-includes-card">
              <p className="service-includes-title">What's included:</p>
              <ul className="service-includes-list">
                <li className="service-includes-item"><span className="service-includes-check">✓</span> Home planning consultation</li>
                <li className="service-includes-item"><span className="service-includes-check">✓</span> Site selection assistance</li>
                <li className="service-includes-item"><span className="service-includes-check">✓</span> Construction coordination</li>
                <li className="service-includes-item"><span className="service-includes-check">✓</span> Ownership documentation support</li>
              </ul>
            </div>
          </div>

          <div className="service-card gold-card">
            <div className="service-icon">💰</div>
            <h3 className="service-title">Savings Schemes</h3>
            <p className="service-desc">Grow your wealth with disciplined and flexible savings plans. Choose recurring or fixed options tailored to your goals. Safe, consistent, and designed for long-term financial stability.</p>
            <span className="service-tag">Disciplined Savings</span>
          </div>

          <div className="service-card green-card">
            <div className="service-icon">🏦</div>
            <h3 className="service-title">Loan Facilities</h3>
            <p className="service-desc">Access financial support when you need it most. Housing and personal loans with smooth processing, transparent terms, and customer-friendly repayment options to empower your goals.</p>
            <span className="service-tag">Financial Support</span>
          </div>

          <div className="service-card light-card">
            <div className="service-icon">🏥</div>
            <h3 className="service-title">Health Insurance</h3>
            <p className="service-desc">Protect your family from unexpected medical expenses with comprehensive health coverage. Includes hospitalisation support, treatment protection, and dependable claim assistance.</p>
            <span className="service-tag">Medical Protection</span>
          </div>

          <div className="service-card light-card">
            <div className="service-icon">🧍</div>
            <h3 className="service-title">Life Insurance</h3>
            <p className="service-desc">Secure your loved ones with reliable life coverage. Flexible plans including term and endowment options provide long-term financial protection through life's uncertainties.</p>
            <span className="service-tag">Family Security</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
