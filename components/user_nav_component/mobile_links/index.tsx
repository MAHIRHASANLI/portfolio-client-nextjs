"use client";
import React, { useState } from "react";
import Link from "next/link"; // Next.js-dən Link komponentini import edin
import styles from "./index.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // TypeScript-də generic istifadə edin

  return (
    <React.Fragment>
      <div
        className={styles.navMobile}
        style={{ right: isOpen ? "0px" : "-100%" }}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Project</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={styles.openMenu} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </div>
    </React.Fragment>
  );
};

export default MobileHeader;
