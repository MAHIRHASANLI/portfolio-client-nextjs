import {
  TypeMainSectionFetch,
  TypeAboutFetch,
  TypeServiceSection,
  TypeProjectSection,
  TypeMyContactData,
} from "@/types";
import { getFetchData } from "./base_request";

//? MAIN - sectionun sorgusu
export const getDataMain = (): Promise<TypeMainSectionFetch[]> => {
  return getFetchData("home");
};

//? ABOUT - sectionun sorgusu
export const getDataAbout = (): Promise<TypeAboutFetch[]> => {
  return getFetchData("about");
};

//? SERVICES - sectionun sorgusu
export const getDataServices = (): Promise<TypeServiceSection[]> => {
  return getFetchData("services");
};

//? PROJECTS - sectionun sorgusu
export const getDataProjects = (): Promise<TypeProjectSection[]> => {
  return getFetchData("project");
};

//? CONTACT DATA - sectionun sorgusu
export const getDataContact = (): Promise<TypeMyContactData[]> => {
  return getFetchData("mycontact");
};

//? SKILS and EXPERIENS and EDUCATION DATA -  sorgusu
export const getDataSkils = (category: string = "skills") => {
  return getFetchData("skills", `category=${category}`);
};
