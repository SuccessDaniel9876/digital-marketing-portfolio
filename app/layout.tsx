import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Success Daniel — Digital Designer",
  description: "Beautiful websites and digital experiences designed to help businesses stand out.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
