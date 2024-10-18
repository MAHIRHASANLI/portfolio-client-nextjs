import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import style from "./index.module.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
interface SocialType {
  _id: string;
  email: string;
  phone: string;
  facebook: string;
  linkedn: string;
  github: string;
  mydata: string;
  instagram: string;
}

const getData = async (): Promise<SocialType[]> => {
  const res = await fetch(
    "https://myportfolio-server-d8f7.onrender.com/mycontact"
  );
  return res.json();
};

const SocialIcons: React.FC = async () => {
  const sosialData = await getData();

  return (
    <React.Fragment>
      {sosialData &&
        sosialData.map((item) => (
          <div key={item._id} className={style.home_hero_social}>
            <Link
              href={`mailto:${item.email}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
            >
              <CgMail style={{ fontSize: "30px" }} />
            </Link>
            <Link
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub style={{ fontSize: "30px" }} />
            </Link>
            <Link
              href={item.linkedn}
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedn"
            >
              <CiLinkedin style={{ fontSize: "30px" }} />
            </Link>
            <Link
              href={item.facebook}
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <CiFacebook style={{ fontSize: "30px" }} />
            </Link>
            <Link
              href={item.instagram}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <CiInstagram style={{ fontSize: "30px" }} />
            </Link>
          </div>
        ))}
    </React.Fragment>
  );
};

export default SocialIcons;
