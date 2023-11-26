import { format } from "date-fns";

import { Card } from "@/app/_components/Card";

type Props = {
  isLoading?: boolean;
  fetchStarted?: Date;
  rendered?: Date;
};

export const FetchAndRenderTimingInfo = ({
  isLoading = false,
  fetchStarted,
  rendered,
}: Props) => {
  if (isLoading || !fetchStarted || !rendered)
    return (
      <Card className="p-4 flex gap-2">
        <div className="flex gap-2">
          <p className="skeleton h-4 w-32" />
          <p className="skeleton h-4 w-32" />
        </div>
        <div className="flex gap-2">
          <p className="skeleton h-4 w-32" />
          <p className="skeleton h-4 w-32" />
        </div>
        <div className="flex gap-2">
          <p className="skeleton h-4 w-32" />
          <p className="skeleton h-4 w-32" />
        </div>
        <div className="flex gap-2">
          <p className="skeleton h-4 w-32" />
          <p className="skeleton h-4 w-32" />
        </div>
      </Card>
    );

  const fetchStartedAt = format(fetchStarted, "yyyy-MM-dd HH:mm:ss");
  const fetchStartedAtTimestamp = fetchStarted.getTime();

  const renderedAt = format(rendered, "yyyy-MM-dd HH:mm:ss");
  const renderedAtTimestamp = rendered.getTime();

  return (
    <Card className="p-4 flex gap-2">
      <div className="flex gap-2">
        <p>データ取得開始日時</p>
        <p>{fetchStartedAt}</p>
      </div>
      <div className="flex gap-2">
        <p>UNIX Timestamp</p>
        <p>{fetchStartedAtTimestamp}</p>
      </div>
      <div className="flex gap-2">
        <p>画面表示完了日時</p>
        <p>{renderedAt}</p>
      </div>
      <div className="flex gap-2">
        <p>UNIX Timestamp</p>
        <p>{renderedAtTimestamp}</p>
      </div>
    </Card>
  );
};
