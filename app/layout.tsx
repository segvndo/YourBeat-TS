import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-red-500 p-2">
          <ul className="flex space-x-4 ">
            <li>
              <a href="/" className="text-gray-800 hover:text-gray-600">Home</a>
            </li>
            <li>
              <a href="/users/venue" className="text-gray-800 hover:text-gray-600">Venue</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
