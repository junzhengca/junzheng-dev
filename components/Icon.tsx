import type { ReactNode } from 'react';

export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'briefcase'
  | 'cloud'
  | 'code'
  | 'coffee'
  | 'compass'
  | 'gamepad'
  | 'github'
  | 'graduation'
  | 'hard-drive'
  | 'home'
  | 'laptop'
  | 'link'
  | 'location'
  | 'moon'
  | 'search'
  | 'shield'
  | 'sparkles'
  | 'sun'
  | 'users'
  | 'user';

const shapes: Record<IconName, ReactNode> = {
  'arrow-right': (
    <>
      <path d="M4.5 12h14" />
      <path d="m12.5 5.5 6.5 6.5-6.5 6.5" />
    </>
  ),
  'arrow-up-right': (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.5" y="7.5" width="17" height="13" rx="2" />
      <path d="M8 7.5V5h8v2.5M3.5 12h17M10 12v2h4v-2" />
    </>
  ),
  cloud: <path d="M7.2 18.5h9.6a4.2 4.2 0 0 0 .4-8.4 6 6 0 0 0-11.6 1.2 3.7 3.7 0 0 0 1.6 7.2Z" />,
  code: (
    <>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </>
  ),
  coffee: (
    <>
      <path d="M5 9h12v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9ZM17 11h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M8 5c0-1 1-1.2 1-2M12 5c0-1 1-1.2 1-2" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.8 8.2-2.1 5.5-5.5 2.1 2.1-5.5 5.5-2.1Z" />
    </>
  ),
  gamepad: (
    <>
      <path d="M7.3 8h9.4a4.7 4.7 0 0 1 4.6 5.7l-.7 3.2a2.8 2.8 0 0 1-4.7 1.4l-1.5-1.4h-4.8l-1.5 1.4a2.8 2.8 0 0 1-4.7-1.4l-.7-3.2A4.7 4.7 0 0 1 7.3 8Z" />
      <path d="M8 11v4M6 13h4M16.5 12h.01M18.5 14h.01" />
    </>
  ),
  github: (
    <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.55.1.75-.24.75-.53v-2.05c-3.07.67-3.72-1.3-3.72-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.1.08 1.67 1.12 1.67 1.12.98 1.66 2.56 1.18 3.18.9.1-.7.38-1.18.7-1.45-2.45-.28-5.02-1.23-5.02-5.47 0-1.2.43-2.18 1.12-2.95-.11-.28-.49-1.4.1-2.92 0 0 .92-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.04-1.13 3.04-1.13.6 1.52.22 2.64.11 2.92.7.77 1.12 1.75 1.12 2.95 0 4.25-2.57 5.18-5.03 5.46.4.35.75 1.02.75 2.06v3.05c0 .3.2.64.76.53A11.1 11.1 0 0 0 12 .9Z" />
  ),
  graduation: (
    <>
      <path d="m2.5 9 9.5-5 9.5 5-9.5 5-9.5-5Z" />
      <path d="M6 11v5.5c3.4 2.5 8.6 2.5 12 0V11M21.5 9v6" />
    </>
  ),
  'hard-drive': (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 14h18M7 17h.01M11 17h.01" />
    </>
  ),
  home: <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z" />,
  laptop: (
    <>
      <rect x="5" y="4" width="14" height="12" rx="1.5" />
      <path d="M2.5 20h19l-1.5-4H4l-1.5 4Z" />
    </>
  ),
  link: (
    <>
      <path d="m9.5 14.5 5-5" />
      <path d="M7.2 16.8 5.8 18.2a4 4 0 0 1-5.7-5.7l4-4a4 4 0 0 1 5.7 0M16.8 7.2l1.4-1.4a4 4 0 0 1 5.7 5.7l-4 4a4 4 0 0 1-5.7 0" transform="translate(1 1) scale(.92)" />
    </>
  ),
  location: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  moon: <path d="M20.5 15.2A8.8 8.8 0 0 1 8.8 3.5 9 9 0 1 0 20.5 15.2Z" />,
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 21s8-4 8-10V5l-8-3-8 3v6c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.3 5.7L19 10l-5.7 1.3L12 17l-1.3-5.7L5 10l5.7-1.3L12 3Z" />
      <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15ZM5 3l.6 1.9L7.5 5.5l-1.9.6L5 8l-.6-1.9L2.5 5.5l1.9-.6L5 3Z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  users: (
    <>
      <path d="M16 20v-1.3a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM16 4.2a3.5 3.5 0 0 1 0 6.8M17 14.7a4 4 0 0 1 4 4V20" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
};

export function Icon({
  name,
  size = 18,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={name === 'github' ? 'currentColor' : 'none'}
      stroke={name === 'github' ? 'none' : 'currentColor'}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {shapes[name]}
    </svg>
  );
}
