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
          <p className="eyebrow"><span /> INDEPENDENT DIGITAL CREATIVE</p>
          <h1 id="hero-title">
            Beautiful websites.<br />
            Built to make businesses<br />
            <em>Stand Out.</em>
          </h1>
          <p className="hero-description">
            I help ambitious businesses build a stronger digital presence through
            thoughtful website design, social media, and creative digital solutions.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#portfolio">EXPLORE MY WORK <span>↗</span></a>
            <a className="text-link" href="#contact">Start a project <span>↗</span></a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>Thoughtful design. Meaningful results.</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            {/* Replace this image with your own portrait once you upload it. */}
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85"
              alt="Portrait placeholder for Success Daniel"
            />
            <div className="portrait-label">
              <span>AVAILABLE FOR SELECT PROJECTS</span>
              <span className="availability-dot" />
            </div>
          </div>
          <div className="hero-side-note">DESIGNING WITH PURPOSE · LAGOS, NIGERIA</div>
        </div>
      </section>

      <div className="hero-bottomline">
        <span>WEB DESIGN & DEVELOPMENT</span>
        <span>SOCIAL MEDIA MANAGEMENT</span>
        <span>DIGITAL CREATIVE</span>
        <span>BUILT FOR BUSINESS</span>
      </div>

      {/* The next sections will be added in later steps. */}
      <div className="next-section-placeholder" id="portfolio">
        <span>01 / PORTFOLIO</span>
        <p>Your selected work will be showcased here in Step 2.</p>
      </div>
    </main>
  );
}
