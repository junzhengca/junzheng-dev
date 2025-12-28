'use client';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = ['ABOUT', 'EXPERIENCE'];

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="flex flex-wrap gap-4 md:gap-6 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab.toLowerCase())}
          className={`
            uppercase font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors
            ${activeTab === tab.toLowerCase() 
              ? 'bg-black text-white dark:bg-white dark:text-black' 
              : 'opacity-40 hover:opacity-100'}
          `}
        >
          {`[ ${tab} ]`}
        </button>
      ))}
    </nav>
  );
}

