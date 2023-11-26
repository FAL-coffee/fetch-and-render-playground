import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/app/_components/Footer";
import Head from "./head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "レンダリングとデータフェッチについて",
  description:
    "Next.js でのレンダリングとデータフェッチの方法について、実際にコードを書きながら学びます。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <Head />
      <body className={`${inter.className} h-screen`}>
        <div id="main-container" className="flex-grow">
          <main className="container mx-auto px-4 flex justify-center h-full">
            <div className="w-full h-full max-w-7xl py-8 lg:py-12">
              {children}
            </div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
