import { Params, User } from "@/src/types";
import { parseWaitTime } from "@/src/utils";

import { FollowerList } from "@/app/(playground)/_components/FollowerList";

const fetchData = async ({
  ft = 1,
}: {
  ft?: number;
}): Promise<{
  users: User[];
}> => {
  // サーバーサイドでfetchを行う場合、fetchの引数には絶対パスを指定する必要がある
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch(`${baseUrl}/api/user?ft=${ft}`, {
    cache: "no-cache",
  });
  const { users } = await response.json();

  return { users };
};

export default async function FollowerListPage({ params }: { params: Params }) {
  const ft = params.ft;
  const followerListWaitTime = parseWaitTime(ft);
  const { users } = await fetchData({ ft: followerListWaitTime });
  return <FollowerList users={users} />;
}
