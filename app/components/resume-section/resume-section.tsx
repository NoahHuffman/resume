import type { ReactNode } from "react";
import styles from "./resume-section.module.scss";

type ResumeSectionProps = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
};

export default function ResumeSection({
  id,
  number,
  title,
  children,
}: ResumeSectionProps) {
  return (
    <section className={styles["resume-section"]} aria-labelledby={id}>
      <h2 id={id} className={styles["resume-section_heading"]}>
        <span className={styles["resume-section_number"]}>{number}</span> /{" "}
        {title}
      </h2>
      {children}
    </section>
  );
}
