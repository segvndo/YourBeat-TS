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
      {/* <div>
        <Image src="/images/yourbeat.png" alt="YourBeat Logo" width={300} height={500} />
      </div> */}
      {/* <div className="underline">
        <Link href="login">Login</Link>
      </div>
      <Link href="users" className="underline">Create new account</Link> */}
    </main>
  )
}
