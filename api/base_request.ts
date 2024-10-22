import { TypeContactForm } from "@/types";
import { BASE_URL } from "./base_url";

//TODO GET - sorgusu
export const getFetchData = async (
  pathname: string = "",
  category: string = ""
) => {
  try {
    const response = await fetch(`${BASE_URL}/${pathname}?${category}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(`Fetch error: ${error}`);
  }
};

//TODO POST - sorgusu
export const postFetchData = async (
  pathname: string = "",
  body: TypeContactForm
) => {
  try {
    const response = await fetch(`${BASE_URL}/${pathname}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(`Fetch error: ${error}`);
  }
};
