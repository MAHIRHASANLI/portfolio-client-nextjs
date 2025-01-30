import React from "react";
import styles from "./index.module.css";
import FooterContent from "@/components/user_footer/footer_content";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className={`${styles.footer} fluid`}>
      <div className="container">
        <div className={styles["top-footer"]}>
          <FooterContent />
        </div>
        <div className={styles["bottom-footer"]}>
          <span> © 2025. Müəllif hüquqları qorunur.</span>
          <Link href="/">Mahir Hasani</Link>{" "}
          <span>tərəfindən hazırlanmışdır.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
