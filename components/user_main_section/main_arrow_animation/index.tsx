import React from "react";
import styles from "./index.module.css";

type Props = {};

const AnimeBtn: React.FC = (props: Props) => {
  return (
    <div className={styles.mouse_scroll}>
      <div className={styles.mouse}>
        <div className={styles.wheel}></div>
      </div>
      <div className={styles.mouse_item}>
        <span className={`${styles.m_scroll_arrows} ${styles.unu}`}></span>
        <span className={`${styles.m_scroll_arrows} ${styles.doi}`}></span>
        <span className={`${styles.m_scroll_arrows} ${styles.trei}`}></span>
      </div>
    </div>
  );
};

export default AnimeBtn;
