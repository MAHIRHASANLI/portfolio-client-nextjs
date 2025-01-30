import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

const DesktopHeader: React.FC = () => {
  return (
    <div className={styles["nav-links"]}>
      <Link href="#">Əsas</Link>
      <Link href="#about">Haqqında</Link>
      <Link href="#services">Xidmətlər</Link>
      <Link href="#project">Layihələr</Link>
      <Link href="#contact">Əlaqə</Link>
    </div>
  );
};

export default DesktopHeader;
