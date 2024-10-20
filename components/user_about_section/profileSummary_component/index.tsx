import React from "react";
import styles from "./index.module.css";
import SectionTitle from "@/components/user_section_title";
type Props = {
  name: string;
  profession: string;
};

const ProfileSummaryComponent: React.FC<Props> = ({ name, profession }) => {
  return (
    <div className={styles["profile-summary"]}>
      <SectionTitle>{name}</SectionTitle>
      <p className={styles.description}>{profession}</p>
    </div>
  );
};

export default ProfileSummaryComponent;
