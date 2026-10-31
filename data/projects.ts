import type { ProjectItem } from "@/lib/types";

/**
 * Add new projects by appending an object to this array.
 * This list starts empty and is ready to be filled in later.
 *
 * Example:
 * {
 *   id: "project-01",
 *   title: { id: "Nama Proyek", en: "Project Name" },
 *   description: { id: "Deskripsi proyek.", en: "Project description." },
 *   category: "Business",
 *   year: "2026",
 *   image: "/images/projects/project-01.jpg",
 *   skills: ["Business Development"],
 *   link: "",
 *   github: ""
 * }
 */
export const projects: ProjectItem[] = [];
