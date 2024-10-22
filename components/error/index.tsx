import React from "react";
import styles from "./index.module.css";

const ErrorComponent: React.FC = () => {
  return (
    <div className={styles.cloak__wrapper}>
      <div className={styles.cloak__container}>
        <div className={styles.cloak}></div>
      </div>
      <div className={styles.info}>
        <h2>404</h2>
        <h3>Oops!</h3>

        {/* <Link href="/" replace={true}>
          Home
        </Link> */}
      </div>
    </div>
  );
};

export default ErrorComponent;
