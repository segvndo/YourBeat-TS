import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-4xl antialiased">
        YourBeat
      </h1>
      <div className="font-extralight">
        Simplifying your connection to the music industry
      </div>
      <Link href="users" className="underline">Create new account</Link>
    </main>
  )
}
