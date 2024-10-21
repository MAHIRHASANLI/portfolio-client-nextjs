import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
interface ProjectProps {
  _id: string;
  name: string;
  title: string;
  image: string;
  webkitURL: string;
}

const getDataProjects = async (): Promise<ProjectProps[]> => {
  const res = await fetch(`${process.env.BASE_URL}/project`);
  return res.json();
};

const ItemProject: React.FC = async () => {
  const projectData = await getDataProjects();

  return (
    <div className={styles["projects-grid"]}>
      {projectData &&
        projectData.map(({ _id, name, title, image, webkitURL }, index) => (
          <div
            key={_id}
            className={`${styles["project-item"]}  ${styles[`item-${index}`]}`}
          >
            {/* <div className={styles["img-project"]}> */}
            <Image
              src={image}
              alt="item.name"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* </div> */}
            <div className={styles["item-content"]}>
              <div>
                <h3>
                  <Link href={webkitURL} target="_blank" title="click me">
                    {name}
                  </Link>
                </h3>
                <span>{title}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemProject;
