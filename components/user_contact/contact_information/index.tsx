import React from "react";
import styles from "./index.module.css";
import Button from "@/components/buttons/button";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
type Props = {};

const getDataContactInformation = async () => {
  const res = await fetch(`${process.env.BASE_URL}/mycontact`);
  return res.json();
};

const ContactInformation = async (props: Props) => {
  const [{ email, phone, mydata }] = await getDataContactInformation();

  return (
    <div className={styles["contact-inform"]}>
      <div className={styles.social}>
        <AiOutlineMail />
        <Link
          href={`mailto: ${email}`}
          target="_blank"
          rel="noopener noreferrer"
          title="email"
        >
          <span>{email}</span>
        </Link>
      </div>
      <div className={styles.social}>
        <FiPhone />
        <Link
          href={`tel: ${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          title="phone"
        >
          <span>{phone}</span>
        </Link>
      </div>

      <Link href={mydata} download={mydata} title="cv">
        <div className={styles["cv-btn"]}>
          <Button>CV</Button>
        </div>
      </Link>
    </div>
  );
};

export default ContactInformation;
