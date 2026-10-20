import type { ReactNode } from "react";
import styles from "./resume-card.module.scss";

type ResumeCardProps = {
  label?: string;
  title?: string;
  children: ReactNode;
  author?: { title: string; company: string };
};

export default function ResumeCard({
  label,
  title,
  children,
  author,
}: ResumeCardProps) {
  return (
    <article className={styles["resume-card"]}>
      {label && <p className={styles["resume-card_label"]}>{label}</p>}
      {title && <h3 className={styles["resume-card_title"]}>{title}</h3>}
      <div className={styles["resume-card_content"]}>{children}</div>
      {author && (
        <footer className={styles["resume-card_author"]}>
          <span className={styles["resume-card_author_title"]}>
            - {author.title}
          </span>
          <span className={styles["resume-card_author_company"]}>
            {author.company}
          </span>
        </footer>
      )}
    </article>
  );
}