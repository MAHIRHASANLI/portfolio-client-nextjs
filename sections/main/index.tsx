import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import Button from "@/components/buttons/button";
import SocialIcons from "@/components/social_icons";
import AnimeBtn from "@/components/user_main_section/main_arrow_animation";
// Gələn məlumatın strukturunu müəyyən etmək üçün interfeys
interface MainDataItem {
  _id: string;
  name: string;
  surname: string;
  profession: string;
  image: string;
}

const getData = async (): Promise<MainDataItem[]> => {
  const res = await fetch(`${process.env.BASE_URL}/home`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const MainSection = async () => {
  const [{ image, name, surname, profession }] = await getData();
  //   console.log(mainData);
  return (
    <section id="/" className="fluid">
      <div
        className={styles.main}
        style={{
          background: `linear-gradient(to right,rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)),url(${image})`,
        }}
      >
        <div className={`${styles["main-content"]} container`}>
          <div className={styles["content-name"]}>
            <h1>
              Hello, I'm&nbsp;{name}&nbsp;{surname}
            </h1>
          </div>
          <div className={styles["content-profession"]}>
            <p>{profession}</p>
          </div>

          <div className={styles.button}>
            <Link href="#contact">
              <Button>Contact me</Button>
            </Link>
          </div>

          {/*! Animasiyali ARROW ->*/}
          <div>
            <AnimeBtn />
          </div>
        </div>
      </div>
      {/* <SocialIcons /> */}
    </section>
  );
};

export default MainSection;
