import { TypeContactForm } from "@/types";
import { postFetchData } from "./base_request";

export const postContactForm = (body: TypeContactForm) => {
  return postFetchData("message", body);
};
