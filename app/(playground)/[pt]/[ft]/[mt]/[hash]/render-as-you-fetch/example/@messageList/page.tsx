import { Params, Message } from "@/src/types";
import { parseWaitTime } from "@/src/utils";

import { MessageList } from "@/app/(playground)/_components/MessageList";

const fetchData = async ({
  mt = 1,
}: {
  mt?: number;
}): Promise<{
  messages: Message[];
}> => {
  // サーバーサイドでfetchを行う場合、fetchの引数には絶対パスを指定する必要がある
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch(`${baseUrl}/api/message?mt=${mt}`, {
    cache: "no-cache",
  });
  const { messages } = await response.json();

  return { messages };
};

export default async function MessageListPage({ params }: { params: Params }) {
  const mt = params.mt;
  const messageListWaitTime = parseWaitTime(mt);
  const { messages } = await fetchData({ mt: messageListWaitTime });
  return <MessageList messages={messages} />;
}
