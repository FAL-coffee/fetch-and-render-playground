import Link from "next/link";

export default function Layout({
  children,
  example,
}: {
  children: React.ReactNode;
  code: React.ReactNode;
  example: React.ReactNode;
}) {
  return (
    <div className="grid gap-y-6">
      <Link href="/" className="flex items-center text-blue-600">
        ← TOPに戻る
      </Link>
      <section id="example">{example}</section>
      <section id="description">{children}</section>
    </div>
  );
}
