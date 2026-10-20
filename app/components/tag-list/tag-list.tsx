import styles from "./tag-list.module.scss";

type TagListProps = {
  items: readonly string[];
  label: string;
  variant?: "outline" | "filled";
};

export default function TagList({
  items,
  label,
  variant = "outline",
}: TagListProps) {
  return (
    <ul
      className={`${styles["tag-list"]} ${styles[`tag-list--${variant}`]}`}
      aria-label={label}
    >
      {items.map((item) => (
        <li key={item} className={styles["tag-list_item"]}>
          {item}
        </li>
      ))}
    </ul>
  );
}
