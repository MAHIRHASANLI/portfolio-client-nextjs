import React from "react";
import MobileLinks_and_MenuButton from "@/components/user_nav_component/mobile_links";
import DesctopLinks from "@/components/user_nav_component/desktop_links";
import USerBadge from "@/components/user_nav_component/user_badge";
import styles from "./index.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header} style={{ zIndex: "99" }}>
      <nav className={styles.navHeaders} style={{ zIndex: "99" }}>
        {/* Avatar-UserBadge */}
        <USerBadge />

        {/* ////Navbar/// */}
        <DesctopLinks />

        {/* ///NavMobile//// */}
        <MobileLinks_and_MenuButton />
      </nav>
    </header>
  );
};

export default Header;
