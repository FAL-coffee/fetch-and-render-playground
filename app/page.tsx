import Link from "next/link";
import { Card } from "@/app/_components/Card";

export default function Home() {
  return (
    <main className="grid gap-y-6">
      <h1 className="mb-8 text-xl lg:text-4xl font-bold">
        レンダリングとデータフェッチ
      </h1>

      <section id="rendering-and-data-fetch">
        <div className="grid gap-y-6">
          <Link href="/1/1/1/0000/fetch-on-render/example">
            <Card clickable>
              <div className="card-body">
                <h2 className="card-title">Fetch-on-Render</h2>
                <div>
                  <p>
                    Fetch-on-Renderパターンでは、コンポーネントのレンダリング後にデータフェッチが行われます。
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

          <Link href="/1/1/1/0000/fetch-then-render/example">
            <Card clickable>
              <div className="card-body">
                <h2 className="card-title">Fetch-then-Render</h2>
                <div>
                  <p>
                    Fetch-then-Renderパターンでは、データフェッチを完了してからコンポーネントをレンダリングします。
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

          <Link href="/1/1/1/0000/render-as-you-fetch/example">
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
      </section>

      <section id="api-info">
        <Link href="api-info">
          <Card clickable>
            <div className="card-body">
              <h2 className="card-title">API</h2>
              <div>
                <p>実装例で使用するAPIの情報を確認できます。</p>
              </div>
            </div>
          </Card>
        </Link>
      </section>

      <section id="technical-elements">
        <Link href="technical-elements">
          <Card clickable>
            <div className="card-body">
              <h2 className="card-title">技術要素</h2>
            </div>
          </Card>
        </Link>
      </section>

      <section id="reference">
        <Link href="reference">
          <Card clickable>
            <div className="card-body">
              <h2 className="card-title">参考資料・サイト</h2>
            </div>
          </Card>
        </Link>
      </section>
    </main>
  );
}
