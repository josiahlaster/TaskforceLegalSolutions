import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Video background placeholder - user will provide video later */}
      <div className="hero-video-wrapper">
        <div className="hero-video-overlay" />
        <iframe
          className="hero-video"
          src="https://www.youtube.com/embed/xcna6GdgOGc?controls=0&rel=0&playsinline=1&cc_load_policy=0&enablejsapi=1&origin=https%3A%2F%2Ftaskforcelegalsolutions.com&autoplay=1&mute=1&loop=1&playlist=xcna6GdgOGc&modestbranding=1&disablekb=1&iv_load_policy=3&showinfo=0&fs=0"
          title="Task Force Legal Solutions"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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
