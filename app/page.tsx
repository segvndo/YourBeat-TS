import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>
        YourBeat
      </h1>
      <h6>
        Simplifying your connection to the music industry
      </h6>
      <Link href="users" className="underline">Create new account</Link>
    </main>
  )
}
