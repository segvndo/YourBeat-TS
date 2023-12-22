import Mailing from './components/mailing';
import HomeCardContainer from './components/homeCardContainer';
import About from './components/about';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-6xl antialiased">
        YourBeat
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
    </main>
  )
};