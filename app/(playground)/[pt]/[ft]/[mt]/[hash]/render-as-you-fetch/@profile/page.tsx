import { Params, User } from "@/src/types";
import { parseWaitTime } from "@/src/utils";

import { Profile } from "@/app/(playground)/_components/Profile";

const fetchData = async ({
  pt = 1,
}: {
  pt?: number;
}): Promise<{
  user: User;
}> => {
  // サーバーサイドでfetchを行う場合、fetchの引数には絶対パスを指定する必要がある
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch(`${baseUrl}/api/user/1?pt=${pt}`, {
    cache: "no-cache",
  });
  const user = await response.json();

  return { user };
};

export default async function ProfilePage({ params }: { params: Params }) {
  const pt = params.pt;
  const profileWaitTime = parseWaitTime(pt);
  const { user } = await fetchData({ pt: profileWaitTime });
  return <Profile user={user} />;
}
