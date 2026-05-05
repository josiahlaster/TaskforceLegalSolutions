import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Video background placeholder - user will provide video later */}
      <div className="hero-video-wrapper">
        <div className="hero-video-overlay" />
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/Image20241230131559.png"
        >
          {/* Hero video will be placed here: /assets/hero.mp4 */}
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-content container">
        <div className="hero-text">
          <div className="hero-tagline">Task Force Legal Solutions</div>
          <h1 className="hero-heading">
            EMPOWERING LAW FIRMS<br />AND INDIVIDUALS
          </h1>
          <p className="hero-subheading">
            Customized Legal Support and Expert Document Services
          </p>
          <a href="#support" className="btn btn-gold hero-cta">
            OUR SERVICES
          </a>
        </div>
      </div>

      {/* Feature Cards Row */}
      <div className="hero-cards-row">
        <div className="container">
          <div className="hero-cards">
            <a href="#support" className="hero-card">
              <div className="hero-card-num">01</div>
              <img src="/assets/Box-1_Paralegal-Support.png" alt="Paralegal Support" />
              <div className="hero-card-text">
                <span className="hero-card-label">LEGAL SOLUTIONS</span>
                <h3>Paralegal Support</h3>
              </div>
            </a>
            <a href="#docs" className="hero-card">
              <div className="hero-card-num">02</div>
              <img src="/assets/Box-2_Document-Review.png" alt="Document Review" />
              <div className="hero-card-text">
                <span className="hero-card-label">100% ACCURACY</span>
                <h3>Document Review</h3>
              </div>
            </a>
            <a href="#prices" className="hero-card">
              <div className="hero-card-num">03</div>
              <img src="/assets/Box-3_Transparent-Pricing.png" alt="Transparent Pricing" />
              <div className="hero-card-text">
                <span className="hero-card-label">AFFORDABLE RATES</span>
                <h3>Transparent Pricing</h3>
              </div>
            </a>
            <a href="#contact" className="hero-card">
              <div className="hero-card-num">04</div>
              <img src="/assets/Box-4_Schedule-Today.png" alt="Schedule Today" />
              <div className="hero-card-text">
                <span className="hero-card-label">FREE CONSULTATION</span>
                <h3>Schedule Today</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
