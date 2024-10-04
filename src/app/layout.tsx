import { Inter } from "next/font/google";
import '@solana/wallet-adapter-react-ui/styles.css';
import 'nprogress/nprogress.css'
import "./globals.css";
import Providers from "./providers";
import {ReactNode} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
