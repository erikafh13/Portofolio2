import type { PublicationItem } from "@/lib/types";

/**
 * Add publications by appending objects to this array.
 * While empty, the "Publications" block is hidden automatically.
 */
export const publications: PublicationItem[] = [
  {
    id: "jtera-tcn-lifepo4-2026",
    title: {
      id: "Short-Term Capacity Estimation of 4S LiFePO4 Battery Under Partial Constant Current Cycling Based on Temporal Convolutional Network",
      en: "Short-Term Capacity Estimation of 4S LiFePO4 Battery Under Partial Constant Current Cycling Based on Temporal Convolutional Network"
    },
    type: "Journal",
    date: "2026",
    description: {
      id: "Mengusulkan kerangka estimasi kapasitas jangka pendek berbasis Temporal Convolutional Network (TCN) untuk paket baterai 4S LiFePO\u2084 12.8V 6Ah, dengan sistem akuisisi data (DAQ) berbasis Raspberry Pi Pico.",
      en: "Proposes a Temporal Convolutional Network (TCN) framework for short-term capacity estimation of a 4S LiFePO\u2084 12.8V 6Ah battery pack, using a Raspberry Pi Pico-based data acquisition (DAQ) system."
    },
    authors: ["Mohammad Rico Ferdian Khoirunizar", "Denny Irawan"],
    publisher: "JTERA (Jurnal Teknologi Rekayasa), Vol. 11 No. 1, Juni 2026, pp. 117\u2013130",
    link: "https://doi.org/10.31544/jtera.v11.i1.2026.117-130",
    image: ""
  }
];
