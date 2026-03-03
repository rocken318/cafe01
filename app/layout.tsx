import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Café Étoile — A moment of serenity in every cup.",
  description:
    "Café Étoile is a sanctuary of slow mornings and refined flavors. Single-origin roasts, organic pastries, and a space designed for stillness.",
  openGraph: {
    title: "Café Étoile",
    description: "A moment of serenity in every cup.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
