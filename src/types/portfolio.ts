export type SectionId = "home" | "about" | "education" | "works" | "contact";

export type Skill = {
  name: string;
};

export type EducationIconKind = "elementary" | "highschool" | "bachelor";

export type EducationItem = {
  year: string;
  label: string;
  school: string;
  location: string;
  detail?: string;
  status?: string;
  icon: EducationIconKind;
};

export type WorkItem = {
  title: string;
  year: string;
  description: string;
  image: string;
};

export type ContactIconKind = "email" | "github";

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  icon: ContactIconKind;
};

export type NavLink = {
  id: SectionId;
  label: string;
};
