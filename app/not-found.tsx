import React from "react";
import NotFoundComponent from "@/components/not_found";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description:
    "I am a software engineer, developing web applications. Feel free to get in touch with me by mailing hasanlimahir1@gmail.com",
};

const NotFoundPage: React.FC = () => {
  return <NotFoundComponent />;
};

export default NotFoundPage;
