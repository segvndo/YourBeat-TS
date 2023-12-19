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

      <div>
        About YourBeat
        <p>
          YourBeat is a Social Media platform which strives to connect Musical Artists, Vendors, Venues, and Fans. By assisting artists in building a strong community of thousands of dedicated fans and connecting them with vendors and venues, facilitating mutually beneficial business relationships, we strive to grow a fully sustainable environment and revolutionizing the music industry.
        </p>
      </div>

    </main>
  )
}
