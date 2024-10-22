import React from "react";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import "@/styles/error_page.css";
const openSans = Open_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  fallback: ["system ui"],
});

const NotFoundPage: React.FC = () => {
  return (
    <div className="cloak__wrapper">
      <div className="cloak__container">
        <div className="cloak"></div>
      </div>
      <div className={`info ${openSans.className}`}>
        <h2>NOT FOUND</h2>
        <h3>We can't find that page</h3>

        <Link href="/" replace={true}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
