import ProjectLink from "../components/project-link/project-link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main id="top" className={styles["portfolio-home"]}>
      <ProjectLink href="/resume">Resume</ProjectLink>
      <section className={styles["portfolio-home_projects"]} aria-labelledby="projects-title">
        <h2 id="projects-title" className={styles["portfolio-home_title"]}>Projects</h2>
        <ProjectLink href="/sign-tracker">Sign Tracker</ProjectLink>
      </section>
    </main>
  );
}
