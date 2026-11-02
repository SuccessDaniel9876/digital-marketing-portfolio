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

      {/* The next sections will be added in later steps. */}
      <div className="next-section-placeholder" id="portfolio">
        <span>01 / PORTFOLIO</span>
        <p>Your selected work will be showcased here in Step 2.</p>
      </div>
    </main>
  );
}
