const navItems = [
  ["Home", "#home"],
  ["Portfolio", "#portfolio"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

export default function Home() {
  return (
    <main id="home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Success Daniel home">
          <span className="brand-mark">SD.</span>
          <span className="brand-copy">
            <strong>Success Daniel</strong>
            <small>DESIGN · DIGITAL · STRATEGY</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          LET&apos;S WORK TOGETHER <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> WEB DESIGNER & DIGITAL CREATIVE</p>
          <h1 id="hero-title">
            Your brand<br />
            deserves to<br />
            <em>stand out.</em>
          </h1>
          <p className="hero-description">
            I help businesses make a powerful first impression with thoughtful
            website design, engaging social media, and creative digital solutions
            that turn attention into opportunity.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#portfolio">EXPLORE MY WORK <span>↗</span></a>
            <a className="text-link" href="#contact">Let&apos;s talk <span>↗</span></a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>Creative ideas. Clear strategy. Digital impact.</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            {/* Temporary portrait placeholder — replace with your approved portrait image. */}
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85"
              alt="Temporary portrait placeholder"
            />
            <div className="portrait-label">
              <span>SUCCESS DANIEL · DIGITAL CREATIVE</span>
              <span className="availability-dot" />
            </div>
          </div>
          <div className="hero-side-note">WEBSITE DESIGN · SOCIAL MEDIA · DIGITAL SOLUTIONS</div>
        </div>
      </section>

      <div className="hero-bottomline">
        <span>WEBSITE DESIGN</span>
        <span>SOCIAL MEDIA MANAGEMENT</span>
        <span>CREATIVE DIGITAL SOLUTIONS</span>
        <span>DESIGNED TO MAKE AN IMPACT</span>
      </div>

      <section className="portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-heading">
          <div>
            <p className="eyebrow"><span /> A LOOK AT WHAT I DO</p>
            <h2 id="portfolio-title">Selected work<span>.</span></h2>
          </div>
          <p className="portfolio-intro">
            Digital experiences designed to help brands look their best, tell their story,
            and connect with the right audience.
          </p>
        </div>

        <div className="portfolio-grid">
          <article className="portfolio-card portfolio-card-featured">
            <a className="portfolio-art portfolio-art-web" href="#contact" aria-label="Discuss a website design project">
              <div className="browser-frame">
                <div className="browser-top"><span /><span /><span /><small>YOUR BRAND / WEBSITE</small></div>
                <div className="browser-content">
                  <span className="art-kicker">A DIGITAL FIRST IMPRESSION</span>
                  <strong>Make your<br />brand matter.</strong>
                  <span className="art-button">DISCOVER MORE ↗</span>
                  <div className="art-shape" />
                </div>
              </div>
              <span className="portfolio-art-index">01 — WEB DESIGN</span>
            </a>
            <div className="portfolio-card-info">
              <div><h3>Website Design</h3><p>Wix websites · Landing pages · Portfolio sites</p></div>
              <a href="#contact" aria-label="Discuss website design">↗</a>
            </div>
          </article>

          <article className="portfolio-card">
            <a className="portfolio-art portfolio-art-social" href="#contact" aria-label="Discuss a social media project">
              <div className="social-stack">
                <div className="social-tile social-tile-one"><span>YOUR BRAND</span><strong>Show up<br />with purpose.</strong><small>CONTENT · COMMUNITY · GROWTH</small></div>
                <div className="social-tile social-tile-two"><span>01 / SOCIAL</span><strong>Make<br />connections.</strong></div>
              </div>
              <span className="portfolio-art-index">02 — SOCIAL MEDIA</span>
            </a>
            <div className="portfolio-card-info">
              <div><h3>Social Media Creative</h3><p>Content planning · Creative direction</p></div>
              <a href="#contact" aria-label="Discuss social media creative">↗</a>
            </div>
          </article>

          <article className="portfolio-card">
            <a className="portfolio-art portfolio-art-brand" href="#contact" aria-label="Discuss a brand landing page">
              <div className="brand-poster"><span>BRAND / 03</span><strong>Good ideas<br /><em>deserve</em><br />great design.</strong><small>CREATIVE DIGITAL EXPERIENCE</small><div className="brand-poster-circle" /></div>
              <span className="portfolio-art-index">03 — DIGITAL BRAND</span>
            </a>
            <div className="portfolio-card-info">
              <div><h3>Digital Brand Presence</h3><p>Brand storytelling · Visual consistency</p></div>
              <a href="#contact" aria-label="Discuss digital brand presence">↗</a>
            </div>
          </article>
        </div>
        <p className="portfolio-disclaimer">These are illustrative project previews for the portfolio layout. We’ll replace them with your actual projects, screenshots, and links.</p>
      </section>
    </main>
  );
}
