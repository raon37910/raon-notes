import '@repo/ui/globals.css'
import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@repo/ui/components/ui/toaster'
import { ThemeProvider } from '~/layouts/theme/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raon Notes',
  description: 'Raon Notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
