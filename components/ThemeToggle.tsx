'use client';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button 
      onClick={onToggle} 
      className="text-xs opacity-50 hover:opacity-100 hover:underline"
    >
      [ {isDark ? 'LIGHT' : 'DARK'} MODE ]
    </button>
  );
}

