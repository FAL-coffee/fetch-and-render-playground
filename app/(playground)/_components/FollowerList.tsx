import Image from "next/image";

type Props = {
  users: {
    id: number;
    name: string;
    age: number;
    comment: string;
    image: string;
  }[];
  isLoading?: boolean;
};

export const FollowerList = ({ users, isLoading = false }: Props) => {
  if (isLoading)
    return (
      <div className="min-w-fit">
        <h2 className="text-2xl font-extrabold">Follower</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="skeleton w-12 h-12 rounded-full shrink-0"></div>
                    </div>
                    <div>
                      <div className="font-bold">
                        <div className="skeleton h-4 w-28"></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="skeleton h-4 w-14"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

  return (
    <div className="min-w-fit">
      <h2 className="text-2xl font-extrabold">Follower</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={user.image}
                        alt={user.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                  </div>
                </div>
              </td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
