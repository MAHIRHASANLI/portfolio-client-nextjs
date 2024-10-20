import React from "react";
import styles from "./index.module.css";
type Props = {
  children: string;
};

const SectionTitle: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles["wrapper-title"]}>
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
};

export default SectionTitle;
