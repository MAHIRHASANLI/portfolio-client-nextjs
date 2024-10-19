"use client";
import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import Image from "next/image";

interface CompetenciesType {
  about: string;
  category: string;
  image: string;
  name: string;
  _id: string;
}

const getData = async (category: string): Promise<CompetenciesType[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/skills?category=${category}`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

const CompetenciesComponent: React.FC = () => {
  const [competenciesData, setCompetenciesData] = useState<CompetenciesType[]>(
    []
  );
  useEffect(() => {
    getData("skills").then((res) => setCompetenciesData(res));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const value = e.currentTarget.value;
    getData(value).then((res) => setCompetenciesData(res));
    console.log(competenciesData.map(({ image }) => console.log(image)));
  };

  useEffect(() => {
    const activeBtn = document.getElementById("active_btn");
    const btnsElement = document.querySelectorAll<HTMLButtonElement>(".btn");

    btnsElement.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".button")?.classList.remove("button");
        btn.classList.add("button");
      });
    });

    return () => {
      // Event listener-ləri təmizləmək
      btnsElement.forEach((btn) => btn.removeEventListener("click", () => {}));
    };
  }, []);
  return (
    <div className={style.competencies}>
      {/*//*  buttons */}
      <div style={{ paddingBottom: "20px" }}>
        <button
          id="active_btn"
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
                <Image src={image} alt={name} title={name} fill />
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
