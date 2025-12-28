import { profile } from '@/data/profile';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function Header({ isDark, onThemeToggle }: HeaderProps) {
  return (
    <header className="mb-8">
      <div className="flex justify-between items-start mb-4">
        <div className="font-bold"># {profile.name.toUpperCase()}</div>
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      </div>
      
      <div className="opacity-70 whitespace-pre-wrap">
        {`> ${profile.role}
> Location: ${profile.location}`}
      </div>
      
      <div className="mt-4 flex gap-4">
        <a 
          href={profile.social.github} 
          target="_blank" 
          rel="noreferrer" 
          className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
        >
          [ github ]
        </a>
        <a 
          href={profile.social.website} 
          target="_blank" 
          rel="noreferrer" 
          className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
        >
          [ website ]
        </a>
      </div>
    </header>
  );
}

