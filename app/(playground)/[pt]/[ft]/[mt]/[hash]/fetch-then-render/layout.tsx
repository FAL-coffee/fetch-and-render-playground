import Link from "next/link";

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
