import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>
        YourBeat
      </h1>
      <p>
        Unite your music
      </p>
      <Link href="users">Create new account</Link>
    </main>
  )
}
