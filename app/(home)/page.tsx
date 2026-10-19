import Link from "next/link";

export default function Home() {
  return (
    <main id="top" className="portfolio-home section-wrap">
      <Link className="button button-dark portfolio-button" href="/resume">
        Resume <span aria-hidden="true">&rarr;</span>
      </Link>
      <section className="home-projects" aria-labelledby="projects-title">
        <h2 id="projects-title">Projects</h2>
        <Link
          className="button button-dark portfolio-button"
          href="/sign-tracker"
        >
          Sign Tracker <span aria-hidden="true">&rarr;</span>
        </Link>
      </section>
    </main>
  );
}
