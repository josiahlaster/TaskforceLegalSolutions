// import { useState } from 'react'  // FIY popup — commented out
import './Pricing.css'
import fiy1Img from '../assets/fiy1.png'
import fiy2Img from '../assets/fiy2.png'
import fiy3Img from '../assets/fiy3.png'
import fiy4Img from '../assets/fiy4.png'
import pricingPlanIcon from '../assets/Pricing_Plan_Icon-removebg-preview.png'

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
      'And More...',
    ],
  },
]

const fiyPlans = [
  {
    id: 'thrive',
    title: 'Thrive Plan',
    subtitle: 'Bankruptcy',
    practiceArea: 'Bankruptcy Law',
    icon: fiy1Img,
    rate: '$500 – $750',
    items: [
      'Comprehensive document preparation and organization for bankruptcy filing.',
      'Assistance with bankruptcy forms and schedules.',
      'Guidance on filing procedures and post-filing steps.',
      'Support with creditor communications and case follow-up.',
    ],
    popupDetails: `Thrive Plan specifically addresses Chapter 7 bankruptcy filings. We prepare all required bankruptcy forms and schedules according to court standards to ensure court compliance. The bankruptcy process is guided step-by-step by our team, from the initial filing to the post-discharge steps. Clients receive assistance with communication with creditors, timely reminders of filing deadlines, and a simplified explanation of bankruptcy. Additionally, we assist with means testing calculations, prepare reaffirmation agreements and assist with filing amendments when needed.`,
  },
  {
    id: 'transitions',
    title: 'Transitions Plan',
    subtitle: 'Family',
    practiceArea: 'Family Law',
    icon: fiy2Img,
    rate: '$300 – $500',
    items: [
      'Preparation and filing of divorce, custody, or child support documents.',
      'Drafting agreements and parenting plans.',
      'Assistance with financial disclosures and court-required documentation.',
      'Case management support and modification request preparation.',
    ],
    popupDetails: `Transitions Plan is customized for each case, including divorce, custody, child support, and other civil proceedings. Preparation of parenting plans, agreements, and child support documents is one of our specialties. Composing and organizing financial disclosures, modifying custody or support agreements, and clarifying court filing processes are all services we offer. Clients can also benefit from aid with absolute divorce filings and case management tools to help them establish documents for self-representation. During the course of their case, clients receive access to educational resources regarding their rights and responsibilities related to family law.`,
  },
  {
    id: 'triumph',
    title: 'Triumph Plan',
    subtitle: 'Traffic',
    practiceArea: 'Traffic Law',
    icon: fiy3Img,
    rate: '$75 – $150',
    items: [
      'Research and guidance for resolving traffic violations or tickets.',
      'Preparation of court responses or defense documents.',
      'Assistance with filing procedures and representation preparation.',
      'Strategies for reducing fines or mitigating penalties.',
    ],
    popupDetails: `Triumph Plan is created to help clients resolve traffic law issues. Our team provides help with drafting court responses or defense statements to contest traffic tickets, as well as step-by-step guidance on filing traffic-related documents. A wide range of services are available, including research-based methods for reducing fines and penalties, explanations of traffic laws relevant to the case, and assistance with electronically filing traffic-related documents. A detailed analysis of tickets or violations to identify potential defenses is also offered as a part of our arrangement for court appearances.`,
  },
  {
    id: 'topnotch',
    title: 'Top Notch Plan',
    subtitle: 'Custom',
    practiceArea: 'Small Claims',
    icon: fiy4Img,
    rate: 'Complex problems, customized solutions based on demand.',
    items: [
      'Case law and statutory analysis using advanced legal databases.',
      'Custom legal memoranda for specific issues or cases.',
      'Chronological timelines and summaries for medical records in litigation.',
      'Identification of inconsistencies or key evidence in medical documentation.',
      'Drafting personalized documents for unique legal matters.',
      'And More...',
    ],
    popupDetails: `Top Notch Plan handles small claims comprehensively. As part of our services, we assist in the preparation and filing of small claims forms, as well as initiating claims and resolving pre-trial disputes. Our services include organizing evidence, timelines, and supplementary materials for a strong case presentation, guidance on courtroom procedures, and strategies for effective case representation. When landlord-tenant disputes arise, we prepare and file legal eviction documents. A variety of additional services are available to help you with landlord notices, rent demands, and hearing preparation so that you can effectively present evidence and respond to opposing arguments.`,
  },
]

const FIY_JOTFORM_URL = 'https://form.jotform.com/242598079415164'
const RESOURCES_URL = '/resources'

const DISCLAIMER = `Rates reflect only initial costs and are subject to change based on complexity and specific requirements. Filing fees and other associated costs are not included. TASK FORCE LEGAL SOLUTIONS is not a law firm and does not provide legal advice to clients. This service is only intended to provide information and procedural assistance. These terms are acknowledged and accepted when you contract with us.`

export default function Pricing() {
  // const [activePlan, setActivePlan] = useState(null)  // FIY popup — commented out
  // const openModal = (plan) => setActivePlan(plan)     // FIY popup — commented out
  // const closeModal = () => setActivePlan(null)        // FIY popup — commented out

  return (
    <section className="pricing-section" id="prices">
      <div className="container">
        {/* ATTORNEY PRICING */}
        <div className="section-header center">
          <div className="section-label">For Legal Professionals</div>
          <h2 className="pricing-heading">Attorney Pricing Plans</h2>
          <div className="section-divider center"></div>
          <img
            src={pricingPlanIcon}
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
          <div className="section-header center" style={{ marginTop: '5rem' }}>
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
                {/* FIY popup button — commented out
                <button
                  className="btn btn-outline-gold fiy-cta"
                  onClick={() => openModal(plan)}
                >
                  Read More
                </button>
                */}
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
            href="#contact"
            className="btn btn-gold"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

    </section>

  )
}
