const navItems = [
  ["Home", "#home"],
  ["Portfolio", "#portfolio"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Process", "#process"],
  ["Testimonials", "#testimonials"],
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
          <h1 id="hero-title">Your brand<br />deserves to<br /><em>stand out.</em></h1>
          <p className="hero-description">
            I help businesses make a powerful first impression with thoughtful
            website design, engaging social media, and creative digital solutions
            that turn attention into opportunity.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#portfolio">EXPLORE MY WORK <span>↗</span></a>
            <a className="text-link" href="#contact">Let&apos;s talk <span>↗</span></a>
          </div>
          <div className="hero-note"><span className="note-line" /><span>Creative ideas. Clear strategy. Digital impact.</span></div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            {/* Temporary stock portrait: replace with Success Daniel's approved portrait before launch. */}
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85"
              alt="Temporary stock portrait placeholder; not Success Daniel"
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
        <span>WEBSITE DESIGN</span><span>SOCIAL MEDIA MANAGEMENT</span>
        <span>CREATIVE DIGITAL SOLUTIONS</span><span>DESIGNED TO MAKE AN IMPACT</span>
      </div>

      <section className="portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-heading">
          <div><p className="eyebrow"><span /> A LOOK AT WHAT I DO</p><h2 id="portfolio-title">Selected work<span>.</span></h2></div>
          <p className="portfolio-intro">Digital experiences designed to help brands look their best, tell their story, and connect with the right audience.</p>
        </div>
        <div className="portfolio-grid">
          <article className="portfolio-card portfolio-card-featured">
            <a className="portfolio-art portfolio-art-web" href="#contact" aria-label="Discuss a website design project">
              <div className="browser-frame">
                <div className="browser-top"><span /><span /><span /><small>YOUR BRAND / WEBSITE</small></div>
                <div className="browser-content"><span className="art-kicker">A DIGITAL FIRST IMPRESSION</span><strong>Make your<br />brand matter.</strong><span className="art-button">DISCOVER MORE ↗</span><div className="art-shape" /></div>
              </div><span className="portfolio-art-index">01 — WEB DESIGN · CONCEPT PREVIEW</span>
            </a>
            <div className="portfolio-card-info"><div><h3>Website Design</h3><p>Wix websites · Landing pages · Portfolio sites</p></div><a href="#contact" aria-label="Discuss website design">↗</a></div>
          </article>
          <article className="portfolio-card">
            <a className="portfolio-art portfolio-art-social" href="#contact" aria-label="Discuss a social media project">
              <div className="social-stack">
                <div className="social-tile social-tile-one"><span>YOUR BRAND</span><strong>Show up<br />with purpose.</strong><small>CONTENT · COMMUNITY · GROWTH</small></div>
                <div className="social-tile social-tile-two"><span>01 / SOCIAL</span><strong>Make<br />connections.</strong></div>
              </div><span className="portfolio-art-index">02 — SOCIAL MEDIA · CONCEPT PREVIEW</span>
            </a>
            <div className="portfolio-card-info"><div><h3>Social Media Creative</h3><p>Content planning · Creative direction</p></div><a href="#contact" aria-label="Discuss social media creative">↗</a></div>
          </article>
          <article className="portfolio-card">
            <a className="portfolio-art portfolio-art-brand" href="#contact" aria-label="Discuss a brand landing page">
              <div className="brand-poster"><span>BRAND / 03</span><strong>Good ideas<br /><em>deserve</em><br />great design.</strong><small>CREATIVE DIGITAL EXPERIENCE</small><div className="brand-poster-circle" /></div><span className="portfolio-art-index">03 — DIGITAL BRAND · CONCEPT PREVIEW</span>
            </a>
            <div className="portfolio-card-info"><div><h3>Digital Brand Presence</h3><p>Brand storytelling · Visual consistency</p></div><a href="#contact" aria-label="Discuss digital brand presence">↗</a></div>
          </article>
        </div>
        <p className="portfolio-disclaimer">These are concept previews, not completed client projects. We’ll replace them with your actual work, screenshots, and project links when you share those materials.</p>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="services-heading">
          <div>
            <p className="eyebrow"><span /> SERVICES</p>
            <h2 id="services-title">Wix websites, designed<br />around the business.</h2>
          </div>
          <p className="services-heading-note">A considered digital presence, built around your goals and the people you want to reach.</p>
        </div>
        <div className="services-list">
          <details className="service-row">
            <summary><span className="service-row-title">Wix Business Website Design</span><span className="service-plus" aria-hidden="true">+</span></summary>
            <p>A custom Wix website that presents your business clearly, builds trust, and helps visitors take the next step.</p>
          </details>
          <details className="service-row">
            <summary><span className="service-row-title">Wix Ecommerce Website Design</span><span className="service-plus" aria-hidden="true">+</span></summary>
            <p>An online store experience with thoughtful product presentation and a straightforward shopping journey.</p>
          </details>
          <details className="service-row">
            <summary><span className="service-row-title">Wix Booking Website Design</span><span className="service-plus" aria-hidden="true">+</span></summary>
            <p>A service-focused website that makes it easy for customers to explore your offerings and book appointments.</p>
          </details>
          <details className="service-row">
            <summary><span className="service-row-title">Wix Landing Page Design</span><span className="service-plus" aria-hidden="true">+</span></summary>
            <p>A focused landing page designed around one offer, campaign, or conversion goal.</p>
          </details>
          <details className="service-row">
            <summary><span className="service-row-title">Wix Website Redesign</span><span className="service-plus" aria-hidden="true">+</span></summary>
            <p>A refreshed website with a clearer structure, more cohesive visuals, and a better user experience.</p>
          </details>
          <details className="service-row">
            <summary><span className="service-row-title">Wix Website Optimisation</span><span className="service-plus" aria-hidden="true">+</span></summary>
            <p>Practical refinements to layout, content, responsiveness, and user journeys to improve the overall site experience.</p>
          </details>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-aside">
          <p className="eyebrow"><span /> A LITTLE ABOUT ME</p>
          <p className="about-aside-copy">Thoughtful design.<br />Clear communication.<br />Meaningful digital experiences.</p>
          <span className="about-aside-index">SUCCESS DANIEL · ABOUT</span>
        </div>
        <div className="about-main">
          <h2 id="about-title">Design with intent,<br /><em>not decoration.</em></h2>
          <p className="about-lead">I’m Success Daniel, a website designer and digital creative. I help businesses build a confident online presence through considered website design and purposeful digital communication.</p>
          <p className="about-detail">My approach is simple: understand the goal, make the message clear, and create an experience that feels right for the brand and its audience.</p>
          <a className="about-link" href="#contact">LET’S TALK ABOUT YOUR PROJECT <span>↗</span></a>
        </div>
      </section>

      <section className="process-section" id="process" aria-labelledby="process-title">
        <div className="process-heading">
          <p className="eyebrow"><span /> HOW WE WORK</p>
          <h2 id="process-title">Good work starts<br />with a <em>clear process.</em></h2>
          <p>From the first conversation to the final handoff, every step has a purpose.</p>
        </div>
        <div className="process-steps">
          <article className="process-step"><span className="process-number">01</span><div><h3>Discover</h3><p>We talk through your business, audience, goals, and the result you want to achieve.</p></div><span className="process-arrow">↗</span></article>
          <article className="process-step"><span className="process-number">02</span><div><h3>Plan & create</h3><p>I shape the direction, organize the content, and create the agreed website or digital materials.</p></div><span className="process-arrow">↗</span></article>
          <article className="process-step"><span className="process-number">03</span><div><h3>Review & deliver</h3><p>We review the work, make the agreed refinements, and prepare everything for launch or handoff.</p></div><span className="process-arrow">↗</span></article>
        </div>
      </section>

      <section className="simple-section simple-section-muted" id="testimonials" aria-labelledby="testimonials-title">
        <p className="eyebrow"><span /> CLIENT FEEDBACK</p><h2 id="testimonials-title">Kind words<span>.</span></h2>
        <p className="simple-lead">Real client testimonials will be featured here once you provide the approved feedback and client names.</p>
        <p className="section-note">No testimonials or client endorsements have been invented.</p>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow"><span /> HAVE A PROJECT IN MIND?</p>
        <h2 id="contact-title">Let’s make<br /><em>something great.</em></h2>
        <p>Have a project or collaboration in mind? Choose your preferred way to get in touch.</p>
        <div className="contact-methods" aria-label="Contact methods">
          <div className="contact-method"><span className="contact-method-number">01</span><div><strong>WhatsApp</strong><small>WhatsApp number to be added</small></div><span className="contact-method-action">DETAILS SOON</span></div>
          <div className="contact-method"><span className="contact-method-number">02</span><div><strong>Email</strong><small>Email address to be added</small></div><span className="contact-method-action">DETAILS SOON</span></div>
          <div className="contact-method"><span className="contact-method-number">03</span><div><strong>LINE</strong><small>LINE profile or link to be added</small></div><span className="contact-method-action">DETAILS SOON</span></div>
          <div className="contact-method"><span className="contact-method-number">04</span><div><strong>Instagram</strong><small>Instagram profile to be added</small></div><span className="contact-method-action">DETAILS SOON</span></div>
          <div className="contact-method"><span className="contact-method-number">05</span><div><strong>Call Phone</strong><small>Phone number to be added</small></div><span className="contact-method-action">DETAILS SOON</span></div>
        </div>
        <span className="contact-note">Contact links and numbers will be activated when you share your details.</span>
      </section>
      <footer className="site-footer">
        <a className="brand" href="#home"><span className="brand-mark">SD.</span><span className="brand-copy"><strong>Success Daniel</strong><small>DESIGN · DIGITAL · STRATEGY</small></span></a>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
