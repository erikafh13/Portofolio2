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
      id: "Sertifikat Magang / Praktik Kerja Lapangan — Dep. Pemeliharaan I",
      en: "Internship / Field Work Practice Certificate — Maintenance Dept. I"
    },
    issuer: "PT Petrokimia Gresik",
    date: "1 Des 2025 – 31 Jan 2026",
    credentialId: "00702/DL.06.01/1/2026",
    credentialUrl: "",
    certificate: "/certification/Sertifikat-Magang-Petrokimia-Gresik.pdf"
  }
];
