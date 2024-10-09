import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import Providers from './providers';
import TopNav from '@/components/common/TopNav';
import Footer from '@/components/common/Footer';

import '@solana/wallet-adapter-react-ui/styles.css';
import 'nprogress/nprogress.css'
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <TopNav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
