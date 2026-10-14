import SignTrackerDemo from "./components/sign-tracker-demo";
import headshot from "./assets/NDH-Headshot.jpg";
import utcLogo from "./assets/utc-logo.jpg";
import Image from "next/image";

const experience = [
  "Build customer-facing Angular applications used by 500+ waste companies nationwide, with REST APIs behind them.",
  "Upgraded the Angular application from v13 to v21, adopting standalone components, signals, and control flow.",
  "Modernize dependencies and deprecated patterns to make Angular codebases easier to maintain and safer to upgrade.",
  "Design TypeScript microservices on AWS Lambda and API Gateway, with infrastructure defined in CDK and deployed through CloudFormation.",
  "Build Java backend-for-frontend features, contribute to EventBridge ingestion pipelines, and model DynamoDB access patterns.",
  "Partner with product, QA, and engineering, and review code.",
];

const skillGroups = [
  {
    label: "Use daily",
    skills: [
      "Angular",
      "TypeScript",
      "RxJS",
      "AWS Lambda",
      "API Gateway",
      "EventBridge",
      "DynamoDB",
      "CloudFormation/CDK",
      "Java",
    ],
  },
  {
    label: "Used on projects",
    skills: [
      "React",
      "React Native",
      "Expo",
      "Firebase",
      "Google Maps API",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "OpenSearch",
      "Docker",
      "Git",
    ],
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 15 15 5M6 5h9v9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M3.5 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Noah Huffman, back to top">
          <span className="brand-mark">
            N<span>H</span>
          </span>
          <span className="brand-name">Noah Huffman</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> Software engineer{" "}
              <span className="eyebrow-divider">/</span> Chattanooga, TN
            </p>
            <h1 id="hero-title">
              Full-stack engineer.
              <br />
              <span>Angular, TypeScript, AWS.</span>
            </h1>
            <p className="hero-intro">
              I’m a full-stack engineer at Environmental Solutions Group,
              building the fleet management platform used by 500+ waste
              companies, including Waste Management, Waste Connections, and
              Republic Services.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <ArrowIcon />
              </a>
              <a className="text-link" href="mailto:noahhuffman05@gmail.com">
                Get in touch <ArrowIcon diagonal />
              </a>
            </div>
            <div className="hero-stack" aria-label="Core technologies">
              <span>Angular</span>
              <span>TypeScript</span>
              <span>AWS</span>
              <span>React Native</span>
            </div>
          </div>

          <aside className="hero-art" aria-label="Fleet management platform">
            <div className="platform-panel">
              <p className="platform-label">FLEET MANAGEMENT PLATFORM</p>
              <h2>Platform manages</h2>
              <ul>
                <li>Trucks</li>
                <li>Compactors</li>
                <li>Drivers</li>
                <li>Safety events</li>
                <li>Service events</li>
              </ul>
              <p className="platform-scale">
                <strong>500+</strong> waste companies
              </p>
            </div>
          </aside>
        </section>

        <section className="proof-strip" aria-label="Career highlights">
          <div className="proof-inner">
            <div className="proof-item">
              <span className="proof-number">
                3<span>+</span>
              </span>
              <span className="proof-label">
                years building
                <br />
                production software
              </span>
            </div>
            <div className="proof-rule" />
            <div className="proof-item">
              <span className="proof-number">
                500<span>+</span>
              </span>
              <span className="proof-label">
                waste companies
                <br />
                use the platform
              </span>
            </div>
            <div className="proof-rule" />
            <div className="proof-item">
              <span className="proof-number">
                30,000<span>+</span>
              </span>
              <span className="proof-label">
                live trucks
                <br />
                on the platform
              </span>
            </div>
            <div className="proof-location">
              <span className="location-spark">✳</span> Rooted in Chattanooga,
              TN
            </div>
          </div>
        </section>

        <section
          className="experience-section section-wrap section-pad"
          id="experience"
        >
          <div className="section-kicker">
            <span>01</span> / EXPERIENCE
          </div>
          <div className="experience-heading">
            <h2>Experience</h2>
          </div>
          <article className="timeline-entry">
            <div className="timeline-date">
              <span className="timeline-dot" />
              MAR 2023 — PRESENT
            </div>
            <div className="timeline-body">
              <div className="timeline-title">
                <div>
                  <h3>Environmental Solutions Group</h3>
                  <p>
                    Terex company <span>·</span> Software Engineer II, promoted
                    March 2026
                  </p>
                </div>
                <span className="timeline-location">Chattanooga, TN</span>
              </div>
              <ul>
                {experience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="timeline-tags">
                <span>Angular</span>
                <span>TypeScript</span>
                <span>AWS</span>
                <span>Java</span>
                <span>DynamoDB</span>
              </div>
            </div>
          </article>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-wrap">
            <div className="section-kicker">
              <span>02</span> / PROJECTS
            </div>
            <div className="work-heading">
              <h2>Projects</h2>
              <p>
                A freelance project: a React Native app for a junk removal
                crew to track signs on a shared map.
              </p>
            </div>

            <article className="project-card">
              <div className="project-topline">
                <div className="project-label">
                  <span className="project-index">01</span>
                  <span>FREELANCE PROJECT · MOBILE APP</span>
                </div>
              </div>
              <div className="project-layout">
                <div className="project-info">
                  <div className="project-icon" aria-hidden="true">
                    <svg viewBox="0 0 40 40" fill="none">
                      <path
                        d="M20 35s12-11 12-21a12 12 0 1 0-24 0c0 10 12 21 12 21Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <circle
                        cx="20"
                        cy="14"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="m27 27 4 4"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="project-overline">
                    Solo developer
                  </p>
                  <h3>
                    Sign Tracking
                    <br />
                    Mobile App
                  </h3>
                  <p className="project-description">
                    A React Native app for a junk removal crew to add sign
                    locations and photos, group jobs, and share updates.
                  </p>
                  <div className="project-chips">
                    <span>React Native</span>
                    <span>Expo</span>
                    <span>Firebase</span>
                    <span>Google Maps API</span>
                  </div>
                  <div className="project-outcome">
                    <span className="outcome-icon">↗</span>
                    <span>
                      <strong>Project features</strong>
                      <br />
                      Map pins, photos, grouped jobs, sign-in, and shared
                      updates.
                    </span>
                  </div>
                </div>
                <div className="demo-column">
                  <div className="demo-intro">
                    <span>
                      <i className="tiny-green-dot" /> TRY THE PREVIEW
                    </span>
                    <span>Sample data · Not connected to a live service</span>
                  </div>
                  <SignTrackerDemo />
                </div>
              </div>
            </article>

            <div className="project-details">
              <div className="detail-cell">
                <span className="detail-number">01</span>
                <h4>Map pins and photos</h4>
                <p>
                  Add a sign location to the map and attach photos.
                </p>
              </div>
              <div className="detail-cell">
                <span className="detail-number">02</span>
                <h4>Group jobs</h4>
                <p>
                  Organize locations into layers by job.
                </p>
              </div>
              <div className="detail-cell">
                <span className="detail-number">03</span>
                <h4>Share updates</h4>
                <p>
                  Firebase provides sign-in and real-time shared updates.
                </p>
              </div>
              <div className="detail-cell">
                <span className="detail-number">04</span>
                <h4>Order a route</h4>
                <p>
                  Order locations using Google Maps Route Optimization API.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section section-wrap section-pad" id="about">
          <div className="section-kicker">
            <span>03</span> / ABOUT
          </div>
          <div className="about-grid">
            <div className="about-profile">
              <Image
                className="about-headshot"
                src={headshot}
                alt="Noah Huffman"
                priority
              />
              <h2>About me</h2>
            </div>
            <div className="about-copy">
              <p>
                I build Angular and TypeScript features for customer-facing
                fleet management apps, and backend services with Lambda, API
                Gateway, DynamoDB, and CDK.
              </p>
              <p>
                My freelance project was a sign-tracking mobile app for a junk
                removal crew, built with React Native, Expo, Firebase, and
                Google Maps API.
              </p>
            </div>
          </div>
        </section>

        <section className="skills-section section-pad">
          <div className="section-wrap">
            <div className="section-kicker">
              <span>04</span> / SKILLS
            </div>
            <div className="skills-heading">
              <h2>Skills</h2>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <div className="skill-card" key={group.label}>
                  <div className="skill-card-head">
                    <span>0{index + 1}</span>
                    <h3>{group.label}</h3>
                    <span className="skill-cross">↗</span>
                  </div>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="education-section section-wrap section-pad">
          <div className="section-kicker">
            <span>05</span> / EDUCATION
          </div>
          <div className="education-card">
            <div className="education-emblem" aria-hidden="true">
              <Image
                src={utcLogo}
                alt=""
                className="education-emblem-image"
                style={{ borderRadius: "50%" }}
                width={45}
                height={45}
              />
              <i>✳</i>
            </div>
            <div className="education-content">
              <p className="project-overline">EDUCATION</p>
              <h2>
                University of Tennessee
                <br />
                at Chattanooga
              </h2>
              <p>B.S. in Computer Science with a minor in Entrepreneurship</p>
            </div>
            <span className="education-years">2020 — 2024</span>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-spark">✳</div>
          <p className="eyebrow">CONTACT</p>
          <h2>Let's connect!</h2>
          <div className="contact-actions">
            <a
              className="button button-lime"
              href="mailto:noahhuffman05@gmail.com"
            >
              Email me <ArrowIcon diagonal />
            </a>
            <a
              className="button button-outline"
              href="https://linkedin.com/in/noahhuffman05"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowIcon diagonal />
            </a>
            <a className="button button-outline" href="/NDH-Resume.pdf">
              Download resume (PDF) <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-identity">
            <span className="footer-name">Noah Huffman</span>
            <span className="footer-small">Software Engineer II</span>
          </div>
          <div className="footer-links">
            <a
              href="https://github.com/NoahHuffman"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.75-1.32-3.75-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.16 1.71 1.16 1 1.7 2.62 1.2 3.26.91.1-.72.39-1.2.71-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.95 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.43 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.28-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/noahhuffman05"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M5.2 3.4a2.15 2.15 0 1 1 0 4.3 2.15 2.15 0 0 1 0-4.3ZM3.4 9h3.7v11.6H3.4V9Zm5.9 0h3.55v1.58h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.47 4.45 5.68v6.29h-3.7v-5.58c0-1.33-.02-3.04-1.85-3.04s-2.13 1.44-2.13 2.94v5.68H9.3V9Z" />
              </svg>
            </a>
            <a href="https://huffmansoftware.com" aria-label="Website">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9.25" />
                <path d="M2.75 12h18.5M12 2.75c2.25 2.45 3.4 5.54 3.4 9.25S14.25 18.8 12 21.25c-2.25-2.45-3.4-5.54-3.4-9.25S9.75 5.2 12 2.75Z" />
              </svg>
            </a>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Noah Huffman</span>
            <a href="#top">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
