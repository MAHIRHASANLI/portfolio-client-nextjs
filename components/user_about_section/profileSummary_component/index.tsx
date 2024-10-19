import React from "react";
import styles from "./index.module.css";
type Props = {
  name: string;
  profession: string;
};

const ProfileSummaryComponent: React.FC<Props> = ({ name, profession }) => {
  return (
    <div className={styles["profile-summary"]}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>{profession}</p>
    </div>
  );
};

export default ProfileSummaryComponent;
