import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { MdOutlineTouchApp } from "react-icons/md";

type Props = {
  imgURL: string;
  name: string;
};

const ImageComponent: React.FC<Props> = ({ imgURL, name }) => {
  return (
    <div className={styles.lightbox_img}>
      <Image src={imgURL} alt={name} title="Mahir Hasanli" fill />
      <span>
        <MdOutlineTouchApp style={{ fontSize: "50px" }} />{" "}
      </span>
    </div>
  );
};

export default ImageComponent;
