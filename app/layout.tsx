import "@/app/ui/global.scss";
import {inter} from "@/app/ui/fonts";

import {Metadata} from 'next';

export const metadata: Metadata = {
  title: {
    template:'%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs-dahboard-omega.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
