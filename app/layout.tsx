import type { Metadata } from 'next';
import { Lora, Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: 'Jun Zheng | Software Engineer',
  description:
    'Jun Zheng is a software engineer in Toronto focused on AI collaboration and search, with security research and useful software on the side.',
  openGraph: {
    title: 'Jun Zheng | Software Engineer',
    description:
      'Software, security research, and useful tools from Jun Zheng, a software engineer in Toronto.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}

