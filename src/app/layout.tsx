import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./styles/index.scss";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] }); 

export const metadata: Metadata = {
  title: "Stroy depot",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
