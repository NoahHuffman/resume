import type { Metadata } from "next";
import Image from "next/image";
import utcLogo from "../assets/utc-logo.jpg";

export const metadata: Metadata = { title: "Resume | Noah Huffman" };

const experience = [
  "Build customer-facing Angular applications used by 500+ waste companies nationwide, with REST APIs behind them.",
  "Modernize dependencies and deprecated patterns to make Angular codebases easier to maintain and safer to upgrade.",
  "Design TypeScript microservices on AWS Lambda and API Gateway, with infrastructure defined in CDK and deployed through CloudFormation.",
  "Build Java backend-for-frontend features, contribute to EventBridge ingestion pipelines, and model DynamoDB access patterns.",
  "Partner with product, QA, and engineering, and review code.",
];

const skills = [
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "RxJS",
  "AWS",
  "Lambda",
  "API Gateway",
  "EventBridge",
  "DynamoDB",
  "CDK",
  "Java",
  "Spring",
  "React",
  "React Native",
  "Expo",
  "Firebase",
  "Google Maps API",
  "Next.js",
  "PostgreSQL",
  "Python",
  "Android",
  "MySQL",
  "OpenSearch",
  "Docker",
  "JIRA",
  "Confluence",
  "Agile",
  "Git",
  "GitHub",
  "GitLab",
  "Jenkins",
];

export default function ResumePage() {
  return (
    <main id="top" className="resume-page">
      <div className="page-heading section-wrap">
        <p className="eyebrow">Noah Huffman / Software Engineer II</p>
        <p className="resume-bio">
          I&apos;m a full-stack software engineer in Chattanooga, building
          Angular applications and AWS services for a platform used by 500+
          waste companies.
        </p>
      </div>
      <section
        className="experience-section section-wrap section-pad"
        aria-label="Experience"
      >
        <div className="section-kicker">
          <span>01</span> / EXPERIENCE
        </div>
        <article className="timeline-entry">
          <div className="timeline-date">
            <span className="timeline-dot" />
            MAR 2023 &mdash; PRESENT
          </div>
          <div className="timeline-body">
            <div className="timeline-title">
              <div>
                <h3>Environmental Solutions Group</h3>
                <p>
                  Terex company <span>&middot;</span> Software Engineer II,
                  promoted March 2026
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
              {["Angular", "TypeScript", "AWS", "Java", "DynamoDB"].map(
                (skill) => (
                  <span key={skill}>{skill}</span>
                ),
              )}
            </div>
          </div>
        </article>
        <div className="resume-technologies skill-card">
          <div className="skill-card-head">
            <h3>Technologies</h3>
          </div>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>
      <section
        className="resume-details-section section-wrap section-pad"
        aria-label="Highlights"
      >
        <div className="section-kicker">
          <span>02</span> / HIGHLIGHTS
        </div>
        <div className="resume-card-grid">
          <article className="resume-content-card">
            <p className="resume-card-label">Best Practices</p>
            <h3>Angular Upgrade</h3>
            <p>
              Upgraded our Angular application from v13 to v21, adopting
              standalone components, signals, and control flow. Instructed
              fellow developers on best practices and modern syntax.
            </p>
          </article>
        </div>
      </section>
      <section
        className="resume-details-section section-wrap section-pad"
        aria-label="Commendations"
      >
        <div className="section-kicker">
          <span>03</span> / COMMENDATIONS
        </div>
        <div className="resume-card-grid">
          <article className="resume-content-card">
            <blockquote>
              “Noah has been an outstanding ARK developer—contributing across
              the system, quickly learning what’s needed, and reliably
              delivering. He delivered high-quality work on short notice that
              earned strong stakeholder praise.”
            </blockquote>
            <footer className="resume-commendation-footer">
              <span className="resume-commendation-title">
                - Principal Member of Technical Staff
              </span>
              <span className="resume-commendation-company">
                Environmental Solutions Group
              </span>
            </footer>
          </article>
        </div>
      </section>
      <section
        className="resume-details-section section-wrap section-pad"
        aria-label="Education"
      >
        <div className="section-kicker">
          <span>04</span> / EDUCATION
        </div>
        <div className="resume-education-box">
          <div className="education-card">
            <div className="education-emblem" aria-hidden="true">
              <Image
                src={utcLogo}
                alt=""
                className="education-emblem-image"
                width={55}
                height={55}
              />
            </div>
            <div className="education-content">
              <h3>University of Tennessee at Chattanooga</h3>
              <p>B.S. in Computer Science with a minor in Entrepreneurship</p>
            </div>
            <span className="education-years">2020 &mdash; 2024</span>
          </div>
        </div>
      </section>
    </main>
  );
}
