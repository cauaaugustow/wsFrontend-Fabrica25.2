import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const PoppinsMono = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "PokeHub",
  description: "Create pokemon site with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${PoppinsMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
