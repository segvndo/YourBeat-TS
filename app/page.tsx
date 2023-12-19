import Image from 'next/image';
// import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-4xl antialiased">
        YourBeat
      </h1>


      <div className="font-sans text-lg text-red-500">
        About YourBeat
      </div>
        <div className="font-sans font-thin brightness-">
          YourBeat is a Social Media platform which strives to connect Musical Artists, Vendors, Venues, and Fans. By assisting artists in building a strong community of thousands of dedicated fans and connecting them with vendors and venues, facilitating mutually beneficial business relationships, we strive to grow a fully sustainable environment and revolutionizing the music industry.
        </div>

        <div className="flex space-x-4">
          <div className="box-content h-96 w-64 p-4 border-4 bg-gray-600 flex items-start justify-center text-red-500 font-sans">
            Venue
          </div>
          <div className="box-content h-96 w-64 p-4 border-4 bg-gray-600 flex items-start justify-center text-red-500 font-sans">
            Vendor
          </div>
          <div className="box-content h-96 w-64 p-4 border-4 bg-gray-600 flex items-start justify-center text-red-500 font-sans">
            Artist
          </div>
          <div className="box-content h-96 w-64 p-4 border-4 bg-gray-600 flex items-start justify-center text-red-500 font-sans">
            Fan
          </div>
        </div>

    </main>
  )
};
