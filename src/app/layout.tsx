import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendara",
  description: "A Next.js app with internationalization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
