import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Moodl",
  description: "Tracking your mood every day of the year!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>head</header>
        {children}
        
        <footer>foot</footer>
        </body>
    </html>
  );
}
