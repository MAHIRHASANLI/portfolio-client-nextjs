import React from "react";
import MainSection from "@/sections/main";
import AboutSection from "@/sections/about";
import ServicesSection from "@/sections/services";
import ProjectsSection from "@/sections/project";
import ContactSection from "@/sections/contact";

// type Props = {}

const UserContainer: React.FC = () => {
  return (
    <React.Fragment>
      <MainSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </React.Fragment>
  );
};

export default UserContainer;
