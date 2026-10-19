import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Tracker | Noah Huffman",
  description: "A React Native app built for a junk removal crew to track signs, attach photos, organize jobs, and share updates.",
};

export default function SignTrackerPage() {
  return (
    <main id="top" className="sign-tracker-page section-wrap">
      <section className="page-heading" aria-labelledby="sign-tracker-title">
        <p className="eyebrow">Freelance project / Solo developer</p>
        <h1 id="sign-tracker-title">Sign Tracker</h1>
        <p className="home-description">
          I built this mobile app for a junk removal crew to track their signs on
          a shared map. The crew can add locations and photos, group signs by job,
          share real-time updates, and order stops for a route.
        </p>
        <div className="project-chips" aria-label="Technologies">
          <span>React Native</span><span>Expo</span><span>Firebase</span><span>Google Maps API</span>
        </div>
      </section>
      <section className="app-demo" aria-labelledby="demo-title">
        <h2 id="demo-title">App demo</h2>
        <div className="phone-frame">
          <div className="phone-camera" aria-hidden="true" />
          <video className="phone-video" controls playsInline preload="none" aria-label="Sign Tracker app demo">
            Your browser does not support video playback.
          </video>
        </div>
        <p className="asset-status">Demo video coming soon.</p>
      </section>
    </main>
  );
}