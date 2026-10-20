import type { ReactNode } from "react";
import styles from "./page-heading.module.scss";

type PageHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHeading({
  id,
  eyebrow,
  title,
  description,
  children,
}: PageHeadingProps) {
  return (
    <section className={styles["page-heading"]} aria-labelledby={id}>
      <p className={styles["page-heading_eyebrow"]}>{eyebrow}</p>
      <h1 id={id} className={styles["page-heading_title"]}>
        {title}
      </h1>
      <p className={styles["page-heading_description"]}>{description}</p>
      {children && (
        <div className={styles["page-heading_details"]}>{children}</div>
      )}
    </section>
  );
}