import type { PublicationItem } from "@/lib/types";

/**
 * Add publications by appending objects to this array.
 * While empty, the "Publications" block is hidden automatically.
 *
 * NOTE: title below is a placeholder based on the CV project entry.
 * Replace it (and add authors) with the exact article title from the journal page.
 */
export const publications: PublicationItem[] = [
  {
    id: "jtera-lithium-ion-battery-2026",
    title: {
      id: "Riset Baterai Lithium-Ion: Akuisisi Data, Analisis, dan Forecasting Deep Learning",
      en: "Lithium-Ion Battery Research: Data Acquisition, Analysis, and Deep Learning Forecasting"
    },
    type: "Journal",
    date: "2026",
    description: {
      id: "Publikasi jurnal dari proyek riset doktoral Universitas Muhammadiyah Gresik tentang akuisisi data, analisis, dan forecasting baterai lithium-ion.",
      en: "Journal publication from the Universitas Muhammadiyah Gresik doctoral research project on lithium-ion battery data acquisition, analysis, and forecasting."
    },
    authors: [],
    publisher: "JTERA, Vol. 11 No. 1 (2026), pp. 117–130 · doi.org/10.31544/jtera.v11.i1.2026.117-130",
    link: "https://doi.org/10.31544/jtera.v11.i1.2026.117-130",
    image: ""
  }
];
