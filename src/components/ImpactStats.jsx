function ImpactStats() {
  return (
    <section id="impact-stats">
      <div className="section-inner">
        <div className="impact-wrap">
          <div className="impact-copy">
            <div className="section-tag">Our Impact</div>
            <h2 className="section-title">Building Homes, Growing Community</h2>
            <p className="section-desc">
              Our progress is measured by real families supported and a community that keeps expanding with trust.
            </p>
          </div>

          <div className="impact-stats-grid" role="list" aria-label="Company impact statistics">
            <article className="impact-stat-card" role="listitem">
              <div className="impact-stat-number">500+</div>
              <div className="impact-stat-label">Housing Plans</div>
              <p className="impact-stat-note">Structured plans delivered for secure and affordable home ownership.</p>
            </article>

            <article className="impact-stat-card" role="listitem">
              <div className="impact-stat-number">200+</div>
              <div className="impact-stat-label">Members</div>
              <p className="impact-stat-note">Trusted members actively growing with Mayura's financial ecosystem.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactStats
