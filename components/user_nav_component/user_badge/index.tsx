import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
type Props = {};

const USerBadge = (props: Props) => {
  return (
    <Link href="https://mahirhasanli.vercel.app/">
      <div className={styles["hero-fullName"]} key="">
        <Image
          className={styles.img}
          src="https://picsum.photos/400/200"
          alt=""
          width={50}
          height={50}
        />
        Mahir&nbsp;<span style={{ color: "#7843E9" }}>Hasanli</span>
      </div>
    </Link>
  );
};

export default USerBadge;
