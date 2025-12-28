interface DividerProps {
  char?: string;
  length?: number;
}

export default function Divider({ char = '-', length = 64 }: DividerProps) {
  return (
    <div className="opacity-30 select-none overflow-hidden whitespace-nowrap my-6">
      {char.repeat(length)}
    </div>
  );
}

