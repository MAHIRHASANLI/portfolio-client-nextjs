"use client";
import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import Image from "next/image";
import { CompetenciesType } from "@/types";
import { getDataSkils } from "@/api/get_requests";

// const getData = async (category: string): Promise<CompetenciesType[]> => {
//   const res = await fetch(
//     `${process.env.BASE_URL}/skills?category=${category}`
//   );
//   if (!res.ok) throw new Error("Failed to fetch data");
//   return res.json();
// };

const CompetenciesComponent: React.FC = () => {
  const [competenciesData, setCompetenciesData] = useState<CompetenciesType[]>(
    []
  );
  useEffect(() => {
    getDataSkils().then((res) => setCompetenciesData(res));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const value = e.currentTarget.value;
    getDataSkils(value).then((res) => setCompetenciesData(res));
  };

  useEffect(() => {
    const btnsElement = document.querySelectorAll<HTMLButtonElement>(".btn");

    btnsElement.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".button")?.classList.remove("button");
        btn.classList.add("button");
      });
    });

    return () => {
      btnsElement.forEach((btn) => btn.removeEventListener("click", () => {}));
    };
  }, []);
  return (
    <div className={style.competencies}>
      {/*//*  buttons */}
      <div>
        <button
          onClick={(e) => handleClick(e)}
          className="btn button"
          value="skills"
        >
          Skills
        </button>
        <button
          onClick={(e) => handleClick(e)}
          className="btn"
          value="experience"
        >
          Experience
        </button>
        <button
          onClick={(e) => handleClick(e)}
          className="btn"
          value="education"
        >
          Education
        </button>
      </div>
      {/* //* Skills Experience Education */}
      <div className={style["scilss-grid"]}>
        {competenciesData &&
          competenciesData.map(({ name, about, image, _id }) => (
            <div className={style["scilss-item"]} key={_id}>
              <div className={style.img}>
                <Image
                  src={image}
                  alt={name}
                  title={name}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div>
                <i>{about}</i>
                <p style={{ color: "#333" }}>{name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CompetenciesComponent;
