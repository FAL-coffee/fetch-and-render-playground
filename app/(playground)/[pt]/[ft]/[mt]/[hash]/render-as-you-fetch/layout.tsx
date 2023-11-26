import Link from "next/link";

import { FetchControl } from "@/app/(playground)/_components/FetchControl";

export default function Layout({
  children,
  fetchControl,
  followerList,
  messageList,
  profile,
}: {
  children: React.ReactNode;
  fetchControl: React.ReactNode;
  followerList: React.ReactNode;
  messageList: React.ReactNode;
  profile: React.ReactNode;
}) {
  return (
    <div className="grid gap-y-6">
      <Link href="/" className="flex items-center text-blue-600">
        ← TOPに戻る
      </Link>
      <section id="example">
        <div>
          {fetchControl}

          <div className="flex flex-col lg:flex-row lg:justify-evenly mt-5">
            {profile}
            <div className="border border-gray-400 my-4 lg:mx-8" />
            {messageList}
            <div className="border border-gray-400 my-4 lg:mx-8" />
            {followerList}
          </div>
          <div className="border border-gray-400 my-4" />
        </div>
      </section>
      <section id="description">{children}</section>
    </div>
  );
}
