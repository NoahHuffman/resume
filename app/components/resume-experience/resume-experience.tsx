import TagList from "../tag-list/tag-list";
import styles from "./resume-experience.module.scss";

const experience = [
  "Build customer-facing Angular applications used by 500+ waste companies nationwide, with REST APIs behind them.",
  "Modernize dependencies and deprecated patterns to make Angular codebases easier to maintain and safer to upgrade.",
  "Design TypeScript microservices on AWS Lambda and API Gateway, with infrastructure defined in CDK and deployed through CloudFormation.",
  "Build Java backend-for-frontend features, contribute to EventBridge ingestion pipelines, and model DynamoDB access patterns.",
  "Partner with product, QA, and engineering, and review code.",
];

export default function ResumeExperience() {
  return (
    <article className={styles["resume-experience"]}>
      <div className={styles["resume-experience_date"]}>
        <span className={styles["resume-experience_dot"]} aria-hidden="true" />
        MAR 2023 &mdash; PRESENT
      </div>
      <div>
        <div className={styles["resume-experience_heading"]}>
          <div>
            <h3 className={styles["resume-experience_company"]}>Environmental Solutions Group</h3>
            <p className={styles["resume-experience_role"]}>
              Terex company <span>&middot;</span> Software Engineer II, promoted March 2026
            </p>
          </div>
          <span className={styles["resume-experience_location"]}>Chattanooga, TN</span>
        </div>
        <ul className={styles["resume-experience_details"]}>
          {experience.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <TagList items={["Angular", "TypeScript", "AWS", "Java"]} label="Experience technologies" />
      </div>
    </article>
  );
}