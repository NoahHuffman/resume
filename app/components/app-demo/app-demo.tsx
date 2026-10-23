import styles from "./app-demo.module.scss";

export default function AppDemo() {
  return (
    <section className={styles["app-demo"]} aria-labelledby="demo-title">
      <h2 id="demo-title" className={styles["app-demo_title"]}>
        App demo
      </h2>
      <div className={styles["app-demo_phone"]}>
        <div className={styles["app-demo_camera"]} aria-hidden="true" />
        <video
          className={styles["app-demo_video"]}
          src="/sign-tracker-demo.mp4"
          controls
          playsInline
          preload="none"
          aria-label="Sign Tracker app demo"
        >
          Your browser does not support video playback.
        </video>
      </div>
    </section>
  );
}
