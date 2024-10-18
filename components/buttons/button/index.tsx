import React from "react";
import styles from "./index.module.css";

interface ButtonProps {
  children: string;
  // onClick: () => void;
  // className?: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button type="submit" className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
