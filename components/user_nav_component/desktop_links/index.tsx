import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

const DesktopHeader = () => {
  return (
    <div className={styles.navLink}>
      <Link href="/" className={styles.links}>
        Main
      </Link>
      <Link href="#about" className={styles.links}>
        About
      </Link>
      <Link href="#services" className={styles.links}>
        Services
      </Link>
      <Link href="#project" className={styles.links}>
        Project
      </Link>
      <Link href="#contact" className={styles.links}>
        Contact
      </Link>
    </div>
  );
};

export default DesktopHeader;
