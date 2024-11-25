import React from "react";
import UserContainer from "@/container/user";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahir Hasanli :: Web Developer",
  description:
    "I am a software engineer, developing web applications. Feel free to get in touch with me by mailing hasanlimahir1@gmail.com",
  keywords:
    "html, javascript,typescript, react, react js, next, next js, node,node js, tailwind, css,developer, Mern stack, Frontend,  Portfolio, Mahir Hasanli,Mahir Hasani, Mahir Həsənli, Mahir, Hasanli, mahir, hasanli, mahirhasanli, mahirhasani, Mahir.dev, mahirhasani.vercel.app",
  authors: [{ name: "Mahir Hasanli" }],
  robots: "index, follow",
  openGraph: {
    title: "Mahir Hasanli :: Web Developer",
    description:
      "I am a software engineer, developing web applications. Feel free to get in touch with me by mailing hasanlimahir1@gmail.com",
    url: "https://mahirhasani.vercel.app",
    type: "website",
  },
  twitter: {
    title: "Mahir Hasanli :: Web Developer",
    description:
      "I am a software engineer, developing web applications. Feel free to get in touch with me by mailing hasanlimahir1@gmail.com",
    card: "summary_large_image",
  },
};

// type PropsPage = {
//   searchParams: { [key: string]: string | boolean };
// };

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const HomePage: React.FC = async () => {
  // if (searchParams.error === "true") {
  //   throw new Error("Error!!!!!");
  // }
  await delay(500);
  return <UserContainer />;
};

export default HomePage;
