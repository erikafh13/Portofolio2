import type { CertificationItem } from "@/lib/types";

/**
 * Add new certifications by appending an object to this array.
 * Fields left empty (credentialId, credentialUrl, certificate) can be
 * filled in later without changing any component code.
 */
export const certifications: CertificationItem[] = [
  {
    id: "magang-petrokimia-gresik",
    name: {
      id: "Sertifikat Magang \u2014 Dep.\u00a0Pemeliharaan\u00a0I",
      en: "Internship Certificate \u2014 Maintenance\u00a0Dept.\u00a0I"
    },
    issuer: "PT Petrokimia Gresik",
    date: { id: "1 Des 2025 – 31 Jan 2026", en: "1 Dec 2025 – 31 Jan 2026" },
    credentialId: "00702/DL.06.01/1/2026",
    credentialUrl: "",
    certificate: "/certification/Sertifikat-Magang-Petrokimia-Gresik.pdf"
  }
];
