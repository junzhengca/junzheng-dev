export const outsideWork = {
  intro: 'I do security research under the handle antin0de. I like coffee, too.',
  badges: [
    {
      name: 'TryHackMe',
      icon: 'shield',
      src: 'https://tryhackme-badges.s3.amazonaws.com/Antin0de.png',
      href: 'https://tryhackme.com/p/Antin0de',
      alt: 'TryHackMe profile badge for Antin0de',
      width: 249,
      height: 58,
    },
    {
      name: 'Hack The Box',
      icon: 'code',
      src: 'https://www.htbbadge.tech/api/badge?user=1099089',
      href: 'https://app.hackthebox.com/public/users/1099089',
      alt: 'Hack The Box profile badge for antin0de',
      width: 329,
      height: 88,
    },
  ],
  toolsIntro: 'A couple of tools I find useful. I’m not affiliated with their makers.',
  tools: [
    {
      name: 'Disk Wipe',
      icon: 'hard-drive',
      href: 'https://www.diskwipe.org/',
      description: 'A portable Windows tool for wiping USB drives and disks.',
    },
    {
      name: 'DW Proton',
      icon: 'gamepad',
      href: 'https://dawn.wine/dawn-winery/dwproton',
      description: 'A custom Proton fork for playing Windows games on Linux.',
    },
  ],
} as const;
