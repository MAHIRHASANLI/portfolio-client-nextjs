import React from "react";
import UserContainer from "@/container/user";
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
