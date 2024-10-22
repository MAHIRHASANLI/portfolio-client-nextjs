import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import style from "./index.module.css";
import Link from "next/link";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { getDataContact } from "@/api/get_requests";

// export const getSocialData = async (): Promise<SocialType[]> => {
//   const res = await fetch(
//     "https://myportfolio-server-d8f7.onrender.com/mycontact"
//   );
//   return res.json();
// };

const SocialIcons: React.FC = async () => {
  const [{ email, github, instagram, facebook, linkedn }] =
    await getDataContact();
  return (
    <div className={style.home_hero_social}>
      <Link href={`mailto:${email}`} target="_blank">
        <AiOutlineMail style={{ fontSize: "30px" }} />
      </Link>
      <Link href={github} target="_blank">
        <VscGithubAlt style={{ fontSize: "30px" }} />
      </Link>
      <Link href={linkedn} target="_blank">
        <CiLinkedin style={{ fontSize: "30px" }} />
      </Link>
      <Link href={facebook} target="_blank">
        <CiFacebook style={{ fontSize: "30px" }} />
      </Link>
      <Link href={instagram} target="_blank">
        <CiInstagram style={{ fontSize: "30px" }} />
      </Link>
    </div>
  );
};

export default SocialIcons;
