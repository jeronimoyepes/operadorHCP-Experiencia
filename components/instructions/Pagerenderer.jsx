import styles from "./pagerenderer.module.scss";

export default function PageRenderer({ children, pagesAmount }) {
  return (
    <div className={styles.container}>
      <div>{children}</div>
      <div className={styles.pageCounter}>
        {pagesAmount.map((page) => {
          console.log(page);
          return <p key={page}>a</p>;
        })}
      </div>
    </div>
  );
}  
