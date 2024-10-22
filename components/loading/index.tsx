import React from "react";
import styles from "./index.module.css";

const LoadingComponent: React.FC = () => {
  return (
    <div className={styles["loader-component"]}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default LoadingComponent;
