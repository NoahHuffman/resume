import TagList from "../tag-list/tag-list";
import styles from "./technologies.module.scss";

const skills = [
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "RxJS",
  "AWS",
  "Lambda",
  "API Gateway",
  "EventBridge",
  "DynamoDB",
  "CDK",
  "Java",
  "Spring",
  "React",
  "React Native",
  "Expo",
  "Firebase",
  "Google Maps API",
  "Mapbox",
  "Next.js",
  "PostgreSQL",
  "Python",
  "Android",
  "MySQL",
  "OpenSearch",
  "Docker",
  "JIRA",
  "Confluence",
  "Agile",
  "Git",
  "GitHub",
  "GitLab",
  "Jenkins",
];

export default function Technologies() {
  return (
    <div className={styles.technologies}>
      <h3 className={styles.technologies_title}>Technologies</h3>
      <TagList items={skills} label="Technologies" variant="filled" />
    </div>
  );
}
