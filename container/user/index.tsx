import React from "react";
import MainSection from "@/sections/main";
import AboutSection from "@/sections/about";
import ServicesSection from "@/sections/services";

// type Props = {}

const UserContainer: React.FC = () => {
  return (
    <React.Fragment>
      <MainSection />
      <AboutSection />
      <ServicesSection />
    </React.Fragment>
  );
};

export default UserContainer;
