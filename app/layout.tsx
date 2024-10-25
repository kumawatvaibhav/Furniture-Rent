import { DM_Sans } from 'next/font/google';
import { Space_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { ReactNode } from 'react';

const fontHeading = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: '700',
});

export const metadata = {
  title: 'Ario!',
  description: 'Ario is a furniture-rental website',
};

interface LayoutProps {
  children: ReactNode; // Explicitly typing children as ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={cn('antialiased', fontHeading.variable, fontBody.variable)}>
        {children}
      </body>
    </html>
  );
}
