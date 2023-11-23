"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Profile } from "@/app/(playground)/_components/Profile";
import { FollowerList } from "@/app/(playground)/_components/FollowerList";
import { MessageList } from "@/app/(playground)/_components/MessageList";
import { FetchControl } from "@/app/(playground)/_components/FetchControl";

type User = {
  id: number;
  name: string;
  age: number;
  image: string;
  comment: string;
};

type Message = {
  id: number;
  text: string;
};

const parseWaitTime = (value: string): number => {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) {
    return 1;
  }
  if (parsed < 1) return 1;
  return parsed;
};

export default function Page() {
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  // 取得APIがレスポンスを行う秒数をクエリパラメータから取得
  const fetchProfileWaitTimeStr = decodeURIComponent(
    searchParams.get("pt") || "1"
  );
  const fetchFollowersWaitTImeStr = decodeURIComponent(
    searchParams.get("ft") || "1"
  );
  const fetchMessagesWaitTimeStr = decodeURIComponent(
    searchParams.get("mt") || "1"
  );
  const hash = decodeURIComponent(searchParams.get("hash") || "00000");

  const fetchData = async () => {
    setIsLoading(true);

    const pt = parseWaitTime(fetchProfileWaitTimeStr);
    const ft = parseWaitTime(fetchFollowersWaitTImeStr);
    const mt = parseWaitTime(fetchMessagesWaitTimeStr);

    const promises = [
      fetch(`/api/user/1?pt=${pt}`).then(async (response) => {
        const user = await response.json();
        setUser(user);
      }),
      fetch(`/api/user?ft=${ft}`).then(async (response) => {
        const { users } = await response.json();
        setUsers(users);
      }),
      fetch(`/api/message?mt=${mt}`).then(async (response) => {
        const { messages } = await response.json();
        setMessages(messages);
      }),
    ];
    await Promise.all(promises);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [
    fetchProfileWaitTimeStr,
    fetchFollowersWaitTImeStr,
    fetchMessagesWaitTimeStr,
    hash,
  ]);

  return (
    <div>
      <FetchControl />
      <div className="flex flex-col lg:flex-row lg:justify-evenly mt-5">
        <Profile user={user} isLoading={isLoading} />
        <div className="border border-gray-400 my-4 lg:mx-8" />
        <MessageList messages={messages} isLoading={isLoading} />
        <div className="border border-gray-400 my-4 lg:mx-8" />
        <FollowerList users={users} isLoading={isLoading} />
      </div>
      <div className="border border-gray-400 my-4" />
    </div>
  );
}