"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang, Text } from "./types";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (value: Text) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "rico-portfolio-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "id" || stored === "en") {
      setLangState(stored);
    }
    setMounted(true);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const toggleLang = () => setLang(lang === "id" ? "en" : "id");

  const t = useMemo(() => {
    return (value: Text) =>
      typeof value === "string" ? value : lang === "id" ? value.id : value.en;
  }, [lang]);

  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{ lang: "en", setLang, toggleLang, t: (v) => (typeof v === "string" ? v : v.en) }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
