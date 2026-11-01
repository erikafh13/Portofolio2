"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail, MessageCircle, ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { profile } from "@/data/profile";
import { contact } from "@/data/contact";
import DownloadCVButton from "./DownloadCVButton";

const badges = [
  { id: "Teknik Elektro", en: "Electrical Engineering" },
  { id: "Pemeliharaan Industri", en: "Industrial Maintenance" },
  { id: "Analisis Sistem Tenaga", en: "Power System Analysis" },
  { id: "Energi Terbarukan", en: "Renewable Energy" }
];

// Badge positions sit around the frame (corners / edges) so the face stays clear.
const badgePositions = [
  "left-0 top-[18%] -translate-x-1/2",
  "right-0 top-4 translate-x-1/2",
  "right-0 top-[68%] translate-x-1/2",
  "left-0 bottom-6 -translate-x-1/2"
];

function ProfileVisual() {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const initials = profile.initials;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[200px] min-[380px]:max-w-[210px] sm:max-w-[340px] lg:ml-auto lg:mr-[4.5rem] lg:w-[calc(100%-4.5rem)] xl:max-w-[420px]">
      <div
        className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,#0E2A5E_0%,#2F6FED_100%)] opacity-90"
        aria-hidden="true"
      />
      <div
        className="absolute -inset-3 -z-10 rounded-[2.4rem] border border-navy/10 dark:border-white/10"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          color: "rgba(14,42,94,0.12)"
        }}
        aria-hidden="true"
      />
      <div className="corner-ticks absolute inset-3 overflow-hidden rounded-[1.6rem] bg-bg-soft ring-1 ring-white/40 dark:bg-card-dark dark:ring-white/10">
        {!imgError ? (
          <Image
            src={profile.profileImage}
            alt={profile.name}
            fill
            sizes="360px"
            className="object-cover"
            onError={() => setImgError(true)}
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-accent text-6xl font-bold text-white">
            {initials}
          </div>
        )}
      </div>

      {badges.map((badge, index) => (
        // Wrapper handles the half-in / half-out placement on the frame edge;
        // the inner motion element handles the entrance animation.
        <div key={badge.en} className={`absolute z-20 ${badgePositions[index]}`}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
            className="whitespace-nowrap rounded-full border border-border bg-white px-2.5 py-1 text-[10px] font-semibold text-navy shadow-soft dark:border-border-dark dark:bg-card-dark dark:text-white sm:px-3 sm:py-1.5 sm:text-xs"
          >
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle dark:bg-accent-dark" />
            {t(badge)}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const { lang, t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 bottom-0 -z-10 bg-gradient-to-b from-bg-soft to-white dark:from-bg-dark-soft dark:to-bg-dark"
        aria-hidden="true"
      />
      <div
        className="bg-mesh pointer-events-none absolute inset-x-0 top-0 bottom-0 -z-10 animate-drift"
        aria-hidden="true"
      />
      <div
        className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
        aria-hidden="true"
      />

      <div className="container-content grid items-center gap-10 pb-6 sm:pb-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 xl:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex max-w-full items-start gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-medium text-text-secondary backdrop-blur-sm dark:border-border-dark dark:bg-card-dark/80 dark:text-text-dark-secondary">
            <span className="relative mt-1 flex h-2 w-2 flex-none">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 dark:bg-accent-dark/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent dark:bg-accent-dark" />
            </span>
            {t(profile.role)}
          </span>

          <h1 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-tight text-text-primary min-[400px]:text-4xl sm:text-5xl xl:text-6xl dark:text-text-dark-primary">
            {t(profile.heroHeading)}
          </h1>

          <p className="mt-5 max-w-2xl text-base text-text-secondary sm:text-lg xl:text-xl dark:text-text-dark-secondary">
            {t(profile.heroSubheading)}
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-secondary xl:text-base dark:text-text-dark-secondary">
            {t(profile.heroIntro)}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("experience")}
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-gold transition hover:-translate-y-0.5 hover:bg-accent dark:bg-accent-dark dark:text-navy dark:hover:bg-accent"
            >
              {lang === "id" ? "Lihat Pengalaman" : "View Experience"}
              <ArrowDown className="h-4 w-4" />
            </button>
            <DownloadCVButton variant="outline" />
          </div>

          <div className="mt-9 flex items-center gap-4">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-dark-secondary dark:hover:text-accent-dark"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-dark-secondary dark:hover:text-accent-dark"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-border-dark dark:text-text-dark-secondary dark:hover:text-accent-dark"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <ProfileVisual />
        </motion.div>
      </div>
    </section>
  );
}
