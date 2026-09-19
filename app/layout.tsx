import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/ui/provider/StoreProvider";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en">
      <body>
        <StoreProvider>
        {children}
        </StoreProvider>
      </body>
    </html>
  );
}
