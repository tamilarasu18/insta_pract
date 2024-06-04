import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import dynamic from "next/dynamic";

const ReduxProvider = dynamic(() => import("@/store/redux-provider"), {
  ssr: false
});

export const metadata: Metadata = {
  title: "InstaPract",
  description: "User centric teleconsulting, expert opinion platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider> {children}</ReduxProvider>
      </body>
    </html>
  );
}
