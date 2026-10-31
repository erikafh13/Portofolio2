"use client";

import { useLanguage } from "@/lib/language-context";
import { skills } from "@/data/skills";

const groups = [
  { key: "knowledge", title: { id: "Pengetahuan", en: "Knowledge" } },
  { key: "technical", title: { id: "Teknis", en: "Technical" } },
  { key: "software", title: { id: "Software", en: "Software" } }
] as const;

export default function Skills() {
  const { lang } = useLanguage();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {groups.map((group, index) => (
        <div
          key={group.key}
          className={`rounded-2xl border border-border bg-white p-5 dark:border-border-dark dark:bg-card-dark ${
            index === groups.length - 1 && groups.length % 2 === 1 ? "sm:col-span-2" : ""
          }`}
        >
          <h4 className="font-display text-base font-semibold text-text-primary dark:text-text-dark-primary">
            {group.title[lang]}
          </h4>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {skills
              .filter((s) => s.category === group.key)
              .map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-border bg-bg-soft px-2.5 py-1 text-xs font-medium text-text-primary dark:border-border-dark dark:bg-bg-dark-soft dark:text-text-dark-primary"
                >
                  {skill.name}
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
