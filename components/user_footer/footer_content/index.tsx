import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { getSocialData } from "@/components/social_icons";
type Props = {};

const FooterContent = async (props: Props) => {
  const [{ github, instagram, facebook, linkedn }] = await getSocialData();

  return (
    <div className={styles["wrapper-content"]}>
      <div>
        <h4 className={styles.fullName}>
          <span>Mahir</span>&nbsp;
          <span id="color">Hasani</span>
        </h4>
        <div>
          <p className={styles.profession}>
            I am a software engineer, developing web applications. Feel free to
            contact me.
          </p>
        </div>
      </div>
      <div className={styles["item-right"]}>
        <div>
          <h4>SOCIAL</h4>
        </div>
        <div className={styles["social"]}>
          <Link href={github} target="_blank">
            <VscGithubAlt />
          </Link>
          <Link href={linkedn} target="_blank">
            <CiLinkedin />
          </Link>
          <Link href={facebook} target="_blank">
            <CiFacebook />
          </Link>
          <Link href={instagram} target="_blank">
            <CiInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
