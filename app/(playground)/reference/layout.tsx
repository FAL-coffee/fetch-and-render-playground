import Link from "next/link";

import { Card } from "@/app/_components/Card";

export const metadata = {
  title: "レンダリングとデータフェッチについて｜参考資料・サイト",
};

export default function Layout({
  nextjsOfficial,
  renderingPatterns,
  markdownSyntaxHylight,
}: {
  nextjsOfficial: React.ReactNode;
  renderingPatterns: React.ReactNode;
  markdownSyntaxHylight: React.ReactNode;
}) {
  return (
    <div className="grid gap-y-6">
      <h1 className="mb-4 text-xl lg:text-4xl font-bold">参考資料・サイト</h1>
      <Link href="/" className="flex items-center text-blue-600">
        ← TOPに戻る
      </Link>
      <Card>
        <div className="card-body grid gap-y-5">
          {nextjsOfficial}
          {renderingPatterns}
          {markdownSyntaxHylight}
        </div>
      </Card>
    </div>
  );
}
