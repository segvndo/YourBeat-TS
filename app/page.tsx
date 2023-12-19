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
        <div className="box-content h-96 w-64 p-4 border-4 bg-gray-600 flex flex-col items-center font-sans">
          <div className="text-red-500 font-sans mb-4">Venue</div>
          <div className="flex-grow">
            <ul className="text-white pl-4 list-disc text-center">
              <li>
                Book artists for live shows
              </li>
              <li>
                Manage event details
              </li>
              <li>
                Manage venue details
              </li>
              <li>
                Coordinate with vendors
              </li>
            </ul>
          </div>
          <div>
            <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg">Learn more</button>
          </div>
        </div>
        <div className="box-content h-96 w-64 p-4 border-4 bg-gray-600 flex flex-col items-center font-sans">
          <div className="text-red-500 font-sans mb-4">Artist</div>
          <div className="flex-grow">
            <ul className="text-white pl-4 list-disc text-center">
              <li>
                Find merchandise vendors
              </li>
              <li>
                Book live shows in reputable venues
              </li>
              <li>
                Connect with you fans
              </li>
              <li>
                Promote your brand
              </li>
            </ul>
          </div>
          <div>
            <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg">Learn more</button>
          </div>
        </div>
        <div className="box-content h-96 w-64 p-4 border-4 bg-gray-600 flex flex-col items-center font-sans">
          <div className="text-red-500 font-sans mb-4">Vendor</div>
          <div className="flex-grow">
            <ul className="text-white pl-4 list-disc text-center">
              <li>
                Find merchandise vendors
              </li>
              <li>
                Book live shows in reputable venues
              </li>
              <li>
                Connect with you fans
              </li>
              <li>
                Promote your brand
              </li>
            </ul>
          </div>
          <div>
            <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg">Learn more</button>
          </div>
        </div>
        <div className="box-content h-96 w-64 p-4 border-4 bg-gray-600 flex flex-col items-center font-sans">
          <div className="text-red-500 font-sans mb-4">Fan</div>
          <div className="flex-grow">
            <ul className="text-white pl-4 list-disc text-center">
              <li>
                Find merchandise vendors
              </li>
              <li>
                Book live shows in reputable venues
              </li>
              <li>
                Connect with you fans
              </li>
              <li>
                Promote your brand
              </li>
            </ul>
          </div>
          <div>
            <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg">Learn more</button>
          </div>
        </div>
      </div>

    </main>
  )
};
