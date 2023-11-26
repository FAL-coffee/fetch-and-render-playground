import { FetchControl } from "@/app/(playground)/_components/FetchControl";

export default function Layout({
  description,
  followerList,
  messageList,
  profile,
}: {
  description: React.ReactNode;
  followerList: React.ReactNode;
  messageList: React.ReactNode;
  profile: React.ReactNode;
}) {
  return (
    <div>
      <section id="example">
        <div>
          <FetchControl basePath="render-as-you-fetch" />

          <div className="flex flex-col lg:flex-row lg:justify-evenly mt-5">
            {profile}
            <div className="border border-gray-400 my-4 lg:mx-8" />
            {messageList}
            <div className="border border-gray-400 my-4 lg:mx-8" />
            {followerList}
          </div>
          <div className="border border-gray-400 my-4" />
        </div>
      </section>
      <section id="description">{description}</section>
    </div>
  );
}
