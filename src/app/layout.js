import "./globals.css";
import { Inter } from "next/font/google";
import { Rubik } from "next/font/google";
import DarkModeButton from "@/components/custom/darkmodebutton";
import { NxtThemeProvider } from "../lib/providers/NxtThemeProvider";
import RTKProvider from "@/lib/providers/RTKClientProvider";
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "<title here>",
  description: "<desc here>",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RTKProvider>
          <ReactQueryProvider>
            <NxtThemeProvider>{children}</NxtThemeProvider>
          </ReactQueryProvider>
        </RTKProvider>
        <Toaster />
      </body>
    </html>
  );
}
