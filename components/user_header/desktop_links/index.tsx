import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

const DesktopHeader: React.FC = () => {
  return (
    <div className={styles["nav-links"]}>
      <Link href="#">Main</Link>
      <Link href="#about">About</Link>
      <Link href="#services">Services</Link>
      <Link href="#project">Project</Link>
      <Link href="#contact">Contact</Link>
    </div>
  );
};

export default DesktopHeader;
