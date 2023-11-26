import Link from "next/link";

export const metadata = {
  title: "レンダリングとデータフェッチについて｜API Info",
};

export default function Layout({
  getUser,
  getUsers,
  getMessages,
}: {
  getUser: React.ReactNode;
  getUsers: React.ReactNode;
  getMessages: React.ReactNode;
}) {
  return (
    <div className="grid gap-y-6">
      <h1 className="mb-4 text-xl lg:text-4xl font-bold">API Info</h1>
      <Link href="/" className="flex items-center text-blue-600">
        ← TOPに戻る
      </Link>
      {getUser}
      {getUsers}
      {getMessages}
    </div>
  );
}
