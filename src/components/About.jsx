import './About.css'
import aboutImg from '../assets/image.png'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-inner">
        <div className="about-image-col">
          <div className="about-img-stack">
            <img
              src={aboutImg}
              alt="Task Force Legal Solutions"
              className="about-img-main"
            />
            <div className="about-img-badge">
              <span className="about-badge-years">15+</span>
              <span className="about-badge-text">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="about-text-col">
          <div className="section-label">Discover Who We Are</div>
          <h2 className="about-heading">Task Force Legal Solutions</h2>
          <div className="section-divider"></div>

          <p className="about-intro">
            Task Force Legal Solutions offers expert support to law firms and individuals navigating
            the judicial system on their own. We provide attorneys with timely and on-demand legal
            assistance without the overhead of full-time staff through our customized virtual
            paralegal services. The FIY (File-It-Yourself) solution simplifies the legal process for
            individuals, providing them with access to legal guidance for self-representation.
          </p>

          <div className="about-why">
            <h4>Why Choose Us Over Traditional Staff?</h4>
            <ul className="about-list">
              <li>
                <div className="about-list-icon">✓</div>
                <div>
                  <strong>Cost-Effective:</strong> Pay only for the services you need, avoiding
                  salary, benefits, and overhead costs.
                </div>
              </li>
              <li>
                <div className="about-list-icon">✓</div>
                <div>
                  <strong>Scalable Support:</strong> Access experienced paralegals for small tasks
                  or large caseloads, tailored to your needs.
                </div>
              </li>
              <li>
                <div className="about-list-icon">✓</div>
                <div>
                  <strong>Flexibility:</strong> Enjoy the convenience of remote, on-demand services
                  without managing additional employees.
                </div>
              </li>
              <li>
                <div className="about-list-icon">✓</div>
                <div>
                  <strong>Expertise:</strong> Benefit from specialized knowledge across multiple
                  legal areas, ensuring high-quality results.
                </div>
              </li>
            </ul>
          </div>

          <p className="about-cta-text">
            Let Task Force Legal Solutions be your strategic partner for efficiency and excellence.
          </p>
        </div>
      </div>
    </section>
  )
}
