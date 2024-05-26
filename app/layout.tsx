import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RootLayoutBody } from "./_components/RootLayoutBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "splat-stat-web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <RootLayoutBody>{children}</RootLayoutBody>
      </body>
    </html>
  );
}
