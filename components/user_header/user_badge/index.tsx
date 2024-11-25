import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { getDataAbout } from "@/api/get_requests";

const USerBadge: React.FC = async () => {
  const [{ image }] = await getDataAbout();
  return (
    <Link href="https://mahirhasani.vercel.app/">
      <div className={styles["hero-fullName"]} key="">
        <Image
          className={styles.img}
          src={image}
          alt="Mahir Hasanli"
          width={50}
          height={50}
        />
        <span>Mahir</span>
        <span style={{ color: "#7843E9" }}>Hasanli</span>
      </div>
    </Link>
  );
};

export default USerBadge;
