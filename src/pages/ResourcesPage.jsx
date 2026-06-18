import './ResourcesPage.css'
import justiaImg from '../assets/justia.webp'
import legalaidImg from '../assets/301_legalaidnc.webp'
import eCourtsImg from '../assets/eCourts-logo_Portal_stacked-e1736119535456.webp'
import judicialSealImg from '../assets/judicial-branch-seal-white-bkgd.jpg'
import laborImg from '../assets/labor-logo.png'
import lawHelpImg from '../assets/LawHelpNC_Logo.png'
import agJacksonImg from '../assets/AGJeffJackson_logo.png'

const resources = [
  {
    id: 'justia',
    name: 'Justia North Carolina Law',
    logo: justiaImg,
    description:
      'Justia North Carolina Law is a comprehensive resource for state laws, case summaries, and legal updates specific to North Carolina.',
    url: 'https://law.justia.com/north-carolina/',
  },
  {
    id: 'legalaid',
    name: 'Legal Aid NC',
    logo: legalaidImg,
    description:
      'Legal Aid NC offers free legal help for low-income individuals facing civil legal issues, such as housing, family law, and public benefits disputes.',
    url: 'https://www.legalaidnc.org/',
  },
  {
    id: 'ecourts',
    name: 'NC eCourts Portal',
    logo: eCourtsImg,
    description:
      'North Carolina eCourts Portal provides online access to calendar dates, court records, case status, and electronic filings for cases in North Carolina.',
    url: 'https://www.nccourts.gov/ecourts',
  },
  {
    id: 'fiypackets',
    name: 'File-It-Yourself Domestic Packets',
    logo: judicialSealImg,
    description:
      'Provides forms and guidance for family law cases, such as custody, child support, and divorce, in Wake County.',
    url: 'https://www.nccourts.gov/locations/wake-county/file-it-yourself-domestic-packets',
  },
  {
    id: 'ncbar',
    name: 'NC State Bar',
    logo: laborImg,
    description:
      'The North Carolina State Bar offers information on workplace laws, employee rights, and filing complaints for labor violations.',
    url: 'https://www.ncbar.gov/',
  },
  {
    id: 'lawhelpnc',
    name: 'LawHelpNC Online Forms',
    logo: lawHelpImg,
    description:
      'Offers free, customizable legal forms for various legal issues, including family law, housing, and estate planning.',
    url: 'https://www.lawhelpnc.org/',
  },
  {
    id: 'prodivorce',
    name: 'NC Judicial Branch – Pro Se Absolute Divorce Packet',
    logo: judicialSealImg,
    description:
      'The NC Judicial Branch offers a Pro Se Absolute Divorce Packet to help individuals in Durham County navigate self-representation in divorce cases.',
    url: 'https://www.nccourts.gov/',
  },
  {
    id: 'secondchance',
    name: 'NC Second Chance',
    logo: agJacksonImg,
    description:
      'NC Second Chance provides guidance on expunging criminal records and understanding eligibility for record clearing in North Carolina.',
    url: 'https://www.nccourts.gov/services/expunctions',
  },
]

export default function ResourcesPage() {
  return (
    <main className="resources-page">
      {/* Page Hero */}
      <section className="resources-hero">
        <div className="resources-hero-overlay" />
        <div className="container resources-hero-content">
          <div className="section-label">Legal Tools &amp; Links</div>
          <h1 className="resources-hero-heading">Resources</h1>
          <p className="resources-hero-sub">
            Helpful legal resources and tools for North Carolina residents and legal professionals.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="resources-list-section">
        <div className="container">
          <div className="resources-grid">
            {resources.map((resource) => (
              <div key={resource.id} className="resource-card">
                <div className="resource-card-logo">
                  <img src={resource.logo} alt={resource.name} />
                </div>
                <div className="resource-card-body">
                  <h3>{resource.name}</h3>
                  <p>{resource.description}</p>
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-gold resource-link"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="resources-contact-cta">
            <h3>Need Additional Help?</h3>
            <p>
              Our team is ready to assist you with navigating these resources and providing
              personalized paralegal support.
            </p>
            <div className="resources-cta-buttons">
              <a
                href="https://form.jotform.com/242537130855153"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Attorney Consultation
              </a>
              <a
                href="https://form.jotform.com/242598079415164"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-gold"
              >
                Individual Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
