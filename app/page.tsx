import Mailing from './components/Mailing';
import HomeCardContainer from './components/HomeCardContainer';
import About from './components/About';
import SoscMedia from './components/SoscMedia';
import HomeHeading from './components/HomeHeading';


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-6xl antialiased">
        YourBeat
        <HomeHeading />
      </h1>



      <div>
        <About />
      </div>

      <div>
        <HomeCardContainer />
      </div>

      <div>
        <Mailing />
      </div>

      <div>
        <SoscMedia />
      </div>
    </main>
  )
};