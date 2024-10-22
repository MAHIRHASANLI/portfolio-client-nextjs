import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { getDataAbout } from "@/api/get_requests";
type Props = {};

const USerBadge: React.FC = async (props: Props) => {
  const [{ name, image }] = await getDataAbout();
  return (
    <Link href="https://mahirhasanli.vercel.app/">
      <div className={styles["hero-fullName"]} key="">
        <Image
          className={styles.img}
          src={image}
          alt={name}
          width={50}
          height={50}
        />
        <span>Mahir</span>
        <span style={{ color: "#7843E9" }}>Hasani</span>
      </div>
    </Link>
  );
};

export default USerBadge;
