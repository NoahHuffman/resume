import Image from "next/image";
import headshot from "../../assets/NDH-Headshot.jpg";
import styles from "./site-footer.module.scss";

export default function SiteFooter() {
  return (
    <footer className={styles["site-footer"]}>
      <div className={styles["site-footer_inner"]}>
        <div className={styles["site-footer_identity"]}>
          <Image className={styles["site-footer_headshot"]} src={headshot} alt="" />
          <div className={styles["site-footer_copy"]}>
            <span className={styles["site-footer_name"]}>Noah Huffman</span>
            <span className={styles["site-footer_title"]}>Software Engineer</span>
          </div>
        </div>
        <div className={styles["site-footer_links"]}>
          <a href="https://github.com/NoahHuffman" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.75-1.32-3.75-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.16 1.71 1.16 1 1.7 2.62 1.2 3.26.91.1-.72.39-1.2.71-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.95 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.43 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.28-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/noahhuffman05" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M5.2 3.4a2.15 2.15 0 1 1 0 4.3 2.15 2.15 0 0 1 0-4.3ZM3.4 9h3.7v11.6H3.4V9Zm5.9 0h3.55v1.58h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.47 4.45 5.68v6.29h-3.7v-5.58c0-1.33-.02-3.04-1.85-3.04s-2.13 1.44-2.13 2.94v5.68H9.3V9Z" />
            </svg>
          </a>
          <a href="https://huffmansoftware.com" aria-label="Website">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9.25" />
              <path d="M2.75 12h18.5M12 2.75c2.25 2.45 3.4 5.54 3.4 9.25S14.25 18.8 12 21.25c-2.25-2.45-3.4-5.54-3.4-9.25S9.75 5.2 12 2.75Z" />
            </svg>
          </a>
        </div>
        <div className={styles["site-footer_bottom"]}>
          <span>&copy; 2026 Noah Huffman</span>
          <a href="#top">Back to top <span aria-hidden="true">&uarr;</span></a>
        </div>
      </div>
    </footer>
  );
}