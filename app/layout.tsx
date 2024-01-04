import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import SoscMedia from './components/SoscMedia';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YourBeat-TS',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* <nav className="bg-red-500 p-2">
          <ul className="flex space-x-4 ">
            <li>
              <a href="/" className="font-bold text-gray-800 hover:text-gray-600">Home</a>
            </li>
            <li>
              <a href="/users/venue" className="font-bold text-gray-800 hover:text-gray-600">Venue</a>
            </li>
            <li>
              Vendor
            </li>
            <li>
              Artist
            </li>
            <li>
              Fan
            </li>
            <li>
              <Link href="login">Login</Link>
            </li>
            <li>
            <Link href="users">Create Account</Link>
            </li>
          </ul>
        
        </nav> */}
        <div className="content flex-grow">
        {children}
        </div>
        <footer style={{ marginTop: 'auto', paddingTop: '20px', backgroundColor: '#f0f0f0' }}>
          <SoscMedia />
        </footer>
      </body>
    </html>
  )
}
