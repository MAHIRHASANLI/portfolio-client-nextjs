import React from "react";
import UserContainer from "@/container/user";
type Props = {
  searchParams: { [key: string]: string | boolean };
};

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const HomePage = async ({ searchParams }: Props) => {
  if (searchParams.error === "true") {
    throw new Error("Error!!!!!");
  }
  await delay(1000);
  return <UserContainer />;
};

export default HomePage;
