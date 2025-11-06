import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jam Duke Mësuar",
  description: "Një mbishkrim i bukur i frymëzuar nga tipografia tradicionale shqiptare"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
