import Image from 'next/image';
import Link from 'next/link';
import Mailing from './components/mailing';
import Card from "./components/homecard";
import HomeCardContainer from './components/homeCardContainer';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-6xl antialiased">
        YourBeat
      </h1>

      <div className="bg-black">
        <div className="font-sans text-3xl text-red-500 font-semibold ">
          About YourBeat
        </div>

        <div className="font-sans font-thin">
          YourBeat is a Social Media platform which strives to connect Musical Artists, Vendors, Venues, and Fans. By assisting artists in building a strong community of thousands of dedicated fans and connecting them with vendors and venues, facilitating mutually beneficial business relationships, we strive to grow a fully sustainable environment and revolutionizing the music industry.
        </div>

        <div>
          <HomeCardContainer />
        </div>




      </div>

      <Mailing />

    </main>
  )
};