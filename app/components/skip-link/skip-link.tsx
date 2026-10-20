import styles from "./skip-link.module.scss";

export default function SkipLink() {
  return (
    <a className={styles["skip-link"]} href="#top">
      Skip to content
    </a>
  );
}
