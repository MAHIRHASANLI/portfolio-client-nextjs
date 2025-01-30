import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { getDataContact } from "@/api/get_requests";

const FooterContent: React.FC = async () => {
  const [{ github, instagram, facebook, linkedn }] = await getDataContact();

  return (
    <div className={styles["wrapper-content"]}>
      <div>
        <h4 className={styles.fullName}>
          <span>Mahir</span>&nbsp;
          <span id="color">Hasani</span>
        </h4>
        <div>
          <p className={styles.profession}>
            Mən,{" "}
            <strong style={{ fontWeight: "bold" }}>
              Proqram Təminatı Mühəndisiyəm
            </strong>
            , veb tətbiqlər hazırlayıram. Mənimlə əlaqə saxlaya bilərsiniz.
          </p>
        </div>
      </div>
      <div className={styles["item-right"]}>
        <div>
          <h4>Mənİ İzləyİn</h4>
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
