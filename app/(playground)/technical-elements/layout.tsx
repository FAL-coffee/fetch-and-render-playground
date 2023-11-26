import Link from "next/link";

export const metadata = {
  title: "レンダリングとデータフェッチについて｜技術要素",
};

export default function Layout({
  packageJson,
}: {
  packageJson: React.ReactNode;
}) {
  return (
    <div className="grid gap-y-6">
      <h1 className="mb-4 text-xl lg:text-4xl font-bold">技術要素</h1>
      <Link href="/" className="flex items-center text-blue-600">
        ← TOPに戻る
      </Link>
      {packageJson}
    </div>
  );
}
