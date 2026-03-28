function Contact() {
  return (
    <section id="contact">
      <div className="section-inner">
        <div className="section-tag">Get In Touch</div>
        <h2 className="section-title">We'd Love to Hear From You</h2>
        <p className="section-desc">Have questions about our services? Reach out and our team will respond promptly.</p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-block">
              <div className="contact-icon">📍</div>
              <div>
                <div className="contact-label">Branches</div>
                <div className="contact-value">HQ: 7/25_1 Floor, NSN Palayam, Mettupalayam Road, Coimbatore - 641031, Tamil Nadu<br />Branch: Yedakadu, The Nilgiris, Tamil Nadu</div>
              </div>
            </div>

            <div className="contact-block">
              <div className="contact-icon">📞</div>
              <div>
                <div className="contact-label">Phone / WhatsApp</div>
                <div className="contact-value"><a href="tel:+919344210338">+91 93442 10338</a><br /><a href="https://wa.me/919344210338" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></div>
              </div>
            </div>

            <div className="contact-block">
              <div className="contact-icon">✉️</div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value"><a href="mailto:mayura1141110@gmail.com">mayura1141110@gmail.com</a></div>
              </div>
            </div>

            <div className="contact-block">
              <div className="contact-icon">🕐</div>
              <div>
                <div className="contact-label">Working Hours</div>
                <div className="contact-value">Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: By Appointment</div>
              </div>
            </div>

            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps?output=embed&q=11.1131598,76.9362063&z=17&hl=en"
                title="Mayura Groups Office Location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-title">Send Us an Enquiry</div>
            <form id="contactForm" action="https://formspree.io/f/mqegeyga" method="POST">
              <div className="form-group">
                <label>Your Name *</label>
                <input type="text" name="name" placeholder="Full name" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Mobile *</label>
                  <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" pattern="^((\\+91)?[ -]?)?[6-9][0-9]{9}$" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className="form-group">
                <label>Service Interested In</label>
                <select name="service" title="Service Interested In">
                  <option value="">Select a service</option>
                  <option>Housing Development</option>
                  <option>Savings Schemes</option>
                  <option>Loan Facilities</option>
                  <option>Health Insurance</option>
                  <option>Life Insurance</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label>Your Message *</label>
                <textarea name="message" placeholder="Tell us how we can help you..." required className="contact-form-textarea"></textarea>
              </div>

              <button type="submit" className="btn-submit contact-form-submit">
                Send Enquiry -&gt;
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
