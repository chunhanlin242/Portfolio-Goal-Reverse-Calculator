import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "買夠了嗎？投資部位反推試算器", description: "Portfolio Goal Reverse Calculator" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
