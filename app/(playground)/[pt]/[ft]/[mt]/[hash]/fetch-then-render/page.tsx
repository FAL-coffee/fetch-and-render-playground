import Link from "next/link";
import { Card } from "@/app/_components/Card";

export default function Page() {
  return (
    <Card>
      <div className="card-body">
        <h1 className="card-title">Fetch-then-Render</h1>
        <div>
          <p>
            Fetch-then-Renderパターンでは、コンポーネントのレンダリング前に必要なデータを取得します。
          </p>
          <br />
          <p>
            <span className="font-bold">データフェッチの前処理</span>:
            このパターンでは、コンポーネントがマウントされる前に、外部APIやデータソースから必要な情報を取得します。Next.jsのようなフレームワークでは、
            <span className="font-bold">getServerSideProps</span>や
            <span className="font-bold">getStaticProps</span>
            のような関数を使用して、サーバーサイドでデータを事前にフェッチし、コンポーネントにpropsとして渡すことができます。
          </p>
          <p>
            また、<span className="font-bold">Suspense</span>や
            <span className="font-bold">
              colocation等のフレームワークの機能
            </span>
            を用いて、loadingUIを別に用意することも可能です。
          </p>
          <br />
          <p>
            この方法により、コンポーネントは必要なデータを持った状態で初回レンダリングされるため、ページの初期表示がスムーズになります。データの取得に時間がかかる場合でも、ユーザーは空のUIを見ることなく、完成されたページを表示できます。
          </p>
          <p>
            しかし、サーバーサイドでのデータ取得は、クライアントサイドよりもページの初期ロード時間に影響を与える可能性があります。
          </p>
          <br />
          <p>
            Fetch-then-renderパターンのアーキテクチャは、ページの初期ロード時に全てのデータを準備することに重点を置いていますが、その利点とデメリットは以下の通りです：
          </p>
          <br />
          <ol className="ml-3 list-decimal grid gap-1">
            <li>
              初期レンダリングで完全なUIを提供することができるため、ユーザーはロード中に空のUIを見ることがありません。これにより、ユーザーエクスペリエンスが向上します。
            </li>
            <li>
              サーバーサイドでのデータ取得は、特に大量のデータや複雑な処理を伴う場合、初期ロード時間を延長する可能性があります。
            </li>
            <li>
              一部のデータが取得できない場合、ページ全体の表示が遅れる可能性があります。これは、重要でないデータの遅延が全体のユーザーエクスペリエンスに影響を与える可能性があるため、注意が必要です。
            </li>
            <li>
              サーバーサイドでのデータ取得は、特に静的生成を使用する場合、構築時のデータのみを提供するため、リアルタイムデータの取得には適していません。
            </li>
          </ol>
        </div>
        <p className="font-bold">
          以上より、Fetch-then-renderパターンは、初期ロード時に完成されたページを提供したい場合や、サーバーサイドでのデータ処理が重要なアプリケーションに適しています。
        </p>

        <Link
          href="fetch-then-render/code#Fetch-then-Render パターンの実装"
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
          実装を見る（モバイル端末では表示出来ない場合があります。）
        </Link>
      </div>
    </Card>
  );
}
