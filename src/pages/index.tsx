import Head from "next/head";
import styles from "@/styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>malkeet.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        src="https://picsum.photos/200/200"
        alt="Avatar"
        className={styles.avatar}
      />
      <div className={styles.title}>Malkeet Singh (Mel)</div>
      <div className={styles.text}>
        Software developer - passionate about problem solving and empowering
        teams.
      </div>
    </div>
  );
}
