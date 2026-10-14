import SignTrackerDemo from "./components/sign-tracker-demo";
import headshot from "./assets/NDH-Headshot.jpg";

const experience = [
  "Build mobile-first Angular applications that connect to REST APIs and support customers nationwide.",
  "Led a legacy Angular upgrade from v13 to v21, adopting standalone components, signals, and modern template control flow.",
  "Modernize dependencies and deprecated patterns to make Angular codebases easier to maintain and safer to upgrade.",
  "Design TypeScript microservices on AWS Lambda and API Gateway, with infrastructure defined in CDK and deployed through CloudFormation.",
  "Build Java backend-for-frontend features, contribute to EventBridge ingestion pipelines, and model efficient DynamoDB access patterns.",
  "Partner with product, QA, and engineering; review code and mentor developers on clean code and responsible AI use.",
];

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "Angular 21",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "React",
      "React Native",
      "HTML & CSS",
    ],
  },
  {
    label: "Backend & cloud",
    skills: [
      "AWS Lambda",
      "API Gateway",
      "EventBridge",
      "DynamoDB",
      "CloudFormation",
      "CDK",
      "Node.js",
      "Java",
    ],
  },
  {
    label: "Data",
    skills: ["DynamoDB", "PostgreSQL", "MySQL", "SQL", "OpenSearch"],
  },
  {
    label: "Tools",
    skills: [
      "Git",
      "Docker",
      "Firebase",
      "Maven",
      "Postman",
      "Selenium",
      "JIRA",
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
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
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
              I build software that helps <span>real work</span> move forward.
            </h1>
            <p className="hero-intro">
              Frontend-focused full-stack engineer making thoughtful Angular
              applications, dependable AWS services, and useful mobile tools for
              people in the field.
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

          <div
            className="hero-art"
            aria-label="A snapshot of Noah's engineering focus"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-art-top">
              <span>BUILT WITH INTENTION</span>
              <span>01 — 04</span>
            </div>
            <div className="hero-code-card">
              <div className="code-card-head">
                <span className="code-lights">
                  <i />
                  <i />
                  <i />
                </span>
                <span>making things work.ts</span>
                <span className="code-card-menu">···</span>
              </div>
              <div className="code-lines" aria-hidden="true">
                <p>
                  <span className="code-muted">01</span>{" "}
                  <span className="code-purple">const</span> work = &#123;
                </p>
                <p>
                  <span className="code-muted">02</span> &nbsp;builtFor:{" "}
                  <span className="code-green">&quot;people&quot;</span>,
                </p>
                <p>
                  <span className="code-muted">03</span> &nbsp;madeTo:{" "}
                  <span className="code-green">&quot;last&quot;</span>,
                </p>
                <p>
                  <span className="code-muted">04</span> &nbsp;always:{" "}
                  <span className="code-yellow">true</span>
                </p>
                <p>
                  <span className="code-muted">05</span> &#125;;
                </p>
              </div>
              <div className="code-card-foot">
                <span>
                  <i className="tiny-green-dot" /> All systems thoughtful
                </span>
                <span>∞</span>
              </div>
            </div>
            <div className="hero-note">
              <span className="note-star">✳</span>
              <span>
                Good software
                <br />
                starts with listening.
              </span>
            </div>
            <div className="hero-art-caption">
              FROM FIRST CLICK
              <br />
              TO CLOUD DEPLOY
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span /> Scroll to explore
          </a>
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
                13<span>→</span>21
              </span>
              <span className="proof-label">
                Angular upgrade
                <br />
                led end to end
              </span>
            </div>
            <div className="proof-rule" />
            <div className="proof-item">
              <span className="proof-number">
                1<span>→</span>N
              </span>
              <span className="proof-label">
                frontend through
                <br />
                serverless AWS
              </span>
            </div>
            <div className="proof-location">
              <span className="location-spark">✳</span> Rooted in Chattanooga,
              TN
            </div>
          </div>
        </section>

        <section className="about-section section-wrap section-pad" id="about">
          <div className="section-kicker">
            <span>01</span> / A LITTLE ABOUT ME
          </div>
          <div className="about-grid">
            <h2>
              Curious by nature.
              <br />
              <span>Engineer by craft.</span>
            </h2>
            <div className="about-copy">
              <p>
                I&apos;m Noah, a software engineer who likes understanding the
                whole picture: the person using the product, the interface they
                rely on, and the services quietly making it all work.
              </p>
              <p>
                Over the last three-plus years, I&apos;ve shipped
                customer-facing features, modernized a large Angular
                application, and built serverless AWS services. Outside my day
                job, I led a mobile app project that brought a field team&apos;s
                work onto a shared map.
              </p>
              <a
                className="inline-link"
                href="https://huffmansoftware.com"
                target="_blank"
                rel="noreferrer"
              >
                More about my work <ArrowIcon diagonal />
              </a>
            </div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-wrap">
            <div className="section-kicker">
              <span>02</span> / SELECTED WORK
            </div>
            <div className="work-heading">
              <div>
                <h2>
                  From the field,
                  <br />
                  <span>built for the field.</span>
                </h2>
              </div>
              <p>
                A side project with a simple goal: give a mobile team one clear
                place to see what needs doing and where.
              </p>
            </div>

            <article className="project-card">
              <div className="project-topline">
                <div className="project-label">
                  <span className="project-index">01</span>
                  <span>FREELANCE · MOBILE APP</span>
                </div>
                <span className="project-date">MAR — JUN 2025</span>
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
                  <p className="project-overline">LEAD DEVELOPER</p>
                  <h3>
                    Sign Tracking
                    <br />
                    Mobile App
                  </h3>
                  <p className="project-description">
                    A shared, map-first workspace for a junk removal crew to
                    place signs, attach photos, organize jobs, and keep everyone
                    in sync.
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
                      <strong>From prototype to practical tool</strong>
                      <br />
                      Designed around the team&apos;s real on-the-ground
                      workflow.
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
              <div className="project-footnote">
                <span>THE CHALLENGE</span>
                <p>
                  Replace scattered updates with a shared picture of the work,
                  from placing a pin to finding the next stop.
                </p>
              </div>
            </article>

            <div className="project-details">
              <div className="detail-cell">
                <span className="detail-number">01</span>
                <h4>Pin it in place</h4>
                <p>
                  Drop a location on the map and add photos so the team knows
                  what to look for.
                </p>
              </div>
              <div className="detail-cell">
                <span className="detail-number">02</span>
                <h4>Keep work organized</h4>
                <p>
                  Group locations into clear layers and find the right stop
                  without the clutter.
                </p>
              </div>
              <div className="detail-cell">
                <span className="detail-number">03</span>
                <h4>Stay in sync</h4>
                <p>
                  Firebase supports shared access, sign-in, and real-time team
                  coordination.
                </p>
              </div>
              <div className="detail-cell">
                <span className="detail-number">04</span>
                <h4>Plan the next move</h4>
                <p>
                  Location-aware route ordering helps crews work through pins
                  more efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="experience-section section-wrap section-pad"
          id="experience"
        >
          <div className="section-kicker">
            <span>03</span> / WHERE I&apos;VE BEEN
          </div>
          <div className="experience-heading">
            <h2>
              Experience that
              <br />
              <span>keeps compounding.</span>
            </h2>
            <p>
              Good work is a team sport. Here&apos;s what I&apos;ve been
              building with mine.
            </p>
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
                    Software Engineer II <span>·</span> promoted March 2026
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
          <article className="timeline-entry freelance-entry">
            <div className="timeline-date">
              <span className="timeline-dot" />
              MAR — JUN 2025
            </div>
            <div className="timeline-body">
              <div className="timeline-title">
                <div>
                  <h3>Sign Tracking Mobile App</h3>
                  <p>
                    Lead Developer <span>·</span> Freelance project
                  </p>
                </div>
                <a className="timeline-link" href="#work">
                  View the project <ArrowIcon diagonal />
                </a>
              </div>
              <p className="freelance-summary">
                Delivered a working React Native prototype for a junk removal
                company, featuring map-based pin placement, photo attachments,
                grouped layers, and real-time collaboration. Added route
                optimization using location data and pathfinding algorithms.
              </p>
              <div className="timeline-tags">
                <span>React Native</span>
                <span>Expo</span>
                <span>Firebase</span>
                <span>Google Maps API</span>
              </div>
            </div>
          </article>
        </section>

        <section className="skills-section section-pad">
          <div className="section-wrap">
            <div className="section-kicker">
              <span>04</span> / MY TOOLKIT
            </div>
            <div className="skills-heading">
              <h2>
                The right tool
                <br />
                <span>for the job.</span>
              </h2>
              <p>
                Technologies I use to take ideas from a first sketch to
                something people can count on.
              </p>
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
            <span>05</span> / THE FOUNDATION
          </div>
          <div className="education-card">
            <div className="education-emblem" aria-hidden="true">
              <span>UTC</span>
              <i>✳</i>
            </div>
            <div className="education-content">
              <p className="project-overline">EDUCATION</p>
              <h2>
                University of Tennessee
                <br />
                at Chattanooga
              </h2>
              <p>B.S. in Computer Science</p>
            </div>
            <span className="education-years">2020 — 2024</span>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-spark">✳</div>
          <p className="eyebrow">HAVE A GOOD ONE IN MIND?</p>
          <h2>
            Let&apos;s make
            <br />
            <span>something useful.</span>
          </h2>
          <a
            className="button button-lime"
            href="mailto:noahhuffman05@gmail.com"
          >
            Say hello <ArrowIcon diagonal />
          </a>
          <p className="contact-caption">
            Always glad to meet thoughtful people doing meaningful work.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-person">
            <div className="footer-avatar">
              <span
                className="avatar-monogram"
                role="img"
                aria-label="Noah Huffman Photo"
              >
                <img src={headshot.src} alt="NH" className="footer-avatar-img" />
              </span>
            </div>
            <div className="footer-identity">
              <span className="footer-name">Noah Huffman</span>
              <span className="footer-small">Software Engineer II</span>
            </div>
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
            <a
              href="https://huffmansoftware.com"
              aria-label="Website"
            >
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
