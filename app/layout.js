import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UI Developer Assignment",
  description: "Built for JustWravel",
};

export default function RootLayout({ children, modal}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        {modal}
        {children}
      </body>
    </html>
  );
}
