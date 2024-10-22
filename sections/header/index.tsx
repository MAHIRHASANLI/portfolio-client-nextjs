import React from "react";
import MobileLinks_and_MenuButton from "@/components/user_nav_component/mobile_links";
import DesctopLinks from "@/components/user_nav_component/desktop_links";
import USerBadge from "@/components/user_nav_component/user_badge";
import styles from "./index.module.css";

const Header: React.FC = () => {
  // let styleHeight = {};
  // window.addEventListener("scroll", () => {
  //   if (scrollY > 120)
  //     styleHeight = { height: "20px", backgoundColor: "black" };
  //   else styleHeight = { height: "90px" };
  // });
  return (
    <header className={styles.header}>
      <nav className={styles.navHeaders}>
        {/* Avatar-UserBadge */}
        <USerBadge />
        {/*  Navbar */}
        <DesctopLinks />
        {/* ///NavMobile//// */}
        <MobileLinks_and_MenuButton />
      </nav>
    </header>
  );
};

export default Header;
