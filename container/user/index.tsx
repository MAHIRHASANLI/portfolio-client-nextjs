import React from "react";
import Header from "@/sections/header";
import MainSection from "@/sections/main";
import AboutSection from "@/sections/about";

// type Props = {}

const UserContainer: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <MainSection />
      <AboutSection />
    </React.Fragment>
  );
};

export default UserContainer;
