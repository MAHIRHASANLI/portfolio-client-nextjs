"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./index.module.css";
import { FaArrowUp } from "react-icons/fa6";

const BackToTopButton = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopBtn && (
        <button onClick={scrollUp} className={style["btn-scroll"]}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
