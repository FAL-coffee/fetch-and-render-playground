import Image from "next/image";

type Props = {
  user?: {
    id: number;
    name: string;
    age: number;
    comment: string;
    image: string;
  } | null;
  isLoading?: boolean;
};

export const Profile = ({ user, isLoading = false }: Props) => {
  if (isLoading || !user)
    return (
      <div className="flex flex-col gap-4 w-full lg:w-52">
        <h2 className="text-2xl font-extrabold">Profile</h2>
        <div className="flex gap-4 items-center">
          <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full"></div>
      </div>
    );

  return (
    <div className="flex flex-col gap-4 w-full lg:w-52">
      <h2 className="text-2xl font-extrabold">Profile</h2>
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 rounded-full shrink-0">
          <Image
            src={user.image}
            alt={user.name}
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-4">
            <span>{user.name}</span>
          </div>
          <div className="h-4 w-28">
            <span>{user.age}</span>
          </div>
        </div>
      </div>
      <div className="w-full">{user.comment}</div>
    </div>
  );
};
