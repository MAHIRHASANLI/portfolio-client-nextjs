import React from "react";
import SectionTitle from "@/components/user_section_title";
import styles from "./index.module.css";
import ItemProject from "@/components/user_projects_section/item_projects";
type Props = {};

const ProjectsSection: React.FC = (props: Props) => {
  return (
    <section id="project">
      <div className={styles.projects}>
        {/* ? SECTION TITLE */}
        <div>
          <SectionTitle>Layihələrim</SectionTitle>
        </div>
        {/* ? PROJECT'LER*/}
        <div className={styles["projects-content"]}>
          <ItemProject />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
