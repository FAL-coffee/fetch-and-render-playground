type Props = {
  messages?: {
    id: number;
    text: string;
  }[];
  isLoading?: boolean;
};

export const MessageList = ({ messages = [], isLoading = false }: Props) => {
  if (isLoading)
    return (
      <div>
        <h2 className="text-2xl font-extrabold">Message</h2>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="pt-4 w-full">
            <div className="skeleton h-12 w-full"></div>
          </div>
        ))}
      </div>
    );

  return (
    <div>
      <h2 className="text-2xl font-extrabold">Message</h2>
      {messages.map((message) => (
        <div key={message.id} className="chat chat-start">
          <div className="chat-bubble">{message.text}</div>
        </div>
      ))}
    </div>
  );
};
