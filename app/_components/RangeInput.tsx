"use client";

type Props = {
  value: number;
  isDisabled?: boolean;
  onChange: (value: number) => void;
};

const MAX = 10;

export const RangeInput = ({ value, isDisabled = false, onChange }: Props) => {
  const range = Array.from({ length: MAX }, (_, i) => i + 1);

  return (
    <div>
      <input
        type="range"
        step="1"
        min={1}
        max={MAX}
        value={value}
        className={`range ${isDisabled && "disabled"}`}
        disabled={isDisabled}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="w-full flex justify-between text-xs px-2">
        {range.map((i) => (
          <span key={i}>{i}s</span>
        ))}
      </div>
    </div>
  );
};
