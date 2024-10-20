import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "../styles/reset.css";
import "../styles/global.css";
import Header from "@/sections/header";

export const metadata: Metadata = {
  title: "Mahir :: Web Developer",
  description:
    "I am a software engineer, developing web applications. Feel free to get in touch with me by mailing hasanlimahir1@gmail.com",
  keywords:
    "React js, html, Mern stack, Front end, Next js, javascript, Portfolio, Mahir Hasanli, Mahir, Hasanli, mahir, hasanli, mahirhasanli, Mahir.dev, mahirhasanli.vercel.app",
  authors: [{ name: "Mahir Hasanli" }],
  robots: "index, follow",
  openGraph: {
    title: "Mahir :: Web Developer",
    description:
      "I am a software engineer, developing web applications. Feel free to get in touch with me by mailing hasanlimahir1@gmail.com",
    url: "https://mahirhasanli.vercel.app",
    type: "website",
    images: [
      {
        url: "https://mahirhasanli.vercel.app/your-image.jpg", // burada layihənizin şəkil URL-nu əlavə edin
        width: 800,
        height: 600,
        alt: "Mahir Hasanli - Web Developer",
      },
    ],
  },
  twitter: {
    title: "Mahir :: Web Developer",
    description:
      "I am a software engineer, developing web applications. Feel free to get in touch with me by mailing hasanlimahir1@gmail.com",
    card: "summary_large_image", // Twitter kartı üçün geniş şəkil
  },
  applicationName: "Mahir.dev", // Tətbiq adı
};

const poppins = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  fallback: ["system-ui"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
