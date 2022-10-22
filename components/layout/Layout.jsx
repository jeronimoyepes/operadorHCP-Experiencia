import Head from "next/head";
import styles from "./layout.module.scss";

export const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title} HCP Central</title>
        <meta name="HCP Central" content="HCP loyal researcher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainCont}>{children}</main>
    </div>
  );
};
