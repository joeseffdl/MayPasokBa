import { DataContextProvider } from "@/utils/context";
import { ToasterComponent } from "./ToasterComponent";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "May F2F ba?!?",
  description:
    "A simple web calendar app to help you decide if you should go to the school or not.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`}>
        <DataContextProvider>
          <ToasterComponent>{children}</ToasterComponent>
        </DataContextProvider>
      </body>
    </html>
  );
}
