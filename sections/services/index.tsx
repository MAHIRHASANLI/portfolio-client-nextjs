import React from "react";
import styles from "./index.module.css";
import ItemServicesComponent from "@/components/user_services_component/item_services_component";
import SectionTitle from "@/components/user_section_title";
interface ServiceProps {
  _id: string;
  services: string;
  icons: string;
}

const getData = async (): Promise<ServiceProps[]> => {
  const res = await fetch(`${process.env.BASE_URL}/services`);
  return res.json();
};

const ServicesSection: React.FC = async () => {
  const servicesData = await getData();

  return (
    <section id="services" className={styles.services}>
      <div>
        <SectionTitle>My Services</SectionTitle>
        <div className={styles.wrapper}>
          {servicesData &&
            servicesData.map(({ _id, services }) => (
              <ItemServicesComponent key={_id} services={services} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
