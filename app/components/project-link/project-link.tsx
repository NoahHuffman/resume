import Link from "next/link";
import styles from "./project-link.module.scss";

type ProjectLinkProps = {
  href: string;
  children: string;
};

export default function ProjectLink({ href, children }: ProjectLinkProps) {
  return (
    <Link className={styles["project-link"]} href={href}>
      {children}
      <span className={styles["project-link_arrow"]} aria-hidden="true">
        &rarr;
      </span>
    </Link>
  );
}