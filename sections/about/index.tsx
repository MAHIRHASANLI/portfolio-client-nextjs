import React from "react";
import styles from "./index.module.css";
import ImageComponent from "@/components/user_about_section/image_component";
import ProfileSummaryComponent from "@/components/user_about_section/profileSummary_component";
import CompetenciesComponent from "@/components/user_about_section/competencies_component";

interface AboutDataFetchingType {
  _id: string;
  name: string;
  profession: string;
  image: string;
}

export const getDataAbout = async (): Promise<AboutDataFetchingType[]> => {
  const res = await fetch(`${process.env.BASE_URL}/about`);
  return res.json();
};

const AboutSection: React.FC = async () => {
  const [{ name, profession, image }] = await getDataAbout();

  return (
    <section id="about" className={`${styles.scilss}`}>
      <div className={styles["grid-container"]}>
        <div className={styles["grid-item-left"]}>
          <ImageComponent imgURL={image} name={name} />
        </div>
        <div className={styles["grid-item-right"]}>
          <ProfileSummaryComponent name={name} profession={profession} />
          <CompetenciesComponent />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
