import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import {AuthProvider} from "@/app/AuthContext";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FitFit",
  icon: '/favicon.ico', // 파비콘 경로
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header></Header>
          <main>{children}</main>
          <Toaster/>
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
