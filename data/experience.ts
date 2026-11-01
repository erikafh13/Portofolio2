import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    id: "petrokimia-electrical-engineer-intern",
    company: "PT Petrokimia Gresik",
    position: {
      id: "Electrical Engineer Intern",
      en: "Electrical Engineer Intern"
    },
    location: { id: "Gresik, Jawa Timur", en: "Gresik, East Java" },
    period: { id: "Des 2025 – Jan 2026", en: "Dec 2025 – Jan 2026" },
    summary: {
      id: "Magang di Departemen Pemeliharaan I: penggantian motor kritikal 6kV, FAT motor 6kV 400kW, dan analisis hubung singkat dengan ETAP (IEC 60909).",
      en: "Internship at Maintenance Department I: critical 6kV motor replacement, FAT of a 6kV 400kW motor, and short-circuit analysis with ETAP (IEC 60909)."
    },
    responsibilities: [
      {
        id: "Berhasil melaksanakan penggantian motor kritikal 6kV di area berisiko tinggi secara aman, optimal, dan di bawah tekanan operasional, dengan koordinasi tim yang solid.",
        en: "Successfully executed the replacement of a critical 6kV motor in a high-risk area safely, optimally, and under operational pressure through solid team coordination."
      },
      {
        id: "Berkontribusi langsung pada kelancaran dan keberhasilan pelaksanaan Factory Acceptance Test (FAT) motor 6kV 400kW di ABB Surabaya.",
        en: "Contributed directly to the smooth and successful execution of the Factory Acceptance Test (FAT) for a 6kV 400kW motor at ABB Surabaya."
      },
      {
        id: "Menganalisis gangguan hubung singkat (short-circuit fault) jaringan distribusi listrik 6kV pada transformator TR-2281-B.",
        en: "Analyzed short-circuit faults within the 6kV electrical distribution network at transformer TR-2281-B."
      },
      {
        id: "Mengembangkan dan menjalankan simulasi sistem tenaga listrik berbasis ETAP untuk mengevaluasi kondisi gangguan hubung singkat sesuai dengan standar IEC 60909.",
        en: "Developed and conducted power system simulations using ETAP to evaluate short-circuit fault conditions in accordance with IEC 60909 standards."
      },
      {
        id: "Menganalisis arus hubung singkat dan mengevaluasi kondisi gangguan pada jaringan distribusi industri untuk menilai perilaku sistem kelistrikan serta mendukung evaluasi koordinasi sistem proteksi, keandalan, dan keselamatan.",
        en: "Analyzed short-circuit currents and evaluated fault conditions within an industrial distribution network to assess electrical system behavior, while supporting the evaluation of protection system coordination, reliability, and safety."
      }
    ],
    skills: ["ETAP", "IEC 60909", "Short-Circuit Analysis", "6kV Motor", "FAT"],
    images: [
      "/experience/Petrokimia/foto-1.jpg",
      "/experience/Petrokimia/foto-2.jpg",
      "/experience/Petrokimia/foto-3.jpg",
      "/experience/Petrokimia/foto-4.jpg",
      "/experience/Petrokimia/foto-5.jpg",
      "/experience/Petrokimia/foto-6.jpg",
      "/experience/Petrokimia/foto-7.jpg"
    ],
    certificate: "/certification/Sertifikat-Magang-Petrokimia-Gresik.pdf"
  },
  {
    id: "wiharta-karya-agung-electrical-technician",
    company: "PT Wiharta Karya Agung",
    position: {
      id: "Electrical Technician",
      en: "Electrical Technician"
    },
    location: { id: "Gresik, Jawa Timur", en: "Gresik, East Java" },
    period: "Feb 2022 – Mar 2023",
    summary: {
      id: "Rewinding motor induksi satu fasa dan tiga fasa serta inspeksi, pemeliharaan, dan troubleshooting motor industri, panel MV/LV, dan PLC.",
      en: "Single-phase and three-phase induction motor rewinding, plus inspection, maintenance, and troubleshooting of industrial motors, MV/LV panels, and PLCs."
    },
    responsibilities: [
      {
        id: "Rewinding motor induksi satu fasa dan tiga fasa berkapasitas 0,18 kW, 0,25 kW, 0,75 kW, 1,5 kW, 2,2 kW, dan 4 kW.",
        en: "Executed single-phase and three-phase induction motor rewinding, handling motor ratings of 0.18kW, 0.25kW, 0.75kW, 1.5kW, 2.2kW, and 4kW."
      },
      {
        id: "Melakukan proses pemeriksaan, pembongkaran, dan perakitan kembali motor pada kegiatan perbaikan dan pemeliharaan.",
        en: "Performed inspection, disassembly, and reassembly of motors as part of repair and maintenance activities."
      },
      {
        id: "Melakukan pemeriksaan awal pada motor listrik untuk mengidentifikasi kerusakan serta potensi gangguan kelistrikan atau mekanis lainnya.",
        en: "Conducted initial assessments of electric motors to identify damage and potential electrical or mechanical issues."
      },
      {
        id: "Menerapkan prosedur keselamatan kelistrikan saat melakukan rewinding motor serta pemeliharaan peralatan.",
        en: "Applied electrical safety procedures during motor rewinding and equipment maintenance."
      },
      {
        id: "Melakukan inspeksi, pemeliharaan rutin, dan troubleshooting secara berkala pada motor industri, panel MV/LV, serta sistem PLC untuk meminimalkan downtime dan menjaga performa optimal sistem kelistrikan.",
        en: "Performed regular inspections, routine maintenance, and troubleshooting on industrial motors, MV/LV panels, and PLC systems to minimize downtime and maintain optimal performance of electrical systems."
      }
    ],
    skills: ["Motor Rewinding", "MV/LV Panel", "PLC", "Troubleshooting", "Electrical Safety"],
    images: [],
    certificate: ""
  },
  {
    id: "artech-service-ac-technician",
    company: "ARTECH Service AC",
    position: {
      id: "Air Conditioning Technician",
      en: "Air Conditioning Technician"
    },
    location: { id: "Gresik, Jawa Timur", en: "Gresik, East Java" },
    period: "Jun 2021 – Jan 2022",
    summary: {
      id: "Servis, pemeliharaan preventif, dan diagnosis kerusakan sistem pendingin udara.",
      en: "Servicing, preventive maintenance, and fault diagnosis of air conditioning systems."
    },
    responsibilities: [
      {
        id: "Mengoptimalkan kinerja sistem pendingin udara melalui pembersihan menyeluruh, servis rutin, dan pemeliharaan preventif.",
        en: "Optimized the performance of air conditioning systems through thorough cleaning, routine servicing, and preventive maintenance."
      },
      {
        id: "Mendiagnosis masalah teknis dengan memeriksa tekanan refrigeran, sistem kelistrikan, serta komponen pendingin untuk mengidentifikasi kerusakan dan melaksanakan perbaikan yang efektif.",
        en: "Diagnosed technical issues by checking refrigerant pressure, electrical systems, and cooling components to identify malfunctions and carry out effective repairs."
      }
    ],
    skills: ["Preventive Maintenance", "Diagnostics", "Refrigeration"],
    images: [],
    certificate: ""
  },
  {
    id: "umg-lithium-ion-battery-research",
    company: {
      id: "Universitas Muhammadiyah Gresik — Proyek Riset Doktoral",
      en: "Universitas Muhammadiyah Gresik — Doctoral Research Project"
    },
    position: {
      id: "Riset Energi Terbarukan: Akuisisi Data, Analisis, dan Forecasting Baterai Lithium-Ion",
      en: "Renewable Energy Research: Lithium-Ion Battery Data Acquisition, Analysis, and Forecasting"
    },
    location: { id: "Gresik, Jawa Timur", en: "Gresik, East Java" },
    period: { id: "Sep 2025 – Sekarang", en: "Sep 2025 – Present" },
    summary: {
      id: "Berkontribusi pada proyek riset doktoral selama satu tahun yang berfokus pada pengambilan, analisis, dan forecasting data baterai.",
      en: "Contributed to a one-year doctoral research project focused on lithium-ion battery monitoring, data analysis, and performance forecasting."
    },
    responsibilities: [
      {
        id: "Berkontribusi dalam proyek penelitian doktoral selama satu tahun yang berfokus pada pengambilan, analisis, dan forecasting data baterai.",
        en: "Contributed to a one-year doctoral research project focused on lithium-ion battery monitoring, data analysis, and performance forecasting."
      },
      {
        id: "Membantu pengembangan dan penerapan sistem akuisisi data (DAQ) untuk mengumpulkan serta mencatat data operasional baterai.",
        en: "Assisted in developing and implementing data acquisition (DAQ) systems to collect and record battery operating data."
      },
      {
        id: "Melakukan pra-pemrosesan, analisis, dan interpretasi data untuk mengidentifikasi pola kinerja dan degradasi baterai.",
        en: "Performed data preprocessing, analysis, and interpretation to identify battery performance and degradation patterns."
      },
      {
        id: "Mengembangkan model forecasting berbasis pembelajaran mendalam (deep learning) untuk menganalisis perilaku baterai dan memprediksi kinerja di masa mendatang.",
        en: "Applied deep learning-based forecasting techniques to analyze battery behavior and predict future performance."
      },
      {
        id: "Mendukung kegiatan penelitian yang mencakup pengujian baterai, pengelolaan data eksperimental, dan evaluasi kinerja model.",
        en: "Supported research activities involving battery testing, experimental data management, and evaluation of model performance."
      }
    ],
    skills: ["Renewable Energy", "DAQ", "Deep Learning", "Data Analysis", "Python", "Lithium-Ion Battery"],
    publication: {
      url: "https://doi.org/10.31544/jtera.v11.i1.2026.117-130",
      label: { id: "Lihat Publikasi Jurnal", en: "View Journal Publication" }
    },
    images: [
      "/experience/Riset-Baterai/foto-1.jpg",
      "/experience/Riset-Baterai/foto-2.jpg",
      "/experience/Riset-Baterai/foto-3.jpg",
      "/experience/Riset-Baterai/foto-4.jpg",
      "/experience/Riset-Baterai/foto-5.jpg",
      "/experience/Riset-Baterai/foto-6.jpg"
    ],
    certificate: ""
  }
];
