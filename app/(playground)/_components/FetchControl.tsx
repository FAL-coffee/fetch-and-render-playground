"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card } from "@/app/_components/Card";
import { RangeInput } from "@/app/_components/RangeInput";

type Props = {
  basePath?: string;
  isDisabled?: boolean;
  description?: string;
};

const parseWaitTime = (value: string | string[]): number => {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) {
    return 1;
  }
  if (parsed < 1) return 1;
  return parsed;
};

export const FetchControl = ({
  basePath = "",
  isDisabled = false,
  description = "",
}: Props) => {
  const router = useRouter();
  const params = useParams();

  const fetchProfileWaitTimeStr = params.pt;
  const fetchFollowersWaitTImeStr = params.ft;
  const fetchMessagesWaitTimeStr = params.mt;

  const [fetchProfileWaitTime, setFetchProfileWaitTime] = useState(
    parseWaitTime(fetchProfileWaitTimeStr)
  );
  const [fetchFollowersWaitTime, setFetchFollowersWaitTime] = useState(
    parseWaitTime(fetchFollowersWaitTImeStr)
  );
  const [fetchMessagesWaitTime, setFetchMessagesWaitTime] = useState(
    parseWaitTime(fetchMessagesWaitTimeStr)
  );

  const refetch = () => {
    const random = Math.floor(Math.random() * 10000);

    router.push(
      `/${fetchProfileWaitTime}/${fetchFollowersWaitTime}/${fetchMessagesWaitTime}/${random}/${basePath}`
    );
  };

  return (
    <Card>
      <div className="p-8">
        {description && <p className="mb-2">{description}</p>}
        <div className="mb-4">
          <p>プロフィール取得APIがレスポンスを行う秒数</p>
          <RangeInput
            value={fetchProfileWaitTime}
            onChange={setFetchProfileWaitTime}
            isDisabled={isDisabled}
          />
        </div>

        <div className="mb-4">
          <p>メッセージ取得APIがレスポンスを行う秒数</p>
          <RangeInput
            value={fetchMessagesWaitTime}
            onChange={setFetchMessagesWaitTime}
            isDisabled={isDisabled}
          />
        </div>

        <div className="mb-4">
          <p>フォロワー取得APIがレスポンスを行う秒数</p>
          <RangeInput
            value={fetchFollowersWaitTime}
            onChange={setFetchFollowersWaitTime}
            isDisabled={isDisabled}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="btn btn-primary w-fit"
            disabled={isDisabled}
            onClick={refetch}
          >
            ReFetch
          </button>
        </div>
      </div>
    </Card>
  );
};
