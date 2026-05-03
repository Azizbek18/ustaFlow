import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Brauzer va mobil qurilmalar uchun UI sozlamalari
export const viewport: Viewport = {
  themeColor: "#76B900", // Loyihangizning asosiy rangi (masalan, NVIDIA yashili)
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Ijtimoiy tarmoqlar (Telegram, Instagram, LinkedIn) uchun asosiy metadata
export const metadata: Metadata = {
  title: {
    default: "UstaFlow — Servis Bizneslari Ekotizimi",
    template: "%s | UstaFlow",
  },
  description: "Xizmat ko'rsatish sohasidagi tadbirkorlar uchun avtomatlashtirilgan boshqaruv platformasi.",
  keywords: ["UstaFlow", "servis", "avtomatlashtirish", "startup", "nextjs", "uzbekistan"],
  authors: [{ name: "Azizbek" }],
  
  // Open Graph (Telegram, Facebook, Instagram preview uchun)
  openGraph: {
    title: "UstaFlow | Kelajak Servis Tizimi",
    description: "Biznesingizni raqamlashtiring va mijozlar bilan ishlashni yangi bosqichga olib chiqing.",
    url: "https://ustaflow.uz",
    siteName: "UstaFlow",
    images: [
      {
        url: "https://ustaflow.uz/og-image.jpg", // public papkasidagi rasm manzili
        width: 1200,
        height: 630,
        alt: "UstaFlow Dashboard Preview",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },

  // Twitter (X) preview uchun
  twitter: {
    card: "summary_large_image",
    title: "UstaFlow — Kelajak Servisi",
    description: "Servis bizneslarini boshqarish uchun eng zamonaviy yechim.",
    images: ["https://ustaflow.uz/og-image.jpg"],
  },

  // Qidiruv tizimlari uchun robot sozlamalari
  robots: {
    index: true,
    follow: true,
  },
  
  // Favicon (brauzer tabidagi logotip)
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-[#0B0B0F] dark:text-white transition-colors duration-300">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}