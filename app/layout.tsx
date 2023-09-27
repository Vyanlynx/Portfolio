import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raghul_Portfolio',
  description: 'Created by Raghul',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <style>
        @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@700&display=swap');
      </style> */}
    </html>
  )
}
