import { useState } from 'react'
import './HowWeHelp.css'

export default function HowWeHelp() {
  const [activeTab, setActiveTab] = useState('attorneys')

  return (
    <section className="how-section" id="contact">
      <div className="container">
        <div className="section-header center">
          <div className="section-label">Our Services</div>
          <h2 className="how-heading">How Can We Help You?</h2>
          <div className="section-divider center"></div>
          <p className="how-intro">
            At <strong>Task Force Legal Solutions</strong>, we pride ourselves on delivering professional,
            reliable, and confidential services. Whether you're an attorney looking for remote paralegal
            support or an individual needing help with legal filings, we're here to assist you every
            step of the way.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="how-cta-row">
          <a
            href="https://form.jotform.com/242537130855153"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold how-cta-btn"
          >
            Attorney — Free Consultation
          </a>
          <a
            href="https://form.jotform.com/242598079415164"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-gold how-cta-btn"
          >
            Individual — Free Consultation
          </a>
        </div>
        <p className="how-cta-note">
          <strong>*</strong> Click on the corresponding button representing your needs and complete the
          form to receive your <strong>FREE CONSULTATION</strong>.
        </p>

        {/* Tab Content */}
        <div className="how-tabs">
          <div className="how-tab-buttons">
            <button
              className={`how-tab-btn ${activeTab === 'attorneys' ? 'active' : ''}`}
              onClick={() => setActiveTab('attorneys')}
            >
              What do we do for Attorneys?
            </button>
            <button
              className={`how-tab-btn ${activeTab === 'individuals' ? 'active' : ''}`}
              onClick={() => setActiveTab('individuals')}
            >
              What do we do for Individuals?
            </button>
          </div>

          <div className="how-tab-content">
            {activeTab === 'attorneys' ? (
              <div className="how-tab-panel">
                <div className="how-tab-image">
                  <img src="assets/image1.png" alt="Attorney Services" />
                </div>
                <div className="how-tab-text">
                  <h3>Services for Attorneys</h3>
                  <p>
                    Legal professionals rely on <strong>Task Force Legal Solutions</strong> for
                    comprehensive virtual paralegal support. We specialize in delivering timely and
                    accurate document preparation, legal research, case management, and other
                    essential services.
                  </p>
                  <p>
                    Our mission is to streamline your workload, enabling you to focus on client
                    representation while we handle the administrative and legal support tasks
                    remotely.
                  </p>
                  <ul className="how-benefit-list">
                    <li>Document preparation &amp; review</li>
                    <li>Legal research &amp; analysis</li>
                    <li>Case management support</li>
                    <li>E-filing preparation</li>
                    <li>Trial preparation assistance</li>
                    <li>Discovery drafting &amp; responses</li>
                  </ul>
                  <a
                    href="https://form.jotform.com/242537130855153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ) : (
              <div className="how-tab-panel">
                <div className="how-tab-image">
                  <img src="assets/Image20241230131559.png" alt="Individual Services" />
                </div>
                <div className="how-tab-text">
                  <h3>Services for Individuals</h3>
                  <p>
                    Individuals who require support in preparing and processing paperwork, such as
                    court forms, petitions, or applications, may use our FIY (File-It-Yourself)
                    service assistance.
                  </p>
                  <p>
                    Task Force Legal Solutions does not provide legal advice; instead, we guide
                    you through the appropriate steps to ensure that your legal documents are
                    completed and submitted accurately, making the filing procedure more manageable
                    and accessible.
                  </p>
                  <ul className="how-benefit-list">
                    <li>Court form preparation</li>
                    <li>Petition assistance</li>
                    <li>Filing guidance</li>
                    <li>Document organization</li>
                    <li>Step-by-step support</li>
                    <li>Affordable pricing options</li>
                  </ul>
                  <a
                    href="https://form.jotform.com/242598079415164"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Team Member */}
        <div className="team-member-card">
          <div className="team-member-img">
            <img src="assets/headshot.jpg" alt="Tina Marie Harvey" />
          </div>
          <div className="team-member-info">
            <blockquote>
              "Meet Tina Marie Harvey, Senior Paralegal at Task Force Legal Solutions. Over the past
              decade, Tina has developed a strong understanding of the legal profession and has
              extensive experience in corporate compliance, insurance claims analysis, legal
              documentation, and policy and procedure implementation. She combines her strategic
              knowledge and research expertise to provide impactful outcomes. A talented
              problem-solver with meticulous attention to detail, she provides innovative legal
              support tailored to clients' needs."
            </blockquote>
            <div className="team-member-meta">
              <strong>Tina Marie Harvey</strong>
              <span>Senior Paralegal | Practice Area: Case Advisory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
