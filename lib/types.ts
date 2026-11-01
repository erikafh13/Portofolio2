export type Lang = "id" | "en";

export type Localized = {
  id: string;
  en: string;
};

export type Text = string | Localized;

export type SkillItem = {
  name: string;
  category: "knowledge" | "technical" | "software";
};

export type EducationItem = {
  institution: string;
  location: Text;
  degree: Localized;
  period: Text;
  scoreLabel: Localized;
  scoreValue: string;
  coursework?: Localized[];
  certificate?: string;
};

export type ExperienceItem = {
  id: string;
  company: Text;
  position: Localized;
  location: Text;
  period: Text;
  summary: Localized;
  responsibilities: Localized[];
  skills?: string[];
  images?: string[];
  certificate?: string;
  publication?: { url: string; label: Localized };
};

export type OrganizationRole = {
  id: string;
  title: Localized;
  period: string;
  startYear: number;
  points: Localized[];
};

export type OrganizationItem = {
  id: string;
  name: string;
  roles: OrganizationRole[];
  images?: string[];
  certificate?: string;
};

export type EventItem = {
  id: string;
  name: Localized;
  location: string;
  role: Localized;
  period: string;
  details: Localized[];
  images?: string[];
  certificate?: string;
};

export type ProjectCategory = "Business" | "Design" | "Digital Marketing" | "Other";

export type ProjectItem = {
  id: string;
  title: Localized;
  description: Localized;
  category: ProjectCategory;
  year: string;
  image: string;
  skills: string[];
  link?: string;
  github?: string;
  caseStudy?: string;
  gallery?: string[];
};

export type AwardItem = {
  id: string;
  title: Localized;
  issuer: string;
  period: string;
  certificate?: string;
};

export type CertificationItem = {
  id: string;
  name: Localized;
  issuer: Text;
  date: Text;
  credentialId?: string;
  credentialUrl?: string;
  certificate?: string;
};

export type PublicationType = "Journal" | "Article" | "Scientific Paper" | "Other";

export type PublicationItem = {
  id: string;
  title: Localized;
  type: PublicationType;
  date: string;
  description: Localized;
  authors: string[];
  publisher: string;
  link?: string;
  image?: string;
};
