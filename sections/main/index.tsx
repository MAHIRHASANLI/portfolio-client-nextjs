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
  const mainData = await getData();
  //   console.log(mainData);
  return (
    mainData &&
    mainData.map((item) => {
      return (
        <section
          className="fluid"
          id="home"
          key={item._id}
          style={{
            background: `linear-gradient(to right,rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)),url(${item.image})`,
          }}
        >
          <div className={styles.container}>
            <h1 className={styles.name}>
              <span>Hello, I'm&nbsp;{item.name}</span>&nbsp;
              <span id="color">{item.surname}</span>
            </h1>
            <p className={styles.profession}>{item.profession}</p>
            <Link href="#contact">
              <Button>Contact me</Button>
            </Link>

            {/*! Animasiyali ARROW ->*/}
            <AnimeBtn />
          </div>
          <SocialIcons />
        </section>
      );
    })
  );
};

export default MainSection;
