import StyledComponentsRegistry from './registry';
import React from 'react';
import { Body } from '@/styles/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
      <Body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </Body>
    </html>
  );
}
