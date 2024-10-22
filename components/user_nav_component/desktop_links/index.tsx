"use client";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";

const DesktopHeader = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navLink}>
      <Link
        href="#"
        className={`${styles.links} ${pathname === "#" && styles.active}`}
      >
        Main
      </Link>
      <Link
        href="#about"
        className={`${styles.links} ${pathname === "#about" && styles.active}`}
      >
        About
      </Link>
      <Link
        href="#services"
        className={`${styles.links} ${
          pathname === "#services" && styles.active
        }`}
      >
        Services
      </Link>
      <Link
        href="#project"
        className={`${styles.links} ${
          pathname === "#project" && styles.active
        }`}
      >
        Project
      </Link>
      <Link
        href="#contact"
        className={`${styles.links} ${
          pathname === "#contact" && styles.active
        }`}
      >
        Contact
      </Link>
    </div>
  );
};

export default DesktopHeader;
