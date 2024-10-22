import React from "react";
import MainSection from "@/sections/main";
import AboutSection from "@/sections/about";
import ServicesSection from "@/sections/services";
import ProjectsSection from "@/sections/project";
import ContactSection from "@/sections/contact";
import BackToTopButton from "@/components/buttons/back_to_top";
import Header from "@/sections/header";
import Footer from "@/sections/footer";

// type Props = {}

const UserContainer: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <MainSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <BackToTopButton />
      <Footer />
    </React.Fragment>
  );
};

export default UserContainer;
