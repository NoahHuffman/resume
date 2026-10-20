import Link from "next/link";
import styles from "./site-header.module.scss";

export default function SiteHeader() {
  return (
    <header className={styles["site-header"]}>
      <Link className={styles["site-header_brand"]} href="/" aria-label="Noah Huffman, home">
        <span className={styles["site-header_mark"]}>
          N<span>H</span>
        </span>
        <span className={styles["site-header_copy"]}>
          <span className={styles["site-header_name"]}>Noah Huffman</span>
          <span className={styles["site-header_title"]}>Software Engineer</span>
        </span>
      </Link>
    </header>
  );
}