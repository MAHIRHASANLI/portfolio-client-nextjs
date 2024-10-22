import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import Button from "@/components/buttons/button";
import SocialIcons from "@/components/social_icons";
import AnimeBtn from "@/components/user_main_section/main_arrow_animation";
import { getDataMain } from "@/api/get_requests";

const MainSection = async () => {
  const [{ image, name, surname, profession }] = await getDataMain();
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
      <SocialIcons />
    </section>
  );
};

export default MainSection;
