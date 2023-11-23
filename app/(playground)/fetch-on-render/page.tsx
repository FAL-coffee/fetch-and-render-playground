import Link from "next/link";
import { Card } from "@/app/_components/Card";

export default function Page() {
  return (
    <Card>
      <div className="card-body">
        <h1 className="card-title">Fetch-on-render</h1>
        <div>
          <p>
            Fetch-on-renderパターンでは、コンポーネントのレンダリング後にデータフェッチが行われます。
          </p>
          <br />
          <p>
            <span className="font-bold">useEffect</span>:
            このReactフックは、コンポーネントの初回レンダリング後に副作用（例えばデータフェッチ）を実行するために使用されます。コンポーネントがマウントされた後、useEffect内で定義された関数が呼び出され、APIからデータを取得します。
          </p>
          <br />
          <p>
            この方法は、コンポーネントのマウント時にAPIからデータを取得し、取得後にUIを更新するため、ページの初期表示時に有用です。
          </p>
          <p>
            しかし、データの取得に時間がかかると、ユーザー体験に影響を与える可能性があります。
          </p>
          <br />

          <p>
            Fetch-on-Renderパターンで複数のデータ取得処理を行い、全ての取得が完了するまで
            <span className="font-bold">isLoading = true</span>
            を設定し、ローディングUIを表示するアーキテクチャは、Fetch-on-Renderパターンの実装として一般的ですが、いくつかのデメリットを持ちます
          </p>
          <br />

          <ol className="ml-3 list-decimal grid gap-1">
            <li>
              複数のリクエストを同時に行うことは、ネットワークの遅延やサーバーの応答時間によって全体のロード時間が長くなる可能性があります。すべてのデータがロードされるまでユーザーは待機する必要があり、これは特に大量のデータを取得する場合に問題となります。
            </li>
            <li>
              全てのデータがロードされるまでローディング画面を表示すると、ユーザーはページの他の部分を見ることができず、フラストレーションが生じる可能性があります。特に、一部のデータは早く取得できるにも関わらず、他の遅いリクエストによってUIの表示が遅れる場合、ユーザー体験は著しく損なわれます。
            </li>
            <li>
              複数のAPIからデータを取得する場合、それぞれのリクエストが失敗したときのエラーハンドリングが複雑になります。一部のリクエストが成功し、他が失敗するという状況を適切に処理する必要があります。
            </li>
            <li>
              同時に多くのリクエストを送信することは、クライアントおよびサーバーのリソースに対する負荷を増加させる可能性があります。これは特に、リソースに制限のある環境（例えばモバイルデバイス）で顕著です。
            </li>
          </ol>
        </div>

        <p className="font-bold">
          よって、Fetch-on-Renderパターンは小規模または単純なアプリケーション、またはロード時間が短いシナリオに適していると言えます。
        </p>

        <Link
          href="/fetch-on-render/code#Fetch-on-Render パターンの実装"
          className="mt-3 flex items-center justify-end text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="w-4 h-4 mr-2"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
          実装を見る
        </Link>
      </div>
    </Card>
  );
}
