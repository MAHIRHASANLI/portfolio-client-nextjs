"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <div
        className={styles.navMobile}
        style={{ width: isOpen ? "100%" : "0px" }}
      >
        <Link href="#">Əsas</Link>
        <Link href="#about">Haqqında</Link>
        <Link href="#services">Xidmətlər</Link>
        <Link href="#project">Layihələr</Link>
        <Link href="#contact">Əlaqə</Link>
      </div>
      <div className={styles.openMenu} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </div>
    </React.Fragment>
  );
};

export default MobileHeader;
