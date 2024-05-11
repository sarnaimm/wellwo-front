import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { initFlowbite } from "flowbite";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wellwo",
  description: "Wellwo development",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/w.png',
        href: '/images/w.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/w.png',
        href: '/images/w.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/w.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
