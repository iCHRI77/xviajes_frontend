import { Open_Sans } from "next/font/google";
import { Bona_Nova } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Open_Sans({ subsets: ["latin"] });
// const inter2 = Bona_Nova({weight:"400", subsets: ["latin"] })

export const metadata = {
  title: "xForce Viajes",
  description: "Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/xForceViajes.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
