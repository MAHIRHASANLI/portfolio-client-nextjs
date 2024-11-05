import { Montserrat } from "next/font/google";
import "../styles/reset.css";
import "../styles/global.css";

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
