import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task bot forms",
  description: "Taskbot forms for getting info from user",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
