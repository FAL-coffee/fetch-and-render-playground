type Props = {
  children: React.ReactNode;
  clickable?: boolean;
  className?: string;
};

export const Card = ({
  children,
  clickable = false,
  className = "",
}: Props) => {
  const borderStyleClass =
    "border-gray-300 dark:bg-gray-300 dark:border-gray-500";

  const hoverStyleClass = clickable
    ? "transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
    : "";

  return (
    <div
      className={`card bg-white w-full border rounded-lg shadow ${borderStyleClass} ${hoverStyleClass} ${className}`}
    >
      {children}
    </div>
  );
};
