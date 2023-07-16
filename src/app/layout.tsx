import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bender Bot",
  description: "Bender bot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="bg-gradient-to-br from-base-100 to-black/40 h-screen"
      lang="pt-BR"
      data-theme="dark"
    >
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
