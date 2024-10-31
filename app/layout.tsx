import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/reset.css";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Mahir :: Web Developer",
  description:
    "I am a software engineer, developing web applications. Feel free to get in touch with me by mailing hasanlimahir1@gmail.com",
  keywords:
    "html, javascript,typescript, react,react js, next, next js, node,node js, tailwind, css,developer, Mern stack, Frontend,  Portfolio, Mahir Hasanli, Mahir, Hasanli, mahir, hasanli, mahirhasanli, Mahir.dev, mahirhasanli.vercel.app",
  authors: [{ name: "Mahir Hasanli" }],
  robots: "index, follow",
  openGraph: {
    title: "Mahir :: Web Developer",
    description:
      "I am a software engineer, developing web applications. Feel free to get in touch with me by mailing hasanlimahir1@gmail.com",
    url: "https://mahirhasani.vercel.app",
    type: "website",
    // images: [
    //   {
    //     url: "https://mahirhasanli.vercel.app/your-image.jpg",
    //     width: 800,
    //     height: 600,
    //     alt: "Mahir Hasanli - Web Developer",
    //   },
    // ],
  },
  twitter: {
    title: "Mahir :: Web Developer",
    description:
      "I am a software engineer, developing web applications. Feel free to get in touch with me by mailing hasanlimahir1@gmail.com",
    card: "summary_large_image", // Twitter kartı üçün geniş şəkil
  },
  applicationName: "https://mahirhasani.vercel.app", // Tətbiq adı
  googleSiteVerification: "google-site-verification=dFXv5OH_VewFRYTwG5pq0bC3AFyGCDZcvqRJCFpcBW4"
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
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
