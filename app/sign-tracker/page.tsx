import type { Metadata } from "next";
import AppDemo from "../components/app-demo/app-demo";
import PageHeading from "../components/page-heading/page-heading";
import TagList from "../components/tag-list/tag-list";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Sign Tracker | Noah Huffman",
  description:
    "A React Native app built for a junk removal crew to track signs, attach photos, organize jobs, and share updates.",
};

export default function SignTrackerPage() {
  return (
    <main id="top" className={styles["sign-tracker-page"]}>
      <PageHeading
        id="sign-tracker-title"
        eyebrow="Freelance project / Solo developer"
        title="Sign Tracker"
        description="I built this mobile app for a junk removal crew to track their signs on a shared map. The crew can add locations and photos, group signs by job, share real-time updates, and order stops for a route."
      >
        <TagList items={["React Native", "Expo", "Firebase", "Google Maps API"]} label="Technologies" />
      </PageHeading>
      <AppDemo />
    </main>
  );
}
