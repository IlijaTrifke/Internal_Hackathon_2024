import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { createNewUser } from "../actions/server/users";

const mulish = Mulish({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={mulish.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
