import './Pricing.css'

const attorneyPlans = [
  {
    id: 'tier1',
    title: 'Tier 1 Plan',
    subtitle: 'Monthly',
    hours: '15 Hours',
    badge: null,
    items: [
      'Hourly rate tailored to straightforward tasks.',
      'Document drafting and review (basic forms, contracts, or pleadings).',
      'Summaries of legal research.',
      'Case file organization and maintenance.',
      'Limited client or attorney correspondence support.',
      'Assistance with initial court filings and forms.',
    ],
  },
  {
    id: 'tier2',
    title: 'Tier 2 Plan',
    subtitle: 'Monthly',
    hours: '30 Hours',
    badge: 'Popular',
    items: [
      'Includes all Tier 1 services, plus:',
      'E-filing preparation and submission support.',
      'Drafting of discovery requests and responses.',
      'Assistance with trial preparation (e.g., exhibit indexing, witness outlines).',
      'Coordination of case schedules and deadlines.',
      'Priority response within 24 hours for urgent requests.',
    ],
  },
  {
    id: 'tier3',
    title: 'Tier 3 Plan',
    subtitle: 'Monthly',
    hours: '50 Hours',
    badge: null,
    items: [
      'Includes all Tier 1 and Tier 2 services, plus:',
      'Comprehensive case management and workflow support.',
      'Drafting of complex legal documents (e.g., motions, briefs).',
      'Assistance with e-discovery and document production.',
      'Virtual support for depositions, hearings and client meetings.',
      'Advanced trial preparation with trial binders and exhibit organization.',
    ],
  },
  {
    id: 'toptier',
    title: 'Top Tier Plan',
    subtitle: 'Case-Based Pricing',
    hours: 'Long-Term Support',
    badge: 'Best Value',
    items: [
      'Fully customizable services tailored to your specific needs and caseload.',
      'Dedicated paralegal support for ongoing case management and project continuity.',
      'Drafting and review of complex legal documents, including motions, briefs, and contracts.',
      'Assistance with e-discovery, document production, and trial preparation.',
      'Coordination of case schedules, deadlines, and filings.',
      'Virtual meeting support, including note-taking and presentation preparation.',
      'Priority response with guaranteed same-day turnaround for urgent tasks.',
      'Hourly rate adjusted based on caseload volume and the scope of services required.',
      'Ideal for attorneys and firms managing fluctuating or high-volume workloads.',
    ],
  },
]

const fiyPlans = [
  {
    id: 'thrive',
    title: 'Thrive Service',
    subtitle: 'Bankruptcy',
    icon: '/assets/fiy1.png',
    items: [
      'Comprehensive document preparation and organization for bankruptcy filing.',
      'Assistance with bankruptcy forms and schedules.',
      'Guidance on filing procedures and post-filing steps.',
      'Support with creditor communications and case follow-up.',
    ],
  },
  {
    id: 'transitions',
    title: 'Transitions Service',
    subtitle: 'Family',
    icon: '/assets/fiy2.png',
    items: [
      'Preparation and filing of divorce, custody, or child support documents.',
      'Drafting agreements and parenting plans.',
      'Assistance with financial disclosures and court-required documentation.',
      'Case management support and modification request preparation.',
    ],
  },
  {
    id: 'triumph',
    title: 'Triumph Service',
    subtitle: 'Traffic',
    icon: '/assets/fiy3.png',
    items: [
      'Research and guidance for resolving traffic violations or tickets.',
      'Preparation of court responses or defense documents.',
      'Assistance with filing procedures and representation preparation.',
      'Strategies for reducing fines or mitigating penalties.',
    ],
  },
  {
    id: 'topnotch',
    title: 'Top Notch Service',
    subtitle: 'Custom',
    icon: '/assets/fiy4.png',
    items: [
      'Case law and statutory analysis using advanced legal databases.',
      'Custom legal memoranda for specific issues or cases.',
      'Chronological timelines and summaries for medical records in litigation.',
      'Identification of inconsistencies or key evidence in medical documentation.',
      'Drafting personalized documents for unique legal matters.',
      'Assistance with compliance, administrative filings, and niche legal needs.',
      'Flexible support tailored to individual legal challenges.',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="pricing-section" id="prices">
      <div className="container">
        {/* ATTORNEY PRICING */}
        <div className="section-header center">
          <div className="section-label">For Legal Professionals</div>
          <h2 className="pricing-heading">Attorney Pricing Plans</h2>
          <div className="section-divider center"></div>
          <img
            src="/assets/Pricing_Plan_Icon-removebg-preview.png"
            alt="Pricing"
            className="pricing-icon-top"
          />
        </div>

        <div className="attorney-plans-grid">
          {attorneyPlans.map((plan) => (
            <div
              key={plan.id}
              className={`attorney-plan-card ${plan.badge === 'Popular' ? 'featured' : ''}`}
            >
              {plan.badge && (
                <div className="plan-badge">{plan.badge}</div>
              )}
              <div className="plan-header">
                <h3>{plan.title}</h3>
                <p className="plan-subtitle">{plan.subtitle}</p>
                <div className="plan-hours">{plan.hours}</div>
              </div>
              <ul className="plan-items">
                {plan.items.map((item, i) => (
                  <li key={i}>
                    <span className="plan-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://form.jotform.com/242537130855153"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold plan-cta"
              >
                CONTACT US
              </a>
            </div>
          ))}
        </div>

        {/* FIY PRICING */}
        <div className="fiy-pricing" id="fiy">
          <div className="section-header center" style={{marginTop: '5rem'}}>
            <div className="section-label">Self-Representation</div>
            <h2 className="pricing-heading">File-It-Yourself (FIY) Support</h2>
            <div className="section-divider center"></div>
            <p className="fiy-intro">
              Tailored support designed to address unique legal challenges for individuals
              seeking to navigate the legal system independently.
            </p>
          </div>

          <div className="fiy-plans-grid">
            {fiyPlans.map((plan) => (
              <div key={plan.id} className="fiy-plan-card">
                <div className="fiy-plan-header">
                  <img src={plan.icon} alt={plan.title} className="fiy-plan-icon" />
                  <div>
                    <h3>{plan.title}</h3>
                    <span className="fiy-plan-type">{plan.subtitle}</span>
                  </div>
                </div>
                <ul className="fiy-plan-items">
                  {plan.items.map((item, i) => (
                    <li key={i}>
                      <span className="plan-check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://form.jotform.com/242598079415164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-gold fiy-cta"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* DISCLAIMER BANNER */}
        <div className="pricing-disclaimer">
          <p>
            Task Force Legal Solutions is not a law firm and does not provide legal advice.
            Pricing is customized based on your specific needs. Contact us for a detailed quote.
          </p>
          <a
            href="https://form.jotform.com/242537130855153"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
