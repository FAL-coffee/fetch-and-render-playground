import Link from "next/link";
import { Card } from "@/app/_components/Card";

export default function Home() {
  return (
    <main>
      <h1 className="mb-8 text-xl lg:text-4xl font-bold">
        レンダリングとデータフェッチ
      </h1>

      <div className="grid gap-y-6">
        <Link href="/fetch-on-render">
          <Card clickable>
            <div className="card-body">
              <h2 className="card-title">Fetch-on-render</h2>
              <div>
                <p>
                  Fetch-on-renderパターンでは、コンポーネントのレンダリング後にデータフェッチが行われます。
                </p>
                <p>
                  この方法は、コンポーネントのマウント時にAPIからデータを取得し、取得後にUIを更新するため、ページの初期表示時に有用です。
                </p>
                <p>
                  しかし、データの取得に時間がかかると、ユーザー体験に影響を与える可能性があります。
                </p>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/fetch-then-render" className="">
          <Card clickable>
            <div className="card-body">
              <h2 className="card-title">Fetch-then-render</h2>
              <div>
                <p>
                  Fetch-then-renderパターンでは、データフェッチを完了してからコンポーネントをレンダリングします。
                </p>
                <p>
                  このアプローチは、ページまたはコンポーネントがデータに依存している場合に適しており、データが利用可能になるまでUIの表示を遅延させます。
                </p>
                <p>
                  これにより、初期表示時に完全なページが一度に表示されるため、ユーザー体験が向上することがありますが、データ取得に時間がかかると初期ロードに遅れが生じる可能性があります。
                </p>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/render-as-you-fetch" className="">
          <Card clickable>
            <div className="card-body">
              <h2 className="card-title">Render-as-You-Fetch</h2>
              <div>
                <p>
                  Render-as-You-Fetchパターンでは、データフェッチとコンポーネントのレンダリングを並行して行います。
                </p>
                <p>
                  この方法は、コンポーネントのレンダリング開始と同時にデータ取得を開始し、データが利用可能になるとすぐにUIを更新します。
                </p>
                <p>
                  このアプローチは効率的であり、特にモダンなフロントエンドフレームワークで好まれる傾向があります。
                </p>
                <p>
                  ユーザーはデータ取得を待つ間にもインタラクティブなUIを見ることができるため、ユーザー体験の向上に寄与します。
                </p>
                <p>
                  ただし、このパターンを適切に実装するには、データの非同期処理をうまく管理する必要があります。
                </p>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </main>
  );
}
