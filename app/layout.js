import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UI Developer Assignment",
  description: "Built for JustWravel",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="modal-root" />
        {modal}
        {children}
        </body>
    </html>
  );
}
