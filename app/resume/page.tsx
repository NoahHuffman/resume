import type { Metadata } from "next";
import Image from "next/image";
import utcLogo from "../assets/utc-logo.jpg";

export const metadata: Metadata = { title: "Resume | Noah Huffman" };

const experience = [
  "Build customer-facing Angular applications used by 500+ waste companies nationwide, with REST APIs behind them.",
  "Upgraded the Angular application from v13 to v21, adopting standalone components, signals, and control flow.",
  "Modernize dependencies and deprecated patterns to make Angular codebases easier to maintain and safer to upgrade.",
  "Design TypeScript microservices on AWS Lambda and API Gateway, with infrastructure defined in CDK and deployed through CloudFormation.",
  "Build Java backend-for-frontend features, contribute to EventBridge ingestion pipelines, and model DynamoDB access patterns.",
  "Partner with product, QA, and engineering, and review code.",
];

const skillGroups = [
  { label: "Use daily", skills: ["Angular", "TypeScript", "RxJS", "AWS Lambda", "API Gateway", "EventBridge", "DynamoDB", "CloudFormation/CDK", "Java"] },
  { label: "Used on projects", skills: ["React", "React Native", "Expo", "Firebase", "Google Maps API", "Node.js", "PostgreSQL", "MySQL", "OpenSearch", "Docker", "Git"] },
];

export default function ResumePage() {
  return (
    <main id="top" className="resume-page">
      <div className="page-heading section-wrap">
        <p className="eyebrow">Noah Huffman / Software Engineer II</p>
      </div>
      <section className="experience-section section-wrap section-pad" aria-labelledby="experience-title">
        <div className="section-kicker"><span>01</span> / EXPERIENCE</div>
        <div className="experience-heading"><h2 id="experience-title">Experience</h2></div>
        <article className="timeline-entry">
          <div className="timeline-date"><span className="timeline-dot" />MAR 2023 &mdash; PRESENT</div>
          <div className="timeline-body">
            <div className="timeline-title">
              <div>
                <h3>Environmental Solutions Group</h3>
                <p>Terex company <span>&middot;</span> Software Engineer II, promoted March 2026</p>
              </div>
              <span className="timeline-location">Chattanooga, TN</span>
            </div>
            <ul>{experience.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="timeline-tags">
              {["Angular", "TypeScript", "AWS", "Java", "DynamoDB"].map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </article>
      </section>
      <section className="skills-section section-pad" aria-labelledby="skills-title">
        <div className="section-wrap">
          <div className="section-kicker"><span>02</span> / SKILLS</div>
          <div className="skills-heading"><h2 id="skills-title">Skills</h2></div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <div className="skill-card" key={group.label}>
                <div className="skill-card-head"><span>0{index + 1}</span><h3>{group.label}</h3></div>
                <div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="education-section section-wrap section-pad" aria-labelledby="education-title">
        <div className="section-kicker"><span>03</span> / EDUCATION</div>
        <div className="skills-heading"><h2 id="education-title">Education</h2></div>
        <div className="education-card">
          <div className="education-emblem" aria-hidden="true">
            <Image src={utcLogo} alt="" className="education-emblem-image" width={55} height={55} />
          </div>
          <div className="education-content">
            <h3>University of Tennessee at Chattanooga</h3>
            <p>B.S. in Computer Science with a minor in Entrepreneurship</p>
          </div>
          <span className="education-years">2020 &mdash; 2024</span>
        </div>
      </section>
    </main>
  );
}