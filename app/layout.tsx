import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { LanguageProvider } from "@/lib/language-context";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"]
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ricoferdiank.vercel.app"),
  title: "Mohammad Rico Ferdian Khoirunizar | Electrical Engineering & Power System Analysis",
  description:
    "Portfolio of Mohammad Rico Ferdian Khoirunizar, Junior Electrical Engineer with experience in industrial maintenance, power system analysis (ETAP, IEC 60909), and lithium-ion battery research.",
  openGraph: {
    title: "Mohammad Rico Ferdian Khoirunizar | Electrical Engineering & Power System Analysis",
    description:
      "Portfolio of Mohammad Rico Ferdian Khoirunizar, Junior Electrical Engineer with experience in industrial maintenance, power system analysis (ETAP, IEC 60909), and lithium-ion battery research.",
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Rico Ferdian Khoirunizar | Electrical Engineering & Power System Analysis",
    description:
      "Portfolio of Mohammad Rico Ferdian Khoirunizar, Junior Electrical Engineer with experience in industrial maintenance, power system analysis (ETAP, IEC 60909), and lithium-ion battery research."
  }
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('rico-portfolio-theme');
    var theme = stored;
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
