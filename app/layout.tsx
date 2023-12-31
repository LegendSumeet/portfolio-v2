import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sumeet Vishwakarma',
  description: 'As a passionate software developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body className={inter.className}>
      <div className="min-h-screen bg-black">
      <div className={`flex flex-col min-h-screen ${inter.className}`}>
        <Header />
        <main className="flex-1">{children}
        <Analytics />
        </main>
      </div>
      <Footer />
    </div>
      </body>
    </html>
  )
}
