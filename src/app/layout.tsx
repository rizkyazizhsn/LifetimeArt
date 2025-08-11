import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "LifetimeArt",
    template: "%s | LifetimeArt",
  },
  description: "Your trusted partner for quality home improvement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
