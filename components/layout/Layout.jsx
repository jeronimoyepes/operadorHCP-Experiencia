import Head from "next/head";
import styles from "./layout.module.scss";

export const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>-{title}- Central HCP</title>
        <meta name="HCP Central" content="HCP loyal researcher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.blind}></div>
      <main className={styles.mainCont}>{children}</main>
    </div>
  );
};
