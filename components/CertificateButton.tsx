"use client";

import { useState } from "react";
import { Award } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import CertificateModal from "./CertificateModal";

export default function CertificateButton({ src, title }: { src?: string; title: string }) {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();

  if (!src) return null;

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        aria-label={`${lang === "id" ? "Lihat sertifikat" : "View certificate"} ${title}`}
        title={lang === "id" ? "Lihat sertifikat" : "View certificate"}
        className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-border bg-white text-accent shadow-sm transition hover:-translate-y-0.5 hover:border-accent dark:border-border-dark dark:bg-card-dark dark:text-accent-dark"
      >
        <Award className="h-4 w-4" />
      </button>
      {open && <CertificateModal src={src} title={title} onClose={() => setOpen(false)} />}
    </>
  );
}
