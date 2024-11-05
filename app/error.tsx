"use client";
import React from "react";
import ErrorComponent from "@/components/error";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description:
    "I am a software engineer, developing web applications. Feel free to get in touch with me by mailing hasanlimahir1@gmail.com",
};

const ErrorPage: React.FC = () => {
  return <ErrorComponent />;
};

export default ErrorPage;
