"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/app/_components/Card";
import { RangeInput } from "@/app/_components/RangeInput";

const parseWaitTime = (value: string): number => {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) {
    return 1;
  }
  if (parsed < 1) return 1;
  return parsed;
};

export const FetchControl = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const fetchProfileWaitTimeStr = decodeURIComponent(
    searchParams.get("pt") || "1"
  );
  const fetchMessagesWaitTimeStr = decodeURIComponent(
    searchParams.get("mt") || "1"
  );
  const fetchFollowersWaitTImeStr = decodeURIComponent(
    searchParams.get("ft") || "1"
  );

  const [fetchProfileWaitTime, setFetchProfileWaitTime] = useState(
    parseWaitTime(fetchProfileWaitTimeStr)
  );
  const [fetchMessagesWaitTime, setFetchMessagesWaitTime] = useState(
    parseWaitTime(fetchMessagesWaitTimeStr)
  );
  const [fetchFollowersWaitTime, setFetchFollowersWaitTime] = useState(
    parseWaitTime(fetchFollowersWaitTImeStr)
  );

  const refetch = () => {
    const random = Math.floor(Math.random() * 10000);

    router.push(
      `?pt=${fetchProfileWaitTime}&mt=${fetchMessagesWaitTime}&ft=${fetchFollowersWaitTime}&hash=${random}`
    );
  };

  return (
    <Card>
      <div className="p-8">
        <div className="mb-4">
          <p>プロフィール取得APIがレスポンスを行う秒数を制御出来ます</p>
          <RangeInput
            value={fetchProfileWaitTime}
            onChange={setFetchProfileWaitTime}
          />
        </div>

        <div className="mb-4">
          <p>メッセージ取得APIがレスポンスを行う秒数を制御出来ます</p>
          <RangeInput
            value={fetchMessagesWaitTime}
            onChange={setFetchMessagesWaitTime}
          />
        </div>

        <div className="mb-4">
          <p>フォロワー取得APIがレスポンスを行う秒数を制御出来ます</p>
          <RangeInput
            value={fetchFollowersWaitTime}
            onChange={setFetchFollowersWaitTime}
          />
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary w-fit" onClick={refetch}>
            ReFetch
          </button>
        </div>
      </div>
    </Card>
  );
};
