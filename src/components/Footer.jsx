import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-logo-area">
          <img src="/assets/999-removebg-preview.png" alt="Task Force Legal Solutions" />
          <div className="footer-logo-text">
            <span className="footer-logo-name">Task Force Legal Solutions</span>
            <span className="footer-logo-sub">Empowering Law Firms and Individuals</span>
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.19a16 16 0 006.9 6.9l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <a href="tel:9194383030">(919) 438-3030</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:info@taskforcelegalsolutions.com">info@taskforcelegalsolutions.com</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#support">Paralegal Services</a></li>
              <li><a href="#contact">How We Help</a></li>
              <li><a href="#prices">Attorney Pricing</a></li>
              <li><a href="#fiy">FIY Support</a></li>
              <li><a href="/resources">Resources</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Free Consultation</h4>
            <p>Click on the corresponding button representing your needs and complete the form to receive your FREE CONSULTATION.</p>
            <div className="footer-cta-btns">
              <a href="https://form.jotform.com/242537130855153" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Attorney</a>
              <a href="https://form.jotform.com/242598079415164" target="_blank" rel="noopener noreferrer" className="btn btn-outline-gold">Individual</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>Copyright &copy; 2023 <a href="https://adwocat.com" target="_blank" rel="noopener noreferrer">Adwocat</a>. All rights reserved.</p>
          <p className="footer-disclaimer">
            Task Force Legal Solutions is not a law firm and does not provide legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
