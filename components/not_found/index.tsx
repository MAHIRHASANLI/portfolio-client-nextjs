import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

const NotFoundComponent: React.FC = () => {
  return (
    <div className={styles.cloak__wrapper}>
      <div className={styles.cloak__container}>
        <div className={styles.cloak}></div>
      </div>
      <div className={styles.info}>
        <h2>NOT FOUND</h2>
        <h3>We can't find that page</h3>

        <Link href="/" replace={true}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundComponent;
