import styles from "@/styles/Home.module.css";
export default function About() {
  console.log("About window:", typeof window);

  return <div className={styles.container}>This is about page.</div>;
}
