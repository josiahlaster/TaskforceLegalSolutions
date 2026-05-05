import { useState } from 'react'
import './Services.css'

const practiceAreas = [
  {
    id: 'bankruptcy',
    title: 'Bankruptcy Law',
    icon: '/assets/icon1.png',
    items: [
      '341 meeting preparation',
      'Bankruptcy petition preparation',
      'Client document management',
      'Docket review and monitoring',
      'Judgment and lien review',
      'Proof of claims review',
      'Trustee and creditor communication',
    ],
  },
  {
    id: 'criminal',
    title: 'Criminal Defense',
    icon: '/assets/icon2.png',
    items: [
      'Conduct legal research',
      'Coordinate court preparations',
      'Draft and proofread motions',
      'Gather evidence and exhibits',
      'Investigate case facts/issues',
      'Interview witnesses/victims',
      'Support trial and hearings',
    ],
  },
  {
    id: 'family',
    title: 'Family Law',
    icon: '/assets/icon3.png',
    items: [
      'Child support calculations',
      'Custody agreement drafting',
      'Discovery request handling',
      'Divorce case management',
      'Exhibit preparation',
      'Financial affidavit preparation',
      'Legal research and summaries',
      'Pleading drafting and filing',
      'Trial preparation assistance',
    ],
  },
  {
    id: 'injury',
    title: 'Personal Injury',
    icon: '/assets/icon4.png',
    items: [
      'Client and third-party communication',
      'Drafting estate planning documents',
      'Injury-related document preparation',
      'Medical record review and summaries',
      'Pleading and affidavit drafting',
      'Probate petition preparation',
      'Settlement and claim support',
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Law',
    icon: '/assets/icon5_1.png',
    items: [
      'Compliance filings preparation',
      'Contract drafting and review',
      'Corporate and LLC formation',
      'Due diligence performance',
      'Governance document management',
      'Real estate transaction handling',
      'Template creation and updates',
    ],
  },
  {
    id: 'employment',
    title: 'Employment Law',
    icon: '/assets/icon6.png',
    items: [
      'Assist with EEOC filings',
      'Conduct legal research',
      'Draft employment contracts',
      'Investigate workplace claims',
      'Prepare compliance documents',
      'Review workplace policies',
      'Support mediation and hearings',
    ],
  },
  {
    id: 'research',
    title: 'Legal Research',
    icon: '/assets/icon7.png',
    items: [
      'Case law analysis (Westlaw)',
      'Citation table creation',
      'Compliance code checks',
      'Database query management',
      'eDiscovery search handling',
      'Legal memo drafting',
      'Precedent summarization (Casetext)',
      'Research findings organization',
      'Secondary source research',
      'Statutory research tools (LexisNexis)',
    ],
  },
  {
    id: 'realestate',
    title: 'Real Estate Law',
    icon: '/assets/icon8.png',
    items: [
      'Closing package coordination',
      'Deed and affidavit preparation',
      'Document collection and filing',
      'Eviction proceeding support',
      'Lease agreement drafting',
      'Settlement statement preparation',
      'Title search performance',
    ],
  },
]

export default function Services() {
  const [activeArea, setActiveArea] = useState(null)

  return (
    <section className="services-section" id="support">
      <div className="container">
        <div className="section-header center">
          <div className="section-label">What We Offer</div>
          <h2 className="services-heading">Paralegal Services</h2>
          <div className="section-divider center"></div>
          <p className="services-intro">
            We provide comprehensive virtual paralegal support across multiple practice areas,
            delivering professional, reliable, and confidential services.
          </p>
        </div>

        <div className="practice-grid">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className={`practice-card ${activeArea === area.id ? 'active' : ''}`}
              onClick={() => setActiveArea(activeArea === area.id ? null : area.id)}
            >
              <div className="practice-card-header">
                <img src={area.icon} alt={area.title} className="practice-icon" />
                <h3>{area.title}</h3>
                <span className="practice-toggle">
                  {activeArea === area.id ? '−' : '+'}
                </span>
              </div>
              <div className="practice-card-body">
                <ul>
                  {area.items.map((item, i) => (
                    <li key={i}>
                      <span className="li-dot"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Attorney Supervision Banner */}
        <div className="attorney-supervision" id="docs">
          <div className="attorney-supervision-images">
            <img src="/assets/LOJ-AI-Supervision.jpg" alt="Attorney Supervision" />
            <img src="/assets/Attormey-Supervision-Provided-Image-1.jpg" alt="Attorney Supervision Provided" />
          </div>
          <div className="attorney-supervision-text">
            <div className="section-label">Professional Oversight</div>
            <h3>Attorney Supervision Provided</h3>
            <p>
              All services provided by Task Force Legal Solutions are performed under the
              supervision of a licensed attorney, ensuring compliance with professional standards
              and ethical obligations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
