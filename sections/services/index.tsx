import React from "react";
import styles from "./index.module.css";
import ItemServicesComponent from "@/components/user_services_section/item_services_component";
import SectionTitle from "@/components/user_section_title";
import { getDataServices } from "@/api/get_requests";

// const getData = async (): Promise<ServiceProps[]> => {
//   const res = await fetch(`${process.env.BASE_URL}/services`);
//   return res.json();
// };

const ServicesSection: React.FC = async () => {
  const servicesData = await getDataServices();

  return (
    <section id="services">
      <div className={styles.services}>
        <SectionTitle>Xidmətlərim</SectionTitle>
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
