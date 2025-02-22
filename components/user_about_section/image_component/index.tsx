import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { MdOutlineTouchApp } from "react-icons/md";

type Props = {
  imgURL: string;
};

const ImageComponent: React.FC<Props> = ({ imgURL = "" }) => {
  return (
    <div className={styles.lightbox_img}>
      <Image
        src={imgURL}
        alt="Mahir Hasanli"
        title="Mahir Hasanli"
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ImageComponent;
