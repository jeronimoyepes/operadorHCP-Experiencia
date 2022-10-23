import styles from "./pagerenderer.module.scss";

export default function PageRenderer({ children, pagesAmount }) {
  console.log(pagesAmount.length);
  return (
    <div className={styles.container}>
      <div>{children}</div>
      <div className={styles.pageCounter}>
        {pagesAmount.map((page) => {
          console.log(page);
          return <p>a</p>;
        })}
      </div>
    </div>
  );
}
