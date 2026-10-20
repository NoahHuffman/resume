import type { Metadata } from "next";
import PageHeading from "../components/page-heading/page-heading";
import ResumeSection from "../components/resume-section/resume-section";
import ResumeExperience from "../components/resume-experience/resume-experience";
import Technologies from "../components/technologies/technologies";
import ResumeCard from "../components/resume-card/resume-card";
import ResumeEducation from "../components/resume-education/resume-education";
import styles from "./page.module.scss";

export const metadata: Metadata = { title: "Resume | Noah Huffman" };

export default function ResumePage() {
  return (
    <main id="top">
      <div className={styles["resume-page_heading"]}>
        <PageHeading
          id="resume-title"
          eyebrow="Noah Huffman / Software Engineer II"
          title="Resume"
          description="I'm a full-stack software engineer in Chattanooga, building Angular applications and AWS services for a platform used by 500+ waste companies."
        />
      </div>
      <ResumeSection id="experience-heading" number="01" title="EXPERIENCE">
        <ResumeExperience />
        <Technologies />
      </ResumeSection>
      <ResumeSection id="highlights-heading" number="02" title="HIGHLIGHTS">
        <ResumeCard label="Best Practices" title="Angular Upgrade">
          <p>
            Upgraded our Angular application from v13 to v21, adopting
            standalone components, signals, and control flow. Instructed fellow
            developers on best practices and modern syntax.
          </p>
        </ResumeCard>
      </ResumeSection>
      <ResumeSection
        id="commendations-heading"
        number="03"
        title="COMMENDATIONS"
      >
        <ResumeCard
          author={{
            title: "Principal Member of Technical Staff",
            company: "Environmental Solutions Group",
          }}
        >
          <blockquote>
            “Noah has been an outstanding ARK developer—contributing across the
            system, quickly learning what’s needed, and reliably delivering. He
            delivered high-quality work on short notice that earned strong
            stakeholder praise.”
          </blockquote>
        </ResumeCard>
      </ResumeSection>
      <ResumeSection id="education-heading" number="04" title="EDUCATION">
        <ResumeEducation />
      </ResumeSection>
    </main>
  );
}
