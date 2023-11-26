import Link from "next/link";

export const metadata = {
  title: "レンダリングとデータフェッチについて｜Render-as-you-Fetch",
  description: "Render-as-you-Fetchパターンについて",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-y-6">
      <Link href="/" className="flex items-center text-blue-600">
        ← TOPに戻る
      </Link>
      {children}
    </div>
  );
}
