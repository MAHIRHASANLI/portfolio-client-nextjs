import React from "react";
import styles from "./index.module.css";

type Props = {};

const AnimeBtn: React.FC = (props: Props) => {
  return (
    <div className={styles.mouse_scroll}>
      <div className={styles.mouse}>
        <div className={styles.wheel}></div>
      </div>
    </div>
  );
};

export default AnimeBtn;
