import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';

const poppins = Poppins({ subsets: ['devanagari'], weight: ['200', '300', '400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Auto Market',
  description: 'Auto market for the sale and purchase of cars'
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
