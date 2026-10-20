import Image from "next/image";
import utcLogo from "../../assets/utc-logo.jpg";
import styles from "./resume-education.module.scss";

export default function ResumeEducation() {
  return (
    <div className={styles["resume-education"]}>
      <div className={styles["resume-education_emblem"]} aria-hidden="true">
        <Image
          src={utcLogo}
          alt=""
          className={styles["resume-education_image"]}
          width={55}
          height={55}
        />
      </div>
      <div className={styles["resume-education_content"]}>
        <h3 className={styles["resume-education_title"]}>
          University of Tennessee at Chattanooga
        </h3>
        <p className={styles["resume-education_description"]}>
          B.S. in Computer Science with a minor in Entrepreneurship
        </p>
      </div>
      <span className={styles["resume-education_years"]}>
        2020 &mdash; 2024
      </span>
    </div>
  );
}
