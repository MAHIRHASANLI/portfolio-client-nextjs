import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
type Props = {
  icons?: string;
  services: string;
};
import { FaCode } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const ItemServicesComponent: React.FC<Props> = ({ services = "" }) => {
  return (
    <div className={styles.service}>
      <div className={styles.icon}>
        <FaCode />
      </div>
      <h3>
        <span className={styles["service-title"]}>{services}</span>
      </h3>
      <div>
        <span className={styles["service-description"]}>
          Müasir texnologiyalar və ən yaxşı təcrübələrdən istifadə edərək,
          sürətli, funksional və istifadəçi dostu veb həllər təqdim edirik.
        </span>
      </div>
      <div className={styles["service-link"]}>
        <span>Ətraflı öyrən&nbsp;</span>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default ItemServicesComponent;
