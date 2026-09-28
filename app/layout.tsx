import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "दिलीप चौधरी | सरपंच प्रत्याशी",
  description: "दिलीप चौधरी — सरपंच प्रत्याशी, निंबला खेड़ा",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hi" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
