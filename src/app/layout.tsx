import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "JS Barber | Salon de Coiffure & Barbier à Cugnaux",
  description: "JS Barber, votre barbier et salon de coiffure homme tendance à Cugnaux. Coupes stylées, taille de barbe et soins pour hommes. Prenez rendez-vous dès maintenant !",
  keywords: "barbier à Cugnaux, JS Barber Cugnaux, coiffeur homme tendance à Cugnaux, barber shop stylé Cugnaux, salon de coiffure homme, taille de barbe, coupe homme moderne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
