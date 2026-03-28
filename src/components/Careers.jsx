function Careers() {
  return (
    <section id="careers">
      <div className="section-inner">
        <div className="section-tag">Join Our Team</div>
        <h2 className="section-title">Grow With Mayura</h2>
        <p className="section-desc">We are always looking for motivated individuals who share our passion for making a difference in people's lives.</p>

        <div className="careers-grid">
          <div className="careers-info">
            <p className="careers-description">
              At Mayura Groups Limited, we believe our people are our greatest strength. Whether you come from a sales, finance, or operations background - there is a place for you here.
            </p>
            <div className="roles-list" aria-label="Open roles">
              <div className="role-chip">Marketing Executive</div>
              <div className="role-chip">Field Agent</div>
              <div className="role-chip">Loan Officer</div>
              <div className="role-chip">Insurance Advisor</div>
              <div className="role-chip">Customer Relationship Manager</div>
              <div className="role-chip">Operations Staff</div>
            </div>

            <div className="careers-perks">
              <div className="perk"><div className="perk-icon">📈</div><div className="perk-text">Performance-linked incentives &amp; growth opportunities</div></div>
              <div className="perk"><div className="perk-icon">🎓</div><div className="perk-text">In-house training and skill development programs</div></div>
              <div className="perk"><div className="perk-icon">🤲</div><div className="perk-text">Supportive team culture rooted in community values</div></div>
              <div className="perk"><div className="perk-icon">📍</div><div className="perk-text">Local opportunities across Coimbatore region</div></div>
              <div className="perk"><div className="perk-icon">🏢</div><div className="perk-text">Work for an ISO certified, growing organization</div></div>
            </div>
          </div>

          <div className="careers-form">
            <div className="form-title">Apply Now</div>
            <p className="form-subtitle">Fill in your details and our team will get back to you shortly.</p>
            <form id="careerForm" action="https://formspree.io/f/xnjojggk" method="POST">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label>Mobile Number *</label>
                  <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" pattern="^((\\+91)?[ -]?)?[6-9][0-9]{9}$" required />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" name="email" placeholder="your@email.com" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Position Applying For *</label>
                  <select name="position" title="Position Applying For" required>
                    <option value="">Select a role</option>
                    <option>Marketing Executive</option>
                    <option>Field Agent</option>
                    <option>Loan Officer</option>
                    <option>Insurance Advisor</option>
                    <option>Customer Relationship Manager</option>
                    <option>Operations Staff</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Qualification</label>
                  <select name="qualification" title="Qualification">
                    <option value="">Select qualification</option>
                    <option>10th Pass</option>
                    <option>12th Pass</option>
                    <option>Diploma</option>
                    <option>Graduate (BA/BSc/BCom)</option>
                    <option>Postgraduate</option>
                    <option>Professional Degree</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Experience (Years)</label>
                  <select name="experience" title="Experience">
                    <option value="">Select</option>
                    <option>Fresher (0 years)</option>
                    <option>1 - 2 years</option>
                    <option>3 - 5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Current Location</label>
                  <input type="text" name="location" placeholder="City, District" />
                </div>
              </div>

              <div className="form-group">
                <label>Why do you want to join Mayura?</label>
                <textarea name="message" placeholder="Tell us a bit about yourself and why you'd like to join our team..."></textarea>
              </div>

              <button type="submit" className="btn-submit">Submit Application -&gt;</button>
            </form>

            <p className="form-note">✓ Submissions sent directly to our inbox. We will respond within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Careers
