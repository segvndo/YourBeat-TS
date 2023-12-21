import Image from 'next/image';
import Link from 'next/link';
import Mailing from './components/mailing';

export default function Home() {
  return (
    <main flex flex-col items-center justify-center>
      <h1 className="font-bold text-6xl antialiased">
        YourBeat
      </h1>

      <div className="bg-black ">
        <div className="font-sans text-3xl text-red-500 font-semibold ">
          About YourBeat
        </div>

        <div className="font-sans font-thin">
          YourBeat is a Social Media platform which strives to connect Musical Artists, Vendors, Venues, and Fans. By assisting artists in building a strong community of thousands of dedicated fans and connecting them with vendors and venues, facilitating mutually beneficial business relationships, we strive to grow a fully sustainable environment and revolutionizing the music industry.
        </div>

        <div className="flex space-x-3 flex-wrap justify-around mt-8 w-full">
          <div className="box-content h-96 w-64 p-4 border-4 bg-gray-600 rounded-xl flex flex-col items-center font-sans">
            <div className="text-red-500 font-sans mb-4 font-semibold text-3xl">Venue</div>
            <div className="flex-grow">
              <ul className="text-white pl-4 list-disc text-center font-extralight">
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
              <Link href="/users/venue">
                <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg">Learn more</button>
              </Link>
            </div>
          </div>
          <div className="box-content h-96 w-64 p-4 border-4 bg-gray-600 flex flex-col items-center font-sans">
            <div className="text-red-500 font-sans mb-4 font-semibold text-3xl">Artist</div>
            <div className="flex-grow">
              <ul className="text-white pl-4 list-disc text-center font-extralight">
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
            <div className="text-red-500 font-sans mb-4 font-semibold text-3xl">Vendor</div>
            <div className="flex-grow">
              <ul className="text-white pl-4 list-disc text-center font-extralight">
                <li>
                  Connect with artists
                </li>
                <li>
                  Focused advertising availability with your own website
                </li>
              </ul>
            </div>
            <div>
              <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg">Learn more</button>
            </div>
          </div>
          <div className="box-content h-96 w-64 p-4 border-4 bg-gray-600 flex flex-col items-center font-sans">
            <div className="text-red-500 font-sans mb-4 font-semibold text-3xl">Fan</div>
            <div className="flex-grow">
              <ul className="text-white pl-4 list-disc text-center font-extralight">
                <li>
                  Find your favourite artists
                </li>
                <li>
                  Get recommendations for other artists
                </li>
                <li>
                  Connect with you artists
                </li>
              </ul>
            </div>
            <div>
              <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg">Learn more</button>
            </div>
          </div>
        </div>
      </div>

      <Mailing />

      {/* <footer>
        <div className="flex justify-center items-center mt-6 text-red-500 font-sans mb-4 text-xl">
          Sign Up For YourBeat Mailing List
        </div>

        <div>
          YourBeat is an exciting new music network platform with a strong commitment to personal data security. Sign up for out mailing list to get notified when the web app is deployed and we'll be sure to let you know when you can create your profile and start connecting with music industry professionals or discovering awesome new artists!
        </div>

        <div className="flex flex-row justify-center">
          <div>
            <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg m-2">Venue</button>
          </div>
          <div>
            <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg m-2">Artist</button>
          </div>
          <div>
            <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg m-2">Vendor</button>
          </div>
          <div>
            <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg m-2">Fan</button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <input className="h-10 mt-4 pl-2" type="text" placeholder="Email Address" />
        </div>
          <div className="flex justify-center items-center mt-3">
              <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg m-2">Subscribe</button>
            </div>
      </footer> */}

    </main>
  )
};
