import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UI Developer Assignment",
  description: "Built for JustWravel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
