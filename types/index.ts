//? MAIN - sectionun TYPE'leri
export interface TypeMainSectionFetch {
  _id: string;
  name: string;
  surname: string;
  profession: string;
  image: string;
}

//? ABOUT - sectionun TYPE'leri
export interface TypeAboutFetch {
  _id: string;
  name: string;
  profession: string;
  image: string;
}

//? CompetenciesType(SKILS) - TYPE'leri
export interface CompetenciesType {
  about: string;
  category: string;
  image: string;
  name: string;
  _id: string;
}

//? SERVICE - sectionun TYPE'leri
export interface TypeServiceSection {
  _id: string;
  services: string;
  icons?: string;
}

//? PROJECTS - sectionun TYPE'leri
export interface TypeProjectSection {
  _id: string;
  name: string;
  title: string;
  image: string;
  webkitURL: string;
}

//? MyContactData -Social - sectionun TYPE'leri
export interface TypeMyContactData {
  _id: string;
  email: string;
  phone: string;
  facebook: string;
  linkedn: string;
  github: string;
  mydata: string;
  instagram: string;
}

//? CONTACT bolumunun Form - TYPE'leri
export interface TypeContactForm {
  name: string;
  surname: string;
  email: string;
  message: string;
}
