import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    if (id) {
      e.preventDefault()
      setMenuOpen(false)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      setMenuOpen(false)
    }
  }

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="container header-top-inner">
          <div className="header-contact-items">
            <a href="tel:9194383030" className="header-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.19a16 16 0 006.9 6.9l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <span>Call Us: (919) 438-3030</span>
            </a>
            <a href="mailto:info@taskforcelegalsolutions.com" className="header-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>Email Us: info@taskforcelegalsolutions.com</span>
            </a>
          </div>
          <a href="https://app.mycase.com/login" target="_blank" rel="noopener noreferrer" className="btn btn-gold header-login-btn">
            LOG IN
          </a>
        </div>
      </div>

      <div className="header-main">
        <div className="container header-main-inner">
          <Link to="/" className="site-logo">
            <img src="/assets/AGJeffJackson_logo.png" alt="Task Force Legal Solutions Logo" />
            <div className="logo-text">
              <span className="logo-name">Task Force</span>
              <span className="logo-sub">Legal Solutions</span>
            </div>
          </Link>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>

          <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" onClick={(e) => handleNavClick(e, null)} className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
            <a href="#support" onClick={(e) => handleNavClick(e, 'support')}>Services</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>How We Help</a>
            <a href="#prices" onClick={(e) => handleNavClick(e, 'prices')}>Pricing</a>
            <NavLink to="/resources" onClick={(e) => handleNavClick(e, null)}>Resources</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
